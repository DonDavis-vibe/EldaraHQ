// How to be a Hero - Eldara-Hausregeln
//
// Dieses Tool spielt nur noch EINE Kampagne: Eldara. Das Regelpaket
// "eldora-arrrrr" ist deshalb fest verdrahtet - keine Auswahl, kein
// Umschalten, kein Verteilen unter den Spielern. Jeder Browser lädt es
// selbst automatisch beim Start.
//
// Die Paketdaten liegen in hausregeln/eldora-arrrrr.js und werden per
// <script>-Tag nachgeladen, damit das auch direkt von file:// funktioniert
// (fetch() wäre dort blockiert). Eine Paketdatei ruft
// hausregelPaketRegistrieren({...}) auf. Das Format ist in DATA_FORMAT.md
// beschrieben.

const ELDARA_PAKET_ID = 'eldora-arrrrr';
const ELDARA_PAKET_DATEI = 'hausregeln/eldora-arrrrr.js';

// id -> Paketobjekt, sobald die Datei geladen ist
const hausregelPaketeGeladen = {};
// id -> [callbacks], während eine Datei noch lädt
const hausregelPaketeLadend = {};

function hausregelnAktiv() {
    return true;
}

// Schaltet Eldara-spezifische Extra-Features frei (Rasterinventar, Schiff) -
// true, sobald der Charakter für das Paket aktiviert wurde (siehe
// hausregelnAktivieren).
function eldaraAktiv() {
    return !!(typeof appData !== 'undefined' && appData.hausregeln && appData.hausregeln.paket === ELDARA_PAKET_ID);
}

// Wird von der Paketdatei aufgerufen.
function hausregelPaketRegistrieren(paket) {
    if (!paket || !paket.id) return;
    hausregelPaketeGeladen[paket.id] = paket;
    const warten = hausregelPaketeLadend[paket.id];
    delete hausregelPaketeLadend[paket.id];
    if (warten) warten.forEach(cb => { try { cb(paket); } catch (e) { console.error(e); } });
}

// Liefert das Paket per Callback - sofort, wenn schon geladen, sonst nach dem
// Nachladen der Datei.
function hausregelPaketLaden(id, cb) {
    if (hausregelPaketeGeladen[id]) { cb(hausregelPaketeGeladen[id]); return; }
    if (hausregelPaketeLadend[id]) { hausregelPaketeLadend[id].push(cb); return; }
    hausregelPaketeLadend[id] = [cb];
    const s = document.createElement('script');
    s.src = ELDARA_PAKET_DATEI;
    s.onerror = () => {
        const warten = hausregelPaketeLadend[id] || [];
        delete hausregelPaketeLadend[id];
        console.error('Regelpaket konnte nicht geladen werden:', ELDARA_PAKET_DATEI);
        warten.forEach(w => w(null));
    };
    document.head.appendChild(s);
}

// Das gerade wirksame Paket - oder null, solange es noch nachlädt.
function aktivesPaket() {
    return hausregelPaketeGeladen[ELDARA_PAKET_ID] || null;
}

// --- Auswirkungen auf die Regeln --------------------------------------------
// Diese Funktionen fragt app.js ab.

// Kosten für einen Talentwert. Regelwerk: 1 Punkt = 1 Punkt. Mit Kostenstaffel
// (z.B. Punkt 1-30 kostet 1, 31-60 kostet 2, ...) wird's progressiv.
function hausregelnTalentKosten(investiert) {
    const p = aktivesPaket();
    const wert = Math.max(0, parseInt(investiert) || 0);
    if (!p || !p.punkte || !Array.isArray(p.punkte.kostenStaffel)) return wert;
    return talentKostenNachStaffel(wert, p.punkte.kostenStaffel);
}

function talentKostenNachStaffel(wert, staffel) {
    let kosten = 0;
    let von = 0;
    const stufen = staffel.slice().sort((a, b) => a.bis - b.bis);
    for (const st of stufen) {
        if (wert <= von) break;
        const bisHier = Math.min(wert, st.bis);
        kosten += (bisHier - von) * (st.kosten || 0);
        von = st.bis;
    }
    // Punkte über der letzten Stufe kosten wie die letzte Stufe
    if (wert > von && stufen.length) kosten += (wert - von) * (stufen[stufen.length - 1].kosten || 0);
    return kosten;
}

// Punktebudget laut Paket, sonst undefined (dann gilt appData.maxPoints)
function hausregelnBudget() {
    const p = aktivesPaket();
    if (p && p.punkte && p.punkte.maxTalentpunkte) return p.punkte.maxTalentpunkte;
    return undefined;
}

// Aktiviert das Eldara-Paket für den aktuellen Charakter: Punktebudget und
// Währungsname aus dem Paket übernehmen, Bogen als Eldara-Charakter markieren
// (appData.hausregeln.paket, das schaltet eldaraAktiv() frei). Trägt bewusst
// KEINE Talente ein - die Talentliste bleibt leer, bis der Spieler sie sich
// selbst einzeln über das Dropdown zusammenstellt (siehe renderSkillAddControl
// in app.js). Läuft automatisch einmal pro Charakter beim Laden (siehe
// hausregelnSicherstellen unten).
function hausregelnAktivieren() {
    const p = aktivesPaket();
    if (!p || typeof appData === 'undefined') return false;
    if (p.punkte && p.punkte.maxTalentpunkte) appData.maxPoints = p.punkte.maxTalentpunkte;
    if (p.waehrung && appData.currency && (!appData.currency.name || appData.currency.name === 'Credits')) appData.currency.name = p.waehrung;
    if (!appData.hausregeln || typeof appData.hausregeln !== 'object') appData.hausregeln = {};
    appData.hausregeln.paket = p.id;

    if (typeof saveData === 'function') saveData();
    if (typeof renderAll === 'function') renderAll();
    if (typeof calculatePoints === 'function') calculatePoints();
    return true;
}

// Feste Talentliste einer Kategorie, wenn sie für den Bogen gelten soll -
// sonst null (dann bleibt die freie Texteingabe wie im reinen Regelwerk).
function hausregelnFesteTalentliste(attr) {
    if (typeof eldaraAktiv !== 'function' || !eldaraAktiv()) return null;
    const p = aktivesPaket();
    const liste = p && p.talente && p.talente[attr];
    return Array.isArray(liste) && liste.length ? liste : null;
}

// --- Würfeltabellen ---------------------------------------------------------

function hausregelnTabellen() {
    const p = aktivesPaket();
    return (p && p.wuerfelTabellen) || {};
}

function wuerfelAusdruck(text) {
    const m = String(text || '1W10').trim().match(/^(\d+)\s*[wWdD]\s*(\d+)$/);
    if (!m) return { anzahl: 1, seiten: 10 };
    return { anzahl: parseInt(m[1], 10) || 1, seiten: parseInt(m[2], 10) || 10 };
}

// Würfelt auf einer Sondertabelle. Bei Proben-Tabellen (Kochen, Zechen, ...)
// entscheidet die vorherige Probe, ob in der Erfolgs- oder Misserfolgsspalte
// gelesen wird - das Tool weiß das nicht, deshalb fragt es nach.
function hausregelnTabelleWuerfeln(id, erfolg) {
    const t = hausregelnTabellen()[id];
    if (!t) return;
    let spalte;
    if (t.art === 'probe') {
        if (erfolg === undefined) {
            erfolg = confirm(`Tabelle "${t.name}":\n\nWar die vorherige Probe ein Erfolg?\n(OK = Erfolg, Abbrechen = Misserfolg)`);
        }
        spalte = erfolg ? 'success' : 'no_success';
    }
    const w = wuerfelAusdruck(t.wuerfel);
    const ergebnisse = [];
    const spalten = spalte ? [spalte] : Object.keys(t.spalten);
    spalten.forEach(sp => {
        const zeilen = t.spalten[sp] || [];
        let wurf = 0;
        for (let i = 0; i < w.anzahl; i++) wurf += Math.floor(Math.random() * w.seiten) + 1;
        const zeile = zeilen.find(z => parseInt(z.wurf, 10) === wurf) || zeilen[Math.min(wurf, zeilen.length) - 1];
        ergebnisse.push({ spalte: sp, wurf, text: zeile ? zeile.text : '–', buffs: zeile && zeile.buffs ? zeile.buffs : [] });
    });

    const titel = t.art === 'probe' ? `${t.name} (${erfolg ? 'Erfolg' : 'Misserfolg'})` : t.name;
    const textHtml = ergebnisse.map(e => {
        const buffs = e.buffs.length ? ` <span style="opacity:0.7">[${e.buffs.map(b => escapeHtml(b.name)).join(', ')}]</span>` : '';
        return `<b>${e.wurf}</b>: ${escapeHtml(e.text)}${buffs}`;
    }).join('<br>');
    // addToLog schickt den Eintrag selbst an Discord und ins SL-Dashboard.
    if (typeof addToLog === 'function') {
        if (typeof lastRollTimestamp !== 'undefined') lastRollTimestamp = Date.now();
        addToLog(`<i class="fa-solid fa-table-list"></i> ${escapeHtml(titel)} (${escapeHtml(t.wuerfel)})`, textHtml, Date.now());
    }
    return ergebnisse;
}

// Paket laden und, falls appData (der aktuelle Charakter) es noch nicht hat,
// für Eldara aktivieren - sonst bliebe der Bogen in der freien
// Regelwerk-pur-Eingabe stecken, obwohl diese Version nur noch Eldara spielt.
// Aktivieren trägt keine Talente ein (siehe hausregelnAktivieren) - das
// Dropdown zeigt dem Spieler danach einfach alle Talente zur Auswahl an.
// Wird beim Start aufgerufen, aber genauso nach "Neu" (resetData) und
// "Laden (JSON)" (importData) in app.js, weil beide appData komplett
// ersetzen und damit denselben "Charakter hat noch kein Paket"-Zustand
// herstellen wie ein frischer Seitenaufruf.
function hausregelnSicherstellen() {
    hausregelPaketLaden(ELDARA_PAKET_ID, () => {
        if (typeof appData !== 'undefined' && (!appData.hausregeln || appData.hausregeln.paket !== ELDARA_PAKET_ID)) {
            hausregelnAktivieren();
        } else {
            if (typeof renderAll === 'function') renderAll();
            if (typeof calculatePoints === 'function') calculatePoints();
        }
        if (typeof renderSchiffGm === 'function') renderSchiffGm();
        if (typeof renderSeekampfGm === 'function') renderSeekampfGm();
        if (typeof renderKarteGm === 'function') renderKarteGm();
        if (typeof renderKampfGm === 'function') renderKampfGm();
    });
}

// app.js hat seinen init() schon registriert (Skript-Reihenfolge), dieser
// Listener läuft danach.
document.addEventListener('DOMContentLoaded', hausregelnSicherstellen);
