/* Générateurs : météo (Beaufort, barbules, tendance barométrique, Buys-Ballot) */
(function () {
  'use strict';
  const C = window.C200, U = C.u;
  const BF = [[0, 'Calme', 0, 0], [1, 'Très légère brise', 1, 3], [2, 'Légère brise', 4, 6], [3, 'Petite brise', 7, 10], [4, 'Jolie brise', 11, 16], [5, 'Bonne brise', 17, 21], [6, 'Vent frais', 22, 27], [7, 'Grand frais', 28, 33], [8, 'Coup de vent', 34, 40], [9, 'Fort coup de vent', 41, 47], [10, 'Tempête', 48, 55], [11, 'Violente tempête', 56, 63], [12, 'Ouragan', 64, 80]];
  C.beaufort = BF;
  const force = (nd) => BF.find((b) => nd >= b[2] && nd <= b[3]) || BF[12];

  function barbSvg(dirFrom, nd) {
    // la hampe pointe d'où vient le vent ; barbes du côté gauche (hémisphère Nord)
    const cx = 120, cy = 120, L = 80;
    const a = U.rad(dirFrom);
    const tip = [cx + Math.sin(a) * L, cy - Math.cos(a) * L];
    let parts = '', n = nd, pos = 0;
    const along = (t) => [cx + Math.sin(a) * (L - t), cy - Math.cos(a) * (L - t)];
    const side = (p, len) => { const ang = a + U.rad(60); return [p[0] + Math.sin(ang) * len, p[1] - Math.cos(ang) * len]; };
    while (n >= 50) { const p1 = along(pos), p2 = along(pos + 10), q = side(p1, 26); parts += `<path d="M${p1[0]} ${p1[1]} L${q[0]} ${q[1]} L${p2[0]} ${p2[1]} Z" fill="#102433"/>`; pos += 13; n -= 50; }
    while (n >= 10) { const p1 = along(pos), q = side(p1, 26); parts += `<line x1="${p1[0]}" y1="${p1[1]}" x2="${q[0]}" y2="${q[1]}" stroke="#102433" stroke-width="3"/>`; pos += 9; n -= 10; }
    if (n >= 5) { if (pos === 0) pos = 9; const p1 = along(pos), q = side(p1, 13); parts += `<line x1="${p1[0]}" y1="${p1[1]}" x2="${q[0]}" y2="${q[1]}" stroke="#102433" stroke-width="3"/>`; }
    return `<svg viewBox="0 0 240 240" width="240" role="img" aria-label="Flèche de vent">
      <rect width="240" height="240" rx="10" fill="#eef4f7"/>
      <text x="114" y="18" font-size="12" fill="#566b7a" font-family="system-ui">N</text>
      <line x1="${cx}" y1="${cy}" x2="${tip[0]}" y2="${tip[1]}" stroke="#102433" stroke-width="3"/>
      <circle cx="${cx}" cy="${cy}" r="6" fill="#fff" stroke="#102433" stroke-width="2.5"/>
      ${parts}
    </svg>`;
  }

  C.gen('meteo-barbules', {
    titre: 'Lire une flèche de vent', desc: 'Barbule 5 nd, barbe 10 nd, triangle 50 nd. Puis la force Beaufort.',
    make() {
      const nd = U.pick([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]);
      const dir = U.rnd(0, 7) * 45;
      const f = force(nd)[0];
      return {
        svg: barbSvg(dir, nd),
        q: 'Sur une carte météo, tu lis cette flèche. D\'où vient le vent, quelle vitesse et quelle force Beaufort ?',
        champs: [{ type: 'choix', label: 'Le vent vient du', a: U.ventNom(dir), options: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] }, { label: 'Vitesse', a: nd, tol: 0, unit: 'nd' }, { label: 'Force Beaufort', a: f, tol: 0 }],
        sol: `<p>La hampe pointe vers <b>d'où vient</b> le vent : <b>${U.ventNom(dir)}</b>.</p><p>Vitesse : ${nd >= 50 ? Math.floor(nd / 50) + ' triangle(s) × 50 + ' : ''}${Math.floor((nd % 50) / 10)} barbe(s) × 10 ${nd % 10 ? '+ 1 barbule × 5' : ''} = <b>${nd} nd</b>.</p><p>Force : ${nd <= 35 ? `jusqu'à 35 nd, F = barbes × 2 + 1` : `à partir de 40 nd, F = barbes × 2`} → <b>force ${f}</b> (${force(nd)[1].toLowerCase()}, ${force(nd)[2]} à ${force(nd)[3] === 80 ? '64 nd et plus' : force(nd)[3] + ' nd'}).</p>`
      };
    }
  });

  C.gen('meteo-beaufort', {
    titre: 'Échelle de Beaufort', desc: 'Nœuds ↔ force et nom du vent.',
    make() {
      const b = U.pick(BF.slice(2));
      const nd = U.rnd(b[2], Math.min(b[3], 70));
      if (Math.random() < 0.5) return {
        q: `L'anémomètre indique un vent moyen de <b>${nd} nœuds</b>. Quelle force Beaufort ?`,
        champs: [{ label: 'Force', a: b[0], tol: 0 }],
        sol: `<p>${b[2]} à ${b[3] === 80 ? '64 et plus' : b[3]} nd = <b>force ${b[0]}</b>, ${b[1].toLowerCase()}.</p><p>Repères : F6 22-27 nd, <b>F7 28-33 (grand frais, BMS)</b>, F8 34-40 (coup de vent), F10 48-55 (tempête), F12 64 et plus (ouragan).</p>`
      };
      return {
        q: `Comment s'appelle un vent de <b>force ${b[0]}</b> ?`,
        champs: [{ type: 'choix', label: 'Nom', a: b[1], options: U.shuffle([b[1], ...U.shuffle(BF.filter((x) => x !== b).map((x) => x[1])).slice(0, 3)]) }],
        sol: `<p>Force ${b[0]} = <b>${b[1]}</b> (${b[2]} à ${b[3] === 80 ? '64 nd et plus' : b[3] + ' nd'}).</p>`
      };
    }
  });

  C.gen('meteo-tendance', {
    titre: 'Tendance barométrique', desc: 'Que prévoir quand le baromètre baisse ?',
    make() {
      const T = [[-2.5, 'Aggravation possible'], [-4.5, 'Coup de vent'], [-7, 'Fort coup de vent à tempête'], [-12, 'Violente tempête, ouragan']];
      const [v, r] = U.pick(T);
      const p0 = U.rnd(1000, 1020), p1 = U.r1(p0 + v);
      return {
        q: `À 09h00 ton baromètre indique <b>${p0} hPa</b>, à 12h00 <b>${U.fr(p1)} hPa</b>. Que faut-il prévoir ?`,
        champs: [{ type: 'choix', label: 'Prévision', a: r, options: T.map((x) => x[1]) }],
        sol: `<p>Baisse de ${U.fr(-v)} hPa en 3 h.</p><p>−2 à −3 hPa/3 h : aggravation possible · −4 à −5 : coup de vent · −6 à −9 : fort coup de vent à tempête · −10 à −15 : violente tempête, ouragan.</p><p>Attention : une forte <b>hausse</b> peut aussi annoncer un coup de vent (mistral).</p>`
      };
    }
  });

  C.gen('meteo-buys', {
    titre: 'Loi de Buys-Ballot', desc: 'Face au vent, où est la dépression ?',
    make() {
      const dir = U.rnd(0, 7) * 45;
      const depr = U.ventNom(dir + 90), anti = U.ventNom(dir - 90);
      return {
        q: `Hémisphère Nord. Le vent vient du <b>${U.ventNom(dir)}</b>. De quel côté se trouve la <b>dépression</b> ?`,
        champs: [{ type: 'choix', label: 'Dépression vers le', a: depr, options: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] }],
        sol: `<p>Face au vent (tourné vers le ${U.ventNom(dir)}), on a la <b>dépression à droite</b> et l'anticyclone à gauche : dépression vers le <b>${depr}</b>, anticyclone vers le ${anti}.</p><p>Autour d'une dépression, le vent tourne dans le sens <b>inverse</b> des aiguilles d'une montre (hémisphère Nord).</p>`
      };
    }
  });
})();
