#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Erzeugt regelwerk/index.js fuer den Regelwerk-Viewer (regelwerk.js):

  - Inhaltsverzeichnis je Buch (Kapitel = 44-pt-Zeilen, Abschnitte = 14-pt-Zeilen)
  - Seitentext fuer die Volltextsuche
  - Zuordnung Skill -> Seite im Anhang und Besondere Eigenschaft -> Seite
    (Sprung-Knoepfe im Talentbaum)

Aufruf (aus dem Repo-Wurzelverzeichnis):

    python3 regelwerk/baue-index.py

Liest die ORIGINAL-PDFs aus hausregeln/quellen/ (nicht im Repo, siehe
.gitignore) - die verkleinerten Kopien in regelwerk/ haben dieselben Seiten.
Das Verkleinern selbst:

    gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook \
       -dColorImageResolution=110 -sOutputFile=regelwerk/rw51-anhang.pdf \
       "hausregeln/quellen/Regelwerk 5.1 Anhang_vis.pdf"

Braucht pdfplumber (nur fuer diesen Lauf, nicht fuers Tool selbst). Nach einer
neuen Fassung der PDFs oder neuen Skills (konvertiere-eldora.py) neu laufen
lassen. Skills ohne Treffer werden am Ende aufgelistet.
"""

import json
import re
import sys
from pathlib import Path

import pdfplumber

WURZEL = Path(__file__).resolve().parent.parent
QUELLEN = WURZEL / 'hausregeln' / 'quellen'
PAKET = WURZEL / 'hausregeln' / 'eldora-arrrrr.js'
AUSGABE = WURZEL / 'regelwerk' / 'index.js'

BUECHER = [
    ('basis', 'Basis-Regelwerk', 'RW 5.1_2(Korrigiert)_vis.pdf', 'rw51-basis.pdf'),
    ('anhang', 'Anhang (Lore & Skills)', 'Regelwerk 5.1 Anhang_vis.pdf', 'rw51-anhang.pdf'),
]

# Schriftgroessen der Ueberschriften in den WeasyPrint-PDFs
GROESSE_KAPITEL = 40
GROESSE_ABSCHNITT = 13


def norm(text):
    """Nur Buchstaben/Ziffern, klein - robust gegen Umbrueche und Leerzeichen."""
    return re.sub(r'[^a-z0-9äöüß]', '', (text or '').lower())


def zeilen_nach_groesse(seite, min_groesse):
    woerter = [w for w in seite.extract_words(extra_attrs=['size']) if w['size'] >= min_groesse]
    zeilen = {}
    for w in woerter:
        zeilen.setdefault((round(w['top'] / 4), round(w['size'])), []).append(w)
    ergebnis = []
    for (_, groesse), ws in sorted(zeilen.items()):
        ws.sort(key=lambda w: w['x0'])
        ergebnis.append((groesse, ' '.join(w['text'] for w in ws), min(w['top'] for w in ws),
                         min(w['x0'] for w in ws), max(w['x1'] for w in ws)))
    return ergebnis


def astzeilen(seite, astnamen):
    """Zeilen, die nur aus einem Talentbaum-Namen in Grossbuchstaben bestehen -
    unabhaengig von der Schriftgroesse (Voodoo-Ueberschriften sind kleiner)."""
    ergebnis = []
    for z in seite.extract_text_lines():
        t = z['text'].strip()
        if t.isupper() and norm(t) in astnamen:
            ergebnis.append(t)
    return ergebnis


def buch_lesen(schluessel, titel, datei, astnamen):
    pdf = pdfplumber.open(QUELLEN / datei)
    toc, texte, ueberschriften, zellen = [], [], [], {}
    for nr, seite in enumerate(pdf.pages, 1):
        # Erste Tabellenspalte (Skill-/Eigenschaftsnamen) zellweise: umgebrochene
        # Namen ("Ich bin dann mal | weg") zerreissen im Seitentext.
        zellen[nr] = {norm(z[0]) for t in seite.extract_tables() for z in t if z and z[0]}
        texte.append(re.sub(r'\s+', ' ', seite.extract_text() or '').strip())
        kapitel_teile = []
        abschnitte = []
        letzter_top = letzter_x1 = None
        for groesse, text, top, x0, x1 in zeilen_nach_groesse(seite, GROESSE_ABSCHNITT):
            if groesse >= GROESSE_KAPITEL:
                if len(text) > 1:  # Initiale (Zierbuchstabe) auslassen
                    kapitel_teile.append(text)
            elif groesse >= GROESSE_ABSCHNITT and len(text) > 2:
                # Zusammenfuehren: (a) Teile derselben Zeile (Emoji-Schrift sitzt 0,6 pt
                # anders) bei kleinem Abstand, (b) umgebrochene Ueberschrift direkt darunter.
                # Gleiche Hoehe mit grossem Abstand = andere Spalte, getrennt lassen.
                gleiche_zeile = (letzter_top is not None and abs(top - letzter_top) < 3
                                 and x0 - letzter_x1 < 20)
                umbruch = letzter_top is not None and 4 < top - letzter_top < 24
                if abschnitte and (gleiche_zeile or umbruch):
                    abschnitte[-1] += ' ' + text
                else:
                    abschnitte.append(text)
                letzter_top, letzter_x1 = top, x1
        for t in astzeilen(seite, astnamen):
            if t not in abschnitte:
                abschnitte.append(t)
        if nr == 1:
            continue  # Titelseite
        if kapitel_teile:
            toc.append({'t': ' '.join(kapitel_teile), 's': nr, 'e': 1})
        for text in abschnitte:
            toc.append({'t': text, 's': nr, 'e': 2})
        ueberschriften.append((nr, [norm(a) for a in abschnitte]))
    return {'titel': titel, 'datei': schluessel and datei, 'seiten': len(pdf.pages),
            'toc': toc}, texte, ueberschriften, zellen


def paket_lesen():
    quelltext = PAKET.read_text(encoding='utf-8')
    # hausregelPaketRegistrieren({...}); -> das JSON-Objekt
    anfang = quelltext.index('{', quelltext.index('hausregelPaketRegistrieren'))
    ende = quelltext.rindex('}')
    return json.loads(quelltext[anfang:ende + 1])


def aktive_ueberschriften(ueberschriften):
    """Pro Seite: Ueberschriften auf der Seite + die zuletzt davor gesehene
    (ein Talentbaum laeuft oft ueber mehrere Seiten)."""
    ergebnis, letzte = {}, None
    for nr, heads in ueberschriften:
        aktiv = set(heads)
        if letzte:
            aktiv.add(letzte)
        ergebnis[nr] = aktiv
        if heads:
            letzte = heads[-1]
    return ergebnis


def main():
    paket = paket_lesen()
    tb = paket['talentbaum']
    astnamen = {norm(s['form'] if s.get('form') else s['ast']) for s in tb['skills']}
    buecher, texte, aktiv, tabellenzellen = {}, {}, {}, {}
    for schluessel, titel, quelle, ziel in BUECHER:
        info, text, heads, zellen = buch_lesen(schluessel, titel, quelle, astnamen)
        info['datei'] = ziel
        buecher[schluessel] = info
        texte[schluessel] = text
        aktiv[schluessel] = aktive_ueberschriften(heads)
        tabellenzellen[schluessel] = zellen
        print(f'{titel}: {info["seiten"]} Seiten, {len(info["toc"])} Inhaltseintraege')

    anhang_norm = [norm(t) for t in texte['anhang']]
    basis_norm = [norm(t) for t in texte['basis']]

    skills, fehlt = {}, []
    for s in tb['skills']:
        # Chimaeren-Formen stehen im Anhang unter ihrer Form, nicht unter dem Grundbaum
        astnamen = {norm(s.get('form') or s['ast']), norm(s['ast'])}
        name = norm(s['name'])
        zellen = tabellenzellen['anhang']
        anfang = norm(' '.join(s['name'].split()[:2]))
        erstes = norm(s['name'].split()[0])
        # Stufen von genau nach grob: Tabellenzelle, Name im Seitentext, Wortanfang
        # (Namen brechen in Zellen um und zerreissen im Seitentext). Je Stufe
        # zaehlt nur eine Seite, auf der die Ueberschrift des Talentbaums aktiv ist.
        stufen = [
            [nr for nr in sorted(zellen) if nr >= 29 and name in zellen[nr]],
            [i + 1 for i, t in enumerate(anhang_norm) if name in t and i + 1 >= 29],
            [i + 1 for i, t in enumerate(anhang_norm) if anfang in t and i + 1 >= 29],
            [i + 1 for i, t in enumerate(anhang_norm) if len(erstes) >= 6 and erstes in t and i + 1 >= 29],
        ]
        treffer = None
        for kandidaten in stufen:
            treffer = next((p for p in kandidaten if aktiv['anhang'].get(p, set()) & astnamen), None)
            if treffer is not None:
                break
        if treffer is None:  # kein Raten bei Fehlzuordnung - lieber melden
            fehlt.append(f"{s['ast']}::{s['name']}")
            continue
        skills[f"{s['ast']}::{s['name']}"] = treffer

    eigenschaften, eig_fehlt = {}, []
    for e in tb.get('eigenschaften', []):
        name = norm(e['name'])
        gefunden = None
        # Namen koennen im Fliesstext umbrechen - dann zaehlt der Wortanfang
        anfang = norm(' '.join(e['name'].split()[:2]))
        for such in (name, anfang, norm(e['name'].split()[0])):
            for buch, normiert in (('basis', basis_norm), ('anhang', anhang_norm)):
                for i, t in enumerate(normiert, 1):
                    if such in t and i >= (19 if buch == 'basis' else 1):
                        gefunden = [buch, i]
                        break
                if gefunden:
                    break
            if gefunden:
                break
        if gefunden:
            eigenschaften[e['name']] = gefunden
        else:
            eig_fehlt.append(e['name'])

    index = {'buecher': buecher, 'text': texte, 'skills': skills, 'eigenschaften': eigenschaften}
    AUSGABE.write_text(
        '// Automatisch erzeugt von regelwerk/baue-index.py - nicht von Hand aendern.\n'
        'const RW_INDEX = ' + json.dumps(index, ensure_ascii=False, separators=(',', ':')) + ';\n',
        encoding='utf-8', newline='\n')
    print(f'OK: {AUSGABE.name} geschrieben ({AUSGABE.stat().st_size // 1024} KB)')
    print(f'Skills mit Seite: {len(skills)} von {len(tb["skills"])}; Eigenschaften: {len(eigenschaften)} von {len(tb.get("eigenschaften", []))}')
    if fehlt:
        print('Ohne Seite:', ', '.join(fehlt[:40]), '...' if len(fehlt) > 40 else '')
    if eig_fehlt:
        print('Eigenschaften ohne Seite:', ', '.join(eig_fehlt))


if __name__ == '__main__':
    sys.exit(main())
