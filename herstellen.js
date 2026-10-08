// How to be a Hero - Herstellen & Verbrauchen (Eldara, RW 5.1 "Herstellbare Gegenstände")
//
// Die Tabelle "Herstellbare Gegenstände" (Waffen und Gegenstände) nennt zu jedem
// Gift, Öl, Heil- und Buff-Trank: Effekt, Kosten (Gold), Malus auf die Probe und
// die Fertigkeit(en) zum Herstellen. Hier steht sie maschinenlesbar:
//
//   HERSTELLEN   Dialog "Herstellen": Spieler wählt den Gegenstand und die Fertigkeit,
//                die Probe läuft mit dem Malus der Tabelle (rollSkillCheck, app.js).
//                Bei Erfolg werden die Kosten abgezogen und der Gegenstand liegt im
//                Inventar. ANNAHME (siehe hausregeln/OFFENE_FRAGEN.md): bei Misserfolg
//                bleiben Gold und Zutaten erhalten.
//   VERBRAUCHEN  Gegenstände im Inventar, die so heißen wie in der Tabelle, bekommen den
//                Knopf "Benutzen" (Erkennung über den Namen - so funktionieren auch
//                Funde aus dem Zufallsgenerator, Käufe und SL-Gaben ohne Zusatzfelder):
//                  heilung  - Heilsalben: sofort LP (adjustHp)
//                  status   - Buff-Tränke: Status mit Rundenzähler auf dem Bogen; Zahlen
//                             wie "+25 Stärke" fließen automatisch in Proben ein
//                  sl       - Gegengift & Co.: wirkt im Kampf-Tracker des SL (Nachricht
//                             'verbrauch', kampf.js), dort stehen Gift/Blutung/Schlaf
//                  wurf     - Wurf-/Flächengegenstände (Öle, Gas): Meldung an den SL
//                  waffe    - Gifte/Brandöl: Status "Waffe präpariert" mit Angriffs-/
//                             Rundenzähler
//   RUNDEN       Der Kampf-Tracker schickt bei "Runde weiter" 'rundenTick': Status-
//                Zähler laufen herunter, Regenerationstrank heilt 2W10 pro Runde.
//
// Nachrichten (multiplayer.js):
//   Spieler -> SL  { type: 'verbrauch', id, name, meldung }
//   SL -> Spieler  { type: 'eingriff', aktion: 'rundenTick' }   (eingriff.js)

// Tabelle (RW 5.1). benutzen: siehe oben. runden = Dauer in Kampfrunden.
const HERSTELL_REGELN = [
    // --- Gifte ---
    { id: 'einfaches_gift', art: 'Gifte', name: 'Einfaches Gift', effekt: 'Gift Stufe 2, hält 3 Angriffe', kosten: 200, malus: -5, skills: ['Voodoo'],
      benutzen: { typ: 'waffe', status: { name: 'Waffe vergiftet: Gift Stufe 2', wert: '3 Angriffe', art: 'bonus' } } },
    { id: 'starkes_gift', art: 'Gifte', name: 'Starkes Gift', effekt: 'Gift Stufe 3, hält 3 Angriffe', kosten: 500, malus: -10, skills: ['Voodoo'],
      benutzen: { typ: 'waffe', status: { name: 'Waffe vergiftet: Gift Stufe 3', wert: '3 Angriffe', art: 'bonus' } } },
    { id: 'todesgift', art: 'Gifte', name: 'Todesgift', effekt: 'Gift Stufe 4, plus Blutung 1, hält 3 Angriffe', kosten: 800, malus: -20, skills: ['Voodoo'],
      benutzen: { typ: 'waffe', status: { name: 'Waffe vergiftet: Gift Stufe 4 + Blutung 1', wert: '3 Angriffe', art: 'bonus' } } },
    { id: 'neurogift', art: 'Gifte', name: 'Neurogift', effekt: 'Gift Stufe 5 + Schlaf 1W4', kosten: 1000, malus: -40, skills: ['Voodoo'],
      benutzen: { typ: 'waffe', status: { name: 'Waffe vergiftet: Gift Stufe 5 + Schlaf 1W4', wert: '3 Angriffe', art: 'bonus' } } },
    // --- Öle / Chemie ---
    { id: 'brandoel', art: 'Öle / Chemie', name: 'Brandöl', effekt: 'Waffen erzeugen Feuermarker, hält 3 Runden', kosten: 100, malus: -10, skills: ['Technik', 'Handwerk', 'Chemie'],
      benutzen: { typ: 'waffe', status: { name: 'Brandöl: Waffen erzeugen Feuermarker', wert: '', art: 'bonus', runden: 3 } } },
    { id: 'haftoel', art: 'Öle / Chemie', name: 'Haftöl', effekt: '2x2m Ziel kriegt Bewegung -2 für 2 Runden', kosten: 75, malus: -15, skills: ['Technik', 'Handwerk', 'Chemie'],
      benutzen: { typ: 'wurf', meldung: 'wirft Haftöl: 2x2m Fläche, Bewegung -2 für 2 Runden' } },
    { id: 'saeureoel', art: 'Öle / Chemie', name: 'Säureöl', effekt: 'Dauerhaft -15 Rüstung', kosten: 200, malus: -20, skills: ['Technik', 'Chemie'],
      benutzen: { typ: 'wurf', meldung: 'setzt Säureöl ein: Ziel hat dauerhaft -15 Rüstung' } },
    { id: 'frostoel', art: 'Öle / Chemie', name: 'Frostöl', effekt: '-3 Bewegung, für 2 Runden', kosten: 300, malus: -15, skills: ['Chemie'],
      benutzen: { typ: 'wurf', meldung: 'setzt Frostöl ein: Ziel -3 Bewegung für 2 Runden' } },
    { id: 'schlafgas', art: 'Öle / Chemie', name: 'Schlafgas', effekt: '3x3m Gaswolke für 2 Runden. Zu Rundenbeginn: Zähigkeit -10, sonst 1W4 Runden Schlaf', kosten: 400, malus: -20, skills: ['Chemie', 'Voodoo'],
      benutzen: { typ: 'wurf', meldung: 'wirft Schlafgas: 3x3m Wolke für 2 Runden - zu Rundenbeginn Zähigkeitsprobe -10, sonst 1W4 Runden Schlaf' } },
    // --- Heilung ---
    { id: 'aufputschmittel', art: 'Heilung', name: 'Aufputschmittel', effekt: 'Entfernt sofort Schlaf oder tiefen Schlaf. Das Ziel erhält danach für 2 Runden +10 Zähigkeit und +1m', kosten: 150, malus: -15, skills: ['Chemie', 'Medizin'],
      benutzen: { typ: 'sl', aktion: 'aufputsch', meldung: 'nimmt ein Aufputschmittel (Schlaf wird entfernt)', status: { name: 'Aufputschmittel (+1 m)', wert: '+10', art: 'bonus', wirktAufName: 'Zähigkeit', runden: 2 } } },
    { id: 'kleine_heilsalbe', art: 'Heilung', name: 'Kleine Heilsalbe', effekt: 'Sofort +4W10 HP', kosten: 100, malus: -10, skills: ['Medizin'], benutzen: { typ: 'heilung', wuerfel: '4w10' } },
    { id: 'mittlere_heilsalbe', art: 'Heilung', name: 'Mittlere Heilsalbe', effekt: 'Sofort +6W10 HP', kosten: 200, malus: -20, skills: ['Medizin'], benutzen: { typ: 'heilung', wuerfel: '6w10' } },
    { id: 'grosse_heilsalbe', art: 'Heilung', name: 'Große Heilsalbe', effekt: 'Sofort +8W10 HP', kosten: 400, malus: -30, skills: ['Medizin'], benutzen: { typ: 'heilung', wuerfel: '8w10' } },
    { id: 'gegengift', art: 'Heilung', name: 'Gegengift', effekt: 'Entfernt Gift komplett, egal welche Stufe', kosten: 150, malus: -15, skills: ['Medizin'],
      benutzen: { typ: 'sl', aktion: 'gegengift', meldung: 'nimmt ein Gegengift (Gift komplett entfernt)' } },
    { id: 'blutstillende_paste', art: 'Heilung', name: 'Blutstillende Paste', effekt: 'Stoppt Blutung vollständig', kosten: 200, malus: -15, skills: ['Medizin', 'Voodoo'],
      benutzen: { typ: 'sl', aktion: 'blutstillen', meldung: 'trägt Blutstillende Paste auf (Blutung gestoppt)' } },
    { id: 'regenerationstrank', art: 'Heilung', name: 'Regenerationstrank', effekt: '3 Runden +2W10 HP zu Beginn der Runde', kosten: 150, malus: -25, skills: ['Medizin', 'Voodoo'],
      benutzen: { typ: 'status', status: { name: 'Regenerationstrank', wert: '+2W10 HP/Runde', art: 'bonus', runden: 3, proRunde: { heilung: '2w10' } } } },
    { id: 'notfall_elixier', art: 'Heilung', name: 'Notfall-Elixier', effekt: 'HP kann in den nächsten 5 Runden einmal nicht unter null fallen, sondern stoppt bei 1', kosten: 1000, malus: -40, skills: ['Medizin', 'Voodoo'],
      benutzen: { typ: 'status', status: { name: 'Notfall-Elixier', wert: 'LP stoppen bei 1', art: 'bonus', runden: 5, eff: 'notfall' } } },
    // --- Buff-Tränke ---
    { id: 'geschwindigkeitstrank', art: 'Buff-Tränke', name: 'Geschwindigkeitstrank', effekt: 'Für 3 Runden +2 Bewegung', kosten: 100, malus: -15, skills: ['Voodoo', 'Chemie'],
      benutzen: { typ: 'status', status: { name: 'Geschwindigkeitstrank', wert: '+2 Bewegung', art: 'bonus', runden: 3 } } },
    { id: 'unsichtbarkeitstrank', art: 'Buff-Tränke', name: 'Unsichtbarkeitstrank', effekt: 'Unsichtbarkeit und Heimlich +30 für 3 Runden, danach sichtbar', kosten: 500, malus: -20, skills: ['Voodoo'],
      benutzen: { typ: 'status', status: { name: 'Unsichtbar', wert: '+30', art: 'bonus', runden: 3, wirktAufName: 'Heimlich' } } },
    { id: 'eisenhaut', art: 'Buff-Tränke', name: 'Eisenhaut', effekt: '+5 Rüstung für 5 Runden', kosten: 200, malus: -20, skills: ['Medizin', 'Technik', 'Chemie'],
      benutzen: { typ: 'status', status: { name: 'Eisenhaut', wert: '+5 Rüstung', art: 'bonus', runden: 5 } } },
    { id: 'schildtrank', art: 'Buff-Tränke', name: 'Schildtrank', effekt: '+20 Rüstung für 3 Runden', kosten: 500, malus: -20, skills: ['Medizin', 'Chemie'],
      benutzen: { typ: 'status', status: { name: 'Schildtrank', wert: '+20 Rüstung', art: 'bonus', runden: 3 } } },
    { id: 'staerketrank', art: 'Buff-Tränke', name: 'Stärketrank', effekt: '+25 Stärke für 3 Runden', kosten: 300, malus: -20, skills: ['Medizin', 'Chemie'],
      benutzen: { typ: 'status', status: { name: 'Stärketrank', wert: '+25', art: 'bonus', runden: 3, wirktAufName: 'Stärke' } } },
    { id: 'lifesteal_trank', art: 'Buff-Tränke', name: 'Life-Steal-Trank', effekt: '50% Lifesteal für 3 Runden', kosten: 400, malus: -20, skills: ['Voodoo'],
      benutzen: { typ: 'status', status: { name: 'Life-Steal-Trank', wert: '50% Lifesteal', art: 'bonus', runden: 3 } } },
    { id: 'langsames_gegengift', art: 'Buff-Tränke', name: 'Langsames Gegengift', effekt: '6 Runden sinkt, zu Beginn deiner Runde, deine GS um 1', kosten: 50, malus: -15, skills: ['Medizin', 'Chemie', 'Voodoo'],
      benutzen: { typ: 'sl', aktion: 'langsamesGegengift', meldung: 'nimmt ein Langsames Gegengift (6 Runden GS -1)', status: { name: 'Langsames Gegengift', wert: 'GS -1/Runde', art: 'bonus', runden: 6 } } },
    { id: 'konzentrationstrank', art: 'Buff-Tränke', name: 'Konzentrationstrank', effekt: '+10 auf alle Fertigkeiten für 3 Runden', kosten: 200, malus: -15, skills: ['Voodoo', 'Medizin', 'Chemie'],
      benutzen: { typ: 'status', status: { name: 'Konzentrationstrank', wert: '+10', art: 'bonus', runden: 3, wirktAufName: '*' } } }
];

function herstellenNorm(t) {
    return String(t || '').toLowerCase().replace(/[^a-zäöüß0-9]/g, '');
}

function herstellenRegel(name) {
    const n = herstellenNorm(name);
    return HERSTELL_REGELN.find(r => herstellenNorm(r.name) === n) || null;
}

function herstellenWuerfeln(formel) {
    const f = typeof parseDiceFormula === 'function' ? parseDiceFormula(formel) : null;
    if (!f) return { summe: 0, rolls: [] };
    const rolls = [];
    for (let i = 0; i < f.count; i++) rolls.push(Math.floor(Math.random() * f.sides) + 1);
    return { summe: rolls.reduce((a, b) => a + b, 0) + f.mod, rolls };
}

// --- Verbrauchen -------------------------------------------------------------

function herstellenBenutzbar(item) {
    return !!(item && !item.istWaffe && !item.irAusruestungsslot && herstellenRegel(item.name));
}

function herstellenStatusSetzen(spez, regel) {
    if (!appData.statuses) appData.statuses = [];
    const st = {
        id: 'st_' + Date.now() + '_' + Math.random().toString(36).slice(2, 5),
        name: spez.name, value: spez.wert || '', type: spez.art || 'bonus', herkunft: regel.id
    };
    if (spez.wirktAufName) st.wirktAufName = spez.wirktAufName;
    if (spez.eff) st.eff = spez.eff;
    if (spez.proRunde) st.proRunde = spez.proRunde;
    if (spez.runden) { st.basisName = spez.name; st.rundenUebrig = spez.runden; st.name = `${spez.name} (${spez.runden} Runden)`; }
    appData.statuses.push(st);
    return st;
}

function herstellenAnSl(regel, meldung, aktion) {
    if (typeof hostConnection !== 'undefined' && hostConnection && hostConnection.open) {
        try { hostConnection.send({ type: 'verbrauch', id: regel.id, name: regel.name, aktion: aktion || null, meldung: meldung || '' }); } catch (e) { /* Verbindung weg */ }
    }
}

function herstellenBenutzen(itemId) {
    const item = (appData.inventory || []).find(i => i.id === itemId);
    const regel = item ? herstellenRegel(item.name) : null;
    if (!item || !regel) return;
    const b = regel.benutzen;
    let ergebnis = '';

    if (b.typ === 'heilung') {
        const w = herstellenWuerfeln(b.wuerfel);
        if (typeof adjustHp === 'function') adjustHp(w.summe, regel.name);
        ergebnis = `+${w.summe} LP (${b.wuerfel.toUpperCase()}: ${w.rolls.join('+')})`;
    } else if (b.typ === 'status' || b.typ === 'waffe') {
        herstellenStatusSetzen(b.status, regel);
        ergebnis = b.status.wert ? `Status „${b.status.name}“ (${b.status.wert})` : `Status „${b.status.name}“`;
        if (b.status.runden) ergebnis += `, ${b.status.runden} Runden`;
        if (b.typ === 'waffe') herstellenAnSl(regel, `präpariert die Waffe: ${regel.effekt}`);
    } else if (b.typ === 'sl') {
        if (b.status) herstellenStatusSetzen(b.status, regel);
        herstellenAnSl(regel, b.meldung, b.aktion);
        ergebnis = b.meldung;
    } else if (b.typ === 'wurf') {
        herstellenAnSl(regel, b.meldung);
        ergebnis = b.meldung;
    }

    // Verbrauch: eine Einheit weniger, bei 0 verschwindet der Gegenstand samt Rasterplatz
    const menge = (parseInt(item.amount) || 1) - 1;
    if (menge <= 0) {
        const idx = appData.inventory.findIndex(i => i.id === itemId);
        if (idx >= 0) appData.inventory.splice(idx, 1);
        if (typeof irOhneItem === 'function' && typeof irRasterDaten === 'function') appData.inventarRaster = irOhneItem(irRasterDaten(), itemId);
    } else {
        item.amount = menge;
    }
    if (typeof addActivityLog === 'function') addActivityLog(`Benutzt: ${regel.name} - ${ergebnis}`, 'activity-good', '<i class="fa-solid fa-flask"></i>');
    if (typeof saveData === 'function') saveData();
    if (typeof renderStatuses === 'function') renderStatuses();
    if (typeof renderInventarRaster === 'function') renderInventarRaster();
}

// --- Kampfrunden (Status-Zähler, Regenerationstrank) ---------------------------------

// Vom Kampf-Tracker bei "Runde weiter" ausgelöst (eingriff.js: aktion 'rundenTick')
function herstellenRundenTick() {
    const liste = appData.statuses || [];
    const abgelaufen = [];
    liste.forEach(st => {
        if (!st || !(st.rundenUebrig > 0)) return;
        if (st.proRunde && st.proRunde.heilung && typeof adjustHp === 'function') {
            const w = herstellenWuerfeln(st.proRunde.heilung);
            adjustHp(w.summe, `${st.basisName || st.name} zu Rundenbeginn`);
        }
        st.rundenUebrig--;
        if (st.rundenUebrig <= 0) abgelaufen.push(st);
        else if (st.basisName) st.name = `${st.basisName} (noch ${st.rundenUebrig} Runde${st.rundenUebrig === 1 ? '' : 'n'})`;
    });
    abgelaufen.forEach(st => {
        appData.statuses = appData.statuses.filter(s => s.id !== st.id);
        if (typeof addActivityLog === 'function') addActivityLog(`${st.basisName || st.name} ist abgelaufen.`, 'activity-neutral', '<i class="fa-solid fa-hourglass-end"></i>');
    });
    if (typeof saveData === 'function') saveData();
    if (typeof renderStatuses === 'function') renderStatuses();
}

// Notfall-Elixier: fällt der Spieler auf 0 oder weniger, stoppen die LP bei 1 (einmalig).
// Gibt true zurück, wenn er eingegriffen hat.
function herstellenBeiLpAenderung(altLp) {
    const st = (appData.statuses || []).find(s => s && s.eff === 'notfall');
    if (!st || !(altLp > 0) || appData.hpCurrent > 0) return false;
    appData.hpCurrent = 1;
    appData.statuses = appData.statuses.filter(s => s.id !== st.id);
    if (typeof addActivityLog === 'function') addActivityLog('Notfall-Elixier: Du wärst auf 0 LP gefallen - stattdessen bleibst du bei 1 LP. (Einmalig verbraucht.)', 'activity-good', '<i class="fa-solid fa-flask"></i>');
    if (typeof renderStatuses === 'function') renderStatuses();
    return true;
}

// --- Herstellen -----------------------------------------------------------------

function herstellenSkillWert(skillName) {
    const gesucht = herstellenNorm(skillName);
    for (const attr of ['handeln', 'wissen', 'soziales']) {
        const skill = (appData['skills_' + attr] || []).find(s => herstellenNorm(s.name) === gesucht);
        if (skill) {
            const attrVal = parseInt(appData['attr_' + attr]) || 0;
            const wert = (skill.excludeBonus ? 0 : attrVal) + (parseInt(skill.invested) || 0);
            return { name: skill.name, wert, kategorie: attr, id: skill.id };
        }
    }
    return null;
}

function herstellenGold() {
    return appData.currency ? (parseInt(appData.currency.amount) || 0) : 0;
}

function herstellenVersuchen(regelId, skillName) {
    const regel = HERSTELL_REGELN.find(r => r.id === regelId);
    const status = document.getElementById('hs-status');
    const meldung = (t, warn) => { if (status) { status.textContent = t; status.style.color = warn ? 'var(--color-dmg)' : 'var(--color-heal)'; } };
    if (!regel) return;
    const skill = herstellenSkillWert(skillName);
    if (!skill) { meldung(`Das Talent „${skillName}“ steht nicht auf deinem Bogen.`, true); return; }
    if (herstellenGold() < regel.kosten) { meldung(`Nicht genug Gold: ${regel.name} kostet ${regel.kosten}, du hast ${herstellenGold()}.`, true); return; }

    const probe = rollSkillCheck(skill.name, skill.wert, false, skill.kategorie, skill.id, { mod: regel.malus, label: `Herstellen: ${regel.name}` });
    if (!probe || !probe.erfolg) {
        meldung(`${regel.name} misslungen (gewürfelt ${probe ? probe.wurf : '?'} gegen ${probe ? probe.zielwert : '?'}). Gold und Zutaten bleiben erhalten.`, true);
        return;
    }

    // Erfolg: Kosten abziehen, Gegenstand ins Inventar
    appData.currency.amount = herstellenGold() - regel.kosten;
    const goldEl = document.getElementById('currency-val');
    if (goldEl) { goldEl.value = appData.currency.amount; if (typeof autoSizeCurrencyField === 'function') autoSizeCurrencyField(goldEl); }
    if (!appData.inventory) appData.inventory = [];
    let item = appData.inventory.find(i => !i.istWaffe && !i.irAusruestungsslot && herstellenNorm(i.name) === herstellenNorm(regel.name));
    if (item) item.amount = (parseInt(item.amount) || 1) + 1;
    else {
        item = { id: 'inv_' + Date.now(), name: regel.name, amount: 1, description: regel.effekt, showDesc: false, irGroesse: 0.5, istWaffe: false, schaden: '', irAusruestungsslot: '', irRuestungswert: 0 };
        appData.inventory.push(item);
        if (typeof irAutoPlatzieren === 'function') irAutoPlatzieren(item.id);
    }
    if (typeof addActivityLog === 'function') {
        addActivityLog(`Hergestellt: ${regel.name} (-${regel.kosten} ${(appData.currency && appData.currency.name) || 'Gold'})`, 'activity-good', '<i class="fa-solid fa-flask"></i>');
    }
    if (typeof saveData === 'function') saveData();
    if (typeof renderInventarRaster === 'function') renderInventarRaster();
    meldung(`✓ ${regel.name} hergestellt (-${regel.kosten} Gold).`);
    herstellenRendern();
}

function herstellenModal() {
    let overlay = document.getElementById('herstellen-modal-overlay');
    if (overlay) return overlay;
    overlay = document.createElement('div');
    overlay.id = 'herstellen-modal-overlay';
    overlay.className = 'help-modal-overlay';
    overlay.innerHTML = `
        <div class="help-modal-box herstellen-modal" role="dialog" aria-label="Herstellen">
            <button class="modal-close" aria-label="Schließen"><i class="fa-solid fa-xmark"></i></button>
            <h3 style="color: var(--color-accent); margin-top: 0;"><i class="fa-solid fa-flask"></i> Herstellen</h3>
            <p class="hr-hint" style="margin-top:0">Gifte, Öle, Heilmittel und Tränke (Regelwerk 5.1). Die Probe läuft auf der gewählten Fertigkeit mit dem Malus der Tabelle; bei Erfolg zahlst du die Kosten und der Gegenstand liegt im Inventar.</p>
            <div id="hs-status" class="hr-hint" style="min-height:1.2rem"></div>
            <div id="hs-liste"></div>
        </div>`;
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('active'); });
    overlay.querySelector('.modal-close').addEventListener('click', () => overlay.classList.remove('active'));
    document.body.appendChild(overlay);
    return overlay;
}

function herstellenOeffnen() {
    herstellenModal().classList.add('active');
    herstellenRendern();
}

function herstellenRendern() {
    const box = document.getElementById('hs-liste');
    if (!box) return;
    const gold = herstellenGold();
    const arten = [...new Set(HERSTELL_REGELN.map(r => r.art))];
    box.innerHTML = `<div class="hr-hint">Dein Geld: <b>${gold}</b> ${escapeHtml((appData.currency && appData.currency.name) || '')}</div>` + arten.map(art => `
        <h4 class="hs-art">${escapeHtml(art)}</h4>
        ${HERSTELL_REGELN.filter(r => r.art === art).map(r => {
            const optionen = r.skills.map(sn => ({ sn, s: herstellenSkillWert(sn) }));
            const beste = optionen.filter(o => o.s).sort((a, b) => b.s.wert - a.s.wert)[0];
            const leistbar = gold >= r.kosten;
            return `<div class="hs-eintrag ${leistbar ? '' : 'hs-teuer'}">
                <div class="hs-kopf"><strong>${escapeHtml(r.name)}</strong><span class="hs-preis">${r.kosten} Gold · Probe ${r.malus}</span></div>
                <div class="hs-effekt">${escapeHtml(r.effekt)}</div>
                <div class="hs-aktion">
                    <select class="x-select hs-skill" data-hsskill="${escapeHtml(r.id)}">
                        ${optionen.map(o => `<option value="${escapeHtml(o.sn)}" ${beste && beste.sn === o.sn ? 'selected' : ''} ${o.s ? '' : 'disabled'}>${escapeHtml(o.sn)}${o.s ? ` (${o.s.wert})` : ' (nicht auf dem Bogen)'}</option>`).join('')}
                    </select>
                    <button class="tool-btn" type="button" data-hsmachen="${escapeHtml(r.id)}" ${beste ? '' : 'disabled'}><i class="fa-solid fa-hammer"></i> Herstellen</button>
                </div>
            </div>`;
        }).join('')}`).join('');
    box.querySelectorAll('[data-hsmachen]').forEach(b => b.addEventListener('click', () => {
        const id = b.dataset.hsmachen;
        const sel = box.querySelector(`[data-hsskill="${id}"]`);
        herstellenVersuchen(id, sel ? sel.value : '');
    }));
}
