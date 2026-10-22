/* Capitaine 200 — noyau : enregistrement des matières, générateurs et outils communs */
(function () {
  'use strict';
  const C = (window.C200 = window.C200 || {});
  C.modules = [];
  C.gens = {};
  C.visuels = {};
  C.config = { formation: '2026-11-16', prenom: 'Mehdi' };
  C.blocs = [
    { id: 'P1-1', titre: 'Navigation', sous: 'Module P1-1' },
    { id: 'P2-1', titre: 'Navire et sécurité', sous: 'Module P2-1' },
    { id: 'NP-1', titre: 'Réglementation', sous: 'Module NP-1' },
    { id: '250', titre: 'Mécanicien 250 kW', sous: 'Modules M1-1 et M2-1' }
  ];

  // Hachage court et stable (FNV-1a) pour donner un identifiant fixe à chaque carte / question
  function h(str) {
    let x = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      x ^= str.charCodeAt(i);
      x = Math.imul(x, 0x01000193) >>> 0;
    }
    return x.toString(36);
  }

  C.module = function (m) {
    m.fiches = m.fiches || [];
    m.cartes = m.cartes || [];
    m.qcm = m.qcm || [];
    m.calculs = m.calculs || [];
    m.visuels = m.visuels || [];
    const seen = new Set();
    const uniq = (id) => {
      let u = id, k = 1;
      while (seen.has(u)) u = id + '_' + k++;
      seen.add(u);
      return u;
    };
    m.fiches.forEach((f, i) => { f.uid = m.id + '.f.' + f.id; f.mod = m; f.idx = i; });
    m.cartes = m.cartes.map((c) => {
      const [r, v, f] = Array.isArray(c) ? c : [c.r, c.v, c.f];
      return { uid: uniq(m.id + '.c.' + h(r + '|' + v)), r, v, f, mod: m };
    });
    m.qcm = m.qcm.map((q) => ({ uid: uniq(m.id + '.q.' + h(q.q + '|' + q.r[0])), q: q.q, r: q.r, e: q.e || '', f: q.f, mod: m }));
    C.modules.push(m);
  };
  C.gen = function (id, def) { def.id = id; C.gens[id] = def; };
  C.visuel = function (id, def) { def.id = id; C.visuels[id] = def; };

  // ---------- outils pour les générateurs ----------
  const U = (C.u = {});
  U.rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  U.rndf = (a, b, step) => {
    const n = Math.round((b - a) / step);
    return +(a + U.rnd(0, n) * step).toFixed(6);
  };
  U.pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  U.shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  U.n360 = (x) => ((x % 360) + 360) % 360;
  U.r1 = (x) => Math.round(x * 10) / 10;
  U.r2 = (x) => Math.round(x * 100) / 100;
  U.ang = (x) => {
    const v = Math.round(U.n360(x) * 2) / 2 % 360, i = Math.floor(v);
    return String(i).padStart(3, '0') + (v - i ? ',5' : '') + '°';
  };
  U.sgn = (x, unit = '°') => (x > 0 ? '+' : x < 0 ? '−' : '') + U.fr(Math.abs(x)) + unit;
  U.ew = (x) => (x === 0 ? '0°' : U.fr(Math.abs(x)) + '° ' + (x > 0 ? 'E' : 'W'));
  U.fr = (x, d) => {
    const v = d === undefined ? +(+x).toFixed(2) : (+x).toFixed(d);
    return String(v).replace('.', ',');
  };
  U.hm = (min) => {
    min = ((Math.round(min) % 1440) + 1440) % 1440;
    return String(Math.floor(min / 60)).padStart(2, '0') + 'h' + String(min % 60).padStart(2, '0');
  };
  U.dur = (min) => {
    min = Math.round(min);
    const hh = Math.floor(min / 60), mm = min % 60;
    return hh ? hh + ' h ' + String(mm).padStart(2, '0') : mm + ' min';
  };
  U.rad = (d) => (d * Math.PI) / 180;
  U.deg = (r) => (r * 180) / Math.PI;
  U.lat = (x) => { const a = Math.abs(x), d = Math.floor(a + 1e-9), m = (a - d) * 60; return d + '°' + U.fr(m, 1).padStart(4, '0') + '′ ' + (x >= 0 ? 'N' : 'S'); };
  U.lon = (x) => { const a = Math.abs(x), d = Math.floor(a + 1e-9), m = (a - d) * 60; return String(d).padStart(3, '0') + '°' + U.fr(m, 1).padStart(4, '0') + '′ ' + (x >= 0 ? 'E' : 'W'); };
  U.esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // Lecture des réponses tapées
  U.parseNum = (s) => {
    if (s == null) return NaN;
    let t = String(s).trim().replace(/\s/g, '').replace(',', '.').replace(/[°'′"m]+$/i, '');
    let neg = false;
    // W / O / E = direction seulement après un chiffre ou un symbole d'angle (pas « kW »)
    if (/[\d.°'′"][WO]$/i.test(t)) { neg = true; t = t.slice(0, -1); }
    else if (/[\d.°'′"]E$/i.test(t)) { t = t.slice(0, -1); }
    t = t.replace(/^\+/, '').replace(/^[−–]/, '-');
    const v = parseFloat(t);
    return isNaN(v) ? NaN : neg ? -Math.abs(v) : v;
  };
  U.parseHeure = (s) => {
    const t = String(s).trim().toLowerCase().replace(/\s/g, '');
    let m = t.match(/^(\d{1,2})[h:.](\d{1,2})?$/) || t.match(/^(\d{1,2})(\d{2})$/);
    if (!m) return NaN;
    return +m[1] * 60 + (+m[2] || 0);
  };
  U.check = (field, input) => {
    const t = field.type || 'num';
    if (t === 'angle') {
      const v = U.parseNum(input);
      if (isNaN(v)) return null;
      const d = Math.abs(((v - field.a + 540) % 360) - 180);
      return d <= (field.tol ?? 1);
    }
    if (t === 'heure') {
      const v = U.parseHeure(input);
      if (isNaN(v)) return null;
      const d = Math.abs(((v - field.a + 720 + 1440) % 1440) - 720);
      return d <= (field.tol ?? 2);
    }
    if (t === 'choix') return input === field.a;
    const v = U.parseNum(input);
    if (isNaN(v)) return null;
    return Math.abs(v - field.a) <= (field.tol ?? 0.05) + 1e-9;
  };
  U.show = (field) => {
    const t = field.type || 'num';
    if (field.affiche) return field.affiche;
    if (t === 'angle') return U.ang(field.a);
    if (t === 'heure') return U.hm(field.a);
    if (t === 'choix') return field.a;
    return U.fr(field.a) + (field.unit ? ' ' + field.unit : '');
  };
})();
