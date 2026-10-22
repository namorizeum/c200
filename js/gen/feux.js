/* Dessins et quiz visuels : feux des navires (nuit), marques (jour), signaux sonores, balisage */
(function () {
  'use strict';
  const C = window.C200, U = C.u;
  let uid = 0;
  const COL = { w: '#fff6dc', r: '#ff3b30', g: '#2fe07a', y: '#ffd23f', b: '#3d8bff' };
  const NOM = { w: 'blanc', r: 'rouge', g: 'vert', y: 'jaune' };

  // ---------- Types de navires de nuit (feux) ----------
  // mh: nb de feux de tête de mât superposés (mât avant) ; mh2: feu de tête de mât arrière plus haut ;
  // side: feux de côté ; stern: feu de poupe ; tow: feu de remorquage ; stack: feux tout horizon superposés (haut -> bas)
  // anc: feux de mouillage (1 = un seul, 2 = avant haut + arrière bas) ; allw: un feu blanc tout horizon ; yflash: feu jaune à éclats
  const TYPES = [
    { id: 'pm', nom: 'Navire à moteur faisant route, moins de 50 m', l: { mh: 1, side: 1, stern: 1 }, regle: 'Règle 23 : un feu de tête de mât, feux de côté, feu de poupe.' },
    { id: 'pm50', nom: 'Navire à moteur faisant route, 50 m ou plus', l: { mh: 1, mh2: 1, side: 1, stern: 1 }, regle: 'Règle 23 : deux feux de tête de mât (l\'arrière plus haut), feux de côté, feu de poupe.' },
    { id: 'voile', nom: 'Voilier faisant route', l: { side: 1, stern: 1 }, regle: 'Règle 25 : seulement les feux de côté et le feu de poupe, pas de feu de tête de mât.' },
    { id: 'voile2', nom: 'Voilier faisant route (feux rouge sur vert en tête de mât)', l: { side: 1, stern: 1, top: ['r', 'g'] }, regle: 'Règle 25 c : en option, rouge au-dessus de vert visibles sur tout l\'horizon, en plus des feux de côté et de poupe.' },
    { id: 'chal', nom: 'Chalutier en pêche, avec erre', l: { stack: ['g', 'w'], side: 1, stern: 1 }, regle: 'Règle 26 b : vert sur blanc (« vert sur blanc, chalutier en pêche »), plus feux de côté et de poupe s\'il a de l\'erre.' },
    { id: 'chal0', nom: 'Chalutier en pêche, sans erre', l: { stack: ['g', 'w'] }, regle: 'Règle 26 b : vert sur blanc seuls : il pêche mais n\'avance pas sur l\'eau.' },
    { id: 'peche', nom: 'Navire en pêche (pas un chalutier), avec erre', l: { stack: ['r', 'w'], side: 1, stern: 1 }, regle: 'Règle 26 c : rouge sur blanc (« rouge sur blanc, pêche autre que chalut »), plus feux de côté et de poupe.' },
    { id: 'peche0', nom: 'Navire en pêche (pas un chalutier), sans erre', l: { stack: ['r', 'w'] }, regle: 'Règle 26 c : rouge sur blanc seuls, sans erre.' },
    { id: 'nuc0', nom: 'Navire non maître de sa manœuvre, sans erre', l: { stack: ['r', 'r'] }, regle: 'Règle 27 a : deux feux rouges superposés.' },
    { id: 'nuc', nom: 'Navire non maître de sa manœuvre, avec erre', l: { stack: ['r', 'r'], side: 1, stern: 1 }, regle: 'Règle 27 a : deux rouges superposés + feux de côté et de poupe. Jamais de feu de tête de mât.' },
    { id: 'ram', nom: 'Navire à capacité de manœuvre restreinte, avec erre', l: { stack: ['r', 'w', 'r'], mh: 1, side: 1, stern: 1 }, regle: 'Règle 27 b : rouge-blanc-rouge + feu de tête de mât, feux de côté et de poupe.' },
    { id: 'ram0', nom: 'Navire à capacité de manœuvre restreinte, sans erre', l: { stack: ['r', 'w', 'r'] }, regle: 'Règle 27 b : rouge-blanc-rouge superposés.' },
    { id: 'te', nom: 'Navire handicapé par son tirant d\'eau', l: { stack: ['r', 'r', 'r'], mh: 1, mh2: 1, side: 1, stern: 1 }, regle: 'Règle 28 : trois rouges superposés en plus des feux d\'un navire à moteur.' },
    { id: 'pilote', nom: 'Bateau-pilote en service, faisant route', l: { stack: ['w', 'r'], side: 1, stern: 1 }, regle: 'Règle 29 : blanc sur rouge (« blanc sur rouge, pilote à bord »), plus feux de côté et de poupe.' },
    { id: 'rem', nom: 'Remorqueur, remorque de 200 m ou moins', l: { mh: 2, side: 1, stern: 1, tow: 1 }, regle: 'Règle 24 a : deux feux de tête de mât superposés, feux de côté, feu de poupe et feu jaune de remorquage au-dessus.' },
    { id: 'rem200', nom: 'Remorqueur, remorque de plus de 200 m', l: { mh: 3, side: 1, stern: 1, tow: 1 }, regle: 'Règle 24 a : trois feux de tête de mât superposés quand la remorque dépasse 200 m.' },
    { id: 'mouil', nom: 'Navire au mouillage, moins de 50 m', l: { anc: 1 }, regle: 'Règle 30 b : un seul feu blanc visible sur tout l\'horizon.' },
    { id: 'mouil50', nom: 'Navire au mouillage, 50 m ou plus', l: { anc: 2 }, regle: 'Règle 30 a : feu blanc à l\'avant, et un second plus bas à l\'arrière.' },
    { id: 'echoue', nom: 'Navire échoué', l: { anc: 2, stack: ['r', 'r'] }, regle: 'Règle 30 d : feux de mouillage + deux rouges superposés.' },
    { id: 'petit', nom: 'Petit navire à moteur (moins de 7 m, 7 nœuds max)', l: { allw: 1 }, regle: 'Règle 23 d : un feu blanc visible sur tout l\'horizon suffit (feux de côté si possible).' },
    { id: 'aero', nom: 'Aéroglisseur faisant route', l: { mh: 1, side: 1, stern: 1, yflash: 1 }, regle: 'Règle 23 b : feux d\'un navire à moteur + feu jaune à éclats tout horizon.' }
  ];
  const ASPECTS = {
    av: 'par l\'avant', tri: 'par son tribord', bab: 'par son bâbord', ar: 'par l\'arrière', avtri: 'sur l\'avant, côté tribord', avbab: 'sur l\'avant, côté bâbord'
  };

  // Liste des feux visibles pour un type et un angle de vue : [{x,y,c,fl}]
  function visibles(t, asp) {
    const L = t.l, out = [];
    const seeFwd = asp !== 'ar';
    const sens = asp === 'tri' || asp === 'avtri' ? 1 : asp === 'bab' || asp === 'avbab' ? -1 : 0; // +1 étrave à droite
    const sep = asp === 'tri' || asp === 'bab' ? 110 : asp === 'avtri' || asp === 'avbab' ? 38 : 0;
    const cx = 180;
    const fwdX = cx + sens * sep * 0.55, aftX = cx - sens * sep * 0.45;
    const stackX = sens ? cx + sens * sep * 0.1 : (L.mh || L.mh2 ? 206 : cx);
    if (seeFwd && L.mh) for (let k = 0; k < L.mh; k++) out.push({ x: fwdX, y: 118 - k * 18, c: 'w', m: 1 });
    if (seeFwd && L.mh2) out.push({ x: aftX, y: 118 - (L.mh || 1) * 18 - 14, c: 'w', m: 1 });
    if (L.side) {
      const sy = 146;
      if (asp === 'av') { out.push({ x: cx - 16, y: sy, c: 'g' }); out.push({ x: cx + 16, y: sy, c: 'r' }); }
      if (asp === 'tri' || asp === 'avtri') out.push({ x: cx + sens * sep * 0.25, y: sy, c: 'g' });
      if (asp === 'bab' || asp === 'avbab') out.push({ x: cx + sens * sep * 0.25, y: sy, c: 'r' });
    }
    if (asp === 'ar' && L.stern) out.push({ x: cx, y: 156, c: 'w' });
    if (asp === 'ar' && L.tow) out.push({ x: cx, y: 138, c: 'y' });
    if (L.stack) L.stack.forEach((c, k) => out.push({ x: stackX, y: 52 + k * 18 + (3 - L.stack.length) * 18, c }));
    if (L.top) L.top.forEach((c, k) => out.push({ x: stackX, y: 70 + k * 16, c }));
    if (L.anc === 1) out.push({ x: cx, y: 96, c: 'w' });
    if (L.anc === 2) {
      const fx = sens ? cx + sens * Math.max(sep, 30) * 0.6 : cx, ax = sens ? cx - sens * Math.max(sep, 30) * 0.6 : cx;
      if (asp === 'ar') { out.push({ x: cx, y: 150, c: 'w' }); out.push({ x: cx, y: 112, c: 'w' }); }
      else if (asp === 'av') { out.push({ x: cx, y: 112, c: 'w' }); out.push({ x: cx, y: 150, c: 'w' }); }
      else { out.push({ x: fx, y: 112, c: 'w' }); out.push({ x: ax, y: 150, c: 'w' }); }
    }
    if (L.allw) out.push({ x: cx, y: 96, c: 'w' });
    if (L.yflash) out.push({ x: stackX + (sens ? 0 : 0), y: 66, c: 'y', fl: 1 });
    return out;
  }
  function signature(t, asp) {
    return visibles(t, asp).map((p) => p.c + Math.round(p.x / 4) + ':' + Math.round(p.y / 4)).sort().join('|');
  }
  function silhouette(asp, anchored) {
    const sens = asp === 'tri' || asp === 'avtri' ? 1 : asp === 'bab' || asp === 'avbab' ? -1 : 0;
    const f = '#132330', s = '#1e3445';
    if (!sens) return `<path d="M152 168 L208 168 L200 158 L160 158 Z" fill="${f}" stroke="${s}"/>`;
    const w = asp === 'tri' || asp === 'bab' ? 130 : 60;
    const x0 = 180 - w, x1 = 180 + w;
    const bow = sens > 0 ? x1 : x0, stern = sens > 0 ? x0 : x1;
    return `<path d="M${stern} 158 L${bow - sens * 6} 158 L${bow + sens * 10} 150 L${bow - sens * 14} 170 L${stern + sens * 4} 170 Z" fill="${f}" stroke="${s}"/>` + (anchored ? '' : '');
  }
  function drawNight(t, asp, opt = {}) {
    const id = 'gl' + ++uid;
    const pts = visibles(t, asp);
    const w = opt.w || 360, h = 200;
    return `<svg viewBox="0 0 360 200" width="${w}" role="img" aria-label="Feux d'un navire vu de nuit">
      <defs><filter id="${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"/></filter></defs>
      <rect width="360" height="200" fill="#0b1620"/>
      <rect y="170" width="360" height="30" fill="#0e1d29"/>
      ${opt.sil === false ? '' : silhouette(asp)}
      ${pts.map((p) => `<g${p.fl ? ' class="blink"' : ''}><circle cx="${p.x}" cy="${p.y}" r="10" fill="${COL[p.c]}" opacity=".55" filter="url(#${id})"/><circle cx="${p.x}" cy="${p.y}" r="4.6" fill="${COL[p.c]}"/></g>`).join('')}
    </svg>`;
  }

  // ---------- Marques de jour ----------
  const SHAPES = {
    boule: (x, y) => `<circle cx="${x}" cy="${y}" r="11" fill="#111"/>`,
    coneH: (x, y) => `<path d="M${x} ${y - 12} L${x + 12} ${y + 11} L${x - 12} ${y + 11} Z" fill="#111"/>`,
    coneB: (x, y) => `<path d="M${x} ${y + 12} L${x + 12} ${y - 11} L${x - 12} ${y - 11} Z" fill="#111"/>`,
    bicone: (x, y) => `<path d="M${x} ${y - 14} L${x + 11} ${y} L${x} ${y + 14} L${x - 11} ${y} Z" fill="#111"/>`,
    cyl: (x, y) => `<rect x="${x - 9}" y="${y - 16}" width="18" height="32" fill="#111"/>`,
    sablier: (x, y) => `<path d="M${x - 12} ${y - 24} L${x + 12} ${y - 24} L${x} ${y} Z M${x - 12} ${y + 24} L${x + 12} ${y + 24} L${x} ${y} Z" fill="#111"/>`
  };
  const MARQUES = [
    { id: 'm-mouil', nom: 'Navire au mouillage', s: [['boule', 'avant']], regle: 'Règle 30 : une boule à l\'avant.' },
    { id: 'm-nuc', nom: 'Navire non maître de sa manœuvre', s: [['boule', 'mat'], ['boule', 'mat']], regle: 'Règle 27 a : deux boules superposées.' },
    { id: 'm-echoue', nom: 'Navire échoué', s: [['boule', 'mat'], ['boule', 'mat'], ['boule', 'mat']], regle: 'Règle 30 d : trois boules superposées.' },
    { id: 'm-ram', nom: 'Navire à capacité de manœuvre restreinte', s: [['boule', 'mat'], ['bicone', 'mat'], ['boule', 'mat']], regle: 'Règle 27 b : boule, bicône, boule.' },
    { id: 'm-te', nom: 'Navire handicapé par son tirant d\'eau', s: [['cyl', 'mat']], regle: 'Règle 28 : un cylindre.' },
    { id: 'm-peche', nom: 'Navire en train de pêcher', s: [['sablier', 'mat']], regle: 'Règle 26 : deux cônes réunis par la pointe (sablier).' },
    { id: 'm-voilmot', nom: 'Voilier qui avance aussi au moteur', s: [['coneB', 'avant']], voile: 1, regle: 'Règle 25 e : un cône pointe en bas, à l\'avant.' },
    { id: 'm-rem', nom: 'Remorquage, remorque de plus de 200 m', s: [['bicone', 'mat']], regle: 'Règle 24 : une marque biconique (sur le remorqueur et sur la remorque).' },
    { id: 'm-demin', nom: 'Navire en opération de déminage', s: [['boule', 'mat'], ['boule', 'vg'], ['boule', 'vd']], regle: 'Règle 27 f : trois boules (tête de mât + chaque bout de vergue). Rester à plus de 1 000 m.' },
    { id: 'm-engin', nom: 'Navire en pêche, engin déployé à plus de 150 m', s: [['sablier', 'mat'], ['coneH', 'cote']], regle: 'Règle 26 c : sablier + un cône pointe en haut du côté de l\'engin.' }
  ];
  function drawDay(mq) {
    let body = '';
    const mx = 180;
    let k = 0;
    const mats = mq.s.filter((s) => s[1] === 'mat').length;
    mq.s.forEach(([sh, pos]) => {
      if (pos === 'mat') { const y = 30 + k * 30 + (3 - mats) * 15; body += SHAPES[sh](mx, y + (sh === 'sablier' ? 14 : 0)); k++; }
      if (pos === 'avant') body += `<line x1="262" y1="120" x2="262" y2="62" stroke="#2a3b47" stroke-width="2"/>` + SHAPES[sh](262, 72);
      if (pos === 'vg') body += SHAPES[sh](140, 76);
      if (pos === 'vd') body += SHAPES[sh](220, 76);
      if (pos === 'cote') body += SHAPES[sh](86, 112);
    });
    const yard = mq.s.some((s) => s[1] === 'vg') ? '<line x1="136" y1="66" x2="224" y2="66" stroke="#2a3b47" stroke-width="3"/>' : '';
    const sail = mq.voile ? '<path d="M182 30 L182 132 L236 132 Z" fill="#f4f1e8" stroke="#9aa6ae"/>' : '';
    return `<svg viewBox="0 0 360 200" width="360" role="img" aria-label="Marques de jour d'un navire">
      <rect width="360" height="200" fill="#cfe4f1"/>
      <rect y="150" width="360" height="50" fill="#3f7396"/>
      <path d="M70 128 L300 128 L286 156 L84 156 Z" fill="#e7eef2" stroke="#2a3b47" stroke-width="2"/>
      <rect x="150" y="104" width="70" height="24" fill="#e7eef2" stroke="#2a3b47" stroke-width="2"/>
      <line x1="${mx}" y1="104" x2="${mx}" y2="20" stroke="#2a3b47" stroke-width="3"/>
      ${yard}${sail}${body}
    </svg>`;
  }
  function drawFlagA() {
    return `<svg viewBox="0 0 360 200" width="360" role="img" aria-label="Pavillon A">
      <rect width="360" height="200" fill="#cfe4f1"/><rect y="150" width="360" height="50" fill="#3f7396"/>
      <line x1="110" y1="40" x2="110" y2="170" stroke="#2a3b47" stroke-width="4"/>
      <rect x="112" y="44" width="70" height="90" fill="#fff" stroke="#2a3b47"/>
      <path d="M182 44 L262 44 L232 89 L262 134 L182 134 Z" fill="#1f4fbf" stroke="#2a3b47"/>
    </svg>`;
  }

  // ---------- Signaux sonores ----------
  const SONS = [
    { s: 'B', ctx: 'en vue', nom: 'Je viens sur tribord', e: 'Règle 34 a : un son bref.' },
    { s: 'BB', ctx: 'en vue', nom: 'Je viens sur bâbord', e: 'Règle 34 a : deux sons brefs.' },
    { s: 'BBB', ctx: 'en vue', nom: 'Je bats en arrière', e: 'Règle 34 a : trois sons brefs.' },
    { s: 'BBBBB', ctx: 'en vue', nom: 'Doute sur vos intentions (danger)', e: 'Règle 34 d : au moins cinq sons brefs et rapides.' },
    { s: 'LLB', ctx: 'en vue, chenal étroit', nom: 'Je compte vous rattraper par tribord', e: 'Règle 34 c : deux longs + un bref.' },
    { s: 'LLBB', ctx: 'en vue, chenal étroit', nom: 'Je compte vous rattraper par bâbord', e: 'Règle 34 c : deux longs + deux brefs.' },
    { s: 'LBLB', ctx: 'en vue, chenal étroit', nom: 'D\'accord pour être rattrapé', e: 'Règle 34 c ii : long, bref, long, bref.' },
    { s: 'L', ctx: 'à l\'approche d\'un coude', nom: 'J\'approche d\'un coude du chenal', e: 'Règle 34 e : un son prolongé (l\'autre répond par un son prolongé).' },
    { s: 'L', ctx: 'brume, toutes les 2 min', nom: 'Navire à moteur avec de l\'erre', e: 'Règle 35 a : un son prolongé toutes les 2 minutes au plus.' },
    { s: 'LL', ctx: 'brume, toutes les 2 min', nom: 'Navire à moteur stoppé, sans erre', e: 'Règle 35 b : deux sons prolongés toutes les 2 minutes.' },
    { s: 'LBB', ctx: 'brume, toutes les 2 min', nom: 'Voilier, pêcheur, remorqueur, NUC, capacité restreinte ou tirant d\'eau', e: 'Règle 35 c : un long + deux brefs.' },
    { s: 'LBBB', ctx: 'brume, toutes les 2 min', nom: 'Navire remorqué (avec équipage)', e: 'Règle 35 e : un long + trois brefs, juste après le remorqueur.' },
    { s: 'BBBB', ctx: 'brume', nom: 'Bateau-pilote en service (identification)', e: 'Règle 35 k : quatre sons brefs.' },
    { s: 'BLB', ctx: 'brume, navire immobile', nom: 'Navire au mouillage qui signale sa position', e: 'Règle 35 g : bref, long, bref pour prévenir un navire qui s\'approche.' }
  ];
  function drawSons(s, ctx) {
    let x = 20; const parts = [];
    for (const c of s) { const w = c === 'L' ? 70 : 20; parts.push(`<rect x="${x}" y="58" width="${w}" height="24" rx="12" fill="#ffd23f"/>`); x += w + 16; }
    const width = Math.max(240, x + 4);
    return `<svg viewBox="0 0 ${width} 120" width="${Math.min(360, width)}" role="img" aria-label="Signal sonore">
      <rect width="${width}" height="120" fill="#0b1620"/>
      ${parts.join('')}
      <text x="20" y="34" fill="#9fb3c1" font-family="system-ui, sans-serif" font-size="14">${U.esc(ctx)}</text>
      <text x="20" y="106" fill="#6d8496" font-family="system-ui, sans-serif" font-size="12">court ≈ 1 s · long = 4 à 6 s</text>
    </svg>`;
  }

  // ---------- Balisage ----------
  const R = '#d7261e', G = '#14915a', Y = '#f2c81d', K = '#141414', W = '#f7f7f2', B = '#1f5fbf';
  function buoy(kind) {
    // corps : bandes (bas -> haut) ; voyant : forme
    const pillar = (bands, top) => {
      const h = 98, x = 150, w = 60, y0 = 160 - h;
      let r = '';
      const n = bands.length;
      bands.forEach((c, i) => { r += `<rect x="${x}" y="${y0 + (h / n) * (n - 1 - i)}" width="${w}" height="${h / n + 0.5}" fill="${c}"/>`; });
      return `<rect x="${x}" y="${y0}" width="${w}" height="${h}" fill="none" stroke="#333" stroke-width="1.5"/>` + r + `<rect x="${x}" y="${y0}" width="${w}" height="${h}" fill="none" stroke="#333" stroke-width="1.5"/><line x1="180" y1="${y0}" x2="180" y2="${y0 - 58}" stroke="#333" stroke-width="3"/>` + top(180, y0 - 18);
    };
    const vstripes = (c1, c2, top) => {
      let r = ''; const x = 150, w = 60, y0 = 62, h = 98;
      for (let i = 0; i < 6; i++) r += `<rect x="${x + i * 10}" y="${y0}" width="10.5" height="${h}" fill="${i % 2 ? c2 : c1}"/>`;
      return r + `<rect x="${x}" y="${y0}" width="${w}" height="${h}" fill="none" stroke="#333" stroke-width="1.5"/><line x1="180" y1="${y0}" x2="180" y2="${y0 - 20}" stroke="#333" stroke-width="3"/>` + top(180, y0 - 18);
    };
    const T = {
      cyl: (c) => (x, y) => `<rect x="${x - 10}" y="${y - 24}" width="20" height="22" fill="${c}" stroke="#333"/>`,
      cone: (c) => (x, y) => `<path d="M${x} ${y - 26} L${x + 13} ${y - 2} L${x - 13} ${y - 2} Z" fill="${c}" stroke="#333"/>`,
      up: (x, y, c = K) => `<path d="M${x} ${y - 22} L${x + 12} ${y - 4} L${x - 12} ${y - 4} Z" fill="${c}"/>`,
      dn: (x, y, c = K) => `<path d="M${x} ${y - 4} L${x + 12} ${y - 22} L${x - 12} ${y - 22} Z" fill="${c}"/>`,
      card: (a, b) => (x, y) => T[a](x, y - 20) + T[b](x, y),
      balls2: (x, y) => `<circle cx="${x}" cy="${y - 30}" r="8" fill="${K}"/><circle cx="${x}" cy="${y - 10}" r="8" fill="${K}"/>`,
      ballR: (x, y) => `<circle cx="${x}" cy="${y - 11}" r="10" fill="${R}" stroke="#333"/>`,
      X: (x, y) => `<path d="M${x - 10} ${y - 24} L${x + 10} ${y - 4} M${x + 10} ${y - 24} L${x - 10} ${y - 4}" stroke="${Y}" stroke-width="6"/>`,
      plus: (x, y) => `<path d="M${x} ${y - 28} L${x} ${y - 2} M${x - 13} ${y - 15} L${x + 13} ${y - 15}" stroke="${Y}" stroke-width="6"/>`
    };
    const can = (c, band) => `<path d="M152 160 L208 160 L208 80 L152 80 Z" fill="${c}" stroke="#333" stroke-width="1.5"/>${band ? `<rect x="152" y="112" width="56" height="16" fill="${band}"/>` : ''}<line x1="180" y1="80" x2="180" y2="60" stroke="#333" stroke-width="3"/>` + T.cyl(c)(180, 60);
    const conical = (c, band) => `<path d="M180 70 L214 160 L146 160 Z" fill="${c}" stroke="#333" stroke-width="1.5"/>${band ? `<path d="M164 112 L196 112 L202 128 L158 128 Z" fill="${band}"/>` : ''}<line x1="180" y1="70" x2="180" y2="52" stroke="#333" stroke-width="3"/>` + T.cone(c)(180, 52);
    const shapes = {
      babord: () => can(R),
      tribord: () => conical(G),
      cpTri: () => can(R, G),
      cpBab: () => conical(G, R),
      nord: () => pillar([Y, K], T.card('up', 'up')),
      est: () => pillar([K, Y, K], T.card('up', 'dn')),
      sud: () => pillar([K, Y], T.card('dn', 'dn')),
      ouest: () => pillar([Y, K, Y], T.card('dn', 'up')),
      danger: () => pillar([K, R, K], T.balls2),
      saines: () => vstripes(R, W, T.ballR),
      speciale: () => pillar([Y], T.X),
      epave: () => vstripes(B, Y, T.plus)
    };
    return `<svg viewBox="80 0 200 170" width="360" role="img" aria-label="Marque de balisage">
      <rect x="80" y="0" width="200" height="200" fill="#d5e8f3"/><rect x="80" y="152" width="200" height="48" fill="#3f7396"/>
      ${shapes[kind]()}
      <path d="M130 158 Q180 166 230 158" stroke="#2c5d7c" stroke-width="3" fill="none"/>
    </svg>`;
  }
  const BOUEES = [
    { id: 'babord', nom: 'Marque latérale bâbord (zone A)', e: 'Rouge, forme cylindrique (« plate »), voyant cylindre. En entrant au port, laisse-la à bâbord. Feu rouge.' },
    { id: 'tribord', nom: 'Marque latérale tribord (zone A)', e: 'Verte, forme conique, voyant cône pointe en haut. En entrant au port, laisse-la à tribord. Feu vert.' },
    { id: 'cpTri', nom: 'Chenal préféré à tribord (zone A)', e: 'Forme bâbord, rouge avec une bande verte : le chenal principal est à tribord, laisse-la de préférence à bâbord en entrant. Feu rouge Fl(2+1).' },
    { id: 'cpBab', nom: 'Chenal préféré à bâbord (zone A)', e: 'Forme tribord, verte avec une bande rouge : le chenal principal est à bâbord, laisse-la de préférence à tribord en entrant. Feu vert Fl(2+1).' },
    { id: 'nord', nom: 'Cardinale Nord', e: 'Deux cônes pointes en haut, noir en haut et jaune en bas. Passe au nord. Feu blanc Q ou VQ continu.' },
    { id: 'est', nom: 'Cardinale Est', e: 'Cônes opposés par la base (forme d\'œuf), bandes noir-jaune-noir. Passe à l\'est. Feu Q(3) 10 s.' },
    { id: 'sud', nom: 'Cardinale Sud', e: 'Deux cônes pointes en bas, jaune en haut et noir en bas. Passe au sud. Feu Q(6) + éclat long 15 s.' },
    { id: 'ouest', nom: 'Cardinale Ouest', e: 'Cônes opposés par la pointe (sablier), jaune-noir-jaune. Passe à l\'ouest. Feu Q(9) 15 s.' },
    { id: 'danger', nom: 'Danger isolé', e: 'Noire avec une ou plusieurs bandes rouges, deux boules noires. Le danger est dessous : passe autour, pas trop près. Feu blanc Fl(2).' },
    { id: 'saines', nom: 'Eaux saines', e: 'Bandes verticales rouges et blanches, une boule rouge. Pas de danger autour (milieu de chenal, atterrissage). Feu blanc Iso, Oc, LFl 10 s ou Mo(A).' },
    { id: 'speciale', nom: 'Marque spéciale', e: 'Jaune avec un X jaune. Zone particulière (militaire, câbles, travaux…). Feu jaune.' },
    { id: 'epave', nom: 'Marque d\'épave (nouveau danger)', e: 'Bandes verticales bleues et jaunes, croix jaune. Feu alterné bleu et jaune. Reste en place jusqu\'à ce que l\'épave soit sur les cartes.' }
  ];
  const RYTHMES = [
    { f: 'Feu blanc Q ou VQ, continu', a: 'Cardinale Nord' },
    { f: 'Feu blanc Q(3) 10 s ou VQ(3) 5 s', a: 'Cardinale Est' },
    { f: 'Feu blanc Q(6) + LFl 15 s', a: 'Cardinale Sud' },
    { f: 'Feu blanc Q(9) 15 s', a: 'Cardinale Ouest' },
    { f: 'Feu blanc Fl(2)', a: 'Danger isolé' },
    { f: 'Feu blanc Iso, Oc, LFl 10 s ou Mo(A)', a: 'Eaux saines' },
    { f: 'Feu rouge Fl(2+1)', a: 'Chenal préféré à tribord (zone A)' },
    { f: 'Feu vert Fl(2+1)', a: 'Chenal préféré à bâbord (zone A)' },
    { f: 'Feu jaune', a: 'Marque spéciale' },
    { f: 'Feu alterné bleu / jaune', a: 'Marque d\'épave (nouveau danger)' },
    { f: 'Feu rouge Fl ou Q (zone A)', a: 'Marque latérale bâbord (zone A)' },
    { f: 'Feu vert Fl ou Q (zone A)', a: 'Marque latérale tribord (zone A)' }
  ];

  function distract(correct, pool, n = 3, ok = () => true) {
    return U.shuffle(pool.filter((x) => x !== correct && ok(x))).slice(0, n);
  }

  // expose les dessins aux fiches
  C.dessin = Object.assign(C.dessin || {}, {
    nuit: (id, asp, opt) => drawNight(TYPES.find((t) => t.id === id), asp, opt),
    jour: (id) => drawDay(MARQUES.find((m) => m.id === id)),
    pavillonA: drawFlagA,
    bouee: (id) => buoy(id),
    sons: drawSons
  });

  C.visuel('feux', {
    titre: 'Feux des navires de nuit', desc: 'Reconnais le navire et sa position avec ses feux.', serie: 10,
    make() {
      const t = U.pick(TYPES);
      let aspects = Object.keys(ASPECTS);
      // éviter les vues où le navire est impossible à reconnaître (ex. un seul feu blanc de poupe)
      aspects = aspects.filter((a) => {
        const sig = signature(t, a);
        return visibles(t, a).length >= (t.l.anc || t.l.allw ? 1 : 2) || TYPES.filter((o) => signature(o, a) === sig).length === 1;
      });
      const asp = U.pick(aspects);
      const sig = signature(t, asp);
      const twins = TYPES.filter((o) => o !== t && signature(o, asp) === sig).map((o) => o.nom);
      const vis = visibles(t, asp);
      const askAspect = (t.l.side && asp !== 'ar' && Math.random() < 0.25);
      if (askAspect) {
        const all = ['Je le vois par l\'avant', 'Je vois son tribord', 'Je vois son bâbord', 'Je le vois par l\'arrière'];
        const good = asp === 'av' ? all[0] : asp.includes('tri') ? all[1] : asp.includes('bab') ? all[2] : all[3];
        return {
          svg: drawNight(t, asp),
          q: 'Ce navire est un « ' + t.nom.toLowerCase() + ' ». Sous quel angle le vois-tu ?',
          r: [good, ...all.filter((x) => x !== good)],
          e: asp === 'av' ? 'Tu vois le vert ET le rouge : il vient droit sur toi.' : asp.includes('tri') ? 'Tu vois seulement le feu vert : c\'est son tribord.' : 'Tu vois seulement le feu rouge : c\'est son bâbord.'
        };
      }
      const wrong = distract(t.nom, TYPES.map((x) => x.nom), 3, (n) => !twins.includes(n));
      const desc = vis.map((p) => NOM[p.c]).join(', ');
      return {
        svg: drawNight(t, asp),
        q: 'De nuit, tu vois ces feux. Qui est-ce ?',
        r: [t.nom, ...wrong],
        e: `Vu ${ASPECTS[asp]}. ${t.regle}${twins.length ? ' (Sous cet angle, il pourrait aussi s\'agir de : ' + twins.join(' ; ').toLowerCase() + '.)' : ''}`
      };
    }
  });

  C.visuel('marques', {
    titre: 'Marques de jour', desc: 'Boules, cônes, cylindre : qui montre quoi le jour ?', serie: 10,
    make() {
      const all = MARQUES.concat([{ id: 'm-A', nom: 'Navire en opération de plongée (pavillon A)', regle: 'Règle 27 e : reproduction rigide du pavillon A d\'au moins 1 m.' }]);
      const m = U.pick(all);
      return { svg: m.id === 'm-A' ? drawFlagA() : drawDay(m), q: 'De jour, ce navire montre cette marque. Que signifie-t-elle ?', r: [m.nom, ...distract(m.nom, all.map((x) => x.nom))], e: m.regle };
    }
  });

  C.visuel('sons', {
    titre: 'Signaux sonores', desc: 'Sons brefs et prolongés : en vue et par brume.', serie: 10,
    make() {
      const s = U.pick(SONS);
      const pool = SONS.filter((x) => x.s !== s.s).map((x) => x.nom);
      return { svg: drawSons(s.s, s.ctx), q: 'Tu entends ce signal (' + s.ctx + '). Que veut-il dire ?', r: [s.nom, ...distract(s.nom, pool)], e: s.e };
    }
  });

  C.visuel('bouees', {
    titre: 'Balisage de jour', desc: 'Reconnais les marques IALA (zone A).', serie: 10,
    make() {
      const b = U.pick(BOUEES);
      if (['nord', 'est', 'sud', 'ouest'].includes(b.id) && Math.random() < 0.5) {
        const cap = { nord: 'au nord', est: 'à l\'est', sud: 'au sud', ouest: 'à l\'ouest' };
        const dang = { nord: 'au sud', est: 'à l\'ouest', sud: 'au nord', ouest: 'à l\'est' };
        const good = 'Je passe ' + cap[b.id] + ' de la marque (danger ' + dang[b.id] + ')';
        const others = Object.keys(cap).filter((k) => k !== b.id).map((k) => 'Je passe ' + cap[k] + ' de la marque (danger ' + dang[k] + ')');
        return { svg: buoy(b.id), q: 'Tu vois cette marque. Par où passes-tu ?', r: [good, ...others], e: b.e };
      }
      return { svg: buoy(b.id), q: 'Quelle est cette marque ?', r: [b.nom, ...distract(b.nom, BOUEES.map((x) => x.nom))], e: b.e };
    }
  });

  C.visuel('rythmes', {
    titre: 'Feux du balisage la nuit', desc: 'Rythme et couleur : quelle marque ?', serie: 10,
    make() {
      const x = U.pick(RYTHMES);
      return { q: 'De nuit, tu vois : <b>' + x.f + '</b>. Quelle marque est-ce ?', r: [x.a, ...distract(x.a, RYTHMES.map((y) => y.a))], e: (BOUEES.find((b) => b.nom === x.a) || {}).e || '' };
    }
  });
})();
