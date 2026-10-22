/* Générateurs de calculs : marées (méthode de la formule, ports rattachés) */
(function () {
  'use strict';
  const C = window.C200, U = C.u;
  const sin2 = (x) => Math.pow(Math.sin(U.rad(x)), 2);
  const m = (x) => U.fr(x, 2) + ' m';

  // une marée : BM puis PM (montante) ou PM puis BM (descendante)
  function tire(montante) {
    const hBM = U.rndf(0.3, 2.5, 0.05), hPM = U.rndf(hBM + 2, Math.min(hBM + 6.8, 7.6), 0.05);
    const tBM = U.rnd(0, 23) * 60 + U.rnd(0, 59);
    const dur = U.rnd(5 * 60 + 30, 6 * 60 + 40);
    const tPM = montante ? tBM + dur : tBM - dur;
    return { hBM, hPM, tBM, tPM, M: hPM - hBM, D: tPM - tBM };
  }
  const annu = (x) => U.data([['BM', U.hm(x.tBM) + ' · ' + m(x.hBM)], ['PM', U.hm(x.tPM) + ' · ' + m(x.hPM)]]);
  const annuOrd = (x) => x.tPM > x.tBM ? U.data([['BM', U.hm(x.tBM) + ' · ' + m(x.hBM)], ['PM', U.hm(x.tPM) + ' · ' + m(x.hPM)]]) : U.data([['PM', U.hm(x.tPM) + ' · ' + m(x.hPM)], ['BM', U.hm(x.tBM) + ' · ' + m(x.hBM)]]);
  void annu;
  const hdec = (min) => U.fr(U.r2(min / 60)) + ' h';
  const sg = (min) => (min < 0 ? '−' : '+') + U.dur(Math.abs(min));
  function etapesH(x, t) {
    return `<ol><li>D = heure PM − heure BM = ${U.hm(x.tPM)} − ${U.hm(x.tBM)} = <b>${sg(x.D)}</b></li>
<li>M = haut. PM − haut. BM = ${U.fr(x.hPM, 2)} − ${U.fr(x.hBM, 2)} = <b>${U.fr(x.M, 2)} m</b></li>
<li>t = heure demandée − heure BM = <b>${sg(t)}</b> (même signe que D)</li>
<li>h = M × sin²(90 × t / D) = ${U.fr(x.M, 2)} × sin²(90 × ${hdec(Math.abs(t))} / ${hdec(Math.abs(x.D))}) = <b>${U.fr(x.M * sin2(90 * t / x.D), 2)} m</b></li></ol>`;
  }

  C.gen('maree-hauteur', {
    titre: 'Hauteur d\'eau à une heure donnée', desc: 'h = M × sin²(90 × t / D), puis HMA = haut. BM + h.',
    make() {
      const x = tire(Math.random() < 0.5);
      const t = Math.round(x.D * U.rndf(0.1, 0.9, 0.05));
      const H = x.tBM + t;
      const h = x.M * sin2(90 * t / x.D), hma = x.hBM + h;
      return {
        q: `Annuaire du jour (déjà en heure locale, pression normale). Calcule la hauteur d'eau (HMA) à <b>${U.hm(H)}</b> par la formule.` + annuOrd(x),
        champs: [{ label: 'HMA', a: U.r2(hma), tol: 0.05, unit: 'm' }],
        sol: etapesH(x, t) + `<p>HMA = haut. BM + h = ${U.fr(x.hBM, 2)} + ${U.fr(h, 2)} = <b>${U.fr(hma, 2)} m</b></p><p>Sur la calculatrice : mets-la en <b>degrés</b>, et convertis les heures en décimales (1 h 30 = 1,5).</p>`
      };
    }
  });

  C.gen('maree-heure', {
    titre: 'Heure pour une hauteur d\'eau', desc: 't = D / 90 × Arcsin √(h / M), puis heure = heure BM + t.',
    make() {
      const x = tire(Math.random() < 0.5);
      const hma = U.r2(x.hBM + x.M * U.rndf(0.15, 0.85, 0.05));
      const h = hma - x.hBM;
      const t = x.D / 90 * U.deg(Math.asin(Math.sqrt(h / x.M)));
      return {
        q: `À quelle heure la hauteur d'eau sera-t-elle de <b>${U.fr(hma, 2)} m</b> (marée ${x.tPM > x.tBM ? 'montante' : 'descendante'}) ?` + annuOrd(x),
        champs: [{ label: 'Heure', type: 'heure', a: x.tBM + t, tol: 3 }],
        sol: `<ol><li>D = ${sg(x.D)} ; M = ${U.fr(x.M, 2)} m</li><li>h = HMA − haut. BM = ${U.fr(hma, 2)} − ${U.fr(x.hBM, 2)} = <b>${U.fr(h, 2)} m</b></li><li>t = D / 90 × Arcsin √(h / M) = ${hdec(x.D)} / 90 × Arcsin √(${U.fr(h, 2)} / ${U.fr(x.M, 2)}) = <b>${sg(t)}</b></li><li>Heure = heure BM + t = ${U.hm(x.tBM)} ${sg(t)} = <b>${U.hm(x.tBM + t)}</b></li></ol>`
      };
    }
  });

  C.gen('maree-prof', {
    titre: 'Profondeur et hauteur sous quille', desc: 'PROF = HMA + S ; HSQ = HMA + S − TE.',
    make() {
      const hma = U.rndf(0.8, 6, 0.05);
      const S = Math.random() < 0.35 ? -U.rndf(0.2, Math.min(1.5, hma - 0.3), 0.05) : U.rndf(0.5, 6, 0.1);
      const TE = U.rndf(0.8, Math.max(0.9, Math.min(4, hma + S - 0.2)), 0.05);
      const P = hma + S, HSQ = P - TE;
      return {
        q: `Ton navire passe sur une sonde ${S < 0 ? '<b>négative</b> (soulignée sur la carte : le fond découvre)' : 'positive'}. Calcule la profondeur et la hauteur sous quille.` + U.data([['Hauteur d\'eau HMA', m(hma)], ['Sonde S', (S < 0 ? '−' : '') + U.fr(Math.abs(S), 2) + ' m'], ['Tirant d\'eau TE', m(TE)]]),
        champs: [{ label: 'Profondeur', a: U.r2(P), tol: 0.02, unit: 'm' }, { label: 'Hauteur sous quille', a: U.r2(HSQ), tol: 0.02, unit: 'm' }],
        sol: `<p>PROF = HMA + S = ${U.fr(hma, 2)} + (${U.fr(S, 2)}) = <b>${U.fr(P, 2)} m</b></p><p>HSQ = PROF − TE = ${U.fr(P, 2)} − ${U.fr(TE, 2)} = <b>${U.fr(HSQ, 2)} m</b></p>${S < 0 ? '<p>Une sonde négative se <b>retranche</b> : le fond est au-dessus du zéro des cartes.</p>' : ''}`
      };
    }
  });

  C.gen('maree-limite', {
    titre: 'Heure limite de passage', desc: 'HMA limite = TE + PP − S, puis l\'heure par la formule.',
    make() {
      for (let k = 0; k < 40; k++) {
        const x = tire(Math.random() < 0.55);
        const TE = U.rndf(1, 3.5, 0.1), PP = U.rndf(0.3, 1.5, 0.1);
        const S = Math.random() < 0.3 ? -U.rndf(0.2, 1.2, 0.1) : U.rndf(0.2, 3, 0.1);
        const hl = TE + PP - S;
        if (hl <= x.hBM + 0.2 || hl >= x.hPM - 0.2) continue;
        const h = hl - x.hBM;
        const t = x.D / 90 * U.deg(Math.asin(Math.sqrt(h / x.M)));
        const mont = x.tPM > x.tBM;
        return {
          q: `Tu dois passer sur un haut-fond avec un pied de pilote. ${mont ? 'La marée monte : à partir de quelle heure peux-tu passer ?' : 'La marée descend : jusqu\'à quelle heure peux-tu passer ?'}` + annuOrd(x) + U.data([['Tirant d\'eau TE', m(TE)], ['Pied de pilote PP', m(PP)], ['Sonde S', (S < 0 ? '−' : '') + U.fr(Math.abs(S), 2) + ' m']]),
          champs: [{ label: 'HMA limite', a: U.r2(hl), tol: 0.02, unit: 'm' }, { label: mont ? 'À partir de' : 'Jusqu\'à', type: 'heure', a: x.tBM + t, tol: 3 }],
          sol: `<ol><li>HMA limite = TE + PP − S = ${U.fr(TE, 2)} + ${U.fr(PP, 2)} − (${U.fr(S, 2)}) = <b>${U.fr(hl, 2)} m</b></li><li>h = ${U.fr(hl, 2)} − ${U.fr(x.hBM, 2)} = ${U.fr(h, 2)} m ; M = ${U.fr(x.M, 2)} m ; D = ${sg(x.D)}</li><li>t = D / 90 × Arcsin √(h / M) = ${sg(t)}</li><li>Heure limite = ${U.hm(x.tBM)} ${sg(t)} = <b>${U.hm(x.tBM + t)}</b></li></ol>`
        };
      }
      return this.make();
    }
  });

  C.gen('maree-corrections', {
    titre: 'Heure d\'été et pression', desc: 'Annuaire en UT+1 : +1 h en été. 1 hPa au-dessus de 1013 = −1 cm.',
    make() {
      const ete = Math.random() < 0.6;
      const tPM = U.rnd(0, 22) * 60 + U.rnd(0, 59), hPM = U.rndf(3, 7.5, 0.05);
      const P = U.pick([983, 993, 998, 1003, 1008, 1013, 1018, 1023, 1028, 1033]);
      const corr = (1013 - P) / 100;
      return {
        q: `L'annuaire (en UT+1) donne la pleine mer. Donne l'heure locale et la hauteur corrigée de la pression.` + U.data([['PM annuaire (UT+1)', U.hm(tPM) + ' · ' + m(hPM)], ['Saison', ete ? 'heure d\'été (UT+2)' : 'heure d\'hiver (UT+1)'], ['Pression', P + ' hPa']]),
        champs: [{ label: 'Heure locale de la PM', type: 'heure', a: tPM + (ete ? 60 : 0), tol: 0 }, { label: 'Hauteur corrigée', a: U.r2(hPM + corr), tol: 0.01, unit: 'm' }],
        sol: `<p>${ete ? 'En été, on ajoute <b>1 h</b> à l\'annuaire' : 'En hiver, l\'heure de l\'annuaire est déjà l\'heure légale'} : PM à <b>${U.hm(tPM + (ete ? 60 : 0))}</b>.</p><p>Pression : 1 cm par hPa d'écart avec 1013. ${P > 1013 ? 'Anticyclone : la mer baisse' : P < 1013 ? 'Dépression : la mer monte' : 'Pas de correction'} (${corr >= 0 ? '+' : '−'}${U.fr(Math.abs(corr), 2)} m) → <b>${U.fr(hPM + corr, 2)} m</b>.</p>`
      };
    }
  });

  C.gen('maree-coef', {
    titre: 'Coefficients et types de marée', desc: 'De 20 à 120 : vives-eaux, mortes-eaux.',
    make() {
      const T = [[120, 'Vives-eaux exceptionnelles'], [95, 'Vives-eaux moyennes'], [70, 'Marée moyenne'], [45, 'Mortes-eaux moyennes'], [20, 'Mortes-eaux les plus faibles']];
      if (Math.random() < 0.5) {
        const [c, n] = U.pick(T);
        return { q: `Un coefficient de <b>${c}</b> correspond à…`, champs: [{ type: 'choix', label: 'Type de marée', a: n, options: U.shuffle(T.map((x) => x[1])) }], sol: `<p>120 : VE exceptionnelles · 95 : VE moyennes · 70 : moyenne · 45 : ME moyennes · 20 : ME les plus faibles.</p>` };
      }
      const L = [['nouvelle lune', 'Vives-eaux'], ['pleine lune', 'Vives-eaux'], ['premier quartier', 'Mortes-eaux'], ['dernier quartier', 'Mortes-eaux']];
      const [ph, r] = U.pick(L), j = U.rnd(0, 2);
      return { q: `Nous sommes ${j ? j + ' jour' + (j > 1 ? 's' : '') + ' après la' : 'le jour de la'} <b>${ph}</b>. Quel type de marée ?`, champs: [{ type: 'choix', label: 'Marée', a: r, options: ['Vives-eaux', 'Mortes-eaux', 'Marée moyenne'] }], sol: `<p>Soleil et Lune alignés (nouvelle et pleine lune) : leurs effets s'ajoutent → <b>vives-eaux</b> (syzygie). En quartier, ils sont à angle droit → <b>mortes-eaux</b> (quadrature). Règle des 3 jours : le jour même et les 2 jours suivants.</p>` };
    }
  });
})();
