/* Capitaine 200 — application de révision */
(function () {
  'use strict';
  const C = window.C200, U = C.u;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const app = $('#app');
  const esc = U.esc;

  // ================= Données =================
  const MODS = C.modules.slice().sort((a, b) => (a.ordre || 99) - (b.ordre || 99));
  const byId = Object.fromEntries(MODS.map((m) => [m.id, m]));
  const allQ = MODS.flatMap((m) => m.qcm);
  const qById = new Map(allQ.map((q) => [q.uid, q]));
  const allC = MODS.flatMap((m) => m.cartes);
  const cById = new Map(allC.map((c) => [c.uid, c]));

  // ================= Sauvegarde =================
  // Sans pseudo : la progression reste dans 'c200.v1' (comme avant).
  // Avec un pseudo : 'c200.p.<clé>' sur l'appareil, et copie dans la base partagée si elle est réglée.
  const P = C.profils;
  const LEGACY = 'c200.v1';
  const ls = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* stockage indisponible */ } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* idem */ } }
  };
  const blank = () => ({ cards: {}, qcm: {}, fiches: {}, calc: {}, rm: {}, days: {}, exams: [], settings: { nouvelles: 15, theme: 'auto' } });
  function normalize(o) { const s = Object.assign(blank(), o || {}); s.settings = Object.assign(blank().settings, (o && o.settings) || {}); return s; }
  let ME = null;
  try { const se = JSON.parse(ls.get('c200.session') || 'null'); if (se && se.key) ME = se; } catch (e) { /* pas de session */ }
  const storeKey = (me = ME) => (me ? 'c200.p.' + me.key : LEGACY);
  function loadLocal(me = ME) { try { const t = ls.get(storeKey(me)); return t ? normalize(JSON.parse(t)) : blank(); } catch (e) { return blank(); } }
  let S = loadLocal();
  let saveTimer = null;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => { ls.set(storeKey(), JSON.stringify(S)); Cloud.schedule(); }, 150);
  }
  function localAccounts() { try { return JSON.parse(ls.get('c200.comptes') || '{}') || {}; } catch (e) { return {}; } }
  function cacheAccount(key, acc) { const a = localAccounts(); a[key] = Object.assign({}, a[key] || {}, acc); ls.set('c200.comptes', JSON.stringify(a)); }

  // ---- synchronisation avec la base partagée ----
  const Cloud = {
    state: 'off', last: 0, timer: null, dirty: false, busy: false, pulled: 0,
    on() { return !!ME && P.enabled(); },
    schedule() {
      if (!this.on()) return;
      this.dirty = true;
      if (this.timer) return;
      const wait = Math.max(4000, 45000 - (Date.now() - this.last));
      this.timer = setTimeout(() => { this.timer = null; this.push(); }, wait);
    },
    async push() {
      if (!this.on() || this.busy) return;
      this.busy = true; this.dirty = false;
      const me = ME;
      try {
        const pk = await P.pack(S); pk.maj = Date.now();
        await P.api('progres/' + me.key, 'PUT', pk);
        await P.api('joueurs/' + me.key + '/resume', 'PUT', resume());
        this.last = Date.now(); this.state = 'ok';
      } catch (e) { this.state = 'err'; this.dirty = true; }
      this.busy = false; updateMe();
    },
    async pull() {
      if (!this.on()) return false;
      try {
        const o = await P.api('progres/' + ME.key);
        const R = await P.unpack(o);
        if (R) { S = normalize(P.merge(S, R)); ls.set(storeKey(), JSON.stringify(S)); }
        this.state = 'ok'; this.pulled = Date.now();
        return true;
      } catch (e) { this.state = 'err'; return false; } finally { updateMe(); }
    },
    async sync() { const ok = await this.pull(); if (ok) await this.push(); return ok; },
    flush() { if (this.dirty && this.on()) { clearTimeout(this.timer); this.timer = null; this.push(); } }
  };
  function dayStr(d = new Date()) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  const today = () => dayStr();
  function addDays(n) { const d = new Date(); d.setDate(d.getDate() + n); return dayStr(d); }
  function activity() { const d = today(); S.days[d] = (S.days[d] || 0) + 1; save(); }
  function streak(st = S) {
    let n = 0; const d = new Date();
    if (!st.days[dayStr(d)]) d.setDate(d.getDate() - 1);
    while (st.days[dayStr(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function applyTheme() {
    const t = S.settings.theme;
    if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  }
  applyTheme();

  // ---- cartes (répétition espacée, 5 boîtes) ----
  const INTERVALLES = [0, 1, 2, 4, 8, 16];
  const cardState = (c) => S.cards[c.uid];
  function cardIsDue(c) { const s = cardState(c); return s && s.due <= today(); }
  function cardGrade(c, ok) {
    const s = S.cards[c.uid] || { b: 0, n: 0, l: 0 };
    s.n++;
    if (ok) { s.b = Math.min(5, (s.b || 0) + 1); s.due = addDays(INTERVALLES[s.b]); }
    else { s.b = 1; s.l = (s.l || 0) + 1; s.due = today(); }
    S.cards[c.uid] = s; activity();
  }
  // ---- QCM ----
  function qGrade(q, ok) {
    const s = S.qcm[q.uid] || { ok: 0, ko: 0 };
    ok ? s.ok++ : s.ko++;
    s.last = ok ? 1 : 0; s.t = Date.now();
    S.qcm[q.uid] = s; activity();
  }
  function calcGrade(id, ok) {
    const s = S.calc[id] || { ok: 0, ko: 0 };
    ok ? s.ok++ : s.ko++;
    S.calc[id] = s; activity();
  }

  // ---- maîtrise d'une matière ----
  function mastery(m, st = S) {
    const nf = m.fiches.length, nc = m.cartes.length, nq = m.qcm.length;
    if (!nf && !nc && !nq) return null;
    const f = nf ? m.fiches.filter((x) => st.fiches[x.uid]).length / nf : 0;
    const c = nc ? m.cartes.reduce((a, x) => a + Math.min(4, (st.cards[x.uid] || {}).b || 0) / 4, 0) / nc : 0;
    const q = nq ? m.qcm.filter((x) => (st.qcm[x.uid] || {}).last === 1).length / nq : 0;
    const w = (nf ? 0.2 : 0) + (nc ? 0.4 : 0) + (nq ? 0.4 : 0);
    return Math.round(((nf ? 0.2 * f : 0) + (nc ? 0.4 * c : 0) + (nq ? 0.4 * q : 0)) / w * 100);
  }
  const hasContent = (m) => m.fiches.length || m.cartes.length || m.qcm.length;

  // ================= Navigation =================
  let cur = { dispose: null, key: null };
  // Navigation par ancre (#/...), avec repli si le navigateur n'autorise pas le changement d'ancre
  let curHash = location.hash || '#/';
  function navigate(h) {
    if (h === curHash) { route(); return; }
    curHash = h;
    let ok = false;
    try { location.hash = h; ok = location.hash === h; } catch (e) { ok = false; }
    if (!ok) route();
  }
  function go(path) { navigate('#/' + path); }
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault();
    if (a.getAttribute('aria-disabled') === 'true') return;
    navigate(a.getAttribute('href'));
  });
  function setTop(title, back) {
    $('#top-title').textContent = title || 'Capitaine 200';
    const b = $('#back');
    b.hidden = !back;
    b.dataset.to = back || '';
    document.title = title ? title + ' · Capitaine 200' : 'Capitaine 200';
  }
  $('#back').addEventListener('click', () => {
    const to = $('#back').dataset.to;
    if (to) go(to === '/' ? '' : to);
  });
  function setNav(id) {
    $$('.bottom a').forEach((a) => a.classList.toggle('on', a.dataset.nav === id));
  }
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea, select') && e.key !== 'Enter') return;
    if (cur.key) cur.key(e);
  });
  function route() {
    if (cur.dispose) try { cur.dispose(); } catch (e) {}
    cur = { dispose: null, key: null };
    const h = curHash.replace(/^#\/?/, '');
    const p = h.split('/').filter(Boolean).map(decodeURIComponent);
    window.scrollTo(0, 0);
    try {
      if (!p.length) return viewHome();
      if (p[0] === 'm' && byId[p[1]]) {
        const m = byId[p[1]];
        if (p[2] === 'fiche') return viewFiche(m, p[3]);
        if (p[2] === 'cartes') return viewCardsModule(m, p[3]);
        if (p[2] === 'liste') return viewCardList(m);
        if (p[2] === 'qcm') return viewQcmModule(m, p[3]);
        if (p[2] === 'calc') return viewCalc(m, p[3]);
        if (p[2] === 'visuel') return viewVisuel(m, p[3]);
        if (p[2] === 'atelier' && p[3] && m.atelier) return viewAtelier(m, p[3]);
        return viewModule(m, p[2] || '');
      }
      if (p[0] === 'revision') return viewRevision();
      if (p[0] === 'examen') return viewExamSetup(p[1]);
      if (p[0] === 'faibles') return viewFaibles();
      if (p[0] === 'progres') return viewStats();
      if (p[0] === 'compte') return viewCompte();
      if (p[0] === 'equipage') return p[1] ? viewJoueur(p[1]) : viewEquipage();
      return viewHome();
    } catch (err) {
      console.error(err);
      app.innerHTML = '<div class="empty"><h2>Oups</h2><p>Cette page n\'a pas pu s\'afficher.</p><p><a class="btn" href="#/">Retour à l\'accueil</a></p></div>';
    }
  }
  window.addEventListener('hashchange', () => { curHash = location.hash || '#/'; route(); });

  // ================= Petits composants =================
  const bar = (pct) => `<span class="bar" aria-hidden="true"><i style="width:${pct || 0}%"></i></span>`;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.hidden = false;
    clearTimeout(t._tm); t._tm = setTimeout(() => (t.hidden = true), 2200);
  }
  function plural(n, s, p) { return n + ' ' + (n > 1 ? p || s + 's' : s); }
  function countdown() {
    const start = new Date(C.config.formation + 'T08:00:00');
    const now = new Date();
    const days = Math.ceil((start - now) / 86400000);
    if (days > 1) return `<b>J-${days}</b> avant l'entrée en formation, le ${start.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}`;
    if (days === 1) return `<b>Demain</b> : entrée en formation`;
    const wk = Math.floor((now - start) / (7 * 86400000)) + 1;
    return wk <= 12 ? `Formation en cours : <b>semaine ${wk}</b>` : 'Bon courage pour la suite';
  }
  function dueCount(list) { return list.filter(cardIsDue).length; }

  // ================= ACCUEIL =================
  function viewHome() {
    setTop('', null); setNav('home');
    const due = dueCount(allC);
    const st = streak();
    const faibles = allQ.filter((q) => (S.qcm[q.uid] || {}).last === 0).length;
    let html = `
      <section class="hero">
        <p class="eyebrow">Capitaine 200 · révision</p>
        <h1>Bon quart, ${esc(ME ? ME.pseudo : C.config.prenom)}</h1>
        <p class="count">${countdown()}</p>
        <div class="today">
          <a class="tile" href="#/revision"><span class="tile-n">${due}</span><span class="tile-l">${due > 1 ? 'cartes à revoir' : 'carte à revoir'}</span></a>
          <a class="tile" href="#/faibles"><span class="tile-n">${faibles}</span><span class="tile-l">${faibles > 1 ? 'questions ratées' : 'question ratée'}</span></a>
          <a class="tile" href="#/progres"><span class="tile-n">${st}</span><span class="tile-l">${st > 1 ? 'jours de suite' : 'jour de suite'}</span></a>
        </div>
      </section>
      ${ME ? '' : `<a class="banner" href="#/compte"><b>Choisis ton pseudo</b><span>Ta progression est gardée sous ton nom et l'équipage peut la voir.</span></a>`}
      <div class="search">
        <label for="search" class="sr">Chercher une notion</label>
        <input id="search" type="search" placeholder="Chercher une notion : feu de poupe, marnage, GM…" autocomplete="off">
      </div>
      <div id="results"></div>`;
    for (const b of C.blocs) {
      const mods = MODS.filter((m) => m.bloc === b.id);
      if (!mods.length) continue;
      html += `<section class="bloc"><header class="bloc-h"><p class="eyebrow">${esc(b.sous)}</p><h2>${esc(b.titre)}</h2></header><ul class="mods">`;
      for (const m of mods) {
        const ok = hasContent(m);
        const pct = mastery(m) || 0;
        const d = dueCount(m.cartes);
        html += `<li><a class="mod${ok ? '' : ' off'}" href="${ok ? '#/m/' + m.id : '#/'}" ${ok ? '' : 'aria-disabled="true"'}>
          <span class="mod-code">${esc(m.court)}</span>
          <span class="mod-main"><span class="mod-title">${esc(m.titre)}</span>
          <span class="mod-meta">${ok ? `${plural(m.fiches.length, 'fiche')} · ${plural(m.cartes.length, 'carte')} · ${m.qcm.length} QCM${m.calculs.length ? ' · calculs' : ''}` : 'en préparation'}${d ? ` · <b class="due">${d} à revoir</b>` : ''}</span></span>
          ${ok ? `<span class="mod-score"><span class="pct">${pct}%</span>${bar(pct)}</span>` : ''}
        </a></li>`;
      }
      html += '</ul></section>';
    }
    html += `<p class="foot">Hors connexion, tout reste disponible une fois le site ouvert une première fois.</p>`;
    app.innerHTML = html;
    const input = $('#search');
    input.addEventListener('input', () => renderSearch(input.value));
  }

  let searchIndex = null;
  function strip(html) { return String(html).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' '); }
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function renderSearch(qs) {
    const box = $('#results');
    const q = norm(qs.trim());
    if (q.length < 2) { box.innerHTML = ''; return; }
    if (!searchIndex) {
      searchIndex = [];
      for (const m of MODS) {
        m.fiches.forEach((f) => searchIndex.push({ t: 'Fiche', m, title: f.titre, text: norm(f.titre + ' ' + strip(f.html)), href: `#/m/${m.id}/fiche/${f.id}` }));
        m.cartes.forEach((c) => searchIndex.push({ t: 'Carte', m, title: strip(c.r), ans: c.v, text: norm(strip(c.r + ' ' + c.v)) }));
        m.qcm.forEach((x) => searchIndex.push({ t: 'QCM', m, title: strip(x.q), ans: x.r[0], text: norm(strip(x.q + ' ' + x.r[0] + ' ' + x.e)) }));
      }
    }
    const words = q.split(/\s+/);
    const res = searchIndex.filter((it) => words.every((w) => it.text.includes(w)))
      .sort((a, b) => (a.t === 'Fiche' ? -1 : 0) - (b.t === 'Fiche' ? -1 : 0)).slice(0, 25);
    if (!res.length) { box.innerHTML = '<p class="muted pad">Rien trouvé. Essaie un autre mot.</p>'; return; }
    box.innerHTML = '<ul class="results">' + res.map((r) => r.href
      ? `<li><a href="${r.href}"><span class="tag">${r.t}</span> <b>${esc(r.title)}</b> <span class="muted">· ${esc(r.m.court)}</span></a></li>`
      : `<li><details><summary><span class="tag">${r.t}</span> ${esc(r.title)} <span class="muted">· ${esc(r.m.court)}</span></summary><div class="ans">${r.ans}</div></details></li>`).join('') + '</ul>';
  }

  // ================= MATIÈRE =================
  function cartouche(m) {
    const b = C.blocs.find((x) => x.id === m.bloc) || {};
    const pct = mastery(m) || 0;
    return `<header class="cartouche">
      <p class="eyebrow">${esc(b.sous || '')} · ${esc(m.court)}</p>
      <h1>${esc(m.titre)}</h1>
      ${m.intro ? `<p class="intro">${m.intro}</p>` : ''}
      <div class="cart-meta"><span>Maîtrise <b>${pct}%</b></span>${bar(pct)}</div>
    </header>`;
  }
  function tabs(m, active) {
    const t = [['', 'Fiches'], ['cartes-tab', 'Cartes'], ['qcm-tab', 'QCM']];
    if (m.calculs.length) t.push(['calc-tab', 'Calculs']);
    if (m.visuels.length) t.push(['visuel-tab', 'Visuel']);
    if (m.atelier) t.push(['atelier', 'Atelier']);
    t.push(['controle', 'Contrôle']);
    return `<nav class="tabs" aria-label="Sections">${t.map(([id, l]) => `<a href="#/m/${m.id}${id ? '/' + id : ''}" class="${active === id ? 'on' : ''}">${l}</a>`).join('')}</nav>`;
  }
  function viewModule(m, tab) {
    setTop(m.titre, '/'); setNav('home');
    let body = '';
    if (tab === '') {
      body = `<ol class="fiches">${m.fiches.map((f, i) => `<li><a href="#/m/${m.id}/fiche/${f.id}" class="${S.fiches[f.uid] ? 'lu' : ''}">
        <span class="num">${i + 1}</span><span class="f-t">${esc(f.titre)}</span><span class="chk" aria-label="${S.fiches[f.uid] ? 'lue' : 'non lue'}">${S.fiches[f.uid] ? '✓' : ''}</span></a></li>`).join('')}</ol>`;
      if (!m.fiches.length) body = '<p class="muted pad">Pas encore de fiche pour cette matière.</p>';
    } else if (tab === 'cartes-tab') {
      const due = dueCount(m.cartes), neu = m.cartes.filter((c) => !cardState(c)).length;
      const sure = m.cartes.filter((c) => (cardState(c) || {}).b >= 4).length;
      body = `<div class="panel">
        <div class="stats3"><div><b>${due}</b><span>à revoir</span></div><div><b>${neu}</b><span>nouvelles</span></div><div><b>${sure}</b><span>bien sues</span></div></div>
        <p class="muted">Une carte que tu sais revient dans 1, 2, 4, 8 puis 16 jours. Une carte ratée revient tout de suite.</p>
        <div class="actions">
          <a class="btn" href="#/m/${m.id}/cartes">${due ? 'Réviser' : 'Commencer'} (${Math.min(due + Math.min(neu, S.settings.nouvelles), m.cartes.length)})</a>
          <a class="btn ghost" href="#/m/${m.id}/cartes/tout">Toutes les cartes au hasard</a>
          <a class="btn ghost" href="#/m/${m.id}/liste">Lire la liste (mémo)</a>
        </div></div>`;
    } else if (tab === 'qcm-tab') {
      const vu = m.qcm.filter((q) => S.qcm[q.uid]).length;
      const ok = m.qcm.filter((q) => (S.qcm[q.uid] || {}).last === 1).length;
      const ko = m.qcm.filter((q) => (S.qcm[q.uid] || {}).last === 0).length;
      body = `<div class="panel">
        <div class="stats3"><div><b>${m.qcm.length - vu}</b><span>jamais vues</span></div><div><b>${ok}</b><span>réussies</span></div><div><b>${ko}</b><span>à retravailler</span></div></div>
        <div class="actions">
          <a class="btn" href="#/m/${m.id}/qcm/10">Série de 10</a>
          <a class="btn ghost" href="#/m/${m.id}/qcm/20">Série de 20</a>
          ${m.qcm.length > 60 ? `<a class="btn ghost" href="#/m/${m.id}/qcm/50">Série de 50</a>` : `<a class="btn ghost" href="#/m/${m.id}/qcm/tout">Toutes (${m.qcm.length})</a>`}
          ${ko ? `<a class="btn ghost" href="#/m/${m.id}/qcm/erreurs">Mes erreurs (${ko})</a>` : ''}
        </div>
        ${m.fiches.length ? `<label class="lbl" for="qf">Ou seulement une fiche :</label>
        <select id="qf"><option value="">Choisir une fiche…</option>${m.fiches.map((f) => { const n = m.qcm.filter((q) => q.f === f.id).length; return n ? `<option value="${f.id}">${esc(f.titre)} (${n})</option>` : ''; }).join('')}</select>` : ''}
      </div>`;
    } else if (tab === 'calc-tab') {
      body = `<ul class="gens">${m.calculs.map((id) => { const g = C.gens[id]; if (!g) return ''; const s = S.calc[id] || { ok: 0, ko: 0 };
        return `<li><a href="#/m/${m.id}/calc/${id}"><b>${esc(g.titre)}</b><span class="muted">${g.desc || ''}</span><span class="score">${s.ok} juste${s.ok > 1 ? 's' : ''} / ${s.ok + s.ko}</span></a></li>`; }).join('')}</ul>
        <p class="muted pad">Les chiffres changent à chaque exercice. Tu peux t'entraîner autant que tu veux.</p>`;
    } else if (tab === 'visuel-tab') {
      body = `<ul class="gens">${m.visuels.map((id) => { const g = C.visuels[id]; if (!g) return ''; const s = S.calc['v.' + id] || { ok: 0, ko: 0 };
        return `<li><a href="#/m/${m.id}/visuel/${id}"><b>${esc(g.titre)}</b><span class="muted">${g.desc || ''}</span><span class="score">${s.ok} juste${s.ok > 1 ? 's' : ''} / ${s.ok + s.ko}</span></a></li>`; }).join('')}</ul>`;
    } else if (tab === 'atelier' && m.atelier) {
      body = `<div class="panel"><p>De vrais sujets d'examen. Écris ton rapport en te chronométrant, corrige-toi avec la grille, puis compare au corrigé type. Ton texte reste enregistré sur cet appareil.</p></div>
        <ul class="gens">${m.atelier.sujets.map((x) => { const r = S.rm[x.id] || {};
          return `<li><a href="#/m/${m.id}/atelier/${x.id}"><b>${esc(x.titre)}</b><span class="muted">${esc(x.session)}</span><span class="score">${r.score != null ? 'Ma note : ' + U.fr(r.score) + '/20' : r.txt ? 'Brouillon commencé' : 'À faire'}</span></a></li>`; }).join('')}</ul>`;
    } else if (tab === 'controle') {
      body = `<div class="panel"><p>Un contrôle blanc comme en formation : questions tirées au hasard dans toute la matière, sans correction avant la fin, note sur 20.</p>
        <div class="actions"><a class="btn" href="#/examen/${m.id}">Préparer le contrôle</a></div></div>`;
    }
    app.innerHTML = cartouche(m) + tabs(m, tab) + body;
    const sel = $('#qf');
    if (sel) sel.addEventListener('change', () => sel.value && go(`m/${m.id}/qcm/fiche-${sel.value}`));
  }

  // ================= FICHE =================
  function viewFiche(m, fid) {
    const i = m.fiches.findIndex((f) => f.id === fid);
    if (i < 0) return go('m/' + m.id);
    const f = m.fiches[i];
    setTop(m.titre, 'm/' + m.id); setNav('home');
    if (!S.fiches[f.uid]) { S.fiches[f.uid] = 1; activity(); }
    const prev = m.fiches[i - 1], next = m.fiches[i + 1];
    const nq = m.qcm.filter((q) => q.f === f.id).length;
    const nc = m.cartes.filter((c) => c.f === f.id).length;
    app.innerHTML = `<article class="fiche">
      <p class="eyebrow">${esc(m.court)} · fiche ${i + 1} sur ${m.fiches.length}</p>
      <h1>${esc(f.titre)}</h1>
      <div class="fiche-body">${f.html}</div>
      ${f.src ? `<p class="src">Dans tes cours : ${esc(f.src)}</p>` : ''}
      <div class="actions">
        ${nq ? `<a class="btn" href="#/m/${m.id}/qcm/fiche-${f.id}">QCM sur cette fiche${nq > 10 ? ' (série de 10)' : ' (' + nq + ')'}</a>` : ''}
        ${nq > 10 ? `<a class="btn ghost" href="#/m/${m.id}/qcm/fichetout-${f.id}">Toutes ses questions (${nq})</a>` : ''}
        ${nc ? `<a class="btn ghost" href="#/m/${m.id}/cartes/fiche-${f.id}">Cartes de cette fiche (${nc})</a>` : ''}
      </div>
      <nav class="pager">
        ${prev ? `<a href="#/m/${m.id}/fiche/${prev.id}">← ${esc(prev.titre)}</a>` : '<span></span>'}
        ${next ? `<a href="#/m/${m.id}/fiche/${next.id}" class="nx">${esc(next.titre)} →</a>` : `<a href="#/m/${m.id}/qcm-tab" class="nx">Passer aux QCM →</a>`}
      </nav>
    </article>`;
    // tableaux larges : défilement horizontal dans leur cadre
    $$('.fiche-body table').forEach((t) => {
      if (t.parentElement.classList.contains('tw')) return;
      const w = document.createElement('div'); w.className = 'tw'; t.replaceWith(w); w.appendChild(t);
    });
  }

  // ================= CARTES =================
  function buildCardQueue(list, mode) {
    if (mode === 'tout' || mode === 'fiche') return U.shuffle(list);
    const due = list.filter(cardIsDue).sort((a, b) => (cardState(a).b || 0) - (cardState(b).b || 0));
    const neu = list.filter((c) => !cardState(c)).slice(0, S.settings.nouvelles);
    return U.shuffle(due).concat(neu);
  }
  function viewCardsModule(m, arg) {
    setTop(m.titre, 'm/' + m.id + '/cartes-tab'); setNav('home');
    let list = m.cartes, mode = '';
    if (arg === 'tout') mode = 'tout';
    else if (arg && arg.startsWith('fiche-')) { const fid = arg.slice(6); list = m.cartes.filter((c) => c.f === fid); mode = 'fiche'; }
    runCards(buildCardQueue(list, mode), 'm/' + m.id + '/cartes-tab');
  }
  function viewRevision() {
    setTop('Révision du jour', '/'); setNav('rev');
    const q = buildCardQueue(allC.filter((c) => cardState(c)), '');
    if (!q.length) {
      const started = MODS.filter((m) => m.cartes.some((c) => cardState(c)));
      app.innerHTML = `<div class="empty"><h2>Rien à revoir aujourd'hui</h2>
        <p>${started.length ? 'Toutes tes cartes sont à jour. Tu peux en apprendre de nouvelles dans une matière.' : 'Commence les cartes d\'une matière : elles reviendront ici le jour où il faut les revoir.'}</p>
        <p><a class="btn" href="#/">Choisir une matière</a></p></div>`;
      return;
    }
    runCards(q, '/');
  }
  function runCards(queue, back) {
    let i = 0, flipped = false, done = 0, okN = 0;
    const total0 = queue.length;
    if (!queue.length) {
      app.innerHTML = `<div class="empty"><h2>Aucune carte ici</h2><p><a class="btn" href="#/${back === '/' ? '' : back}">Retour</a></p></div>`;
      return;
    }
    function render() {
      if (i >= queue.length) {
        app.innerHTML = `<div class="empty"><h2>Session terminée</h2><p><b>${okN}</b> sur ${done} sues du premier coup.</p>
          <p class="muted">Les cartes ratées reviendront demain dans ta révision du jour.</p>
          <div class="actions center"><a class="btn" href="#/${back === '/' ? '' : back}">Retour</a><a class="btn ghost" href="#/revision">Révision du jour</a></div></div>`;
        cur.key = null; return;
      }
      const c = queue[i]; flipped = false;
      const s = cardState(c);
      app.innerHTML = `<div class="runner">
        <div class="progress"><span>${Math.min(i + 1, queue.length)} / ${queue.length}</span>${bar(i / queue.length * 100)}<span class="muted">${esc(c.mod.court)}${s ? ' · boîte ' + s.b : ' · nouvelle'}</span></div>
        <button class="flash" id="flash" aria-live="polite">
          <span class="face recto"><span class="lab">Question</span><span class="txt">${c.r}</span><span class="hint">Touche pour voir la réponse</span></span>
          <span class="face verso"><span class="lab">Réponse</span><span class="txt">${c.v}</span></span>
        </button>
        <div class="grade" id="grade" hidden>
          <button class="btn ko" id="g-ko">À revoir <kbd>1</kbd></button>
          <button class="btn ok" id="g-ok">Je savais <kbd>2</kbd></button>
        </div>
        <p class="muted center small" id="kb">Espace : retourner</p>
      </div>`;
      $('#flash').addEventListener('click', flip);
      $('#g-ko').addEventListener('click', () => grade(false));
      $('#g-ok').addEventListener('click', () => grade(true));
    }
    function flip() {
      flipped = !flipped;
      $('#flash').classList.toggle('flipped', flipped);
      if (flipped) $('#grade').hidden = false;
    }
    function grade(ok) {
      const c = queue[i];
      if (c._seen === undefined) { done++; if (ok) okN++; }
      c._seen = true;
      cardGrade(c, ok);
      if (!ok) { const pos = Math.min(queue.length, i + 4); queue.splice(pos, 0, c); }
      i++; render();
    }
    cur.key = (e) => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!flipped) flip(); else grade(true); }
      else if (flipped && e.key === '1') grade(false);
      else if (flipped && e.key === '2') grade(true);
    };
    cur.dispose = () => queue.forEach((c) => delete c._seen);
    render();
    void total0;
  }
  function viewCardList(m) {
    setTop(m.titre, 'm/' + m.id + '/cartes-tab'); setNav('home');
    const groups = [];
    const byF = {};
    m.cartes.forEach((c) => { const k = c.f || '_'; (byF[k] = byF[k] || []).push(c); });
    m.fiches.forEach((f) => byF[f.id] && groups.push([f.titre, byF[f.id]]));
    if (byF._) groups.push(['Divers', byF._]);
    app.innerHTML = `<article class="fiche"><p class="eyebrow">${esc(m.court)} · mémo</p><h1>Toutes les cartes</h1>
      <p class="muted">Cache les réponses avec le bouton, puis touche une ligne pour la voir.</p>
      <div class="actions"><button class="btn ghost" id="hide">Cacher les réponses</button></div>
      ${groups.map(([t, list]) => `<h2 class="lst-h">${esc(t)}</h2><dl class="memo">${list.map((c) => `<div class="mi"><dt>${c.r}</dt><dd>${c.v}</dd></div>`).join('')}</dl>`).join('')}
    </article>`;
    const art = $('.fiche');
    $('#hide').addEventListener('click', (e) => { const on = art.classList.toggle('masque'); e.target.textContent = on ? 'Montrer les réponses' : 'Cacher les réponses'; $$('.mi').forEach((x) => x.classList.remove('vu')); });
    $$('.mi').forEach((x) => x.addEventListener('click', () => x.classList.toggle('vu')));
  }

  // ================= QCM =================
  // Une série mélange : au plus 30 % d'anciennes erreurs, puis des questions jamais vues,
  // puis les plus anciennes réussies. Les questions vues dans la dernière demi-heure passent en dernier.
  function pickQuestions(list, n) {
    const now = Date.now(), RECENT = 30 * 60e3;
    const st = (q) => S.qcm[q.uid];
    const recent = (q) => { const s = st(q); return !!s && now - (s.t || 0) < RECENT; };
    const fresh = list.filter((q) => !recent(q));
    const errs = U.shuffle(fresh.filter((q) => st(q) && st(q).last === 0));
    const neu = U.shuffle(fresh.filter((q) => !st(q)));
    const old = fresh.filter((q) => st(q) && st(q).last === 1).sort((a, b) => (st(a).t || 0) - (st(b).t || 0));
    const out = [];
    const take = (arr, k) => { for (const q of arr) { if (out.length >= n || k <= 0) break; if (!out.includes(q)) { out.push(q); k--; } } };
    take(errs, Math.ceil(n * 0.3));
    take(neu, n);
    take(old, n);
    take(errs, n);
    take(U.shuffle(list.filter(recent)), n);
    return out;
  }
  function viewQcmModule(m, arg) {
    setTop(m.titre, 'm/' + m.id + '/qcm-tab'); setNav('home');
    let list;
    if (arg === 'erreurs') list = U.shuffle(m.qcm.filter((q) => (S.qcm[q.uid] || {}).last === 0));
    else if (arg === 'tout') list = U.shuffle(m.qcm);
    else if (arg && arg.startsWith('fichetout-')) list = U.shuffle(m.qcm.filter((q) => q.f === arg.slice(10)));
    else if (arg && arg.startsWith('fiche-')) list = U.shuffle(pickQuestions(m.qcm.filter((q) => q.f === arg.slice(6)), 10));
    else list = U.shuffle(pickQuestions(m.qcm, +arg || 10));
    runQcm(list, { back: 'm/' + m.id + '/qcm-tab', again: 'm/' + m.id + '/qcm/' + (arg || '10') });
  }
  function prepare(q) {
    const order = U.shuffle(q.r.map((t, k) => ({ t, k })));
    return { q, order, correct: order.findIndex((o) => o.k === 0) };
  }
  function runQcm(list, opt) {
    if (!list.length) {
      app.innerHTML = `<div class="empty"><h2>Aucune question ici</h2><p><a class="btn" href="#/${opt.back === '/' ? '' : opt.back}">Retour</a></p></div>`;
      return;
    }
    const items = list.map(prepare);
    let i = 0, ok = 0, answered = false;
    const wrong = [];
    function render() {
      if (i >= items.length) return end();
      answered = false;
      const it = items[i], q = it.q;
      app.innerHTML = `<div class="runner">
        <div class="progress"><span>${i + 1} / ${items.length}</span>${bar(i / items.length * 100)}<span class="muted">${esc(q.mod.court)} · ${ok} juste${ok > 1 ? 's' : ''}</span></div>
        <div class="question">${q.svg ? `<div class="vis">${q.svg}</div>` : ''}<p class="qt">${q.q}</p></div>
        <div class="answers">${it.order.map((o, k) => `<button class="ans" data-k="${k}"><span class="letter">${'ABCDEF'[k]}</span><span>${o.t}</span></button>`).join('')}</div>
        <div id="fb" hidden></div>
      </div>`;
      $$('.ans').forEach((b) => b.addEventListener('click', () => answer(+b.dataset.k)));
    }
    function answer(k) {
      if (answered) return;
      answered = true;
      const it = items[i], q = it.q, good = k === it.correct;
      if (good) ok++; else wrong.push(it);
      if (q.uid) qGrade(q, good); else if (q.vid) calcGrade('v.' + q.vid, good);
      $$('.ans').forEach((b, j) => {
        b.disabled = true;
        if (j === it.correct) b.classList.add('ok');
        else if (j === k) b.classList.add('ko');
      });
      const fiche = q.f && q.mod && q.mod.fiches.find((f) => f.id === q.f);
      const fb = $('#fb');
      fb.hidden = false;
      fb.className = 'feedback ' + (good ? 'ok' : 'ko');
      fb.innerHTML = `<p class="verdict">${good ? 'Juste' : 'Raté'}</p>${q.e ? `<p>${q.e}</p>` : ''}
        ${fiche ? `<p class="small"><a href="#/m/${q.mod.id}/fiche/${fiche.id}">Revoir la fiche : ${esc(fiche.titre)}</a></p>` : ''}
        <button class="btn" id="next">${i + 1 < items.length ? 'Suivante' : 'Voir le résultat'} <kbd>Entrée</kbd></button>`;
      $('#next').addEventListener('click', () => { i++; render(); });
      $('#next').focus({ preventScroll: true });
      fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    function end() {
      cur.key = null;
      const n = items.length, note = Math.round(ok / n * 200) / 10;
      app.innerHTML = `<div class="result">
        <p class="eyebrow">Résultat</p>
        <p class="big">${ok} / ${n}</p>
        <p class="muted">soit ${U.fr(note)} / 20</p>
        <div class="actions center">
          ${opt.again ? `<a class="btn" href="#/${opt.again}" id="again">Nouvelle série</a>` : ''}
          <a class="btn ghost" href="#/${opt.back === '/' ? '' : opt.back}">Retour</a>
        </div>
        ${wrong.length ? `<h2 class="lst-h">À retenir (${wrong.length})</h2><ul class="review">${wrong.map((it) => `<li><p class="qt">${it.q.q}</p><p class="good">✓ ${it.q.r[0]}</p>${it.q.e ? `<p class="muted">${it.q.e}</p>` : ''}</li>`).join('')}</ul>` : '<p class="center">Aucune erreur. Bravo.</p>'}
      </div>`;
    }
    cur.key = (e) => {
      if (!answered && /^[1-6a-fA-F]$/.test(e.key)) {
        const k = /\d/.test(e.key) ? +e.key - 1 : 'abcdef'.indexOf(e.key.toLowerCase());
        if (k < items[i].order.length) answer(k);
      } else if (answered && e.key === 'Enter') { e.preventDefault(); i++; render(); }
    };
    render();
  }

  // ================= VISUEL (feux, marques, bouées…) =================
  function viewVisuel(m, vid) {
    const g = C.visuels[vid];
    if (!g) return go('m/' + m.id);
    setTop(g.titre, 'm/' + m.id + '/visuel-tab'); setNav('home');
    const list = [];
    for (let k = 0; k < (g.serie || 10); k++) {
      const x = g.make();
      list.push({ q: x.q, r: x.r, e: x.e || '', svg: x.svg, vid, mod: m });
    }
    runQcm(list, { back: 'm/' + m.id + '/visuel-tab', again: 'm/' + m.id + '/visuel/' + vid });
  }

  // ================= ATELIER RAPPORT DE MER =================
  function viewAtelier(m, sid) {
    const A = m.atelier, s = A.sujets.find((x) => x.id === sid);
    if (!s) return go('m/' + m.id + '/atelier');
    setTop('Atelier rapport de mer', 'm/' + m.id + '/atelier'); setNav('home');
    const st = S.rm[sid] || (S.rm[sid] = { txt: '', ck: [], t: 0 });
    const crit = A.criteres.filter((c) => !c.k || s.types.includes(c.k));
    const groups = [...new Set(crit.map((c) => c.g))];
    const mm = (sec) => String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0');
    app.innerHTML = `<article class="fiche atelier">
      <p class="eyebrow">${esc(m.court)} · ${esc(s.session)}</p>
      <h1>${esc(s.titre)}</h1>
      <div class="sujet"><p class="lst-h">Le sujet</p><p>${esc(s.texte)}</p></div>
      <div class="chrono"><span class="mono" id="clk">${mm(st.t || 0)}</span><span class="muted small">Repère : ${A.duree} min, brouillon compris</span><button class="btn ghost" type="button" id="go">${st.t ? 'Reprendre' : 'Démarrer'}</button></div>
      <details class="aide"><summary>Rappel du plan</summary>
        <ol><li><b>Introduction</b> : « Je soussigné… », brevet, navire (nom, type, jauge, armement, immatriculation), armateur, appareillage (port, date, heure), destination, personnes à bord, bon état de navigabilité, « déclare ce qui suit : ».</li>
        <li><b>Récit</b> : météo, route, veille ; puis l'événement : heure et position, ce qui s'est passé, chaque décision avec son heure et sa raison, alerte CROSS, passagers, blessés, avaries, arrivée.</li>
        <li><b>Conclusion</b> : réserves adaptées, « sincère et véritable », droit de l'amplifier, lieu, date, signature.</li></ol>
      </details>
      <label class="lbl" for="rm">Ton rapport</label>
      <textarea id="rm" rows="16" spellcheck="true" placeholder="Je soussigné…">${esc(st.txt || '')}</textarea>
      <p class="muted small" id="wc"></p>
      <div class="actions"><button class="btn" type="button" id="corr">Corriger avec la grille</button><button class="btn ghost" type="button" id="voir">Voir le corrigé type</button></div>
      <section id="grille" class="grille" hidden>
        <h2>Grille de correction</h2>
        <p class="muted small">Coche ce que ta copie contient vraiment. « repéré » veut dire que le mot clé est présent : vérifie que l'idée y est.</p>
        ${groups.map((g) => `<p class="lst-h">${esc(g)}</p>${crit.map((c, i) => c.g !== g ? '' : `<label class="ck"><input type="checkbox" data-i="${i}" ${(st.ck || []).includes(i) ? 'checked' : ''}><span>${esc(c.t)} <em class="found" data-f="${i}" hidden>repéré</em></span></label>`).join('')}`).join('')}
        <div class="note"><b id="pts">0</b><span id="pts-l"></span></div>
        <div class="actions"><button class="btn" type="button" id="save">Enregistrer ma note</button></div>
      </section>
      <section id="model" hidden><h2>Corrigé type</h2><p class="muted small">Un exemple parmi d'autres : les heures et détails ajoutés sont libres, l'important est la structure et les mesures.</p><div class="fiche-body corrige">${s.corrige}</div></section>
    </article>`;
    const ta = $('#rm');
    const words = () => { const n = (ta.value.trim().match(/\S+/g) || []).length; $('#wc').textContent = n ? n + ' mots' : ''; };
    words();
    ta.addEventListener('input', () => { st.txt = ta.value; S.rm[sid] = st; save(); words(); });
    // chrono
    let tm = null, t0 = 0, base = st.t || 0;
    const tick = () => { st.t = base + Math.floor((Date.now() - t0) / 1000); $('#clk').textContent = mm(st.t); };
    $('#go').addEventListener('click', () => {
      if (tm) { clearInterval(tm); tm = null; tick(); base = st.t; save(); $('#go').textContent = 'Reprendre'; return; }
      t0 = Date.now(); tm = setInterval(tick, 1000); $('#go').textContent = 'Pause';
    });
    cur.dispose = () => { if (tm) { clearInterval(tm); tick(); } save(); };
    // grille
    const norm = (x) => x.toLowerCase().replace(/’/g, "'");
    function score() {
      const boxes = $$('#grille input[type=checkbox]');
      const n = boxes.filter((b) => b.checked).length;
      $('#pts').textContent = U.fr(Math.round(n / boxes.length * 40) / 2) + '/20';
      $('#pts-l').textContent = ' · ' + n + ' point' + (n > 1 ? 's' : '') + ' sur ' + boxes.length;
      return n / boxes.length;
    }
    $('#corr').addEventListener('click', () => {
      const txt = norm(ta.value);
      crit.forEach((c, i) => { const hit = c.m.some((p) => { try { return new RegExp(p, 'i').test(txt); } catch (e) { return txt.includes(p); } }); const el = $(`[data-f="${i}"]`); if (el) el.hidden = !hit; });
      $('#grille').hidden = false; score();
      $('#grille').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    $('#grille').addEventListener('change', () => { st.ck = $$('#grille input[type=checkbox]').filter((b) => b.checked).map((b) => +b.dataset.i); save(); score(); });
    $('#save').addEventListener('click', () => { st.score = Math.round(score() * 40) / 2; st.date = today(); S.rm[sid] = st; activity(); toast('Note enregistrée : ' + U.fr(st.score) + '/20'); });
    $('#voir').addEventListener('click', () => { const md = $('#model'); md.hidden = !md.hidden; $('#voir').textContent = md.hidden ? 'Voir le corrigé type' : 'Cacher le corrigé'; if (!md.hidden) md.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
  }

  // ================= CALCULS =================
  function viewCalc(m, gid) {
    const g = C.gens[gid];
    if (!g) return go('m/' + m.id + '/calc-tab');
    setTop(g.titre, 'm/' + m.id + '/calc-tab'); setNav('home');
    let ex, done = false;
    function next() {
      ex = g.make();
      done = false;
      const fields = ex.champs || [ex];
      app.innerHTML = `<div class="runner calc">
        <p class="eyebrow">${esc(m.court)} · exercice</p>
        <div class="question">${ex.svg ? `<div class="vis">${ex.svg}</div>` : ''}<div class="qt">${ex.q}</div></div>
        <form id="cf" class="cform" autocomplete="off">
          ${fields.map((f, k) => f.type === 'choix'
            ? `<fieldset class="fld"><legend>${f.label || 'Ta réponse'}</legend><div class="chips">${f.options.map((o) => `<label class="chip"><input type="radio" name="f${k}" value="${esc(o)}"><span>${esc(o)}</span></label>`).join('')}</div></fieldset>`
            : `<label class="fld" for="f${k}"><span>${f.label || 'Ta réponse'}</span><span class="inp"><input id="f${k}" name="f${k}" inputmode="${f.type === 'heure' ? 'text' : 'decimal'}" placeholder="${f.type === 'heure' ? 'ex. 14h35' : f.type === 'angle' ? 'ex. 045' : ''}"><i>${f.type === 'angle' ? '°' : esc(f.unit || '')}</i></span></label>`).join('')}
          <div class="actions"><button class="btn" type="submit">Vérifier</button><button class="btn ghost" type="button" id="sol">Voir la correction</button></div>
        </form>
        <div id="fb" hidden></div>
      </div>`;
      $('#cf').addEventListener('submit', (e) => { e.preventDefault(); check(false); });
      $('#sol').addEventListener('click', () => check(true));
      const first = $('#f0'); if (first && window.matchMedia('(pointer:fine)').matches) first.focus();
    }
    function check(giveUp) {
      if (done) return;
      const fields = ex.champs || [ex];
      const res = fields.map((f, k) => {
        let v;
        if (f.type === 'choix') { const r = $(`input[name="f${k}"]:checked`); v = r ? r.value : null; }
        else v = $('#f' + k).value;
        return giveUp ? false : (v == null || v === '' ? null : U.check(f, v));
      });
      if (!giveUp && res.some((r) => r === null)) { toast('Remplis toutes les cases (nombre ou heure lisible).'); return; }
      done = true;
      const good = !giveUp && res.every(Boolean);
      calcGrade(g.id, good);
      fields.forEach((f, k) => { const el = $('#f' + k); if (el) el.closest('.inp').classList.add(res[k] ? 'ok' : 'ko'); });
      const fb = $('#fb');
      fb.hidden = false;
      fb.className = 'feedback ' + (good ? 'ok' : 'ko');
      fb.innerHTML = `<p class="verdict">${good ? 'Juste' : giveUp ? 'Correction' : 'Pas tout à fait'}</p>
        <p>Réponse attendue : ${fields.map((f) => `<b class="mono">${(f.label ? f.label.replace(/\s*:?\s*$/, '') + ' = ' : '') + U.show(f)}</b>`).join(' · ')}</p>
        <div class="sol">${ex.sol || ''}</div>
        <button class="btn" id="next">Exercice suivant <kbd>Entrée</kbd></button>`;
      $('#next').addEventListener('click', next);
      fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    cur.key = (e) => { if (done && e.key === 'Enter') { e.preventDefault(); next(); } };
    next();
  }

  // ================= EXAMEN BLANC =================
  function viewExamSetup(pre) {
    setTop('Examen blanc', pre && byId[pre] ? 'm/' + pre + '/controle' : '/'); setNav('exam');
    const avail = MODS.filter((m) => m.qcm.length);
    if (!avail.length) { app.innerHTML = '<div class="empty"><p>Pas encore de questions.</p></div>'; return; }
    const checked = (m) => (pre ? m.id === pre : false);
    const hist = S.exams.slice(-5).reverse();
    app.innerHTML = `<article class="fiche">
      <p class="eyebrow">Contrôle blanc</p><h1>Prépare ton examen</h1>
      <p class="muted">Questions au hasard, pas de correction avant la fin, note sur 20. Une minute par question.</p>
      <form id="ef">
        ${C.blocs.map((b) => { const ms = avail.filter((m) => m.bloc === b.id); if (!ms.length) return '';
          return `<fieldset class="pick"><legend>${esc(b.sous)} · ${esc(b.titre)} <button type="button" class="link" data-all="${b.id}">tout cocher</button></legend>
          ${ms.map((m) => `<label class="ck"><input type="checkbox" name="m" value="${m.id}" data-b="${b.id}" ${checked(m) ? 'checked' : ''}><span>${esc(m.titre)} <span class="muted">(${m.qcm.length})</span></span></label>`).join('')}</fieldset>`; }).join('')}
        <fieldset class="pick"><legend>Nombre de questions</legend><div class="chips">
          ${[10, 20, 30, 40].map((n) => `<label class="chip"><input type="radio" name="n" value="${n}" ${n === 20 ? 'checked' : ''}><span>${n}</span></label>`).join('')}</div></fieldset>
        <label class="ck"><input type="checkbox" id="timer" checked><span>Chronomètre (1 min par question)</span></label>
        <div class="actions"><button class="btn" type="submit">Commencer</button></div>
      </form>
      ${hist.length ? `<h2 class="lst-h">Derniers examens</h2><ul class="hist">${hist.map((x) => `<li><span>${new Date(x.d).toLocaleDateString('fr-FR')}</span><span>${esc(x.mods.map((id) => (byId[id] || {}).court || id).join(', '))}</span><b class="mono">${U.fr(x.note)}/20</b></li>`).join('')}</ul>` : ''}
    </article>`;
    $$('[data-all]').forEach((b) => b.addEventListener('click', () => {
      const boxes = $$(`input[data-b="${b.dataset.all}"]`);
      const all = boxes.every((x) => x.checked);
      boxes.forEach((x) => (x.checked = !all));
    }));
    $('#ef').addEventListener('submit', (e) => {
      e.preventDefault();
      const ids = $$('input[name="m"]:checked').map((x) => x.value);
      if (!ids.length) { toast('Coche au moins une matière.'); return; }
      const n = +$('input[name="n"]:checked').value;
      const pool = ids.flatMap((id) => byId[id].qcm);
      const list = U.shuffle(pool).slice(0, n);
      runExam(list, ids, $('#timer').checked, pre);
    });
  }
  function runExam(list, ids, timed, pre) {
    const items = list.map(prepare);
    const answers = new Array(items.length).fill(-1);
    let i = 0;
    const limit = items.length * 60;
    const t0 = Date.now();
    let tick = null;
    setTop('Examen en cours', null);
    function left() { return Math.max(0, limit - Math.floor((Date.now() - t0) / 1000)); }
    function fmt(s) { return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
    function render() {
      const it = items[i];
      app.innerHTML = `<div class="runner exam">
        <div class="progress"><span>${i + 1} / ${items.length}</span>${bar((i) / items.length * 100)}${timed ? `<span class="clock mono" id="clock">${fmt(left())}</span>` : ''}</div>
        <div class="question"><p class="qt">${it.q.q}</p></div>
        <div class="answers">${it.order.map((o, k) => `<button class="ans ${answers[i] === k ? 'sel' : ''}" data-k="${k}"><span class="letter">${'ABCDEF'[k]}</span><span>${o.t}</span></button>`).join('')}</div>
        <div class="actions spread">
          <button class="btn ghost" id="prev" ${i ? '' : 'disabled'}>Précédente</button>
          ${i + 1 < items.length ? '<button class="btn" id="nx">Suivante</button>' : '<button class="btn" id="fin">Terminer</button>'}
        </div>
        <div class="dots">${items.map((_, k) => `<button class="dot ${answers[k] >= 0 ? 'done' : ''} ${k === i ? 'cur' : ''}" data-go="${k}" aria-label="Question ${k + 1}"></button>`).join('')}</div>
      </div>`;
      $$('.ans').forEach((b) => b.addEventListener('click', () => { answers[i] = +b.dataset.k; $$('.ans').forEach((x) => x.classList.toggle('sel', x === b)); $$('.dot')[i].classList.add('done'); }));
      const p = $('#prev'); if (p) p.addEventListener('click', () => { i--; render(); });
      const n = $('#nx'); if (n) n.addEventListener('click', () => { i++; render(); });
      const f = $('#fin'); if (f) f.addEventListener('click', confirmEnd);
      $$('.dot').forEach((d) => d.addEventListener('click', () => { i = +d.dataset.go; render(); }));
    }
    function confirmEnd() {
      const blank = answers.filter((a) => a < 0).length;
      if (!blank) return finish();
      const box = document.createElement('div');
      box.className = 'feedback ko';
      box.innerHTML = `<p>${plural(blank, 'question')} sans réponse. Terminer quand même ?</p><div class="actions"><button class="btn" id="yes">Terminer</button><button class="btn ghost" id="no">Continuer</button></div>`;
      $('.runner').appendChild(box);
      $('#yes').addEventListener('click', finish);
      $('#no').addEventListener('click', () => box.remove());
      box.scrollIntoView({ block: 'nearest' });
    }
    function finish() {
      clearInterval(tick); tick = null;
      let ok = 0;
      const per = {};
      items.forEach((it, k) => {
        const good = answers[k] === it.correct;
        if (good) ok++;
        qGrade(it.q, good);
        const p = (per[it.q.mod.id] = per[it.q.mod.id] || [0, 0]);
        p[1]++; if (good) p[0]++;
      });
      const note = Math.round(ok / items.length * 200) / 10;
      S.exams.push({ d: Date.now(), mods: ids, note, n: items.length });
      save();
      setTop('Résultat', pre ? 'm/' + pre + '/controle' : '/');
      app.innerHTML = `<div class="result">
        <p class="eyebrow">Examen blanc</p>
        <p class="big">${U.fr(note)} <small>/ 20</small></p>
        <p class="muted">${ok} bonnes réponses sur ${items.length}${timed ? ' · ' + fmt(Math.min(limit, Math.floor((Date.now() - t0) / 1000))) : ''}</p>
        ${Object.keys(per).length > 1 ? `<ul class="per">${Object.entries(per).map(([id, [a, b]]) => `<li><span>${esc(byId[id].titre)}</span>${bar(a / b * 100)}<b class="mono">${a}/${b}</b></li>`).join('')}</ul>` : ''}
        <div class="actions center"><a class="btn" href="#/examen${pre ? '/' + pre : ''}" id="again">Nouvel examen</a><a class="btn ghost" href="#/faibles">Points faibles</a></div>
        <h2 class="lst-h">Correction</h2>
        <ol class="review">${items.map((it, k) => { const good = answers[k] === it.correct; return `<li class="${good ? 'g' : 'b'}"><p class="qt">${it.q.q}</p>
          ${good ? `<p class="good">✓ ${it.q.r[0]}</p>` : `<p class="bad">✗ ${answers[k] >= 0 ? it.order[answers[k]].t : 'sans réponse'}</p><p class="good">✓ ${it.q.r[0]}</p>${it.q.e ? `<p class="muted">${it.q.e}</p>` : ''}`}</li>`; }).join('')}</ol>
      </div>`;
      window.scrollTo(0, 0);
    }
    if (timed) tick = setInterval(() => { const c = $('#clock'); const l = left(); if (c) { c.textContent = fmt(l); c.classList.toggle('warn', l < 60); } if (!l) finish(); }, 1000);
    cur.dispose = () => clearInterval(tick);
    cur.key = (e) => {
      if (!/^[1-6]$/.test(e.key)) return;
      const k = +e.key - 1; const b = $$('.ans')[k]; if (b) b.click();
    };
    render();
  }

  // ================= POINTS FAIBLES =================
  function viewFaibles() {
    setTop('Points faibles', '/'); setNav('faibles');
    const qs = allQ.filter((q) => (S.qcm[q.uid] || {}).last === 0);
    const cs = allC.filter((c) => { const s = cardState(c); return s && s.l > 0 && s.b <= 2; });
    if (!qs.length && !cs.length) {
      app.innerHTML = `<div class="empty"><h2>Aucun point faible pour l'instant</h2><p>Les questions ratées et les cartes difficiles s'afficheront ici.</p><p><a class="btn" href="#/">Choisir une matière</a></p></div>`;
      return;
    }
    const byMod = {};
    qs.forEach((q) => (byMod[q.mod.id] = byMod[q.mod.id] || { q: [], c: [] }).q.push(q));
    cs.forEach((c) => (byMod[c.mod.id] = byMod[c.mod.id] || { q: [], c: [] }).c.push(c));
    app.innerHTML = `<article class="fiche"><p class="eyebrow">À retravailler</p><h1>Points faibles</h1>
      <div class="actions">${qs.length ? `<button class="btn" id="allq">Refaire les ${qs.length} questions ratées</button>` : ''}${cs.length ? `<button class="btn ghost" id="allc">Revoir les ${cs.length} cartes difficiles</button>` : ''}</div>
      ${Object.entries(byMod).map(([id, o]) => `<section class="weak"><h2 class="lst-h">${esc(byId[id].titre)}</h2>
        ${o.q.length ? `<ul class="review">${o.q.map((q) => `<li><p class="qt">${q.q}</p><details><summary>Voir la réponse</summary><p class="good">✓ ${q.r[0]}</p>${q.e ? `<p class="muted">${q.e}</p>` : ''}</details></li>`).join('')}</ul>` : ''}
        ${o.c.length ? `<dl class="memo">${o.c.map((c) => `<div class="mi vu"><dt>${c.r}</dt><dd>${c.v}</dd></div>`).join('')}</dl>` : ''}
      </section>`).join('')}
    </article>`;
    const a = $('#allq'); if (a) a.addEventListener('click', () => { setTop('Points faibles', 'faibles'); runQcm(U.shuffle(qs), { back: 'faibles' }); });
    const b = $('#allc'); if (b) b.addEventListener('click', () => { setTop('Points faibles', 'faibles'); runCards(U.shuffle(cs), 'faibles'); });
  }


  // ================= PSEUDO ET ÉQUIPAGE =================
  function resume(st = S, me = ME) {
    const mods = {}; let sum = 0, n = 0;
    for (const m of MODS) { if (!hasContent(m)) continue; const p = mastery(m, st) || 0; mods[m.id] = p; sum += p; n++; }
    const h28 = [];
    for (let k = 27; k >= 0; k--) { const d = new Date(); d.setDate(d.getDate() - k); h28.push(st.days[dayStr(d)] || 0); }
    const ex = st.exams || [];
    return {
      pseudo: me ? me.pseudo : '', maj: Date.now(), pct: n ? Math.round(sum / n) : 0,
      qOk: Object.values(st.qcm).filter((x) => x.last === 1).length, qVus: Object.keys(st.qcm).length,
      cartes: Object.values(st.cards).filter((x) => (x.b || 0) >= 3).length, serie: streak(st), h28, mods,
      ex: ex.length ? { n: ex.length, best: Math.max(...ex.map((e) => e.note)), last: ex[ex.length - 1].note } : null
    };
  }
  function updateMe() {
    const a = $('#me'); if (!a) return;
    const dot = !Cloud.on() ? '' : `<i class="sdot ${Cloud.state === 'err' ? 'err' : Cloud.state === 'ok' ? 'ok' : ''}" aria-hidden="true"></i>`;
    a.innerHTML = ME ? `<span class="av">${esc(ME.pseudo.slice(0, 1).toUpperCase())}</span><span class="me-n">${esc(ME.pseudo)}</span>${dot}` : `<span class="me-n">Pseudo</span>`;
    a.setAttribute('aria-label', ME ? 'Mon pseudo : ' + ME.pseudo : 'Choisir un pseudo');
  }
  function switchTo(me) {
    clearTimeout(saveTimer); ls.set(storeKey(), JSON.stringify(S));
    if (Cloud.on() && Cloud.dirty) Cloud.push();
    clearTimeout(Cloud.timer); Cloud.timer = null; Cloud.dirty = false; Cloud.state = 'off';
    ME = me;
    if (me) ls.set('c200.session', JSON.stringify(me)); else ls.del('c200.session');
    S = loadLocal(); applyTheme(); updateMe();
  }
  function ago(t) {
    if (!t) return 'jamais';
    const mn = Math.round((Date.now() - t) / 60000);
    if (mn < 2) return "à l'instant";
    if (mn < 60) return 'il y a ' + mn + ' min';
    const h = Math.round(mn / 60); if (h < 24) return 'il y a ' + h + ' h';
    const j = Math.round(h / 24); return j === 1 ? 'hier' : 'il y a ' + j + ' jours';
  }
  // liste des joueurs : base partagée si possible, sinon ceux de cet appareil
  async function listPlayers() {
    let shared = null;
    if (P.enabled()) {
      try { shared = (await P.api('joueurs')) || {}; for (const k in shared) cacheAccount(k, { pseudo: shared[k].pseudo, h: shared[k].h }); }
      catch (e) { shared = null; }
    }
    if (shared) return { shared: true, list: Object.entries(shared).map(([key, v]) => ({ key, pseudo: v.pseudo || key, r: v.resume || null })) };
    const acc = localAccounts();
    return { shared: false, offline: P.enabled(), list: Object.entries(acc).map(([key, v]) => {
      let st = null; try { const t = ls.get('c200.p.' + key); st = t ? normalize(JSON.parse(t)) : null; } catch (e) { st = null; }
      return { key, pseudo: v.pseudo || key, r: st ? resume(st, { pseudo: v.pseudo || key }) : null, local: true };
    }) };
  }
  async function login(key, pass) {
    const h = P.hash(key, pass);
    let acc = null;
    if (P.enabled()) { try { acc = await P.api('joueurs/' + key); } catch (e) { acc = null; } }
    if (!acc) acc = localAccounts()[key];
    if (!acc) return 'Pseudo inconnu.';
    if (acc.h !== h) return 'Mot de passe incorrect.';
    cacheAccount(key, { pseudo: acc.pseudo, h: acc.h });
    switchTo({ key, pseudo: acc.pseudo || key });
    if (Cloud.on()) await Cloud.sync();
    return null;
  }
  async function createAccount(pseudo, pass, keep) {
    pseudo = String(pseudo || '').trim().replace(/\s+/g, ' ').slice(0, 20);
    const key = P.keyOf(pseudo);
    if (key.length < 2) return 'Choisis un pseudo d\'au moins 2 lettres ou chiffres.';
    if (String(pass).length < 4) return 'Le mot de passe doit faire au moins 4 caractères.';
    const acc = { pseudo, h: P.hash(key, pass), cree: Date.now() };
    if (P.enabled()) {
      let exist;
      try { exist = await P.api('joueurs/' + key); } catch (e) { return 'Pas de connexion : impossible de réserver le pseudo pour l\'instant.'; }
      if (exist) return 'Ce pseudo est déjà pris.';
      try { await P.api('joueurs/' + key, 'PUT', acc); } catch (e) { return 'La base n\'a pas répondu. Réessaie dans un moment.'; }
    } else if (localAccounts()[key]) return 'Ce pseudo existe déjà sur cet appareil.';
    cacheAccount(key, { pseudo, h: acc.h });
    const old = keep ? loadLocal(null) : null;
    switchTo({ key, pseudo });
    if (old) { S = normalize(P.merge(S, old)); }
    ls.set(storeKey(), JSON.stringify(S));
    if (Cloud.on()) await Cloud.push();
    return null;
  }
  const hasLegacy = () => { const t = ls.get(LEGACY); return !!t && t.length > 120; };

  function viewCompte() {
    setTop('Mon pseudo', '/'); setNav('equipage');
    const note = P.enabled() ? '' : `<div class="feedback"><p class="small">Le partage n'est pas encore branché : les pseudos et leur progression restent sur cet appareil. Pour que l'équipage voie tout depuis n'importe quel téléphone, il faut régler la base partagée (voir le fichier README).</p></div>`;
    if (ME) {
      app.innerHTML = `<article class="fiche">
        <p class="eyebrow">Connecté</p><h1>${esc(ME.pseudo)}</h1>
        ${note}
        ${P.enabled() ? `<p class="muted">Progression envoyée ${ago(Cloud.last)}${Cloud.state === 'err' ? ' · <b class="warn">dernier envoi raté (pas de réseau ?)</b>' : ''}.</p>` : ''}
        <div class="actions">
          ${P.enabled() ? '<button class="btn" id="sync">Synchroniser maintenant</button>' : ''}
          <a class="btn ghost" href="#/equipage">Voir l'équipage</a>
        </div>
        <h2 class="lst-h">Changer de pseudo</h2>
        <p class="muted">Ta progression reste enregistrée sous ton pseudo. Il faudra ton mot de passe pour revenir.</p>
        <div class="actions"><button class="btn ghost" id="out">Se déconnecter</button></div>
        <h2 class="lst-h">Supprimer mon pseudo</h2>
        <div class="actions"><button class="btn danger" id="del">Supprimer ${esc(ME.pseudo)}</button></div>
        <div id="conf"></div>
      </article>`;
      const sy = $('#sync');
      if (sy) sy.addEventListener('click', async () => { sy.disabled = true; sy.textContent = 'Synchronisation…'; const ok = await Cloud.sync(); toast(ok ? 'Progression à jour' : 'Pas de réseau : réessaie plus tard'); viewCompte(); });
      $('#out').addEventListener('click', () => { const n = ME.pseudo; switchTo(null); toast('À bientôt ' + n); go('compte'); });
      $('#del').addEventListener('click', () => {
        $('#conf').innerHTML = `<div class="feedback ko"><p>Supprimer le pseudo <b>${esc(ME.pseudo)}</b> et toute sa progression ?</p>
          <label class="fld" for="dp"><span>Mot de passe</span><input id="dp" type="password" autocomplete="current-password"></label>
          <div class="actions"><button class="btn danger" id="y">Supprimer</button><button class="btn ghost" id="n">Annuler</button></div></div>`;
        $('#n').addEventListener('click', () => ($('#conf').innerHTML = ''));
        $('#y').addEventListener('click', async () => {
          const acc = localAccounts()[ME.key];
          if (!acc || acc.h !== P.hash(ME.key, $('#dp').value)) { toast('Mot de passe incorrect'); return; }
          const key = ME.key;
          if (P.enabled()) {
            try { await P.api('progres/' + key, 'DELETE'); await P.api('joueurs/' + key, 'DELETE'); }
            catch (e) { toast('Pas de réseau : suppression impossible'); return; }
          }
          switchTo(null);
          ls.del('c200.p.' + key);
          const a = localAccounts(); delete a[key]; ls.set('c200.comptes', JSON.stringify(a));
          toast('Pseudo supprimé'); go('compte');
        });
      });
      return;
    }
    app.innerHTML = `<article class="fiche">
      <p class="eyebrow">Équipage</p><h1>Choisis ton pseudo</h1>
      <p class="muted">Chacun a son pseudo et son mot de passe. Ta progression est gardée sous ton pseudo, et tout l'équipage peut la voir.</p>
      ${note}
      <h2 class="lst-h">J'ai déjà un pseudo</h2>
      <div id="who"><p class="muted">Chargement…</p></div>
      <div id="log"></div>
      <h2 class="lst-h">Créer un pseudo</h2>
      <form id="new" class="settings" autocomplete="off">
        <label class="fld" for="np"><span>Pseudo</span><input id="np" maxlength="20" autocomplete="username" required></label>
        <label class="fld" for="nw"><span>Mot de passe (4 caractères au moins)</span><input id="nw" type="password" autocomplete="new-password" required></label>
        ${hasLegacy() ? `<label class="chk-l"><input type="checkbox" id="keep" checked> Garder la progression déjà faite sur cet appareil</label>` : ''}
        <div class="actions"><button class="btn" type="submit">Créer</button></div>
        <p class="ko-t" id="nerr" role="alert"></p>
      </form>
      <p class="muted small">Ce n'est pas une sécurité de banque : choisis un mot de passe que tu n'utilises nulle part ailleurs.</p>
    </article>`;
    $('#new').addEventListener('submit', async (e) => {
      e.preventDefault();
      const b = e.submitter || $('#new button'); b.disabled = true;
      const err = await createAccount($('#np').value, $('#nw').value, $('#keep') ? $('#keep').checked : false);
      b.disabled = false;
      if (err) { $('#nerr').textContent = err; return; }
      toast('Bienvenue à bord, ' + ME.pseudo); go('');
    });
    listPlayers().then(({ list, offline }) => {
      const box = $('#who'); if (!box) return;
      if (!list.length) { box.innerHTML = `<p class="muted">${offline ? 'Pas de réseau : impossible de charger les pseudos.' : 'Aucun pseudo pour l\'instant. Crée le premier.'}</p>`; return; }
      box.innerHTML = `<div class="chips">${list.sort((a, b) => a.pseudo.localeCompare(b.pseudo)).map((x) => `<button class="chip-b" data-k="${esc(x.key)}">${esc(x.pseudo)}</button>`).join('')}</div>`;
      $$('.chip-b', box).forEach((b) => b.addEventListener('click', () => {
        $$('.chip-b', box).forEach((o) => o.classList.toggle('on', o === b));
        $('#log').innerHTML = `<form id="lf" class="settings">
          <label class="fld" for="lp"><span>Mot de passe de ${esc(b.textContent)}</span><input id="lp" type="password" autocomplete="current-password" required></label>
          <div class="actions"><button class="btn" type="submit">Monter à bord</button></div>
          <p class="ko-t" id="lerr" role="alert"></p></form>`;
        $('#lp').focus();
        $('#lf').addEventListener('submit', async (e) => {
          e.preventDefault();
          const err = await login(b.dataset.k, $('#lp').value);
          if (err) { $('#lerr').textContent = err; return; }
          toast('Bon quart, ' + ME.pseudo); go('');
        });
      }));
    });
  }

  function viewEquipage() {
    setTop('Équipage', '/'); setNav('equipage');
    app.innerHTML = `<article class="fiche"><p class="eyebrow">Qui en est où</p><h1>Équipage</h1><div id="eq"><p class="muted">Chargement…</p></div></article>`;
    if (ME && Cloud.on() && Cloud.dirty) Cloud.push();
    listPlayers().then(({ list, shared, offline }) => {
      const box = $('#eq'); if (!box) return;
      if (ME && !list.some((x) => x.key === ME.key)) list.push({ key: ME.key, pseudo: ME.pseudo, r: resume() });
      if (ME) { const mine = list.find((x) => x.key === ME.key); if (mine) mine.r = resume(); }
      const rows = list.filter((x) => x.r).sort((a, b) => (b.r.pct - a.r.pct) || (b.r.qOk - a.r.qOk));
      const head = shared ? '' : `<p class="muted small">${offline ? 'Pas de réseau : seuls les pseudos de cet appareil sont affichés.' : 'Partage pas encore branché : seuls les pseudos de cet appareil sont affichés.'}</p>`;
      if (!rows.length) { box.innerHTML = head + `<p class="muted">Personne n'a encore de progression. <a href="#/compte">Crée ton pseudo</a>.</p>`; return; }
      box.innerHTML = head + `<ol class="crew">${rows.map((x, i) => `<li><a href="#/equipage/${encodeURIComponent(x.key)}" class="${ME && x.key === ME.key ? 'me-row' : ''}">
          <span class="rk">${i + 1}</span>
          <span class="cw-main"><b>${esc(x.pseudo)}</b><span class="muted small">${x.r.qOk} QCM réussis · ${x.r.cartes} cartes sues · ${actif(x.r)}</span>${bar(x.r.pct)}</span>
          <span class="pct">${x.r.pct}%</span></a></li>`).join('')}</ol>
        ${ME ? '' : '<p><a class="btn" href="#/compte">Choisir mon pseudo</a></p>'}`;
    });
  }
  function actif(r) {
    const k = (r.h28 || []).map((v, i) => (v ? i : -1)).filter((i) => i >= 0).pop();
    if (k === undefined) return 'pas d\'activité récente';
    const d = (27 - k) + Math.max(0, Math.floor((Date.now() - (r.maj || Date.now())) / 864e5));
    return d === 0 ? 'actif aujourd\'hui' : d === 1 ? 'actif hier' : 'actif il y a ' + d + ' jours';
  }
  function viewJoueur(key) {
    setTop('Équipage', 'equipage'); setNav('equipage');
    app.innerHTML = `<article class="fiche"><div id="pj"><p class="muted">Chargement…</p></div></article>`;
    listPlayers().then(({ list }) => {
      const box = $('#pj'); if (!box) return;
      let x = list.find((p) => p.key === key);
      if (ME && key === ME.key) x = { key, pseudo: ME.pseudo, r: resume() };
      if (!x || !x.r) { box.innerHTML = '<p class="muted">Pas encore de progression pour ce pseudo.</p>'; return; }
      const r = x.r, max = Math.max(1, ...(r.h28 || [0]));
      box.innerHTML = `<p class="eyebrow">Équipage</p><h1>${esc(x.pseudo)}</h1>
        <div class="stats3"><div><b>${r.pct}%</b><span>maîtrise moyenne</span></div><div><b>${r.qOk}</b><span>QCM réussis sur ${r.qVus} vus</span></div><div><b>${r.serie}</b><span>jours de suite</span></div></div>
        <div class="stats3"><div><b>${r.cartes}</b><span>cartes sues</span></div><div><b>${r.ex ? U.fr(r.ex.best) : '–'}</b><span>meilleur examen /20</span></div><div><b>${r.ex ? r.ex.n : 0}</b><span>examens blancs</span></div></div>
        <h2 class="lst-h">4 dernières semaines</h2>
        <div class="heat" role="img" aria-label="Activité des 28 derniers jours">${(r.h28 || []).map((n) => `<span style="--v:${n ? 0.25 + 0.75 * n / max : 0}"></span>`).join('')}</div>
        ${C.blocs.map((b) => { const ms = MODS.filter((m) => m.bloc === b.id && hasContent(m)); if (!ms.length) return '';
          return `<h2 class="lst-h">${esc(b.titre)}</h2><ul class="per">${ms.map((m) => { const p = (r.mods || {})[m.id] || 0; return `<li><span>${esc(m.titre)}</span>${bar(p)}<b class="mono">${p}%</b></li>`; }).join('')}</ul>`; }).join('')}
        <p class="muted small">Mis à jour ${ago(r.maj)}.</p>`;
    });
  }

  // ================= PROGRÈS / RÉGLAGES =================
  function viewStats() {
    setTop('Progrès', '/'); setNav('stats');
    const days = [];
    for (let k = 27; k >= 0; k--) { const d = new Date(); d.setDate(d.getDate() - k); days.push([dayStr(d), S.days[dayStr(d)] || 0]); }
    const max = Math.max(1, ...days.map((d) => d[1]));
    const nq = Object.keys(S.qcm).length, nc = Object.keys(S.cards).length;
    app.innerHTML = `<article class="fiche">
      <p class="eyebrow">Ton avancement</p><h1>Progrès</h1>
      <div class="stats3"><div><b>${streak()}</b><span>jours de suite</span></div><div><b>${nc}</b><span>cartes vues</span></div><div><b>${nq}</b><span>questions vues</span></div></div>
      <h2 class="lst-h">4 dernières semaines</h2>
      <div class="heat" role="img" aria-label="Activité des 28 derniers jours">${days.map(([d, n]) => `<span title="${d} : ${n}" style="--v:${n ? 0.25 + 0.75 * n / max : 0}"></span>`).join('')}</div>
      <h2 class="lst-h">Par matière</h2>
      <ul class="per">${MODS.filter(hasContent).map((m) => { const p = mastery(m) || 0; return `<li><a href="#/m/${m.id}">${esc(m.titre)}</a>${bar(p)}<b class="mono">${p}%</b></li>`; }).join('')}</ul>

      <p class="muted small">Version du site : ${esc(C.config.version || '')} · ${allQ.length} QCM, ${allC.length} cartes</p>
      <h2 class="lst-h">Réglages</h2>
      <div class="settings">
        <label class="fld" for="nouv"><span>Nouvelles cartes par session</span>
          <select id="nouv">${[5, 10, 15, 20, 30, 50].map((n) => `<option ${n === S.settings.nouvelles ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
        <fieldset class="pick"><legend>Thème</legend><div class="chips">
          ${[['auto', 'Automatique'], ['light', 'Clair'], ['dark', 'Nuit']].map(([v, l]) => `<label class="chip"><input type="radio" name="th" value="${v}" ${S.settings.theme === v ? 'checked' : ''}><span>${l}</span></label>`).join('')}</div></fieldset>
      </div>

      <h2 class="lst-h">Sauvegarde</h2>
      <p class="muted">${ME ? (P.enabled() ? `Connecté en <b>${esc(ME.pseudo)}</b> : ta progression est copiée dans la base de l'équipage et suit ton pseudo sur tous tes appareils.` : `Connecté en <b>${esc(ME.pseudo)}</b> : ta progression reste sur cet appareil tant que le partage n'est pas branché.`) : 'Sans pseudo, ta progression reste dans ce navigateur. <a href="#/compte">Choisis un pseudo</a> pour la garder sous ton nom.'} Tu peux aussi la copier ici et la coller sur un autre appareil.</p>
      <div class="actions"><button class="btn ghost" id="exp">Copier ma progression</button><button class="btn ghost" id="dl">Télécharger un fichier</button></div>
      <label class="fld" for="imp"><span>Coller une progression</span><textarea id="imp" rows="3" placeholder="Colle ici le code copié sur l'autre appareil"></textarea></label>
      <div class="actions"><button class="btn ghost" id="doimp">Importer</button><label class="btn ghost file">Importer un fichier<input type="file" id="fimp" accept=".json,application/json" hidden></label></div>
      <div class="actions"><button class="btn danger" id="reset">Tout remettre à zéro</button></div>
      <div id="conf"></div>
    </article>`;
    $('#nouv').addEventListener('change', (e) => { S.settings.nouvelles = +e.target.value; save(); toast('Enregistré'); });
    $$('input[name="th"]').forEach((r) => r.addEventListener('change', () => { S.settings.theme = r.value; save(); applyTheme(); }));
    const data = () => JSON.stringify(S);
    $('#exp').addEventListener('click', () => {
      const txt = data();
      const done = () => toast('Progression copiée');
      try {
        navigator.clipboard.writeText(txt).then(done, () => { $('#imp').value = txt; $('#imp').select(); toast('Sélectionnée : copie-la avec Ctrl+C'); });
      } catch (e) { $('#imp').value = txt; $('#imp').select(); }
    });
    $('#dl').addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([data()], { type: 'application/json' }));
      a.download = 'progression-c200-' + today() + '.json';
      document.body.appendChild(a); a.click(); a.remove();
    });
    function doImport(txt) {
      try {
        const o = JSON.parse(txt);
        if (!o || typeof o !== 'object' || !o.cards) throw new Error('format');
        S = Object.assign(blank(), o); S.settings = Object.assign(blank().settings, o.settings || {});
        save(); applyTheme(); toast('Progression importée'); viewStats();
      } catch (e) { toast('Ce code n\'est pas une progression valide.'); }
    }
    $('#doimp').addEventListener('click', () => doImport($('#imp').value));
    $('#fimp').addEventListener('change', (e) => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => doImport(r.result); r.readAsText(f); });
    $('#reset').addEventListener('click', () => {
      $('#conf').innerHTML = `<div class="feedback ko"><p>Effacer toute ta progression sur cet appareil ?</p><div class="actions"><button class="btn danger" id="y">Effacer</button><button class="btn ghost" id="n">Annuler</button></div></div>`;
      $('#y').addEventListener('click', () => { S = blank(); save(); applyTheme(); toast('Progression effacée'); viewStats(); });
      $('#n').addEventListener('click', () => ($('#conf').innerHTML = ''));
    });
  }

  // ================= Démarrage =================
  window.addEventListener('pagehide', () => { ls.set(storeKey(), JSON.stringify(S)); Cloud.flush(); });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') { ls.set(storeKey(), JSON.stringify(S)); Cloud.flush(); }
    else if (Cloud.on() && Date.now() - Cloud.pulled > 120000) Cloud.pull();
  });
  updateMe();
  route();
  if (Cloud.on()) Cloud.sync().then(() => { if (/^#\/?$/.test(location.hash || '#/')) route(); });
  if ('serviceWorker' in navigator && location.protocol === 'https:' && window.self === window.top) {
    try { navigator.serviceWorker.register('sw.js').catch(() => {}); } catch (e) {}
  }
})();
