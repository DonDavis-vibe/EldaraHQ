#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Liest die Talentbaum-Skilltabellen aus dem Regelwerk-5.1-Anhang
(hausregeln/quellen/Regelwerk 5.1 Anhang.pdf) und schreibt sie als
charakter.Talentbaum.skills in hausregeln/quellen/eldora-arrrrr.roh.json -
danach hausregeln/konvertiere-eldora.py laufen lassen.

Aufruf (aus dem Repo-Wurzelverzeichnis):

    python3 hausregeln/extrahiere-anhang51.py

Braucht pdfplumber (pip install pdfplumber) - nur für dieses einmalige
Extrahieren nötig, nicht fürs Tool selbst. Legt vor dem Überschreiben eine
Sicherung eldora-arrrrr.roh.json.vor-anhang51 an.

Umwandlung: Die Tabellen führen alle drei Stufen in einer Zelle ("2/3/4w10",
"3/7/10m", "20/30/40%"). Hier wird jede Zahlengruppe a/b/c pro Stufe auf ihren
i-ten Wert aufgelöst, damit unsere Stufen-Struktur (Reichweite/Schaden/Effekt
je Level) wie bisher gefüllt ist. Der Schadenstyp (physisch/magisch/heilung)
steht im Anhang nicht, er wird vom gleichnamigen Skill der alten Rohdaten
übernommen bzw. grob aus Reichweite/Art abgeleitet - er erscheint nur im
Tooltip.
"""

import json
import re
import shutil
import sys
from collections import Counter, OrderedDict
from pathlib import Path

import pdfplumber

HIER = Path(__file__).resolve().parent
QUELLEN = HIER / 'quellen'
PDF = QUELLEN / 'Regelwerk 5.1 Anhang.pdf'
TEXT = QUELLEN / 'anhang51.txt'
ROH = QUELLEN / 'eldora-arrrrr.roh.json'

# Seite (0-basiert), ab der die Talentbaum-Tabellen beginnen
START_SEITE = 38
# Überschriften im Anhang, die KEINE Äste sind
KEIN_AST = {'Hauptgruppen der Talente', 'Wesen/Monster-Talentbäume Spieler',
            'Wesen/Monster-Talentbaum Nicht-Spieler', 'Alle Skills'}


def norm(t):
    return re.sub(r'\s+', ' ', (t or '').replace('\n', ' ')).strip()


def ast_ueberschriften():
    # Inhaltsverzeichnis der Textfassung liefert die Astnamen; "Elben" fehlt dort.
    heads = set()
    for zeile in TEXT.read_text(encoding='utf-8').split('\n')[:140]:
        m = re.match(r'^\s*(.+?)\s*\.{3,}\s*\d+\s*$', zeile)
        if m:
            heads.add(m.group(1).strip())
    heads.add('Elben')
    return (heads - {'Inhalt'}) | KEIN_AST


def bekannte_namen(skills):
    return {re.sub(r'[^a-zäöüß0-9]', '', s['Name'].lower()) for s in skills}


def name_bereinigen(roh, bekannt):
    """Zellname mit Zeilenumbrüchen -> Name. Umbruch mitten im Wort
    ("Backpfeifengewitte|r") verbinden, sonst mit Leerzeichen."""
    zeilen = [z.strip() for z in (roh or '').split('\n') if z.strip()]
    if not zeilen:
        return ''
    name = zeilen[0]
    for z in zeilen[1:]:
        letztes_wort = name.split(' ')[-1]
        if len(z) <= 3 and z.islower() and len(letztes_wort) >= 10:
            name += z
        else:
            name += ' ' + z
    return name.strip()


GRUPPE = re.compile(r'(?<![\w/])(\d+(?:,\d+)?(?:/\d+(?:,\d+)?)+)(?![\d/])')


def stufe_aufloesen(text, i):
    """"2/3/4w10" -> Stufe i (0-basiert) -> "2w10"."""
    def ersetze(m):
        teile = m.group(1).split('/')
        return teile[min(i, len(teile) - 1)]
    return GRUPPE.sub(ersetze, text or '').strip()


def art_normalisieren(zelle):
    erstes = norm(zelle).split(' ')[0].lower()
    return {'aktiv': 'Aktiv', 'passiv': 'Passiv', 'extra': 'Extra'}.get(erstes, 'Aktiv')


def schadentyp_raten(art_zelle, rw, schaden, info):
    kopf = ' '.join([art_zelle, rw, schaden]).upper()
    if re.search(r'\bHL\b', kopf):
        return 'heilung'
    if 'magisch' in info.lower():
        return 'magisch'
    if re.search(r'\b(NK|FK)\b', rw.upper()) or re.search(r'\bNK\b|\bFK\b', schaden.upper()):
        return 'physisch'
    return 'keiner'


def extrahieren(alte_skills):
    heads = ast_ueberschriften()
    bekannt = bekannte_namen(alte_skills)
    typ_alt = {}
    for s in alte_skills:
        typ_alt.setdefault(s['Name'], s.get('schaden_typ'))

    pdf = pdfplumber.open(PDF)
    aktuell = None
    ergebnis = OrderedDict()
    for pn in range(START_SEITE, len(pdf.pages)):
        seite = pdf.pages[pn]
        tabellen = seite.find_tables()

        def in_tabelle(z):
            return any(t.bbox[0] - 2 <= z['x0'] and z['x1'] <= t.bbox[2] + 2
                       and t.bbox[1] - 2 <= z['top'] and z['bottom'] <= t.bbox[3] + 2 for t in tabellen)

        ereignisse = []
        for z in seite.extract_text_lines():
            t = z['text'].strip()
            if t in heads and not in_tabelle(z):
                ereignisse.append((z['top'], 'ast', t))
        for t in tabellen:
            ereignisse.append((t.bbox[1], 'tabelle', t))
        ereignisse.sort(key=lambda e: e[0])

        for _, art, wert in ereignisse:
            if art == 'ast':
                # Kapitelüberschriften ohne eigene Skills beenden den laufenden
                # Ast, sonst landet z.B. die Sammeltabelle "Alle Skills" im
                # letzten Ast.
                aktuell = None if wert in KEIN_AST else wert
                if aktuell:
                    ergebnis.setdefault(aktuell, [])
                continue
            if aktuell is None:
                continue
            for zeile in wert.extract():
                zeile = [x or '' for x in zeile]
                if len(zeile) < 6 or zeile[0].strip().lower() == 'name':
                    continue
                if not zeile[0].strip():
                    # Fortsetzung einer über den Seitenumbruch gerissenen Zeile
                    if ergebnis[aktuell]:
                        ergebnis[aktuell][-1]['info'] += ' ' + norm(' '.join(zeile[3:]))
                    continue
                ergebnis[aktuell].append({
                    'name': name_bereinigen(zeile[0], bekannt),
                    'art': zeile[1], 'rang': norm(zeile[2]),
                    'rw': norm(zeile[3]), 'schaden': norm(zeile[4]), 'info': norm(zeile[5]),
                })

    skills = []
    for ast, zeilen in ergebnis.items():
        for z in zeilen:
            if not z['name'] or z['name'] == '-' or not z['rang'].isdigit():
                continue
            schaden = '' if z['schaden'] == '-' else z['schaden']
            rw = '' if z['rw'] == '-' else z['rw']
            typ = typ_alt.get(z['name']) or schadentyp_raten(z['art'], rw, schaden, z['info'])
            stufen = []
            for i in range(3):
                stufen.append({
                    'level': i + 1,
                    'reichweite': stufe_aufloesen(rw, i),
                    'Schaden': stufe_aufloesen(schaden, i),
                    'Schaden_special': typ if schaden else '',
                    'special': stufe_aufloesen(z['info'], i),
                })
            skills.append({
                'Name': z['name'], 'info': z['info'], 'Ast': ast, 'Art': art_normalisieren(z['art']),
                'schaden_typ': typ, 'rang': int(z['rang']), 'skill_level': stufen,
            })
    return skills


def main():
    roh = json.loads(ROH.read_text(encoding='utf-8'))
    alt = roh['charakter']['Talentbaum']['skills']
    neu = extrahieren(alt)
    sicherung = ROH.with_name(ROH.name + '.vor-anhang51')
    if not sicherung.exists():
        shutil.copy(ROH, sicherung)
    roh['charakter']['Talentbaum']['skills'] = neu
    ROH.write_text(json.dumps(roh, ensure_ascii=False, indent=1) + '\n', encoding='utf-8', newline='\n')
    pro_ast = Counter(s['Ast'] for s in neu)
    print(f'OK: {len(neu)} Skills in {len(pro_ast)} Ästen nach {ROH.name} geschrieben (Sicherung: {sicherung.name})')
    for ast, n in pro_ast.items():
        if n != 14:
            print(f'  Hinweis: {ast} hat {n} Skills (nicht 14)')


if __name__ == '__main__':
    sys.exit(main())
