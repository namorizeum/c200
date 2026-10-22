/* Radar — module P1-1 (stage simulateur) */
C200.module({
  id: 'radar', bloc: 'P1-1', ordre: 8, court: 'RAD', titre: 'Radar',
  intro: 'Principe, réglages, échos parasites, présentations, point radar et cinématique (CPA, route vraie). Épreuve pratique pendant le stage simulateur.',
  calculs: ['radar-cpa', 'radar-decision'],
  fiches: [
    {
      id: 'principe', titre: 'Principe du radar', src: 'Cours Radar (Roquet) p. 3 à 14',
      html: `<p><b>RADAR</b> = RAdio Detecting And Ranging. L'antenne envoie une <b>impulsion</b> électromagnétique ; si elle rencontre un obstacle, une partie revient. Le temps de l'aller-retour donne la distance, la direction de l'antenne donne le relèvement.</p>
<div class="formule">distance = c × t / 2 &nbsp;(c = 300 000 km/s = 300 m/µs)</div>
<div class="tw"><table><tr><th>Bande</th><th>Fréquence</th><th>Longueur d'onde</th><th>Points forts</th></tr>
<tr><td><b>X</b></td><td>9 GHz (9 300-9 500 MHz)</td><td>3 cm</td><td>Image <b>fine</b>, petites cibles, près des côtes. <b>Obligatoire</b>, détecte les <b>SART</b> et les racons.</td></tr>
<tr><td><b>S</b></td><td>3 GHz</td><td>10 cm</td><td>Moins gêné par la <b>pluie</b> et la mer, porte plus loin : gros temps, large.</td></tr></table></div>
<h3>Les éléments</h3>
<ul><li><b>Antenne</b> (aérien) : tourne à environ 24-30 tr/min, faisceau horizontal étroit (0,5 à 2°), vertical large (20-25°) pour le roulis.</li>
<li><b>Émetteur</b> : synchronisateur → modulateur → <b>magnétron</b> (crée l'onde) ; <b>duplexeur</b> qui protège le récepteur pendant l'émission.</li>
<li><b>Récepteur</b> : amplifie l'écho très faible ; <b>indicateur</b> : l'écran.</li></ul>
<h3>Impulsions</h3>
<ul><li><b>Courtes</b> (short pulse) : meilleure <b>discrimination en distance</b>, petites échelles.</li>
<li><b>Longues</b> (long pulse) : plus d'énergie, meilleure <b>portée</b>.</li>
<li>Distance minimale de détection ≈ 150 × durée d'impulsion (µs) en mètres, en pratique ≈ 25 m.</li></ul>
<p>Discrimination <b>en direction</b> : dépend de la <b>largeur du faisceau</b> (plus l'antenne est longue, plus il est fin).</p>`
    },
    {
      id: 'portee', titre: 'Portée et cibles', src: 'Cours Radar p. 10-11, 15-16, 20-21 ; cours Nav p. 216-217',
      html: `<div class="formule">Portée radar ≈ 2,2 × (√h antenne + √H cible) &nbsp;(milles, mètres)</div>
<p>(Un peu plus que l'horizon optique, qui utilise 2,1.)</p>
<ul><li>Doubler la puissance n'augmente la portée que de ~20 %. Quand la distance double, l'écho reçu est divisé par 16.</li>
<li>Portées pratiques (bande X, antenne à 10 m) : embarcation en bois ≈ 0,5 M, bouée 1 à 3 M, navire 4 à 10 M.</li>
<li>Plus la longueur d'onde est courte, mieux on voit les petits objets : la <b>bande X</b> est meilleure pour les petites cibles proches et les côtes basses ; la bande S voit moins bien les petits objets.</li></ul>
<h3>Ce qui fait une bonne cible</h3>
<ul><li><b>Matière</b> : le métal réfléchit bien, le bois et le plastique mal.</li>
<li><b>Forme et orientation</b> : une surface perpendiculaire au faisceau renvoie bien ; les <b>trièdres</b> (coins) renvoient toujours vers l'émetteur → <b>réflecteurs radar</b>.</li>
<li><b>Racon</b> : balise qui répond à ton radar par un trait (souvent sa lettre en morse) derrière son écho. Bande X surtout.</li></ul>`
    },
    {
      id: 'reglages', titre: 'Réglages et échos parasites', src: 'Cours Radar p. 16 à 20 ; cours Nav p. 217-218',
      html: `<div class="tw"><table><tr><th>Réglage</th><th>Rôle</th></tr>
<tr><td><b>Gain</b></td><td>Seuil d'affichage : léger grésillement de fond = bon réglage</td></tr>
<tr><td><b>Anti-clutter sea</b> (STC)</td><td>Réduit le <b>retour de mer</b> près du centre</td></tr>
<tr><td><b>Anti-clutter rain</b> (FTC)</td><td>Réduit l'écho des <b>grains</b> et de la pluie</td></tr>
<tr><td><b>Range</b> (échelle)</td><td>0,5 – 3 – 6 – 12 – 24 M…</td></tr>
<tr><td><b>Tune</b> (accord)</td><td>Accorde le récepteur sur le magnétron</td></tr>
<tr><td><b>EBL / VRM</b></td><td>Alidade électronique (relèvement) / cercle de distance variable</td></tr></table></div>
<h3>Retour de mer</h3>
<p>Échos des vagues proches qui masquent bouées et petits bateaux. Plus fort par <b>mer agitée</b>, <b>au vent</b>, antenne haute, bande X. Régler l'anti-clutter sea avec prudence : trop fort, il efface les vraies cibles.</p>
<h3>Faux échos</h3>
<ul><li><b>Lobes secondaires</b> : arc d'échos à la même distance autour d'un gros navire proche.</li>
<li><b>Secteurs d'ombre / aveugles</b> : derrière mâts, cheminées, pontée.</li>
<li><b>Échos indirects</b> : réfléchis sur un mât, dans sa direction.</li>
<li><b>Échos multiples</b> : un gros navire proche apparaît plusieurs fois à intervalles réguliers (danger : sous-estimer la distance).</li>
<li><b>Écho de 2e balayage</b> : cible lointaine affichée trop près → changer d'échelle.</li>
<li><b>Interférences</b> d'un autre radar : pointillés en spirale.</li></ul>`
    },
    {
      id: 'presentations', titre: 'Les présentations de l\'image', src: 'Cours Radar p. 21 à 25 ; cours Nav p. 211 à 215',
      html: `<div class="tw"><table><tr><th>Mode</th><th>Ce qu'on voit</th><th>Pour / contre</th></tr>
<tr><td><b>Head Up</b> (relatif non stabilisé)</td><td>Navire au centre, <b>l'avant en haut</b>, échos en gisement</td><td>Intuitif, mais l'image <b>tourne à chaque embardée</b> ; pointage à refaire après chaque changement</td></tr>
<tr><td><b>North Up</b> (relatif stabilisé)</td><td>Navire au centre, <b>Nord en haut</b>, échos en relèvement vrai</td><td>Image <b>stable</b>, pointage facile, comparaison avec la carte. Le navire est dessiné à son cap.</td></tr>
<tr><td><b>Course Up</b> (relatif stabilisé)</td><td><b>Route en haut</b>, stabilisé par le gyro</td><td>Pratique en chenal ; l'image ne bouge pas aux embardées</td></tr>
<tr><td><b>True Motion</b> (mouvement vrai)</td><td>Le navire se <b>déplace</b> sur l'écran ; la terre et les amers restent fixes</td><td>On voit le mouvement réel des autres ; recalage de l'image nécessaire ; anticollision moins directe</td></tr></table></div>
<div class="retenir"><p>En <b>mouvement relatif</b>, la trace d'un écho montre son mouvement <b>par rapport à toi</b>. Une côte ou une bouée fixe se déplace à l'inverse de ta route. Les modes stabilisés ont besoin du <b>gyrocompas</b>.</p></div>`
    },
    {
      id: 'navigation', titre: 'Le radar pour faire le point', src: 'Cours Radar p. 25-26',
      html: `<h3>Avantages</h3>
<ul><li><b>Un seul amer</b> suffit : relèvement + distance.</li>
<li>Marche de nuit, dans la <b>brume</b>, sur une côte sans phares ; garde une distance de sécurité d'une côte.</li>
<li>Autonome (ne dépend d'aucun système extérieur).</li></ul>
<h3>Inconvénients</h3>
<ul><li>L'image ne ressemble jamais exactement à la carte ; amers difficiles à <b>identifier</b>.</li>
<li>Impossible de faire le point sur une <b>côte rectiligne</b>.</li>
<li>Une bouée au milieu de navires mouillés est difficile à isoler.</li></ul>
<div class="piege"><p>La <b>distance</b> radar est plus précise que le <b>relèvement</b> radar (faisceau de 1 à 2°). Le meilleur point radar : <b>2 ou 3 distances</b> d'amers bien identifiés. Préfère les pointes nettes et les îlots aux plages basses.</p></div>
<p>Technique du <b>parallel index</b> : une ligne parallèle à la route, à la distance où doit passer un amer ; s'il glisse le long de la ligne, tu es sur ta route.</p>`
    },
    {
      id: 'cinematique', titre: 'La cinématique : CPA et route vraie', src: 'Cours Radar p. 2, 26 ; tests de cinématique',
      html: `<p>En mouvement relatif Nord en haut, tu notes plusieurs positions d'un écho (par exemple toutes les 3 ou 6 minutes). La ligne qui les joint est son <b>mouvement relatif (MR)</b>.</p>
<div class="retenir"><ul><li><b>Relèvement constant + distance qui diminue</b> = risque d'abordage (règle 7).</li>
<li><b>CPA</b> (PRM, point de rapprochement maximal) : distance la plus courte entre le centre et la ligne MR prolongée.</li>
<li><b>TCPA</b> : heure du CPA = distance restante ÷ vitesse relative.</li></ul></div>
<h3>Le triangle W-O-A</h3>
<ul><li><b>O</b> : première position de l'écho ; <b>A</b> : position suivante.</li>
<li><b>W</b> : de O, recule de ton propre vecteur pendant le même temps (W→O = ta route et ta vitesse).</li>
<li><b>W→A</b> = route et vitesse <b>vraies</b> de l'écho (la « vue réelle »). <b>O→A</b> = mouvement relatif.</li></ul>
<div class="formule">Vrai (écho) = Relatif + Ton vecteur</div>
<p>Pour la vitesse : sur 6 min, multiplie la longueur par 10 ; sur 3 min, par 20.</p>
<h3>Puis la décision</h3>
<p>Une fois la vue réelle trouvée, on applique le RIPAM : <b>en vue</b>, règles 13 à 15 (rattrapage, face à face, croisement) ; <b>par brume</b>, règle 19 (pas de changement sur bâbord pour un écho sur l'avant du travers, ne pas venir vers un écho par le travers ou l'arrière).</p>
<p>L'<b>ARPA</b> (aide au pointage automatique) fait ces calculs tout seul (CPA, TCPA, route et vitesse), mais il faut savoir les vérifier.</p>`
    }
  ],
  cartes: [
    ['Que veut dire RADAR ?', 'RAdio Detecting And Ranging.', 'principe'],
    ['Formule de la distance radar ?', 'd = c × t / 2 (c = 300 m/µs).', 'principe'],
    ['Bande X : fréquence et longueur d\'onde ?', '9 GHz, 3 cm.', 'principe'],
    ['Bande S : fréquence et longueur d\'onde ?', '3 GHz, 10 cm.', 'principe'],
    ['Quelle bande détecte les SART ?', 'La bande X (9 GHz).', 'principe'],
    ['Quelle bande voit mieux à travers la pluie ?', 'La bande S (10 cm).', 'principe'],
    ['Quel composant produit l\'onde radar ?', 'Le magnétron.', 'principe'],
    ['Rôle du duplexeur ?', 'Protéger le récepteur pendant l\'émission (aiguillage émission/réception).', 'principe'],
    ['Impulsion courte : avantage ?', 'Meilleure discrimination en distance.', 'principe'],
    ['Impulsion longue : avantage ?', 'Meilleure portée.', 'principe'],
    ['Formule de la portée radar ?', '2,2 × (√h + √H).', 'portee'],
    ['Qu\'est-ce qu\'un racon ?', 'Une balise qui répond au radar par un trait (code morse) derrière son écho.', 'portee'],
    ['Pourquoi un réflecteur radar est-il fait de trièdres ?', 'Le trièdre renvoie l\'onde vers l\'émetteur quelle que soit son orientation.', 'portee'],
    ['Réglage contre le retour de mer ?', 'Anti-clutter sea (STC).', 'reglages'],
    ['Réglage contre la pluie ?', 'Anti-clutter rain (FTC).', 'reglages'],
    ['EBL et VRM ?', 'Alidade électronique (relèvement) et cercle de distance variable.', 'reglages'],
    ['Comment éliminer un écho de 2e balayage ?', 'Changer d\'échelle (période de répétition).', 'reglages'],
    ['Inconvénient du Head Up ?', 'L\'image tourne à chaque embardée.', 'presentations'],
    ['Avantage du North Up ?', 'Image stable, pointage facile, comparaison avec la carte.', 'presentations'],
    ['En True Motion, qu\'est-ce qui bouge ?', 'Ton navire se déplace sur l\'écran ; la terre reste fixe.', 'presentations'],
    ['Combien d\'amers pour un point radar ?', 'Un seul suffit (relèvement + distance).', 'navigation'],
    ['Distance ou relèvement radar : le plus précis ?', 'La distance.', 'navigation'],
    ['Qu\'est-ce que le CPA ?', 'La distance minimale de passage (point de rapprochement maximal).', 'cinematique'],
    ['Triangle W-O-A : que représente W→A ?', 'Le mouvement vrai de l\'écho (route et vitesse).', 'cinematique'],
    ['Signe d\'un risque d\'abordage au radar ?', 'Relèvement constant et distance qui diminue.', 'cinematique'],
    ['Qu\'est-ce que l\'ARPA ?', 'L\'aide au pointage automatique : calcule CPA, TCPA, route et vitesse des échos.', 'cinematique']
  ],
  qcm: [
    { q: 'Un écho revient 20 µs après l\'émission. Distance ?', r: ['3 000 m', '6 000 m', '1 500 m', '600 m'], e: '300 × 20 / 2 = 3 000 m.', f: 'principe' },
    { q: 'Le radar obligatoire qui détecte les SART est en bande…', r: ['X (9 GHz)', 'S (3 GHz)', 'VHF', 'L'], e: 'Longueur d\'onde 3 cm.', f: 'principe' },
    { q: 'Par fortes pluies, on préfère le radar…', r: ['Bande S', 'Bande X', 'Les deux pareils', 'Aucun'], e: 'Le 10 cm est moins atténué.', f: 'principe' },
    { q: 'Pour séparer deux échos proches dans la même direction, on choisit…', r: ['Une impulsion courte', 'Une impulsion longue', 'Un gain fort', 'L\'anti-clutter rain'], e: 'Discrimination en distance.', f: 'principe' },
    { q: 'La discrimination en direction dépend surtout…', r: ['De la largeur du faisceau (taille de l\'antenne)', 'De la durée d\'impulsion', 'Du gain', 'De la vitesse du navire'], e: 'Antenne plus longue = faisceau plus fin.', f: 'principe' },
    { q: 'Quand la distance d\'une cible double, l\'écho reçu est divisé par…', r: ['16', '2', '4', '8'], e: 'Cours Nav p. 216.', f: 'portee' },
    { q: 'Un racon apparaît à l\'écran…', r: ['Comme un trait derrière son écho', 'Comme un cercle autour du navire', 'Seulement en bande S', 'Comme une spirale'], e: 'Souvent sa lettre en morse.', f: 'portee' },
    { q: 'Le retour de mer est plus fort…', r: ['Côté au vent, mer agitée', 'Côté sous le vent', 'Par mer d\'huile', 'Loin du navire'], e: 'Cours Radar p. 17.', f: 'reglages' },
    { q: 'Des pointillés en spirale à l\'écran viennent…', r: ['D\'un autre radar proche (interférence)', 'De la pluie', 'D\'un racon', 'De la terre'], e: 'Fréquence voisine.', f: 'reglages' },
    { q: 'Un arc d\'échos à la même distance autour d\'un gros navire proche, c\'est…', r: ['Des lobes secondaires', 'Un 2e balayage', 'Le retour de mer', 'Un racon'], e: 'Réduire le gain proche.', f: 'reglages' },
    { q: 'Un anti-clutter sea trop fort risque de…', r: ['Effacer de vraies petites cibles', 'Augmenter la portée', 'Faire tourner l\'image', 'Couper le radar'], e: 'À régler avec prudence.', f: 'reglages' },
    { q: 'En Head Up, l\'image…', r: ['Tourne à chaque embardée', 'Reste toujours stable', 'A le Nord en haut', 'Montre le mouvement vrai'], e: 'Relatif non stabilisé.', f: 'presentations' },
    { q: 'En North Up mouvement relatif, une bouée fixe…', r: ['Se déplace à l\'inverse de ta route', 'Reste immobile', 'Suit ton navire', 'Disparaît'], e: 'Tu restes au centre.', f: 'presentations' },
    { q: 'Les modes stabilisés ont besoin…', r: ['D\'un gyrocompas (ou compas électronique)', 'D\'un sondeur', 'D\'un loch Doppler', 'De l\'AIS'], e: 'Pour connaître le Nord.', f: 'presentations' },
    { q: 'Le meilleur point radar s\'obtient avec…', r: ['2 ou 3 distances d\'amers bien identifiés', '3 relèvements radar', 'Une seule isobathe', 'Le retour de mer'], e: 'La distance est plus précise que le relèvement.', f: 'navigation' },
    { q: 'Le radar ne permet pas de faire le point…', r: ['Sur une côte rectiligne', 'De nuit', 'Dans la brume', 'Avec un seul amer'], e: 'Rien pour se repérer le long de la côte.', f: 'navigation' },
    { q: 'Un écho a un relèvement constant et se rapproche. Il y a…', r: ['Risque d\'abordage', 'Aucun risque', 'Un faux écho', 'Un racon'], e: 'Règle 7.', f: 'cinematique' },
    { q: 'Dans le triangle W-O-A, O→A représente…', r: ['Le mouvement relatif de l\'écho', 'Le mouvement vrai de l\'écho', 'Ton propre mouvement', 'Le courant'], e: 'W→A = mouvement vrai, W→O = ton vecteur.', f: 'cinematique' },
    { q: 'Sur un pointage de 6 minutes, la vitesse se trouve en multipliant la distance par…', r: ['10', '6', '60', '20'], e: '6 min = 1/10 d\'heure.', f: 'cinematique' },
    { q: 'Par brume, écho détecté sur l\'avant tribord, risque d\'abordage. On évite de…', r: ['Venir sur bâbord', 'Venir sur tribord', 'Réduire la vitesse', 'Faire les signaux de brume'], e: 'Règle 19 d.', f: 'cinematique' }
  ]
});
