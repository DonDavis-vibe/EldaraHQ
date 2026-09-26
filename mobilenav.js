// How to be a Hero - Handy-Schnellnavigation
//
// Wunsch aus der Runde: auf dem Handy ist der Charakterbogen eine einzige
// lange Seite (die drei Grid-Spalten Toolbar/links/rechts stacken sich unter
// 768px zu "toolbar" "left" "notes" "right", siehe style.css), und zwischen
// z.B. Logbuch (ganz unten rechts) und Inventar (weit oben links) hin- und
// herzuscrollen ist auf einem Touchscreen mühsam. Diese Leiste bleibt beim
// Scrollen am unteren Bildschirmrand stehen ("mitscrollend") und springt per
// Klick/Tipp direkt zum gewünschten Panel (scrollIntoView) - nur unterhalb
// der Mobile-Breakpoint sichtbar, siehe .mobile-nav in style.css.
//
// Nur Panels, die gerade tatsächlich sichtbar sind, bekommen einen Eintrag -
// bei Eldara ist z.B. "Waffen" immer versteckt (die Waffen leben im
// Rasterinventar), und Tischmitte/Quests/Schiff/Karte/Kampf/Gruppe erscheinen
// erst, sobald eine Multiplayer-Verbindung steht bzw. der SL etwas freigibt.
// Deshalb beobachtet ein MutationObserver die style-Attribute der
// veränderlichen Panels und rendert bei Bedarf neu, statt die Liste einmalig
// fest zu verdrahten.

const MOBILENAV_ZIELE = [
    { id: 'charakter-kopf', icon: 'fa-id-card', label: 'Start', immer: true },
    { id: 'attributes-grid', icon: 'fa-list-check', label: 'Fertigkeiten', immer: true },
    { id: 'talentbaum-section', icon: 'fa-sitemap', label: 'Talente' },
    { id: 'inventory-section', icon: 'fa-box-open', label: 'Inventar', immer: true },
    { id: 'tischmitte-section', icon: 'fa-box-archive', label: 'Tischmitte' },
    { id: 'quest-section', icon: 'fa-scroll', label: 'Quests' },
    { id: 'spielerlog-section', icon: 'fa-journal-whills', label: 'Mein Log' },
    { id: 'schiff-section', icon: 'fa-sailboat', label: 'Schiff' },
    { id: 'seekampf-section', icon: 'fa-water', label: 'Seekampf' },
    { id: 'karte-section', icon: 'fa-map', label: 'Karte' },
    { id: 'kampf-section', icon: 'fa-hand-fist', label: 'Kampf' },
    { id: 'notes-panel', icon: 'fa-pen', label: 'Notizen', immer: true },
    { id: 'hp-panel', icon: 'fa-heart', label: 'HP', immer: true },
    { id: 'dice-panel', icon: 'fa-dice-d20', label: 'Würfel', immer: true },
    { id: 'teamwuerfel-section', icon: 'fa-users-viewfinder', label: 'Team-Würfel' },
    { id: 'gruppe-panel', icon: 'fa-people-group', label: 'Gruppe' },
    { id: 'activity-log-panel', icon: 'fa-book', label: 'Logbuch', immer: true }
];

let mobilenavBeobachtet = false;
let mobilenavTimer = null;

function mobilenavSichtbar(el) {
    if (!el) return false;
    if (el.style.display === 'none') return false;
    // offsetParent ist null, wenn ein Vorfahre (z.B. .app-container im
    // GM-Modus) display:none hat - fängt auch indirekt verstecktes ab.
    return el.offsetParent !== null || el.getClientRects().length > 0;
}

function mobilenavRender() {
    const nav = document.getElementById('mobile-nav');
    if (!nav) return;
    mobilenavBeobachten(); // einmalig, unabhängig vom aktuellen Sichtbarkeits-Stand
    // Im GM-Dashboard gibt es diese Leiste nicht - eigenes Layout, eigenes Thema.
    if (typeof isGmMode !== 'undefined' && isGmMode) { nav.style.display = 'none'; return; }

    const eintraege = MOBILENAV_ZIELE
        .map(z => ({ ziel: z, el: document.getElementById(z.id) }))
        .filter(e => mobilenavSichtbar(e.el));

    if (eintraege.length < 2) { nav.style.display = 'none'; return; }
    nav.style.display = '';

    nav.innerHTML = eintraege.map(e => `
        <button type="button" class="mobile-nav-chip" data-mobilnavziel="${e.ziel.id}">
            <i class="fa-solid ${e.ziel.icon}"></i>
            <span>${e.ziel.label}</span>
        </button>`).join('');

    nav.querySelectorAll('[data-mobilnavziel]').forEach(btn => {
        btn.addEventListener('click', () => mobilenavSpringenZu(btn.dataset.mobilnavziel));
    });
}

function mobilenavSpringenZu(id) {
    const ziel = document.getElementById(id);
    if (!ziel) return;
    ziel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    ziel.classList.add('mobile-nav-highlight');
    setTimeout(() => ziel.classList.remove('mobile-nav-highlight'), 1200);
}

// Beobachtet nur die Panels, die tatsächlich ein- und ausgeblendet werden
// (nicht die immer sichtbaren) sowie den App-Container selbst (GM-Modus
// blendet ihn komplett aus) - läuft nur einmal an, die Observer selbst
// bleiben über die ganze Sitzung aktiv.
function mobilenavBeobachten() {
    if (mobilenavBeobachtet) return;
    mobilenavBeobachtet = true;
    const beobachten = (el) => {
        if (!el) return;
        new MutationObserver(mobilenavVerzoegertRendern).observe(el, { attributes: true, attributeFilter: ['style'] });
    };
    MOBILENAV_ZIELE.filter(z => !z.immer).forEach(z => beobachten(document.getElementById(z.id)));
    beobachten(document.querySelector('.app-container'));
    beobachten(document.getElementById('gm-dashboard'));
}

function mobilenavVerzoegertRendern() {
    clearTimeout(mobilenavTimer);
    mobilenavTimer = setTimeout(mobilenavRender, 150);
}

document.addEventListener('DOMContentLoaded', mobilenavRender);
