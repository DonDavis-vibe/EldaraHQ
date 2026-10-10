// How to be a Hero - Karte (Eldara-VTT)
//
// Verallgemeinert das bisherige Einzelkarten-Muster aus seekampf.js (eine
// einzige Schiffskarte) zu einer Kartenbibliothek: der SL legt beliebig viele
// Karten an (Insel, Schiffsdeck, Dschungel, ...), wechselt zwischen ihnen, und
// Spieler bewegen sich mit ihrer eigenen Figur darauf - Vorschlag, den der SL
// bestätigt oder verwirft, genau wie beim Seekampf. NSCs kommen per Knopf aus
// der NSC-Liste (nscliste.js) dazu. Nebel des Krieges ist eingebaut.
//
// Nutzt battlemap.js unverändert (siehe dort - bewusst regelsystem-
// unabhängig gehalten). seekampf.js (Schiffsgefechte) läuft als reine Regel-/
// Buchhaltungsschicht auf derselben geteilten Karte mit - Schiffe sind hier
// einfach Figuren wie alle anderen (siehe skFigurenAbgleichen dort), nur
// zusätzlich per Kapitän/Crew steuerbar. Wechselt der SL die aktive Karte,
// verschwinden Schiffe aus der Ansicht, bis er zurückwechselt (ihre Werte
// bleiben unangetastet) - deshalb rufen karteEinhaengen/karteWechseln/
// karteNeu unten auch skFigurenAbgleichen() mit auf, falls vorhanden.
//
// Nachrichten (multiplayer.js):
//   SL -> Spieler   { type: 'karte', karteId, name, kategorie, zuegeFrei,
//                      zustand: {...battlemap-Zustand, bild} }
//                      zuegeFrei = der Spieler darf seine Figur frei ziehen (Auto: solange kein Kampf-Modus läuft),
//                      zuegeNurEigene = dabei gilt die Freiheit nur für die eigene Spieler-Figur (Schiffe bleiben bestätigungspflichtig)
//   Spieler -> SL    { type: 'karteZugVorschlag', karteId, figurId, x, y, frei? }  frei: die Figur steht lokal schon dort - der SL
//                      übernimmt die Position sofort, wenn die Bewegung gerade frei ist, sonst gilt es als Vorschlag
//
// Figur-IDs: 'spieler:'+peerId (eine pro verbundenem Spieler, automatisch),
// 'nsc:'+nscId (aus der NSC-Liste), 'frei:'+uid (freie SL-Markierung).

const KARTEN_KEY = 'htbah_gm_karten';
const KARTEN_OFFEN_KEY = 'htbah_gm_karten_offen';
const KARTEN_KATEGORIEN = {
    land: { label: 'Land', icon: 'fa-mountain-sun' },
    see: { label: 'See/Insel', icon: 'fa-water' },
    schiff: { label: 'Schiffsdeck', icon: 'fa-ship' },
    sonstiges: { label: 'Sonstiges', icon: 'fa-map' }
};

function karteLeererZustand() {
    return { raster: Object.assign({}, KARTE_RASTER_STANDARD), figuren: [], formen: [], pins: [], nebel: { aktiv: false, aufgedeckt: [], entwurf: [] }, bild: null };
}

// Spiegel von battlemap.js' eigenen STANDARD-Rasterwerten (siehe dort) - wird
// hier zusätzlich gebraucht, weil battlemap.js immer nur EINE Zustands-
// Instanz pro Sitzung lebendig hält (siehe karteMap/karteSpielerMap unten):
// applyState() MERGT ein übergebenes raster-Objekt nur rein
// (Object.assign(zustand.raster, neu.raster)), statt es zu ersetzen. Bekäme
// eine Karte ohne eigene (oder mit unvollständiger) Feldgröße/Versatz/Farbe
// den Zustand einer anderen Karte einfach so übergeben, würden Lücken vom
// vorher aktiven Kartenwechsel "durchbluten" - z.B. bliebe eine frisch
// angelegte Karte auf der zuletzt eingestellten Feldgröße hängen, statt bei
// den Standardwerten zu starten. karteZustandFuerAnwenden() unten füllt
// deshalb vor jedem applyState() explizit auf - macht jede Karte inkl. ihrer
// eigenen Feldgröße wirklich unabhängig von jeder anderen, auch ältere, vor
// diesem Fix gespeicherte Karten mit unvollständigem raster.
const KARTE_RASTER_STANDARD = {
    rasterGroesse: 50, rasterVersatzX: 0, rasterVersatzY: 0,
    rasterSichtbar: true, rasterFarbe: 'rgba(212,162,76,0.30)', einrasten: true, ringeAnzeigen: true, statusAnzeigen: true, lpAnzeigen: true,
    einheit: 1, einheitName: 'm', diagonale: 'gleich'
};

// Messform (Linie/Kreis/Kegel/Strahl): rein lokale Ansichtswahl, gilt für GM-, Vollbild- und Spieler-Leiste
let karteMessform = 'linie';
function karteMessformSelectHtml() {
    return `<select data-ktmessform class="sk-input sk-mal-art" onchange="karteMessformSetzen(this.value)" title="Messform: Linie = Strecke nach der Diagonalregel der Karte; Kreis, Kegel (60°) und Strahl (1 Feld breit) zeigen eine Fläche ab dem Startpunkt">
        ${[['linie', 'Linie'], ['kreis', 'Kreis'], ['kegel', 'Kegel'], ['strahl', 'Strahl']].map(([k, l]) => `<option value="${k}" ${karteMessform === k ? 'selected' : ''}>${l}</option>`).join('')}
    </select>`;
}
function karteMessformSetzen(wert) {
    karteMessform = wert;
    if (typeof karteMap !== 'undefined' && karteMap) karteMap.setMessForm(wert);
    if (typeof karteSpielerMap !== 'undefined' && karteSpielerMap) karteSpielerMap.setMessForm(wert);
    document.querySelectorAll('[data-ktmessform]').forEach(s => { s.value = wert; });
}
function karteZustandFuerAnwenden(zustand) {
    return Object.assign({}, zustand, { raster: Object.assign({}, KARTE_RASTER_STANDARD, (zustand && zustand.raster) || {}) });
}

// Rein lokale Spieler-Präferenz (appData.karteRasterAusblenden, Default aus -
// Raster wie bisher sichtbar): blendet das vom SL eingestellte Raster nur im
// EIGENEN Browser aus, ohne die geteilte Karte für SL/andere Spieler
// anzufassen. Deshalb keine Änderung an battlemap.js oder am gesendeten
// Zustand - nur ein Override kurz vor dem lokalen applyState().
function karteSpielerZustandFuerAnwenden(zustand) {
    const z = karteZustandFuerAnwenden(zustand);
    if (typeof appData !== 'undefined' && appData.karteRasterAusblenden) {
        z.raster = Object.assign({}, z.raster, { rasterSichtbar: false });
    }
    return z;
}

function karteRasterAusblendenUmschalten() {
    appData.karteRasterAusblenden = !appData.karteRasterAusblenden;
    if (typeof saveData === 'function') saveData();
    if (karteSpielerMap && karteSpielerLetzte && karteSpielerLetzte.zustand) {
        karteSpielerMap.applyState(karteSpielerZustandFuerAnwenden(karteSpielerLetzte.zustand), karteSpielerLetzte.zustand.bild);
    }
    document.querySelectorAll('[data-ktraster-toggle]').forEach(btn => btn.classList.toggle('tool-btn-aktiv', !!appData.karteRasterAusblenden));
}

// --- Spielleiter --------------------------------------------------------------

let karten = [];              // [{ id, name, kategorie, zustand }]
let karteAktivId = null;
let karteMap = null;          // aktuell eingehängte BattleMap-Instanz
let karteOffenGm = true;
// Wie sich die Spieler auf der Karte bewegen (pro Sitzung): 'auto' (Standard) = frei, solange kein Kampf-Modus
// läuft - dann nur Anfragen, die der SL bestätigt; 'frei' = immer frei; 'bestaetigung' = immer nur Anfragen.
// Im Auto-Modus gilt die Freiheit nur für die eigene Spieler-Figur, Schiffe des Seekampfs bleiben bestätigungspflichtig.
let karteZuegeModus = 'auto';

function karteZuegeEffektiv() {
    const kampfModus = typeof kampf !== 'undefined' && !!kampf.modusAktiv;
    if (karteZuegeModus === 'frei') return { frei: true, nurEigene: false };
    if (karteZuegeModus === 'bestaetigung') return { frei: false, nurEigene: false };
    return { frei: !kampfModus, nurEigene: true };
}

function karteNeueId() {
    return 'kt_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function karteLaden() {
    try {
        const roh = localStorage.getItem(KARTEN_KEY);
        const stand = roh ? JSON.parse(roh) : null;
        karten = stand && Array.isArray(stand.karten) ? stand.karten : [];
        karteAktivId = stand ? stand.aktivId : null;
    } catch (e) { karten = []; karteAktivId = null; }
    try { karteOffenGm = localStorage.getItem(KARTEN_OFFEN_KEY) !== '0'; } catch (e) { karteOffenGm = true; }
}

function karteSichern() {
    sicherSpeichern(KARTEN_KEY, JSON.stringify({ karten, aktivId: karteAktivId }));
}

// Schreibt den lebenden Kartenzustand zurück in karten[], bevor gewechselt
// oder gespeichert wird - battlemap.js hält immer nur EINE Instanz lebendig.
function karteAktuelleZurueckschreiben() {
    if (!karteMap || !karteAktivId) return;
    const eintrag = karten.find(k => k.id === karteAktivId);
    if (!eintrag) return;
    eintrag.zustand = Object.assign(karteMap.getState(), { bild: karteMap.bild });
}

function karteFreieSpawnPosition() {
    if (!karteMap) return { x: 1, y: 1 };
    const mitte = karteMap.sichtbaresZentrum();
    const n = karteMap.figuren.length;
    if (n === 0) return mitte;
    const winkel = n * 2.4;
    const radius = 1.5 * Math.sqrt(n);
    return { x: Math.round((mitte.x + Math.cos(winkel) * radius) * 2) / 2, y: Math.round((mitte.y + Math.sin(winkel) * radius) * 2) / 2 };
}

// Portraits liegen bewusst nicht im synchronisierten Zustand (battlemap.js) -
// nach jedem Kartenwechsel/Laden neu zuweisen, wie beim Seekampf auch.
function karteFigurenPortraitsWiederherstellen() {
    if (!karteMap || typeof connectedPlayersData === 'undefined') return;
    karteMap.figuren.forEach(f => {
        if (!f.id.startsWith('spieler:')) return;
        const peerId = f.id.slice('spieler:'.length);
        const d = connectedPlayersData[peerId];
        const bild = d && typeof safeImageSrc === 'function' ? safeImageSrc(d.portrait) : null;
        if (bild && bild !== 'assets/giphy.gif') karteMap.setFigurBild(f.id, bild);
    });
}

// Für jeden verbundenen Spieler eine eigene Figur, sofern noch keine da ist -
// und bei bereits vorhandener Figur Name/Farbe live nachziehen (z.B. wenn ein
// Spieler seinen Charakternamen ändert). Vorher wurden Name/Farbe nur EINMAL
// bei der Ersterstellung gesetzt und nie wieder aktualisiert, weil eine schon
// vorhandene Figur die Schleife komplett übersprang - addFigur() kann beides
// (neu anlegen ODER bestehende Felder per Object.assign aktualisieren), bloß
// wurde es für existierende Figuren nie erneut aufgerufen. Position/Größe
// bleiben beim Update bewusst unangetastet (kein Reset auf Spawn-Position).
function karteSpielerFigurenAbgleichen() {
    if (!karteMap || typeof connectedPlayersData === 'undefined') return;
    Object.keys(connectedPlayersData).forEach(peerId => {
        const id = 'spieler:' + peerId;
        const d = connectedPlayersData[peerId];
        const name = [d.vorname, d.name].filter(Boolean).join(' ') || 'Spieler';
        const farbe = typeof getColorForPlayer === 'function' ? getColorForPlayer(name) : '#9ca3af';
        const bestehend = karteMap.figuren.find(f => f.id === id);
        if (bestehend) {
            if (bestehend.name !== name || bestehend.farbe !== farbe) {
                karteMap.addFigur({ id, name, farbe });
            }
            return;
        }
        const pos = karteFreieSpawnPosition();
        karteMap.addFigur({ id, name, x: pos.x, y: pos.y, groesse: 1, besitzer: peerId, farbe });
        karteRingAnwenden(karteMap.figuren.find(f => f.id === id));
    });
    karteFigurenPortraitsWiederherstellen();
    karteNscBilderAnwenden();
    karteNscGroessenAnwenden();
    karteNscBildPositionAnwenden();
    karteTokenAnzeigeAbgleichen();
}

// Vom SL entfernt: seine Karten-Figur bleibt sonst als Leiche stehen.
function karteSpielerEntfernen(peerId) {
    if (!karteMap) return;
    karteMap.removeFigur('spieler:' + peerId);
    karteVerteilen();
}

function karteEinhaengen(canvas) {
    if (!canvas || karteMap) return;
    karteLaden();
    if (!karten.length) {
        const id = karteNeueId();
        karten.push({ id, name: 'Karte 1', kategorie: 'land', zustand: karteLeererZustand() });
        karteAktivId = id;
    }
    if (!karteAktivId || !karten.find(k => k.id === karteAktivId)) karteAktivId = karten[0].id;

    karteMap = BattleMap.create(canvas, {
        einheit: 1, einheitName: 'm',
        onAuswahl: () => karteAuswahlLeisteAktualisieren(),
        onPinKlick: (pin, x, y) => kartePinPopover(pin, x, y, 'gm'),
        onPinNeu: (pin) => { kartePinPopover(pin, null, null, 'gm'); renderKarteGm(); },
        onChange: () => { karteAktuelleZurueckschreiben(); karteSichern(); karteVerteilen(); }
    });
    const eintrag = karten.find(k => k.id === karteAktivId);
    karteMap.applyState(karteZustandFuerAnwenden(eintrag.zustand), eintrag.zustand.bild);
    karteSpielerFigurenAbgleichen();
    if (typeof skFigurenAbgleichen === 'function') skFigurenAbgleichen();
    karteFigurenPortraitsWiederherstellen();
    karteNscBilderAnwenden();
    karteNscGroessenAnwenden();
    karteNscBildPositionAnwenden();
}

function karteNeuDialog() {
    const name = prompt('Name der neuen Karte (z.B. "Tortuga", "Schiffsdeck"):', '');
    if (name === null) return;
    karteNeu(name.trim() || 'Neue Karte', 'land');
}

function karteNeu(name, kategorie) {
    karteAktuelleZurueckschreiben();
    const id = karteNeueId();
    karten.push({ id, name: name || 'Neue Karte', kategorie: KARTEN_KATEGORIEN[kategorie] ? kategorie : 'land', zustand: karteLeererZustand() });
    karteAktivId = id;
    if (karteMap) {
        karteMap.applyState(karteLeererZustand(), null);
        karteSpielerFigurenAbgleichen();
        if (typeof skFigurenAbgleichen === 'function') skFigurenAbgleichen();
    }
    karteSichern();
    karteVerteilen();
    renderKarteGm();
}

function karteWechseln(id) {
    if (!id || id === karteAktivId) return;
    karteAktuelleZurueckschreiben();
    const eintrag = karten.find(k => k.id === id);
    if (!eintrag || !karteMap) return;
    karteAktivId = id;
    karteMap.auswahlLeeren();
    karteMap.applyState(karteZustandFuerAnwenden(eintrag.zustand), eintrag.zustand.bild);
    karteSpielerFigurenAbgleichen();
    if (typeof skFigurenAbgleichen === 'function') skFigurenAbgleichen();
    karteFigurenPortraitsWiederherstellen();
    karteNscBilderAnwenden();
    karteNscGroessenAnwenden();
    karteNscBildPositionAnwenden();
    karteSichern();
    karteVerteilen();
    renderKarteGm();
}

function karteKategorieWaehlen(kategorie) {
    const eintrag = karten.find(k => k.id === karteAktivId);
    if (!eintrag || !KARTEN_KATEGORIEN[kategorie]) return;
    eintrag.kategorie = kategorie;
    karteSichern();
    karteVerteilen();
    renderKarteGm();
}

function karteUmbenennenDialog() {
    const eintrag = karten.find(k => k.id === karteAktivId);
    if (!eintrag) return;
    const name = prompt('Neuer Name:', eintrag.name);
    if (!name) return;
    eintrag.name = name.trim() || eintrag.name;
    karteSichern();
    karteVerteilen();
    renderKarteGm();
}

function karteLoeschenBestaetigt() {
    if (karten.length <= 1) { alert('Die letzte Karte kann nicht gelöscht werden.'); return; }
    const eintrag = karten.find(k => k.id === karteAktivId);
    if (!eintrag || !confirm(`Karte "${eintrag.name}" wirklich löschen?`)) return;
    karten = karten.filter(k => k.id !== karteAktivId);
    karteAktivId = null;
    karteWechseln(karten[0].id);
}

function karteBildHochladen(ereignis) {
    const datei = ereignis.target.files && ereignis.target.files[0];
    ereignis.target.value = '';
    if (!datei || !karteMap) return;
    BattleMap.bildVerkleinern(datei).then(res => {
        karteMap.setBild(res.dataUrl);
        karteMap.einpassen();
        karteAktuelleZurueckschreiben();
        karteSichern();
        karteVerteilen();
    }).catch(() => { /* ungültiges Bild */ });
}

function karteBildEntfernen() {
    if (!karteMap) return;
    karteMap.setBild(null);
    karteAktuelleZurueckschreiben();
    karteSichern();
    karteVerteilen();
}

// --- Vorgefertigter Kartenhintergrund aus der Galerie ------------------------
//
// Alternative zum eigenen Hochladen: referenziert die Datei direkt per Pfad
// statt sie wie beim Upload als Data-URL einzubetten - die Bilder liegen ja
// schon online unter assets/, Spieler laden sie also ganz normal selbst per
// HTTP, statt dass wir sie komplett über die P2P-Verbindung schicken müssten
// (zustand.bild ist bei einem Pfad nur eine kurze Zeichenkette und reist
// deshalb im normalen Karten-Sync einfach mit, kein Sonderweg nötig - anders
// als bei den NSC-Porträts, siehe karteNscBildVerteilen). Liste kommt aus
// assets/npc-grafiken/battlemaps/battlemap-bilder.js (erzeugt von
// assets/npc-grafiken/battlemaps/erzeuge-manifest.py).
function karteGaleriePicker() {
    if (!karteMap) return;
    if (typeof BATTLEMAP_BILDER === 'undefined' || !BATTLEMAP_BILDER.length) {
        alert('Keine Galerie-Kartenhintergründe gefunden (assets/npc-grafiken/battlemaps/battlemap-bilder.js fehlt oder ist leer).');
        return;
    }
    const body = document.getElementById('karte-galerie-body');
    if (body) {
        body.innerHTML = `
            <div class="nsc-galerie-gruppe">
                <div class="nsc-galerie-grid">
                    ${BATTLEMAP_BILDER.map(b => `<button type="button" class="nsc-galerie-item" data-kartegaleriebild="${escapeHtml(b.pfad)}" title="${escapeHtml(b.name)}">
                        <img src="${escapeHtml(b.pfad)}" alt="${escapeHtml(b.name)}" loading="lazy">
                        <span>${escapeHtml(b.name)}</span>
                    </button>`).join('')}
                </div>
            </div>`;
        body.querySelectorAll('[data-kartegaleriebild]').forEach(btn => btn.addEventListener('click', () => karteGalerieBildSetzen(btn.dataset.kartegaleriebild)));
    }
    const overlay = document.getElementById('karte-galerie-modal-overlay');
    if (overlay) overlay.classList.add('active');
}

function karteGalerieSchliessen() {
    const overlay = document.getElementById('karte-galerie-modal-overlay');
    if (overlay) overlay.classList.remove('active');
}

function karteGalerieBildSetzen(pfad) {
    if (!karteMap) return;
    karteMap.setBild(pfad);
    karteMap.einpassen();
    karteAktuelleZurueckschreiben();
    karteSichern();
    karteVerteilen();
    karteGalerieSchliessen();
}

function karteMarkierungHinzufuegen() {
    const nameEl = document.getElementById('kt-marker-name');
    const name = (nameEl ? nameEl.value : '').trim() || 'Markierung';
    if (!karteMap) return;
    const pos = karteFreieSpawnPosition();
    // besitzer 'sl' (wörtlich, siehe battlemap.js fuerSpieler()) macht die
    // Markierung im Nebel des Krieges versteckbar - anders als bei Spieler-Figuren
    // gewollt, das ist ja der Sinn von Nebel für NSCs/Markierungen.
    karteMap.addFigur({ id: 'frei:' + karteNeueId(), name, x: pos.x, y: pos.y, groesse: 1, besitzer: 'sl', farbe: '#8b5cf6' });
    if (nameEl) nameEl.value = '';
    renderKarteGm();
}

// Aus nscliste.js aufgerufen ("Auf Karte platzieren"). Erneutes Platzieren
// legt nichts doppelt an.
function karteNsPlatzieren(nsc) {
    if (!karteMap || !nsc || !nsc.id) return;
    const id = 'nsc:' + nsc.id;
    if (karteMap.figuren.find(f => f.id === id)) { renderKarteGm(); return; }
    const pos = karteFreieSpawnPosition();
    karteMap.addFigur({ id, name: nsc.name || 'NSC', x: pos.x, y: pos.y, groesse: Number(nsc.groesse) || 1, besitzer: 'sl', farbe: '#a3342b' });
    karteRingAnwenden(karteMap.figuren.find(f => f.id === id));
    if (nsc.bild) {
        karteMap.setFigurBild(id, nsc.bild);
        karteMap.setFigurBildPosition(id, Number(nsc.bildY));
        karteNscBildVerteilen(id, nsc.bild, nsc.bildY);
    }
    if (typeof addGmLogEntry === 'function') addGmLogEntry('Spielleiter', `setzt "${nsc.name || 'NSC'}" auf die Karte.`, '🗺️');
    renderKarteGm();
}

// Eigenes Icon je NSC (nscliste.js: n.bild) auf jeden schon platzierten Token
// nachziehen - Porträts sind bewusst nicht Teil von battlemap.js' eigenem
// Zustand (siehe setFigurBild dort), müssen also nach jedem Sync/Wechsel aus
// der eigentlichen Quelle (der NSC-Liste) neu gesetzt werden, genau wie bei
// Spieler-Porträts (karteFigurenPortraitsWiederherstellen) und Schiffs-Icons
// (skFigurenAbgleichen).
function karteNscBilderAnwenden() {
    if (!karteMap || typeof nscListe === 'undefined') return;
    karteMap.figuren.forEach(f => {
        if (!f.id.startsWith('nsc:')) return;
        const n = nscListe.find(x => x.id === f.id.slice('nsc:'.length));
        // Auch ein entferntes Icon (n.bild null) muss durchgereicht werden -
        // setFigurBild(id, null) löscht es aus battlemap.js' eigenem Cache,
        // sonst bliebe ein einmal gesetztes Icon dort für immer hängen.
        if (n) karteMap.setFigurBild(f.id, n.bild || null);
    });
}

// Vertikaler Bildausschnitt je NSC (nscliste.js: n.bildY) auf jeden schon
// platzierten Token nachziehen - aus demselben Grund wie das Bild selbst
// (siehe karteNscBilderAnwenden), da auch das kein Teil von battlemap.js'
// eigenem Zustand ist.
function karteNscBildPositionAnwenden() {
    if (!karteMap || typeof nscListe === 'undefined') return;
    karteMap.figuren.forEach(f => {
        if (!f.id.startsWith('nsc:')) return;
        const n = nscListe.find(x => x.id === f.id.slice('nsc:'.length));
        if (n) karteMap.setFigurBildPosition(f.id, Number(n.bildY));
    });
}

// Kartentoken-Größe je NSC (nscliste.js: n.groesse) auf jeden schon
// platzierten Token nachziehen - anders als das Bild IST die Größe Teil von
// battlemap.js' eigenem Zustand (zustand.figuren[].groesse, siehe
// setFigurGroesse), landet also normal im Sync; hier nur nötig, damit eine in
// der NSC-Liste geänderte Größe auch bei einem schon platzierten Token
// nachträglich ankommt, statt erst beim nächsten Neu-Platzieren.
function karteNscGroessenAnwenden() {
    if (!karteMap || typeof nscListe === 'undefined') return;
    karteMap.figuren.forEach(f => {
        if (!f.id.startsWith('nsc:')) return;
        const n = nscListe.find(x => x.id === f.id.slice('nsc:'.length));
        if (n) karteMap.setFigurGroesse(f.id, Number(n.groesse) || 1);
    });
}

function karteFigurEntfernen(id) {
    if (!karteMap) return;
    karteMap.removeFigur(id);
    renderKarteGm();
}

function karteFigurVerdecktUmschalten(id) {
    if (!karteMap) return;
    const f = karteMap.figuren.find(x => x.id === id);
    if (!f) return;
    karteMap.setVerdeckt(id, !f.verdeckt);
    renderKarteGm();
}

function karteNebelUmschalten(an) {
    if (!karteMap) return;
    karteMap.nebelAktiv(!!an);
    karteVerteilen();
}

function karteNebelFreigeben() {
    if (!karteMap) return;
    karteMap.nebelFreigeben();
    renderKarteGm();
}

function karteNebelEntwurfVerwerfen() {
    if (!karteMap) return;
    karteMap.nebelEntwurfVerwerfen();
    renderKarteGm();
}

function karteZugModusSetzen(modus) {
    karteZuegeModus = ['auto', 'frei', 'bestaetigung'].includes(modus) ? modus : 'auto';
    karteVerteilen();
    renderKarteGm();
}

function karteZugBestaetigen(id) {
    if (!karteMap) return;
    karteMap.zugBestaetigen(id);
    renderKarteGm();
}

function karteZugVerwerfen(id) {
    if (!karteMap) return;
    karteMap.zugVerwerfen(id);
    renderKarteGm();
}

// --- Live-Sync an die Spieler --------------------------------------------------

let karteVerteilenTimer = null;

function karteVerteilen() {
    clearTimeout(karteVerteilenTimer);
    karteVerteilenTimer = setTimeout(karteJetztVerteilen, 300);
}

function karteZustandFuerSpieler() {
    if (!karteMap || !karteAktivId) return null;
    const eintrag = karten.find(k => k.id === karteAktivId);
    const zustand = karteMap.getStateFuerSpieler();
    zustand.bild = karteMap.bild;
    return {
        type: 'karte', karteId: karteAktivId,
        name: eintrag ? eintrag.name : '', kategorie: eintrag ? eintrag.kategorie : 'land',
        zuegeFrei: karteZuegeEffektiv().frei, zuegeNurEigene: karteZuegeEffektiv().nurEigene, zustand
    };
}

function karteJetztVerteilen() {
    if (typeof clientConnections === 'undefined') return;
    const nachricht = karteZustandFuerSpieler();
    if (!nachricht) return;
    Object.values(clientConnections).forEach(conn => {
        if (conn && conn.open) { try { conn.send(nachricht); } catch (e) { /* weg */ } }
    });
}

function karteAnVerbindung(conn) {
    if (!conn || !conn.open) return;
    const nachricht = karteZustandFuerSpieler();
    if (nachricht) { try { conn.send(nachricht); } catch (e) { /* weg */ } }
    karteNscBilderAnVerbindung(conn);
}

// --- NSC-Porträts an Spieler -------------------------------------------------
//
// Porträts sind bewusst NICHT Teil des normalen Karten-Zustands (siehe
// battlemap.js, getState()/Kommentar bei setFigurBild) - sie würden bei jeder
// Positions-Übertragung unnötig mitgeschleppt. Für die eigene Spielerfigur
// reicht das trotzdem (der Spieler kennt sein eigenes Bild schon, siehe
// karteEmpfangen), aber NSC-Bilder kennt nur der SL (nscListe ist GM-only) -
// die müssen gezielt einzeln raus, sonst bleiben NSC-Tokens beim Spieler für
// immer nur bunte Kreise mit Kürzel, obwohl der SL selbst das Porträt sieht.
function karteNscBildVerteilen(id, bild, bildY) {
    if (typeof clientConnections === 'undefined' || !karteMap || !karteMap.figuren.find(f => f.id === id)) return;
    const nachricht = { type: 'karteNscBild', id, bild: bild || null, bildY: Number(bildY) || 50 };
    Object.values(clientConnections).forEach(conn => {
        if (conn && conn.open) { try { conn.send(nachricht); } catch (e) { /* weg */ } }
    });
}

// Nur die vertikale Bildposition (Live-Regler beim Ziehen) - ohne die
// (potenziell große) Bilddaten bei jedem Tick erneut zu schicken.
function karteNscBildPositionVerteilen(id, bildY) {
    if (typeof clientConnections === 'undefined' || !karteMap || !karteMap.figuren.find(f => f.id === id)) return;
    const nachricht = { type: 'karteNscBildPosition', id, bildY: Number(bildY) || 50 };
    Object.values(clientConnections).forEach(conn => {
        if (conn && conn.open) { try { conn.send(nachricht); } catch (e) { /* weg */ } }
    });
}

// Neu beigetretener Spieler hat alle bisherigen Einzel-Verteilungen verpasst -
// einmal alle Porträts schon platzierter NSCs nachreichen.
function karteNscBilderAnVerbindung(conn) {
    if (!conn || !conn.open || !karteMap || typeof nscListe === 'undefined') return;
    karteMap.figuren.forEach(f => {
        if (!f.id.startsWith('nsc:')) return;
        const n = nscListe.find(x => x.id === f.id.slice('nsc:'.length));
        if (n && n.bild) {
            try { conn.send({ type: 'karteNscBild', id: f.id, bild: n.bild, bildY: Number(n.bildY) || 50 }); } catch (e) { /* weg */ }
        }
    });
}

// Zugvorschlag eines Spielers für seine eigene Figur - true = verarbeitet
// (auch wenn abgelehnt, damit multiplayer.js nicht weitersucht).
// Nur die eigene Spieler-Figur ist hier zuständig - für alles andere (z.B.
// ein Schiff aus dem Seekampf, das über dieselbe geteilte Karte gezogen wird)
// false zurückgeben, damit multiplayer.js an skAnfrageVerarbeiten weiterreicht
// (dieselbe Nachricht, andere Figuren-ID-Namensräume, siehe seekampf.js).
function karteAnfrageVerarbeiten(peerId, payload) {
    if (!payload || typeof payload !== 'object') return false;
    // Spieler-Knopf "Karte aktualisieren" (karteAktualisierenAnfordern) - schickt
    // ihm den aktuellen Stand (samt NSC-Porträts) exakt so nach, wie ein frisch
    // beitretender Spieler ihn bekäme (siehe karteAnVerbindung), ohne dass er
    // dafür die ganze Seite neu laden muss.
    if (payload.type === 'karteRefreshAnfrage') {
        const conn = typeof clientConnections !== 'undefined' ? clientConnections[peerId] : null;
        if (conn) karteAnVerbindung(conn);
        return true;
    }
    if (payload.type !== 'karteZugVorschlag') return false;
    if (!karteMap || payload.karteId !== karteAktivId) return false;
    const eigeneId = 'spieler:' + peerId;
    if (payload.figurId !== eigeneId) return false;
    // Ist die Bewegung gerade frei (karteZuegeEffektiv), steht die Figur sofort dort; sonst ist es ein Vorschlag zum Bestätigen
    if (karteZuegeEffektiv().frei) karteMap.addFigur({ id: eigeneId, x: Number(payload.x), y: Number(payload.y), geplantX: null, geplantY: null });
    else karteMap.addFigur({ id: eigeneId, geplantX: payload.x, geplantY: payload.y });
    renderKarteGm();
    return true;
}

// --- Spieler: Karte manuell aktualisieren ------------------------------------
//
// Fängt genau den Fall ab, den man bisher nur mit einem kompletten Seiten-
// Reload lösen konnte: die eigene Karte wirkt "hängen geblieben" (z.B. nach
// einem kurzen Verbindungsaussetzer). Fragt beim SL exakt denselben Stand an,
// den ein frisch beitretender Spieler bekäme - ohne Reload, ohne die eigene
// Sitzung sonst anzufassen.
function karteAktualisierenAnfordern(knopf) {
    if (typeof hostConnection === 'undefined' || !hostConnection || !hostConnection.open) return;
    try { hostConnection.send({ type: 'karteRefreshAnfrage' }); } catch (e) { /* weg */ }
    // Kurzes Feedback direkt am Knopf (dreht sich einmal), statt eine eigene
    // Hinweis-Zeile fürs Panel zu bauen - reicht für "ja, Anfrage ist raus".
    if (knopf) {
        const icon = knopf.querySelector('i');
        if (icon) {
            icon.classList.add('fa-spin');
            setTimeout(() => icon.classList.remove('fa-spin'), 800);
        }
    }
}

// --- GM-Oberfläche --------------------------------------------------------------

// --- Statussymbole & LP-Balken am Token (aus dem Kampf-Tracker, kampf.js) ----------------
// Spieler-Figuren ('spieler:<peerId>') gehören direkt zum gleichnamigen Tracker-Teilnehmer, ihre
// LP stehen auf dem Bogen (connectedPlayersData). NSC-/Gegner-Figuren werden über den Namen dem
// Tracker-Teilnehmer zugeordnet (der Tracker kennt die Karten-Figuren nicht). Die LP-Balken von
// Gegnern sehen die Spieler nur, wenn der SL sie freigibt (kampf.js: lpOeffentlich) - Verbündete
// und Spieler-Figuren sind für alle sichtbar. Läuft bei jeder Tracker-Änderung (kampfSichern)
// und nach Karten-/Spieleränderungen; meldet nur, wenn sich wirklich etwas geändert hat.
function karteTokenAnzeigeAbgleichen() {
    if (!karteMap || typeof kampf === 'undefined') return;
    const teilnehmer = kampf.teilnehmer || [];
    let geaendert = false;
    const behandelt = new Set();
    teilnehmer.forEach(t => {
        let fig = null;
        if (t.art === 'spieler') fig = karteMap.figuren.find(f => f.id === t.id);
        else {
            const name = String(t.name || '').trim().toLowerCase();
            fig = karteMap.figuren.find(f => !f.id.startsWith('spieler:') && String(f.name || '').trim().toLowerCase() === name);
        }
        if (!fig) return;
        behandelt.add(fig.id);
        const status = [];
        if (t.tot) status.push('tot');
        if (t.blutung > 0) status.push('blutung');
        if (t.feuermarker > 0) status.push('feuer');
        if (t.gift > 0) status.push('gift');
        if (t.schlaf) status.push('schlaf');
        if (t.stun) status.push('stun');
        if (typeof kampfIstMonsterform === 'function' && kampfIstMonsterform(t)) status.push('monster');
        let lp = null;
        if (t.art === 'spieler') {
            const d = typeof connectedPlayersData !== 'undefined' ? connectedPlayersData[t.peerId] : null;
            if (d && Number(d.hpMax) > 0) lp = { a: Number(d.hpCurrent), m: Number(d.hpMax), oeffentlich: true };
        } else if (t.hp && t.hp.max > 0) {
            const oeffentlich = t.lpOeffentlich !== undefined ? !!t.lpOeffentlich : t.seite !== 'gegner';
            lp = { a: t.hp.aktuell, m: t.hp.max, oeffentlich };
        }
        if (karteMap.setFigurAnzeige(fig.id, { status, lp, amZug: kampf.amZug === t.id }, true)) geaendert = true;
    });
    // Figuren, die nicht (mehr) im Kampf sind, verlieren ihre Anzeige
    karteMap.figuren.forEach(f => {
        if (behandelt.has(f.id) || (!f.status && !f.lp && !f.amZug)) return;
        if (karteMap.setFigurAnzeige(f.id, { status: [], lp: null, amZug: false }, true)) geaendert = true;
    });
    if (geaendert) karteMap.setRaster({});   // ein einziges Melden/Verteilen für alle Änderungen
}

// --- Token-Ringe (Farbe/Breite/Stil je Figur, nur der Spielleiter ändert sie) ---------
// Wie Foundrys "Disposition": freundlich/neutral/feindlich als schnelle Vorgaben, dazu freie
// Farbe, Breite und Stil. Gemerkt wird die Einstellung für NSC-Figuren (nach NSC-Eintrag) und
// Spieler-Figuren (nach Charaktername), damit ein neu platziertes Token auf der nächsten Karte
// denselben Ring hat. Alle anderen Figuren (Markierungen) behalten den Ring nur auf ihrer Karte.
const KARTE_RING_KEY = 'htbah_gm_ringe';
const KARTE_RING_VORGABEN = {
    verbuendet: { label: 'Verbündet', ring: '#4ade80', ringBreite: 'normal', ringStil: 'voll' },
    neutral:    { label: 'Neutral',   ring: '#facc15', ringBreite: 'normal', ringStil: 'voll' },
    feindlich:  { label: 'Feindlich', ring: '#ef4444', ringBreite: 'normal', ringStil: 'voll' },
    boss:       { label: 'Boss',      ring: '#a855f7', ringBreite: 'dick',   ringStil: 'doppelt' },
    geheim:     { label: 'Geheim',    ring: '#94a3b8', ringBreite: 'normal', ringStil: 'gestrichelt' }
};
const KARTE_RING_STILE = { voll: 'Voll', gestrichelt: 'Gestrichelt', doppelt: 'Doppelt', leuchtend: 'Leuchtend' };
const KARTE_RING_BREITEN = { duenn: 'Dünn', normal: 'Normal', dick: 'Dick' };

function karteRingVorlagenLesen() {
    try { return JSON.parse(localStorage.getItem(KARTE_RING_KEY) || '{}') || {}; } catch (e) { return {}; }
}

// Schlüssel, unter dem der Ring einer Figur gemerkt wird (null = nicht merken)
function karteRingSchluessel(f) {
    if (!f) return null;
    if (f.id.startsWith('nsc:')) return f.id;
    if (f.id.startsWith('spieler:')) return 'spieler:' + String(f.name || '').trim().toLowerCase();
    return null;
}

function karteRingEigenschaften(f) {
    const o = {};
    if (f.ring) o.ring = f.ring;
    if (f.ringBreite) o.ringBreite = f.ringBreite;
    if (f.ringStil) o.ringStil = f.ringStil;
    if (f.ringAus) o.ringAus = true;
    return o;
}

function karteRingMerken(f) {
    const key = karteRingSchluessel(f);
    if (!key) return;
    const alle = karteRingVorlagenLesen();
    const o = karteRingEigenschaften(f);
    if (Object.keys(o).length) alle[key] = o; else delete alle[key];
    sicherSpeichern(KARTE_RING_KEY, JSON.stringify(alle));
}

// Gemerkten Ring auf eine frisch angelegte Figur anwenden
function karteRingAnwenden(f) {
    if (!karteMap || !f) return;
    const key = karteRingSchluessel(f);
    const o = key ? karteRingVorlagenLesen()[key] : null;
    if (o) karteMap.setFigurRing(f.id, Object.assign({ ring: '', ringBreite: '', ringStil: '', ringAus: false }, o));
}

// patch: { ring, ringBreite, ringStil }; nurAnzeige = Live-Vorschau beim Ziehen im Farbwähler
function karteRingSetzen(id, patch, nurAnzeige) {
    if (!karteMap) return;
    karteMap.setFigurRing(id, patch, !!nurAnzeige);
    if (nurAnzeige) return;
    karteRingMerken(karteMap.figuren.find(f => f.id === id));
    renderKarteGm();
}

function karteRingVorgabeAnwenden(id, vorgabe) {
    if (vorgabe === 'standard') { karteRingSetzen(id, { ring: '', ringBreite: '', ringStil: '', ringAus: false }); return; }
    const v = KARTE_RING_VORGABEN[vorgabe];
    if (v) karteRingSetzen(id, { ring: v.ring, ringBreite: v.ringBreite, ringStil: v.ringStil });
}

function karteRingZeileHtml(f) {
    const id = escapeHtml(f.id);
    return `<div class="kt-ring-zeile">
        <span class="ir-hint" style="margin:0" title="Farbe, Breite und Stil des Rings um das Token - die Spieler sehen ihn so">Ring:</span>
        <input type="color" class="sk-mal-farbe kt-ring-farbe" value="${escapeHtml(f.ring || (/^#[0-9a-f]{6}$/i.test(f.farbe || '') ? f.farbe : '#9ca3af'))}"
            oninput="karteRingSetzen('${id}', { ring: this.value }, true)" onchange="karteRingSetzen('${id}', { ring: this.value })" title="Ringfarbe">
        <select class="sk-input kt-ring-wahl" onchange="karteRingVorgabeAnwenden('${id}', this.value)" title="Schnellwahl wie die Disposition in Foundry">
            <option value="">Vorgabe …</option>
            ${Object.entries(KARTE_RING_VORGABEN).map(([k, v]) => `<option value="${k}">${escapeHtml(v.label)}</option>`).join('')}
            <option value="standard">Standard</option>
        </select>
        <select class="sk-input kt-ring-wahl" onchange="karteRingSetzen('${id}', { ringBreite: this.value })" title="Ringbreite">
            ${Object.entries(KARTE_RING_BREITEN).map(([k, l]) => `<option value="${k}" ${(f.ringBreite || 'normal') === k ? 'selected' : ''}>${l}</option>`).join('')}
        </select>
        <select class="sk-input kt-ring-wahl" onchange="karteRingSetzen('${id}', { ringStil: this.value })" title="Ringstil">
            ${Object.entries(KARTE_RING_STILE).map(([k, l]) => `<option value="${k}" ${(f.ringStil || 'voll') === k ? 'selected' : ''}>${l}</option>`).join('')}
        </select>
        <label class="hr-check kt-ring-aus" style="margin:0" title="Ring nur für dieses Token abschalten (Farbe und Stil bleiben gemerkt)"><input type="checkbox" ${f.ringAus ? 'checked' : ''} onchange="karteRingSetzen('${id}', { ringAus: this.checked })"> <span>Aus</span></label>
    </div>`;
}

// Aura-Zeile: Kreis um das Token (Buff-Reichweite, Lichtkreis, Waffenreichweite ...). Die Spieler
// sehen sie, außer sie ist auf "nur SL" gestellt.
function karteAuraSetzen(id, patch, nurAnzeige) {
    if (!karteMap) return;
    karteMap.setFigurAura(id, patch, !!nurAnzeige);
    if (!nurAnzeige) renderKarteGm();
}

function karteAuraZeileHtml(f) {
    const id = escapeHtml(f.id);
    const a = f.aura;
    if (!a || !a.an) {
        return `<div class="kt-ring-zeile">
            <label class="hr-check" style="margin:0" title="Kreis um das Token einblenden (Buff-Reichweite, Lichtkreis, Waffenreichweite ...)"><input type="checkbox" onchange="karteAuraSetzen('${id}', { an: this.checked })"> <span>Aura</span></label>
        </div>`;
    }
    return `<div class="kt-ring-zeile">
        <label class="hr-check" style="margin:0"><input type="checkbox" checked onchange="karteAuraSetzen('${id}', { an: this.checked })"> <span>Aura</span></label>
        <label class="sk-raster-feld" title="Radius in Feldern ab dem Mittelpunkt des Tokens${karteMap && karteMap.raster.einheit ? ' (1 Feld = ' + karteMap.raster.einheit + ' ' + escapeHtml(karteMap.raster.einheitName) + ')' : ''}">Radius
            <input type="number" class="sk-input sk-input-schmal" value="${a.r}" min="0.5" max="40" step="0.5" onchange="karteAuraSetzen('${id}', { r: this.value })"></label>
        <input type="color" class="sk-mal-farbe kt-ring-farbe" value="${escapeHtml(a.farbe || '#fbbf24')}"
            oninput="karteAuraSetzen('${id}', { farbe: this.value }, true)" onchange="karteAuraSetzen('${id}', { farbe: this.value })" title="Aurafarbe">
        <select class="sk-input kt-ring-wahl" onchange="karteAuraSetzen('${id}', { stil: this.value })" title="Darstellung">
            ${[['flaeche', 'Fläche'], ['ring', 'Ring'], ['gestrichelt', 'Gestrichelt']].map(([k, l]) => `<option value="${k}" ${(a.stil || 'flaeche') === k ? 'selected' : ''}>${l}</option>`).join('')}
        </select>
        <input type="text" class="sk-input kt-pin-label" value="${escapeHtml(a.name || '')}" maxlength="40" placeholder="Bezeichnung (z.B. Kommando-Aura) …" onchange="karteAuraSetzen('${id}', { name: this.value })">
        <label class="hr-check" style="margin:0" title="Nur du siehst diese Aura"><input type="checkbox" ${a.verdeckt ? 'checked' : ''} onchange="karteAuraSetzen('${id}', { verdeckt: this.checked })"> <span>nur SL</span></label>
    </div>`;
}

function karteFigurZeileHtml(f) {
    return `<div class="kt-figur ${karteMap && karteMap.getAuswahl().includes(f.id) ? 'kt-figur-gewaehlt' : ''}" data-figur-id="${escapeHtml(f.id)}">${karteFigurKopfHtml(f)}${karteRingZeileHtml(f)}${karteAuraZeileHtml(f)}</div>`;
}

// --- Mehrfachauswahl ------------------------------------------------------------------
// Die Auswahl lebt in battlemap.js (nur SL, lokal). Hier nur die Leiste mit Sammelaktionen und die
// Markierung der gewählten Figuren in der Liste.
function karteAuswahlLeisteInnenHtml() {
    if (!karteMap) return '';
    const n = karteMap.getAuswahl().length;
    return `<span class="ir-hint" style="margin:0" title="Strg+Klick auf Figuren, Strg+Rahmen ziehen oder das Werkzeug Auswahl; eine gewählte Figur ziehen bewegt alle"><i class="fa-solid fa-object-group"></i> Auswahl: <b>${n}</b></span>
        <button class="sk-mini-btn" onclick="karteMap.setAuswahl(karteMap.figuren.map(f => f.id))">Alle</button>
        ${n ? `<button class="sk-mini-btn" onclick="karteAuswahlVerdecken(true)" title="Alle gewählten Figuren vor den Spielern verstecken"><i class="fa-solid fa-eye-slash"></i> Verstecken</button>
        <button class="sk-mini-btn" onclick="karteAuswahlVerdecken(false)" title="Alle gewählten Figuren aufdecken"><i class="fa-solid fa-eye"></i> Aufdecken</button>
        <button class="sk-mini-btn" onclick="karteMap.auswahlLeeren()"><i class="fa-solid fa-xmark"></i> Aufheben</button>` : ''}`;
}

function karteAuswahlLeisteAktualisieren() {
    const el = document.getElementById('kt-auswahl-leiste');
    if (el && karteMap) el.innerHTML = karteAuswahlLeisteInnenHtml();
    const gewaehlt = karteMap ? karteMap.getAuswahl() : [];
    document.querySelectorAll('.kt-figur[data-figur-id]').forEach(e => e.classList.toggle('kt-figur-gewaehlt', gewaehlt.includes(e.dataset.figurId)));
}

function karteAuswahlVerdecken(verdeckt) {
    if (!karteMap) return;
    karteMap.getAuswahl().forEach(id => karteMap.setVerdeckt(id, verdeckt));
    renderKarteGm();
}

function karteFigurKopfHtml(f) {
    return `
        <div class="sk-marker-zeile" style="justify-content:space-between; flex-wrap:nowrap;">
            <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;"><span class="sk-farbpunkt" style="background:${escapeHtml(f.farbe || '#9ca3af')}"></span> ${escapeHtml(f.name)}</span>
            <span style="display:flex; gap:0.3rem; flex-shrink:0;">
                <button class="sk-badge-groesse" onclick="karteMap.setFigurGroesse('${escapeHtml(f.id)}', ${(f.groesse || 1) - 0.5}); renderKarteGm();" title="Kleiner">−</button>
                <button class="sk-badge-groesse" onclick="karteMap.setFigurGroesse('${escapeHtml(f.id)}', ${(f.groesse || 1) + 0.5}); renderKarteGm();" title="Größer">+</button>
                <button class="x-mini" onclick="karteFigurVerdecktUmschalten('${escapeHtml(f.id)}')" title="${f.verdeckt ? 'Aufdecken' : 'Verstecken (Hinterhalt)'}"><i class="fa-solid ${f.verdeckt ? 'fa-eye' : 'fa-eye-slash'}"></i></button>
                <button class="sk-badge-x" onclick="karteFigurEntfernen('${escapeHtml(f.id)}')" title="Entfernen">×</button>
            </span>
        </div>`;
}

function renderKtRasterWerkzeuge() {
    const box = document.getElementById('kt-raster-werkzeuge');
    if (!box || !karteMap) return;
    const r = karteMap.raster;
    box.innerHTML = `
        <label class="sk-raster-feld">Feldgröße <input type="number" id="kt-raster-groesse" class="sk-input sk-input-schmal" value="${r.rasterGroesse}" min="5"></label>
        <label class="sk-raster-feld">Versatz X <input type="number" id="kt-raster-versatzx" class="sk-input sk-input-schmal" value="${r.rasterVersatzX}"></label>
        <label class="sk-raster-feld">Versatz Y <input type="number" id="kt-raster-versatzy" class="sk-input sk-input-schmal" value="${r.rasterVersatzY}"></label>
        <input type="color" id="kt-raster-farbe" class="sk-mal-farbe" value="#d4a24c" title="Rasterfarbe">
        <label class="sk-raster-feld" title="Was ein Feld in der Spielwelt bedeutet - Grundlage für alle Entfernungsangaben beim Messen">1 Feld = <input type="number" id="kt-raster-einheit" class="sk-input sk-input-schmal" value="${r.einheit}" min="0.1" step="any"> <input type="text" id="kt-raster-einheitname" class="sk-input sk-input-schmal" value="${escapeHtml(r.einheitName)}" maxlength="6" style="width:3.2rem"></label>
        <label class="sk-raster-feld" title="Seekampf-Regel (RW 5.1): jeder zweite diagonale Schritt zählt 1,5 Felder (300 m statt 200 m)">Diagonale
            <select id="kt-raster-diagonale" class="sk-input"><option value="gleich" ${r.diagonale !== 'alternierend' ? 'selected' : ''}>immer 1 Feld</option><option value="alternierend" ${r.diagonale === 'alternierend' ? 'selected' : ''}>jede 2. = 1,5</option></select></label>
        <button class="tool-btn" id="kt-raster-seekarte" title="Seekampf-Maßstab: 1 Feld = 200 m, jeder zweite diagonale Schritt zählt 1,5 Felder (RW 5.1)"><i class="fa-solid fa-water"></i> Seekarte-Vorgabe</button>
        <label class="hr-check" style="margin:0"><input type="checkbox" id="kt-raster-sichtbar" ${r.rasterSichtbar ? 'checked' : ''}> <span>Raster sichtbar</span></label>
        <label class="hr-check" style="margin:0"><input type="checkbox" id="kt-raster-einrasten" ${r.einrasten ? 'checked' : ''}> <span>Einrasten</span></label>
        <label class="hr-check" style="margin:0" title="Schaltet die Ringe um ALLE Tokens dieser Karte ab (die Einstellungen je Token bleiben erhalten)"><input type="checkbox" id="kt-raster-ringe" ${r.ringeAnzeigen !== false ? 'checked' : ''}> <span>Token-Ringe</span></label>
        <label class="hr-check" style="margin:0" title="Symbole für Blutung, Feuer, Gift, Schlaf, Stun, Tod und Monsterform über den Tokens (aus dem Kampf-Tracker)"><input type="checkbox" id="kt-raster-status" ${r.statusAnzeigen !== false ? 'checked' : ''}> <span>Status-Symbole</span></label>
        <label class="hr-check" style="margin:0" title="LP-Balken unter den Tokens (Gegner-LP sehen die Spieler nur, wenn du sie im Kampf-Tracker freigibst)"><input type="checkbox" id="kt-raster-lp" ${r.lpAnzeigen !== false ? 'checked' : ''}> <span>LP-Balken</span></label>`;
    const anwenden = () => {
        if (!karteMap) return;
        karteMap.setRaster({
            rasterGroesse: parseFloat(document.getElementById('kt-raster-groesse').value) || 50,
            rasterVersatzX: parseFloat(document.getElementById('kt-raster-versatzx').value) || 0,
            rasterVersatzY: parseFloat(document.getElementById('kt-raster-versatzy').value) || 0,
            rasterSichtbar: document.getElementById('kt-raster-sichtbar').checked,
            einrasten: document.getElementById('kt-raster-einrasten').checked,
            ringeAnzeigen: document.getElementById('kt-raster-ringe').checked,
            statusAnzeigen: document.getElementById('kt-raster-status').checked,
            lpAnzeigen: document.getElementById('kt-raster-lp').checked,
            einheit: Math.max(0.1, parseFloat(document.getElementById('kt-raster-einheit').value) || 1),
            einheitName: (document.getElementById('kt-raster-einheitname').value || '').trim().slice(0, 6) || 'm',
            diagonale: document.getElementById('kt-raster-diagonale').value === 'alternierend' ? 'alternierend' : 'gleich'
        });
    };
    ['kt-raster-groesse', 'kt-raster-versatzx', 'kt-raster-versatzy', 'kt-raster-sichtbar', 'kt-raster-einrasten', 'kt-raster-ringe', 'kt-raster-status', 'kt-raster-lp', 'kt-raster-einheit', 'kt-raster-einheitname', 'kt-raster-diagonale'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', anwenden);
    });
    const farbe = document.getElementById('kt-raster-farbe');
    if (farbe) farbe.addEventListener('input', () => karteMap && karteMap.setRaster({ rasterFarbe: farbe.value }));
    const seekarte = document.getElementById('kt-raster-seekarte');
    if (seekarte) seekarte.addEventListener('click', () => {
        if (!karteMap) return;
        karteMap.setRaster({ einheit: 200, einheitName: 'm', diagonale: 'alternierend' });
        renderKtRasterWerkzeuge();
    });
}

function renderKarteGm() {
    const box = document.getElementById('gm-karte');
    if (!box) return;
    if (typeof eldaraAktiv !== 'function' || !eldaraAktiv()) { box.style.display = 'none'; return; }
    box.style.display = '';

    if (!document.getElementById('kt-canvas')) {
        box.innerHTML = `
            <details class="x-details sk-details" ${karteOffenGm ? 'open' : ''}>
                <summary class="tm-head panel-kopf">
                    <div class="tm-title"><i class="fa-solid fa-chevron-right x-chevron"></i> <i class="fa-solid fa-map"></i> Karte
                        <i class="fa-solid fa-circle-question help-icon" onclick="event.preventDefault(); event.stopPropagation(); showHelp('karte')" title="Hilfe zur Karte"></i>
                    </div>
                </summary>
                <div class="sk-kt-gruppen">
                    <div class="sk-kt-gruppe">
                        <div class="sk-kt-gruppe-titel"><i class="fa-solid fa-layer-group"></i> Karten</div>
                        <div class="sk-kt-gruppe-reihe">
                            <select id="kt-auswahl" class="sk-input"></select>
                            <select id="kt-kategorie" class="sk-input">${Object.entries(KARTEN_KATEGORIEN).map(([k, v]) => `<option value="${k}">${v.label}</option>`).join('')}</select>
                            <button class="tool-btn" onclick="karteNeuDialog()"><i class="fa-solid fa-plus"></i> Neue Karte</button>
                            <button class="tool-btn" onclick="karteUmbenennenDialog()"><i class="fa-solid fa-pen"></i> Umbenennen</button>
                            <button class="x-mini x-mini-danger" onclick="karteLoeschenBestaetigt()" title="Karte löschen"><i class="fa-solid fa-trash"></i></button>
                            <span class="sk-kt-trenner"></span>
                            <label class="tool-btn" style="margin:0"><i class="fa-solid fa-image"></i> Bild laden<input type="file" accept="image/*" style="display:none" onchange="karteBildHochladen(event)"></label>
                            <button class="tool-btn" onclick="karteGaleriePicker()" title="Vorgefertigten Kartenhintergrund wählen"><i class="fa-solid fa-images"></i> Aus Galerie wählen</button>
                            <button class="tool-btn" onclick="karteBildEntfernen()"><i class="fa-solid fa-image-slash"></i> Bild entfernen</button>
                            <button class="tool-btn" onclick="karteMap && karteMap.einpassen()"><i class="fa-solid fa-expand"></i> Einpassen</button>
                            <button class="tool-btn" onclick="karteVollbildOeffnen('gm')" title="Karte großformatig anzeigen"><i class="fa-solid fa-up-right-and-down-left-from-center"></i> Vollbild</button>
                        </div>
                    </div>
                    <div class="sk-kt-gruppe">
                        <div class="sk-kt-gruppe-titel"><i class="fa-solid fa-pen-ruler"></i> Werkzeuge</div>
                        <div class="sk-kt-gruppe-reihe">
                            <button class="tool-btn" data-ktwerkzeug="zeigen"><i class="fa-solid fa-arrow-pointer"></i> Zeigen</button>
                            <button class="tool-btn" data-ktwerkzeug="auswahl" title="Rahmen aufziehen oder Figuren anklicken; ausgewählte Figuren lassen sich gemeinsam verschieben (auch: Strg+Klick / Strg+Ziehen im Werkzeug Zeigen)"><i class="fa-solid fa-object-group"></i> Auswahl</button>
                            <button class="tool-btn" data-ktwerkzeug="messen"><i class="fa-solid fa-ruler"></i> Messen</button>
                            ${karteMessformSelectHtml()}
                            <button class="tool-btn" data-ktwerkzeug="malen"><i class="fa-solid fa-pen"></i> Zeichnen</button>
                            <button class="tool-btn" data-ktwerkzeug="radieren"><i class="fa-solid fa-eraser"></i> Radieren</button>
                            <button class="tool-btn" data-ktwerkzeug="pin" title="Klick auf die Karte setzt einen Pin (Ort/Hinweis, optional mit Handout)"><i class="fa-solid fa-location-pin"></i> Pin</button>
                            <span class="sk-kt-trenner"></span>
                            <select id="kt-mal-art" class="sk-input sk-mal-art" title="Form">
                                <option value="freihand">Freihand</option>
                                <option value="linie">Linie</option>
                                <option value="kreis">Kreis</option>
                                <option value="rechteck">Rechteck</option>
                            </select>
                            <input type="color" id="kt-mal-farbe" class="sk-mal-farbe" value="#a3342b" title="Zeichenfarbe">
                            <label class="sk-mal-deckkraft-label" title="Deckkraft der Markierung (Füllung und Umriss)">
                                <i class="fa-solid fa-droplet"></i>
                                <input type="range" id="kt-mal-deckkraft" min="0.15" max="1" step="0.05" value="0.55">
                                <span id="kt-mal-deckkraft-wert">55%</span>
                            </label>
                            <button class="tool-btn" onclick="karteMap && karteMap.rueckgaengig()" title="Rückgängig"><i class="fa-solid fa-rotate-left"></i></button>
                        </div>
                    </div>
                    <div class="sk-kt-gruppe">
                        <div class="sk-kt-gruppe-titel"><i class="fa-solid fa-border-all"></i> Raster</div>
                        <div id="kt-raster-werkzeuge" class="sk-kt-gruppe-reihe"></div>
                    </div>
                    <div class="sk-kt-gruppe">
                        <div class="sk-kt-gruppe-titel"><i class="fa-solid fa-cloud"></i> Nebel des Krieges</div>
                        <div class="sk-kt-gruppe-reihe">
                            <label class="hr-check" style="margin:0"><input type="checkbox" id="kt-nebel-aktiv"> <span>Aktiv</span></label>
                            <button class="tool-btn" data-ktwerkzeug="nebel-auf"><i class="fa-solid fa-cloud"></i> Nebel aufdecken</button>
                            <button class="tool-btn" data-ktwerkzeug="nebel-zu"><i class="fa-solid fa-cloud-sun"></i> Nebel abdecken</button>
                            <button class="tool-btn" onclick="karteNebelFreigeben()" title="Aufgedeckte Bereiche für Spieler freigeben"><i class="fa-solid fa-eye"></i> Für Spieler freigeben</button>
                            <button class="tool-btn" onclick="karteNebelEntwurfVerwerfen()" title="Noch nicht freigegebenen Entwurf verwerfen"><i class="fa-solid fa-eye-slash"></i> Entwurf verwerfen</button>
                            <span class="sk-kt-trenner"></span>
                            <label class="hr-check" style="margin:0" title="Blendet Markierungen aus, sobald der Nebel über ihnen aufgedeckt ist (nur bei dir, nicht bei den Spielern)"><input type="checkbox" id="kt-markierung-ausblenden"> <span>Markierungen in aufgedecktem Bereich ausblenden</span></label>
                        </div>
                    </div>
                    <div class="sk-kt-gruppe">
                        <div class="sk-kt-gruppe-titel"><i class="fa-solid fa-users"></i> Spieler</div>
                        <div class="sk-kt-gruppe-reihe">
                            <label class="sk-raster-feld" title="Auto: Die Spieler ziehen ihre Figur frei, solange kein Kampf-Modus läuft; im Kampf-Modus schlagen sie Züge nur vor und du bestätigst. Schiffe des Seekampfs brauchen im Auto-Modus immer deine Bestätigung.">Spieler-Bewegung
                                <select id="kt-zuege-modus" class="sk-input">
                                    <option value="auto">Auto (frei, im Kampf-Modus mit Bestätigung)</option>
                                    <option value="frei">Immer frei</option>
                                    <option value="bestaetigung">Immer mit Bestätigung</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="kt-canvas-heim"><canvas id="kt-canvas" class="sk-canvas"></canvas></div>
                <p class="ir-hint">Spieler-Figuren entstehen automatisch. NSCs kommen über "Auf Karte platzieren" in der NSC-Liste dazu. Nebel: Bereich aufdecken (nur du siehst den Entwurf), dann "Für Spieler freigeben".</p>
                <div id="kt-dynamic"></div>
            </details>`;
        const canvas = document.getElementById('kt-canvas');
        karteEinhaengen(canvas);
        renderKtRasterWerkzeuge();
        box.querySelectorAll('[data-ktwerkzeug]').forEach(btn => btn.addEventListener('click', () => {
            if (karteMap) karteMap.setWerkzeug(btn.dataset.ktwerkzeug);
            box.querySelectorAll('[data-ktwerkzeug]').forEach(b => b.classList.toggle('tool-btn-aktiv', b === btn));
        }));
        const zeigenBtn = box.querySelector('[data-ktwerkzeug="zeigen"]');
        if (zeigenBtn) zeigenBtn.classList.add('tool-btn-aktiv');
        const malArtSel = document.getElementById('kt-mal-art');
        if (malArtSel) malArtSel.addEventListener('change', () => karteMap && karteMap.setMalArt(malArtSel.value));
        const malFarbeInput = document.getElementById('kt-mal-farbe');
        if (malFarbeInput) malFarbeInput.addEventListener('input', () => karteMap && karteMap.setMalFarbe(malFarbeInput.value));
        const malDeckkraftInput = document.getElementById('kt-mal-deckkraft');
        const malDeckkraftWert = document.getElementById('kt-mal-deckkraft-wert');
        if (malDeckkraftInput) malDeckkraftInput.addEventListener('input', () => {
            const wert = parseFloat(malDeckkraftInput.value) || 0.55;
            if (karteMap) karteMap.setMalDeckkraft(wert);
            if (malDeckkraftWert) malDeckkraftWert.textContent = Math.round(wert * 100) + '%';
        });
        const markierungAusblendenCb = document.getElementById('kt-markierung-ausblenden');
        if (markierungAusblendenCb) markierungAusblendenCb.addEventListener('change', () => karteMap && karteMap.setMarkierungenAusblenden(markierungAusblendenCb.checked));
        const nebelAktivCb = document.getElementById('kt-nebel-aktiv');
        if (nebelAktivCb) nebelAktivCb.addEventListener('change', () => karteNebelUmschalten(nebelAktivCb.checked));
        const zuegeModusSel = document.getElementById('kt-zuege-modus');
        if (zuegeModusSel) zuegeModusSel.addEventListener('change', () => karteZugModusSetzen(zuegeModusSel.value));
        const auswahl = document.getElementById('kt-auswahl');
        if (auswahl) auswahl.addEventListener('change', () => karteWechseln(auswahl.value));
        const kategorieSel = document.getElementById('kt-kategorie');
        if (kategorieSel) kategorieSel.addEventListener('change', () => karteKategorieWaehlen(kategorieSel.value));
        const details = box.querySelector('details');
        if (details) details.addEventListener('toggle', () => {
            karteOffenGm = details.open;
            sicherSpeichern(KARTEN_OFFEN_KEY, details.open ? '1' : '0');
            if (details.open && karteMap) karteMap.zeichnen();
        });
    } else {
        karteSpielerFigurenAbgleichen();
    if (typeof skFigurenAbgleichen === 'function') skFigurenAbgleichen();
    }

    const auswahl = document.getElementById('kt-auswahl');
    if (auswahl) {
        auswahl.innerHTML = karten.map(k => `<option value="${escapeHtml(k.id)}" ${k.id === karteAktivId ? 'selected' : ''}>${escapeHtml(k.name)}</option>`).join('');
    }
    const kategorieSel = document.getElementById('kt-kategorie');
    const aktuelleKarte = karten.find(k => k.id === karteAktivId);
    if (kategorieSel && aktuelleKarte) kategorieSel.value = aktuelleKarte.kategorie;
    const nebelAktivCb = document.getElementById('kt-nebel-aktiv');
    if (nebelAktivCb && karteMap) nebelAktivCb.checked = karteMap.istNebelAktiv();
    const zuegeModusSel = document.getElementById('kt-zuege-modus');
    if (zuegeModusSel) zuegeModusSel.value = karteZuegeModus;

    const dyn = document.getElementById('kt-dynamic');
    if (!dyn || !karteMap) return;
    const vorschlaege = karteMap.offeneZuege();
    dyn.innerHTML = `
        ${vorschlaege.length ? `<div class="sk-vorschlaege">
            <div class="sk-vorschlaege-titel"><i class="fa-solid fa-route"></i> Offene Zugvorschläge</div>
            ${vorschlaege.map(v => {
                // Gehört der Vorschlag zu einem Seekampf-Schiff, über die
                // spezialisierte Funktion bestätigen (loggt "Zug von X
                // bestätigt." im Seekampf-Log) statt der generischen.
                const istSchiff = typeof skEinheit === 'function' && skEinheit(v.id);
                const bestaetigenFn = istSchiff && typeof skZugBestaetigen === 'function' ? 'skZugBestaetigen' : 'karteZugBestaetigen';
                const verwerfenFn = istSchiff && typeof skZugVerwerfen === 'function' ? 'skZugVerwerfen' : 'karteZugVerwerfen';
                return `<div class="sk-vorschlag-zeile">
                <span>${escapeHtml(v.name)} → ${v.felder} Feld${v.felder === 1 ? '' : 'er'}</span>
                <button class="sk-mini-btn" onclick="${bestaetigenFn}('${escapeHtml(v.id)}')"><i class="fa-solid fa-check"></i> Bestätigen</button>
                <button class="sk-mini-btn" onclick="${verwerfenFn}('${escapeHtml(v.id)}')"><i class="fa-solid fa-xmark"></i> Verwerfen</button>
            </div>`;
            }).join('')}
        </div>` : ''}
        <div class="sk-marker-zeile">
            <input type="text" id="kt-marker-name" class="sk-input" placeholder="Markierung benennen …" onkeydown="if(event.key==='Enter') karteMarkierungHinzufuegen()">
            <button class="sk-mini-btn" onclick="karteMarkierungHinzufuegen()"><i class="fa-solid fa-location-dot"></i> Markierung setzen</button>
        </div>
        <div class="kt-auswahl-leiste" id="kt-auswahl-leiste">${karteAuswahlLeisteInnenHtml()}</div>
        ${kartePinListeHtml()}
        ${karteFigurenListeHtml()}`;
}

// --- Figurenliste (Spieler, NSC, freie Markierungen) ---------------------------------------
// Wie die Pin-Liste: ein-/ausklappbar, sortierbar, bei vielen Figuren filterbar; nur die Darstellung
// der Liste - Reihenfolge und Zeichenordnung auf der Karte bleiben unberührt. Wird im Browser gemerkt.
const KARTE_FIGUREN_UI_KEY = 'htbah_gm_figuren_ui';
const KARTE_FIGUREN_SORTIERUNGEN = {
    karte: 'Reihenfolge auf der Karte',
    name: 'Name A–Z',
    namez: 'Name Z–A',
    art: 'Spieler, NSC, Sonstige',
    verdeckt: 'Verdeckte zuerst',
    auswahl: 'Ausgewählte zuerst'
};
let karteFigurenUi = (() => {
    try {
        const roh = JSON.parse(localStorage.getItem(KARTE_FIGUREN_UI_KEY) || '{}');
        return { offen: roh.offen !== false, sortierung: KARTE_FIGUREN_SORTIERUNGEN[roh.sortierung] ? roh.sortierung : 'karte' };
    } catch (e) { return { offen: true, sortierung: 'karte' }; }
})();
function karteFigurenUiSichern() {
    try { localStorage.setItem(KARTE_FIGUREN_UI_KEY, JSON.stringify(karteFigurenUi)); } catch (e) { /* Speicher voll/gesperrt */ }
}
function karteFigurenOffenSetzen(offen) { karteFigurenUi.offen = !!offen; karteFigurenUiSichern(); }
function karteFigurenSortierungSetzen(wert) {
    if (!KARTE_FIGUREN_SORTIERUNGEN[wert]) return;
    karteFigurenUi.sortierung = wert;
    karteFigurenUiSichern();
    renderKarteGm();
}
function karteFigurArt(f) {
    if (String(f.id).startsWith('spieler:')) return 0;
    if (String(f.id).startsWith('nsc:')) return 1;
    return 2;
}
function karteFigurenSortiert(figuren) {
    const liste = figuren.slice();
    const name = (f) => String(f.name || '').trim();
    const nach = (a, b) => name(a).localeCompare(name(b), 'de', { sensitivity: 'base' });
    const gewaehlt = karteMap ? karteMap.getAuswahl() : [];
    switch (karteFigurenUi.sortierung) {
        case 'name': return liste.sort(nach);
        case 'namez': return liste.sort((a, b) => nach(b, a));
        case 'art': return liste.sort((a, b) => karteFigurArt(a) - karteFigurArt(b) || nach(a, b));
        case 'verdeckt': return liste.sort((a, b) => (b.verdeckt ? 1 : 0) - (a.verdeckt ? 1 : 0) || nach(a, b));
        case 'auswahl': return liste.sort((a, b) => (gewaehlt.includes(b.id) ? 1 : 0) - (gewaehlt.includes(a.id) ? 1 : 0) || nach(a, b));
        default: return liste;
    }
}
// Filtert die Zeilen ohne Neuaufbau (das Suchfeld behält so beim Tippen den Fokus)
function karteFigurenFilter(text) {
    const q = String(text || '').trim().toLowerCase();
    let sichtbar = 0;
    document.querySelectorAll('.kt-figur[data-figur-id]').forEach(z => {
        const f = karteMap.figuren.find(x => x.id === z.dataset.figurId);
        const treffer = !q || !f || String(f.name || '').toLowerCase().includes(q);
        z.style.display = treffer ? '' : 'none';
        if (treffer) sichtbar++;
    });
    const leer = document.getElementById('kt-figuren-filter-leer');
    if (leer) leer.style.display = q && !sichtbar ? '' : 'none';
}

function karteFigurenListeHtml() {
    const figuren = karteMap.figuren;
    const spieler = figuren.filter(f => karteFigurArt(f) === 0).length;
    const nsc = figuren.filter(f => karteFigurArt(f) === 1).length;
    const verdeckt = figuren.filter(f => f.verdeckt).length;
    return `<details class="kt-pins kt-figuren x-details" ${karteFigurenUi.offen ? 'open' : ''} ontoggle="karteFigurenOffenSetzen(this.open)">
        <summary class="kt-pins-kopf"><i class="fa-solid fa-chevron-right x-chevron"></i> <i class="fa-solid fa-users"></i> Spieler &amp; NSC
            <span class="x-count" title="Alle Figuren auf der Karte">${figuren.length}</span>
            ${spieler ? `<span class="x-count" title="Spieler-Figuren"><i class="fa-solid fa-user"></i> ${spieler}</span>` : ''}
            ${nsc ? `<span class="x-count" title="NSC-Figuren"><i class="fa-solid fa-address-book"></i> ${nsc}</span>` : ''}
            ${verdeckt ? `<span class="x-count" title="Verdeckte Figuren - nur du siehst sie"><i class="fa-solid fa-eye-slash"></i> ${verdeckt}</span>` : ''}</summary>
        ${figuren.length > 1 ? `<div class="kt-pins-werkzeuge">
            <select class="sk-input" onchange="karteFigurenSortierungSetzen(this.value)" title="Sortierung der Liste (die Figuren auf der Karte bleiben unverändert)">
                ${Object.entries(KARTE_FIGUREN_SORTIERUNGEN).map(([k, l]) => `<option value="${k}" ${karteFigurenUi.sortierung === k ? 'selected' : ''}>${l}</option>`).join('')}
            </select>
            ${figuren.length > 5 ? `<input type="search" class="sk-input" placeholder="Figuren suchen …" oninput="karteFigurenFilter(this.value)">` : ''}
        </div>` : ''}
        <div class="sk-einheiten-liste">
            ${figuren.length ? karteFigurenSortiert(figuren).map(f => karteFigurZeileHtml(f)).join('') : '<p class="x-leer">Noch keine Figuren auf der Karte.</p>'}
        </div>
        <p class="x-leer" id="kt-figuren-filter-leer" style="display:none">Keine Figur passt zur Suche.</p>
    </details>`;
}

// --- Pins (Orte & Hinweise auf der Karte) ----------------------------------------------
// Ein Pin ist ein beschrifteter Punkt mit Symbol, Notiz und optional einem Handout aus der
// Handout-Bibliothek (handouts.js). Gesetzt mit dem Pin-Werkzeug, verschiebbar per Ziehen. Die
// Spieler sehen nur nicht-verdeckte Pins (und keine im Nebel) und können sie anklicken, um
// Beschriftung und Notiz zu lesen. Das Handout selbst bekommen sie nur, wenn der SL es zeigt
// (Knopf in der Pinzeile oder im Popover) - danach öffnet der Pin es auch bei ihnen wieder.
const KARTE_PIN_ICONS = ['📍', '⚓', '🏝️', '🏴‍☠️', '💰', '🗝️', '📜', '⚔️', '❓', '❗', '🏠', '🔥', '☠️', '🌀', '🧭'];

// Darstellung der Pin-Liste (nur Anzeige - die Reihenfolge der Pins auf der Karte bleibt unberührt):
// ein-/ausklappbar, sortierbar, bei langen Listen filterbar. Wird im Browser des SL gemerkt.
const KARTE_PIN_UI_KEY = 'htbah_gm_pins_ui';
const KARTE_PIN_SORTIERUNGEN = {
    angelegt: 'Zuletzt angelegt zuerst',
    aelteste: 'Älteste zuerst',
    name: 'Name A–Z',
    namez: 'Name Z–A',
    symbol: 'Nach Symbol',
    verdeckt: 'Verdeckte zuerst',
    handout: 'Mit Handout zuerst'
};
let kartePinUi = (() => {
    try {
        const roh = JSON.parse(localStorage.getItem(KARTE_PIN_UI_KEY) || '{}');
        return { offen: roh.offen !== false, sortierung: KARTE_PIN_SORTIERUNGEN[roh.sortierung] ? roh.sortierung : 'angelegt' };
    } catch (e) { return { offen: true, sortierung: 'angelegt' }; }
})();
function kartePinUiSichern() {
    try { localStorage.setItem(KARTE_PIN_UI_KEY, JSON.stringify(kartePinUi)); } catch (e) { /* Speicher voll/gesperrt */ }
}
function kartePinsOffenSetzen(offen) { kartePinUi.offen = !!offen; kartePinUiSichern(); }
function kartePinSortierungSetzen(wert) {
    if (!KARTE_PIN_SORTIERUNGEN[wert]) return;
    kartePinUi.sortierung = wert;
    kartePinUiSichern();
    renderKarteGm();
}
// Filtert die Zeilen in der Liste, ohne neu zu rendern (sonst verliert das Suchfeld beim Tippen den Fokus)
function kartePinFilter(text) {
    const q = String(text || '').trim().toLowerCase();
    let sichtbar = 0;
    document.querySelectorAll('.kt-pin-zeile').forEach(z => {
        const p = (karteMap.pins || []).find(x => x.id === z.dataset.pin);
        const treffer = !q || !p || `${p.label || ''} ${p.text || ''}`.toLowerCase().includes(q);
        z.style.display = treffer ? '' : 'none';
        if (treffer) sichtbar++;
    });
    const leer = document.getElementById('kt-pin-filter-leer');
    if (leer) leer.style.display = q && !sichtbar ? '' : 'none';
}
function kartePinsSortiert(pins) {
    const liste = pins.slice();
    const name = (p) => (p.label || '').trim();
    const nach = (a, b) => (name(a) === '' ? 1 : 0) - (name(b) === '' ? 1 : 0) || name(a).localeCompare(name(b), 'de', { sensitivity: 'base' });
    switch (kartePinUi.sortierung) {
        case 'angelegt': return liste.reverse();
        case 'name': return liste.sort(nach);
        case 'namez': return liste.sort((a, b) => (name(a) === '' ? 1 : 0) - (name(b) === '' ? 1 : 0) || name(b).localeCompare(name(a), 'de', { sensitivity: 'base' }));
        case 'symbol': return liste.sort((a, b) => String(a.icon || '').localeCompare(String(b.icon || '')) || nach(a, b));
        case 'verdeckt': return liste.sort((a, b) => (b.verdeckt ? 1 : 0) - (a.verdeckt ? 1 : 0) || nach(a, b));
        case 'handout': return liste.sort((a, b) => (b.handoutId ? 1 : 0) - (a.handoutId ? 1 : 0) || nach(a, b));
        default: return liste;   // 'aelteste' = Reihenfolge des Anlegens
    }
}

function kartePinListeHtml() {
    const pins = karteMap.pins || [];
    const handoutListe = typeof handouts !== 'undefined' ? handouts : [];
    const zeilen = kartePinsSortiert(pins).map(p => `
        <div class="kt-pin-zeile" data-pin="${escapeHtml(p.id)}">
            <select class="sk-input kt-pin-icon" onchange="kartePinSetzen('${escapeHtml(p.id)}', { icon: this.value })" title="Symbol">
                ${KARTE_PIN_ICONS.concat(KARTE_PIN_ICONS.includes(p.icon) ? [] : [p.icon]).map(i => `<option value="${escapeHtml(i)}" ${i === p.icon ? 'selected' : ''}>${escapeHtml(i)}</option>`).join('')}
            </select>
            <input type="text" class="sk-input kt-pin-label" value="${escapeHtml(p.label || '')}" maxlength="60" placeholder="Beschriftung …" onchange="kartePinSetzen('${escapeHtml(p.id)}', { label: this.value })">
            <input type="text" class="sk-input kt-pin-text" value="${escapeHtml(p.text || '')}" maxlength="600" placeholder="Notiz für die Spieler (optional) …" onchange="kartePinSetzen('${escapeHtml(p.id)}', { text: this.value })">
            <select class="sk-input kt-pin-handout" onchange="kartePinSetzen('${escapeHtml(p.id)}', { handoutId: this.value })" title="Handout, das zu diesem Ort gehört">
                <option value="">Kein Handout</option>
                ${handoutListe.map(h => `<option value="${escapeHtml(h.id)}" ${h.id === p.handoutId ? 'selected' : ''}>${escapeHtml(h.titel)}</option>`).join('')}
            </select>
            <label class="hr-check" style="margin:0" title="Verdeckt: nur du siehst den Pin, bis du ihn aufdeckst"><input type="checkbox" ${p.verdeckt ? 'checked' : ''} onchange="kartePinSetzen('${escapeHtml(p.id)}', { verdeckt: this.checked })"> <span>verdeckt</span></label>
            ${p.handoutId ? `<button class="sk-mini-btn" onclick="kartePinHandoutZeigen('${escapeHtml(p.id)}')" title="Das Handout allen verbundenen Spielern zeigen"><i class="fa-solid fa-scroll"></i> Handout zeigen</button>` : ''}
            <button class="btn-delete-icon" onclick="kartePinLoeschen('${escapeHtml(p.id)}')" title="Pin löschen"><i class="fa-solid fa-trash"></i></button>
        </div>`).join('');
    const verdeckte = pins.filter(p => p.verdeckt).length;
    return `<details class="kt-pins x-details" ${kartePinUi.offen ? 'open' : ''} ontoggle="kartePinsOffenSetzen(this.open)">
        <summary class="kt-pins-kopf"><i class="fa-solid fa-chevron-right x-chevron"></i> <i class="fa-solid fa-location-pin"></i> Pins (Orte &amp; Hinweise)
            <span class="x-count">${pins.length}</span>${verdeckte ? ` <span class="x-count" title="Verdeckte Pins - nur du siehst sie"><i class="fa-solid fa-eye-slash"></i> ${verdeckte}</span>` : ''}</summary>
        ${pins.length > 1 ? `<div class="kt-pins-werkzeuge">
            <select class="sk-input" onchange="kartePinSortierungSetzen(this.value)" title="Sortierung der Liste (die Pins auf der Karte bleiben unverändert)">
                ${Object.entries(KARTE_PIN_SORTIERUNGEN).map(([k, l]) => `<option value="${k}" ${kartePinUi.sortierung === k ? 'selected' : ''}>${l}</option>`).join('')}
            </select>
            ${pins.length > 4 ? `<input type="search" class="sk-input" placeholder="Pins suchen …" oninput="kartePinFilter(this.value)" title="Sucht in Beschriftung und Notiz">` : ''}
        </div>` : ''}
        ${zeilen || '<p class="x-leer">Noch keine Pins - Werkzeug <b>Pin</b> wählen und auf die Karte klicken.</p>'}
        <p class="x-leer" id="kt-pin-filter-leer" style="display:none">Kein Pin passt zur Suche.</p>
    </details>`;
}

function kartePinSetzen(id, patch) {
    if (!karteMap) return;
    karteMap.updatePin(id, patch);
    if ('handoutId' in patch || 'icon' in patch) renderKarteGm();
}

function kartePinLoeschen(id) {
    if (!karteMap) return;
    karteMap.removePin(id);
    renderKarteGm();
}

function kartePinHandoutZeigen(id) {
    const pin = karteMap && (karteMap.pins || []).find(p => p.id === id);
    if (!pin || !pin.handoutId || typeof handoutZeigen !== 'function') return;
    handoutZeigen(pin.handoutId);   // Rückmeldung steht im Live-Feed (addGmLogEntry)
}

let kartePinPopoverEl = null;
function kartePinPopoverSchliessen() {
    if (kartePinPopoverEl) { kartePinPopoverEl.remove(); kartePinPopoverEl = null; }
    document.removeEventListener('pointerdown', kartePinPopoverAussen, true);
    document.removeEventListener('keydown', kartePinPopoverEsc, true);
}
function kartePinPopoverAussen(e) { if (kartePinPopoverEl && !kartePinPopoverEl.contains(e.target)) kartePinPopoverSchliessen(); }
function kartePinPopoverEsc(e) { if (e.key === 'Escape') kartePinPopoverSchliessen(); }

// Kleine Infokarte zu einem Pin. rolle 'gm': mit Handout-Knopf; 'spieler': Handout nur, wenn sie
// es schon erhalten haben. x/y = Bildschirmposition des Klicks (null: Fensterrand rechts oben).
function kartePinPopover(pin, x, y, rolle) {
    kartePinPopoverSchliessen();
    const hatHandout = !!pin.handoutId;
    const handoutName = hatHandout && typeof handouts !== 'undefined' ? ((handouts.find(h => h.id === pin.handoutId) || {}).titel || 'Handout') : 'Handout';
    const erhalten = rolle === 'spieler' && hatHandout && typeof handoutVerlauf !== 'undefined' && handoutVerlauf.some(h => h.id === pin.handoutId);
    const el = document.createElement('div');
    el.className = 'kt-pin-popover';
    el.innerHTML = `
        <div class="kt-pin-popover-kopf"><span class="kt-pin-popover-icon">${escapeHtml(pin.icon || '📍')}</span><strong>${escapeHtml(pin.label || 'Ort')}</strong>${pin.verdeckt ? ' <span class="x-count" title="Nur du siehst diesen Pin"><i class="fa-solid fa-eye-slash"></i></span>' : ''}</div>
        ${pin.text ? `<div class="kt-pin-popover-text">${escapeHtml(pin.text)}</div>` : (rolle === 'spieler' ? '<div class="kt-pin-popover-text x-leer">Keine weitere Notiz.</div>' : '')}
        ${rolle === 'gm' && hatHandout ? `<button class="tool-btn" id="kt-pin-popover-handout"><i class="fa-solid fa-scroll"></i> „${escapeHtml(handoutName)}“ allen zeigen</button>` : ''}
        ${erhalten ? `<button class="tool-btn" id="kt-pin-popover-lesen"><i class="fa-solid fa-scroll"></i> Handout lesen</button>` : ''}`;
    document.body.appendChild(el);
    kartePinPopoverEl = el;
    const breite = el.offsetWidth, hoehe = el.offsetHeight;
    const links = x == null ? window.innerWidth - breite - 24 : Math.min(Math.max(8, x + 12), window.innerWidth - breite - 8);
    const oben = y == null ? 90 : Math.min(Math.max(8, y - hoehe - 12 < 8 ? y + 16 : y - hoehe - 12), window.innerHeight - hoehe - 8);
    el.style.left = links + 'px';
    el.style.top = oben + 'px';
    const handoutBtn = el.querySelector('#kt-pin-popover-handout');
    if (handoutBtn) handoutBtn.addEventListener('click', () => { kartePinHandoutZeigen(pin.id); kartePinPopoverSchliessen(); });
    const lesenBtn = el.querySelector('#kt-pin-popover-lesen');
    if (lesenBtn) lesenBtn.addEventListener('click', () => { kartePinPopoverSchliessen(); if (typeof handoutVerlaufOeffnen === 'function') handoutVerlaufOeffnen(); });
    setTimeout(() => {
        document.addEventListener('pointerdown', kartePinPopoverAussen, true);
        document.addEventListener('keydown', kartePinPopoverEsc, true);
    }, 0);
}

// --- Vollbild ---------------------------------------------------------------
//
// Es gibt keine eigene Vollbild-Leinwand: die vorhandene Karten-Instanz (GM
// oder Spieler, jede mit eigenem <canvas> und eigener BattleMap-Instanz, siehe
// Datei-Kopfkommentar bei renderKarteSpieler) wandert per appendChild in
// #karte-vollbild-overlay und beim Schließen wieder zurück in ihren
// "Heim"-Container (kt-canvas-heim/kt-spieler-canvas-heim) - das Verschieben
// eines <canvas>-Knotens im DOM lässt Zeichenkontext und Inhalt unangetastet.
// Während das Overlay offen ist, ist die kleine Werkzeugleiste im
// Haupt-Panel unsichtbar (vom Overlay überdeckt) - keine Synchronisierung
// zweier Knopf-Sätze nötig, außer beim Schließen den Werkzeug-Status im
// Haupt-Panel aufzufrischen (siehe karteVollbildSchliessen).
let karteVollbildRolle = null; // 'gm' | 'spieler' | null

function karteVollbildWerkzeugleisteHtml(rolle) {
    const gemeinsam = `
        <button class="tool-btn" data-ktvwerkzeug="zeigen"><i class="fa-solid fa-arrow-pointer"></i> Zeigen</button>
        <button class="tool-btn" data-ktvwerkzeug="messen"><i class="fa-solid fa-ruler"></i> Messen</button>
        ${karteMessformSelectHtml()}`;
    const nurGm = `
        <button class="tool-btn" data-ktvwerkzeug="auswahl" title="Rahmen aufziehen oder Figuren anklicken, dann gemeinsam verschieben"><i class="fa-solid fa-object-group"></i> Auswahl</button>
        <button class="tool-btn" data-ktvwerkzeug="malen"><i class="fa-solid fa-pen"></i> Zeichnen</button>
        <button class="tool-btn" data-ktvwerkzeug="radieren"><i class="fa-solid fa-eraser"></i> Radieren</button>
        <button class="tool-btn" data-ktvwerkzeug="pin" title="Klick auf die Karte setzt einen Pin"><i class="fa-solid fa-location-pin"></i> Pin</button>
        <span class="sk-kt-trenner"></span>
        <button class="tool-btn" data-ktvwerkzeug="nebel-auf"><i class="fa-solid fa-cloud"></i> Nebel aufdecken</button>
        <button class="tool-btn" data-ktvwerkzeug="nebel-zu"><i class="fa-solid fa-cloud-sun"></i> Nebel abdecken</button>`;
    const nurSpieler = `
        <button class="tool-btn" onclick="karteAktualisierenAnfordern(this)" title="Aktuellen Stand vom Spielleiter neu abrufen, falls die Karte hängen geblieben wirkt"><i class="fa-solid fa-rotate"></i> Aktualisieren</button>
        <button class="tool-btn ${typeof appData !== 'undefined' && appData.karteRasterAusblenden ? 'tool-btn-aktiv' : ''}" data-ktraster-toggle onclick="karteRasterAusblendenUmschalten()" title="Raster nur bei dir aus-/einblenden - wirkt sich nicht auf den SL oder andere Spieler aus"><i class="fa-solid fa-table-cells"></i> Raster</button>`;
    const mapVar = rolle === 'gm' ? 'karteMap' : 'karteSpielerMap';
    return gemeinsam + (rolle === 'gm' ? nurGm : nurSpieler) +
        `<span class="sk-kt-trenner"></span>
        <button class="tool-btn" onclick="${mapVar} && ${mapVar}.einpassen()"><i class="fa-solid fa-expand"></i> Einpassen</button>
        <button class="tool-btn karte-vollbild-schliessen" onclick="karteVollbildSchliessen()"><i class="fa-solid fa-xmark"></i> Schließen (Esc)</button>`;
}

function karteVollbildOeffnen(rolle) {
    const overlay = document.getElementById('karte-vollbild-overlay');
    const map = rolle === 'gm' ? karteMap : karteSpielerMap;
    const canvas = document.getElementById(rolle === 'gm' ? 'kt-canvas' : 'kt-spieler-canvas');
    if (!overlay || !map || !canvas) return;
    if (karteVollbildRolle) karteVollbildSchliessen(); // schon offen (z.B. Doppelklick) - erst sauber zurückräumen
    karteVollbildRolle = rolle;

    overlay.innerHTML = `
        <div class="karte-vollbild-werkzeuge">${karteVollbildWerkzeugleisteHtml(rolle)}</div>
        <div class="karte-vollbild-leinwand-host" id="karte-vollbild-leinwand-host"></div>`;
    document.getElementById('karte-vollbild-leinwand-host').appendChild(canvas);
    overlay.style.display = 'flex';

    overlay.querySelectorAll('[data-ktvwerkzeug]').forEach(btn => {
        btn.classList.toggle('tool-btn-aktiv', btn.dataset.ktvwerkzeug === map.getWerkzeug());
        btn.addEventListener('click', () => {
            map.setWerkzeug(btn.dataset.ktvwerkzeug);
            overlay.querySelectorAll('[data-ktvwerkzeug]').forEach(b => b.classList.toggle('tool-btn-aktiv', b === btn));
        });
    });

    document.addEventListener('keydown', karteVollbildEscHandler);
    // Die Leinwand kennt ihre neue (viel größere) Größe erst nach dem Umhängen.
    setTimeout(() => map.zeichnen(), 30);
}

function karteVollbildEscHandler(e) {
    if (e.key === 'Escape') karteVollbildSchliessen();
}

function karteVollbildSchliessen() {
    const overlay = document.getElementById('karte-vollbild-overlay');
    const rolle = karteVollbildRolle;
    if (!overlay || !rolle) return;
    const map = rolle === 'gm' ? karteMap : karteSpielerMap;
    const canvas = document.getElementById(rolle === 'gm' ? 'kt-canvas' : 'kt-spieler-canvas');
    const heim = document.getElementById(rolle === 'gm' ? 'kt-canvas-heim' : 'kt-spieler-canvas-heim');
    document.removeEventListener('keydown', karteVollbildEscHandler);
    overlay.style.display = 'none';
    overlay.innerHTML = '';
    karteVollbildRolle = null;
    if (heim && canvas) heim.appendChild(canvas);
    if (map) setTimeout(() => map.zeichnen(), 30);
    // Werkzeug kann sich im Vollbild geändert haben (Zeichnen/Radieren/Nebel) -
    // Hervorhebung im Haupt-Panel nachziehen, das während des Vollbilds
    // verdeckt und daher nicht live mitgepflegt war.
    if (rolle === 'gm' && map) {
        document.querySelectorAll('#gm-karte [data-ktwerkzeug]').forEach(b => b.classList.toggle('tool-btn-aktiv', b.dataset.ktwerkzeug === map.getWerkzeug()));
    }
}

// --- Spieler --------------------------------------------------------------

let karteSpielerMap = null;
let karteSpielerOffen = window.innerWidth > 768; // auf dem Handy erstmal eingeklappt, mehr Überblick auf der langen Seite
let karteSpielerLetzte = null;  // letzte empfangene Nachricht ({karteId, name, kategorie, zuegeFrei, zustand})

function karteEmpfangen(payload) {
    karteSpielerLetzte = payload;
    // Erst rendern (legt karteSpielerMap beim allerersten Empfang erst an),
    // danach den Kartenzustand anwenden - sonst geht der erste Sync ins Leere
    // (gleiche Reihenfolge wie bei skEmpfangen in seekampf.js).
    renderKarteSpieler();
    if (karteSpielerMap && payload.zustand) {
        karteSpielerMap.setBestaetigung(!payload.zuegeFrei, !!payload.zuegeNurEigene);
        karteSpielerMap.applyState(karteSpielerZustandFuerAnwenden(payload.zustand), payload.zustand.bild);
        const meinPeer = typeof peer !== 'undefined' && peer ? peer.id : null;
        const meineFigur = meinPeer && karteSpielerMap.figuren.find(f => f.besitzer === meinPeer);
        const meinBild = typeof appData !== 'undefined' && typeof safeImageSrc === 'function' ? safeImageSrc(appData.portrait) : null;
        if (meineFigur && meinBild && meinBild !== 'assets/giphy.gif') karteSpielerMap.setFigurBild(meineFigur.id, meinBild);
    }
}

// NSC-Porträt vom SL empfangen (siehe karteNscBildVerteilen in der SL-Hälfte
// oben) - die Figur muss schon existieren (applyState() löscht figurBilder
// selbst NICHT, ein einmal gesetztes Porträt übersteht also jeden normalen
// Positions-Sync danach).
function karteNscBildEmpfangen(payload) {
    if (!karteSpielerMap || !payload || !payload.id) return;
    if (!karteSpielerMap.figuren.find(f => f.id === payload.id)) return;
    karteSpielerMap.setFigurBild(payload.id, payload.bild || null);
    if (payload.bild) karteSpielerMap.setFigurBildPosition(payload.id, payload.bildY);
}

function karteNscBildPositionEmpfangen(payload) {
    if (!karteSpielerMap || !payload || !payload.id) return;
    if (!karteSpielerMap.figuren.find(f => f.id === payload.id)) return;
    karteSpielerMap.setFigurBildPosition(payload.id, payload.bildY);
}

function karteSpielerBeitritt() {
    karteSpielerLetzte = null;
    renderKarteSpieler();
}

function karteSpielerGetrennt() {
    karteSpielerLetzte = null;
    if (karteVollbildRolle === 'spieler') karteVollbildSchliessen();
    renderKarteSpieler();
}

function karteNachrichtVerarbeiten(payload) {
    if (!payload || typeof payload !== 'object') return false;
    if (payload.type === 'karte') { karteEmpfangen(payload); return true; }
    if (payload.type === 'karteNscBild') { karteNscBildEmpfangen(payload); return true; }
    if (payload.type === 'karteNscBildPosition') { karteNscBildPositionEmpfangen(payload); return true; }
    return false;
}

function renderKarteSpieler() {
    const section = document.getElementById('karte-section');
    if (!section) return;
    const verbunden = typeof hostConnection !== 'undefined' && hostConnection && hostConnection.open;
    if (!verbunden || (typeof isGmMode !== 'undefined' && isGmMode) || typeof eldaraAktiv !== 'function' || !eldaraAktiv() || !karteSpielerLetzte) {
        section.style.display = 'none';
        return;
    }
    section.style.display = '';

    if (!document.getElementById('kt-spieler-canvas')) {
        section.innerHTML = `
            <details class="x-details sk-details" ${karteSpielerOffen ? 'open' : ''}>
                <summary class="tm-head panel-kopf">
                    <h2 class="cat-title" style="margin:0"><i class="fa-solid fa-chevron-right x-chevron"></i> <i class="fa-solid fa-map category-icon-fa"></i> Karte
                        <span id="kt-spieler-name-badge"></span>
                        <i class="fa-solid fa-circle-question help-icon" onclick="event.preventDefault(); event.stopPropagation(); showHelp('karte')" title="Hilfe zur Karte"></i></h2>
                </summary>
                <div class="sk-karten-werkzeuge">
                    <button class="tool-btn" data-ktspielerwerkzeug="zeigen"><i class="fa-solid fa-arrow-pointer"></i> Zeigen</button>
                    <button class="tool-btn" data-ktspielerwerkzeug="messen"><i class="fa-solid fa-ruler"></i> Messen</button>
                    ${karteMessformSelectHtml()}
                    <button class="tool-btn" onclick="karteVollbildOeffnen('spieler')" title="Karte großformatig anzeigen"><i class="fa-solid fa-up-right-and-down-left-from-center"></i> Vollbild</button>
                    <button class="tool-btn" onclick="karteAktualisierenAnfordern(this)" title="Aktuellen Stand vom Spielleiter neu abrufen, falls die Karte hängen geblieben wirkt - ohne die Seite neu zu laden"><i class="fa-solid fa-rotate"></i> Aktualisieren</button>
                    <button class="tool-btn ${typeof appData !== 'undefined' && appData.karteRasterAusblenden ? 'tool-btn-aktiv' : ''}" data-ktraster-toggle onclick="karteRasterAusblendenUmschalten()" title="Raster nur bei dir aus-/einblenden - wirkt sich nicht auf den SL oder andere Spieler aus"><i class="fa-solid fa-table-cells"></i> Raster</button>
                </div>
                <div id="kt-spieler-canvas-heim"><canvas id="kt-spieler-canvas" class="sk-canvas"></canvas></div>
                <p class="ir-hint">Dein Zug erscheint beim Spielleiter erst als Vorschlag, den er bestätigt oder verwirft - außer er hat freie Bewegung erlaubt.</p>
            </details>`;
        const canvas = document.getElementById('kt-spieler-canvas');
        karteSpielerMap = BattleMap.create(canvas, {
            einheit: 1, einheitName: 'm',
            onPinKlick: (pin, x, y) => kartePinPopover(pin, x, y, 'spieler'),
            bestaetigungNoetig: true,
            nebelDeckend: true,
            onZugVorschlag: (figur) => {
                if (typeof hostConnection !== 'undefined' && hostConnection && hostConnection.open && karteSpielerLetzte) {
                    try { hostConnection.send({ type: 'karteZugVorschlag', karteId: karteSpielerLetzte.karteId, figurId: figur.id, x: figur.geplantX, y: figur.geplantY }); } catch (e) { /* weg */ }
                }
            },
            // Freie Bewegung (kein Kampf-Modus, siehe karteZuegeEffektiv beim SL): die Figur steht lokal schon am Ziel -
            // dem SL die neue Position melden, sonst bliebe der Zug nur auf dem eigenen Bildschirm (und der nächste
            // Kartenstand des SL würde die Figur zurücksetzen). Dieselbe Nachricht wie ein Zugvorschlag, der SL wendet sie an.
            onLokaleFigur: (figur) => {
                if (typeof hostConnection !== 'undefined' && hostConnection && hostConnection.open && karteSpielerLetzte) {
                    try { hostConnection.send({ type: 'karteZugVorschlag', karteId: karteSpielerLetzte.karteId, figurId: figur.id, x: figur.x, y: figur.y, frei: true }); } catch (e) { /* weg */ }
                }
            }
        });
        const meinPeer = typeof peer !== 'undefined' && peer ? peer.id : null;
        karteSpielerMap.setBesitzer(meinPeer);
        section.querySelectorAll('[data-ktspielerwerkzeug]').forEach(btn => btn.addEventListener('click', () => {
            karteSpielerMap.setWerkzeug(btn.dataset.ktspielerwerkzeug);
            section.querySelectorAll('[data-ktspielerwerkzeug]').forEach(b => b.classList.toggle('tool-btn-aktiv', b === btn));
        }));
        const zeigenBtn = section.querySelector('[data-ktspielerwerkzeug="zeigen"]');
        if (zeigenBtn) zeigenBtn.classList.add('tool-btn-aktiv');
        const details = section.querySelector('details');
        if (details) details.addEventListener('toggle', () => { karteSpielerOffen = details.open; if (details.open && karteSpielerMap) karteSpielerMap.zeichnen(); });
        if (karteSpielerLetzte.zustand) {
            karteSpielerMap.setBestaetigung(!karteSpielerLetzte.zuegeFrei, !!karteSpielerLetzte.zuegeNurEigene);
            karteSpielerMap.applyState(karteSpielerZustandFuerAnwenden(karteSpielerLetzte.zustand), karteSpielerLetzte.zustand.bild);
        }
    }

    const badge = document.getElementById('kt-spieler-name-badge');
    if (badge) {
        const kat = KARTEN_KATEGORIEN[karteSpielerLetzte.kategorie];
        badge.innerHTML = `<span class="x-count" style="font-size:0.7rem"><i class="fa-solid ${kat ? kat.icon : 'fa-map'}"></i> ${escapeHtml(karteSpielerLetzte.name || '')}</span>`;
    }
}
