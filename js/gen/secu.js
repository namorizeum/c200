/* Générateur : MARPOL, a-t-on le droit de rejeter ? (module P2-1) */
(function () {
  'use strict';
  const C = window.C200, U = C.u;
  const ZS = ['en Méditerranée (zone spéciale)'];
  const HORS = ['hors zone spéciale', 'au large, hors zone spéciale'];

  function scenario() {
    const k = U.rnd(0, 7);
    const d = U.pick([1.5, 2, 5, 8, 10, 15, 20]);
    const ou = (zs) => (zs ? U.pick(ZS) : U.pick(HORS));
    switch (k) {
      case 0: return { t: `Jeter par-dessus bord un sac de déchets en <b>plastique</b> ${ou(Math.random() < 0.5)}, à ${d} M de la côte.`, ok: false, e: 'Annexe V : les plastiques (sacs, cordages, filets synthétiques, cendres de plastique) sont <b>toujours interdits</b>, partout.' };
      case 1: return { t: `Rejeter l'<b>huile de friture</b> usagée de la cuisine ${ou(false)}, à ${d} M de terre.`, ok: false, e: 'Annexe V : l\'huile de friture est interdite au rejet. Elle va à terre (installation de réception).' };
      case 2: return { t: `Navire en route, ${ou(false)}, à <b>${d} M</b> de la terre la plus proche : rejeter des <b>déchets alimentaires broyés</b> (passent un tamis de 25 mm).`, ok: d >= 3, e: `Hors zone spéciale, déchets alimentaires broyés : <b>à plus de 3 M</b>, navire en route. Ici ${d} M.` };
      case 3: return { t: `Navire en route, ${ou(false)}, à <b>${d} M</b> de la terre : rejeter des <b>déchets alimentaires non broyés</b>.`, ok: d >= 12, e: `Non broyés : <b>à plus de 12 M</b>, navire en route. Ici ${d} M.` };
      case 4: {
        const broy = Math.random() < 0.6;
        return { t: `Navire en route, ${ou(true)}, à <b>${d} M</b> de la terre : rejeter des déchets alimentaires <b>${broy ? 'broyés' : 'non broyés'}</b>.`, ok: broy && d >= 12, e: `En zone spéciale : seuls les déchets alimentaires <b>broyés</b> (tamis 25 mm), non mélangés, <b>à plus de 12 M</b>, navire en route.${broy ? ` Ici ${d} M.` : ' Non broyés : interdit.'}` };
      }
      case 5: {
        const ppm = U.pick([5, 10, 12, 15, 25, 40]), route = Math.random() < 0.8;
        return { t: `Navire de 450 UMS, ${ou(false)}, ${route ? 'en route' : '<b>stoppé au mouillage</b>'} : rejeter les eaux de cale de la machine passées au séparateur, teneur <b>${ppm} ppm</b>.`, ok: route && ppm <= 15, e: `Annexe I, hors zone spéciale : navire <b>en route</b>, mélange <b>filtré</b> (séparateur approuvé), <b>15 ppm au plus</b>. ${route ? `Ici ${ppm} ppm.` : 'Navire stoppé : interdit.'}` };
      }
      case 6: {
        const trait = Math.random() < 0.5;
        return { t: `Rejeter les eaux usées (eaux noires) <b>${trait ? 'broyées et désinfectées' : 'non traitées'}</b>, navire en route à 6 nœuds, à <b>${d} M</b> de terre.`, ok: trait ? d > 3 : d > 12, e: `Annexe IV : broyées et désinfectées à <b>plus de 3 M</b> ; non traitées à <b>plus de 12 M</b>, en route à <b>4 nœuds au moins</b>, à débit modéré. Ici ${d} M.` };
      }
      default: {
        const v = U.pick([2, 3, 5, 8]);
        return { t: `Vider la citerne d'eaux usées non traitées à <b>15 M</b> de terre, navire en route à <b>${v} nœuds</b>.`, ok: v >= 4, e: 'Annexe IV : rejet non traité à plus de 12 M, à débit modéré, navire en route à <b>4 nœuds au moins</b>.' };
      }
    }
  }

  C.gen('secu-rejet', {
    titre: 'MARPOL : rejet autorisé ou interdit ?', desc: 'Ordures, eaux de cale, eaux usées : distances et conditions.',
    make() {
      const s = scenario();
      const good = s.ok ? 'Autorisé' : 'Interdit';
      return {
        q: s.t + ' Est-ce permis ?',
        champs: [{ type: 'choix', label: 'Réponse', a: good, options: ['Autorisé', 'Interdit'] }],
        sol: `<p><b>${good}.</b> ${s.e}</p><p class="small muted">Repères : plastiques jamais · aliments broyés 3 M, non broyés 12 M (zone spéciale : broyés à 12 M seulement) · hydrocarbures 15 ppm en route · eaux usées traitées 3 M, non traitées 12 M à 4 nd.</p>`
      };
    }
  });
})();
