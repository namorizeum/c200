/* Générateurs : mécanicien 250 kW (moteur, circuits, électricité) */
(function () {
  'use strict';
  const C = window.C200, U = C.u;
  const KW_CH = 0.736;

  /* ---------- Moteur ---------- */
  C.gen('mot-puissance', {
    titre: 'kW et chevaux', desc: '1 ch = 0,736 kW. 250 kW ≈ 340 ch.',
    make() {
      if (Math.random() < 0.5) {
        const kw = U.pick([37, 55, 75, 110, 150, 184, 220, 250, 294]);
        const ch = Math.round(kw / KW_CH);
        return { q: `Un moteur est donné pour <b>${kw} kW</b>. Combien de chevaux ?`, champs: [{ label: 'Puissance', a: ch, tol: 1, unit: 'ch' }],
          sol: U.vt([['ch = kW / 0,736', `${kw} / 0,736 = <b>${ch} ch</b>`, 'res']]) + '<p>Le brevet 250 kW couvre les moteurs jusqu\'à 250 kW, soit environ 340 ch.</p>' };
      }
      const ch = U.pick([50, 75, 100, 150, 200, 250, 300, 340]);
      const kw = U.r1(ch * KW_CH);
      return { q: `Un moteur fait <b>${ch} ch</b>. Quelle est sa puissance en kW ? Le brevet 250 kW suffit-il ?`, champs: [{ label: 'Puissance', a: kw, tol: 0.6, unit: 'kW' }, { type: 'choix', label: 'Brevet 250 kW', a: kw <= 250 ? 'Oui' : 'Non', options: ['Oui', 'Non'] }],
        sol: U.vt([['kW = ch × 0,736', `${ch} × 0,736 = <b>${U.fr(kw, 1)} kW</b>`, 'res']]) };
    }
  });

  C.gen('mot-cylindree', {
    titre: 'Cylindrée et rapport volumétrique', desc: 'V = π × D² / 4 × course ; ε = (V + v) / v.',
    make() {
      const D = U.pick([76, 78, 80, 84, 86, 88, 92, 94, 98, 100, 105, 108]), Cmm = U.pick([80, 84, 86, 89, 90, 94, 100, 105, 110, 115, 120]), n = U.pick([2, 3, 4, 4, 6]);
      const vu = Math.PI * (D / 10) ** 2 / 4 * (Cmm / 10);      // cm³
      const vuR = Math.round(vu), tot = U.r2(vuR * n / 1000);
      if (Math.random() < 0.6) return {
        q: `Moteur de <b>${n} cylindres</b>, alésage <b>${D} mm</b>, course <b>${Cmm} mm</b>. Calcule la cylindrée unitaire (cm³) et la cylindrée totale (litres).`,
        champs: [{ label: 'Cylindrée unitaire', a: vuR, tol: Math.max(2, vuR * 0.005), unit: 'cm³' }, { label: 'Cylindrée totale', a: tot, tol: 0.02, unit: 'L' }],
        sol: U.vt([['En cm : D = ' + U.fr(D / 10, 1) + ' ; C = ' + U.fr(Cmm / 10, 1), ''], ['V = π × D² / 4 × C', `3,1416 × ${U.fr(D / 10, 1)}² / 4 × ${U.fr(Cmm / 10, 1)} = <b>${vuR} cm³</b>`, 'res'], ['Totale = V × ' + n, `${vuR * n} cm³ = <b>${U.fr(tot)} L</b>`, 'res']]) + '<p>Exemple Volvo MD22 : alésage 84, course 89, 4 cylindres → 2,0 L.</p>'
      };
      const eps = U.pick([16, 17, 18, 19, 20, 21, 22]);
      const v = U.r1(vuR / (eps - 1));
      return {
        q: `Cylindrée unitaire <b>${vuR} cm³</b>, volume de la chambre de combustion <b>${U.fr(v, 1)} cm³</b>. Quel est le rapport volumétrique ?`,
        champs: [{ label: 'Rapport volumétrique', a: eps, tol: 0.15, unit: ': 1' }],
        sol: U.vt([['ε = (V + v) / v', `(${vuR} + ${U.fr(v, 1)}) / ${U.fr(v, 1)} = <b>${eps}</b>`, 'res']]) + '<p>Un diesel tourne entre 15 et 23 environ : c\'est la forte compression qui chauffe l\'air assez pour enflammer le gazole.</p>'
      };
    }
  });

  C.gen('mot-couple', {
    titre: 'Couple, régime et puissance', desc: 'P (kW) = C (N·m) × 2π × N / 60 / 1 000.',
    make() {
      const N = U.pick([1500, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3600]), Cnm = U.rnd(12, 90) * 10;
      const P = U.r1(Cnm * 2 * Math.PI * N / 60 / 1000);
      if (Math.random() < 0.5) return {
        q: `Au banc, un moteur donne un couple de <b>${Cnm} N·m</b> à <b>${N} tr/min</b>. Quelle puissance développe-t-il ?`,
        champs: [{ label: 'Puissance', a: P, tol: Math.max(0.6, P * 0.01), unit: 'kW' }],
        sol: U.vt([['ω = 2π × N / 60', `${U.fr(2 * Math.PI * N / 60, 1)} rad/s`], ['P = C × ω', `${Cnm} × ${U.fr(2 * Math.PI * N / 60, 1)} = ${U.fr(P * 1000, 0)} W = <b>${U.fr(P, 1)} kW</b>`, 'res']]) + '<p>Raccourci : P (kW) ≈ C × N / 9 550.</p>'
      };
      return {
        q: `Un moteur de <b>${U.fr(P, 1)} kW</b> atteint cette puissance à <b>${N} tr/min</b>. Quel couple fournit-il à ce régime ?`,
        champs: [{ label: 'Couple', a: Cnm, tol: Math.max(3, Cnm * 0.01), unit: 'N·m' }],
        sol: U.vt([['C = P / ω', `${U.fr(P * 1000, 0)} / ${U.fr(2 * Math.PI * N / 60, 1)} = <b>${Cnm} N·m</b>`, 'res']]) + '<p>Plus le couple maximum arrive à bas régime, plus le moteur est « souple ».</p>'
      };
    }
  });

  C.gen('mot-conso', {
    titre: 'Consommation et autonomie', desc: 'Conso (L/h) = Cs × P / densité ; autonomie = réserve / conso.',
    make() {
      const P = U.pick([60, 80, 100, 120, 150, 180, 200, 220, 250]), Cs = U.pick([210, 220, 230, 240, 250]), dens = 0.84;
      const lh = U.r1(Cs * P / 1000 / dens);
      const res = U.pick([400, 600, 800, 1000, 1200, 1500]), v = U.pick([8, 9, 10, 12, 14]);
      const h = U.r1(res / lh), dist = Math.round(res / lh * v);
      return {
        q: `Moteur utilisé à <b>${P} kW</b>, consommation spécifique <b>${Cs} g/kWh</b>, gazole de densité 0,84. Il reste <b>${res} L</b> dans les soutes, vitesse ${v} nœuds. Consommation horaire, autonomie et distance possible ?`,
        champs: [{ label: 'Consommation', a: lh, tol: 0.3, unit: 'L/h' }, { label: 'Autonomie', a: h, tol: 0.3, unit: 'h' }, { label: 'Distance', a: dist, tol: Math.max(2, dist * 0.02), unit: 'M' }],
        sol: U.vt([['Masse/h = Cs × P', `${Cs} × ${P} = ${U.nb(Cs * P)} g/h = ${U.fr(Cs * P / 1000, 1)} kg/h`], ['Volume/h = masse / 0,84', `<b>${U.fr(lh, 1)} L/h</b>`, 'res'], ['Autonomie = réserve / conso', `${res} / ${U.fr(lh, 1)} = <b>${U.fr(h, 1)} h</b>`, 'res'], ['Distance = autonomie × vitesse', `<b>${dist} M</b>`, 'res']]) + '<p>En pratique, garde toujours une <b>réserve de sécurité</b> (au moins 20 à 30 %).</p>'
      };
    }
  });

  C.gen('mot-helice', {
    titre: 'Réducteur, pas et recul', desc: 'Vitesse théorique = pas × tours d\'hélice ; recul = écart avec la vitesse réelle.',
    make() {
      const N = U.pick([1800, 2000, 2200, 2400, 2600, 2800, 3000]), red = U.pick([1.5, 2, 2.1, 2.5, 2.7, 3]), pas = U.pick([0.4, 0.45, 0.5, 0.55, 0.6, 0.7]);
      const nh = Math.round(N / red), vth = U.r1(nh * pas * 60 / 1852), recul = U.pick([15, 20, 25, 30, 35]);
      const vr = U.r1(vth * (1 - recul / 100));
      return {
        q: `Moteur à <b>${N} tr/min</b>, réducteur <b>${U.fr(red)}:1</b>, hélice de pas <b>${U.fr(pas)} m</b>. La vitesse réelle mesurée est de <b>${U.fr(vr, 1)} nœuds</b>. Régime de l'hélice, vitesse théorique et recul ?`,
        champs: [{ label: 'Régime hélice', a: nh, tol: 2, unit: 'tr/min' }, { label: 'Vitesse théorique', a: vth, tol: 0.15, unit: 'nd' }, { label: 'Recul', a: U.r1((vth - vr) / vth * 100), tol: 1, unit: '%' }],
        sol: U.vt([['N hélice = N / réduction', `${N} / ${U.fr(red)} = <b>${nh} tr/min</b>`, 'res'], ['Avance par heure = pas × N × 60', `${U.fr(pas)} × ${nh} × 60 = ${U.nb(Math.round(pas * nh * 60))} m`], ['Vth = ÷ 1 852', `<b>${U.fr(vth, 1)} nd</b>`, 'res'], ['Recul = (Vth − V) / Vth', `<b>${U.fr((vth - vr) / vth * 100, 1)} %</b>`, 'res']]) + '<p>Sans recul, pas de poussée : l\'hélice « recule » toujours un peu (35 à 45 % sur un voilier).</p>'
      };
    }
  });

  C.gen('mot-carene', {
    titre: 'Vitesse limite de carène', desc: 'V (nd) ≈ 2,43 × √(longueur de flottaison en m).',
    make() {
      const L = U.pick([6, 8, 9, 10, 12, 14, 15, 18, 20, 24]);
      const v = U.r1(2.43 * Math.sqrt(L));
      return {
        q: `Un navire à déplacement mesure <b>${L} m</b> à la flottaison. Quelle est sa vitesse limite de carène ?`,
        champs: [{ label: 'Vitesse limite', a: v, tol: 0.15, unit: 'nd' }],
        sol: U.vt([['V = 2,43 × √L', `2,43 × √${L} = 2,43 × ${U.fr(Math.sqrt(L), 2)} = <b>${U.fr(v, 1)} nd</b>`, 'res']]) + '<p>Exemple du guide : 12 m → 8,4 nœuds. Au-delà, un navire qui ne déjauge pas consomme énormément pour très peu de vitesse en plus. On choisit un moteur environ 20 % plus puissant que nécessaire pour atteindre cette vitesse.</p>'
      };
    }
  });

  const FUMEES = [
    ['noire', 'Trop de gazole ou pas assez d\'air : filtre à air colmaté, surcharge (carène sale, bout dans l\'hélice), injecteur défectueux, calage'],
    ['blanche', 'De l\'eau dans les cylindres (joint de culasse, eau dans le gazole) ou moteur froid, compression faible'],
    ['bleue', 'De l\'huile brûlée : segments ou guides de soupapes usés, trop d\'huile dans le carter, turbo qui fuit']
  ];
  C.gen('mot-fumee', {
    titre: 'Lire la fumée d\'échappement', desc: 'Noire, blanche ou bleue : quelle cause ?',
    make() {
      const [c, cause] = U.pick(FUMEES);
      return {
        q: `Moteur chaud, en charge normale : l'échappement fume <b>${c}</b>. Quelle est la cause la plus probable ?`,
        champs: [{ type: 'choix', label: 'Cause', a: cause, options: U.shuffle(FUMEES.map((x) => x[1])) }],
        sol: `<p>Fumée <b>${c}</b> : ${cause.toLowerCase()}.</p><p class="small muted">Normal : un peu de noir à l'accélération brutale, un peu de blanc au démarrage à froid.</p>`
      };
    }
  });

  /* ---------- Circuits ---------- */
  C.gen('circ-assechement', {
    titre: 'Assécher un compartiment', desc: 'Volume d\'eau / débit de la pompe, en tenant compte de la voie d\'eau.',
    make() {
      const L = U.rnd(2, 6), l = U.rnd(2, 5), h = U.rndf(0.3, 1.2, 0.1), Q = U.pick([6, 8, 10, 12, 15, 20]);
      const V = U.r2(L * l * h);
      const fuite = Math.random() < 0.5 ? U.pick([1, 2, 3, 4]) : 0;
      const min = Math.round(V / (Q - fuite) * 60);
      return {
        q: `Un compartiment de <b>${L} × ${l} m</b> contient <b>${U.fr(h, 1)} m</b> d'eau. La pompe débite <b>${Q} m³/h</b>.${fuite ? ` La voie d'eau continue d'entrer à <b>${fuite} m³/h</b>.` : ''} Volume d'eau et temps pour assécher ?`,
        champs: [{ label: 'Volume', a: V, tol: 0.05, unit: 'm³' }, { label: 'Temps', a: min, tol: 2, unit: 'min' }],
        sol: U.vt([['V = L × l × h', `${L} × ${l} × ${U.fr(h, 1)} = <b>${U.fr(V)} m³</b>`, 'res'], ...(fuite ? [['Débit utile = pompe − voie d\'eau', `${Q} − ${fuite} = ${Q - fuite} m³/h`]] : []), ['t = V / débit', `${U.fr(V)} / ${Q - fuite} h = <b>${min} min</b>`, 'res']]) + '<p>Si la voie d\'eau entre plus vite que la pompe ne vide, le niveau monte : il faut d\'abord <b>colmater</b>.</p>'
      };
    }
  });

  /* ---------- Électricité ---------- */
  C.gen('elec-ohm', {
    titre: 'Loi d\'Ohm', desc: 'U = R × I : trouve la valeur manquante.',
    make() {
      const m = U.rnd(0, 2);
      const R = U.pick([0.5, 1, 1.5, 2, 3, 4, 6, 8, 12, 24, 48]), I = U.pick([0.5, 1, 2, 2.5, 3, 4, 5, 6, 10]);
      const Uv = U.r2(R * I);
      if (m === 0) return { q: `Une résistance de <b>${U.fr(R)} Ω</b> est parcourue par <b>${U.fr(I)} A</b>. Quelle tension à ses bornes ?`, champs: [{ label: 'Tension U', a: Uv, tol: 0.05, unit: 'V' }], sol: U.vt([['U = R × I', `${U.fr(R)} × ${U.fr(I)} = <b>${U.fr(Uv)} V</b>`, 'res']]) };
      if (m === 1) return { q: `Sous <b>${U.fr(Uv)} V</b>, un appareil de résistance <b>${U.fr(R)} Ω</b>. Quelle intensité le traverse ?`, champs: [{ label: 'Intensité I', a: I, tol: 0.05, unit: 'A' }], sol: U.vt([['I = U / R', `${U.fr(Uv)} / ${U.fr(R)} = <b>${U.fr(I)} A</b>`, 'res']]) };
      return { q: `Un appareil consomme <b>${U.fr(I)} A</b> sous <b>${U.fr(Uv)} V</b>. Quelle est sa résistance ?`, champs: [{ label: 'Résistance R', a: R, tol: 0.05, unit: 'Ω' }], sol: U.vt([['R = U / I', `${U.fr(Uv)} / ${U.fr(I)} = <b>${U.fr(R)} Ω</b>`, 'res']]) };
    }
  });

  C.gen('elec-puissance', {
    titre: 'Puissance et fusible', desc: 'P = U × I ; choisir le calibre de protection.',
    make() {
      const Uv = U.pick([12, 12, 24]), P = U.pick([10, 20, 25, 36, 48, 60, 72, 96, 120, 180, 240]);
      const I = U.r2(P / Uv);
      const cal = [1, 2, 3, 5, 7.5, 10, 15, 20, 25, 30].find((c) => c >= I * 1.25) || 30;
      return {
        q: `Un appareil de <b>${P} W</b> est branché sur le réseau <b>${Uv} V</b> du bord. Quelle intensité consomme-t-il ? Quel fusible choisir parmi 1, 2, 3, 5, 7,5, 10, 15, 20, 25, 30 A ?`,
        champs: [{ label: 'Intensité', a: I, tol: 0.05, unit: 'A' }, { type: 'choix', label: 'Fusible', a: U.fr(cal) + ' A', options: [1, 2, 3, 5, 7.5, 10, 15, 20, 25, 30].map((c) => U.fr(c) + ' A') }],
        sol: U.vt([['I = P / U', `${P} / ${Uv} = <b>${U.fr(I)} A</b>`, 'res'], ['Fusible ≥ I × 1,25 environ', `${U.fr(I * 1.25)} A → <b>${U.fr(cal)} A</b>`, 'res']]) + '<p>Le fusible protège le <b>câble</b> : calibre juste au-dessus du courant normal, jamais plus fort que ce que supporte le câble.</p>'
      };
    }
  });

  C.gen('elec-batterie', {
    titre: 'Batteries : autonomie et bilan', desc: 'Q = I × t ; ne pas vider plus de 80 % ; recharge à 1/10 de la capacité.',
    make() {
      const m = U.rnd(0, 2);
      if (m === 0) {
        const Q = U.pick([60, 80, 100, 120, 150, 200]), P = U.pick([12, 24, 36, 48, 60]), I = U.r2(P / 12);
        const t = U.r1(Q / I);
        return { q: `Batterie <b>12 V – ${Q} Ah</b>. On y branche un feu de <b>${P} W</b>. Intensité consommée et temps pour vider complètement la batterie ?`, champs: [{ label: 'Intensité', a: I, tol: 0.05, unit: 'A' }, { label: 'Durée', a: t, tol: 0.2, unit: 'h' }],
          sol: U.vt([['I = P / U', `${P} / 12 = <b>${U.fr(I)} A</b>`, 'res'], ['t = Q / I', `${Q} / ${U.fr(I)} = <b>${U.fr(t, 1)} h</b>`, 'res']]) + '<p>Exemple du guide : ampoule de 24 W sur 80 Ah → 2 A → 40 h. En pratique on ne vide pas une batterie à fond.</p>' };
      }
      if (m === 1) {
        const items = U.shuffle([['Feux de navigation', 25, 10], ['Électronique (GPS, radar, VHF)', 60, 10], ['Pompe de cale', 60, 1], ['Éclairage intérieur', 40, 5], ['Pilote automatique', 48, 8], ['Réfrigérateur', 50, 12]]).slice(0, 3);
        const Wh = items.reduce((a, x) => a + x[1] * x[2], 0), Ah = U.r1(Wh / 12), cap = Math.round(Ah / 0.8);
        return { q: `Réseau 12 V. Bilan d'une journée : ${items.map((x) => `${x[0]} ${x[1]} W pendant ${x[2]} h`).join(' ; ')}. Besoin en Ah et capacité minimale de batterie (sans la vider de plus de 80 %) ?`,
          champs: [{ label: 'Besoin', a: Ah, tol: 0.6, unit: 'Ah' }, { label: 'Capacité mini', a: cap, tol: 2, unit: 'Ah' }],
          sol: U.vt([...items.map((x) => [x[0], `${x[1]} × ${x[2]} = ${x[1] * x[2]} Wh`]), ['Total / 12 V', `${Wh} / 12 = <b>${U.fr(Ah, 1)} Ah</b>`, 'res'], ['Capacité = besoin / 0,8', `<b>${cap} Ah</b>`, 'res']]) + '<p>Pour le confort et la durée de vie, le guide conseille même 2 à 3 fois le besoin journalier.</p>' };
      }
      const Q = U.pick([80, 100, 120, 150, 200]), dech = U.pick([30, 40, 50, 60]);
      const I = Q / 10, t = U.r1(Q * dech / 100 / I);
      return { q: `Une batterie de <b>${Q} Ah</b> est déchargée à <b>${dech} %</b>. Le régulateur charge à environ 1/10 de la capacité. Courant de charge et durée minimale de recharge ?`,
        champs: [{ label: 'Courant de charge', a: I, tol: 0.1, unit: 'A' }, { label: 'Durée', a: t, tol: 0.2, unit: 'h' }],
        sol: U.vt([['I = Q / 10', `${Q} / 10 = <b>${U.fr(I)} A</b>`, 'res'], ['Ah à remettre', `${Q} × ${dech} % = ${U.fr(Q * dech / 100)} Ah`], ['t = Ah / I', `<b>${U.fr(t, 1)} h</b>`, 'res']]) + '<p>Exemple du guide : 100 Ah déchargée à 50 % → au moins 5 h de moteur.</p>' };
    }
  });

  C.gen('elec-couplage', {
    titre: 'Batteries en série ou en parallèle', desc: 'Série : les tensions s\'ajoutent. Parallèle : les capacités s\'ajoutent.',
    make() {
      const n = U.pick([2, 2, 3, 4]), V = U.pick([6, 12]), Q = U.pick([60, 80, 100, 110, 150]);
      const serie = Math.random() < 0.5;
      return {
        q: `On monte <b>${n} batteries identiques de ${V} V – ${Q} Ah</b> en <b>${serie ? 'série' : 'parallèle'}</b>. Tension et capacité de l'ensemble ?`,
        champs: [{ label: 'Tension', a: serie ? V * n : V, tol: 0, unit: 'V' }, { label: 'Capacité', a: serie ? Q : Q * n, tol: 0, unit: 'Ah' }],
        sol: `<p>${serie ? `<b>Série</b> (+ d'une batterie sur − de la suivante) : tensions additionnées, capacité d'une seule. <b>${V * n} V – ${Q} Ah</b>.` : `<b>Parallèle</b> (tous les + ensemble, tous les − ensemble) : tension d'une seule, capacités additionnées. <b>${V} V – ${Q * n} Ah</b>.`}</p><p>Jamais en série deux batteries de capacités différentes ; jamais en parallèle deux tensions différentes.</p>`
      };
    }
  });

  C.gen('elec-cable', {
    titre: 'Chute de tension dans un câble', desc: 'R = ρ × 2L / S (aller-retour), ΔU = R × I.',
    make() {
      const L = U.pick([3, 4, 5, 6, 8, 10]), S = U.pick([1.5, 2.5, 4, 6, 10]), I = U.pick([5, 8, 10, 15, 20]);
      const R = 0.0175 * 2 * L / S, dU = U.r2(R * I), pct = U.r1(dU / 12 * 100);
      return {
        q: `Un appareil consomme <b>${I} A</b> sous 12 V, à <b>${L} m</b> du tableau, avec un câble cuivre de <b>${U.fr(S, 1)} mm²</b> (ρ = 0,0175 Ω·mm²/m). Chute de tension et pourcentage ?`,
        champs: [{ label: 'Chute de tension', a: dU, tol: 0.03, unit: 'V' }, { label: 'En %', a: pct, tol: 0.3, unit: '%' }],
        sol: U.vt([['R = ρ × 2L / S', `0,0175 × ${2 * L} / ${U.fr(S, 1)} = ${U.fr(R, 3)} Ω`], ['ΔU = R × I', `${U.fr(R, 3)} × ${I} = <b>${U.fr(dU)} V</b>`, 'res'], ['% = ΔU / 12', `<b>${U.fr(pct, 1)} %</b>`, 'res']]) + `<p>On vise en général moins de 3 % (moins de 0,36 V en 12 V) pour les appareils sensibles. ${pct > 3 ? 'Ici c\'est trop : il faut une <b>section plus forte</b>.' : 'Ici c\'est correct.'}</p>`
      };
    }
  });
})();
