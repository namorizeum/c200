/* Générateurs : cinématique radar (mouvement relatif, Nord en haut) et décision RIPAM */
(function () {
  'use strict';
  const C = window.C200, U = C.u;
  const add = (a, b) => [a[0] + b[0], a[1] + b[1]], sub = (a, b) => [a[0] - b[0], a[1] - b[1]], mul = (a, k) => [a[0] * k, a[1] * k];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1];

  // Écran radar Nord en haut, mouvement relatif. pts : positions relatives (milles, [E, N]) ; own : vecteur du navire (nd)
  function ecran(pts, ownDir, range, opts = {}) {
    const R = 150, cx = 170, cy = 170, k = R / range;
    const P = (p) => [cx + p[0] * k, cy - p[1] * k];
    let rings = '';
    const step = range <= 6 ? 1 : 2;
    for (let r = step; r <= range; r += step) rings += `<circle cx="${cx}" cy="${cy}" r="${r * k}" fill="none" stroke="#24404f" stroke-width="1" ${r === range ? '' : 'stroke-dasharray="3 4"'}/>`;
    const last = pts[pts.length - 1], first = pts[0];
    const dir = sub(last, first), L = Math.hypot(dir[0], dir[1]) || 1;
    const ext = add(last, mul(dir, (range * 2) / L));
    const a = P(first), b = P(ext);
    const own = P(U.vec(ownDir, range * 0.35));
    const lab = pts.map((p, i) => { const q = P(p); return `<circle cx="${q[0]}" cy="${q[1]}" r="5" fill="#ffd23f"/>${opts.labels ? `<text x="${q[0] + 8}" y="${q[1] - 6}" font-size="11" fill="#ffd23f" font-family="system-ui">${opts.labels[i]}</text>` : ''}`; }).join('');
    return `<svg viewBox="0 0 340 340" width="340" role="img" aria-label="Écran radar Nord en haut">
      <defs><clipPath id="rc${opts.id || 0}"><circle cx="${cx}" cy="${cy}" r="${R}"/></clipPath>
      <marker id="ownar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#ff4d3d"/></marker></defs>
      <rect width="340" height="340" fill="#071118" rx="10"/>
      <circle cx="${cx}" cy="${cy}" r="${R}" fill="#0b1b24" stroke="#3a5a6c" stroke-width="2"/>
      ${rings}
      <text x="${cx - 4}" y="14" font-size="12" fill="#9fb3c1" font-family="system-ui">N</text>
      <text x="8" y="332" font-size="11" fill="#6d8496" font-family="system-ui">Échelle ${range} M · cercles tous les ${step} M · Nord en haut</text>
      <g clip-path="url(#rc${opts.id || 0})"><line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#ffd23f" stroke-width="1.2" stroke-dasharray="6 5" opacity=".7"/></g>
      <line x1="${cx}" y1="${cy}" x2="${own[0]}" y2="${own[1]}" stroke="#ff4d3d" stroke-width="2.5" marker-end="url(#ownar)"/>
      <circle cx="${cx}" cy="${cy}" r="3.5" fill="#ff4d3d"/>
      ${lab}
    </svg>`;
  }
  const relDist = (p) => Math.hypot(p[0], p[1]);
  const relBrg = (p) => U.dirOf(p);

  C.gen('radar-cpa', {
    titre: 'Pointage radar : CPA et route vraie', desc: 'Deux relevés à 6 min : distance et heure du CPA, route et vitesse de l\'écho.',
    make() {
      for (let k = 0; k < 80; k++) {
        const Cv = U.rnd(0, 359), Vo = U.rnd(8, 15);
        const Ct = U.rnd(0, 359), Vt = U.rnd(5, 18);
        const Vov = U.vec(Cv, Vo), Vtv = U.vec(Ct, Vt), Vr = sub(Vtv, Vov);
        const vr = Math.hypot(Vr[0], Vr[1]); if (vr < 4) continue;
        const cpa = U.rndf(0, 2.5, 0.1);
        const T = U.rnd(18, 40) / 60;                 // temps jusqu'au CPA depuis la 2e observation (h)
        const uR = mul(Vr, 1 / vr), nR = [uR[1], -uR[0]];
        const side = U.pick([1, -1]);
        const Pcpa = mul(nR, cpa * side);
        const P2 = sub(Pcpa, mul(Vr, T));
        const P1 = sub(P2, mul(Vr, 0.1));             // 6 min avant
        if (relDist(P1) > 11 || relDist(P1) < 3) continue;
        const t1 = U.rnd(0, 23) * 60 + U.rnd(0, 11) * 5, t2 = t1 + 6;
        const tcpa = t2 + T * 60;
        const z1 = Math.round(relBrg(P1)), d1 = U.r1(relDist(P1)), z2 = Math.round(relBrg(P2)), d2 = U.r1(relDist(P2));
        // recalcul à partir des valeurs arrondies (ce que l'élève voit)
        const Q1 = U.vec(z1, d1), Q2 = U.vec(z2, d2), Vr2 = mul(sub(Q2, Q1), 10);
        const vr2 = Math.hypot(Vr2[0], Vr2[1]);
        const tt = -dot(Q2, Vr2) / (vr2 * vr2);
        const Qc = add(Q2, mul(Vr2, tt));
        const cpa2 = relDist(Qc), tcpa2 = t2 + tt * 60;
        if (tt < 0.1) continue;
        const Vt2 = add(Vr2, Vov);
        return {
          svg: ecran([Q1, Q2], Cv, relDist(Q1) < 5.6 ? 6 : 12, { labels: [U.hm(t1), U.hm(t2)], id: k }),
          q: `Ton radar (Nord en haut, mouvement relatif) suit un écho. Trouve la distance et l'heure du point de rapprochement maximal (CPA), puis la route et la vitesse vraies de l'écho.` + U.data([['Ton cap vrai', U.ang(Cv)], ['Ta vitesse', Vo + ' nd'], [U.hm(t1), U.ang(z1) + ' · ' + U.fr(d1) + ' M'], [U.hm(t2), U.ang(z2) + ' · ' + U.fr(d2) + ' M']]),
          champs: [{ label: 'CPA', a: U.r1(cpa2), tol: 0.25, unit: 'M' }, { label: 'Heure du CPA', type: 'heure', a: tcpa2, tol: 3 }, { label: 'Route vraie de l\'écho', type: 'angle', a: U.dirOf(Vt2), tol: 6 }, { label: 'Vitesse de l\'écho', a: U.r1(Math.hypot(Vt2[0], Vt2[1])), tol: 1, unit: 'nd' }],
          sol: `<ol><li>Place les deux points (relèvement, distance). La droite qui les joint est le <b>mouvement relatif</b> de l'écho (MR).</li>
<li>Prolonge-la. La perpendiculaire du centre à cette droite donne le <b>CPA</b> : ≈ <b>${U.fr(U.r1(cpa2))} M</b>.</li>
<li>Vitesse relative = distance parcourue sur le MR en 6 min × 10 = ${U.fr(U.r1(vr2))} nd. Temps jusqu'au CPA = distance restante ÷ vitesse relative = ${U.dur(tt * 60)} → <b>${U.hm(tcpa2)}</b>.</li>
<li><b>Triangle W-O-A</b> (sur 6 min) : O = 1er point, A = 2e point. Depuis O, recule de ton propre vecteur : W est à ${U.fr(Vo / 10)} M au ${U.ang(Cv + 180)} de O (W→O = ton vecteur). <b>W→A</b> est le vecteur vrai de l'écho : route ≈ <b>${U.ang(U.dirOf(Vt2))}</b>, vitesse ≈ <b>${U.fr(U.r1(Math.hypot(Vt2[0], Vt2[1])))} nd</b> (longueur × 10).</li></ol>
<p>Rappel : vecteur relatif = vecteur vrai de l'écho − ton vecteur. Si le relèvement ne change pas et la distance diminue, CPA ≈ 0 : <b>risque d'abordage</b>.</p>`
        };
      }
      return this.make();
    }
  });

  const DECISIONS = {
    tri: 'Il vient de mon tribord, routes croisées : je m\'écarte, je viens franchement sur tribord pour passer derrière lui',
    bab: 'Il vient de mon bâbord, routes croisées : je garde cap et vitesse en le surveillant',
    face: 'Face à face : je viens sur tribord (passage bâbord sur bâbord)',
    rattrape: 'Il me rattrape : je garde cap et vitesse, c\'est à lui de s\'écarter',
    moi: 'Je le rattrape : je dois m\'écarter de sa route',
    loin: 'Pas de risque d\'abordage, il passe loin : je continue en surveillant'
  };
  const EXPL = {
    tri: 'Le relèvement ne change pas et l\'écho est sur ton avant tribord (règle 15) : tu es non privilégié. Viens franchement sur tribord et évite de passer sur son avant (règles 15 et 16).',
    bab: 'L\'écho vient de ton bâbord sur une route qui croise : c\'est lui qui doit s\'écarter. Tu gardes cap et vitesse (règle 17), prêt à agir s\'il ne fait rien.',
    face: 'Routes opposées, il est droit devant : chacun vient sur tribord (règle 14).',
    rattrape: 'Il arrive de plus de 22,5° sur l\'arrière de ton travers et va plus vite : il te rattrape, il doit s\'écarter (règle 13).',
    moi: 'Tu arrives sur son arrière plus vite que lui : tu le rattrapes, tu dois t\'écarter (règle 13), même si c\'est un voilier ou un cargo.',
    loin: 'Le relèvement change nettement et le CPA est large : pas de risque d\'abordage (règle 7). Continue à surveiller.'
  };
  C.gen('radar-decision', {
    titre: 'Cinématique radar + règles de barre', desc: 'Comme au test : trouve la situation réelle et la décision à prendre.',
    make() {
      const cls = U.pick(['tri', 'tri', 'bab', 'face', 'rattrape', 'moi', 'loin']);
      for (let k = 0; k < 200; k++) {
        const Cv = U.rnd(0, 71) * 5, Vo = U.rnd(9, 14);
        let Ct, Vt;
        if (cls === 'tri') { Ct = U.n360(Cv - 90 + U.rnd(-45, 45)); Vt = U.rnd(8, 16); }
        else if (cls === 'bab') { Ct = U.n360(Cv + 90 + U.rnd(-45, 45)); Vt = U.rnd(8, 16); }
        else if (cls === 'face') { Ct = U.n360(Cv + 180 + U.rnd(-4, 4)); Vt = U.rnd(8, 15); }
        else if (cls === 'rattrape') { Ct = U.n360(Cv + U.rnd(-12, 12)); Vt = Vo + U.rnd(5, 9); }
        else if (cls === 'moi') { Ct = U.n360(Cv + U.rnd(-12, 12)); Vt = Math.max(3, Vo - U.rnd(5, 8)); }
        else { Ct = U.rnd(0, 359); Vt = U.rnd(7, 15); }
        const Vov = U.vec(Cv, Vo), Vr = sub(U.vec(Ct, Vt), Vov), vr = Math.hypot(Vr[0], Vr[1]);
        if (vr < 6) continue;
        const cpa = cls === 'loin' ? U.rndf(2.5, 4, 0.1) : U.rndf(0, 0.3, 0.1);
        const uR = mul(Vr, 1 / vr), nR = [uR[1], -uR[0]];
        const Pc = mul(nR, cpa * U.pick([1, -1]));
        const T = U.rndf(0.3, 0.6, 0.05);
        const P3 = sub(Pc, mul(Vr, T)), P2 = sub(P3, mul(Vr, 0.1)), P1 = sub(P2, mul(Vr, 0.1));
        if (relDist(P1) > 11.5 || relDist(P3) < 3) continue;
        const g = U.rel(relBrg(P3) - Cv);       // gisement de l'écho
        const gFromT = U.rel(relBrg(mul(P3, -1)) - Ct);   // où je suis vu par lui
        if (cls === 'tri' && !(g > 10 && g < 100)) continue;
        if (cls === 'bab' && !(g < -10 && g > -100)) continue;
        if (cls === 'face' && Math.abs(g) > 6) continue;
        if (cls === 'rattrape' && Math.abs(g) < 125) continue;
        if (cls === 'moi' && Math.abs(gFromT) < 125) continue;
        if (cls === 'loin' && Math.abs(g) > 120) continue;
        const keys = Object.keys(DECISIONS);
        const others = U.shuffle(keys.filter((x) => x !== cls)).slice(0, 3);
        return {
          svg: ecran([P1, P2, P3], Cv, relDist(P1) < 5.6 ? 6 : 12, { id: 'd' + k }),
          q: `Visibilité bonne, tu es en vue. Le radar (Nord en haut, mouvement relatif) montre 3 positions de l'écho à 6 min d'intervalle. Ton vecteur est en rouge (cap ${U.ang(Cv)}, ${Vo} nd). Quelle est la situation et que fais-tu ?`,
          champs: [{ type: 'choix', label: 'Ta décision', a: DECISIONS[cls], options: U.shuffle([cls, ...others].map((x) => DECISIONS[x])) }],
          sol: `<p>${EXPL[cls]}</p><p>Vue réelle : l'écho fait route au <b>${U.ang(Ct)}</b> à <b>${Vt} nd</b>, gisement ${g >= 0 ? U.fr(Math.round(g)) + '° tribord' : U.fr(Math.round(-g)) + '° bâbord'}.</p><p>Méthode W-O-A : O = 1re position, A = 3e position (12 min plus tard). Depuis O, recule de ton vecteur sur 12 min (${U.fr(Vo / 5)} M au ${U.ang(Cv + 180)}) : c'est W. W→A = route vraie de l'écho.</p>`
        };
      }
      return this.make();
    }
  });
})();
