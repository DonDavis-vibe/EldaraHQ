// Regelwerk-Viewer: Basis-Regelwerk und Anhang (RW 5.1) zum Nachschlagen
// während der Session, ohne den Charakterbogen zu verlassen.
//
// Nach dem Vorbild von KINETIK (https://github.com/Rec0iL/KINETIK-PNP): kein
// PDF-Leser, sondern das Regelwerk als HTML in Kapiteln und Abschnitten, in einer
// Seitenleiste mit Inhaltsverzeichnis und Suche. Das bleibt auch auf dem Handy
// schnell, Text lässt sich markieren und kopieren, und Tabellen werden in
// schmalen Leisten als Karten dargestellt.
//
// Daten (regelwerk/web/, erzeugt von regelwerk/baue-web.py):
//   index.json   Bücher + Sprungtabellen (Skill/Eigenschaft -> Tabellenzeile)
//   basis.json / anhang.json   Kapitel und Abschnitte als HTML, Bilder als WebP
// Alles wird erst beim ersten Öffnen nachgeladen; Bilder erst beim Scrollen.
//
// Einstieg von außen:
//   regelwerkOeffnen({ buch, ziel, suche })      ziel = Abschnitts-/Zeilen-ID
//   regelwerkOeffnenSkill(ast, name)             Sprung zur Tabellenzeile des Skills
//   regelwerkOeffnenEigenschaft(name)            Sprung zur Zeile der Eigenschaft

const RB_PFAD = 'regelwerk/web/';
const RB_POS_KEY = 'eldaraRegelwerkPosition';
const RB_PREF_KEY = 'eldaraRegelwerkEinstellungen';

const rb = {
    gebaut: false,
    offen: false,
    buch: 'basis',
    index: null,          // index.json
    daten: {},            // buchId -> geladenes JSON
    suchIndex: {},        // buchId -> [{ id, kapitel, titel, text, buch }]
    laden: {},            // buchId -> Promise
    fehler: '',
    breit: false,
    ohneBilder: false,
    tocOffen: false,
    suche: '',
    ladeId: 0,
};

// --- Laden ------------------------------------------------------------------

function rbUrl(pfad) {
    return new URL(RB_PFAD + pfad, document.baseURI).href;
}

function rbJson(pfad) {
    return fetch(rbUrl(pfad)).then(r => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
    });
}

function rbIndexLaden() {
    if (!rb.laden.index) {
        rb.laden.index = rbJson('index.json').then(i => { rb.index = i; }).catch(e => { rb.laden.index = null; throw e; });
    }
    return rb.laden.index;
}

function rbBuchLaden(id) {
    if (rb.daten[id]) return Promise.resolve(rb.daten[id]);
    if (!rb.laden[id]) {
        rb.laden[id] = rbJson(id + '.json').then(d => {
            rb.daten[id] = d;
            rb.suchIndex[id] = rbSuchIndexBauen(d);
            return d;
        }).catch(e => { rb.laden[id] = null; throw e; });
    }
    return rb.laden[id];
}

// Reiner Text eines HTML-Abschnitts für die Suche. DOMParser lädt keine Bilder.
function rbReinerText(html) {
    const doc = new DOMParser().parseFromString(html || '', 'text/html');
    return (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
}

function rbKapitelName(c) {
    return c.number ? `${c.number}. ${c.title}` : c.title;
}

function rbSuchIndexBauen(d) {
    const eintraege = [];
    d.chapters.forEach(c => {
        const name = rbKapitelName(c);
        eintraege.push({ buch: d.id, id: c.id, kapitel: name, titel: name, text: rbReinerText(c.html) });
        c.sections.forEach(s => eintraege.push({ buch: d.id, id: s.id, kapitel: name, titel: s.title, text: rbReinerText(s.html) }));
    });
    return eintraege;
}

// --- Einstellungen & Position ----------------------------------------------------

function rbEinstellungenLesen() {
    try {
        const e = JSON.parse(localStorage.getItem(RB_PREF_KEY) || '{}');
        rb.breit = !!e.breit;
        rb.ohneBilder = !!e.ohneBilder;
    } catch (e) { /* Privates Fenster o.ä. */ }
}
function rbEinstellungenSichern() {
    try { localStorage.setItem(RB_PREF_KEY, JSON.stringify({ breit: rb.breit, ohneBilder: rb.ohneBilder })); } catch (e) { /* s.o. */ }
}
function rbPositionLesen() {
    try { return JSON.parse(localStorage.getItem(RB_POS_KEY) || 'null'); } catch (e) { return null; }
}
function rbPositionMerken() {
    const body = document.getElementById('rb-body');
    if (!body || !rb.offen || rb.suche.length >= 2) return;
    try { localStorage.setItem(RB_POS_KEY, JSON.stringify({ buch: rb.buch, scroll: Math.round(body.scrollTop) })); } catch (e) { /* s.o. */ }
}

// --- Aufbau der Oberfläche ---------------------------------------------------

function rbBauen() {
    if (rb.gebaut) return;
    rb.gebaut = true;
    rbEinstellungenLesen();

    const scrim = document.createElement('button');
    scrim.id = 'rb-scrim';
    scrim.className = 'rb-scrim';
    scrim.setAttribute('aria-label', 'Regelwerk schließen');
    scrim.tabIndex = -1;
    scrim.addEventListener('click', regelwerkSchliessen);
    document.body.appendChild(scrim);

    const el = document.createElement('aside');
    el.id = 'regelwerk-overlay';
    el.className = 'rb';
    el.setAttribute('aria-label', 'Regelwerk');
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = `
        <header class="rb-kopf">
            <div class="rb-titelzeile">
                <b class="rb-titel">Regelwerk</b>
                <span class="rb-abstand"></span>
                <a class="rb-btn" id="rb-pdf" href="#" download title="Als PDF herunterladen"><i class="fa-solid fa-file-pdf"></i></a>
                <button class="rb-btn" id="rb-bilder" type="button" title="Bilder ein-/ausblenden (spart Datenvolumen)" aria-label="Bilder ein-/ausblenden"><i class="fa-solid fa-image"></i></button>
                <button class="rb-btn rb-btn-breit" id="rb-breit" type="button" title="Breiter / schmaler" aria-label="Breiter oder schmaler"><i class="fa-solid fa-left-right"></i></button>
                <button class="rb-btn" id="rb-toc-btn" type="button" title="Inhaltsverzeichnis" aria-label="Inhaltsverzeichnis" aria-expanded="false"><i class="fa-solid fa-list-ul"></i></button>
                <button class="rb-btn" id="rb-zu" type="button" title="Schließen (Esc)" aria-label="Schließen"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="rb-tabs" id="rb-tabs"></div>
            <input type="search" id="rb-suche" class="rb-suche" placeholder="Suchen … (z.B. Windwechsel, Berserker, Rüstung)" aria-label="Im Regelwerk suchen" autocomplete="off">
        </header>
        <div class="rb-body" id="rb-body"></div>`;
    document.body.appendChild(el);

    el.querySelector('#rb-zu').addEventListener('click', regelwerkSchliessen);
    el.querySelector('#rb-toc-btn').addEventListener('click', () => rbTocUmschalten());
    el.querySelector('#rb-breit').addEventListener('click', () => { rb.breit = !rb.breit; rbEinstellungenSichern(); rbEinstellungenAnwenden(); });
    el.querySelector('#rb-bilder').addEventListener('click', () => { rb.ohneBilder = !rb.ohneBilder; rbEinstellungenSichern(); rbEinstellungenAnwenden(); });
    el.querySelector('#rb-suche').addEventListener('input', e => rbSuchen(e.target.value));
    el.querySelector('#rb-body').addEventListener('scroll', rbScrollMerken, { passive: true });
    // Klicks auf Treffer/Inhalt per Delegation (die Listen werden neu gebaut)
    el.querySelector('#rb-body').addEventListener('click', e => {
        const knopf = e.target.closest('[data-rbziel]');
        if (!knopf) return;
        rbSpringen(knopf.dataset.rbbuch || rb.buch, knopf.dataset.rbziel, { suche: knopf.dataset.rbsuche || '' });
    });
    document.addEventListener('keydown', e => { if (rb.offen && e.key === 'Escape') regelwerkSchliessen(); });
    rbEinstellungenAnwenden();
}

function rbEinstellungenAnwenden() {
    const el = document.getElementById('regelwerk-overlay');
    if (!el) return;
    el.classList.toggle('rb-breit', rb.breit);
    el.classList.toggle('rb-ohne-bilder', rb.ohneBilder);
    const bilder = el.querySelector('#rb-bilder');
    bilder.classList.toggle('rb-btn-aus', rb.ohneBilder);
    bilder.setAttribute('aria-pressed', String(rb.ohneBilder));
}

let rbScrollTimer = null;
function rbScrollMerken() {
    clearTimeout(rbScrollTimer);
    rbScrollTimer = setTimeout(rbPositionMerken, 400);
}

function rbTabsRendern() {
    const tabs = document.getElementById('rb-tabs');
    if (!rb.index) { tabs.innerHTML = ''; return; }
    tabs.innerHTML = rb.index.books.map(b =>
        `<button class="rb-tab ${b.id === rb.buch ? 'rb-tab-aktiv' : ''}" type="button" data-rbbuchtab="${escapeHtml(b.id)}" title="${escapeHtml(b.title)}">${escapeHtml(b.tab)}</button>`).join('');
    tabs.querySelectorAll('[data-rbbuchtab]').forEach(btn => btn.addEventListener('click', () => {
        if (btn.dataset.rbbuchtab === rb.buch && !rb.suche) return;
        rbPositionMerken();
        document.getElementById('rb-suche').value = '';
        rb.suche = '';
        rbBuchAnzeigen(btn.dataset.rbbuchtab, { anfang: true });
    }));
    const pdf = document.getElementById('rb-pdf');
    const aktuell = rb.index.books.find(b => b.id === rb.buch);
    if (aktuell && aktuell.pdf) { pdf.href = rbUrl('../' + aktuell.pdf); pdf.setAttribute('download', aktuell.pdf); pdf.style.display = ''; }
    else pdf.style.display = 'none';
}

// --- Öffnen / Schließen -----------------------------------------------------

async function regelwerkOeffnen(opt = {}) {
    rbBauen();
    const el = document.getElementById('regelwerk-overlay');
    const war = rb.offen;
    rb.offen = true;
    el.classList.add('rb-offen');
    el.setAttribute('aria-hidden', 'false');
    document.getElementById('rb-scrim').classList.add('rb-offen');
    document.body.classList.add('rb-aktiv');
    const id = ++rb.ladeId;
    const body = document.getElementById('rb-body');
    if (!rb.daten[rb.buch]) body.innerHTML = '<p class="rb-hinweis">Lädt …</p>';

    try {
        await rbIndexLaden();
        // Standard: dort weiter, wo man war
        const gemerkt = !war && !opt.buch && !opt.ziel ? rbPositionLesen() : null;
        const buch = (opt.buch && rb.index.books.some(b => b.id === opt.buch)) ? opt.buch
            : (gemerkt && rb.index.books.some(b => b.id === gemerkt.buch) ? gemerkt.buch : rb.buch);
        await rbBuchLaden(buch);
        if (id !== rb.ladeId) return;
        rbBuchAnzeigen(buch, { ziel: opt.ziel, suche: opt.suche || '', scroll: gemerkt ? gemerkt.scroll : 0 });
    } catch (e) {
        console.error('Regelwerk:', e);
        body.innerHTML = '<p class="rb-hinweis rb-fehler">Das Regelwerk konnte nicht geladen werden - Internetverbindung prüfen und erneut versuchen.</p>';
    }
}

function regelwerkSchliessen() {
    const el = document.getElementById('regelwerk-overlay');
    if (!el || !rb.offen) return;
    rbPositionMerken();
    rb.offen = false;
    el.classList.remove('rb-offen');
    el.setAttribute('aria-hidden', 'true');
    document.getElementById('rb-scrim').classList.remove('rb-offen');
    document.body.classList.remove('rb-aktiv');
}

// Sprung vom Talentbaum
function regelwerkOeffnenSkill(ast, name) {
    rbIndexLaden().then(() => {
        const ziel = rb.index.skills[`${ast}::${name}`];
        regelwerkOeffnen(ziel ? { buch: ziel[0], ziel: ziel[1] } : {});
    }).catch(() => regelwerkOeffnen({}));
}

function regelwerkOeffnenEigenschaft(name) {
    rbIndexLaden().then(() => {
        const ziel = rb.index.eigenschaften[name];
        regelwerkOeffnen(ziel ? { buch: ziel[0], ziel: ziel[1] } : {});
    }).catch(() => regelwerkOeffnen({}));
}

// --- Inhalt ------------------------------------------------------------------

function rbBild(b, klasse) {
    return b ? `<img class="${klasse}" src="${escapeHtml(rbUrl(b.src))}" width="${b.w}" height="${b.h}" alt="" loading="lazy" decoding="async">` : '';
}

function rbBuchHtml(d) {
    const kapitel = d.chapters.map(c => `
        <article class="rb-kapitel" id="rb-${escapeHtml(c.id)}">
            <div class="rb-banner">
                ${rbBild(c.image, 'rb-bannerbild rb-deko')}
                <div class="rb-bannertext">
                    ${c.appendix ? '<span class="rb-nr">Anhang</span>' : (c.number ? `<span class="rb-nr">Kapitel ${c.number}</span>` : '')}
                    <h2>${escapeHtml(c.title)}</h2>
                    ${c.subtitle ? `<span class="rb-sub">${escapeHtml(c.subtitle)}</span>` : ''}
                </div>
            </div>
            <div class="rb-inhalt rb-pad">${c.html}</div>
            ${c.sections.map(s => `
                <section class="rb-abschnitt" id="rb-${escapeHtml(s.id)}">
                    ${rbBild(s.image, 'rb-abschnittsbild rb-deko')}
                    <h3>${escapeHtml(s.title)}</h3>
                    <div class="rb-inhalt">${s.html}</div>
                </section>`).join('')}
        </article>`).join('');
    const titel = `
        <div class="rb-titelblatt">
            ${rbBild(d.cover, 'rb-titelbild rb-deko')}
            <div class="rb-titeltext">
                ${d.kicker ? `<span class="rb-kicker">${escapeHtml(d.kicker)}</span>` : ''}
                <h1>ELDARA</h1>
                <span class="rb-sub">${escapeHtml(d.tagline || d.title)}</span>
                ${d.intro ? `<div class="rb-inhalt">${d.intro}</div>` : ''}
            </div>
        </div>`;
    return titel + kapitel;
}

function rbTocHtml(d) {
    return `<nav class="rb-toc rb-pad" aria-label="Inhalt">${d.chapters.map(c => `
        <button class="rb-toc-kap" type="button" data-rbziel="${escapeHtml(c.id)}">${escapeHtml(rbKapitelName(c))}</button>
        ${c.sections.map(s => `<button class="rb-toc-abs" type="button" data-rbziel="${escapeHtml(s.id)}">${escapeHtml(s.title)}</button>`).join('')}`).join('')}</nav>`;
}

// Zeigt das Buch (neu aufgebaut, wenn nötig) und springt zum Ziel
function rbBuchAnzeigen(buch, opt = {}) {
    const d = rb.daten[buch];
    if (!d) { rbBuchLaden(buch).then(() => rbBuchAnzeigen(buch, opt)).catch(() => {}); return; }
    const body = document.getElementById('rb-body');
    const wechsel = rb.buch !== buch || !body.querySelector('.rb-inhaltsblock');
    rb.buch = buch;
    rbTabsRendern();

    // Nur neu aufbauen, wenn ein anderes Buch gezeigt wird - sonst bleibt die Seite stehen
    if (wechsel) {
        body.innerHTML = `<div class="rb-toc-platz" id="rb-toc-platz"></div><div class="rb-inhaltsblock" id="rb-inhaltsblock">${rbBuchHtml(d)}</div><div class="rb-treffer-platz" id="rb-treffer-platz" hidden></div>`;
        rbTocAnzeigen();
    }
    rbSucheAnzeigen(false);
    if (opt.ziel) rbSpringen(buch, opt.ziel, { suche: opt.suche, schon: true });
    else if (opt.anfang) body.scrollTop = 0;
    else if (opt.scroll) body.scrollTop = opt.scroll;
}

function rbTocUmschalten() {
    rb.tocOffen = !rb.tocOffen;
    rbTocAnzeigen();
}

function rbTocAnzeigen() {
    const platz = document.getElementById('rb-toc-platz');
    const btn = document.getElementById('rb-toc-btn');
    if (!platz) return;
    platz.innerHTML = rb.tocOffen && rb.daten[rb.buch] ? rbTocHtml(rb.daten[rb.buch]) : '';
    if (btn) { btn.setAttribute('aria-expanded', String(rb.tocOffen)); btn.classList.toggle('rb-btn-an', rb.tocOffen); }
}

// Springt zu einem Abschnitt/einer Zeile (ggf. in dem anderen Buch)
async function rbSpringen(buch, ziel, opt = {}) {
    if (buch !== rb.buch || rb.suche.length >= 2) {
        // Suche beenden und das richtige Buch zeigen
        document.getElementById('rb-suche').value = '';
        const hatSuche = rb.suche;
        rb.suche = '';
        await rbBuchLaden(buch);
        rbBuchAnzeigen(buch, { ziel, suche: opt.suche || hatSuche, schon: true });
        return;
    }
    rb.tocOffen = false;
    rbTocAnzeigen();
    const body = document.getElementById('rb-body');
    const el = document.getElementById(ziel.startsWith('rb-') ? ziel : 'rb-' + ziel) || document.getElementById(ziel);
    if (!el) return;
    rbMarkierungenEntfernen();
    const oben = el.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop;
    // Tabellenzeilen etwas unter den Rand schieben, damit der Kontext darüber sichtbar bleibt
    body.scrollTop = Math.max(0, oben - (el.tagName === 'TR' ? 90 : 8));
    if (el.tagName === 'TR') {
        el.classList.remove('rb-blitz'); void el.offsetWidth; el.classList.add('rb-blitz');
    } else if (opt.suche) {
        rbMarkieren(el, opt.suche);
    }
    // Bilder darüber laden nach und verschieben die Zielposition: kurz nachfassen
    setTimeout(() => {
        const neu = el.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop;
        if (Math.abs(neu - oben) > 4) body.scrollTop = Math.max(0, neu - (el.tagName === 'TR' ? 90 : 8));
    }, 350);
}

// --- Suche -------------------------------------------------------------------

function rbMarkierungenEntfernen() {
    document.querySelectorAll('#rb-body mark.rb-treffer').forEach(m => {
        const t = document.createTextNode(m.textContent);
        m.replaceWith(t);
        t.parentNode && t.parentNode.normalize();
    });
}

// Hebt die Suchbegriffe im Zielabschnitt gelb hervor
function rbMarkieren(wurzel, suchtext) {
    const begriffe = suchtext.toLowerCase().split(/\s+/).filter(b => b.length >= 2);
    if (!begriffe.length) return;
    const muster = new RegExp('(' + begriffe.map(b => b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'ig');
    const walker = document.createTreeWalker(wurzel, NodeFilter.SHOW_TEXT);
    const knoten = [];
    while (walker.nextNode()) { if (muster.test(walker.currentNode.nodeValue)) knoten.push(walker.currentNode); muster.lastIndex = 0; }
    knoten.slice(0, 200).forEach(k => {
        const teile = k.nodeValue.split(muster);
        const frag = document.createDocumentFragment();
        teile.forEach((t, i) => {
            if (i % 2 === 1) { const m = document.createElement('mark'); m.className = 'rb-treffer'; m.textContent = t; frag.appendChild(m); }
            else if (t) frag.appendChild(document.createTextNode(t));
        });
        k.replaceWith(frag);
    });
}

function rbSucheAnzeigen(zeigen) {
    const inhalt = document.getElementById('rb-inhaltsblock');
    const treffer = document.getElementById('rb-treffer-platz');
    const toc = document.getElementById('rb-toc-platz');
    if (!inhalt || !treffer) return;
    inhalt.hidden = zeigen;
    treffer.hidden = !zeigen;
    if (toc) toc.hidden = zeigen;
}

let rbSuchTimer = null;
function rbSuchen(eingabe) {
    clearTimeout(rbSuchTimer);
    rb.suche = (eingabe || '').trim();
    if (rb.suche.length < 2) { rbSucheAnzeigen(false); return; }
    rbSuchTimer = setTimeout(async () => {
        const anfrage = rb.suche;
        const platz = document.getElementById('rb-treffer-platz');
        if (!platz) return;
        rbSucheAnzeigen(true);
        // Beide Bücher durchsuchen - das zweite erst laden, wenn gesucht wird
        const ids = rb.index.books.map(b => b.id);
        if (ids.some(i => !rb.daten[i])) {
            platz.innerHTML = '<p class="rb-hinweis rb-pad">Suche …</p>';
            try { await Promise.all(ids.map(rbBuchLaden)); } catch (e) { platz.innerHTML = '<p class="rb-hinweis rb-fehler rb-pad">Suche nicht möglich - Verbindung prüfen.</p>'; return; }
            if (anfrage !== rb.suche) return;
        }
        platz.innerHTML = rbTrefferHtml(anfrage);
        document.getElementById('rb-body').scrollTop = 0;
    }, 160);
}

function rbTrefferHtml(anfrage) {
    const begriffe = anfrage.toLowerCase().split(/\s+/).filter(Boolean);
    const treffer = [];
    rb.index.books.forEach(buch => {
        (rb.suchIndex[buch.id] || []).forEach(e => {
            const klein = e.text.toLowerCase();
            const titel = e.titel.toLowerCase();
            if (!begriffe.every(b => klein.includes(b) || titel.includes(b))) return;
            const pos = klein.indexOf(begriffe[0]);
            const von = Math.max(0, pos - 55);
            const ausschnitt = pos < 0 ? '' : (von ? '… ' : '') + e.text.slice(von, pos + begriffe[0].length + 95) + ' …';
            // Titeltreffer und zusammenstehende Wortgruppen zuerst
            const rang = (begriffe.some(b => titel.includes(b)) ? 2 : 0) + (klein.includes(anfrage.toLowerCase()) ? 1 : 0);
            treffer.push({ e, buch, ausschnitt, rang });
        });
    });
    treffer.sort((a, b) => b.rang - a.rang);
    const hervor = t => begriffe.reduce((html, b) =>
        html.replace(new RegExp('(' + b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>'), escapeHtml(t));
    const zeilen = treffer.slice(0, 40).map(t => `
        <button class="rb-treffer-eintrag" type="button" data-rbbuch="${escapeHtml(t.buch.id)}" data-rbziel="${escapeHtml(t.e.id)}" data-rbsuche="${escapeHtml(anfrage)}">
            <span class="rb-treffer-kopf">${escapeHtml(t.buch.tab)} · ${escapeHtml(t.e.titel)}</span>
            ${t.ausschnitt ? `<span class="rb-treffer-text">${hervor(t.ausschnitt)}</span>` : ''}
        </button>`).join('');
    return `<div class="rb-pad rb-treffer-liste"><h3>${treffer.length} Treffer</h3>${zeilen || '<p class="rb-hinweis">Nichts gefunden. Tipp: kürzere oder andere Wörter versuchen.</p>'}
        ${treffer.length > 40 ? '<p class="rb-hinweis">Nur die ersten 40 Treffer - Suche eingrenzen.</p>' : ''}</div>`;
}
