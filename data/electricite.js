/* Électricité — module M2-1 (mécanicien 250 kW) */
C200.module({
  id: 'electricite', bloc: '250', ordre: 18, court: 'ÉLEC', titre: 'Électricité',
  intro: 'Tension, intensité, résistance, puissance ; mesures ; batteries et bilan électrique ; démarrage et charge ; câbles et protections ; courant alternatif ; dépannage. Module M2-1 du 250 kW.',
  calculs: ['elec-ohm', 'elec-puissance', 'elec-batterie', 'elec-couplage', 'elec-cable'],
  fiches: [
    {
      id: 'bases', titre: 'Les grandeurs et la loi d\'Ohm', src: 'Programme 250 kW ; Guide Pallas p. 66',
      html: `<div class="tw"><table><tr><th>Grandeur</th><th>Symbole</th><th>Unité</th><th>Image hydraulique</th></tr>
<tr><td>Tension</td><td>U</td><td>volt (V)</td><td>La pression</td></tr>
<tr><td>Intensité</td><td>I</td><td>ampère (A)</td><td>Le débit</td></tr>
<tr><td>Résistance</td><td>R</td><td>ohm (Ω)</td><td>Le tuyau étroit qui freine</td></tr>
<tr><td>Puissance</td><td>P</td><td>watt (W)</td><td>Le travail fourni chaque seconde</td></tr>
<tr><td>Énergie</td><td>W</td><td>wattheure (Wh)</td><td>Le travail total</td></tr>
<tr><td>Capacité d'une batterie</td><td>Q</td><td>ampère-heure (Ah)</td><td>La taille du réservoir</td></tr></table></div>
<div class="formule">U = R × I</div>
<div class="formule">P = U × I = R × I²</div>
<div class="formule">Q (Ah) = I (A) × t (h)</div>
<p>Deux résistances <b>en série</b> s'additionnent (même courant). <b>En parallèle</b>, chaque appareil reçoit la même tension et les courants s'additionnent : c'est ainsi que sont branchés les appareils du bord.</p>
<p><b>Courant continu</b> (batteries : 12 ou 24 V) ; <b>courant alternatif</b> (groupe, quai : 230 V monophasé ou 400 V triphasé, <b>50 Hz</b> en Europe).</p>`
    },
    {
      id: 'mesures', titre: 'Mesurer : le multimètre', src: 'Programme 250 kW (complément)',
      html: `<div class="tw"><table><tr><th>Mesure</th><th>Branchement</th><th>Attention</th></tr>
<tr><td><b>Tension</b> (voltmètre)</td><td>En <b>parallèle</b>, aux bornes</td><td>Bon calibre, continu (DC) ou alternatif (AC)</td></tr>
<tr><td><b>Intensité</b> (ampèremètre)</td><td>En <b>série</b> dans le circuit, ou <b>pince</b> autour d'un seul fil</td><td>Jamais en parallèle (court-circuit) ; calibre 10 A maxi en général</td></tr>
<tr><td><b>Résistance</b> / continuité (ohmmètre)</td><td>Sur le composant</td><td><b>Hors tension</b>, composant isolé</td></tr></table></div>
<h3>Contrôles utiles</h3>
<ul><li>Batterie au repos (moteur arrêté depuis un moment) : <b>~12,6-12,7 V</b> = chargée ; ~12,2 V = moitié ; moins de 12 V = vide.</li><li>Moteur en marche : <b>13,8 à 14,4 V</b> aux bornes = l'alternateur charge.</li><li>Chute de tension pendant le démarrage : une bonne batterie reste au-dessus de ~10 V.</li><li>Contrôle d'<b>isolement</b> : vérifier qu'aucun conducteur ne touche la masse ou la coque (défaut d'isolement = fuite de courant, corrosion, risque d'électrocution).</li></ul>`
    },
    {
      id: 'batteries', titre: 'Les batteries au plomb', src: 'Guide Pallas p. 65 à 67',
      html: `<p>Une batterie 12 V = <b>6 éléments</b> d'environ 2 V (6 V = 3 éléments). Chaque élément baigne dans l'<b>électrolyte</b> : eau déminéralisée (~60 %) + <b>acide sulfurique</b> (~40 %). Sa <b>densité</b> baisse quand la batterie se décharge (mesure au pèse-acide).</p>
<h3>Lire l'étiquette : 12 V – 80 Ah – 200 A</h3>
<ul><li><b>12 V</b> : tension nominale.</li><li><b>80 Ah</b> : capacité (en 20 h) : 4 A pendant 20 h.</li><li><b>200 A</b> : courant de démarrage à froid (à −18 °C).</li></ul>
<h3>Série ou parallèle</h3>
<div class="tw"><table><tr><th>Montage</th><th>Câblage</th><th>Résultat</th></tr>
<tr><td><b>Série</b></td><td>+ d'une batterie sur − de la suivante</td><td>Tensions <b>additionnées</b>, capacité d'une seule (2 × 12 V 100 Ah = 24 V 100 Ah)</td></tr>
<tr><td><b>Parallèle</b></td><td>Tous les + ensemble, tous les − ensemble</td><td>Tension d'une seule, capacités <b>additionnées</b> (12 V 200 Ah)</td></tr></table></div>
<p>Jamais en série deux capacités différentes ; jamais en parallèle deux tensions différentes ; jamais inverser + et −.</p>
<h3>Règles de bord</h3>
<ul><li>Deux parcs : un pour le <b>moteur</b>, un pour le <b>service</b>. La batterie moteur doit permettre au moins <b>6 démarrages</b> consécutifs sans recharge.</li><li>Ne pas la vider de plus de <b>80 %</b> ; une batterie sans entretien a moins d'autodécharge.</li><li>En charge, elle dégage de l'<b>hydrogène</b> (explosif) : local ventilé, pas d'étincelle ni de flamme.</li><li>Acide : gants et lunettes. Débrancher le <b>− en premier</b>, le rebrancher en <b>dernier</b>.</li></ul>`
    },
    {
      id: 'bilan', titre: 'Le bilan électrique', src: 'Guide Pallas p. 66-67, 72',
      html: `<p>Pour choisir les batteries, on additionne ce que consomme le bord en une journée :</p>
<div class="formule">Énergie (Wh) = P (W) × durée (h) · Ah = Wh / U</div>
<div class="exemple"><p>5 ampoules de 20 W pendant 6 h : 600 Wh. Radio 100 W pendant 6 h : 600 Wh. Divers : 125 Wh. Total 1 325 Wh, soit 1 325 / 12 ≈ <b>110 Ah</b>. Sans vider à plus de 80 % : 110 / 0,8 ≈ <b>137 Ah</b> au minimum. Pour le confort, 2 à 3 fois le besoin du jour.</p></div>
<h3>Recharger</h3>
<p>Le régulateur charge à environ <b>1/10 de la capacité</b>. Une batterie de 100 Ah à moitié vide demande au moins <b>5 heures</b> de moteur. Gros besoins : deuxième alternateur, chargeur de quai, panneaux solaires, groupe.</p>
<p>Un démarreur qui consomme 300 A viderait une batterie de 80 Ah en un quart d'heure : démarrer par impulsions courtes.</p>`
    },
    {
      id: 'demarrage', titre: 'Démarreur, alternateur, circuit du moteur', src: 'Guide Pallas p. 63 à 72',
      html: `<h3>Le démarreur</h3>
<p>Moteur électrique à courant continu très puissant. Le <b>solénoïde</b> (relais électromagnétique) pousse le <b>lanceur</b> : son pignon engrène sur la <b>couronne du volant</b> moteur, puis se dégage quand le moteur tourne. Il lui faut une alimentation parfaite : batterie chargée, <b>cosses propres et serrées</b>, gros câbles.</p>
<h3>L'alternateur et le régulateur</h3>
<p>Entraîné par <b>courroie</b>. Le rotor (alimenté par les balais) tourne dans le stator : il produit de l'alternatif, que des <b>diodes</b> redressent en continu. Le <b>régulateur</b> garde la tension constante (~14 V). Si la courroie casse : le <b>voyant de charge s'allume</b> (et souvent la pompe à eau s'arrête aussi).</p>
<h3>L'installation</h3>
<ul><li><b>Coupe-batterie</b> (interrupteur principal) ; <b>répartiteur de charge</b> pour charger deux parcs sans qu'ils se vident l'un dans l'autre.</li><li>Montage <b>unipolaire</b> : le bloc moteur sert de masse (le plus courant). Montage <b>bipolaire</b> (masse isolée) : conseillé sur coque acier ou alu, contre la corrosion.</li><li>Capteurs du moteur : mano-contact d'huile, thermo-contact et sonde de température d'eau, relais des bougies de préchauffage ; voyants et alarmes au tableau.</li></ul>`
    },
    {
      id: 'protection', titre: 'Câbles, fusibles et dangers', src: 'Programme 250 kW (complément) ; Cours C500 Entretien p. 13',
      html: `<h3>Les câbles</h3>
<p>La section dépend de l'<b>intensité</b> et de la <b>longueur</b> (aller + retour). Câble trop fin : il chauffe (risque de feu) et la tension chute au bout.</p>
<div class="formule">R = ρ × 2L / S · ΔU = R × I</div>
<p>Cuivre : ρ = 0,0175 Ω·mm²/m. On vise une chute de moins de 3 % pour l'électronique. Câbles marins étamés, cosses serties, passages protégés, au-dessus des fonds.</p>
<h3>Les protections</h3>
<ul><li><b>Fusible</b> ou <b>disjoncteur</b> sur chaque circuit, au départ du tableau : il protège le <b>câble</b> contre la surintensité et le court-circuit. Calibre juste au-dessus du courant normal.</li><li>En 230 V : <b>différentiel 30 mA</b> (protège les personnes), mise à la terre.</li><li>Prise de quai : <b>isolateur galvanique</b> ou transformateur d'isolement contre la corrosion électrolytique.</li></ul>
<h3>Les dangers</h3>
<p><b>Électrisation</b> (le courant traverse le corps) en 230 V surtout, plus grave les mains mouillées ; <b>court-circuit</b> sur une batterie : courant énorme, câble rougi, feu. Toujours couper et consigner avant d'intervenir.</p>`
    },
    {
      id: 'alternatif', titre: 'Le courant alternatif à bord', src: 'Programme 250 kW (complément)',
      html: `<ul>
<li><b>Sources</b> : groupe électrogène, prise de quai, ou <b>convertisseur</b> (onduleur) qui fabrique du 230 V à partir des batteries.</li>
<li><b>Inverseur de source</b> : on ne branche jamais deux sources en même temps sur le même réseau.</li>
<li><b>Chargeur</b> : du 230 V vers les batteries.</li>
<li><b>Triphasé 400 V</b> (gros navires) : alimente les moteurs électriques <b>asynchrones</b> (pompes, compresseurs). Inverser deux phases inverse le sens de rotation.</li>
<li>Fréquence <b>50 Hz</b> en Europe (60 Hz ailleurs) : vérifier les appareils.</li>
<li>Tableau avec voltmètre, fréquencemètre, disjoncteurs, différentiel, contrôleur d'isolement.</li></ul>`
    },
    {
      id: 'depannage', titre: 'Dépanner l\'électricité du moteur', src: 'Guide Pallas p. 190, 195, 204-206',
      html: `<div class="tw"><table><tr><th>Symptôme</th><th>Causes et remèdes</th></tr>
<tr><td><b>Rien ne se passe à la clé</b></td><td>Coupe-batterie ouvert, batterie à plat, fusible, cosses sales</td></tr>
<tr><td><b>Le démarreur claque mais ne tourne pas</b></td><td>Batterie faible, cosses desserrées, solénoïde ; mesurer la tension pendant le démarrage</td></tr>
<tr><td><b>Le démarreur tourne lentement</b></td><td>Batterie faible, mauvaises connexions, huile trop épaisse à froid, charbons usés</td></tr>
<tr><td><b>Le démarreur tourne mais n'entraîne pas</b></td><td>Lanceur ou couronne abîmés</td></tr>
<tr><td><b>Le voyant de charge reste allumé</b></td><td>Courroie cassée ou détendue, régulateur, diodes, balais, connexions</td></tr>
<tr><td><b>La batterie se vide au repos</b></td><td>Fuite de courant (consommateur oublié, défaut d'isolement), élément mort, sulfatation</td></tr>
<tr><td><b>La batterie chauffe ou bout</b></td><td>Surcharge : régulateur défectueux (tension trop forte)</td></tr></table></div>
<div class="retenir"><p>Méthode : partir de la <b>batterie</b> (tension), suivre le courant (coupe-batterie, fusibles, cosses), mesurer à chaque étape. 80 % des pannes sont des <b>connexions</b>.</p></div>`
    }
  ],
  cartes: [
    ['Loi d\'Ohm ?', 'U = R × I.', 'bases'],
    ['Puissance électrique ?', 'P = U × I (= R × I²).', 'bases'],
    ['Unité de capacité d\'une batterie ?', 'L\'ampère-heure (Ah).', 'bases'],
    ['Appareils du bord : série ou parallèle ?', 'En parallèle (même tension pour tous).', 'bases'],
    ['Fréquence du courant alternatif en Europe ?', '50 Hz.', 'bases'],
    ['Comment branche-t-on un voltmètre ?', 'En parallèle, aux bornes.', 'mesures'],
    ['Comment branche-t-on un ampèremètre ?', 'En série (ou pince ampèremétrique autour d\'un fil).', 'mesures'],
    ['Mesure de résistance : condition ?', 'Hors tension.', 'mesures'],
    ['Batterie 12 V chargée au repos ?', 'Environ 12,6 à 12,7 V.', 'mesures'],
    ['Tension moteur en marche si l\'alternateur charge ?', 'Environ 13,8 à 14,4 V.', 'mesures'],
    ['Batterie 12 V : combien d\'éléments ?', '6 (environ 2 V chacun).', 'batteries'],
    ['Électrolyte ?', 'Eau déminéralisée + acide sulfurique.', 'batteries'],
    ['12 V – 80 Ah – 200 A : le 200 A ?', 'Courant de démarrage à froid (−18 °C).', 'batteries'],
    ['Deux batteries 12 V 100 Ah en série ?', '24 V – 100 Ah.', 'batteries'],
    ['Deux batteries 12 V 100 Ah en parallèle ?', '12 V – 200 Ah.', 'batteries'],
    ['Gaz dégagé en charge ?', 'Hydrogène, explosif : ventiler, pas de flamme.', 'batteries'],
    ['Débrancher une batterie : quelle borne d\'abord ?', 'Le moins (−) ; on le rebranche en dernier.', 'batteries'],
    ['Nombre de démarrages exigé sans recharge ?', 'Au moins 6.', 'batteries'],
    ['Énergie en Wh ?', 'Puissance (W) × durée (h).', 'bilan'],
    ['Capacité mini à partir du besoin ?', 'Besoin / 0,8 (ne pas vider à plus de 80 %).', 'bilan'],
    ['Courant de charge du régulateur ?', 'Environ 1/10 de la capacité.', 'bilan'],
    ['Rôle du solénoïde du démarreur ?', 'Pousser le lanceur sur la couronne et fermer le circuit de puissance.', 'demarrage'],
    ['Rôle des diodes de l\'alternateur ?', 'Redresser l\'alternatif en continu.', 'demarrage'],
    ['Courroie d\'alternateur cassée : signe ?', 'Le voyant de charge s\'allume.', 'demarrage'],
    ['Répartiteur de charge ?', 'Charge deux parcs sans qu\'ils se déchargent l\'un dans l\'autre.', 'demarrage'],
    ['Montage bipolaire : quand ?', 'Masse isolée, conseillé sur coque acier ou alu.', 'demarrage'],
    ['Que protège un fusible ?', 'Le câble (surintensité, court-circuit).', 'protection'],
    ['Résistance d\'un câble ?', 'R = ρ × 2L / S (ρ cuivre = 0,0175).', 'protection'],
    ['Différentiel 30 mA ?', 'Protège les personnes contre l\'électrocution (230 V).', 'protection'],
    ['Inverseur de source ?', 'Empêche de brancher deux sources 230 V en même temps.', 'alternatif'],
    ['Inverser deux phases d\'un moteur triphasé ?', 'Il tourne dans l\'autre sens.', 'alternatif'],
    ['Démarreur qui claque sans tourner ?', 'Batterie faible, cosses desserrées, solénoïde.', 'depannage'],
    ['Batterie qui bout ?', 'Surcharge : régulateur défectueux.', 'depannage'],
    ['Cause la plus fréquente des pannes électriques ?', 'Les connexions (cosses sales ou desserrées).', 'depannage']
  ],
  qcm: [
    { q: 'Une ampoule de 24 W sur 12 V consomme…', r: ['2 A', '0,5 A', '12 A', '288 A'], e: 'I = P / U.', f: 'bases' },
    { q: 'U = 12 V, R = 4 Ω. I vaut…', r: ['3 A', '48 A', '0,33 A', '16 A'], e: 'I = U / R.', f: 'bases' },
    { q: 'L\'ampèremètre se branche…', r: ['En série', 'En parallèle', 'Entre + et − de la batterie', 'Sur la masse'], e: 'En parallèle, c\'est un court-circuit.', f: 'mesures' },
    { q: 'On mesure une résistance…', r: ['Circuit hors tension', 'Moteur en marche', 'Batterie en charge', 'Au calibre 10 A'], e: 'Sinon mesure fausse et appareil abîmé.', f: 'mesures' },
    { q: 'Moteur en marche, la batterie affiche 12,2 V. Cela indique…', r: ['L\'alternateur ne charge pas', 'Tout va bien', 'Surcharge', 'Batterie neuve'], e: 'En charge on doit lire ~14 V.', f: 'mesures' },
    { q: 'Une batterie 12 V contient…', r: ['6 éléments', '12 éléments', '3 éléments', '2 éléments'], e: 'Environ 2 V par élément.', f: 'batteries' },
    { q: 'Deux batteries 12 V – 100 Ah en série donnent…', r: ['24 V – 100 Ah', '12 V – 200 Ah', '24 V – 200 Ah', '12 V – 100 Ah'], e: 'Série : les tensions s\'ajoutent.', f: 'batteries' },
    { q: 'Pour augmenter la capacité sans changer la tension, on monte les batteries…', r: ['En parallèle', 'En série', 'En étoile', 'En opposition'], e: 'Tous les + ensemble, tous les − ensemble.', f: 'batteries' },
    { q: 'Le local batteries doit être ventilé à cause…', r: ['De l\'hydrogène dégagé en charge', 'De la chaleur seulement', 'Du CO2', 'De l\'humidité'], e: 'Gaz explosif.', f: 'batteries' },
    { q: 'Pour débrancher une batterie, on enlève d\'abord…', r: ['Le moins (−)', 'Le plus (+)', 'Les deux ensemble', 'Peu importe'], e: 'On évite un court-circuit avec la clé contre la masse.', f: 'batteries' },
    { q: 'Besoin journalier : 90 Ah. Capacité minimale (sans vider à plus de 80 %) ?', r: ['113 Ah', '90 Ah', '72 Ah', '180 Ah'], e: '90 / 0,8 = 112,5 Ah.', f: 'bilan' },
    { q: 'Une batterie de 120 Ah déchargée de moitié, chargée à 12 A, demande au moins…', r: ['5 h', '10 h', '1 h', '12 h'], e: '60 Ah / 12 A.', f: 'bilan' },
    { q: 'Le voyant de charge s\'allume en route. Cause fréquente ?', r: ['Courroie d\'alternateur cassée', 'Filtre à gazole colmaté', 'Batterie neuve', 'Hélice sale'], e: 'Vérifier aussi la pompe à eau si elle est sur la même courroie.', f: 'demarrage' },
    { q: 'Ce qui transforme l\'alternatif de l\'alternateur en continu, ce sont…', r: ['Les diodes', 'Les balais', 'Le régulateur', 'La courroie'], e: 'Le régulateur, lui, règle la tension.', f: 'demarrage' },
    { q: 'Le fusible protège avant tout…', r: ['Le câble', 'La batterie', 'L\'utilisateur', 'L\'alternateur'], e: 'Contre la surchauffe et le court-circuit.', f: 'protection' },
    { q: 'Un câble trop fin pour le courant…', r: ['Chauffe et fait chuter la tension', 'Ne change rien', 'Augmente la tension', 'Protège le circuit'], e: 'Risque d\'incendie.', f: 'protection' },
    { q: 'Le différentiel 30 mA protège…', r: ['Les personnes', 'Les câbles seulement', 'La batterie', 'Le démarreur'], e: 'Il coupe si du courant fuit (par un corps).', f: 'protection' },
    { q: 'On ne branche jamais en même temps…', r: ['Le groupe et la prise de quai sur le même réseau', 'Deux lampes', 'Le chargeur et les batteries', 'Deux fusibles'], e: 'D\'où l\'inverseur de source.', f: 'alternatif' },
    { q: 'Le démarreur tourne lentement par temps froid. Cause probable ?', r: ['Batterie faible ou huile épaisse', 'Régulateur trop fort', 'Fusible trop gros', 'Diodes neuves'], e: 'Le froid réduit la capacité et épaissit l\'huile.', f: 'depannage' }
  ]
});
