/* Navigation et carte — module P1-1 */
C200.module({
  id: 'nav', bloc: 'P1-1', ordre: 5, court: 'NAV', titre: 'Navigation et carte',
  intro: 'Coordonnées, compas, lochs, documents nautiques, carte 7066, points, estime, courant et loxodromie. Épreuve pratique sur la carte 7066 (1 h 30) + écrit.',
  calculs: ['cap-vrai', 'cap-compas', 'alignement', 'gisement', 'estime-rs', 'faire-valoir', 'courant-rf', 'courant-rs', 'courant-reel', 'portee', 'vitesse', 'loxo', 'declinaison'],
  fiches: [
    {
      id: 'sphere', titre: 'La Terre, latitude et longitude', src: 'Cours Nav (Combier/Jalkh) p. 15 à 27',
      html: `<ul><li>La Terre est presque une sphère, rayon ≈ <b>6 400 km</b>, tour ≈ <b>40 000 km</b>.</li>
<li><b>Grand cercle</b> : son centre est celui de la Terre (équateur, méridiens). <b>Petit cercle</b> : ne passe pas par le centre (parallèles).</li>
<li><b>Méridien</b> : demi-grand cercle d'un pôle à l'autre. Méridien origine : <b>Greenwich</b>.</li>
<li><b>Parallèle</b> : petit cercle parallèle à l'équateur.</li></ul>
<div class="tw"><table><tr><th></th><th>Latitude L</th><th>Longitude G</th></tr>
<tr><td>Mesurée</td><td>Sur le méridien, depuis l'équateur</td><td>Sur l'équateur, depuis Greenwich</td></tr>
<tr><td>Valeurs</td><td>0 à 90° N ou S</td><td>0 à 180° E ou W</td></tr>
<tr><td>Exemple</td><td>48°08,4′ N</td><td>004°27,8′ W</td></tr>
<tr><td>Échelle sur la carte</td><td>Bords gauche et droit, lue <b>de bas en haut</b> (Nord)</td><td>Bords haut et bas, lue de droite à gauche en W</td></tr></table></div>
<p>À l'examen (carte 7066), on travaille au <b>dixième de minute</b> près. On écrit l'heure, puis L au-dessus de G.</p>
<div class="piege"><p>Toujours lire l'échelle <b>dans le sens des valeurs croissantes</b>.</p></div>
<h3>Loxodromie et orthodromie</h3>
<ul><li><b>Loxodromie</b> : route qui coupe tous les méridiens sous le <b>même angle</b> (cap constant). C'est une <b>droite</b> sur la carte Mercator, mais pas le plus court chemin.</li>
<li><b>Orthodromie</b> : le <b>plus court chemin</b>, un arc de grand cercle (cap qui change sans arrêt).</li></ul>
<p>La carte marine est en projection <b>Mercator</b> (cylindrique) : les angles sont conservés, les surfaces sont agrandies vers les pôles.</p>`
    },
    {
      id: 'mille', titre: 'Le mille et le nœud', src: 'Cours Nav p. 22-23',
      html: `<div class="retenir"><p><b>1 mille marin (M) = 1 852 m</b> = 1 minute d'arc de méridien (de latitude).</p><p><b>1 nœud (nd) = 1 mille par heure</b>.</p></div>
<p>40 000 km ÷ 360° ÷ 60′ = 1,852 km.</p>
<p>Sur la carte, on mesure les distances au compas à pointes sèches et on les reporte sur l'<b>échelle des latitudes</b>, à hauteur de l'endroit mesuré.</p>
<div class="piege"><p>Jamais sur l'échelle des <b>longitudes</b> : une minute de longitude rétrécit quand on monte en latitude.</p></div>
<div class="formule">Distance = Vitesse × Temps</div>
<p>Astuce : 0,25 h = 15 min ; 0,5 h = 30 min ; partie décimale × 60 = minutes.</p>`
    },
    {
      id: 'compas', titre: 'Compas magnétique : D, d, W', src: 'Cours Nav p. 29 à 47',
      html: `<p>Trois « Nord » : le <b>Nord vrai</b> (géographique), le <b>Nord magnétique</b>, le <b>Nord compas</b> (ce qu'indique ton compas).</p>
<div class="tw"><table><tr><th>Écart</th><th>Entre</th><th>Dépend de</th></tr>
<tr><td><b>Déclinaison D</b></td><td>Nord vrai → Nord magnétique</td><td>Du <b>lieu</b> et de l'<b>année</b> (lue sur la rose de la carte)</td></tr>
<tr><td><b>Déviation d</b></td><td>Nord magnétique → Nord compas</td><td>Du <b>navire</b> et de son <b>cap</b> (courbe de déviation)</td></tr>
<tr><td><b>Variation W</b></td><td>Nord vrai → Nord compas</td><td>W = D + d</td></tr></table></div>
<div class="retenir"><p>Est = <b>+</b> ; Ouest = <b>−</b>.</p></div>
<div class="formule">Cv = Cc + d + D = Cc + W<br>Zv = Zc + W</div>
<p>Calcul « à la verticale » : de haut en bas on <b>ajoute</b> ; pour remonter (Cv → Cc), on <b>retranche</b>.</p>
<div class="exemple"><p>Cc 210°, d −7°, D 2,5° E → Cm 203°, Cv 205,5°, W = −4,5°.</p></div>
<h3>La rose de la carte</h3>
<p>Exemple : <b>5°00′ W 2000 (9′ E)</b> = déclinaison de 5° Ouest en 2000, qui diminue de 9′ par an vers l'Est. En 2005 : 5° − 45′ = 4°15′ W ≈ 4° W.</p>
<h3>Compensation et régulation</h3>
<ul><li><b>Compenser</b> : réduire la déviation avec des aimants correcteurs et des fers doux (résiduelle ≤ 5° en principe).</li>
<li><b>Réguler</b> : mesurer la déviation à différents caps et tracer la <b>courbe de déviation</b> (avec un alignement : d = Zm − Zc, et Zm = Zv − D).</li>
<li>« <b>Faire une variation</b> » : vérifier W sur un relèvement connu (alignement, astre au lever/coucher, Polaire).</li></ul>
<p>Le compas reste la <b>référence</b> en cas de panne électrique. Il est perturbé par les masses de fer, l'électricité, la foudre, et inutilisable près des pôles magnétiques. Le placer loin de tout métal, face au barreur, monté à la cardan.</p>
<p>Le compas <b>fluxgate</b> (électronique) mesure le champ magnétique avec des capteurs : se connecte au pilote, au GPS, au radar, mais il lui faut du courant et un étalonnage (souvent une giration de 360°).</p>`
    },
    {
      id: 'gyro', titre: 'Le compas gyroscopique', src: 'Cours Nav p. 49 à 58',
      html: `<ul><li>Un gyroscope qui tourne très vite garde sa direction. Avec un dispositif pendulaire et un amortissement, il cherche le <b>Nord vrai</b>.</li>
<li>Obligatoire au-dessus de <b>500</b> de jauge brute.</li>
<li>À mettre en route <b>4 à 5 heures avant l'appareillage</b> (spirale de ralliement du Nord ; mise au cap rapide possible en 1 h, exceptionnellement).</li>
<li>Utilisable jusqu'à environ <b>70°</b> de latitude.</li>
<li>Insensible au magnétisme ; info de cap distribuée aux <b>répétiteurs</b>, au pilote, au radar, à l'ECDIS.</li></ul>
<div class="formule">Cv = Cg + Wg ; Zv = Zg + Wg</div>
<p>La variation gyro <b>Wg</b> est petite (0 à 2°) et change peu avec le cap, mais elle peut dériver : on la contrôle souvent.</p>
<h3>Ses erreurs</h3>
<ul><li>Erreur de <b>vitesse</b> (route Nord-Sud), erreur <b>balistique</b> (accélérations), erreur de <b>latitude</b> (Sperry), erreur de <b>roulis</b> aux caps intercardinaux, erreurs de calage des répétiteurs.</li></ul>
<div class="piege"><p>Le gyro peut « <b>décrocher</b> » d'un coup (panne de courant ou de moteur). Il faut toujours pouvoir revenir au compas magnétique.</p></div>`
    },
    {
      id: 'lochs', titre: 'Les lochs', src: 'Cours Nav p. 59 à 69',
      html: `<div class="retenir"><p>Presque tous les lochs mesurent la <b>vitesse surface (Vs)</b>, par rapport à l'eau. Seuls le <b>loch Doppler</b> (sur le fond) et le <b>GPS</b> donnent la <b>vitesse fond (Vf)</b>.</p></div>
<div class="tw"><table><tr><th>Loch</th><th>Principe</th><th>Mesure</th><th>À savoir</th></tr>
<tr><td>À bateau (corde à nœuds)</td><td>Planchette + corde + sablier</td><td>Vs</td><td>L'origine du mot « nœud »</td></tr>
<tr><td>À hélice / roue à aubes</td><td>Rotation d'une roue sous la coque</td><td>Vs</td><td>Erreur 3 à 5 %, se bloque avec les algues</td></tr>
<tr><td>Tube de Pitot</td><td>Différence de pression</td><td>Vs</td><td>Navires rapides</td></tr>
<tr><td>Électromagnétique</td><td>Champ magnétique dans l'eau salée</td><td>Vs</td><td>Précis (2 %), pas de pièce mobile, ne marche pas en eau douce</td></tr>
<tr><td>Doppler</td><td>Effet Doppler sur le fond</td><td><b>Vf</b></td><td>Fonds de moins de ~200 m ; utile pour accoster</td></tr>
<tr><td>GPS</td><td>Satellites (pas un loch)</td><td><b>Vf</b></td><td>SOG (vitesse fond) et COG (route fond)</td></tr></table></div>`
    },
    {
      id: 'documents', titre: 'Les documents nautiques', src: 'Cours Nav p. 109 à 118',
      html: `<p>Ils sont publiés par le <b>SHOM</b> (Service hydrographique et océanographique de la Marine). La liste est dans le <b>catalogue</b>.</p>
<div class="tw"><table><tr><th>Ouvrage</th><th>Contenu</th></tr>
<tr><td><b>Guide du navigateur</b> SH1, SH2, SH3</td><td>1 : documents et infos nautiques ; 2 : méthodes et instruments (radar, GPS, météo) ; 3 : réglementation, RIPAM, sauvetage</td></tr>
<tr><td><b>Instructions nautiques</b></td><td>Complément de la carte : côtes, dangers, amers, ports, mouillages, courants, climat, règlements locaux</td></tr>
<tr><td><b>Livre des feux et signaux de brume</b></td><td>Chaque feu : position, hauteur, portée, rythme, secteurs (relèvements vus du large)</td></tr>
<tr><td><b>Ouvrages de radiosignaux</b></td><td>Radionavigation, radiocommunications (SMDSM, VHF, stations), surveillance du trafic et pilotage</td></tr>
<tr><td><b>Annuaire des marées</b></td><td>Heures et hauteurs des PM et BM (en UT+1)</td></tr>
<tr><td><b>Atlas des courants de marée</b></td><td>Cartes horaires des courants</td></tr>
<tr><td><b>Code international des signaux</b></td><td>Pavillons, signaux</td></tr>
<tr><td><b>Éphémérides nautiques</b></td><td>Position des astres (navigation astronomique)</td></tr>
<tr><td>Ouvrage <b>1D</b></td><td>Symboles et abréviations des cartes</td></tr></table></div>
<h3>Mise à jour</h3>
<p>Par les <b>Groupes d'Avis aux Navigateurs (GAN)</b>, hebdomadaires, téléchargeables sur le site du SHOM.</p>
<ul><li>Corrections de carte à l'<b>encre violette</b> indélébile, sans gratter (au crayon si c'est temporaire).</li>
<li>On note en bas à gauche : l'année, le numéro de l'avis, et le numéro de correction de la carte (ex. 2003 0603 35).</li>
<li>Instructions nautiques : corrections collées dans le fascicule ou l'addenda. Livre des feux : collées directement dans l'ouvrage.</li></ul>`
    },
    {
      id: 'carte', titre: 'La carte marine (7066)', src: 'Cours Nav p. 120 à 124 et p. 79-80',
      html: `<p>La <b>7066</b> couvre la Bretagne de la <b>pointe de Penmarc'h</b> au sud à l'<b>île Vierge</b> au nord (Iroise, Raz de Sein, Ouessant, goulet de Brest). C'est la carte de l'examen.</p>
<ul><li>Système géodésique <b>WGS 84</b> : positions GPS reportables sans correction.</li>
<li>Sondes rapportées au <b>zéro des cartes</b> (≈ plus basses mers, BMVE 120).</li>
<li>1 cm ≈ 0,9 M à la latitude moyenne (échelle indicative, ne sert pas aux calculs).</li></ul>
<h3>Les niveaux et les couleurs</h3>
<div class="tw"><table><tr><th>Élément</th><th>Référence</th></tr>
<tr><td><b>Sonde</b></td><td>Profondeur sous le zéro des cartes. <b>Soulignée</b> = négative (le fond découvre)</td></tr>
<tr><td><b>Estran</b> (vert-gris)</td><td>Entre BMVE 120 et PMVE 120 : couvre et découvre</td></tr>
<tr><td><b>Trait de côte</b></td><td>Niveau PMVE 120 ; la terre est en <b>bistre</b> (jaune)</td></tr>
<tr><td><b>Altitude</b> des amers</td><td>Au-dessus du <b>niveau moyen</b></td></tr>
<tr><td><b>Élévation</b> des feux</td><td>Au-dessus de <b>PMVE 95</b></td></tr>
<tr><td><b>Isobathes</b></td><td>Lignes de même sonde : 5, 10, 20 (renforcée en bleu), 50 m</td></tr>
<tr><td>Bleu</td><td>De 0 à 10 m sur la 7066, puis blanc</td></tr></table></div>
<p>Les <b>alignements</b> sont tracés en trait noir avec leur relèvement vrai (vu du large). On préfère la valeur écrite à celle mesurée au rapporteur.</p>`
    },
    {
      id: 'points', titre: 'Faire le point sur la carte', src: 'Cours Nav p. 125 à 145',
      html: `<p>On ne trace sur la carte que des <b>relèvements vrais Zv</b> (Zv = Zc + W).</p>
<h3>Les méthodes</h3>
<ul><li><b>2 ou 3 relèvements simultanés</b> d'amers remarquables : on trace les Zv, ils se coupent en un point. Petit triangle (&lt; 0,3 M) : prendre le milieu. Grand triangle : erreur de calcul ou de tracé.</li>
<li><b>Relèvement + distance</b> d'un amer (radar ou portée) : on trace le relèvement inverse depuis l'amer.</li>
<li><b>Alignement + relèvement</b> : l'alignement donne aussi W (W = Zv − Zc), qu'on applique aux autres relèvements.</li>
<li><b>Gisements simultanés</b> : on les transforme en Zv avec <b>Zv = Cv + Gt</b>.</li>
<li><b>Isobathe + relèvement</b> (ou distance parcourue) : la sonde corrigée de la marée te place sur une ligne de sonde.</li>
<li><b>Distance d'un phare qui apparaît à l'horizon</b> : portée géographique.</li></ul>
<h3>Le gisement</h3>
<p>Angle entre l'<b>avant du navire</b> et l'amer : de 0 à 360° dans le sens des aiguilles d'une montre, ou 0 à 180° tribord (+) et 0 à 180° bâbord (−). Travers tribord = 090°, travers bâbord = 270° (−90°).</p>
<div class="formule">Zv = Cv + Gt</div>
<h3>Portée géographique</h3>
<div class="formule">P (milles) = 2,1 × (√h + √H)</div>
<p>h = hauteur de ton œil, H = hauteur du feu au-dessus de l'eau = élévation + (PMVE 95 − HMA), en mètres.</p>
<h3>L'alignement</h3>
<p>Le meilleur des relèvements : son Zv est connu, il donne W. Pour revenir dessus, fais route <b>du côté où tu vois l'amer antérieur</b> (le plus proche).</p>`
    },
    {
      id: 'estime', titre: 'L\'estime : cap, dérive, route', src: 'Cours Nav p. 153 à 164',
      html: `<p>L'<b>estime</b> : trouver sa position à partir d'un point de départ, du cap, de la vitesse et du temps. L'<b>estime inverse</b> : trouver le cap compas à prendre pour aller à un point.</p>
<h3>Les routes</h3>
<ul><li><b>Cap</b> : direction de l'avant du navire.</li>
<li><b>Dérive (dér)</b> : angle entre l'avant et la route surface, dû au <b>vent</b>. <b>Positive</b> si on dérive vers <b>tribord</b> (vent venant de bâbord), <b>négative</b> vers bâbord.</li>
<li><b>Route surface Rs</b> : trajet sur l'eau (vent seul).</li>
<li><b>Route fond Rf</b> : trajet sur le fond (vent + courant). Sans courant, Rs = Rf.</li></ul>
<div class="formule">Cc + d = Cm ; Cm + D = Cv ; Cv + dér = Rs</div>
<div class="exemple"><p>Cc 314°, d 3° NW, D 6° NW, dérive 6° par vent de SW (vent de bâbord → +6°) : Cm 311°, Cv 305°, Rs 311°.</p></div>
<p><b>Faire valoir une route</b> : on part de la Rs tracée et on remonte en inversant les signes jusqu'au Cc.</p>
<h3>Problèmes classiques</h3>
<ul><li><b>Passer à au moins 2 M d'un amer</b> : cercle de 2 M autour, route tangente.</li>
<li><b>Passage au plus près</b> : perpendiculaire à la route depuis l'amer.</li>
<li><b>Passage par le travers</b> : Zv de l'amer = Cv ± 90° (+ à tribord).</li>
<li>Heure estimée : T = D / V.</li></ul>`
    },
    {
      id: 'courant', titre: 'Le courant et le triangle des vitesses', src: 'Cours Nav p. 165 à 188',
      html: `<p>Le courant ne s'additionne pas comme un angle : on fait un <b>triangle de vecteurs</b>, en général sur <b>une heure</b> (les distances en milles = les vitesses en nœuds).</p>
<div class="formule">Vecteur Fond = Vecteur Surface + Vecteur Courant</div>
<div class="retenir"><p>Le courant se donne par la direction <b>où il porte</b> (où il va), à l'inverse du vent qui se donne d'où il vient.</p></div>
<h3>Les 4 constructions</h3>
<ol><li><b>Rs, Vs et courant connus → Rf, Vf</b> : 1 h de surface, puis le courant au bout ; on lit le fond.</li>
<li><b>Rf voulue, Vs et courant connus → Rs (cap à prendre), Vf</b> : on trace Rf et 1 h de courant ; du bout du courant, arc de rayon Vs qui coupe la Rf.</li>
<li><b>Rf, Vf (heure d'arrivée imposée) et courant → Rs, Vs</b> : on joint le bout du courant au bout du fond.</li>
<li><b>Rs, Vs et point réel → courant subi</b> : le courant va <b>du point estimé (surface) au point réel (fond)</b>, divisé par le temps.</li></ol>
<p>Si le courant est dans l'axe : Vf = Vs + Vc (courant de l'arrière) ou Vs − Vc (de l'avant).</p>
<h3>Où trouver le courant</h3>
<ul><li><b>Cartouches de la carte</b> (losanges magenta A, B…) : direction et vitesse heure par heure avant/après la PM, en VE (coef 95) et ME (coef 45).</li>
<li><b>Atlas de courants de marée</b> du SHOM, logiciels (OpenCPN, Navionics…).</li>
<li>Pour un parcours d'une heure entre deux heures-marée : moyenne des deux valeurs.</li></ul>
<div class="piege"><p>Trace le vecteur Fond en trait plus fort. La route fond ne doit pas passer sur des cailloux ; les vecteurs surface et courant peuvent être tracés n'importe où.</p></div>`
    },
    {
      id: 'loxo', titre: 'Le calcul loxodromique', src: 'Cours Nav p. 189-192 et cours Navy Services',
      html: `<p>Pour des distances de moins de <b>300 milles</b> : on connaît le départ (Ld, Gd), la route fond Rf et la distance M ; on cherche l'arrivée.</p>
<div class="formule">ΔL = M × cos Rf<br>e = M × sin Rf<br>Lm = (Ld + La) / 2<br>ΔG = e / cos Lm</div>
<ol><li>ΔL en minutes ; La = Ld + ΔL.</li><li>L'<b>écart</b> e (en minutes) est la distance vers l'Est ou l'Ouest.</li><li>Latitude moyenne Lm.</li><li>ΔG en minutes ; Ga = Gd + ΔG.</li></ol>
<div class="retenir"><p>N et E = <b>+</b> ; S et W = <b>−</b>. Le cosinus d'une route entre 090° et 270° est négatif (on descend vers le Sud).</p></div>
<div class="exemple"><p>Départ 38°17,5′ N – 035°29,4′ E, Rf 037°, 127 M : ΔL = 101,4′ → La = 39°58,9′ N ; e = 76,4′ ; Lm = 39°08,2′ ; ΔG = 98,5′ → Ga = 037°07,9′ E.</p></div>`
    }
  ],
  cartes: [
    ['Rayon et circonférence de la Terre ?', 'Rayon ≈ 6 400 km, circonférence ≈ 40 000 km.', 'sphere'],
    ['Méridien origine ?', 'Celui de Greenwich.', 'sphere'],
    ['Valeurs possibles de la latitude ? de la longitude ?', 'L : 0 à 90° N ou S. G : 0 à 180° E ou W.', 'sphere'],
    ['Qu\'est-ce qu\'une loxodromie ?', 'Une route à cap constant, qui coupe les méridiens sous le même angle. Droite sur la carte Mercator.', 'sphere'],
    ['Qu\'est-ce qu\'une orthodromie ?', 'Le plus court chemin : un arc de grand cercle.', 'sphere'],
    ['1 mille marin = ?', '1 852 m = 1 minute de latitude.', 'mille'],
    ['1 nœud = ?', '1 mille par heure.', 'mille'],
    ['Sur quelle échelle mesurer une distance ?', 'L\'échelle des latitudes, à hauteur de l\'endroit mesuré.', 'mille'],
    ['Qu\'est-ce que la déclinaison D ?', 'L\'angle Nord vrai → Nord magnétique. Dépend du lieu et de l\'année.', 'compas'],
    ['Qu\'est-ce que la déviation d ?', 'L\'angle Nord magnétique → Nord compas. Dépend du navire et du cap.', 'compas'],
    ['Formule de la variation ?', 'W = D + d (Est +, Ouest −).', 'compas'],
    ['Cap vrai à partir du cap compas ?', 'Cv = Cc + W (= Cc + d + D).', 'compas'],
    ['« 3°55′ W 2005 (8′ E) » en 2012 ?', '−3°55′ + 7 × 8′ = −2°59′ ≈ 3° W.', 'compas'],
    ['Différence compensation / régulation ?', 'Compenser : réduire d avec des aimants. Réguler : mesurer d et tracer la courbe de déviation.', 'compas'],
    ['Que veut dire « faire une variation » ?', 'Contrôler W sur une direction connue (alignement, astre, Polaire).', 'compas'],
    ['Combien de temps avant l\'appareillage lancer le gyro ?', '4 à 5 heures.', 'gyro'],
    ['À partir de quelle jauge le gyrocompas est-il obligatoire ?', '500.', 'gyro'],
    ['Ordre de grandeur de la variation gyro ?', '0 à 2°, peu dépendante du cap, à contrôler souvent.', 'gyro'],
    ['Quels lochs donnent la vitesse fond ?', 'Le loch Doppler (et le GPS).', 'lochs'],
    ['Le loch électromagnétique fonctionne-t-il en eau douce ?', 'Non : il a besoin de la conductivité de l\'eau salée.', 'lochs'],
    ['Quel service publie les documents nautiques français ?', 'Le SHOM.', 'documents'],
    ['Où trouver la description détaillée des côtes, mouillages et dangers ?', 'Dans les Instructions nautiques.', 'documents'],
    ['Comment met-on à jour cartes et ouvrages ?', 'Avec les Groupes d\'Avis aux Navigateurs (GAN), hebdomadaires.', 'documents'],
    ['Couleur de l\'encre des corrections de carte ?', 'Violette, indélébile, sans grattage.', 'documents'],
    ['Système géodésique de la carte 7066 ?', 'WGS 84 (comme le GPS).', 'carte'],
    ['À quoi se rapportent les sondes ?', 'Au zéro des cartes (≈ BMVE 120).', 'carte'],
    ['À quoi se rapporte l\'élévation d\'un feu ?', 'Au niveau PMVE 95.', 'carte'],
    ['À quoi se rapporte l\'altitude d\'un amer ?', 'Au niveau moyen.', 'carte'],
    ['Qu\'est-ce que l\'estran ?', 'La zone entre BMVE 120 et PMVE 120 qui couvre et découvre.', 'carte'],
    ['Que signifie une sonde soulignée ?', 'Sonde négative : le fond découvre à basse mer.', 'carte'],
    ['Quels relèvements trace-t-on sur la carte ?', 'Uniquement des relèvements vrais (Zv).', 'points'],
    ['Formule gisement / relèvement ?', 'Zv = Cv + Gt (gisement bâbord négatif).', 'points'],
    ['Formule de la portée géographique ?', 'P = 2,1 × (√h + √H), en milles, h et H en mètres.', 'points'],
    ['Hauteur H du feu au-dessus de l\'eau ?', 'H = élévation + (PMVE 95 − HMA).', 'points'],
    ['Triangle de relèvements trop grand : que conclure ?', 'Erreur de calcul des Zv ou de tracé.', 'points'],
    ['Signe de la dérive par vent de bâbord ?', 'Positive : le navire dérive vers tribord.', 'estime'],
    ['Formule de la route surface ?', 'Rs = Cv + dérive.', 'estime'],
    ['Différence route surface / route fond ?', 'Rs : vent seul. Rf : vent + courant.', 'estime'],
    ['Qu\'est-ce que l\'estime inverse ?', 'Trouver le cap compas (et la vitesse) pour aller à un point.', 'estime'],
    ['Relèvement d\'un amer par le travers tribord ?', 'Zv = Cv + 90°.', 'estime'],
    ['Comment s\'exprime la direction d\'un courant ?', 'La direction où il porte (où il va).', 'courant'],
    ['Formule vectorielle du courant ?', 'Fond = Surface + Courant.', 'courant'],
    ['Comment trouver le courant subi ?', 'Vecteur du point estimé (surface) au point réel (fond), divisé par le temps.', 'courant'],
    ['Où lire le courant sur la carte ?', 'Dans les cartouches des losanges magenta, en VE et ME, par heure par rapport à la PM.', 'courant'],
    ['Formules de la loxodromie ?', 'ΔL = M cos Rf ; e = M sin Rf ; ΔG = e / cos Lm.', 'loxo'],
    ['Limite de distance pour le calcul loxo au programme ?', 'Moins de 300 milles.', 'loxo']
  ],
  qcm: [
    { q: 'Un mille marin mesure…', r: ['1 852 m', '1 609 m', '1 000 m', '1 825 m'], e: '1 minute d\'arc de méridien.', f: 'mille' },
    { q: 'Une vitesse de 1 nœud, c\'est…', r: ['1 mille par heure', '1 km par heure', '1 mètre par seconde', '1 mille par minute'], e: '', f: 'mille' },
    { q: 'Pour mesurer une distance sur la carte, on reporte le compas sur…', r: ['L\'échelle des latitudes', 'L\'échelle des longitudes', 'L\'échelle graphique du titre', 'La rose des vents'], e: 'La minute de latitude = 1 mille.', f: 'mille' },
    { q: 'En 2 h 15 à 8 nœuds, on parcourt…', r: ['18 M', '16,2 M', '17,2 M', '20 M'], e: '8 × 2,25 = 18.', f: 'mille' },
    { q: 'La latitude se mesure…', r: ['Sur le méridien, depuis l\'équateur', 'Sur l\'équateur, depuis Greenwich', 'Depuis le pôle Nord', 'Sur un parallèle'], e: '0 à 90° N ou S.', f: 'sphere' },
    { q: 'La route la plus courte entre deux points du globe est…', r: ['L\'orthodromie', 'La loxodromie', 'La route Mercator', 'Le parallèle'], e: 'Arc de grand cercle.', f: 'sphere' },
    { q: 'Sur une carte Mercator, une loxodromie est…', r: ['Une ligne droite', 'Une courbe', 'Un cercle', 'Une spirale'], e: 'Cap constant = droite sur Mercator.', f: 'sphere' },
    { q: 'La déclinaison magnétique dépend…', r: ['Du lieu et de l\'année', 'Du cap du navire', 'De la vitesse', 'De la marée'], e: 'Elle est lue sur la rose de la carte.', f: 'compas' },
    { q: 'La déviation dépend…', r: ['Du navire et de son cap', 'Du lieu seulement', 'De l\'année', 'De la latitude seulement'], e: 'D\'où la courbe de déviation.', f: 'compas' },
    { q: 'Cc = 120°, d = +3°, D = −5°. Cap vrai ?', r: ['118°', '122°', '128°', '112°'], e: 'W = −2° ; Cv = 120 − 2 = 118°.', f: 'compas' },
    { q: 'Cv = 045°, D = 4° W, d = 2° E. Cap compas ?', r: ['047°', '043°', '051°', '039°'], e: 'W = −2° ; Cc = Cv − W = 045 + 2 = 047°.', f: 'compas' },
    { q: 'Un alignement au Zv 068° est relevé au Zc 076°. La variation est…', r: ['−8°', '+8°', '−4°', '+4°'], e: 'W = Zv − Zc.', f: 'compas' },
    { q: 'W = −8°, D = −3°. La déviation vaut…', r: ['−5°', '+5°', '−11°', '+11°'], e: 'd = W − D = −8 + 3.', f: 'compas' },
    { q: 'Rose : « 5°00′ W 2000 (9′ E) ». Déclinaison en 2005 ?', r: ['Environ 4° W', 'Environ 6° W', '5° E', '5°45′ W'], e: '5°00′ − 5 × 9′ = 4°15′ W.', f: 'compas' },
    { q: 'Réduire la déviation avec des aimants correcteurs s\'appelle…', r: ['La compensation', 'La régulation', 'La variation', 'La déclinaison'], e: 'La régulation, elle, mesure la déviation restante.', f: 'compas' },
    { q: 'Le gyrocompas indique…', r: ['Le Nord vrai (à Wg près)', 'Le Nord magnétique', 'Le Nord compas magnétique', 'La route fond'], e: 'Insensible au magnétisme.', f: 'gyro' },
    { q: 'Quand lancer le gyrocompas avant l\'appareillage ?', r: ['4 à 5 h avant', '10 minutes avant', '24 h avant', 'Au moment de larguer'], e: 'Temps de ralliement du Nord.', f: 'gyro' },
    { q: 'Le principal risque du gyrocompas ?', r: ['Il peut décrocher en cas de panne', 'Il est perturbé par l\'acier', 'Il dépend de la déclinaison', 'Il ne marche que de jour'], e: 'D\'où le compas magnétique de secours.', f: 'gyro' },
    { q: 'Quel loch mesure la vitesse fond ?', r: ['Le loch Doppler', 'Le loch électromagnétique', 'Le loch à hélice', 'Le tube de Pitot'], e: 'Sur fonds de moins de 200 m environ.', f: 'lochs' },
    { q: 'Le loch électromagnétique mesure…', r: ['La vitesse surface', 'La vitesse fond', 'La dérive seulement', 'La profondeur'], e: 'Il mesure le mouvement par rapport à l\'eau salée.', f: 'lochs' },
    { q: 'Les détails d\'un port, ses mouillages et dangers se trouvent dans…', r: ['Les Instructions nautiques', 'Le livre des feux', 'L\'annuaire des marées', 'Les éphémérides'], e: 'Complément naturel de la carte.', f: 'documents' },
    { q: 'Les secteurs d\'un feu (relèvements limites) sont donnés…', r: ['Vus du large', 'Vus du phare', 'En gisement', 'En relèvement magnétique'], e: 'Livre des feux.', f: 'documents' },
    { q: 'Les corrections de carte se font…', r: ['À l\'encre violette, sans gratter', 'Au crayon gris', 'Au feutre rouge', 'En collant une nouvelle carte'], e: 'Crayon seulement pour le temporaire.', f: 'documents' },
    { q: 'Le SH2 du Guide du navigateur traite…', r: ['Des méthodes et instruments de navigation', 'De la réglementation', 'Des marées', 'Des feux'], e: 'SH1 documents, SH2 méthodes et instruments, SH3 réglementation.', f: 'documents' },
    { q: 'Les sondes de la carte sont comptées depuis…', r: ['Le zéro des cartes', 'Le niveau moyen', 'La PMVE 95', 'Le trait de côte'], e: '≈ plus basses mers.', f: 'carte' },
    { q: 'L\'élévation d\'un phare est comptée au-dessus de…', r: ['PMVE 95', 'Zéro des cartes', 'Niveau moyen', 'BMVE 120'], e: 'Sert au calcul de la portée.', f: 'carte' },
    { q: 'Une sonde soulignée sur la carte est…', r: ['Négative : le fond découvre', 'Très profonde', 'Douteuse', 'Une épave'], e: 'Elle se retranche dans le calcul de la profondeur.', f: 'carte' },
    { q: 'Le système géodésique de la carte 7066 est…', r: ['WGS 84', 'ED 50', 'NTF', 'PZ-90'], e: 'Compatible GPS.', f: 'carte' },
    { q: 'Navire au Cv 350°, amer au gisement 125°. Zv ?', r: ['115°', '225°', '135°', '475°'], e: '350 + 125 = 475 − 360 = 115°.', f: 'points' },
    { q: 'Cv = 227°, phare par le travers bâbord. Zv ?', r: ['137°', '317°', '227°', '047°'], e: '227 − 90 = 137°.', f: 'points' },
    { q: 'Œil à 9 m, feu à 36 m au-dessus de l\'eau. Portée géographique ?', r: ['18,9 M', '15,0 M', '21,0 M', '12,6 M'], e: '2,1 × (3 + 6) = 18,9 M.', f: 'points' },
    { q: 'Trois relèvements forment un petit triangle de 0,2 M. On…', r: ['Prend le centre du triangle', 'Recommence tout', 'Prend le sommet le plus au large', 'Ignore le point'], e: 'Moins de 0,3 M : point moyen.', f: 'points' },
    { q: 'La meilleure ligne de position est…', r: ['L\'alignement', 'Un relèvement radar', 'Une isobathe', 'Un gisement'], e: 'Son Zv est connu et il donne W.', f: 'points' },
    { q: 'Tu as perdu un alignement. Tu fais route…', r: ['Du côté où tu vois l\'amer antérieur', 'Du côté de l\'amer postérieur', 'Vers le large', 'Au hasard'], e: 'L\'amer le plus proche montre le côté de l\'alignement.', f: 'points' },
    { q: 'Vent de tribord : la dérive est…', r: ['Négative (vers bâbord)', 'Positive (vers tribord)', 'Nulle', 'Égale à la déclinaison'], e: 'On dérive sous le vent.', f: 'estime' },
    { q: 'Cv = 305°, dérive +6°. Route surface ?', r: ['311°', '299°', '305°', '317°'], e: 'Rs = Cv + dér.', f: 'estime' },
    { q: 'La route fond tient compte…', r: ['Du vent et du courant', 'Du vent seulement', 'Du courant seulement', 'De la déviation seulement'], e: 'Sans courant, Rs = Rf.', f: 'estime' },
    { q: 'Pour passer à au moins 2 M d\'un phare, on trace…', r: ['La tangente à un cercle de 2 M autour du phare', 'Un relèvement de 2°', 'Une perpendiculaire', 'Une isobathe'], e: 'Cours p. 155.', f: 'estime' },
    { q: 'Un courant « porte au 090° ». Il va…', r: ['Vers l\'Est', 'Vers l\'Ouest', 'Vers le Nord', 'Vers le Sud'], e: 'Le courant se donne où il va.', f: 'courant' },
    { q: 'Rs 000°, Vs 10 nd, courant portant au 180° à 2 nd. Vf ?', r: ['8 nd', '12 nd', '10 nd', '10,2 nd'], e: 'Courant de l\'avant : Vs − Vc.', f: 'courant' },
    { q: 'Le courant subi se trouve en joignant…', r: ['Le point estimé au point réel', 'Le point réel au point de départ', 'Le départ au point estimé', 'Deux amers'], e: 'Puis on divise par le temps.', f: 'courant' },
    { q: 'Le triangle des vitesses se trace en général pour…', r: ['1 heure', '10 minutes', 'La durée totale', '1 mille'], e: 'Distances en M = vitesses en nd.', f: 'courant' },
    { q: 'En loxodromie, ΔL = …', r: ['M × cos Rf', 'M × sin Rf', 'e / cos Lm', 'M / cos Rf'], e: 'ΔG = e / cos Lm.', f: 'loxo' },
    { q: 'Route 180°, 60 M. ΔL ?', r: ['−60′ (1° vers le Sud)', '+60′', '0′', '−30′'], e: 'cos 180° = −1.', f: 'loxo' },
    { q: 'Route 090° à l\'équateur, 60 M. ΔG ?', r: ['+60′ (1° vers l\'Est)', '0′', '−60′', '+120′'], e: 'e = 60′, cos 0° = 1.', f: 'loxo' },
    { q: 'Pourquoi divise-t-on l\'écart par cos Lm ?', r: ['Les méridiens se rapprochent vers les pôles', 'Pour corriger la déclinaison', 'Pour tenir compte du courant', 'Pour passer en kilomètres'], e: 'Une minute de longitude rétrécit avec la latitude.', f: 'loxo' }
  ]
});
