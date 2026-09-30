// Runenmagie / Schmiede-Roulette (RW 5.1, hausregeln/quellen/rw51.txt Zeile
// 1637-1751): Spieler kaufen Sockel + Runenstärke für eine Waffe/Rüstung,
// würfeln dann 1W6 pro Sockel gegen die feste Roulette-Tabelle (inkl.
// verschachtelter Jackpot-Untertabelle bei einer 6). Das Ergebnis geht erst
// als Anfrage an den SL, wird dort bestätigt oder abgelehnt und erst danach
// dauerhaft auf das Item angewendet - passend zum Goldeinsatz, den der SL im
// Blick behalten soll.

const RUNEN_SOCKEL_KOSTEN = { 1: 500, 2: 3000, 3: 10000 };
const RUNEN_STAERKE_KOSTEN = { 1: 0, 2: 1000, 3: 5000, 4: 15000 };
const RUNEN_MAX_SOCKEL = 3;

const RUNEN_ROULETTE = {
    1: { name: 'Schaden / Rüstung', text: (s) => ({
        1: '+1W10 Schaden (Waffe) bzw. +3 Rüstung (Rüstung)',
        2: '+2W10 Schaden (Waffe) bzw. +5 Rüstung (Rüstung)',
        3: '+3W10 Schaden (Waffe) bzw. +10 Rüstung (Rüstung)',
        4: '+4W10 Schaden (Waffe) bzw. +15 Rüstung (Rüstung)'
    }[s]) },
    2: { name: 'Lebenspunkte', text: (s) => ({
        1: '+10 Lebenspunkte', 2: '+20 Lebenspunkte', 3: '+30 Lebenspunkte', 4: '+40 Lebenspunkte'
    }[s]) },
    3: { name: 'Skill-Sockel', text: (s) => ({
        1: 'Zufälliger Skill Rang 1 (SL/Gruppe legt fest, welcher)',
        2: 'Zufälliger Skill Rang 2 (SL/Gruppe legt fest, welcher)',
        3: 'Zufälliger Skill Rang 3 (SL/Gruppe legt fest, welcher)',
        4: 'Zufälliger Skill Rang 4 (SL/Gruppe legt fest, welcher)'
    }[s]) },
    4: { name: 'Statuspunkte', text: (s) => ({
        1: '+3 auf einen zufällig bestimmten Statuswert', 2: '+5 auf einen zufällig bestimmten Statuswert',
        3: '+8 auf einen zufällig bestimmten Statuswert', 4: '+10 auf einen zufällig bestimmten Statuswert'
    }[s]) },
    5: { name: 'Buff-Sockel', text: (s) => ({
        1: '+2 Geistesblitzpunkte ODER -1 Debuff-Stufe (Zufall entscheidet)',
        2: '+1 Blutungs-Heilung ODER -1 ganzer Debuff-Stack (Zufall entscheidet)',
        3: '+1 Feuermarker ODER +5 Rüstung für 2 Runden (Zufall entscheidet)',
        4: '+1W10 Schaden ODER +2W10 Heilung (Zufall entscheidet)'
    }[s]) }
};

const RUNEN_JACKPOT = {
    1: { name: 'Perfekte Gravur', text: 'Du darfst dir die Slot-Art (1-5) selbst aussuchen. Die Stärke bleibt gleich.' },
    2: { name: 'Doppelrune', text: 'Dieser Sockel erhält zwei Runeneffekte gleichzeitig, beide in der gekauften Stärke.' },
    3: { name: 'Runenverstärkung', text: 'Die Rune wird eine Stufe stärker, ohne Zusatzkosten. War sie schon Stufe 4, vergibt der SL stattdessen einen zusätzlichen Bonus.' },
    4: { name: 'Freie Wahl', text: 'Du darfst aus der ausgewürfelten Slot-Art den konkreten Effekt selbst bestimmen.' },
    5: { name: 'Zusätzlicher Sockel', text: 'Der Gegenstand erhält einen zusätzlichen Sockel kostenlos - wird sofort mit ausgewürfelt.' },
    6: { name: 'Meisterrune', text: 'Jackpot im Jackpot: Du darfst Slot-Art UND konkreten Effekt frei bestimmen.' }
};

let runenEntwurf = null; // { itemId, staerken: [1-4, ...] } - Zustand des offenen Modals
let runenAusstehend = {}; // SL-Seite: peerId::itemId -> Anfrage-Payload

function runenItemBerechtigt(item) {
    return !!(item && (item.istWaffe || item.irAusruestungsslot));
}

function runenWuerfel1W6() {
    return 1 + Math.floor(Math.random() * 6);
}

// Löst EINEN Sockel aus (inkl. Jackpot-Verschachtelung). Gibt { effekte: [...],
// zusatzSockel: 0|1 } zurück - "zusatzSockel" signalisiert Jackpot #5.
function runenSockelAusloesen(staerke, tiefe) {
    tiefe = tiefe || 0;
    const wurf = runenWuerfel1W6();
    if (wurf < 6) {
        const art = RUNEN_ROULETTE[wurf];
        return { effekte: [{ wuerfel: wurf, art: art.name, stufe: staerke, text: art.text(staerke) }], zusatzSockel: 0 };
    }
    // Jackpot
    const jWurf = runenWuerfel1W6();
    const jackpot = RUNEN_JACKPOT[jWurf];
    const basis = { wuerfel: 6, art: 'Jackpot: ' + jackpot.name, stufe: staerke, text: jackpot.text, jackpotNr: jWurf };
    if (jWurf === 2 && tiefe < 2) {
        // Doppelrune: zweiten Effekt in derselben Stärke auswürfeln (rekursiv, Tiefe begrenzt gegen Endlosketten)
        const zweiter = runenSockelAusloesen(staerke, tiefe + 1);
        return { effekte: [basis].concat(zweiter.effekte), zusatzSockel: zweiter.zusatzSockel };
    }
    if (jWurf === 5) {
        return { effekte: [basis], zusatzSockel: 1 };
    }
    return { effekte: [basis], zusatzSockel: 0 };
}

function runenKostenBerechnen(staerken) {
    const anzahl = staerken.length;
    if (anzahl === 0) return 0;
    const sockelKosten = RUNEN_SOCKEL_KOSTEN[anzahl] || 0;
    const staerkeKosten = staerken.reduce((sum, s) => sum + (RUNEN_STAERKE_KOSTEN[s] || 0), 0);
    return sockelKosten + staerkeKosten;
}

// --- Spieler: Modal --------------------------------------------------------

function runenModalOeffnen(itemId) {
    const item = (appData.inventory || []).find(i => i.id === itemId);
    if (!item) return;
    if (item.runen && item.runen.status === 'wartetAufSl') {
        alert('Für dieses Item läuft schon eine Anfrage beim SL - bitte erst abwarten.');
        return;
    }
    runenEntwurf = { itemId, staerken: [1] };
    runenModalRendern();
    document.getElementById('runen-modal-overlay').classList.add('active');
}

function runenModalSchliessen() {
    document.getElementById('runen-modal-overlay').classList.remove('active');
    runenEntwurf = null;
}

function runenSockelAnzahlSetzen(n) {
    if (!runenEntwurf) return;
    n = Math.max(1, Math.min(RUNEN_MAX_SOCKEL, n));
    const staerken = runenEntwurf.staerken.slice(0, n);
    while (staerken.length < n) staerken.push(1);
    runenEntwurf.staerken = staerken;
    runenModalRendern();
}

function runenStaerkeSetzen(index, staerke) {
    if (!runenEntwurf) return;
    runenEntwurf.staerken[index] = Math.max(1, Math.min(4, parseInt(staerke) || 1));
    runenModalRendern();
}

function runenModalRendern() {
    const body = document.getElementById('runen-modal-body');
    if (!body || !runenEntwurf) return;
    const item = (appData.inventory || []).find(i => i.id === runenEntwurf.itemId);
    if (!item) { runenModalSchliessen(); return; }
    const kosten = runenKostenBerechnen(runenEntwurf.staerken);
    const guthaben = appData.currency ? (parseInt(appData.currency.amount) || 0) : 0;
    const waehrung = appData.currency ? (appData.currency.name || 'Gold') : 'Gold';
    const sockelHtml = runenEntwurf.staerken.map((s, i) => `
        <div class="ir-karte-reihe" style="justify-content:space-between;">
            <span>Sockel ${i + 1}, Stufe:</span>
            <select class="ir-groesse-select" onchange="runenStaerkeSetzen(${i}, this.value)">
                ${[1, 2, 3, 4].map(st => `<option value="${st}" ${st === s ? 'selected' : ''}>${st} (${RUNEN_STAERKE_KOSTEN[st]} ${escapeHtml(waehrung)})</option>`).join('')}
            </select>
        </div>`).join('');
    body.innerHTML = `
        <p class="hr-hint" style="margin-bottom:0.6rem;">Für <strong>${escapeHtml(item.name)}</strong>. Zuerst Sockel-Anzahl und Runenstärke je Sockel wählen und bezahlen, dann würfeln - das Ergebnis geht als Anfrage an den SL.</p>
        <div class="ir-karte-reihe" style="justify-content:space-between;">
            <span>Anzahl Sockel:</span>
            <select class="ir-groesse-select" onchange="runenSockelAnzahlSetzen(parseInt(this.value))">
                ${[1, 2, 3].map(n => `<option value="${n}" ${n === runenEntwurf.staerken.length ? 'selected' : ''}>${n} (${RUNEN_SOCKEL_KOSTEN[n]} ${escapeHtml(waehrung)})</option>`).join('')}
            </select>
        </div>
        ${sockelHtml}
        <div class="ir-karte-reihe" style="justify-content:space-between; margin-top:0.4rem; font-weight:bold;">
            <span>Gesamtkosten:</span>
            <span style="color:${kosten > guthaben ? '#ed4245' : '#fbbf24'}"><i class="fa-solid fa-coins"></i> ${kosten} ${escapeHtml(waehrung)} (du hast ${guthaben})</span>
        </div>
        <button class="tool-btn" style="width:100%; margin-top:0.8rem; justify-content:center;" onclick="runenWuerfelnUndAnfragen()" ${kosten > guthaben ? 'disabled' : ''}>
            <i class="fa-solid fa-hammer"></i> Bezahlen &amp; würfeln
        </button>`;
}

function runenWuerfelnUndAnfragen() {
    if (!runenEntwurf) return;
    const item = (appData.inventory || []).find(i => i.id === runenEntwurf.itemId);
    if (!item) return;
    const kosten = runenKostenBerechnen(runenEntwurf.staerken);
    const guthaben = appData.currency ? (parseInt(appData.currency.amount) || 0) : 0;
    if (kosten > guthaben) return;
    if (!confirm(`${kosten} ${appData.currency ? appData.currency.name : 'Gold'} für das Schmiede-Roulette an "${item.name}" ausgeben?`)) return;

    // Bezahlen
    appData.currency.amount = guthaben - kosten;
    if (typeof addActivityLog === 'function') addActivityLog(`-${kosten} ${appData.currency.name} (Schmiede-Roulette: ${item.name})`, 'activity-bad', '<i class="fa-solid fa-hammer"></i>');

    // Würfeln - jeder Sockel kann via Jackpot #5 weitere Sockel nachziehen
    let sockelListe = runenEntwurf.staerken.map(s => ({ staerke: s }));
    const ergebnisse = [];
    let i = 0;
    while (i < sockelListe.length && i < 20) { // harte Obergrenze gegen theoretische Endlosketten
        const staerke = sockelListe[i].staerke;
        const res = runenSockelAusloesen(staerke, 0);
        ergebnisse.push({ sockel: i + 1, staerke, effekte: res.effekte });
        if (res.zusatzSockel) sockelListe.push({ staerke });
        i++;
    }

    item.runen = { status: 'wartetAufSl', ergebnisse, investiert: kosten };
    saveData();
    renderInventarRaster();
    runenModalSchliessen();

    const charName = [appData.vorname, appData.name].filter(Boolean).join(' ') || 'Unbekannt';
    if (typeof hostConnection !== 'undefined' && hostConnection && hostConnection.open) {
        try {
            hostConnection.send({ type: 'runenAnfrage', itemId: item.id, itemName: item.name, charName, ergebnisse, investiert: kosten });
        } catch (e) { /* offline / kein Host */ }
    }
}

function runenEinstampfen(itemId) {
    const item = (appData.inventory || []).find(i => i.id === itemId);
    if (!item || !item.runen) return;
    if (item.runen.status !== 'bestaetigt') {
        alert('Nur ein vom SL bestätigtes Roulette-Ergebnis kann eingestampft werden.');
        return;
    }
    const rueckerstattung = Math.floor((item.runen.investiert || 0) * 0.75);
    if (!confirm(`"${item.name}" wirklich beim Schmied einstampfen? Der Gegenstand und alle Runen werden zerstört, du bekommst ${rueckerstattung} ${appData.currency ? appData.currency.name : 'Gold'} zurück.`)) return;
    appData.currency.amount = (parseInt(appData.currency.amount) || 0) + rueckerstattung;
    if (typeof addActivityLog === 'function') addActivityLog(`Eingestampft: ${item.name} (+${rueckerstattung} ${appData.currency.name})`, 'activity-good', '<i class="fa-solid fa-fire"></i>');
    irItemEntfernenOhneConfirm(itemId);
}

// kleine Hilfsfunktion, damit runenEinstampfen nicht zusätzlich den
// "wirklich löschen?"-Dialog von irItemEntfernen auslöst (die Einstampfen-
// Bestätigung darüber reicht schon)
function irItemEntfernenOhneConfirm(itemId) {
    const idx = (appData.inventory || []).findIndex(i => i.id === itemId);
    if (idx < 0) return;
    appData.inventory.splice(idx, 1);
    appData.inventarRaster = irOhneItem(irRasterDaten(), itemId);
    saveData();
    renderInventarRaster();
}

// --- Spieler: Antwort vom SL empfangen -------------------------------------

function runenNachrichtVerarbeiten(payload) {
    if (!payload) return false;
    if (payload.type === 'runenBestaetigt') {
        const item = (appData.inventory || []).find(i => i.id === payload.itemId);
        if (item && item.runen) {
            item.runen.status = 'bestaetigt';
            saveData();
            renderInventarRaster();
            alert(`Der SL hat dein Schmiede-Roulette-Ergebnis für "${item.name}" bestätigt!`);
        }
        return true;
    }
    if (payload.type === 'runenAbgelehnt') {
        const item = (appData.inventory || []).find(i => i.id === payload.itemId);
        if (item) {
            item.runen = null;
            saveData();
            renderInventarRaster();
            alert(`Der SL hat dein Schmiede-Roulette-Ergebnis für "${item.name}" abgelehnt.`);
        }
        return true;
    }
    return false;
}

// --- SL: Anfragen empfangen, bestätigen/ablehnen ---------------------------

function runenAnfrageVerarbeiten(peerId, payload) {
    if (!payload || payload.type !== 'runenAnfrage') return false;
    const key = peerId + '::' + payload.itemId;
    runenAusstehend[key] = Object.assign({ peerId, key }, payload);
    runenPanelRendern();
    return true;
}

function runenPanelRendern() {
    const panel = document.getElementById('runen-anfragen-panel');
    if (!panel) return;
    const keys = Object.keys(runenAusstehend);
    if (keys.length === 0) { panel.style.display = 'none'; panel.innerHTML = ''; return; }
    panel.style.display = 'block';
    panel.innerHTML = `<h4><i class="fa-solid fa-hammer"></i> Schmiede-Roulette - wartet auf Bestätigung</h4>` +
        keys.map(key => {
            const a = runenAusstehend[key];
            const effekteHtml = a.ergebnisse.map(s =>
                `<div style="margin:0.3rem 0; padding-left:0.5rem; border-left:2px solid #fbbf24;">
                    <strong>Sockel ${s.sockel}</strong> (Stufe ${s.staerke}):
                    ${s.effekte.map(e => `<div>🎲 ${e.wuerfel} - <em>${escapeHtml(e.art)}</em>: ${escapeHtml(e.text || '')}</div>`).join('')}
                </div>`
            ).join('');
            return `<div class="runen-anfrage-karte" style="background:rgba(0,0,0,0.25); border-radius:8px; padding:0.6rem; margin-top:0.5rem;">
                <div><strong>${escapeHtml(a.charName)}</strong> - ${escapeHtml(a.itemName)} (${a.investiert} Gold investiert)</div>
                ${effekteHtml}
                <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
                    <button class="tool-btn" onclick="runenBestaetigen('${escapeHtml(key)}')"><i class="fa-solid fa-check"></i> Bestätigen</button>
                    <button class="tool-btn x-mini-danger" onclick="runenAblehnen('${escapeHtml(key)}')"><i class="fa-solid fa-xmark"></i> Ablehnen</button>
                </div>
            </div>`;
        }).join('');
}

function runenBestaetigen(key) {
    const a = runenAusstehend[key];
    if (!a) return;
    const conn = clientConnections[a.peerId];
    if (conn) { try { conn.send({ type: 'runenBestaetigt', itemId: a.itemId }); } catch (e) { /* weg */ } }
    delete runenAusstehend[key];
    runenPanelRendern();
}

function runenAblehnen(key) {
    const a = runenAusstehend[key];
    if (!a) return;
    const conn = clientConnections[a.peerId];
    if (conn) { try { conn.send({ type: 'runenAbgelehnt', itemId: a.itemId }); } catch (e) { /* weg */ } }
    delete runenAusstehend[key];
    runenPanelRendern();
}
