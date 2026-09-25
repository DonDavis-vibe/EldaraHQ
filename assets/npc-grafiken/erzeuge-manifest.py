# Erzeugt npc-token-bilder.js aus den Bildern in diesem Ordner - die Liste der
# vorgefertigten NPC-Kartentoken, die nscliste.js (Bildauswahl "Aus Galerie
# wählen") anbietet. Nach neuen/gelöschten/umbenannten Grafiken hier erneut
# laufen lassen: `python3 erzeuge-manifest.py`.
import os, json, re

ROOT = os.path.dirname(os.path.abspath(__file__))
PREFIX = "assets/npc-grafiken"

GRUPPEN = [
    ("Kapitäne Skullisland", "Kapitäne Skullisland"),
    ("Crew", "Crew"),
    ("Spieler", "Spieler"),
    ("gegner", "Gegner"),
    ("tokens", "Tokens"),
]

EXCLUDE_ROOT = {"see 2024.webp", "Die Flaggen Griffith.webp"}

UUID_RE = re.compile(r'^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$', re.I)

def huebscher_name(dateiname):
    name = os.path.splitext(dateiname)[0]
    # token-editor Upload-Dateien: alles vor dem Zeitstempel als Name nehmen,
    # Unterstriche zu Leerzeichen, Kategorie-Präfix (humanoid_ etc.) weg.
    m = re.match(r'^_token-editor_token-uploads_[a-z]+_(.+?)_\d{4}-\d{2}-\d{2}T', name)
    if m:
        name = m.group(1)
    # "token_1(1).webp" statt still zu "token 1" zu verschmelzen (Namenskollision
    # mit token_1.webp in der Auswahl) - Duplikat-Nummer sichtbar lassen.
    dup = re.search(r'\((\d+)\)$', name)
    name = re.sub(r'\(\d+\)$', '', name).strip()
    name = name.replace('_', ' ')
    if dup:
        name = f"{name} ({int(dup.group(1)) + 1})"
    if UUID_RE.match(name):
        return None  # Aufrufer nummeriert diese generisch durch
    return name.strip() or dateiname

manifest = []

for ordner, label in GRUPPEN:
    pfad = os.path.join(ROOT, ordner)
    if not os.path.isdir(pfad):
        continue
    dateien = sorted(f for f in os.listdir(pfad) if f.lower().endswith('.webp'))
    bilder = [{"pfad": f"{PREFIX}/{ordner}/{f}", "name": huebscher_name(f) or f} for f in dateien]
    manifest.append({"gruppe": label, "bilder": bilder})

root_dateien = sorted(
    f for f in os.listdir(ROOT)
    if os.path.isfile(os.path.join(ROOT, f)) and f.lower().endswith('.webp') and f not in EXCLUDE_ROOT
)
root_bilder = []
unbenannt_zaehler = 0
for f in root_dateien:
    name = huebscher_name(f)
    if name is None:
        unbenannt_zaehler += 1
        name = f"Portrait {unbenannt_zaehler}"
    root_bilder.append({"pfad": f"{PREFIX}/{f}", "name": name})
manifest.append({"gruppe": "Weitere Portraits", "bilder": root_bilder})

total = sum(len(g["bilder"]) for g in manifest)
print("Gruppen:", [(g["gruppe"], len(g["bilder"])) for g in manifest])
print("Gesamt:", total)

js = "// Automatisch generiert von erzeuge-manifest.py - Liste der vorgefertigten\n"
js += "// NPC-Kartentoken fuer die Bildauswahl in der NSC-Liste (nscliste.js:\n"
js += "// nscListeGaleriePicker). Nicht von Hand bearbeiten, sondern bei neuen\n"
js += "// Grafiken das Skript erneut laufen lassen.\n"
js += "const NPC_TOKEN_BILDER = " + json.dumps(manifest, ensure_ascii=False, indent=2) + ";\n"

with open(os.path.join(ROOT, "npc-token-bilder.js"), "w", encoding="utf-8") as f:
    f.write(js)

print("geschrieben:", os.path.join(ROOT, "npc-token-bilder.js"))
