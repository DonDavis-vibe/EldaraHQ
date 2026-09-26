# Erzeugt battlemap-bilder.js aus den Bildern in diesem Ordner - die Liste der
# vorgefertigten Kartenhintergründe, die karten.js (Bildauswahl "Aus Galerie
# wählen" bei "Bild laden") dem SL anbietet. Nach neuen/gelöschten/umbenannten
# Grafiken hier erneut laufen lassen: `python3 erzeuge-manifest.py`.
import os, json, re

ROOT = os.path.dirname(os.path.abspath(__file__))
PREFIX = "assets/npc-grafiken/battlemaps"
EXTENSIONS = ('.webp', '.png', '.jpg', '.jpeg')

# Dateinamen, die selbst schon eindeutig auf eine KI-Generierungs-Charge oder
# einen bedeutungslosen Slug hinweisen - dafür lohnt sich keine Wort-für-Wort-
# Übersetzung des Dateinamens, die wirkt nur verwirrend ("15 47 53").
GENERISCH_RE = re.compile(r'^(chatgpt image|city-walls-\d+x\d+)', re.I)

def huebscher_name(dateiname, zaehler):
    name = os.path.splitext(dateiname)[0]
    if GENERISCH_RE.match(name):
        return f"Battlemap {zaehler}"
    name = name.replace('_', ' ').replace('-', ' ')
    name = re.sub(r'\s+', ' ', name).strip()
    return name or f"Battlemap {zaehler}"

dateien = sorted(
    f for f in os.listdir(ROOT)
    if os.path.isfile(os.path.join(ROOT, f)) and f.lower().endswith(EXTENSIONS)
)

bilder = []
unbenannt_zaehler = 0
for f in dateien:
    unbenannt_zaehler += 1
    bilder.append({"pfad": f"{PREFIX}/{f}", "name": huebscher_name(f, unbenannt_zaehler)})

print("Gesamt:", len(bilder))

js = "// Automatisch generiert von erzeuge-manifest.py - Liste der vorgefertigten\n"
js += "// Kartenhintergründe fuer die Bildauswahl beim Kartenanlegen (karten.js:\n"
js += "// karteGaleriePicker). Nicht von Hand bearbeiten, sondern bei neuen\n"
js += "// Grafiken das Skript erneut laufen lassen.\n"
js += "const BATTLEMAP_BILDER = " + json.dumps(bilder, ensure_ascii=False, indent=2) + ";\n"

with open(os.path.join(ROOT, "battlemap-bilder.js"), "w", encoding="utf-8") as f:
    f.write(js)

print("geschrieben:", os.path.join(ROOT, "battlemap-bilder.js"))
