// How to be a Hero - Modul-Sichtbarkeit (Übersicht für SL & Spieler)
//
// Reine Anzeige-Einstellung des SL: blendet komplette Werkzeug-Module (Karte,
// Kampf, Tischmitte, ...) aus - einzeln für sich selbst UND/ODER für alle
// Spieler. Ändert nichts an den Daten dahinter (Tischmitte bleibt z.B. im
// Hintergrund synchron), nur ob das Panel überhaupt angezeigt wird. Gedacht,
// um bei Bedarf aufzuräumen (z.B. Seekampf ausblenden, solange die Gruppe an
// Land ist), nicht als Feature-Freischaltung.
//
// Technik: pro Modul ein GM-Panel-Slot (index.html, data-panel="X") und/oder
// eine Spieler-Sektion (index.html, id="X-section") - beide bekommen bei
// Bedarf die CSS-Klasse "modul-versteckt" (style.css, mit !important, damit
// sie IMMER gewinnt, egal was das jeweilige Modul selbst an style.display
// setzt - siehe modulAnwendenGm/modulAnwendenSpieler).
//
// Nachricht (multiplayer.js): SL -> Spieler { type: 'modulSichtbarkeit', sichtbar: {...} }

const MODUL_GM_KEY = 'htbah_gm_modul_sichtbarkeit';

// spieler: null = kein eigenes Spieler-Panel vorhanden (rein SL-seitiges Werkzeug)
const MODUL_LISTE = [
    { key: 'tischmitte', label: 'Tischmitte', icon: 'fa-hand-holding', gmPanel: 'tischmitte', spielerSection: 'tischmitte-section' },
    { key: 'soeldner', label: 'Söldner-Pool', icon: 'fa-user-ninja', gmPanel: 'soeldner', spielerSection: 'soeldner-section' },
    { key: 'quests', label: 'Quest-Logbuch', icon: 'fa-scroll', gmPanel: 'quests', spielerSection: 'quest-section' },
    { key: 'schiff', label: 'Schiffs-Inventar', icon: 'fa-anchor', gmPanel: 'schiff', spielerSection: 'schiff-section' },
    { key: 'seekampf', label: 'Seekampf', icon: 'fa-water', gmPanel: 'seekampf', spielerSection: 'seekampf-section' },
    { key: 'karte', label: 'Karte', icon: 'fa-map', gmPanel: 'karte', spielerSection: 'karte-section' },
    { key: 'kampf', label: 'Kampf-Tracker', icon: 'fa-hand-fist', gmPanel: 'kampf', spielerSection: 'kampf-section' },
    { key: 'nscliste', label: 'NSC-Liste', icon: 'fa-users', gmPanel: 'nscliste', spielerSection: null },
    { key: 'randomizer', label: 'Zufallsgenerator', icon: 'fa-dice', gmPanel: 'randomizer', spielerSection: null }
];

// { [key]: { gm: bool, spieler: bool } } - fehlender Key/fehlendes Feld = sichtbar
// (true), damit eine leere/alte Einstellungsdatei nie etwas versteckt, das vorher
// sichtbar war.
let modulSichtbarkeitGm = {};
// Spieler: die vom SL zuletzt gesendete Einstellung
let modulSichtbarkeitSpieler = {};

function modulGmSichtbar(key) {
    const e = modulSichtbarkeitGm[key];
    return !e || e.gm !== false;
}
function modulSpielerSichtbar(key) {
    const e = modulSichtbarkeitGm[key];
    return !e || e.spieler !== false;
}

function modulLaden() {
    try {
        const roh = localStorage.getItem(MODUL_GM_KEY);
        modulSichtbarkeitGm = roh ? JSON.parse(roh) : {};
    } catch (e) { modulSichtbarkeitGm = {}; }
}

function modulSichern() {
    sicherSpeichern(MODUL_GM_KEY, JSON.stringify(modulSichtbarkeitGm));
}

// Wendet die aktuelle Einstellung auf die eigenen (SL-) Panel-Slots an.
function modulAnwendenGm() {
    MODUL_LISTE.forEach(m => {
        if (!m.gmPanel) return;
        const slot = document.querySelector(`.gm-panel-slot[data-panel="${m.gmPanel}"]`);
        if (slot) slot.classList.toggle('modul-versteckt', !modulGmSichtbar(m.key));
    });
}

// Wendet die vom SL zuletzt empfangene Einstellung auf die eigenen (Spieler-)
// Sektionen an - unabhängig davon, ob/wie oft das jeweilige Modul gerade neu
// rendert (die CSS-Klasse überlebt jeden renderXSpieler()-Aufruf).
function modulAnwendenSpieler() {
    MODUL_LISTE.forEach(m => {
        if (!m.spielerSection) return;
        const el = document.getElementById(m.spielerSection);
        if (!el) return;
        const e = modulSichtbarkeitSpieler[m.key];
        const sichtbar = !e || e.spieler !== false;
        el.classList.toggle('modul-versteckt', !sichtbar);
    });
}

function modulCommit() {
    modulSichern();
    modulAnwendenGm();
    if (typeof clientConnections !== 'undefined') {
        const nachricht = { type: 'modulSichtbarkeit', sichtbar: modulSichtbarkeitGm };
        Object.values(clientConnections).forEach(conn => {
            if (conn && conn.open) { try { conn.send(nachricht); } catch (e) { /* weg */ } }
        });
    }
    renderModulModal();
}

function modulAnVerbindung(conn) {
    if (!conn || !conn.open) return;
    try { conn.send({ type: 'modulSichtbarkeit', sichtbar: modulSichtbarkeitGm }); } catch (e) { /* weg */ }
}

function modulUmschalten(key, feld) {
    const aktuell = modulSichtbarkeitGm[key] || { gm: true, spieler: true };
    const naechster = Object.assign({ gm: true, spieler: true }, aktuell);
    naechster[feld] = !naechster[feld];
    modulSichtbarkeitGm = Object.assign({}, modulSichtbarkeitGm, { [key]: naechster });
    modulCommit();
}

function modulAlleZuruecksetzen() {
    modulSichtbarkeitGm = {};
    modulCommit();
}

function modulModalOeffnen() {
    renderModulModal();
    const overlay = document.getElementById('modul-modal-overlay');
    if (overlay) overlay.classList.add('active');
}

function modulModalSchliessen() {
    const overlay = document.getElementById('modul-modal-overlay');
    if (overlay) overlay.classList.remove('active');
}

function renderModulModal() {
    const body = document.getElementById('modul-modal-body');
    if (!body) return;
    const zeilen = MODUL_LISTE.map(m => `
        <div class="tm-item">
            <div class="tm-item-kopf">
                <i class="fa-solid ${m.icon} tm-art-icon"></i>
                <span class="tm-item-name">${escapeHtml(m.label)}</span>
            </div>
            <div class="tm-item-actions">
                <label class="gm-toggle" title="Blendet das Panel in deinem eigenen Dashboard aus/ein">
                    <input type="checkbox" ${modulGmSichtbar(m.key) ? 'checked' : ''} onchange="modulUmschalten('${m.key}','gm')">
                    <span><i class="fa-solid fa-chess-king"></i> Ich sehe es</span>
                </label>
                ${m.spielerSection ? `<label class="gm-toggle" title="Blendet den Abschnitt bei allen Spielern aus/ein">
                    <input type="checkbox" ${modulSpielerSichtbar(m.key) ? 'checked' : ''} onchange="modulUmschalten('${m.key}','spieler')">
                    <span><i class="fa-solid fa-users"></i> Spieler sehen es</span>
                </label>` : '<span class="ir-hint" style="margin:0">Rein SL-seitiges Werkzeug, Spieler sehen ohnehin nichts davon.</span>'}
            </div>
        </div>`).join('');
    body.innerHTML = `
        <h3><i class="fa-solid fa-table-cells-large"></i> Module ein-/ausblenden</h3>
        <p class="ir-hint" style="margin-bottom:0.6rem;">Nur eine Anzeige-Einstellung - die Daten hinter einem ausgeblendeten Modul bleiben erhalten und laufen im Hintergrund weiter synchron.</p>
        <div class="tm-list">${zeilen}</div>
        <button class="gm-btn gm-btn-ghost" style="margin-top:0.8rem; width:100%; justify-content:center;" onclick="modulAlleZuruecksetzen()"><i class="fa-solid fa-rotate-left"></i> Alles wieder einblenden</button>`;
}

// --- Spieler --------------------------------------------------------------

function modulSichtbarkeitEmpfangen(sichtbar) {
    modulSichtbarkeitSpieler = sichtbar && typeof sichtbar === 'object' ? sichtbar : {};
    modulAnwendenSpieler();
}

function modulNachrichtVerarbeiten(payload) {
    if (!payload || payload.type !== 'modulSichtbarkeit') return false;
    modulSichtbarkeitEmpfangen(payload.sichtbar);
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    modulLaden();
    modulAnwendenGm();
});
