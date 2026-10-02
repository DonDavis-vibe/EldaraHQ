// Regelpaket "Eldara – Version Arrrrr" - GENERIERT aus quellen/eldora-arrrrr.roh.json
// durch hausregeln/konvertiere-eldora.py. Nicht von Hand bearbeiten: Änderungen
// in die Rohdatei bzw. ins Skript und neu generieren.
//
// Wird von hausregeln.js bei Bedarf nachgeladen (nicht in index.html eingebunden).
hausregelPaketRegistrieren({
 "id": "eldora-arrrrr",
 "name": "Eldara – Version Arrrrr",
 "version": "2026-10-02 (Talentbaum + Besondere Eigenschaften: RW 5.1 Anhang; Talente/Punkte: RW 4.3)",
 "system": "How to be a hero - Eldora Version Arrrrr",
 "beschreibung": "Piraten-Hausregeln einer HTBAH-Runde: feste Talentliste, progressive Talentkosten, Rang- und Skillpunkte sowie ein Talentbaum mit drei Hauptbäumen und einem Wesen je Charakter.",
 "waehrung": "Tchambas",
 "lebenspunkte": 100,
 "talente": {
  "handeln": [
   {
    "id": "athletik",
    "name": "Athletik",
    "beschreibung": "Ausdauer, Rennen, Reflexe, Springen"
   },
   {
    "id": "angel",
    "name": "Angel",
    "beschreibung": "1W4 Nahrungsrationen pro zwei Stunden (Angeln-Wurf)"
   },
   {
    "id": "entern",
    "name": "Entern",
    "beschreibung": "Treffer: Startposition auf dem feindlichen Deck frei wählen. Kritischer Treffer: zusätzlicher Angriff vor Kampfbeginn."
   },
   {
    "id": "fernkampf",
    "name": "Fernkampf",
    "beschreibung": "Bogen, Armbrust, Pistolen, Wurfwaffen, Werfen und Zielen"
   },
   {
    "id": "handwerk",
    "name": "Handwerk",
    "beschreibung": "Umgang mit Werkzeugen"
   },
   {
    "id": "heimlich",
    "name": "Heimlich",
    "beschreibung": "Schleichen, Stehlen, Verkleiden"
   },
   {
    "id": "zaehigkeit",
    "name": "Zähigkeit",
    "beschreibung": "Gift, Essen, Flüche widerstehen"
   },
   {
    "id": "kochen",
    "name": "Kochen",
    "beschreibung": "Kochprobe → anschließend Tabelle „Kochen\"",
    "tabelle": "table_kochen"
   },
   {
    "id": "nahkampf",
    "name": "Nahkampf",
    "beschreibung": "Faustkampf, Schwertkampf, Hieb- & Stichwaffen"
   },
   {
    "id": "reiten",
    "name": "Reiten",
    "beschreibung": "Sitz, Führung, Manöver"
   },
   {
    "id": "schiffe-steuern",
    "name": "Schiffe steuern",
    "beschreibung": "Ruder, Segel, Crewführung im Manöver"
   },
   {
    "id": "schloesser-knacken",
    "name": "Schlösser knacken",
    "beschreibung": "Dietriche, Mechaniken, Fingergefühl"
   },
   {
    "id": "schwimmen",
    "name": "Schwimmen",
    "beschreibung": "Schwimmen, Tauchen"
   },
   {
    "id": "staerke",
    "name": "Stärke",
    "beschreibung": "Kraft, Heben, Zerbrechen"
   },
   {
    "id": "wahrnehmung",
    "name": "Wahrnehmung",
    "beschreibung": "Sehen, Hören, Spüren von Gefahr"
   }
  ],
  "wissen": [
   {
    "id": "chemie",
    "name": "Chemie",
    "beschreibung": "Reaktionen, Pulver, Mischungen"
   },
   {
    "id": "gassenwissen",
    "name": "Gassenwissen",
    "beschreibung": "Gerüchte, dubiose Kontakte, Informationen"
   },
   {
    "id": "heraldik",
    "name": "Heraldik",
    "beschreibung": "Hofprotokolle & edle Häuser"
   },
   {
    "id": "lesen-schreiben",
    "name": "Lesen/Schreiben",
    "beschreibung": "Ab 20: Lesen & Schreiben (Grundfertigkeit). Ab 30/60/90/95/99 zusätzlich Muttersprache +1/+2/+3/+4/+5."
   },
   {
    "id": "medizin",
    "name": "Medizin",
    "beschreibung": "Schulmedizin, Behandlung, Operationen. Heilwurf: 1W10 + 1W10 pro vollen 10 Punkten unter dem Medizinwert; krit. Erfolg ×2."
   },
   {
    "id": "naturkunde",
    "name": "Naturkunde",
    "beschreibung": "Flora & Fauna (theoretisch)"
   },
   {
    "id": "nautik",
    "name": "Nautik",
    "beschreibung": "Karten lesen, Strecken berechnen, Position bestimmen"
   },
   {
    "id": "ueberleben",
    "name": "Überleben",
    "beschreibung": "Shelterbau, Nahrung, Feuer"
   },
   {
    "id": "technik",
    "name": "Technik",
    "beschreibung": "Maschinen & Apparate"
   },
   {
    "id": "tiere-zaehmen",
    "name": "Tiere zähmen",
    "beschreibung": "Beruhigen, Dressieren, Vertrauen"
   },
   {
    "id": "voodoo",
    "name": "Voodoo",
    "beschreibung": "Rituale & Zauber der alten Wege"
   }
  ],
  "soziales": [
   {
    "id": "auftritt",
    "name": "Auftritt",
    "beschreibung": "Präsenz, Haltung, Wirkung"
   },
   {
    "id": "beruhigen",
    "name": "Beruhigen",
    "beschreibung": "Eskalation verhindern, Ruhe finden"
   },
   {
    "id": "verhandeln",
    "name": "Verhandeln",
    "beschreibung": "Konflikte, Diplomatie"
   },
   {
    "id": "einschuechtern",
    "name": "Einschüchtern",
    "beschreibung": "Angst als Werkzeug. Bei Erfolg: Betroffene (10m Umkreis) erhalten -1m Bewegung für 1W4 Runden."
   },
   {
    "id": "feilschen",
    "name": "Feilschen",
    "beschreibung": "Beim (Ver-)Kauf das beste Angebot"
   },
   {
    "id": "flirten",
    "name": "Flirten",
    "beschreibung": "Charme & Verführung"
   },
   {
    "id": "willenskraft",
    "name": "Willenskraft",
    "beschreibung": "Standhaftigkeit & innere Stärke - Widerstand gegen Einschüchtern, Überreden, Motivieren, Wesens-/Monster-Instinkte und übernatürliche Anblicke."
   },
   {
    "id": "luegen",
    "name": "Lügen",
    "beschreibung": "Täuschung & Ablenkung"
   },
   {
    "id": "menschenkenntnis",
    "name": "Menschenkenntnis",
    "beschreibung": "Motive erkennen, Einschätzen"
   },
   {
    "id": "motivieren",
    "name": "Motivieren",
    "beschreibung": "Feuer entfachen. Bei Erfolg: Verbündete (10m Umkreis) erhalten Boni."
   },
   {
    "id": "musizieren",
    "name": "Musizieren",
    "beschreibung": "Auftrittsprobe → anschließend Tabelle „Musizieren\"",
    "tabelle": "table_musizieren"
   },
   {
    "id": "ueberreden",
    "name": "Überreden",
    "beschreibung": "Zunge statt Klinge. Bei Erfolg: Du hältst jemanden von einer Aktion ab oder lenkst sie um."
   },
   {
    "id": "zechen",
    "name": "Zechen",
    "beschreibung": "Zechprobe → anschließend Tabelle „Zechen\"",
    "tabelle": "table_zechen"
   }
  ]
 },
 "punkte": {
  "maxTalentpunkte": 400,
  "kostenStaffel": [
   {
    "bis": 30,
    "kosten": 1
   },
   {
    "bis": 60,
    "kosten": 2
   },
   {
    "bis": 90,
    "kosten": 4
   },
   {
    "bis": 99,
    "kosten": 10
   }
  ],
  "skillpunktSchwellen": [
   1,
   10,
   20,
   30,
   40,
   50,
   60,
   70,
   80,
   90,
   91,
   92,
   93,
   94,
   95,
   96,
   97,
   98,
   99
  ]
 },
 "talentbaum": {
  "talentbaumStand": "5.1-2026-10-02",
  "anzahlHauptbaeume": 3,
  "anzahlWesen": 1,
  "maxLevel": 3,
  "kosten": {
   "jedesLevel": "skillpunkt"
  },
  "freischaltung": {
   "modus": "vorRang",
   "benoetigt": 2
  },
  "hauptbaeume": [
   "Nahkampf Klingen",
   "Nahkampf Fäuste",
   "Stärke",
   "Fernkampf",
   "Athletik",
   "Voodoo Ritualklinge",
   "Voodoo Flucherspucker",
   "Einschüchtern",
   "Heimlichkeit defensiv",
   "Heimlichkeit offensiv",
   "Medizin",
   "Motivieren"
  ],
  "baumTalent": {
   "Nahkampf Klingen": "Nahkampf",
   "Nahkampf Fäuste": "Nahkampf",
   "Stärke": "Stärke",
   "Fernkampf": "Fernkampf",
   "Athletik": "Athletik",
   "Voodoo Ritualklinge": "Voodoo",
   "Voodoo Flucherspucker": "Voodoo",
   "Einschüchtern": "Einschüchtern",
   "Heimlichkeit defensiv": "Heimlich",
   "Heimlichkeit offensiv": "Heimlich",
   "Medizin": "Medizin",
   "Motivieren": "Motivieren"
  },
  "wesen": [
   "Arkaner Freibeuter",
   "Dämonenjäger",
   "Fluchbrecher",
   "Hitzeklinge",
   "Kultist",
   "Pestbringer",
   "Rum-Prediger",
   "Seher der Tiefsee",
   "Sturmwüter",
   "Tiefseepirat",
   "Wellenringer",
   "Mensch"
  ],
  "weitereAeste": [
   "Abgrund Jäger",
   "Arkane Chimäre",
   "Blutmagier",
   "Brandstifter der See",
   "Divinius Chimäre",
   "Drache",
   "Druide",
   "Dämon",
   "Echsenmensch",
   "Eismeister der See",
   "Elben",
   "Elektro Chimäre",
   "Engel",
   "Feuer Chimäre",
   "Frost Chimäre",
   "Geist",
   "Gift Chimäre",
   "Gott/ Halbgott",
   "Guhl",
   "Heilige Chimäre",
   "Hexe / Hexer",
   "Naga",
   "OrcaLord",
   "Priester / Mönch",
   "Rattenmensch",
   "Schattenskelett",
   "Seelenrufer",
   "Sirene",
   "Skelett Chimäre",
   "Spinnenmensch",
   "Steintroll",
   "Sturmrufer",
   "Tiermensch",
   "Traumaturge",
   "Vampir",
   "Wald Chimäre",
   "Wasser Chimäre",
   "Wertitan",
   "Werwolf",
   "Zombie",
   "Zwerg"
  ],
  "skills": [
   {
    "name": "Bodyslam",
    "ast": "Athletik",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 1/2/3w4 Meter zurück",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10",
      "schadenArt": "physisch",
      "effekt": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 1w4 Meter zurück"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10",
      "schadenArt": "physisch",
      "effekt": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 2w4 Meter zurück"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10",
      "schadenArt": "physisch",
      "effekt": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 3w4 Meter zurück"
     }
    ]
   },
   {
    "name": "Fliegender Bulle",
    "ast": "Athletik",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Dein Schlafwurf wird für den Angreifer zu 10/20/30% erschwert.",
    "stufen": [
     {
      "level": 1,
      "schaden": "-Schlaf +Willenskraft",
      "effekt": "Dein Schlafwurf wird für den Angreifer zu 10% erschwert."
     },
     {
      "level": 2,
      "schaden": "-Schlaf +Willenskraft",
      "effekt": "Dein Schlafwurf wird für den Angreifer zu 20% erschwert."
     },
     {
      "level": 3,
      "schaden": "-Schlaf +Willenskraft",
      "effekt": "Dein Schlafwurf wird für den Angreifer zu 30% erschwert."
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Athletik",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Ich bin dann mal weg",
    "ast": "Athletik",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Du wirst für 1/2/3 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 1 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 2 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 3 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Athletik",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Ablenken",
    "ast": "Athletik",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Zu 30/60/90 % laufen deine Gegner 1/1/2 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 10/15/20 zusätzliche Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m UK",
      "schaden": "+10 RÜ",
      "effekt": "Zu 30 % laufen deine Gegner 1 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 10 zusätzliche Rüstung."
     },
     {
      "level": 2,
      "reichweite": "7m UK",
      "schaden": "+15 RÜ",
      "effekt": "Zu 60 % laufen deine Gegner 1 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 15 zusätzliche Rüstung."
     },
     {
      "level": 3,
      "reichweite": "10m UK",
      "schaden": "+20 RÜ",
      "effekt": "Zu 90 % laufen deine Gegner 2 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 20 zusätzliche Rüstung."
     }
    ]
   },
   {
    "name": "Dazwischenwerfen",
    "ast": "Athletik",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Wird ein Verbündeter getroffen, bewegst du dich zu ihm und erleidest den Treffer an seiner Stelle.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "Treffer übernehmen",
      "effekt": "Wird ein Verbündeter getroffen, bewegst du dich zu ihm und erleidest den Treffer an seiner Stelle."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "Treffer übernehmen",
      "effekt": "Wird ein Verbündeter getroffen, bewegst du dich zu ihm und erleidest den Treffer an seiner Stelle."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "Treffer übernehmen",
      "effekt": "Wird ein Verbündeter getroffen, bewegst du dich zu ihm und erleidest den Treffer an seiner Stelle."
     }
    ]
   },
   {
    "name": "Letzte Chance",
    "ast": "Athletik",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Wenn deine Lebenspunkte kleiner gleich 10 sind, dann kannst du dich heilen und bekommst Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL +3w10 +10 RÜ",
      "schadenArt": "heilung",
      "effekt": "Wenn deine Lebenspunkte kleiner gleich 10 sind, dann kannst du dich heilen und bekommst Rüstung."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL +4w10 +10 RÜ",
      "schadenArt": "heilung",
      "effekt": "Wenn deine Lebenspunkte kleiner gleich 10 sind, dann kannst du dich heilen und bekommst Rüstung."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL +5w10 +10 RÜ",
      "schadenArt": "heilung",
      "effekt": "Wenn deine Lebenspunkte kleiner gleich 10 sind, dann kannst du dich heilen und bekommst Rüstung."
     }
    ]
   },
   {
    "name": "Ruckzuckhieb",
    "ast": "Athletik",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "3w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "4w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "5w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     }
    ]
   },
   {
    "name": "Blitzangriff",
    "ast": "Athletik",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "3/4/5 Gegner im Laufweg werden getroffen. Jeder erleide Schaden, und wird zu 20/30/40% gestunnt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "5w10 +1ST",
      "schadenArt": "magisch",
      "effekt": "3 Gegner im Laufweg werden getroffen. Jeder erleide Schaden, und wird zu 20% gestunnt."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "6w10 +1ST",
      "schadenArt": "magisch",
      "effekt": "4 Gegner im Laufweg werden getroffen. Jeder erleide Schaden, und wird zu 30% gestunnt."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "7w10 +1ST",
      "schadenArt": "magisch",
      "effekt": "5 Gegner im Laufweg werden getroffen. Jeder erleide Schaden, und wird zu 40% gestunnt."
     }
    ]
   },
   {
    "name": "Klon",
    "ast": "Athletik",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "LP 50/75/100% des Lebens 4/5/6w10 Schaden Können keine Skills nutzen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "1 Klone für 2 Runden",
      "schadenArt": "physisch",
      "effekt": "LP 50% des Lebens 4w10 Schaden Können keine Skills nutzen."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "2 Klone für 2 Runden",
      "schadenArt": "physisch",
      "effekt": "LP 75% des Lebens 5w10 Schaden Können keine Skills nutzen."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "2 Klone für 3 Runden",
      "schadenArt": "physisch",
      "effekt": "LP 100% des Lebens 6w10 Schaden Können keine Skills nutzen."
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Athletik",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Lichtgeschwindigkeit",
    "ast": "Athletik",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du kannst 2/3/4 deiner Fähigkeiten hintereinander einsetzen. Die Fähigkeiten Stufe ist die gleiche wie die von Lichtgeschwindigkeit.",
    "stufen": [
     {
      "level": 1,
      "schaden": "2 Fähigkeiten",
      "effekt": "Du kannst 2 deiner Fähigkeiten hintereinander einsetzen. Die Fähigkeiten Stufe ist die gleiche wie die von Lichtgeschwindigkeit."
     },
     {
      "level": 2,
      "schaden": "3 Fähigkeiten",
      "effekt": "Du kannst 3 deiner Fähigkeiten hintereinander einsetzen. Die Fähigkeiten Stufe ist die gleiche wie die von Lichtgeschwindigkeit."
     },
     {
      "level": 3,
      "schaden": "4 Fähigkeiten",
      "effekt": "Du kannst 4 deiner Fähigkeiten hintereinander einsetzen. Die Fähigkeiten Stufe ist die gleiche wie die von Lichtgeschwindigkeit."
     }
    ]
   },
   {
    "name": "Zweite Dimension",
    "ast": "Athletik",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du erhältst Rüstung.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+10 RÜ",
      "effekt": "Du erhältst Rüstung."
     },
     {
      "level": 2,
      "schaden": "+15 RÜ",
      "effekt": "Du erhältst Rüstung."
     },
     {
      "level": 3,
      "schaden": "+20 RÜ",
      "effekt": "Du erhältst Rüstung."
     }
    ]
   },
   {
    "name": "Backpfeifengewitter",
    "ast": "Einschüchtern",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Trifft 2/2/3 Ziele in einer Reihe",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK + 2w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK + 3w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK + 4w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 3 Ziele in einer Reihe"
     }
    ]
   },
   {
    "name": "Blutiger Zorn",
    "ast": "Einschüchtern",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2/1/1 Blutungen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2 Blutungen."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     }
    ]
   },
   {
    "name": "Schrecken der Meere",
    "ast": "Einschüchtern",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Nach misslungenem WW -5/10/15 für 1/1/2 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "1 Gegner fliehen",
      "effekt": "Nach misslungenem WW -5 für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "2 Gegner fliehen",
      "effekt": "Nach misslungenem WW -10 für 1 Runden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "3 Gegner fliehen",
      "effekt": "Nach misslungenem WW -15 für 2 Runden."
     }
    ]
   },
   {
    "name": "Verkrüppeln",
    "ast": "Einschüchtern",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "BW -2/3/4m, -5/10/15 Handeln für 1/2/3 Runden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +2w10",
      "schadenArt": "physisch",
      "effekt": "BW -2m, -5 Handeln für 1 Runden"
     },
     {
      "level": 2,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +3w10",
      "schadenArt": "physisch",
      "effekt": "BW -3m, -10 Handeln für 2 Runden"
     },
     {
      "level": 3,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +4w10",
      "schadenArt": "physisch",
      "effekt": "BW -4m, -15 Handeln für 3 Runden"
     }
    ]
   },
   {
    "name": "Wunden aufreißen",
    "ast": "Einschüchtern",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 +3 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     }
    ]
   },
   {
    "name": "Ablenken",
    "ast": "Einschüchtern",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Zu 30/60/90 % laufen deine Gegner 1/1/2 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 10/15/20 zusätzliche Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m UK",
      "schaden": "+10 RÜ",
      "effekt": "Zu 30 % laufen deine Gegner 1 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 10 zusätzliche Rüstung."
     },
     {
      "level": 2,
      "reichweite": "7m UK",
      "schaden": "+15 RÜ",
      "effekt": "Zu 60 % laufen deine Gegner 1 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 15 zusätzliche Rüstung."
     },
     {
      "level": 3,
      "reichweite": "10m UK",
      "schaden": "+20 RÜ",
      "effekt": "Zu 90 % laufen deine Gegner 2 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 20 zusätzliche Rüstung."
     }
    ]
   },
   {
    "name": "Respektschelle",
    "ast": "Einschüchtern",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Gegner ist zu 20/40/60 % gestunnt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Gegner ist zu 20 % gestunnt."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Gegner ist zu 40 % gestunnt."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Gegner ist zu 60 % gestunnt."
     }
    ]
   },
   {
    "name": "Spot",
    "ast": "Einschüchtern",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Ein Gegner in Reichweite greift 2/2/3 Runden nur dich an. Gegen ihn hast du 10/15/20 Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2 Runden Aggro +10RÜ",
      "effekt": "Ein Gegner in Reichweite greift 2 Runden nur dich an. Gegen ihn hast du 10 Rüstung."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "2 Runden Aggro +15RÜ",
      "effekt": "Ein Gegner in Reichweite greift 2 Runden nur dich an. Gegen ihn hast du 15 Rüstung."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "3 Runden Aggro +20RÜ",
      "effekt": "Ein Gegner in Reichweite greift 3 Runden nur dich an. Gegen ihn hast du 20 Rüstung."
     }
    ]
   },
   {
    "name": "Wirbeltritt",
    "ast": "Einschüchtern",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     }
    ]
   },
   {
    "name": "Aufpumpen",
    "ast": "Einschüchtern",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Für 1/2/3 Runden. Handeln -20/15/10.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "NK+3w10 +0 RÜ 5 RB",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden. Handeln -20."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "NK+4w10 +5 RÜ 10 RB",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden. Handeln -15."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "NK+5w10 +10 RÜ 15 RB",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden. Handeln -10."
     }
    ]
   },
   {
    "name": "Schneise",
    "ast": "Einschüchtern",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK +4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK +5w10 15 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK +6w10 20 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     }
    ]
   },
   {
    "name": "Zweite Lunge",
    "ast": "Einschüchtern",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Hält 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+25 temporäre LP -1 Debuff",
      "effekt": "Hält 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+50 temporäre LP -1 Debuff",
      "effekt": "Hält 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+100 temporäre LP -2 Debuff",
      "effekt": "Hält 4 Runden."
     }
    ]
   },
   {
    "name": "Raserei",
    "ast": "Einschüchtern",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Bis zu 4 Angriffe 5 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Bis zu 5 Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Bis zu 6 Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     }
    ]
   },
   {
    "name": "Zermalmen",
    "ast": "Einschüchtern",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Ignoriert jegliche Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +5w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +6w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +7w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     }
    ]
   },
   {
    "name": "Angelegter Schuss",
    "ast": "Fernkampf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du musst zusätzlich deine komplette Bewegung opfern.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK",
      "schaden": "FK +2w10 +10 FK +1 BL",
      "schadenArt": "physisch",
      "effekt": "Du musst zusätzlich deine komplette Bewegung opfern."
     },
     {
      "level": 2,
      "reichweite": "FK",
      "schaden": "FK +3w10 +10 FK +1 BL",
      "schadenArt": "physisch",
      "effekt": "Du musst zusätzlich deine komplette Bewegung opfern."
     },
     {
      "level": 3,
      "reichweite": "FK",
      "schaden": "FK +4w10 +10 FK +2 BL",
      "schadenArt": "physisch",
      "effekt": "Du musst zusätzlich deine komplette Bewegung opfern."
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Fernkampf",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Sniper",
    "ast": "Fernkampf",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Der Schaden und die Reichweite deiner FK- Angriffe verbessern sich.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK x 1,5",
      "schaden": "FK+0w10",
      "schadenArt": "physisch",
      "effekt": "Der Schaden und die Reichweite deiner FK- Angriffe verbessern sich."
     },
     {
      "level": 2,
      "reichweite": "FK x 2",
      "schaden": "FK+1w10",
      "schadenArt": "physisch",
      "effekt": "Der Schaden und die Reichweite deiner FK- Angriffe verbessern sich."
     },
     {
      "level": 3,
      "reichweite": "FK x 3",
      "schaden": "FK+2w10",
      "schadenArt": "physisch",
      "effekt": "Der Schaden und die Reichweite deiner FK- Angriffe verbessern sich."
     }
    ]
   },
   {
    "name": "Splitterschuss",
    "ast": "Fernkampf",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fernkampfangriff verursacht zusätzlich Blutungen für 1/2/2 Runden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK",
      "schaden": "FK+1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fernkampfangriff verursacht zusätzlich Blutungen für 1 Runden"
     },
     {
      "level": 2,
      "reichweite": "FK",
      "schaden": "FK+1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fernkampfangriff verursacht zusätzlich Blutungen für 2 Runden"
     },
     {
      "level": 3,
      "reichweite": "FK",
      "schaden": "FK+2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fernkampfangriff verursacht zusätzlich Blutungen für 2 Runden"
     }
    ]
   },
   {
    "name": "Verkrüppeln",
    "ast": "Fernkampf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "-2/3/4m BW, -5/10/15 Handeln für 1/2/3 Runden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +2w10",
      "schadenArt": "physisch",
      "effekt": "-2m BW, -5 Handeln für 1 Runden"
     },
     {
      "level": 2,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +3w10",
      "schadenArt": "physisch",
      "effekt": "-3m BW, -10 Handeln für 2 Runden"
     },
     {
      "level": 3,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +4w10",
      "schadenArt": "physisch",
      "effekt": "-4m BW, -15 Handeln für 3 Runden"
     }
    ]
   },
   {
    "name": "Blattschuss",
    "ast": "Fernkampf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Führe einen Fernkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1/2/3W4m in Schussrichtung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK",
      "schaden": "FK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Fernkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1W4m in Schussrichtung."
     },
     {
      "level": 2,
      "reichweite": "FK",
      "schaden": "FK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Fernkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 2W4m in Schussrichtung."
     },
     {
      "level": 3,
      "reichweite": "FK",
      "schaden": "FK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Fernkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 3W4m in Schussrichtung."
     }
    ]
   },
   {
    "name": "Gekreuzte Revolver",
    "ast": "Fernkampf",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Greife während deiner Aktion A auch mit deiner Off-Hand Knarre an. ( -10/5/0 FK) (keine Fähigkeiten)",
    "stufen": [
     {
      "level": 1,
      "schaden": "2-mal pro Kampf FK- Standardangriffe",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Knarre an. ( -10 FK) (keine Fähigkeiten)"
     },
     {
      "level": 2,
      "schaden": "3-mal pro Kampf FK- Standardangriffe",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Knarre an. ( -5 FK) (keine Fähigkeiten)"
     },
     {
      "level": 3,
      "schaden": "4-mal pro Kampf FK- Standardangriffe",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Knarre an. ( -0 FK) (keine Fähigkeiten)"
     }
    ]
   },
   {
    "name": "Schrapnell",
    "ast": "Fernkampf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Schuss auf ein 1x2/1x2/2x2 großes Feld. Fernkampfschaden +1/2/3 Blutung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK",
      "schaden": "FK + 1 BL",
      "schadenArt": "physisch",
      "effekt": "Schuss auf ein 1x2/1x2/2x2 großes Feld. Fernkampfschaden +1 Blutung."
     },
     {
      "level": 2,
      "reichweite": "FK",
      "schaden": "FK + 2 BL",
      "schadenArt": "physisch",
      "effekt": "Schuss auf ein 1x2/1x2/2x2 großes Feld. Fernkampfschaden +2 Blutung."
     },
     {
      "level": 3,
      "reichweite": "FK",
      "schaden": "FK + 3 BL",
      "schadenArt": "physisch",
      "effekt": "Schuss auf ein 1x2/1x2/2x2 großes Feld. Fernkampfschaden +3 Blutung."
     }
    ]
   },
   {
    "name": "Wache!",
    "ast": "Fernkampf",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "2 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "2 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "3 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "3 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "4 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "4 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     }
    ]
   },
   {
    "name": "Rikoschettenschuss",
    "ast": "Fernkampf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Dein Schuss trifft 1/2/3 zusätzliche Ziele im Umkreis von 2m.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK",
      "schaden": "FK",
      "schadenArt": "physisch",
      "effekt": "Dein Schuss trifft 1 zusätzliche Ziele im Umkreis von 2m."
     },
     {
      "level": 2,
      "reichweite": "FK",
      "schaden": "FK",
      "schadenArt": "physisch",
      "effekt": "Dein Schuss trifft 2 zusätzliche Ziele im Umkreis von 2m."
     },
     {
      "level": 3,
      "reichweite": "FK",
      "schaden": "FK",
      "schadenArt": "physisch",
      "effekt": "Dein Schuss trifft 3 zusätzliche Ziele im Umkreis von 2m."
     }
    ]
   },
   {
    "name": "Schnellladen",
    "ast": "Fernkampf",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Erlaubt schnelleres Nachladen.",
    "stufen": [
     {
      "level": 1,
      "schaden": "Lädt 1 pro Aktion B/Extra/Extra",
      "effekt": "Erlaubt schnelleres Nachladen."
     },
     {
      "level": 2,
      "schaden": "Lädt 1 pro Aktion B/Extra/Extra",
      "effekt": "Erlaubt schnelleres Nachladen."
     },
     {
      "level": 3,
      "schaden": "Lädt 2 pro Aktion B/Extra/Extra",
      "effekt": "Erlaubt schnelleres Nachladen."
     }
    ]
   },
   {
    "name": "Schnellschuss",
    "ast": "Fernkampf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Munition beachten.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK",
      "schaden": "3 FK in 1 Aktion A",
      "schadenArt": "physisch",
      "effekt": "Munition beachten."
     },
     {
      "level": 2,
      "reichweite": "FK",
      "schaden": "4 FK in 1 Aktion A",
      "schadenArt": "physisch",
      "effekt": "Munition beachten."
     },
     {
      "level": 3,
      "reichweite": "FK",
      "schaden": "5 FK in 1 Aktion A",
      "schadenArt": "physisch",
      "effekt": "Munition beachten."
     }
    ]
   },
   {
    "name": "Bleihagel",
    "ast": "Fernkampf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Schaden auf einer großen Fläche. aufrüstungsbrechend",
    "stufen": [
     {
      "level": 1,
      "reichweite": "6m",
      "schaden": "6w10 2x2/2x2/3x3m 5 RB",
      "schadenArt": "physisch",
      "effekt": "Schaden auf einer großen Fläche. aufrüstungsbrechend"
     },
     {
      "level": 2,
      "reichweite": "9m",
      "schaden": "7w10 2x2/2x2/3x3m 10 RB",
      "schadenArt": "physisch",
      "effekt": "Schaden auf einer großen Fläche. aufrüstungsbrechend"
     },
     {
      "level": 3,
      "reichweite": "12m",
      "schaden": "8w10 2x2/2x2/3x3m 15 RB",
      "schadenArt": "physisch",
      "effekt": "Schaden auf einer großen Fläche. aufrüstungsbrechend"
     }
    ]
   },
   {
    "name": "Meisterschütze",
    "ast": "Fernkampf",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Deine Fernkampf- Angriffe machen mehr Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK",
      "schaden": "+2w10",
      "schadenArt": "physisch",
      "effekt": "Deine Fernkampf- Angriffe machen mehr Schaden."
     },
     {
      "level": 2,
      "reichweite": "FK",
      "schaden": "+3w10",
      "schadenArt": "physisch",
      "effekt": "Deine Fernkampf- Angriffe machen mehr Schaden."
     },
     {
      "level": 3,
      "reichweite": "FK",
      "schaden": "+4w10",
      "schadenArt": "physisch",
      "effekt": "Deine Fernkampf- Angriffe machen mehr Schaden."
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Heimlichkeit defensiv",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Heilende Hand",
    "ast": "Heimlichkeit defensiv",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Du heilst einen Verbündeten",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     }
    ]
   },
   {
    "name": "Ich bin dann mal weg",
    "ast": "Heimlichkeit defensiv",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Du wirst für 1/2/3 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 1 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 2 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 3 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     }
    ]
   },
   {
    "name": "Raus da!",
    "ast": "Heimlichkeit defensiv",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "+2m",
      "effekt": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "+4m",
      "effekt": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "+6m",
      "effekt": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht."
     }
    ]
   },
   {
    "name": "Verarzten",
    "ast": "Heimlichkeit defensiv",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Heilt Ziel, entfernt alle Blutungen und Feuermarker",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK SE",
      "schaden": "HL 3w10 -Fm -BL",
      "schadenArt": "heilung",
      "effekt": "Heilt Ziel, entfernt alle Blutungen und Feuermarker"
     },
     {
      "level": 2,
      "reichweite": "NK SE",
      "schaden": "HL 4w10 -Fm -BL",
      "schadenArt": "heilung",
      "effekt": "Heilt Ziel, entfernt alle Blutungen und Feuermarker"
     },
     {
      "level": 3,
      "reichweite": "NK SE",
      "schaden": "HL 5w10 -Fm -BL",
      "schadenArt": "heilung",
      "effekt": "Heilt Ziel, entfernt alle Blutungen und Feuermarker"
     }
    ]
   },
   {
    "name": "Dazwischenwerfen",
    "ast": "Heimlichkeit defensiv",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Wird ein Verbündeter getroffen, bewegst du dich zu ihm und erleidest den Treffer an seiner Stelle.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "Treffer übernehmen",
      "effekt": "Wird ein Verbündeter getroffen, bewegst du dich zu ihm und erleidest den Treffer an seiner Stelle."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "Treffer übernehmen",
      "effekt": "Wird ein Verbündeter getroffen, bewegst du dich zu ihm und erleidest den Treffer an seiner Stelle."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "Treffer übernehmen",
      "effekt": "Wird ein Verbündeter getroffen, bewegst du dich zu ihm und erleidest den Treffer an seiner Stelle."
     }
    ]
   },
   {
    "name": "Dunkle Rüstung",
    "ast": "Heimlichkeit defensiv",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du hast 1/2/3 Runden lang eine Rüstung. Du bist um Heimlichkeit +5/10/10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Du hast 1 Runden lang eine Rüstung. Du bist um Heimlichkeit +5"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+15 RÜ",
      "effekt": "Du hast 2 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+20 RÜ",
      "effekt": "Du hast 3 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     }
    ]
   },
   {
    "name": "Lebensband",
    "ast": "Heimlichkeit defensiv",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Für 1/2/3 Runden wird ein Teil des Schadens eines Verbündeten stattdessen dir zugefügt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "25 % Umleitung",
      "effekt": "Für 1 Runden wird ein Teil des Schadens eines Verbündeten stattdessen dir zugefügt."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "50 % Umleitung",
      "effekt": "Für 2 Runden wird ein Teil des Schadens eines Verbündeten stattdessen dir zugefügt."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "75 % Umleitung",
      "effekt": "Für 3 Runden wird ein Teil des Schadens eines Verbündeten stattdessen dir zugefügt."
     }
    ]
   },
   {
    "name": "Trugbild",
    "ast": "Heimlichkeit defensiv",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 30/60/90% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "1 Runden Unsichtbar",
      "effekt": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 30% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar)."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "1 Runden Unsichtbar",
      "effekt": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 60% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar)."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "2 Runden Unsichtbar",
      "effekt": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 90% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar)."
     }
    ]
   },
   {
    "name": "Ersthelfer",
    "ast": "Heimlichkeit defensiv",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/2/3× pro Kampf: Fällt ein Verbündeter in 5/10/10m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Heilungsreaktion",
      "effekt": "1× pro Kampf: Fällt ein Verbündeter in 5m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Heilungsreaktion",
      "effekt": "2× pro Kampf: Fällt ein Verbündeter in 10m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "Heilungsreaktion",
      "effekt": "3× pro Kampf: Fällt ein Verbündeter in 10m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist."
     }
    ]
   },
   {
    "name": "Los Jetzt!",
    "ast": "Heimlichkeit defensiv",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/1/2 Verbündete dürfen sich sofort 2/4/6 m bewegen und anschließend einen Standardangriff durchführen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Sofortige Bewegung + Angriff",
      "effekt": "1 Verbündete dürfen sich sofort 2 m bewegen und anschließend einen Standardangriff durchführen."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Sofortige Bewegung + Angriff",
      "effekt": "1 Verbündete dürfen sich sofort 4 m bewegen und anschließend einen Standardangriff durchführen."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "Sofortige Bewegung + Angriff",
      "effekt": "2 Verbündete dürfen sich sofort 6 m bewegen und anschließend einen Standardangriff durchführen."
     }
    ]
   },
   {
    "name": "Schattenschritt",
    "ast": "Heimlichkeit defensiv",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "25 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "50 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     },
     {
      "level": 3,
      "reichweite": "20m",
      "schaden": "75 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     }
    ]
   },
   {
    "name": "Heute stirbt keiner!",
    "ast": "Heimlichkeit defensiv",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Für 1/2/3 Runden kann kein Verbündeter unter 1 LP fallen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 1 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 2 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 3 Runden kann kein Verbündeter unter 1 LP fallen."
     }
    ]
   },
   {
    "name": "Wurmloch",
    "ast": "Heimlichkeit defensiv",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Öffnet ein Wurmloch zwischen deinem Standort und einem Punkt in 10/15/20 m Entfernung. Du und 2/3/4 Verbündete können sich sofort zwischen beiden Enden bewegen. Gegner, die es betreten, werden 1 W6 Felder in eine zufällige Richtung teleportiert. Das Wurmloch bleibt 1/2/3 Runden offen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE 10 m",
      "schaden": "Wurmloch, das 1-mal benutzt werden kann.",
      "effekt": "Öffnet ein Wurmloch zwischen deinem Standort und einem Punkt in 10 m Entfernung. Du und 2 Verbündete können sich sofort zwischen beiden Enden bewegen. Gegner, die es betreten, werden 1 W6 Felder in eine zufällige Richtung teleportiert. Das Wurmloch bleibt 1 Runden offen."
     },
     {
      "level": 2,
      "reichweite": "SE 15 m",
      "schaden": "Wurmloch, das 2-mal benutzt werden kann.",
      "effekt": "Öffnet ein Wurmloch zwischen deinem Standort und einem Punkt in 15 m Entfernung. Du und 3 Verbündete können sich sofort zwischen beiden Enden bewegen. Gegner, die es betreten, werden 1 W6 Felder in eine zufällige Richtung teleportiert. Das Wurmloch bleibt 2 Runden offen."
     },
     {
      "level": 3,
      "reichweite": "SE 20 m",
      "schaden": "Wurmloch, das 3-mal benutzt werden kann.",
      "effekt": "Öffnet ein Wurmloch zwischen deinem Standort und einem Punkt in 20 m Entfernung. Du und 4 Verbündete können sich sofort zwischen beiden Enden bewegen. Gegner, die es betreten, werden 1 W6 Felder in eine zufällige Richtung teleportiert. Das Wurmloch bleibt 3 Runden offen."
     }
    ]
   },
   {
    "name": "Berauben",
    "ast": "Heimlichkeit offensiv",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "+2/4/6w10 Gold bei Verwundung",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+1w10, 5 RB",
      "schadenArt": "physisch",
      "effekt": "+2w10 Gold bei Verwundung"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+2w10, 10 RB",
      "schadenArt": "physisch",
      "effekt": "+4w10 Gold bei Verwundung"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+3w10, 15 RB",
      "schadenArt": "physisch",
      "effekt": "+6w10 Gold bei Verwundung"
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Heimlichkeit offensiv",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Giftmischer",
    "ast": "Heimlichkeit offensiv",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "NK- und FK-Angriffe verursachen 1/2/3 Runden Gift.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "schadenArt": "magisch",
      "effekt": "NK- und FK-Angriffe verursachen 1 Runden Gift."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "schadenArt": "magisch",
      "effekt": "NK- und FK-Angriffe verursachen 2 Runden Gift."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "schadenArt": "magisch",
      "effekt": "NK- und FK-Angriffe verursachen 3 Runden Gift."
     }
    ]
   },
   {
    "name": "Ich bin dann mal weg",
    "ast": "Heimlichkeit offensiv",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Du wirst für 1/2/3 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 1 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 2 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 3 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Heimlichkeit offensiv",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+ 1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+ 2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+ 3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Blutdurst",
    "ast": "Heimlichkeit offensiv",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Blutmarker die das Ziel hat.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+1w4 pro Blutmarker die das Ziel hat."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+2w4 pro Blutmarker die das Ziel hat."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+3w4 pro Blutmarker die das Ziel hat."
     }
    ]
   },
   {
    "name": "Bluthund",
    "ast": "Heimlichkeit offensiv",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Nur verletzte Ziele wählbar. Für 1/2/3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "+5 Angriff, +2w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 1 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "+10 Angriff, +3w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 2 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "+15 Angriff, +4w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     }
    ]
   },
   {
    "name": "Dunkle Rüstung",
    "ast": "Heimlichkeit offensiv",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du hast 1/2/3 Runden lang eine Rüstung. Du bist um Heimlichkeit +5/10/10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Du hast 1 Runden lang eine Rüstung. Du bist um Heimlichkeit +5"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+15 RÜ",
      "effekt": "Du hast 2 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+20 RÜ",
      "effekt": "Du hast 3 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     }
    ]
   },
   {
    "name": "Ruckzuckhieb",
    "ast": "Heimlichkeit offensiv",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "3w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "4w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "5w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     }
    ]
   },
   {
    "name": "Angriff aus dem Dunkeln",
    "ast": "Heimlichkeit offensiv",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur wenn du versteckt bist. Du bleibst zu 25/50/75% unentdeckt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK FK +3w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Nur wenn du versteckt bist. Du bleibst zu 25% unentdeckt."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK FK +4w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Nur wenn du versteckt bist. Du bleibst zu 50% unentdeckt."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK FK +5w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Nur wenn du versteckt bist. Du bleibst zu 75% unentdeckt."
     }
    ]
   },
   {
    "name": "Meuchelmörder",
    "ast": "Heimlichkeit offensiv",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Hält 1/2/3 Runden. Eine Giftstufe höher, wenn das Ziel blutet.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "+2w10 GS 2",
      "schadenArt": "magisch",
      "effekt": "Hält 1 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "+3w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Hält 2 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "+4w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Hält 3 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     }
    ]
   },
   {
    "name": "Schattenschritt",
    "ast": "Heimlichkeit offensiv",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "25 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "50 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     },
     {
      "level": 3,
      "reichweite": "20m",
      "schaden": "75 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Heimlichkeit offensiv",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Zweite Dimension",
    "ast": "Heimlichkeit offensiv",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du erhältst Rüstung.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+10 RÜ",
      "effekt": "Du erhältst Rüstung."
     },
     {
      "level": 2,
      "schaden": "+15 RÜ",
      "effekt": "Du erhältst Rüstung."
     },
     {
      "level": 3,
      "schaden": "+20 RÜ",
      "effekt": "Du erhältst Rüstung."
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Medizin",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Heilende Hand",
    "ast": "Medizin",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Du heilst einen Verbündeten",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Medizin",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Seelenreinigung",
    "ast": "Medizin",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Entfernt bei allen Verbündeten im Umkreis jeweils -1/2/3 Stufen der Debuffs (GS, FM, BL)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m",
      "schaden": "-1 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -1 Stufen der Debuffs (GS, FM, BL)"
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "-2 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -2 Stufen der Debuffs (GS, FM, BL)"
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "-3 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -3 Stufen der Debuffs (GS, FM, BL)"
     }
    ]
   },
   {
    "name": "Verarzten",
    "ast": "Medizin",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Heilt Ziel, entfernt alle Blutungen und Feuermarker",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK SE",
      "schaden": "HL 3w10 -Fm -BL",
      "schadenArt": "heilung",
      "effekt": "Heilt Ziel, entfernt alle Blutungen und Feuermarker"
     },
     {
      "level": 2,
      "reichweite": "NK SE",
      "schaden": "HL 4w10 -Fm -BL",
      "schadenArt": "heilung",
      "effekt": "Heilt Ziel, entfernt alle Blutungen und Feuermarker"
     },
     {
      "level": 3,
      "reichweite": "NK SE",
      "schaden": "HL 5w10 -Fm -BL",
      "schadenArt": "heilung",
      "effekt": "Heilt Ziel, entfernt alle Blutungen und Feuermarker"
     }
    ]
   },
   {
    "name": "Aura der Rast",
    "ast": "Medizin",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Für 2/3/4 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 1/2/3 reduzieren.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m SE",
      "schaden": "HL +2w10, -1 Debuff-Lvl",
      "schadenArt": "heilung",
      "effekt": "Für 2 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 1 reduzieren."
     },
     {
      "level": 2,
      "reichweite": "3m SE",
      "schaden": "HL +3w10, -2 Debuff-Lvl",
      "schadenArt": "heilung",
      "effekt": "Für 3 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 2 reduzieren."
     },
     {
      "level": 3,
      "reichweite": "4m SE",
      "schaden": "HL +4w10, -3 Debuff-Lvl",
      "schadenArt": "heilung",
      "effekt": "Für 4 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 3 reduzieren."
     }
    ]
   },
   {
    "name": "Heilendes Wort",
    "ast": "Medizin",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Heile 1/2/3 Ziele in Reichweite.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Heile 1 Ziele in Reichweite."
     },
     {
      "level": 2,
      "reichweite": "5m SE",
      "schaden": "HL 5w10",
      "schadenArt": "heilung",
      "effekt": "Heile 2 Ziele in Reichweite."
     },
     {
      "level": 3,
      "reichweite": "7m SE",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Heile 3 Ziele in Reichweite."
     }
    ]
   },
   {
    "name": "Kriegsschrei",
    "ast": "Medizin",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Alle Verbündeten im Umkreis erhalten für 1/2/3 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "NK+1w10 +5 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 1 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     },
     {
      "level": 2,
      "reichweite": "3m UK",
      "schaden": "NK+1w10 +5 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 2 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     },
     {
      "level": 3,
      "reichweite": "5m UK",
      "schaden": "NK+2w10 +10 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 3 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     }
    ]
   },
   {
    "name": "Letzte Chance",
    "ast": "Medizin",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Wenn deine Lebenspunkte kleiner gleich 10 sind, dann kannst du dich heilen und bekommst Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL +3w10 +10 RÜ",
      "schadenArt": "heilung",
      "effekt": "Wenn deine Lebenspunkte kleiner gleich 10 sind, dann kannst du dich heilen und bekommst Rüstung."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL +4w10 +10 RÜ",
      "schadenArt": "heilung",
      "effekt": "Wenn deine Lebenspunkte kleiner gleich 10 sind, dann kannst du dich heilen und bekommst Rüstung."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL +5w10 +10 RÜ",
      "schadenArt": "heilung",
      "effekt": "Wenn deine Lebenspunkte kleiner gleich 10 sind, dann kannst du dich heilen und bekommst Rüstung."
     }
    ]
   },
   {
    "name": "Ersthelfer",
    "ast": "Medizin",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/2/3× pro Kampf: Fällt ein Verbündeter in 5/10/10m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Heilungsreaktion",
      "effekt": "1× pro Kampf: Fällt ein Verbündeter in 5m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Heilungsreaktion",
      "effekt": "2× pro Kampf: Fällt ein Verbündeter in 10m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "Heilungsreaktion",
      "effekt": "3× pro Kampf: Fällt ein Verbündeter in 10m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist."
     }
    ]
   },
   {
    "name": "Letzte Reserven",
    "ast": "Medizin",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 3,
    "info": "Hält 2/3/4 Runden. Danach 1w4 Runden tiefer Schlaf.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+2w10 +5 RÜ",
      "schadenArt": "heilung",
      "effekt": "Hält 2 Runden. Danach 1w4 Runden tiefer Schlaf."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+3w10 +10 RÜ",
      "schadenArt": "heilung",
      "effekt": "Hält 3 Runden. Danach 1w4 Runden tiefer Schlaf."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+4w10 +20 RÜ",
      "schadenArt": "heilung",
      "effekt": "Hält 4 Runden. Danach 1w4 Runden tiefer Schlaf."
     }
    ]
   },
   {
    "name": "Welle der Heilung",
    "ast": "Medizin",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 3,
    "info": "Aura heilt jeden Verbündeten im Umkreis",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 5w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     }
    ]
   },
   {
    "name": "Kettenblitz der Heilung",
    "ast": "Medizin",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 4,
    "info": "Kettenheilung für 3/4/5 Ziele in jeweils 2/3/4 m Abstand. Kein Pingpong-Effekt also Hin und Her",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Kettenheilung für 3 Ziele in jeweils 2 m Abstand. Kein Pingpong-Effekt also Hin und Her"
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "HL 7w10",
      "schadenArt": "heilung",
      "effekt": "Kettenheilung für 4 Ziele in jeweils 3 m Abstand. Kein Pingpong-Effekt also Hin und Her"
     },
     {
      "level": 3,
      "reichweite": "4m",
      "schaden": "HL 8w10",
      "schadenArt": "heilung",
      "effekt": "Kettenheilung für 5 Ziele in jeweils 4 m Abstand. Kein Pingpong-Effekt also Hin und Her"
     }
    ]
   },
   {
    "name": "Neues Leben",
    "ast": "Medizin",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 4,
    "info": "1× pro Tag. Belebt nach 1/1/2 Runden tot mit ein paar Lebenspunkten wieder. Oder heilt einfach auch nur.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Wiederbelebung HL 8w10",
      "schadenArt": "heilung",
      "effekt": "1× pro Tag. Belebt nach 1 Runden tot mit ein paar Lebenspunkten wieder. Oder heilt einfach auch nur."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Wiederbelebung HL 9w10",
      "schadenArt": "heilung",
      "effekt": "1× pro Tag. Belebt nach 1 Runden tot mit ein paar Lebenspunkten wieder. Oder heilt einfach auch nur."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Wiederbelebung HL 10w10",
      "schadenArt": "heilung",
      "effekt": "1× pro Tag. Belebt nach 2 Runden tot mit ein paar Lebenspunkten wieder. Oder heilt einfach auch nur."
     }
    ]
   },
   {
    "name": "Beruhigende Aura",
    "ast": "Motivieren",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Verbündete heilen Lebenspunkte und können 1/1/2 Debuffs entfernen",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 1w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 2w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 3w10, -2 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 2 Debuffs entfernen"
     }
    ]
   },
   {
    "name": "Heilende Hand",
    "ast": "Motivieren",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Du heilst einen Verbündeten",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     }
    ]
   },
   {
    "name": "Kopfnuss",
    "ast": "Motivieren",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Ziel ist zu 25/50/75% für 1 Runde gestunnt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 1 ST",
      "schadenArt": "physisch",
      "effekt": "Ziel ist zu 25% für 1 Runde gestunnt."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 1 ST",
      "schadenArt": "physisch",
      "effekt": "Ziel ist zu 50% für 1 Runde gestunnt."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 1 ST",
      "schadenArt": "physisch",
      "effekt": "Ziel ist zu 75% für 1 Runde gestunnt."
     }
    ]
   },
   {
    "name": "Raus da!",
    "ast": "Motivieren",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "+2m",
      "effekt": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "+4m",
      "effekt": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "+6m",
      "effekt": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht."
     }
    ]
   },
   {
    "name": "Seelenreinigung",
    "ast": "Motivieren",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Entfernt bei allen Verbündeten im Umkreis jeweils -1/2/3 Stufen der Debuffs (GS, FM, BL)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m",
      "schaden": "-1 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -1 Stufen der Debuffs (GS, FM, BL)"
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "-2 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -2 Stufen der Debuffs (GS, FM, BL)"
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "-3 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -3 Stufen der Debuffs (GS, FM, BL)"
     }
    ]
   },
   {
    "name": "Ablenken",
    "ast": "Motivieren",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Zu 30/60/90 % laufen deine Gegner 1/1/2 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 10/15/20 zusätzliche Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m UK",
      "schaden": "+10 RÜ",
      "effekt": "Zu 30 % laufen deine Gegner 1 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 10 zusätzliche Rüstung."
     },
     {
      "level": 2,
      "reichweite": "7m UK",
      "schaden": "+15 RÜ",
      "effekt": "Zu 60 % laufen deine Gegner 1 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 15 zusätzliche Rüstung."
     },
     {
      "level": 3,
      "reichweite": "10m UK",
      "schaden": "+20 RÜ",
      "effekt": "Zu 90 % laufen deine Gegner 2 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 20 zusätzliche Rüstung."
     }
    ]
   },
   {
    "name": "Ansporn",
    "ast": "Motivieren",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Alle Verbündeten im Umkreis bekommen für 1/2/3 Runden einen Bonus auf Handeln und Bewegung (nicht stapelbar).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "+10 Handeln +1m BW",
      "schadenArt": "magisch",
      "effekt": "Alle Verbündeten im Umkreis bekommen für 1 Runden einen Bonus auf Handeln und Bewegung (nicht stapelbar)."
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "+15 Handeln +2m BW",
      "schadenArt": "magisch",
      "effekt": "Alle Verbündeten im Umkreis bekommen für 2 Runden einen Bonus auf Handeln und Bewegung (nicht stapelbar)."
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "+20 Handeln +3m BW",
      "schadenArt": "magisch",
      "effekt": "Alle Verbündeten im Umkreis bekommen für 3 Runden einen Bonus auf Handeln und Bewegung (nicht stapelbar)."
     }
    ]
   },
   {
    "name": "Kriegsschrei",
    "ast": "Motivieren",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Alle Verbündeten im Umkreis erhalten für 1/2/3 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "NK+1w10 +5 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 1 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     },
     {
      "level": 2,
      "reichweite": "3m UK",
      "schaden": "NK+1w10 +5 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 2 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     },
     {
      "level": 3,
      "reichweite": "5m UK",
      "schaden": "NK+2w10 +10 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 3 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     }
    ]
   },
   {
    "name": "Uppercut",
    "ast": "Motivieren",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Ziel vor dir erleidet Schaden, wird 1/2/3w4 m zurückgeschleudert. Angriff ist rüstungsbrechend",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Ziel vor dir erleidet Schaden, wird 1w4 m zurückgeschleudert. Angriff ist rüstungsbrechend"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Ziel vor dir erleidet Schaden, wird 2w4 m zurückgeschleudert. Angriff ist rüstungsbrechend"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 15 RB",
      "schadenArt": "physisch",
      "effekt": "Ziel vor dir erleidet Schaden, wird 3w4 m zurückgeschleudert. Angriff ist rüstungsbrechend"
     }
    ]
   },
   {
    "name": "Befehl des Kapitäns",
    "ast": "Motivieren",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "2/3/4 Verbündete dürfen sofort eine A oder B Aktion durchführen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Sofortaktion",
      "effekt": "2 Verbündete dürfen sofort eine A oder B Aktion durchführen."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "Sofortaktion",
      "effekt": "3 Verbündete dürfen sofort eine A oder B Aktion durchführen."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "Sofortaktion",
      "effekt": "4 Verbündete dürfen sofort eine A oder B Aktion durchführen."
     }
    ]
   },
   {
    "name": "Mentale Welle",
    "ast": "Motivieren",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle im Radius außer dir haben einen Malus von -5/10/15 auf alle Proben.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Alle im Radius außer dir haben einen Malus von -5 auf alle Proben."
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Alle im Radius außer dir haben einen Malus von -10 auf alle Proben."
     },
     {
      "level": 3,
      "reichweite": "4m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Alle im Radius außer dir haben einen Malus von -15 auf alle Proben."
     }
    ]
   },
   {
    "name": "Schädelklirren",
    "ast": "Motivieren",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Gegner im Umkreis von 2/3/4m müssen einen Willenskraftwurf -5/10/15 bestehen, sonst haben sie in ihrer nächsten Runde keine extra Aktion und eine Aktion (A oder B) weniger.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "-1 Aktionen",
      "effekt": "Gegner im Umkreis von 2m müssen einen Willenskraftwurf -5 bestehen, sonst haben sie in ihrer nächsten Runde keine extra Aktion und eine Aktion (A oder B) weniger."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "-1 Aktionen",
      "effekt": "Gegner im Umkreis von 3m müssen einen Willenskraftwurf -10 bestehen, sonst haben sie in ihrer nächsten Runde keine extra Aktion und eine Aktion (A oder B) weniger."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "-1 Aktionen",
      "effekt": "Gegner im Umkreis von 4m müssen einen Willenskraftwurf -15 bestehen, sonst haben sie in ihrer nächsten Runde keine extra Aktion und eine Aktion (A oder B) weniger."
     }
    ]
   },
   {
    "name": "Beifall",
    "ast": "Motivieren",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Alle Freunde im Umkreis dürfen versuchen jeden NK- Angriff zu parieren und machen nach erfolgreicher Parade dabei 2/3/4w10 Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m UK",
      "schaden": "1 Runden Konterschlag",
      "schadenArt": "physisch",
      "effekt": "Alle Freunde im Umkreis dürfen versuchen jeden NK- Angriff zu parieren und machen nach erfolgreicher Parade dabei 2w10 Schaden."
     },
     {
      "level": 2,
      "reichweite": "7m UK",
      "schaden": "2 Runden Konterschlag",
      "schadenArt": "physisch",
      "effekt": "Alle Freunde im Umkreis dürfen versuchen jeden NK- Angriff zu parieren und machen nach erfolgreicher Parade dabei 3w10 Schaden."
     },
     {
      "level": 3,
      "reichweite": "10m UK",
      "schaden": "3 Runden Konterschlag",
      "schadenArt": "physisch",
      "effekt": "Alle Freunde im Umkreis dürfen versuchen jeden NK- Angriff zu parieren und machen nach erfolgreicher Parade dabei 4w10 Schaden."
     }
    ]
   },
   {
    "name": "Heute stirbt keiner!",
    "ast": "Motivieren",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Für 1/2/3 Runden kann kein Verbündeter unter 1 LP fallen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 1 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 2 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 3 Runden kann kein Verbündeter unter 1 LP fallen."
     }
    ]
   },
   {
    "name": "Backpfeifengewitter",
    "ast": "Nahkampf Fäuste",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Trifft 2/2/3 Ziele in einer Reihe",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK + 2w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK + 3w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK + 4w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 3 Ziele in einer Reihe"
     }
    ]
   },
   {
    "name": "Befreiender Schlag",
    "ast": "Nahkampf Fäuste",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Mache Schaden und entferne 1/2/3 Debuffs +1w10 pro entfernten Debuff",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 -1 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 1 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 -2 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 2 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 -3 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 3 Debuffs +1w10 pro entfernten Debuff"
     }
    ]
   },
   {
    "name": "Blutiger Zorn",
    "ast": "Nahkampf Fäuste",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2/1/1 Blutungen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2 Blutungen."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     }
    ]
   },
   {
    "name": "Feuerfaust",
    "ast": "Nahkampf Fäuste",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1/2/3w10 Schaden und +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1w10 Schaden und +1FM"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 2w10 Schaden und +1FM"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 3w10 Schaden und +1FM"
     }
    ]
   },
   {
    "name": "Kopfnuss",
    "ast": "Nahkampf Fäuste",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Ziel ist zu 25/50/75% für 1 Runde gestunnt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 1 ST",
      "schadenArt": "physisch",
      "effekt": "Ziel ist zu 25% für 1 Runde gestunnt."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 1 ST",
      "schadenArt": "physisch",
      "effekt": "Ziel ist zu 50% für 1 Runde gestunnt."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 1 ST",
      "schadenArt": "physisch",
      "effekt": "Ziel ist zu 75% für 1 Runde gestunnt."
     }
    ]
   },
   {
    "name": "Doppelte Klingen/ Der Weg der zwei Fäuste",
    "ast": "Nahkampf Fäuste",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -10/5/0 NK) (keine Fähigkeiten)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2-mal pro Kampf extra Standart-Angriff",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -10 NK) (keine Fähigkeiten)"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3-mal pro Kampf extra Standart-Angriff",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -5 NK) (keine Fähigkeiten)"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4-mal pro Kampf extra Standart-Angriff",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -0 NK) (keine Fähigkeiten)"
     }
    ]
   },
   {
    "name": "Entwaffnen",
    "ast": "Nahkampf Fäuste",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Führe einen Nahkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung und misslingender Zähigkeitsprobe lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1/1/2W4m deiner Blickrichtung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Nahkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung und misslingender Zähigkeitsprobe lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1W4m deiner Blickrichtung."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Nahkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung und misslingender Zähigkeitsprobe lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1W4m deiner Blickrichtung."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Nahkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung und misslingender Zähigkeitsprobe lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 2W4m deiner Blickrichtung."
     }
    ]
   },
   {
    "name": "Respektschelle",
    "ast": "Nahkampf Fäuste",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Gegner ist zu 20/40/60 % gestunnt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Gegner ist zu 20 % gestunnt."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Gegner ist zu 40 % gestunnt."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Gegner ist zu 60 % gestunnt."
     }
    ]
   },
   {
    "name": "Wache!",
    "ast": "Nahkampf Fäuste",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "2 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "2 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "3 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "3 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "4 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "4 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Nahkampf Fäuste",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Risikoschlag",
    "ast": "Nahkampf Fäuste",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2/2/1 Runden nicht blocken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+5w10 +1 BL +5% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2 Runden nicht blocken."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+6w10 +2 BL +10% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2 Runden nicht blocken."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+7w10 +3 BL +15% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 1 Runden nicht blocken."
     }
    ]
   },
   {
    "name": "Stampfer",
    "ast": "Nahkampf Fäuste",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Alle angrenzenden Gegner werden 1w4 weggestoßen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "5w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Alle angrenzenden Gegner werden 1w4 weggestoßen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "6w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Alle angrenzenden Gegner werden 1w4 weggestoßen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "7w10 15 RB",
      "schadenArt": "physisch",
      "effekt": "Alle angrenzenden Gegner werden 1w4 weggestoßen."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Nahkampf Fäuste",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Konterposition",
    "ast": "Nahkampf Fäuste",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Für 1/2/3 Runden kannst du nur kontern, dich bewegen und extra Aktionen nutzen. Du kannst 4/5/6 Angriffe zusätzlich parieren. Bei erfolgreichem Konter: sofortiger Gegenschlag mit NK+3/4/5w10 und Blutungen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+3w10 für 1 Runden +1 BL",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden kannst du nur kontern, dich bewegen und extra Aktionen nutzen. Du kannst 4 Angriffe zusätzlich parieren. Bei erfolgreichem Konter: sofortiger Gegenschlag mit NK+3w10 und Blutungen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+4w10 für 2 Runden +1 BL",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden kannst du nur kontern, dich bewegen und extra Aktionen nutzen. Du kannst 5 Angriffe zusätzlich parieren. Bei erfolgreichem Konter: sofortiger Gegenschlag mit NK+4w10 und Blutungen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+5w10 für 3 Runden +2 BL",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden kannst du nur kontern, dich bewegen und extra Aktionen nutzen. Du kannst 6 Angriffe zusätzlich parieren. Bei erfolgreichem Konter: sofortiger Gegenschlag mit NK+5w10 und Blutungen."
     }
    ]
   },
   {
    "name": "Blutiger Zorn",
    "ast": "Nahkampf Klingen",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2/1/1 Blutungen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2 Blutungen."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     }
    ]
   },
   {
    "name": "Giftmischer",
    "ast": "Nahkampf Klingen",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Deine NK- und FK- Angriffe verursachen 1/2/3 Runden Giftstufe 1/2/3.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 1 Runden Giftstufe 1."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 2 Runden Giftstufe 2."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 3 Runden Giftstufe 3."
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Nahkampf Klingen",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+ 1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+ 2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+ 3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Verkrüppeln",
    "ast": "Nahkampf Klingen",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "-2/3/4m BW, -5/10/15 Handeln für 1/2/3 Runden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w10",
      "schadenArt": "physisch",
      "effekt": "-2m BW, -5 Handeln für 1 Runden"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w10",
      "schadenArt": "physisch",
      "effekt": "-3m BW, -10 Handeln für 2 Runden"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +4w10",
      "schadenArt": "physisch",
      "effekt": "-4m BW, -15 Handeln für 3 Runden"
     }
    ]
   },
   {
    "name": "Wunden aufreißen",
    "ast": "Nahkampf Klingen",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 +3 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     }
    ]
   },
   {
    "name": "Doppelte Klingen/ Der Weg der zwei Fäuste",
    "ast": "Nahkampf Klingen",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -10/5/0 NK) (keine Fähigkeiten)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2-mal pro Kampf extra Standart-Angriff",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -10 NK) (keine Fähigkeiten)"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3-mal pro Kampf extra Standart-Angriff",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -5 NK) (keine Fähigkeiten)"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4-mal pro Kampf extra Standart-Angriff",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -0 NK) (keine Fähigkeiten)"
     }
    ]
   },
   {
    "name": "Spalter",
    "ast": "Nahkampf Klingen",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "1/2/3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK 10 RB",
      "schadenArt": "physisch",
      "effekt": "1 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK 15 RB",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK 20 RB",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Verstärker der Leiden",
    "ast": "Nahkampf Klingen",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Pro unterschiedlicher Debuff-Art auf dem Ziel +1/2/3w10 Schaden (BL GS FM) (max.3)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "+1w10",
      "schadenArt": "physisch",
      "effekt": "Pro unterschiedlicher Debuff-Art auf dem Ziel +1w10 Schaden (BL GS FM) (max.3)"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "+2w10",
      "schadenArt": "physisch",
      "effekt": "Pro unterschiedlicher Debuff-Art auf dem Ziel +2w10 Schaden (BL GS FM) (max.3)"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "+3w10",
      "schadenArt": "physisch",
      "effekt": "Pro unterschiedlicher Debuff-Art auf dem Ziel +3w10 Schaden (BL GS FM) (max.3)"
     }
    ]
   },
   {
    "name": "Wache!",
    "ast": "Nahkampf Klingen",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "2 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "2 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "3 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "3 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "4 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "4 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     }
    ]
   },
   {
    "name": "Klingen- /Klauensturm",
    "ast": "Nahkampf Klingen",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Trifft alle angrenzenden 1/1/2 Felder.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+2 10 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+3 15 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+4 20 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 2 Felder."
     }
    ]
   },
   {
    "name": "Risikoschlag",
    "ast": "Nahkampf Klingen",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2/2/1 Runden nicht blocken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+5w10 +1 BL +5% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2 Runden nicht blocken."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+6w10 +2 BL +10% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2 Runden nicht blocken."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+7w10 +3 BL +15% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 1 Runden nicht blocken."
     }
    ]
   },
   {
    "name": "Schneise",
    "ast": "Nahkampf Klingen",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK +4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK +5w10 15 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK +6w10 20 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Nahkampf Klingen",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Konterposition",
    "ast": "Nahkampf Klingen",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Für 1/2/3 Runden kannst du nur kontern, dich bewegen und extra Aktionen nutzen. Du kannst 4/5/6 Angriffe zusätzlich parieren. Bei erfolgreichem Konter: sofortiger Gegenschlag mit NK+3/4/5w10 und Blutungen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+3w10 für 1 Runden +1 BL",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden kannst du nur kontern, dich bewegen und extra Aktionen nutzen. Du kannst 4 Angriffe zusätzlich parieren. Bei erfolgreichem Konter: sofortiger Gegenschlag mit NK+3w10 und Blutungen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+4w10 für 2 Runden +1 BL",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden kannst du nur kontern, dich bewegen und extra Aktionen nutzen. Du kannst 5 Angriffe zusätzlich parieren. Bei erfolgreichem Konter: sofortiger Gegenschlag mit NK+4w10 und Blutungen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+5w10 für 3 Runden +2 BL",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden kannst du nur kontern, dich bewegen und extra Aktionen nutzen. Du kannst 6 Angriffe zusätzlich parieren. Bei erfolgreichem Konter: sofortiger Gegenschlag mit NK+5w10 und Blutungen."
     }
    ]
   },
   {
    "name": "Backpfeifengewitter",
    "ast": "Stärke",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Trifft 2/2/3 Ziele in einer Reihe",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK + 2w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK + 3w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK + 4w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 3 Ziele in einer Reihe"
     }
    ]
   },
   {
    "name": "Bodyslam",
    "ast": "Stärke",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 1/2/3w4 Meter zurück",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10",
      "schadenArt": "physisch",
      "effekt": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 1w4 Meter zurück"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10",
      "schadenArt": "physisch",
      "effekt": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 2w4 Meter zurück"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10",
      "schadenArt": "physisch",
      "effekt": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 3w4 Meter zurück"
     }
    ]
   },
   {
    "name": "Profi-Boxer",
    "ast": "Stärke",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Deine Faustangriffe machen mehr Schaden.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1w10",
      "schadenArt": "physisch",
      "effekt": "Deine Faustangriffe machen mehr Schaden."
     },
     {
      "level": 2,
      "schaden": "+2w10",
      "schadenArt": "physisch",
      "effekt": "Deine Faustangriffe machen mehr Schaden."
     },
     {
      "level": 3,
      "schaden": "+3w10",
      "schadenArt": "physisch",
      "effekt": "Deine Faustangriffe machen mehr Schaden."
     }
    ]
   },
   {
    "name": "Wilde Wut",
    "ast": "Stärke",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden, -15/10/5 Nahkampf",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "+2w10 0 RB",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden, -15 Nahkampf"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "+3w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden, -10 Nahkampf"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "+4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden, -5 Nahkampf"
     }
    ]
   },
   {
    "name": "Wunden aufreißen",
    "ast": "Stärke",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 +3 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     }
    ]
   },
   {
    "name": "Körper aus Stein",
    "ast": "Stärke",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht deine Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": ".",
      "schaden": "+3 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 2,
      "reichweite": ".",
      "schaden": "+5 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 3,
      "reichweite": ".",
      "schaden": "+10 RÜ",
      "effekt": "Erhöht deine Rüstung."
     }
    ]
   },
   {
    "name": "Respektschelle",
    "ast": "Stärke",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Gegner ist zu 20/40/60 % gestunnt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Gegner ist zu 20 % gestunnt."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Gegner ist zu 40 % gestunnt."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Gegner ist zu 60 % gestunnt."
     }
    ]
   },
   {
    "name": "Sprungangriff",
    "ast": "Stärke",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Springe auf dein Ziel und verursache in 1/2/2 m Umkreis. Angrenzende Ziele erhalten halben Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "3w10 1 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 1 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "4w10 2 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 2 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "5w10 2 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 2 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     }
    ]
   },
   {
    "name": "Sternenfaust",
    "ast": "Stärke",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Nahkampfangriffe stunnen Gegner zu 10/15/20 %. Du machst -2/1/0w10 weniger Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "10 % Stun",
      "schadenArt": "physisch",
      "effekt": "Nahkampfangriffe stunnen Gegner zu 10 %. Du machst -2w10 weniger Schaden."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "15 % Stun",
      "schadenArt": "physisch",
      "effekt": "Nahkampfangriffe stunnen Gegner zu 15 %. Du machst -1w10 weniger Schaden."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "20 % Stun",
      "schadenArt": "physisch",
      "effekt": "Nahkampfangriffe stunnen Gegner zu 20 %. Du machst -0w10 weniger Schaden."
     }
    ]
   },
   {
    "name": "Aufpumpen",
    "ast": "Stärke",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Für 1/2/3 Runden. Handeln -20/15/10.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "NK+3w10 +0 RÜ 5 RB",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden. Handeln -20."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "NK+4w10 +5 RÜ 10 RB",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden. Handeln -15."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "NK+5w10 +10 RÜ 15 RB",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden. Handeln -10."
     }
    ]
   },
   {
    "name": "Kometeneinschlag",
    "ast": "Stärke",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Stärkerer Nahkampfschaden mit Durchschlag.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1w10 0 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     },
     {
      "level": 2,
      "schaden": "+2w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     },
     {
      "level": 3,
      "schaden": "+3w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     }
    ]
   },
   {
    "name": "Panzerbrecher",
    "ast": "Stärke",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Ziel verliert Rüstung für 1/2/3 Runden (nicht stapelbar).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "-10 Rüstung",
      "effekt": "Ziel verliert Rüstung für 1 Runden (nicht stapelbar)."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "-20 Rüstung",
      "effekt": "Ziel verliert Rüstung für 2 Runden (nicht stapelbar)."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "-30 Rüstung",
      "effekt": "Ziel verliert Rüstung für 3 Runden (nicht stapelbar)."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Stärke",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Zermalmen",
    "ast": "Stärke",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Ignoriert jegliche Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +5w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +6w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +7w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     }
    ]
   },
   {
    "name": "Dornenhaut",
    "ast": "Voodoo Flucherspucker",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du erhältst für 1/2/3 Runden +5/5/10 Rüstung. Nahkampfangreifer erleiden automatisch 1/2/3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5/7/10m wirken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "(5m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 1 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 1W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5m wirken."
     },
     {
      "level": 2,
      "reichweite": "(7m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 2 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 2W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 7m wirken."
     },
     {
      "level": 3,
      "reichweite": "(10m) SE",
      "schaden": "+10 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 3 Runden +10 Rüstung. Nahkampfangreifer erleiden automatisch 3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 10m wirken."
     }
    ]
   },
   {
    "name": "Heilendes Blut",
    "ast": "Voodoo Flucherspucker",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Du fügst dir 1w6 Schaden zu und heilst ein Ziel.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Du fügst dir 1w6 Schaden zu und heilst ein Ziel."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "HL 5w10",
      "schadenArt": "heilung",
      "effekt": "Du fügst dir 1w6 Schaden zu und heilst ein Ziel."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Du fügst dir 1w6 Schaden zu und heilst ein Ziel."
     }
    ]
   },
   {
    "name": "Knochengriff",
    "ast": "Voodoo Flucherspucker",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Ein Ziel erhält für 1/2/3 Runden -2/3/4 Bewegung und -10 auf Handeln.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10m",
      "schaden": "-2m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 1 Runden -2 Bewegung und -10 auf Handeln."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "-3m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 2 Runden -3 Bewegung und -10 auf Handeln."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "-4m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 3 Runden -4 Bewegung und -10 auf Handeln."
     }
    ]
   },
   {
    "name": "Schrecken der Meere",
    "ast": "Voodoo Flucherspucker",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Nach misslungenem WW -5/10/15 für 1/1/2 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "1 Gegner fliehen",
      "effekt": "Nach misslungenem WW -5 für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "2 Gegner fliehen",
      "effekt": "Nach misslungenem WW -10 für 1 Runden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "3 Gegner fliehen",
      "effekt": "Nach misslungenem WW -15 für 2 Runden."
     }
    ]
   },
   {
    "name": "Seelenreinigung",
    "ast": "Voodoo Flucherspucker",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Entfernt bei allen Verbündeten im Umkreis jeweils -1/2/3 Stufen der Debuffs (GS, FM, BL)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m",
      "schaden": "-1 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -1 Stufen der Debuffs (GS, FM, BL)"
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "-2 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -2 Stufen der Debuffs (GS, FM, BL)"
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "-3 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -3 Stufen der Debuffs (GS, FM, BL)"
     }
    ]
   },
   {
    "name": "Flüstern der Schatten",
    "ast": "Voodoo Flucherspucker",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "70/80/90 % Chance, dass dein Ziel für 1 Runde schläft und zu Beginn seiner nächsten Runde aufwacht. (kein Traumherrscher)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "SL",
      "effekt": "70 % Chance, dass dein Ziel für 1 Runde schläft und zu Beginn seiner nächsten Runde aufwacht. (kein Traumherrscher)"
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "SL",
      "effekt": "80 % Chance, dass dein Ziel für 1 Runde schläft und zu Beginn seiner nächsten Runde aufwacht. (kein Traumherrscher)"
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "SL",
      "effekt": "90 % Chance, dass dein Ziel für 1 Runde schläft und zu Beginn seiner nächsten Runde aufwacht. (kein Traumherrscher)"
     }
    ]
   },
   {
    "name": "Knochenmauer",
    "ast": "Voodoo Flucherspucker",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erschaffe eine Knochenmauer die 50/100/200 LP hat.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "6m",
      "schaden": "3 m lange Mauer",
      "effekt": "Erschaffe eine Knochenmauer die 50 LP hat."
     },
     {
      "level": 2,
      "reichweite": "9m",
      "schaden": "4 m lange Mauer",
      "effekt": "Erschaffe eine Knochenmauer die 100 LP hat."
     },
     {
      "level": 3,
      "reichweite": "12m",
      "schaden": "5 m lange Mauer",
      "effekt": "Erschaffe eine Knochenmauer die 200 LP hat."
     }
    ]
   },
   {
    "name": "Lebensentzug",
    "ast": "Voodoo Flucherspucker",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Mache auf 1/1/2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3",
      "schaden": "4w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 2,
      "reichweite": "5",
      "schaden": "5w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 3,
      "reichweite": "10",
      "schaden": "6w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     }
    ]
   },
   {
    "name": "Naturfluch",
    "ast": "Voodoo Flucherspucker",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 20/40/60% vergiftet.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 20% vergiftet."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 40% vergiftet."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 60% vergiftet."
     }
    ]
   },
   {
    "name": "Fluch der Schwächung",
    "ast": "Voodoo Flucherspucker",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/2/3 Ziele in Reichweite machen für 1/2/3 Runden 40/50/60 %weniger Standard-Angriffs Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "-40 % Schaden",
      "effekt": "1 Ziele in Reichweite machen für 1 Runden 40 %weniger Standard-Angriffs Schaden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "-50 % Schaden",
      "effekt": "2 Ziele in Reichweite machen für 2 Runden 50 %weniger Standard-Angriffs Schaden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "-60 % Schaden",
      "effekt": "3 Ziele in Reichweite machen für 3 Runden 60 %weniger Standard-Angriffs Schaden."
     }
    ]
   },
   {
    "name": "Schattenschritt",
    "ast": "Voodoo Flucherspucker",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "25 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "50 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     },
     {
      "level": 3,
      "reichweite": "20m",
      "schaden": "75 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     }
    ]
   },
   {
    "name": "Verfluchter Kreis",
    "ast": "Voodoo Flucherspucker",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+1w10 Für 1 Runden",
      "schadenArt": "magisch",
      "effekt": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "+1w10 Für 2 Runden",
      "schadenArt": "magisch",
      "effekt": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "+2w10 Für 3 Runden",
      "schadenArt": "magisch",
      "effekt": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben."
     }
    ]
   },
   {
    "name": "Seelenpakt",
    "ast": "Voodoo Flucherspucker",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 1/2/3 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 1 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     },
     {
      "level": 2,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 2 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     },
     {
      "level": 3,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 3 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     }
    ]
   },
   {
    "name": "Seelentausch",
    "ast": "Voodoo Flucherspucker",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du gibst einem Feind 1/2/3 deiner Debuff Stacks.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "1 Debuffs übertragen",
      "effekt": "Du gibst einem Feind 1 deiner Debuff Stacks."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "2 Debuffs übertragen",
      "effekt": "Du gibst einem Feind 2 deiner Debuff Stacks."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "3 Debuffs übertragen",
      "effekt": "Du gibst einem Feind 3 deiner Debuff Stacks."
     }
    ]
   },
   {
    "name": "Blutschuss",
    "ast": "Voodoo Ritualklinge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 2/3/4 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 2 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 3 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "4× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 4 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     }
    ]
   },
   {
    "name": "Fluch",
    "ast": "Voodoo Ritualklinge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du selbst bekommst 3/2/1w10 Schaden, 1/1/2 Ziele bekommen Schaden und schlafen zu 20/40/60% für 1w4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 3w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 20% für 1w4 Runden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "4w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 2w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 40% für 1w4 Runden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "5w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 1w10 Schaden, 2 Ziele bekommen Schaden und schlafen zu 60% für 1w4 Runden."
     }
    ]
   },
   {
    "name": "Giftmischer",
    "ast": "Voodoo Ritualklinge",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Deine NK- und FK- Angriffe verursachen 1/2/3 Runden Giftstufe 1/2/3.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 1 Runden Giftstufe 1."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 2 Runden Giftstufe 2."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 3 Runden Giftstufe 3."
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Voodoo Ritualklinge",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+ 1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+ 2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+ 3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Schrecken der Meere",
    "ast": "Voodoo Ritualklinge",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Nach misslungenem WW -5/10/15 für 1/1/2 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "1 Gegner fliehen",
      "effekt": "Nach misslungenem WW -5 für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "2 Gegner fliehen",
      "effekt": "Nach misslungenem WW -10 für 1 Runden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "3 Gegner fliehen",
      "effekt": "Nach misslungenem WW -15 für 2 Runden."
     }
    ]
   },
   {
    "name": "Atem der Verwesung",
    "ast": "Voodoo Ritualklinge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Strahl, der 1/2/3 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "4w10 +GS 2",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 1 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "5w10 +GS 3",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 2 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "6w10 +GS 4",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 3 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     }
    ]
   },
   {
    "name": "Kadaverexplosion",
    "ast": "Voodoo Ritualklinge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Alle Ziele im Umkreis von 1/2/3m um den Kadaver erleiden 4/5/6w10 Schaden und Gift.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "4w10 GS 2",
      "schadenArt": "magisch",
      "effekt": "Alle Ziele im Umkreis von 1m um den Kadaver erleiden 4w10 Schaden und Gift."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "5w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Alle Ziele im Umkreis von 2m um den Kadaver erleiden 5w10 Schaden und Gift."
     },
     {
      "level": 3,
      "reichweite": "20m",
      "schaden": "6w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Alle Ziele im Umkreis von 3m um den Kadaver erleiden 6w10 Schaden und Gift."
     }
    ]
   },
   {
    "name": "Toxischer Ausbruch",
    "ast": "Voodoo Ritualklinge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "3w10 GS 2",
      "schadenArt": "magisch",
      "effekt": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM"
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "4w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM"
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "5w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM"
     }
    ]
   },
   {
    "name": "Verstärker der Leiden",
    "ast": "Voodoo Ritualklinge",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Pro unterschiedlicher Debuff-Art auf dem Ziel +1/2/3w10 Schaden (BL GS FM) (max.3)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "+1w10",
      "schadenArt": "physisch",
      "effekt": "Pro unterschiedlicher Debuff-Art auf dem Ziel +1w10 Schaden (BL GS FM) (max.3)"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "+2w10",
      "schadenArt": "physisch",
      "effekt": "Pro unterschiedlicher Debuff-Art auf dem Ziel +2w10 Schaden (BL GS FM) (max.3)"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "+3w10",
      "schadenArt": "physisch",
      "effekt": "Pro unterschiedlicher Debuff-Art auf dem Ziel +3w10 Schaden (BL GS FM) (max.3)"
     }
    ]
   },
   {
    "name": "Knochenspeer",
    "ast": "Voodoo Ritualklinge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/1/2-mal pro Kampf. Du schleuderst einen Knochenspeer der 2/3/4 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Du schleuderst einen Knochenspeer der 2 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Du schleuderst einen Knochenspeer der 3 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "6w10 15 RB",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Du schleuderst einen Knochenspeer der 4 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Ruf des Grabes",
    "ast": "Voodoo Ritualklinge",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Bei einem Kill: 25/50/75 % Chance, dass das Ziel als Skelett Stufe 1 aufersteht.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "+1 Skelett",
      "effekt": "Bei einem Kill: 25 % Chance, dass das Ziel als Skelett Stufe 1 aufersteht."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "+1 Skelett",
      "effekt": "Bei einem Kill: 50 % Chance, dass das Ziel als Skelett Stufe 1 aufersteht."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "+1 Skelett",
      "effekt": "Bei einem Kill: 75 % Chance, dass das Ziel als Skelett Stufe 1 aufersteht."
     }
    ]
   },
   {
    "name": "Welle der Korrosion",
    "ast": "Voodoo Ritualklinge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle im Umkreis",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "3w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis"
     },
     {
      "level": 2,
      "reichweite": "3m UK",
      "schaden": "4w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis"
     },
     {
      "level": 3,
      "reichweite": "4m UK",
      "schaden": "5w10 GS 5",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis"
     }
    ]
   },
   {
    "name": "Blutexpansion",
    "ast": "Voodoo Ritualklinge",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Du fügst dir selbst 2/1/1w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "6w10 2 BL",
      "schadenArt": "magisch",
      "effekt": "Du fügst dir selbst 2w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "7w10 3 BL",
      "schadenArt": "magisch",
      "effekt": "Du fügst dir selbst 1w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "8w10 4 BL",
      "schadenArt": "magisch",
      "effekt": "Du fügst dir selbst 1w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu."
     }
    ]
   },
   {
    "name": "Seelenpakt",
    "ast": "Voodoo Ritualklinge",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 1/2/3 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 1 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     },
     {
      "level": 2,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 2 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     },
     {
      "level": 3,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 3 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     }
    ]
   },
   {
    "name": "Arkaner Funke",
    "ast": "Arkaner Freibeuter",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "2/3/4× pro Kampf kannst du einen Arkanen Funken zaubern. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "2× pro Kampf kannst du einen Arkanen Funken zaubern. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "3× pro Kampf kannst du einen Arkanen Funken zaubern. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "4× pro Kampf kannst du einen Arkanen Funken zaubern. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Feuerfaust",
    "ast": "Arkaner Freibeuter",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1/2/3w10 Schaden und +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1w10 Schaden und +1FM"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 2w10 Schaden und +1FM"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 3w10 Schaden und +1FM"
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Arkaner Freibeuter",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Arkaner Freibeuter",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Wasserpeitsche",
    "ast": "Arkaner Freibeuter",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     }
    ]
   },
   {
    "name": "Arkanes Schwert",
    "ast": "Arkaner Freibeuter",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3× pro Kampf kannst du einen Arkanes Schwert zaubern, das bis zu 2 Gegner in einer 3/4/5m langen, geraden Linie trifft. Nach Anwendung des Skills 2/2/1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Arkanes Schwert zaubern, das bis zu 2 Gegner in einer 3m langen, geraden Linie trifft. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "2× pro Kampf kannst du einen Arkanes Schwert zaubern, das bis zu 2 Gegner in einer 4m langen, geraden Linie trifft. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "5w10",
      "schadenArt": "magisch",
      "effekt": "3× pro Kampf kannst du einen Arkanes Schwert zaubern, das bis zu 2 Gegner in einer 5m langen, geraden Linie trifft. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Dunkle Rüstung",
    "ast": "Arkaner Freibeuter",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du hast 1/2/3 Runden lang eine Rüstung. Du bist um Heimlichkeit +5/10/10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Du hast 1 Runden lang eine Rüstung. Du bist um Heimlichkeit +5"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+15 RÜ",
      "effekt": "Du hast 2 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+20 RÜ",
      "effekt": "Du hast 3 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     }
    ]
   },
   {
    "name": "Ruckzuckhieb",
    "ast": "Arkaner Freibeuter",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "3w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "4w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "5w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     }
    ]
   },
   {
    "name": "Spalter",
    "ast": "Arkaner Freibeuter",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "1/2/3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK 10 RB",
      "schadenArt": "physisch",
      "effekt": "1 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK 15 RB",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK 20 RB",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Arkane Geschosse",
    "ast": "Arkaner Freibeuter",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/1/2× pro Kampf kannst du Arkane Geschosse zaubern und alle Kugeln auf ein Ziel in Reichweite schießen, oder die Kugeln bis zu 3/4/5 Runden hinter dir schweben lassen und pro Aktion A/B/Extra 1/2/3 Kugeln abfeuern. Nach Anwendung des Skills 2 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 x 3",
      "effekt": "1× pro Kampf kannst du Arkane Geschosse zaubern und alle Kugeln auf ein Ziel in Reichweite schießen, oder die Kugeln bis zu 3 Runden hinter dir schweben lassen und pro Aktion A/B/Extra 1 Kugeln abfeuern. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "4w10 x 4",
      "effekt": "1× pro Kampf kannst du Arkane Geschosse zaubern und alle Kugeln auf ein Ziel in Reichweite schießen, oder die Kugeln bis zu 4 Runden hinter dir schweben lassen und pro Aktion A/B/Extra 2 Kugeln abfeuern. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "5w10 x 5",
      "effekt": "2× pro Kampf kannst du Arkane Geschosse zaubern und alle Kugeln auf ein Ziel in Reichweite schießen, oder die Kugeln bis zu 5 Runden hinter dir schweben lassen und pro Aktion A/B/Extra 3 Kugeln abfeuern. Nach Anwendung des Skills 2 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Risikoschlag",
    "ast": "Arkaner Freibeuter",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2/2/1 Runden nicht blocken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+5w10 +1 BL +5% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2 Runden nicht blocken."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+6w10 +2 BL +10% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2 Runden nicht blocken."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+7w10 +3 BL +15% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 1 Runden nicht blocken."
     }
    ]
   },
   {
    "name": "Teleport",
    "ast": "Arkaner Freibeuter",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "10 m Teleport – 1- mal pro Kampf",
      "effekt": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "15 m Teleport – 2- mal pro Kampf",
      "effekt": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "20 m Teleport – 3- mal pro Kampf",
      "effekt": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich."
     }
    ]
   },
   {
    "name": "Arkaner Sturm",
    "ast": "Arkaner Freibeuter",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1× pro Kampf kannst du einen Arkanen Sturm zaubern. Personen im Sturm verlieren für ihre nächsten Runde zu 20/40/60% eine Aktion in ihrer Wahl A oder B",
    "stufen": [
     {
      "level": 1,
      "reichweite": "6m",
      "schaden": "5w10 2x2/3x3/3x3m",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Arkanen Sturm zaubern. Personen im Sturm verlieren für ihre nächsten Runde zu 20% eine Aktion in ihrer Wahl A oder B"
     },
     {
      "level": 2,
      "reichweite": "9m",
      "schaden": "6w10 2x2/3x3/3x3m",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Arkanen Sturm zaubern. Personen im Sturm verlieren für ihre nächsten Runde zu 40% eine Aktion in ihrer Wahl A oder B"
     },
     {
      "level": 3,
      "reichweite": "12m",
      "schaden": "7w10 2x2/3x3/3x3m",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Arkanen Sturm zaubern. Personen im Sturm verlieren für ihre nächsten Runde zu 60% eine Aktion in ihrer Wahl A oder B"
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Arkaner Freibeuter",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Befreiender Schlag",
    "ast": "Dämonenjäger",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Mache Schaden und entferne 1/2/3 Debuffs +1w10 pro entfernten Debuff",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 -1 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 1 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 -2 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 2 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 -3 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 3 Debuffs +1w10 pro entfernten Debuff"
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Dämonenjäger",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Dämonenjäger",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Wilde Wut",
    "ast": "Dämonenjäger",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden, -15/10/5 Nahkampf",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "+2w10 0 RB",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden, -15 Nahkampf"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "+3w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden, -10 Nahkampf"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "+4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden, -5 Nahkampf"
     }
    ]
   },
   {
    "name": "Wunden aufreißen",
    "ast": "Dämonenjäger",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 +3 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     }
    ]
   },
   {
    "name": "Bluthund",
    "ast": "Dämonenjäger",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Nur verletzte Ziele wählbar. Für 1/2/3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "+5 Angriff, +2w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 1 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "+10 Angriff, +3w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 2 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "+15 Angriff, +4w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     }
    ]
   },
   {
    "name": "Körper aus Stahl",
    "ast": "Dämonenjäger",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht deine Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": ".",
      "schaden": "+5 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 2,
      "reichweite": ".",
      "schaden": "+10 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 3,
      "reichweite": ".",
      "schaden": "+15 RÜ",
      "effekt": "Erhöht deine Rüstung."
     }
    ]
   },
   {
    "name": "Schrapnell",
    "ast": "Dämonenjäger",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Schuss auf ein 1x2/1x2/2x2 großes Feld. Fernkampfschaden +1/2/3 Blutung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK",
      "schaden": "FK + 1 BL",
      "schadenArt": "physisch",
      "effekt": "Schuss auf ein 1x2/1x2/2x2 großes Feld. Fernkampfschaden +1 Blutung."
     },
     {
      "level": 2,
      "reichweite": "FK",
      "schaden": "FK + 2 BL",
      "schadenArt": "physisch",
      "effekt": "Schuss auf ein 1x2/1x2/2x2 großes Feld. Fernkampfschaden +2 Blutung."
     },
     {
      "level": 3,
      "reichweite": "FK",
      "schaden": "FK + 3 BL",
      "schadenArt": "physisch",
      "effekt": "Schuss auf ein 1x2/1x2/2x2 großes Feld. Fernkampfschaden +3 Blutung."
     }
    ]
   },
   {
    "name": "Spalter",
    "ast": "Dämonenjäger",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "1/2/3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK 10 RB",
      "schadenArt": "physisch",
      "effekt": "1 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK 15 RB",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK 20 RB",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Letzte Reserven",
    "ast": "Dämonenjäger",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 3,
    "info": "Hält 2/3/4 Runden. Danach 1w4 Runden tiefer Schlaf.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+2w10 +5 RÜ",
      "schadenArt": "heilung",
      "effekt": "Hält 2 Runden. Danach 1w4 Runden tiefer Schlaf."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+3w10 +10 RÜ",
      "schadenArt": "heilung",
      "effekt": "Hält 3 Runden. Danach 1w4 Runden tiefer Schlaf."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+4w10 +20 RÜ",
      "schadenArt": "heilung",
      "effekt": "Hält 4 Runden. Danach 1w4 Runden tiefer Schlaf."
     }
    ]
   },
   {
    "name": "Risikoschlag",
    "ast": "Dämonenjäger",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2/2/1 Runden nicht blocken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+5w10 +1 BL +5% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2 Runden nicht blocken."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+6w10 +2 BL +10% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2 Runden nicht blocken."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+7w10 +3 BL +15% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 1 Runden nicht blocken."
     }
    ]
   },
   {
    "name": "Schnellschuss",
    "ast": "Dämonenjäger",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Munition beachten.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK",
      "schaden": "3 FK in 1 Aktion A",
      "schadenArt": "physisch",
      "effekt": "Munition beachten."
     },
     {
      "level": 2,
      "reichweite": "FK",
      "schaden": "4 FK in 1 Aktion A",
      "schadenArt": "physisch",
      "effekt": "Munition beachten."
     },
     {
      "level": 3,
      "reichweite": "FK",
      "schaden": "5 FK in 1 Aktion A",
      "schadenArt": "physisch",
      "effekt": "Munition beachten."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Dämonenjäger",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Konterposition",
    "ast": "Dämonenjäger",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Für 1/2/3 Runden kannst du nur kontern, dich bewegen und extra Aktionen nutzen. Du kannst 4/5/6 Angriffe zusätzlich parieren. Bei erfolgreichem Konter: sofortiger Gegenschlag mit NK+3/4/5w10 und Blutungen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+3w10 für 1 Runden +1 BL",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden kannst du nur kontern, dich bewegen und extra Aktionen nutzen. Du kannst 4 Angriffe zusätzlich parieren. Bei erfolgreichem Konter: sofortiger Gegenschlag mit NK+3w10 und Blutungen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+4w10 für 2 Runden +1 BL",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden kannst du nur kontern, dich bewegen und extra Aktionen nutzen. Du kannst 5 Angriffe zusätzlich parieren. Bei erfolgreichem Konter: sofortiger Gegenschlag mit NK+4w10 und Blutungen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+5w10 für 3 Runden +2 BL",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden kannst du nur kontern, dich bewegen und extra Aktionen nutzen. Du kannst 6 Angriffe zusätzlich parieren. Bei erfolgreichem Konter: sofortiger Gegenschlag mit NK+5w10 und Blutungen."
     }
    ]
   },
   {
    "name": "Befreiender Schlag",
    "ast": "Fluchbrecher",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Mache Schaden und entferne 1/2/3 Debuffs +1w10 pro entfernten Debuff",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 -1 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 1 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 -2 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 2 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 -3 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 3 Debuffs +1w10 pro entfernten Debuff"
     }
    ]
   },
   {
    "name": "Doppelhieb",
    "ast": "Fluchbrecher",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du kannst 1/2/3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "1 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 1-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "2 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 2-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "3 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Fliegender Bulle",
    "ast": "Fluchbrecher",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Dein Schlafwurf wird für den Angreifer zu 10/20/30% erschwert.",
    "stufen": [
     {
      "level": 1,
      "schaden": "-Schlaf +Willenskraft",
      "effekt": "Dein Schlafwurf wird für den Angreifer zu 10% erschwert."
     },
     {
      "level": 2,
      "schaden": "-Schlaf +Willenskraft",
      "effekt": "Dein Schlafwurf wird für den Angreifer zu 20% erschwert."
     },
     {
      "level": 3,
      "schaden": "-Schlaf +Willenskraft",
      "effekt": "Dein Schlafwurf wird für den Angreifer zu 30% erschwert."
     }
    ]
   },
   {
    "name": "Seelenreinigung",
    "ast": "Fluchbrecher",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Entfernt bei allen Verbündeten im Umkreis jeweils -1/2/3 Stufen der Debuffs (GS, FM, BL)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m",
      "schaden": "-1 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -1 Stufen der Debuffs (GS, FM, BL)"
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "-2 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -2 Stufen der Debuffs (GS, FM, BL)"
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "-3 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -3 Stufen der Debuffs (GS, FM, BL)"
     }
    ]
   },
   {
    "name": "Wunden aufreißen",
    "ast": "Fluchbrecher",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 +3 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     }
    ]
   },
   {
    "name": "Bluthund",
    "ast": "Fluchbrecher",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Nur verletzte Ziele wählbar. Für 1/2/3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "+5 Angriff, +2w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 1 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "+10 Angriff, +3w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 2 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "+15 Angriff, +4w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     }
    ]
   },
   {
    "name": "Buße",
    "ast": "Fluchbrecher",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Geht nur, wenn der Anwender einen Debuff hat. 1/2/3 Ziele in Reichweite werden geheilt und verlieren alle Debuffs.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "HL 3w10 -alle Debuffs",
      "schadenArt": "heilung",
      "effekt": "Geht nur, wenn der Anwender einen Debuff hat. 1 Ziele in Reichweite werden geheilt und verlieren alle Debuffs."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "HL 4w10 -alle Debuffs",
      "schadenArt": "heilung",
      "effekt": "Geht nur, wenn der Anwender einen Debuff hat. 2 Ziele in Reichweite werden geheilt und verlieren alle Debuffs."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "HL 5w10 -alle Debuffs",
      "schadenArt": "heilung",
      "effekt": "Geht nur, wenn der Anwender einen Debuff hat. 3 Ziele in Reichweite werden geheilt und verlieren alle Debuffs."
     }
    ]
   },
   {
    "name": "Lebensentzug",
    "ast": "Fluchbrecher",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Mache auf 1/1/2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3",
      "schaden": "4w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 2,
      "reichweite": "5",
      "schaden": "5w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 3,
      "reichweite": "10",
      "schaden": "6w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     }
    ]
   },
   {
    "name": "Spalter",
    "ast": "Fluchbrecher",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "1/2/3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK 10 RB",
      "schadenArt": "physisch",
      "effekt": "1 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK 15 RB",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK 20 RB",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Seelenverkrustung",
    "ast": "Fluchbrecher",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Für 2/3/4 Runden weniger Fähigkeiten- Schaden. Während dessen kannst du nur von dir selbst durch Fähigkeiten geheilt werden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "-40% Schaden",
      "effekt": "Für 2 Runden weniger Fähigkeiten- Schaden. Während dessen kannst du nur von dir selbst durch Fähigkeiten geheilt werden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "-50% Schaden",
      "effekt": "Für 3 Runden weniger Fähigkeiten- Schaden. Während dessen kannst du nur von dir selbst durch Fähigkeiten geheilt werden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "-60% Schaden",
      "effekt": "Für 4 Runden weniger Fähigkeiten- Schaden. Während dessen kannst du nur von dir selbst durch Fähigkeiten geheilt werden."
     }
    ]
   },
   {
    "name": "Ultraschall",
    "ast": "Fluchbrecher",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Alle im Umkreis von dir können 1/2/3 Runden keine aktiven oder extra- Fähigkeiten einsetzen (nur passive).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "Keine Fähigkeiten für 1 Runden",
      "effekt": "Alle im Umkreis von dir können 1 Runden keine aktiven oder extra- Fähigkeiten einsetzen (nur passive)."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "Keine Fähigkeiten für 2 Runden",
      "effekt": "Alle im Umkreis von dir können 2 Runden keine aktiven oder extra- Fähigkeiten einsetzen (nur passive)."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "Keine Fähigkeiten für 3 Runden",
      "effekt": "Alle im Umkreis von dir können 3 Runden keine aktiven oder extra- Fähigkeiten einsetzen (nur passive)."
     }
    ]
   },
   {
    "name": "Zurückspulen",
    "ast": "Fluchbrecher",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Wenn das Ziel nach 1/2/3 Runden noch lebt, St1: springt es an seinen Ursprung zurück. St2: zusätzlich werden erhaltene Debuffs gelöscht. St3: zusätzlich wird das Ziel um 5w10 geheilt",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE 3m",
      "schaden": "Standort Debuffs HP",
      "effekt": "Wenn das Ziel nach 1 Runden noch lebt, St1: springt es an seinen Ursprung zurück. St2: zusätzlich werden erhaltene Debuffs gelöscht. St3: zusätzlich wird das Ziel um 5w10 geheilt"
     },
     {
      "level": 2,
      "reichweite": "SE 5m",
      "schaden": "Standort Debuffs HP",
      "effekt": "Wenn das Ziel nach 2 Runden noch lebt, St1: springt es an seinen Ursprung zurück. St2: zusätzlich werden erhaltene Debuffs gelöscht. St3: zusätzlich wird das Ziel um 5w10 geheilt"
     },
     {
      "level": 3,
      "reichweite": "SE 7m",
      "schaden": "Standort Debuffs HP",
      "effekt": "Wenn das Ziel nach 3 Runden noch lebt, St1: springt es an seinen Ursprung zurück. St2: zusätzlich werden erhaltene Debuffs gelöscht. St3: zusätzlich wird das Ziel um 5w10 geheilt"
     }
    ]
   },
   {
    "name": "Auflösung",
    "ast": "Fluchbrecher",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Stufe 1: ein bestehender magischer Fähigkeitseffekt wird aufgelöst. Stufe 2: bis zu zwei. Stufe 3: bis zu drei. Buffs, Debuffs, Beschwörungen, magische Zonen, Schilde, Mauern usw. Bereits vollständig abgehandelte Effekte nicht.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Löse 1 Fähigkeiten auf",
      "effekt": "Stufe 1: ein bestehender magischer Fähigkeitseffekt wird aufgelöst. Stufe 2: bis zu zwei. Stufe 3: bis zu drei. Buffs, Debuffs, Beschwörungen, magische Zonen, Schilde, Mauern usw. Bereits vollständig abgehandelte Effekte nicht."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Löse 2 Fähigkeiten auf",
      "effekt": "Stufe 1: ein bestehender magischer Fähigkeitseffekt wird aufgelöst. Stufe 2: bis zu zwei. Stufe 3: bis zu drei. Buffs, Debuffs, Beschwörungen, magische Zonen, Schilde, Mauern usw. Bereits vollständig abgehandelte Effekte nicht."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "Löse 3 Fähigkeiten auf",
      "effekt": "Stufe 1: ein bestehender magischer Fähigkeitseffekt wird aufgelöst. Stufe 2: bis zu zwei. Stufe 3: bis zu drei. Buffs, Debuffs, Beschwörungen, magische Zonen, Schilde, Mauern usw. Bereits vollständig abgehandelte Effekte nicht."
     }
    ]
   },
   {
    "name": "Ketten des Jenseits",
    "ast": "Fluchbrecher",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "5 Runden -10 auf Handeln. Ziele müssen einen Willenskraftwurf -20 ablegen, sonst können sie sich für 1/2/3 Runden nicht bewegen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2 Ziele -BW",
      "effekt": "5 Runden -10 auf Handeln. Ziele müssen einen Willenskraftwurf -20 ablegen, sonst können sie sich für 1 Runden nicht bewegen."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "3 Ziele -BW",
      "effekt": "5 Runden -10 auf Handeln. Ziele müssen einen Willenskraftwurf -20 ablegen, sonst können sie sich für 2 Runden nicht bewegen."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "4 Ziele -BW",
      "effekt": "5 Runden -10 auf Handeln. Ziele müssen einen Willenskraftwurf -20 ablegen, sonst können sie sich für 3 Runden nicht bewegen."
     }
    ]
   },
   {
    "name": "Backpfeifengewitter",
    "ast": "Hitzeklinge",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Trifft 2/2/3 Ziele in einer Reihe",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK + 2w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK + 3w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK + 4w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 3 Ziele in einer Reihe"
     }
    ]
   },
   {
    "name": "Befreiender Schlag",
    "ast": "Hitzeklinge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Mache Schaden und entferne 1/2/3 Debuffs +1w10 pro entfernten Debuff",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 -1 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 1 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 -2 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 2 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 -3 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 3 Debuffs +1w10 pro entfernten Debuff"
     }
    ]
   },
   {
    "name": "Feuerfaust",
    "ast": "Hitzeklinge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1/2/3w10 Schaden und +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1w10 Schaden und +1FM"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 2w10 Schaden und +1FM"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 3w10 Schaden und +1FM"
     }
    ]
   },
   {
    "name": "Funke",
    "ast": "Hitzeklinge",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du kannst ein Ziel in Brand setzen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "+1 FM",
      "schadenArt": "magisch",
      "effekt": "Du kannst ein Ziel in Brand setzen."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "+2 FM",
      "schadenArt": "magisch",
      "effekt": "Du kannst ein Ziel in Brand setzen."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "+3 FM",
      "schadenArt": "magisch",
      "effekt": "Du kannst ein Ziel in Brand setzen."
     }
    ]
   },
   {
    "name": "Verkrüppeln",
    "ast": "Hitzeklinge",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "-2/3/4m BW, -5/10/15 Handeln für 1/2/3 Runden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +2w10",
      "schadenArt": "physisch",
      "effekt": "-2m BW, -5 Handeln für 1 Runden"
     },
     {
      "level": 2,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +3w10",
      "schadenArt": "physisch",
      "effekt": "-3m BW, -10 Handeln für 2 Runden"
     },
     {
      "level": 3,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +4w10",
      "schadenArt": "physisch",
      "effekt": "-4m BW, -15 Handeln für 3 Runden"
     }
    ]
   },
   {
    "name": "Brandstifter",
    "ast": "Hitzeklinge",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Hast du mindestens selbst 2/1/1 Fm, dann erhalten alle Ziele in Reichweite die nicht brennen +1 FM zu Beginn deiner Runde.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m",
      "schaden": "+1 FM",
      "schadenArt": "magisch",
      "effekt": "Hast du mindestens selbst 2 Fm, dann erhalten alle Ziele in Reichweite die nicht brennen +1 FM zu Beginn deiner Runde."
     },
     {
      "level": 2,
      "reichweite": "1m",
      "schaden": "+1 FM",
      "schadenArt": "magisch",
      "effekt": "Hast du mindestens selbst 1 Fm, dann erhalten alle Ziele in Reichweite die nicht brennen +1 FM zu Beginn deiner Runde."
     },
     {
      "level": 3,
      "reichweite": "2m",
      "schaden": "+1 FM",
      "schadenArt": "magisch",
      "effekt": "Hast du mindestens selbst 1 Fm, dann erhalten alle Ziele in Reichweite die nicht brennen +1 FM zu Beginn deiner Runde."
     }
    ]
   },
   {
    "name": "Brandverstärker",
    "ast": "Hitzeklinge",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Feuermarker (max5.)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro FM",
      "schadenArt": "magisch",
      "effekt": "+1w4 pro Feuermarker (max5.)"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro FM",
      "schadenArt": "magisch",
      "effekt": "+2w4 pro Feuermarker (max5.)"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro FM",
      "schadenArt": "magisch",
      "effekt": "+3w4 pro Feuermarker (max5.)"
     }
    ]
   },
   {
    "name": "Feuerball",
    "ast": "Hitzeklinge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "1x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "5w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "2x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "6w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "3x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Wirbeltritt",
    "ast": "Hitzeklinge",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     }
    ]
   },
   {
    "name": "Brennender Kreis",
    "ast": "Hitzeklinge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Im Umkreis bekommen alle Personen Feuerschaden und 1/2/3 Feuermarker.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 1 Feuermarker."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "5w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 2 Feuermarker."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "6w10 +3 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 3 Feuermarker."
     }
    ]
   },
   {
    "name": "Entfacher",
    "ast": "Hitzeklinge",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "In den nächsten 3/4/5 Runden verursachen deine Angriffe Feuermarker. Nach Aktivierung des Skills erhältst du +2/2/1 Fm. Fängt ein Ziel durch den Skill an zu brennen, erhält es zusätzlich sofort Schaden. Geht das Feuer an dir aus, bevor die Wirkungsdauer vorbei ist, erlischt auch der Skill.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+2 +1 FM Bei Entzündung 2w10",
      "schadenArt": "magisch",
      "effekt": "In den nächsten 3 Runden verursachen deine Angriffe Feuermarker. Nach Aktivierung des Skills erhältst du +2 Fm. Fängt ein Ziel durch den Skill an zu brennen, erhält es zusätzlich sofort Schaden. Geht das Feuer an dir aus, bevor die Wirkungsdauer vorbei ist, erlischt auch der Skill."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+3 +2 FM Bei Entzündung 3w10",
      "schadenArt": "magisch",
      "effekt": "In den nächsten 4 Runden verursachen deine Angriffe Feuermarker. Nach Aktivierung des Skills erhältst du +2 Fm. Fängt ein Ziel durch den Skill an zu brennen, erhält es zusätzlich sofort Schaden. Geht das Feuer an dir aus, bevor die Wirkungsdauer vorbei ist, erlischt auch der Skill."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+4 +2 FM Bei Entzündung 4w10",
      "schadenArt": "magisch",
      "effekt": "In den nächsten 5 Runden verursachen deine Angriffe Feuermarker. Nach Aktivierung des Skills erhältst du +1 Fm. Fängt ein Ziel durch den Skill an zu brennen, erhält es zusätzlich sofort Schaden. Geht das Feuer an dir aus, bevor die Wirkungsdauer vorbei ist, erlischt auch der Skill."
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Hitzeklinge",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Hitzeklinge",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Inferno",
    "ast": "Hitzeklinge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1/2/3x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10 m",
      "schaden": "6w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "1x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "15 m",
      "schaden": "7w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "2x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "20 m",
      "schaden": "8w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "3x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Backpfeifengewitter",
    "ast": "Kultist",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Trifft 2/2/3 Ziele in einer Reihe",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK + 2w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK + 3w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK + 4w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 3 Ziele in einer Reihe"
     }
    ]
   },
   {
    "name": "Befreiender Schlag",
    "ast": "Kultist",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Mache Schaden und entferne 1/2/3 Debuffs +1w10 pro entfernten Debuff",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 -1 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 1 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 -2 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 2 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 -3 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 3 Debuffs +1w10 pro entfernten Debuff"
     }
    ]
   },
   {
    "name": "Blutschuss",
    "ast": "Kultist",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 2/3/4 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 2 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 3 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "4× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 4 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Kultist",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Verkrüppeln",
    "ast": "Kultist",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "-2/3/4m BW, -5/10/15 Handeln für 1/2/3 Runden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +2w10",
      "schadenArt": "physisch",
      "effekt": "-2m BW, -5 Handeln für 1 Runden"
     },
     {
      "level": 2,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +3w10",
      "schadenArt": "physisch",
      "effekt": "-3m BW, -10 Handeln für 2 Runden"
     },
     {
      "level": 3,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +4w10",
      "schadenArt": "physisch",
      "effekt": "-4m BW, -15 Handeln für 3 Runden"
     }
    ]
   },
   {
    "name": "Blutdurst",
    "ast": "Kultist",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Blutmarker die das Ziel hat.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+1w4 pro Blutmarker die das Ziel hat."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+2w4 pro Blutmarker die das Ziel hat."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+3w4 pro Blutmarker die das Ziel hat."
     }
    ]
   },
   {
    "name": "Bluthund",
    "ast": "Kultist",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Nur verletzte Ziele wählbar. Für 1/2/3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "+5 Angriff, +2w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 1 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "+10 Angriff, +3w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 2 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "+15 Angriff, +4w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     }
    ]
   },
   {
    "name": "Körper aus Stein",
    "ast": "Kultist",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht deine Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": ".",
      "schaden": "+3 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 2,
      "reichweite": ".",
      "schaden": "+5 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 3,
      "reichweite": ".",
      "schaden": "+10 RÜ",
      "effekt": "Erhöht deine Rüstung."
     }
    ]
   },
   {
    "name": "Wirbeltritt",
    "ast": "Kultist",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     }
    ]
   },
   {
    "name": "Klingen- /Klauensturm",
    "ast": "Kultist",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Trifft alle angrenzenden 1/1/2 Felder.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+2 10 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+3 15 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+4 20 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 2 Felder."
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Kultist",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Nur eine Fleischwunde",
    "ast": "Kultist",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Fügt dem Ziel Blutungen zu.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK 4 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt dem Ziel Blutungen zu."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK 5 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt dem Ziel Blutungen zu."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK 6 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt dem Ziel Blutungen zu."
     }
    ]
   },
   {
    "name": "Blutexpansion",
    "ast": "Kultist",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Du fügst dir selbst 2/1/1w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "6w10 2 BL",
      "schadenArt": "magisch",
      "effekt": "Du fügst dir selbst 2w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "7w10 3 BL",
      "schadenArt": "magisch",
      "effekt": "Du fügst dir selbst 1w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "8w10 4 BL",
      "schadenArt": "magisch",
      "effekt": "Du fügst dir selbst 1w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Kultist",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Befreiender Schlag",
    "ast": "Mensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Mache Schaden und entferne 1/2/3 Debuffs +1w10 pro entfernten Debuff",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 -1 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 1 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 -2 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 2 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 -3 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 3 Debuffs +1w10 pro entfernten Debuff"
     }
    ]
   },
   {
    "name": "Fliegender Bulle",
    "ast": "Mensch",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Dein Schlafwurf wird für den Angreifer zu 10/20/30% erschwert.",
    "stufen": [
     {
      "level": 1,
      "schaden": "-Schlaf +Willenskraft",
      "effekt": "Dein Schlafwurf wird für den Angreifer zu 10% erschwert."
     },
     {
      "level": 2,
      "schaden": "-Schlaf +Willenskraft",
      "effekt": "Dein Schlafwurf wird für den Angreifer zu 20% erschwert."
     },
     {
      "level": 3,
      "schaden": "-Schlaf +Willenskraft",
      "effekt": "Dein Schlafwurf wird für den Angreifer zu 30% erschwert."
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Mensch",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Raus da!",
    "ast": "Mensch",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "+2m",
      "effekt": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "+4m",
      "effekt": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "+6m",
      "effekt": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht."
     }
    ]
   },
   {
    "name": "Verarzten",
    "ast": "Mensch",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Heilt Ziel, entfernt alle Blutungen und Feuermarker",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK SE",
      "schaden": "HL 3w10 -Fm -BL",
      "schadenArt": "heilung",
      "effekt": "Heilt Ziel, entfernt alle Blutungen und Feuermarker"
     },
     {
      "level": 2,
      "reichweite": "NK SE",
      "schaden": "HL 4w10 -Fm -BL",
      "schadenArt": "heilung",
      "effekt": "Heilt Ziel, entfernt alle Blutungen und Feuermarker"
     },
     {
      "level": 3,
      "reichweite": "NK SE",
      "schaden": "HL 5w10 -Fm -BL",
      "schadenArt": "heilung",
      "effekt": "Heilt Ziel, entfernt alle Blutungen und Feuermarker"
     }
    ]
   },
   {
    "name": "Ansporn",
    "ast": "Mensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Alle Verbündeten im Umkreis bekommen für 1/2/3 Runden einen Bonus auf Handeln und Bewegung (nicht stapelbar).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "+10 Handeln +1m BW",
      "schadenArt": "magisch",
      "effekt": "Alle Verbündeten im Umkreis bekommen für 1 Runden einen Bonus auf Handeln und Bewegung (nicht stapelbar)."
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "+15 Handeln +2m BW",
      "schadenArt": "magisch",
      "effekt": "Alle Verbündeten im Umkreis bekommen für 2 Runden einen Bonus auf Handeln und Bewegung (nicht stapelbar)."
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "+20 Handeln +3m BW",
      "schadenArt": "magisch",
      "effekt": "Alle Verbündeten im Umkreis bekommen für 3 Runden einen Bonus auf Handeln und Bewegung (nicht stapelbar)."
     }
    ]
   },
   {
    "name": "Dazwischenwerfen",
    "ast": "Mensch",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Wird ein Verbündeter getroffen, bewegst du dich zu ihm und erleidest den Treffer an seiner Stelle.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "Treffer übernehmen",
      "effekt": "Wird ein Verbündeter getroffen, bewegst du dich zu ihm und erleidest den Treffer an seiner Stelle."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "Treffer übernehmen",
      "effekt": "Wird ein Verbündeter getroffen, bewegst du dich zu ihm und erleidest den Treffer an seiner Stelle."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "Treffer übernehmen",
      "effekt": "Wird ein Verbündeter getroffen, bewegst du dich zu ihm und erleidest den Treffer an seiner Stelle."
     }
    ]
   },
   {
    "name": "Eiserner Wille",
    "ast": "Mensch",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Für 1/2/3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 Widerstand",
      "effekt": "Für 1 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+20 Widerstand",
      "effekt": "Für 2 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+30 Widerstand",
      "effekt": "Für 3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     }
    ]
   },
   {
    "name": "Entwaffnen",
    "ast": "Mensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Führe einen Nahkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1/1/2W4m deiner Blickrichtung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Nahkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1W4m deiner Blickrichtung."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Nahkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1W4m deiner Blickrichtung."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Nahkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 2W4m deiner Blickrichtung."
     }
    ]
   },
   {
    "name": "Befehl des Kapitäns",
    "ast": "Mensch",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "2/3/4 Verbündete dürfen sofort eine A oder B Aktion durchführen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Sofortaktion",
      "effekt": "2 Verbündete dürfen sofort eine A oder B Aktion durchführen."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "Sofortaktion",
      "effekt": "3 Verbündete dürfen sofort eine A oder B Aktion durchführen."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "Sofortaktion",
      "effekt": "4 Verbündete dürfen sofort eine A oder B Aktion durchführen."
     }
    ]
   },
   {
    "name": "Ersthelfer",
    "ast": "Mensch",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/2/3× pro Kampf: Fällt ein Verbündeter in 5/10/10m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Heilungsreaktion",
      "effekt": "1× pro Kampf: Fällt ein Verbündeter in 5m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Heilungsreaktion",
      "effekt": "2× pro Kampf: Fällt ein Verbündeter in 10m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "Heilungsreaktion",
      "effekt": "3× pro Kampf: Fällt ein Verbündeter in 10m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist."
     }
    ]
   },
   {
    "name": "Los Jetzt!",
    "ast": "Mensch",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/1/2 Verbündete dürfen sich sofort 2/4/6 m bewegen und anschließend einen Standardangriff durchführen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Sofortige Bewegung + Angriff",
      "effekt": "1 Verbündete dürfen sich sofort 2 m bewegen und anschließend einen Standardangriff durchführen."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Sofortige Bewegung + Angriff",
      "effekt": "1 Verbündete dürfen sich sofort 4 m bewegen und anschließend einen Standardangriff durchführen."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "Sofortige Bewegung + Angriff",
      "effekt": "2 Verbündete dürfen sich sofort 6 m bewegen und anschließend einen Standardangriff durchführen."
     }
    ]
   },
   {
    "name": "Beifall",
    "ast": "Mensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Alle Freunde im Umkreis dürfen versuchen jeden NK- Angriff zu parieren und machen nach erfolgreicher Parade dabei 2/3/4w10 Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m UK",
      "schaden": "1 Runden Konterschlag",
      "schadenArt": "physisch",
      "effekt": "Alle Freunde im Umkreis dürfen versuchen jeden NK- Angriff zu parieren und machen nach erfolgreicher Parade dabei 2w10 Schaden."
     },
     {
      "level": 2,
      "reichweite": "7m UK",
      "schaden": "2 Runden Konterschlag",
      "schadenArt": "physisch",
      "effekt": "Alle Freunde im Umkreis dürfen versuchen jeden NK- Angriff zu parieren und machen nach erfolgreicher Parade dabei 3w10 Schaden."
     },
     {
      "level": 3,
      "reichweite": "10m UK",
      "schaden": "3 Runden Konterschlag",
      "schadenArt": "physisch",
      "effekt": "Alle Freunde im Umkreis dürfen versuchen jeden NK- Angriff zu parieren und machen nach erfolgreicher Parade dabei 4w10 Schaden."
     }
    ]
   },
   {
    "name": "Heute stirbt keiner!",
    "ast": "Mensch",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Für 1/2/3 Runden kann kein Verbündeter unter 1 LP fallen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 1 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 2 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 3 Runden kann kein Verbündeter unter 1 LP fallen."
     }
    ]
   },
   {
    "name": "Backpfeifengewitter",
    "ast": "Pestbringer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Trifft 2/2/3 Ziele in einer Reihe",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK + 2w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK + 3w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK + 4w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 3 Ziele in einer Reihe"
     }
    ]
   },
   {
    "name": "Befreiender Schlag",
    "ast": "Pestbringer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Mache Schaden und entferne 1/2/3 Debuffs +1w10 pro entfernten Debuff",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 -1 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 1 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 -2 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 2 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 -3 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 3 Debuffs +1w10 pro entfernten Debuff"
     }
    ]
   },
   {
    "name": "Fluch",
    "ast": "Pestbringer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du selbst bekommst 3/2/1w10 Schaden, 1/1/2 Ziele bekommen Schaden und schlafen zu 20/40/60% für 1w4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 3w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 20% für 1w4 Runden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "4w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 2w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 40% für 1w4 Runden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "5w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 1w10 Schaden, 2 Ziele bekommen Schaden und schlafen zu 60% für 1w4 Runden."
     }
    ]
   },
   {
    "name": "Giftmischer",
    "ast": "Pestbringer",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "NK- und FK-Angriffe verursachen 1/2/3 Runden Gift.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "schadenArt": "magisch",
      "effekt": "NK- und FK-Angriffe verursachen 1 Runden Gift."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "schadenArt": "magisch",
      "effekt": "NK- und FK-Angriffe verursachen 2 Runden Gift."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "schadenArt": "magisch",
      "effekt": "NK- und FK-Angriffe verursachen 3 Runden Gift."
     }
    ]
   },
   {
    "name": "Verkrüppeln",
    "ast": "Pestbringer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "-2/3/4m BW, -5/10/15 Handeln für 1/2/3 Runden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +2w10",
      "schadenArt": "physisch",
      "effekt": "-2m BW, -5 Handeln für 1 Runden"
     },
     {
      "level": 2,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +3w10",
      "schadenArt": "physisch",
      "effekt": "-3m BW, -10 Handeln für 2 Runden"
     },
     {
      "level": 3,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +4w10",
      "schadenArt": "physisch",
      "effekt": "-4m BW, -15 Handeln für 3 Runden"
     }
    ]
   },
   {
    "name": "Giftsymbiose",
    "ast": "Pestbringer",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Gift- Stufe (max.5)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+1w4 pro Gift- Stufe (max.5)"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+2w4 pro Gift- Stufe (max.5)"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+3w4 pro Gift- Stufe (max.5)"
     }
    ]
   },
   {
    "name": "Seuchenstoß",
    "ast": "Pestbringer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK+ 3w10 +GS 2",
      "schadenArt": "magisch",
      "effekt": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK+ 4w10 +GS 3",
      "schadenArt": "magisch",
      "effekt": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK+ 5w10 +GS 4",
      "schadenArt": "magisch",
      "effekt": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe."
     }
    ]
   },
   {
    "name": "Verstärker der Leiden",
    "ast": "Pestbringer",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Pro unterschiedlicher Debuff-Art auf dem Ziel +1/2/3w10 Schaden (BL GS FM) (max.3)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "+1w10",
      "schadenArt": "physisch",
      "effekt": "Pro unterschiedlicher Debuff-Art auf dem Ziel +1w10 Schaden (BL GS FM) (max.3)"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "+2w10",
      "schadenArt": "physisch",
      "effekt": "Pro unterschiedlicher Debuff-Art auf dem Ziel +2w10 Schaden (BL GS FM) (max.3)"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "+3w10",
      "schadenArt": "physisch",
      "effekt": "Pro unterschiedlicher Debuff-Art auf dem Ziel +3w10 Schaden (BL GS FM) (max.3)"
     }
    ]
   },
   {
    "name": "Wirbeltritt",
    "ast": "Pestbringer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     }
    ]
   },
   {
    "name": "Giftwolke",
    "ast": "Pestbringer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2x2/2x2/3x3m GS 4",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "2x2/2x2/3x3m GS 5",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "2x2/2x2/3x3m GS 6",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     }
    ]
   },
   {
    "name": "Klingen- /Klauensturm",
    "ast": "Pestbringer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Trifft alle angrenzenden 1/1/2 Felder.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+2 10 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+3 15 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+4 20 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 2 Felder."
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Pestbringer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Fauler Atem",
    "ast": "Pestbringer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "GS 3 +2 FM +1 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "GS 4 +3 FM +2 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "GS 5 +4 FM +3 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Pestbringer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Backpfeifengewitter",
    "ast": "Rum-Prediger",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Trifft 2/2/3 Ziele in einer Reihe",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK + 2w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK + 3w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK + 4w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 3 Ziele in einer Reihe"
     }
    ]
   },
   {
    "name": "Beruhigende Aura",
    "ast": "Rum-Prediger",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Verbündete heilen Lebenspunkte und können 1/1/2 Debuffs entfernen",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 1w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 2w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 3w10, -2 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 2 Debuffs entfernen"
     }
    ]
   },
   {
    "name": "Bodyslam",
    "ast": "Rum-Prediger",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 1/2/3w4 Meter zurück",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10",
      "schadenArt": "physisch",
      "effekt": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 1w4 Meter zurück"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10",
      "schadenArt": "physisch",
      "effekt": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 2w4 Meter zurück"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10",
      "schadenArt": "physisch",
      "effekt": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 3w4 Meter zurück"
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Rum-Prediger",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Heilende Hand",
    "ast": "Rum-Prediger",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Du heilst einen Verbündeten",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     }
    ]
   },
   {
    "name": "Aura der Rast",
    "ast": "Rum-Prediger",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Für 2/3/4 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 1/2/3 reduzieren.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m SE",
      "schaden": "HL +2w10, -1 Debuff-Lvl",
      "schadenArt": "heilung",
      "effekt": "Für 2 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 1 reduzieren."
     },
     {
      "level": 2,
      "reichweite": "3m SE",
      "schaden": "HL +3w10, -2 Debuff-Lvl",
      "schadenArt": "heilung",
      "effekt": "Für 3 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 2 reduzieren."
     },
     {
      "level": 3,
      "reichweite": "4m SE",
      "schaden": "HL +4w10, -3 Debuff-Lvl",
      "schadenArt": "heilung",
      "effekt": "Für 4 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 3 reduzieren."
     }
    ]
   },
   {
    "name": "Entwaffnen",
    "ast": "Rum-Prediger",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Führe einen Nahkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung und misslingender Zähigkeitsprobe lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1/1/2W4m deiner Blickrichtung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Nahkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung und misslingender Zähigkeitsprobe lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1W4m deiner Blickrichtung."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Nahkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung und misslingender Zähigkeitsprobe lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1W4m deiner Blickrichtung."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Nahkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung und misslingender Zähigkeitsprobe lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 2W4m deiner Blickrichtung."
     }
    ]
   },
   {
    "name": "Uppercut",
    "ast": "Rum-Prediger",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Ziel vor dir erleidet Schaden, wird 1/2/3w4 m zurückgeschleudert. Angriff ist rüstungsbrechend",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Ziel vor dir erleidet Schaden, wird 1w4 m zurückgeschleudert. Angriff ist rüstungsbrechend"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Ziel vor dir erleidet Schaden, wird 2w4 m zurückgeschleudert. Angriff ist rüstungsbrechend"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 15 RB",
      "schadenArt": "physisch",
      "effekt": "Ziel vor dir erleidet Schaden, wird 3w4 m zurückgeschleudert. Angriff ist rüstungsbrechend"
     }
    ]
   },
   {
    "name": "Wache!",
    "ast": "Rum-Prediger",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "2 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "2 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "3 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "3 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "4 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "4 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     }
    ]
   },
   {
    "name": "Göttlicher Schild",
    "ast": "Rum-Prediger",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 3,
    "info": "1/2/3 Ziele für 1/2/3 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "HL 4w10 5 RÜ",
      "schadenArt": "heilung",
      "effekt": "1 Ziele für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "HL 5w10 10 RÜ",
      "schadenArt": "heilung",
      "effekt": "2 Ziele für 2 Runden."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "HL 6w10 15 RÜ",
      "schadenArt": "heilung",
      "effekt": "3 Ziele für 3 Runden."
     }
    ]
   },
   {
    "name": "Unantastbar",
    "ast": "Rum-Prediger",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Ein Verbündeter wird bis zum Beginn deiner nächsten Runde immun gegen Schaden und Debuffs, kann währenddessen aber selbst weder angreifen noch Fähigkeiten einsetzen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "Schutz",
      "effekt": "Ein Verbündeter wird bis zum Beginn deiner nächsten Runde immun gegen Schaden und Debuffs, kann währenddessen aber selbst weder angreifen noch Fähigkeiten einsetzen."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "Schutz",
      "effekt": "Ein Verbündeter wird bis zum Beginn deiner nächsten Runde immun gegen Schaden und Debuffs, kann währenddessen aber selbst weder angreifen noch Fähigkeiten einsetzen."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "Schutz",
      "effekt": "Ein Verbündeter wird bis zum Beginn deiner nächsten Runde immun gegen Schaden und Debuffs, kann währenddessen aber selbst weder angreifen noch Fähigkeiten einsetzen."
     }
    ]
   },
   {
    "name": "Welle der Heilung",
    "ast": "Rum-Prediger",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 3,
    "info": "Aura heilt jeden Verbündeten im Umkreis",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 5w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     }
    ]
   },
   {
    "name": "Raserei",
    "ast": "Rum-Prediger",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Bis zu 4 Angriffe 5 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Bis zu 5 Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Bis zu 6 Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     }
    ]
   },
   {
    "name": "Strahl der Gebete",
    "ast": "Rum-Prediger",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 4,
    "info": "Ein 4/8/12 m langer Strahl heilt alle Ziele und entfernt 1/2/3 Debuffs.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "4m",
      "schaden": "HL 5w10´ -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Ein 4 m langer Strahl heilt alle Ziele und entfernt 1 Debuffs."
     },
     {
      "level": 2,
      "reichweite": "8m",
      "schaden": "HL 6w10´ -2 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Ein 8 m langer Strahl heilt alle Ziele und entfernt 2 Debuffs."
     },
     {
      "level": 3,
      "reichweite": "12m",
      "schaden": "HL 7w10´ -3 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Ein 12 m langer Strahl heilt alle Ziele und entfernt 3 Debuffs."
     }
    ]
   },
   {
    "name": "Beruhigende Aura",
    "ast": "Seher der Tiefsee",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Verbündete heilen Lebenspunkte und können 1/1/2 Debuffs entfernen",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 1w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 2w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 3w10, -2 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 2 Debuffs entfernen"
     }
    ]
   },
   {
    "name": "Dornenhaut",
    "ast": "Seher der Tiefsee",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du erhältst für 1/2/3 Runden +5/5/10 Rüstung. Nahkampfangreifer erleiden automatisch 1/2/3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5/7/10m wirken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "(5m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 1 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 1W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5m wirken."
     },
     {
      "level": 2,
      "reichweite": "(7m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 2 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 2W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 7m wirken."
     },
     {
      "level": 3,
      "reichweite": "(10m) SE",
      "schaden": "+10 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 3 Runden +10 Rüstung. Nahkampfangreifer erleiden automatisch 3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 10m wirken."
     }
    ]
   },
   {
    "name": "Fluch",
    "ast": "Seher der Tiefsee",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du selbst bekommst 3/2/1w10 Schaden, 1/1/2 Ziele bekommen Schaden und schlafen zu 20/40/60% für 1w4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 3w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 20% für 1w4 Runden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "4w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 2w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 40% für 1w4 Runden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "5w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 1w10 Schaden, 2 Ziele bekommen Schaden und schlafen zu 60% für 1w4 Runden."
     }
    ]
   },
   {
    "name": "Knochengriff",
    "ast": "Seher der Tiefsee",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Ein Ziel erhält für 1/2/3 Runden -2/3/4 Bewegung und -10 auf Handeln.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10m",
      "schaden": "-2m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 1 Runden -2 Bewegung und -10 auf Handeln."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "-3m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 2 Runden -3 Bewegung und -10 auf Handeln."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "-4m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 3 Runden -4 Bewegung und -10 auf Handeln."
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Seher der Tiefsee",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Atem der Verwesung",
    "ast": "Seher der Tiefsee",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Strahl, der 1/2/3 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "4w10 +GS 2",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 1 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "5w10 +GS 3",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 2 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "6w10 +GS 4",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 3 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     }
    ]
   },
   {
    "name": "Elementargeist: Kleiner Teufel Wurzelknirps Eispanter",
    "ast": "Seher der Tiefsee",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "LP 30/60/90 NK 30/40/50, 2/3/4w10 Schaden, Eis: RB 0/10/15 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "1 Elemente 2 Runden",
      "effekt": "LP 30 NK 30, 2w10 Schaden, Eis: RB 0 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "1 Elemente 2 Runden",
      "effekt": "LP 60 NK 40, 3w10 Schaden, Eis: RB 10 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "2 Elemente 3 Runden",
      "effekt": "LP 90 NK 50, 4w10 Schaden, Eis: RB 15 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     }
    ]
   },
   {
    "name": "Toxischer Ausbruch",
    "ast": "Seher der Tiefsee",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "3w10 GS 2",
      "schadenArt": "magisch",
      "effekt": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM"
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "4w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM"
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "5w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM"
     }
    ]
   },
   {
    "name": "Wurzelwucher",
    "ast": "Seher der Tiefsee",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Ziel muss SW - 5/10/15 bestehen, um sich zu befreien.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "GS 1 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 5 bestehen, um sich zu befreien."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "GS 2 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 10 bestehen, um sich zu befreien."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "GS 3 2 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 15 bestehen, um sich zu befreien."
     }
    ]
   },
   {
    "name": "Dornenpanzer",
    "ast": "Seher der Tiefsee",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Gegner erleiden 3/4/5w10 Schaden bei Nahkampfangriffen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "10 RÜ 2 Runden",
      "schadenArt": "magisch",
      "effekt": "Gegner erleiden 3w10 Schaden bei Nahkampfangriffen."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "15 RÜ 3 Runden",
      "schadenArt": "magisch",
      "effekt": "Gegner erleiden 4w10 Schaden bei Nahkampfangriffen."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "20 RÜ 4 Runden",
      "schadenArt": "magisch",
      "effekt": "Gegner erleiden 5w10 Schaden bei Nahkampfangriffen."
     }
    ]
   },
   {
    "name": "Geisterflamme",
    "ast": "Seher der Tiefsee",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Deine Angriffs-Skills machen +1FM und sind rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "schaden": "5 RB +1Fm",
      "schadenArt": "magisch",
      "effekt": "Deine Angriffs-Skills machen +1FM und sind rüstungsbrechend."
     },
     {
      "level": 2,
      "schaden": "10 RB +1Fm",
      "schadenArt": "magisch",
      "effekt": "Deine Angriffs-Skills machen +1FM und sind rüstungsbrechend."
     },
     {
      "level": 3,
      "schaden": "15 RB +2Fm",
      "schadenArt": "magisch",
      "effekt": "Deine Angriffs-Skills machen +1FM und sind rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Verfluchter Kreis",
    "ast": "Seher der Tiefsee",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+1w10 Für 1 Runden",
      "schadenArt": "magisch",
      "effekt": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "+1w10 Für 2 Runden",
      "schadenArt": "magisch",
      "effekt": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "+2w10 Für 3 Runden",
      "schadenArt": "magisch",
      "effekt": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben."
     }
    ]
   },
   {
    "name": "Fauler Atem",
    "ast": "Seher der Tiefsee",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "GS 3 +2 FM +1 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "GS 4 +3 FM +2 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "GS 5 +4 FM +3 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     }
    ]
   },
   {
    "name": "Waldgedicht",
    "ast": "Seher der Tiefsee",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Alle Feinde im Umkreis.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "GS 4 +2 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "GS 5 +3 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "GS 6 +4 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     }
    ]
   },
   {
    "name": "Backpfeifengewitter",
    "ast": "Sturmwüter",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Trifft 2/2/3 Ziele in einer Reihe",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK + 2w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK + 3w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK + 4w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 3 Ziele in einer Reihe"
     }
    ]
   },
   {
    "name": "Befreiender Schlag",
    "ast": "Sturmwüter",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Mache Schaden und entferne 1/2/3 Debuffs +1w10 pro entfernten Debuff",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 -1 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 1 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 -2 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 2 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 -3 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 3 Debuffs +1w10 pro entfernten Debuff"
     }
    ]
   },
   {
    "name": "Donnerwelle",
    "ast": "Sturmwüter",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Bei Verwundung verliert das Ziel für 3 Runden, zu 15/20/25%, einen Teil seiner Bewegung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2w10 -1m",
      "schadenArt": "magisch",
      "effekt": "Bei Verwundung verliert das Ziel für 3 Runden, zu 15%, einen Teil seiner Bewegung."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "3w10 -2m",
      "schadenArt": "magisch",
      "effekt": "Bei Verwundung verliert das Ziel für 3 Runden, zu 20%, einen Teil seiner Bewegung."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "4w10 -3m",
      "schadenArt": "magisch",
      "effekt": "Bei Verwundung verliert das Ziel für 3 Runden, zu 25%, einen Teil seiner Bewegung."
     }
    ]
   },
   {
    "name": "Stromstoß",
    "ast": "Sturmwüter",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Pro Rüstungsklasse des Gegners +1w10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse des Gegners +1w10"
     },
     {
      "level": 2,
      "reichweite": "2m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse des Gegners +1w10"
     },
     {
      "level": 3,
      "reichweite": "2m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse des Gegners +1w10"
     }
    ]
   },
   {
    "name": "Verkrüppeln",
    "ast": "Sturmwüter",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "-2/3/4m BW, -5/10/15 Handeln für 1/2/3 Runden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +2w10",
      "schadenArt": "physisch",
      "effekt": "-2m BW, -5 Handeln für 1 Runden"
     },
     {
      "level": 2,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +3w10",
      "schadenArt": "physisch",
      "effekt": "-3m BW, -10 Handeln für 2 Runden"
     },
     {
      "level": 3,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +4w10",
      "schadenArt": "physisch",
      "effekt": "-4m BW, -15 Handeln für 3 Runden"
     }
    ]
   },
   {
    "name": "Hochspannung",
    "ast": "Sturmwüter",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Pro Rüstungsklasse machen deine Angriffe mehr Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK +1w8 pro RÜ",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse machen deine Angriffe mehr Schaden."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK +2w8 pro RÜ",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse machen deine Angriffe mehr Schaden."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK +3w8 pro RÜ",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse machen deine Angriffe mehr Schaden."
     }
    ]
   },
   {
    "name": "Kettenblitz",
    "ast": "Sturmwüter",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "2/3/4 Gegner jeweils in 3m Umkreis.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "2 Gegner jeweils in 3m Umkreis."
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "3 Gegner jeweils in 3m Umkreis."
     },
     {
      "level": 3,
      "reichweite": "3m",
      "schaden": "5w10",
      "schadenArt": "magisch",
      "effekt": "4 Gegner jeweils in 3m Umkreis."
     }
    ]
   },
   {
    "name": "Körper aus Stein",
    "ast": "Sturmwüter",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht deine Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": ".",
      "schaden": "+3 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 2,
      "reichweite": ".",
      "schaden": "+5 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 3,
      "reichweite": ".",
      "schaden": "+10 RÜ",
      "effekt": "Erhöht deine Rüstung."
     }
    ]
   },
   {
    "name": "Wirbeltritt",
    "ast": "Sturmwüter",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     }
    ]
   },
   {
    "name": "Blitzangriff",
    "ast": "Sturmwüter",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "3/4/5 Gegner im Laufweg werden getroffen. Jeder erleide Schaden, und wird zu 20/30/40% gestunnt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "5w10 +1ST",
      "schadenArt": "magisch",
      "effekt": "3 Gegner im Laufweg werden getroffen. Jeder erleide Schaden, und wird zu 20% gestunnt."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "6w10 +1ST",
      "schadenArt": "magisch",
      "effekt": "4 Gegner im Laufweg werden getroffen. Jeder erleide Schaden, und wird zu 30% gestunnt."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "7w10 +1ST",
      "schadenArt": "magisch",
      "effekt": "5 Gegner im Laufweg werden getroffen. Jeder erleide Schaden, und wird zu 40% gestunnt."
     }
    ]
   },
   {
    "name": "Klingen- /Klauensturm",
    "ast": "Sturmwüter",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Trifft alle angrenzenden 1/1/2 Felder.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+2 10 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+3 15 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+4 20 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 2 Felder."
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Sturmwüter",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Sturmwüter",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Sturmfokus",
    "ast": "Sturmwüter",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Für 2/3/4 Runden machst du zusätzlichen Blitzschaden. +1/2/3w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+2w10",
      "schadenArt": "magisch",
      "effekt": "Für 2 Runden machst du zusätzlichen Blitzschaden. +1w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+3w10",
      "schadenArt": "magisch",
      "effekt": "Für 3 Runden machst du zusätzlichen Blitzschaden. +2w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+4w10",
      "schadenArt": "magisch",
      "effekt": "Für 4 Runden machst du zusätzlichen Blitzschaden. +3w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden"
     }
    ]
   },
   {
    "name": "Monster",
    "ast": "Tiefseepirat",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +25/50/75 LP zusätzlich",
    "stufen": [
     {
      "level": 1,
      "schaden": "LP +25",
      "effekt": "In Monsterform: +25 LP zusätzlich"
     },
     {
      "level": 2,
      "schaden": "LP +50",
      "effekt": "In Monsterform: +50 LP zusätzlich"
     },
     {
      "level": 3,
      "schaden": "LP +75",
      "effekt": "In Monsterform: +75 LP zusätzlich"
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Tiefseepirat",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+ 1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+ 2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+ 3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Biss",
    "ast": "Tiefseepirat",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du beißt ein angrenzendes Ziel",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Stärke +2w10 0 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Stärke +3w10 5 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Stärke +4w10 10 RB *2 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     }
    ]
   },
   {
    "name": "Wasserpeitsche",
    "ast": "Tiefseepirat",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     }
    ]
   },
   {
    "name": "Blutiger Zorn",
    "ast": "Tiefseepirat",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2/1/1 Blutungen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2 Blutungen."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     }
    ]
   },
   {
    "name": "Aquaknarre",
    "ast": "Tiefseepirat",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-5/10/15), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "4w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-5), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "5w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-10), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "6w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "3-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-15), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Blutdurst",
    "ast": "Tiefseepirat",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Blutmarker die das Ziel hat.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+1w4 pro Blutmarker die das Ziel hat."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+2w4 pro Blutmarker die das Ziel hat."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+3w4 pro Blutmarker die das Ziel hat."
     }
    ]
   },
   {
    "name": "Gieriger Biss",
    "ast": "Tiefseepirat",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 0 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     }
    ]
   },
   {
    "name": "Ruckzuckhieb",
    "ast": "Tiefseepirat",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "3w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "4w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "5w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     }
    ]
   },
   {
    "name": "Dornenpanzer",
    "ast": "Tiefseepirat",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Gegner erleiden 3/4/5w10 Schaden bei Nahkampfangriffen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "10 RÜ 2 Runden",
      "schadenArt": "magisch",
      "effekt": "Gegner erleiden 3w10 Schaden bei Nahkampfangriffen."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "15 RÜ 3 Runden",
      "schadenArt": "magisch",
      "effekt": "Gegner erleiden 4w10 Schaden bei Nahkampfangriffen."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "20 RÜ 4 Runden",
      "schadenArt": "magisch",
      "effekt": "Gegner erleiden 5w10 Schaden bei Nahkampfangriffen."
     }
    ]
   },
   {
    "name": "Meuchelmörder",
    "ast": "Tiefseepirat",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Hält 1/2/3 Runden. Eine Giftstufe höher, wenn das Ziel blutet.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "+2w10 GS 2",
      "schadenArt": "magisch",
      "effekt": "Hält 1 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "+3w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Hält 2 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "+4w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Hält 3 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     }
    ]
   },
   {
    "name": "Ultraschall",
    "ast": "Tiefseepirat",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Alle im Umkreis von dir können 1/2/3 Runden keine aktiven oder extra- Fähigkeiten einsetzen (nur passive).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "Keine Fähigkeiten für 1 Runden",
      "effekt": "Alle im Umkreis von dir können 1 Runden keine aktiven oder extra- Fähigkeiten einsetzen (nur passive)."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "Keine Fähigkeiten für 2 Runden",
      "effekt": "Alle im Umkreis von dir können 2 Runden keine aktiven oder extra- Fähigkeiten einsetzen (nur passive)."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "Keine Fähigkeiten für 3 Runden",
      "effekt": "Alle im Umkreis von dir können 3 Runden keine aktiven oder extra- Fähigkeiten einsetzen (nur passive)."
     }
    ]
   },
   {
    "name": "Verschlingen",
    "ast": "Tiefseepirat",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Chance: 20/40/60%, Ziel bekommt Gift Stufe 4/5/6 + 3/4/5 Blutungen. Misslingt: 4w10 Schaden für den Anwender",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 20%, Ziel bekommt Gift Stufe 4 + 3 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 40%, Ziel bekommt Gift Stufe 5 + 4 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 60%, Ziel bekommt Gift Stufe 6 + 5 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     }
    ]
   },
   {
    "name": "Raserei",
    "ast": "Tiefseepirat",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Bis zu 4 Angriffe 5 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Bis zu 5 Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Bis zu 6 Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     }
    ]
   },
   {
    "name": "Backpfeifengewitter",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Trifft 2/2/3 Ziele in einer Reihe",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK + 2w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK + 3w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK + 4w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 3 Ziele in einer Reihe"
     }
    ]
   },
   {
    "name": "Befreiender Schlag",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Mache Schaden und entferne 1/2/3 Debuffs +1w10 pro entfernten Debuff",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 -1 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 1 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 -2 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 2 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 -3 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 3 Debuffs +1w10 pro entfernten Debuff"
     }
    ]
   },
   {
    "name": "Frosthauch",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziel verliert -2/4/6 Bewegung für seine nächste Runde.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10 -2m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -2 Bewegung für seine nächste Runde."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "3w10 -4m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -4 Bewegung für seine nächste Runde."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "4w10 -6m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -6 Bewegung für seine nächste Runde."
     }
    ]
   },
   {
    "name": "Verkrüppeln",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "-2/3/4m BW, -5/10/15 Handeln für 1/2/3 Runden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +2w10",
      "schadenArt": "physisch",
      "effekt": "-2m BW, -5 Handeln für 1 Runden"
     },
     {
      "level": 2,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +3w10",
      "schadenArt": "physisch",
      "effekt": "-3m BW, -10 Handeln für 2 Runden"
     },
     {
      "level": 3,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +4w10",
      "schadenArt": "physisch",
      "effekt": "-4m BW, -15 Handeln für 3 Runden"
     }
    ]
   },
   {
    "name": "Wasserpeitsche",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     }
    ]
   },
   {
    "name": "Aquaknarre",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-5/10/15), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "4w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-5), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "5w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-10), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "6w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "3-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-15), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Eisfeld",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2w10 -50% BW",
      "schadenArt": "magisch",
      "effekt": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "3w10 -50% BW",
      "schadenArt": "magisch",
      "effekt": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "4w10 -50% BW",
      "schadenArt": "magisch",
      "effekt": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden."
     }
    ]
   },
   {
    "name": "Körper aus Stein",
    "ast": "Wellenringer",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht deine Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": ".",
      "schaden": "+3 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 2,
      "reichweite": ".",
      "schaden": "+5 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 3,
      "reichweite": ".",
      "schaden": "+10 RÜ",
      "effekt": "Erhöht deine Rüstung."
     }
    ]
   },
   {
    "name": "Wirbeltritt",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     }
    ]
   },
   {
    "name": "Klingen- /Klauensturm",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Trifft alle angrenzenden 1/1/2 Felder.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+2 10 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+3 15 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+4 20 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 2 Felder."
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Wasserschild",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/1/2 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+10 RÜ für 3 Runden",
      "schadenArt": "magisch",
      "effekt": "1 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "+20 RÜ für 4 Runden",
      "schadenArt": "magisch",
      "effekt": "1 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "+30 RÜ für 5 Runden",
      "schadenArt": "magisch",
      "effekt": "2 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Welle",
    "ast": "Wellenringer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1/1/2-mal pro Kampf. Eine 2/3/4m breite Welle trifft die ersten Gegner, Gegner werden 1/2/3w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "6w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Eine 2m breite Welle trifft die ersten Gegner, Gegner werden 1w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "7w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Eine 3m breite Welle trifft die ersten Gegner, Gegner werden 2w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "8w10",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Eine 4m breite Welle trifft die ersten Gegner, Gegner werden 3w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Arkaner Funke",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "2/3/4× pro Kampf kannst du einen Arkanen Funken zaubern. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "2× pro Kampf kannst du einen Arkanen Funken zaubern. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "3× pro Kampf kannst du einen Arkanen Funken zaubern. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "4× pro Kampf kannst du einen Arkanen Funken zaubern. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Befreiender Schlag",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Mache Schaden und entferne 1/2/3 Debuffs +1w10 pro entfernten Debuff",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 -1 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 1 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 -2 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 2 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 -3 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 3 Debuffs +1w10 pro entfernten Debuff"
     }
    ]
   },
   {
    "name": "Beruhigende Aura",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Verbündete heilen Lebenspunkte und können 1/1/2 Debuffs entfernen",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 1w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 2w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 3w10, -2 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 2 Debuffs entfernen"
     }
    ]
   },
   {
    "name": "Fluch",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du selbst bekommst 3/2/1w10 Schaden, 1/1/2 Ziele bekommen Schaden und schlafen zu 20/40/60% für 1w4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 3w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 20% für 1w4 Runden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "4w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 2w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 40% für 1w4 Runden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "5w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 1w10 Schaden, 2 Ziele bekommen Schaden und schlafen zu 60% für 1w4 Runden."
     }
    ]
   },
   {
    "name": "Schrecken der Meere",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Nach misslungenem WW -5/10/15 für 1/1/2 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "1 Gegner fliehen",
      "effekt": "Nach misslungenem WW -5 für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "2 Gegner fliehen",
      "effekt": "Nach misslungenem WW -10 für 1 Runden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "3 Gegner fliehen",
      "effekt": "Nach misslungenem WW -15 für 2 Runden."
     }
    ]
   },
   {
    "name": "Atem der Verwesung",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Strahl, der 1/2/3 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "4w10 +GS 2",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 1 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "5w10 +GS 3",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 2 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "6w10 +GS 4",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 3 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     }
    ]
   },
   {
    "name": "Dunkle Rüstung",
    "ast": "Abgrund Jäger",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du hast 1/2/3 Runden lang eine Rüstung. Du bist um Heimlichkeit +5/10/10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Du hast 1 Runden lang eine Rüstung. Du bist um Heimlichkeit +5"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+15 RÜ",
      "effekt": "Du hast 2 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+20 RÜ",
      "effekt": "Du hast 3 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     }
    ]
   },
   {
    "name": "Lebensentzug",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Mache auf 1/1/2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3",
      "schaden": "4w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 2,
      "reichweite": "5",
      "schaden": "5w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 3,
      "reichweite": "10",
      "schaden": "6w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     }
    ]
   },
   {
    "name": "Trugbild",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 30/60/90% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "1 Runden Unsichtbar",
      "effekt": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 30% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar)."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "1 Runden Unsichtbar",
      "effekt": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 60% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar)."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "2 Runden Unsichtbar",
      "effekt": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 90% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar)."
     }
    ]
   },
   {
    "name": "Schädelklirren",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Gegner im Umkreis von 2/3/4m müssen einen Willenskraftwurf -5/10/15 bestehen, sonst haben sie in ihrer nächsten Runde keine extra Aktion und eine Aktion (A oder B) weniger.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "-1 Aktionen",
      "effekt": "Gegner im Umkreis von 2m müssen einen Willenskraftwurf -5 bestehen, sonst haben sie in ihrer nächsten Runde keine extra Aktion und eine Aktion (A oder B) weniger."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "-1 Aktionen",
      "effekt": "Gegner im Umkreis von 3m müssen einen Willenskraftwurf -10 bestehen, sonst haben sie in ihrer nächsten Runde keine extra Aktion und eine Aktion (A oder B) weniger."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "-1 Aktionen",
      "effekt": "Gegner im Umkreis von 4m müssen einen Willenskraftwurf -15 bestehen, sonst haben sie in ihrer nächsten Runde keine extra Aktion und eine Aktion (A oder B) weniger."
     }
    ]
   },
   {
    "name": "Verfluchter Kreis",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+1w10 Für 1 Runden",
      "schadenArt": "magisch",
      "effekt": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "+1w10 Für 2 Runden",
      "schadenArt": "magisch",
      "effekt": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "+2w10 Für 3 Runden",
      "schadenArt": "magisch",
      "effekt": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben."
     }
    ]
   },
   {
    "name": "Welle der Heilung",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 3,
    "info": "Aura heilt jeden Verbündeten im Umkreis",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 5w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     }
    ]
   },
   {
    "name": "Gedankenkontrolle",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "WW -5/10/15 Sonst wird das Ziel von dir kontrolliert.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "1 Gegner Für 2 Runden",
      "effekt": "WW -5 Sonst wird das Ziel von dir kontrolliert."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "1 Gegner Für 2 Runden",
      "effekt": "WW -10 Sonst wird das Ziel von dir kontrolliert."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "2 Gegner Für 2 Runden",
      "effekt": "WW -15 Sonst wird das Ziel von dir kontrolliert."
     }
    ]
   },
   {
    "name": "Schwarze Kugel",
    "ast": "Abgrund Jäger",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Selbstschaden 1w20/12/10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "10w10",
      "schadenArt": "magisch",
      "effekt": "Selbstschaden 1w20/12/10"
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "11w10",
      "schadenArt": "magisch",
      "effekt": "Selbstschaden 1w20/12/10"
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "12w10",
      "schadenArt": "magisch",
      "effekt": "Selbstschaden 1w20/12/10"
     }
    ]
   },
   {
    "name": "Blutschuss",
    "ast": "Blutmagier",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 2/3/4 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 2 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 3 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "4× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 4 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     }
    ]
   },
   {
    "name": "Doppelhieb",
    "ast": "Blutmagier",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du kannst 1/2/3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "1 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 1-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "2 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 2-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "3 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Blutmagier",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Verkrüppeln",
    "ast": "Blutmagier",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "-2/3/4m BW, -5/10/15 Handeln für 1/2/3 Runden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +2w10",
      "schadenArt": "physisch",
      "effekt": "-2m BW, -5 Handeln für 1 Runden"
     },
     {
      "level": 2,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +3w10",
      "schadenArt": "physisch",
      "effekt": "-3m BW, -10 Handeln für 2 Runden"
     },
     {
      "level": 3,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +4w10",
      "schadenArt": "physisch",
      "effekt": "-4m BW, -15 Handeln für 3 Runden"
     }
    ]
   },
   {
    "name": "Wunden aufreißen",
    "ast": "Blutmagier",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 +3 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     }
    ]
   },
   {
    "name": "Blutdurst",
    "ast": "Blutmagier",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Blutmarker die das Ziel hat.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+1w4 pro Blutmarker die das Ziel hat."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+2w4 pro Blutmarker die das Ziel hat."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+3w4 pro Blutmarker die das Ziel hat."
     }
    ]
   },
   {
    "name": "Bluthund",
    "ast": "Blutmagier",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Nur verletzte Ziele wählbar. Für 1/2/3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "+5 Angriff, +2w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 1 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "+10 Angriff, +3w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 2 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "+15 Angriff, +4w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     }
    ]
   },
   {
    "name": "Blutpeitsche",
    "ast": "Blutmagier",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Ziel wird 2m zu dir gezogen und erhält Blutungen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "3w10 +1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 2m zu dir gezogen und erhält Blutungen."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "4w10 +2 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 2m zu dir gezogen und erhält Blutungen."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "5w10 +3 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 2m zu dir gezogen und erhält Blutungen."
     }
    ]
   },
   {
    "name": "Lebensentzug",
    "ast": "Blutmagier",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Mache auf 1/1/2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3",
      "schaden": "4w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 2,
      "reichweite": "5",
      "schaden": "5w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 3,
      "reichweite": "10",
      "schaden": "6w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     }
    ]
   },
   {
    "name": "Nur eine Fleischwunde",
    "ast": "Blutmagier",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Fügt dem Ziel Blutungen zu.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK 4 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt dem Ziel Blutungen zu."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK 5 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt dem Ziel Blutungen zu."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK 6 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt dem Ziel Blutungen zu."
     }
    ]
   },
   {
    "name": "Schneise",
    "ast": "Blutmagier",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK +4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK +5w10 15 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK +6w10 20 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     }
    ]
   },
   {
    "name": "Teleport",
    "ast": "Blutmagier",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "10 m Teleport – 1- mal pro Kampf",
      "effekt": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "15 m Teleport – 2- mal pro Kampf",
      "effekt": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "20 m Teleport – 3- mal pro Kampf",
      "effekt": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich."
     }
    ]
   },
   {
    "name": "Blutexpansion",
    "ast": "Blutmagier",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Du fügst dir selbst 2/1/1w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "6w10 2 BL",
      "schadenArt": "magisch",
      "effekt": "Du fügst dir selbst 2w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "7w10 3 BL",
      "schadenArt": "magisch",
      "effekt": "Du fügst dir selbst 1w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "8w10 4 BL",
      "schadenArt": "magisch",
      "effekt": "Du fügst dir selbst 1w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu."
     }
    ]
   },
   {
    "name": "Federschritt",
    "ast": "Blutmagier",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Du greifst mehrere Gegner nacheinander an und teleportierst die jeweils bis zu 5m.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+5w10 3 Gegner",
      "schadenArt": "magisch",
      "effekt": "Du greifst mehrere Gegner nacheinander an und teleportierst die jeweils bis zu 5m."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "+6w10 4 Gegner",
      "schadenArt": "magisch",
      "effekt": "Du greifst mehrere Gegner nacheinander an und teleportierst die jeweils bis zu 5m."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "+7w10 5 Gegner",
      "schadenArt": "magisch",
      "effekt": "Du greifst mehrere Gegner nacheinander an und teleportierst die jeweils bis zu 5m."
     }
    ]
   },
   {
    "name": "Feuerfaust",
    "ast": "Brandstifter der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1/2/3w10 Schaden und +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1w10 Schaden und +1FM"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 2w10 Schaden und +1FM"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 3w10 Schaden und +1FM"
     }
    ]
   },
   {
    "name": "Flamme",
    "ast": "Brandstifter der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "1/2/3-mal pro Kampf kannst du eine kleine Flamme auf deine Gegner werfen. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "2w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf kannst du eine kleine Flamme auf deine Gegner werfen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf kannst du eine kleine Flamme auf deine Gegner werfen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "3-mal pro Kampf kannst du eine kleine Flamme auf deine Gegner werfen. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Brandstifter der See",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Funke",
    "ast": "Brandstifter der See",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du kannst ein Ziel in Brand setzen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "+1 FM",
      "schadenArt": "magisch",
      "effekt": "Du kannst ein Ziel in Brand setzen."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "+2 FM",
      "schadenArt": "magisch",
      "effekt": "Du kannst ein Ziel in Brand setzen."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "+3 FM",
      "schadenArt": "magisch",
      "effekt": "Du kannst ein Ziel in Brand setzen."
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Brandstifter der See",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Brandverstärker",
    "ast": "Brandstifter der See",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Feuermarker (max5.)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro FM",
      "schadenArt": "magisch",
      "effekt": "+1w4 pro Feuermarker (max5.)"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro FM",
      "schadenArt": "magisch",
      "effekt": "+2w4 pro Feuermarker (max5.)"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro FM",
      "schadenArt": "magisch",
      "effekt": "+3w4 pro Feuermarker (max5.)"
     }
    ]
   },
   {
    "name": "Dunkle Rüstung",
    "ast": "Brandstifter der See",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du hast 1/2/3 Runden lang eine Rüstung. Du bist um Heimlichkeit +5/10/10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Du hast 1 Runden lang eine Rüstung. Du bist um Heimlichkeit +5"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+15 RÜ",
      "effekt": "Du hast 2 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+20 RÜ",
      "effekt": "Du hast 3 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     }
    ]
   },
   {
    "name": "Elementargeist: Kleiner Teufel",
    "ast": "Brandstifter der See",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "LP 30/60/90 NK 30/40/50, 2/3/4w10 Schaden, Eis: RB 0/10/15 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "1 Elemente 2 Runden",
      "effekt": "LP 30 NK 30, 2w10 Schaden, Eis: RB 0 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "1 Elemente 2 Runden",
      "effekt": "LP 60 NK 40, 3w10 Schaden, Eis: RB 10 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "2 Elemente 3 Runden",
      "effekt": "LP 90 NK 50, 4w10 Schaden, Eis: RB 15 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     }
    ]
   },
   {
    "name": "Feuerball",
    "ast": "Brandstifter der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "1x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "5w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "2x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "6w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "3x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Brennender Kreis",
    "ast": "Brandstifter der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Im Umkreis bekommen alle Personen Feuerschaden und 1/2/3 Feuermarker.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 1 Feuermarker."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "5w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 2 Feuermarker."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "6w10 +3 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 3 Feuermarker."
     }
    ]
   },
   {
    "name": "Feuersturm",
    "ast": "Brandstifter der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/2/3× pro Kampf kannst du einen Feuersturm zaubern. Nach Anwendung des Skills 2 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "5w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Feuersturm zaubern. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "6w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "2× pro Kampf kannst du einen Feuersturm zaubern. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "7w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "3× pro Kampf kannst du einen Feuersturm zaubern. Nach Anwendung des Skills 2 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Geisterflamme",
    "ast": "Brandstifter der See",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Deine Angriffs-Skills machen +1FM und sind rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "schaden": "5 RB +1Fm",
      "schadenArt": "magisch",
      "effekt": "Deine Angriffs-Skills machen +1FM und sind rüstungsbrechend."
     },
     {
      "level": 2,
      "schaden": "10 RB +1Fm",
      "schadenArt": "magisch",
      "effekt": "Deine Angriffs-Skills machen +1FM und sind rüstungsbrechend."
     },
     {
      "level": 3,
      "schaden": "15 RB +2Fm",
      "schadenArt": "magisch",
      "effekt": "Deine Angriffs-Skills machen +1FM und sind rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Inferno",
    "ast": "Brandstifter der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1/2/3x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10 m",
      "schaden": "6w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "1x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "15 m",
      "schaden": "7w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "2x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "20 m",
      "schaden": "8w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "3x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Wurmloch",
    "ast": "Brandstifter der See",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Öffnet ein Wurmloch zwischen deinem Standort und einem Punkt in 10/15/20 m Entfernung. Du und 2/3/4 Verbündete können sich sofort zwischen beiden Enden bewegen. Gegner, die es betreten, werden 1 W6 Felder in eine zufällige Richtung teleportiert. Das Wurmloch bleibt 1/2/3 Runden offen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE 10 m",
      "schaden": "Wurmloch, das 1-mal benutzt werden kann.",
      "effekt": "Öffnet ein Wurmloch zwischen deinem Standort und einem Punkt in 10 m Entfernung. Du und 2 Verbündete können sich sofort zwischen beiden Enden bewegen. Gegner, die es betreten, werden 1 W6 Felder in eine zufällige Richtung teleportiert. Das Wurmloch bleibt 1 Runden offen."
     },
     {
      "level": 2,
      "reichweite": "SE 15 m",
      "schaden": "Wurmloch, das 2-mal benutzt werden kann.",
      "effekt": "Öffnet ein Wurmloch zwischen deinem Standort und einem Punkt in 15 m Entfernung. Du und 3 Verbündete können sich sofort zwischen beiden Enden bewegen. Gegner, die es betreten, werden 1 W6 Felder in eine zufällige Richtung teleportiert. Das Wurmloch bleibt 2 Runden offen."
     },
     {
      "level": 3,
      "reichweite": "SE 20 m",
      "schaden": "Wurmloch, das 3-mal benutzt werden kann.",
      "effekt": "Öffnet ein Wurmloch zwischen deinem Standort und einem Punkt in 20 m Entfernung. Du und 4 Verbündete können sich sofort zwischen beiden Enden bewegen. Gegner, die es betreten, werden 1 W6 Felder in eine zufällige Richtung teleportiert. Das Wurmloch bleibt 3 Runden offen."
     }
    ]
   },
   {
    "name": "Feuerfaust",
    "ast": "Dämon",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1/2/3w10 Schaden und +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1w10 Schaden und +1FM"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 2w10 Schaden und +1FM"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 3w10 Schaden und +1FM"
     }
    ]
   },
   {
    "name": "Monster Lord",
    "ast": "Dämon",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +50/75/100 LP zusätzlich",
    "stufen": [
     {
      "level": 1,
      "schaden": "LP +50",
      "effekt": "In Monsterform: +50 LP zusätzlich"
     },
     {
      "level": 2,
      "schaden": "LP +75",
      "effekt": "In Monsterform: +75 LP zusätzlich"
     },
     {
      "level": 3,
      "schaden": "LP +100",
      "effekt": "In Monsterform: +100 LP zusätzlich"
     }
    ]
   },
   {
    "name": "Pure Muskeln +",
    "ast": "Dämon",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +15/30/50 Stärke",
    "stufen": [
     {
      "level": 1,
      "schaden": "+15 Stärke",
      "effekt": "In Monsterform: +15 Stärke"
     },
     {
      "level": 2,
      "schaden": "+30 Stärke",
      "effekt": "In Monsterform: +30 Stärke"
     },
     {
      "level": 3,
      "schaden": "+50 Stärke",
      "effekt": "In Monsterform: +50 Stärke"
     }
    ]
   },
   {
    "name": "Schrecken der Meere",
    "ast": "Dämon",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Nach misslungenem WW -5/10/15 für 1/1/2 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "1 Gegner fliehen",
      "effekt": "Nach misslungenem WW -5 für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "2 Gegner fliehen",
      "effekt": "Nach misslungenem WW -10 für 1 Runden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "3 Gegner fliehen",
      "effekt": "Nach misslungenem WW -15 für 2 Runden."
     }
    ]
   },
   {
    "name": "Wilde Wut",
    "ast": "Dämon",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden, -15/10/5 Nahkampf",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "+2w10 0 RB",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden, -15 Nahkampf"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "+3w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden, -10 Nahkampf"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "+4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden, -5 Nahkampf"
     }
    ]
   },
   {
    "name": "Brandverstärker",
    "ast": "Dämon",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Feuermarker (max5.)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro FM",
      "schadenArt": "magisch",
      "effekt": "+1w4 pro Feuermarker (max5.)"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro FM",
      "schadenArt": "magisch",
      "effekt": "+2w4 pro Feuermarker (max5.)"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro FM",
      "schadenArt": "magisch",
      "effekt": "+3w4 pro Feuermarker (max5.)"
     }
    ]
   },
   {
    "name": "Dunkle Rüstung",
    "ast": "Dämon",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du hast 1/2/3 Runden lang eine Rüstung. Du bist um Heimlichkeit +5/10/10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Du hast 1 Runden lang eine Rüstung. Du bist um Heimlichkeit +5"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+15 RÜ",
      "effekt": "Du hast 2 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+20 RÜ",
      "effekt": "Du hast 3 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     }
    ]
   },
   {
    "name": "Eiserner Wille",
    "ast": "Dämon",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Für 1/2/3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 Widerstand",
      "effekt": "Für 1 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+20 Widerstand",
      "effekt": "Für 2 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+30 Widerstand",
      "effekt": "Für 3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     }
    ]
   },
   {
    "name": "Spalter",
    "ast": "Dämon",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "1/2/3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK 10 RB",
      "schadenArt": "physisch",
      "effekt": "1 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK 15 RB",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK 20 RB",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Brennender Kreis",
    "ast": "Dämon",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Im Umkreis bekommen alle Personen Feuerschaden und 1/2/3 Feuermarker.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 1 Feuermarker."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "5w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 2 Feuermarker."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "6w10 +3 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 3 Feuermarker."
     }
    ]
   },
   {
    "name": "Entfacher",
    "ast": "Dämon",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "In den nächsten 3/4/5 Runden verursachen deine Angriffe Feuermarker. Nach Aktivierung des Skills erhältst du +2/2/1 Fm. Fängt ein Ziel durch den Skill an zu brennen, erhält es zusätzlich sofort Schaden. Geht das Feuer an dir aus, bevor die Wirkungsdauer vorbei ist, erlischt auch der Skill.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+2 +1 FM Bei Entzündung 2w10",
      "schadenArt": "magisch",
      "effekt": "In den nächsten 3 Runden verursachen deine Angriffe Feuermarker. Nach Aktivierung des Skills erhältst du +2 Fm. Fängt ein Ziel durch den Skill an zu brennen, erhält es zusätzlich sofort Schaden. Geht das Feuer an dir aus, bevor die Wirkungsdauer vorbei ist, erlischt auch der Skill."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+3 +2 FM Bei Entzündung 3w10",
      "schadenArt": "magisch",
      "effekt": "In den nächsten 4 Runden verursachen deine Angriffe Feuermarker. Nach Aktivierung des Skills erhältst du +2 Fm. Fängt ein Ziel durch den Skill an zu brennen, erhält es zusätzlich sofort Schaden. Geht das Feuer an dir aus, bevor die Wirkungsdauer vorbei ist, erlischt auch der Skill."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+4 +2 FM Bei Entzündung 4w10",
      "schadenArt": "magisch",
      "effekt": "In den nächsten 5 Runden verursachen deine Angriffe Feuermarker. Nach Aktivierung des Skills erhältst du +1 Fm. Fängt ein Ziel durch den Skill an zu brennen, erhält es zusätzlich sofort Schaden. Geht das Feuer an dir aus, bevor die Wirkungsdauer vorbei ist, erlischt auch der Skill."
     }
    ]
   },
   {
    "name": "Klingen- /Klauensturm",
    "ast": "Dämon",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Trifft alle angrenzenden 1/1/2 Felder.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+2 10 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+3 15 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+4 20 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 2 Felder."
     }
    ]
   },
   {
    "name": "Inferno",
    "ast": "Dämon",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1/2/3x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10 m",
      "schaden": "6w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "1x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "15 m",
      "schaden": "7w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "2x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "20 m",
      "schaden": "8w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "3x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Seelenpakt",
    "ast": "Dämon",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 1/2/3 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 1 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     },
     {
      "level": 2,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 2 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     },
     {
      "level": 3,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 3 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     }
    ]
   },
   {
    "name": "Biss",
    "ast": "Drache",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du beißt ein angrenzendes Ziel",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Stärke +2w10 0 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Stärke +3w10 5 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Stärke +4w10 10 RB *2 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     }
    ]
   },
   {
    "name": "Feuerfaust",
    "ast": "Drache",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1/2/3w10 Schaden und +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1w10 Schaden und +1FM"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 2w10 Schaden und +1FM"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 3w10 Schaden und +1FM"
     }
    ]
   },
   {
    "name": "Göttliche Flügel",
    "ast": "Drache",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Du kannst für 1/2/3 Runden fliegen",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "Fliegen",
      "effekt": "Du kannst für 1 Runden fliegen"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "Fliegen",
      "effekt": "Du kannst für 2 Runden fliegen"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "Fliegen",
      "effekt": "Du kannst für 3 Runden fliegen"
     }
    ]
   },
   {
    "name": "Monster Gott",
    "ast": "Drache",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +50/100/150 LP zusätzlich",
    "stufen": [
     {
      "level": 1,
      "schaden": "LP +50",
      "effekt": "In Monsterform: +50 LP zusätzlich"
     },
     {
      "level": 2,
      "schaden": "LP +100",
      "effekt": "In Monsterform: +100 LP zusätzlich"
     },
     {
      "level": 3,
      "schaden": "LP +150",
      "effekt": "In Monsterform: +150 LP zusätzlich"
     }
    ]
   },
   {
    "name": "Pure Muskeln +",
    "ast": "Drache",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +15/30/50 Stärke",
    "stufen": [
     {
      "level": 1,
      "schaden": "+15 Stärke",
      "effekt": "In Monsterform: +15 Stärke"
     },
     {
      "level": 2,
      "schaden": "+30 Stärke",
      "effekt": "In Monsterform: +30 Stärke"
     },
     {
      "level": 3,
      "schaden": "+50 Stärke",
      "effekt": "In Monsterform: +50 Stärke"
     }
    ]
   },
   {
    "name": "Feuerball",
    "ast": "Drache",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "1x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "5w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "2x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "6w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "3x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Gieriger Biss",
    "ast": "Drache",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 0 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     }
    ]
   },
   {
    "name": "Körper aus Titan",
    "ast": "Drache",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht deine Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": ".",
      "schaden": "+10 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 2,
      "reichweite": ".",
      "schaden": "+15 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 3,
      "reichweite": ".",
      "schaden": "+20 RÜ",
      "effekt": "Erhöht deine Rüstung."
     }
    ]
   },
   {
    "name": "Sprungangriff",
    "ast": "Drache",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Springe auf dein Ziel und verursache in 1/2/2 m Umkreis. Angrenzende Ziele erhalten halben Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "3w10 1 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 1 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "4w10 2 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 2 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "5w10 2 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 2 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     }
    ]
   },
   {
    "name": "Brennender Kreis",
    "ast": "Drache",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Im Umkreis bekommen alle Personen Feuerschaden und 1/2/3 Feuermarker.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 1 Feuermarker."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "5w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 2 Feuermarker."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "6w10 +3 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 3 Feuermarker."
     }
    ]
   },
   {
    "name": "Klingen- /Klauensturm",
    "ast": "Drache",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Trifft alle angrenzenden 1/1/2 Felder.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+2 10 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+3 15 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+4 20 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 2 Felder."
     }
    ]
   },
   {
    "name": "Kometeneinschlag",
    "ast": "Drache",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Stärkerer Nahkampfschaden mit Durchschlag.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1w10 0 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     },
     {
      "level": 2,
      "schaden": "+2w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     },
     {
      "level": 3,
      "schaden": "+3w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     }
    ]
   },
   {
    "name": "Inferno",
    "ast": "Drache",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1/2/3x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10 m",
      "schaden": "6w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "1x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "15 m",
      "schaden": "7w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "2x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "20 m",
      "schaden": "8w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "3x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Verschlingen",
    "ast": "Drache",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Chance: 20/40/60%, Ziel bekommt Gift Stufe 4/5/6 + 3/4/5 Blutungen. Misslingt: 4w10 Schaden für den Anwender",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 20%, Ziel bekommt Gift Stufe 4 + 3 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 40%, Ziel bekommt Gift Stufe 5 + 4 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 60%, Ziel bekommt Gift Stufe 6 + 5 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Divinius Chimäre",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Kopfnuss",
    "ast": "Divinius Chimäre",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Ziel ist zu 25/50/75% für 1 Runde gestunnt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 1 ST",
      "schadenArt": "physisch",
      "effekt": "Ziel ist zu 25% für 1 Runde gestunnt."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 1 ST",
      "schadenArt": "physisch",
      "effekt": "Ziel ist zu 50% für 1 Runde gestunnt."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 1 ST",
      "schadenArt": "physisch",
      "effekt": "Ziel ist zu 75% für 1 Runde gestunnt."
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Divinius Chimäre",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Wunden aufreißen",
    "ast": "Divinius Chimäre",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 +3 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     }
    ]
   },
   {
    "name": "Sternenfaust",
    "ast": "Divinius Chimäre",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Nahkampfangriffe stunnen Gegner zu 10/15/20 %. Du machst -2/1/0w10 weniger Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "10 % Stun",
      "schadenArt": "physisch",
      "effekt": "Nahkampfangriffe stunnen Gegner zu 10 %. Du machst -2w10 weniger Schaden."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "15 % Stun",
      "schadenArt": "physisch",
      "effekt": "Nahkampfangriffe stunnen Gegner zu 15 %. Du machst -1w10 weniger Schaden."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "20 % Stun",
      "schadenArt": "physisch",
      "effekt": "Nahkampfangriffe stunnen Gegner zu 20 %. Du machst -0w10 weniger Schaden."
     }
    ]
   },
   {
    "name": "Ruckzuckhieb",
    "ast": "Divinius Chimäre",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "3w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "4w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "5w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     }
    ]
   },
   {
    "name": "Wirbeltritt",
    "ast": "Divinius Chimäre",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 1w4m Stoß",
      "schadenArt": "physisch",
      "effekt": "4 Gegner in einem Halbkreis vor dir erhalten Schaden und werden bei misslungenem -15 SW 1w4 m weggestoßen."
     }
    ]
   },
   {
    "name": "Schallschuss",
    "ast": "Divinius Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "In einer Linie müssen alle getroffenen Ziele einen Stun-Wurf 40/60/80% bestehen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "2w10 1 Runden Stun",
      "schadenArt": "magisch",
      "effekt": "In einer Linie müssen alle getroffenen Ziele einen Stun-Wurf 40% bestehen."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "3w10 1 Runden Stun",
      "schadenArt": "magisch",
      "effekt": "In einer Linie müssen alle getroffenen Ziele einen Stun-Wurf 60% bestehen."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "4w10 2 Runden Stun",
      "schadenArt": "magisch",
      "effekt": "In einer Linie müssen alle getroffenen Ziele einen Stun-Wurf 80% bestehen."
     }
    ]
   },
   {
    "name": "Speicher",
    "ast": "Divinius Chimäre",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Du kannst eine gewirkte Fähigkeit in Reichweiten speichern und benutzen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10 m",
      "schaden": "1 Fähigkeiten stehlen",
      "effekt": "Du kannst eine gewirkte Fähigkeit in Reichweiten speichern und benutzen."
     },
     {
      "level": 2,
      "reichweite": "15 m",
      "schaden": "2 Fähigkeiten stehlen",
      "effekt": "Du kannst eine gewirkte Fähigkeit in Reichweiten speichern und benutzen."
     },
     {
      "level": 3,
      "reichweite": "20 m",
      "schaden": "3 Fähigkeiten stehlen",
      "effekt": "Du kannst eine gewirkte Fähigkeit in Reichweiten speichern und benutzen."
     }
    ]
   },
   {
    "name": "Lichtgeschwindigkeit",
    "ast": "Divinius Chimäre",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du kannst 2/3/4 deiner Fähigkeiten hintereinander einsetzen. Die Fähigkeiten Stufe ist die gleiche wie die von Lichtgeschwindigkeit.",
    "stufen": [
     {
      "level": 1,
      "schaden": "2 Fähigkeiten",
      "effekt": "Du kannst 2 deiner Fähigkeiten hintereinander einsetzen. Die Fähigkeiten Stufe ist die gleiche wie die von Lichtgeschwindigkeit."
     },
     {
      "level": 2,
      "schaden": "3 Fähigkeiten",
      "effekt": "Du kannst 3 deiner Fähigkeiten hintereinander einsetzen. Die Fähigkeiten Stufe ist die gleiche wie die von Lichtgeschwindigkeit."
     },
     {
      "level": 3,
      "schaden": "4 Fähigkeiten",
      "effekt": "Du kannst 4 deiner Fähigkeiten hintereinander einsetzen. Die Fähigkeiten Stufe ist die gleiche wie die von Lichtgeschwindigkeit."
     }
    ]
   },
   {
    "name": "Magischer Schild",
    "ast": "Arkane Chimäre",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Für 1/2/3 Runden 3/5/10 Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+3 RÜ",
      "effekt": "Für 1 Runden 3 Rüstung."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+5 RÜ",
      "effekt": "Für 2 Runden 5 Rüstung."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Für 3 Runden 10 Rüstung."
     }
    ]
   },
   {
    "name": "Arkanes Schwert",
    "ast": "Arkane Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3× pro Kampf kannst du einen Arkanes Schwert zaubern, das bis zu 2 Gegner in einer 3/4/5m langen, geraden Linie trifft. Nach Anwendung des Skills 2/2/1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Arkanes Schwert zaubern, das bis zu 2 Gegner in einer 3m langen, geraden Linie trifft. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "2× pro Kampf kannst du einen Arkanes Schwert zaubern, das bis zu 2 Gegner in einer 4m langen, geraden Linie trifft. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "5w10",
      "schadenArt": "magisch",
      "effekt": "3× pro Kampf kannst du einen Arkanes Schwert zaubern, das bis zu 2 Gegner in einer 5m langen, geraden Linie trifft. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Arkane Geschosse",
    "ast": "Arkane Chimäre",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/1/2× pro Kampf kannst du Arkane Geschosse zaubern und alle Kugeln auf ein Ziel in Reichweite schießen, oder die Kugeln bis zu 3/4/5 Runden hinter dir schweben lassen und pro Aktion A/B/Extra 1/2/3 Kugeln abfeuern. Nach Anwendung des Skills 2 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 x 3",
      "effekt": "1× pro Kampf kannst du Arkane Geschosse zaubern und alle Kugeln auf ein Ziel in Reichweite schießen, oder die Kugeln bis zu 3 Runden hinter dir schweben lassen und pro Aktion A/B/Extra 1 Kugeln abfeuern. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "4w10 x 4",
      "effekt": "1× pro Kampf kannst du Arkane Geschosse zaubern und alle Kugeln auf ein Ziel in Reichweite schießen, oder die Kugeln bis zu 4 Runden hinter dir schweben lassen und pro Aktion A/B/Extra 2 Kugeln abfeuern. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "5w10 x 5",
      "effekt": "2× pro Kampf kannst du Arkane Geschosse zaubern und alle Kugeln auf ein Ziel in Reichweite schießen, oder die Kugeln bis zu 5 Runden hinter dir schweben lassen und pro Aktion A/B/Extra 3 Kugeln abfeuern. Nach Anwendung des Skills 2 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Arkaner Sturm",
    "ast": "Arkane Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1× pro Kampf kannst du einen Arkanen Sturm zaubern. Personen im Sturm verlieren für ihre nächsten Runde zu 20/40/60% eine Aktion in ihrer Wahl A oder B",
    "stufen": [
     {
      "level": 1,
      "reichweite": "6m",
      "schaden": "5w10 2x2/3x3/3x3m",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Arkanen Sturm zaubern. Personen im Sturm verlieren für ihre nächsten Runde zu 20% eine Aktion in ihrer Wahl A oder B"
     },
     {
      "level": 2,
      "reichweite": "9m",
      "schaden": "6w10 2x2/3x3/3x3m",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Arkanen Sturm zaubern. Personen im Sturm verlieren für ihre nächsten Runde zu 40% eine Aktion in ihrer Wahl A oder B"
     },
     {
      "level": 3,
      "reichweite": "12m",
      "schaden": "7w10 2x2/3x3/3x3m",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Arkanen Sturm zaubern. Personen im Sturm verlieren für ihre nächsten Runde zu 60% eine Aktion in ihrer Wahl A oder B"
     }
    ]
   },
   {
    "name": "Stromstoß",
    "ast": "Elektro Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Pro Rüstungsklasse des Gegners +1w10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse des Gegners +1w10"
     },
     {
      "level": 2,
      "reichweite": "2m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse des Gegners +1w10"
     },
     {
      "level": 3,
      "reichweite": "2m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse des Gegners +1w10"
     }
    ]
   },
   {
    "name": "Hochspannung",
    "ast": "Elektro Chimäre",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Pro Rüstungsklasse machen deine Angriffe mehr Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK +1w8 pro RÜ",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse machen deine Angriffe mehr Schaden."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK +2w8 pro RÜ",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse machen deine Angriffe mehr Schaden."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK +3w8 pro RÜ",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse machen deine Angriffe mehr Schaden."
     }
    ]
   },
   {
    "name": "Zorn der Wolken",
    "ast": "Elektro Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Blitz springt auf 1/2/3 Ziele im Umkreis von jeweils 1/2/3 m über.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "5w10 20% Stun",
      "schadenArt": "magisch",
      "effekt": "Blitz springt auf 1 Ziele im Umkreis von jeweils 1 m über."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "6w10 40% Stun",
      "schadenArt": "magisch",
      "effekt": "Blitz springt auf 2 Ziele im Umkreis von jeweils 2 m über."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "7w10 60% Stun",
      "schadenArt": "magisch",
      "effekt": "Blitz springt auf 3 Ziele im Umkreis von jeweils 3 m über."
     }
    ]
   },
   {
    "name": "Sturmfokus",
    "ast": "Elektro Chimäre",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Für 2/3/4 Runden machst du zusätzlichen Blitzschaden. +1/2/3w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+2w10",
      "schadenArt": "magisch",
      "effekt": "Für 2 Runden machst du zusätzlichen Blitzschaden. +1w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+3w10",
      "schadenArt": "magisch",
      "effekt": "Für 3 Runden machst du zusätzlichen Blitzschaden. +2w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+4w10",
      "schadenArt": "magisch",
      "effekt": "Für 4 Runden machst du zusätzlichen Blitzschaden. +3w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden"
     }
    ]
   },
   {
    "name": "Feuerfaust",
    "ast": "Feuer Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1/2/3w10 Schaden und +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1w10 Schaden und +1FM"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 2w10 Schaden und +1FM"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 3w10 Schaden und +1FM"
     }
    ]
   },
   {
    "name": "Feuerball",
    "ast": "Feuer Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "1x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "5w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "2x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "6w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "3x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Brennender Kreis",
    "ast": "Feuer Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Im Umkreis bekommen alle Personen Feuerschaden und 1/2/3 Feuermarker.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 1 Feuermarker."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "5w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 2 Feuermarker."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "6w10 +3 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 3 Feuermarker."
     }
    ]
   },
   {
    "name": "Inferno",
    "ast": "Feuer Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1/2/3x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10 m",
      "schaden": "6w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "1x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "15 m",
      "schaden": "7w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "2x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "20 m",
      "schaden": "8w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "3x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Frosthauch",
    "ast": "Frost Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziel verliert -2/4/6 Bewegung für seine nächste Runde.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10 -2m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -2 Bewegung für seine nächste Runde."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "3w10 -4m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -4 Bewegung für seine nächste Runde."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "4w10 -6m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -6 Bewegung für seine nächste Runde."
     }
    ]
   },
   {
    "name": "Eisfeld",
    "ast": "Frost Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2w10 -50% BW",
      "schadenArt": "magisch",
      "effekt": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "3w10 -50% BW",
      "schadenArt": "magisch",
      "effekt": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "4w10 -50% BW",
      "schadenArt": "magisch",
      "effekt": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden."
     }
    ]
   },
   {
    "name": "Eisstachel",
    "ast": "Frost Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/2/3-mal pro Kampf. Ziel erhält -10/-15/-20 Rüstung für 1w6 Runden. Nach Anwendung des Skills 2 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "5w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Ziel erhält -10/-15/-20 Rüstung für 1w6 Runden. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "6w10",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Ziel erhält -10/-15/-20 Rüstung für 1w6 Runden. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "7w10",
      "schadenArt": "magisch",
      "effekt": "3-mal pro Kampf. Ziel erhält -10/-15/-20 Rüstung für 1w6 Runden. Nach Anwendung des Skills 2 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Stoppuhr/ Eissphäre",
    "ast": "Frost Chimäre",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Alles im entsprechenden Radius ist für 1/1/2 Runden in Raum und Zeit eingefroren. Eingefrorene Ziele können weder handeln noch bewegt, angegriffen oder von Fähigkeiten betroffen werden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2x2/3x3/3x3 einfrieren",
      "effekt": "Alles im entsprechenden Radius ist für 1 Runden in Raum und Zeit eingefroren. Eingefrorene Ziele können weder handeln noch bewegt, angegriffen oder von Fähigkeiten betroffen werden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "2x2/3x3/3x3 einfrieren",
      "effekt": "Alles im entsprechenden Radius ist für 1 Runden in Raum und Zeit eingefroren. Eingefrorene Ziele können weder handeln noch bewegt, angegriffen oder von Fähigkeiten betroffen werden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "2x2/3x3/3x3 einfrieren",
      "effekt": "Alles im entsprechenden Radius ist für 2 Runden in Raum und Zeit eingefroren. Eingefrorene Ziele können weder handeln noch bewegt, angegriffen oder von Fähigkeiten betroffen werden."
     }
    ]
   },
   {
    "name": "Giftmischer",
    "ast": "Gift Chimäre",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "NK- und FK-Angriffe verursachen 1/2/3 Runden Gift.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "schadenArt": "magisch",
      "effekt": "NK- und FK-Angriffe verursachen 1 Runden Gift."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "schadenArt": "magisch",
      "effekt": "NK- und FK-Angriffe verursachen 2 Runden Gift."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "schadenArt": "magisch",
      "effekt": "NK- und FK-Angriffe verursachen 3 Runden Gift."
     }
    ]
   },
   {
    "name": "Atem der Verwesung",
    "ast": "Gift Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Strahl, der 1/2/3 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "4w10 +GS 2",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 1 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "5w10 +GS 3",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 2 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "6w10 +GS 4",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 3 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     }
    ]
   },
   {
    "name": "Welle der Korrosion",
    "ast": "Gift Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle im Umkreis",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "3w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis"
     },
     {
      "level": 2,
      "reichweite": "3m UK",
      "schaden": "4w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis"
     },
     {
      "level": 3,
      "reichweite": "4m UK",
      "schaden": "5w10 GS 5",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis"
     }
    ]
   },
   {
    "name": "Fauler Atem",
    "ast": "Gift Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "GS 3 +2 FM +1 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "GS 4 +3 FM +2 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "GS 5 +4 FM +3 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     }
    ]
   },
   {
    "name": "Beruhigende Aura",
    "ast": "Heilige Chimäre",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Verbündete heilen Lebenspunkte und können 1/1/2 Debuffs entfernen",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 1w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 2w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 3w10, -2 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 2 Debuffs entfernen"
     }
    ]
   },
   {
    "name": "Buße",
    "ast": "Heilige Chimäre",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Geht nur, wenn der Anwender einen Debuff hat. 1/2/3 Ziele in Reichweite werden geheilt und verlieren alle Debuffs.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "HL 3w10 -alle Debuffs",
      "schadenArt": "heilung",
      "effekt": "Geht nur, wenn der Anwender einen Debuff hat. 1 Ziele in Reichweite werden geheilt und verlieren alle Debuffs."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "HL 4w10 -alle Debuffs",
      "schadenArt": "heilung",
      "effekt": "Geht nur, wenn der Anwender einen Debuff hat. 2 Ziele in Reichweite werden geheilt und verlieren alle Debuffs."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "HL 5w10 -alle Debuffs",
      "schadenArt": "heilung",
      "effekt": "Geht nur, wenn der Anwender einen Debuff hat. 3 Ziele in Reichweite werden geheilt und verlieren alle Debuffs."
     }
    ]
   },
   {
    "name": "Welle der Heilung",
    "ast": "Heilige Chimäre",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 3,
    "info": "Aura heilt jeden Verbündeten im Umkreis",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 5w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     }
    ]
   },
   {
    "name": "Kettenblitz der Heilung",
    "ast": "Heilige Chimäre",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 4,
    "info": "Kettenheilung für 3/4/5 Ziele in jeweils 2/3/4 m Abstand. Kein Pingpong-Effekt also Hin und Her",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Kettenheilung für 3 Ziele in jeweils 2 m Abstand. Kein Pingpong-Effekt also Hin und Her"
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "HL 7w10",
      "schadenArt": "heilung",
      "effekt": "Kettenheilung für 4 Ziele in jeweils 3 m Abstand. Kein Pingpong-Effekt also Hin und Her"
     },
     {
      "level": 3,
      "reichweite": "4m",
      "schaden": "HL 8w10",
      "schadenArt": "heilung",
      "effekt": "Kettenheilung für 5 Ziele in jeweils 4 m Abstand. Kein Pingpong-Effekt also Hin und Her"
     }
    ]
   },
   {
    "name": "Knochengriff",
    "ast": "Skelett Chimäre",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Ein Ziel erhält für 1/2/3 Runden -2/3/4 Bewegung und -10 auf Handeln.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10m",
      "schaden": "-2m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 1 Runden -2 Bewegung und -10 auf Handeln."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "-3m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 2 Runden -3 Bewegung und -10 auf Handeln."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "-4m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 3 Runden -4 Bewegung und -10 auf Handeln."
     }
    ]
   },
   {
    "name": "Knochenrüstung",
    "ast": "Skelett Chimäre",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Ein Ziel in Reichweite erhält Rüstung für 3/4/5 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m SE",
      "schaden": "+5 RÜ",
      "effekt": "Ein Ziel in Reichweite erhält Rüstung für 3 Runden."
     },
     {
      "level": 2,
      "reichweite": "10m SE",
      "schaden": "+10 RÜ",
      "effekt": "Ein Ziel in Reichweite erhält Rüstung für 4 Runden."
     },
     {
      "level": 3,
      "reichweite": "15m SE",
      "schaden": "+15 RÜ",
      "effekt": "Ein Ziel in Reichweite erhält Rüstung für 5 Runden."
     }
    ]
   },
   {
    "name": "Knochenspeer",
    "ast": "Skelett Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/1/2-mal pro Kampf. Du schleuderst einen Knochenspeer der 2/3/4 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Du schleuderst einen Knochenspeer der 2 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Du schleuderst einen Knochenspeer der 3 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "6w10 15 RB",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Du schleuderst einen Knochenspeer der 4 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Skelett-Magier",
    "ast": "Skelett Chimäre",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Für 2/3/4 Runden LP 10/20/30, Monsterwert 40/50/60, Fähigkeiten: Funke/ Feuerball/ Feuersturm",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "1 Skelettmagier",
      "effekt": "Für 2 Runden LP 10, Monsterwert 40, Fähigkeiten: Funke/ Feuerball/ Feuersturm"
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "2 Skelettmagier",
      "effekt": "Für 3 Runden LP 20, Monsterwert 50, Fähigkeiten: Funke/ Feuerball/ Feuersturm"
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "3 Skelettmagier",
      "effekt": "Für 4 Runden LP 30, Monsterwert 60, Fähigkeiten: Funke/ Feuerball/ Feuersturm"
     }
    ]
   },
   {
    "name": "Dornenhaut",
    "ast": "Wald Chimäre",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du erhältst für 1/2/3 Runden +5/5/10 Rüstung. Nahkampfangreifer erleiden automatisch 1/2/3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5/7/10m wirken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "(5m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 1 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 1W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5m wirken."
     },
     {
      "level": 2,
      "reichweite": "(7m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 2 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 2W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 7m wirken."
     },
     {
      "level": 3,
      "reichweite": "(10m) SE",
      "schaden": "+10 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 3 Runden +10 Rüstung. Nahkampfangreifer erleiden automatisch 3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 10m wirken."
     }
    ]
   },
   {
    "name": "Wurzelwucher",
    "ast": "Wald Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Ziel muss SW - 5/10/15 bestehen, um sich zu befreien.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "GS 1 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 5 bestehen, um sich zu befreien."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "GS 2 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 10 bestehen, um sich zu befreien."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "GS 3 2 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 15 bestehen, um sich zu befreien."
     }
    ]
   },
   {
    "name": "Wucherfaust",
    "ast": "Wald Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Triffst du deinen Gegner, kann er sich 1/1/2 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "SS +1w10 +1 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 1 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "SS +2w10 +2 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 1 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "SS +3w10 +3 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 2 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     }
    ]
   },
   {
    "name": "Waldgedicht",
    "ast": "Wald Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Alle Feinde im Umkreis.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "GS 4 +2 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "GS 5 +3 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "GS 6 +4 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     }
    ]
   },
   {
    "name": "Wasserpeitsche",
    "ast": "Wasser Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     }
    ]
   },
   {
    "name": "Aquaknarre",
    "ast": "Wasser Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-5/10/15), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "4w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-5), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "5w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-10), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "6w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "3-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-15), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Wasserschild",
    "ast": "Wasser Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/1/2 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+10 RÜ für 3 Runden",
      "schadenArt": "magisch",
      "effekt": "1 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "+20 RÜ für 4 Runden",
      "schadenArt": "magisch",
      "effekt": "1 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "+30 RÜ für 5 Runden",
      "schadenArt": "magisch",
      "effekt": "2 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     }
    ]
   },
   {
    "name": "Welle",
    "ast": "Wasser Chimäre",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1/1/2-mal pro Kampf. Eine 2/3/4m breite Welle trifft die ersten Gegner, Gegner werden 1/2/3w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "6w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Eine 2m breite Welle trifft die ersten Gegner, Gegner werden 1w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "7w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Eine 3m breite Welle trifft die ersten Gegner, Gegner werden 2w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "8w10",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Eine 4m breite Welle trifft die ersten Gegner, Gegner werden 3w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Dornenhaut",
    "ast": "Druide",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du erhältst für 1/2/3 Runden +5/5/10 Rüstung. Nahkampfangreifer erleiden automatisch 1/2/3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5/7/10m wirken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "(5m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 1 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 1W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5m wirken."
     },
     {
      "level": 2,
      "reichweite": "(7m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 2 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 2W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 7m wirken."
     },
     {
      "level": 3,
      "reichweite": "(10m) SE",
      "schaden": "+10 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 3 Runden +10 Rüstung. Nahkampfangreifer erleiden automatisch 3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 10m wirken."
     }
    ]
   },
   {
    "name": "Frosthauch",
    "ast": "Druide",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziel verliert -2/4/6 Bewegung für seine nächste Runde.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10 -2m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -2 Bewegung für seine nächste Runde."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "3w10 -4m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -4 Bewegung für seine nächste Runde."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "4w10 -6m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -6 Bewegung für seine nächste Runde."
     }
    ]
   },
   {
    "name": "Heilendes Blut",
    "ast": "Druide",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Du fügst dir 1w6 Schaden zu und heilst ein Ziel.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Du fügst dir 1w6 Schaden zu und heilst ein Ziel."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "HL 5w10",
      "schadenArt": "heilung",
      "effekt": "Du fügst dir 1w6 Schaden zu und heilst ein Ziel."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Du fügst dir 1w6 Schaden zu und heilst ein Ziel."
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Druide",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Seelenreinigung",
    "ast": "Druide",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Entfernt bei allen Verbündeten im Umkreis jeweils -1/2/3 Stufen der Debuffs (GS, FM, BL)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m",
      "schaden": "-1 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -1 Stufen der Debuffs (GS, FM, BL)"
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "-2 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -2 Stufen der Debuffs (GS, FM, BL)"
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "-3 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -3 Stufen der Debuffs (GS, FM, BL)"
     }
    ]
   },
   {
    "name": "Aura der Rast",
    "ast": "Druide",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Für 2/3/4 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 1/2/3 reduzieren.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m SE",
      "schaden": "HL +2w10, -1 Debuff-Lvl",
      "schadenArt": "heilung",
      "effekt": "Für 2 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 1 reduzieren."
     },
     {
      "level": 2,
      "reichweite": "3m SE",
      "schaden": "HL +3w10, -2 Debuff-Lvl",
      "schadenArt": "heilung",
      "effekt": "Für 3 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 2 reduzieren."
     },
     {
      "level": 3,
      "reichweite": "4m SE",
      "schaden": "HL +4w10, -3 Debuff-Lvl",
      "schadenArt": "heilung",
      "effekt": "Für 4 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 3 reduzieren."
     }
    ]
   },
   {
    "name": "Elementargeist: Kleiner Teufel Wurzelknirps Eispanter",
    "ast": "Druide",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "LP 30/60/90 NK 30/40/50, 2/3/4w10 Schaden, Eis: RB 0/10/15 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "1 Elemente 2 Runden",
      "effekt": "LP 30 NK 30, 2w10 Schaden, Eis: RB 0 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "1 Elemente 2 Runden",
      "effekt": "LP 60 NK 40, 3w10 Schaden, Eis: RB 10 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "2 Elemente 3 Runden",
      "effekt": "LP 90 NK 50, 4w10 Schaden, Eis: RB 15 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     }
    ]
   },
   {
    "name": "Naturfluch",
    "ast": "Druide",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 20/40/60% vergiftet.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 20% vergiftet."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 40% vergiftet."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 60% vergiftet."
     }
    ]
   },
   {
    "name": "Wurzelwucher",
    "ast": "Druide",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Ziel muss SW - 5/10/15 bestehen, um sich zu befreien.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "GS 1 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 5 bestehen, um sich zu befreien."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "GS 2 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 10 bestehen, um sich zu befreien."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "GS 3 2 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 15 bestehen, um sich zu befreien."
     }
    ]
   },
   {
    "name": "Giftwolke",
    "ast": "Druide",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2x2/2x2/3x3m GS 4",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "2x2/2x2/3x3m GS 5",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "2x2/2x2/3x3m GS 6",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     }
    ]
   },
   {
    "name": "Unantastbar",
    "ast": "Druide",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Ein Verbündeter wird bis zum Beginn deiner nächsten Runde immun gegen Schaden und Debuffs, kann währenddessen aber selbst weder angreifen noch Fähigkeiten einsetzen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "Schutz",
      "effekt": "Ein Verbündeter wird bis zum Beginn deiner nächsten Runde immun gegen Schaden und Debuffs, kann währenddessen aber selbst weder angreifen noch Fähigkeiten einsetzen."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "Schutz",
      "effekt": "Ein Verbündeter wird bis zum Beginn deiner nächsten Runde immun gegen Schaden und Debuffs, kann währenddessen aber selbst weder angreifen noch Fähigkeiten einsetzen."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "Schutz",
      "effekt": "Ein Verbündeter wird bis zum Beginn deiner nächsten Runde immun gegen Schaden und Debuffs, kann währenddessen aber selbst weder angreifen noch Fähigkeiten einsetzen."
     }
    ]
   },
   {
    "name": "Wucherfaust",
    "ast": "Druide",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Triffst du deinen Gegner, kann er sich 1/1/2 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "SS +1w10 +1 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 1 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "SS +2w10 +2 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 1 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "SS +3w10 +3 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 2 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     }
    ]
   },
   {
    "name": "Strahl der Gebete",
    "ast": "Druide",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 4,
    "info": "Ein 4/8/12 m langer Strahl heilt alle Ziele und entfernt 1/2/3 Debuffs.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "4m",
      "schaden": "HL 5w10´ -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Ein 4 m langer Strahl heilt alle Ziele und entfernt 1 Debuffs."
     },
     {
      "level": 2,
      "reichweite": "8m",
      "schaden": "HL 6w10´ -2 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Ein 8 m langer Strahl heilt alle Ziele und entfernt 2 Debuffs."
     },
     {
      "level": 3,
      "reichweite": "12m",
      "schaden": "HL 7w10´ -3 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Ein 12 m langer Strahl heilt alle Ziele und entfernt 3 Debuffs."
     }
    ]
   },
   {
    "name": "Waldgedicht",
    "ast": "Druide",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Alle Feinde im Umkreis.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "GS 4 +2 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "GS 5 +3 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "GS 6 +4 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     }
    ]
   },
   {
    "name": "Dornenhaut",
    "ast": "Echsenmensch",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du erhältst für 1/2/3 Runden +5/5/10 Rüstung. Nahkampfangreifer erleiden automatisch 1/2/3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5/7/10m wirken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "(5m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 1 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 1W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5m wirken."
     },
     {
      "level": 2,
      "reichweite": "(7m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 2 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 2W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 7m wirken."
     },
     {
      "level": 3,
      "reichweite": "(10m) SE",
      "schaden": "+10 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 3 Runden +10 Rüstung. Nahkampfangreifer erleiden automatisch 3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 10m wirken."
     }
    ]
   },
   {
    "name": "Biss",
    "ast": "Echsenmensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du beißt ein angrenzendes Ziel",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Stärke +2w10 0 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Stärke +3w10 5 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Stärke +4w10 10 RB *2 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     }
    ]
   },
   {
    "name": "Pure Muskeln",
    "ast": "Echsenmensch",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +10/20/30 Stärke",
    "stufen": [
     {
      "level": 1,
      "schaden": "+10 Stärke",
      "effekt": "In Monsterform: +10 Stärke"
     },
     {
      "level": 2,
      "schaden": "+20 Stärke",
      "effekt": "In Monsterform: +20 Stärke"
     },
     {
      "level": 3,
      "schaden": "+30 Stärke",
      "effekt": "In Monsterform: +30 Stärke"
     }
    ]
   },
   {
    "name": "Wilde Wut",
    "ast": "Echsenmensch",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden, -15/10/5 Nahkampf",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "+2w10 0 RB",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden, -15 Nahkampf"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "+3w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden, -10 Nahkampf"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "+4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden, -5 Nahkampf"
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Echsenmensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Giftsymbiose",
    "ast": "Echsenmensch",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Gift- Stufe (max.5)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+1w4 pro Gift- Stufe (max.5)"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+2w4 pro Gift- Stufe (max.5)"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+3w4 pro Gift- Stufe (max.5)"
     }
    ]
   },
   {
    "name": "Gieriger Biss",
    "ast": "Echsenmensch",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 0 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     }
    ]
   },
   {
    "name": "Körper aus Stahl",
    "ast": "Echsenmensch",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht deine Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": ".",
      "schaden": "+5 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 2,
      "reichweite": ".",
      "schaden": "+10 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 3,
      "reichweite": ".",
      "schaden": "+15 RÜ",
      "effekt": "Erhöht deine Rüstung."
     }
    ]
   },
   {
    "name": "Toxischer Ausbruch",
    "ast": "Echsenmensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "3w10 GS 2",
      "schadenArt": "magisch",
      "effekt": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM"
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "4w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM"
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "5w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM"
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Echsenmensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Nur eine Fleischwunde",
    "ast": "Echsenmensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Fügt dem Ziel Blutungen zu.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK 4 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt dem Ziel Blutungen zu."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK 5 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt dem Ziel Blutungen zu."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK 6 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt dem Ziel Blutungen zu."
     }
    ]
   },
   {
    "name": "Knochenspeer",
    "ast": "Echsenmensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/1/2-mal pro Kampf. Du schleuderst einen Knochenspeer der 2/3/4 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Du schleuderst einen Knochenspeer der 2 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Du schleuderst einen Knochenspeer der 3 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "6w10 15 RB",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Du schleuderst einen Knochenspeer der 4 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Raserei",
    "ast": "Echsenmensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Bis zu 4 Angriffe 5 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Bis zu 5 Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Bis zu 6 Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     }
    ]
   },
   {
    "name": "Verschlingen",
    "ast": "Echsenmensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Chance: 20/40/60%, Ziel bekommt Gift Stufe 4/5/6 + 3/4/5 Blutungen. Misslingt: 4w10 Schaden für den Anwender",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 20%, Ziel bekommt Gift Stufe 4 + 3 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 40%, Ziel bekommt Gift Stufe 5 + 4 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 60%, Ziel bekommt Gift Stufe 6 + 5 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     }
    ]
   },
   {
    "name": "Frosthauch",
    "ast": "Eismeister der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziel verliert -2/4/6 Bewegung für seine nächste Runde.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10 -2m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -2 Bewegung für seine nächste Runde."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "3w10 -4m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -4 Bewegung für seine nächste Runde."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "4w10 -6m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -6 Bewegung für seine nächste Runde."
     }
    ]
   },
   {
    "name": "Magischer Schild",
    "ast": "Eismeister der See",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Für 1/2/3 Runden 3/5/10 Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+3 RÜ",
      "effekt": "Für 1 Runden 3 Rüstung."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+5 RÜ",
      "effekt": "Für 2 Runden 5 Rüstung."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Für 3 Runden 10 Rüstung."
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Eismeister der See",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Wasserpeitsche",
    "ast": "Eismeister der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Eismeister der See",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Aquaknarre",
    "ast": "Eismeister der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-5/10/15), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "4w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-5), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "5w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-10), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "6w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "3-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-15), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Eisfeld",
    "ast": "Eismeister der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2w10 -50% BW",
      "schadenArt": "magisch",
      "effekt": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "3w10 -50% BW",
      "schadenArt": "magisch",
      "effekt": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "4w10 -50% BW",
      "schadenArt": "magisch",
      "effekt": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden."
     }
    ]
   },
   {
    "name": "Elementargeist: Eispanter",
    "ast": "Eismeister der See",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "LP 30/60/90 NK 30/40/50, 2/3/4w10 Schaden, Eis: RB 0/10/15 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "1 Elemente 2 Runden",
      "effekt": "LP 30 NK 30, 2w10 Schaden, Eis: RB 0 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "1 Elemente 2 Runden",
      "effekt": "LP 60 NK 40, 3w10 Schaden, Eis: RB 10 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "2 Elemente 3 Runden",
      "effekt": "LP 90 NK 50, 4w10 Schaden, Eis: RB 15 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     }
    ]
   },
   {
    "name": "Heilendes Wort",
    "ast": "Eismeister der See",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Heile 1/2/3 Ziele in Reichweite.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Heile 1 Ziele in Reichweite."
     },
     {
      "level": 2,
      "reichweite": "5m SE",
      "schaden": "HL 5w10",
      "schadenArt": "heilung",
      "effekt": "Heile 2 Ziele in Reichweite."
     },
     {
      "level": 3,
      "reichweite": "7m SE",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Heile 3 Ziele in Reichweite."
     }
    ]
   },
   {
    "name": "Eisstachel",
    "ast": "Eismeister der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/2/3-mal pro Kampf. Ziel erhält -10/-15/-20 Rüstung für 1w6 Runden. Nach Anwendung des Skills 2 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "5w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Ziel erhält -10/-15/-20 Rüstung für 1w6 Runden. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "6w10",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Ziel erhält -10/-15/-20 Rüstung für 1w6 Runden. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "7w10",
      "schadenArt": "magisch",
      "effekt": "3-mal pro Kampf. Ziel erhält -10/-15/-20 Rüstung für 1w6 Runden. Nach Anwendung des Skills 2 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Stillstand",
    "ast": "Eismeister der See",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Gegner im Bereich von 2x2/2x2/3x3m können für 1/1/2 Runden ihren Standort nicht verlassen. Sie können weiterhin angreifen und Fähigkeiten einsetzen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Keine Bewegung",
      "effekt": "Gegner im Bereich von 2x2/2x2/3x3m können für 1 Runden ihren Standort nicht verlassen. Sie können weiterhin angreifen und Fähigkeiten einsetzen."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "Keine Bewegung",
      "effekt": "Gegner im Bereich von 2x2/2x2/3x3m können für 1 Runden ihren Standort nicht verlassen. Sie können weiterhin angreifen und Fähigkeiten einsetzen."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "Keine Bewegung",
      "effekt": "Gegner im Bereich von 2x2/2x2/3x3m können für 2 Runden ihren Standort nicht verlassen. Sie können weiterhin angreifen und Fähigkeiten einsetzen."
     }
    ]
   },
   {
    "name": "Wasserschild",
    "ast": "Eismeister der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/1/2 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+10 RÜ für 3 Runden",
      "schadenArt": "magisch",
      "effekt": "1 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "+20 RÜ für 4 Runden",
      "schadenArt": "magisch",
      "effekt": "1 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "+30 RÜ für 5 Runden",
      "schadenArt": "magisch",
      "effekt": "2 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     }
    ]
   },
   {
    "name": "Stoppuhr/ Eissphäre",
    "ast": "Eismeister der See",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Alles im entsprechenden Radius ist für 1/1/2 Runden in Raum und Zeit eingefroren. Eingefrorene Ziele können weder handeln noch bewegt, angegriffen oder von Fähigkeiten betroffen werden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2x2/3x3/3x3 einfrieren",
      "effekt": "Alles im entsprechenden Radius ist für 1 Runden in Raum und Zeit eingefroren. Eingefrorene Ziele können weder handeln noch bewegt, angegriffen oder von Fähigkeiten betroffen werden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "2x2/3x3/3x3 einfrieren",
      "effekt": "Alles im entsprechenden Radius ist für 1 Runden in Raum und Zeit eingefroren. Eingefrorene Ziele können weder handeln noch bewegt, angegriffen oder von Fähigkeiten betroffen werden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "2x2/3x3/3x3 einfrieren",
      "effekt": "Alles im entsprechenden Radius ist für 2 Runden in Raum und Zeit eingefroren. Eingefrorene Ziele können weder handeln noch bewegt, angegriffen oder von Fähigkeiten betroffen werden."
     }
    ]
   },
   {
    "name": "Welle",
    "ast": "Eismeister der See",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1/1/2-mal pro Kampf. Eine 2/3/4m breite Welle trifft die ersten Gegner, Gegner werden 1/2/3w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "6w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Eine 2m breite Welle trifft die ersten Gegner, Gegner werden 1w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "7w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Eine 3m breite Welle trifft die ersten Gegner, Gegner werden 2w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "8w10",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Eine 4m breite Welle trifft die ersten Gegner, Gegner werden 3w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Angelegter Schuss",
    "ast": "Elben",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du musst zusätzlich deine komplette Bewegung opfern.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK",
      "schaden": "FK +2w10 +10 FK +1 BL",
      "schadenArt": "physisch",
      "effekt": "Du musst zusätzlich deine komplette Bewegung opfern."
     },
     {
      "level": 2,
      "reichweite": "FK",
      "schaden": "FK +3w10 +10 FK +1 BL",
      "schadenArt": "physisch",
      "effekt": "Du musst zusätzlich deine komplette Bewegung opfern."
     },
     {
      "level": 3,
      "reichweite": "FK",
      "schaden": "FK +4w10 +10 FK +2 BL",
      "schadenArt": "physisch",
      "effekt": "Du musst zusätzlich deine komplette Bewegung opfern."
     }
    ]
   },
   {
    "name": "Doppelhieb",
    "ast": "Elben",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du kannst 1/2/3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "1 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 1-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "2 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 2-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "3 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Fliegender Bulle",
    "ast": "Elben",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Dein Schlafwurf wird für den Angreifer zu 10/20/30% erschwert.",
    "stufen": [
     {
      "level": 1,
      "schaden": "-Schlaf +Willenskraft",
      "effekt": "Dein Schlafwurf wird für den Angreifer zu 10% erschwert."
     },
     {
      "level": 2,
      "schaden": "-Schlaf +Willenskraft",
      "effekt": "Dein Schlafwurf wird für den Angreifer zu 20% erschwert."
     },
     {
      "level": 3,
      "schaden": "-Schlaf +Willenskraft",
      "effekt": "Dein Schlafwurf wird für den Angreifer zu 30% erschwert."
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Elben",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Sniper",
    "ast": "Elben",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Der Schaden und die Reichweite deiner FK- Angriffe verbessern sich.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK x 1.5",
      "schaden": "FK+0w10",
      "schadenArt": "physisch",
      "effekt": "Der Schaden und die Reichweite deiner FK- Angriffe verbessern sich."
     },
     {
      "level": 2,
      "reichweite": "FK x 1.2",
      "schaden": "FK+1w10",
      "schadenArt": "physisch",
      "effekt": "Der Schaden und die Reichweite deiner FK- Angriffe verbessern sich."
     },
     {
      "level": 3,
      "reichweite": "FK x 1.3",
      "schaden": "FK+2w10",
      "schadenArt": "physisch",
      "effekt": "Der Schaden und die Reichweite deiner FK- Angriffe verbessern sich."
     }
    ]
   },
   {
    "name": "Blattschuss",
    "ast": "Elben",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Führe einen Fernkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1/2/3W4m in Schussrichtung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK",
      "schaden": "FK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Fernkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 1W4m in Schussrichtung."
     },
     {
      "level": 2,
      "reichweite": "FK",
      "schaden": "FK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Fernkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 2W4m in Schussrichtung."
     },
     {
      "level": 3,
      "reichweite": "FK",
      "schaden": "FK",
      "schadenArt": "physisch",
      "effekt": "Führe einen Fernkampfangriff mit - 15/-10/-5 FK aus. Bei Verwundung lässt das Ziel einen Gegenstand oder eine Waffe deiner Wahl fallen. Der Gegenstand fliegt 3W4m in Schussrichtung."
     }
    ]
   },
   {
    "name": "Doppelte Klingen/ Der Weg der zwei Fäuste",
    "ast": "Elben",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -10/5/0 NK) (keine Fähigkeiten)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2-mal pro Kampf extra Standart-Angriff",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -10 NK) (keine Fähigkeiten)"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3-mal pro Kampf extra Standart-Angriff",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -5 NK) (keine Fähigkeiten)"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4-mal pro Kampf extra Standart-Angriff",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -0 NK) (keine Fähigkeiten)"
     }
    ]
   },
   {
    "name": "Eiserner Wille",
    "ast": "Elben",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Für 1/2/3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 Widerstand",
      "effekt": "Für 1 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+20 Widerstand",
      "effekt": "Für 2 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+30 Widerstand",
      "effekt": "Für 3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     }
    ]
   },
   {
    "name": "Wache!",
    "ast": "Elben",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "2 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "2 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "3 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "3 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "4 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "4 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     }
    ]
   },
   {
    "name": "Klon",
    "ast": "Elben",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "LP 50/75/100% des Lebens 4/5/6w10 Schaden Können keine Skills nutzen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "1 Klone für 2 Runden",
      "schadenArt": "physisch",
      "effekt": "LP 50% des Lebens 4w10 Schaden Können keine Skills nutzen."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "2 Klone für 2 Runden",
      "schadenArt": "physisch",
      "effekt": "LP 75% des Lebens 5w10 Schaden Können keine Skills nutzen."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "2 Klone für 3 Runden",
      "schadenArt": "physisch",
      "effekt": "LP 100% des Lebens 6w10 Schaden Können keine Skills nutzen."
     }
    ]
   },
   {
    "name": "Rikoschettenschuss",
    "ast": "Elben",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Dein Schuss trifft 1/2/3 zusätzliche Ziele im Umkreis von 2m.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "FK",
      "schaden": "FK",
      "schadenArt": "physisch",
      "effekt": "Dein Schuss trifft 1 zusätzliche Ziele im Umkreis von 2m."
     },
     {
      "level": 2,
      "reichweite": "FK",
      "schaden": "FK",
      "schadenArt": "physisch",
      "effekt": "Dein Schuss trifft 2 zusätzliche Ziele im Umkreis von 2m."
     },
     {
      "level": 3,
      "reichweite": "FK",
      "schaden": "FK",
      "schadenArt": "physisch",
      "effekt": "Dein Schuss trifft 3 zusätzliche Ziele im Umkreis von 2m."
     }
    ]
   },
   {
    "name": "Schattenschritt",
    "ast": "Elben",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "25 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "50 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     },
     {
      "level": 3,
      "reichweite": "20m",
      "schaden": "75 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     }
    ]
   },
   {
    "name": "Federschritt",
    "ast": "Elben",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Du greifst mehrere Gegner nacheinander an und teleportierst die jeweils bis zu 5m.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+5w10 3 Gegner",
      "schadenArt": "magisch",
      "effekt": "Du greifst mehrere Gegner nacheinander an und teleportierst die jeweils bis zu 5m."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "+6w10 4 Gegner",
      "schadenArt": "magisch",
      "effekt": "Du greifst mehrere Gegner nacheinander an und teleportierst die jeweils bis zu 5m."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "+7w10 5 Gegner",
      "schadenArt": "magisch",
      "effekt": "Du greifst mehrere Gegner nacheinander an und teleportierst die jeweils bis zu 5m."
     }
    ]
   },
   {
    "name": "Lichtgeschwindigkeit",
    "ast": "Elben",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du kannst 2/3/4 deiner Fähigkeiten hintereinander einsetzen. Die Fähigkeiten Stufe ist die gleiche wie die von Lichtgeschwindigkeit.",
    "stufen": [
     {
      "level": 1,
      "schaden": "2 Fähigkeiten",
      "effekt": "Du kannst 2 deiner Fähigkeiten hintereinander einsetzen. Die Fähigkeiten Stufe ist die gleiche wie die von Lichtgeschwindigkeit."
     },
     {
      "level": 2,
      "schaden": "3 Fähigkeiten",
      "effekt": "Du kannst 3 deiner Fähigkeiten hintereinander einsetzen. Die Fähigkeiten Stufe ist die gleiche wie die von Lichtgeschwindigkeit."
     },
     {
      "level": 3,
      "schaden": "4 Fähigkeiten",
      "effekt": "Du kannst 4 deiner Fähigkeiten hintereinander einsetzen. Die Fähigkeiten Stufe ist die gleiche wie die von Lichtgeschwindigkeit."
     }
    ]
   },
   {
    "name": "Befreiender Schlag",
    "ast": "Engel",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Mache Schaden und entferne 1/2/3 Debuffs +1w10 pro entfernten Debuff",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 -1 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 1 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 -2 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 2 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 -3 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 3 Debuffs +1w10 pro entfernten Debuff"
     }
    ]
   },
   {
    "name": "Beruhigende Aura",
    "ast": "Engel",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Verbündete heilen Lebenspunkte und können 1/1/2 Debuffs entfernen",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 1w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 2w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 3w10, -2 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 2 Debuffs entfernen"
     }
    ]
   },
   {
    "name": "Doppelhieb",
    "ast": "Engel",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du kannst 1/2/3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "1 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 1-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "2 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 2-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "3 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Göttliche Flügel",
    "ast": "Engel",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Du kannst für 1/2/3 Runden fliegen",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "Fliegen",
      "effekt": "Du kannst für 1 Runden fliegen"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "Fliegen",
      "effekt": "Du kannst für 2 Runden fliegen"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "Fliegen",
      "effekt": "Du kannst für 3 Runden fliegen"
     }
    ]
   },
   {
    "name": "Magischer Schild",
    "ast": "Engel",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Für 1/2/3 Runden 3/5/10 Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+3 RÜ",
      "effekt": "Für 1 Runden 3 Rüstung."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+5 RÜ",
      "effekt": "Für 2 Runden 5 Rüstung."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Für 3 Runden 10 Rüstung."
     }
    ]
   },
   {
    "name": "Eiserner Wille",
    "ast": "Engel",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Für 1/2/3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 Widerstand",
      "effekt": "Für 1 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+20 Widerstand",
      "effekt": "Für 2 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+30 Widerstand",
      "effekt": "Für 3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     }
    ]
   },
   {
    "name": "Kriegsschrei",
    "ast": "Engel",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Alle Verbündeten im Umkreis erhalten für 1/2/3 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "NK+1w10 +5 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 1 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     },
     {
      "level": 2,
      "reichweite": "3m UK",
      "schaden": "NK+1w10 +5 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 2 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     },
     {
      "level": 3,
      "reichweite": "5m UK",
      "schaden": "NK+2w10 +10 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 3 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     }
    ]
   },
   {
    "name": "Spalter",
    "ast": "Engel",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "1/2/3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK 10 RB",
      "schadenArt": "physisch",
      "effekt": "1 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK 15 RB",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK 20 RB",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Wache!",
    "ast": "Engel",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "2/3/4 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "2 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "2 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "3 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "3 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "4 Gelegenheitsan griffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "4 Angriffe auf Gegner, die deine Kampfreichweite betreten, verlassen oder durchqueren."
     }
    ]
   },
   {
    "name": "Befehl des Kapitäns",
    "ast": "Engel",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "2/3/4 Verbündete dürfen sofort eine A oder B Aktion durchführen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Sofortaktion",
      "effekt": "2 Verbündete dürfen sofort eine A oder B Aktion durchführen."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "Sofortaktion",
      "effekt": "3 Verbündete dürfen sofort eine A oder B Aktion durchführen."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "Sofortaktion",
      "effekt": "4 Verbündete dürfen sofort eine A oder B Aktion durchführen."
     }
    ]
   },
   {
    "name": "Göttlicher Schild",
    "ast": "Engel",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 3,
    "info": "1/2/3 Ziele für 1/2/3 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "HL 4w10 5 RÜ",
      "schadenArt": "heilung",
      "effekt": "1 Ziele für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "HL 5w10 10 RÜ",
      "schadenArt": "heilung",
      "effekt": "2 Ziele für 2 Runden."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "HL 6w10 15 RÜ",
      "schadenArt": "heilung",
      "effekt": "3 Ziele für 3 Runden."
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Engel",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Beifall",
    "ast": "Engel",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Alle Freunde im Umkreis dürfen versuchen jeden NK- Angriff zu parieren und machen nach erfolgreicher Parade dabei 2/3/4w10 Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m UK",
      "schaden": "1 Runden Konterschlag",
      "schadenArt": "physisch",
      "effekt": "Alle Freunde im Umkreis dürfen versuchen jeden NK- Angriff zu parieren und machen nach erfolgreicher Parade dabei 2w10 Schaden."
     },
     {
      "level": 2,
      "reichweite": "7m UK",
      "schaden": "2 Runden Konterschlag",
      "schadenArt": "physisch",
      "effekt": "Alle Freunde im Umkreis dürfen versuchen jeden NK- Angriff zu parieren und machen nach erfolgreicher Parade dabei 3w10 Schaden."
     },
     {
      "level": 3,
      "reichweite": "10m UK",
      "schaden": "3 Runden Konterschlag",
      "schadenArt": "physisch",
      "effekt": "Alle Freunde im Umkreis dürfen versuchen jeden NK- Angriff zu parieren und machen nach erfolgreicher Parade dabei 4w10 Schaden."
     }
    ]
   },
   {
    "name": "Heute stirbt keiner!",
    "ast": "Engel",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Für 1/2/3 Runden kann kein Verbündeter unter 1 LP fallen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 1 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 2 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 3 Runden kann kein Verbündeter unter 1 LP fallen."
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Geist",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Fluch",
    "ast": "Geist",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du selbst bekommst 3/2/1w10 Schaden, 1/1/2 Ziele bekommen Schaden und schlafen zu 20/40/60% für 1w4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 3w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 20% für 1w4 Runden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "4w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 2w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 40% für 1w4 Runden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "5w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 1w10 Schaden, 2 Ziele bekommen Schaden und schlafen zu 60% für 1w4 Runden."
     }
    ]
   },
   {
    "name": "Frosthauch",
    "ast": "Geist",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziel verliert -2/4/6 Bewegung für seine nächste Runde.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10 -2m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -2 Bewegung für seine nächste Runde."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "3w10 -4m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -4 Bewegung für seine nächste Runde."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "4w10 -6m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -6 Bewegung für seine nächste Runde."
     }
    ]
   },
   {
    "name": "Geist",
    "ast": "Geist",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "+10/20/30% Schaden durch Fähigkeiten Heimlichkeit+5/10/10 Einschüchtern +5/5/10",
    "stufen": [
     {
      "level": 1,
      "schaden": "-10% Schaden durch NK und FK- Standartangriffe",
      "effekt": "+10% Schaden durch Fähigkeiten Heimlichkeit+5 Einschüchtern +5"
     },
     {
      "level": 2,
      "schaden": "-20% Schaden durch NK und FK- Standartangriffe",
      "effekt": "+20% Schaden durch Fähigkeiten Heimlichkeit+10 Einschüchtern +5"
     },
     {
      "level": 3,
      "schaden": "-30% Schaden durch NK und FK- Standartangriffe",
      "effekt": "+30% Schaden durch Fähigkeiten Heimlichkeit+10 Einschüchtern +10"
     }
    ]
   },
   {
    "name": "Schrecken der Meere",
    "ast": "Geist",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Nach misslungenem WW -5/10/15 für 1/1/2 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "1 Gegner fliehen",
      "effekt": "Nach misslungenem WW -5 für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "2 Gegner fliehen",
      "effekt": "Nach misslungenem WW -10 für 1 Runden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "3 Gegner fliehen",
      "effekt": "Nach misslungenem WW -15 für 2 Runden."
     }
    ]
   },
   {
    "name": "Atem der Verwesung",
    "ast": "Geist",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Strahl, der 1/2/3 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "4w10 +GS 2",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 1 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "5w10 +GS 3",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 2 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "6w10 +GS 4",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 3 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     }
    ]
   },
   {
    "name": "Flüstern der Schatten",
    "ast": "Geist",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "70/80/90 % Chance, dass dein Ziel für 1w4 Runde schläft.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "SL",
      "effekt": "70 % Chance, dass dein Ziel für 1w4 Runde schläft."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "SL",
      "effekt": "80 % Chance, dass dein Ziel für 1w4 Runde schläft."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "SL",
      "effekt": "90 % Chance, dass dein Ziel für 1w4 Runde schläft."
     }
    ]
   },
   {
    "name": "Lebensentzug",
    "ast": "Geist",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Mache auf 1/1/2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3",
      "schaden": "4w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 2,
      "reichweite": "5",
      "schaden": "5w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 3,
      "reichweite": "10",
      "schaden": "6w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     }
    ]
   },
   {
    "name": "Trugbild",
    "ast": "Geist",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 30/60/90% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "1 Runden Unsichtbar",
      "effekt": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 30% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar)."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "1 Runden Unsichtbar",
      "effekt": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 60% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar)."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "2 Runden Unsichtbar",
      "effekt": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 90% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar)."
     }
    ]
   },
   {
    "name": "Eisstachel",
    "ast": "Geist",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/2/3-mal pro Kampf. Ziel erhält -10/-15/-20 Rüstung für 1w6 Runden. Nach Anwendung des Skills 2 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "5w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Ziel erhält -10/-15/-20 Rüstung für 1w6 Runden. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "6w10",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Ziel erhält -10/-15/-20 Rüstung für 1w6 Runden. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "7w10",
      "schadenArt": "magisch",
      "effekt": "3-mal pro Kampf. Ziel erhält -10/-15/-20 Rüstung für 1w6 Runden. Nach Anwendung des Skills 2 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Fluch der Schwächung",
    "ast": "Geist",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/2/3 Ziele in Reichweite machen für 1/2/3 Runden 40/50/60 %weniger Standard-Angriffs Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "-40 % Schaden",
      "effekt": "1 Ziele in Reichweite machen für 1 Runden 40 %weniger Standard-Angriffs Schaden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "-50 % Schaden",
      "effekt": "2 Ziele in Reichweite machen für 2 Runden 50 %weniger Standard-Angriffs Schaden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "-60 % Schaden",
      "effekt": "3 Ziele in Reichweite machen für 3 Runden 60 %weniger Standard-Angriffs Schaden."
     }
    ]
   },
   {
    "name": "Seelenverkrustung",
    "ast": "Geist",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Für 2/3/4 Runden weniger Fähigkeiten- Schaden. Während dessen kannst du nur von dir selbst durch Fähigkeiten geheilt werden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "-40% Schaden",
      "effekt": "Für 2 Runden weniger Fähigkeiten- Schaden. Während dessen kannst du nur von dir selbst durch Fähigkeiten geheilt werden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "-50% Schaden",
      "effekt": "Für 3 Runden weniger Fähigkeiten- Schaden. Während dessen kannst du nur von dir selbst durch Fähigkeiten geheilt werden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "-60% Schaden",
      "effekt": "Für 4 Runden weniger Fähigkeiten- Schaden. Während dessen kannst du nur von dir selbst durch Fähigkeiten geheilt werden."
     }
    ]
   },
   {
    "name": "Seelentausch",
    "ast": "Geist",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du gibst einem Feind 1/2/3 deiner Debuff Stacks.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "1 Debuffs übertragen",
      "effekt": "Du gibst einem Feind 1 deiner Debuff Stacks."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "2 Debuffs übertragen",
      "effekt": "Du gibst einem Feind 2 deiner Debuff Stacks."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "3 Debuffs übertragen",
      "effekt": "Du gibst einem Feind 3 deiner Debuff Stacks."
     }
    ]
   },
   {
    "name": "Zweite Dimension",
    "ast": "Geist",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du erhältst Rüstung.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+10 RÜ",
      "effekt": "Du erhältst Rüstung."
     },
     {
      "level": 2,
      "schaden": "+15 RÜ",
      "effekt": "Du erhältst Rüstung."
     },
     {
      "level": 3,
      "schaden": "+20 RÜ",
      "effekt": "Du erhältst Rüstung."
     }
    ]
   },
   {
    "name": "Beruhigende Aura",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Verbündete heilen Lebenspunkte und können 1/1/2 Debuffs entfernen",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 1w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 2w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 3w10, -2 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 2 Debuffs entfernen"
     }
    ]
   },
   {
    "name": "Donnerwelle",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Bei Verwundung verliert das Ziel für 3 Runden, zu 15/20/25%, einen Teil seiner Bewegung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2w10 -1m",
      "schadenArt": "magisch",
      "effekt": "Bei Verwundung verliert das Ziel für 3 Runden, zu 15%, einen Teil seiner Bewegung."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "3w10 -2m",
      "schadenArt": "magisch",
      "effekt": "Bei Verwundung verliert das Ziel für 3 Runden, zu 20%, einen Teil seiner Bewegung."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "4w10 -3m",
      "schadenArt": "magisch",
      "effekt": "Bei Verwundung verliert das Ziel für 3 Runden, zu 25%, einen Teil seiner Bewegung."
     }
    ]
   },
   {
    "name": "Dornenhaut",
    "ast": "Gott/ Halbgott",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du erhältst für 1/2/3 Runden +5/5/10 Rüstung. Nahkampfangreifer erleiden automatisch 1/2/3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5/7/10m wirken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "(5m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 1 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 1W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5m wirken."
     },
     {
      "level": 2,
      "reichweite": "(7m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 2 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 2W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 7m wirken."
     },
     {
      "level": 3,
      "reichweite": "(10m) SE",
      "schaden": "+10 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 3 Runden +10 Rüstung. Nahkampfangreifer erleiden automatisch 3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 10m wirken."
     }
    ]
   },
   {
    "name": "Feuerfaust",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1/2/3w10 Schaden und +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1w10 Schaden und +1FM"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 2w10 Schaden und +1FM"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 3w10 Schaden und +1FM"
     }
    ]
   },
   {
    "name": "Flamme",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "1/2/3-mal pro Kampf kannst du eine kleine Flamme auf deine Gegner werfen. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "2w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf kannst du eine kleine Flamme auf deine Gegner werfen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf kannst du eine kleine Flamme auf deine Gegner werfen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "3-mal pro Kampf kannst du eine kleine Flamme auf deine Gegner werfen. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Fluch",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du selbst bekommst 3/2/1w10 Schaden, 1/1/2 Ziele bekommen Schaden und schlafen zu 20/40/60% für 1w4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 3w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 20% für 1w4 Runden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "4w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 2w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 40% für 1w4 Runden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "5w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 1w10 Schaden, 2 Ziele bekommen Schaden und schlafen zu 60% für 1w4 Runden."
     }
    ]
   },
   {
    "name": "Frosthauch",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziel verliert -2/4/6 Bewegung für seine nächste Runde.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10 -2m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -2 Bewegung für seine nächste Runde."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "3w10 -4m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -4 Bewegung für seine nächste Runde."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "4w10 -6m",
      "schadenArt": "magisch",
      "effekt": "Ziel verliert -6 Bewegung für seine nächste Runde."
     }
    ]
   },
   {
    "name": "Göttliche Flügel",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Du kannst für 1/2/3 Runden fliegen",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "Fliegen",
      "effekt": "Du kannst für 1 Runden fliegen"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "Fliegen",
      "effekt": "Du kannst für 2 Runden fliegen"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "Fliegen",
      "effekt": "Du kannst für 3 Runden fliegen"
     }
    ]
   },
   {
    "name": "Heilende Hand",
    "ast": "Gott/ Halbgott",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Du heilst einen Verbündeten",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     }
    ]
   },
   {
    "name": "Knochengriff",
    "ast": "Gott/ Halbgott",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Ein Ziel erhält für 1/2/3 Runden -2/3/4 Bewegung und -10 auf Handeln.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10m",
      "schaden": "-2m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 1 Runden -2 Bewegung und -10 auf Handeln."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "-3m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 2 Runden -3 Bewegung und -10 auf Handeln."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "-4m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 3 Runden -4 Bewegung und -10 auf Handeln."
     }
    ]
   },
   {
    "name": "Magischer Schild",
    "ast": "Gott/ Halbgott",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Für 1/2/3 Runden 3/5/10 Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+3 RÜ",
      "effekt": "Für 1 Runden 3 Rüstung."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+5 RÜ",
      "effekt": "Für 2 Runden 5 Rüstung."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Für 3 Runden 10 Rüstung."
     }
    ]
   },
   {
    "name": "Monster Gott",
    "ast": "Gott/ Halbgott",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +50/100/150 LP zusätzlich",
    "stufen": [
     {
      "level": 1,
      "schaden": "LP +50",
      "effekt": "In Monsterform: +50 LP zusätzlich"
     },
     {
      "level": 2,
      "schaden": "LP +100",
      "effekt": "In Monsterform: +100 LP zusätzlich"
     },
     {
      "level": 3,
      "schaden": "LP +150",
      "effekt": "In Monsterform: +150 LP zusätzlich"
     }
    ]
   },
   {
    "name": "Monster Lord",
    "ast": "Gott/ Halbgott",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +50/75/100 LP zusätzlich",
    "stufen": [
     {
      "level": 1,
      "schaden": "LP +50",
      "effekt": "In Monsterform: +50 LP zusätzlich"
     },
     {
      "level": 2,
      "schaden": "LP +75",
      "effekt": "In Monsterform: +75 LP zusätzlich"
     },
     {
      "level": 3,
      "schaden": "LP +100",
      "effekt": "In Monsterform: +100 LP zusätzlich"
     }
    ]
   },
   {
    "name": "Pure Muskeln +",
    "ast": "Gott/ Halbgott",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +15/30/50 Stärke",
    "stufen": [
     {
      "level": 1,
      "schaden": "+15 Stärke",
      "effekt": "In Monsterform: +15 Stärke"
     },
     {
      "level": 2,
      "schaden": "+30 Stärke",
      "effekt": "In Monsterform: +30 Stärke"
     },
     {
      "level": 3,
      "schaden": "+50 Stärke",
      "effekt": "In Monsterform: +50 Stärke"
     }
    ]
   },
   {
    "name": "Schrecken der Meere",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Nach misslungenem WW -5/10/15 für 1/1/2 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "1 Gegner fliehen",
      "effekt": "Nach misslungenem WW -5 für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "2 Gegner fliehen",
      "effekt": "Nach misslungenem WW -10 für 1 Runden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "3 Gegner fliehen",
      "effekt": "Nach misslungenem WW -15 für 2 Runden."
     }
    ]
   },
   {
    "name": "Stromstoß",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Pro Rüstungsklasse des Gegners +1w10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse des Gegners +1w10"
     },
     {
      "level": 2,
      "reichweite": "2m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse des Gegners +1w10"
     },
     {
      "level": 3,
      "reichweite": "2m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse des Gegners +1w10"
     }
    ]
   },
   {
    "name": "Wasserpeitsche",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Ziel wird 1w4m herangezogen oder weggeschleudert bei misslungener Stärkeprobe -10/-15/-20"
     }
    ]
   },
   {
    "name": "Aquaknarre",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-5/10/15), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "4w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-5), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "5w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-10), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "6w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "3-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-15), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Dunkle Rüstung",
    "ast": "Gott/ Halbgott",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du hast 1/2/3 Runden lang eine Rüstung. Du bist um Heimlichkeit +5/10/10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Du hast 1 Runden lang eine Rüstung. Du bist um Heimlichkeit +5"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+15 RÜ",
      "effekt": "Du hast 2 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+20 RÜ",
      "effekt": "Du hast 3 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     }
    ]
   },
   {
    "name": "Eiserner Wille",
    "ast": "Gott/ Halbgott",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Für 1/2/3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 Widerstand",
      "effekt": "Für 1 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+20 Widerstand",
      "effekt": "Für 2 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+30 Widerstand",
      "effekt": "Für 3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     }
    ]
   },
   {
    "name": "Elementargeist: Kleiner Teufel Wurzelknirps Eispanter",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "LP 30/60/90 NK 30/40/50, 2/3/4w10 Schaden, Eis: RB 0/10/15 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "1 Elemente 2 Runden",
      "effekt": "LP 30 NK 30, 2w10 Schaden, Eis: RB 0 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "1 Elemente 2 Runden",
      "effekt": "LP 60 NK 40, 3w10 Schaden, Eis: RB 10 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "2 Elemente 3 Runden",
      "effekt": "LP 90 NK 50, 4w10 Schaden, Eis: RB 15 -1BW Baum: +1 BL +1GS Feuer: Fm +1 +1w10"
     }
    ]
   },
   {
    "name": "Feuerball",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "1x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "5w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "2x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "6w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "3x pro Kampf Ziel erhält Feuermarker Nach Aktivierung 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Heilendes Wort",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Heile 1/2/3 Ziele in Reichweite.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Heile 1 Ziele in Reichweite."
     },
     {
      "level": 2,
      "reichweite": "5m SE",
      "schaden": "HL 5w10",
      "schadenArt": "heilung",
      "effekt": "Heile 2 Ziele in Reichweite."
     },
     {
      "level": 3,
      "reichweite": "7m SE",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Heile 3 Ziele in Reichweite."
     }
    ]
   },
   {
    "name": "Kettenblitz",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "2/3/4 Gegner jeweils in 3m Umkreis.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "2 Gegner jeweils in 3m Umkreis."
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "3 Gegner jeweils in 3m Umkreis."
     },
     {
      "level": 3,
      "reichweite": "3m",
      "schaden": "5w10",
      "schadenArt": "magisch",
      "effekt": "4 Gegner jeweils in 3m Umkreis."
     }
    ]
   },
   {
    "name": "Kriegsschrei",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Alle Verbündeten im Umkreis erhalten für 1/2/3 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "NK+1w10 +5 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 1 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     },
     {
      "level": 2,
      "reichweite": "3m UK",
      "schaden": "NK+1w10 +5 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 2 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     },
     {
      "level": 3,
      "reichweite": "5m UK",
      "schaden": "NK+2w10 +10 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 3 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     }
    ]
   },
   {
    "name": "Lebensentzug",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Mache auf 1/1/2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3",
      "schaden": "4w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 2,
      "reichweite": "5",
      "schaden": "5w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 3,
      "reichweite": "10",
      "schaden": "6w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     }
    ]
   },
   {
    "name": "Naturfluch",
    "ast": "Gott/ Halbgott",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 20/40/60% vergiftet.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 20% vergiftet."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 40% vergiftet."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 60% vergiftet."
     }
    ]
   },
   {
    "name": "Wurzelwucher",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Ziel muss SW - 5/10/15 bestehen, um sich zu befreien.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "GS 1 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 5 bestehen, um sich zu befreien."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "GS 2 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 10 bestehen, um sich zu befreien."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "GS 3 2 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 15 bestehen, um sich zu befreien."
     }
    ]
   },
   {
    "name": "Brennender Kreis",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Im Umkreis bekommen alle Personen Feuerschaden und 1/2/3 Feuermarker.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 1 Feuermarker."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "5w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 2 Feuermarker."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "6w10 +3 FM",
      "schadenArt": "magisch",
      "effekt": "Im Umkreis bekommen alle Personen Feuerschaden und 3 Feuermarker."
     }
    ]
   },
   {
    "name": "Göttlicher Schild",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 3,
    "info": "1/2/3 Ziele für 1/2/3 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "HL 4w10 5 RÜ",
      "schadenArt": "heilung",
      "effekt": "1 Ziele für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "HL 5w10 10 RÜ",
      "schadenArt": "heilung",
      "effekt": "2 Ziele für 2 Runden."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "HL 6w10 15 RÜ",
      "schadenArt": "heilung",
      "effekt": "3 Ziele für 3 Runden."
     }
    ]
   },
   {
    "name": "Knochenspeer",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/1/2-mal pro Kampf. Du schleuderst einen Knochenspeer der 2/3/4 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Du schleuderst einen Knochenspeer der 2 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Du schleuderst einen Knochenspeer der 3 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "6w10 15 RB",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Du schleuderst einen Knochenspeer der 4 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Kometeneinschlag",
    "ast": "Gott/ Halbgott",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Stärkerer Nahkampfschaden mit Durchschlag.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1w10 0 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     },
     {
      "level": 2,
      "schaden": "+2w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     },
     {
      "level": 3,
      "schaden": "+3w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Mentale Welle",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle im Radius außer dir haben einen Malus von -5/10/15 auf alle Proben.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Alle im Radius außer dir haben einen Malus von -5 auf alle Proben."
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Alle im Radius außer dir haben einen Malus von -10 auf alle Proben."
     },
     {
      "level": 3,
      "reichweite": "4m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Alle im Radius außer dir haben einen Malus von -15 auf alle Proben."
     }
    ]
   },
   {
    "name": "Wasserschild",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/1/2 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+10 RÜ für 3 Runden",
      "schadenArt": "magisch",
      "effekt": "1 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "+20 RÜ für 4 Runden",
      "schadenArt": "magisch",
      "effekt": "1 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "+30 RÜ für 5 Runden",
      "schadenArt": "magisch",
      "effekt": "2 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     }
    ]
   },
   {
    "name": "Wucherfaust",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Triffst du deinen Gegner, kann er sich 1/1/2 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "SS +1w10 +1 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 1 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "SS +2w10 +2 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 1 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "SS +3w10 +3 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 2 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     }
    ]
   },
   {
    "name": "Zorn der Wolken",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Blitz springt auf 1/2/3 Ziele im Umkreis von jeweils 1/2/3 m über.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "5w10 20% Stun",
      "schadenArt": "magisch",
      "effekt": "Blitz springt auf 1 Ziele im Umkreis von jeweils 1 m über."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "6w10 40% Stun",
      "schadenArt": "magisch",
      "effekt": "Blitz springt auf 2 Ziele im Umkreis von jeweils 2 m über."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "7w10 60% Stun",
      "schadenArt": "magisch",
      "effekt": "Blitz springt auf 3 Ziele im Umkreis von jeweils 3 m über."
     }
    ]
   },
   {
    "name": "Zurückspulen",
    "ast": "Gott/ Halbgott",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Wenn das Ziel nach 1/2/3 Runden noch lebt, St1: springt es an seinen Ursprung zurück. St2: zusätzlich werden erhaltene Debuffs gelöscht. St3: zusätzlich wird das Ziel um 5w10 geheilt",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE 3m",
      "schaden": "Standort Debuffs HP",
      "effekt": "Wenn das Ziel nach 1 Runden noch lebt, St1: springt es an seinen Ursprung zurück. St2: zusätzlich werden erhaltene Debuffs gelöscht. St3: zusätzlich wird das Ziel um 5w10 geheilt"
     },
     {
      "level": 2,
      "reichweite": "SE 5m",
      "schaden": "Standort Debuffs HP",
      "effekt": "Wenn das Ziel nach 2 Runden noch lebt, St1: springt es an seinen Ursprung zurück. St2: zusätzlich werden erhaltene Debuffs gelöscht. St3: zusätzlich wird das Ziel um 5w10 geheilt"
     },
     {
      "level": 3,
      "reichweite": "SE 7m",
      "schaden": "Standort Debuffs HP",
      "effekt": "Wenn das Ziel nach 3 Runden noch lebt, St1: springt es an seinen Ursprung zurück. St2: zusätzlich werden erhaltene Debuffs gelöscht. St3: zusätzlich wird das Ziel um 5w10 geheilt"
     }
    ]
   },
   {
    "name": "Auflösung",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Stufe 1: ein bestehender magischer Fähigkeitseffekt wird aufgelöst. Stufe 2: bis zu zwei. Stufe 3: bis zu drei. Buffs, Debuffs, Beschwörungen, magische Zonen, Schilde, Mauern usw. Bereits vollständig abgehandelte Effekte nicht.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Löse 1 Fähigkeiten auf",
      "effekt": "Stufe 1: ein bestehender magischer Fähigkeitseffekt wird aufgelöst. Stufe 2: bis zu zwei. Stufe 3: bis zu drei. Buffs, Debuffs, Beschwörungen, magische Zonen, Schilde, Mauern usw. Bereits vollständig abgehandelte Effekte nicht."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Löse 2 Fähigkeiten auf",
      "effekt": "Stufe 1: ein bestehender magischer Fähigkeitseffekt wird aufgelöst. Stufe 2: bis zu zwei. Stufe 3: bis zu drei. Buffs, Debuffs, Beschwörungen, magische Zonen, Schilde, Mauern usw. Bereits vollständig abgehandelte Effekte nicht."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "Löse 3 Fähigkeiten auf",
      "effekt": "Stufe 1: ein bestehender magischer Fähigkeitseffekt wird aufgelöst. Stufe 2: bis zu zwei. Stufe 3: bis zu drei. Buffs, Debuffs, Beschwörungen, magische Zonen, Schilde, Mauern usw. Bereits vollständig abgehandelte Effekte nicht."
     }
    ]
   },
   {
    "name": "Gedankenkontrolle",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "WW -5/10/15 Sonst wird das Ziel von dir kontrolliert.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "1 Gegner Für 2 Runden",
      "effekt": "WW -5 Sonst wird das Ziel von dir kontrolliert."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "1 Gegner Für 2 Runden",
      "effekt": "WW -10 Sonst wird das Ziel von dir kontrolliert."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "2 Gegner Für 2 Runden",
      "effekt": "WW -15 Sonst wird das Ziel von dir kontrolliert."
     }
    ]
   },
   {
    "name": "Heute stirbt keiner!",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Für 1/2/3 Runden kann kein Verbündeter unter 1 LP fallen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 1 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 2 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 3 Runden kann kein Verbündeter unter 1 LP fallen."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Inferno",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1/2/3x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10 m",
      "schaden": "6w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "1x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "15 m",
      "schaden": "7w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "2x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "20 m",
      "schaden": "8w10 +2 FM",
      "schadenArt": "magisch",
      "effekt": "3x pro Kampf machst du deinem Ziel Schaden und es erhält +2 FM Nach Anwendung des Skills 3 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Neues Leben",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 4,
    "info": "1× pro Tag. Belebt nach 1/1/2 Runden tot mit ein paar Lebenspunkten wieder. Oder heilt einfach auch nur.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Wiederbelebung HL 8w10",
      "schadenArt": "heilung",
      "effekt": "1× pro Tag. Belebt nach 1 Runden tot mit ein paar Lebenspunkten wieder. Oder heilt einfach auch nur."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Wiederbelebung HL 9w10",
      "schadenArt": "heilung",
      "effekt": "1× pro Tag. Belebt nach 1 Runden tot mit ein paar Lebenspunkten wieder. Oder heilt einfach auch nur."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Wiederbelebung HL 10w10",
      "schadenArt": "heilung",
      "effekt": "1× pro Tag. Belebt nach 2 Runden tot mit ein paar Lebenspunkten wieder. Oder heilt einfach auch nur."
     }
    ]
   },
   {
    "name": "Schwarze Kugel",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Selbstschaden 1w20/12/10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "10w10",
      "schadenArt": "magisch",
      "effekt": "Selbstschaden 1w20/12/10"
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "11w10",
      "schadenArt": "magisch",
      "effekt": "Selbstschaden 1w20/12/10"
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "12w10",
      "schadenArt": "magisch",
      "effekt": "Selbstschaden 1w20/12/10"
     }
    ]
   },
   {
    "name": "Sturmfokus",
    "ast": "Gott/ Halbgott",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Für 2/3/4 Runden machst du zusätzlichen Blitzschaden. +1/2/3w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+2w10",
      "schadenArt": "magisch",
      "effekt": "Für 2 Runden machst du zusätzlichen Blitzschaden. +1w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+3w10",
      "schadenArt": "magisch",
      "effekt": "Für 3 Runden machst du zusätzlichen Blitzschaden. +2w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+4w10",
      "schadenArt": "magisch",
      "effekt": "Für 4 Runden machst du zusätzlichen Blitzschaden. +3w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden"
     }
    ]
   },
   {
    "name": "Waldgedicht",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Alle Feinde im Umkreis.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "GS 4 +2 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "GS 5 +3 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "GS 6 +4 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     }
    ]
   },
   {
    "name": "Welle",
    "ast": "Gott/ Halbgott",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1/1/2-mal pro Kampf. Eine 2/3/4m breite Welle trifft die ersten Gegner, Gegner werden 1/2/3w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "6w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Eine 2m breite Welle trifft die ersten Gegner, Gegner werden 1w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "7w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Eine 3m breite Welle trifft die ersten Gegner, Gegner werden 2w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "8w10",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Eine 4m breite Welle trifft die ersten Gegner, Gegner werden 3w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Blutiger Zorn",
    "ast": "Guhl",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2/1/1 Blutungen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2 Blutungen."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     }
    ]
   },
   {
    "name": "Blutschuss",
    "ast": "Guhl",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 2/3/4 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 2 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 3 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "4× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 4 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     }
    ]
   },
   {
    "name": "Doppelhieb",
    "ast": "Guhl",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du kannst 1/2/3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "1 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 1-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "2 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 2-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "3 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Monster",
    "ast": "Guhl",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +25/50/75 LP zusätzlich",
    "stufen": [
     {
      "level": 1,
      "schaden": "LP +25",
      "effekt": "In Monsterform: +25 LP zusätzlich"
     },
     {
      "level": 2,
      "schaden": "LP +50",
      "effekt": "In Monsterform: +50 LP zusätzlich"
     },
     {
      "level": 3,
      "schaden": "LP +75",
      "effekt": "In Monsterform: +75 LP zusätzlich"
     }
    ]
   },
   {
    "name": "Verkrüppeln",
    "ast": "Guhl",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "-2/3/4m BW, -5/10/15 Handeln für 1/2/3 Runden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +2w10",
      "schadenArt": "physisch",
      "effekt": "-2m BW, -5 Handeln für 1 Runden"
     },
     {
      "level": 2,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +3w10",
      "schadenArt": "physisch",
      "effekt": "-3m BW, -10 Handeln für 2 Runden"
     },
     {
      "level": 3,
      "reichweite": "NK FK PS",
      "schaden": "NK/FK +4w10",
      "schadenArt": "physisch",
      "effekt": "-4m BW, -15 Handeln für 3 Runden"
     }
    ]
   },
   {
    "name": "Atem der Verwesung",
    "ast": "Guhl",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Strahl, der 1/2/3 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "4w10 +GS 2",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 1 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "5w10 +GS 3",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 2 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "6w10 +GS 4",
      "schadenArt": "magisch",
      "effekt": "Strahl, der 3 Gegnern Schaden verursacht und zusätzlich vergiftet. Angrenzende Personen erhalten auch Gift."
     }
    ]
   },
   {
    "name": "Gieriger Biss",
    "ast": "Guhl",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 0 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     }
    ]
   },
   {
    "name": "Körper aus Stahl",
    "ast": "Guhl",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht deine Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": ".",
      "schaden": "+5 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 2,
      "reichweite": ".",
      "schaden": "+10 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 3,
      "reichweite": ".",
      "schaden": "+15 RÜ",
      "effekt": "Erhöht deine Rüstung."
     }
    ]
   },
   {
    "name": "Sprungangriff",
    "ast": "Guhl",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Springe auf dein Ziel und verursache in 1/2/2 m Umkreis. Angrenzende Ziele erhalten halben Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "3w10 1 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 1 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "4w10 2 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 2 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "5w10 2 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 2 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     }
    ]
   },
   {
    "name": "Giftwolke",
    "ast": "Guhl",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2x2/2x2/3x3m GS 4",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "2x2/2x2/3x3m GS 5",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "2x2/2x2/3x3m GS 6",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     }
    ]
   },
   {
    "name": "Klingen- /Klauensturm",
    "ast": "Guhl",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Trifft alle angrenzenden 1/1/2 Felder.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+2 10 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+3 15 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+4 20 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 2 Felder."
     }
    ]
   },
   {
    "name": "Meuchelmörder",
    "ast": "Guhl",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Hält 1/2/3 Runden. Eine Giftstufe höher, wenn das Ziel blutet.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "+2w10 GS 2",
      "schadenArt": "magisch",
      "effekt": "Hält 1 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "+3w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Hält 2 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "+4w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Hält 3 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     }
    ]
   },
   {
    "name": "Blutexpansion",
    "ast": "Guhl",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Du fügst dir selbst 2/1/1w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "6w10 2 BL",
      "schadenArt": "magisch",
      "effekt": "Du fügst dir selbst 2w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "7w10 3 BL",
      "schadenArt": "magisch",
      "effekt": "Du fügst dir selbst 1w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "8w10 4 BL",
      "schadenArt": "magisch",
      "effekt": "Du fügst dir selbst 1w10 Schaden und sofort (ohne Wurf etc.) +1 Blutung zu."
     }
    ]
   },
   {
    "name": "Fauler Atem",
    "ast": "Guhl",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "GS 3 +2 FM +1 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "GS 4 +3 FM +2 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "GS 5 +4 FM +3 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     }
    ]
   },
   {
    "name": "Dornenhaut",
    "ast": "Hexe / Hexer",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du erhältst für 1/2/3 Runden +5/5/10 Rüstung. Nahkampfangreifer erleiden automatisch 1/2/3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5/7/10m wirken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "(5m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 1 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 1W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 5m wirken."
     },
     {
      "level": 2,
      "reichweite": "(7m) SE",
      "schaden": "+5 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 2 Runden +5 Rüstung. Nahkampfangreifer erleiden automatisch 2W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 7m wirken."
     },
     {
      "level": 3,
      "reichweite": "(10m) SE",
      "schaden": "+10 RÜ",
      "schadenArt": "magisch",
      "effekt": "Du erhältst für 3 Runden +10 Rüstung. Nahkampfangreifer erleiden automatisch 3W10 Schaden. Alternativ kannst du Dornenhaut als Aktiv- Fähigkeit auf einen Verbündeten in 10m wirken."
     }
    ]
   },
   {
    "name": "Fluch",
    "ast": "Hexe / Hexer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du selbst bekommst 3/2/1w10 Schaden, 1/1/2 Ziele bekommen Schaden und schlafen zu 20/40/60% für 1w4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 3w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 20% für 1w4 Runden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "4w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 2w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 40% für 1w4 Runden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "5w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 1w10 Schaden, 2 Ziele bekommen Schaden und schlafen zu 60% für 1w4 Runden."
     }
    ]
   },
   {
    "name": "Knochengriff",
    "ast": "Hexe / Hexer",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Ein Ziel erhält für 1/2/3 Runden -2/3/4 Bewegung und -10 auf Handeln.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10m",
      "schaden": "-2m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 1 Runden -2 Bewegung und -10 auf Handeln."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "-3m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 2 Runden -3 Bewegung und -10 auf Handeln."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "-4m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 3 Runden -4 Bewegung und -10 auf Handeln."
     }
    ]
   },
   {
    "name": "Schlaflied",
    "ast": "Hexe / Hexer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Für 1w4 Runden schlafen alle zu 10/20/30% im Umkreis ein.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "10% SL",
      "schadenArt": "magisch",
      "effekt": "Für 1w4 Runden schlafen alle zu 10% im Umkreis ein."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "20% SL",
      "schadenArt": "magisch",
      "effekt": "Für 1w4 Runden schlafen alle zu 20% im Umkreis ein."
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "30% SL",
      "schadenArt": "magisch",
      "effekt": "Für 1w4 Runden schlafen alle zu 30% im Umkreis ein."
     }
    ]
   },
   {
    "name": "Schrecken der Meere",
    "ast": "Hexe / Hexer",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Nach misslungenem WW -5/10/15 für 1/1/2 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "1 Gegner fliehen",
      "effekt": "Nach misslungenem WW -5 für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "2 Gegner fliehen",
      "effekt": "Nach misslungenem WW -10 für 1 Runden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "3 Gegner fliehen",
      "effekt": "Nach misslungenem WW -15 für 2 Runden."
     }
    ]
   },
   {
    "name": "Flüstern der Schatten",
    "ast": "Hexe / Hexer",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "70/80/90 % Chance, dass dein Ziel für 1w4 Runde schläft.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "SL",
      "effekt": "70 % Chance, dass dein Ziel für 1w4 Runde schläft."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "SL",
      "effekt": "80 % Chance, dass dein Ziel für 1w4 Runde schläft."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "SL",
      "effekt": "90 % Chance, dass dein Ziel für 1w4 Runde schläft."
     }
    ]
   },
   {
    "name": "Lebensentzug",
    "ast": "Hexe / Hexer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Mache auf 1/1/2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3",
      "schaden": "4w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 2,
      "reichweite": "5",
      "schaden": "5w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 3,
      "reichweite": "10",
      "schaden": "6w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     }
    ]
   },
   {
    "name": "Naturfluch",
    "ast": "Hexe / Hexer",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 20/40/60% vergiftet.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 20% vergiftet."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 40% vergiftet."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 60% vergiftet."
     }
    ]
   },
   {
    "name": "Traumherrscher",
    "ast": "Hexe / Hexer",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht die Chance, dass ein Gegner einschläft. Jeweils pro aktivem Debuff. (BL, GS, FM).",
    "stufen": [
     {
      "level": 1,
      "schaden": "+5% SL Chance",
      "effekt": "Erhöht die Chance, dass ein Gegner einschläft. Jeweils pro aktivem Debuff. (BL, GS, FM)."
     },
     {
      "level": 2,
      "schaden": "+10% SL Chance",
      "effekt": "Erhöht die Chance, dass ein Gegner einschläft. Jeweils pro aktivem Debuff. (BL, GS, FM)."
     },
     {
      "level": 3,
      "schaden": "+15% SL Chance",
      "effekt": "Erhöht die Chance, dass ein Gegner einschläft. Jeweils pro aktivem Debuff. (BL, GS, FM)."
     }
    ]
   },
   {
    "name": "Fluch der Schwächung",
    "ast": "Hexe / Hexer",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/2/3 Ziele in Reichweite machen für 1/2/3 Runden 40/50/60 %weniger Standard-Angriffs Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "-40 % Schaden",
      "effekt": "1 Ziele in Reichweite machen für 1 Runden 40 %weniger Standard-Angriffs Schaden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "-50 % Schaden",
      "effekt": "2 Ziele in Reichweite machen für 2 Runden 50 %weniger Standard-Angriffs Schaden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "-60 % Schaden",
      "effekt": "3 Ziele in Reichweite machen für 3 Runden 60 %weniger Standard-Angriffs Schaden."
     }
    ]
   },
   {
    "name": "Mentale Welle",
    "ast": "Hexe / Hexer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle im Radius außer dir haben einen Malus von -5/10/15 auf alle Proben.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Alle im Radius außer dir haben einen Malus von -5 auf alle Proben."
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Alle im Radius außer dir haben einen Malus von -10 auf alle Proben."
     },
     {
      "level": 3,
      "reichweite": "4m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Alle im Radius außer dir haben einen Malus von -15 auf alle Proben."
     }
    ]
   },
   {
    "name": "Verfluchter Kreis",
    "ast": "Hexe / Hexer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+1w10 Für 1 Runden",
      "schadenArt": "magisch",
      "effekt": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "+1w10 Für 2 Runden",
      "schadenArt": "magisch",
      "effekt": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "+2w10 Für 3 Runden",
      "schadenArt": "magisch",
      "effekt": "Zone 2x2/2x2/3x3 -5/-10/-15 auf Proben."
     }
    ]
   },
   {
    "name": "Auflösung",
    "ast": "Hexe / Hexer",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Stufe 1: ein bestehender magischer Fähigkeitseffekt wird aufgelöst. Stufe 2: bis zu zwei. Stufe 3: bis zu drei. Buffs, Debuffs, Beschwörungen, magische Zonen, Schilde, Mauern usw. Bereits vollständig abgehandelte Effekte nicht.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Löse 1 Fähigkeiten auf",
      "effekt": "Stufe 1: ein bestehender magischer Fähigkeitseffekt wird aufgelöst. Stufe 2: bis zu zwei. Stufe 3: bis zu drei. Buffs, Debuffs, Beschwörungen, magische Zonen, Schilde, Mauern usw. Bereits vollständig abgehandelte Effekte nicht."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Löse 2 Fähigkeiten auf",
      "effekt": "Stufe 1: ein bestehender magischer Fähigkeitseffekt wird aufgelöst. Stufe 2: bis zu zwei. Stufe 3: bis zu drei. Buffs, Debuffs, Beschwörungen, magische Zonen, Schilde, Mauern usw. Bereits vollständig abgehandelte Effekte nicht."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "Löse 3 Fähigkeiten auf",
      "effekt": "Stufe 1: ein bestehender magischer Fähigkeitseffekt wird aufgelöst. Stufe 2: bis zu zwei. Stufe 3: bis zu drei. Buffs, Debuffs, Beschwörungen, magische Zonen, Schilde, Mauern usw. Bereits vollständig abgehandelte Effekte nicht."
     }
    ]
   },
   {
    "name": "Gedankenkontrolle",
    "ast": "Hexe / Hexer",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "WW -5/10/15 Sonst wird das Ziel von dir kontrolliert.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "1 Gegner Für 2 Runden",
      "effekt": "WW -5 Sonst wird das Ziel von dir kontrolliert."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "1 Gegner Für 2 Runden",
      "effekt": "WW -10 Sonst wird das Ziel von dir kontrolliert."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "2 Gegner Für 2 Runden",
      "effekt": "WW -15 Sonst wird das Ziel von dir kontrolliert."
     }
    ]
   },
   {
    "name": "Biss",
    "ast": "Naga",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du beißt ein angrenzendes Ziel",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Stärke +2w10 0 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Stärke +3w10 5 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Stärke +4w10 10 RB *2 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     }
    ]
   },
   {
    "name": "Giftmischer",
    "ast": "Naga",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Deine NK- und FK- Angriffe verursachen 1/2/3 Runden Giftstufe 1/2/3.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 1 Runden Giftstufe 1."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 2 Runden Giftstufe 2."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 3 Runden Giftstufe 3."
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Naga",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Naga",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Schrecken der Meere",
    "ast": "Naga",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Nach misslungenem WW -5/10/15 für 1/1/2 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "1 Gegner fliehen",
      "effekt": "Nach misslungenem WW -5 für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "2 Gegner fliehen",
      "effekt": "Nach misslungenem WW -10 für 1 Runden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "3 Gegner fliehen",
      "effekt": "Nach misslungenem WW -15 für 2 Runden."
     }
    ]
   },
   {
    "name": "Gieriger Biss",
    "ast": "Naga",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 0 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     }
    ]
   },
   {
    "name": "Giftsymbiose",
    "ast": "Naga",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Gift- Stufe (max.5)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+1w4 pro Gift- Stufe (max.5)"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+2w4 pro Gift- Stufe (max.5)"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+3w4 pro Gift- Stufe (max.5)"
     }
    ]
   },
   {
    "name": "Naturfluch",
    "ast": "Naga",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 20/40/60% vergiftet.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 20% vergiftet."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 40% vergiftet."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 60% vergiftet."
     }
    ]
   },
   {
    "name": "Wurzelwucher",
    "ast": "Naga",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Ziel muss SW - 5/10/15 bestehen, um sich zu befreien.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "GS 1 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 5 bestehen, um sich zu befreien."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "GS 2 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 10 bestehen, um sich zu befreien."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "GS 3 2 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 15 bestehen, um sich zu befreien."
     }
    ]
   },
   {
    "name": "Giftwolke",
    "ast": "Naga",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2x2/2x2/3x3m GS 4",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "2x2/2x2/3x3m GS 5",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "2x2/2x2/3x3m GS 6",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     }
    ]
   },
   {
    "name": "Welle der Korrosion",
    "ast": "Naga",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle im Umkreis",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "3w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis"
     },
     {
      "level": 2,
      "reichweite": "3m UK",
      "schaden": "4w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis"
     },
     {
      "level": 3,
      "reichweite": "4m UK",
      "schaden": "5w10 GS 5",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis"
     }
    ]
   },
   {
    "name": "Wucherfaust",
    "ast": "Naga",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Triffst du deinen Gegner, kann er sich 1/1/2 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "SS +1w10 +1 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 1 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "SS +2w10 +2 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 1 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "SS +3w10 +3 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 2 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     }
    ]
   },
   {
    "name": "Verschlingen",
    "ast": "Naga",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Chance: 20/40/60%, Ziel bekommt Gift Stufe 4/5/6 + 3/4/5 Blutungen. Misslingt: 4w10 Schaden für den Anwender",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 20%, Ziel bekommt Gift Stufe 4 + 3 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 40%, Ziel bekommt Gift Stufe 5 + 4 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 60%, Ziel bekommt Gift Stufe 6 + 5 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     }
    ]
   },
   {
    "name": "Waldgedicht",
    "ast": "Naga",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Alle Feinde im Umkreis.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "GS 4 +2 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "GS 5 +3 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "GS 6 +4 BL",
      "schadenArt": "magisch",
      "effekt": "Alle Feinde im Umkreis."
     }
    ]
   },
   {
    "name": "Biss",
    "ast": "OrcaLord",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du beißt ein angrenzendes Ziel",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Stärke +2w10 0 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Stärke +3w10 5 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Stärke +4w10 10 RB *2 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     }
    ]
   },
   {
    "name": "Bodyslam",
    "ast": "OrcaLord",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 1/2/3w4 Meter zurück",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10",
      "schadenArt": "physisch",
      "effekt": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 1w4 Meter zurück"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10",
      "schadenArt": "physisch",
      "effekt": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 2w4 Meter zurück"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10",
      "schadenArt": "physisch",
      "effekt": "Geht nur, wenn du dich in dieser Runde mindestens 2m bewegt hast. Ziel fliegt nach misslungenem SW 3w4 Meter zurück"
     }
    ]
   },
   {
    "name": "Monster Lord",
    "ast": "OrcaLord",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +50/75/100 LP zusätzlich",
    "stufen": [
     {
      "level": 1,
      "schaden": "LP +50",
      "effekt": "In Monsterform: +50 LP zusätzlich"
     },
     {
      "level": 2,
      "schaden": "LP +75",
      "effekt": "In Monsterform: +75 LP zusätzlich"
     },
     {
      "level": 3,
      "schaden": "LP +100",
      "effekt": "In Monsterform: +100 LP zusätzlich"
     }
    ]
   },
   {
    "name": "Pure Muskeln",
    "ast": "OrcaLord",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +10/20/30 Stärke",
    "stufen": [
     {
      "level": 1,
      "schaden": "+10 Stärke",
      "effekt": "In Monsterform: +10 Stärke"
     },
     {
      "level": 2,
      "schaden": "+20 Stärke",
      "effekt": "In Monsterform: +20 Stärke"
     },
     {
      "level": 3,
      "schaden": "+30 Stärke",
      "effekt": "In Monsterform: +30 Stärke"
     }
    ]
   },
   {
    "name": "Schrecken der Meere",
    "ast": "OrcaLord",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Nach misslungenem WW -5/10/15 für 1/1/2 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "1 Gegner fliehen",
      "effekt": "Nach misslungenem WW -5 für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "2 Gegner fliehen",
      "effekt": "Nach misslungenem WW -10 für 1 Runden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "3 Gegner fliehen",
      "effekt": "Nach misslungenem WW -15 für 2 Runden."
     }
    ]
   },
   {
    "name": "Aquaknarre",
    "ast": "OrcaLord",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-5/10/15), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "4w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-5), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "5w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-10), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "6w10 -alle FM",
      "schadenArt": "magisch",
      "effekt": "3-mal pro Kampf kannst du einen Wasserstrahl schießen. Das Ziel muss einen SW bestehen (-15), sonst wird es 1w4 weggespült. Bei Benutzung löschst du alle FM bei dir und deinem Ziel. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Respektschelle",
    "ast": "OrcaLord",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Gegner ist zu 20/40/60 % gestunnt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Gegner ist zu 20 % gestunnt."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Gegner ist zu 40 % gestunnt."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Gegner ist zu 60 % gestunnt."
     }
    ]
   },
   {
    "name": "Spalter",
    "ast": "OrcaLord",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "1/2/3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK 10 RB",
      "schadenArt": "physisch",
      "effekt": "1 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK 15 RB",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK 20 RB",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Spot",
    "ast": "OrcaLord",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Ein Gegner in Reichweite greift 2/2/3 Runden nur dich an. Gegen ihn hast du 10/15/20 Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2 Runden Aggro +10RÜ",
      "effekt": "Ein Gegner in Reichweite greift 2 Runden nur dich an. Gegen ihn hast du 10 Rüstung."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "2 Runden Aggro +15RÜ",
      "effekt": "Ein Gegner in Reichweite greift 2 Runden nur dich an. Gegen ihn hast du 15 Rüstung."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "3 Runden Aggro +20RÜ",
      "effekt": "Ein Gegner in Reichweite greift 3 Runden nur dich an. Gegen ihn hast du 20 Rüstung."
     }
    ]
   },
   {
    "name": "Schallschuss",
    "ast": "OrcaLord",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "In einer Linie müssen alle getroffenen Ziele einen Stun-Wurf 40/60/80% bestehen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "2w10 1 Runden Stun",
      "schadenArt": "magisch",
      "effekt": "In einer Linie müssen alle getroffenen Ziele einen Stun-Wurf 40% bestehen."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "3w10 1 Runden Stun",
      "schadenArt": "magisch",
      "effekt": "In einer Linie müssen alle getroffenen Ziele einen Stun-Wurf 60% bestehen."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "4w10 2 Runden Stun",
      "schadenArt": "magisch",
      "effekt": "In einer Linie müssen alle getroffenen Ziele einen Stun-Wurf 80% bestehen."
     }
    ]
   },
   {
    "name": "Ultraschall",
    "ast": "OrcaLord",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Alle im Umkreis von dir können 1/2/3 Runden keine aktiven oder extra- Fähigkeiten einsetzen (nur passive).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "Keine Fähigkeiten für 1 Runden",
      "effekt": "Alle im Umkreis von dir können 1 Runden keine aktiven oder extra- Fähigkeiten einsetzen (nur passive)."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "Keine Fähigkeiten für 2 Runden",
      "effekt": "Alle im Umkreis von dir können 2 Runden keine aktiven oder extra- Fähigkeiten einsetzen (nur passive)."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "Keine Fähigkeiten für 3 Runden",
      "effekt": "Alle im Umkreis von dir können 3 Runden keine aktiven oder extra- Fähigkeiten einsetzen (nur passive)."
     }
    ]
   },
   {
    "name": "Wasserschild",
    "ast": "OrcaLord",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/1/2 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+10 RÜ für 3 Runden",
      "schadenArt": "magisch",
      "effekt": "1 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "+20 RÜ für 4 Runden",
      "schadenArt": "magisch",
      "effekt": "1 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "+30 RÜ für 5 Runden",
      "schadenArt": "magisch",
      "effekt": "2 Ziele erhält Rüstung. Alle FM erlöschen. Immun gegen weitere FM solange der Schildaktiv ist."
     }
    ]
   },
   {
    "name": "Verschlingen",
    "ast": "OrcaLord",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Chance: 20/40/60%, Ziel bekommt Gift Stufe 4/5/6 + 3/4/5 Blutungen. Misslingt: 4w10 Schaden für den Anwender",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 20%, Ziel bekommt Gift Stufe 4 + 3 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 40%, Ziel bekommt Gift Stufe 5 + 4 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 60%, Ziel bekommt Gift Stufe 6 + 5 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     }
    ]
   },
   {
    "name": "Welle",
    "ast": "OrcaLord",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1/1/2-mal pro Kampf. Eine 2/3/4m breite Welle trifft die ersten Gegner, Gegner werden 1/2/3w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "6w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Eine 2m breite Welle trifft die ersten Gegner, Gegner werden 1w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "7w10",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Eine 3m breite Welle trifft die ersten Gegner, Gegner werden 2w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "8w10",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Eine 4m breite Welle trifft die ersten Gegner, Gegner werden 3w4 mitgerissen (Stärkewurf) Nach Anwendung des Skills 3 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Beruhigende Aura",
    "ast": "Priester / Mönch",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Verbündete heilen Lebenspunkte und können 1/1/2 Debuffs entfernen",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 1w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 2w10, -1 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 1 Debuffs entfernen"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 3w10, -2 Debuffs",
      "schadenArt": "heilung",
      "effekt": "Verbündete heilen Lebenspunkte und können 2 Debuffs entfernen"
     }
    ]
   },
   {
    "name": "Heilende Hand",
    "ast": "Priester / Mönch",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Du heilst einen Verbündeten",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Du heilst einen Verbündeten"
     }
    ]
   },
   {
    "name": "Magischer Schild",
    "ast": "Priester / Mönch",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Für 1/2/3 Runden 3/5/10 Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+3 RÜ",
      "effekt": "Für 1 Runden 3 Rüstung."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+5 RÜ",
      "effekt": "Für 2 Runden 5 Rüstung."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Für 3 Runden 10 Rüstung."
     }
    ]
   },
   {
    "name": "Raus da!",
    "ast": "Priester / Mönch",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "+2m",
      "effekt": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "+4m",
      "effekt": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "+6m",
      "effekt": "Bewege sofort einen Verbündeten, ohne dass er eigene Bewegung verbraucht."
     }
    ]
   },
   {
    "name": "Seelenreinigung",
    "ast": "Priester / Mönch",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Entfernt bei allen Verbündeten im Umkreis jeweils -1/2/3 Stufen der Debuffs (GS, FM, BL)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m",
      "schaden": "-1 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -1 Stufen der Debuffs (GS, FM, BL)"
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "-2 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -2 Stufen der Debuffs (GS, FM, BL)"
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "-3 Debuffs",
      "effekt": "Entfernt bei allen Verbündeten im Umkreis jeweils -3 Stufen der Debuffs (GS, FM, BL)"
     }
    ]
   },
   {
    "name": "Ansporn",
    "ast": "Priester / Mönch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Alle Verbündeten im Umkreis bekommen für 1/2/3 Runden einen Bonus auf Handeln und Bewegung (nicht stapelbar).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "+10 Handeln +1m BW",
      "schadenArt": "magisch",
      "effekt": "Alle Verbündeten im Umkreis bekommen für 1 Runden einen Bonus auf Handeln und Bewegung (nicht stapelbar)."
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "+15 Handeln +2m BW",
      "schadenArt": "magisch",
      "effekt": "Alle Verbündeten im Umkreis bekommen für 2 Runden einen Bonus auf Handeln und Bewegung (nicht stapelbar)."
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "+20 Handeln +3m BW",
      "schadenArt": "magisch",
      "effekt": "Alle Verbündeten im Umkreis bekommen für 3 Runden einen Bonus auf Handeln und Bewegung (nicht stapelbar)."
     }
    ]
   },
   {
    "name": "Aura der Rast",
    "ast": "Priester / Mönch",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Für 2/3/4 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 1/2/3 reduzieren.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m SE",
      "schaden": "HL +2w10, -1 Debuff-Lvl",
      "schadenArt": "heilung",
      "effekt": "Für 2 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 1 reduzieren."
     },
     {
      "level": 2,
      "reichweite": "3m SE",
      "schaden": "HL +3w10, -2 Debuff-Lvl",
      "schadenArt": "heilung",
      "effekt": "Für 3 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 2 reduzieren."
     },
     {
      "level": 3,
      "reichweite": "4m SE",
      "schaden": "HL +4w10, -3 Debuff-Lvl",
      "schadenArt": "heilung",
      "effekt": "Für 4 Runden. Heilst du jeden Freund, der seine Runde in deiner Aura startet. Zusätzlich darf er ein Debuff seiner Wahl wird um 3 reduzieren."
     }
    ]
   },
   {
    "name": "Buße",
    "ast": "Priester / Mönch",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Geht nur, wenn der Anwender einen Debuff hat. 1/2/3 Ziele in Reichweite werden geheilt und verlieren alle Debuffs.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "HL 3w10 -alle Debuffs",
      "schadenArt": "heilung",
      "effekt": "Geht nur, wenn der Anwender einen Debuff hat. 1 Ziele in Reichweite werden geheilt und verlieren alle Debuffs."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "HL 4w10 -alle Debuffs",
      "schadenArt": "heilung",
      "effekt": "Geht nur, wenn der Anwender einen Debuff hat. 2 Ziele in Reichweite werden geheilt und verlieren alle Debuffs."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "HL 5w10 -alle Debuffs",
      "schadenArt": "heilung",
      "effekt": "Geht nur, wenn der Anwender einen Debuff hat. 3 Ziele in Reichweite werden geheilt und verlieren alle Debuffs."
     }
    ]
   },
   {
    "name": "Heilendes Wort",
    "ast": "Priester / Mönch",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Heile 1/2/3 Ziele in Reichweite.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Heile 1 Ziele in Reichweite."
     },
     {
      "level": 2,
      "reichweite": "5m SE",
      "schaden": "HL 5w10",
      "schadenArt": "heilung",
      "effekt": "Heile 2 Ziele in Reichweite."
     },
     {
      "level": 3,
      "reichweite": "7m SE",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Heile 3 Ziele in Reichweite."
     }
    ]
   },
   {
    "name": "Ersthelfer",
    "ast": "Priester / Mönch",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/2/3× pro Kampf: Fällt ein Verbündeter in 5/10/10m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Heilungsreaktion",
      "effekt": "1× pro Kampf: Fällt ein Verbündeter in 5m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Heilungsreaktion",
      "effekt": "2× pro Kampf: Fällt ein Verbündeter in 10m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "Heilungsreaktion",
      "effekt": "3× pro Kampf: Fällt ein Verbündeter in 10m auf ≤10 LP, darfst du sofort eine Heilfähigkeit auf ihn einsetzen, obwohl nicht deine Runde ist."
     }
    ]
   },
   {
    "name": "Göttlicher Schild",
    "ast": "Priester / Mönch",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 3,
    "info": "1/2/3 Ziele für 1/2/3 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "HL 4w10 5 RÜ",
      "schadenArt": "heilung",
      "effekt": "1 Ziele für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "HL 5w10 10 RÜ",
      "schadenArt": "heilung",
      "effekt": "2 Ziele für 2 Runden."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "HL 6w10 15 RÜ",
      "schadenArt": "heilung",
      "effekt": "3 Ziele für 3 Runden."
     }
    ]
   },
   {
    "name": "Welle der Heilung",
    "ast": "Priester / Mönch",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 3,
    "info": "Aura heilt jeden Verbündeten im Umkreis",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "HL 5w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Aura heilt jeden Verbündeten im Umkreis"
     }
    ]
   },
   {
    "name": "Heute stirbt keiner!",
    "ast": "Priester / Mönch",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Für 1/2/3 Runden kann kein Verbündeter unter 1 LP fallen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 1 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 2 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 3 Runden kann kein Verbündeter unter 1 LP fallen."
     }
    ]
   },
   {
    "name": "Neues Leben",
    "ast": "Priester / Mönch",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 4,
    "info": "1× pro Tag. Belebt nach 1/1/2 Runden tot mit ein paar Lebenspunkten wieder. Oder heilt einfach auch nur.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Wiederbelebung HL 8w10",
      "schadenArt": "heilung",
      "effekt": "1× pro Tag. Belebt nach 1 Runden tot mit ein paar Lebenspunkten wieder. Oder heilt einfach auch nur."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Wiederbelebung HL 9w10",
      "schadenArt": "heilung",
      "effekt": "1× pro Tag. Belebt nach 1 Runden tot mit ein paar Lebenspunkten wieder. Oder heilt einfach auch nur."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Wiederbelebung HL 10w10",
      "schadenArt": "heilung",
      "effekt": "1× pro Tag. Belebt nach 2 Runden tot mit ein paar Lebenspunkten wieder. Oder heilt einfach auch nur."
     }
    ]
   },
   {
    "name": "Berauben",
    "ast": "Rattenmensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "+2/4/6w10 Gold bei Verwundung",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+1w10, 5 RB",
      "schadenArt": "physisch",
      "effekt": "+2w10 Gold bei Verwundung"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+2w10, 10 RB",
      "schadenArt": "physisch",
      "effekt": "+4w10 Gold bei Verwundung"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+3w10, 15 RB",
      "schadenArt": "physisch",
      "effekt": "+6w10 Gold bei Verwundung"
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Rattenmensch",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Giftmischer",
    "ast": "Rattenmensch",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Deine NK- und FK- Angriffe verursachen 1/2/3 Runden Giftstufe 1/2/3.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 1 Runden Giftstufe 1."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 2 Runden Giftstufe 2."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 3 Runden Giftstufe 3."
     }
    ]
   },
   {
    "name": "Ich bin dann mal weg",
    "ast": "Rattenmensch",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Du wirst für 1/2/3 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 1 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 2 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 3 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Rattenmensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Bluthund",
    "ast": "Rattenmensch",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Nur verletzte Ziele wählbar. Für 1/2/3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "+5 Angriff, +2w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 1 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "+10 Angriff, +3w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 2 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "+15 Angriff, +4w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     }
    ]
   },
   {
    "name": "Giftsymbiose",
    "ast": "Rattenmensch",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Gift- Stufe (max.5)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+1w4 pro Gift- Stufe (max.5)"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+2w4 pro Gift- Stufe (max.5)"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+3w4 pro Gift- Stufe (max.5)"
     }
    ]
   },
   {
    "name": "Seuchenstoß",
    "ast": "Rattenmensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK+ 3w10 +GS 2",
      "schadenArt": "magisch",
      "effekt": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK+ 4w10 +GS 3",
      "schadenArt": "magisch",
      "effekt": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK+ 5w10 +GS 4",
      "schadenArt": "magisch",
      "effekt": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe."
     }
    ]
   },
   {
    "name": "Gieriger Biss",
    "ast": "Rattenmensch",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 0 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     }
    ]
   },
   {
    "name": "Angriff aus dem Dunkeln",
    "ast": "Rattenmensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur wenn du versteckt bist. Du bleibst zu 25/50/75% unentdeckt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK FK +3w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Nur wenn du versteckt bist. Du bleibst zu 25% unentdeckt."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK FK +4w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Nur wenn du versteckt bist. Du bleibst zu 50% unentdeckt."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK FK +5w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Nur wenn du versteckt bist. Du bleibst zu 75% unentdeckt."
     }
    ]
   },
   {
    "name": "Giftwolke",
    "ast": "Rattenmensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2x2/2x2/3x3m GS 4",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "2x2/2x2/3x3m GS 5",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "2x2/2x2/3x3m GS 6",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     }
    ]
   },
   {
    "name": "Meuchelmörder",
    "ast": "Rattenmensch",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Hält 1/2/3 Runden. Eine Giftstufe höher, wenn das Ziel blutet.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "+2w10 GS 2",
      "schadenArt": "magisch",
      "effekt": "Hält 1 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "+3w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Hält 2 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "+4w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Hält 3 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     }
    ]
   },
   {
    "name": "Fauler Atem",
    "ast": "Rattenmensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "GS 3 +2 FM +1 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "GS 4 +3 FM +2 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "GS 5 +4 FM +3 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Rattenmensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Fluch",
    "ast": "Schattenskelett",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du selbst bekommst 3/2/1w10 Schaden, 1/1/2 Ziele bekommen Schaden und schlafen zu 20/40/60% für 1w4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 3w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 20% für 1w4 Runden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "4w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 2w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 40% für 1w4 Runden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "5w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 1w10 Schaden, 2 Ziele bekommen Schaden und schlafen zu 60% für 1w4 Runden."
     }
    ]
   },
   {
    "name": "Ich bin dann mal weg",
    "ast": "Schattenskelett",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Du wirst für 1/2/3 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 1 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 2 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 3 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     }
    ]
   },
   {
    "name": "Knochengriff",
    "ast": "Schattenskelett",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Ein Ziel erhält für 1/2/3 Runden -2/3/4 Bewegung und -10 auf Handeln.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10m",
      "schaden": "-2m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 1 Runden -2 Bewegung und -10 auf Handeln."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "-3m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 2 Runden -3 Bewegung und -10 auf Handeln."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "-4m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 3 Runden -4 Bewegung und -10 auf Handeln."
     }
    ]
   },
   {
    "name": "Monster",
    "ast": "Schattenskelett",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +25/50/75 LP zusätzlich",
    "stufen": [
     {
      "level": 1,
      "schaden": "LP +25",
      "effekt": "In Monsterform: +25 LP zusätzlich"
     },
     {
      "level": 2,
      "schaden": "LP +50",
      "effekt": "In Monsterform: +50 LP zusätzlich"
     },
     {
      "level": 3,
      "schaden": "LP +75",
      "effekt": "In Monsterform: +75 LP zusätzlich"
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Schattenskelett",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Dunkle Rüstung",
    "ast": "Schattenskelett",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du hast 1/2/3 Runden lang eine Rüstung. Du bist um Heimlichkeit +5/10/10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Du hast 1 Runden lang eine Rüstung. Du bist um Heimlichkeit +5"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+15 RÜ",
      "effekt": "Du hast 2 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+20 RÜ",
      "effekt": "Du hast 3 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     }
    ]
   },
   {
    "name": "Schlafstörung",
    "ast": "Schattenskelett",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Ein schlafendes Ziel in Reichweite erleidet in der nächsten 1/1/2 Runden +1/2/3w10 Schaden durch alle Quellen und wachen erst am Ende des Skills Schlafstörung auf.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+1w10",
      "effekt": "Ein schlafendes Ziel in Reichweite erleidet in der nächsten 1 Runden +1w10 Schaden durch alle Quellen und wachen erst am Ende des Skills Schlafstörung auf."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "+2w10",
      "effekt": "Ein schlafendes Ziel in Reichweite erleidet in der nächsten 1 Runden +2w10 Schaden durch alle Quellen und wachen erst am Ende des Skills Schlafstörung auf."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "+3w10",
      "effekt": "Ein schlafendes Ziel in Reichweite erleidet in der nächsten 2 Runden +3w10 Schaden durch alle Quellen und wachen erst am Ende des Skills Schlafstörung auf."
     }
    ]
   },
   {
    "name": "Trugbild",
    "ast": "Schattenskelett",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 30/60/90% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "1 Runden Unsichtbar",
      "effekt": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 30% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar)."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "1 Runden Unsichtbar",
      "effekt": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 60% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar)."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "2 Runden Unsichtbar",
      "effekt": "Du wirst unsichtbar und lässt ein Spiegelbild an deiner Position, dass deine Feinde zu 90% für eine Runde angreifen. (Greifst du an oder ähnliches wirst du sichtbar)."
     }
    ]
   },
   {
    "name": "Verstärker der Leiden",
    "ast": "Schattenskelett",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Pro unterschiedlicher Debuff-Art auf dem Ziel +1/2/3w10 Schaden (BL GS FM) (max.3)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "+1w10",
      "schadenArt": "physisch",
      "effekt": "Pro unterschiedlicher Debuff-Art auf dem Ziel +1w10 Schaden (BL GS FM) (max.3)"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "+2w10",
      "schadenArt": "physisch",
      "effekt": "Pro unterschiedlicher Debuff-Art auf dem Ziel +2w10 Schaden (BL GS FM) (max.3)"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "+3w10",
      "schadenArt": "physisch",
      "effekt": "Pro unterschiedlicher Debuff-Art auf dem Ziel +3w10 Schaden (BL GS FM) (max.3)"
     }
    ]
   },
   {
    "name": "Angriff aus dem Dunkeln",
    "ast": "Schattenskelett",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur wenn du versteckt bist. Du bleibst zu 25/50/75% unentdeckt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK FK +3w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Nur wenn du versteckt bist. Du bleibst zu 25% unentdeckt."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK FK +4w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Nur wenn du versteckt bist. Du bleibst zu 50% unentdeckt."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK FK +5w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Nur wenn du versteckt bist. Du bleibst zu 75% unentdeckt."
     }
    ]
   },
   {
    "name": "Meuchelmörder",
    "ast": "Schattenskelett",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Hält 1/2/3 Runden. Eine Giftstufe höher, wenn das Ziel blutet.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "+2w10 GS 2",
      "schadenArt": "magisch",
      "effekt": "Hält 1 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "+3w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Hält 2 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "+4w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Hält 3 Runden. Eine Giftstufe höher, wenn das Ziel blutet."
     }
    ]
   },
   {
    "name": "Schattenschritt",
    "ast": "Schattenskelett",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "25 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "50 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     },
     {
      "level": 3,
      "reichweite": "20m",
      "schaden": "75 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     }
    ]
   },
   {
    "name": "Schwarze Kugel",
    "ast": "Schattenskelett",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Selbstschaden 1w20/12/10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "10w10",
      "schadenArt": "magisch",
      "effekt": "Selbstschaden 1w20/12/10"
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "11w10",
      "schadenArt": "magisch",
      "effekt": "Selbstschaden 1w20/12/10"
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "12w10",
      "schadenArt": "magisch",
      "effekt": "Selbstschaden 1w20/12/10"
     }
    ]
   },
   {
    "name": "Seelenpakt",
    "ast": "Schattenskelett",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 1/2/3 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 1 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     },
     {
      "level": 2,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 2 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     },
     {
      "level": 3,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 3 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     }
    ]
   },
   {
    "name": "Blutschuss",
    "ast": "Seelenrufer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 2/3/4 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 2 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 3 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "4× 2w10",
      "schadenArt": "magisch",
      "effekt": "Erzeuge aus deinem Blut (−1w8) pro Kugel. 4 Blutkugeln, die du auf bis zu 3 verschiedenen Ziele schießen kannst."
     }
    ]
   },
   {
    "name": "Fluch",
    "ast": "Seelenrufer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du selbst bekommst 3/2/1w10 Schaden, 1/1/2 Ziele bekommen Schaden und schlafen zu 20/40/60% für 1w4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 3w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 20% für 1w4 Runden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "4w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 2w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 40% für 1w4 Runden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "5w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 1w10 Schaden, 2 Ziele bekommen Schaden und schlafen zu 60% für 1w4 Runden."
     }
    ]
   },
   {
    "name": "Knochengriff",
    "ast": "Seelenrufer",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Ein Ziel erhält für 1/2/3 Runden -2/3/4 Bewegung und -10 auf Handeln.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10m",
      "schaden": "-2m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 1 Runden -2 Bewegung und -10 auf Handeln."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "-3m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 2 Runden -3 Bewegung und -10 auf Handeln."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "-4m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 3 Runden -4 Bewegung und -10 auf Handeln."
     }
    ]
   },
   {
    "name": "Schlaflied",
    "ast": "Seelenrufer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Für 1w4 Runden schlafen alle zu 10/20/30% im Umkreis ein.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "10% SL",
      "schadenArt": "magisch",
      "effekt": "Für 1w4 Runden schlafen alle zu 10% im Umkreis ein."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "20% SL",
      "schadenArt": "magisch",
      "effekt": "Für 1w4 Runden schlafen alle zu 20% im Umkreis ein."
     },
     {
      "level": 3,
      "reichweite": "5m",
      "schaden": "30% SL",
      "schadenArt": "magisch",
      "effekt": "Für 1w4 Runden schlafen alle zu 30% im Umkreis ein."
     }
    ]
   },
   {
    "name": "Schrecken der Meere",
    "ast": "Seelenrufer",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Nach misslungenem WW -5/10/15 für 1/1/2 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "1 Gegner fliehen",
      "effekt": "Nach misslungenem WW -5 für 1 Runden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "2 Gegner fliehen",
      "effekt": "Nach misslungenem WW -10 für 1 Runden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "3 Gegner fliehen",
      "effekt": "Nach misslungenem WW -15 für 2 Runden."
     }
    ]
   },
   {
    "name": "Guhl Diener",
    "ast": "Seelenrufer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "LP 30/60/90 Nahkampf 30/40/50 2/3/4w10 Schaden Gift Stufe 2/3/4.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "1 Ghule Für 2 Runden",
      "schadenArt": "magisch",
      "effekt": "LP 30 Nahkampf 30 2w10 Schaden Gift Stufe 2."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "1 Ghule Für 2 Runden",
      "schadenArt": "magisch",
      "effekt": "LP 60 Nahkampf 40 3w10 Schaden Gift Stufe 3."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "2 Ghule Für 3 Runden",
      "schadenArt": "magisch",
      "effekt": "LP 90 Nahkampf 50 4w10 Schaden Gift Stufe 4."
     }
    ]
   },
   {
    "name": "Knochenmauer",
    "ast": "Seelenrufer",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erschaffe eine Knochenmauer die 50/100/200 LP hat.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "6m",
      "schaden": "3 m lange Mauer",
      "effekt": "Erschaffe eine Knochenmauer die 50 LP hat."
     },
     {
      "level": 2,
      "reichweite": "9m",
      "schaden": "4 m lange Mauer",
      "effekt": "Erschaffe eine Knochenmauer die 100 LP hat."
     },
     {
      "level": 3,
      "reichweite": "12m",
      "schaden": "5 m lange Mauer",
      "effekt": "Erschaffe eine Knochenmauer die 200 LP hat."
     }
    ]
   },
   {
    "name": "Knochenrüstung",
    "ast": "Seelenrufer",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Ein Ziel in Reichweite erhält Rüstung für 3/4/5 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m SE",
      "schaden": "+5 RÜ",
      "effekt": "Ein Ziel in Reichweite erhält Rüstung für 3 Runden."
     },
     {
      "level": 2,
      "reichweite": "10m SE",
      "schaden": "+10 RÜ",
      "effekt": "Ein Ziel in Reichweite erhält Rüstung für 4 Runden."
     },
     {
      "level": 3,
      "reichweite": "15m SE",
      "schaden": "+15 RÜ",
      "effekt": "Ein Ziel in Reichweite erhält Rüstung für 5 Runden."
     }
    ]
   },
   {
    "name": "Lebensentzug",
    "ast": "Seelenrufer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Mache auf 1/1/2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3",
      "schaden": "4w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 2,
      "reichweite": "5",
      "schaden": "5w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 1 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     },
     {
      "level": 3,
      "reichweite": "10",
      "schaden": "6w10 HL 50 %",
      "schadenArt": "magisch",
      "effekt": "Mache auf 2 Ziele Schaden. Du wirst um 50 % des Schadens geheilt."
     }
    ]
   },
   {
    "name": "Knochenspeer",
    "ast": "Seelenrufer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "1/1/2-mal pro Kampf. Du schleuderst einen Knochenspeer der 2/3/4 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Du schleuderst einen Knochenspeer der 2 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf. Du schleuderst einen Knochenspeer der 3 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "6w10 15 RB",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf. Du schleuderst einen Knochenspeer der 4 Ziele in einer Linie aufspießt. Nach Anwendung des Skills 2 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Ruf des Grabes",
    "ast": "Seelenrufer",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Bei einem Kill: 25/50/75 % Chance, dass das Ziel als Skelett Stufe 1 aufersteht.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "+1 Skelett",
      "effekt": "Bei einem Kill: 25 % Chance, dass das Ziel als Skelett Stufe 1 aufersteht."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "+1 Skelett",
      "effekt": "Bei einem Kill: 50 % Chance, dass das Ziel als Skelett Stufe 1 aufersteht."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "+1 Skelett",
      "effekt": "Bei einem Kill: 75 % Chance, dass das Ziel als Skelett Stufe 1 aufersteht."
     }
    ]
   },
   {
    "name": "Skelettbeherrschung",
    "ast": "Seelenrufer",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Leichen werden in Skelette NK 30/40/50 2/3/4w10 +1 /1/2 BL",
    "stufen": [
     {
      "level": 1,
      "reichweite": "7m",
      "schaden": "2 Skelette für 2 Runden",
      "effekt": "Leichen werden in Skelette NK 30 2w10 +1 /1/2 BL"
     },
     {
      "level": 2,
      "reichweite": "12m",
      "schaden": "3 Skelette für 3 Runden",
      "effekt": "Leichen werden in Skelette NK 40 3w10 +1 /1/2 BL"
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "4 Skelette für 4 Runden",
      "effekt": "Leichen werden in Skelette NK 50 4w10 +1 /1/2 BL"
     }
    ]
   },
   {
    "name": "Puppenspieler",
    "ast": "Seelenrufer",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Die von dir gerufenen Kreaturen sind nun stärker Schaden +1/2/3w10 RÜ+5/10/15 LP +5/10/20",
    "stufen": [
     {
      "level": 1,
      "schaden": "Für +1 Runden",
      "effekt": "Die von dir gerufenen Kreaturen sind nun stärker Schaden +1w10 RÜ+5 LP +5"
     },
     {
      "level": 2,
      "schaden": "Für +2 Runden",
      "effekt": "Die von dir gerufenen Kreaturen sind nun stärker Schaden +2w10 RÜ+10 LP +10"
     },
     {
      "level": 3,
      "schaden": "Für +2 Runden",
      "effekt": "Die von dir gerufenen Kreaturen sind nun stärker Schaden +3w10 RÜ+15 LP +20"
     }
    ]
   },
   {
    "name": "Skelett-Magier",
    "ast": "Seelenrufer",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Für 2/3/4 Runden LP 10/20/30, Monsterwert 40/50/60, Fähigkeiten: Funke/ Feuerball/ Feuersturm",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "1 Skelettmagier",
      "effekt": "Für 2 Runden LP 10, Monsterwert 40, Fähigkeiten: Funke/ Feuerball/ Feuersturm"
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "2 Skelettmagier",
      "effekt": "Für 3 Runden LP 20, Monsterwert 50, Fähigkeiten: Funke/ Feuerball/ Feuersturm"
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "3 Skelettmagier",
      "effekt": "Für 4 Runden LP 30, Monsterwert 60, Fähigkeiten: Funke/ Feuerball/ Feuersturm"
     }
    ]
   },
   {
    "name": "Fluch",
    "ast": "Sirene",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Du selbst bekommst 3/2/1w10 Schaden, 1/1/2 Ziele bekommen Schaden und schlafen zu 20/40/60% für 1w4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 3w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 20% für 1w4 Runden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "4w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 2w10 Schaden, 1 Ziele bekommen Schaden und schlafen zu 40% für 1w4 Runden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "5w10 +1w4 SL",
      "schadenArt": "magisch",
      "effekt": "Du selbst bekommst 1w10 Schaden, 2 Ziele bekommen Schaden und schlafen zu 60% für 1w4 Runden."
     }
    ]
   },
   {
    "name": "Kopfnuss",
    "ast": "Sirene",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Ziel ist zu 25/50/75% für 1 Runde gestunnt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 1 ST",
      "schadenArt": "physisch",
      "effekt": "Ziel ist zu 25% für 1 Runde gestunnt."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 1 ST",
      "schadenArt": "physisch",
      "effekt": "Ziel ist zu 50% für 1 Runde gestunnt."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 1 ST",
      "schadenArt": "physisch",
      "effekt": "Ziel ist zu 75% für 1 Runde gestunnt."
     }
    ]
   },
   {
    "name": "Monster",
    "ast": "Sirene",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +25/50/75 LP zusätzlich",
    "stufen": [
     {
      "level": 1,
      "schaden": "LP +25",
      "effekt": "In Monsterform: +25 LP zusätzlich"
     },
     {
      "level": 2,
      "schaden": "LP +50",
      "effekt": "In Monsterform: +50 LP zusätzlich"
     },
     {
      "level": 3,
      "schaden": "LP +75",
      "effekt": "In Monsterform: +75 LP zusätzlich"
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Sirene",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Wunden aufreißen",
    "ast": "Sirene",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 +1 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 +2 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 +3 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt Schaden und Blutung zu. Ist eine extra Aktion, wenn dein Ziel verletzt ist."
     }
    ]
   },
   {
    "name": "Alptraumbringer",
    "ast": "Sirene",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Deine Angriffe und Fähigkeiten machen +3/4/5w10 Schaden auf schlafende Ziele.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "+3w10",
      "schadenArt": "magisch",
      "effekt": "Deine Angriffe und Fähigkeiten machen +3w10 Schaden auf schlafende Ziele."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "+4w10",
      "schadenArt": "magisch",
      "effekt": "Deine Angriffe und Fähigkeiten machen +4w10 Schaden auf schlafende Ziele."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "+5w10",
      "schadenArt": "magisch",
      "effekt": "Deine Angriffe und Fähigkeiten machen +5w10 Schaden auf schlafende Ziele."
     }
    ]
   },
   {
    "name": "Flüstern der Schatten",
    "ast": "Sirene",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "70/80/90 % Chance, dass dein Ziel für 1w4 Runde schläft.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "SL",
      "effekt": "70 % Chance, dass dein Ziel für 1w4 Runde schläft."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "SL",
      "effekt": "80 % Chance, dass dein Ziel für 1w4 Runde schläft."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "SL",
      "effekt": "90 % Chance, dass dein Ziel für 1w4 Runde schläft."
     }
    ]
   },
   {
    "name": "Schlafstörung",
    "ast": "Sirene",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Ein schlafendes Ziel in Reichweite erleidet in der nächsten 1/1/2 Runden +1/2/3w10 Schaden durch alle Quellen und wachen erst am Ende des Skills Schlafstörung auf.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "+1w10",
      "effekt": "Ein schlafendes Ziel in Reichweite erleidet in der nächsten 1 Runden +1w10 Schaden durch alle Quellen und wachen erst am Ende des Skills Schlafstörung auf."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "+2w10",
      "effekt": "Ein schlafendes Ziel in Reichweite erleidet in der nächsten 1 Runden +2w10 Schaden durch alle Quellen und wachen erst am Ende des Skills Schlafstörung auf."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "+3w10",
      "effekt": "Ein schlafendes Ziel in Reichweite erleidet in der nächsten 2 Runden +3w10 Schaden durch alle Quellen und wachen erst am Ende des Skills Schlafstörung auf."
     }
    ]
   },
   {
    "name": "Traumherrscher",
    "ast": "Sirene",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht die Chance, dass ein Gegner einschläft. Jeweils pro aktivem Debuff. (BL, GS, FM).",
    "stufen": [
     {
      "level": 1,
      "schaden": "+5% SL Chance",
      "effekt": "Erhöht die Chance, dass ein Gegner einschläft. Jeweils pro aktivem Debuff. (BL, GS, FM)."
     },
     {
      "level": 2,
      "schaden": "+10% SL Chance",
      "effekt": "Erhöht die Chance, dass ein Gegner einschläft. Jeweils pro aktivem Debuff. (BL, GS, FM)."
     },
     {
      "level": 3,
      "schaden": "+15% SL Chance",
      "effekt": "Erhöht die Chance, dass ein Gegner einschläft. Jeweils pro aktivem Debuff. (BL, GS, FM)."
     }
    ]
   },
   {
    "name": "Mentale Welle",
    "ast": "Sirene",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle im Radius außer dir haben einen Malus von -5/10/15 auf alle Proben.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Alle im Radius außer dir haben einen Malus von -5 auf alle Proben."
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Alle im Radius außer dir haben einen Malus von -10 auf alle Proben."
     },
     {
      "level": 3,
      "reichweite": "4m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Alle im Radius außer dir haben einen Malus von -15 auf alle Proben."
     }
    ]
   },
   {
    "name": "Schallwelle",
    "ast": "Sirene",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Im Radius schlafen alle zu 20/40/60 % für 1w4 Runden ein.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "SL 1w4 Runden",
      "effekt": "Im Radius schlafen alle zu 20 % für 1w4 Runden ein."
     },
     {
      "level": 2,
      "reichweite": "4m UK",
      "schaden": "SL 1w4 Runden",
      "effekt": "Im Radius schlafen alle zu 40 % für 1w4 Runden ein."
     },
     {
      "level": 3,
      "reichweite": "6m UK",
      "schaden": "SL 1w4 Runden",
      "effekt": "Im Radius schlafen alle zu 60 % für 1w4 Runden ein."
     }
    ]
   },
   {
    "name": "Traumfresser",
    "ast": "Sirene",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Nur gegen schlafende Ziele in Reichweite. Bei Kill: +1 Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "5w10",
      "schadenArt": "magisch",
      "effekt": "Nur gegen schlafende Ziele in Reichweite. Bei Kill: +1 Aktion."
     },
     {
      "level": 2,
      "reichweite": "710m",
      "schaden": "6w10",
      "schadenArt": "magisch",
      "effekt": "Nur gegen schlafende Ziele in Reichweite. Bei Kill: +1 Aktion."
     },
     {
      "level": 3,
      "reichweite": "710m",
      "schaden": "7w10",
      "schadenArt": "magisch",
      "effekt": "Nur gegen schlafende Ziele in Reichweite. Bei Kill: +1 Aktion."
     }
    ]
   },
   {
    "name": "Gedankenkontrolle",
    "ast": "Sirene",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "WW -5/10/15 Sonst wird das Ziel von dir kontrolliert.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "1 Gegner Für 2 Runden",
      "effekt": "WW -5 Sonst wird das Ziel von dir kontrolliert."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "1 Gegner Für 2 Runden",
      "effekt": "WW -10 Sonst wird das Ziel von dir kontrolliert."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "2 Gegner Für 2 Runden",
      "effekt": "WW -15 Sonst wird das Ziel von dir kontrolliert."
     }
    ]
   },
   {
    "name": "Ketten des Jenseits",
    "ast": "Sirene",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "5 Runden -10 auf Handeln. Ziele müssen einen Willenskraftwurf -20 ablegen, sonst können sie sich für 1/2/3 Runden nicht bewegen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2 Ziele -BW",
      "effekt": "5 Runden -10 auf Handeln. Ziele müssen einen Willenskraftwurf -20 ablegen, sonst können sie sich für 1 Runden nicht bewegen."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "3 Ziele -BW",
      "effekt": "5 Runden -10 auf Handeln. Ziele müssen einen Willenskraftwurf -20 ablegen, sonst können sie sich für 2 Runden nicht bewegen."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "4 Ziele -BW",
      "effekt": "5 Runden -10 auf Handeln. Ziele müssen einen Willenskraftwurf -20 ablegen, sonst können sie sich für 3 Runden nicht bewegen."
     }
    ]
   },
   {
    "name": "Biss",
    "ast": "Spinnenmensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du beißt ein angrenzendes Ziel",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Stärke +2w10 0 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Stärke +3w10 5 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Stärke +4w10 10 RB *2 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Spinnenmensch",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Giftmischer",
    "ast": "Spinnenmensch",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Deine NK- und FK- Angriffe verursachen 1/2/3 Runden Giftstufe 1/2/3.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 1 Runden Giftstufe 1."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 2 Runden Giftstufe 2."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "schadenArt": "magisch",
      "effekt": "Deine NK- und FK- Angriffe verursachen 3 Runden Giftstufe 3."
     }
    ]
   },
   {
    "name": "Ich bin dann mal weg",
    "ast": "Spinnenmensch",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Du wirst für 1/2/3 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 1 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 2 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "Unsichtbar",
      "effekt": "Du wirst für 3 Runden Unsichtbar. Bricht bei Schaden, Angriff oder Fähigkeit ab"
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Spinnenmensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Giftsymbiose",
    "ast": "Spinnenmensch",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Gift- Stufe (max.5)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+1w4 pro Gift- Stufe (max.5)"
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+2w4 pro Gift- Stufe (max.5)"
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro GS",
      "schadenArt": "magisch",
      "effekt": "+3w4 pro Gift- Stufe (max.5)"
     }
    ]
   },
   {
    "name": "Naturfluch",
    "ast": "Spinnenmensch",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 20/40/60% vergiftet.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "GS 1",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 20% vergiftet."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "GS 2",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 40% vergiftet."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "GS 3",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist der Angreifer zu 60% vergiftet."
     }
    ]
   },
   {
    "name": "Toxischer Ausbruch",
    "ast": "Spinnenmensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "3w10 GS 2",
      "schadenArt": "magisch",
      "effekt": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM"
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "4w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM"
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "5w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Du Schadest einem Ziel in Reichweite. Hat das Ziel mindestens 1 Blutung erhält es zusätzlich +1FM"
     }
    ]
   },
   {
    "name": "Wurzelwucher",
    "ast": "Spinnenmensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Ziel muss SW - 5/10/15 bestehen, um sich zu befreien.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "GS 1 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 5 bestehen, um sich zu befreien."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "GS 2 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 10 bestehen, um sich zu befreien."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "GS 3 2 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 15 bestehen, um sich zu befreien."
     }
    ]
   },
   {
    "name": "Giftwolke",
    "ast": "Spinnenmensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2x2/2x2/3x3m GS 4",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "2x2/2x2/3x3m GS 5",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "2x2/2x2/3x3m GS 6",
      "schadenArt": "magisch",
      "effekt": "Alle in der Wolke werden vergiftet. Wahrnemung-10 in der Wolke."
     }
    ]
   },
   {
    "name": "Schattenschritt",
    "ast": "Spinnenmensch",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "25 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "50 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     },
     {
      "level": 3,
      "reichweite": "20m",
      "schaden": "75 % heimlich",
      "effekt": "Du löst dich in Rauch auf und materialisierst dich wieder. Eventuell bleibst du unentdeckt."
     }
    ]
   },
   {
    "name": "Wucherfaust",
    "ast": "Spinnenmensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Triffst du deinen Gegner, kann er sich 1/1/2 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "SS +1w10 +1 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 1 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "SS +2w10 +2 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 1 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "SS +3w10 +3 BL",
      "schadenArt": "magisch",
      "effekt": "Triffst du deinen Gegner, kann er sich 2 Runden nicht von dir wegbewegen. Wenn er es doch will, muss er SW -15 bestehen."
     }
    ]
   },
   {
    "name": "Fauler Atem",
    "ast": "Spinnenmensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "GS 3 +2 FM +1 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "GS 4 +3 FM +2 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "GS 5 +4 FM +3 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     }
    ]
   },
   {
    "name": "Verschlingen",
    "ast": "Spinnenmensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Chance: 20/40/60%, Ziel bekommt Gift Stufe 4/5/6 + 3/4/5 Blutungen. Misslingt: 4w10 Schaden für den Anwender",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 20%, Ziel bekommt Gift Stufe 4 + 3 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 40%, Ziel bekommt Gift Stufe 5 + 4 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Ziel für 1w4 Runden verschlungen",
      "schadenArt": "magisch",
      "effekt": "Chance: 60%, Ziel bekommt Gift Stufe 6 + 5 Blutungen. Misslingt: 4w10 Schaden für den Anwender"
     }
    ]
   },
   {
    "name": "Backpfeifengewitter",
    "ast": "Steintroll",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Trifft 2/2/3 Ziele in einer Reihe",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK + 2w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK + 3w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK + 4w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 3 Ziele in einer Reihe"
     }
    ]
   },
   {
    "name": "Bis bald",
    "ast": "Steintroll",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du schleuderst ein angrenzendes Ziel 3/5/10 m weit. Die Person aktiviert Sprungangriff-Effekt Level 1/2/3 bei der Landung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10",
      "schadenArt": "physisch",
      "effekt": "Du schleuderst ein angrenzendes Ziel 3 m weit. Die Person aktiviert Sprungangriff-Effekt Level 1 bei der Landung."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10",
      "schadenArt": "physisch",
      "effekt": "Du schleuderst ein angrenzendes Ziel 5 m weit. Die Person aktiviert Sprungangriff-Effekt Level 2 bei der Landung."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10",
      "schadenArt": "physisch",
      "effekt": "Du schleuderst ein angrenzendes Ziel 10 m weit. Die Person aktiviert Sprungangriff-Effekt Level 3 bei der Landung."
     }
    ]
   },
   {
    "name": "Pure Muskeln +",
    "ast": "Steintroll",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +15/30/50 Stärke",
    "stufen": [
     {
      "level": 1,
      "schaden": "+15 Stärke",
      "effekt": "In Monsterform: +15 Stärke"
     },
     {
      "level": 2,
      "schaden": "+30 Stärke",
      "effekt": "In Monsterform: +30 Stärke"
     },
     {
      "level": 3,
      "schaden": "+50 Stärke",
      "effekt": "In Monsterform: +50 Stärke"
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Steintroll",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Riese",
    "ast": "Steintroll",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "−2/1/1 m Bewegung −30/20/10 Handeln",
    "stufen": [
     {
      "level": 1,
      "schaden": "LP +250",
      "effekt": "−2 m Bewegung −30 Handeln"
     },
     {
      "level": 2,
      "schaden": "LP +500",
      "effekt": "−1 m Bewegung −20 Handeln"
     },
     {
      "level": 3,
      "schaden": "LP +1000",
      "effekt": "−1 m Bewegung −10 Handeln"
     }
    ]
   },
   {
    "name": "Ablenken",
    "ast": "Steintroll",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Zu 30/60/90 % laufen deine Gegner 1/1/2 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 10/15/20 zusätzliche Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m UK",
      "schaden": "+10 RÜ",
      "effekt": "Zu 30 % laufen deine Gegner 1 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 10 zusätzliche Rüstung."
     },
     {
      "level": 2,
      "reichweite": "7m UK",
      "schaden": "+15 RÜ",
      "effekt": "Zu 60 % laufen deine Gegner 1 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 15 zusätzliche Rüstung."
     },
     {
      "level": 3,
      "reichweite": "10m UK",
      "schaden": "+20 RÜ",
      "effekt": "Zu 90 % laufen deine Gegner 2 Runden auf dich zu und versuchen dich anzugreifen. Für diese Zeit erhältst du 20 zusätzliche Rüstung."
     }
    ]
   },
   {
    "name": "Körper aus Titan",
    "ast": "Steintroll",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht deine Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": ".",
      "schaden": "+10 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 2,
      "reichweite": ".",
      "schaden": "+15 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 3,
      "reichweite": ".",
      "schaden": "+20 RÜ",
      "effekt": "Erhöht deine Rüstung."
     }
    ]
   },
   {
    "name": "Spalter",
    "ast": "Steintroll",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "1/2/3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK 10 RB",
      "schadenArt": "physisch",
      "effekt": "1 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK 15 RB",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK 20 RB",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Spot",
    "ast": "Steintroll",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Ein Gegner in Reichweite greift 2/2/3 Runden nur dich an. Gegen ihn hast du 10/15/20 Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2 Runden Aggro +10RÜ",
      "effekt": "Ein Gegner in Reichweite greift 2 Runden nur dich an. Gegen ihn hast du 10 Rüstung."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "2 Runden Aggro +15RÜ",
      "effekt": "Ein Gegner in Reichweite greift 2 Runden nur dich an. Gegen ihn hast du 15 Rüstung."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "3 Runden Aggro +20RÜ",
      "effekt": "Ein Gegner in Reichweite greift 3 Runden nur dich an. Gegen ihn hast du 20 Rüstung."
     }
    ]
   },
   {
    "name": "Kometeneinschlag",
    "ast": "Steintroll",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Stärkerer Nahkampfschaden mit Durchschlag.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1w10 0 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     },
     {
      "level": 2,
      "schaden": "+2w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     },
     {
      "level": 3,
      "schaden": "+3w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     }
    ]
   },
   {
    "name": "Schneise",
    "ast": "Steintroll",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK +4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK +5w10 15 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK +6w10 20 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     }
    ]
   },
   {
    "name": "Stampfer",
    "ast": "Steintroll",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Alle angrenzenden Gegner werden 1w4 weggestoßen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "5w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Alle angrenzenden Gegner werden 1w4 weggestoßen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "6w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Alle angrenzenden Gegner werden 1w4 weggestoßen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "7w10 15 RB",
      "schadenArt": "physisch",
      "effekt": "Alle angrenzenden Gegner werden 1w4 weggestoßen."
     }
    ]
   },
   {
    "name": "Fäuste wie Kutschen",
    "ast": "Steintroll",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Faustangriffe machen auf 2 Feldern 50%/75%/100% Schaden.",
    "stufen": [
     {
      "level": 1,
      "schaden": "Faustkampf 2 Felder",
      "effekt": "Faustangriffe machen auf 2 Feldern 50%/75%/100% Schaden."
     },
     {
      "level": 2,
      "schaden": "Faustkampf 2 Felder",
      "effekt": "Faustangriffe machen auf 2 Feldern 50%/75%/100% Schaden."
     },
     {
      "level": 3,
      "schaden": "Faustkampf 2 Felder",
      "effekt": "Faustangriffe machen auf 2 Feldern 50%/75%/100% Schaden."
     }
    ]
   },
   {
    "name": "Zermalmen",
    "ast": "Steintroll",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Ignoriert jegliche Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +5w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +6w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +7w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     }
    ]
   },
   {
    "name": "Donnerwelle",
    "ast": "Sturmrufer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Bei Verwundung verliert das Ziel für 3 Runden, zu 15/20/25%, einen Teil seiner Bewegung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2w10 -1m",
      "schadenArt": "magisch",
      "effekt": "Bei Verwundung verliert das Ziel für 3 Runden, zu 15%, einen Teil seiner Bewegung."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "3w10 -2m",
      "schadenArt": "magisch",
      "effekt": "Bei Verwundung verliert das Ziel für 3 Runden, zu 20%, einen Teil seiner Bewegung."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "4w10 -3m",
      "schadenArt": "magisch",
      "effekt": "Bei Verwundung verliert das Ziel für 3 Runden, zu 25%, einen Teil seiner Bewegung."
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Sturmrufer",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Magischer Schild",
    "ast": "Sturmrufer",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Für 1/2/3 Runden 3/5/10 Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+3 RÜ",
      "effekt": "Für 1 Runden 3 Rüstung."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+5 RÜ",
      "effekt": "Für 2 Runden 5 Rüstung."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Für 3 Runden 10 Rüstung."
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Sturmrufer",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Stromstoß",
    "ast": "Sturmrufer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Pro Rüstungsklasse des Gegners +1w10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse des Gegners +1w10"
     },
     {
      "level": 2,
      "reichweite": "2m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse des Gegners +1w10"
     },
     {
      "level": 3,
      "reichweite": "2m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse des Gegners +1w10"
     }
    ]
   },
   {
    "name": "Hochspannung",
    "ast": "Sturmrufer",
    "art": "passiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Pro Rüstungsklasse machen deine Angriffe mehr Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK +1w8 pro RÜ",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse machen deine Angriffe mehr Schaden."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK +2w8 pro RÜ",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse machen deine Angriffe mehr Schaden."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK +3w8 pro RÜ",
      "schadenArt": "magisch",
      "effekt": "Pro Rüstungsklasse machen deine Angriffe mehr Schaden."
     }
    ]
   },
   {
    "name": "Kettenblitz",
    "ast": "Sturmrufer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "2/3/4 Gegner jeweils in 3m Umkreis.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "2 Gegner jeweils in 3m Umkreis."
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "3 Gegner jeweils in 3m Umkreis."
     },
     {
      "level": 3,
      "reichweite": "3m",
      "schaden": "5w10",
      "schadenArt": "magisch",
      "effekt": "4 Gegner jeweils in 3m Umkreis."
     }
    ]
   },
   {
    "name": "Ruckzuckhieb",
    "ast": "Sturmrufer",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "3w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "4w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "5w10",
      "schadenArt": "physisch",
      "effekt": "Du springst zum Gegner, fügst Schaden zu und kannst dann zurückspringen."
     }
    ]
   },
   {
    "name": "Sternenfaust",
    "ast": "Sturmrufer",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Nahkampfangriffe stunnen Gegner zu 10/15/20 %. Du machst -2/1/0w10 weniger Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "10 % Stun",
      "schadenArt": "physisch",
      "effekt": "Nahkampfangriffe stunnen Gegner zu 10 %. Du machst -2w10 weniger Schaden."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "15 % Stun",
      "schadenArt": "physisch",
      "effekt": "Nahkampfangriffe stunnen Gegner zu 15 %. Du machst -1w10 weniger Schaden."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "20 % Stun",
      "schadenArt": "physisch",
      "effekt": "Nahkampfangriffe stunnen Gegner zu 20 %. Du machst -0w10 weniger Schaden."
     }
    ]
   },
   {
    "name": "Blitzangriff",
    "ast": "Sturmrufer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "3/4/5 Gegner im Laufweg werden getroffen. Jeder erleide Schaden, und wird zu 20/30/40% gestunnt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "5w10 +1ST",
      "schadenArt": "magisch",
      "effekt": "3 Gegner im Laufweg werden getroffen. Jeder erleide Schaden, und wird zu 20% gestunnt."
     },
     {
      "level": 2,
      "reichweite": "6m",
      "schaden": "6w10 +1ST",
      "schadenArt": "magisch",
      "effekt": "4 Gegner im Laufweg werden getroffen. Jeder erleide Schaden, und wird zu 30% gestunnt."
     },
     {
      "level": 3,
      "reichweite": "9m",
      "schaden": "7w10 +1ST",
      "schadenArt": "magisch",
      "effekt": "5 Gegner im Laufweg werden getroffen. Jeder erleide Schaden, und wird zu 40% gestunnt."
     }
    ]
   },
   {
    "name": "Donnerknall",
    "ast": "Sturmrufer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle im Umkreis bekommen Schaden und sind zu 20/40/60% gestunnt.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "5w10 +1Stun",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis bekommen Schaden und sind zu 20% gestunnt."
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "6w10 +1Stun",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis bekommen Schaden und sind zu 40% gestunnt."
     },
     {
      "level": 3,
      "reichweite": "4m",
      "schaden": "7w10 +1Stun",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis bekommen Schaden und sind zu 60% gestunnt."
     }
    ]
   },
   {
    "name": "Zorn der Wolken",
    "ast": "Sturmrufer",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Blitz springt auf 1/2/3 Ziele im Umkreis von jeweils 1/2/3 m über.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "5w10 20% Stun",
      "schadenArt": "magisch",
      "effekt": "Blitz springt auf 1 Ziele im Umkreis von jeweils 1 m über."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "6w10 40% Stun",
      "schadenArt": "magisch",
      "effekt": "Blitz springt auf 2 Ziele im Umkreis von jeweils 2 m über."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "7w10 60% Stun",
      "schadenArt": "magisch",
      "effekt": "Blitz springt auf 3 Ziele im Umkreis von jeweils 3 m über."
     }
    ]
   },
   {
    "name": "Kettenblitz der Heilung",
    "ast": "Sturmrufer",
    "art": "aktiv",
    "schadenTyp": "heilung",
    "rang": 4,
    "info": "Kettenheilung für 3/4/5 Ziele in jeweils 2/3/4 m Abstand. Kein Pingpong-Effekt also Hin und Her",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "HL 6w10",
      "schadenArt": "heilung",
      "effekt": "Kettenheilung für 3 Ziele in jeweils 2 m Abstand. Kein Pingpong-Effekt also Hin und Her"
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "HL 7w10",
      "schadenArt": "heilung",
      "effekt": "Kettenheilung für 4 Ziele in jeweils 3 m Abstand. Kein Pingpong-Effekt also Hin und Her"
     },
     {
      "level": 3,
      "reichweite": "4m",
      "schaden": "HL 8w10",
      "schadenArt": "heilung",
      "effekt": "Kettenheilung für 5 Ziele in jeweils 4 m Abstand. Kein Pingpong-Effekt also Hin und Her"
     }
    ]
   },
   {
    "name": "Sturmfokus",
    "ast": "Sturmrufer",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Für 2/3/4 Runden machst du zusätzlichen Blitzschaden. +1/2/3w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+2w10",
      "schadenArt": "magisch",
      "effekt": "Für 2 Runden machst du zusätzlichen Blitzschaden. +1w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+3w10",
      "schadenArt": "magisch",
      "effekt": "Für 3 Runden machst du zusätzlichen Blitzschaden. +2w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+4w10",
      "schadenArt": "magisch",
      "effekt": "Für 4 Runden machst du zusätzlichen Blitzschaden. +3w8 Pro Rüstungsklasse Ist das Ziel gestunnt machst du +2w10 Schaden"
     }
    ]
   },
   {
    "name": "Backpfeifengewitter",
    "ast": "Tiermensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Trifft 2/2/3 Ziele in einer Reihe",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK + 2w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK + 3w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK + 4w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 3 Ziele in einer Reihe"
     }
    ]
   },
   {
    "name": "Feuerfaust",
    "ast": "Tiermensch",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1/2/3w10 Schaden und +1FM",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 1w10 Schaden und +1FM"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 2w10 Schaden und +1FM"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "Ziele neben (Links und Rechts) und hinter deinem Ziel erhalten 3w10 Schaden und +1FM"
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Tiermensch",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Pure Muskeln +",
    "ast": "Tiermensch",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +15/30/50 Stärke",
    "stufen": [
     {
      "level": 1,
      "schaden": "+15 Stärke",
      "effekt": "In Monsterform: +15 Stärke"
     },
     {
      "level": 2,
      "schaden": "+30 Stärke",
      "effekt": "In Monsterform: +30 Stärke"
     },
     {
      "level": 3,
      "schaden": "+50 Stärke",
      "effekt": "In Monsterform: +50 Stärke"
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Tiermensch",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Doppelte Klingen/ Der Weg der zwei Fäuste",
    "ast": "Tiermensch",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -10/5/0 NK) (keine Fähigkeiten)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2-mal pro Kampf extra Standart-Angriff",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -10 NK) (keine Fähigkeiten)"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3-mal pro Kampf extra Standart-Angriff",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -5 NK) (keine Fähigkeiten)"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4-mal pro Kampf extra Standart-Angriff",
      "schadenArt": "physisch",
      "effekt": "Greife während deiner Aktion A auch mit deiner Off-Hand Klinge an. ( -0 NK) (keine Fähigkeiten)"
     }
    ]
   },
   {
    "name": "Dunkle Rüstung",
    "ast": "Tiermensch",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Du hast 1/2/3 Runden lang eine Rüstung. Du bist um Heimlichkeit +5/10/10",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Du hast 1 Runden lang eine Rüstung. Du bist um Heimlichkeit +5"
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+15 RÜ",
      "effekt": "Du hast 2 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+20 RÜ",
      "effekt": "Du hast 3 Runden lang eine Rüstung. Du bist um Heimlichkeit +10"
     }
    ]
   },
   {
    "name": "Eiserner Wille",
    "ast": "Tiermensch",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Für 1/2/3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 Widerstand",
      "effekt": "Für 1 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+20 Widerstand",
      "effekt": "Für 2 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+30 Widerstand",
      "effekt": "Für 3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     }
    ]
   },
   {
    "name": "Spalter",
    "ast": "Tiermensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "1/2/3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK 10 RB",
      "schadenArt": "physisch",
      "effekt": "1 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK 15 RB",
      "schadenArt": "physisch",
      "effekt": "2 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK 20 RB",
      "schadenArt": "physisch",
      "effekt": "3 Gegner in einer Linie (max. 5 m) erhalten Nahkampfschaden. Der Angriff ist rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Klingen- /Klauensturm",
    "ast": "Tiermensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Trifft alle angrenzenden 1/1/2 Felder.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+2 10 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+3 15 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+4 20 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 2 Felder."
     }
    ]
   },
   {
    "name": "Schneise",
    "ast": "Tiermensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK bis 5m",
      "schaden": "NK +4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     },
     {
      "level": 2,
      "reichweite": "NK bis 5m",
      "schaden": "NK +5w10 15 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     },
     {
      "level": 3,
      "reichweite": "NK bis 5m",
      "schaden": "NK +6w10 20 RB",
      "schadenArt": "physisch",
      "effekt": "Du musst eine ganze Runde den Skill aufladen. Dann triffst du alle in einer 5m langen Linie vor dir."
     }
    ]
   },
   {
    "name": "Stampfer",
    "ast": "Tiermensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Alle angrenzenden Gegner werden 1w4 weggestoßen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "5w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Alle angrenzenden Gegner werden 1w4 weggestoßen."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "6w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Alle angrenzenden Gegner werden 1w4 weggestoßen."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "7w10 15 RB",
      "schadenArt": "physisch",
      "effekt": "Alle angrenzenden Gegner werden 1w4 weggestoßen."
     }
    ]
   },
   {
    "name": "Fäuste wie Kutschen",
    "ast": "Tiermensch",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Faustangriffe machen auf 2 Feldern 50%/75%/100% Schaden.",
    "stufen": [
     {
      "level": 1,
      "schaden": "Faustkampf 2 Felder",
      "effekt": "Faustangriffe machen auf 2 Feldern 50%/75%/100% Schaden."
     },
     {
      "level": 2,
      "schaden": "Faustkampf 2 Felder",
      "effekt": "Faustangriffe machen auf 2 Feldern 50%/75%/100% Schaden."
     },
     {
      "level": 3,
      "schaden": "Faustkampf 2 Felder",
      "effekt": "Faustangriffe machen auf 2 Feldern 50%/75%/100% Schaden."
     }
    ]
   },
   {
    "name": "Zermalmen",
    "ast": "Tiermensch",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Ignoriert jegliche Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +5w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +6w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +7w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     }
    ]
   },
   {
    "name": "Arkaner Funke",
    "ast": "Traumaturge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "2/3/4× pro Kampf kannst du einen Arkanen Funken zaubern. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2w10",
      "schadenArt": "magisch",
      "effekt": "2× pro Kampf kannst du einen Arkanen Funken zaubern. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "3× pro Kampf kannst du einen Arkanen Funken zaubern. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "4× pro Kampf kannst du einen Arkanen Funken zaubern. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Flamme",
    "ast": "Traumaturge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "1/2/3-mal pro Kampf kannst du eine kleine Flamme auf deine Gegner werfen. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "2w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "1-mal pro Kampf kannst du eine kleine Flamme auf deine Gegner werfen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "3w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "2-mal pro Kampf kannst du eine kleine Flamme auf deine Gegner werfen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "4w10 +1 FM",
      "schadenArt": "magisch",
      "effekt": "3-mal pro Kampf kannst du eine kleine Flamme auf deine Gegner werfen. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Flinke Füße",
    "ast": "Traumaturge",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Deine Bewegung erhöht sich permanent.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 2,
      "schaden": "+2 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     },
     {
      "level": 3,
      "schaden": "+3 m BW",
      "effekt": "Deine Bewegung erhöht sich permanent."
     }
    ]
   },
   {
    "name": "Magischer Schild",
    "ast": "Traumaturge",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Für 1/2/3 Runden 3/5/10 Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+3 RÜ",
      "effekt": "Für 1 Runden 3 Rüstung."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+5 RÜ",
      "effekt": "Für 2 Runden 5 Rüstung."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+10 RÜ",
      "effekt": "Für 3 Runden 10 Rüstung."
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Traumaturge",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Arkanes Schwert",
    "ast": "Traumaturge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "1/2/3× pro Kampf kannst du einen Arkanes Schwert zaubern, das bis zu 2 Gegner in einer 3/4/5m langen, geraden Linie trifft. Nach Anwendung des Skills 2/2/1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Arkanes Schwert zaubern, das bis zu 2 Gegner in einer 3m langen, geraden Linie trifft. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "2× pro Kampf kannst du einen Arkanes Schwert zaubern, das bis zu 2 Gegner in einer 4m langen, geraden Linie trifft. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "5w10",
      "schadenArt": "magisch",
      "effekt": "3× pro Kampf kannst du einen Arkanes Schwert zaubern, das bis zu 2 Gegner in einer 5m langen, geraden Linie trifft. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Eisfeld",
    "ast": "Traumaturge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2w10 -50% BW",
      "schadenArt": "magisch",
      "effekt": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "3w10 -50% BW",
      "schadenArt": "magisch",
      "effekt": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "4w10 -50% BW",
      "schadenArt": "magisch",
      "effekt": "2x2/2x2/3x3m Fläche. Gegner, die dort ihre Runde starten, haben halbierte Bewegung und erhalten Schaden."
     }
    ]
   },
   {
    "name": "Kettenblitz",
    "ast": "Traumaturge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "2/3/4 Gegner jeweils in 3m Umkreis.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "3w10",
      "schadenArt": "magisch",
      "effekt": "2 Gegner jeweils in 3m Umkreis."
     },
     {
      "level": 2,
      "reichweite": "3m",
      "schaden": "4w10",
      "schadenArt": "magisch",
      "effekt": "3 Gegner jeweils in 3m Umkreis."
     },
     {
      "level": 3,
      "reichweite": "3m",
      "schaden": "5w10",
      "schadenArt": "magisch",
      "effekt": "4 Gegner jeweils in 3m Umkreis."
     }
    ]
   },
   {
    "name": "Wurzelwucher",
    "ast": "Traumaturge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Ziel muss SW - 5/10/15 bestehen, um sich zu befreien.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "GS 1 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 5 bestehen, um sich zu befreien."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "GS 2 1 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 10 bestehen, um sich zu befreien."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "GS 3 2 BL",
      "schadenArt": "magisch",
      "effekt": "Ziel muss SW - 15 bestehen, um sich zu befreien."
     }
    ]
   },
   {
    "name": "Arkane Geschosse",
    "ast": "Traumaturge",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/1/2× pro Kampf kannst du Arkane Geschosse zaubern und alle Kugeln auf ein Ziel in Reichweite schießen, oder die Kugeln bis zu 3/4/5 Runden hinter dir schweben lassen und pro Aktion A/B/Extra 1/2/3 Kugeln abfeuern. Nach Anwendung des Skills 2 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "3w10 x 3",
      "effekt": "1× pro Kampf kannst du Arkane Geschosse zaubern und alle Kugeln auf ein Ziel in Reichweite schießen, oder die Kugeln bis zu 3 Runden hinter dir schweben lassen und pro Aktion A/B/Extra 1 Kugeln abfeuern. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "4w10 x 4",
      "effekt": "1× pro Kampf kannst du Arkane Geschosse zaubern und alle Kugeln auf ein Ziel in Reichweite schießen, oder die Kugeln bis zu 4 Runden hinter dir schweben lassen und pro Aktion A/B/Extra 2 Kugeln abfeuern. Nach Anwendung des Skills 2 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "5w10 x 5",
      "effekt": "2× pro Kampf kannst du Arkane Geschosse zaubern und alle Kugeln auf ein Ziel in Reichweite schießen, oder die Kugeln bis zu 5 Runden hinter dir schweben lassen und pro Aktion A/B/Extra 3 Kugeln abfeuern. Nach Anwendung des Skills 2 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Speicher",
    "ast": "Traumaturge",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Du kannst eine gewirkte Fähigkeit in Reichweiten speichern und benutzen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10 m",
      "schaden": "1 Fähigkeiten stehlen",
      "effekt": "Du kannst eine gewirkte Fähigkeit in Reichweiten speichern und benutzen."
     },
     {
      "level": 2,
      "reichweite": "15 m",
      "schaden": "2 Fähigkeiten stehlen",
      "effekt": "Du kannst eine gewirkte Fähigkeit in Reichweiten speichern und benutzen."
     },
     {
      "level": 3,
      "reichweite": "20 m",
      "schaden": "3 Fähigkeiten stehlen",
      "effekt": "Du kannst eine gewirkte Fähigkeit in Reichweiten speichern und benutzen."
     }
    ]
   },
   {
    "name": "Teleport",
    "ast": "Traumaturge",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "10 m Teleport – 1- mal pro Kampf",
      "effekt": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "15 m Teleport – 2- mal pro Kampf",
      "effekt": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "20 m Teleport – 3- mal pro Kampf",
      "effekt": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich."
     }
    ]
   },
   {
    "name": "Arkaner Sturm",
    "ast": "Traumaturge",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "1× pro Kampf kannst du einen Arkanen Sturm zaubern. Personen im Sturm verlieren für ihre nächsten Runde zu 20/40/60% eine Aktion in ihrer Wahl A oder B",
    "stufen": [
     {
      "level": 1,
      "reichweite": "6m",
      "schaden": "5w10 2x2/3x3/3x3m",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Arkanen Sturm zaubern. Personen im Sturm verlieren für ihre nächsten Runde zu 20% eine Aktion in ihrer Wahl A oder B"
     },
     {
      "level": 2,
      "reichweite": "9m",
      "schaden": "6w10 2x2/3x3/3x3m",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Arkanen Sturm zaubern. Personen im Sturm verlieren für ihre nächsten Runde zu 40% eine Aktion in ihrer Wahl A oder B"
     },
     {
      "level": 3,
      "reichweite": "12m",
      "schaden": "7w10 2x2/3x3/3x3m",
      "schadenArt": "magisch",
      "effekt": "1× pro Kampf kannst du einen Arkanen Sturm zaubern. Personen im Sturm verlieren für ihre nächsten Runde zu 60% eine Aktion in ihrer Wahl A oder B"
     }
    ]
   },
   {
    "name": "Seelenpakt",
    "ast": "Traumaturge",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 1/2/3 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 1 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     },
     {
      "level": 2,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 2 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     },
     {
      "level": 3,
      "reichweite": "Se",
      "schaden": "50 % LP verlieren, doppelter Effekt",
      "effekt": "Du verlierst sofort 50 % deiner Lebenspunkte. Deine Fähigkeiten machen 3 Runden doppelt so viel Schaden, Heilung, Blutung, Gift und Feuermarker."
     }
    ]
   },
   {
    "name": "Knochengriff",
    "ast": "Vampir",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "Ein Ziel erhält für 1/2/3 Runden -2/3/4 Bewegung und -10 auf Handeln.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "10m",
      "schaden": "-2m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 1 Runden -2 Bewegung und -10 auf Handeln."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "-3m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 2 Runden -3 Bewegung und -10 auf Handeln."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "-4m BW -10 Handeln",
      "effekt": "Ein Ziel erhält für 3 Runden -4 Bewegung und -10 auf Handeln."
     }
    ]
   },
   {
    "name": "Monster Lord",
    "ast": "Vampir",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +50/75/100 LP zusätzlich",
    "stufen": [
     {
      "level": 1,
      "schaden": "LP +50",
      "effekt": "In Monsterform: +50 LP zusätzlich"
     },
     {
      "level": 2,
      "schaden": "LP +75",
      "effekt": "In Monsterform: +75 LP zusätzlich"
     },
     {
      "level": 3,
      "schaden": "LP +100",
      "effekt": "In Monsterform: +100 LP zusätzlich"
     }
    ]
   },
   {
    "name": "Pure Muskeln",
    "ast": "Vampir",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +10/20/30 Stärke",
    "stufen": [
     {
      "level": 1,
      "schaden": "+10 Stärke",
      "effekt": "In Monsterform: +10 Stärke"
     },
     {
      "level": 2,
      "schaden": "+20 Stärke",
      "effekt": "In Monsterform: +20 Stärke"
     },
     {
      "level": 3,
      "schaden": "+30 Stärke",
      "effekt": "In Monsterform: +30 Stärke"
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Vampir",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Seelenhunger",
    "ast": "Vampir",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Wenn du keine vollen LP hast: −2w8/6/4 LP am Ende deiner Runde.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "10 % Lebensraub",
      "schadenArt": "physisch",
      "effekt": "Wenn du keine vollen LP hast: −2w8/6/4 LP am Ende deiner Runde."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "20 % Lebensraub",
      "schadenArt": "physisch",
      "effekt": "Wenn du keine vollen LP hast: −2w8/6/4 LP am Ende deiner Runde."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "30 % Lebensraub",
      "schadenArt": "physisch",
      "effekt": "Wenn du keine vollen LP hast: −2w8/6/4 LP am Ende deiner Runde."
     }
    ]
   },
   {
    "name": "Blutdurst",
    "ast": "Vampir",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "+1/2/3w4 pro Blutmarker die das Ziel hat.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK +1w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+1w4 pro Blutmarker die das Ziel hat."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK +2w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+2w4 pro Blutmarker die das Ziel hat."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK +3w4 pro BL",
      "schadenArt": "physisch",
      "effekt": "+3w4 pro Blutmarker die das Ziel hat."
     }
    ]
   },
   {
    "name": "Gieriger Biss",
    "ast": "Vampir",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 0 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     }
    ]
   },
   {
    "name": "Guhl Diener",
    "ast": "Vampir",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "LP 30/60/90 Nahkampf 30/40/50 2/3/4w10 Schaden Gift Stufe 2/3/4.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "1 Ghule Für 2 Runden",
      "schadenArt": "magisch",
      "effekt": "LP 30 Nahkampf 30 2w10 Schaden Gift Stufe 2."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "1 Ghule Für 2 Runden",
      "schadenArt": "magisch",
      "effekt": "LP 60 Nahkampf 40 3w10 Schaden Gift Stufe 3."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "2 Ghule Für 3 Runden",
      "schadenArt": "magisch",
      "effekt": "LP 90 Nahkampf 50 4w10 Schaden Gift Stufe 4."
     }
    ]
   },
   {
    "name": "Seuchenstoß",
    "ast": "Vampir",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK+ 3w10 +GS 2",
      "schadenArt": "magisch",
      "effekt": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK+ 4w10 +GS 3",
      "schadenArt": "magisch",
      "effekt": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK+ 5w10 +GS 4",
      "schadenArt": "magisch",
      "effekt": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe."
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Vampir",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Nur eine Fleischwunde",
    "ast": "Vampir",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Fügt dem Ziel Blutungen zu.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK 4 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt dem Ziel Blutungen zu."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK 5 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt dem Ziel Blutungen zu."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK 6 BL",
      "schadenArt": "physisch",
      "effekt": "Fügt dem Ziel Blutungen zu."
     }
    ]
   },
   {
    "name": "Teleport",
    "ast": "Vampir",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "10 m Teleport – 1- mal pro Kampf",
      "effekt": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "15 m Teleport – 2- mal pro Kampf",
      "effekt": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "20 m Teleport – 3- mal pro Kampf",
      "effekt": "Teleportiere dich. Auch Hin & Zurück mit 2 Aufladungen möglich."
     }
    ]
   },
   {
    "name": "Gedankenkontrolle",
    "ast": "Vampir",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "WW -5/10/15 Sonst wird das Ziel von dir kontrolliert.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "1 Gegner Für 2 Runden",
      "effekt": "WW -5 Sonst wird das Ziel von dir kontrolliert."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "1 Gegner Für 2 Runden",
      "effekt": "WW -10 Sonst wird das Ziel von dir kontrolliert."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "2 Gegner Für 2 Runden",
      "effekt": "WW -15 Sonst wird das Ziel von dir kontrolliert."
     }
    ]
   },
   {
    "name": "Zweite Dimension",
    "ast": "Vampir",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Du erhältst Rüstung.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+10 RÜ",
      "effekt": "Du erhältst Rüstung."
     },
     {
      "level": 2,
      "schaden": "+15 RÜ",
      "effekt": "Du erhältst Rüstung."
     },
     {
      "level": 3,
      "schaden": "+20 RÜ",
      "effekt": "Du erhältst Rüstung."
     }
    ]
   },
   {
    "name": "Biss",
    "ast": "Werwolf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du beißt ein angrenzendes Ziel",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Stärke +2w10 0 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Stärke +3w10 5 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Stärke +4w10 10 RB *2 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     }
    ]
   },
   {
    "name": "Blutiger Zorn",
    "ast": "Werwolf",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2/1/1 Blutungen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2 Blutungen."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     }
    ]
   },
   {
    "name": "Pure Muskeln",
    "ast": "Werwolf",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +10/20/30 Stärke",
    "stufen": [
     {
      "level": 1,
      "schaden": "+10 Stärke",
      "effekt": "In Monsterform: +10 Stärke"
     },
     {
      "level": 2,
      "schaden": "+20 Stärke",
      "effekt": "In Monsterform: +20 Stärke"
     },
     {
      "level": 3,
      "schaden": "+30 Stärke",
      "effekt": "In Monsterform: +30 Stärke"
     }
    ]
   },
   {
    "name": "Schlitzer",
    "ast": "Werwolf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Fügt einem Gegner NK-Schaden und Blutungen zu",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+ 1 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+ 2 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+ 3 Blutungen",
      "schadenArt": "physisch",
      "effekt": "Fügt einem Gegner NK-Schaden und Blutungen zu"
     }
    ]
   },
   {
    "name": "Seelenhunger",
    "ast": "Werwolf",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Wenn du keine vollen LP hast: −2w8/6/4 LP am Ende deiner Runde.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "10 % Lebensraub",
      "schadenArt": "physisch",
      "effekt": "Wenn du keine vollen LP hast: −2w8/6/4 LP am Ende deiner Runde."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "20 % Lebensraub",
      "schadenArt": "physisch",
      "effekt": "Wenn du keine vollen LP hast: −2w8/6/4 LP am Ende deiner Runde."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "30 % Lebensraub",
      "schadenArt": "physisch",
      "effekt": "Wenn du keine vollen LP hast: −2w8/6/4 LP am Ende deiner Runde."
     }
    ]
   },
   {
    "name": "Bluthund",
    "ast": "Werwolf",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Nur verletzte Ziele wählbar. Für 1/2/3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "+5 Angriff, +2w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 1 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "+10 Angriff, +3w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 2 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "+15 Angriff, +4w10",
      "schadenArt": "physisch",
      "effekt": "Nur verletzte Ziele wählbar. Für 3 Runden visierst du ein Ziel an. -20 Angriff auf andere Ziele. Falls das Ziel Blutung hat, zusätzlicher 1w10 Schaden."
     }
    ]
   },
   {
    "name": "Gieriger Biss",
    "ast": "Werwolf",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 0 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     }
    ]
   },
   {
    "name": "Körper aus Stahl",
    "ast": "Werwolf",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht deine Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": ".",
      "schaden": "+5 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 2,
      "reichweite": ".",
      "schaden": "+10 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 3,
      "reichweite": ".",
      "schaden": "+15 RÜ",
      "effekt": "Erhöht deine Rüstung."
     }
    ]
   },
   {
    "name": "Sprungangriff",
    "ast": "Werwolf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Springe auf dein Ziel und verursache in 1/2/2 m Umkreis. Angrenzende Ziele erhalten halben Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "3w10 1 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 1 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "4w10 2 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 2 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "5w10 2 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 2 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     }
    ]
   },
   {
    "name": "Klingen- /Klauensturm",
    "ast": "Werwolf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Trifft alle angrenzenden 1/1/2 Felder.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+2 10 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+3 15 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 1 Felder."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+4 20 RB",
      "schadenArt": "physisch",
      "effekt": "Trifft alle angrenzenden 2 Felder."
     }
    ]
   },
   {
    "name": "Risikoschlag",
    "ast": "Werwolf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2/2/1 Runden nicht blocken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+5w10 +1 BL +5% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2 Runden nicht blocken."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+6w10 +2 BL +10% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2 Runden nicht blocken."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+7w10 +3 BL +15% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 1 Runden nicht blocken."
     }
    ]
   },
   {
    "name": "Schädelklirren",
    "ast": "Werwolf",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Gegner im Umkreis von 2/3/4m müssen einen Willenskraftwurf -5/10/15 bestehen, sonst haben sie in ihrer nächsten Runde keine extra Aktion und eine Aktion (A oder B) weniger.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "-1 Aktionen",
      "effekt": "Gegner im Umkreis von 2m müssen einen Willenskraftwurf -5 bestehen, sonst haben sie in ihrer nächsten Runde keine extra Aktion und eine Aktion (A oder B) weniger."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "-1 Aktionen",
      "effekt": "Gegner im Umkreis von 3m müssen einen Willenskraftwurf -10 bestehen, sonst haben sie in ihrer nächsten Runde keine extra Aktion und eine Aktion (A oder B) weniger."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "-1 Aktionen",
      "effekt": "Gegner im Umkreis von 4m müssen einen Willenskraftwurf -15 bestehen, sonst haben sie in ihrer nächsten Runde keine extra Aktion und eine Aktion (A oder B) weniger."
     }
    ]
   },
   {
    "name": "Hinrichtung",
    "ast": "Werwolf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "7w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "8w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "9w10",
      "schadenArt": "physisch",
      "effekt": "Nur auf verletzte Ziele. Stirbt das Ziel, war die Hinrichtung keine Aktion."
     }
    ]
   },
   {
    "name": "Raserei",
    "ast": "Werwolf",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Bis zu 4 Angriffe 5 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Bis zu 5 Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Bis zu 6 Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     }
    ]
   },
   {
    "name": "Backpfeifengewitter",
    "ast": "Wertitan",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Trifft 2/2/3 Ziele in einer Reihe",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK + 2w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK + 3w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 2 Ziele in einer Reihe"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK + 4w10",
      "schadenArt": "physisch",
      "effekt": "Trifft 3 Ziele in einer Reihe"
     }
    ]
   },
   {
    "name": "Doppelhieb",
    "ast": "Wertitan",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du kannst 1/2/3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "1 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 1-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "2 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 2-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "3 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Monster",
    "ast": "Wertitan",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +25/50/75 LP zusätzlich",
    "stufen": [
     {
      "level": 1,
      "schaden": "LP +25",
      "effekt": "In Monsterform: +25 LP zusätzlich"
     },
     {
      "level": 2,
      "schaden": "LP +50",
      "effekt": "In Monsterform: +50 LP zusätzlich"
     },
     {
      "level": 3,
      "schaden": "LP +75",
      "effekt": "In Monsterform: +75 LP zusätzlich"
     }
    ]
   },
   {
    "name": "Pure Muskeln +",
    "ast": "Wertitan",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +15/30/50 Stärke",
    "stufen": [
     {
      "level": 1,
      "schaden": "+15 Stärke",
      "effekt": "In Monsterform: +15 Stärke"
     },
     {
      "level": 2,
      "schaden": "+30 Stärke",
      "effekt": "In Monsterform: +30 Stärke"
     },
     {
      "level": 3,
      "schaden": "+50 Stärke",
      "effekt": "In Monsterform: +50 Stärke"
     }
    ]
   },
   {
    "name": "Wilde Wut",
    "ast": "Wertitan",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden, -15/10/5 Nahkampf",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "+2w10 0 RB",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden, -15 Nahkampf"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "+3w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden, -10 Nahkampf"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "+4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden, -5 Nahkampf"
     }
    ]
   },
   {
    "name": "Körper aus Stein",
    "ast": "Wertitan",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht deine Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": ".",
      "schaden": "+3 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 2,
      "reichweite": ".",
      "schaden": "+5 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 3,
      "reichweite": ".",
      "schaden": "+10 RÜ",
      "effekt": "Erhöht deine Rüstung."
     }
    ]
   },
   {
    "name": "Spot",
    "ast": "Wertitan",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Ein Gegner in Reichweite greift 2/2/3 Runden nur dich an. Gegen ihn hast du 10/15/20 Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "2 Runden Aggro +10RÜ",
      "effekt": "Ein Gegner in Reichweite greift 2 Runden nur dich an. Gegen ihn hast du 10 Rüstung."
     },
     {
      "level": 2,
      "reichweite": "7m",
      "schaden": "2 Runden Aggro +15RÜ",
      "effekt": "Ein Gegner in Reichweite greift 2 Runden nur dich an. Gegen ihn hast du 15 Rüstung."
     },
     {
      "level": 3,
      "reichweite": "10m",
      "schaden": "3 Runden Aggro +20RÜ",
      "effekt": "Ein Gegner in Reichweite greift 3 Runden nur dich an. Gegen ihn hast du 20 Rüstung."
     }
    ]
   },
   {
    "name": "Sprungangriff",
    "ast": "Wertitan",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Springe auf dein Ziel und verursache in 1/2/2 m Umkreis. Angrenzende Ziele erhalten halben Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "3m",
      "schaden": "3w10 1 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 1 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     },
     {
      "level": 2,
      "reichweite": "5m",
      "schaden": "4w10 2 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 2 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     },
     {
      "level": 3,
      "reichweite": "7m",
      "schaden": "5w10 2 m Radius",
      "schadenArt": "physisch",
      "effekt": "Springe auf dein Ziel und verursache in 2 m Umkreis. Angrenzende Ziele erhalten halben Schaden."
     }
    ]
   },
   {
    "name": "Uppercut",
    "ast": "Wertitan",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Ziel vor dir erleidet Schaden, wird 1/2/3w4 m zurückgeschleudert. Angriff ist rüstungsbrechend",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Ziel vor dir erleidet Schaden, wird 1w4 m zurückgeschleudert. Angriff ist rüstungsbrechend"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Ziel vor dir erleidet Schaden, wird 2w4 m zurückgeschleudert. Angriff ist rüstungsbrechend"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 15 RB",
      "schadenArt": "physisch",
      "effekt": "Ziel vor dir erleidet Schaden, wird 3w4 m zurückgeschleudert. Angriff ist rüstungsbrechend"
     }
    ]
   },
   {
    "name": "Aufpumpen",
    "ast": "Wertitan",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Für 1/2/3 Runden. Handeln -20/15/10.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "NK+3w10 +0 RÜ 5 RB",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden. Handeln -20."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "NK+4w10 +5 RÜ 10 RB",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden. Handeln -15."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "NK+5w10 +10 RÜ 15 RB",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden. Handeln -10."
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Wertitan",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Panzerbrecher",
    "ast": "Wertitan",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Ziel verliert Rüstung für 1/2/3 Runden (nicht stapelbar).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "-10 Rüstung",
      "effekt": "Ziel verliert Rüstung für 1 Runden (nicht stapelbar)."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "-20 Rüstung",
      "effekt": "Ziel verliert Rüstung für 2 Runden (nicht stapelbar)."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "-30 Rüstung",
      "effekt": "Ziel verliert Rüstung für 3 Runden (nicht stapelbar)."
     }
    ]
   },
   {
    "name": "Fäuste wie Kutschen",
    "ast": "Wertitan",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Faustangriffe machen auf 2 Feldern 50%/75%/100% Schaden.",
    "stufen": [
     {
      "level": 1,
      "schaden": "Faustkampf 2 Felder",
      "effekt": "Faustangriffe machen auf 2 Feldern 50%/75%/100% Schaden."
     },
     {
      "level": 2,
      "schaden": "Faustkampf 2 Felder",
      "effekt": "Faustangriffe machen auf 2 Feldern 50%/75%/100% Schaden."
     },
     {
      "level": 3,
      "schaden": "Faustkampf 2 Felder",
      "effekt": "Faustangriffe machen auf 2 Feldern 50%/75%/100% Schaden."
     }
    ]
   },
   {
    "name": "Zermalmen",
    "ast": "Wertitan",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Ignoriert jegliche Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +5w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +6w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +7w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     }
    ]
   },
   {
    "name": "Biss",
    "ast": "Zombie",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du beißt ein angrenzendes Ziel",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Stärke +2w10 0 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Stärke +3w10 5 RB *1 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Stärke +4w10 10 RB *2 BL",
      "schadenArt": "physisch",
      "effekt": "Du beißt ein angrenzendes Ziel"
     }
    ]
   },
   {
    "name": "Blutiger Zorn",
    "ast": "Zombie",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2/1/1 Blutungen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 2 Blutungen."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+1 Angriff",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden erhältst du eine zusätzliche Attacke in Aktion A, du erhältst sofort 1 Blutungen."
     }
    ]
   },
   {
    "name": "Pure Muskeln",
    "ast": "Zombie",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +10/20/30 Stärke",
    "stufen": [
     {
      "level": 1,
      "schaden": "+10 Stärke",
      "effekt": "In Monsterform: +10 Stärke"
     },
     {
      "level": 2,
      "schaden": "+20 Stärke",
      "effekt": "In Monsterform: +20 Stärke"
     },
     {
      "level": 3,
      "schaden": "+30 Stärke",
      "effekt": "In Monsterform: +30 Stärke"
     }
    ]
   },
   {
    "name": "Regeneration",
    "ast": "Zombie",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 1,
    "info": "Zu Beginn deiner nächsten 2/3/4 Runden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL 2w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 2 Runden."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL 3w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 3 Runden."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL 4w10",
      "schadenArt": "heilung",
      "effekt": "Zu Beginn deiner nächsten 4 Runden."
     }
    ]
   },
   {
    "name": "Seelenhunger",
    "ast": "Zombie",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Wenn du keine vollen LP hast: −2w8/6/4 LP am Ende deiner Runde.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "10 % Lebensraub",
      "schadenArt": "physisch",
      "effekt": "Wenn du keine vollen LP hast: −2w8/6/4 LP am Ende deiner Runde."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "20 % Lebensraub",
      "schadenArt": "physisch",
      "effekt": "Wenn du keine vollen LP hast: −2w8/6/4 LP am Ende deiner Runde."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "30 % Lebensraub",
      "schadenArt": "physisch",
      "effekt": "Wenn du keine vollen LP hast: −2w8/6/4 LP am Ende deiner Runde."
     }
    ]
   },
   {
    "name": "Gieriger Biss",
    "ast": "Zombie",
    "art": "extra",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 0 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 5 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 10 RB",
      "schadenArt": "magisch",
      "effekt": "Nur wenn du unter 50 % LP bist, nutzbar. Du erhältst den Schaden als HL"
     }
    ]
   },
   {
    "name": "Letzte Chance",
    "ast": "Zombie",
    "art": "extra",
    "schadenTyp": "heilung",
    "rang": 2,
    "info": "Wenn deine Lebenspunkte kleiner gleich 10 sind, dann kannst du dich heilen und bekommst Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "HL +3w10 +10 RÜ",
      "schadenArt": "heilung",
      "effekt": "Wenn deine Lebenspunkte kleiner gleich 10 sind, dann kannst du dich heilen und bekommst Rüstung."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "HL +4w10 +10 RÜ",
      "schadenArt": "heilung",
      "effekt": "Wenn deine Lebenspunkte kleiner gleich 10 sind, dann kannst du dich heilen und bekommst Rüstung."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "HL +5w10 +10 RÜ",
      "schadenArt": "heilung",
      "effekt": "Wenn deine Lebenspunkte kleiner gleich 10 sind, dann kannst du dich heilen und bekommst Rüstung."
     }
    ]
   },
   {
    "name": "Naturfluch",
    "ast": "Zombie",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Wenn du Nahkampfschaden bekommst, ist Angreifer zu 20/40/60% vergiftet.",
    "stufen": [
     {
      "level": 1,
      "schaden": "GS 1",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist Angreifer zu 20% vergiftet."
     },
     {
      "level": 2,
      "schaden": "GS 2",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist Angreifer zu 40% vergiftet."
     },
     {
      "level": 3,
      "schaden": "GS 3",
      "effekt": "Wenn du Nahkampfschaden bekommst, ist Angreifer zu 60% vergiftet."
     }
    ]
   },
   {
    "name": "Seuchenstoß",
    "ast": "Zombie",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 2,
    "info": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK FK",
      "schaden": "NK/FK+ 3w10 +GS 2",
      "schadenArt": "magisch",
      "effekt": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe."
     },
     {
      "level": 2,
      "reichweite": "NK FK",
      "schaden": "NK/FK+ 4w10 +GS 3",
      "schadenArt": "magisch",
      "effekt": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe."
     },
     {
      "level": 3,
      "reichweite": "NK FK",
      "schaden": "NK/FK+ 5w10 +GS 4",
      "schadenArt": "magisch",
      "effekt": "Hat das Ziel eine Blutung oder einen Feuermarker, erhöht sich das Gift um +1 Stufe."
     }
    ]
   },
   {
    "name": "Fluch der Schwächung",
    "ast": "Zombie",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "1/2/3 Ziele in Reichweite machen für 1/2/3 Runden 40/50/60 %weniger Standard-Angriffs Schaden.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "-40 % Schaden",
      "effekt": "1 Ziele in Reichweite machen für 1 Runden 40 %weniger Standard-Angriffs Schaden."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "-50 % Schaden",
      "effekt": "2 Ziele in Reichweite machen für 2 Runden 50 %weniger Standard-Angriffs Schaden."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "-60 % Schaden",
      "effekt": "3 Ziele in Reichweite machen für 3 Runden 60 %weniger Standard-Angriffs Schaden."
     }
    ]
   },
   {
    "name": "Risikoschlag",
    "ast": "Zombie",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2/2/1 Runden nicht blocken.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK+5w10 +1 BL +5% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2 Runden nicht blocken."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK+6w10 +2 BL +10% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 2 Runden nicht blocken."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK+7w10 +3 BL +15% KT",
      "schadenArt": "physisch",
      "effekt": "Risikoreicher Schlag, der Blutung verursacht und die kritische Trefferchance erhöht. Anwender kann 1 Runden nicht blocken."
     }
    ]
   },
   {
    "name": "Welle der Korrosion",
    "ast": "Zombie",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 3,
    "info": "Alle im Umkreis",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m UK",
      "schaden": "3w10 GS 3",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis"
     },
     {
      "level": 2,
      "reichweite": "3m UK",
      "schaden": "4w10 GS 4",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis"
     },
     {
      "level": 3,
      "reichweite": "4m UK",
      "schaden": "5w10 GS 5",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis"
     }
    ]
   },
   {
    "name": "Fauler Atem",
    "ast": "Zombie",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 4,
    "info": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "GS 3 +2 FM +1 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 2,
      "reichweite": "2m UK",
      "schaden": "GS 4 +3 FM +2 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     },
     {
      "level": 3,
      "reichweite": "3m UK",
      "schaden": "GS 5 +4 FM +3 BL",
      "schadenArt": "magisch",
      "effekt": "Alle im Umkreis werden vergiftet, brennen und fangen an zu bluten."
     }
    ]
   },
   {
    "name": "Raserei",
    "ast": "Zombie",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "Bis zu 4 Angriffe 5 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "Bis zu 5 Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "Bis zu 6 Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Angriffe bis zum Verfehlen (-5 NK pro Angriff), danach 1w4 Runden tiefer Schlaf Blutet das Ziel +1w10 Schaden"
     }
    ]
   },
   {
    "name": "Befreiender Schlag",
    "ast": "Zwerg",
    "art": "aktiv",
    "schadenTyp": "magisch",
    "rang": 1,
    "info": "Mache Schaden und entferne 1/2/3 Debuffs +1w10 pro entfernten Debuff",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2w10 -1 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 1 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3w10 -2 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 2 Debuffs +1w10 pro entfernten Debuff"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4w10 -3 Debuffs",
      "schadenArt": "magisch",
      "effekt": "Mache Schaden und entferne 3 Debuffs +1w10 pro entfernten Debuff"
     }
    ]
   },
   {
    "name": "Doppelhieb",
    "ast": "Zwerg",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Du kannst 1/2/3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "1 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 1-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "2 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 2-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "3 extra Angriffe pro Kampf",
      "schadenArt": "physisch",
      "effekt": "Du kannst 3-mal pro Kampf einen Nahkampfangriff als Extra-Aktion machen. Nach Anwendung des Skills 1 Runde Cooldown."
     }
    ]
   },
   {
    "name": "Profi-Boxer",
    "ast": "Zwerg",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Deine Faustangriffe machen mehr Schaden.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1w10",
      "schadenArt": "physisch",
      "effekt": "Deine Faustangriffe machen mehr Schaden."
     },
     {
      "level": 2,
      "schaden": "+2w10",
      "schadenArt": "physisch",
      "effekt": "Deine Faustangriffe machen mehr Schaden."
     },
     {
      "level": 3,
      "schaden": "+3w10",
      "schadenArt": "physisch",
      "effekt": "Deine Faustangriffe machen mehr Schaden."
     }
    ]
   },
   {
    "name": "Pure Muskeln +",
    "ast": "Zwerg",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 1,
    "info": "In Monsterform: +15/30/50 Stärke",
    "stufen": [
     {
      "level": 1,
      "schaden": "+15 Stärke",
      "effekt": "In Monsterform: +15 Stärke"
     },
     {
      "level": 2,
      "schaden": "+30 Stärke",
      "effekt": "In Monsterform: +30 Stärke"
     },
     {
      "level": 3,
      "schaden": "+50 Stärke",
      "effekt": "In Monsterform: +50 Stärke"
     }
    ]
   },
   {
    "name": "Wilde Wut",
    "ast": "Zwerg",
    "art": "extra",
    "schadenTyp": "physisch",
    "rang": 1,
    "info": "Für 1/2/3 Runden, -15/10/5 Nahkampf",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "+2w10 0 RB",
      "schadenArt": "physisch",
      "effekt": "Für 1 Runden, -15 Nahkampf"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "+3w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Für 2 Runden, -10 Nahkampf"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "+4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Für 3 Runden, -5 Nahkampf"
     }
    ]
   },
   {
    "name": "Eiserner Wille",
    "ast": "Zwerg",
    "art": "extra",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Für 1/2/3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "SE",
      "schaden": "+10 Widerstand",
      "effekt": "Für 1 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 2,
      "reichweite": "SE",
      "schaden": "+20 Widerstand",
      "effekt": "Für 2 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     },
     {
      "level": 3,
      "reichweite": "SE",
      "schaden": "+30 Widerstand",
      "effekt": "Für 3 Runden Bonus auf Widerstandswürfe gegen Stun und Schlaf."
     }
    ]
   },
   {
    "name": "Körper aus Stahl",
    "ast": "Zwerg",
    "art": "passiv",
    "schadenTyp": "keiner",
    "rang": 2,
    "info": "Erhöht deine Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": ".",
      "schaden": "+5 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 2,
      "reichweite": ".",
      "schaden": "+10 RÜ",
      "effekt": "Erhöht deine Rüstung."
     },
     {
      "level": 3,
      "reichweite": ".",
      "schaden": "+15 RÜ",
      "effekt": "Erhöht deine Rüstung."
     }
    ]
   },
   {
    "name": "Kriegsschrei",
    "ast": "Zwerg",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Alle Verbündeten im Umkreis erhalten für 1/2/3 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)",
    "stufen": [
     {
      "level": 1,
      "reichweite": "1m UK",
      "schaden": "NK+1w10 +5 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 1 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     },
     {
      "level": 2,
      "reichweite": "3m UK",
      "schaden": "NK+1w10 +5 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 2 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     },
     {
      "level": 3,
      "reichweite": "5m UK",
      "schaden": "NK+2w10 +10 RÜ",
      "schadenArt": "physisch",
      "effekt": "Alle Verbündeten im Umkreis erhalten für 3 Runden Rüstung und machen mehr Schaden mit ihren Standard Nahkamp-Angriffen. (nicht Stapelbar)"
     }
    ]
   },
   {
    "name": "Uppercut",
    "ast": "Zwerg",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 2,
    "info": "Ziel vor dir erleidet Schaden, wird 1/2/3w4 m zurückgeschleudert. Angriff ist rüstungsbrechend",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "3w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Ziel vor dir erleidet Schaden, wird 1w4 m zurückgeschleudert. Angriff ist rüstungsbrechend"
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "4w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Ziel vor dir erleidet Schaden, wird 2w4 m zurückgeschleudert. Angriff ist rüstungsbrechend"
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "5w10 15 RB",
      "schadenArt": "physisch",
      "effekt": "Ziel vor dir erleidet Schaden, wird 3w4 m zurückgeschleudert. Angriff ist rüstungsbrechend"
     }
    ]
   },
   {
    "name": "Kometeneinschlag",
    "ast": "Zwerg",
    "art": "passiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Stärkerer Nahkampfschaden mit Durchschlag.",
    "stufen": [
     {
      "level": 1,
      "schaden": "+1w10 0 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     },
     {
      "level": 2,
      "schaden": "+2w10 5 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     },
     {
      "level": 3,
      "schaden": "+3w10 10 RB",
      "schadenArt": "physisch",
      "effekt": "Stärkerer Nahkampfschaden mit Durchschlag."
     }
    ]
   },
   {
    "name": "Mehrfachschlag",
    "ast": "Zwerg",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 3,
    "info": "Nur auf ein Ziel, rüstungsbrechend.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "2 NK- Angriffe 10 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "3 NK- Angriffe 15 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "4 NK- Angriffe 20 RB",
      "schadenArt": "physisch",
      "effekt": "Nur auf ein Ziel, rüstungsbrechend."
     }
    ]
   },
   {
    "name": "Panzerbrecher",
    "ast": "Zwerg",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 3,
    "info": "Ziel verliert Rüstung für 1/2/3 Runden (nicht stapelbar).",
    "stufen": [
     {
      "level": 1,
      "reichweite": "2m",
      "schaden": "-10 Rüstung",
      "effekt": "Ziel verliert Rüstung für 1 Runden (nicht stapelbar)."
     },
     {
      "level": 2,
      "reichweite": "4m",
      "schaden": "-20 Rüstung",
      "effekt": "Ziel verliert Rüstung für 2 Runden (nicht stapelbar)."
     },
     {
      "level": 3,
      "reichweite": "6m",
      "schaden": "-30 Rüstung",
      "effekt": "Ziel verliert Rüstung für 3 Runden (nicht stapelbar)."
     }
    ]
   },
   {
    "name": "Heute stirbt keiner!",
    "ast": "Zwerg",
    "art": "aktiv",
    "schadenTyp": "keiner",
    "rang": 4,
    "info": "Für 1/2/3 Runden kann kein Verbündeter unter 1 LP fallen.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "5m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 1 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 2,
      "reichweite": "10m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 2 Runden kann kein Verbündeter unter 1 LP fallen."
     },
     {
      "level": 3,
      "reichweite": "15m",
      "schaden": "Todesverweiger ung",
      "effekt": "Für 3 Runden kann kein Verbündeter unter 1 LP fallen."
     }
    ]
   },
   {
    "name": "Zermalmen",
    "ast": "Zwerg",
    "art": "aktiv",
    "schadenTyp": "physisch",
    "rang": 4,
    "info": "Ignoriert jegliche Rüstung.",
    "stufen": [
     {
      "level": 1,
      "reichweite": "NK",
      "schaden": "NK +5w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     },
     {
      "level": 2,
      "reichweite": "NK",
      "schaden": "NK +6w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     },
     {
      "level": 3,
      "reichweite": "NK",
      "schaden": "NK +7w10",
      "schadenArt": "physisch",
      "effekt": "Ignoriert jegliche Rüstung."
     }
    ]
   }
  ],
  "eigenschaften": [
   {
    "name": "Adrenalin",
    "rang": 1,
    "wirkungen": [
     "Sobald du im Kampf erstmals unter 50% LP fällst, erhältst du 10 Lebenspunkte Heilung",
     "Sobald du im Kampf erstmals unter 50% LP fällst, erhältst du 20 Lebenspunkte Heilung",
     "Sobald du im Kampf erstmals unter 50% LP fällst, erhältst du 30 Lebenspunkte Heilung"
    ]
   },
   {
    "name": "Fluchtreflex",
    "rang": 1,
    "wirkungen": [
     "10% Chance, Fernkampfangriffen auszuweichen (nur, wenn du dich diese Runde bewegt hast)",
     "20% Chance, Fernkampfangriffen auszuweichen (nur, wenn du dich diese Runde bewegt hast)",
     "30% Chance, Fernkampfangriffen auszuweichen (nur, wenn du dich diese Runde bewegt hast)"
    ]
   },
   {
    "name": "Guter Patient",
    "rang": 1,
    "wirkungen": [
     "Du erhältst für Heilung durch Schlaf und Nahrung je 1 Regenerationswürfel extra",
     "Zusätzlich erhältst du +1W10 LP, wenn du durch eine Fähigkeit geheilt wirst"
    ]
   },
   {
    "name": "Instinktive Parade",
    "rang": 1,
    "wirkungen": [
     "+1 Parade pro Runde",
     "+2 Paraden pro Runde"
    ]
   },
   {
    "name": "Kämpfer",
    "rang": 1,
    "wirkungen": [
     "+1 Initiative",
     "+2 Initiative",
     "+3 Initiative"
    ]
   },
   {
    "name": "Langes Leben",
    "rang": 1,
    "wirkungen": [
     "+25 HP",
     "+50 HP",
     "+75 HP",
     "+100 HP"
    ]
   },
   {
    "name": "Taktiker",
    "rang": 1,
    "wirkungen": [
     "Permanent +1m Bewegung",
     "Zusätzlich +2W10 Schaden in der ersten Kampfrunde",
     "Der zusätzliche Schaden erhöht sich auf +4W10"
    ]
   },
   {
    "name": "Athlet",
    "rang": 2,
    "wirkungen": [
     "Rüstungsmalus wird um 1 Malus deiner Wahl reduziert",
     "Rüstungsmalus wird um 2 Mali deiner Wahl reduziert",
     "Rüstungsmalus wird um 3 Mali deiner Wahl reduziert"
    ]
   },
   {
    "name": "Berserker",
    "rang": 2,
    "wirkungen": [
     "Solange du unter 75% LP bist, verursachst du +1W4 Schaden. Unter 50% LP erhöht sich der Bonus auf +2W4, unter 25% LP auf +3W4",
     "Solange du unter 75% LP bist, verursachst du +1W6 Schaden. Unter 50% LP erhöht sich der Bonus auf +2W6, unter 25% LP auf +3W6",
     "Solange du unter 75% LP bist, verursachst du +1W8 Schaden. Unter 50% LP erhöht sich der Bonus auf +2W8, unter 25% LP auf +3W8"
    ]
   },
   {
    "name": "Gesegneter Heiler",
    "rang": 2,
    "wirkungen": [
     "Alle Heilungszauber heilen zusätzlich +1W10",
     "Alle Heilungszauber heilen zusätzlich +2W10",
     "Alle Heilungszauber heilen zusätzlich +3W10"
    ]
   },
   {
    "name": "Hartnäckig",
    "rang": 2,
    "wirkungen": [
     "1-mal pro Kampf darfst du einen misslungenen Wurf zur Abwehr eines Angriffs oder Effekts wiederholen",
     "2-mal pro Kampf darfst du einen misslungenen Wurf zur Abwehr eines Angriffs oder Effekts wiederholen",
     "3-mal pro Kampf darfst du einen misslungenen Wurf zur Abwehr eines Angriffs oder Effekts wiederholen"
    ]
   },
   {
    "name": "Ledrige Haut",
    "rang": 2,
    "wirkungen": [
     "Nachdem deine Blutungen abgehandelt wurden, schließt sich automatisch 1 Blutung",
     "Nachdem deine Blutungen abgehandelt wurden, schließen sich automatisch 2 Blutungen"
    ]
   },
   {
    "name": "Stahlmagen",
    "rang": 2,
    "wirkungen": [
     "Am Ende deiner Runde wird deine Giftstufe um 1 gesenkt",
     "Am Ende deiner Runde wird deine Giftstufe um 2 gesenkt",
     "Am Ende deiner Runde wird deine Giftstufe um 3 gesenkt"
    ]
   },
   {
    "name": "Unbrennbar",
    "rang": 2,
    "wirkungen": [
     "Jede Runde verlierst du automatisch 1 Feuermarke"
    ]
   },
   {
    "name": "Held",
    "rang": 3,
    "wirkungen": [
     "Deine Standard-Nahkampfangriffe verursachen +1W10 Schaden",
     "Zusätzlich erhältst du pro Runde einen weiteren Standard-Nahkampfangriff"
    ]
   },
   {
    "name": "Kampfsanitäter",
    "rang": 3,
    "wirkungen": [
     "1-mal im Kampf kannst du eine Heilfähigkeit als Extra-Aktion nutzen",
     "2-mal im Kampf kannst du eine Heilfähigkeit als Extra-Aktion nutzen",
     "3-mal im Kampf kannst du eine Heilfähigkeit als Extra-Aktion nutzen"
    ]
   },
   {
    "name": "Magier",
    "rang": 3,
    "wirkungen": [
     "Reichweite deiner Fähigkeiten +1m, Wirkungsradius +0m",
     "Reichweite +3m, Wirkungsradius +1m",
     "Reichweite +5m, Wirkungsradius +1m"
    ]
   },
   {
    "name": "Perfekter Konter",
    "rang": 3,
    "wirkungen": [
     "Immer wenn du einen Angriff parierst, darfst du mit einer Standard-Nahkampfattacke zurückschlagen"
    ]
   },
   {
    "name": "Schildbrecher",
    "rang": 3,
    "wirkungen": [
     "Deine normalen Standard-Nahkampfangriffe ignorieren 5 Rüstung",
     "ignorieren 10 Rüstung",
     "ignorieren 15 Rüstung"
    ]
   },
   {
    "name": "Damage Dealer",
    "rang": 4,
    "wirkungen": [
     "Alle deine aktiven Fähigkeiten verursachen +1W10 Schaden",
     "+2W10 Schaden",
     "+3W10 Schaden"
    ]
   },
   {
    "name": "Tödliche Präsenz",
    "rang": 4,
    "wirkungen": [
     "Kritische Treffer verursachen +1W10 zusätzlichen Schaden; Krit-Chance +5%",
     "+2W10 zusätzlichen Schaden; Krit-Chance +10%",
     "+3W10 zusätzlichen Schaden; Krit-Chance +15%"
    ]
   },
   {
    "name": "Unsterblich",
    "rang": 4,
    "wirkungen": [
     "Einmal pro Tag: Wenn du im Kampf auf 0 LP oder weniger fallen würdest, werden deine LP stattdessen auf 1 gesetzt",
     "Einmal pro Tag: Wenn du im Kampf auf 0 LP oder weniger fallen würdest, werden deine LP stattdessen auf 50 gesetzt",
     "Einmal pro Tag: Wenn du im Kampf auf 0 LP oder weniger fallen würdest, werden deine LP stattdessen auf 100 gesetzt"
    ]
   },
   {
    "name": "Meister Magus",
    "rang": 4,
    "wirkungen": [
     "Einmal pro Kampf darfst du eine bereits verbrauchte Fähigkeit bis Rang #2 erneut verfügbar machen",
     "Einmal pro Kampf darfst du zwei bereits verbrauchte Fähigkeiten bis Rang #2 erneut verfügbar machen",
     "Einmal pro Kampf darfst du zwei bereits verbrauchte Fähigkeiten bis Rang #3 erneut verfügbar machen"
    ]
   }
  ]
 },
 "wesenEffekte": {
  "Arkaner Freibeuter": [
   {
    "typ": "buff",
    "ziel": "magischer_schaden_bonus",
    "wert": "plus 1W10",
    "beschreibung": "Du machst plus 1W10 magischen Schaden"
   },
   {
    "typ": "buff",
    "ziel": "magischer_schaden_reduktion",
    "wert": "minus 1W10",
    "beschreibung": "Du erleidest minus 1W10 magischen Schaden gegen dich"
   },
   {
    "typ": "debuff",
    "ziel": "physischer_schaden_erlitten_malus",
    "wert": "plus 1W10",
    "beschreibung": "Du erleidest plus 1W10 zusätzlichen physischen Schaden gegen dich"
   },
   {
    "typ": "debuff",
    "ziel": "zaehigkeit",
    "wert": -5,
    "beschreibung": "Malus von minus 5 auf das Talent Zähigkeit"
   }
  ],
  "Dämonenjäger": [
   {
    "typ": "buff",
    "ziel": "lebenspunkte_maximum",
    "wert": 25,
    "beschreibung": "Erhöht deine maximalen Lebenspunkte permanent um plus 25"
   },
   {
    "typ": "buff",
    "ziel": "schaden_spezifisch_bonus",
    "wert": "plus 2W10",
    "beschreibung": "Du machst plus 2W10 zusätzlichen Schaden gegen Dämonen, Untote und Monster"
   },
   {
    "typ": "debuff",
    "ziel": "schaden_allgemein_malus",
    "wert": "minus 1W10",
    "beschreibung": "Du machst minus 1W10 weniger Schaden gegen alle anderen Ziele"
   },
   {
    "typ": "debuff",
    "ziel": "kampfbeginn_vorbereitung",
    "wert": "1 extra Aktion",
    "beschreibung": "Du musst zu Beginn des Kampfes eine Aktion länger für Rituale oder Waffenpflege vorbereiten"
   }
  ],
  "Fluchbrecher": [
   {
    "typ": "buff",
    "ziel": "heilung_zusatzeffekt",
    "wert": "automatische Reinigung",
    "beschreibung": "Entfernt bei jeder deiner Heilaktionen automatisch eine Blutung, eine Giftstufe und einen Feuermarker"
   },
   {
    "typ": "buff",
    "ziel": "magischer_schaden_reduktion",
    "wert": "minus 2W6",
    "beschreibung": "Du erleidest minus 2W6 magischen Schaden weniger gegen dich"
   },
   {
    "typ": "debuff",
    "ziel": "statuseffekte_erlitten_malus",
    "wert": "plus 1 extra Stack",
    "beschreibung": "Du erhältst erlittene Blutungen, Giftstufen und Feuermarker um plus 1 zusätzlich erhöht"
   },
   {
    "typ": "debuff",
    "ziel": "bewegungsweite",
    "wert": -1,
    "beschreibung": "Deine Bewegungsweite verringert sich um minus 1 Meter"
   }
  ],
  "Hitzeklinge": [
   {
    "typ": "buff",
    "ziel": "feuer_schaden_bonus",
    "wert": "plus 1W10",
    "beschreibung": "Du machst plus 1W10 Schaden mit Angriffen, die Feuermarker verursachen"
   },
   {
    "typ": "buff",
    "ziel": "feuer_abklingzeit_vorteil",
    "wert": "minus 1 Feuermarker pro Runde",
    "beschreibung": "Du verlierst automatisch jede Runde minus 1 Feuermarker auf dir selbst"
   },
   {
    "typ": "debuff",
    "ziel": "elementar_schaden_erlitten_malus",
    "wert": "plus 1W10",
    "beschreibung": "Du erleidest plus 1W10 zusätzlichen Schaden von Wasser- und Eisfähigkeiten gegen dich"
   },
   {
    "typ": "debuff",
    "ziel": "heimlichkeit",
    "wert": -5,
    "beschreibung": "Malus von minus 5 auf das Talent Heimlichkeit"
   }
  ],
  "Kultist": [
   {
    "typ": "buff",
    "ziel": "erstangriff_bonus",
    "wert": "plus 1 Blutung",
    "beschreibung": "Dein erster Nahkampfangriff in deiner Kampfrunde verursacht plus 1 zusätzliche Blutung"
   },
   {
    "typ": "buff",
    "ziel": "soziales",
    "wert": 5,
    "beschreibung": "Bonus von plus 5 auf Proben im Bereich Soziales"
   },
   {
    "typ": "debuff",
    "ziel": "wesens_skill_nebenwirkung",
    "wert": "plus 1 eigene Blutung",
    "beschreibung": "Du erhältst plus 1 Blutung für dich selbst, wenn du eine Wesensfähigkeit zauberst"
   },
   {
    "typ": "debuff",
    "ziel": "heilung_erhalten_malus",
    "wert": "erschwert um 5",
    "beschreibung": "Heilungsfähigkeiten, die auf dich gewirkt werden, sind um 5 Punkte erschwert"
   }
  ],
  "Pestbringer": [
   {
    "typ": "buff",
    "ziel": "gift_schaden_bonus",
    "wert": "plus 1W10",
    "beschreibung": "Deine Giftfähigkeiten verursachen plus 1W10 zusätzlichen Schaden"
   },
   {
    "typ": "buff",
    "ziel": "physischer_schaden_bonus",
    "wert": "plus 1W6",
    "beschreibung": "Du verursachst permanent plus 1W6 zusätzlichen physischen Schaden"
   },
   {
    "typ": "buff",
    "ziel": "gift_abklingzeit_vorteil",
    "wert": "minus 1 Giftstufe alle 2 Runden",
    "beschreibung": "Deine eigene Giftstufe wird alle 2 Runden automatisch um minus 1 reduziert"
   },
   {
    "typ": "debuff",
    "ziel": "gegner_widerstand_vorteil",
    "wert": "plus 5 gegnerische Zähigkeit",
    "beschreibung": "Gegner erhalten einen Bonus von plus 5 auf ihre Zähigkeit gegen einen Vergiftungsversuch von dir"
   }
  ],
  "Rum-Prediger": [
   {
    "typ": "buff",
    "ziel": "kostenloser_skill",
    "wert": "1 mal pro Kampf Seelenreinigung Stufe 1",
    "beschreibung": "Du kannst einmal pro Kampf die Fähigkeit Seelenreinigung auf Stufe 1 komplett kostenlos einsetzen"
   },
   {
    "typ": "buff",
    "ziel": "heilung_ausgegeben_bonus",
    "wert": "plus 1W10",
    "beschreibung": "Du bewirkst plus 1W10 zusätzliche Heilung, wenn du Heilgegenstände oder Heilfähigkeiten einsetzt"
   },
   {
    "typ": "debuff",
    "ziel": "initiative",
    "wert": "-1W4",
    "beschreibung": "Deine Initiative verringert sich permanent um minus 1W4"
   },
   {
    "typ": "debuff",
    "ziel": "wahrnehmung_menschenkenntnis",
    "wert": -5,
    "beschreibung": "Malus von minus 5 auf die Talente Wahrnehmung und Menschenkenntnis"
   }
  ],
  "Seher der Tiefsee": [
   {
    "typ": "buff",
    "ziel": "geistesblitz_wiederholung",
    "wert": "25 Prozent kostenlose Chance",
    "beschreibung": "Du kannst einmal am Tag einen Geistesblitz zu 25 Prozent Chance komplett kostenlos wiederholen"
   },
   {
    "typ": "buff",
    "ziel": "schaden_zusatzeffekt",
    "wert": "plus 1 Giftstufe",
    "beschreibung": "Alle deine schadenverursachenden Fähigkeiten applizieren zusätzlich plus 1 Giftstufe auf dem Ziel"
   },
   {
    "typ": "debuff",
    "ziel": "nahkampf_schaden_malus",
    "wert": "minus 1W10",
    "beschreibung": "Dein verursachter Nahkampfschaden verringert sich um minus 1W10"
   },
   {
    "typ": "debuff",
    "ziel": "soziale_proben",
    "wert": -5,
    "beschreibung": "Malus von minus 5 auf alle sozialen Proben"
   }
  ],
  "Sturmwüter": [
   {
    "typ": "buff",
    "ziel": "blitz_schaden_bonus",
    "wert": "plus 1W10",
    "beschreibung": "Deine Blitzfähigkeiten verursachen plus 1W10 zusätzlichen Schaden"
   },
   {
    "typ": "buff",
    "ziel": "bewegungsweite_wetter_konditionell",
    "wert": "plus 1 Meter bei Regen oder Sturm",
    "beschreibung": "Du erhältst plus 1 Meter Bewegungsweite, wenn ein Regen oder ein Sturm aktiv ist"
   },
   {
    "typ": "debuff",
    "ziel": "ueberladung_nebenwirkung",
    "wert": "1W8 Eigenschaden nach 1W4 Runden",
    "beschreibung": "Nach der Wirkung einer Fähigkeit erleidest du nach einer Verzögerung von 1W4 Runden automatisch 1W8 Schaden durch Überladung"
   },
   {
    "typ": "debuff",
    "ziel": "blutungs_abrechnung_malus",
    "wert": "plus 1W8 erlittener Schaden",
    "beschreibung": "Du erleidest plus 1W8 zusätzlichen Schaden pro erfolgter Blutungsabrechnung"
   }
  ],
  "Tiefseepirat": [
   {
    "typ": "buff",
    "ziel": "bewegungsweite_wasser_konditionell",
    "wert": "plus 2 Meter",
    "beschreibung": "Du erhältst plus 2 Meter Bewegungsweite im Wasser"
   },
   {
    "typ": "buff",
    "ziel": "proben_wasser_konditionell",
    "wert": "plus 1W10",
    "beschreibung": "Du erhältst plus 1W10 auf alle Fähigkeiten und Proben im Wasser"
   },
   {
    "typ": "debuff",
    "ziel": "bewegungsweite_land_konditionell",
    "wert": -1,
    "beschreibung": "Deine Bewegungsweite an Land verringert sich um minus 1 Meter"
   },
   {
    "typ": "debuff",
    "ziel": "initiative_land_konditionell",
    "wert": -1,
    "beschreibung": "Deine Initiative verringert sich an Land permanent um minus 1"
   }
  ],
  "Wellenringer": [
   {
    "typ": "buff",
    "ziel": "wasser_schaden_bonus",
    "wert": "plus 1W10",
    "beschreibung": "Deine Wasserfähigkeiten verursachen plus 1W10 zusätzlichen Schaden"
   },
   {
    "typ": "buff",
    "ziel": "bewegungsweite_wasser_konditionell",
    "wert": "plus 1 Meter",
    "beschreibung": "Du erhältst plus 1 Meter Bewegungsweite auf oder im Wasser"
   },
   {
    "typ": "debuff",
    "ziel": "initiative_land_konditionell",
    "wert": -2,
    "beschreibung": "Du erhältst minus 2 Initiative an Land, dieser Malus gilt ausdrücklich nicht auf Schiffen"
   },
   {
    "typ": "debuff",
    "ziel": "gift_erlitten_malus",
    "wert": "plus 1W4 Schaden pro Giftstufe",
    "beschreibung": "Du erleidest plus 1W4 zusätzlichen Schaden durch aktive Giftstufen"
   }
  ],
  "Mensch": []
 },
 "wuerfelTabellen": {
  "oracle_piraten_events": {
   "id": "oracle_piraten_events",
   "name": "Orakel: Piraten Events",
   "wuerfel": "1W100",
   "art": "orakel",
   "spalten": {
    "spalte_A_aktion": [
     {
      "wurf": 1,
      "text": "Angriff"
     },
     {
      "wurf": 2,
      "text": "Verrat"
     },
     {
      "wurf": 3,
      "text": "Diebstahl"
     },
     {
      "wurf": 4,
      "text": "Meuterei"
     },
     {
      "wurf": 5,
      "text": "Flucht"
     },
     {
      "wurf": 6,
      "text": "Fund"
     },
     {
      "wurf": 7,
      "text": "Entdeckung"
     },
     {
      "wurf": 8,
      "text": "Explosion"
     },
     {
      "wurf": 9,
      "text": "Sichtung"
     },
     {
      "wurf": 10,
      "text": "Erpressung"
     },
     {
      "wurf": 11,
      "text": "Mord"
     },
     {
      "wurf": 12,
      "text": "Giftanschlag"
     },
     {
      "wurf": 13,
      "text": "Sabotage"
     },
     {
      "wurf": 14,
      "text": "Entführung"
     },
     {
      "wurf": 15,
      "text": "Verlust"
     },
     {
      "wurf": 16,
      "text": "Tausch"
     },
     {
      "wurf": 17,
      "text": "Kauf"
     },
     {
      "wurf": 18,
      "text": "Betrug"
     },
     {
      "wurf": 19,
      "text": "Streit"
     },
     {
      "wurf": 20,
      "text": "Duell"
     },
     {
      "wurf": 21,
      "text": "Pakt"
     },
     {
      "wurf": 22,
      "text": "Fluch"
     },
     {
      "wurf": 23,
      "text": "Segen"
     },
     {
      "wurf": 24,
      "text": "Warnung"
     },
     {
      "wurf": 25,
      "text": "Befehl"
     },
     {
      "wurf": 26,
      "text": "Spionage"
     },
     {
      "wurf": 27,
      "text": "Überfall"
     },
     {
      "wurf": 28,
      "text": "Hinterhalt"
     },
     {
      "wurf": 29,
      "text": "Ausbruch"
     },
     {
      "wurf": 30,
      "text": "Einsturz"
     },
     {
      "wurf": 31,
      "text": "Brand"
     },
     {
      "wurf": 32,
      "text": "Flut"
     },
     {
      "wurf": 33,
      "text": "Sturm"
     },
     {
      "wurf": 34,
      "text": "Flaute"
     },
     {
      "wurf": 35,
      "text": "Strandung"
     },
     {
      "wurf": 36,
      "text": "Wrackbergung"
     },
     {
      "wurf": 37,
      "text": "Ausgrabung"
     },
     {
      "wurf": 38,
      "text": "Versteck"
     },
     {
      "wurf": 39,
      "text": "Unglück"
     },
     {
      "wurf": 40,
      "text": "Rettung"
     },
     {
      "wurf": 41,
      "text": "Befreiung"
     },
     {
      "wurf": 42,
      "text": "Jagd"
     },
     {
      "wurf": 43,
      "text": "Fang"
     },
     {
      "wurf": 44,
      "text": "Vergiftung"
     },
     {
      "wurf": 45,
      "text": "Krankheit"
     },
     {
      "wurf": 46,
      "text": "Fieber"
     },
     {
      "wurf": 47,
      "text": "Wahnsinn"
     },
     {
      "wurf": 48,
      "text": "Spuk"
     },
     {
      "wurf": 49,
      "text": "Erscheinung"
     },
     {
      "wurf": 50,
      "text": "Omen"
     },
     {
      "wurf": 51,
      "text": "Feier"
     },
     {
      "wurf": 52,
      "text": "Gelage"
     },
     {
      "wurf": 53,
      "text": "Glücksspiel"
     },
     {
      "wurf": 54,
      "text": "Schmuggel"
     },
     {
      "wurf": 55,
      "text": "Ubergabe"
     },
     {
      "wurf": 56,
      "text": "Abfangen"
     },
     {
      "wurf": 57,
      "text": "Verfolgung"
     },
     {
      "wurf": 58,
      "text": "Sperre"
     },
     {
      "wurf": 59,
      "text": "Belagerung"
     },
     {
      "wurf": 60,
      "text": "Entern"
     },
     {
      "wurf": 61,
      "text": "Kielholen"
     },
     {
      "wurf": 62,
      "text": "Auspeitschen"
     },
     {
      "wurf": 63,
      "text": "Hinrichtung"
     },
     {
      "wurf": 64,
      "text": "Geständnis"
     },
     {
      "wurf": 65,
      "text": "Lüge"
     },
     {
      "wurf": 66,
      "text": "Geheimnis"
     },
     {
      "wurf": 67,
      "text": "Aufruhr"
     },
     {
      "wurf": 68,
      "text": "Streik"
     },
     {
      "wurf": 69,
      "text": "Verhandlung"
     },
     {
      "wurf": 70,
      "text": "Bestechung"
     },
     {
      "wurf": 71,
      "text": "Inspektion"
     },
     {
      "wurf": 72,
      "text": "Razzia"
     },
     {
      "wurf": 73,
      "text": "Festnahme"
     },
     {
      "wurf": 74,
      "text": "Verhör"
     },
     {
      "wurf": 75,
      "text": "Folter"
     },
     {
      "wurf": 76,
      "text": "Urteil"
     },
     {
      "wurf": 77,
      "text": "Gnade"
     },
     {
      "wurf": 78,
      "text": "Opferung"
     },
     {
      "wurf": 79,
      "text": "Ritual"
     },
     {
      "wurf": 80,
      "text": "Beschwörung"
     },
     {
      "wurf": 81,
      "text": "Erwachen"
     },
     {
      "wurf": 82,
      "text": "Verwandlung"
     },
     {
      "wurf": 83,
      "text": "Heilung"
     },
     {
      "wurf": 84,
      "text": "Segnung"
     },
     {
      "wurf": 85,
      "text": "Weihe"
     },
     {
      "wurf": 86,
      "text": "Entweihung"
     },
     {
      "wurf": 87,
      "text": "Zerstörung"
     },
     {
      "wurf": 88,
      "text": "Plünderung"
     },
     {
      "wurf": 89,
      "text": "Kaperung"
     },
     {
      "wurf": 90,
      "text": "Blockade"
     },
     {
      "wurf": 91,
      "text": "Meuterei-Versuch"
     },
     {
      "wurf": 92,
      "text": "Friedensschluss"
     },
     {
      "wurf": 93,
      "text": "Allianz"
     },
     {
      "wurf": 94,
      "text": "Feindschaft"
     },
     {
      "wurf": 95,
      "text": "Herausforderung"
     },
     {
      "wurf": 96,
      "text": "Unterwerfung"
     },
     {
      "wurf": 97,
      "text": "Triumph"
     },
     {
      "wurf": 98,
      "text": "Niederlage"
     },
     {
      "wurf": 99,
      "text": "Begräbnis"
     },
     {
      "wurf": 100,
      "text": "Auferstehung"
     }
    ],
    "spalte_B_fokus": [
     {
      "wurf": 1,
      "text": "Gold"
     },
     {
      "wurf": 2,
      "text": "Schatzkarte"
     },
     {
      "wurf": 3,
      "text": "Logbuch"
     },
     {
      "wurf": 4,
      "text": "Kapitän"
     },
     {
      "wurf": 5,
      "text": "Steuermann"
     },
     {
      "wurf": 6,
      "text": "Quartiermeister"
     },
     {
      "wurf": 7,
      "text": "Smutje"
     },
     {
      "wurf": 8,
      "text": "Gouverneur"
     },
     {
      "wurf": 9,
      "text": "Gouverneurstochter"
     },
     {
      "wurf": 10,
      "text": "Zöllner"
     },
     {
      "wurf": 11,
      "text": "Kriegsschiff"
     },
     {
      "wurf": 12,
      "text": "Galeone"
     },
     {
      "wurf": 13,
      "text": "Wrack"
     },
     {
      "wurf": 14,
      "text": "Beiboot"
     },
     {
      "wurf": 15,
      "text": "Flotte"
     },
     {
      "wurf": 16,
      "text": "Fort"
     },
     {
      "wurf": 17,
      "text": "Leuchtturm"
     },
     {
      "wurf": 18,
      "text": "Hafen"
     },
     {
      "wurf": 19,
      "text": "Werft"
     },
     {
      "wurf": 20,
      "text": "Spelunke"
     },
     {
      "wurf": 21,
      "text": "Kombüse"
     },
     {
      "wurf": 22,
      "text": "Frachtraum"
     },
     {
      "wurf": 23,
      "text": "Kapitänskajüte"
     },
     {
      "wurf": 24,
      "text": "Großmast"
     },
     {
      "wurf": 25,
      "text": "Anker"
     },
     {
      "wurf": 26,
      "text": "Steuerrad"
     },
     {
      "wurf": 27,
      "text": "Kanone"
     },
     {
      "wurf": 28,
      "text": "Kanonenpulver"
     },
     {
      "wurf": 29,
      "text": "Muskete"
     },
     {
      "wurf": 30,
      "text": "Entermesser"
     },
     {
      "wurf": 31,
      "text": "Dolch"
     },
     {
      "wurf": 32,
      "text": "Kompass"
     },
     {
      "wurf": 33,
      "text": "Fernrohr"
     },
     {
      "wurf": 34,
      "text": "Medaillon"
     },
     {
      "wurf": 35,
      "text": "Amulett"
     },
     {
      "wurf": 36,
      "text": "Ring"
     },
     {
      "wurf": 37,
      "text": "Krone"
     },
     {
      "wurf": 38,
      "text": "Kelch"
     },
     {
      "wurf": 39,
      "text": "Schatztruhe"
     },
     {
      "wurf": 40,
      "text": "Fass"
     },
     {
      "wurf": 41,
      "text": "Rum"
     },
     {
      "wurf": 42,
      "text": "Zwieback"
     },
     {
      "wurf": 43,
      "text": "Pökelfleisch"
     },
     {
      "wurf": 44,
      "text": "Gewürze"
     },
     {
      "wurf": 45,
      "text": "Tabak"
     },
     {
      "wurf": 46,
      "text": "Seide"
     },
     {
      "wurf": 47,
      "text": "Zuckerrohr"
     },
     {
      "wurf": 48,
      "text": "Plantage"
     },
     {
      "wurf": 49,
      "text": "Sklave"
     },
     {
      "wurf": 50,
      "text": "Gefangener"
     },
     {
      "wurf": 51,
      "text": "Wache"
     },
     {
      "wurf": 52,
      "text": "Soldat"
     },
     {
      "wurf": 53,
      "text": "Offizier"
     },
     {
      "wurf": 54,
      "text": "Admiral"
     },
     {
      "wurf": 55,
      "text": "Richter"
     },
     {
      "wurf": 56,
      "text": "Priester"
     },
     {
      "wurf": 57,
      "text": "Medizinmann"
     },
     {
      "wurf": 58,
      "text": "Voodoo-Priesterin"
     },
     {
      "wurf": 59,
      "text": "Hexe"
     },
     {
      "wurf": 60,
      "text": "Skelett"
     },
     {
      "wurf": 61,
      "text": "Geist"
     },
     {
      "wurf": 62,
      "text": "Untoter"
     },
     {
      "wurf": 63,
      "text": "Sirene"
     },
     {
      "wurf": 64,
      "text": "Meerjungfrau"
     },
     {
      "wurf": 65,
      "text": "Krake"
     },
     {
      "wurf": 66,
      "text": "Seeschlange"
     },
     {
      "wurf": 67,
      "text": "Hai"
     },
     {
      "wurf": 68,
      "text": "Alligator"
     },
     {
      "wurf": 69,
      "text": "Riesenspinne"
     },
     {
      "wurf": 70,
      "text": "Harpyie"
     },
     {
      "wurf": 71,
      "text": "Papagei"
     },
     {
      "wurf": 72,
      "text": "Affe"
     },
     {
      "wurf": 73,
      "text": "Schiffsratte"
     },
     {
      "wurf": 74,
      "text": "Insel"
     },
     {
      "wurf": 75,
      "text": "Riff"
     },
     {
      "wurf": 76,
      "text": "Lagune"
     },
     {
      "wurf": 77,
      "text": "Grotte"
     },
     {
      "wurf": 78,
      "text": "Dschungel"
     },
     {
      "wurf": 79,
      "text": "Sumpf"
     },
     {
      "wurf": 80,
      "text": "Vulkan"
     },
     {
      "wurf": 81,
      "text": "Strand"
     },
     {
      "wurf": 82,
      "text": "Mangroven"
     },
     {
      "wurf": 83,
      "text": "Geisterschiff"
     },
     {
      "wurf": 84,
      "text": "Handelsboot"
     },
     {
      "wurf": 85,
      "text": "Kaperbrief"
     },
     {
      "wurf": 86,
      "text": "Steckbrief"
     },
     {
      "wurf": 87,
      "text": "Testament"
     },
     {
      "wurf": 88,
      "text": "Geheimbund"
     },
     {
      "wurf": 89,
      "text": "Schugglerring"
     },
     {
      "wurf": 90,
      "text": "Händlergilde"
     },
     {
      "wurf": 91,
      "text": "Bettler"
     },
     {
      "wurf": 92,
      "text": "Waisenkind"
     },
     {
      "wurf": 93,
      "text": "Hehler"
     },
     {
      "wurf": 94,
      "text": "Spion"
     },
     {
      "wurf": 95,
      "text": "Navigator"
     },
     {
      "wurf": 96,
      "text": "Schiffszimmermann"
     },
     {
      "wurf": 97,
      "text": "Schiffsarzt"
     },
     {
      "wurf": 98,
      "text": "Meeresgott"
     },
     {
      "wurf": 99,
      "text": "Voodoo-Götze"
     },
     {
      "wurf": 100,
      "text": "Totenkopf-Flagge"
     }
    ]
   }
  },
  "table_kochen": {
   "id": "table_kochen",
   "name": "Kochen",
   "wuerfel": "1W10",
   "art": "probe",
   "spalten": {
    "success": [
     {
      "wurf": 1,
      "text": "Schlecht aber essbar - satt"
     },
     {
      "wurf": 2,
      "text": "Einfaches Essen. Satt und Glücklich.",
      "buffs": [
       {
        "name": "Satt und glücklich.",
        "targetType": "category",
        "targetID": "soziales",
        "value": 3
       }
      ]
     },
     {
      "wurf": 3,
      "text": "Schmackhaft. Nicht edel, aber auch keine Maden.",
      "buffs": [
       {
        "name": "Schmackhaft gespeist",
        "targetType": "charakter",
        "targetID": "movement",
        "value": 1
       }
      ]
     },
     {
      "wurf": 4,
      "text": "Herzhaft lecker.",
      "buffs": [
       {
        "name": "Herzhaft gespeist. Lecker!",
        "targetType": "charakter",
        "targetID": "hp",
        "value": "2W10",
        "note": "Heilung in dieser Nacht"
       }
      ]
     },
     {
      "wurf": 5,
      "text": "Nahrhaft solides Essen.",
      "buffs": [
       {
        "name": "Nahrhaftes Essen",
        "targetType": "category",
        "targetID": "handeln",
        "value": 5
       }
      ]
     },
     {
      "wurf": 6,
      "text": "Würzig und etwas spicey. Lecker!",
      "buffs": [
       {
        "name": "Würzig & spicey",
        "targetType": "category",
        "targetID": "angriff",
        "value": 1
       }
      ]
     },
     {
      "wurf": 7,
      "text": "Stärkendes Essen.",
      "buffs": [
       {
        "name": "Stärkendes Essen",
        "targetType": "charakter",
        "targetID": "initiative",
        "value": 1
       }
      ]
     },
     {
      "wurf": 8,
      "text": "Wohlschmeckendes Essen.",
      "buffs": [
       {
        "name": "Wohlschmeckendes Essen",
        "targetType": "charakter",
        "targetID": "armor",
        "value": 5
       }
      ]
     },
     {
      "wurf": 9,
      "text": "Meisterhaftes Essen.",
      "buffs": [
       {
        "name": "Meisterhaftes Essen",
        "targetType": "charakter",
        "targetID": "hp",
        "value": "4W10",
        "note": "Heilung in dieser Nacht."
       }
      ]
     },
     {
      "wurf": 10,
      "text": "Festmahl.",
      "buffs": [
       {
        "name": "Festmahl.",
        "targetType": "charakter",
        "targetID": "attack_value",
        "value": "1W10"
       }
      ]
     }
    ],
    "no_success": [
     {
      "wurf": 1,
      "text": "Angebranntes Essen"
     },
     {
      "wurf": 2,
      "text": "Leicht verdorbenes Essen. Zähigkeitsprobe GS 1W6.",
      "buffs": [
       {
        "name": "Verdorbenes Essen",
        "targetType": "",
        "targetID": "",
        "value": 0
       }
      ]
     },
     {
      "wurf": 3,
      "text": "Holla die Waldfee, zu viel Salz",
      "buffs": [
       {
        "name": "Überwürztes Essen",
        "targetType": "charakter",
        "targetID": "movement",
        "value": -1
       }
      ]
     },
     {
      "wurf": 4,
      "text": "Geschmacklos, wo ist das Salz?",
      "buffs": [
       {
        "name": "Ungesalztes Essen",
        "targetType": "category",
        "targetID": "soziales",
        "value": -5
       }
      ]
     },
     {
      "wurf": 5,
      "text": "Völlig verdorbenes Essen - Bauchschmerzen",
      "buffs": [
       {
        "name": "Verdorbenes Essen",
        "targetType": "charakter",
        "targetID": "hp",
        "value": "-1W10"
       }
      ]
     },
     {
      "wurf": 6,
      "text": "Essen verschüttet, der Koch ist über eine Flasche gestolpert",
      "buffs": [
       {
        "name": "Essen verschüttet, hungrig",
        "targetType": "",
        "targetID": "",
        "value": ""
       }
      ]
     },
     {
      "wurf": 7,
      "text": "Rote Soße, Koch hat sich am Messer aufgeschlitzt.",
      "buffs": [
       {
        "name": "Satt",
        "targetType": "charakter",
        "targetID": "hp",
        "value": "1W10"
       }
      ]
     },
     {
      "wurf": 8,
      "text": "FEUER! Die Kombüse brennt. Schaden wird bestimmt.",
      "buffs": [
       {
        "name": "Kombüse brennt",
        "targetType": "",
        "targetID": "",
        "value": ""
       }
      ]
     },
     {
      "wurf": 9,
      "text": "Verlfuchtes Kraut - Maggie im Essen.",
      "buffs": [
       {
        "name": "Verfluchtes Essen",
        "targetType": "category",
        "targetID": "all_categories",
        "value": 3
       }
      ]
     },
     {
      "wurf": 10,
      "text": "Lebensmittelvergiftung, falscher Pilz. Zähigkeitsprobe GS 1W6",
      "buffs": [
       {
        "name": "Lebensmittelvergiftung.",
        "targetType": "charakter",
        "targetID": "hp",
        "value": "2W10"
       }
      ]
     }
    ]
   }
  },
  "oracle_piraten_gerüchte": {
   "id": "oracle_piraten_gerüchte",
   "name": "Orakel: Piraten Gerüchte",
   "wuerfel": "1W100",
   "art": "orakel",
   "spalten": {
    "spalte_A_ereignis": [
     {
      "wurf": 1,
      "text": "Ein geschmuggelter Seesack verbirgt"
     },
     {
      "wurf": 2,
      "text": "Ein blutiger Dolch lag neben"
     },
     {
      "wurf": 3,
      "text": "Ein verfluchter Kompass zeigt auf"
     },
     {
      "wurf": 4,
      "text": "Ein belauschter Steuermann flüsterte über"
     },
     {
      "wurf": 5,
      "text": "Ein heimlicher Pakt entstand durch"
     },
     {
      "wurf": 6,
      "text": "Ein gefälschter Steckbrief warnt vor"
     },
     {
      "wurf": 7,
      "text": "Ein lautstarker Kneipenstreit drehte sich um"
     },
     {
      "wurf": 8,
      "text": "Ein betrunkener Navigator schwört auf"
     },
     {
      "wurf": 9,
      "text": "Ein mysteriöser Chiffre-Brief verweist auf"
     },
     {
      "wurf": 10,
      "text": "Ein drohender Schiffbruch droht durch"
     },
     {
      "wurf": 11,
      "text": "Ein verlorener Logbuch-Eintrag berichtet von"
     },
     {
      "wurf": 12,
      "text": "Ein erpresster Quartiermeister verriet"
     },
     {
      "wurf": 13,
      "text": "Ein legendärer Prisen-Bericht verspricht"
     },
     {
      "wurf": 14,
      "text": "Ein schändlicher Giftmord geschah wegen"
     },
     {
      "wurf": 15,
      "text": "Ein rachesuchender Bootsmann jagt"
     },
     {
      "wurf": 16,
      "text": "Ein unfairer Würfelwurf entschied über"
     },
     {
      "wurf": 17,
      "text": "Ein schattenhafter Fremder sucht nach"
     },
     {
      "wurf": 18,
      "text": "Ein käuflicher Zöllner fälschte"
     },
     {
      "wurf": 19,
      "text": "Ein meuternder Matrose floh mit"
     },
     {
      "wurf": 20,
      "text": "Ein göttliches Zeichen am Himmel deutet auf"
     },
     {
      "wurf": 21,
      "text": "Ein sterbender Pirat zeichnete"
     },
     {
      "wurf": 22,
      "text": "Ein gestohlenes Amulett beschwört"
     },
     {
      "wurf": 23,
      "text": "Ein brennendes Wrack birgt"
     },
     {
      "wurf": 24,
      "text": "Ein rissiges Pergament beschreibt"
     },
     {
      "wurf": 25,
      "text": "Ein unheimliches Heulen nachts kündet von"
     },
     {
      "wurf": 26,
      "text": "Ein hoher Finderlohn steht auf"
     },
     {
      "wurf": 27,
      "text": "Ein im Sand vergrabener Käfig enthält"
     },
     {
      "wurf": 28,
      "text": "Ein seltener Edelstein fordert Opfer für"
     },
     {
      "wurf": 29,
      "text": "Ein versunkener Dreimaster bewacht"
     },
     {
      "wurf": 30,
      "text": "Ein meisterhafter Diebstahl drehte sich um"
     },
     {
      "wurf": 31,
      "text": "Ein eiskalter Verrat zerstörte"
     },
     {
      "wurf": 32,
      "text": "Ein betörender Sirenengesang lockt zu"
     },
     {
      "wurf": 33,
      "text": "Ein verlassenes Ruderboot trieb mit"
     },
     {
      "wurf": 34,
      "text": "Ein Geheimgang unter der Spelunke führt zu"
     },
     {
      "wurf": 35,
      "text": "Ein goldener Kelch fehlt bei"
     },
     {
      "wurf": 36,
      "text": "Ein folgenschwerer Fluch liegt auf"
     },
     {
      "wurf": 37,
      "text": "Ein gieriger Händler bezahlt für"
     },
     {
      "wurf": 38,
      "text": "Ein abgehackter Finger lag im Becher von"
     },
     {
      "wurf": 39,
      "text": "Ein geheimnisvoller Händler verkauft"
     },
     {
      "wurf": 40,
      "text": "Ein steckengebliebenes Kanonenrohr explodierte wegen"
     },
     {
      "wurf": 41,
      "text": "Ein finsterer Kult betet zu"
     },
     {
      "wurf": 42,
      "text": "Ein abgerissenes Stück Segeltuch zeigt"
     },
     {
      "wurf": 43,
      "text": "Ein verbeultes Medaillon erinnert an"
     },
     {
      "wurf": 44,
      "text": "Ein verräterisches Tattoo beweist"
     },
     {
      "wurf": 45,
      "text": "Ein verstaubtes Fernrohr offenbart"
     },
     {
      "wurf": 46,
      "text": "Ein seltener Tropenvogel krächzt über"
     },
     {
      "wurf": 47,
      "text": "Ein verbarrikadiertes Lagerhaus schützt"
     },
     {
      "wurf": 48,
      "text": "Ein entflohener Sklave weiß von"
     },
     {
      "wurf": 49,
      "text": "Ein schlafender Wachsoldat verlor"
     },
     {
      "wurf": 50,
      "text": "Ein plötzlich gekapptes Ankertau führte zu"
     },
     {
      "wurf": 51,
      "text": "Ein vergifteter Rum-Fass-Inhalt tötete"
     },
     {
      "wurf": 52,
      "text": "Ein künstliches Signalfeuer lockte in"
     },
     {
      "wurf": 53,
      "text": "Ein vergrabenes Skelett klammert sich an"
     },
     {
      "wurf": 54,
      "text": "Ein kühner Sabotageakt traf"
     },
     {
      "wurf": 55,
      "text": "Ein betrügerischer Hehler feilscht um"
     },
     {
      "wurf": 56,
      "text": "Ein schmutziges Testament vererbt"
     },
     {
      "wurf": 57,
      "text": "Ein stummer Bettler deutet auf"
     },
     {
      "wurf": 58,
      "text": "Ein eilig verlassenes Lagerfeuer zeugt von"
     },
     {
      "wurf": 59,
      "text": "Ein kopfloser Geist spukt wegen"
     },
     {
      "wurf": 60,
      "text": "Ein gezinktes Kartenspiel endete in"
     },
     {
      "wurf": 61,
      "text": "Ein reicher Plantagenbesitzer flieht vor"
     },
     {
      "wurf": 62,
      "text": "Ein blutiges Haifischgebiss warnt vor"
     },
     {
      "wurf": 63,
      "text": "Ein wertvolles Frachtschiff wartet auf"
     },
     {
      "wurf": 64,
      "text": "Ein unheimliches Glühen im Riff zeigt"
     },
     {
      "wurf": 65,
      "text": "Ein korrupter Gouverneur unterschrieb"
     },
     {
      "wurf": 66,
      "text": "Ein scharfes Entermesser ritzte"
     },
     {
      "wurf": 67,
      "text": "Ein verlorenes Medaillon gehört zu"
     },
     {
      "wurf": 68,
      "text": "Ein seltener Flaschenpost-Brief bittet um"
     },
     {
      "wurf": 69,
      "text": "Ein nasser Steckbrief klebte an"
     },
     {
      "wurf": 70,
      "text": "Ein zerbrochener Schiffskompass war der Grund für"
     },
     {
      "wurf": 71,
      "text": "Ein gezielter Schuss im Hafen traf"
     },
     {
      "wurf": 72,
      "text": "Ein uraltes Seemannslied beschreibt"
     },
     {
      "wurf": 73,
      "text": "Ein schwerer Eichenschrank verbirgt"
     },
     {
      "wurf": 74,
      "text": "Ein dunkler Fleck auf der Seekarte markiert"
     },
     {
      "wurf": 75,
      "text": "Ein schreiendes Findelkind trug"
     },
     {
      "wurf": 76,
      "text": "Ein nachts gestohlenes Beiboot brachte"
     },
     {
      "wurf": 77,
      "text": "Ein seltsames Schnitzen im Holz zeigt"
     },
     {
      "wurf": 78,
      "text": "Ein goldener Siegelring lag im Magen von"
     },
     {
      "wurf": 79,
      "text": "Ein verlassenes Fort birgt"
     },
     {
      "wurf": 80,
      "text": "Ein plötzlicher Sturm enthüllte"
     },
     {
      "wurf": 81,
      "text": "Ein rachedurstiger Schiffskoch sucht"
     },
     {
      "wurf": 82,
      "text": "Ein verrosteter Käfig baumelt über"
     },
     {
      "wurf": 83,
      "text": "Ein gestrandeter Wal verschluckte"
     },
     {
      "wurf": 84,
      "text": "Ein unheimlicher Priester warnt vor"
     },
     {
      "wurf": 85,
      "text": "Ein ausgeblichenes Flaggentuch signalisiert"
     },
     {
      "wurf": 86,
      "text": "Ein reicher Lösegeld-Brief fordert"
     },
     {
      "wurf": 87,
      "text": "Ein Geheimbund plant Sabotage gegen"
     },
     {
      "wurf": 88,
      "text": "Ein im Moor versunkener Karren enthält"
     },
     {
      "wurf": 89,
      "text": "Ein magisches Brandmal fordert"
     },
     {
      "wurf": 90,
      "text": "Ein im Rausch belauschtes Gespräch verriet"
     },
     {
      "wurf": 91,
      "text": "Ein eilig vergrabenes Fass schützt"
     },
     {
      "wurf": 92,
      "text": "Ein unvollständiges Logbuch klagt an"
     },
     {
      "wurf": 93,
      "text": "Ein Geisterleuchten am Kai warnt vor"
     },
     {
      "wurf": 94,
      "text": "Ein verratener Schugglerring sucht"
     },
     {
      "wurf": 95,
      "text": "Ein stummes Mädchen zeichnete"
     },
     {
      "wurf": 96,
      "text": "Ein von Maden zerfressener Seesack enthielt"
     },
     {
      "wurf": 97,
      "text": "Ein rostiger Schlüssel passt zu"
     },
     {
      "wurf": 98,
      "text": "Ein scharlachrotes Segel gehört zu"
     },
     {
      "wurf": 99,
      "text": "Ein rissiges Holzbein birgt Notizen über"
     },
     {
      "wurf": 100,
      "text": "Ein im Sterben liegender Smutje gestand"
     }
    ],
    "spalte_B_thema": [
     {
      "wurf": 1,
      "text": "den verlorenen Seemannsschatz im Korallenriff"
     },
     {
      "wurf": 2,
      "text": "einen geplanten Verrat unter Deck der Fregatte"
     },
     {
      "wurf": 3,
      "text": "einen uralten Pakt mit einer wilden Sirene"
     },
     {
      "wurf": 4,
      "text": "einen Hinterhalt der königlichen Marine am Kai"
     },
     {
      "wurf": 5,
      "text": "einen blutigen Spelunken-Streit um geraubtes Gold"
     },
     {
      "wurf": 6,
      "text": "einen nächtlichen Hafen-Hinterhalt im dichten Nebel"
     },
     {
      "wurf": 7,
      "text": "den geheimen Schmuggel-Weg durch die Mangroven"
     },
     {
      "wurf": 8,
      "text": "den grausamen Fluch einer Voodoo-Priesterin"
     },
     {
      "wurf": 9,
      "text": "den gefälschten Steckbrief auf einen Navigator"
     },
     {
      "wurf": 10,
      "text": "den illegalen Handel mit verbotener Ware im Fort"
     },
     {
      "wurf": 11,
      "text": "den brutalen Kielhol-Befehl des grausamen Kapitäns"
     },
     {
      "wurf": 12,
      "text": "einen verdeckten Giftmischer in der Kombüse"
     },
     {
      "wurf": 13,
      "text": "ein verfluchtes Geisterschiff am fernen Horizont"
     },
     {
      "wurf": 14,
      "text": "einen riskanten Gefängnis-Ausbruch im spanischen Fort"
     },
     {
      "wurf": 15,
      "text": "einen miesen Schatzkarten-Betrug auf Tortuga"
     },
     {
      "wurf": 16,
      "text": "eine feige Sabotage am mächtigen Großmast"
     },
     {
      "wurf": 17,
      "text": "einen alten Kompass der direkt ins Verderben führt"
     },
     {
      "wurf": 18,
      "text": "geheime Spionage-Berichte für den dicken Gouverneur"
     },
     {
      "wurf": 19,
      "text": "einen verheerenden Spelunken-Brand voller Absicht"
     },
     {
      "wurf": 20,
      "text": "den seltenen Segen des launischen Meeresgottes"
     },
     {
      "wurf": 21,
      "text": "eine im Dschungel versteckte Schatzgrotte"
     },
     {
      "wurf": 22,
      "text": "die geheime Hinrichtung des treuen Quartiermeisters"
     },
     {
      "wurf": 23,
      "text": "den Schmuggel von seltenem Kanonenpulver"
     },
     {
      "wurf": 24,
      "text": "ein im Sumpf verstecktes Voodoo-Heiligtum"
     },
     {
      "wurf": 25,
      "text": "eine gestohlene Truhe voller Diamanten"
     },
     {
      "wurf": 26,
      "text": "ein verlassenes Nest von blutrünstigen Harpyien"
     },
     {
      "wurf": 27,
      "text": "eine geheime Liebschaft der Gouverneurstochter"
     },
     {
      "wurf": 28,
      "text": "das Erbe eines legendären Piratenfürsten"
     },
     {
      "wurf": 29,
      "text": "den Fluchversuch auf das stolze Flaggschiff"
     },
     {
      "wurf": 30,
      "text": "eine illegale Sklavenbefreiung in der Plantage"
     },
     {
      "wurf": 31,
      "text": "die Vergiftung der Trinkwasserbrunnen im Hafen"
     },
     {
      "wurf": 32,
      "text": "den Diebstahl der goldenen Kirchenglocke"
     },
     {
      "wurf": 33,
      "text": "ein geheimes Treffen verfeindeter Piratenkapitäne"
     },
     {
      "wurf": 34,
      "text": "eine Kiste mit verfluchtem Aztekengold"
     },
     {
      "wurf": 35,
      "text": "die Meuterei auf einem königlichen Gefängnisschiff"
     },
     {
      "wurf": 36,
      "text": "die Entführung eines hochrangigen Seekadetten"
     },
     {
      "wurf": 37,
      "text": "ein Nest von tödlichen Riffhaien am Badestrand"
     },
     {
      "wurf": 38,
      "text": "die Fälschung von offiziellen Kaperbriefen"
     },
     {
      "wurf": 39,
      "text": "eine versteckte Rum-Brennerei tief im dichten Wald"
     },
     {
      "wurf": 40,
      "text": "das Tagebuch eines wahnsinnig gewordenen Schiffsarztes"
     },
     {
      "wurf": 41,
      "text": "den geheimnisvollen Kult des schlafenden Kraken"
     },
     {
      "wurf": 42,
      "text": "das Versteck eines verräterischen Spions im Dorf"
     },
     {
      "wurf": 43,
      "text": "eine wertvolle Ladung purer Seide auf Grund"
     },
     {
      "wurf": 44,
      "text": "den unheiligen Friedhof der namenlosen Piraten"
     },
     {
      "wurf": 45,
      "text": "ein gestrandetes Beiboot voller Leichen"
     },
     {
      "wurf": 46,
      "text": "die Sabotage der Verteidigungskanonen der Stadt"
     },
     {
      "wurf": 47,
      "text": "den Diebstahl des heiligen Kruzifixes im Kloster"
     },
     {
      "wurf": 48,
      "text": "ein uraltes Riesenei im warmen Vulkankrater"
     },
     {
      "wurf": 49,
      "text": "die Erpressung des dorfbekannten Hafenmeisters"
     },
     {
      "wurf": 50,
      "text": "das Wrack einer uralten spanischen Galeone"
     },
     {
      "wurf": 51,
      "text": "eine Karte zu den geheimen Perlenbänken"
     },
     {
      "wurf": 52,
      "text": "den Aufenthaltsort eines legendären Schiffszimmers"
     },
     {
      "wurf": 53,
      "text": "eine im Sand versunkene eiserne Schatztruhe"
     },
     {
      "wurf": 54,
      "text": "den verdeckten Schmuggel von seltenen Heilkräutern"
     },
     {
      "wurf": 55,
      "text": "das Erwachen einer uralten Seeschlange im Hafenbecken"
     },
     {
      "wurf": 56,
      "text": "eine Meuterei gegen den unfähigen Kapitän"
     },
     {
      "wurf": 57,
      "text": "die verbotene Grotte der leuchtenden Quallen"
     },
     {
      "wurf": 58,
      "text": "den feigen Diebstahl des Schiffsmaskottchens"
     },
     {
      "wurf": 59,
      "text": "einen Scharfschützen auf dem Dach der Werft"
     },
     {
      "wurf": 60,
      "text": "das geheime Logbuch des ersten Gouverneurs"
     },
     {
      "wurf": 61,
      "text": "eine Kiste voll mit geraubten Kirchenschätzen"
     },
     {
      "wurf": 62,
      "text": "den Fluch der unruhigen Geistermatrosen"
     },
     {
      "wurf": 63,
      "text": "einen kostbaren Smaragd im Auge des Götzenbilds"
     },
     {
      "wurf": 64,
      "text": "das Grab des allerersten Piratenkönigs"
     },
     {
      "wurf": 65,
      "text": "die illegale Jagd auf seltene Riesenschildkröten"
     },
     {
      "wurf": 66,
      "text": "einen Tunnel unter dem spanischen Fort"
     },
     {
      "wurf": 67,
      "text": "das Handelsmonopol für seltenen schwarzen Pfeffer"
     },
     {
      "wurf": 68,
      "text": "das Nest eines gewaltigen Donnervogels"
     },
     {
      "wurf": 69,
      "text": "die Flucht einer Gruppe von Meuterern"
     },
     {
      "wurf": 70,
      "text": "ein im Schlamm versunkenes Handelsboot"
     },
     {
      "wurf": 71,
      "text": "die Rettung eines im Riff gefangenen Händlers"
     },
     {
      "wurf": 72,
      "text": "eine Lieferung von feinstem, erbeutetem Tabak"
     },
     {
      "wurf": 73,
      "text": "ein Fluch-Amulett im Besitz des Kapitäns"
     },
     {
      "wurf": 74,
      "text": "das geheime Signalbuch der königlichen Kriegsflotte"
     },
     {
      "wurf": 75,
      "text": "eine Truhe voller seltener, antiker Münzen"
     },
     {
      "wurf": 76,
      "text": "den plötzlichen Tod des alten Leuchtturmwärters"
     },
     {
      "wurf": 77,
      "text": "ein Nest von aggressiven Riesenspinnen im Frachtraum"
     },
     {
      "wurf": 78,
      "text": "eine gefälschte Besitzurkunde für die ganze Insel"
     },
     {
      "wurf": 79,
      "text": "die Entführung der schwangeren Smutje-Frau"
     },
     {
      "wurf": 80,
      "text": "eine Kiste voll geladener Musketen im Unterholz"
     },
     {
      "wurf": 81,
      "text": "den geheimen Fluchtweg des feigen Plantagenbesitzers"
     },
     {
      "wurf": 82,
      "text": "das finstere Geheimnis des stummen Barkeepers"
     },
     {
      "wurf": 83,
      "text": "die Jagd auf einen sagenumwobenen weißen Wal"
     },
     {
      "wurf": 84,
      "text": "eine vergessene Toteninsel ohne Wiederkehr"
     },
     {
      "wurf": 85,
      "text": "das verlassene Versteck eines bekannten Schmugglers"
     },
     {
      "wurf": 86,
      "text": "die verbotenen Rituale des alten Medizinmanns"
     },
     {
      "wurf": 87,
      "text": "ein Komplott zur Ermordung des Richters"
     },
     {
      "wurf": 88,
      "text": "die Bergung einer schweren bronzenen Schiffskanone"
     },
     {
      "wurf": 89,
      "text": "den Giftanschlag auf die gesamte Besatzung"
     },
     {
      "wurf": 90,
      "text": "eine Kiste voller ungeschnittener roter Rubine"
     },
     {
      "wurf": 91,
      "text": "das unheimliche Skelett mit dem goldenen Zahn"
     },
     {
      "wurf": 92,
      "text": "die verlassene Ruine der alten Zuckermühle"
     },
     {
      "wurf": 93,
      "text": "eine Schatzkarte geritzt in menschliche Haut"
     },
     {
      "wurf": 94,
      "text": "das mysteriöse Verschwinden des Hafenarztes"
     },
     {
      "wurf": 95,
      "text": "einen wertvollen Ring im Magen eines Alligators"
     },
     {
      "wurf": 96,
      "text": "den geheimen Pakt der Händlergilde mit Piraten"
     },
     {
      "wurf": 97,
      "text": "die Sabotage an den Rudern der Beiboote"
     },
     {
      "wurf": 98,
      "text": "das leuchtende Algenbett voller seltener Perlen"
     },
     {
      "wurf": 99,
      "text": "den Racheplan des einbeinigen alten Seebären"
     },
     {
      "wurf": 100,
      "text": "die Wiederkehr des grausamen Geisterkapitäns"
     }
    ]
   }
  },
  "table_musizieren": {
   "id": "table_musizieren",
   "name": "Musizieren",
   "wuerfel": "1W10",
   "art": "probe",
   "spalten": {
    "success": [
     {
      "wurf": 1,
      "text": "Lied ist im Hintergrund untergegangen. Kein Effekt"
     },
     {
      "wurf": 2,
      "text": "Angenehmes Lied.",
      "buffs": [
       {
        "name": "Angenehmes Lied gehört.",
        "targetType": "category",
        "targetID": "handeln",
        "value": 3
       }
      ]
     },
     {
      "wurf": 3,
      "text": "Crew wippt zum Takt - heitere Stimmung",
      "buffs": [
       {
        "name": "Taktvolles Lied",
        "targetType": "category",
        "targetID": "soziales",
        "value": 5
       }
      ]
     },
     {
      "wurf": 4,
      "text": "Mutiges Lied, alle Verbündeten erhalten 20 Temporäre Trefferpunkte.",
      "buffs": [
       {
        "name": "Lied macht Mut!",
        "targetType": "charakter",
        "targetID": "hp",
        "value": 20
       }
      ]
     },
     {
      "wurf": 5,
      "text": "Inspirierendes Lied - +5 auf Kraft",
      "buffs": [
       {
        "name": "Inspiriert!",
        "targetType": "talent",
        "targetID": "Athletik",
        "value": 5
       }
      ]
     },
     {
      "wurf": 6,
      "text": "Lied stärkt den Kampfgeist!",
      "buffs": [
       {
        "name": "Kampfschrei",
        "targetType": "charakter",
        "targetID": "movement",
        "value": 1
       }
      ]
     },
     {
      "wurf": 7,
      "text": "Magische Worte im Lied.",
      "buffs": [
       {
        "name": "Magische Schwingungen",
        "targetType": "category",
        "targetID": "handeln",
        "value": 5
       }
      ]
     },
     {
      "wurf": 8,
      "text": "Heroisches Lied - jetzt gibts auf die Fresse. Crew in der ersten Kampfrunde +10 auf Angriffswürfe",
      "buffs": [
       {
        "name": "Heroisch.",
        "targetType": "category",
        "targetID": "all",
        "value": 10
       }
      ]
     },
     {
      "wurf": 9,
      "text": "Rhythmus im Blut - +1 Initiative",
      "buffs": [
       {
        "name": "Rhythmus im Blut",
        "targetType": "charakter",
        "targetID": "initiative",
        "value": 1
       }
      ]
     },
     {
      "wurf": 10,
      "text": "Meisterstück - Gegner sind sprachlos und abgelenkt. Alle Verbündete +1W10",
      "buffs": [
       {
        "name": "Meisterlied",
        "targetType": "charakter",
        "targetID": "attack_value",
        "value": "1W10"
       }
      ]
     }
    ],
    "no_success": [
     {
      "wurf": 1,
      "text": "Nerviges Rumgeklimpere"
     },
     {
      "wurf": 2,
      "text": "Falsche Töne, du kommst ins Schwitzen",
      "buffs": [
       {
        "name": "Falsche Töne",
        "targetType": "talent",
        "targetID": "Zähigkeit",
        "value": -5
       }
      ]
     },
     {
      "wurf": 3,
      "text": "Totale Blamage, falsches Lied zur falschen Zeit.",
      "buffs": [
       {
        "name": "Blamage!",
        "targetType": "category",
        "targetID": "soziales",
        "value": -10
       }
      ]
     },
     {
      "wurf": 4,
      "text": "Stimmgerät vergessen, Lieferung aus Thomannonien braucht 1W6 Tage zur Lieferung",
      "buffs": [
       {
        "name": "Instrument nicht spielbar",
        "targetType": "",
        "targetID": "",
        "value": ""
       }
      ]
     },
     {
      "wurf": 5,
      "text": "Eine Saite reißt und schlitzt deinen Finger auf.",
      "buffs": [
       {
        "name": "Aufgeschlitzter Finger",
        "targetType": "charakter",
        "targetID": "hp",
        "value": "-1W6"
       }
      ]
     },
     {
      "wurf": 6,
      "text": "Nervtötendes Lied.",
      "buffs": [
       {
        "name": "Alle blicke auf Dich.",
        "targetType": "charakter",
        "targetID": "initiative",
        "value": -1
       }
      ]
     },
     {
      "wurf": 7,
      "text": "Ein Lied von Helenus Angler gespielt. Ein Zuschauer flippt aus und geht und haut dir ins Gesicht.",
      "buffs": [
       {
        "name": "Helenus Angelus",
        "targetType": "",
        "targetID": "",
        "value": ""
       }
      ]
     },
     {
      "wurf": 8,
      "text": "Heute einfach keinen Rhythmus",
      "buffs": [
       {
        "name": "Rhythmus futsch",
        "targetType": "category",
        "targetID": "all_categories",
        "value": -5
       }
      ]
     },
     {
      "wurf": 9,
      "text": "Du bist voll im Fokus und verpasst den Kampf.",
      "buffs": [
       {
        "name": "Fokus!",
        "targetType": "charakter",
        "targetID": "initiative",
        "value": -1
       }
      ]
     },
     {
      "wurf": 10,
      "text": "Der Ton ist verflucht. Alle Verbündete bekommen 2W10 Schaden",
      "buffs": [
       {
        "name": "Verfluchter Ton.",
        "targetType": "",
        "targetID": "",
        "value": ""
       }
      ]
     }
    ]
   }
  },
  "table_zechen": {
   "id": "table_zechen",
   "name": "Zechen",
   "wuerfel": "1W10",
   "art": "probe",
   "spalten": {
    "success": [
     {
      "wurf": 1,
      "text": "Angenehm angeschwippst. Volle Kontrolle"
     },
     {
      "wurf": 2,
      "text": "Lustiger Suff, +5 Soziales",
      "buffs": [
       {
        "name": "Lustig angeschwippst!",
        "targetType": "category",
        "targetID": "soziales",
        "value": 5
       }
      ]
     },
     {
      "wurf": 3,
      "text": "Mut angetrunken - + 10 Einschüchtern",
      "buffs": [
       {
        "name": "Mutiger Suff",
        "targetType": "talent",
        "targetID": "Einschüchtern",
        "value": 10
       }
      ]
     },
     {
      "wurf": 4,
      "text": "In vino veritas. Gassenwissen +10",
      "buffs": [
       {
        "name": "In vino veritas.",
        "targetType": "talent",
        "targetID": "Gassenwissen",
        "value": 10
       }
      ]
     },
     {
      "wurf": 5,
      "text": "Alkohol desinfiziert! +10 auf Zähigkeitsprobe.",
      "buffs": [
       {
        "name": "Kehle desinfiziert!",
        "targetType": "talent",
        "targetID": "Zähigkeit",
        "value": 10
       }
      ]
     },
     {
      "wurf": 6,
      "text": "Betrunken. Ich spüre kein Schmerz! Nächster Schaden wird halbiert.",
      "buffs": [
       {
        "name": "Alkohol, halber Schmerz",
        "targetType": "",
        "targetID": "",
        "value": ""
       }
      ]
     },
     {
      "wurf": 7,
      "text": "Siegesrausch! + 5 auf alle Angriffe in der ersten Runde des nächsten Kampfs",
      "buffs": [
       {
        "name": "Siegesrausch!",
        "targetType": "category",
        "targetID": "Kampf",
        "value": 5
       }
      ]
     },
     {
      "wurf": 8,
      "text": "Trinkspiel gewonnen. +1 Initiative",
      "buffs": [
       {
        "name": "Trinkspieler!",
        "targetType": "charakter",
        "targetID": "initiative",
        "value": 1
       }
      ]
     },
     {
      "wurf": 9,
      "text": "Epischer Zecher, Crew erhält + 3 auf alle Proben.",
      "buffs": [
       {
        "name": "Zecher!",
        "targetType": "category",
        "targetID": "all_categories",
        "value": 3
       }
      ]
     },
     {
      "wurf": 10,
      "text": "LEgendenstatus, erste Kampfrunde machen alle Verbündete +1W10 mehr Schaden",
      "buffs": [
       {
        "name": "Legendäres Saufgelage.",
        "targetType": "charakter",
        "targetID": "attack_value",
        "value": "1W10"
       }
      ]
     }
    ],
    "no_success": [
     {
      "wurf": 1,
      "text": "Kater - -1 auf alle Proben für den nächsten Tag.",
      "buffs": [
       {
        "name": "Verkartert.",
        "targetType": "category",
        "targetID": "all_categories",
        "value": -1
       }
      ]
     },
     {
      "wurf": 2,
      "text": "Betrunken hingefallen - 1W10 Schaden",
      "buffs": [
       {
        "name": "Hingefallen",
        "targetType": "charakter",
        "targetID": "hp",
        "value": "-1W10"
       }
      ]
     },
     {
      "wurf": 3,
      "text": "In vino veritas. Verplappert. Spielleiter bestimmt das Geheimnis.",
      "buffs": [
       {
        "name": "Dicht verplappert!",
        "targetType": "",
        "targetID": "",
        "value": ""
       }
      ]
     },
     {
      "wurf": 4,
      "text": "Jemand hat aus Versehen dein Bier genommen, die Sau! Sofortiger Kampf!",
      "buffs": [
       {
        "name": "Großschnauze!",
        "targetType": "",
        "targetID": "",
        "value": ""
       }
      ]
     },
     {
      "wurf": 5,
      "text": "Ey Mann, wo sind meine Tchambas?",
      "buffs": [
       {
        "name": "Filmriss!",
        "targetType": "charakter",
        "targetID": "gold",
        "value": "-1W100"
       }
      ]
     },
     {
      "wurf": 6,
      "text": "Vergiftung - Du startest den nächsten Tag mit Giftstufe 1W6",
      "buffs": [
       {
        "name": "Vergiftet!",
        "targetType": "charakter",
        "targetID": "gift_stufe",
        "value": "1W6"
       }
      ]
     },
     {
      "wurf": 7,
      "text": "Du reierst um dich herum! Ist das ekelig, auch für Dich. -10 auf Soziales.",
      "buffs": [
       {
        "name": "Kreisreier!",
        "targetType": "category",
        "targetID": "soziales",
        "value": -10
       }
      ]
     },
     {
      "wurf": 8,
      "text": "Im Rausch in Schenkerlaune",
      "buffs": [
       {
        "name": "Schenker via Alkohol",
        "targetType": "",
        "targetID": "",
        "value": ""
       }
      ]
     },
     {
      "wurf": 9,
      "text": "Prügelei - du startest deinen nächsten Kampf mit -10 Lebenspunkte",
      "buffs": [
       {
        "name": "verprügelt!",
        "targetType": "charakter",
        "targetID": "hp",
        "value": -10
       }
      ]
     },
     {
      "wurf": 10,
      "text": "Du landest im Gefängnis, nicht über Los. Du bist so stramm. Du kannst kaum laufen",
      "buffs": [
       {
        "name": "Hackedicht im Knast",
        "targetType": "charakter",
        "targetID": "gold",
        "value": -100
       }
      ]
     }
    ]
   }
  }
 }
});
