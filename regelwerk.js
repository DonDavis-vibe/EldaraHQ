// Regelwerk-Viewer: Basis-Regelwerk und Anhang (RW 5.1, visuell aufbereitet)
// zum Nachschlagen während der Session, ohne den Charakterbogen zu verlassen.
//
// Aufbau:
//  - Die PDFs liegen verkleinert in regelwerk/ (rw51-basis.pdf, rw51-anhang.pdf),
//    PDF.js ist selbst gehostet (regelwerk/pdfjs/) und wird erst beim ersten
//    Öffnen nachgeladen - wer das Regelwerk nie öffnet, lädt davon nichts.
//  - regelwerk/index.js (erzeugt von regelwerk/baue-index.py) liefert
//    Inhaltsverzeichnis, Seitentext für die Suche und die Zuordnung
//    Skill/Eigenschaft -> Seite (Sprung-Knöpfe im Talentbaum).
//  - Seiten werden einzeln als Canvas gerendert, nur wenn sie im Sichtfeld
//    sind, und wieder verworfen, wenn sie weit weg sind (Speicher auf dem Handy).
//  - Treffer (Suche, Sprung vom Talentbaum) werden auf der Seite gelb markiert.
//
// Einstieg von außen: regelwerkOeffnen({ buch, seite, suche }),
// regelwerkOeffnenSkill(ast, name), regelwerkOeffnenEigenschaft(name).

const RW_PFAD = 'regelwerk/';
const RW_POS_KEY = 'eldaraRegelwerkPosition';
const RW_ZOOM_STUFEN = [0.6, 0.8, 1, 1.25, 1.6, 2, 2.6];
const RW_TAB_NAMEN = { basis: 'Regelwerk', anhang: 'Anhang' }; // kurz, damit beide Tabs aufs Handy passen
const RW_CANVAS_MAX_BREITE = 2400; // Pixel - begrenzt den Speicher bei starkem Zoom
const RW_SEITE_BREITE_MAX = 900; // px bei Zoom 1 am Desktop
const RW_SEITE_VERHAELTNIS = 841.89 / 595.276; // A4
const RW_LUECKE = 12;

const rw = {
    gebaut: false,
    offen: false,
    buch: 'basis',
    zoomIndex: 2,
    docs: {},        // buch -> pdfjs-Dokument
    seitenZahl: 0,
    seitenHoehe: 0,  // inkl. Lücke, für Positionsberechnung
    beobachter: null,
    gerendert: new Map(), // Seitennummer -> { renderTask, canvas }
    fokus: null,     // { seite, suche } - einmal zur Treffer-Markierung scrollen
    suche: '',
    panel: null,     // 'inhalt' | 'suche' | null
    ladeId: 0,
};

// --- Nachladen von PDF.js und Index -----------------------------------------

function rwSkriptLaden(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = () => reject(new Error('Konnte ' + src + ' nicht laden'));
        document.head.appendChild(s);
    });
}

let rwBibliothekPromise = null;
function rwBibliothekLaden() {
    if (!rwBibliothekPromise) {
        rwBibliothekPromise = (async () => {
            await rwSkriptLaden(RW_PFAD + 'pdfjs/pdf.min.js');
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = RW_PFAD + 'pdfjs/pdf.worker.min.js';
            await rwSkriptLaden(RW_PFAD + 'index.js');
        })().catch(e => { rwBibliothekPromise = null; throw e; });
    }
    return rwBibliothekPromise;
}

// --- Merken, wo man war -----------------------------------------------------

function rwPositionLesen() {
    try { return JSON.parse(localStorage.getItem(RW_POS_KEY) || 'null'); } catch (e) { return null; }
}
function rwPositionMerken() {
    try { localStorage.setItem(RW_POS_KEY, JSON.stringify({ buch: rw.buch, seite: rwAktuelleSeite(), zoom: rw.zoomIndex })); } catch (e) { /* Privates Fenster o.ä. */ }
}

// --- Aufbau der Oberfläche --------------------------------------------------

function rwBauen() {
    if (rw.gebaut) return;
    rw.gebaut = true;
    const el = document.createElement('div');
    el.id = 'regelwerk-overlay';
    el.className = 'rw-overlay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Regelwerk');
    el.innerHTML = `
        <div class="rw-kopf">
            <div class="rw-zeile">
                <div class="rw-tabs" id="rw-tabs"></div>
                <span class="rw-seitenanzeige" id="rw-seitenanzeige"></span>
                <button class="rw-btn" id="rw-schliessen" title="Schließen (Esc)" aria-label="Schließen"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="rw-zeile">
                <button class="rw-btn" id="rw-inhalt-btn" title="Inhaltsverzeichnis"><i class="fa-solid fa-list-ul"></i><span class="rw-btn-text"> Inhalt</span></button>
                <form class="rw-suchform" id="rw-suchform" autocomplete="off">
                    <input type="search" id="rw-suchfeld" class="rw-suchfeld" placeholder="Regelwerk durchsuchen …" aria-label="Regelwerk durchsuchen">
                    <button class="rw-btn" type="submit" title="Suchen" aria-label="Suchen"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <button class="rw-btn" id="rw-zoom-minus" title="Verkleinern" aria-label="Verkleinern"><i class="fa-solid fa-magnifying-glass-minus"></i></button>
                <button class="rw-btn" id="rw-zoom-plus" title="Vergrößern" aria-label="Vergrößern"><i class="fa-solid fa-magnifying-glass-plus"></i></button>
            </div>
        </div>
        <div class="rw-koerper">
            <aside class="rw-panel" id="rw-panel" hidden></aside>
            <div class="rw-seiten" id="rw-seiten" tabindex="0"></div>
        </div>
        <div class="rw-status" id="rw-status"></div>`;
    document.body.appendChild(el);

    el.querySelector('#rw-schliessen').addEventListener('click', regelwerkSchliessen);
    el.querySelector('#rw-inhalt-btn').addEventListener('click', () => rwPanelUmschalten('inhalt'));
    el.querySelector('#rw-zoom-minus').addEventListener('click', () => rwZoomAendern(-1));
    el.querySelector('#rw-zoom-plus').addEventListener('click', () => rwZoomAendern(1));
    el.querySelector('#rw-suchform').addEventListener('submit', e => {
        e.preventDefault();
        rwSuchen(el.querySelector('#rw-suchfeld').value);
    });
    el.querySelector('#rw-seiten').addEventListener('scroll', rwScrollGeplant, { passive: true });
    // Nur bei geänderter Seitenbreite neu aufbauen: auf dem Handy feuert resize
    // schon beim Ein-/Ausblenden der Adressleiste, ohne dass sich die Breite
    // ändert. Beobachtet wird der Container selbst, damit auch das Öffnen/Schließen
    // der Seitenleiste am Desktop (verkleinert den Platz) die Seiten neu einpasst.
    let resizeTimer = null;
    new ResizeObserver(() => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (!rw.offen || !rw.docs[rw.buch] || !rw.seitenHoehe) return;
            const aktuell = document.querySelector('#rw-seiten .rw-seite');
            if (aktuell && parseInt(aktuell.style.width) === rwSeitenBreite()) return;
            rw.fokus = null;
            rwSeitenAufbauen(rwAktuelleSeite());
        }, 200);
    }).observe(el.querySelector('#rw-seiten'));
    document.addEventListener('keydown', e => {
        if (rw.offen && e.key === 'Escape') {
            // Erst Panel schließen, dann das Regelwerk
            if (rw.panel) rwPanelUmschalten(null); else regelwerkSchliessen();
        }
    });
}

function rwTabsRendern() {
    const tabs = document.getElementById('rw-tabs');
    tabs.innerHTML = Object.keys(RW_INDEX.buecher).map(b => {
        const info = RW_INDEX.buecher[b];
        return `<button class="rw-tab ${b === rw.buch ? 'rw-tab-aktiv' : ''}" data-rwbuch="${b}" title="${escapeHtml(info.titel)}">${escapeHtml(RW_TAB_NAMEN[b] || info.titel)}</button>`;
    }).join('');
    tabs.querySelectorAll('[data-rwbuch]').forEach(btn => btn.addEventListener('click', () => {
        if (btn.dataset.rwbuch !== rw.buch) regelwerkOeffnen({ buch: btn.dataset.rwbuch, seite: 1 });
    }));
}

function rwStatus(text) {
    const el = document.getElementById('rw-status');
    if (!el) return;
    el.textContent = text || '';
    el.style.display = text ? '' : 'none';
}

// --- Öffnen / Schließen -----------------------------------------------------

async function regelwerkOeffnen(opt = {}) {
    rwBauen();
    const overlay = document.getElementById('regelwerk-overlay');
    const war = rw.offen;
    rw.offen = true;
    overlay.classList.add('rw-offen');
    document.body.classList.add('rw-aktiv');
    rwStatus('Lade Regelwerk …');

    try {
        await rwBibliothekLaden();
    } catch (e) {
        rwStatus('Das Regelwerk konnte nicht geladen werden - Internetverbindung prüfen und erneut versuchen.');
        return;
    }

    // Standard: letzte Position, sonst Basis-Regelwerk Seite 2
    const gemerkt = !war && opt.buch === undefined && opt.seite === undefined ? rwPositionLesen() : null;
    if (gemerkt && RW_INDEX.buecher[gemerkt.buch]) {
        rw.buch = gemerkt.buch;
        if (Number.isInteger(gemerkt.zoom) && gemerkt.zoom >= 0 && gemerkt.zoom < RW_ZOOM_STUFEN.length) rw.zoomIndex = gemerkt.zoom;
    }
    const buch = opt.buch && RW_INDEX.buecher[opt.buch] ? opt.buch : (gemerkt ? gemerkt.buch : rw.buch);
    let seite = opt.seite || (gemerkt ? gemerkt.seite : 1);
    const id = ++rw.ladeId;
    rw.fokus = opt.suche && opt.seite ? { seite: opt.seite, suche: opt.suche } : null;
    rw.suche = opt.suche || '';

    if (buch !== rw.buch || !rw.docs[buch] || !document.getElementById('rw-seiten').children.length) {
        try {
            if (!rw.docs[buch]) {
                rwStatus('Lade ' + RW_INDEX.buecher[buch].titel + ' …');
                rw.docs[buch] = await window.pdfjsLib.getDocument(RW_PFAD + RW_INDEX.buecher[buch].datei).promise;
            }
        } catch (e) {
            console.error(e);
            rwStatus('Das PDF konnte nicht geladen werden.');
            return;
        }
        if (id !== rw.ladeId) return; // zwischenzeitlich neu geöffnet
        rw.buch = buch;
    }
    rwTabsRendern();
    seite = Math.max(1, Math.min(seite, rw.docs[rw.buch].numPages));
    rwSeitenAufbauen(seite);
    rwStatus('');
    if (opt.panel === null) rwPanelUmschalten(null);
}

function regelwerkSchliessen() {
    const overlay = document.getElementById('regelwerk-overlay');
    if (!overlay || !rw.offen) return;
    rwPositionMerken();
    rw.offen = false;
    overlay.classList.remove('rw-offen');
    document.body.classList.remove('rw-aktiv');
    rwGerendertLeeren();
}

// Sprung vom Talentbaum
function regelwerkOeffnenSkill(ast, name) {
    rwBibliothekLaden().then(() => {
        const ziel = RW_INDEX.skills[`${ast}::${name}`];
        regelwerkOeffnen(ziel ? { buch: 'anhang', seite: ziel, suche: name } : {});
    }).catch(() => regelwerkOeffnen({}));
}

function regelwerkOeffnenEigenschaft(name) {
    rwBibliothekLaden().then(() => {
        const ziel = RW_INDEX.eigenschaften[name];
        regelwerkOeffnen(ziel ? { buch: ziel[0], seite: ziel[1], suche: name } : {});
    }).catch(() => regelwerkOeffnen({}));
}

// --- Seiten -----------------------------------------------------------------

function rwSeitenBreite() {
    const behaelter = document.getElementById('rw-seiten');
    const verfuegbar = Math.max(200, behaelter.clientWidth - 16);
    return Math.round(Math.min(verfuegbar, RW_SEITE_BREITE_MAX) * RW_ZOOM_STUFEN[rw.zoomIndex]);
}

function rwSeitenAufbauen(zielSeite) {
    const behaelter = document.getElementById('rw-seiten');
    rwGerendertLeeren();
    if (rw.beobachter) rw.beobachter.disconnect();
    behaelter.innerHTML = '';
    const doc = rw.docs[rw.buch];
    rw.seitenZahl = doc.numPages;
    const breite = rwSeitenBreite();
    const hoehe = Math.round(breite * RW_SEITE_VERHAELTNIS);
    rw.seitenHoehe = hoehe + RW_LUECKE;

    const frag = document.createDocumentFragment();
    for (let n = 1; n <= rw.seitenZahl; n++) {
        const d = document.createElement('div');
        d.className = 'rw-seite';
        d.dataset.nr = n;
        d.style.width = breite + 'px';
        d.style.height = hoehe + 'px';
        frag.appendChild(d);
    }
    behaelter.appendChild(frag);

    rw.beobachter = new IntersectionObserver(treffer => {
        treffer.forEach(t => {
            const nr = parseInt(t.target.dataset.nr);
            if (t.isIntersecting) rwSeiteRendern(nr);
            else rwSeiteVerwerfen(nr);
        });
    }, { root: behaelter, rootMargin: '120% 0px 120% 0px' });
    behaelter.querySelectorAll('.rw-seite').forEach(d => rw.beobachter.observe(d));

    rwZumSeitenanfang(zielSeite);
    rwSeitenanzeigeAktualisieren();
}

function rwZumSeitenanfang(nr) {
    const behaelter = document.getElementById('rw-seiten');
    behaelter.scrollTop = (nr - 1) * rw.seitenHoehe + RW_LUECKE / 2;
}

function rwAktuelleSeite() {
    const behaelter = document.getElementById('rw-seiten');
    if (!behaelter || !rw.seitenHoehe) return 1;
    // Seite, die die obere Bildschirmmitte schneidet
    const mitte = behaelter.scrollTop + behaelter.clientHeight * 0.3;
    return Math.max(1, Math.min(rw.seitenZahl, Math.floor(mitte / rw.seitenHoehe) + 1));
}

function rwSeitenanzeigeAktualisieren() {
    const el = document.getElementById('rw-seitenanzeige');
    if (el) el.textContent = `S. ${rwAktuelleSeite()} / ${rw.seitenZahl}`;
    if (rw.panel === 'inhalt') rwInhaltMarkieren();
}

let rwScrollWartet = false;
function rwScrollGeplant() {
    if (rwScrollWartet) return;
    rwScrollWartet = true;
    requestAnimationFrame(() => {
        rwScrollWartet = false;
        rwSeitenanzeigeAktualisieren();
    });
}

function rwZoomAendern(richtung) {
    const neu = Math.max(0, Math.min(RW_ZOOM_STUFEN.length - 1, rw.zoomIndex + richtung));
    if (neu === rw.zoomIndex) return;
    const seite = rwAktuelleSeite();
    rw.zoomIndex = neu;
    rw.fokus = null;
    rwSeitenAufbauen(seite);
}

function rwSeiteVerwerfen(nr) {
    const eintrag = rw.gerendert.get(nr);
    if (!eintrag) return;
    if (eintrag.task) { try { eintrag.task.cancel(); } catch (e) { /* schon fertig */ } }
    eintrag.element.innerHTML = '';
    rw.gerendert.delete(nr);
}

function rwGerendertLeeren() {
    [...rw.gerendert.keys()].forEach(rwSeiteVerwerfen);
}

async function rwSeiteRendern(nr) {
    if (rw.gerendert.has(nr)) return;
    const element = document.querySelector(`#rw-seiten .rw-seite[data-nr="${nr}"]`);
    if (!element) return;
    const eintrag = { element, task: null };
    rw.gerendert.set(nr, eintrag);
    const buch = rw.buch;
    try {
        const seite = await rw.docs[buch].getPage(nr);
        if (rw.gerendert.get(nr) !== eintrag || buch !== rw.buch) return; // inzwischen verworfen
        const breite = element.clientWidth;
        const basis = seite.getViewport({ scale: 1 });
        const skala = breite / basis.width;
        const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2, RW_CANVAS_MAX_BREITE / breite));
        const viewport = seite.getViewport({ scale: skala * dpr });
        const canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = breite + 'px';
        canvas.style.height = Math.floor(basis.height * skala) + 'px';
        eintrag.task = seite.render({ canvasContext: canvas.getContext('2d'), viewport });
        await eintrag.task.promise;
        if (rw.gerendert.get(nr) !== eintrag) return;
        eintrag.task = null;
        element.innerHTML = '';
        element.appendChild(canvas);
        await rwMarkieren(seite, element, skala, nr);
    } catch (e) {
        if (e && e.name === 'RenderingCancelledException') return;
        console.error('Regelwerk: Seite ' + nr + ' konnte nicht gerendert werden', e);
        rw.gerendert.delete(nr);
    }
}

// --- Treffer markieren -------------------------------------------------------

function rwNorm(t) {
    return (t || '').toLowerCase().replace(/[^a-z0-9äöüß]/g, '');
}

// Markiert Textstücke der Seite, die zum Suchbegriff passen: ein Textstück
// zählt, wenn es den (normierten) Begriff enthält oder - bei umbrochenen
// Namen in Tabellenzellen - einen längeren Teil davon ausmacht.
async function rwMarkieren(seite, element, skala, nr) {
    const begriffe = (rw.suche || '').split(/\s+/).map(rwNorm).filter(b => b.length >= 3);
    const ganz = rwNorm(rw.suche);
    if (!ganz) return;
    const inhalt = await seite.getTextContent();
    const basis = seite.getViewport({ scale: 1 });
    const treffer = [];
    inhalt.items.forEach(item => {
        const text = rwNorm(item.str);
        if (!text) return;
        const passt = text.includes(ganz) ||
            (text.length >= 5 && ganz.includes(text)) ||
            (begriffe.length > 1 && begriffe.some(b => text.includes(b)));
        if (!passt) return;
        const x = item.transform[4];
        const y = item.transform[5];
        const h = item.height || Math.abs(item.transform[3]) || 10;
        // PDF-Koordinaten haben den Ursprung unten links, y ist die Grundlinie
        treffer.push({ x, oben: basis.height - y - h, w: item.width, h: h * 1.25 });
    });
    if (!treffer.length || !element.isConnected) return;
    const schicht = document.createElement('div');
    schicht.className = 'rw-treffer-schicht';
    treffer.forEach(t => {
        const m = document.createElement('div');
        m.className = 'rw-treffer';
        m.style.left = (t.x * skala - 2) + 'px';
        m.style.top = (t.oben * skala) + 'px';
        m.style.width = (t.w * skala + 4) + 'px';
        m.style.height = (t.h * skala) + 'px';
        schicht.appendChild(m);
    });
    element.appendChild(schicht);
    // Einmal zum ersten Treffer der Zielseite scrollen
    if (rw.fokus && rw.fokus.seite === nr) {
        const behaelter = document.getElementById('rw-seiten');
        const oben = element.offsetTop + treffer[0].oben * skala;
        behaelter.scrollTop = Math.max(0, oben - behaelter.clientHeight * 0.3);
        rw.fokus = null;
    }
}

// --- Seitenleiste: Inhalt & Suche -------------------------------------------

function rwPanelUmschalten(art) {
    const panel = document.getElementById('rw-panel');
    if (!panel) return;
    if (art === rw.panel || art === null) {
        rw.panel = null;
        panel.hidden = true;
        document.getElementById('regelwerk-overlay').classList.remove('rw-panel-offen');
        return;
    }
    rw.panel = art;
    panel.hidden = false;
    document.getElementById('regelwerk-overlay').classList.add('rw-panel-offen');
    if (art === 'inhalt') rwInhaltRendern();
}

function rwInhaltRendern() {
    const panel = document.getElementById('rw-panel');
    const toc = RW_INDEX.buecher[rw.buch].toc;
    panel.innerHTML = `<div class="rw-panel-titel">Inhalt – ${escapeHtml(RW_INDEX.buecher[rw.buch].titel)}</div>
        <ul class="rw-toc">${toc.map(e => `
            <li><button class="rw-toc-eintrag rw-toc-e${e.e}" data-rwseite="${e.s}">
                <span>${escapeHtml(e.t)}</span><span class="rw-toc-seite">${e.s}</span></button></li>`).join('')}
        </ul>`;
    panel.querySelectorAll('[data-rwseite]').forEach(b => b.addEventListener('click', () => {
        rw.fokus = null;
        rwZumSeitenanfang(parseInt(b.dataset.rwseite));
        // Auf schmalen Bildschirmen verdeckt das Panel die Seite - schließen
        if (window.innerWidth < 700) rwPanelUmschalten(null);
    }));
    rwInhaltMarkieren();
}

function rwInhaltMarkieren() {
    const panel = document.getElementById('rw-panel');
    if (!panel || panel.hidden) return;
    const seite = rwAktuelleSeite();
    let aktiv = null;
    panel.querySelectorAll('[data-rwseite]').forEach(b => {
        const s = parseInt(b.dataset.rwseite);
        b.classList.remove('rw-toc-aktiv');
        if (s <= seite) aktiv = b;
    });
    if (aktiv) aktiv.classList.add('rw-toc-aktiv');
}

function rwSuchen(eingabe) {
    const suchtext = (eingabe || '').trim();
    const panel = document.getElementById('rw-panel');
    if (suchtext.length < 2) { rwPanelUmschalten(null); return; }
    rw.suche = suchtext;
    const begriffe = suchtext.toLowerCase().split(/\s+/).filter(Boolean);
    const treffer = [];
    Object.keys(RW_INDEX.buecher).forEach(buch => {
        RW_INDEX.text[buch].forEach((text, i) => {
            const klein = text.toLowerCase();
            if (!begriffe.every(b => klein.includes(b))) return;
            // Ausschnitt um den ersten Fundort
            const pos = klein.indexOf(begriffe[0]);
            const von = Math.max(0, pos - 60), bis = Math.min(text.length, pos + 120);
            treffer.push({ buch, seite: i + 1, ausschnitt: (von > 0 ? '… ' : '') + text.slice(von, bis) + (bis < text.length ? ' …' : '') });
        });
    });
    // Treffer, in denen die ganze Wortgruppe zusammensteht, zuerst
    const ganz = suchtext.toLowerCase();
    treffer.sort((a, b) => Number(b.ausschnitt.toLowerCase().includes(ganz)) - Number(a.ausschnitt.toLowerCase().includes(ganz)));

    rw.panel = 'suche';
    panel.hidden = false;
    document.getElementById('regelwerk-overlay').classList.add('rw-panel-offen');
    const hervorheben = t => begriffe.reduce((html, b) =>
        html.replace(new RegExp('(' + b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>'), escapeHtml(t));
    panel.innerHTML = `<div class="rw-panel-titel">${treffer.length} Treffer für „${escapeHtml(suchtext)}“</div>
        ${treffer.length ? `<ul class="rw-treffer-liste">${treffer.slice(0, 80).map((t, i) => `
            <li><button class="rw-treffer-eintrag" data-rwtreffer="${i}">
                <span class="rw-treffer-kopf">${escapeHtml(RW_INDEX.buecher[t.buch].titel)} · S. ${t.seite}</span>
                <span class="rw-treffer-text">${hervorheben(t.ausschnitt)}</span></button></li>`).join('')}</ul>
            ${treffer.length > 80 ? '<div class="rw-hinweis">Nur die ersten 80 Treffer - Suche eingrenzen.</div>' : ''}`
            : '<div class="rw-hinweis">Nichts gefunden. Tipp: kürzere oder andere Wörter versuchen.</div>'}`;
    panel.querySelectorAll('[data-rwtreffer]').forEach(b => b.addEventListener('click', () => {
        const t = treffer[parseInt(b.dataset.rwtreffer)];
        if (window.innerWidth < 700) rwPanelUmschalten(null);
        regelwerkOeffnen({ buch: t.buch, seite: t.seite, suche: suchtext, panel: window.innerWidth < 700 ? null : undefined });
    }));
}
