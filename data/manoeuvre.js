/* Manœuvre — module P1-1 */
C200.module({
  id: 'manoeuvre', bloc: 'P1-1', ordre: 4, court: 'MAN', titre: 'Manœuvre',
  intro: 'Homme à la mer, mauvais temps, amarrage, mouillage, remorquage, échouage et urgences. Évaluée à l\'écrit du module P1-1.',
  fiches: [
    {
      id: 'hom', titre: 'Homme à la mer : les trois manœuvres', src: 'Cours TDQ-Manœuvre p. 34-35 et 59',
      html: `<p>Premier réflexe : <b>barre toute du bord où l'homme est tombé</b>, pour éloigner l'hélice de lui. Crier « un homme à la mer », jeter une bouée, garder un œil sur lui, marquer la position (bouton MOB du GPS), pavillon <b>O</b>.</p>
<div class="tw"><table><tr><th>Manœuvre</th><th>Quand</th><th>Comment</th></tr>
<tr><td><b>Boutakov</b> (Williamson turn)</td><td>Nuit, mauvaise visibilité, alerte tardive</td><td>Barre toute du bord de la chute → à <b>60°</b> de la route, barre toute de l'autre bord → à <b>20°</b> de la route inverse, barre à zéro → on finit sur la <b>route inverse</b> (180°), l'homme droit devant.</td></tr>
<tr><td><b>Manœuvre simple</b> (single turn)</td><td><b>Action immédiate</b>, navire qui tourne court</td><td>Barre toute du bord de la chute → à <b>250°</b> de la route, barre à zéro et on commence à stopper. La plus <b>rapide</b>.</td></tr>
<tr><td><b>Scharnow</b></td><td><b>Pas</b> pour une action immédiate ; on doit connaître le temps écoulé</td><td>Barre toute → à <b>240°</b> de la route, barre toute de l'autre bord → à <b>20°</b> de la route inverse, barre à zéro. Ramène dans le sillage, distance plus courte.</td></tr></table></div>
<div class="retenir"><p><b>Boutakov : 60°</b> (la plus sûre, mais la plus longue). <b>Simple : 250°</b> (la plus rapide). <b>Scharnow : 240°</b> (retour dans le sillage).</p></div>
<p>Pour récupérer : se présenter <b>au vent</b> de la personne (le navire dérive vers elle et l'abrite). Si l'alerte est très tardive, revenir à 180° sur la route et prévenir le <b>MRCC/CROSS</b>. On n'arrête les recherches qu'avec le MRCC.</p>
<h3>Récupération (guide OMI, manuel IAMSAR)</h3>
<p>Filets, échelles, <b>Jason's Cradle</b>, radeau amarré le long du bord comme plate-forme, équipiers équipés, premiers soins prêts. Par gros temps, on peut filer de l'huile (pas de mazout près des naufragés).</p>`
    },
    {
      id: 'mauvaistemps', titre: 'Manœuvres par mauvais temps', src: 'Cours p. 36 à 38',
      html: `<p>Premier geste : <b>réduire la vitesse</b> en restant manœuvrant. Puis, si besoin, prendre une <b>allure de sauvegarde</b>.</p>
<h3>La cape</h3>
<p>Régler cap et vitesse pour réduire roulis et tangage : en général <b>40° à 60° du vent, sur l'avant</b>, juste assez vite pour gouverner. Bonne allure pour un navire à l'avant bien défendu.</p>
<p><b>Cape sèche</b> : voilier sans voiles ou petit moteur stoppé, à peu près vent de travers. Dangereuse pour un petit bateau sans quille (roulis, risque de chavirer sous une déferlante).</p>
<h3>La fuite vent arrière</h3>
<p>Possible seulement s'il y a <b>beaucoup d'eau libre sous le vent</b>. Garder la route <b>bien perpendiculaire aux lames</b>. On peut traîner un long cordage pour ne pas partir en travers.</p>
<h3>L'ancre flottante</h3>
<p>Un cône de toile ouvert, frappé à l'<b>avant</b>. Un navire sans propulsion se met en travers de la lame ; l'ancre flottante le garde <b>debout au vent</b>, il dérive en culant doucement.</p>
<h3>Le filage d'huile</h3>
<p>L'huile ne calme pas la houle, mais <b>empêche les lames de déferler</b>. Huiles <b>animales et végétales</b> les meilleures, produits lourds mieux que légers. Inefficace au-dessus de <b>4 nœuds</b> sur l'eau.</p>
<ul><li>Mer de l'avant : des deux bords, le plus à l'avant possible.</li>
<li>Mer de travers : au vent, à l'avant et par le travers.</li>
<li>Mer de l'arrière : à l'<b>avant</b> (elle s'étale vers l'arrière).</li>
<li>Pour s'approcher d'un navire qui dérive : le sauveteur file l'huile sous le vent de lui.</li></ul>`
    },
    {
      id: 'aussieres', titre: 'Les aussières et les amarres', src: 'Cours p. 42 à 49',
      html: `<p>Une <b>aussière</b> est un gros cordage (plus de 25 mm) pour l'amarrage et le remorquage.</p>
<ul><li><b>Synthétique tressée 8 brins</b> (polypropylène) : flotte, maniable, ne fait pas de coques. Élasticité jusqu'à <b>30 %</b>.</li>
<li><b>Câble d'acier</b> : plus fin à résistance égale, élasticité <b>1,5 %</b>, coule (danger pour l'hélice), dangereux à manipuler.</li>
<li><b>Mixte</b> : câble + <b>queue synthétique</b> (25 % plus résistante que le câble) pour absorber les à-coups.</li></ul>
<h3>Noms et rôles des amarres</h3>
<div class="tw"><table><tr><th>Amarre</th><th>Rôle</th></tr>
<tr><td><b>Pointe avant</b> (vers l'avant)</td><td>Empêche de <b>culer</b> (reculer)</td></tr>
<tr><td><b>Traversier avant</b></td><td>Empêche de <b>s'écarter</b> du quai</td></tr>
<tr><td><b>Garde montante avant</b> (part de l'avant vers l'arrière)</td><td>Empêche d'<b>avancer</b></td></tr>
<tr><td><b>Garde montante arrière</b> (part de l'arrière vers l'avant)</td><td>Empêche de <b>culer</b></td></tr>
<tr><td><b>Traversier arrière</b></td><td>Empêche de s'écarter</td></tr>
<tr><td><b>Pointe arrière</b> (vers l'arrière)</td><td>Empêche d'<b>avancer</b></td></tr></table></div>
<div class="retenir"><p>Les <b>pointes</b> partent vers l'extérieur, les <b>gardes</b> se croisent, les <b>traversiers</b> sont perpendiculaires. Une amarre empêche toujours le mouvement <b>opposé</b> à sa direction.</p></div>
<p>Astuce plaisance : diamètre des amarres (mm) ≈ longueur du bateau (m) + 2. Au moins 2 amarres de plus de 4 m.</p>
<h3>Types d'amarrage</h3>
<p>Le long du quai (4 amarres), <b>cul à quai</b> (avant sur coffre, ancre ou pendille), à couple d'un autre navire, sur catway, sur coffre.</p>`
    },
    {
      id: 'securite', titre: 'Sécurité des manœuvres d\'amarres', src: 'Cours p. 44-45',
      html: `<p>Les plages de manœuvre sont une cause fréquente d'<b>accidents graves</b>.</p>
<ul><li>Personnel <b>qualifié</b>, en nombre, avec <b>casque, gants, chaussures de sécurité</b>.</li>
<li>Pont <b>dégagé</b> et propre ; toulines prêtes ; bosses vérifiées.</li>
<li>Aussières <b>préparées à l'avance</b>, passées dans les chaumards, dans l'ordre (en général <b>garde d'abord</b>, puis les pointes).</li>
<li>Surveiller la <b>tension</b> : <b>choquer</b> (laisser filer en contrôlant) si le navire a encore de l'erre.</li></ul>
<div class="piege"><p>Une aussière qui casse <b>fouette</b> violemment (zone de « <b>snap back</b> »). Ne jamais rester dans l'axe d'une amarre en tension ni dans sa zone de fouet. Souvent, aucun signe avant la rupture.</p></div>
<p>Accidents classiques : doigts dans le treuil ou les chaumards, pied pris dans une boucle qui file.</p>`
    },
    {
      id: 'mouiller', titre: 'Le mouillage', src: 'Cours TDQ p. 31 et Manœuvre p. 50 à 53',
      html: `<h3>Choisir le mouillage</h3>
<ul><li>Abri du vent, de la houle, du courant ; <b>pas de câbles</b> ni canalisations.</li>
<li>Fond de <b>bonne tenue</b> (sable, vase), peu de pente, profondeur raisonnable.</li>
<li>Assez de place pour le <b>cercle d'évitage</b> sans talonner à basse mer.</li>
<li>Prévoir un mouillage de rechange.</li></ul>
<div class="piege"><p>Si la hauteur d'eau devient inférieure à <b>une fois le tirant d'eau</b>, les efforts sur la ligne sont <b>multipliés par 3</b>.</p></div>
<h3>Les 6 étapes</h3>
<ol><li><b>Paré à mouiller</b> : ancre au davier, pendue à la verticale.</li>
<li>Bateau <b>arrêté</b>, on laisse filer pour poser l'ancre.</li>
<li><b>À pic</b> : l'ancre touche le fond, l'étrave est à la verticale.</li>
<li><b>Filer</b> la chaîne à plat pendant que le bateau recule.</li>
<li><b>Faire tête</b> : on bloque, le bateau tire, l'ancre s'enfonce.</li>
<li><b>Régler</b> la longueur : au moins <b>3 fois la profondeur</b>.</li></ol>
<p>Le <b>cercle d'évitage</b> a pour rayon la longueur de la ligne + la longueur du bateau.</p>
<h3>Surveiller et relever</h3>
<p>Amers, segments capables, alarme de mouillage GPS/ECDIS, distances radar ; rondes à l'avant pour « écouter » la chaîne. Pour relever : moteur en route, remonter en avançant doucement au-dessus de l'ancre, la décrocher, la saisir et la ranger.</p>`
    },
    {
      id: 'remorquage', titre: 'Le remorquage', src: 'Cours p. 54 à 56',
      html: `<ul><li><b>En ligne</b> : l'un derrière l'autre, reliés par une remorque souple.</li>
<li><b>À couple</b> : côte à côte. Seulement par <b>beau temps, mer plate</b>. Pratique pour manœuvrer et prêter des pompes.</li></ul>
<p>Le point de traction doit permettre au remorqueur de <b>rester manœuvrant</b> : sur un vrai remorqueur, le croc est près du <b>milieu</b>. Sur un petit bateau, on grée une <b>patte d'oie</b> (V) sur le tableau arrière.</p>
<div class="retenir"><p>Par gros temps au large : remorque <b>longue</b>, fixée si possible sur la <b>chaîne d'ancre</b> du remorqué (son poids fait ressort). À l'approche du port : <b>raccourcir</b>.</p></div>
<p>Protéger les aussières contre le <b>ragage</b> (usure par frottement) : graisse, fourrures.</p>
<h3>Propulsions des remorqueurs</h3>
<p><b>Tuyère Kort</b> (anneau orientable autour de l'hélice), <b>Azipod</b> (nacelle orientable à moteur électrique), <b>Voith Schneider</b> (pales verticales).</p>
<p>Signaux : voir les feux de remorquage (RDB, règle 24) et les sons de brume (— • • pour le remorqueur, — • • • pour le remorqué).</p>`
    },
    {
      id: 'echouage', titre: 'Échouage, échouement et déséchouage', src: 'Cours p. 57-58 + programme',
      html: `<div class="retenir"><p><b>Échouage</b> = volontaire (on se pose exprès, souvent à marée descendante). <b>Échouement</b> = involontaire, c'est un accident.</p></div>
<h3>Échouage volontaire</h3>
<ul><li>Site abrité de la houle, fond de <b>sable ou vase</b> plat (pas de roche), pas en zone protégée.</li>
<li>Vérifier les <b>coefficients</b> : s'ils baissent, on risque de rester coincé des jours.</li>
<li>Relever le loch / sondeur, mouiller une <b>ancre arrière</b> avant de se poser, puis porter l'ancre avant.</li>
<li>Se poser dans l'<b>axe de la pente</b>.</li></ul>
<h3>Après un échouement (accident)</h3>
<ol><li><b>Stopper</b> la machine ; ne pas battre en arrière à l'aveugle (on peut aggraver une brèche ou aspirer du sable).</li>
<li>Prévenir le capitaine, sonner l'alarme si besoin, <b>feux et marques</b> d'échoué.</li>
<li>Faire le point : <b>sondes autour</b> du navire, sondage des <b>ballasts et cales</b> (voie d'eau ?), état de la marée (montante ou descendante).</li>
<li>Prévenir le <b>CROSS</b> ; noter tout au journal (base du <b>rapport de mer</b>).</li>
<li>Si la marée monte : attendre la pleine mer. Sinon : <b>alléger</b> (vider des ballasts, transférer des poids), porter une <b>ancre à jet</b> vers l'eau profonde, demander un remorquage.</li></ol>`
    },
    {
      id: 'urgences', titre: 'Gouverner en urgence et effets de l\'hélice', src: 'Programme C200 (manœuvre) + Guide du navigateur',
      html: `<h3>Moyens d'urgence pour gouverner</h3>
<ul><li><b>Appareil à gouverner de secours</b> (commande locale au local barre, pompe de secours) : il doit être <b>prêt</b> en eaux encombrées.</li>
<li>Petits navires : <b>barre franche de secours</b> sur la mèche du safran.</li>
<li>Sans gouvernail : gouverner aux <b>moteurs</b> (navire bimoteur), aux <b>propulseurs</b>, avec une <b>ancre flottante</b> ou un <b>aviron de fortune</b> traîné à l'arrière.</li></ul>
<h3>Effet de l'hélice (pas à droite)</h3>
<p>Une hélice à <b>pas à droite</b> tourne dans le sens des aiguilles d'une montre en marche avant (vue de l'arrière).</p>
<ul><li>En <b>marche arrière</b>, l'arrière part sur <b>bâbord</b> (et l'étrave vient sur tribord). C'est l'<b>effet de pas</b>, très fort au démarrage.</li>
<li>Conséquence : un navire à hélice à pas à droite s'accoste plus facilement <b>bâbord à quai</b> (le coup de marche arrière ramène l'arrière vers le quai).</li></ul>
<h3>Le vent et le navire stoppé</h3>
<p>Un navire stoppé se met souvent <b>en travers du vent</b>. En marche arrière, l'arrière a tendance à <b>remonter dans le vent</b>.</p>`
    }
  ],
  cartes: [
    ['Premier réflexe homme à la mer ?', 'Barre toute du bord où il est tombé (éloigner l\'hélice), bouée, crier, ne pas le quitter des yeux, marquer la position.', 'hom'],
    ['Manœuvre de Boutakov : les angles ?', 'Barre toute → à 60° de la route, barre toute de l\'autre bord → à 20° de la route inverse, barre à zéro.', 'hom'],
    ['Quand utiliser la Boutakov ?', 'De nuit, par mauvaise visibilité, ou si l\'alerte est tardive. La plus sûre mais la plus longue.', 'hom'],
    ['Manœuvre simple (single turn) ?', 'Barre toute du bord de la chute ; à 250°, barre à zéro et on stoppe. La plus rapide, pour une action immédiate.', 'hom'],
    ['Manœuvre de Scharnow ?', 'Barre toute ; à 240°, barre toute de l\'autre bord ; à 20° de la route inverse, barre à zéro. Retour dans le sillage. Pas pour une action immédiate.', 'hom'],
    ['De quel côté se présenter pour récupérer un naufragé ?', 'Au vent de lui (le navire dérive vers lui et l\'abrite).', 'hom'],
    ['Premier geste par mauvais temps ?', 'Réduire la vitesse en restant manœuvrant.', 'mauvaistemps'],
    ['Qu\'est-ce que la cape ?', 'Allure de sauvegarde : 40 à 60° du vent sur l\'avant, juste assez vite pour gouverner.', 'mauvaistemps'],
    ['Condition pour fuir vent arrière ?', 'Avoir beaucoup d\'eau libre sous le vent ; route perpendiculaire aux lames.', 'mauvaistemps'],
    ['À quoi sert une ancre flottante ?', 'Garder un navire sans propulsion debout au vent (pas en travers de la lame).', 'mauvaistemps'],
    ['Que fait l\'huile filée à la mer ?', 'Empêche les lames de déferler (ne calme pas la houle). Inefficace au-delà de 4 nœuds.', 'mauvaistemps'],
    ['Meilleures huiles pour filer ?', 'Animales et végétales (poisson).', 'mauvaistemps'],
    ['Élasticité d\'une aussière synthétique / d\'un câble d\'acier ?', 'Jusqu\'à 30 % / environ 1,5 %.', 'aussieres'],
    ['Rôle de la pointe avant ?', 'Empêche de culer.', 'aussieres'],
    ['Rôle de la garde montante avant ?', 'Empêche d\'avancer.', 'aussieres'],
    ['Rôle des traversiers ?', 'Empêcher le navire de s\'écarter du quai.', 'aussieres'],
    ['Qu\'est-ce que « choquer » une amarre ?', 'La laisser filer en la contrôlant.', 'securite'],
    ['Qu\'est-ce que la zone de snap back ?', 'La zone balayée par une aussière qui casse et fouette. Ne jamais y rester.', 'securite'],
    ['Longueur de chaîne minimale au mouillage ?', '3 fois la profondeur.', 'mouiller'],
    ['Rayon du cercle d\'évitage ?', 'Longueur de la ligne de mouillage + longueur du bateau.', 'mouiller'],
    ['Que veut dire « à pic » ?', 'L\'étrave est à la verticale de l\'ancre posée au fond.', 'mouiller'],
    ['Que veut dire « faire tête » ?', 'Bloquer la chaîne pour que le bateau tire et que l\'ancre s\'enfonce.', 'mouiller'],
    ['Hauteur d\'eau < 1 tirant d\'eau au mouillage : effet ?', 'Les efforts sur la ligne sont multipliés par 3.', 'mouiller'],
    ['Remorquage par gros temps : où fixer la remorque ?', 'Sur la chaîne d\'ancre du remorqué, avec une remorque longue.', 'remorquage'],
    ['Quand peut-on remorquer à couple ?', 'Par beau temps et mer plate.', 'remorquage'],
    ['Qu\'est-ce que le ragage ?', 'L\'usure d\'un cordage par frottement.', 'remorquage'],
    ['Échouage ou échouement ?', 'Échouage : volontaire. Échouement : accident.', 'echouage'],
    ['Après un échouement, que faire d\'abord ?', 'Stopper, prévenir, sonder autour et dans les compartiments, regarder la marée, prévenir le CROSS.', 'echouage'],
    ['Effet de pas d\'une hélice à pas à droite en marche arrière ?', 'L\'arrière part sur bâbord.', 'urgences'],
    ['Avec une hélice à pas à droite, quel bord accoster de préférence ?', 'Bâbord à quai.', 'urgences']
  ],
  qcm: [
    { q: 'Un homme tombe à tribord. Premier ordre à la barre ?', r: ['Barre toute à tribord', 'Barre toute à bâbord', 'Barre à zéro', 'Machine arrière toute'], e: 'Du bord de la chute, pour écarter l\'hélice.', f: 'hom' },
    { q: 'Dans la Boutakov, on change de bord à…', r: ['60° de la route initiale', '240° de la route initiale', '250°', '90°'], e: 'Puis barre à zéro à 20° de la route inverse.', f: 'hom' },
    { q: 'La manœuvre la plus rapide pour une action immédiate ?', r: ['La manœuvre simple (single turn)', 'La Boutakov', 'La Scharnow', 'La fuite vent arrière'], e: 'Tour complet, barre à zéro à 250°.', f: 'hom' },
    { q: 'Quelle manœuvre ne doit PAS servir en action immédiate ?', r: ['Scharnow', 'Manœuvre simple', 'Boutakov', 'Aucune'], e: 'Elle suppose de connaître le temps écoulé depuis la chute.', f: 'hom' },
    { q: 'De nuit, alerte donnée tardivement : quelle manœuvre ?', r: ['Boutakov', 'Manœuvre simple', 'Cape sèche', 'Mouiller'], e: 'Elle ramène sur la route inverse.', f: 'hom' },
    { q: 'Dans la Scharnow, on met la barre de l\'autre bord à…', r: ['240°', '60°', '250°', '180°'], e: 'Boutakov 60°, simple 250°, Scharnow 240°.', f: 'hom' },
    { q: 'Pour récupérer un naufragé, on se présente…', r: ['Au vent de lui', 'Sous le vent de lui', 'Par l\'arrière', 'À pleine vitesse'], e: 'Le navire dérive vers lui et lui fait un abri.', f: 'hom' },
    { q: 'La cape consiste à naviguer…', r: ['À 40-60° du vent sur l\'avant, à petite vitesse', 'Vent arrière à pleine vitesse', 'Vent de travers moteur stoppé', 'Au mouillage'], e: 'Cours p. 36.', f: 'mauvaistemps' },
    { q: 'La cape sèche est dangereuse surtout pour…', r: ['Un petit bateau sans quille', 'Un pétrolier', 'Un voilier à quille profonde', 'Un navire au mouillage'], e: 'Il roule dangereusement et peut chavirer.', f: 'mauvaistemps' },
    { q: 'L\'ancre flottante se fixe…', r: ['À l\'avant', 'À l\'arrière', 'Au milieu', 'En tête de mât'], e: 'Pour rester debout au vent.', f: 'mauvaistemps' },
    { q: 'Le filage d\'huile…', r: ['Empêche les lames de déferler', 'Calme la houle', 'Arrête le vent', 'Augmente la vitesse'], e: 'Il réduit l\'écrêtement des lames.', f: 'mauvaistemps' },
    { q: 'Au-dessus de quelle vitesse sur l\'eau le filage d\'huile est-il inefficace ?', r: ['4 nœuds', '10 nœuds', '1 nœud', '15 nœuds'], e: 'Cours p. 38.', f: 'mauvaistemps' },
    { q: 'Mer de l\'arrière : où filer l\'huile ?', r: ['À l\'avant', 'Uniquement à l\'arrière', 'Sous le vent seulement', 'Nulle part'], e: 'Elle s\'étend vers l\'arrière et protège aussi au largue.', f: 'mauvaistemps' },
    { q: 'Quelle aussière flotte et ne fait pas de coques ?', r: ['Synthétique tressée 8 brins', 'Câble d\'acier', 'Chanvre 3 torons', 'Chaîne'], e: 'Elle peut être lovée dans les deux sens.', f: 'aussieres' },
    { q: 'Pourquoi le câble d\'acier est-il risqué à l\'arrière ?', r: ['Il coule et peut se prendre dans l\'hélice', 'Il flotte trop', 'Il est trop élastique', 'Il casse au soleil'], e: 'Cours p. 42.', f: 'aussieres' },
    { q: 'Quelle amarre empêche le navire d\'avancer ?', r: ['La garde montante avant', 'La pointe avant', 'Le traversier avant', 'La garde montante arrière'], e: 'Elle part de l\'avant vers l\'arrière (et la pointe arrière aussi).', f: 'aussieres' },
    { q: 'Quelle amarre empêche le navire de culer ?', r: ['La pointe avant', 'La pointe arrière', 'Le traversier arrière', 'La garde montante avant'], e: 'Elle part vers l\'avant.', f: 'aussieres' },
    { q: 'Quelle amarre envoie-t-on en général en premier ?', r: ['La garde', 'Le traversier arrière', 'La pointe arrière', 'N\'importe laquelle'], e: 'Garde d\'abord, puis les pointes de l\'extérieur vers l\'intérieur.', f: 'securite' },
    { q: 'Où ne faut-il jamais se tenir pendant l\'amarrage ?', r: ['Dans l\'axe ou la zone de fouet d\'une amarre en tension', 'Près du capitaine', 'Sur le quai', 'Derrière le guindeau à l\'arrêt'], e: 'Zone de snap back.', f: 'securite' },
    { q: 'Longueur de chaîne minimale au mouillage ?', r: ['3 fois la profondeur', '1 fois la profondeur', '10 fois la profondeur', 'La longueur du bateau'], e: 'Cours p. 52.', f: 'mouiller' },
    { q: 'Dans les étapes du mouillage, « faire tête » c\'est…', r: ['Bloquer pour que l\'ancre s\'enfonce', 'Sortir l\'ancre du davier', 'Remonter l\'ancre', 'Mettre l\'étrave au vent au moteur'], e: 'Étape 5.', f: 'mouiller' },
    { q: 'Le rayon du cercle d\'évitage est…', r: ['La longueur de la ligne + la longueur du bateau', 'La profondeur', 'Deux fois la longueur du bateau', 'La longueur de la ligne seule'], e: 'Cours p. 52.', f: 'mouiller' },
    { q: 'Un bon fond de mouillage est plutôt…', r: ['Sable ou vase', 'Roche', 'Herbier protégé', 'Pente raide'], e: 'Bonne tenue, faible pente.', f: 'mouiller' },
    { q: 'Hauteur d\'eau inférieure au tirant d\'eau au mouillage : les efforts sont…', r: ['Multipliés par 3', 'Divisés par 2', 'Inchangés', 'Multipliés par 10'], e: 'Cours TDQ p. 31.', f: 'mouiller' },
    { q: 'Remorquage par gros temps au large : la remorque doit être…', r: ['Longue, si possible sur la chaîne d\'ancre du remorqué', 'Courte et tendue', 'En acier sans ressort', 'À couple'], e: 'Le poids de la chaîne amortit les à-coups.', f: 'remorquage' },
    { q: 'Le remorquage à couple est possible…', r: ['Par beau temps, mer plate', 'Par tempête', 'Uniquement de nuit', 'Uniquement au large'], e: 'Cours p. 56.', f: 'remorquage' },
    { q: 'Un petit bateau qui remorque reste manœuvrant grâce à…', r: ['Une patte d\'oie (V) sur le tableau arrière', 'Une remorque fixée en tête de mât', 'Un frein d\'hélice', 'Une ancre flottante'], e: 'Le point de traction coulisse.', f: 'remorquage' },
    { q: 'L\'échouement est…', r: ['Involontaire (accident)', 'Volontaire', 'Un mouillage sur deux ancres', 'Une manœuvre de port'], e: 'L\'échouage, lui, est volontaire.', f: 'echouage' },
    { q: 'Avant un échouage volontaire, on vérifie surtout…', r: ['Les coefficients de marée', 'Le niveau d\'huile', 'Le rôle d\'équipage', 'La VHF'], e: 'Si les coefficients baissent, on peut rester bloqué.', f: 'echouage' },
    { q: 'Juste après un échouement, il ne faut PAS…', r: ['Battre en arrière à fond tout de suite', 'Sonder autour du navire', 'Vérifier les compartiments', 'Prévenir le CROSS'], e: 'On évalue d\'abord (brèche, marée).', f: 'echouage' },
    { q: 'Hélice à pas à droite, marche arrière : l\'arrière part…', r: ['Sur bâbord', 'Sur tribord', 'Tout droit', 'Ça dépend du vent seulement'], e: 'Effet de pas.', f: 'urgences' },
    { q: 'Avec une hélice à pas à droite, on accoste de préférence…', r: ['Bâbord à quai', 'Tribord à quai', 'Cul à quai', 'Indifféremment'], e: 'La marche arrière ramène l\'arrière vers le quai.', f: 'urgences' }
  ]
});
