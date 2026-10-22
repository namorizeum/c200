/* Navigation électronique — module P1-1 */
C200.module({
  id: 'navelec', bloc: 'P1-1', ordre: 7, court: 'GPS', titre: 'Navigation électronique',
  intro: 'GPS et DGPS, cartes électroniques (RNC, ENC), ECS et ECDIS, sondeur, pilote automatique, AIS. Partie du module navigation.',
  fiches: [
    {
      id: 'gps', titre: 'Le GPS et les GNSS', src: 'Cours Nav p. 219 à 229',
      html: `<p>Systèmes de positionnement par satellites (<b>GNSS</b>) : <b>GPS</b> (États-Unis), <b>GLONASS</b> (Russie), <b>Galileo</b> (Europe). Le GNSS combine plusieurs systèmes.</p>
<ul><li>GPS et Galileo travaillent en <b>WGS 84</b> ; GLONASS en PZ-90.</li>
<li>Au moins <b>24 satellites</b> sur 6 orbites à environ <b>20 200 km</b>, inclinées de 55°, un tour en 11 h 58.</li>
<li>Trois parties : <b>spatiale</b> (satellites), <b>contrôle</b> (stations au sol, Colorado Springs), <b>utilisateurs</b> (récepteurs).</li></ul>
<h3>Le principe</h3>
<p>Le récepteur mesure le temps de trajet du signal de chaque satellite → une <b>pseudodistance</b> (R = c × Δt). Il faut <b>4 satellites</b> : 3 pour la position + 1 pour caler l'horloge.</p>
<ul><li><b>3D</b> : 4 satellites ou plus (latitude, longitude, altitude).</li><li><b>2D</b> : 3 satellites (latitude, longitude ; l'altitude est supposée connue).</li></ul>
<h3>Précision</h3>
<div class="tw"><table><tr><th>Mode</th><th>Précision</th></tr>
<tr><td>Service standard (SPS)</td><td>≈ 20 m aujourd'hui (100 m annoncés autrefois)</td></tr>
<tr><td>DGPS (stations côtières, 285-325 kHz)</td><td>1 à 5 m (jusqu'à 10 m à grande distance)</td></tr>
<tr><td>EGNOS, WAAS (par satellite géostationnaire)</td><td>≈ 3 m</td></tr></table></div>
<h3>Ce qui dégrade le point</h3>
<ul><li>Mauvaise géométrie des satellites, masquage (relief, superstructures, antenne masquée) ;</li>
<li><b>trajets multiples</b> (signal réfléchi) ; <b>brouillage</b> ; satellite défectueux (jusqu'à 6-7 h avant correction) ;</li>
<li>dégradation volontaire (SA) possible en cas de conflit.</li></ul>
<div class="piege"><p>Le GPS est souvent <b>plus précis que la carte</b> (vieux levés). Restez vigilant à l'atterrissage et vérifiez que la carte et le GPS sont dans le <b>même système géodésique</b>.</p></div>`
    },
    {
      id: 'gpsfonctions', titre: 'Les abréviations du GPS', src: 'Cours Nav p. 230-231',
      html: `<div class="tw"><table><tr><th>Sigle</th><th>Sens</th></tr>
<tr><td><b>COG</b> / TRK</td><td>Route fond (Course Over Ground)</td></tr>
<tr><td><b>SOG</b></td><td>Vitesse fond (Speed Over Ground)</td></tr>
<tr><td><b>BRG</b> / BTW</td><td>Relèvement du point de route (waypoint)</td></tr>
<tr><td><b>DTW</b> / DST</td><td>Distance jusqu'au waypoint</td></tr>
<tr><td><b>DTK</b> / BOD</td><td>Route voulue entre deux waypoints</td></tr>
<tr><td><b>XTE</b></td><td>Écart traversier : distance entre toi et la route prévue</td></tr>
<tr><td><b>CTS</b></td><td>Cap à suivre (tient compte de la dérive)</td></tr>
<tr><td><b>ETA</b> / ETE (TTG)</td><td>Heure d'arrivée estimée / temps restant</td></tr>
<tr><td><b>WP</b> (waypoint)</td><td>Point de route ; le GPS passe au suivant en entrant dans son cercle</td></tr>
<tr><td><b>LEG</b></td><td>Segment entre deux waypoints</td></tr>
<tr><td><b>MOB</b></td><td>Homme à la mer : mémorise la position</td></tr></table></div>
<p>COG et SOG sont calculés à partir de deux positions successives : à faible vitesse, ils sont peu fiables.</p>`
    },
    {
      id: 'cartes', titre: 'Les cartes électroniques', src: 'Cours Nav p. 232 à 234',
      html: `<div class="tw"><table><tr><th>Type</th><th>Comment c'est fait</th><th>À retenir</th></tr>
<tr><td><b>RNC</b> (raster, matricielle)</td><td>Une <b>image scannée</b> d'une carte papier (norme S-61)</td><td>Simple, mais pas d'alarmes automatiques, pas d'infos en cliquant, se dégrade si on zoome</td></tr>
<tr><td><b>ENC</b> (vectorielle officielle)</td><td>Chaque objet est dans une <b>base de données</b> (position, sonde, nature…)</td><td>Norme <b>S-57</b>, affichage <b>S-52</b>, cryptage <b>S-63</b>. Équivalent légal de la carte papier. Alarmes anti-échouement possibles.</td></tr>
<tr><td>Cartes privées</td><td>C-Map, Navionics…</td><td>Aides à la navigation seulement</td></tr></table></div>
<div class="retenir"><p><b>Raster = image</b>. <b>Vecteur = base de données</b>. Seules les <b>ENC officielles</b> (vecteur) dans un <b>ECDIS</b> remplacent la carte papier.</p></div>`
    },
    {
      id: 'ecdis', titre: 'ECS et ECDIS', src: 'Cours Nav p. 235 à 254',
      html: `<h3>ECS (Electronic Chart System)</h3>
<p>Du GPS-traceur au logiciel sur PC (OpenCPN, MaxSea…). <b>Pas conforme</b> aux normes OMI : c'est une <b>aide à la navigation</b>, il ne remplace <b>pas</b> les cartes papier.</p>
<h3>ECDIS (Electronic Chart Display and Information System)</h3>
<ul><li>Conforme aux normes <b>OMI, OHI et CEI</b> (résolution MSC.232(82) pour ceux installés depuis 2009).</li>
<li>Avec des <b>ENC</b> à jour et un <b>ECDIS de secours</b>, il est l'<b>équivalent légal</b> de la carte papier.</li>
<li>Fonctions : carte + position, préparation et suivi de route, <b>alarmes</b> (anti-échouement, isobathe de sécurité, écart de route), calculs, superposition radar/ARPA et AIS, enregistrement de route, infos des ouvrages en cliquant, mises à jour par satellite.</li>
<li>Affichages : de base, standard, complet ; palettes jour, crépuscule, <b>nuit</b>.</li></ul>
<h3>Mode RCDS</h3>
<p>S'il n'y a pas d'ENC à la bonne échelle, l'ECDIS peut afficher des <b>RNC</b> : c'est le mode <b>RCDS</b>. Alors : pas d'alarmes automatiques, et il faut un <b>portefeuille approprié de cartes papier</b> à jour (APC).</p>
<div class="piege"><p>Un ECDIS utilisé avec des cartes privées, ou avec des RNC alors que des ENC existent, n'est plus qu'un <b>ECS</b> : on navigue sur la carte papier. Et on vérifie souvent la position par un moyen indépendant.</p></div>
<p>Les fonctions à maîtriser : changer d'échelle, garder le navire à l'écran (centrage), déplacer la carte, choisir l'orientation (Nord en haut, cap en haut).</p>`
    },
    {
      id: 'sondeur', titre: 'Le sondeur', src: 'Cours Nav p. 201 à 208 + cours Nav électronique',
      html: `<p>Un <b>transducteur</b> sous la coque émet une impulsion ultrasonore qui se réfléchit sur le fond.</p>
<div class="formule">Hauteur sous le transducteur = V × T / 2 &nbsp;(V ≈ 1 500 m/s)</div>
<div class="exemple"><p>Écho reçu en 0,02 s : 1 500 × 0,02 / 2 = 15 m.</p></div>
<ul><li>Il affiche en général la hauteur <b>sous la quille</b> (ou sous le transducteur) : on peut le régler pour ajouter le tirant d'eau.</li>
<li>Fréquences de 50 à 200 kHz : <b>basses</b> = portent plus loin (grands fonds) ; <b>hautes</b> = image plus fine (pêche, petits fonds).</li>
<li>Transducteurs <b>piézoélectriques</b> (quartz) ou à <b>magnétostriction</b> (grande puissance, très grands fonds).</li>
<li>Vitesse du son de 1 420 (eau froide peu salée) à 1 555 m/s (mer Rouge).</li></ul>
<h3>Ses limites</h3>
<ul><li>Faux échos : bancs de poissons, <b>thermocline</b>, écho du coup précédent (fait croire à un haut-fond) ;</li>
<li>vase mal détectée en basse fréquence ; houle qui fait onduler le fond à l'écran ; cavitation ; navire gîté.</li></ul>
<div class="retenir"><p>On met le sondeur en marche dès que le fond est à moins de <b>20 m</b>. Sonde à main : marques à 10 m (bleu), 20 m (blanc), 30 m (rouge), 40 m (jaune), 50 m (noir).</p></div>`
    },
    {
      id: 'pilote', titre: 'Le pilote automatique', src: 'Cours Nav p. 196 à 200',
      html: `<p>Il garde un <b>cap</b> (ou suit une route programmée) en agissant sur la barre. C'est une <b>boucle</b> : compas → calculateur (compare cap actuel et cap voulu) → servomoteur ou pompe hydraulique → barre, avec un capteur d'angle de barre.</p>
<h3>Mise en service</h3>
<ol><li>Vérifier : barre libre, hydraulique sous pression, compas et capteur d'angle OK, mode manuel OK.</li>
<li>Passer en <b>AUTO</b>, entrer le cap.</li><li>Surveiller la tenue du cap ; rester prêt à reprendre en <b>manuel</b>.</li></ol>
<h3>Réglages</h3>
<div class="tw"><table><tr><th>Réglage</th><th>Trop fort</th><th>Trop faible</th></tr>
<tr><td><b>Rudder</b> (amplitude de barre)</td><td>Barre excessive</td><td>Oscillations lentes</td></tr>
<tr><td><b>Counter rudder</b> (contre-barre)</td><td>Barre nerveuse</td><td>Dépasse le cap</td></tr>
<tr><td><b>Yaw / Weather</b> (état de mer)</td><td>Réagit trop peu</td><td>Barre sans arrêt dans la houle</td></tr></table></div>
<div class="piege"><p>Le pilote ne remplace <b>jamais</b> la veille. En manœuvre, trafic dense ou eaux resserrées : pilote <b>coupé</b>, on barre à la main. À l'appareillage, on teste le passage manuel ↔ automatique.</p></div>`
    },
    {
      id: 'ais', titre: 'L\'AIS', src: 'Cours TDQ (veille AIS) + Guide du navigateur',
      html: `<p>L'<b>AIS</b> (Automatic Identification System) échange automatiquement en <b>VHF</b> des infos entre navires et stations : <b>nom, indicatif, MMSI, position, cap, vitesse, route, type, dimensions, destination, statut</b>.</p>
<ul><li>Classe <b>A</b> : navires SOLAS (obligatoire). Classe <b>B</b> : plaisance et petits navires.</li>
<li>Sert à l'<b>anticollision</b>, à la sûreté et au suivi du trafic (VTS, CROSS).</li></ul>
<div class="piege"><p>À utiliser avec <b>prudence</b> : tous les navires n'en ont pas (petits bateaux, pêcheurs), les données peuvent être fausses ou mal saisies. L'AIS ne remplace ni la veille visuelle ni le radar.</p></div>`
    }
  ],
  cartes: [
    ['Combien de satellites faut-il pour un point GPS 3D ?', '4 (3 pour la position + 1 pour l\'horloge).', 'gps'],
    ['Système géodésique du GPS ?', 'WGS 84.', 'gps'],
    ['Précision du GPS standard aujourd\'hui ?', 'Environ 20 m.', 'gps'],
    ['Précision du DGPS ?', '1 à 5 m.', 'gps'],
    ['Qu\'est-ce que le DGPS ?', 'Des stations à terre de position connue envoient des corrections aux récepteurs.', 'gps'],
    ['Citez deux causes de mauvais point GPS.', 'Trajets multiples, masquage, brouillage, mauvaise géométrie, satellite en panne.', 'gps'],
    ['COG et SOG ?', 'Route fond et vitesse fond.', 'gpsfonctions'],
    ['XTE ?', 'Écart traversier : distance entre ta position et la route prévue.', 'gpsfonctions'],
    ['BRG / DTW ?', 'Relèvement et distance du prochain waypoint.', 'gpsfonctions'],
    ['Différence RNC / ENC ?', 'RNC : carte scannée (image). ENC : carte vectorielle (base de données), équivalent légal.', 'cartes'],
    ['Normes des ENC ?', 'S-57 (données), S-52 (affichage), S-63 (cryptage).', 'cartes'],
    ['Un ECS remplace-t-il la carte papier ?', 'Non, c\'est une aide à la navigation.', 'ecdis'],
    ['Quand l\'ECDIS remplace-t-il la carte papier ?', 'Avec des ENC officielles à jour et un ECDIS de secours.', 'ecdis'],
    ['Qu\'est-ce que le mode RCDS ?', 'L\'ECDIS avec des RNC (pas d\'ENC dispo) : pas d\'alarmes auto, cartes papier obligatoires.', 'ecdis'],
    ['Vitesse du son dans l\'eau ?', 'Environ 1 500 m/s.', 'sondeur'],
    ['Formule du sondeur ?', 'Hauteur = V × T / 2.', 'sondeur'],
    ['Quand mettre le sondeur en marche ?', 'Dès que le fond est à moins de 20 m.', 'sondeur'],
    ['Haute ou basse fréquence pour les grands fonds ?', 'Basse fréquence (porte plus loin).', 'sondeur'],
    ['Pilote automatique en eaux resserrées ?', 'Coupé : on barre à la main.', 'pilote'],
    ['À quoi sert le réglage « counter rudder » ?', 'À contrer pour ne pas dépasser le cap.', 'pilote'],
    ['Infos transmises par l\'AIS ?', 'Nom, MMSI, position, cap, vitesse, route, type, dimensions, destination.', 'ais'],
    ['L\'AIS est-il fiable à 100 % ?', 'Non : pas tous équipés, données parfois fausses. Prudence.', 'ais']
  ],
  qcm: [
    { q: 'Combien de satellites faut-il au minimum pour une position 3D ?', r: ['4', '3', '2', '6'], e: 'Le 4e cale l\'horloge.', f: 'gps' },
    { q: 'Le GPS et Galileo utilisent le système géodésique…', r: ['WGS 84', 'ED 50', 'PZ-90', 'NTF'], e: 'GLONASS : PZ-90.', f: 'gps' },
    { q: 'Le DGPS améliore la précision grâce à…', r: ['Des corrections envoyées par des stations à terre', 'Un 5e satellite', 'Un compas gyroscopique', 'Le radar'], e: 'Précision 1 à 5 m.', f: 'gps' },
    { q: 'Les « trajets multiples » sont…', r: ['Des signaux réfléchis qui faussent la mesure', 'Plusieurs routes GPS', 'Des satellites en double', 'Des waypoints successifs'], e: 'Surtout près des obstacles.', f: 'gps' },
    { q: 'Sur un GPS, XTE signifie…', r: ['L\'écart traversier par rapport à la route prévue', 'La vitesse fond', 'L\'heure d\'arrivée', 'Le relèvement du waypoint'], e: 'Cross Track Error.', f: 'gpsfonctions' },
    { q: 'Le SOG du GPS est…', r: ['La vitesse fond', 'La vitesse surface', 'La vitesse du vent', 'La vitesse du courant'], e: 'Speed Over Ground.', f: 'gpsfonctions' },
    { q: 'Une carte RNC est…', r: ['Une image scannée de la carte papier', 'Une base de données vectorielle', 'Une carte privée', 'Une carte radar'], e: 'Norme S-61.', f: 'cartes' },
    { q: 'Quelle carte permet des alarmes anti-échouement automatiques ?', r: ['L\'ENC (vectorielle)', 'La RNC (raster)', 'La carte papier', 'Aucune'], e: 'Chaque objet est dans une base de données.', f: 'cartes' },
    { q: 'Le format des données ENC est défini par la norme…', r: ['S-57', 'S-52', 'S-63', 'S-61'], e: 'S-52 affichage, S-63 cryptage.', f: 'cartes' },
    { q: 'Un ECS (logiciel sur PC) peut-il remplacer les cartes papier ?', r: ['Non, c\'est une aide', 'Oui, toujours', 'Oui, la nuit', 'Oui, avec un GPS'], e: 'Pas conforme aux normes OMI.', f: 'ecdis' },
    { q: 'En mode RCDS, l\'ECDIS…', r: ['Exige un portefeuille de cartes papier à jour', 'Remplace totalement le papier', 'Utilise des ENC', 'Coupe le radar'], e: 'Pas d\'alarmes automatiques.', f: 'ecdis' },
    { q: 'Un sondeur reçoit l\'écho en 0,04 s. La hauteur est…', r: ['30 m', '60 m', '15 m', '40 m'], e: '1 500 × 0,04 / 2.', f: 'sondeur' },
    { q: 'Pour sonder très profond, on choisit…', r: ['Une basse fréquence', 'Une haute fréquence', 'Un sondeur à main', 'Le radar'], e: 'Elle porte plus loin.', f: 'sondeur' },
    { q: 'Un faux écho de haut-fond peut venir…', r: ['De la thermocline ou de l\'écho précédent', 'Du compas', 'Du GPS', 'De la VHF'], e: 'Cours p. 206.', f: 'sondeur' },
    { q: 'Le pilote automatique doit être coupé…', r: ['En manœuvre et en eaux resserrées', 'Au large par beau temps', 'La nuit seulement', 'Jamais'], e: 'On barre à la main.', f: 'pilote' },
    { q: 'Le réglage « Weather / Yaw » sert à…', r: ['Adapter la sensibilité à l\'état de la mer', 'Régler la vitesse', 'Changer de compas', 'Afficher la météo'], e: 'Évite de barrer à chaque vague.', f: 'pilote' },
    { q: 'L\'AIS transmet les données par…', r: ['VHF', 'Satellite uniquement', 'Radar', 'Sondeur'], e: 'Automatiquement.', f: 'ais' },
    { q: 'Pourquoi rester prudent avec l\'AIS ?', r: ['Tous les navires ne l\'ont pas et les données peuvent être fausses', 'Il brouille le radar', 'Il est interdit en France', 'Il ne marche que de jour'], e: 'Cours TDQ.', f: 'ais' }
  ]
});
