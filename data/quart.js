/* Tenue de quart — module P1-1 */
C200.module({
  id: 'quart', bloc: 'P1-1', ordre: 3, court: 'TDQ', titre: 'Tenue de quart',
  intro: 'Veille, relève, préparation de la traversée, plan de route, eaux resserrées, DST et comptes rendus. Évaluée à l\'écrit du module P1-1.',
  fiches: [
    {
      id: 'veilles', titre: 'Les différentes veilles', src: 'Cours TDQ p. 2 à 4',
      html: `<p>Quatre principes de base pour la sécurité à la passerelle : une <b>veille permanente</b>, un <b>quart bien organisé</b>, une <b>bonne pratique</b> du quart, et l'<b>appui du capitaine</b> quand il le faut.</p>
<div class="tw"><table><tr><th>Veille</th><th>À quoi elle sert</th></tr>
<tr><td><b>Optique</b> (visuelle)</td><td>La veille de base, <b>obligatoire</b>. Un veilleur avec jumelles fait des tours d'horizon. Seule elle voit les petits bateaux, les cétacés, les objets entre deux eaux, un homme à la mer, une fumée.</td></tr>
<tr><td><b>Auditive</b></td><td>Obligatoire. Bruits extérieurs (porte sous le vent <b>ouverte</b>) et intérieurs (alarmes, téléphone, machine). Indispensable par brume.</td></tr>
<tr><td><b>Olfactive</b></td><td>Début d'incendie, fuite de gaz ou de liquide, pollution.</td></tr>
<tr><td><b>Radar</b></td><td>Bande <b>X (9 GHz)</b> obligatoire, détecte les <b>SART</b>. Bande S (3 GHz) en plus par mauvais temps.</td></tr>
<tr><td><b>Radio</b> (SMDSM)</td><td>Obligatoire, adaptée à la zone de navigation.</td></tr>
<tr><td><b>Météo</b></td><td>Observer mer, ciel, vent, baromètre ; écouter les bulletins et les BMS.</td></tr>
<tr><td><b>AIS</b></td><td>Infos sur les navires voisins : sûreté, sécurité, anticollision.</td></tr>
<tr><td><b>Environnementale</b></td><td>Respect des règles de rejets (eaux de cale, eaux usées, ordures, ballasts, gaz).</td></tr></table></div>
<h3>Par visibilité réduite</h3>
<ul><li><b>Capitaine</b> à la passerelle ; appliquer le <b>rôle de brume</b> (qui est appelé en renfort et quand).</li>
<li>Doubler la veille radar (3 et 9 GHz), mettre en marche le détecteur de signaux sonores.</li>
<li>Au moins <b>une porte ouverte</b> à la passerelle. Se méfier un peu de l'AIS (tout le monde ne l'a pas).</li></ul>
<p>Par mauvais temps : renfort d'un <b>homme de barre</b> et d'un <b>rondier</b>.</p>
<div class="retenir"><p>La veille est notée dans le <b>livre de bord</b>. L'effectif de quart est fixé par le <b>capitaine</b> (avec la décision d'effectif et les brevets STCW).</p></div>`
    },
    {
      id: 'releve', titre: 'Organisation du quart et relève', src: 'Cours TDQ p. 5-6',
      html: `<p>L'organisation du quart appartient au <b>capitaine</b>. L'effectif à la passerelle dépend de :</p>
<ul><li>la compétence de l'officier et des hommes de quart ;</li><li>l'état des appareils de navigation ;</li><li>la météo, la zone, le jour ou la nuit, le trafic ;</li><li>les tâches en plus (radio, conduite machine) ;</li><li>les situations exceptionnelles (avaries).</li></ul>
<h3>La relève</h3>
<ul><li>On ne passe <b>pas</b> le quart à quelqu'un qui ne semble pas en état : on prévient le capitaine.</li>
<li>L'officier de relève attend que ses <b>yeux soient adaptés à la nuit</b>.</li>
<li>Il vérifie le <b>point</b> (estimé ou vrai), la <b>route</b>, le <b>cap</b>, la <b>vitesse</b>, et les commandes machine.</li>
<li>Il prend connaissance : consignes du capitaine, position, cap, tirant d'eau, marée, courant, météo, visibilité, état des appareils, erreurs des compas, navires en vue, dangers à venir.</li></ul>
<div class="piege"><p>Si une <b>manœuvre d'évitement est en cours</b> au moment de la relève, on <b>attend qu'elle soit finie</b> pour passer le quart.</p></div>`
    },
    {
      id: 'pratique', titre: 'Bonne pratique et appel du capitaine', src: 'Cours TDQ p. 7 à 9',
      html: `<h3>Bonnes pratiques</h3>
<ul><li>Veille et navigation <b>rigoureuses</b>, surtout près de terre et sur rade.</li>
<li>Manœuvres d'évitement <b>franches</b>, surtout à petite vitesse.</li>
<li>Aucune liberté avec le RIPAM.</li>
<li>Utiliser les appareils avec <b>esprit critique</b> : le radar aide, mais la base reste la <b>vue directe</b>.</li>
<li>Tenir l'<b>estime</b> rigoureusement. Comparer le GPS et l'estime.</li>
<li>Noter tous les événements avec l'<b>heure précise</b>.</li>
<li>Faire faire les rondes, former son personnel, lire les consignes du capitaine.</li></ul>
<h3>Quand prévenir le capitaine immédiatement</h3>
<ol><li>Visibilité réduite ou qui va l'être ;</li>
<li>trafic ou manœuvres d'autres navires inquiétants ;</li>
<li>difficulté à tenir la route ;</li>
<li>terre, amer ou sonde <b>pas vus</b> au moment prévu ;</li>
<li>terre, amer ou changement de sonde <b>vus alors qu'on ne s'y attendait pas</b> ;</li>
<li>panne de machine, de barre, d'un appareil de navigation ou d'une alarme ;</li>
<li>panne radio ;</li>
<li>gros temps avec risque d'avarie ;</li>
<li>danger (glaces, épave) ;</li>
<li>toute urgence ou <b>le moindre doute</b>.</li></ol>
<div class="retenir"><p>Prévenir le capitaine n'empêche pas d'<b>agir tout de suite</b> si la sécurité l'exige.</p></div>
<h3>Eaux côtières et encombrées</h3>
<p>Carte à la <b>plus grande échelle</b>, à jour. Points <b>rapprochés</b> et par <b>plusieurs méthodes</b>. Avec un ECDIS, vérifier souvent la position par un moyen indépendant. Identifier les amers avec certitude. Côté machine : tout doit pouvoir passer en commande manuelle, barre de secours prête.</p>`
    },
    {
      id: 'mouillage', titre: 'Le quart au mouillage', src: 'Cours TDQ p. 10',
      html: `<p>Si le capitaine le juge utile, un quart passerelle est tenu en permanence au mouillage. On surveille :</p>
<ul><li>la <b>disponibilité des machines</b> (appel de l'équipe machine si besoin) ;</li>
<li>la <b>position</b> : on vérifie qu'on ne <b>chasse</b> pas (radar, GPS, ECDIS, sondeur, alarme de mouillage, relèvements) ;</li>
<li>les <b>rondes</b> dans les locaux ;</li>
<li>le respect des règles anti-pollution ;</li>
<li>l'évolution de la <b>météo</b> ;</li>
<li>les eaux autour : navire qui approche, attaque, retour de l'annexe ;</li>
<li>la <b>VHF</b> (règlement local, attente du pilote ou des instructions).</li></ul>
<p>Pensez aussi aux <b>feux et marques</b> de mouillage et aux signaux de brume (cloche).</p>`
    },
    {
      id: 'documents', titre: 'Les documents de quart', src: 'Cours TDQ p. 10-11',
      html: `<div class="tw"><table><tr><th>Document</th><th>Contenu</th></tr>
<tr><td><b>Journal passerelle</b> (livre de bord)</td><td>Changements de route avec heure, cap vrai, cap magnétique, erreurs des compas ; cap magnétique <b>toutes les heures</b> ; points tournants ; météo ; alarmes machine ; <b>point de midi</b> et ETA ; comportement du navire (roulis, tangage…) ; accidents, chutes à la mer ; changements d'heure ; essais ; signature de l'officier de quart et du capitaine.</td></tr>
<tr><td><b>Consignes permanentes</b></td><td>Écrites par le capitaine ou la compagnie, encadrées par le <b>Code ISM</b>.</td></tr>
<tr><td><b>Brouillon passerelle</b></td><td>Toute la manœuvre : de l'appel de l'équipage à la <b>route libre</b>, et de la fin de route libre au <b>« terminé machine »</b>.</td></tr>
<tr><td><b>Cahier de variation</b></td><td>Erreurs du compas gyroscopique et magnétique : relevées par <b>alignement</b>, lever du soleil ou étoiles basses.</td></tr>
<tr><td><b>Fiche pilote / capitaine</b></td><td>Infos sur le navire échangées avec le pilote (caractéristiques, puissance, vitesse, giration…), signée des deux.</td></tr></table></div>
<p>Ces documents servent aussi de preuve dans le <b>rapport de mer</b> du capitaine.</p>`
    },
    {
      id: 'preparation', titre: 'Préparer la traversée : documents et cartes', src: 'Cours TDQ p. 12 à 15',
      html: `<p>Toute traversée se prépare comme une « expédition nautique ». On commence par les <b>documents nautiques</b>, c'est la phase la plus longue.</p>
<ul><li>Guide du navigateur ; <b>cartes marines</b> ; <b>Instructions nautiques</b> ;</li>
<li>Livre des <b>feux et signaux de brume</b> ; ouvrages de <b>radiosignaux</b> ;</li>
<li><b>Annuaire des marées</b> et atlas de courants ; éphémérides ;</li>
<li>information nautique (<b>Avis aux navigateurs</b>, AVURNAV) et météo.</li></ul>
<div class="retenir"><p>Documents <b>officiels</b>, <b>dernière édition</b>, corrigés du <b>dernier groupe d'Avis aux navigateurs</b>.</p></div>
<h3>Les catégories de cartes du SHOM</h3>
<div class="tw"><table><tr><th>Cat.</th><th>Type</th><th>Échelle</th><th>Usage</th></tr>
<tr><td>1</td><td>Pilotage côtier</td><td>1/10 000 à 1/25 000</td><td>Entrée de port, mouillages, passes</td></tr>
<tr><td>2</td><td>Pilotage hauturier</td><td>1/40 000 à 1/60 000</td><td>Approches, jusqu'à ~5 milles des dangers</td></tr>
<tr><td>3</td><td>Cabotage</td><td>1/100 000 à 1/200 000</td><td>Navigation côtière à 10-20 milles</td></tr>
<tr><td>4</td><td>Atterrissage</td><td>1/300 000 à 1/500 000</td><td>Reconnaître la côte, 20 à 50 milles</td></tr>
<tr><td>5</td><td>Traversée</td><td>1/800 000 à 1/1 100 000</td><td>50 à 200 milles de terre</td></tr>
<tr><td>6</td><td>Océanique</td><td>1/1 500 000 à 1/4 000 000</td><td>Grandes traversées</td></tr>
<tr><td>7</td><td>Routiers</td><td>1/5 000 000 à 1/15 000 000</td><td>Préparer les grandes traversées</td></tr></table></div>
<p>On les utilise dans l'ordre 1 → 5 en partant, puis 4 → 1 en arrivant.</p>
<div class="piege"><p>Une carte à <b>grande échelle</b> (1/10 000) montre une <b>petite zone</b> avec beaucoup de détails. Plus le chiffre du bas est petit, plus l'échelle est grande.</p></div>
<h3>Information météo</h3>
<ul><li><b>BMS</b> (bulletin météo spécial) dès <b>force 7</b>, répété toutes les heures.</li>
<li><b>Côte</b> (jusqu'à <b>20 milles</b>) : VHF et radio.</li>
<li><b>Large</b> (jusqu'à <b>200 milles</b>) : <b>NAVTEX</b> et BLU.</li>
<li><b>Grand large</b> (METAREA) : <b>SafetyNET</b> (satellite).</li></ul>`
    },
    {
      id: 'routes', titre: 'Tracer les routes et le plan de route', src: 'Cours TDQ p. 16 à 19',
      html: `<p>Le <b>point tournant</b> est le point où on change de route. Sur une longue branche, on ajoute un <b>point intermédiaire</b> pour se recaler.</p>
<h3>Règles pour tracer</h3>
<ul><li>Suivre les itinéraires recommandés (cartes, Instructions nautiques), respecter les DST.</li>
<li>Points tournants sur des <b>amers remarquables</b> (phares, caps, sémaphores), relèvements cardinaux, distances en milles. <b>Jamais une bouée</b> comme point tournant (elle peut bouger).</li>
<li>Changements de route ni trop petits ni trop grands ; pas trop de routes.</li>
<li>Garder de la <b>place pour manœuvrer</b> (avarie de barre). Passer large des pointes basses et des roches.</li>
<li>Plus au large si vent et courant portent à la côte.</li>
<li>Fonds d'au moins <b>30 m</b> ; pas à moins de <b>2 milles</b> de la côte (risque de black-out) ; toujours au moins un <b>tirant d'eau</b> d'eau sous la quille.</li>
<li>Éviter zones militaires, parcs éoliens, aires protégées (voir AVURNAV).</li>
<li>Route tracée sur <b>toutes</b> les cartes, avec une <b>flèche</b> et la valeur.</li></ul>
<h3>Le plan de route</h3>
<p>Tableau de tous les points tournants, routes, distances, durées. Le lieutenant fait un <b>projet</b>, le <b>capitaine l'approuve</b> (il est maître du choix des routes). Il est <b>obligatoire</b> et <b>affiché à la passerelle</b>.</p>
<ul><li>Coordonnées des points tournants à entrer dans le <b>GPS</b> (source d'erreurs fréquente !).</li>
<li>Heures de passage calculées au moment de la <b>route libre</b> ; l'<b>ETA</b> est envoyée à l'agent et au port.</li>
<li>Vérifier sans arrêt que le GPS et l'<b>estime</b> disent la même chose.</li>
<li>On peut y ajouter les <b>MRCC</b> rencontrés et les heures de rejets autorisés.</li></ul>`
    },
    {
      id: 'appareillage', titre: 'Contrôles avant l\'appareillage', src: 'Cours TDQ p. 20-21',
      html: `<ul><li><b>Positionnement</b> : systèmes géodésiques compatibles (le GPS est en <b>WGS 84</b>), comparer les positions, vérifier les entrées de vitesse (loch, GPS).</li>
<li><b>Détection et alarmes</b> : détecteur de sons, alarme d'écart de cap, <b>homme mort</b>, défaut des feux de navigation, angle de barre (poste / ailerons), baromètre, anémomètre, température de l'eau.</li>
<li><b>Pilote automatique</b> : moteurs de barre, comparaison des caps (gyro, magnétique), quel compas il suit, réglages (rudder, yawing).</li>
<li><b>Appareils</b> : bonnes échelles, redondance testée, anti-clutter du radar, <b>NAVTEX</b> réglé sur la bonne zone.</li></ul>
<div class="piege"><p>Le GPS est plus précis que certaines vieilles cartes (sondes relevées avec des moyens anciens) : « imprécision des cartes contre précision du GPS ».</p></div>
<p>Tout est noté au <b>brouillon passerelle</b> et au cahier de variation.</p>`
    },
    {
      id: 'situations', titre: 'La veille selon la situation', src: 'Cours TDQ p. 22 à 27',
      html: `<h3>Eaux resserrées</h3>
<p>Zone où le navire n'a pas toujours la place de faire un <b>tour complet</b> sans danger. Navigation « de chenalage » : précision d'environ <b>10 % de la distance</b> du danger le plus proche. Les <b>deux ancres parées</b>, zones interdites (no go areas), relèvements de garde, <b>point d'abandon</b> (abort position) avant l'entrée. Utiliser le <b>parallel index</b> au radar.</p>
<h3>Glaces</h3>
<ul><li>Icebergs mal vus au radar (4 à 15 milles), à l'œil de nuit par temps clair ~6 milles, dans la brume ~100 m.</li>
<li>Une <b>chute de température</b> de l'eau ou de l'air annonce la glace.</li>
<li>La banquise se devine par l'<b>iceblink</b> (lueur jaune ou blanche) jusqu'à ~15 milles ; près d'elle, les vagues disparaissent.</li>
<li><b>Givrage</b> sous −2 °C avec embruns : le navire peut perdre sa stabilité et chavirer. Réduire la vitesse, s'abriter, casser la glace.</li></ul>
<h3>Organisation du trafic</h3>
<ul><li><b>DST</b> : voies à sens unique séparées par une zone ou une ligne. Créé souvent par l'<b>OMI</b>, géré par l'<b>État côtier</b>.</li>
<li><b>Rond-point</b> : on tourne dans le <b>sens inverse des aiguilles d'une montre</b>.</li>
<li><b>Zone de prudence</b>, <b>route en eau profonde</b>, route à double sens, zone à éviter.</li>
<li><b>STM / VTS</b> : service de trafic qui surveille et aide (points de compte rendu, parfois guidage radar).</li>
<li>Attention aux <b>points tournants GPS</b> communs : tout le monde passe au même endroit.</li></ul>
<h3>Comptes rendus (ex. MANCHEREP)</h3>
<p>Navires de plus de <b>300</b> de jauge brute dans le DST des Casquets (CROSS Jobourg). Appel <b>2 milles</b> avant d'entrer. Contenu : <b>nom, indicatif ou n° OMI, position, route et vitesse</b>, plus les avaries, pollutions, pertes de cargaison. Les moins de 300 s'annoncent s'ils sont NUC, RAM, mouillés dans le DST ou avec des aides à la navigation en panne.</p>
<h3>Homme mort</h3>
<p>Dès qu'un homme de quart est <b>seul</b> à la passerelle, l'alarme <b>homme mort</b> est activée.</p>`
    },
    {
      id: 'atterrissage', titre: 'L\'atterrissage et les alignements', src: 'Cours TDQ p. 28',
      html: `<p>L'<b>atterrissage</b>, c'est le passage de la navigation au large à la navigation côtière : reconnaître la côte.</p>
<ul><li>Choisir le <b>point et l'heure</b> : pas le soleil dans les yeux, de préférence de jour pour une côte difficile.</li>
<li>Tracer sur la carte la distance où l'on doit voir le phare, l'amer, la côte au radar, les sondes remarquables.</li>
<li>Préparer les <b>alignements</b> et relèvements, et les caractéristiques des feux.</li></ul>
<h3>Suivre un alignement</h3>
<div class="retenir"><p>Un alignement devient précis à partir d'une distance d'environ <b>7 fois l'écart</b> entre les deux marques.</p>
<p>S'il <b>« ouvre » à droite</b> (la marque avant passe à droite de l'arrière), on <b>vient à droite</b>. S'il ouvre à gauche, on vient à gauche.</p></div>
<p>On peut matérialiser l'alignement au radar (EBL / VRM) ou sur l'ECDIS. De nuit, les <b>secteurs colorés</b> des feux aident.</p>`
    },
    {
      id: 'detresse', titre: 'Répondre à une détresse', src: 'Cours TDQ p. 39 à 41',
      html: `<p>La <b>détresse</b> : danger grave et imminent qui demande une assistance immédiate (naufrage, abandon, homme à la mer, incendie, piraterie…). L'appel de détresse a <b>priorité absolue</b>.</p>
<ul><li>À la réception : couper ce qui peut brouiller, <b>veiller la fréquence</b> de l'alerte.</li>
<li>Le capitaine doit porter assistance <b>à toute vitesse</b> si c'est possible sans danger, <b>quelle que soit la nationalité</b> ou la situation des personnes.</li>
<li>S'il ne peut pas : il note la <b>raison au journal de bord</b> et prévient le service de sauvetage (MRCC / CROSS).</li>
<li>Le MRCC ou le capitaine en détresse peut <b>réquisitionner</b> un navire ; les autres sont libérés quand un navire est réquisitionné ou que le secours n'est plus nécessaire.</li>
<li>Les personnes recueillies sont traitées avec <b>humanité</b> et débarquées en lieu sûr au plus vite.</li></ul>
<p>Le <b>SMDSM</b> (en anglais GMDSS) relie navires, satellites et stations côtières pour acheminer automatiquement les alertes partout dans le monde.</p>`
    }
  ],
  cartes: [
    ['Quelle veille est la base de la navigation ?', 'La veille visuelle (optique), obligatoire.', 'veilles'],
    ['Pourquoi garder la porte sous le vent de la passerelle ouverte ?', 'Pour la veille auditive (entendre les signaux extérieurs).', 'veilles'],
    ['Quel radar est obligatoire et détecte les SART ?', 'Le radar bande X (9 GHz).', 'veilles'],
    ['Qu\'est-ce que le rôle de brume ?', 'La liste réglementaire des membres d\'équipage appelés en renfort de veille par visibilité réduite.', 'veilles'],
    ['Qui organise le quart et fixe l\'effectif ?', 'Le capitaine.', 'releve'],
    ['Peut-on passer le quart pendant une manœuvre d\'évitement ?', 'Non : on attend la fin de la manœuvre.', 'releve'],
    ['Que vérifie l\'officier de relève avant de prendre le quart ?', 'Point, route, cap, vitesse, consignes, marée, météo, appareils, erreurs des compas, navires en vue, dangers à venir. Et sa vision de nuit.', 'releve'],
    ['Quand prévenir le capitaine (3 exemples) ?', 'Visibilité réduite, amer ou sonde pas vu au moment prévu, panne de barre/machine, ou au moindre doute.', 'pratique'],
    ['En eaux côtières, quelle carte utiliser ?', 'La plus grande échelle disponible, à jour.', 'pratique'],
    ['Au mouillage, que surveille le quart passerelle ?', 'Que le navire ne chasse pas, machines dispo, météo, rondes, VHF, eaux autour, pollution.', 'mouillage'],
    ['Toutes les combien note-t-on le cap magnétique au journal ?', 'Toutes les heures.', 'documents'],
    ['Que contient le brouillon passerelle ?', 'La manœuvre : de l\'appel de l\'équipage à la route libre, et de la fin de route libre au terminé machine.', 'documents'],
    ['À quoi sert le cahier de variation ?', 'À noter les erreurs des compas gyro et magnétique (par alignement, soleil, étoiles).', 'documents'],
    ['Quel code encadre les consignes permanentes ?', 'Le Code ISM.', 'documents'],
    ['Conditions des documents nautiques ?', 'Officiels, dernière édition, corrigés du dernier groupe d\'Avis aux navigateurs.', 'preparation'],
    ['Échelle des cartes de catégorie 1 ?', '1/10 000 à 1/25 000 : pilotage côtier (entrées de port, mouillages).', 'preparation'],
    ['Catégorie 4 ?', 'Cartes d\'atterrissage, 1/300 000 à 1/500 000.', 'preparation'],
    ['À partir de quelle force un BMS est-il émis ?', 'Force 7 (répété toutes les heures).', 'preparation'],
    ['Comment reçoit-on la météo du large (200 milles) ?', 'NAVTEX et BLU.', 'preparation'],
    ['Pourquoi ne jamais prendre une bouée comme point tournant ?', 'Elle peut avoir bougé (ou disparu).', 'routes'],
    ['Distance minimale de la côte conseillée ?', '2 milles (risque de black-out).', 'routes'],
    ['Hauteur d\'eau minimale sous la quille conseillée ?', 'Au moins une fois le tirant d\'eau.', 'routes'],
    ['Qui approuve le plan de route ?', 'Le capitaine. Il est ensuite affiché à la passerelle.', 'routes'],
    ['Système géodésique du GPS ?', 'WGS 84.', 'appareillage'],
    ['Quand activer l\'alarme homme mort ?', 'Dès qu\'un homme de quart est seul à la passerelle.', 'situations'],
    ['Précision du chenalage en eaux resserrées ?', 'Environ 10 % de la distance au danger le plus proche.', 'situations'],
    ['Sens de rotation dans un rond-point de trafic ?', 'Sens inverse des aiguilles d\'une montre.', 'situations'],
    ['Qu\'est-ce que l\'iceblink ?', 'La lueur que renvoie la banquise, visible jusqu\'à ~15 milles.', 'situations'],
    ['Contenu d\'un compte rendu MANCHEREP ?', 'Nom, indicatif ou n° OMI, position, route et vitesse (+ avaries, pollution).', 'situations'],
    ['À partir de quelle distance un alignement est-il précis ?', 'Environ 7 fois l\'écart entre les deux marques.', 'atterrissage'],
    ['L\'alignement ouvre à droite : que faire ?', 'Venir à droite.', 'atterrissage'],
    ['Le capitaine ne peut pas porter assistance : que fait-il ?', 'Il note la raison au journal de bord et prévient le service de sauvetage.', 'detresse']
  ],
  qcm: [
    { q: 'Quelle veille est obligatoire et considérée comme fondamentale ?', r: ['La veille visuelle', 'La veille AIS', 'La veille olfactive', 'La veille environnementale'], e: 'Seule la vue détecte les petits objets, les cétacés, un homme à la mer.', f: 'veilles' },
    { q: 'Quelle bande radar détecte un répondeur SART ?', r: ['Bande X (9 GHz)', 'Bande S (3 GHz)', 'Bande VHF', 'Toutes les bandes'], e: 'Le SART répond sur 9 GHz.', f: 'veilles' },
    { q: 'Par visibilité réduite, lequel n\'est PAS demandé ?', r: ['Fermer toutes les portes de la passerelle', 'Appeler le capitaine', 'Appliquer le rôle de brume', 'Doubler la veille radar'], e: 'Au contraire : au moins une porte ouverte pour entendre.', f: 'veilles' },
    { q: 'Qui fixe l\'effectif de quart à la passerelle ?', r: ['Le capitaine', 'L\'armateur', 'Le chef mécanicien', 'Le pilote'], e: 'L\'organisation du quart lui appartient.', f: 'releve' },
    { q: 'Au moment de la relève, une manœuvre d\'évitement est en cours. On…', r: ['Attend la fin de la manœuvre', 'Passe le quart tout de suite', 'Appelle le pilote', 'Stoppe le navire'], e: 'Cours p. 6.', f: 'releve' },
    { q: 'L\'officier de relève ne prend le quart de nuit que…', r: ['Quand sa vision est adaptée à l\'obscurité', 'Après le café', 'Après avoir vu le capitaine', 'Quand le radar est éteint'], e: 'Adaptation à la vision nocturne.', f: 'releve' },
    { q: 'Tu n\'as pas vu le phare attendu à l\'heure prévue. Tu…', r: ['Préviens immédiatement le capitaine', 'Attends encore une heure', 'Changes de route sans rien dire', 'Notes juste au journal'], e: 'Cas n° 4 de la liste d\'appel du capitaine.', f: 'pratique' },
    { q: 'L\'officier de quart prévient le capitaine d\'un danger. Peut-il agir avant son arrivée ?', r: ['Oui, il doit agir tout de suite si la sécurité l\'exige', 'Non, jamais', 'Seulement avec l\'accord de l\'armateur', 'Seulement s\'il est seul'], e: 'Cours p. 9.', f: 'pratique' },
    { q: 'En eaux côtières, la carte à utiliser est…', r: ['La plus grande échelle disponible', 'La plus petite échelle', 'Un routier', 'N\'importe laquelle'], e: 'Plus de détails près des dangers.', f: 'pratique' },
    { q: 'Le radar en navigation…', r: ['Aide, mais ne remplace pas la vue directe', 'Remplace la veille visuelle', 'Est interdit près des côtes', 'Ne sert que par brume'], e: 'Cours p. 7, point 6.', f: 'pratique' },
    { q: 'Au mouillage, le principal risque surveillé par le quart est…', r: ['Que le navire chasse sur son ancre', 'La panne du radar', 'Le manque de carburant', 'La relève du pilote'], e: 'Radar, GPS, ECDIS, sondeur, relèvements.', f: 'mouillage' },
    { q: 'Le cap magnétique est noté au journal passerelle…', r: ['Toutes les heures', 'Toutes les 4 heures', 'Une fois par quart', 'Seulement aux changements de route'], e: 'Cours p. 10.', f: 'documents' },
    { q: 'Le « brouillon passerelle » couvre…', r: ['La manœuvre, de l\'appel de l\'équipage à la route libre', 'Uniquement la météo', 'Le plan de chargement', 'Les heures de repos'], e: 'Et de la fin de route libre au terminé machine.', f: 'documents' },
    { q: 'Les erreurs des compas sont notées dans…', r: ['Le cahier de variation', 'Le journal machine', 'Le plan de route', 'Le rôle d\'équipage'], e: 'Cours p. 11.', f: 'documents' },
    { q: 'Échelle d\'une carte de catégorie 1 (pilotage côtier) ?', r: ['1/10 000 à 1/25 000', '1/100 000 à 1/200 000', '1/300 000 à 1/500 000', '1/1 500 000'], e: 'Entrée des ports, mouillages, passes.', f: 'preparation' },
    { q: 'Carte de catégorie 3 ?', r: ['Cabotage, 1/100 000 à 1/200 000', 'Atterrissage', 'Pilotage côtier', 'Océanique'], e: 'Navigation côtière à 10-20 milles des dangers.', f: 'preparation' },
    { q: 'Quelle carte montre le plus de détails ?', r: ['Une carte au 1/10 000', 'Une carte au 1/500 000', 'Un routier au 1/10 000 000', 'Une carte océanique'], e: 'Grande échelle = petite zone, beaucoup de détails.', f: 'preparation' },
    { q: 'Un BMS est diffusé dès que le vent atteint…', r: ['Force 7', 'Force 5', 'Force 9', 'Force 12'], e: 'Puis répété toutes les heures.', f: 'preparation' },
    { q: 'Les bulletins pour la zone côtière (20 milles) passent par…', r: ['La VHF', 'Le SafetyNET', 'Le NAVTEX uniquement', 'L\'AIS'], e: 'Le large (200 milles) : NAVTEX et BLU. Grand large : SafetyNET.', f: 'preparation' },
    { q: 'Les documents nautiques doivent être corrigés avec…', r: ['Le dernier groupe d\'Avis aux navigateurs', 'Le journal de bord', 'Le plan de route', 'La fiche pilote'], e: 'Cours p. 13.', f: 'preparation' },
    { q: 'Quel élément ne doit JAMAIS servir de point tournant ?', r: ['Une bouée', 'Un phare', 'Un cap', 'Un sémaphore'], e: 'Une bouée peut dériver.', f: 'routes' },
    { q: 'Profondeur minimale conseillée pour la route ?', r: ['30 m', '10 m', '5 m', '100 m'], e: 'Pour éviter surcharge moteur et encrassement des filtres.', f: 'routes' },
    { q: 'Le plan de route devient officiel quand…', r: ['Le capitaine l\'approuve', 'Le pilote le signe', 'Il est entré dans le GPS', 'L\'agent le reçoit'], e: 'Le capitaine est maître du choix des routes.', f: 'routes' },
    { q: 'Les heures estimées de passage sont calculées…', r: ['Au moment de la route libre', 'La veille du départ', 'À l\'arrivée', 'Par le pilote'], e: 'Cours p. 19.', f: 'routes' },
    { q: 'Le GPS donne une position différente de l\'estime. L\'officier de quart…', r: ['Cherche l\'erreur pour lever le doute', 'Fait confiance au GPS', 'Ignore l\'estime', 'Éteint le GPS'], e: 'Mauvaise programmation du GPS ? mauvaise estime ? Il faut trouver.', f: 'routes' },
    { q: 'Le GPS travaille dans le système géodésique…', r: ['WGS 84', 'ED 50', 'NTF', 'Lambert 93'], e: 'Vérifier la compatibilité avec la carte.', f: 'appareillage' },
    { q: 'L\'alarme « homme mort » doit être activée…', r: ['Dès qu\'un homme de quart est seul à la passerelle', 'Uniquement la nuit', 'Uniquement au mouillage', 'Jamais en mer'], e: 'Cours p. 27.', f: 'situations' },
    { q: 'Dans un rond-point de trafic, on tourne…', r: ['Dans le sens inverse des aiguilles d\'une montre', 'Dans le sens des aiguilles d\'une montre', 'Au choix', 'Toujours vers le large'], e: 'Cours p. 25.', f: 'situations' },
    { q: 'En eaux resserrées, que prépare-t-on avant d\'entrer ?', r: ['Un point d\'abandon (abort position) et les ancres parées', 'Le rôle de brume', 'Le plan de chargement', 'Rien de spécial'], e: 'Plus les zones interdites et relèvements de garde.', f: 'situations' },
    { q: 'Le givrage des superstructures est dangereux car…', r: ['Le navire peut perdre sa stabilité et chavirer', 'Il bloque le radar seulement', 'Il fait baisser la vitesse', 'Il abîme la peinture'], e: 'Poids en hauteur.', f: 'situations' },
    { q: 'Compte rendu MANCHEREP : qui est obligé ?', r: ['Les navires de plus de 300 de jauge brute', 'Tous les navires', 'Les plus de 50 m seulement', 'Les navires à passagers seulement'], e: 'Les plus petits seulement dans certains cas (NUC, RAM…).', f: 'situations' },
    { q: 'Un alignement est précis à partir d\'une distance de…', r: ['7 fois l\'écart entre les marques', '2 fois l\'écart', '1 mille', '10 milles'], e: 'Cours p. 28.', f: 'atterrissage' },
    { q: 'En suivant un alignement, il « ouvre » à gauche. Tu…', r: ['Viens à gauche', 'Viens à droite', 'Stoppes', 'Gardes le cap'], e: 'Ouvre à gauche, venir à gauche.', f: 'atterrissage' },
    { q: 'Un capitaine reçoit une alerte de détresse mais ne peut pas aider. Il doit…', r: ['Noter la raison au journal et prévenir le MRCC', 'Ne rien faire', 'Couper sa VHF', 'Attendre l\'accord de l\'armateur'], e: 'Cours p. 39.', f: 'detresse' },
    { q: 'L\'obligation d\'assistance s\'applique…', r: ['Quelle que soit la nationalité des personnes', 'Seulement aux Français', 'Seulement aux marins', 'Seulement dans les eaux territoriales'], e: 'Sans condition de nationalité ni de statut.', f: 'detresse' }
  ]
});
