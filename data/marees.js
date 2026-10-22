/* Marées — module P1-1 */
C200.module({
  id: 'marees', bloc: 'P1-1', ordre: 6, court: 'MAR', titre: 'Marées',
  intro: 'Phénomène, vocabulaire, annuaire, formules de hauteur et d\'heure, profondeur, pied de pilote, heure limite. Les douzièmes ne sont plus au programme.',
  calculs: ['maree-hauteur', 'maree-heure', 'maree-prof', 'maree-limite', 'maree-corrections', 'maree-coef'],
  fiches: [
    {
      id: 'astres', titre: 'Pourquoi la marée : Lune et Soleil', src: 'Cours Nav p. 71 à 76',
      html: `<p>La marée vient de l'<b>attraction de la Lune et du Soleil</b> sur les océans, combinée à la force centrifuge. La <b>Lune</b> agit <b>2 à 3 fois plus</b> que le Soleil (plus petite mais beaucoup plus proche).</p>
<ul><li>Deux « bourrelets » d'eau : côté Lune et côté opposé. La Terre tourne dessous → <b>2 PM et 2 BM par jour</b> environ (marée <b>semi-diurne</b>).</li>
<li>Un cycle BM → PM → BM dure en moyenne <b>12 h 25</b>.</li></ul>
<div class="tw"><table><tr><th>Position des astres</th><th>Lune</th><th>Marée</th></tr>
<tr><td>Alignés (<b>syzygie</b>)</td><td>Nouvelle et pleine lune</td><td><b>Vives-eaux</b> : grand marnage</td></tr>
<tr><td>À angle droit (<b>quadrature</b>)</td><td>Premier et dernier quartier</td><td><b>Mortes-eaux</b> : petit marnage</td></tr></table></div>
<p>Vives-eaux et mortes-eaux alternent environ toutes les semaines (cycle de 14 jours). Les plus forts coefficients arrivent aux <b>équinoxes</b>, les plus faibles aux solstices.</p>
<p>En Méditerranée la marée est faible : c'est surtout la <b>pression</b> qui fait varier le niveau.</p>`
    },
    {
      id: 'vocabulaire', titre: 'Le vocabulaire de la marée', src: 'Cours Nav p. 76 à 78',
      html: `<div class="tw"><table><tr><th>Terme</th><th>Sens</th></tr>
<tr><td><b>Pleine mer (PM)</b></td><td>Niveau le plus haut (heure + hauteur)</td></tr>
<tr><td><b>Basse mer (BM)</b></td><td>Niveau le plus bas</td></tr>
<tr><td><b>Marnage M</b></td><td>M = hauteur PM − hauteur BM</td></tr>
<tr><td><b>Durée D</b></td><td>D = heure PM − heure BM (≈ 6 h)</td></tr>
<tr><td><b>Flot / flux / montant</b></td><td>Marée montante</td></tr>
<tr><td><b>Jusant / reflux / baissée</b></td><td>Marée descendante</td></tr>
<tr><td><b>Étale</b></td><td>La mer semble ne plus bouger (≈ 15 min avant et après la PM ou la BM)</td></tr>
<tr><td><b>Coefficient</b></td><td>Nombre de 20 à 120, proportionnel au marnage</td></tr></table></div>
<h3>Les coefficients</h3>
<div class="tw"><table><tr><th>Coef.</th><th>Marée</th><th>Sigle</th></tr>
<tr><td>120</td><td>Vives-eaux exceptionnelles</td><td>PMVE / BMVE 120</td></tr>
<tr><td>95</td><td>Vives-eaux moyennes</td><td>PMVE / BMVE 95</td></tr>
<tr><td>70</td><td>Marée moyenne</td><td>PMMM / BMMM</td></tr>
<tr><td>45</td><td>Mortes-eaux moyennes</td><td>PMME / BMME 45</td></tr>
<tr><td>20</td><td>Mortes-eaux les plus faibles</td><td>PMME / BMME 20</td></tr></table></div>
<div class="retenir"><p><b>Règle des 3 jours</b> : vives-eaux le jour de la nouvelle ou pleine lune et les 2 jours suivants ; mortes-eaux le jour d'un quartier et les 2 jours suivants ; marée moyenne les autres jours.</p></div>
<p><b>Règle des 2 heures</b> (ports rattachés) : si l'heure de la PM du jour est à moins de 2 h de l'heure de référence PMVE, on est en VE ; à moins de 2 h de PMME, en ME ; sinon en MM.</p>`
    },
    {
      id: 'niveaux', titre: 'Sonde, hauteur d\'eau, profondeur', src: 'Cours Nav p. 79 à 81, 91-92',
      html: `<div class="tw"><table><tr><th>Grandeur</th><th>De … à …</th></tr>
<tr><td><b>Zéro des cartes</b> (zéro hydrographique)</td><td>≈ niveau des plus basses mers (BMVE 120)</td></tr>
<tr><td><b>Sonde S</b></td><td>Du zéro des cartes au fond (négative si le fond est au-dessus du zéro)</td></tr>
<tr><td><b>Hauteur d'eau HMA</b></td><td>Du zéro des cartes à la surface</td></tr>
<tr><td><b>Profondeur PROF</b></td><td>Du fond à la surface</td></tr>
<tr><td><b>Tirant d'eau TE</b></td><td>De la surface au bas de la quille</td></tr>
<tr><td><b>Hauteur sous quille HSQ</b></td><td>Du bas de la quille au fond</td></tr>
<tr><td><b>Pied de pilote PP</b></td><td>La HSQ minimale que le capitaine s'impose</td></tr></table></div>
<div class="formule">PROF = HMA + S = TE + HSQ<br>HSQ = HMA + S − TE<br>Besoin en eau = TE + PP</div>
<div class="piege"><p>HMA et PROF sont toujours positives, mais la <b>sonde peut être négative</b> : HMA + (−0,75) = on retranche.</p></div>
<p>Le pied de pilote dépend de l'<b>état de la mer</b> (houle : le navire pilonne), de la <b>pression</b>, du vent, de la nature du fond et de la vitesse (le navire « s'enfonce » en marche : squat).</p>`
    },
    {
      id: 'annuaire', titre: 'L\'annuaire des marées', src: 'Cours Nav p. 81 à 83, 98 à 104',
      html: `<p>Publié chaque année par le <b>SHOM</b>. Le tome 1 « Ports de France » contient :</p>
<ul><li>la table des <b>coefficients</b> (à Brest) et les phases de la lune ;</li>
<li>les heures et hauteurs de PM et BM pour <b>22 ports principaux</b>, avec leur <b>courbe type</b> ;</li>
<li>des hauteurs d'heure en heure pour Saint-Malo et Le Havre ;</li>
<li>la table des <b>ports rattachés</b> (corrections à appliquer à un port principal) ;</li>
<li>le graphique en <b>L</b> et la table de correction de pression.</li></ul>
<div class="retenir"><p>Les heures sont en <b>UT + 1</b> (heure d'hiver). En <b>heure d'été</b> (UT + 2), on <b>ajoute 1 h</b>.</p><p>Hauteurs à 5 cm près.</p></div>
<h3>Correction de pression</h3>
<p>La mer réagit comme un baromètre : <b>1 hPa au-dessus de 1013 = 1 cm de moins</b> (anticyclone), 1 hPa en dessous = 1 cm de plus (dépression). Exemple : 1023 hPa → −0,10 m.</p>
<h3>Port rattaché, étape par étape</h3>
<ol><li>Relever PM et BM du port principal (UT+1).</li><li>Trouver VE / ME / MM (règle des 3 jours ou des 2 heures).</li><li>Corriger l'heure : +1 h en été, + correction d'heure du port rattaché.</li><li>Corriger la hauteur : pression + correction du port (interpolée entre VE et ME selon la hauteur du jour).</li><li>Calculer avec la formule.</li></ol>`
    },
    {
      id: 'formules', titre: 'Les formules de calcul', src: 'Cours Nav p. 84 à 90',
      html: `<p>Trois méthodes : <b>courbe type</b> (ports principaux), <b>formule</b> (ports rattachés), <b>courbe en L</b>. La méthode des douzièmes n'est plus au programme.</p>
<h3>Hauteur d'eau à une heure donnée</h3>
<div class="formule">h = M × sin²(90 × t / D)<br>HMA = haut. BM + h</div>
<ul><li><b>t</b> = heure demandée − heure <b>BM</b></li><li><b>D</b> = heure PM − heure BM (garder le signe ; t a toujours le même signe que D)</li><li><b>M</b> = haut. PM − haut. BM</li><li><b>h</b> = hauteur au-dessus de la BM</li></ul>
<div class="exemple"><p>PM 17h08 5,10 m ; BM 23h20 2,10 m ; heure 19h23. D = −6h12 ; M = 3,00 m ; t = −3h57. h = 3 × sin²(90 × 3,95 / 6,2) = 2,12 m → HMA = 4,23 m.</p></div>
<h3>Heure pour une hauteur donnée</h3>
<div class="formule">t = D / 90 × Arcsin √(h / M)<br>Heure = heure BM + t</div>
<div class="exemple"><p>PM 08h10 7,10 m ; BM 14h20 0,80 m ; on veut 3,20 m. h = 2,40 ; M = 6,30 ; D = −6h10 → t = −2h37 → 11h43.</p></div>
<h3>Courbe type (port principal)</h3>
<ol><li>Référence = PM ou BM la plus proche de l'heure (ou de la hauteur) demandée.</li><li>Marnage du jour comparé aux marnages VE et ME du port → choisir la courbe.</li><li>Lire le facteur f ; h = f × M ; HMA = haut. BM + h.</li></ol>
<div class="piege"><p>Calculatrice en <b>degrés</b>. Les heures en décimales : 3 h 57 = 3,95 h. Et ne pas oublier <b>+1 h en été</b>.</p></div>`
    },
    {
      id: 'limite', titre: 'Hauteur limite et heure limite de passage', src: 'Cours Nav p. 96 à 98, 105 à 108',
      html: `<p>Pour passer sur une sonde, il faut que la profondeur soit au moins égale au besoin en eau :</p>
<div class="formule">HMA + S ≥ TE + PP<br>HMA limite = TE + PP − S</div>
<div class="exemple"><p>TE 3,50 m, PP 1,50 m, sonde 1,00 m → HMA limite = 4,00 m.<br>TE 1,50 m, PP 0,50 m, sonde −0,80 m → HMA limite = 2,80 m.</p></div>
<p>Puis on calcule l'<b>heure</b> où la marée atteint cette HMA :</p>
<ul><li>marée <b>montante</b> : on peut passer <b>à partir de</b> cette heure ;</li>
<li>marée <b>descendante</b> : on peut passer <b>jusqu'à</b> cette heure.</li></ul>
<p>Même logique pour l'heure d'<b>échouage</b> (HSQ = 0 en descendant) et de <b>déséchouage</b> (en montant).</p>`
    }
  ],
  cartes: [
    ['Quel astre agit le plus sur la marée ?', 'La Lune (2 à 3 fois plus que le Soleil).', 'astres'],
    ['Durée moyenne d\'un cycle de marée semi-diurne ?', '12 h 25 environ.', 'astres'],
    ['Vives-eaux : position des astres ?', 'Soleil et Lune alignés (syzygie) : nouvelle et pleine lune.', 'astres'],
    ['Mortes-eaux : position des astres ?', 'Soleil et Lune à angle droit (quadrature) : premier et dernier quartier.', 'astres'],
    ['Formule du marnage ?', 'M = hauteur PM − hauteur BM.', 'vocabulaire'],
    ['Que sont le flot et le jusant ?', 'Flot : marée montante. Jusant : marée descendante.', 'vocabulaire'],
    ['Coefficient 95 ?', 'Vives-eaux moyennes.', 'vocabulaire'],
    ['Coefficient 45 ?', 'Mortes-eaux moyennes.', 'vocabulaire'],
    ['Coefficient 70 ?', 'Marée moyenne.', 'vocabulaire'],
    ['Règle des 3 jours ?', 'VE le jour de NL/PL et les 2 jours suivants ; ME le jour d\'un quartier et les 2 jours suivants ; MM sinon.', 'vocabulaire'],
    ['Qu\'est-ce que la sonde ?', 'La profondeur sous le zéro des cartes (peut être négative).', 'niveaux'],
    ['Qu\'est-ce que la HMA ?', 'La hauteur d\'eau au-dessus du zéro des cartes.', 'niveaux'],
    ['Formule de la profondeur ?', 'PROF = HMA + S.', 'niveaux'],
    ['Formule de la hauteur sous quille ?', 'HSQ = HMA + S − TE.', 'niveaux'],
    ['Qu\'est-ce que le pied de pilote ?', 'La hauteur sous quille minimale que le capitaine s\'impose.', 'niveaux'],
    ['Besoin en eau ?', 'TE + pied de pilote.', 'niveaux'],
    ['En quel temps sont les heures de l\'annuaire ?', 'UT + 1. En été, ajouter 1 h.', 'annuaire'],
    ['Correction de pression ?', '1 cm par hPa d\'écart avec 1013 : − si la pression est plus haute, + si plus basse.', 'annuaire'],
    ['Pression 993 hPa : correction ?', '+0,20 m.', 'annuaire'],
    ['Combien de ports principaux dans l\'annuaire ?', '22, avec une courbe type chacun (sauf Toulon).', 'annuaire'],
    ['Formule de la hauteur au-dessus de la BM ?', 'h = M × sin²(90 × t / D).', 'formules'],
    ['Que valent t et D dans la formule ?', 't = heure demandée − heure BM ; D = heure PM − heure BM.', 'formules'],
    ['Formule de l\'heure pour une hauteur donnée ?', 't = D / 90 × Arcsin √(h / M) ; heure = heure BM + t.', 'formules'],
    ['Méthode pour un port principal ?', 'La courbe type (facteur f, h = f × M).', 'formules'],
    ['Formule de la HMA limite ?', 'HMA limite = TE + PP − S.', 'limite'],
    ['Marée montante : l\'heure limite veut dire… ?', 'On peut passer à partir de cette heure.', 'limite']
  ],
  qcm: [
    { q: 'La marée est principalement due à…', r: ['La Lune', 'Le Soleil', 'Le vent', 'La rotation de la Terre seule'], e: 'La Lune agit 2 à 3 fois plus que le Soleil.', f: 'astres' },
    { q: 'Les vives-eaux se produisent…', r: ['À la nouvelle et à la pleine lune', 'Aux quartiers de lune', 'Seulement à la pleine lune', 'Au solstice'], e: 'Astres alignés : syzygie.', f: 'astres' },
    { q: 'Les plus grandes marées de l\'année ont lieu vers…', r: ['Les équinoxes', 'Les solstices', 'Noël', 'Le 14 juillet'], e: 'Cours p. 76.', f: 'astres' },
    { q: 'PM 5,80 m, BM 1,30 m. Marnage ?', r: ['4,50 m', '7,10 m', '3,55 m', '5,80 m'], e: 'M = PM − BM.', f: 'vocabulaire' },
    { q: 'Le jusant, c\'est…', r: ['La marée descendante', 'La marée montante', 'L\'étale de PM', 'Le marnage'], e: 'Flot = montant ; jusant = baissant.', f: 'vocabulaire' },
    { q: 'Un coefficient de 120 correspond à…', r: ['Vives-eaux exceptionnelles', 'Vives-eaux moyennes', 'Mortes-eaux', 'Marée moyenne'], e: '', f: 'vocabulaire' },
    { q: 'Le premier quartier de lune donne…', r: ['Des mortes-eaux', 'Des vives-eaux', 'Une marée moyenne', 'Pas de marée'], e: 'Quadrature.', f: 'vocabulaire' },
    { q: 'Le zéro des cartes correspond à peu près…', r: ['Aux plus basses mers', 'Au niveau moyen', 'Aux plus hautes mers', 'À la PMVE 95'], e: 'BMVE 120.', f: 'niveaux' },
    { q: 'HMA 3,20 m, sonde 2,50 m. Profondeur ?', r: ['5,70 m', '0,70 m', '3,20 m', '2,50 m'], e: 'PROF = HMA + S.', f: 'niveaux' },
    { q: 'HMA 4,18 m, sonde −0,75 m, TE 1,05 m. HSQ ?', r: ['2,38 m', '3,88 m', '5,98 m', '3,13 m'], e: '4,18 − 0,75 − 1,05.', f: 'niveaux' },
    { q: 'Le pied de pilote augmente surtout…', r: ['Par houle (le navire pilonne)', 'Par beau temps', 'Quand la pression monte', 'La nuit'], e: 'Le navire s\'enfonce dans le creux des vagues.', f: 'niveaux' },
    { q: 'Les heures de l\'annuaire des marées sont en…', r: ['UT + 1', 'UT', 'UT + 2', 'Heure locale toute l\'année'], e: 'Ajouter 1 h en été.', f: 'annuaire' },
    { q: 'Annuaire : PM 14h31. En été, l\'heure locale est…', r: ['15h31', '13h31', '14h31', '16h31'], e: 'UT+2 en été.', f: 'annuaire' },
    { q: 'Pression 1023 hPa. Correction de hauteur ?', r: ['−0,10 m', '+0,10 m', '−0,23 m', '0'], e: 'Anticyclone : la mer baisse de 1 cm par hPa.', f: 'annuaire' },
    { q: 'Pour un port rattaché, on utilise…', r: ['Les corrections + la formule', 'Uniquement la courbe type', 'La règle des douzièmes', 'Le livre des feux'], e: 'Cours p. 88.', f: 'annuaire' },
    { q: 'Dans h = M sin²(90 t / D), t se compte depuis…', r: ['L\'heure de la BM', 'L\'heure de la PM', 'Minuit', 'L\'heure de départ'], e: 't = heure demandée − heure BM.', f: 'formules' },
    { q: 'À mi-marée (t = D/2), h vaut…', r: ['M / 2', 'M / 4', 'M', '0'], e: 'sin²(45°) = 0,5.', f: 'formules' },
    { q: 'Quand t = D, h vaut…', r: ['M (on est à la PM)', '0', 'M / 2', '2 M'], e: 'sin²(90°) = 1.', f: 'formules' },
    { q: 'Méthode pour un port principal ?', r: ['La courbe type', 'La règle des douzièmes', 'Les éphémérides', 'L\'atlas des courants'], e: 'Précision de 10 à 20 cm.', f: 'formules' },
    { q: 'La règle des douzièmes est…', r: ['Plus au programme', 'La méthode officielle', 'Obligatoire pour les ports rattachés', 'Utilisée pour le courant'], e: 'Cours p. 84.', f: 'formules' },
    { q: 'TE 3,50 m, PP 1,50 m, sonde 1,00 m. HMA limite ?', r: ['4,00 m', '6,00 m', '3,00 m', '5,00 m'], e: 'TE + PP − S.', f: 'limite' },
    { q: 'TE 1,50 m, PP 0,50 m, sonde −0,80 m. HMA limite ?', r: ['2,80 m', '1,20 m', '2,00 m', '1,80 m'], e: 'Moins une sonde négative = plus.', f: 'limite' },
    { q: 'Marée descendante : l\'heure limite indique…', r: ['Jusqu\'à quand on peut passer', 'À partir de quand on peut passer', 'L\'heure de la BM', 'L\'heure de l\'étale'], e: 'Après, il n\'y a plus assez d\'eau.', f: 'limite' }
  ]
});
