#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Baut das Web-Regelwerk für den Viewer (regelwerk.js) - nach dem Vorbild von
KINETIK (https://github.com/Rec0iL/KINETIK-PNP, scripts/build_rulebook_web.py):
statt eines PDF-Lesers gibt es das Regelwerk als HTML in Kapiteln und
Abschnitten. Das bleibt schnell, lässt sich durchsuchen und ist auf dem Handy
gut lesbar.

Quelle sind die Markdown-Dateien samt Bildern, aus denen auch die Regelwerk-PDFs
entstehen (Ordner mit RW 5.1.md bzw. Regelwerk 5.1 Anhang.md, project.json,
images/<schluessel>.jpg). Standardpfad: /mnt/LNXGames/vibe_coding/Eldara.

    pip install markdown Pillow
    python3 regelwerk/baue-web.py [--quelle /pfad/zu/Eldara]

Ausgabe: regelwerk/web/
    index.json        Bücher + Sprungtabellen (Skill/Eigenschaft -> Tabellenzeile)
    basis.json        Basis-Regelwerk (Kapitel, Abschnitte als HTML)
    anhang.json       Anhang (Lore & Skills)
    img/<buch>/*.webp Bilder, verkleinert

Skills und Besondere Eigenschaften werden gegen das Regelpaket
(hausregeln/eldora-arrrrr.js) abgeglichen; was keine Tabellenzeile findet, wird
am Ende aufgelistet. Nach neuen Fassungen des Regelwerks oder neuen Skills
(hausregeln/konvertiere-eldora.py) neu laufen lassen.

Die PDFs zum Herunterladen (regelwerk/rw51-basis.pdf, rw51-anhang.pdf) sind
verkleinerte Kopien der Original-PDFs, erzeugt mit:

    gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook \\
       -dColorImageResolution=110 -sOutputFile=regelwerk/rw51-anhang.pdf "<Anhang>.pdf"
"""

import argparse
import json
import re
import shutil
import sys
from pathlib import Path

import markdown
from PIL import Image

HIER = Path(__file__).resolve().parent
sys.path.insert(0, str(HIER))
from rbparse import parse, plain, slugify  # noqa: E402

WURZEL = HIER.parent
AUSGABE = HIER / 'web'
PAKET = WURZEL / 'hausregeln' / 'eldora-arrrrr.js'
STANDARD_QUELLE = Path('/mnt/LNXGames/vibe_coding/Eldara')

BUECHER = [
    # id, Ordner, Markdown-Datei, Anzeigename, Tabname, PDF zum Herunterladen
    ('basis', 'RW', 'RW 5.1.md', 'Basis-Regelwerk', 'Regelwerk', 'rw51-basis.pdf'),
    ('anhang', 'RW_Anhang', 'Regelwerk 5.1 Anhang.md', 'Anhang (Lore & Skills)', 'Anhang', 'rw51-anhang.pdf'),
]

# Bildbreiten in Pixel (Originale sind 1280-1600 breit) - Bilder sind Stimmung, keine Information
BREITE = {'cover': 900, 'ch': 1280, 'sec': 960}
WEBP_QUALITAET = 72


def norm(text):
    return re.sub(r'[^a-z0-9äöüß]', '', (text or '').lower())


def beschrifte_tabellen(html):
    """Breite Tabellen (ab 4 Spalten) bekommen die Klasse rb-karten und an jeder Zelle
    data-label mit der Spaltenüberschrift - das CSS (style.css, Container-Query) stellt
    sie in schmalen Leisten als Karten dar statt als seitwärts scrollende Tabelle."""
    def tabelle(m):
        t = m.group(0)
        kopf = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<th[^>]*>(.*?)</th>', t, re.S)]
        if len(kopf) < 4:
            return t
        def zeile(zm):
            n = iter(range(len(kopf)))
            def zelle(cm):
                i = next(n, None)
                if i is None or i == 0:
                    return cm.group(0)
                return f'<td data-label="{kopf[i]}"{cm.group(1)}>'
            return re.sub(r'<td([^>]*)>', zelle, zm.group(0))
        t = re.sub(r'<tr[^>]*>.*?</tr>', zeile, t, flags=re.S)
        return t.replace('<table>', '<table class="rb-karten">', 1)
    return re.sub(r'<table>.*?</table>', tabelle, html, flags=re.S)


def render(md):
    html = markdown.markdown(md, extensions=['tables', 'sane_lists'])
    html = beschrifte_tabellen(html)
    html = html.replace('<div class="tablewrap">', '')
    html = re.sub(r'(<table[^>]*>)', r'<div class="tablewrap">\1', html).replace('</table>', '</table></div>')
    return html


class Anker:
    """Setzt eindeutige IDs an Tabellenzeilen und merkt (Überschrift, erste Zelle) -> ID.

    Die Überschrift einer Zeile ist die letzte davor gesehene (h2-h6); am Anfang
    jedes Abschnitts gilt dessen Titel (der steht nicht im Abschnittstext)."""

    MUSTER = re.compile(
        r'(?P<kopf><h(?P<ebene>[2-6])[^>]*>(?P<kopftext>.*?)</h(?P=ebene)>)'
        r'|(?P<zeile><tr>)(?P<abstand>\s*)(?P<zelle1><td[^>]*>(?P<zelltext>.*?)</td>)', re.S)

    def __init__(self, buch):
        self.buch = buch
        self.aktuell = ''
        self.benutzt = set()
        self.zeilen = {}       # (norm(überschrift), norm(zelle)) -> id
        self.nur_zelle = {}    # norm(zelle) -> [ids]

    def beginne(self, titel):
        self.aktuell = norm(plain(titel))

    def verarbeite(self, html):
        def ersetze(m):
            if m.group('kopf'):
                self.aktuell = norm(re.sub(r'<[^>]+>', '', m.group('kopftext')))
                return m.group('kopf')
            zelle = norm(re.sub(r'<[^>]+>', '', m.group('zelltext')))
            basis = f"rb-r-{self.aktuell[:24]}-{zelle[:28]}"
            zid, n = basis, 2
            while zid in self.benutzt:
                zid, n = f'{basis}-{n}', n + 1
            self.benutzt.add(zid)
            self.zeilen.setdefault((self.aktuell, zelle), zid)
            self.nur_zelle.setdefault(zelle, []).append(zid)
            return f'<tr id="{zid}">{m.group("abstand")}{m.group("zelle1")}'
        return self.MUSTER.sub(ersetze, html)


def bild(quelle_ordner, buch, schluessel, art, geschrieben):
    """Konvertiert images/<schluessel>.jpg nach WebP; liefert {src,w,h} oder None."""
    jpg = quelle_ordner / 'images' / f'{schluessel}.jpg'
    if not jpg.exists():
        return None
    ziel = AUSGABE / 'img' / buch / f'{schluessel}.webp'
    if schluessel not in geschrieben:
        im = Image.open(jpg).convert('RGB')
        w = BREITE[art]
        if im.width > w:
            im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        im.save(ziel, 'WEBP', quality=WEBP_QUALITAET, method=6)
        geschrieben[schluessel] = im.size
    w, h = geschrieben[schluessel]
    return {'src': f'img/{buch}/{schluessel}.webp', 'w': w, 'h': h}


def buch_bauen(quelle, buch_id, ordner, datei, titel, tab, pdf):
    basis = quelle / ordner
    projekt = json.loads((basis / 'project.json').read_text(encoding='utf-8'))
    md = (basis / datei).read_text(encoding='utf-8')
    doc = parse(md, chapter_level=projekt.get('chapter_level') or None,
                appendix_patterns=projekt.get('appendix_patterns', []))
    (AUSGABE / 'img' / buch_id).mkdir(parents=True, exist_ok=True)
    geschrieben = {}
    anker = Anker(buch_id)

    kapitel = []
    for ch in doc.chapters:
        anker.beginne(ch.title)
        ch_html = anker.verarbeite(render(ch.intro_md))
        abschnitte = []
        for s in ch.sections:
            anker.beginne(s.title)
            abschnitte.append({
                'id': s.key, 'title': s.title, 'html': anker.verarbeite(render(s.body_md)),
                'image': bild(basis, buch_id, s.key, 'sec', geschrieben),
            })
        kapitel.append({
            'id': ch.key, 'number': ch.number, 'title': ch.title, 'subtitle': ch.subtitle, 'appendix': ch.appendix,
            'image': bild(basis, buch_id, ch.key, 'ch', geschrieben), 'html': ch_html, 'sections': abschnitte,
        })

    daten = {
        'id': buch_id, 'title': titel, 'tab': tab, 'kicker': projekt.get('kicker', ''),
        'tagline': projekt.get('tagline', ''), 'pdf': pdf,
        'cover': bild(basis, buch_id, 'cover', 'cover', geschrieben),
        'intro': render(doc.intro_md), 'chapters': kapitel,
    }
    (AUSGABE / f'{buch_id}.json').write_text(json.dumps(daten, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
    n_abschn = sum(len(c['sections']) for c in kapitel)
    print(f'{titel}: {len(kapitel)} Kapitel, {n_abschn} Abschnitte, {len(geschrieben)} Bilder')
    return anker


def paket_lesen():
    quelltext = PAKET.read_text(encoding='utf-8')
    anfang = quelltext.index('{', quelltext.index('hausregelPaketRegistrieren'))
    return json.loads(quelltext[anfang:quelltext.rindex('}') + 1])['talentbaum']


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--quelle', type=Path, default=STANDARD_QUELLE, help='Ordner mit RW/ und RW_Anhang/')
    args = ap.parse_args()

    if AUSGABE.exists():
        shutil.rmtree(AUSGABE)
    (AUSGABE / 'img').mkdir(parents=True)

    anker = {}
    buecher = []
    for buch_id, ordner, datei, titel, tab, pdf in BUECHER:
        anker[buch_id] = buch_bauen(args.quelle, buch_id, ordner, datei, titel, tab, pdf)
        buecher.append({'id': buch_id, 'title': titel, 'tab': tab, 'pdf': pdf})

    tb = paket_lesen()
    skills, fehlt = {}, []
    for s in tb['skills']:
        ziel = norm(s.get('form') or s['ast'])
        zid = anker['anhang'].zeilen.get((ziel, norm(s['name'])))
        if zid:
            skills[f"{s['ast']}::{s['name']}"] = zid
        else:
            fehlt.append(f"{s['ast']}::{s['name']}")

    eigenschaften, eig_fehlt = {}, []
    for e in tb.get('eigenschaften', []):
        zid = anker['basis'].zeilen.get((norm('Besondere Eigenschaften'), norm(e['name'])))
        if not zid:
            treffer = anker['basis'].nur_zelle.get(norm(e['name']), [])
            zid = treffer[0] if treffer else None
        if zid:
            eigenschaften[e['name']] = ['basis', zid]
        else:
            eig_fehlt.append(e['name'])

    index = {'books': buecher, 'skills': {k: ['anhang', v] for k, v in skills.items()}, 'eigenschaften': eigenschaften}
    (AUSGABE / 'index.json').write_text(json.dumps(index, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')

    groesse = sum(f.stat().st_size for f in AUSGABE.rglob('*') if f.is_file())
    print(f'OK: {AUSGABE.relative_to(WURZEL)} ({groesse // 1024} KB gesamt)')
    print(f'Skills mit Tabellenzeile: {len(skills)} von {len(tb["skills"])}; Eigenschaften: {len(eigenschaften)} von {len(tb.get("eigenschaften", []))}')
    if fehlt:
        print('Ohne Zeile:', ', '.join(fehlt[:40]), '...' if len(fehlt) > 40 else '')
    if eig_fehlt:
        print('Eigenschaften ohne Zeile:', ', '.join(eig_fehlt))


if __name__ == '__main__':
    sys.exit(main())
