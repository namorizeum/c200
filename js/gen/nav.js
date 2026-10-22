/* Générateurs de calculs : navigation (compas, gisements, estime, courant, loxodromie, portée) */
(function () {
  'use strict';
  const C = window.C200, U = C.u;

  // petits outils d'affichage communs à tous les générateurs
  U.data = (rows) => `<div class="data">${rows.map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}</div>`;
  U.vt = (rows) => `<table class="vt">${rows.map(([k, v, cls]) => `<tr class="${cls || ''}"><th>${k}</th><td>${v}</td></tr>`).join('')}</table>`;
  U.deg1 = (x) => U.fr(Math.round(x * 2) / 2) + '°';           // au demi-degré
  U.sd = (x) => (x > 0 ? '+' : x < 0 ? '−' : '') + U.fr(Math.abs(Math.round(x * 2) / 2)) + '°';
  U.rel = (x) => { let v = ((x % 360) + 540) % 360 - 180; return v; };   // ramène entre -180 et +180
  U.vec = (dir, sp) => [sp * Math.sin(U.rad(dir)), sp * Math.cos(U.rad(dir))];
  U.dirOf = (v) => U.n360(U.deg(Math.atan2(v[0], v[1])));
  U.len = (v) => Math.hypot(v[0], v[1]);
  const NOMS_VENT = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  U.ventNom = (d) => NOMS_VENT[Math.round(U.n360(d) / 45) % 8];

  // tire une déclinaison et une déviation « réalistes »
  const tireD = () => U.pick([-6, -5, -4, -3, -2, -1, 1, 2]) + U.pick([0, 0, 0.5]);
  const tired = () => U.pick([-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7]) + U.pick([0, 0, 0.5]);
  // vent qui vient franchement d'un bord (pour que le signe de la dérive soit clair)
  function ventLateral(cap) {
    const bord = U.pick([1, -1]);           // +1 vent de tribord, -1 vent de bâbord
    const angle = U.rnd(45, 135) * bord;
    const venant = U.n360(Math.round((cap + angle) / 45) * 45);
    const rel = U.rel(venant - cap);
    if (Math.abs(rel) < 30 || Math.abs(rel) > 150) return ventLateral(cap);
    return { venant, nom: U.ventNom(venant), tribord: rel > 0 };
  }

  C.gen('cap-vrai', {
    titre: 'Du cap compas au cap vrai', desc: 'Cv = Cc + d + D. Calcule la variation W et le cap vrai.',
    make() {
      const Cc = U.rnd(0, 359), d = tired(), D = tireD();
      const W = d + D, Cv = U.n360(Cc + W);
      return {
        q: `Ton navire gouverne au cap compas. Calcule la variation W et le cap vrai Cv.` + U.data([['Cap compas Cc', U.ang(Cc)], ['Déviation d', U.ew(d)], ['Déclinaison D', U.ew(D)]]),
        champs: [{ label: 'Variation W', a: W, tol: 0.25, unit: '°', affiche: U.sd(W) }, { label: 'Cap vrai Cv', type: 'angle', a: Cv, tol: 0.5 }],
        sol: `<p>On calcule « à la verticale » (Est = +, Ouest = −) :</p>` + U.vt([['Cc', U.ang(Cc)], ['+ d', U.sd(d)], ['= Cm', U.deg1(U.n360(Cc + d))], ['+ D', U.sd(D)], ['= Cv', U.deg1(Cv), 'res']]) + `<p>W = d + D = ${U.sd(d)} ${U.sd(D)} = <b>${U.sd(W)}</b>. Vérification : Cv = Cc + W.</p>`
      };
    }
  });

  C.gen('cap-compas', {
    titre: 'Du cap vrai au cap compas', desc: 'Inverse : Cc = Cv − D − d (on inverse les signes en remontant).',
    make() {
      const Cv = U.rnd(0, 359), d = tired(), D = tireD();
      const Cm = U.n360(Cv - D), Cc = U.n360(Cm - d);
      return {
        q: `Tu as tracé un cap vrai sur la carte. Quel cap compas donner au barreur ?` + U.data([['Cap vrai Cv', U.ang(Cv)], ['Déclinaison D', U.ew(D)], ['Déviation d', U.ew(d)]]),
        champs: [{ label: 'Cap compas Cc', type: 'angle', a: Cc, tol: 0.5 }],
        sol: U.vt([['Cv', U.ang(Cv)], ['− D', U.sd(-D)], ['= Cm', U.deg1(Cm)], ['− d', U.sd(-d)], ['= Cc', U.deg1(Cc), 'res']]) + `<p>Ou en une fois : Cc = Cv − W avec W = ${U.sd(d + D)}.</p>`
      };
    }
  });

  C.gen('alignement', {
    titre: 'Variation et déviation par un alignement', desc: 'W = Zv − Zc, puis d = W − D.',
    make() {
      const Zv = U.rnd(0, 359), D = tireD(), d = tired(), W = D + d;
      const Zc = U.n360(Zv - W);
      const Zc2 = U.rnd(0, 359), Zv2 = U.n360(Zc2 + W);
      return {
        q: `Tu relèves un alignement (Zv lu sur la carte) au compas. Trouve la variation W, la déviation d, puis le relèvement vrai d'un phare relevé en même temps.` + U.data([['Zv de l\'alignement', U.ang(Zv)], ['Zc de l\'alignement', U.deg1(Zc)], ['Déclinaison D', U.ew(D)], ['Zc du phare', U.ang(Zc2)]]),
        champs: [{ label: 'Variation W', a: W, tol: 0.25, unit: '°', affiche: U.sd(W) }, { label: 'Déviation d', a: d, tol: 0.25, unit: '°', affiche: U.sd(d) }, { label: 'Zv du phare', type: 'angle', a: Zv2, tol: 0.5 }],
        sol: `<p>W = Zv − Zc = ${U.ang(Zv)} − ${U.deg1(Zc)} = <b>${U.sd(W)}</b></p><p>d = W − D = ${U.sd(W)} − (${U.sd(D)}) = <b>${U.sd(d)}</b></p><p>Phare : Zv = Zc + W = ${U.ang(Zc2)} ${U.sd(W)} = <b>${U.deg1(Zv2)}</b></p>`
      };
    }
  });

  C.gen('gisement', {
    titre: 'Gisement et relèvement', desc: 'Zv = Cv + Gt (gisement bâbord négatif).',
    make() {
      const Cc = U.rnd(0, 359), W = tired() + tireD();
      const Cv = U.n360(Cc + W);
      const mode = U.pick(['td', 'bd', 'travers']);
      let Gt, txt;
      if (mode === 'td') { Gt = U.rnd(10, 170); txt = Gt + '° tribord'; }
      else if (mode === 'bd') { Gt = -U.rnd(10, 170); txt = Math.abs(Gt) + '° bâbord'; }
      else { Gt = U.pick([90, -90]); txt = Gt > 0 ? 'par le travers tribord' : 'par le travers bâbord'; }
      const Zv = U.n360(Cv + Gt);
      return {
        q: `Tu relèves un phare au taximètre (gisement). Quel est son relèvement vrai ?` + U.data([['Cap compas Cc', U.ang(Cc)], ['Variation W', U.sd(W)], ['Gisement', txt]]),
        champs: [{ label: 'Relèvement vrai Zv', type: 'angle', a: Zv, tol: 0.5 }],
        sol: U.vt([['Cc', U.ang(Cc)], ['+ W', U.sd(W)], ['= Cv', U.deg1(Cv)], ['+ Gt', (Gt > 0 ? '+' : '−') + Math.abs(Gt) + '°'], ['= Zv', U.deg1(Zv), 'res']]) + `<p>Gisement tribord : on ajoute. Bâbord : on retranche (ou on ajoute 360 − gisement). Travers tribord = +90°, travers bâbord = −90°.</p>`
      };
    }
  });

  C.gen('estime-rs', {
    titre: 'Route surface avec la dérive', desc: 'Rs = Cv + dérive. Dérive + si le navire dérive vers tribord.',
    make() {
      const Cc = U.rnd(0, 359), d = tired(), D = tireD();
      const Cv = U.n360(Cc + d + D);
      const v = ventLateral(Cv);
      const der0 = U.rnd(2, 9);
      const der = v.tribord ? -der0 : der0;   // vent de tribord -> dérive vers bâbord (négative)
      const Rs = U.n360(Cv + der);
      return {
        q: `Calcule le cap vrai et la route surface (pas de courant).` + U.data([['Cap compas Cc', U.ang(Cc)], ['Déviation d', U.ew(d)], ['Déclinaison D', U.ew(D)], ['Dérive', der0 + '° par vent de ' + v.nom]]),
        champs: [{ label: 'Cap vrai Cv', type: 'angle', a: Cv, tol: 0.5 }, { label: 'Route surface Rs', type: 'angle', a: Rs, tol: 0.5 }],
        sol: `<p>Le vent de ${v.nom} vient de ton <b>${v.tribord ? 'tribord' : 'bâbord'}</b> : tu dérives vers ${v.tribord ? 'bâbord, dérive négative' : 'tribord, dérive positive'}.</p>` + U.vt([['Cc', U.ang(Cc)], ['+ d', U.sd(d)], ['+ D', U.sd(D)], ['= Cv', U.deg1(Cv)], ['+ dér', U.sd(der)], ['= Rs', U.deg1(Rs), 'res']])
      };
    }
  });

  C.gen('faire-valoir', {
    titre: 'Faire valoir une route', desc: 'On remonte la formule : Cc = Rs − dér − D − d.',
    make() {
      const Rs = U.rnd(0, 359), d = tired(), D = tireD();
      const v = ventLateral(Rs);
      const der0 = U.rnd(2, 8), der = v.tribord ? -der0 : der0;
      const Cv = U.n360(Rs - der), Cm = U.n360(Cv - D), Cc = U.n360(Cm - d);
      return {
        q: `Tu veux faire valoir une route surface tracée sur la carte. Quel cap compas prendre ?` + U.data([['Route surface voulue Rs', U.ang(Rs)], ['Dérive', der0 + '° par vent de ' + v.nom], ['Déclinaison D', U.ew(D)], ['Déviation d', U.ew(d)]]),
        champs: [{ label: 'Cap compas Cc', type: 'angle', a: Cc, tol: 0.5 }],
        sol: `<p>Vent de ${v.nom} = vent de ${v.tribord ? 'tribord' : 'bâbord'} → dérive ${v.tribord ? 'négative' : 'positive'} (${U.sd(der)}). On remonte en inversant les signes :</p>` + U.vt([['Rs', U.ang(Rs)], ['− dér', U.sd(-der)], ['= Cv', U.deg1(Cv)], ['− D', U.sd(-D)], ['= Cm', U.deg1(Cm)], ['− d', U.sd(-d)], ['= Cc', U.deg1(Cc), 'res']])
      };
    }
  });

  function triangleSvg(S, Ct, F, labels) {
    // dessine S puis Ct au bout, et F de l'origine (échelle automatique)
    const pts = [[0, 0], S, [S[0] + Ct[0], S[1] + Ct[1]]];
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const minx = Math.min(...xs), maxx = Math.max(...xs), miny = Math.min(...ys), maxy = Math.max(...ys);
    const sc = 150 / Math.max(maxx - minx, maxy - miny, 1);
    const X = (p) => 30 + (p[0] - minx) * sc, Y = (p) => 190 - (p[1] - miny) * sc;
    const ar = (a, b, col, w, dash) => `<line x1="${X(a)}" y1="${Y(a)}" x2="${X(b)}" y2="${Y(b)}" stroke="${col}" stroke-width="${w}" ${dash ? 'stroke-dasharray="5 4"' : ''} marker-end="url(#ah${col.slice(1)})"/>`;
    const mk = (c) => `<marker id="ah${c.slice(1)}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="${c}"/></marker>`;
    const cS = '#1d5a80', cC = '#a8166f', cF = '#17824a';
    return `<svg viewBox="0 0 240 220" width="240" role="img" aria-label="Triangle des vitesses">
      <defs>${mk(cS)}${mk(cC)}${mk(cF)}</defs>
      <rect width="240" height="220" fill="#f7fafb" rx="8"/>
      <line x1="${X([0, 0])}" y1="${Y([0, 0])}" x2="${X([0, 0])}" y2="${Y([0, 0]) - 30}" stroke="#7b8a95" stroke-width="1"/><text x="${X([0, 0]) - 4}" y="${Y([0, 0]) - 34}" font-size="10" fill="#566b7a">N</text>
      ${ar([0, 0], S, cS, 2)}${ar(S, pts[2], cC, 2)}${ar([0, 0], pts[2], cF, 3)}
      <text x="8" y="16" font-size="11" fill="${cS}">${labels[0]}</text><text x="8" y="30" font-size="11" fill="${cC}">${labels[1]}</text><text x="8" y="44" font-size="11" fill="${cF}">${labels[2]}</text>
    </svg>`;
  }

  C.gen('courant-rf', {
    titre: 'Route fond avec le courant', desc: 'Vecteur fond = vecteur surface + vecteur courant.',
    make() {
      const Rs = U.rnd(0, 359), Vs = U.rnd(6, 14), Dc = U.rnd(0, 71) * 5, Vc = U.rndf(0.8, 3.5, 0.1);
      const S = U.vec(Rs, Vs), Ct = U.vec(Dc, Vc), F = [S[0] + Ct[0], S[1] + Ct[1]];
      const Rf = U.dirOf(F), Vf = U.len(F);
      return {
        q: `Construis le triangle des vitesses sur une heure : trouve la route fond et la vitesse fond.` + U.data([['Route surface Rs', U.ang(Rs)], ['Vitesse surface Vs', Vs + ' nd'], ['Courant porte au', U.ang(Dc)], ['Vitesse du courant', U.fr(Vc) + ' nd']]),
        champs: [{ label: 'Route fond Rf', type: 'angle', a: Rf, tol: 2 }, { label: 'Vitesse fond Vf', a: U.r1(Vf), tol: 0.3, unit: 'nd' }],
        svg: triangleSvg(S, Ct, F, ['Surface (Rs, Vs)', 'Courant', 'Fond (Rf, Vf)']),
        sol: `<p>Sur la carte : du point de départ, trace 1 h de Rs (${Vs} M au ${U.ang(Rs)}), puis au bout 1 h de courant (${U.fr(Vc)} M au ${U.ang(Dc)}). Le vecteur du départ au bout du courant est le vecteur <b>fond</b>.</p><p>Rf ≈ <b>${U.ang(Rf)}</b>, Vf ≈ <b>${U.fr(U.r1(Vf))} nd</b> (sur la carte, une tolérance de 1 à 2° est normale).</p>`
      };
    }
  });

  C.gen('courant-rs', {
    titre: 'Cap à prendre pour contrer le courant', desc: 'On connaît la route fond voulue et le courant : trouver Rs et Vf.',
    make() {
      for (let k = 0; k < 50; k++) {
        const Rf = U.rnd(0, 359), Vs = U.rnd(7, 14), Dc = U.rnd(0, 71) * 5, Vc = U.rndf(0.8, 3, 0.1);
        const u = U.vec(Rf, 1), n = [u[1], -u[0]];          // n : perpendiculaire vers la droite
        const Ct = U.vec(Dc, Vc);
        const cp = Ct[0] * n[0] + Ct[1] * n[1], cu = Ct[0] * u[0] + Ct[1] * u[1];
        if (Math.abs(cp) >= Vs * 0.9) continue;
        const a = Math.sqrt(Vs * Vs - cp * cp);
        const S = [a * u[0] - cp * n[0], a * u[1] - cp * n[1]];
        const Vf = a + cu; if (Vf < 2) continue;
        const Rs = U.dirOf(S);
        const F = [S[0] + Ct[0], S[1] + Ct[1]];
        return {
          q: `Tu veux suivre une route fond tracée sur la carte malgré le courant. Quelle route surface prendre, et quelle sera ta vitesse fond ?` + U.data([['Route fond voulue Rf', U.ang(Rf)], ['Vitesse surface Vs', Vs + ' nd'], ['Courant porte au', U.ang(Dc)], ['Vitesse du courant', U.fr(Vc) + ' nd']]),
          champs: [{ label: 'Route surface Rs', type: 'angle', a: Rs, tol: 2 }, { label: 'Vitesse fond Vf', a: U.r1(Vf), tol: 0.3, unit: 'nd' }],
          svg: triangleSvg(S, Ct, F, ['Surface à trouver', 'Courant', 'Fond voulue']),
          sol: `<p>Méthode de la carte : trace la Rf ; du départ, trace 1 h de courant ; du bout du courant, prends au compas une ouverture de Vs = ${Vs} M et coupe la Rf. Le segment bout du courant → point trouvé donne la <b>Rs</b> ; le départ → point trouvé donne la <b>Vf</b>.</p><p>Rs ≈ <b>${U.ang(Rs)}</b> (on corrige ${U.sd(U.rel(Rs - Rf))} par rapport à la Rf), Vf ≈ <b>${U.fr(U.r1(Vf))} nd</b>.</p>`
        };
      }
      return this.make();
    }
  });

  C.gen('courant-reel', {
    titre: 'Trouver le courant subi', desc: 'Courant = vecteur fond − vecteur surface.',
    make() {
      const Rs = U.rnd(0, 359), Vs = U.rnd(6, 13), Dc = U.rnd(0, 71) * 5, Vc = U.rndf(0.8, 3, 0.1);
      const T = U.pick([60, 80, 90, 100, 120]);
      const S = U.vec(Rs, Vs), Ct = U.vec(Dc, Vc), F = [S[0] + Ct[0], S[1] + Ct[1]];
      const Rf = Math.round(U.dirOf(F)), Df = U.r1(U.len(F) * T / 60);
      const F2 = U.vec(Rf, Df / (T / 60));
      const C2 = [F2[0] - S[0], F2[1] - S[1]];
      const Dc2 = U.dirOf(C2), Vc2 = U.len(C2);
      return {
        q: `Après ${U.dur(T)} de route, un point par relèvements te place à une certaine distance du départ. Quel courant as-tu subi ?` + U.data([['Route surface Rs', U.ang(Rs)], ['Vitesse surface Vs', Vs + ' nd'], ['Durée', U.dur(T)], ['Point réel : route fond', U.ang(Rf)], ['Point réel : distance', U.fr(Df) + ' M']]),
        champs: [{ label: 'Le courant porte au', type: 'angle', a: Dc2, tol: 4 }, { label: 'Vitesse du courant', a: U.r1(Vc2), tol: 0.3, unit: 'nd' }],
        sol: `<p>Vf = ${U.fr(Df)} / ${U.fr(T / 60)} h = ${U.fr(U.r1(Df / (T / 60)))} nd. Trace 1 h de surface (${Vs} M au ${U.ang(Rs)}) et 1 h de fond (${U.fr(U.r1(Df / (T / 60)))} M au ${U.ang(Rf)}) depuis le même point.</p><p>Le courant va <b>du bout de la surface au bout du fond</b> : il porte au <b>${U.ang(Dc2)}</b> à <b>${U.fr(U.r1(Vc2))} nd</b>.</p><p>(Autre méthode : distance entre point estimé et point réel ÷ temps.)</p>`
      };
    }
  });

  C.gen('loxo', {
    titre: 'Calcul loxodromique', desc: 'ΔL = M·cos Rf ; e = M·sin Rf ; ΔG = e / cos Lm.',
    make() {
      const Ld = U.rndf(-60, 60, 1 / 60) || 0.5, Gd = U.rndf(-179, 179, 1 / 60);
      const Rf = U.rnd(0, 359), M = U.rnd(40, 290);
      const dL = M * Math.cos(U.rad(Rf));
      const e = M * Math.sin(U.rad(Rf));
      const La = Ld + dL / 60, Lm = (Ld + La) / 2;
      const dG = e / Math.cos(U.rad(Lm));
      let Ga = Gd + dG / 60; if (Ga > 180) Ga -= 360; if (Ga < -180) Ga += 360;
      return {
        q: `Calcule les coordonnées d'arrivée. Donne d'abord ΔL et ΔG en minutes (+ vers le Nord / l'Est, − vers le Sud / l'Ouest).` + U.data([['Latitude départ', U.lat(Ld)], ['Longitude départ', U.lon(Gd)], ['Route fond Rf', U.ang(Rf)], ['Distance M', M + ' M']]),
        champs: [{ label: 'ΔL en minutes', a: U.r1(dL), tol: 0.6, unit: '′', affiche: U.fr(U.r1(dL)) + '′' }, { label: 'ΔG en minutes', a: U.r1(dG), tol: Math.max(0.8, Math.abs(dG) * 0.01), unit: '′', affiche: U.fr(U.r1(dG)) + '′' }],
        sol: `<ol><li>ΔL = M × cos Rf = ${M} × cos ${Rf}° = <b>${U.fr(U.r1(dL))}′</b></li><li>L arrivée = ${U.lat(Ld)} ${dL >= 0 ? '+' : '−'} ${U.fr(Math.abs(U.r1(dL)))}′ = <b>${U.lat(La)}</b></li><li>e (écart) = M × sin Rf = ${U.fr(U.r1(e))}′</li><li>Lm = (L départ + L arrivée) / 2 = ${U.lat(Lm)}</li><li>ΔG = e / cos Lm = <b>${U.fr(U.r1(dG))}′</b></li><li>G arrivée = <b>${U.lon(Ga)}</b></li></ol><p>Attention aux signes : N et E positifs, S et W négatifs.</p>`
      };
    }
  });

  C.gen('portee', {
    titre: 'Portée géographique d\'un phare', desc: 'P = 2,1 × (√h + √H) avec H corrigé de la marée.',
    make() {
      const h = U.pick([2, 3, 4, 5, 6, 8, 10, 12]), elev = U.rnd(15, 70), pm95 = U.rndf(4, 7.5, 0.05), hma = U.rndf(0.5, pm95 - 0.5, 0.05);
      const H = elev + (pm95 - hma);
      const P = 2.1 * (Math.sqrt(h) + Math.sqrt(H));
      return {
        q: `Un phare pointe sur l'horizon. À quelle distance es-tu ?` + U.data([['Hauteur de ton œil h', h + ' m'], ['Élévation du feu (au-dessus de PMVE 95)', elev + ' m'], ['Hauteur PMVE 95 au-dessus du zéro', U.fr(pm95) + ' m'], ['Hauteur d\'eau à l\'instant (HMA)', U.fr(hma) + ' m']]),
        champs: [{ label: 'Hauteur du feu H au-dessus de l\'eau', a: U.r1(H), tol: 0.15, unit: 'm' }, { label: 'Distance (portée)', a: U.r1(P), tol: 0.2, unit: 'M' }],
        sol: `<p>H = élévation + (PMVE 95 − HMA) = ${elev} + (${U.fr(pm95)} − ${U.fr(hma)}) = <b>${U.fr(U.r2(H))} m</b></p><p>P = 2,1 × (√${h} + √${U.fr(U.r2(H))}) = 2,1 × (${U.fr(Math.sqrt(h), 2)} + ${U.fr(Math.sqrt(H), 2)}) = <b>${U.fr(U.r1(P))} M</b></p><p>Puis on trace depuis le phare le relèvement inverse (Zv ± 180°) sur cette distance.</p>`
      };
    }
  });

  C.gen('vitesse', {
    titre: 'Distance, vitesse, temps', desc: 'D = V × T. Heure d\'arrivée estimée.',
    make() {
      const mode = U.pick(['eta', 'v', 'd']);
      const V = U.rndf(5, 18, 0.5), T = U.rnd(20, 300), Dist = U.r1(V * T / 60);
      const dep = U.rnd(0, 23) * 60 + U.rnd(0, 11) * 5;
      if (mode === 'eta') return {
        q: `À quelle heure arriveras-tu ?` + U.data([['Heure de départ', U.hm(dep)], ['Distance', U.fr(Dist) + ' M'], ['Vitesse fond', U.fr(V) + ' nd']]),
        champs: [{ label: 'Heure d\'arrivée', type: 'heure', a: dep + Dist / V * 60, tol: 2 }],
        sol: `<p>T = D / V = ${U.fr(Dist)} / ${U.fr(V)} = ${U.fr(U.r2(Dist / V))} h = <b>${U.dur(Dist / V * 60)}</b></p><p>Arrivée = ${U.hm(dep)} + ${U.dur(Dist / V * 60)} = <b>${U.hm(dep + Dist / V * 60)}</b></p><p>Astuce : partie décimale × 60 = minutes.</p>`
      };
      if (mode === 'v') return {
        q: `Quelle vitesse fond as-tu tenue ?` + U.data([['Départ', U.hm(dep)], ['Arrivée', U.hm(dep + T)], ['Distance parcourue', U.fr(Dist) + ' M']]),
        champs: [{ label: 'Vitesse fond', a: U.r1(Dist / (T / 60)), tol: 0.15, unit: 'nd' }],
        sol: `<p>T = ${U.dur(T)} = ${U.fr(U.r2(T / 60))} h. V = D / T = ${U.fr(Dist)} / ${U.fr(U.r2(T / 60))} = <b>${U.fr(U.r1(Dist / (T / 60)))} nd</b></p>`
      };
      return {
        q: `Quelle distance as-tu parcourue ?` + U.data([['Vitesse', U.fr(V) + ' nd'], ['Durée', U.dur(T)]]),
        champs: [{ label: 'Distance', a: Dist, tol: 0.15, unit: 'M' }],
        sol: `<p>D = V × T = ${U.fr(V)} × ${U.fr(U.r2(T / 60))} h = <b>${U.fr(Dist)} M</b></p>`
      };
    }
  });

  C.gen('declinaison', {
    titre: 'Mettre à jour la déclinaison', desc: 'D de l\'année = D de la carte + (années × variation annuelle).',
    make() {
      const y0 = U.rnd(1995, 2015), y = 2026;
      const D0m = -U.rnd(30, 360) * (Math.random() < 0.85 ? 1 : -1);  // en minutes
      const chg = U.rnd(5, 12);   // minutes vers l'Est par an
      const Dm = D0m + chg * (y - y0);
      const D = Math.round(Dm / 60);
      const f = (m) => Math.floor(Math.abs(m) / 60) + '°' + String(Math.abs(m) % 60).padStart(2, '0') + '′ ' + (m < 0 ? 'W' : 'E');
      return {
        q: `Sur la rose de la carte, tu lis : <b>${f(D0m)} ${y0} (${chg}′E)</b>. Quelle est la déclinaison en ${y}, arrondie au degré ?`,
        champs: [{ label: 'Déclinaison D (+ Est, − Ouest)', a: D, tol: 0.5, unit: '°', affiche: (D > 0 ? D + '° E' : D < 0 ? -D + '° W' : '0°') }],
        sol: `<p>${y} − ${y0} = ${y - y0} ans × ${chg}′ = ${chg * (y - y0)}′ vers l'Est (on <b>ajoute</b> car Est = +).</p><p>D = ${f(D0m)} + ${chg * (y - y0)}′ = ${f(Dm)} ≈ <b>${D > 0 ? D + '° E' : D < 0 ? -D + '° W' : '0°'}</b></p>`
      };
    }
  });
})();
