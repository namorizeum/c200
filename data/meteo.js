/* Météorologie — module P1-1 */
C200.module({
  id: 'meteo', bloc: 'P1-1', ordre: 9, court: 'MTO', titre: 'Météorologie',
  intro: 'Instruments, nuages, brouillard, pression, vent, mer, perturbations, vents de Méditerranée et bulletins. Écrit du module P1-1.',
  calculs: ['meteo-barbules', 'meteo-beaufort', 'meteo-tendance', 'meteo-buys'],
  fiches: [
    {
      id: 'atmosphere', titre: 'L\'atmosphère et la prévision', src: 'Cours MTO (Combier) p. 2-3',
      html: `<ul><li>Air : ≈ ¾ d'<b>azote</b>, ¼ d'<b>oxygène</b>, un peu de vapeur d'eau et de CO₂.</li>
<li>La météo se passe dans la <b>troposphère</b>, séparée de la stratosphère par la <b>tropopause</b> (≈ 12-13 km chez nous ; le sommet des cumulonimbus s'y étale).</li>
<li>Observations aux heures <b>synoptiques</b> : 0 h, 6 h, 12 h, 18 h UTC (satellites, bouées, navires, ballons, radars).</li>
<li>Prévision numérique (modèles) → fichiers <b>GRIB</b>, à utiliser avec prudence (ils lissent les phénomènes locaux violents).</li></ul>
<div class="retenir"><p>Fiabilité de la prévision : environ <b>2 jours en Méditerranée</b>, 4 jours en Atlantique Nord. Au-delà, on s'appuie sur la <b>climatologie</b> (Instructions nautiques, Pilot charts).</p></div>`
    },
    {
      id: 'humidite', titre: 'Température, humidité, point de rosée', src: 'Cours MTO p. 3 à 5',
      html: `<ul><li>Le soleil chauffe vite la <b>terre</b>, lentement la <b>mer</b> (la mer est la plus chaude en automne).</li>
<li>L'air ne peut contenir qu'une quantité limitée de vapeur : au-delà il est <b>saturé</b> et des gouttelettes se forment.</li>
<li><b>Humidité relative</b> : % de vapeur par rapport à la saturation (hygromètre).</li></ul>
<div class="retenir"><p><b>Point de rosée</b> : la température à laquelle l'air doit se refroidir pour donner du <b>brouillard</b>. Plus la température de l'air est proche du point de rosée, plus le risque de brume est grand.</p></div>
<p>À bord, on le mesure avec un <b>psychromètre</b> : un thermomètre <b>sec</b> et un thermomètre <b>mouillé</b> + des tables (ou un capteur électronique).</p>
<p>Échelles : 0 °C = glace qui fond, 100 °C = eau qui bout ; en °F : 32 et 212.</p>`
    },
    {
      id: 'nuages', titre: 'Les nuages', src: 'Cours MTO p. 5 à 7',
      html: `<div class="tw"><table><tr><th>Étage</th><th>Nuages</th><th>À retenir</th></tr>
<tr><td><b>Hauts</b> (7 à 13 km, glace)</td><td>Cirrus (Ci), Cirrocumulus (Cc), Cirrostratus (Cs)</td><td>Ci : filaments, <b>annoncent une perturbation</b>. Cs : voile avec <b>halo</b> autour du soleil, la confirme.</td></tr>
<tr><td><b>Moyens</b> (2 à 7 km)</td><td>Altostratus (As), Altocumulus (Ac), Nimbostratus (Ns)</td><td>As : soleil comme derrière un verre dépoli, <b>sans halo</b>, le front chaud approche. Ac lenticulaire : vent fort en montagne. Ns : pluie continue.</td></tr>
<tr><td><b>Bas</b> (0 à 2 km)</td><td>Stratus (St), Stratocumulus (Sc)</td><td>St : couche grise, bruine ; le brouillard est un stratus au sol.</td></tr>
<tr><td><b>Développement vertical</b></td><td>Cumulus (Cu), Cumulonimbus (Cb)</td><td>Cu : chou-fleur, beau temps et brise de mer. <b>Cb</b> : enclume, <b>orage</b>, grêle, grains, rafales, trombe.</td></tr></table></div>
<p>Astuce de taille apparente à bout de bras : Cc ≈ un demi-doigt, Ac 1 à 3 doigts, Sc plus de 3 doigts.</p>`
    },
    {
      id: 'brouillard', titre: 'Brume et brouillard', src: 'Cours MTO p. 7-8',
      html: `<p><b>Brouillard</b> : visibilité de moins de <b>1 km</b>. <b>Brume</b> : entre 1 et 5 km. Les marins disent « brume » dans les deux cas.</p>
<div class="tw"><table><tr><th>Type</th><th>Comment il se forme</th><th>Où</th></tr>
<tr><td><b>Advection</b></td><td>Air <b>chaud et humide</b> qui arrive sur une <b>mer froide</b></td><td>Le plus courant et le plus dangereux en mer (Terre-Neuve). Tient même par vent fort.</td></tr>
<tr><td><b>Évaporation</b></td><td>Air <b>très froid</b> sur une <b>mer chaude</b> : la mer « fume »</td><td>Côtes polaires, mer du Nord, Méditerranée en hiver</td></tr>
<tr><td><b>Rayonnement</b></td><td>Le sol refroidi la nuit (ciel clair) refroidit l'air humide</td><td>Estuaires, rivières, côtes, en hiver</td></tr></table></div>`
    },
    {
      id: 'pression', titre: 'Pression et figures isobariques', src: 'Cours MTO p. 8 à 10',
      html: `<ul><li>Pression normale ≈ <b>1015 hPa</b> (1013 en physique). 1 hPa = 1 mb.</li>
<li>Elle baisse d'environ <b>1 hPa tous les 8 m</b> de hauteur.</li>
<li><b>Baromètre anéroïde</b> : capsule vide d'air qui se déforme ; à <b>étalonner</b> 1 à 2 fois par an (vis de réglage). On tape sur le verre pour voir la tendance. Lire toutes les heures et noter au journal.</li>
<li><b>Isobares</b> : lignes de même pression, de 5 en 5 hPa (4 en 4 sur les cartes anglaises).</li></ul>
<div class="tw"><table><tr><th>Figure</th><th>Aspect</th><th>Temps</th></tr>
<tr><td><b>Anticyclone</b> A (H)</td><td>Colline, haute pression</td><td>Beau temps, vent faible au centre</td></tr>
<tr><td><b>Dépression</b> D (L)</td><td>Creux</td><td>Mauvais temps, isobares serrées, vent fort</td></tr>
<tr><td><b>Thalweg</b> (trough)</td><td>Isobares en <b>V</b> ouverts vers la dépression</td><td>Changement de temps, vent et pluie</td></tr>
<tr><td><b>Dorsale</b> (ridge)</td><td>Isobares en <b>U</b> ouverts vers l'anticyclone</td><td>Peu de nuages, brume fréquente</td></tr>
<tr><td><b>Marais barométrique</b></td><td>Isobares lâches vers 1015</td><td>Vent faible et variable, brumes</td></tr>
<tr><td><b>Col</b></td><td>Entre 2 A et 2 D</td><td>Vent faible à nul</td></tr></table></div>
<div class="retenir"><p>Plus les isobares sont <b>serrées</b>, plus le vent est <b>fort</b>.</p></div>
<h3>Tendance sur 3 heures</h3>
<div class="tw"><table><tr><th>Baisse</th><th>À prévoir</th></tr>
<tr><td>−2 à −3 hPa</td><td>Aggravation possible</td></tr><tr><td>−4 à −5 hPa</td><td>Coup de vent</td></tr><tr><td>−6 à −9 hPa</td><td>Fort coup de vent à tempête</td></tr><tr><td>−10 à −15 hPa</td><td>Violente tempête, ouragan</td></tr></table></div>
<p>Sur 24 h : −15 hPa = aggravation durable ; +15 hPa = amélioration durable. Une forte <b>hausse</b> peut aussi annoncer un coup de vent (mistral aux Baléares).</p>`
    },
    {
      id: 'vent', titre: 'Le vent et l\'échelle de Beaufort', src: 'Cours MTO p. 11-12',
      html: `<p>Le vent se donne par la direction <b>d'où il vient</b>. Le vent <b>apparent</b> (ressenti à bord) = vent réel + vent dû à la vitesse du navire.</p>
<p><b>Girouette</b> : direction. <b>Anémomètre</b> : vitesse. 1 nd ≈ 2 km/h ; 1 m/s ≈ 2 nd.</p>
<div class="tw"><table><tr><th>Force</th><th>Nom</th><th>Nœuds</th></tr>
<tr><td>0</td><td>Calme</td><td>&lt; 1</td></tr><tr><td>1</td><td>Très légère brise</td><td>1-3</td></tr><tr><td>2</td><td>Légère brise</td><td>4-6</td></tr><tr><td>3</td><td>Petite brise</td><td>7-10</td></tr><tr><td>4</td><td>Jolie brise</td><td>11-16</td></tr><tr><td>5</td><td>Bonne brise</td><td>17-21</td></tr><tr><td>6</td><td>Vent frais</td><td>22-27</td></tr><tr><td><b>7</b></td><td><b>Grand frais</b></td><td>28-33</td></tr><tr><td>8</td><td>Coup de vent</td><td>34-40</td></tr><tr><td>9</td><td>Fort coup de vent</td><td>41-47</td></tr><tr><td>10</td><td>Tempête</td><td>48-55</td></tr><tr><td>11</td><td>Violente tempête</td><td>56-63</td></tr><tr><td>12</td><td>Ouragan</td><td>64 et plus</td></tr></table></div>
<p>Le vent donné est le vent <b>moyen à 10 m</b>. Les <b>rafales</b> peuvent dépasser de 40 %.</p>
<h3>Flèches de vent (barbules)</h3>
<p>Barbule = <b>5 nd</b>, barbe = <b>10 nd</b>, triangle = <b>50 nd</b>. Force = barbes × 2 + 1 (jusqu'à 35 nd), puis barbes × 2 (à partir de 40 nd).</p>
<h3>Loi de Buys-Ballot (hémisphère Nord)</h3>
<div class="retenir"><p>Le vent tourne dans le sens <b>des aiguilles d'une montre</b> autour de l'anticyclone et en sens <b>inverse</b> autour de la dépression.</p><p><b>Face au vent</b>, la <b>dépression est à droite</b>, l'anticyclone à gauche.</p></div>`
    },
    {
      id: 'mer', titre: 'L\'état de la mer', src: 'Cours MTO p. 12 à 14',
      html: `<ul><li><b>Mer du vent</b> : vagues créées par le vent local. Elle grossit avec la <b>force</b>, la <b>durée</b> et le <b>fetch</b> (distance sur laquelle souffle le vent).</li>
<li><b>Houle</b> : vagues qui se propagent hors de leur zone de formation, ou qui restent après le vent (houle résiduelle). Elle voyage loin (Terre-Neuve → Maroc en 3 jours).</li>
<li>Une vague : crête, creux, <b>hauteur H</b>, <b>longueur L</b>, <b>période T</b>. Cambrure = H / L.</li></ul>
<div class="retenir"><p><b>Hauteur significative H1/3</b> = moyenne du tiers des plus hautes vagues (celle des bulletins). Les vagues maximales peuvent atteindre <b>2 × H1/3</b>.</p></div>
<ul><li>Une vague courte et raide (forte cambrure) est plus dangereuse qu'une longue vague de même hauteur.</li>
<li><b>Courant contre la mer</b> : les vagues deviennent beaucoup plus hautes et raides (raz, Fromveur au jusant contre une mer de SW).</li>
<li>La houle « sent » le fond quand la profondeur est inférieure à la moitié de sa longueur : déferlement sur les hauts-fonds.</li>
<li><b>Mer croisée</b> (vent qui tourne + houle) : vagues pyramidales, dangereuses.</li>
<li>Navire en travers d'une vague courte, ou roulis en <b>résonance</b> avec la houle : gîte dangereuse.</li></ul>
<p>L'état de la mer a son échelle à part : l'échelle de <b>Douglas</b> (code S), à ne pas confondre avec Beaufort.</p>`
    },
    {
      id: 'perturbation', titre: 'Fronts et perturbations', src: 'Cours MTO p. 14 à 16',
      html: `<p>Chez nous, les perturbations arrivent de l'<b>Ouest</b>, entre l'anticyclone des <b>Açores</b> et la dépression d'<b>Islande</b>. Un <b>front</b> est la limite entre deux masses d'air.</p>
<div class="tw"><table><tr><th>Front</th><th>Symbole</th><th>Temps</th></tr>
<tr><td><b>Chaud</b></td><td>Demi-cercles</td><td>L'air chaud monte doucement sur l'air froid : <b>pluie continue</b></td></tr>
<tr><td><b>Froid</b></td><td>Triangles</td><td>L'air froid soulève brutalement l'air chaud : <b>grains, orages</b></td></tr>
<tr><td><b>Occlus</b></td><td>Demi-cercles et triangles du même côté</td><td>Le front froid a rattrapé le front chaud</td></tr>
<tr><td><b>Stationnaire</b></td><td>Demi-cercles et triangles de part et d'autre</td><td>Ne bouge pas</td></tr></table></div>
<h3>Le passage d'une perturbation</h3>
<ol><li><b>Tête</b> : cirrus → cirrostratus (halo) → altostratus → nimbostratus. Le baromètre <b>baisse</b>, le vent passe au S puis SW.</li>
<li><b>Front chaud</b> : pluie continue.</li>
<li><b>Secteur chaud</b> : air doux et humide, stratus, bruine, brume ; vent d'W, pression basse.</li>
<li><b>Front froid</b> : grains, fortes pluies, orages. Le baromètre <b>remonte vite</b>, le vent <b>vire au NW</b> (noroît).</li>
<li><b>Traîne</b> : air froid instable, averses, éclaircies, <b>rafales</b> sous les grains.</li></ol>
<div class="piege"><p>Signes d'arrivée : baromètre qui baisse + cirrus et cirrostratus qui envahissent le ciel + vent qui tourne + houle longue qui grossit + la brise de mer qui ne s'établit pas. C'est la combinaison qui doit alerter.</p></div>`
    },
    {
      id: 'mediterranee', titre: 'Effets côtiers et vents de Méditerranée', src: 'Cours MTO p. 16 à 18',
      html: `<h3>Effets côtiers</h3>
<ul><li><b>Effet de foehn</b> : l'air redescend d'une montagne réchauffé et sec, en <b>rafales violentes</b> (libeccio sur le cap Corse).</li>
<li><b>Effet Venturi</b> (confluence) : le vent accélère dans un passage resserré (bouches de Bonifacio, île d'Elbe).</li>
<li><b>Brise de mer</b> : de la mer vers la terre, dès la fin de matinée, jusqu'à ~20 nd ; elle tourne avec le soleil (SE → SW sur une côte orientée au sud). Cumulus sur la côte.</li>
<li><b>Brise de terre</b> : de la terre vers la mer, la nuit (vers 23 h), plus faible.</li></ul>
<h3>Les vents de Méditerranée</h3>
<div class="tw"><table><tr><th>Vent</th><th>Secteur</th><th>À retenir</th></tr>
<tr><td><b>Mistral</b></td><td>NW (WNW à N)</td><td>Froid, sec, violent, canalisé entre Alpes et Pyrénées. Dorsale à l'ouest + dépression du golfe de Gênes à l'est. Mer courte et creuse. Signes : Ac lenticulaires sur les reliefs. Risque majeur de novembre à mars, mais possible l'été (45 nd).</td></tr>
<tr><td><b>Tramontane</b></td><td>NW à N</td><td>Comme le mistral, à l'ouest du Massif central (Roussillon)</td></tr>
<tr><td><b>Libeccio</b> (labech)</td><td>SW à W</td><td>Humide, plus chaud, fortes houles en automne sur la Riviera</td></tr>
<tr><td><b>Vent d'Est</b></td><td>E</td><td>Très violent sur les côtes du Var en hiver, alors que le SE est modéré au large</td></tr>
<tr><td><b>Sirocco</b></td><td>SE à S</td><td>Air du Sahara, chaud, humide en arrivant chez nous, poussières (pluies rouges), mauvaise visibilité</td></tr></table></div>
<div class="piege"><p>Dans le mistral, ne pas fuir vent arrière vers le large (le fetch grandit, la mer devient dangereuse) : chercher à rallier une zone abritée sur le côté.</p></div>`
    },
    {
      id: 'bulletins', titre: 'Bulletins et cartes météo', src: 'Cours MTO p. 19 à 23 ; cours TDQ p. 15',
      html: `<div class="tw"><table><tr><th>Domaine</th><th>Étendue</th><th>Moyen de réception</th></tr>
<tr><td>Rivage</td><td>2 M</td><td>Téléphone, affichage</td></tr>
<tr><td>Côte</td><td>20 M</td><td><b>VHF</b> (CROSS), radio</td></tr>
<tr><td>Large</td><td>200-300 M</td><td><b>NAVTEX</b> (518 kHz), BLU</td></tr>
<tr><td>Grand large</td><td>Océans (METAREA)</td><td><b>Inmarsat C / SafetyNET</b>, BLU</td></tr></table></div>
<h3>Un bulletin régulier contient</h3>
<ol><li>Origine, date, heure ;</li><li>rappel des <b>avis en cours</b> (BMS) ;</li><li>situation générale et évolution ;</li><li>prévision par zone ;</li><li><b>tendance ultérieure</b> (à lire avec soin : elle annonce ce qui n'est pas encore en BMS).</li></ol>
<h3>Les avis (BMS)</h3>
<p>Grand frais <b>F7</b> · coup de vent F8 · fort coup de vent F9 · tempête F10 · violente tempête F11 · ouragan F12. Aussi : forte houle, surcote, visibilité réduite. Un BMS ne dure pas plus de <b>24 h</b>. Côte : BMS dès F7 ; large : dès F8.</p>
<h3>Lire une carte météo</h3>
<p>Projection ; zone ; <b>analyse ou prévision</b> ; date et heure de validité (UTC) ; intervalle des isobares ; flèches de vent ; fronts. Fichiers <b>GRIB</b> : valeurs aux points de grille, reconstituées par le logiciel du bord.</p>`
    }
  ],
  cartes: [
    ['Dans quelle couche se passe la météo ?', 'La troposphère (sous la tropopause).', 'atmosphere'],
    ['Fiabilité de la prévision en Méditerranée ?', 'Environ 2 jours (48 h).', 'atmosphere'],
    ['Qu\'est-ce que le point de rosée ?', 'La température à laquelle l\'air doit se refroidir pour donner du brouillard.', 'humidite'],
    ['Instrument pour le point de rosée à bord ?', 'Le psychromètre (thermomètres sec et mouillé).', 'humidite'],
    ['Quel nuage annonce une perturbation ?', 'Le cirrus (puis le cirrostratus avec halo).', 'nuages'],
    ['Quel nuage donne un halo autour du soleil ?', 'Le cirrostratus.', 'nuages'],
    ['Quel est le nuage de l\'orage ?', 'Le cumulonimbus (enclume).', 'nuages'],
    ['Quel nuage donne des pluies longues et continues ?', 'Le nimbostratus.', 'nuages'],
    ['Que révèlent des altocumulus lenticulaires ?', 'Un vent fort en altitude sur le relief (ex. arrivée du mistral).', 'nuages'],
    ['Brouillard : visibilité ?', 'Moins de 1 km (brume : 1 à 5 km).', 'brouillard'],
    ['Brouillard d\'advection ?', 'Air chaud et humide sur une mer froide. Le plus dangereux en mer.', 'brouillard'],
    ['Brouillard d\'évaporation ?', 'Air très froid sur une mer chaude : la mer fume.', 'brouillard'],
    ['Pression normale au niveau de la mer ?', 'Environ 1015 hPa (1 hPa = 1 mb).', 'pression'],
    ['Isobares serrées = ?', 'Vent fort.', 'pression'],
    ['Thalweg ?', 'Isobares en V ouverts vers la dépression : changement de temps.', 'pression'],
    ['Dorsale ?', 'Isobares en U ouverts vers l\'anticyclone : peu de nuages, brume.', 'pression'],
    ['Baisse de 4 à 5 hPa en 3 h ?', 'Coup de vent à prévoir.', 'pression'],
    ['Combien de fois par an étalonner le baromètre ?', '1 à 2 fois.', 'pression'],
    ['Le vent se donne d\'où il vient ou où il va ?', 'D\'où il vient.', 'vent'],
    ['Force 7 : nom et vitesse ?', 'Grand frais, 28 à 33 nd.', 'vent'],
    ['Force 8 : nom et vitesse ?', 'Coup de vent, 34 à 40 nd.', 'vent'],
    ['Force 10 ?', 'Tempête, 48 à 55 nd.', 'vent'],
    ['Force 12 ?', 'Ouragan, 64 nd et plus.', 'vent'],
    ['Barbule, barbe, triangle ?', '5 nd, 10 nd, 50 nd.', 'vent'],
    ['Loi de Buys-Ballot pour un observateur face au vent (hém. Nord) ?', 'Dépression à droite, anticyclone à gauche.', 'vent'],
    ['Sens du vent autour d\'une dépression (hém. Nord) ?', 'Sens inverse des aiguilles d\'une montre.', 'vent'],
    ['Qu\'est-ce que le fetch ?', 'La distance sur laquelle le vent souffle sur la mer.', 'mer'],
    ['Hauteur significative H1/3 ?', 'Moyenne du tiers des plus hautes vagues. Les plus grosses ≈ 2 × H1/3.', 'mer'],
    ['Courant contre la mer : effet ?', 'Les vagues deviennent plus hautes et plus raides.', 'mer'],
    ['Front chaud : symbole et temps ?', 'Demi-cercles ; pluie continue.', 'perturbation'],
    ['Front froid : symbole et temps ?', 'Triangles ; grains et orages.', 'perturbation'],
    ['Au passage du front froid, que font le baromètre et le vent ?', 'Le baromètre remonte vite, le vent vire au NW.', 'perturbation'],
    ['Qu\'est-ce que la traîne ?', 'L\'air froid instable après le front froid : averses, éclaircies, rafales.', 'perturbation'],
    ['Effet de foehn ?', 'Air qui redescend d\'une montagne, réchauffé et sec, en rafales violentes.', 'mediterranee'],
    ['Brise de mer : quand et dans quel sens ?', 'En journée, de la mer vers la terre.', 'mediterranee'],
    ['Secteur du mistral ?', 'NW (WNW à N).', 'mediterranee'],
    ['Qu\'est-ce que le libeccio ?', 'Vent de SW à W, humide (labech), fortes houles.', 'mediterranee'],
    ['Qu\'est-ce que le sirocco ?', 'Vent de SE-S venant du Sahara, chaud, chargé de poussières.', 'mediterranee'],
    ['Réception des bulletins du large (200 M) ?', 'NAVTEX (518 kHz) et BLU.', 'bulletins'],
    ['Durée maximale d\'un BMS ?', '24 heures.', 'bulletins'],
    ['Quelle partie du bulletin lire avec soin ?', 'La tendance ultérieure.', 'bulletins']
  ],
  qcm: [
    { q: 'Les phénomènes météo se produisent surtout dans…', r: ['La troposphère', 'La stratosphère', 'L\'ionosphère', 'La mésosphère'], e: 'Sous la tropopause.', f: 'atmosphere' },
    { q: 'Le point de rosée sert surtout à prévoir…', r: ['Le brouillard', 'Le vent', 'La houle', 'La marée'], e: 'Air refroidi jusqu\'au point de rosée = brouillard.', f: 'humidite' },
    { q: 'Le psychromètre comporte…', r: ['Un thermomètre sec et un thermomètre mouillé', 'Deux baromètres', 'Une girouette et un anémomètre', 'Un hygromètre à cheveu'], e: 'Avec des tables on obtient le point de rosée.', f: 'humidite' },
    { q: 'Des cirrus qui envahissent le ciel avec un baromètre qui baisse annoncent…', r: ['L\'arrivée d\'une perturbation', 'Un anticyclone', 'Une brise de terre', 'Du beau temps durable'], e: 'Nuages de tête du front chaud.', f: 'nuages' },
    { q: 'Un voile blanchâtre avec halo autour du soleil, c\'est…', r: ['Un cirrostratus', 'Un altostratus', 'Un stratus', 'Un cumulus'], e: 'L\'altostratus, lui, ne donne pas de halo.', f: 'nuages' },
    { q: 'Le nuage en enclume avec grêle et rafales est…', r: ['Le cumulonimbus', 'Le nimbostratus', 'Le cirrus', 'L\'altocumulus'], e: 'Nuage d\'orage.', f: 'nuages' },
    { q: 'De l\'air chaud et humide sur une mer froide donne un brouillard…', r: ['D\'advection', 'D\'évaporation', 'De rayonnement', 'De pente'], e: 'Le plus fréquent en mer.', f: 'brouillard' },
    { q: 'On parle de brouillard quand la visibilité est inférieure à…', r: ['1 km', '5 km', '100 m', '10 km'], e: 'Brume : 1 à 5 km.', f: 'brouillard' },
    { q: 'Des isobares très serrées indiquent…', r: ['Un vent fort', 'Un vent faible', 'Du brouillard', 'Une marée forte'], e: 'Fort gradient de pression.', f: 'pression' },
    { q: 'Des isobares en V ouverts vers la dépression forment…', r: ['Un thalweg', 'Une dorsale', 'Un col', 'Un marais'], e: 'Zone de changement de temps.', f: 'pression' },
    { q: 'Le baromètre perd 7 hPa en 3 heures. On prévoit…', r: ['Un fort coup de vent à tempête', 'Du beau temps', 'Une aggravation légère', 'Une brise de mer'], e: '−6 à −9 hPa / 3 h.', f: 'pression' },
    { q: 'La pression diminue d\'environ 1 hPa tous les…', r: ['8 m d\'altitude', '100 m', '1 km', '1 m'], e: 'Cours p. 9.', f: 'pression' },
    { q: 'Un vent de 30 nœuds correspond à la force…', r: ['7 (grand frais)', '6 (vent frais)', '8 (coup de vent)', '5 (bonne brise)'], e: '28 à 33 nd.', f: 'vent' },
    { q: 'Force 8, c\'est…', r: ['Un coup de vent (34-40 nd)', 'Un grand frais', 'Une tempête', 'Un ouragan'], e: '', f: 'vent' },
    { q: 'Sur une carte, une flèche avec 3 barbes et 1 barbule indique…', r: ['35 nd', '30 nd', '40 nd', '65 nd'], e: '3 × 10 + 5.', f: 'vent' },
    { q: 'Hémisphère Nord, face au vent, la dépression est…', r: ['À droite', 'À gauche', 'Devant', 'Derrière'], e: 'Loi de Buys-Ballot.', f: 'vent' },
    { q: 'Autour d\'un anticyclone (hém. Nord), le vent tourne…', r: ['Dans le sens des aiguilles d\'une montre', 'En sens inverse', 'Il ne tourne pas', 'Vers le centre'], e: 'Et sort légèrement du centre.', f: 'vent' },
    { q: 'Les rafales peuvent dépasser le vent moyen d\'environ…', r: ['40 %', '5 %', '100 %', '10 %'], e: 'Cours p. 11.', f: 'vent' },
    { q: 'La mer du vent grossit avec la force du vent, sa durée et…', r: ['Le fetch', 'La marée', 'La pression', 'La température'], e: 'La distance sur laquelle il souffle.', f: 'mer' },
    { q: 'Les vagues maximales probables sont environ…', r: ['2 × H1/3', 'H1/3', '1,2 × H1/3', '5 × H1/3'], e: 'Cours p. 13.', f: 'mer' },
    { q: 'Un courant qui va contre les vagues…', r: ['Les rend plus hautes et raides', 'Les calme', 'Ne change rien', 'Les allonge'], e: 'Ex. : le Fromveur au jusant.', f: 'mer' },
    { q: 'Sur une carte, une ligne avec des demi-cercles est…', r: ['Un front chaud', 'Un front froid', 'Un front occlus', 'Une isobare'], e: 'Triangles = front froid.', f: 'perturbation' },
    { q: 'Au passage du front froid, le vent…', r: ['Vire au NW', 'Passe au SE', 'Tombe complètement', 'Vire à l\'E'], e: 'Et le baromètre remonte vite.', f: 'perturbation' },
    { q: 'Le temps de la traîne est fait…', r: ['D\'averses, d\'éclaircies et de rafales', 'De pluie continue', 'De brouillard épais', 'De calme plat'], e: 'Air froid instable.', f: 'perturbation' },
    { q: 'La brise de mer souffle…', r: ['De la mer vers la terre, en journée', 'De la terre vers la mer, la nuit', 'Parallèle à la côte', 'Seulement en hiver'], e: 'La terre chauffe plus vite que la mer.', f: 'mediterranee' },
    { q: 'Le mistral vient du…', r: ['NW', 'SE', 'SW', 'E'], e: 'Canalisé entre Alpes et Pyrénées.', f: 'mediterranee' },
    { q: 'Le vent chaud chargé de poussières du Sahara est…', r: ['Le sirocco', 'Le mistral', 'La tramontane', 'Le libeccio'], e: 'Pluies rouges, mauvaise visibilité.', f: 'mediterranee' },
    { q: 'L\'effet de foehn donne…', r: ['Un vent chaud et sec en rafales sous le vent du relief', 'Du brouillard', 'Un vent froid et humide', 'Une mer plate'], e: 'L\'air redescend réchauffé et asséché.', f: 'mediterranee' },
    { q: 'Les bulletins du large (jusqu\'à 200 M) se reçoivent par…', r: ['NAVTEX et BLU', 'VHF uniquement', 'Téléphone uniquement', 'AIS'], e: 'Côte : VHF ; grand large : SafetyNET.', f: 'bulletins' },
    { q: 'Un avis de grand frais correspond à…', r: ['Force 7', 'Force 6', 'Force 8', 'Force 10'], e: 'BMS côte dès F7.', f: 'bulletins' }
  ]
});
