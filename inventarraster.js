// How to be a Hero - Rasterinventar (Eldara-Hausregel)
//
// Bildet das Eldara-Inventarsystem ab (Stand zwischenstand.docx, SL-Über-
// arbeitung 2026-09, Kapitel "Inventar & Rucksack"):
//
//   Gürtel        5 Plätze für normale Sachen + 2 eigene Waffen-Plätze (siehe
//                 unten - Waffen belegen dort immer nur 1 Platz, egal welche
//                 Größe sie sonst hätte)
//   Rucksack      12 Plätze (Standard), -1 bei mittlerer, -2 bei schwerer Rüstung
//   Zusatztasche  optional, bis zu 3 gleichzeitig: klein = +3 Plätze/-3 Handeln,
//                 groß = +5 Plätze/-5 Handeln, solange getragen
//
// Gegenstände belegen laut Größentabelle 0,5 / 1 / 2 / 3 Plätze - hier
// aufgerundet auf 1 / 1 / 2 / 3 Raster-Zellen (0,5-Gegenstände wie Dolche
// müssten sich eigentlich zu zweit einen Platz teilen; das ist NICHT
// nachgebaut, siehe Einschränkungen unten).
//
// EINSCHRÄNKUNGEN gegenüber dem Regelwerk (bewusst, nicht vergessen):
// - 0,5-Gegenstände (Dolch, Trank, Voodoo-Puppe) belegen hier volle 1 Zelle
//   statt sich zu zweit einen Platz zu teilen - eine Vereinfachung, kein
//   Bug. Die "Zwei X = 1 Slot"-Regel ist nicht umgesetzt.
// - Zweihandwaffen sind laut zwischenstand.docx 2,5 Plätze groß - der
//   Größenkatalog kennt aktuell nur 0,5/1/2/3, das ist NICHT nachgebaut
//   (siehe hausregeln/OFFENE_FRAGEN.md).
// - Der Handeln-Malus durch Zusatztaschen wird nur als Hinweis angezeigt,
//   nicht automatisch in Würfe eingerechnet - dafür das normale
//   Bonus/Malus-Feld beim Würfeln nutzen.
//
// Waffen: appData.weapons (das klassische, immer sichtbare Waffen-Panel) und
// dieses Raster sind bei aktivem Eldara-Paket EIN Bestand, nicht zwei. Wird
// Eldara aktiviert, wandern bestehende Waffen automatisch als Raster-Einträge
// mit `istWaffe: true` + `schaden` rüber (irWaffenNachRasterMigrieren, Standard-
// größe 2 Felder, vom Spieler danach änderbar); das klassische Panel wird
// ausgeblendet (siehe renderInventory() in app.js). Wird Eldara wieder
// deaktiviert, wandern Waffen-Einträge automatisch zurück
// (irWaffenAusRasterMigrieren) und das klassische Panel erscheint wieder.
// Passt eine Waffe beim Aktivieren mangels Platz nicht ins Raster, bleibt sie
// vorerst im klassischen Bestand (appData.weapons) und eine Warnung erscheint.
//
// Datenmodell: appData.inventory bleibt die Quelle für Item-Daten (Name,
// Menge, Beschreibung) - neu ist `irGroesse` (0.5, 1, 2 oder 3, siehe
// IR_GROESSEN_KATALOG), `istWaffe`+`schaden` sowie `irAusruestungsslot`+
// `irRuestungswert` (siehe IR_AUSRUESTUNG_SLOTS). appData.inventarRaster ist
// die Platzierung: { "<zone>_<index>": { itemId } | { itemId, cont: true } |
// null }. appData.eldaraZusatztaschen (Array aus 'klein'|'gross', max. 3
// Einträge) steuert zusätzlich, welche Zonen mit wie vielen Plätzen existieren.
//
// Rüstung (siehe IR_AUSRUESTUNG_SLOTS, zwischenstand.docx): sieben
// Ausrüstungsplätze (Kopf, Schulter/Hals, Brust, Hände, Beine, Füße, 3x
// Schmuck) - kein Material-Dropdown mehr wie früher, stattdessen wird ein
// passendes Item aus Gürtel/Rucksack auf den Platz gezogen (genau wie eine
// Waffe an den Gürtel-Waffenplatz). Jedes Item bringt seinen eigenen
// Rüstungswert mit (freies Zahlenfeld, keine Nachschlagetabelle - Ausrüstung
// ist hier frei erfunden/benannt). Die Summe aller getragenen Werte ergibt
// die Rüstungsstufe (Ungepanzert 0 / Leicht 1-10 / Mittel 11-20 / Schwer
// 21+), die wie bisher den Rucksack verkleinert (-1 Mittel, -2 Schwer). Die
// zusätzlichen Bewegungs-/Handeln-/Heimlichkeit-Mali pro Stufe (siehe
// IR_RUESTUNGSSTUFE_MALI) sind seit zwischenstand.docx eindeutig - als
// Hinweis angezeigt, aber NICHT automatisch in Würfe eingerechnet (siehe
// hausregeln/OFFENE_FRAGEN.md Punkt 10).

const IR_GROESSEN_KATALOG = [
    { wert: 0.5, label: 'Klein (0,5)', beispiel: 'Dolch, Trank, Fläschchen' },
    { wert: 1, label: 'Normal (1)', beispiel: 'Fackel, Seil, Rationen, Pistole' },
    { wert: 2, label: 'Groß (2)', beispiel: 'Säbel, Muskete, Zauberbuch' },
    { wert: 3, label: 'Sehr groß (3)', beispiel: 'Zweihandwaffe, Münztruhe' }
];

const IR_ZUSATZTASCHE_MAX = 3;
const IR_ZUSATZTASCHE_DATEN = { klein: { breite: 3, malus: 3, label: 'Klein' }, gross: { breite: 5, malus: 5, label: 'Groß' } };

// Ausrüstungsplätze (zwischenstand.docx, SL-Überarbeitung 2026-09 - ersetzt
// die alte 6-Platz-Lösung mit Material-Dropdown vollständig): statt aus einer
// festen Leder/Kette/Platte-Tabelle zu wählen, wird jetzt ein echtes Item aus
// dem Rasterinventar auf den passenden Platz gezogen (wie die Gürtel-
// Waffenplätze, nur mit sieben verschiedenen "nur dieser Typ passt"-Zonen
// statt einer). Jedes Item trägt seinen Rüstungswert selbst (Feld
// `irRuestungswert`, freie Zahl statt Nachschlagetabelle - Ausrüstung ist
// hier frei erfunden/benannt, genau wie der Schaden einer Waffe).
const IR_AUSRUESTUNG_SLOTS = {
    kopf: { label: 'Kopf', anzahl: 1, beispiele: 'Helm, Hut, Maske, Augenklappe' },
    schulterhals: { label: 'Schulter/Hals', anzahl: 1, beispiele: 'Schulterpanzer, Umhang, Mantel' },
    brust: { label: 'Brust', anzahl: 1, beispiele: 'Brustpanzer, Kleidung' },
    haende: { label: 'Hände', anzahl: 1, beispiele: 'Handschuhe, Armschienen, Haken' },
    beine: { label: 'Beine', anzahl: 1, beispiele: 'Beinschutz, Hosen' },
    fuesse: { label: 'Füße', anzahl: 1, beispiele: 'Schuhe, Stiefel' },
    schmuck: { label: 'Schmuck', anzahl: 3, beispiele: 'Ringe, Amulette, Broschen, Piercings' }
};
const IR_RUESTUNGSSTUFE_LABEL = { ungepanzert: 'Ungepanzert', leicht: 'Leicht', mittel: 'Mittel', schwer: 'Schwer' };

// Bewegungs-/Handeln-/Heimlichkeit-Mali je Rüstungsstufe (zwischenstand.docx,
// SL-Überarbeitung 2026-09 - ersetzt die älteren, widersprüchlichen RW-4.3-
// Werte für "Schwer", siehe hausregeln/OFFENE_FRAGEN.md Punkt 10). Rein
// informativer Hinweis wie beim Zusatztaschen-Malus - wird nicht automatisch
// in Würfe eingerechnet.
const IR_RUESTUNGSSTUFE_MALI = {
    ungepanzert: { bewegung: 0, handeln: 0, heimlichkeit: 0 },
    leicht: { bewegung: -1, handeln: 0, heimlichkeit: -10 },
    mittel: { bewegung: -1, handeln: -5, heimlichkeit: -15 },
    schwer: { bewegung: -2, handeln: -10, heimlichkeit: -15 }
};

// --- Katalog aus dem Regelwerk (RW4.3) fürs Item-Formular ------------------
//
// Nutzt dieselbe Datenquelle wie Tischmitte/Zufallsgenerator
// (randomizerPaketeGeladen.eldora.tabellen, siehe randomizer/eldora.js) statt
// die ~136 Items hier nochmal zu duplizieren. Vor allem für Spieler gedacht,
// die von einem Papierbogen umsteigen und ihr bestehendes Inventar schnell
// nachbauen wollen - ersetzt die freie Eingabe NICHT, ist nur eine Abkürzung.
//
// "Magische Gegenstände" tragen im Katalog ihre Art als Kategorie-Text
// (z.B. "Schuhe", "Amulett", "Säbel") statt als Slot/Waffen-Flag - hier auf
// unser Datenmodell übersetzt (irAusruestungsslot bzw. istWaffe), damit z.B.
// Schuhe wirklich automatisch auf den Füße-Slot vorausgewählt werden und
// nicht als loses, nirgends anziehbares Item im Rucksack landen.
let irKatalogGeladen = false;

const IR_KATALOG_KATEGORIE_SLOT = {
    'Kopfbedeckung': 'kopf',
    'Mantel': 'schulterhals',
    'Oberteil': 'brust',
    'Handschuhe': 'haende',
    'Schuhe': 'fuesse',
    'Amulett': 'schmuck',
    'Schmuck': 'schmuck',
    'Talisman': 'schmuck'
};
const IR_KATALOG_KATEGORIE_WAFFE = new Set([
    'Axt', 'Bombe', 'Dolch', 'Faustwaffe', 'Kanone', 'Muskete', 'Pistole',
    'Schusswaffe', 'Stab', 'Stock', 'Säbel', 'Zweihandwaffe'
]);
const IR_KATALOG_GRUPPEN = [
    { key: 'waffen_shop', label: 'Waffen' },
    { key: 'gegenstaende_magisch', label: 'Magische Gegenstände' },
    { key: 'herstellbare_gegenstaende', label: 'Herstellbare Gegenstände' },
    { key: 'handelswaren', label: 'Handelswaren' }
];

function irKatalogTabellen() {
    const p = typeof randomizerPaketeGeladen !== 'undefined' ? randomizerPaketeGeladen.eldora : null;
    return (p && p.tabellen) || null;
}

function irKatalogHtml() {
    const t = irKatalogTabellen();
    if (!t) return '';
    const optionen = IR_KATALOG_GRUPPEN.map(g => {
        const eintraege = (t[g.key] && t[g.key].eintraege) || [];
        if (!eintraege.length) return '';
        return `<optgroup label="${escapeHtml(g.label)}">${eintraege.map((e, i) =>
            `<option value="${g.key}::${i}">${escapeHtml(e.haupt)}${e.neben ? ' – ' + escapeHtml(e.neben) : ''}</option>`
        ).join('')}</optgroup>`;
    }).join('');
    if (!optionen) return '';
    return `<select id="ir-neu-katalog" class="ir-input" title="Übernimmt Name (und Waffe/Schaden bzw. passenden Ausrüstungsplatz) aus dem Regelwerk" onchange="irKatalogAuswaehlen(this.value)">
        <option value="">📖 Aus Regelwerk wählen …</option>
        ${optionen}
    </select>`;
}

function irKatalogAuswaehlen(wert) {
    if (!wert) return;
    const [gruppenKey, indexStr] = wert.split('::');
    const t = irKatalogTabellen();
    const eintrag = t && t[gruppenKey] && t[gruppenKey].eintraege[parseInt(indexStr, 10)];
    if (!eintrag) return;

    const nameEl = document.getElementById('ir-neu-name');
    const descEl = document.getElementById('ir-neu-desc');
    const istWaffeEl = document.getElementById('ir-neu-istwaffe');
    const schadenEl = document.getElementById('ir-neu-schaden');
    const ausrEl = document.getElementById('ir-neu-ausruestung');
    const ruestungswertEl = document.getElementById('ir-neu-ruestungswert');
    if (!nameEl) return;

    nameEl.value = eintrag.haupt || '';
    if (descEl) descEl.value = '';
    if (schadenEl) schadenEl.value = '';
    if (ruestungswertEl) ruestungswertEl.value = '';
    // Erst zurücksetzen (inkl. change-Event, das die Schaden-/Rüstungswert-
    // Felder ein-/ausblendet - siehe die Listener direkt nach dem
    // box.innerHTML-Aufbau in renderInventarRaster), dann ggf. neu setzen.
    if (istWaffeEl) { istWaffeEl.checked = false; istWaffeEl.dispatchEvent(new Event('change')); }
    if (ausrEl) { ausrEl.value = ''; ausrEl.dispatchEvent(new Event('change')); }

    if (gruppenKey === 'waffen_shop') {
        if (istWaffeEl) { istWaffeEl.checked = true; istWaffeEl.dispatchEvent(new Event('change')); }
        if (schadenEl) schadenEl.value = eintrag.neben || '';
    } else if (gruppenKey === 'gegenstaende_magisch') {
        const kategorie = eintrag.neben || '';
        if (descEl) descEl.value = kategorie;
        if (IR_KATALOG_KATEGORIE_WAFFE.has(kategorie)) {
            if (istWaffeEl) { istWaffeEl.checked = true; istWaffeEl.dispatchEvent(new Event('change')); }
        } else if (IR_KATALOG_KATEGORIE_SLOT[kategorie] && ausrEl) {
            ausrEl.value = IR_KATALOG_KATEGORIE_SLOT[kategorie];
            ausrEl.dispatchEvent(new Event('change'));
        }
    } else {
        // herstellbare_gegenstaende / handelswaren: "neben" ist Effekt/Preis-Info
        if (descEl) descEl.value = eintrag.neben || '';
    }
    nameEl.focus();
}

// --- Rüstung (getragene Ausrüstung, jetzt als Raster-Zonen) ----------------

// Eine Zone pro Ausrüstungsplatz-Typ (Schmuck mit breite:3, alle anderen mit
// breite:1) - dieselbe Bauart wie die Gürtel-Waffenplätze, nur mit sieben
// verschiedenen "nur dieser Typ passt"-Zonen statt einer gemeinsamen.
function irAusruestungsZonen() {
    return Object.keys(IR_AUSRUESTUNG_SLOTS).map(typ => {
        const info = IR_AUSRUESTUNG_SLOTS[typ];
        return { id: 'ausr_' + typ, titel: info.label, breite: info.anzahl, deaktiviert: 0, nurAusruestung: typ };
    });
}

// Aktuell in den Ausrüstungszonen getragene Items, über das normale
// Rasterinventar-Placement ermittelt - es gibt keine separate
// appData.eldaraRuestungsteile mehr, die Zuordnung Item<->Platz steckt
// bereits vollständig in appData.inventarRaster wie bei jedem anderen Slot.
function irAusgeruesteteItems(kontext) {
    const daten = kontext || appData;
    const raster = (daten.inventarRaster && typeof daten.inventarRaster === 'object') ? daten.inventarRaster : {};
    const itemsById = {};
    (daten.inventory || []).forEach(i => { itemsById[i.id] = i; });
    const ergebnis = [];
    irAusruestungsZonen().forEach(zone => {
        for (let i = 0; i < zone.breite; i++) {
            const belegung = raster[zone.id + '_' + i];
            const item = belegung && !belegung.cont ? itemsById[belegung.itemId] : null;
            if (item) ergebnis.push(item);
        }
    });
    return ergebnis;
}

// Summe aller getragenen Rüstungswerte (bestimmt die Stufe) - jedes Item
// bringt seinen eigenen Wert mit (Feld irRuestungswert), keine Tabelle mehr.
function irRuestungswert(kontext) {
    return irAusgeruesteteItems(kontext).reduce((summe, item) => summe + (Number(item.irRuestungswert) || 0), 0);
}

function irRuestungsstufe(wert) {
    if (wert >= 21) return 'schwer';
    if (wert >= 11) return 'mittel';
    if (wert >= 1) return 'leicht';
    return 'ungepanzert';
}

// --- Zonen (hängen von Rüstung/Zusatztaschen ab, darum als Funktion statt Konstante) ---

// kontext = appData eines Spielers (Standard: der eigene). Für den Schiffs-
// Kapazitätscheck (schiffsinventar.js) wird hier der fremde Bogen-Stand
// durchgereicht, damit die Zonen des ANFRAGENDEN Spielers gelten, nicht die
// eigenen des SL.
function irZonenDefinition(kontext) {
    const daten = kontext || appData;
    const stufe = irRuestungsstufe(irRuestungswert(daten));
    const ruestungsMalus = stufe === 'schwer' ? 2 : (stufe === 'mittel' ? 1 : 0);
    const zonen = [
        { id: 'guertel', titel: 'Gürtel', breite: 5, deaktiviert: 0 },
        { id: 'guertel_waffen', titel: 'Gürtel (Waffen)', breite: 2, deaktiviert: 0, nurWaffen: true }
    ].concat(irAusruestungsZonen(), [
        { id: 'rucksack', titel: 'Rucksack', breite: 12, deaktiviert: ruestungsMalus }
    ]);
    (daten.eldaraZusatztaschen || []).forEach((art, i) => {
        const info = IR_ZUSATZTASCHE_DATEN[art] || IR_ZUSATZTASCHE_DATEN.klein;
        zonen.push({ id: 'zusatz' + i, titel: `Zusatztasche (${info.label})`, breite: info.breite, deaktiviert: 0, zusatzIndex: i, zusatzArt: art });
    });
    return zonen;
}

function irAlleSlots(kontext) {
    const slots = [];
    irZonenDefinition(kontext).forEach(zone => {
        const nutzbar = Math.max(0, zone.breite - (zone.deaktiviert || 0));
        for (let i = 0; i < nutzbar; i++) slots.push(zone.id + '_' + i);
    });
    return slots;
}

function irZoneUndIndex(slot) {
    const i = slot.lastIndexOf('_');
    return { zoneId: slot.slice(0, i), index: parseInt(slot.slice(i + 1), 10) };
}

function irZoneVonSlot(slot, kontext) {
    const { zoneId } = irZoneUndIndex(slot);
    return irZonenDefinition(kontext).find(z => z.id === zoneId) || null;
}

// Automatisches Einsortieren (neues Item, Tischmitte/Kiste/Schiff-Empfang,
// Größenänderung) soll zuerst den Rucksack (+ Zusatztaschen) füllen, der
// Gürtel ist nur noch der letzte Ausweg, wenn dort nichts mehr passt - vorher
// ging automatisch alles zuerst in den Gürtel, weil der einfach zuerst in der
// Zonen-Liste stand (SL-Wunsch: Rucksack zuerst). Waffen bekommen weiterhin
// bevorzugt ihre 2 dedizierten Gürtel-Waffenplätze (dort kostet die Waffe nur
// 1 Feld statt ihrer echten Größe) - das ist eine eigene, bewusste Ausnahme,
// noch vor dem Rucksack. Ausrüstungsplätze (Kopf/Schulter.../Schmuck) fallen
// beim Auto-Einsortieren komplett raus - die bleiben bewusst Ziehen-only
// (siehe irItemHinzufuegen), sonst würde ein neu angelegtes Ausrüstungsstück
// sich sofort selbst anziehen.
function irReihenfolgeFuer(item, kontext) {
    const prioritaet = zone => {
        if (!zone) return 3;
        if (zone.nurWaffen) return (item && item.istWaffe) ? 0 : 3;
        if (zone.id === 'rucksack' || zone.zusatzIndex !== undefined) return 1;
        if (zone.id === 'guertel') return 2;
        return 3;
    };
    return irAlleSlots(kontext)
        .filter(slot => !(irZoneVonSlot(slot, kontext) || {}).nurAusruestung)
        .sort((a, b) => prioritaet(irZoneVonSlot(a, kontext)) - prioritaet(irZoneVonSlot(b, kontext)));
}

// Die beiden Gürtel-Waffenplätze (S.25f) sind waffen-exklusiv, die sieben
// Ausrüstungsplätze jeweils auf ihren eigenen Typ beschränkt (Kopf, Schulter/
// Hals, Brust, Hände, Beine, Füße, Schmuck - Feld irAusruestungsslot am
// Item) - dafür kostet dort jedes passende Item immer nur 1 Platz,
// unabhängig von seiner sonstigen Größe (siehe irGroesseInZone).
function irZonePasstFuerItem(zone, item) {
    if (!zone) return true;
    if (zone.nurWaffen) return !!(item && item.istWaffe);
    if (zone.nurAusruestung) return !!(item && item.irAusruestungsslot === zone.nurAusruestung);
    return true;
}

function irGroesseInZone(item, zone) {
    return (zone && (zone.nurWaffen || zone.nurAusruestung)) ? 1 : irSlotKosten(item);
}

// --- Reine Platzierungs-Logik ---

function irRasterDaten() {
    if (!appData.inventarRaster || typeof appData.inventarRaster !== 'object' || Array.isArray(appData.inventarRaster)) {
        appData.inventarRaster = {};
    }
    // Nach Rüstungswechsel oder entfernter Zusatztasche können Zellen wegfallen -
    // Karteileichen mit ungültigem Slot hier aufräumen (die Items selbst bleiben
    // in appData.inventory und werden beim nächsten Render neu einsortiert).
    const gueltig = new Set(irAlleSlots());
    Object.keys(appData.inventarRaster).forEach(s => { if (!gueltig.has(s)) delete appData.inventarRaster[s]; });
    return appData.inventarRaster;
}

function irItemsById() {
    const map = {};
    (appData.inventory || []).forEach(i => { map[i.id] = i; });
    return map;
}

// Rundet die Katalog-Größe (0,5/1/2/3) auf ganze Raster-Zellen auf.
function irSlotKostenVon(groesseRoh) {
    return Math.max(1, Math.ceil(Number(groesseRoh) || 1));
}

function irSlotKosten(item) {
    return irSlotKostenVon(item ? item.irGroesse : 1);
}

function irZellenFuer(slot, groesse, kontext) {
    const { zoneId, index } = irZoneUndIndex(slot);
    const zone = irZonenDefinition(kontext).find(z => z.id === zoneId);
    if (!zone) return [];
    const nutzbar = Math.max(0, zone.breite - (zone.deaktiviert || 0));
    const zellen = [];
    for (let k = 0; k < groesse; k++) {
        if (index + k >= nutzbar) return []; // würde über die Zonengrenze hinausragen
        zellen.push(zoneId + '_' + (index + k));
    }
    return zellen;
}

function irAnkerVon(raster, itemId, kontext) {
    return irAlleSlots(kontext).find(s => raster[s] && raster[s].itemId === itemId && !raster[s].cont) || null;
}

function irOhneItem(raster, itemId) {
    const next = Object.assign({}, raster);
    Object.keys(next).forEach(s => { if (next[s] && next[s].itemId === itemId) next[s] = null; });
    return next;
}

function irMitItem(raster, itemId, slot, groesse, kontext) {
    const next = Object.assign({}, raster);
    const zellen = irZellenFuer(slot, groesse, kontext);
    zellen.forEach((z, i) => { next[z] = i === 0 ? { itemId } : { itemId, cont: true }; });
    return next;
}

// Erster freie Platz (beliebige Startposition innerhalb einer Zone, solange
// genug zusammenhängende Zellen frei sind - anders als bei einem starren
// Paar-Raster gibt es hier keine festen Anker-Positionen). `item` entscheidet
// per Zone über die effektive Größe und ob die Zone überhaupt erlaubt ist
// (siehe irZonePasstFuerItem/irGroesseInZone - die Gürtel-Waffenplätze sind
// waffen-exklusiv und kosten dort immer nur 1 Platz).
function irErstesFreies(raster, item, kontext, reihenfolge) {
    const liste = reihenfolge || irAlleSlots(kontext);
    for (const slot of liste) {
        const zone = irZoneVonSlot(slot, kontext);
        if (!irZonePasstFuerItem(zone, item)) continue;
        const groesse = irGroesseInZone(item, zone);
        const zellen = irZellenFuer(slot, groesse, kontext);
        if (zellen.length < groesse) continue;
        if (zellen.every(z => raster[z] == null)) return zellen[0];
    }
    return null;
}

function irVerschieben(raster, itemsById, itemId, targetSlot, kontext) {
    const item = itemsById[itemId];
    if (!item) return { ok: false, grund: 'unbekannt' };
    const zielZone = irZoneVonSlot(targetSlot, kontext);
    if (!irZonePasstFuerItem(zielZone, item)) return { ok: false, grund: zielZone && zielZone.nurAusruestung ? 'falscherAusruestungsplatz' : 'nurWaffen' };
    const groesse = irGroesseInZone(item, zielZone);
    const zielZellen = irZellenFuer(targetSlot, groesse, kontext);
    if (zielZellen.length < groesse) return { ok: false, grund: 'passtNicht' };

    const vonAnker = irAnkerVon(raster, itemId, kontext);
    const blocker = new Set();
    zielZellen.forEach(z => { const belegt = raster[z]; if (belegt && belegt.itemId !== itemId) blocker.add(belegt.itemId); });

    if (blocker.size === 0) {
        return { ok: true, raster: irMitItem(irOhneItem(raster, itemId), itemId, targetSlot, groesse, kontext) };
    }
    if (groesse === 1 && blocker.size === 1) {
        const andereId = [...blocker][0];
        const andere = itemsById[andereId];
        const vonZone = vonAnker ? irZoneVonSlot(vonAnker, kontext) : null;
        if (andere && irSlotKosten(andere) === 1 && vonAnker && irZonePasstFuerItem(vonZone, andere)) {
            let next = irOhneItem(raster, itemId);
            next = irOhneItem(next, andereId);
            next = irMitItem(next, itemId, targetSlot, 1, kontext);
            next = irMitItem(next, andereId, vonAnker, 1, kontext);
            return { ok: true, raster: next };
        }
    }
    return { ok: false, grund: groesse > 1 ? 'zuGross' : 'belegt' };
}

// Platziert ein Item, das noch keinen Platz hat, an den ersten freien Platz.
function irAutoPlatzieren(itemId) {
    const raster = irRasterDaten();
    const vorhanden = irAnkerVon(raster, itemId);
    if (vorhanden) return vorhanden;
    const item = irItemsById()[itemId];
    if (!item) return null;
    const slot = irErstesFreies(raster, item, undefined, irReihenfolgeFuer(item));
    if (!slot) return null;
    const zone = irZoneVonSlot(slot);
    appData.inventarRaster = irMitItem(raster, itemId, slot, irGroesseInZone(item, zone));
    return slot;
}

function irFehlendeEinsortieren() {
    (appData.inventory || []).forEach(item => irAutoPlatzieren(item.id));
}

// Von Tischmitte/Kiste/Schiff aufgerufen, wenn irAutoPlatzieren nach dem
// Empfang keinen Platz gefunden hat: der Gegenstand geht NICHT verloren
// (bleibt in appData.inventory, siehe unplatziert-Zeile in
// renderInventarRaster), aber ohne festen Hinweis fällt das leicht unter den
// Tisch - wer gerade im Tischmitte- oder Schiffs-Panel schaut, sieht die
// passive Warnzeile im Inventar unten drunter gar nicht. Deshalb ein
// unübersehbarer Alert mit konkreten nächsten Schritten, plus Sprung samt
// Hervorhebung zum Inventar, wo man sofort etwas löschen, umgrößern oder
// aufs Schiff legen kann, um Platz zu schaffen.
function irKeinPlatzHinweis(name) {
    alert(`"${name || 'Der Gegenstand'}" passt gerade nirgends rein - Rucksack, Gürtel und Zusatztaschen sind voll.\n\nEr bleibt bei dir, aber ohne festen Platz im Raster, bis du Platz schaffst (z.B. im Inventar etwas löschen, verkleinern oder aufs Schiff legen). Danach sortiert er sich beim nächsten Öffnen automatisch ein.`);
    // Inventar-Kategorie kann eingeklappt sein (details, siehe index.html) -
    // ohne das würde der Sprung/die Hervorhebung ins Leere laufen.
    const section = document.getElementById('inventory-section');
    if (section && 'open' in section) section.open = true;
    if (typeof mobilenavSpringenZu === 'function') {
        mobilenavSpringenZu('inventar-raster');
    } else {
        const el = document.getElementById('inventar-raster');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// --- Waffen <-> Raster (siehe Kommentar am Dateikopf) ------------------------

// Läuft bei jedem Render, solange Eldara aktiv ist - von Natur aus idempotent,
// da appData.weapons nach erfolgreicher Migration leer ist (kein Zustands-Flag
// nötig, funktioniert auch nach einem Multiplayer-Sync sauber).
function irWaffenNachRasterMigrieren() {
    if (!Array.isArray(appData.weapons) || appData.weapons.length === 0) return;
    const bleibtKlassisch = [];
    appData.weapons.forEach(w => {
        const groesse = 2; // Standardannahme (Säbel/Muskete) - vom Spieler an der Karte änderbar
        if (!irHatPlatzFuer(groesse, true)) { bleibtKlassisch.push(w); return; }
        if (!appData.inventory) appData.inventory = [];
        const item = {
            id: 'inv_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
            name: w.name || 'Waffe',
            amount: 1,
            description: w.description || '',
            showDesc: !!w.showDesc,
            irGroesse: groesse,
            istWaffe: true,
            schaden: w.damage || ''
        };
        appData.inventory.push(item);
        irAutoPlatzieren(item.id);
    });
    appData.weapons = bleibtKlassisch;
}

// Läuft bei jedem Render, solange Eldara NICHT aktiv ist - idempotent, sobald
// keine Waffen-Einträge mehr im Raster stecken.
function irWaffenAusRasterMigrieren() {
    const waffenItems = (appData.inventory || []).filter(i => i.istWaffe);
    if (!waffenItems.length) return;
    if (!appData.weapons) appData.weapons = [];
    waffenItems.forEach(item => {
        appData.weapons.push({
            id: 'w_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
            name: item.name,
            damage: item.schaden || '',
            description: item.description || '',
            showDesc: !!item.showDesc
        });
        appData.inventory = appData.inventory.filter(i => i.id !== item.id);
        appData.inventarRaster = irOhneItem(irRasterDaten(), item.id);
    });
}

// Für das Schiffs-Inventar (schiffsinventar.js) und neue Items: passt ein
// Gegenstand dieser Katalog-Größe noch ins EIGENE Raster? `istWaffe` öffnet
// zusätzlich die beiden waffen-exklusiven Gürtelplätze (dort immer 1 Platz).
function irHatPlatzFuer(groesseRoh, istWaffe) {
    const pseudoItem = { irGroesse: groesseRoh, istWaffe: !!istWaffe };
    return irErstesFreies(irRasterDaten(), pseudoItem, undefined, irReihenfolgeFuer(pseudoItem)) !== null;
}

// --- Zusatztaschen -------------------------------------------------------------

function irZusatztascheHinzufuegen(art) {
    if (!Array.isArray(appData.eldaraZusatztaschen)) appData.eldaraZusatztaschen = [];
    if (appData.eldaraZusatztaschen.length >= IR_ZUSATZTASCHE_MAX) { irStatus(`Maximal ${IR_ZUSATZTASCHE_MAX} Zusatztaschen gleichzeitig.`, true); return; }
    appData.eldaraZusatztaschen.push(art === 'gross' ? 'gross' : 'klein');
    saveData();
    renderInventarRaster();
}

function irZusatztascheEntfernen(index) {
    if (!Array.isArray(appData.eldaraZusatztaschen)) return;
    appData.eldaraZusatztaschen.splice(index, 1);
    saveData();
    renderInventarRaster();
}

// --- Item-Verwaltung ----------------------------------------------------------

function irItemHinzufuegen() {
    const nameEl = document.getElementById('ir-neu-name');
    const mengeEl = document.getElementById('ir-neu-menge');
    const groesseEl = document.getElementById('ir-neu-groesse');
    const descEl = document.getElementById('ir-neu-desc');
    const istWaffeEl = document.getElementById('ir-neu-istwaffe');
    const schadenEl = document.getElementById('ir-neu-schaden');
    const ausrEl = document.getElementById('ir-neu-ausruestung');
    const ruestungswertEl = document.getElementById('ir-neu-ruestungswert');
    const name = (nameEl ? nameEl.value : '').trim();
    if (!name) { if (nameEl) nameEl.focus(); return; }
    const groesse = groesseEl ? parseFloat(groesseEl.value) || 1 : 1;
    const istWaffe = !!(istWaffeEl && istWaffeEl.checked);
    const ausruestungsslot = ausrEl && ausrEl.value ? ausrEl.value : null;
    if (!irHatPlatzFuer(groesse, istWaffe)) { irStatus(`Kein Platz mehr für einen Gegenstand dieser Größe (${groesse}).`, true); return; }
    if (!appData.inventory) appData.inventory = [];

    // Neue Ausrüstung landet bewusst erstmal ganz normal im Gürtel/Rucksack,
    // nicht automatisch im passenden Platz - der wird laut Wunsch der Runde
    // gezielt per Ziehen bestückt (wie eine Waffe an den Gürtel).
    const item = {
        id: 'inv_' + Date.now(),
        name,
        amount: Math.max(1, parseInt(mengeEl ? mengeEl.value : 1) || 1),
        description: (descEl ? descEl.value : '').trim(),
        showDesc: false,
        irGroesse: groesse,
        istWaffe,
        schaden: istWaffe ? (schadenEl ? schadenEl.value.trim() : '') : '',
        irAusruestungsslot: ausruestungsslot,
        irRuestungswert: ausruestungsslot ? (parseInt(ruestungswertEl ? ruestungswertEl.value : 0) || 0) : 0
    };
    appData.inventory.push(item);
    irAutoPlatzieren(item.id);
    if (typeof addActivityLog === 'function') addActivityLog(`Erhalten: ${item.amount}x ${name}`, 'activity-good', `<i class="fa-solid fa-${istWaffe ? 'khanda' : (ausruestungsslot ? 'shield-halved' : 'box')}"></i>`);
    if (nameEl) { nameEl.value = ''; nameEl.focus(); }
    if (mengeEl) mengeEl.value = '1';
    if (descEl) descEl.value = '';
    if (istWaffeEl) istWaffeEl.checked = false;
    if (schadenEl) { schadenEl.value = ''; schadenEl.style.display = 'none'; }
    if (ausrEl) ausrEl.value = '';
    if (ruestungswertEl) { ruestungswertEl.value = ''; ruestungswertEl.style.display = 'none'; }
    saveData();
    renderInventarRaster();
}

function irItemEntfernen(itemId) {
    const idx = (appData.inventory || []).findIndex(i => i.id === itemId);
    if (idx < 0) return;
    const item = appData.inventory[idx];
    if (!confirm(`"${item.name || 'Item'}" wirklich löschen?`)) return;
    if (typeof addActivityLog === 'function') addActivityLog(`Verloren/Verbraucht: ${item.name || 'Item'}`, 'activity-bad', '<i class="fa-solid fa-trash"></i>');
    appData.inventory.splice(idx, 1);
    appData.inventarRaster = irOhneItem(irRasterDaten(), itemId);
    saveData();
    renderInventarRaster();
}

function irMengeAendern(itemId, delta) {
    const item = (appData.inventory || []).find(i => i.id === itemId);
    if (!item) return;
    const neu = (parseInt(item.amount) || 1) + delta;
    if (neu <= 0) { irItemEntfernen(itemId); return; }
    item.amount = neu;
    if (typeof addActivityLog === 'function') {
        addActivityLog(`${delta > 0 ? 'Gefunden' : 'Verbraucht'}: 1x ${item.name || 'Item'}`, delta > 0 ? 'activity-good' : 'activity-bad', `<i class="fa-solid fa-${delta > 0 ? 'plus' : 'minus'}"></i>`);
    }
    saveData();
    renderInventarRaster();
}

function irNameAendern(itemId, name) {
    const item = (appData.inventory || []).find(i => i.id === itemId);
    if (!item) return;
    item.name = name;
    saveData();
}

function irBeschreibungAendern(itemId, text) {
    const item = (appData.inventory || []).find(i => i.id === itemId);
    if (!item) return;
    item.description = text;
    saveData();
}

function irSchadenAendern(itemId, wert) {
    const item = (appData.inventory || []).find(i => i.id === itemId);
    if (!item) return;
    item.schaden = wert;
    saveData();
}

// Ändert sich live die Summe (Rüstungsstufe hängt u.a. am Rucksack-Malus),
// deshalb hier komplett neu rendern statt nur den appData-Wert zu setzen.
function irRuestungswertAendern(itemId, wert) {
    const item = (appData.inventory || []).find(i => i.id === itemId);
    if (!item) return;
    item.irRuestungswert = parseInt(wert) || 0;
    saveData();
    renderInventarRaster();
}

function irBeschreibungToggle(itemId) {
    const item = (appData.inventory || []).find(i => i.id === itemId);
    if (!item) return;
    item.showDesc = !item.showDesc;
    saveData();
    renderInventarRaster();
}

// Größe umschalten - sucht sofort einen neuen Platz; ohne freien Platz bleibt
// alles wie es war (der Gegenstand geht nie verloren).
function irGroesseAendern(itemId, neueGroesse) {
    const item = (appData.inventory || []).find(i => i.id === itemId);
    if (!item) return;
    const alteKosten = irSlotKosten(item);
    const neueKosten = irSlotKostenVon(neueGroesse);
    if (neueKosten === alteKosten) { item.irGroesse = neueGroesse; saveData(); return; }
    if (irKampfGesperrt()) { irStatus('Inventar ist während des Kampfes gesperrt - Größe kann nicht geändert werden, wenn das den Platz verschiebt.', true); return; }
    const rasterOhne = irOhneItem(irRasterDaten(), itemId);
    const probeItem = Object.assign({}, item, { irGroesse: neueGroesse });
    const slot = irErstesFreies(rasterOhne, probeItem, undefined, irReihenfolgeFuer(probeItem));
    if (!slot) { irStatus('Kein Platz für diese Größe frei.', true); return; }
    item.irGroesse = neueGroesse;
    appData.inventarRaster = irMitItem(rasterOhne, itemId, slot, irGroesseInZone(item, irZoneVonSlot(slot)));
    saveData();
    renderInventarRaster();
}

// --- Drag & Drop (Pointer Events - funktioniert auf Maus, Touch und Stift) ---
//
// Ersetzt natives HTML5 Drag&Drop (draggable="true"/dragstart/dragover/drop):
// das funktioniert auf Touch-Geräten grundsätzlich nicht, der Browser fängt
// die erste Berührung stattdessen fürs Scrollen ab - ein "dragstart" wird auf
// reinen Touch-Geräten nie ausgelöst. Pointer Events (pointerdown/move/up)
// laufen dagegen auf allen Eingabearten identisch, deshalb hier von Hand
// nachgebaut. Ausgelöst wird nur über einen eigenen Greif-Griff (Icon), nicht
// über die ganze Karte - sonst würde ein Antippen des Namensfelds oder der
// Mengen-Knöpfe mit der Zugerkennung kollidieren.
let irDrag = null; // { itemId, pointerId, startX, startY, element, aktiv, geist, zielEl, zielSlot }
const IR_DRAG_SCHWELLE = 6; // Pixel Bewegung, bevor aus einem Antippen ein Ziehen wird

// Der SL kann per Kampf-Modus (kampf.js, kampfModusUmschalten) das Umsortieren
// im Rasterinventar sperren, solange aktiv gekämpft wird - betrifft nur das
// Verschieben zwischen Feldern, nicht das Hinzufügen/Entfernen/Ablegen aufs
// Schiff o.ä. Gilt nur beim Spieler selbst, nicht beim SL (der hat kein
// eigenes Rasterinventar im Dashboard).
function irKampfGesperrt() {
    return typeof kampfSpieler !== 'undefined' && !!kampfSpieler.modusAktiv;
}

function irDragPointerDown(e, itemId, kartenEl) {
    if (e.button !== undefined && e.button !== 0) return; // nur Primärtaste/erster Finger
    if (irDrag) return; // schon ein Zug im Gange (z.B. zweiter Finger)
    if (irKampfGesperrt()) { irStatus('Inventar ist während des Kampfes gesperrt.', true); return; }
    irDrag = { itemId, pointerId: e.pointerId, startX: e.clientX, startY: e.clientY, element: kartenEl, aktiv: false, geist: null, zielEl: null, zielSlot: null };
    document.addEventListener('pointermove', irDragPointerMove);
    document.addEventListener('pointerup', irDragPointerEnde);
    document.addEventListener('pointercancel', irDragPointerEnde);
}

function irDragAktivieren() {
    irDrag.aktiv = true;
    irDrag.element.classList.add('ir-karte-wird-gezogen');
    // "Geist"-Karte folgt dem Finger/Cursor - auf dem Touchscreen verdeckt
    // der eigene Finger sonst die Original-Karte komplett.
    const geist = irDrag.element.cloneNode(true);
    geist.classList.add('ir-karte-geist');
    geist.style.width = irDrag.element.offsetWidth + 'px';
    document.body.appendChild(geist);
    irDrag.geist = geist;
}

function irDragPointerMove(e) {
    if (!irDrag || e.pointerId !== irDrag.pointerId) return;
    const dx = e.clientX - irDrag.startX;
    const dy = e.clientY - irDrag.startY;
    if (!irDrag.aktiv) {
        if (Math.hypot(dx, dy) < IR_DRAG_SCHWELLE) return;
        irDragAktivieren();
    }
    e.preventDefault();
    irDrag.geist.style.left = e.clientX + 'px';
    irDrag.geist.style.top = e.clientY + 'px';
    // Geist selbst hat pointer-events:none (CSS) - elementFromPoint trifft
    // also direkt das darunterliegende Feld, kein Show/Hide-Trick nötig.
    const unter = document.elementFromPoint(e.clientX, e.clientY);
    const slotEl = unter ? unter.closest('[data-irslot]') : null;
    if (irDrag.zielEl && irDrag.zielEl !== slotEl) irDrag.zielEl.classList.remove('ir-slot-over');
    if (slotEl) slotEl.classList.add('ir-slot-over');
    irDrag.zielEl = slotEl;
    irDrag.zielSlot = slotEl ? slotEl.dataset.irslot : null;
}

function irDragPointerEnde(e) {
    if (!irDrag || e.pointerId !== irDrag.pointerId) return;
    document.removeEventListener('pointermove', irDragPointerMove);
    document.removeEventListener('pointerup', irDragPointerEnde);
    document.removeEventListener('pointercancel', irDragPointerEnde);
    const drag = irDrag;
    irDrag = null;
    if (drag.geist) drag.geist.remove();
    if (drag.zielEl) drag.zielEl.classList.remove('ir-slot-over');
    if (!drag.aktiv) return; // reines Antippen/Klicken - normales Verhalten lief schon durch
    drag.element.classList.remove('ir-karte-wird-gezogen');
    if (drag.zielSlot) irDrop(drag.itemId, drag.zielSlot);
}

function irDrop(itemId, targetSlot) {
    if (irKampfGesperrt()) { irStatus('Inventar ist während des Kampfes gesperrt.', true); return; }
    const res = irVerschieben(irRasterDaten(), irItemsById(), itemId, targetSlot);
    if (!res.ok) {
        const text = res.grund === 'nurWaffen' ? 'Diese Gürtelplätze sind nur für Waffen.'
            : res.grund === 'falscherAusruestungsplatz' ? 'Dieser Ausrüstungsplatz passt nicht zu diesem Gegenstand.'
            : (res.grund === 'zuGross' || res.grund === 'passtNicht') ? 'Braucht mehr zusammenhängende freie Felder.'
            : 'Feld ist belegt.';
        irStatus(text, true);
        return;
    }
    appData.inventarRaster = res.raster;
    saveData();
    renderInventarRaster();
}

// --- Darstellung ---------------------------------------------------------------

function irSlotHtml(slot, item, breite) {
    if (!item) {
        return `<div class="ir-slot ir-slot-leer" data-irslot="${slot}"><i class="fa-solid fa-plus ir-slot-leer-icon"></i></div>`;
    }
    const groesse = irSlotKosten(item);
    const waffenZeile = item.istWaffe ? `
            <div class="ir-karte-reihe ir-waffen-reihe">
                <input type="text" class="ir-input ir-schaden-input" value="${escapeHtml(item.schaden || '')}" placeholder="Schaden (1w10)" data-irschaden="${escapeHtml(item.id)}">
                <button class="btn-icon-small ir-wuerfeln-btn" data-irwuerfeln="${escapeHtml(item.id)}" title="Schaden würfeln"><i class="fa-solid fa-dice"></i></button>
            </div>` : '';
    const ausruestungInfo = item.irAusruestungsslot ? IR_AUSRUESTUNG_SLOTS[item.irAusruestungsslot] : null;
    const ausruestungZeile = ausruestungInfo ? `
            <div class="ir-karte-reihe ir-waffen-reihe" title="Ausrüstungsplatz: ${escapeHtml(ausruestungInfo.label)}">
                <span class="ir-ausr-label"><i class="fa-solid fa-shield-halved"></i> ${escapeHtml(ausruestungInfo.label)}</span>
                <input type="number" class="ir-input ir-schaden-input" value="${Number(item.irRuestungswert) || 0}" placeholder="Rüstungswert" data-irruestungswert="${escapeHtml(item.id)}">
            </div>` : '';
    const gesperrt = irKampfGesperrt();
    return `
    <div class="ir-slot ${breite > 1 ? 'ir-slot-breit-' + breite : ''}" data-irslot="${slot}">
        <div class="inv-item card-layout ir-karte ${item.istWaffe ? 'ir-karte-waffe' : ''} ${ausruestungInfo ? 'ir-karte-ausruestung' : ''}" data-iritem="${escapeHtml(item.id)}">
            <div class="ir-name-reihe">
                <i class="fa-solid fa-grip-vertical ir-drag-griff ${gesperrt ? 'ir-drag-griff-gesperrt' : ''}" data-irgriff="${escapeHtml(item.id)}" title="${gesperrt ? 'Im Kampf-Modus gesperrt' : 'Ziehen zum Umsortieren'}"></i>
                ${item.istWaffe ? '<i class="fa-solid fa-khanda ir-waffe-icon" title="Waffe"></i>' : ''}
                ${ausruestungInfo ? '<i class="fa-solid fa-shield-halved ir-waffe-icon" title="Ausrüstung"></i>' : ''}
                <input type="text" class="ir-name" value="${escapeHtml(item.name)}" data-irname="${escapeHtml(item.id)}" placeholder="Name …">
            </div>
            ${waffenZeile}
            ${ausruestungZeile}
            <div class="ir-karte-reihe">
                <div class="item-amount-wrapper">
                    <button class="btn-icon-small" data-irminus="${escapeHtml(item.id)}">-</button>
                    <span class="item-amount">${item.amount || 1}</span>
                    <button class="btn-icon-small" data-irplus="${escapeHtml(item.id)}">+</button>
                </div>
                <select class="ir-groesse-select" data-irgroesse="${escapeHtml(item.id)}" title="Größe laut Regelwerk S.26">
                    ${IR_GROESSEN_KATALOG.map(g => `<option value="${g.wert}" ${Number(item.irGroesse) === g.wert ? 'selected' : ''}>${g.wert}</option>`).join('')}
                </select>
                <button class="btn-delete-icon" data-irdel="${escapeHtml(item.id)}"><i class="fa-solid fa-trash"></i></button>
            </div>
            <button class="item-desc-toggle ir-desc-toggle" data-irdesctoggle="${escapeHtml(item.id)}"><i class="fa-solid fa-chevron-${item.showDesc ? 'up' : 'down'}"></i> Details</button>
            <textarea class="item-description ${item.showDesc ? 'show' : ''}" placeholder="Beschreibung / Effekte..." data-irdesc="${escapeHtml(item.id)}">${escapeHtml(item.description || '')}</textarea>
        </div>
    </div>`;
}

function irZoneHtml(zone, raster, items) {
    const nutzbar = Math.max(0, zone.breite - (zone.deaktiviert || 0));
    const zellenHtml = [];
    for (let i = 0; i < nutzbar; i++) {
        const slot = zone.id + '_' + i;
        const belegung = raster[slot];
        if (belegung && belegung.cont) continue;
        const item = belegung ? items[belegung.itemId] : null;
        const groesse = item ? irGroesseInZone(item, zone) : 1;
        zellenHtml.push(irSlotHtml(slot, item, groesse));
        if (item && groesse > 1) i += groesse - 1;
    }
    const abbauKnopf = zone.zusatzArt ? `<button class="x-mini x-mini-danger" onclick="irZusatztascheEntfernen(${zone.zusatzIndex})" title="Zusatztasche ablegen"><i class="fa-solid fa-xmark"></i></button>` : '';
    const deaktiviertHinweis = zone.deaktiviert ? `<span class="ir-zone-malus">(-${zone.deaktiviert} durch Rüstung)</span>` : '';
    // Nie mehr Spalten als tatsächlich Plätze da sind - bei den einplätzigen
    // Ausrüstungszonen sonst 2 leere Gitterspuren neben der einen echten Karte.
    const spalten = Math.max(1, Math.min(nutzbar, 3));
    return `<div class="ir-gruppe ${zone.nurAusruestung ? 'ir-gruppe-ausruestung' : ''}">
        <div class="ir-gruppe-titel">${escapeHtml(zone.titel)} <span class="ir-zone-count">${nutzbar} Plätze</span> ${deaktiviertHinweis} ${abbauKnopf}</div>
        <div class="ir-slots" style="grid-template-columns: repeat(${spalten}, 1fr);">${zellenHtml.join('')}</div>
    </div>`;
}

function renderInventarRaster() {
    const box = document.getElementById('inventar-raster');
    if (!box) return;
    // Katalog aus dem Regelwerk (RW4.3) fürs Item-Formular unten - dieselbe
    // Datenquelle wie Zufallsgenerator/Tischmitte, lädt sich beim ersten
    // Öffnen nach (wenige KB). Siehe irKatalogHtml/irKatalogAuswaehlen.
    if (!irKatalogGeladen && typeof randomizerAlleLaden === 'function') {
        randomizerAlleLaden(() => { irKatalogGeladen = true; renderInventarRaster(); });
    }
    irFehlendeEinsortieren();
    const raster = irRasterDaten();
    const items = irItemsById();
    const zonen = irZonenDefinition();
    const unplatziert = (appData.inventory || []).filter(item => !irAnkerVon(raster, item.id));
    const ruestungswert = irRuestungswert();
    const ruestungsstufe = irRuestungsstufe(ruestungswert);
    const taschen = appData.eldaraZusatztaschen || [];
    const handelnMalus = taschen.reduce((sum, art) => sum + (IR_ZUSATZTASCHE_DATEN[art] || IR_ZUSATZTASCHE_DATEN.klein).malus, 0);

    const gesperrt = irKampfGesperrt();
    box.innerHTML = `
        ${gesperrt ? '<p class="ir-hint ir-warnung"><i class="fa-solid fa-lock"></i> Kampf-Modus aktiv - Umsortieren ist gerade gesperrt.</p>' : ''}
        <p class="ir-hint">Eldara-Regelwerk: Gürtel (5 Plätze + 2 eigene Waffenplätze), Rucksack und optionale Zusatztaschen - jede Zone hat feste Plätze, Gegenstände belegen 1-3 Zellen je nach Größe; die beiden Gürtel-Waffenplätze nehmen nur Waffen und kosten dort immer 1 Zelle. Ausrüstung (Kopf/Schulter-Hals/Brust/Hände/Beine/Füße/Schmuck) wird genauso aus dem Inventar auf den passenden Platz gezogen. <i class="fa-solid fa-circle-question help-icon" onclick="showHelp('inventarraster')" title="Hilfe zum Rasterinventar"></i></p>
        <div class="ir-einstellungen">
            <div class="ir-einstellung ir-ruestung-block">
                <div class="ir-ruestung-titel">Rüstung <span class="ir-zone-malus">${ruestungswert} Rüstungswert - ${IR_RUESTUNGSSTUFE_LABEL[ruestungsstufe]}</span></div>
                <p class="ir-hint">Zieh Ausrüstung aus Gürtel/Rucksack auf die passenden Plätze weiter unten (Kopf, Schulter/Hals, Brust, Hände, Beine, Füße, Schmuck) - jedes Item bringt seinen eigenen Rüstungswert mit.</p>
                <p class="ir-hint">Rucksack-Malus: ${ruestungsstufe === 'schwer' ? '-2 Plätze' : ruestungsstufe === 'mittel' ? '-1 Platz' : 'keiner'} durch diese Stufe.</p>
                <p class="ir-hint">Weitere Mali durch diese Stufe: ${(() => { const m = IR_RUESTUNGSSTUFE_MALI[ruestungsstufe]; return (m.bewegung || m.handeln || m.heimlichkeit) ? `Bewegung ${m.bewegung}m, Handeln ${m.handeln || 0}, Heimlichkeit ${m.heimlichkeit}` : 'keine'; })()} - nicht automatisch verrechnet, bitte selbst beim Würfeln eintragen. <i class="fa-solid fa-circle-question help-icon" onclick="showHelp('inventarraster')" title="Hilfe zum Rasterinventar"></i></p>
            </div>
            <div class="ir-einstellung">
                Zusatztaschen (${taschen.length}/${IR_ZUSATZTASCHE_MAX})
                <button class="ir-mini-btn" onclick="irZusatztascheHinzufuegen('klein')" ${taschen.length >= IR_ZUSATZTASCHE_MAX ? 'disabled' : ''}>+ Klein (+3 / -3 Handeln)</button>
                <button class="ir-mini-btn" onclick="irZusatztascheHinzufuegen('gross')" ${taschen.length >= IR_ZUSATZTASCHE_MAX ? 'disabled' : ''}>+ Groß (+5 / -5 Handeln)</button>
            </div>
        </div>
        ${handelnMalus ? `<p class="ir-hint ir-warnung"><i class="fa-solid fa-triangle-exclamation"></i> Zusatztaschen kosten dich aktuell -${handelnMalus} auf Handeln, solange du sie trägst - beim Würfeln selbst im Bonus/Malus-Feld eintragen.</p>` : ''}
        ${unplatziert.length ? `<p class="ir-hint ir-warnung"><i class="fa-solid fa-triangle-exclamation"></i> Kein Platz mehr für: ${unplatziert.map(i => escapeHtml(i.name)).join(', ')} - erst Platz schaffen (löschen, Größe ändern, aufs Schiff legen oder eine Zusatztasche anlegen).</p>` : ''}
        ${(appData.weapons || []).length ? `<p class="ir-hint ir-warnung"><i class="fa-solid fa-triangle-exclamation"></i> Passt (noch) nicht ins Raster: ${appData.weapons.map(w => escapeHtml(w.name)).join(', ')} - bleibt vorerst im klassischen Waffen-Bestand, bis Platz frei ist.</p>` : ''}
        ${(() => {
            // Paperdoll-Anordnung (Diablo-artig, auf Wunsch der Runde): jeder
            // Ausrüstungsplatz sitzt möglichst nah an seiner Körperstelle am
            // Piratenbild - Kopf oben drüber, Schulter/Hals+Brust auf
            // Schulterhöhe links/rechts, Hände+Beine auf Höhe der Hände/Beine
            // links/rechts, Füße und Schmuck unterhalb der Füße. Gürtel und
            // Gürtel(Waffen) wandern zusammen mit Rucksack/Zusatztaschen in
            // die Zeile darunter, dort stehen sie direkt nebeneinander.
            const findZone = id => zonen.find(z => z.id === id);
            const kopf = findZone('ausr_kopf');
            const schulterhals = findZone('ausr_schulterhals');
            const brust = findZone('ausr_brust');
            const haende = findZone('ausr_haende');
            const beine = findZone('ausr_beine');
            const fuesse = findZone('ausr_fuesse');
            const schmuck = findZone('ausr_schmuck');
            const paperdollZonen = [kopf, schulterhals, brust, haende, beine, fuesse, schmuck].filter(Boolean);
            const restZonen = zonen.filter(z => !paperdollZonen.includes(z));
            return `
        <div class="ir-paperdoll">
            <div class="ir-paperdoll-kopf">${kopf ? irZoneHtml(kopf, raster, items) : ''}</div>
            <div class="ir-paperdoll-links-oben">${schulterhals ? irZoneHtml(schulterhals, raster, items) : ''}</div>
            <div class="ir-paperdoll-figur"><img src="assets/inv_pirat.webp" alt="" class="ir-paperdoll-bild"></div>
            <div class="ir-paperdoll-rechts-oben">${brust ? irZoneHtml(brust, raster, items) : ''}</div>
            <div class="ir-paperdoll-links-unten">${haende ? irZoneHtml(haende, raster, items) : ''}</div>
            <div class="ir-paperdoll-rechts-unten">${beine ? irZoneHtml(beine, raster, items) : ''}</div>
            <div class="ir-paperdoll-fuesse">${fuesse ? irZoneHtml(fuesse, raster, items) : ''}</div>
            <div class="ir-paperdoll-schmuck">${schmuck ? irZoneHtml(schmuck, raster, items) : ''}</div>
        </div>
        <div class="ir-gruppen">
            ${restZonen.map(z => irZoneHtml(z, raster, items)).join('')}
        </div>`;
        })()}
        <div id="ir-status" class="x-hint"></div>
        <div class="ir-form">
            ${irKatalogHtml()}
            <input type="text" id="ir-neu-name" class="ir-input" placeholder="Item Name..." onkeydown="if(event.key==='Enter') irItemHinzufuegen()">
            <select id="ir-neu-groesse" class="ir-input ir-input-groesse" title="Größe laut Regelwerk S.26">
                ${IR_GROESSEN_KATALOG.map(g => `<option value="${g.wert}" ${g.wert === 1 ? 'selected' : ''}>${g.label}</option>`).join('')}
            </select>
            <input type="number" id="ir-neu-menge" class="ir-input ir-input-menge" value="1" min="1" title="Menge">
            <label class="ir-waffe-check"><input type="checkbox" id="ir-neu-istwaffe"> Waffe</label>
            <input type="text" id="ir-neu-schaden" class="ir-input ir-input-schaden" placeholder="Schaden (z.B. 1w10)" style="display:none">
            <select id="ir-neu-ausruestung" class="ir-input" title="Optional: macht das Item auf einen Ausrüstungsplatz ziehbar">
                <option value="">Kein Ausrüstungsplatz</option>
                ${Object.keys(IR_AUSRUESTUNG_SLOTS).map(typ => `<option value="${typ}" title="${escapeHtml(IR_AUSRUESTUNG_SLOTS[typ].beispiele)}">${escapeHtml(IR_AUSRUESTUNG_SLOTS[typ].label)}</option>`).join('')}
            </select>
            <input type="number" id="ir-neu-ruestungswert" class="ir-input ir-input-schaden" placeholder="Rüstungswert" style="display:none">
            <textarea id="ir-neu-desc" class="ir-input ir-input-desc" placeholder="Optionale Beschreibung / Effekte..." onkeydown="if(event.key==='Enter'){event.preventDefault(); irItemHinzufuegen();}"></textarea>
            <button class="ir-add-btn" onclick="irItemHinzufuegen()"><i class="fa-solid fa-plus"></i> Hinzufügen</button>
        </div>`;

    const istWaffeCb = document.getElementById('ir-neu-istwaffe');
    if (istWaffeCb) istWaffeCb.addEventListener('change', () => {
        const schadenEl = document.getElementById('ir-neu-schaden');
        if (schadenEl) schadenEl.style.display = istWaffeCb.checked ? '' : 'none';
    });
    const ausrSel = document.getElementById('ir-neu-ausruestung');
    if (ausrSel) ausrSel.addEventListener('change', () => {
        const ruestungswertEl = document.getElementById('ir-neu-ruestungswert');
        if (ruestungswertEl) ruestungswertEl.style.display = ausrSel.value ? '' : 'none';
    });

    box.querySelectorAll('[data-irgriff]').forEach(el => el.addEventListener('pointerdown', (e) => irDragPointerDown(e, el.dataset.irgriff, el.closest('.ir-karte'))));
    box.querySelectorAll('[data-irname]').forEach(el => el.addEventListener('input', () => irNameAendern(el.dataset.irname, el.value)));
    box.querySelectorAll('[data-irgroesse]').forEach(el => el.addEventListener('change', () => irGroesseAendern(el.dataset.irgroesse, parseFloat(el.value) || 1)));
    box.querySelectorAll('[data-irdel]').forEach(el => el.addEventListener('click', () => irItemEntfernen(el.dataset.irdel)));
    box.querySelectorAll('[data-irminus]').forEach(el => el.addEventListener('click', () => irMengeAendern(el.dataset.irminus, -1)));
    box.querySelectorAll('[data-irplus]').forEach(el => el.addEventListener('click', () => irMengeAendern(el.dataset.irplus, 1)));
    box.querySelectorAll('[data-irdesctoggle]').forEach(el => el.addEventListener('click', () => irBeschreibungToggle(el.dataset.irdesctoggle)));
    box.querySelectorAll('[data-irdesc]').forEach(el => el.addEventListener('input', () => irBeschreibungAendern(el.dataset.irdesc, el.value)));
    box.querySelectorAll('[data-irschaden]').forEach(el => el.addEventListener('input', () => irSchadenAendern(el.dataset.irschaden, el.value)));
    // 'change' statt 'input': der Wert fließt in die oben angezeigte Rüstungs-
    // Summe ein, ein Neu-Rendern bei jedem Tastendruck würde den Cursor aus
    // dem Feld reißen - deshalb erst beim Verlassen des Felds aktualisieren.
    box.querySelectorAll('[data-irruestungswert]').forEach(el => el.addEventListener('change', () => irRuestungswertAendern(el.dataset.irruestungswert, el.value)));
    box.querySelectorAll('[data-irwuerfeln]').forEach(el => el.addEventListener('click', () => {
        const item = irItemsById()[el.dataset.irwuerfeln];
        if (item && typeof rollWeaponDamage === 'function') rollWeaponDamage(item.schaden, item.name);
    }));
}

function irStatus(text, warnung) {
    const el = document.getElementById('ir-status');
    if (!el) return;
    el.textContent = text;
    el.style.color = warnung ? 'var(--color-dmg)' : 'var(--color-heal)';
    el.style.opacity = '1';
    clearTimeout(irStatus._t);
    irStatus._t = setTimeout(() => { el.style.opacity = '0'; }, 3500);
}
