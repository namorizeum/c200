/* Générateurs et dessins : construction et stabilité (module P2-1) */
(function () {
  'use strict';
  const C = window.C200, U = C.u;
  const INK = '#102433', MAG = '#a8166f', MUT = '#7b8a95', SEA = '#cfe4f1', BG = '#f7fafb';
  // nombre avec espace des milliers : 23 495,5
  U.nb = (x, d) => { const s = U.fr(x, d).split(','); s[0] = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' '); return s.join(','); };
  const panel = (w, h, inner, label) => `<svg viewBox="0 0 ${w} ${h}" width="${w}" role="img" aria-label="${label}" style="max-width:100%;height:auto"><rect width="${w}" height="${h}" rx="10" fill="${BG}"/>${inner}</svg>`;
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-size="${o.size || 13}" font-family="system-ui,sans-serif" font-weight="${o.bold ? 700 : 400}" fill="${o.fill || INK}" text-anchor="${o.anchor || 'middle'}">${s}</text>`;

  /* ---------- Carène inclinée : G, B, m, GZ ---------- */
  // gm : 'pos' | 'nul' | 'neg' ; hl : point mis en couleur ('G','B','m','GZ') ; labels : afficher les lettres
  function carene(o = {}) {
    const I = o.I ?? 20, gm = o.gm || 'pos', hl = o.hl || '', labels = o.labels !== false;
    const cx = 160, cy = 240, s = U.rad(I), c = Math.cos(s), sn = Math.sin(s);
    const W = (x, y) => [cx + x * c + y * sn, cy - (-x * sn + y * c)];      // repère navire (K à l'origine) → écran
    const pt = (p) => p.map((v) => v.toFixed(1)).join(' ');
    const hull = [[-100, 150], [-100, 30], [-78, 0], [78, 0], [100, 30], [100, 150]].map((p) => pt(W(p[0], p[1])));
    const [g, mh] = gm === 'pos' ? [72, 140] : gm === 'nul' ? [115, 115] : [138, 82];
    const Gp = W(0, g), Mp = W(0, mh), xF = Mp[0];
    const Bp = [xF, cy - 30 * c];
    const Zp = [xF, Gp[1]];
    const wl = cy - 62;
    const col = (k) => (hl === k ? MAG : INK);
    const lab = (p, k, txt, dx, dy, anchor) => (labels || hl === k ? T(p[0] + dx, p[1] + dy, txt, { bold: true, fill: col(k), size: 15, anchor }) : '');
    const dot = (p, k) => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="5" fill="${col(k)}"/>`;
    const axis = [W(0, -8), W(0, 185)];
    let svg = `<defs><marker id="ahs" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="${INK}"/></marker></defs>`;
    svg += `<path d="M${hull.join(' L')} Z" fill="#fff" stroke="${INK}" stroke-width="2.5"/>`;
    svg += `<rect x="8" y="${wl}" width="304" height="${270 - wl}" fill="${SEA}" opacity=".55"/>`;
    svg += `<line x1="8" y1="${wl}" x2="312" y2="${wl}" stroke="#3f7396" stroke-width="1.5"/>`;
    svg += `<line x1="${axis[0][0]}" y1="${axis[0][1]}" x2="${axis[1][0]}" y2="${axis[1][1]}" stroke="${MUT}" stroke-dasharray="5 4"/>`;
    svg += `<line x1="${xF}" y1="${Bp[1] + 6}" x2="${xF}" y2="${Math.min(Mp[1], Gp[1]) - 22}" stroke="${MUT}" stroke-dasharray="2 4"/>`;
    // poids P vers le bas en G, poussée F vers le haut en B
    svg += `<line x1="${Gp[0]}" y1="${Gp[1]}" x2="${Gp[0]}" y2="${Gp[1] + 28}" stroke="${INK}" stroke-width="2.5" marker-end="url(#ahs)"/>`;
    svg += `<line x1="${Bp[0]}" y1="${Bp[1]}" x2="${Bp[0]}" y2="${Bp[1] - 26}" stroke="${INK}" stroke-width="2.5" marker-end="url(#ahs)"/>`;
    if (labels) svg += T(Gp[0] - 8, Gp[1] + 34, 'P', { size: 12, anchor: 'end', fill: MUT }) + T(Bp[0] + 8, Bp[1] - 22, 'F', { size: 12, anchor: 'start', fill: MUT });
    const right = Zp[0] > Gp[0];
    if (gm !== 'nul') svg += `<line x1="${Gp[0]}" y1="${Gp[1]}" x2="${Zp[0]}" y2="${Zp[1]}" stroke="${col('GZ')}" stroke-width="${hl === 'GZ' ? 5 : 3}"/>` + dot(Zp, 'GZ') + lab(Zp, 'GZ', 'Z', right ? 9 : -9, -8, right ? 'start' : 'end');
    svg += dot(Mp, 'm') + lab(Mp, 'm', 'm', 10, -6, 'start');
    svg += dot(Gp, 'G') + lab(Gp, 'G', 'G', gm === 'neg' ? 10 : -10, 5, gm === 'neg' ? 'start' : 'end');
    svg += dot(Bp, 'B') + lab(Bp, 'B', 'B', 10, 16, 'start');
    svg += T(304, 22, 'Gîte ' + I + '°', { anchor: 'end', size: 12, fill: MUT });
    return panel(320, 270, svg, 'Coupe du navire incliné avec G, B et m');
  }

  /* ---------- Marque de franc-bord (Plimsoll) ---------- */
  // vue du côté tribord : l'avant est à droite
  function plimsoll(hl) {
    const cx = 88, cy = 150, R = 40, vx = 232, k = 15;     // k : écart entre lignes
    const col = (id) => (hl === id ? MAG : INK);
    const sw = (id) => (hl === id ? 5 : 3.5);
    let s = '';
    s += `<line x1="${cx - 66}" y1="40" x2="${cx + 66}" y2="40" stroke="${col('pont')}" stroke-width="${hl === 'pont' ? 7 : 6}"/>`;
    s += T(cx, 30, 'ligne de pont', { size: 11, fill: hl === 'pont' ? MAG : MUT });
    s += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${col('disque')}" stroke-width="${sw('disque')}"/>`;
    s += `<line x1="${cx - 64}" y1="${cy}" x2="${cx + 64}" y2="${cy}" stroke="${col('disque')}" stroke-width="${sw('disque')}"/>`;
    s += T(cx - 54, cy - 10, 'B', { bold: true, size: 15 }) + T(cx + 54, cy - 10, 'V', { bold: true, size: 15 });
    // échelle verticale et traits
    const L = { TF: cy - 2.3 * k, F: cy - 1.2 * k, T: cy - 1.2 * k, S: cy, W: cy + 1.1 * k, WNA: cy + 2.1 * k };
    s += `<line x1="${vx}" y1="${L.TF - 6}" x2="${vx}" y2="${L.WNA + 4}" stroke="${INK}" stroke-width="3.5"/>`;
    for (const [id, y] of Object.entries(L)) {
      const aft = id === 'TF' || id === 'F';
      const x2 = aft ? vx - 36 : vx + 36;
      s += `<line x1="${vx}" y1="${y}" x2="${x2}" y2="${y}" stroke="${col(id)}" stroke-width="${sw(id)}"/>`;
      if (hl === 'tout') s += T(aft ? x2 - 6 : x2 + 6, y + 5, id, { size: 12, bold: true, anchor: aft ? 'end' : 'start' });
    }
    s += `<line x1="${cx}" y1="${46}" x2="${cx}" y2="${cy - R - 4}" stroke="${MUT}" stroke-dasharray="3 3"/>`;
    s += T(cx + 8, 95, 'franc-bord', { size: 11, fill: MUT, anchor: 'start' });
    s += T(300, 228, 'avant →', { size: 11, fill: MUT, anchor: 'end' });
    return panel(320, 240, s, 'Marque de franc-bord');
  }

  /* ---------- Coupe au maître-couple ---------- */
  const PIECES = {
    quille: 'Quille', carlingue: 'Carlingue centrale', carlLat: 'Carlingue latérale', varangue: 'Varangue',
    plafond: 'Plafond de double fond', fond: 'Bordé de fond', bouchain: 'Bordé de bouchain', muraille: 'Bordé de muraille',
    membrure: 'Membrure', barrot: 'Barrot', gousset: 'Gousset', epontille: 'Épontille', hiloire: 'Hiloire (surbau d\'écoutille)', pont: 'Bordé de pont'
  };
  function section(hl) {
    const c = (k) => (hl === k ? MAG : INK);
    const w = (k, n) => (hl === k ? n + 2 : n);
    let s = '';
    // varangue (tôle du double fond, avec trous d'allègement)
    s += `<rect x="46" y="186" width="228" height="22" fill="${hl === 'varangue' ? '#f3d3e6' : '#e7eef2'}" stroke="${c('varangue')}" stroke-width="${hl === 'varangue' ? 2.5 : 1}"/>`;
    for (const x of [72, 130, 190, 248]) s += `<ellipse cx="${x}" cy="197" rx="13" ry="6" fill="${BG}" stroke="${c('varangue')}" stroke-width="1"/>`;
    s += `<line x1="46" y1="186" x2="274" y2="186" stroke="${c('plafond')}" stroke-width="${w('plafond', 4)}"/>`;
    s += `<line x1="160" y1="186" x2="160" y2="210" stroke="${c('carlingue')}" stroke-width="${w('carlingue', 4)}"/>`;
    s += `<line x1="100" y1="186" x2="100" y2="210" stroke="${c('carlLat')}" stroke-width="${w('carlLat', 3)}"/><line x1="220" y1="186" x2="220" y2="210" stroke="${c('carlLat')}" stroke-width="${w('carlLat', 3)}"/>`;
    s += `<line x1="62" y1="210" x2="258" y2="210" stroke="${c('fond')}" stroke-width="${w('fond', 4)}"/>`;
    s += `<rect x="146" y="209" width="28" height="7" fill="${c('quille')}"/>`;
    s += `<path d="M40 188 Q40 210 62 210" fill="none" stroke="${c('bouchain')}" stroke-width="${w('bouchain', 4)}"/><path d="M280 188 Q280 210 258 210" fill="none" stroke="${c('bouchain')}" stroke-width="${w('bouchain', 4)}"/>`;
    s += `<line x1="40" y1="50" x2="40" y2="188" stroke="${c('muraille')}" stroke-width="${w('muraille', 4)}"/><line x1="280" y1="50" x2="280" y2="188" stroke="${c('muraille')}" stroke-width="${w('muraille', 4)}"/>`;
    s += `<rect x="42" y="58" width="7" height="128" fill="${c('membrure')}"/><rect x="271" y="58" width="7" height="128" fill="${c('membrure')}"/>`;
    s += `<path d="M40 49 L110 46" stroke="${c('pont')}" stroke-width="${w('pont', 4)}"/><path d="M210 46 L280 49" stroke="${c('pont')}" stroke-width="${w('pont', 4)}"/>`;
    s += `<path d="M42 51 L110 48 L110 55 L42 58 Z" fill="${c('barrot')}"/><path d="M210 48 L278 51 L278 58 L210 55 Z" fill="${c('barrot')}"/>`;
    s += `<path d="M49 58 L68 57 L49 78 Z" fill="${c('gousset')}"/><path d="M271 58 L252 57 L271 78 Z" fill="${c('gousset')}"/>`;
    s += `<line x1="110" y1="56" x2="110" y2="186" stroke="${c('epontille')}" stroke-width="${w('epontille', 3)}"/><line x1="210" y1="56" x2="210" y2="186" stroke="${c('epontille')}" stroke-width="${w('epontille', 3)}"/>`;
    s += `<line x1="110" y1="47" x2="110" y2="22" stroke="${c('hiloire')}" stroke-width="${w('hiloire', 4)}"/><line x1="210" y1="47" x2="210" y2="22" stroke="${c('hiloire')}" stroke-width="${w('hiloire', 4)}"/>`;
    s += `<line x1="104" y1="22" x2="216" y2="22" stroke="${MUT}" stroke-dasharray="4 4"/>` + T(160, 16, 'panneau de cale', { size: 10, fill: MUT });
    s += T(160, 120, 'CALE', { size: 12, fill: MUT }) + T(160, 234, 'coupe transversale (maître-couple)', { size: 10, fill: MUT });
    return panel(320, 242, s, 'Coupe transversale de la coque');
  }

  C.dessin = Object.assign(C.dessin || {}, { carene, plimsoll, section });

  /* ---------- Visuels ---------- */
  const distract = (good, pool, n = 3) => U.shuffle(pool.filter((x) => x !== good)).slice(0, n);

  C.visuel('structure', {
    titre: 'Éléments de structure', desc: 'Quille, varangue, membrure, barrot… sur une coupe de la coque.', serie: 10,
    make() {
      const k = U.pick(Object.keys(PIECES));
      const E = {
        quille: 'Profilé longitudinal dans l\'axe, au fond : la base de la structure, il assure la résistance longitudinale.',
        carlingue: 'Profilé longitudinal du fond, au-dessus de la quille ; toujours continu et soudé à la quille.',
        carlLat: 'Profilé longitudinal du fond, placé à égale distance de la quille (carlingues latérales).',
        varangue: 'Profilé transversal du fond (pleine, étanche ou cadre), perpendiculaire à la quille.',
        plafond: 'Tôles étanches posées sur l\'ossature du fond : le dessus du double fond.',
        fond: 'Tôles qui forment le fond étanche de la coque.',
        bouchain: 'Tôle longitudinale qui relie le bordé de muraille au bordé de fond (le « coin » arrondi).',
        muraille: 'Tôles qui forment les côtés étanches de la coque.',
        membrure: 'Profilé vertical qui forme l\'ossature du côté de la coque.',
        barrot: 'Profilé transversal qui relie le haut des membrures et porte le pont.',
        gousset: 'Pièce qui relie deux profilés, ici le barrot à la membrure (gousset de pont).',
        epontille: 'Profilé vertical qui relie le pont au fond (ou deux ponts), souvent autour des écoutilles.',
        hiloire: 'Profilé longitudinal du pont ; au bord de l\'écoutille il forme le surbau qui empêche l\'eau d\'entrer.',
        pont: 'Tôles qui forment le pont, posées sur les barrots. Sa courbure transversale s\'appelle le bouge.'
      };
      return { svg: section(k), q: 'Comment s\'appelle l\'élément en couleur ?', r: [PIECES[k], ...distract(PIECES[k], Object.values(PIECES))], e: E[k] };
    }
  });

  const PL = {
    TF: ['TF', 'Eau douce tropicale (Tropical Fresh)'], F: ['F', 'Eau douce (Fresh)'], T: ['T', 'Eau de mer, zone tropicale (Tropical)'],
    S: ['S', 'Eau de mer, été (Summer)'], W: ['W', 'Eau de mer, hiver (Winter)'], WNA: ['WNA', 'Hiver en Atlantique Nord (Winter North Atlantic)']
  };
  C.visuel('plimsoll', {
    titre: 'Marque de franc-bord', desc: 'TF, F, T, S, W, WNA : quel trait pour quelle eau ?', serie: 8,
    make() {
      const mode = Math.random();
      if (mode < 0.15) return {
        svg: plimsoll('disque'), q: 'Le trait horizontal qui coupe le disque est au niveau de quelle ligne de charge ?',
        r: ['La ligne d\'été (S)', 'La ligne d\'hiver (W)', 'La ligne d\'eau douce (F)', 'La ligne tropicale (T)'],
        e: 'Le disque de Plimsoll est coupé à la hauteur de la ligne S (été, eau de mer). Les lettres de part et d\'autre (ici B V) sont celles de la société de classification qui a assigné le franc-bord.'
      };
      const id = U.pick(Object.keys(PL));
      const all = Object.values(PL).map((x) => x[1]);
      const aft = id === 'TF' || id === 'F';
      return {
        svg: plimsoll(id), q: 'Que signifie le trait en couleur ?', r: [PL[id][1], ...distract(PL[id][1], all)],
        e: `<b>${id}</b> = ${PL[id][1]}. ${aft ? 'Les deux traits d\'eau douce (F et TF) sont du côté du disque (vers l\'arrière).' : 'Les traits d\'eau de mer (T, S, W, WNA) sont vers l\'avant.'} Du haut vers le bas : TF, puis F et T, puis S (au niveau du disque), W, WNA. Plus l\'eau est douce et chaude, plus on peut s\'enfoncer.`
      };
    }
  });

  C.visuel('equilibre', {
    titre: 'G, B, m : stable ou pas ?', desc: 'Lire la position du centre de gravité et du métacentre.', serie: 8,
    make() {
      const gm = U.pick(['pos', 'pos', 'nul', 'neg']);
      const I = U.pick([16, 18, 20, 22]);
      if (Math.random() < 0.4) {
        const hl = U.pick(['G', 'B', 'm', 'GZ']);
        const N = { G: 'Le centre de gravité (le poids s\'y applique)', B: 'Le centre de carène (la poussée s\'y applique)', m: 'Le métacentre', GZ: 'Le bras de levier de redressement' };
        return {
          svg: carene({ I, gm: 'pos', hl, labels: false }), q: 'Que représente l\'élément en couleur ?', r: [N[hl], ...Object.values(N).filter((x) => x !== N[hl])],
          e: 'G : centre de gravité, ne bouge pas quand le navire s\'incline. B : centre de carène, il se déplace du côté qui s\'enfonce. m : métacentre, à l\'intersection de la poussée et de l\'axe du navire. GZ = (r − a) sin I.'
        };
      }
      const R = {
        pos: 'Il se redresse : G sous m, GM positif, couple de redressement',
        nul: 'Il reste incliné : G confondu avec m, GM nul, pas de couple',
        neg: 'Il s\'incline encore : G au-dessus de m, GM négatif, couple de chavirement'
      };
      return {
        svg: carene({ I, gm }), q: 'Une vague a incliné ce navire. Que se passe-t-il ensuite ?', r: [R[gm], ...Object.values(R).filter((x) => x !== R[gm])],
        e: gm === 'pos' ? 'G est sous m : la poussée (en B) et le poids (en G) forment un couple qui ramène le navire droit.' : gm === 'nul' ? 'G et m sont confondus : poids et poussée sont sur la même verticale, aucun couple. Le navire reste gîté.' : 'G est au-dessus de m : le couple fait tourner le navire dans le sens de la gîte. Danger de chavirement.'
      };
    }
  });

  /* ---------- Calculs ---------- */
  const EAUX = [[1.025, 'eau de mer'], [1, 'eau douce'], [1.015, 'eau saumâtre (estuaire)']];
  const CHAL = ['un chaland', 'une barge', 'un ponton', 'un bac'];

  C.gen('stab-te', {
    titre: 'Tirant d\'eau d\'une barge', desc: 'P = V × d, puis TE = V / S (coque en forme de boîte).',
    make() {
      const L = U.rnd(18, 40), l = U.rnd(4, 9), d = U.pick(EAUX);
      if (Math.random() < 0.35) {
        const te1 = U.rndf(1.2, 2.6, 0.01), P = U.r1(L * l * te1 * 1.025), te2 = U.r2(te1 * 1.025);
        return {
          q: `${U.pick(CHAL).replace(/^./, (x) => x.toUpperCase())} de ${L} × ${l} m cale <b>${U.fr(te1)} m</b> en eau de mer (d = 1,025). Il remonte le fleuve jusqu'en eau douce. Quel sera son tirant d'eau ?`,
          champs: [{ label: 'TE en eau douce', a: te2, tol: 0.01, unit: 'm' }],
          sol: U.vt([['S = L × l', `${L} × ${l} = ${L * l} m²`], ['V (mer) = S × TE', `${L * l} × ${U.fr(te1)} = ${U.fr(L * l * te1, 1)} m³`], ['P = V × 1,025', `${U.fr(P, 1)} t`], ['V (douce) = P / 1', `${U.fr(P, 1)} m³`], ['TE = V / S', `<b>${U.fr(te2)} m</b>`, 'res']]) + '<p>Le poids ne change pas, mais l\'eau douce porte moins : le navire <b>s\'enfonce</b>. Raccourci : TE douce = TE mer × 1,025.</p>'
        };
      }
      const P = U.rnd(12, 60) * 10, V = U.r1(P / d[0]), te = U.r2(P / d[0] / (L * l));
      return {
        q: `${U.pick(CHAL).replace(/^./, (x) => x.toUpperCase())} de <b>${P} t</b>, de ${L} m × ${l} m, flotte en ${d[1]} (d = ${U.fr(d[0], 3)}). Volume immergé et tirant d'eau ?`,
        champs: [{ label: 'Volume de carène V', a: V, tol: 0.6, unit: 'm³' }, { label: 'Tirant d\'eau TE', a: te, tol: 0.01, unit: 'm' }],
        sol: U.vt([['V = P / d', `${P} / ${U.fr(d[0], 3)} = <b>${U.fr(V, 1)} m³</b>`], ['S = L × l', `${L} × ${l} = ${L * l} m²`], ['TE = V / S', `${U.fr(V, 1)} / ${L * l} = <b>${U.fr(te)} m</b>`, 'res']]) + '<p class="small muted">Comme l\'exemple du cours : chaland de 240 t, 30 × 4 m → 1,95 m en eau de mer, 2 m en eau douce.</p>'
      };
    }
  });

  C.gen('stab-deplacement', {
    titre: 'Déplacement et port en lourd', desc: 'Lège + port en lourd = déplacement en charge ; P = V × d.',
    make() {
      const m = U.rnd(0, 2);
      if (m === 0) {
        const lege = U.rnd(60, 180), pel = U.rnd(20, 120);
        return {
          q: `Un navire a un déplacement lège de <b>${lege} t</b> et un déplacement en charge de <b>${lege + pel} t</b>. Quel est son port en lourd ?`,
          champs: [{ label: 'Port en lourd', a: pel, tol: 0, unit: 't' }],
          sol: U.vt([['Port en lourd = charge − lège', `${lege + pel} − ${lege} = <b>${pel} t</b>`, 'res']]) + '<p>Le port en lourd comprend <b>tout</b> ce qu\'on embarque : cargaison, combustible, eau douce, vivres, équipage, engins de pêche.</p>'
        };
      }
      if (m === 1) {
        const lege = U.rnd(80, 220), fuel = U.rnd(4, 20), eau = U.rnd(2, 10), car = U.rnd(20, 90), tot = lege + fuel + eau + car;
        return {
          q: `Navire lège : <b>${lege} t</b>. On embarque ${fuel} t de gasoil, ${eau} t d'eau douce et ${car} t de cargaison. Déplacement et port en lourd embarqué ?`,
          champs: [{ label: 'Déplacement', a: tot, tol: 0, unit: 't' }, { label: 'Port en lourd embarqué', a: tot - lege, tol: 0, unit: 't' }],
          sol: U.vt([['Port en lourd = gasoil + eau + cargaison', `${fuel} + ${eau} + ${car} = ${tot - lege} t`], ['Déplacement = lège + port en lourd', `${lege} + ${tot - lege} = <b>${tot} t</b>`, 'res']])
        };
      }
      const V = U.rnd(800, 3200), d = U.pick(EAUX), P = U.r1(V * d[0]);
      return {
        q: `La carène d'un navire occupe <b>${U.nb(V)} m³</b> en ${d[1]} (d = ${U.fr(d[0], 3)}). Quel est son déplacement ?`,
        champs: [{ label: 'Déplacement P', a: P, tol: 0.6, unit: 't' }],
        sol: U.vt([['P = V × d', `${U.nb(V)} × ${U.fr(d[0], 3)} = <b>${U.nb(P, 1)} t</b>`, 'res']]) + '<p>Archimède : le navire flotte quand son poids est égal au poids du volume d\'eau qu\'il déplace.</p>'
      };
    }
  });

  C.gen('stab-kg', {
    titre: 'Centre de gravité KG et LCG', desc: 'Méthode des moments : Σ(P × Z) / ΣP et Σ(P × X) / ΣP.',
    make() {
      const lege = [U.rnd(15, 40) * 10, U.rndf(12, 20, 0.1), U.rndf(2.4, 3.6, 0.1)];
      const items = U.shuffle([
        ['Gasoil (double fond)', U.rnd(8, 30), U.rndf(9, 16, 0.1), U.rndf(0.4, 0.9, 0.1)],
        ['Eau douce', U.rnd(4, 15), U.rndf(4, 10, 0.1), U.rndf(1.2, 2.5, 0.1)],
        ['Cargaison en cale', U.rnd(30, 120), U.rndf(14, 26, 0.1), U.rndf(2, 3.5, 0.1)],
        ['Pontée', U.rnd(10, 40), U.rndf(10, 24, 0.1), U.rndf(4.5, 6.5, 0.1)],
        ['Vivres', U.rnd(2, 6), U.rndf(20, 28, 0.1), U.rndf(4, 5.5, 0.1)]
      ]).slice(0, U.rnd(2, 3));
      const rows = [['Navire lège', ...lege], ...items];
      const decharge = Math.random() < 0.3;
      if (decharge) rows[rows.length - 1][1] = -Math.min(rows[rows.length - 1][1], 20);
      const SP = rows.reduce((a, r) => a + r[1], 0);
      const SX = rows.reduce((a, r) => a + r[1] * r[2], 0), SZ = rows.reduce((a, r) => a + r[1] * r[3], 0);
      const KG = U.r2(SZ / SP), LCG = U.r2(SX / SP);
      const tbl = (sol) => `<div class="tw"><table><tr><th></th><th>P (t)</th><th>X (m)</th><th>Z (m)</th>${sol ? '<th>P × X</th><th>P × Z</th>' : ''}</tr>${rows.map((r) => `<tr><td>${r[0]}${r[1] < 0 ? ' (débarqué)' : ''}</td><td>${U.nb(r[1])}</td><td>${U.fr(r[2], 1)}</td><td>${U.fr(r[3], 1)}</td>${sol ? `<td>${U.nb(r[1] * r[2], 1)}</td><td>${U.nb(r[1] * r[3], 1)}</td>` : ''}</tr>`).join('')}${sol ? `<tr><th>Total</th><th>${U.nb(SP)}</th><td></td><td></td><th>${U.nb(SX, 1)}</th><th>${U.nb(SZ, 1)}</th></tr>` : ''}</table></div>`;
      return {
        q: `Calcule la nouvelle position du centre de gravité (X depuis la perpendiculaire arrière, Z depuis la quille).${decharge ? ' Attention : la dernière ligne est <b>débarquée</b>, son poids compte en négatif.' : ''}${tbl(false)}`,
        champs: [{ label: 'KG', a: KG, tol: 0.02, unit: 'm' }, { label: 'LCG', a: LCG, tol: 0.02, unit: 'm' }],
        sol: tbl(true) + U.vt([['KG = Σ(P × Z) / ΣP', `${U.nb(SZ, 1)} / ${U.nb(SP)} = <b>${U.fr(KG)} m</b>`, 'res'], ['LCG = Σ(P × X) / ΣP', `${U.nb(SX, 1)} / ${U.nb(SP)} = <b>${U.fr(LCG)} m</b>`, 'res']]) + '<p>On multiplie chaque poids par sa distance (le <b>moment</b>), on additionne, on divise par le nouveau déplacement.</p>'
      };
    }
  });

  C.gen('stab-gz', {
    titre: 'Bras de levier GZ et module de stabilité', desc: 'GZ = (r − a) sin I ; MSIT = P (r − a).',
    make() {
      const P = U.rnd(8, 60) * 10, r = U.rndf(1.6, 3.8, 0.05), a = U.r2(r - U.rndf(0.3, 1.2, 0.05)), I = U.rnd(4, 15);
      const mG = U.r2(r - a), GZ = U.r2(mG * Math.sin(U.rad(I))), Mt = U.r1(P * mG * Math.sin(U.rad(I))), MSIT = U.r1(P * mG);
      return {
        q: `Navire de <b>${P} t</b>. Rayon métacentrique r = <b>${U.fr(r)} m</b>, distance a = GB = <b>${U.fr(a)} m</b>. Il gîte de <b>${I}°</b> sous un coup de vent. Calcule mG, GZ, le moment de redressement et le MSIT.`,
        champs: [{ label: 'mG = r − a', a: mG, tol: 0.01, unit: 'm' }, { label: 'GZ', a: GZ, tol: 0.01, unit: 'm' }, { label: 'Moment de redressement', a: Mt, tol: Math.max(0.6, P * 0.006), unit: 't·m' }, { label: 'MSIT', a: MSIT, tol: 0.6, unit: 't·m' }],
        sol: U.vt([['mG = r − a', `${U.fr(r)} − ${U.fr(a)} = ${U.fr(mG)} m`], ['GZ = mG × sin I', `${U.fr(mG)} × sin ${I}° = <b>${U.fr(GZ)} m</b>`, 'res'], ['Moment = P × GZ', `${P} × ${U.fr(mG * Math.sin(U.rad(I)), 3)} = <b>${U.fr(Mt, 1)} t·m</b>`, 'res'], ['MSIT = P × (r − a)', `${P} × ${U.fr(mG)} = <b>${U.fr(MSIT, 1)} t·m</b>`, 'res']]) + '<p>Formule valable pour les <b>petites inclinaisons</b> (moins de 15°), quand m reste fixe. Le MSIT sert à comparer la stabilité initiale : il ne dépend pas de l\'angle.</p>'
      };
    }
  });

  C.gen('stab-kn', {
    titre: 'GZ par les pantocarènes', desc: 'Grands angles : GZ = KN − KG × sin θ.',
    make() {
      const KG = U.rndf(2.2, 4.2, 0.05), th = U.pick([10, 20, 30, 40, 50]);
      const KN = U.r2(KG * Math.sin(U.rad(th)) + U.rndf(-0.15, 0.6, 0.01));
      const GZ = U.r2(KN - KG * Math.sin(U.rad(th)));
      return {
        q: `Pour ce cas de chargement, KG = <b>${U.fr(KG)} m</b>. La courbe pantocarène donne KN = <b>${U.fr(KN)} m</b> à <b>${th}°</b> de gîte. Que vaut GZ ? Le navire se redresse-t-il ?`,
        champs: [{ label: 'GZ', a: GZ, tol: 0.01, unit: 'm' }, { type: 'choix', label: 'À cet angle', a: GZ > 0 ? 'Il se redresse (GZ > 0)' : GZ < 0 ? 'Il chavire (GZ < 0)' : 'Équilibre indifférent (GZ = 0)', options: ['Il se redresse (GZ > 0)', 'Il chavire (GZ < 0)', 'Équilibre indifférent (GZ = 0)'] }],
        sol: U.vt([['KG × sin θ', `${U.fr(KG)} × sin ${th}° = ${U.fr(KG * Math.sin(U.rad(th)), 3)} m`], ['GZ = KN − KG sin θ', `${U.fr(KN)} − ${U.fr(KG * Math.sin(U.rad(th)), 3)} = <b>${U.fr(GZ)} m</b>`, 'res']]) + '<p>KN est le bras de levier qu\'on aurait si G était sur la quille (point K). Au-delà de 5 à 8°, la forme de la carène compte : on ne peut plus utiliser (r − a) sin I. En calculant GZ tous les 10°, on trace la <b>courbe des GZ</b>.</p>'
      };
    }
  });

  const EFFETS = [
    ['On remplit les doubles fonds de gasoil.', 'G descend : la stabilité augmente', 'Un poids ajouté attire G vers lui. Les doubles fonds sont en bas.'],
    ['On charge de la cargaison en pontée.', 'G monte : la stabilité diminue', 'Le poids ajouté est haut : G monte, GM diminue.'],
    ['Pendant la traversée, on consomme le gasoil des doubles fonds.', 'G monte : la stabilité diminue', 'On enlève un poids situé en bas : G s\'en éloigne, donc monte.'],
    ['On décharge toute la pontée.', 'G descend : la stabilité augmente', 'On enlève un poids situé en haut : G descend.'],
    ['On transfère du ballast de bâbord vers tribord.', 'G se déplace vers tribord : gîte sur tribord', 'Un transfert déplace G dans le même sens que le poids.'],
    ['On décharge de la cargaison côté tribord seulement.', 'G se déplace vers bâbord : gîte sur bâbord', 'G s\'éloigne du poids enlevé.'],
    ['La grue soulève un colis de 5 t posé au fond de la cale.', 'G monte d\'un coup : le poids agit en tête de flèche', 'Dès qu\'il décolle, le poids suspendu agit au point de suspension (tête de flèche).'],
    ['Une citerne de ballast est à moitié pleine et le navire roule.', 'G virtuel monte : la stabilité diminue (carène liquide)', 'Le liquide se déplace avec la gîte : c\'est la carène liquide. Garder les citernes pleines ou vides.'],
    ['De la glace s\'accumule sur les superstructures.', 'G monte et le navire s\'alourdit : la stabilité diminue', 'Givrage : poids ajouté en hauteur, parfois d\'un seul bord. On casse la glace en commençant par le haut.'],
    ['Le navire a une gîte permanente due à un mauvais chargement. On veut la corriger en ajoutant un poids.', 'Placer le poids le plus bas possible, du bord haut', 'Un poids ajouté bas corrige la gîte sans remonter G.']
  ];
  C.gen('stab-effet', {
    titre: 'Effet des poids sur G', desc: 'Ajouter, enlever, transférer, suspendre : où va G ?',
    make() {
      const [sit, good, e] = U.pick(EFFETS);
      const opts = [good, ...U.shuffle([...new Set(EFFETS.map((x) => x[1]))].filter((x) => x !== good)).slice(0, 3)];
      return {
        q: `${sit} Quel est l'effet sur le centre de gravité G ?`,
        champs: [{ type: 'choix', label: 'Effet', a: good, options: U.shuffle(opts) }],
        sol: `<p><b>${good}.</b> ${e}</p><p class="small muted">Règle : un poids <b>ajouté</b> attire G vers lui ; un poids <b>enlevé</b> l'éloigne ; un poids <b>transféré</b> déplace G dans le même sens.</p>`
      };
    }
  });

  C.gen('stab-carene', {
    titre: 'Réduire une carène liquide', desc: 'Cloisonner en n compartiments divise l\'effet par n².',
    make() {
      const n = U.pick([2, 3, 4]), base = U.pick([12, 16, 18, 24, 27, 32, 36, 45, 48]), res = U.r2(base / (n * n));
      return {
        q: `Une citerne partiellement remplie fait perdre <b>${base} cm</b> de GM (effet de carène liquide). On la divise par des cloisons longitudinales en <b>${n} compartiments</b>. Combien de GM perd-on encore ?`,
        champs: [{ label: 'Perte de GM', a: res, tol: 0.05, unit: 'cm' }],
        sol: U.vt([['Effet divisé par n²', `${n}² = ${n * n}`], ['Nouvelle perte', `${base} / ${n * n} = <b>${U.fr(res)} cm</b>`, 'res']]) + '<p>Exemple du cours : 3 compartiments → effet divisé par 9. Le mieux reste d\'avoir des citernes <b>pleines ou vides</b>.</p>'
      };
    }
  });

  C.gen('stab-assiette', {
    titre: 'Différence et assiette', desc: 'TE AR − TE AV : sur l\'arrière ou sur le nez ?',
    make() {
      const av = U.rndf(1.4, 3.4, 0.05), diff = U.pick([-1, 1, 1, 1]) * U.rndf(0.05, 0.9, 0.05), ar = U.r2(av + diff);
      const cm = Math.round((ar - av) * 100), moy = U.r2((av + ar) / 2);
      const st = cm > 0 ? 'Sur l\'arrière (assiette positive)' : 'Sur le nez (assiette négative)';
      return {
        q: `Tirant d'eau avant <b>${U.fr(av)} m</b>, tirant d'eau arrière <b>${U.fr(ar)} m</b>. Calcule la différence et le tirant d'eau moyen.`,
        champs: [{ label: 'Différence TE AR − TE AV', a: cm, tol: 0, unit: 'cm' }, { label: 'TE moyen', a: moy, tol: 0.01, unit: 'm' }, { type: 'choix', label: 'Le navire est', a: st, options: ['Sur l\'arrière (assiette positive)', 'Sur le nez (assiette négative)', 'Sans assiette'] }],
        sol: U.vt([['Différence = TE AR − TE AV', `${U.fr(ar)} − ${U.fr(av)} = <b>${cm > 0 ? '+' : ''}${cm} cm</b>`, 'res'], ['TE moyen = (AV + AR) / 2', `<b>${U.fr(moy)} m</b>`, 'res']]) + `<p>${cm > 0 ? 'Plus enfoncé à l\'arrière : situation habituelle, assiette positive.' : 'Plus enfoncé à l\'avant : le navire est « sur le nez », assiette négative.'} Exemple du cours : AV 5 m, AR 5,75 m → assiette positive de 75 cm.</p>`
      };
    }
  });
})();
