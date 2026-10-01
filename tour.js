// How to be a Hero - Erste-Schritte-Tour
//
// Kurze, klickbare Tour durch die wichtigsten Bereiche des Charakterbogens -
// Reaktion auf Feedback aus einer echten Session: neue Spieler waren von der
// Oberfläche beim ersten Öffnen überfordert. Startet automatisch beim
// allerersten Besuch (eigener localStorage-Key, unabhängig von der
// versionsbasierten Willkommens-Nachricht in willkommen.js - die zeigt bei
// JEDER Versions-Erhöhung, die Tour nur EIN einziges Mal), lässt sich über
// den "Tour" -Link im Footer aber jederzeit erneut starten.
//
// Technik: kein Tour-Plugin, nur eine feste Liste aus {selector, titel, text}.
// Schritte ohne Element (selector:null) zeigen nur die Box zentriert, Schritte
// mit Element bekommen einen Glow-Rahmen (siehe .tour-highlight-ziel,
// style.css) und eine Sprechblase daneben. Elemente, die gerade nicht im DOM
// sind oder nicht sichtbar (z.B. Talentbaum ohne aktives Eldara-Regelpaket),
// werden übersprungen statt die Tour abzubrechen.

const TOUR_STORAGE_KEY = 'eldaraTourGesehen';

const TOUR_SCHRITTE = [
    { selector: null, titel: '👋 Kurze Tour gefällig?', text: 'EldaraHQ hat einiges an Funktionen - hier die wichtigsten Stellen in unter einer Minute. Mit "Weiter" geht\'s los, "Überspringen" bricht jederzeit ab.' },
    { selector: '#charakter-kopf', titel: 'Dein Charakter', titelOhneHash: true, text: 'Name, Beruf, Alter, Statur - und per Klick auf das Bild lädst du ein eigenes Portrait hoch.' },
    { selector: '#hp-panel', titel: 'Lebenspunkte', text: 'Hier dein aktueller und maximaler HP-Wert. Die Schnellknöpfe weiter unten (-10/-5/-1/+1/+5/+10) ändern den aktuellen Wert, ohne dass du erst reinklicken musst.' },
    { selector: '#fertigkeiten-details', titel: 'Fertigkeiten & Würfeln', text: 'Klick einfach auf einen Fertigkeitswert, um zu würfeln - kritische Erfolge und Patzer (unterste/oberste 10%) werden automatisch erkannt und gefeiert.' },
    { selector: '#inventory-section', titel: 'Inventar', text: 'Gegenstände hinzufügen, auf Ausrüstungsplätze ziehen, Waffenschaden würfeln. Bei aktivem Eldara-Regelwerk siehst du hier das feste Gürtel-/Rucksack-Raster aus dem Regelbuch.' },
    { selector: '#talentbaum-section', titel: 'Talentbaum', text: 'Hier verteilst du deine Eldara-Talentbaum-Skills auf Hauptbäume und dein Wesen - nur sichtbar, solange das Eldara-Regelpaket aktiv ist.' },
    { selector: '.help-icon', titel: 'Hilfe zu jedem Bereich', text: 'Dieses Fragezeichen-Icon begleitet fast jeden Abschnitt im Tool - ein Klick erklärt genau, was dort passiert. Wenn du mal nicht weiterweißt: danach suchen.' },
    { selector: '#btn-multiplayer-sync', titel: 'Mit dem Spielleiter verbinden', text: 'Hier trägst du den Raum-Code deines Spielleiters ein. Einmal verbunden, sieht er deine Würfe, HP und dein Inventar live auf seinem Bildschirm.' },
    { selector: null, titel: '🏴‍☠️ Fertig!', text: 'Das war\'s - viel Spaß in Eldara! Diese Tour findest du jederzeit wieder ganz unten im Footer unter "Tour starten".' }
];

let tourSchrittIndex = -1;

function tourElementSichtbar(selector) {
    if (!selector) return true;
    const el = document.querySelector(selector);
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
}

function tourGueltigerSchritt(von, richtung) {
    let i = von;
    while (i >= 0 && i < TOUR_SCHRITTE.length) {
        if (tourElementSichtbar(TOUR_SCHRITTE[i].selector)) return i;
        i += richtung;
    }
    return -1;
}

function tourStarten() {
    const start = tourGueltigerSchritt(0, 1);
    if (start === -1) return;
    tourSchrittIndex = start;
    document.getElementById('tour-overlay').classList.add('active');
    tourZeigeSchritt();
}

function tourBeenden() {
    const alterTarget = TOUR_SCHRITTE[tourSchrittIndex] && TOUR_SCHRITTE[tourSchrittIndex].selector
        ? document.querySelector(TOUR_SCHRITTE[tourSchrittIndex].selector) : null;
    if (alterTarget) alterTarget.classList.remove('tour-highlight-ziel');
    document.getElementById('tour-overlay').classList.remove('active');
    tourSchrittIndex = -1;
    try { localStorage.setItem(TOUR_STORAGE_KEY, '1'); } catch (e) { /* Privates Fenster o.ä. */ }
}

function tourWeiter() {
    const naechster = tourGueltigerSchritt(tourSchrittIndex + 1, 1);
    if (naechster === -1) { tourBeenden(); return; }
    tourSchrittWechseln(naechster);
}

function tourZurueck() {
    const voriger = tourGueltigerSchritt(tourSchrittIndex - 1, -1);
    if (voriger === -1) return;
    tourSchrittWechseln(voriger);
}

function tourSchrittWechseln(neuerIndex) {
    const altesSchrittObjekt = TOUR_SCHRITTE[tourSchrittIndex];
    if (altesSchrittObjekt && altesSchrittObjekt.selector) {
        const altesEl = document.querySelector(altesSchrittObjekt.selector);
        if (altesEl) altesEl.classList.remove('tour-highlight-ziel');
    }
    tourSchrittIndex = neuerIndex;
    tourZeigeSchritt();
}

function tourZeigeSchritt() {
    const schritt = TOUR_SCHRITTE[tourSchrittIndex];
    if (!schritt) return;
    const box = document.getElementById('tour-box');
    const istErster = tourGueltigerSchritt(0, 1) === tourSchrittIndex;
    const istLetzter = tourGueltigerSchritt(TOUR_SCHRITTE.length - 1, -1) === tourSchrittIndex;

    box.innerHTML = `
        <div class="tour-box-kopf">
            <span class="tour-schritt-zaehler">${tourSchrittIndex + 1} / ${TOUR_SCHRITTE.length}</span>
            <button class="tour-close" onclick="tourBeenden()" title="Tour beenden"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <h4>${schritt.titel}</h4>
        <p>${schritt.text}</p>
        <div class="tour-box-knoepfe">
            ${!istErster ? '<button class="gm-btn gm-btn-ghost" onclick="tourZurueck()"><i class="fa-solid fa-arrow-left"></i> Zurück</button>' : '<span></span>'}
            ${istLetzter
                ? '<button class="tool-btn" onclick="tourBeenden()"><i class="fa-solid fa-check"></i> Fertig</button>'
                : '<button class="tool-btn" onclick="tourWeiter()">Weiter <i class="fa-solid fa-arrow-right"></i></button>'}
        </div>
        ${!istLetzter ? '<button class="tour-ueberspringen" onclick="tourBeenden()">Überspringen</button>' : ''}`;

    if (!schritt.selector) {
        box.className = 'tour-box tour-box-zentriert';
        box.style.top = '';
        box.style.left = '';
        return;
    }

    const el = document.querySelector(schritt.selector);
    if (!el) { tourWeiter(); return; }
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('tour-highlight-ziel');
    box.className = 'tour-box';
    setTimeout(() => tourBoxPositionieren(el, box), 350);
}

function tourBoxPositionieren(el, box) {
    const r = el.getBoundingClientRect();
    const boxBreite = box.offsetWidth || 320;
    const boxHoehe = box.offsetHeight || 160;
    const platzUnten = window.innerHeight - r.bottom;
    const oben = platzUnten > boxHoehe + 20 ? r.bottom + 12 : Math.max(12, r.top - boxHoehe - 12);
    let links = r.left;
    if (links + boxBreite > window.innerWidth - 12) links = window.innerWidth - boxBreite - 12;
    if (links < 12) links = 12;
    box.style.top = Math.max(12, oben) + 'px';
    box.style.left = links + 'px';
}

function tourPruefenUndAutostarten() {
    let gesehen = null;
    try { gesehen = localStorage.getItem(TOUR_STORAGE_KEY); } catch (e) { /* Privates Fenster o.ä. */ }
    if (gesehen) return;
    // Erst nach der Willkommens-Nachricht starten (siehe willkommen.js) - nie
    // zwei Overlays gleichzeitig. Kurze Verzögerung, bis die erste Render-
    // Runde (renderAll) durch ist, damit Talentbaum/Inventar schon im DOM stehen.
    setTimeout(() => {
        const willkommenOffen = document.getElementById('willkommen-modal-overlay') &&
            document.getElementById('willkommen-modal-overlay').classList.contains('active');
        if (willkommenOffen) {
            const beobachter = new MutationObserver(() => {
                if (!document.getElementById('willkommen-modal-overlay').classList.contains('active')) {
                    beobachter.disconnect();
                    tourStarten();
                }
            });
            beobachter.observe(document.getElementById('willkommen-modal-overlay'), { attributes: true, attributeFilter: ['class'] });
        } else {
            tourStarten();
        }
    }, 600);
}

document.addEventListener('DOMContentLoaded', tourPruefenUndAutostarten);
