# Offene Fragen zum Eldara-Talentbaum

Für das Gespräch mit dem Spielleiter der Eldara-Runde. Der Talentbaum-Rebuild
(`talentbaum.js`, `hausregeln/eldora-arrrrr.js`) ist bereits mit den unten
dokumentierten *Annahmen* fertig gebaut und im Tool nutzbar — die Antworten
hier ändern höchstens Details, keine Grundarchitektur. Fundstellen sind jetzt
Seitenzahlen in RW 4.3 (`hausregeln/quellen/rw43.txt`, Stand 2026-07-22) -
ursprünglich stammten die Fragen aus RW 4.1 (`rw41.txt`), sind aber seit dem
Update unten alle nachgeprüft.

**Update RW 4.3 (2026-07-22):** Alle neun Fragen wurden gegen das neue
Regelwerk durchgeprüft. Erledigt: Frage 5 (Punktebudget, durch den PDF-Text
selbst), Frage 9 (Rüstungsstufen-Mali, durch den PDF-Text selbst - jetzt als
saubere Tabelle), der Namens-Stolperstein in Frage 1 (Heimlich/Heimlichkeit,
Voodoo Ritualklinge/Ritual Klinge - laut SL derselbe Ast, jetzt im Konverter
normalisiert), sowie Frage 2 (Skillpunkte pro Rang) und Frage 4 (Ränge einer
Eigenschaft) sowie Frage 8 (NSC-/Monster-Bäume als SL-Sonderfreigabe, "kommt
vor" - jetzt als Dropdown im Eingriff-Dialog gebaut) durch direkte
Bestätigung des SL. Frage 1s eigentliche Hauptfrage (welcher Talentwert
treibt welchen Hauptbaum) sowie die Fragen 3, 6, 7
stehen im PDF-Text selbst **wortgleich oder sinngleich zu RW 4.1** - das
neue Regelwerk klärt sie nicht von sich aus, bleiben also offen bis der SL
sie beantwortet.

Dabei sind nebenbei drei Bugs in der alten (aus einem Beispiel-Charakterbogen
übernommenen) Talentliste aufgefallen und stillschweigend behoben, keine
Ansichtssache, deshalb hier nur zur Info statt als Frage:
- „Agilität" stand als Basis-Talent auf dem Bogen (mit Beschreibung „Test")
  - existiert im Regelwerk gar nicht als Talent, nur als Talentbaum-Name
  (siehe Frage 1). Entfernt.
- „Medizin" verwies auf eine nicht existierende Würfeltabelle
  (`table_medizin`) - laut RW 4.3 S.12 gibt es nur Tabellen für Kochen,
  Musizieren und Zechen. Verweis entfernt.
- „Musizieren" und „Zechen" verwiesen auf falsch geschriebene Tabellen-IDs
  (`table_musician`, `table_saufen`) statt der tatsächlichen
  (`table_musizieren`, `table_zechen`) - der Würfeln-Knopf am Talent ist
  dadurch bisher nie aufgetaucht. Korrigiert.

Sortiert nach Wichtigkeit (die erste Frage betrifft am meisten).

---

## 1. Welcher Bogen-Talentwert treibt welchen Hauptbaum? (wichtigste Frage) - TEILWEISE ERLEDIGT (SL bestätigt 2026-09-22)

Das Regelwerk sagt: „Um Ränge freizuschalten … muss dein Attribut-Grundwert
dem entsprechenden Rang haben" (RW 4.3 S.17), nennt aber **nirgends
explizit**, welcher Talentwert das für die elf Hauptbäume (Nahkampf Klingen,
Nahkampf Fäuste, Stärke, Fernkampf, Agilität, Voodoo Ritualklinge, Voodoo
Fluchspucker, Einschüchtern, Heimlich, Medizin, Motivieren - Schreibweise
S.14) konkret ist. Die Basis-Talentliste (RW 4.3 S.8-11: Athletik, Entern,
Fernkampf, Handwerk, Heimlich, Zähigkeit, Kochen, **Nahkampf**, Reiten,
Schiffe steuern, Stärke, Wahrnehmung, **Voodoo** …) enthält **kein**
„Nahkampf Klingen" oder „Voodoo Ritualklinge" - nur die generischen Talente
„Nahkampf" und „Voodoo".

**Meine Annahme im Code** (`hausregeln/konvertiere-eldora.py`, Konstante
`BAUM_TALENT`): Die beiden Nahkampf-Bäume teilen sich das Talent „Nahkampf",
die beiden Voodoo-Bäume teilen sich „Voodoo", die übrigen sieben sind 1:1
(Stärke→Stärke, Fernkampf→Fernkampf, Einschüchtern→Einschüchtern,
Heimlich→Heimlich, Medizin→Medizin, Motivieren→Motivieren).

**SL bestätigt (Discord, 2026-09-22, JohoSaft): „Agilität muss bei den drei
Talentebäumen in Athletik umgewandelt werden."** - der Hauptbaum „Agilität"
wird also nicht vom (nicht existierenden) Basis-Talent „Agilität" getrieben,
sondern vom echten Basis-Talent „Athletik" (S.8, in der Kategorie Handeln).
Umgesetzt: `BAUM_TALENT['Agilität'] = 'Athletik'`, `eldora-arrrrr.js` neu
generiert.

**Noch offen:** Die übrigen zehn Zuordnungen (v.a. die geteilten Nahkampf-/
Voodoo-Paare) sind weiterhin unbestätigte Annahme, nur die Agilität-Zeile
ist jetzt vom SL selbst korrigiert worden.

**Namens-Stolperstein seit RW 4.3 — ERLEDIGT (SL bestätigt):** Der exportierte
Talentbaum der Gruppe (`quellen/eldora-arrrrr.roh.json`, 562 Skills) benannte
zwei Äste noch „Heimlichkeit" und „Voodoo Ritual Klinge" (mit Leerzeichen),
während RW 4.3 S.14 „Heimlich" und „Voodoo Ritualklinge" schreibt. Laut SL
**nur eine Schreibweisen-Auffrischung, derselbe Ast** - kein neuer/separater
Baum. `konvertiere-eldora.py` normalisiert das jetzt selbst beim Einlesen
(Konstante `AST_SCHREIBWEISE_RW43`), damit überall im Tool die aktuelle
RW-4.3-Schreibweise steht, ohne die 14+14 Skills der beiden Äste zu
verlieren.

---

## 2. "2 Skillpunkte auf dem Rang darunter verteilt" - wie genau gezählt? — ERLEDIGT (SL bestätigt), KORRIGIERT 2026-09-21

RW 4.1 und RW 4.3 (S.17) sagen wortgleich: „muss dein Attribut-Grundwert dem
entsprechenden Rang haben, und du musst mindestens 2 Skillpunkte auf dem Rang
darunter verteilt haben." Der PDF-Text selbst klärt die genaue Zählweise
nicht - die erste SL-Antwort dazu war **„Du musst pro Rang 2 Skillpunkte
ausgeben."**, was zunächst als "genau 2 SP am jeweiligen Vor-Rang, nicht
kumulativ" umgesetzt wurde, UND das erste Level eines Skills kostete einen
Rangpunkt statt eines Skillpunkts.

**Bug-Report von JohoSaft (Discord, 2026-09-21) - beide Annahmen falsch:**
1. Rangpunkte werden nie zum Freischalten von Skills gebraucht, nur für
   Besondere Eigenschaften - jedes Skill-Level (auch das erste) kostet einen
   Skillpunkt.
2. Der Rang-Aufstieg braucht **kumulativ** `2 × (Zielrang - 1)` Skillpunkte
   im ganzen Ast, verteilt auf beliebige Skills egal welchen Rangs (nicht nur
   auf den Vor-Rang beschränkt): Rang 1→2 = 2 SP, 2→3 = 4 SP, 3→4 = 6 SP
   insgesamt. Beispiel aus dem Report: für den Sprung von Rang 3 auf 4 dürfen
   auch zwei Rang-1-Skills auf Level 3 gebracht worden sein (2 × 3 SP = 6),
   statt zwingend in Rang-3-Skills investieren zu müssen.

**Umgesetzt:** `tbAstOekonomie()` zählt jetzt jedes Level voll als Skillpunkt
(nicht mehr `level - 1`), `tbGesamtOekonomie()` zieht keine Rangpunkte mehr
für gelernte Skills ab (nur noch für `eigenschaften`), und
`tbRangFreigeschaltet()` prüft kumulative Skillpunkte über den ganzen Ast
gegen `benoetigt * (rang - 1)` (`talentbaum.js`, `freischaltung: {modus:
'vorRang', benoetigt: 2}` bleibt als Konfiguration bestehen, nur die Prüfung
dahinter wurde korrigiert). Am Datenmodell/an `appData.hausregeln.gelernt`
ändert sich nichts - reine Auswertungslogik.

---

## 3. Eigenschaften: zählt Wesen als "Talentbaum" bei der Freischaltung?

*Gegen RW 4.3 (S.18) geprüft: Text unverändert zu RW 4.1, Frage bleibt offen.*

RW 4.3 S.18: Eine Eigenschaft von Rang R braucht „mindestens zwei
Talentbäumen den gleichen Rang erreicht". Beim Rangpunkte-Absatz eine Zeile
vorher steht explizit „einer der **drei** Talentbäume" (Wesen ausdrücklich
ausgenommen) - hier bei den Eigenschaften fehlt das Wort "drei".

**Meine Annahme:** Hier zählt der Wesen-Ast mit (bis zu vier Bäume insgesamt
für diese Prüfung), weil das Wort "drei" hier bewusst weggelassen wurde.

**Frage an den SL:** Korrekt, oder soll auch hier nur unter den drei
Hauptbäumen gezählt werden?

---

## 4. Eigenschaften mit mehreren Werten (z.B. "10/15/20 %") - wie oft wählbar? — ERLEDIGT (SL bestätigt)

Die Eigenschaften-Tabelle (RW 4.3 S.18f) zeigt viele Einträge mit
Schrägstrich-Werten wie "Fluchtreflex: 10/15/20 %" oder "Langes Leben:
+20/40/60/80/100 HP" - keine "St1/St2/St3"-Notation wie bei den Skills, der
PDF-Text selbst klärt die Zählweise nicht. Antwort kam direkt vom SL:
**„Das sind auch Ränge der Eigenschaften"** - die Schrägstrich-Werte sind
also, genau wie St1/St2/St3 bei Skills, eigene Ränge/Stufen derselben
Eigenschaft, kein Satz unabhängiger Einzel-Picks.

**Umgesetzt (unverändert, schon vorher richtig):** Jede Zahl ist ein
eigener, sequenzieller Pick derselben Eigenschaft (z.B. "Langes Leben"
viermal wählbar, jedes Mal +1 Rangpunkt, nächste Zahl in der Reihe - nicht
überspringbar). Bei Eigenschaften mit nur einem Wert (z.B. "Unbrennbar":
„Jede Runde verlierst du automatisch 1 Feuermarke") ist entsprechend nur ein
Pick möglich. Das entspricht genau der SL-Antwort, `talentbaum.js`
(`tbEigenschaftWaehlen`) bleibt wie es ist.

---

## 5. Budget: 400 oder 500 Talentpunkte? — ERLEDIGT (RW 4.3)

Regelwerk RW 4.1 (Zeile ~248) und jetzt RW 4.3 (S.6 **und** S.8, zwei
unabhängige Stellen): „Verteilt 400 Punkte auf die Talente der drei
Gruppen." Die von der Gruppe gelieferten Beispiel-Charakterdaten
(`eldora-arrrrr.roh.json`) hatten `max_talent_points: 500` - das war
offenbar nur der Stand eines einzelnen Beispiel-Charakters, nicht die Regel.

**Umgesetzt:** Das Tool nutzt jetzt fest **400** (`PUNKTE.maxTalentpunkte`
in `konvertiere-eldora.py`), unabhängig davon, was in der Rohdatei steht.
Falls die Runde tatsächlich mit 500 spielt, bitte Bescheid geben.

---

## 6. Monsterpunkte: feste Menge pro Vergabe, Obergrenze, Rückgang?

*Gegen RW 4.3 (S.17) geprüft: Text unverändert zu RW 4.1, Frage bleibt offen.*

RW 4.3 S.17: „Stattdessen vergibt der Spielleiter Monsterpunkte, wenn der
Charakter seine dunkle Natur erforscht, ein uraltes Ritual überlebt oder
einen gewaltigen Gegner bezwingt." Keine Angabe, wie viele Punkte pro
Ereignis, ob sie je wieder sinken, oder ob es eine Obergrenze unter 99 gibt.

**Meine Umsetzung:** Der SL kann im Eingriff-Dialog eine beliebige Zahl
(positiv oder negativ) eingeben, gedeckelt auf 0-99 (wie ein normaler
Talentwert).

**Frage an den SL:** Passt das so, oder sollen Monsterpunkte in festen
Schritten (z.B. immer +1) vergeben werden?

---

## 7. Kreuz-Leveln: Summe oder Maximum?

*Gegen RW 4.3 (S.17) geprüft: Text unverändert zu RW 4.1 (nahezu wortgleiches
Beispiel), Frage bleibt offen.*

RW 4.3 S.17: „Habt ihr einen Skill doppelt, könnt ihr ihn auch kreuz leveln.
(z.B. Habt ihr Nahkampf und Stärke, könnt ihr auch Spott auf LvL2 bekommen,
indem ihr den Skill in den beiden Talentbäumen jeweils einmal levelt.)"

**Meine Umsetzung:** Effektives Level = Summe der Käufe in allen Ästen, in
denen der Skill gelernt wurde (im Beispiel: 1 + 1 = effektiv Level 2) -
gedeckelt auf das Maximum des Skills (meist 3).

**Frage an den SL:** Das Beispiel legt Summe nahe und passt zu meiner
Umsetzung - nur zur Bestätigung, falls es doch anders gemeint war.

---

## 8. NSC-/Monster-Talentbäume für Spieler (Ausnahmefall)? — ERLEDIGT (SL bestätigt, jetzt gebaut)

RW 4.3 S.15: „Wollt ihr einen Talentbaum aus diesem Bereich [Werwolf, Vampir,
Zombie, …], kontaktiert bitte den Spielleiter." Das klang, als könnte ein
Spieler in Ausnahmefällen doch Zugriff auf einen der 19 NSC/Monster-Bäume
bekommen (mit SL-Erlaubnis) statt sie kategorisch auszuschließen.

**SL bestätigt:** „Ja, der SL vergibt sowas." Kommt also in der Praxis vor.

**Umgesetzt:** Neuer Abschnitt „Sonderfreigabe: Talentbaum" im Eingriff-
Dialog (`eingriff.js`) - der SL wählt dort einen der 19 NSC-/Monster-Äste
und schaltet ihn für genau diesen einen Spieler frei
(`appData.hausregeln.sonderAst`). Der freigeschaltete Ast taucht dann bei
diesem Spieler als zusätzliche Option im Wesen-Dropdown auf (markiert mit
⭐, siehe `talentbaum.js`), ganz normal spielbar wie jedes andere Wesen. Ein
✕-Knopf im Eingriff-Dialog nimmt die Freigabe wieder zurück; hatte der
Spieler den Sonderbaum bereits als Wesen gewählt, wird das dabei
automatisch zurückgesetzt.

---

## 9. Rüstungsstufen-Mali (Bewegung/Handeln/Heimlichkeit) — ERLEDIGT UND UMGESETZT (zwischenstand.docx hat Vorrang)

Drei Fassungen dieser Tabelle sind mittlerweile aufgetaucht und haben sich
teils widersprochen - siehe Historie unten. **Vorrang-Regel vom SL
(2026-09-26): was im `zwischenstand.docx` steht, ersetzt die älteren
Regelwerks-Infos, soweit dort eindeutig genug formuliert.** Für diese Tabelle
ist das der Fall - `zwischenstand.docx` (Kapitel "Ausrüstung") nennt:

```
Stufe    Bewegung   Handeln   Heimlichkeit
Leicht   -1m        –         -10
Mittel   -1m        -5        -15
Schwer   -2m        -10       -15
```

(Ungepanzert: keine Mali. Gilt für getragene Rüstung, nicht für
Schiffspanzerung.)

Das weicht bei "Schwer" von der älteren RW-4.3-Lesart ab (dort -7 Handeln /
-20 Heimlichkeit statt -10 / -15) - laut Vorrang-Regel gelten jetzt die Werte
aus `zwischenstand.docx`.

**Umgesetzt:** `IR_RUESTUNGSSTUFE_MALI` in `inventarraster.js` - als Hinweis
unter den Rüstungsteilen angezeigt (genau wie der bestehende
Rucksack-Platz-Malus und der Zusatztaschen-Handeln-Malus), NICHT automatisch
in Würfe eingerechnet - dafür bleibt kein eigener Bogen-Wert "Bewegung"
nötig, nur eine Info-Zeile.

<details>
<summary>Ältere Fassungen, nur zur Historie</summary>

RW 4.3 (S.27):
```
Status         Rüstungswert   Bewegung   Handeln   Heimlichkeit
Ungepanzert    0              –          –         –
Leicht         1–10           -1m        –         -10
Mittel         11–20          -1m        -5        -15
Schwer         21+            -2m        -7        -20
```

Alte RW-4.1-Extraktion (`rw41.txt`, durch PDF→Text zerrissen, eine Zeile
nicht sicher zuzuordnen):
```
Status         Rüstungswert  Bewegung  Handeln  Heimlichkeit
Ungepanzert    0             -1m       –        -10
                              -1m       -5       -15
Leicht         1–10          -2m       -7       -20
Mittel         11–20
Schwer         21+
```
</details>

---

## 10. zwischenstand.docx (SL-Überarbeitung 2026-09): Besondere Eigenschaften komplett ersetzt — UMGESETZT

Der SL hat mit `zwischenstand.docx` eine neue Fassung der 22 „Besonderen
Eigenschaften" geliefert, die die alte RW-4.1/4.3-Tabelle (20 Einträge)
ersetzt - nicht nur neue Werte, auch andere Ränge und teils andere Wirkungen
(z.B. „Guter Esser"/„Ruhiger Schlaf"/„Koordination" entfallen, dafür
„Adrenalin", „Guter Patient", „Hartnäckig", „Unsterblich", „Meister Magus"
neu; „Instinktive Parade" und „Unbrennbar"/„Ledrige Haut" wechseln den Rang).

**Umgesetzt:** `EIGENSCHAFTEN` in `konvertiere-eldora.py` komplett aus dem
Dokument neu geschrieben, `eldora-arrrrr.js` neu generiert.

**Vorrang-Regel vom SL (2026-09-26):** was im `zwischenstand.docx` steht, wird
neue Regel und ersetzt ältere Regelwerks-Infos, soweit dort eindeutig genug
formuliert. Damit sind zwei der vier ursprünglich offenen Punkte geklärt:

1. „Krieger" (RW, Rang 2: „+1 Attacke pro Angriffsaktion") kommt in
   `zwischenstand.docx` nicht mehr vor. **Geklärt per Vorrang-Regel:** die
   neue Eigenschaften-Tabelle ist eine vollständige Ersatz-Liste, „Krieger"
   ist damit ersatzlos gestrichen (die neue Eigenschaft „Kämpfer" auf Rang 1
   ist trotz ähnlichem Namen keine Umbenennung, sondern ein eigener Effekt -
   Initiative statt Extra-Attacke). Keine weitere Aktion nötig.
2. „Schwer": Handeln/Heimlichkeit-Mali - **geklärt per Vorrang-Regel, siehe
   Frage 9 oben:** `zwischenstand.docx` (-10/-15) gilt, RW 4.3 (-7/-20) ist
   überholt. Umgesetzt.

**Weiterhin offen, weil `zwischenstand.docx` dazu keine eindeutige Aussage
trifft (die Vorrang-Regel greift nur, wo dort tatsächlich etwas steht):**

3. Zweihandwaffen sind laut `zwischenstand.docx` 2,5 Felder groß - der
   Größenkatalog im Rasterinventar kennt aktuell nur 0,5/1/2/3
   (`inventarraster.js`, `IR_GROESSEN_KATALOG`), noch nicht ergänzt. Kein
   Widerspruch zu einer älteren Regel, nur eine fehlende Katalog-Stufe.
4. Der 0-HP-Rettungswurf in `zwischenstand.docx` nennt weder die
   Eskalations-Erschwernis (+10 pro weiterem Versuch am Tag) noch einen Stun
   bei Erfolg - beides macht der Code aktuell (`kampf.js`,
   `kampfRettungswurfWuerfeln`). Da `zwischenstand.docx` dazu schweigt statt
   etwas anderes zu sagen, bleibt die bestehende Mechanik nach der
   Vorrang-Regel vorerst unangetastet (Schweigen ersetzt keine bestehende
   Regel) - trotzdem zur Sicherheit beim SL nachfragen, ob das bewusst
   vereinfacht wurde.

---

## 11. zwischenstand.docx: Gürtel-Struktur geändert — UMGESETZT

Bisher: Gürtel = 6 gemeinsame Plätze + eigene Zone „Gürtelbeutel" (2 Plätze).
`zwischenstand.docx` beschreibt stattdessen: Gürtel = 5 Plätze für normale
Sachen **plus 2 eigene, waffen-exklusive Plätze** („2 Waffen, egal welche
Größe") - keine Gürtelbeutel-Zone mehr.

**Umgesetzt:** `inventarraster.js` - Zone `guertelbeutel` entfernt, `guertel`
auf 5 Plätze reduziert, neue Zone `guertel_waffen` (2 Plätze, `nurWaffen:
true`) ergänzt; Waffen kosten dort immer 1 Platz unabhängig von `irGroesse`
(`irGroesseInZone`/`irZonePasstFuerItem`). Bereits im Raster liegende Items
aus der alten Gürtelbeutel-Zone werden beim nächsten Render automatisch neu
einsortiert (kein Datenverlust, gleicher Mechanismus wie beim Entfernen einer
Zusatztasche).

---

*Nach der Klärung: Antworten in dieses Dokument eintragen oder mir schicken,
dann ziehe ich `hausregeln/konvertiere-eldora.py` und `talentbaum.js`
entsprechend nach.*
