// How to be a Hero - Söldner-Pool (rekrutierbare Mietlinge)
//
// Ergänzt die "Gehört zu"-Idee (app.js/index.html, freies Textfeld am
// Charakterbogen für "Söldner von X"): hier kann der SL vollwertige
// Zweitcharaktere (eigener Talentbaum, eigenes Rasterinventar) VORBEREITEN
// und der Gruppe zur Rekrutierung anbieten, statt dass jeder Spieler seinen
// Söldner selbst von Null bauen muss.
//
// Der SL baut den Söldner ganz normal als eigenen Charakterbogen (zweiter
// Tab, "Speichern (JSON)") und lädt die Export-Datei hier hoch - dieselbe
// Datei, die ein Spieler sonst über "Laden (JSON)" importieren würde. Der
// Pool selbst überträgt nur Name/Beruf/Kurzbeschreibung an alle Spieler
// (die vollständigen Charakterdaten können groß sein, u.a. durch ein
// eingebettetes Portrait) - erst beim tatsächlichen Rekrutieren schickt der
// SL die kompletten Daten an genau den einen Spieler, der zugegriffen hat.
// Der Spieler bekommt die Datei automatisch heruntergeladen und importiert
// sie in einem NEUEN Tab über "Laden (JSON)" - ein vollwertiger
// Zweitcharakter braucht zwangsläufig eine eigene Verbindung (siehe
// Kopfkommentar inventarraster.js zu appData als Singleton pro Tab).
//
// Nachrichten (multiplayer.js):
//   SL -> Spieler   { type: 'soeldnerPool', pool: [{id,name,beruf,kurzbeschreibung}] }
//                   { type: 'soeldnerRekrutiert', soeldner: {name, daten} }
//                   { type: 'soeldnerAbgelehnt', id }
//   Spieler -> SL   { type: 'soeldnerRekrutieren', id }
//
// Eintrag (nur beim SL vollständig): { id, name, beruf, kurzbeschreibung, hidden, daten }

const SOELDNER_GM_KEY = 'htbah_gm_soeldner';
const SOELDNER_GM_OFFEN_KEY = 'htbah_gm_soeldner_offen';

let soeldnerPoolGm = [];       // Beim SL kanonisch (inkl. versteckt + volle Daten)
let soeldnerPoolSpieler = [];  // Beim Spieler die sichtbare Kurzfassung (ohne daten)
let soeldnerOffenGm = true;
let soeldnerOffenSpieler = false;
const soeldnerAnfragen = {};   // Spieler: id -> true, solange eine Rekrutieren-Anfrage unterwegs ist
let soeldnerHochgeladeneDaten = null; // SL: Zwischenspeicher für die zuletzt hochgeladene Datei, bis "Hinzufügen" geklickt wird

function soeldnerLaden() {
    try {
        const roh = localStorage.getItem(SOELDNER_GM_KEY);
        soeldnerPoolGm = roh ? JSON.parse(roh) : [];
    } catch (e) { soeldnerPoolGm = []; }
    try { soeldnerOffenGm = localStorage.getItem(SOELDNER_GM_OFFEN_KEY) !== '0'; } catch (e) { soeldnerOffenGm = true; }
}

function soeldnerSichern() {
    sicherSpeichern(SOELDNER_GM_KEY, JSON.stringify(soeldnerPoolGm));
}

function soeldnerNeueId() {
    return 'sold_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// Nur die für Spieler bestimmten Felder, nie "daten" (Bandbreite + erst beim
// tatsächlichen Rekrutieren nötig) und nie versteckte Einträge.
function soeldnerKurzfassung() {
    return soeldnerPoolGm.filter(s => !s.hidden).map(s => ({ id: s.id, name: s.name, beruf: s.beruf, kurzbeschreibung: s.kurzbeschreibung }));
}

function soeldnerCommit(next) {
    soeldnerPoolGm = next;
    soeldnerSichern();
    if (typeof clientConnections !== 'undefined') {
        const nachricht = { type: 'soeldnerPool', pool: soeldnerKurzfassung() };
        Object.values(clientConnections).forEach(conn => {
            if (conn && conn.open) { try { conn.send(nachricht); } catch (e) { /* weg */ } }
        });
    }
    renderSoeldnerGm();
}

function soeldnerAnVerbindung(conn) {
    if (!conn || !conn.open) return;
    try { conn.send({ type: 'soeldnerPool', pool: soeldnerKurzfassung() }); } catch (e) { /* weg */ }
}

// --- SL -----------------------------------------------------------------

function soeldnerDateiGewaehlt(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const daten = JSON.parse(e.target.result);
            soeldnerHochgeladeneDaten = daten;
            const nameEl = document.getElementById('sold-neu-name');
            const berufEl = document.getElementById('sold-neu-beruf');
            if (nameEl && !nameEl.value) nameEl.value = [daten.vorname, daten.name].filter(Boolean).join(' ');
            if (berufEl && !berufEl.value) berufEl.value = daten.beruf || '';
            const status = document.getElementById('sold-datei-status');
            if (status) status.textContent = `"${file.name}" geladen (${Math.round(e.target.result.length / 1024)} KB).`;
        } catch (err) {
            soeldnerHochgeladeneDaten = null;
            alert('Diese Datei ist kein gültiger Charakter-Export (JSON).');
        }
    };
    reader.readAsText(file);
}

function soeldnerHinzufuegen() {
    if (!soeldnerHochgeladeneDaten) { alert('Zuerst eine Charakter-JSON-Datei wählen (vorher als Charakter unter "Speichern (JSON)" exportiert).'); return; }
    const nameEl = document.getElementById('sold-neu-name');
    const berufEl = document.getElementById('sold-neu-beruf');
    const beschreibungEl = document.getElementById('sold-neu-beschreibung');
    const hiddenEl = document.getElementById('sold-neu-hidden');
    const name = (nameEl ? nameEl.value : '').trim() || 'Unbenannt';

    const eintrag = {
        id: soeldnerNeueId(),
        name,
        beruf: (berufEl ? berufEl.value : '').trim(),
        kurzbeschreibung: (beschreibungEl ? beschreibungEl.value : '').trim(),
        hidden: hiddenEl ? hiddenEl.checked : true,
        daten: soeldnerHochgeladeneDaten
    };
    soeldnerCommit([eintrag].concat(soeldnerPoolGm));

    soeldnerHochgeladeneDaten = null;
    if (nameEl) nameEl.value = '';
    if (berufEl) berufEl.value = '';
    if (beschreibungEl) beschreibungEl.value = '';
    const fileEl = document.getElementById('sold-neu-datei');
    if (fileEl) fileEl.value = '';
    const status = document.getElementById('sold-datei-status');
    if (status) status.textContent = '';
}

function soeldnerEntfernen(id) {
    soeldnerCommit(soeldnerPoolGm.filter(s => s.id !== id));
}

function soeldnerVerstecktToggle(id) {
    soeldnerCommit(soeldnerPoolGm.map(s => s.id === id ? Object.assign({}, s, { hidden: !s.hidden }) : s));
}

// Anfragen der Spieler (aus handleIncomingData in multiplayer.js)
function soeldnerAnfrageVerarbeiten(peerId, payload) {
    if (!payload || payload.type !== 'soeldnerRekrutieren') return false;
    const conn = typeof clientConnections !== 'undefined' ? clientConnections[peerId] : null;
    const eintrag = soeldnerPoolGm.find(s => s.id === payload.id && !s.hidden);
    const spielerName = typeof connectedPlayersData !== 'undefined' && connectedPlayersData[peerId]
        ? [connectedPlayersData[peerId].vorname, connectedPlayersData[peerId].name].filter(Boolean).join(' ') || 'Unbekannt' : 'Unbekannt';
    if (eintrag && conn && conn.open) {
        soeldnerCommit(soeldnerPoolGm.filter(s => s.id !== eintrag.id));
        try { conn.send({ type: 'soeldnerRekrutiert', soeldner: { id: eintrag.id, name: eintrag.name, daten: eintrag.daten } }); } catch (e) { /* weg */ }
        if (typeof addGmLogEntry === 'function') addGmLogEntry(spielerName, `rekrutiert Söldner "${eintrag.name}".`, '🤝');
    } else if (conn && conn.open) {
        try { conn.send({ type: 'soeldnerAbgelehnt', id: payload.id }); } catch (e) { /* weg */ }
    }
    return true;
}

function renderSoeldnerGm() {
    const box = document.getElementById('gm-soeldner');
    if (!box) return;

    const zeilen = soeldnerPoolGm.map(s => `
        <div class="tm-item ${s.hidden ? 'tm-item-hidden' : ''}">
            <div class="tm-item-kopf">
                <i class="fa-solid fa-user-ninja tm-art-icon" title="Söldner"></i>
                <span class="tm-item-name">${escapeHtml(s.name)}${s.beruf ? ` <span style="opacity:.6; font-weight:normal;">(${escapeHtml(s.beruf)})</span>` : ''}</span>
                <span class="tm-badge ${s.hidden ? 'tm-badge-hidden' : 'tm-badge-visible'}">${s.hidden ? '<i class="fa-solid fa-eye-slash"></i> versteckt' : '<i class="fa-solid fa-eye"></i> sichtbar'}</span>
            </div>
            ${s.kurzbeschreibung ? `<div class="tm-item-desc">${escapeHtml(s.kurzbeschreibung)}</div>` : ''}
            <div class="tm-item-actions">
                <button class="gm-btn" data-soldtoggle="${escapeHtml(s.id)}" title="${s.hidden ? 'Für alle Spieler zur Rekrutierung freigeben' : 'Vor den Spielern verstecken'}">
                    <i class="fa-solid ${s.hidden ? 'fa-eye' : 'fa-eye-slash'}"></i> ${s.hidden ? 'Freigeben' : 'Verstecken'}
                </button>
                <button class="gm-btn gm-btn-ghost tm-del" data-solddel="${escapeHtml(s.id)}" title="Entfernen"><i class="fa-solid fa-trash" style="color:var(--color-dmg)"></i></button>
            </div>
        </div>`).join('');

    box.innerHTML = `
        <details class="x-details tm-details" ${soeldnerOffenGm ? 'open' : ''}>
        <summary class="tm-head">
            <div class="tm-title"><i class="fa-solid fa-chevron-right x-chevron"></i> <i class="fa-solid fa-user-ninja"></i> Söldner-Pool
                ${soeldnerPoolGm.length ? `<span class="x-count">${soeldnerPoolGm.length}</span>` : ''}
                <i class="fa-solid fa-circle-question help-icon" onclick="event.preventDefault(); event.stopPropagation(); showHelp('soeldner')" title="Hilfe zum Söldner-Pool"></i>
            </div>
        </summary>
        <p class="ir-hint" style="margin:0.5rem 0;">Baue den Söldner als eigenen Charakter in einem zweiten Tab (eigener Talentbaum, eigenes Inventar), exportiere ihn dort über "Speichern (JSON)" und lade die Datei hier hoch.</p>
        <div class="tm-form">
            <input type="file" id="sold-neu-datei" accept="application/json" onchange="soeldnerDateiGewaehlt(event)">
            <input type="text" id="sold-neu-name" class="x-input tm-input" placeholder="Name">
            <input type="text" id="sold-neu-beruf" class="x-input tm-input" placeholder="Beruf (optional)">
            <input type="text" id="sold-neu-beschreibung" class="x-input tm-input tm-input-desc" placeholder="Kurzbeschreibung für die Spieler (optional)">
            <label class="gm-toggle" title="Versteckt anlegen: nur du siehst den Eintrag, bis du ihn freigibst">
                <input type="checkbox" id="sold-neu-hidden" checked> <span><i class="fa-solid fa-eye-slash"></i> versteckt</span>
            </label>
            <button class="gm-btn tm-add" onclick="soeldnerHinzufuegen()"><i class="fa-solid fa-plus"></i> Zum Pool hinzufügen</button>
            <div id="sold-datei-status" class="ir-hint" style="margin:0;"></div>
        </div>
        <div class="tm-list">${zeilen || '<div class="x-leer">Noch kein Söldner vorbereitet.</div>'}</div>
        </details>`;

    const details = box.querySelector('details');
    if (details) details.addEventListener('toggle', () => {
        soeldnerOffenGm = details.open;
        sicherSpeichern(SOELDNER_GM_OFFEN_KEY, details.open ? '1' : '0');
    });
    box.querySelectorAll('[data-soldtoggle]').forEach(b => b.addEventListener('click', () => soeldnerVerstecktToggle(b.dataset.soldtoggle)));
    box.querySelectorAll('[data-solddel]').forEach(b => b.addEventListener('click', () => soeldnerEntfernen(b.dataset.solddel)));
}

// --- Spieler --------------------------------------------------------------

function soeldnerVerbunden() {
    return typeof hostConnection !== 'undefined' && hostConnection && hostConnection.open;
}

function soeldnerPoolEmpfangen(pool) {
    soeldnerPoolSpieler = Array.isArray(pool) ? pool : [];
    Object.keys(soeldnerAnfragen).forEach(id => { if (!soeldnerPoolSpieler.some(s => s.id === id)) delete soeldnerAnfragen[id]; });
    renderSoeldnerSpieler();
}

function soeldnerRekrutieren(id) {
    if (!soeldnerVerbunden() || soeldnerAnfragen[id]) return;
    soeldnerAnfragen[id] = true;
    try { hostConnection.send({ type: 'soeldnerRekrutieren', id }); } catch (e) { delete soeldnerAnfragen[id]; }
    renderSoeldnerSpieler();
}

// Download anstoßen wie exportData() in app.js - der Spieler importiert die
// Datei danach in einem NEUEN Tab über "Laden (JSON)".
function soeldnerRekrutiertEmpfangen(soeldner) {
    if (!soeldner || !soeldner.daten) return;
    delete soeldnerAnfragen[soeldner.id];
    soeldnerPoolSpieler = soeldnerPoolSpieler.filter(s => s.id !== soeldner.id);
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(soeldner.daten, null, 2));
    const a = document.createElement('a');
    a.setAttribute('href', dataStr);
    const dateiname = (soeldner.name || 'soeldner').trim().replace(/[^a-zA-Z0-9äöüÄÖÜß_-]+/g, '_');
    a.setAttribute('download', dateiname + '.json');
    document.body.appendChild(a);
    a.click();
    a.remove();
    renderSoeldnerSpieler();
    alert(`"${soeldner.name}" wurde rekrutiert! Die Charakterdatei wurde heruntergeladen - öffne einen NEUEN Browser-Tab, lade sie dort über "Laden (JSON)" und tritt mit demselben Raumcode bei.`);
}

function soeldnerAbgelehntEmpfangen(id) {
    delete soeldnerAnfragen[id];
    soeldnerPoolSpieler = soeldnerPoolSpieler.filter(s => s.id !== id);
    renderSoeldnerSpieler();
    alert('Zu spät - den hat sich schon jemand anders geschnappt.');
}

function renderSoeldnerSpieler() {
    const section = document.getElementById('soeldner-section');
    if (!section) return;
    if (!soeldnerVerbunden() || (typeof isGmMode !== 'undefined' && isGmMode) || !soeldnerPoolSpieler.length) {
        section.style.display = 'none';
        section.innerHTML = '';
        return;
    }
    section.style.display = '';

    const karten = soeldnerPoolSpieler.map(s => {
        const wartet = !!soeldnerAnfragen[s.id];
        return `
        <div class="tm-item card-layout">
            <div class="tm-item-kopf">
                <i class="fa-solid fa-user-ninja tm-art-icon" title="Söldner"></i>
                <span class="tm-item-name">${escapeHtml(s.name)}${s.beruf ? ` <span style="opacity:.6; font-weight:normal;">(${escapeHtml(s.beruf)})</span>` : ''}</span>
            </div>
            ${s.kurzbeschreibung ? `<div class="tm-item-desc">${escapeHtml(s.kurzbeschreibung)}</div>` : ''}
            <div class="tm-item-actions">
                <button class="tool-btn" data-soldrekrutieren="${escapeHtml(s.id)}" ${wartet ? 'disabled' : ''}>
                    <i class="fa-solid ${wartet ? 'fa-spinner fa-spin' : 'fa-handshake'}"></i> ${wartet ? 'Wird rekrutiert …' : 'Rekrutieren'}
                </button>
            </div>
        </div>`;
    }).join('');

    section.innerHTML = `
        <details class="x-details tm-details" ${soeldnerOffenSpieler ? 'open' : ''}>
        <summary class="tm-head">
            <h2 class="cat-title" style="margin:0"><i class="fa-solid fa-chevron-right x-chevron"></i> <i class="fa-solid fa-user-ninja category-icon-fa"></i> Söldner verfügbar
                <span class="x-count">${soeldnerPoolSpieler.length}</span>
                <i class="fa-solid fa-circle-question help-icon" onclick="event.preventDefault(); event.stopPropagation(); showHelp('soeldner')" title="Hilfe zum Söldner-Pool"></i></h2>
        </summary>
        <div class="tm-list">${karten}</div>
        </details>`;

    const details = section.querySelector('details');
    if (details) details.addEventListener('toggle', () => { soeldnerOffenSpieler = details.open; });
    section.querySelectorAll('[data-soldrekrutieren]').forEach(b => b.addEventListener('click', () => soeldnerRekrutieren(b.dataset.soldrekrutieren)));
}

// Beim Spieler eintreffende Nachrichten (aus multiplayer.js). true = verarbeitet.
function soeldnerNachrichtVerarbeiten(payload) {
    if (!payload) return false;
    if (payload.type === 'soeldnerPool') { soeldnerPoolEmpfangen(payload.pool); return true; }
    if (payload.type === 'soeldnerRekrutiert') { soeldnerRekrutiertEmpfangen(payload.soeldner); return true; }
    if (payload.type === 'soeldnerAbgelehnt') { soeldnerAbgelehntEmpfangen(payload.id); return true; }
    return false;
}

function soeldnerBeitritt() {
    soeldnerPoolSpieler = [];
    soeldnerOffenSpieler = false;
    Object.keys(soeldnerAnfragen).forEach(k => delete soeldnerAnfragen[k]);
    renderSoeldnerSpieler();
}

function soeldnerGetrennt() {
    soeldnerPoolSpieler = [];
    soeldnerOffenSpieler = false;
    Object.keys(soeldnerAnfragen).forEach(k => delete soeldnerAnfragen[k]);
    renderSoeldnerSpieler();
}

document.addEventListener('DOMContentLoaded', () => {
    soeldnerLaden();
    renderSoeldnerGm();
});
