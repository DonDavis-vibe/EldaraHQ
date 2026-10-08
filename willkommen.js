// Einmalige Willkommens-/Update-Nachricht. Zeigt sich genau einmal pro
// Browser, wenn die zuletzt gesehene Version (localStorage) nicht mehr der
// aktuellen APP_VERSION (app.js) entspricht - danach nie wieder, bis die
// nächste APP_VERSION-Erhöhung samt neuem WILLKOMMEN_NEUIGKEITEN-Eintrag
// kommt. Rein informativ, keine appData-Abhängigkeit, läuft daher schon vor
// dem Laden eines Charakters.
const WILLKOMMEN_STORAGE_KEY = 'eldaraWillkommenVersion';

// Kurze, für Smartphones taugliche Stichpunkte zur zuletzt veröffentlichten
// Änderungswelle - bei neuer APP_VERSION hier den Text austauschen, nicht
// anhängen (sonst wird die Liste mit der Zeit zu lang für eine Willkommens-
// Nachricht).
const WILLKOMMEN_NEUIGKEITEN = [
    'Neu: <b>Herstellen & Benutzen</b> - Gifte, Öle, Heilsalben und Tränke aus dem Regelwerk 5.1 herstellen und im Inventar benutzen; Buffs fließen in deine Proben ein',
    'Neu: <b>Besondere Eigenschaften im Einsatz</b>, <b>Monsterform</b> und <b>Skills zurück</b> nach Kampfende (über 50 % LP) bzw. Nachtruhe',
    'Seekampf, 0-LP-Rettungswurf und nächtliche Regeneration nach Regelwerk 5.1; Kampf-Tracker mit Aktionen A/B/Extra',
    'Neu: <b>Handouts</b> - der Spielleiter kann dir Briefe, Bilder und Vorlesetexte zeigen; was er gezeigt hat, bleibt über den Knopf „Handouts“ nachlesbar',
    'Neu: <b>Anflüstern</b> - der Spielleiter kann dir private Nachrichten schicken, die nur du siehst (Hinweiskarte oben, später nachlesbar unter „Flüsterpost“)',
    '<b>Talentbaum und Besondere Eigenschaften auf Regelwerk 5.1 aktualisiert</b> - viele Skills sind neu, umbenannt oder in anderen Bäumen (z.B. Wilde Wut statt Berserker-Skill, „Agilität" heißt jetzt „Athletik")',
    '<b>Wichtig:</b> Bisher vergebene Skills und Besondere Eigenschaften werden einmalig zurückgesetzt - bitte neu vergeben. Deine Punkte bleiben, ein Hinweis im Talentbaum zeigt, was du vorher hattest',
];

function willkommenPruefen() {
    // Wer über einen Einladungslink kommt, soll direkt beitreten können - ohne
    // davorliegendes Overlay. Nicht als gesehen markiert, kommt beim nächsten Mal.
    if (typeof MULTIPLAYER_EINLADUNG !== 'undefined' && MULTIPLAYER_EINLADUNG) return;
    let gesehen = null;
    try { gesehen = localStorage.getItem(WILLKOMMEN_STORAGE_KEY); } catch (e) { /* Privates Fenster o.ä. */ }
    if (gesehen === APP_VERSION) return;
    willkommenAnzeigen();
}

function willkommenAnzeigen() {
    const body = document.getElementById('willkommen-modal-body');
    if (!body) return;
    body.innerHTML = `
        <h3><i class="fa-solid fa-anchor"></i> Willkommen an Bord!</h3>
        <p>EldaraHQ läuft jetzt auf <b>App v${escapeHtml(APP_VERSION)}</b> mit <b>Regelwerk ${escapeHtml(APP_REGELWERK_VERSION)}</b>.</p>
        <p style="margin-bottom:0.4rem;"><b>Was ist neu?</b></p>
        <ul style="margin:0 0 0.8rem 0; padding-left:1.2rem; line-height:1.7;">
            ${WILLKOMMEN_NEUIGKEITEN.map(n => `<li>${n}</li>`).join('')}
        </ul>
        <button class="tool-btn" style="width:100%; justify-content:center;" onclick="willkommenSchliessen()">
            <i class="fa-solid fa-check"></i> Verstanden, los geht's
        </button>`;
    const overlay = document.getElementById('willkommen-modal-overlay');
    if (overlay) overlay.classList.add('active');
}

function willkommenSchliessen() {
    const overlay = document.getElementById('willkommen-modal-overlay');
    if (overlay) overlay.classList.remove('active');
    try { localStorage.setItem(WILLKOMMEN_STORAGE_KEY, APP_VERSION); } catch (e) { /* Privates Fenster o.ä. */ }
}

function footerVersionRendern() {
    const el = document.getElementById('footer-version-line');
    if (el) el.textContent = `App v${APP_VERSION} · Eldara-Regelwerk ${APP_REGELWERK_VERSION}`;
}

document.addEventListener('DOMContentLoaded', () => {
    footerVersionRendern();
    willkommenPruefen();
});
