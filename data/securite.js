/* Sécurité — module P2-1 */
C200.module({
  id: 'securite', bloc: 'P2-1', ordre: 13, court: 'SÉCU', titre: 'Sécurité et pollution',
  intro: 'MARPOL (hydrocarbures, eaux usées, ordures, air), lutte contre la pollution, conventions de l\'OMI, abordage, échouement, avaries, passagers, abandon et recherche-sauvetage (IAMSAR). Écrit du module P2-1.',
  calculs: ['secu-rejet'],
  fiches: [
    {
      id: 'marpol', titre: 'La convention MARPOL', src: 'Cours C500 MARPOL p. 3 à 6',
      html: `<p>Après la convention <b>OILPOL</b> (1954), insuffisante, et une série de naufrages, l'OMI adopte la <b>convention MARPOL</b> le 2 novembre <b>1973</b>, complétée par le protocole de <b>1978</b> : MARPOL 73/78.</p>
<div class="tw"><table><tr><th>Annexe</th><th>Pollution par…</th></tr>
<tr><td><b>I</b></td><td>Hydrocarbures</td></tr><tr><td><b>II</b></td><td>Substances liquides nocives transportées en vrac</td></tr><tr><td><b>III</b></td><td>Substances nuisibles en colis</td></tr><tr><td><b>IV</b></td><td>Eaux usées</td></tr><tr><td><b>V</b></td><td>Ordures</td></tr><tr><td><b>VI</b></td><td>Pollution de l'air</td></tr></table></div>
<p>Elle ne s'applique pas aux <b>navires de guerre</b> et navires d'État non commerciaux. Une infraction est sanctionnée par l'<b>État du pavillon</b>, où qu'elle ait lieu. Dans un port étranger, le <b>contrôle par l'État du port</b> peut empêcher le navire d'appareiller si l'équipage ne connaît pas les procédures.</p>
<h3>Rendre compte</h3>
<p>Un rapport est obligatoire pour tout rejet (ou risque de rejet) au-delà de ce qui est permis, et pour toute avarie d'un navire de <b>15 m et plus</b> qui menace sa sécurité ou celle de la navigation. Il est envoyé à l'<b>État côtier le plus proche</b>, par le moyen le plus rapide, avec la plus haute priorité.</p>
<p>Contenu : <b>identité</b> des navires, <b>heure, nature et lieu</b> de l'événement, <b>quantité et type</b> de produit, <b>mesures</b> d'assistance et de sauvetage.</p>
<h3>Zone spéciale</h3>
<p>Zone où des règles plus strictes s'appliquent (océanographie, écologie, trafic). La <b>Méditerranée</b> en est une : limitée au parallèle 41° N côté mer Noire et au méridien 5°36' W à Gibraltar.</p>`
    },
    {
      id: 'hydrocarbures', titre: 'Annexe I : les hydrocarbures', src: 'Cours C500 MARPOL p. 6 à 9',
      html: `<h3>Rejet des eaux de cale machine (hors zone spéciale)</h3>
<p>Interdit, sauf si <b>toutes</b> ces conditions sont réunies :</p>
<ul><li>le navire <b>fait route</b> ;</li><li>le mélange passe par un <b>matériel de filtrage</b> approuvé (séparateur) ;</li><li>teneur de l'effluent : <b>15 ppm au plus</b> ;</li><li>pour un pétrolier : pas d'eau des bouchains de la chambre des pompes, pas de mélange avec des résidus de cargaison.</li></ul>
<p>Navires de moins de 400 UMS : même chose, ou bien on garde tout à bord pour un dépôt à terre.</p>
<div class="formule">En route · filtré · ≤ 15 ppm</div>
<h3>Exceptions</h3>
<p>Rejet pour la <b>sécurité du navire</b> ou pour <b>sauver des vies</b> ; rejet dû à une <b>avarie</b> si toutes les précautions ont été prises (sauf intention de nuire ou témérité) ; rejet approuvé pour lutter contre une pollution.</p>
<h3>Registre des hydrocarbures, partie I (machine)</h3>
<p>Obligatoire pour les pétroliers de <b>150 UMS</b> et plus et les autres navires de <b>400 UMS</b> et plus. On y note : ballastage ou nettoyage des soutes, rejet d'eaux de ballast sales, élimination des <b>boues</b>, rejet des eaux de cale, <b>soutage</b> de combustible ou d'huile, tout rejet accidentel et toute panne du filtre. Conservé <b>3 ans</b> à bord. L'État du port peut le contrôler et en faire certifier des copies par le capitaine.</p>
<h3>Plan d'urgence de bord (SOPEP)</h3>
<p>Dans la langue de travail : procédure pour <b>signaler</b> une pollution, <b>liste des contacts</b>, <b>mesures immédiates</b> pour limiter le déversement, coordination avec les autorités.</p>`
    },
    {
      id: 'eauxusees', titre: 'Annexe IV : les eaux usées', src: 'Cours C500 MARPOL p. 9 à 12',
      html: `<p>Concerne les navires en voyage international de <b>400 UMS</b> et plus, ou de moins de 400 UMS autorisés à transporter <b>plus de 15 personnes</b>.</p>
<p>Équipement : une <b>installation de traitement</b> approuvée, ou un <b>dispositif de broyage et de désinfection</b> (avec stockage près des côtes), ou une <b>citerne de stockage</b> avec indicateur de niveau.</p>
<div class="tw"><table><tr><th>Eaux usées</th><th>Rejet possible</th></tr>
<tr><td><b>Broyées et désinfectées</b></td><td>À plus de <b>3 M</b> de la terre</td></tr>
<tr><td><b>Non traitées</b></td><td>À plus de <b>12 M</b>, à débit modéré, navire en route à <b>4 nœuds</b> au moins</td></tr>
<tr><td>Installation de traitement agréée</td><td>Pas de solides flottants visibles ni de décoloration de l'eau</td></tr></table></div>
<p>Navires à passagers en <b>zone spéciale</b> : rejet interdit, sauf installation de traitement agréée. Tous les navires concernés ont une <b>bride de raccordement normalisée</b> pour vider à terre.</p>`
    },
    {
      id: 'ordures', titre: 'Annexe V : les ordures', src: 'Cours C500 MARPOL p. 12 à 16',
      html: `<p>Principe : <b>tout rejet d'ordures est interdit</b>, sauf exceptions. Toujours interdits : les <b>plastiques</b> (cordages, filets synthétiques, sacs, cendres de plastique) et l'<b>huile de friture</b>.</p>
<div class="tw"><table><tr><th>Ordure</th><th>Hors zone spéciale</th><th>En zone spéciale</th></tr>
<tr><td>Déchets alimentaires <b>broyés</b> (tamis 25 mm)</td><td>À plus de <b>3 M</b></td><td>À plus de <b>12 M</b>, non mélangés</td></tr>
<tr><td>Déchets alimentaires <b>non broyés</b></td><td>À plus de <b>12 M</b></td><td>Interdit</td></tr>
<tr><td>Résidus de cargaison non nuisibles</td><td>À plus de 12 M</td><td>Conditions très strictes, 12 M</td></tr>
<tr><td>Carcasses d'animaux</td><td>Le plus loin possible</td><td>—</td></tr>
<tr><td>Plastiques, huile de friture</td><td colspan="2"><b>Toujours interdit</b></td></tr></table></div>
<p>Toujours <b>navire en route</b> et le plus loin possible de la terre. Si des ordures sont mélangées, la règle <b>la plus stricte</b> s'applique.</p>
<h3>Affiches, plan, registre</h3>
<div class="tw"><table><tr><th>Obligation</th><th>Navires concernés</th></tr>
<tr><td><b>Affiches</b> (langue de travail + anglais, espagnol ou français en voyage international)</td><td>Longueur hors tout de <b>12 m</b> et plus</td></tr>
<tr><td><b>Plan de gestion des ordures</b></td><td><b>100 UMS</b> et plus, ou <b>15 personnes</b> et plus</td></tr>
<tr><td><b>Registre des ordures</b></td><td><b>400 UMS</b> et plus, ou 15 personnes et plus (voyages internationaux)</td></tr></table></div>
<p>Chaque rejet ou incinération est noté : <b>date, heure, position, catégorie, quantité</b>, signé par l'officier ; chaque page signée par le <b>capitaine</b>. Conservé <b>2 ans</b>. La perte d'engins de pêche dangereux est signalée à l'État du pavillon (et à l'État côtier).</p>`
    },
    {
      id: 'air', titre: 'Annexe VI : la pollution de l\'air', src: 'Cours C500 MARPOL p. 16 à 19',
      html: `<h3>Substances qui appauvrissent la couche d'ozone (SAO)</h3>
<p>Toute <b>émission délibérée</b> est interdite (y compris pendant l'entretien d'une installation frigorifique). Installations interdites : SAO (sauf HCFC) sur les navires construits depuis le <b>19 mai 2005</b> ; HCFC depuis le <b>1er janvier 2020</b>. Le navire tient une <b>liste du matériel</b> et un <b>registre des SAO</b> (masse en kg à chaque recharge, réparation, émission).</p>
<h3>Échappements des moteurs (NOx)</h3>
<p>Concerne chaque moteur diesel de plus de <b>130 kW</b>. Ne concerne pas les moteurs de secours, ceux des embarcations de sauvetage, ni ceux des navires qui restent dans les eaux de leur pavillon.</p>
<h3>À savoir aussi (hors support)</h3>
<p>Annexe VI limite aussi le <b>soufre</b> du combustible : 0,50 % partout depuis 2020, 0,10 % dans les zones de contrôle des émissions (ECA). La Méditerranée est une zone ECA pour le soufre depuis le 1er mai 2025.</p>`
    },
    {
      id: 'lutte', titre: 'La lutte contre la pollution en France', src: 'Cours C500 MARPOL p. 19 à 23',
      html: `<h3>Prévenir</h3>
<ul><li>Contrôles des navires par les <b>centres de sécurité</b> et par l'État du port (mémorandum de Paris, 1982).</li><li>Les navires transportant des hydrocarbures se signalent en entrant dans les eaux territoriales ou en cas d'avarie à moins de 50 M.</li><li>Ces navires ne peuvent pas naviguer à <b>moins de 7 M</b> des côtes (sauf chenaux d'accès). Le rail d'<b>Ouessant</b> a été repoussé pour éloigner les navires dangereux (27 M).</li></ul>
<h3>Surveiller et intervenir</h3>
<p>Les <b>CROSS</b> coordonnent le sauvetage, surveillent la navigation (rails) et les pollutions ; les <b>sémaphores</b> de la Marine nationale veillent à vue et au radar. Le <b>préfet maritime</b> dispose de remorqueurs d'intervention et peut <b>imposer</b> une assistance ; des équipes d'évaluation sont héliportées à bord des navires en difficulté.</p>
<h3>Qui dirige la lutte ?</h3>
<div class="tw"><table><tr><th>Où</th><th>Responsable</th><th>Plan</th></tr>
<tr><td>En mer</td><td><b>Préfet maritime</b></td><td><b>POLMAR-Mer</b></td></tr>
<tr><td>À terre (littoral)</td><td><b>Préfet</b> du département</td><td><b>POLMAR-Terre</b></td></tr></table></div>
<p>Le <b>CEDRE</b> (Brest) conseille les autorités et améliore les techniques. Stocks de matériel POLMAR répartis sur le littoral ; avions des Douanes pour repérer les nappes.</p>
<h3>Les moyens</h3>
<p>En mer : <b>confiner</b> (barrages), <b>récupérer</b> mécaniquement (récupérateurs, citernes souples), et seulement au large et dans certaines conditions, <b>disperser</b> (dispersants). À la côte : barrages devant les sites sensibles, absorbants, ramassage sur les plages.</p>
<p>À bord, au premier signe de fuite : arrêter l'opération (soutage), boucher les dalots, absorbants du kit SOPEP, prévenir.</p>
<p>Grandes marées noires : <b>Torrey Canyon</b> (1967), <b>Amoco Cadiz</b> (1978), <b>Exxon Valdez</b> (1989).</p>`
    },
    {
      id: 'conventions', titre: 'Les conventions de l\'OMI', src: 'Programme P2-1 (cours Respect de la réglementation)',
      html: `<p>L'<b>OMI</b> (Organisation maritime internationale, Londres) rédige les conventions ; chaque État les applique à ses navires (État du pavillon) et contrôle les navires étrangers dans ses ports (État du port).</p>
<div class="tw"><table><tr><th>Convention</th><th>Objet</th></tr>
<tr><td><b>SOLAS</b> 1974</td><td>Sauvegarde de la vie humaine en mer : construction, incendie, engins de sauvetage, radio, sécurité de la navigation, ISM, sûreté.</td></tr>
<tr><td><b>MARPOL</b> 73/78</td><td>Pollution par les navires.</td></tr>
<tr><td><b>COLREG</b> 1972</td><td>Le RIPAM (règles de barre).</td></tr>
<tr><td><b>STCW</b> 1978</td><td>Formation, brevets, veille.</td></tr>
<tr><td><b>Lignes de charge</b> 1966</td><td>Franc-bord.</td></tr>
<tr><td><b>SAR</b> 1979</td><td>Recherche et sauvetage (MRCC, zones SAR).</td></tr>
<tr><td><b>Jaugeage</b> 1969</td><td>Jauge brute et nette (UMS).</td></tr>
<tr><td><b>MLC</b> 2006 (OIT)</td><td>Travail maritime : conditions de vie et de travail des gens de mer.</td></tr></table></div>
<h3>Le code ISM (SOLAS chapitre IX)</h3>
<p>Gestion de la sécurité : la compagnie met en place un <b>système de gestion de la sécurité</b> (SGS) : procédures écrites, exercices, rapports d'incidents, et une <b>personne désignée à terre</b> qui fait le lien avec la direction. Certificats : <b>DOC</b> pour la compagnie, <b>SMC</b> pour le navire. Obligatoire pour les navires à passagers et les navires de charge de 500 UMS et plus en voyage international.</p>
<h3>Le code ISPS (SOLAS chapitre XI-2)</h3>
<p>Sûreté (contre les actes illicites : terrorisme, intrusion, piraterie). Trois <b>niveaux de sûreté</b> : 1 normal, 2 renforcé, 3 exceptionnel. Plan de sûreté du navire, <b>agent de sûreté du navire</b> (SSO) et de la compagnie (CSO), système d'<b>alerte de sûreté</b> discret (SSAS).</p>
<h3>Le SMDSM (GMDSS)</h3>
<p>Le système mondial de détresse : zones <b>A1</b> (VHF ASN), <b>A2</b> (MF), <b>A3</b> (satellites géostationnaires), <b>A4</b> (zones polaires). Balise de détresse (RLS), transpondeur radar (SART) ou AIS-SART, NAVTEX.</p>`
    },
    {
      id: 'abordage', titre: 'Après un abordage', src: 'Cours DCSS p. 77-78',
      html: `<ol>
<li><b>Stopper</b> la propulsion, prévenir le capitaine, <b>alarme générale</b>.</li>
<li>Manœuvrer pour limiter les effets de la collision ; faire un <b>point précis</b>.</li>
<li>Fermer <b>portes étanches</b>, portes coupe-feu, panneaux, sabords et hublots.</li>
<li>Montrer les <b>feux et marques</b> ; signaux sonores si visibilité réduite ; de nuit, éclairer les ponts (sans masquer les feux).</li>
<li><b>Contrôler les avaries</b> : sonder les mailles, soutes et ballasts autour de l'impact.</li>
<li>Pas de danger (tôles peu déformées, pas de déchirure) : message d'<b>urgence</b> (ASN canal 70, phonie canal 16). Navire en danger (déchirure, voie d'eau à la flottaison ou dessous) : message de <b>détresse</b> en précisant l'aide demandée.</li>
<li>Veille VHF 16 (et 13 pour l'opération SAR).</li>
<li><b>Passagers</b> rassemblés aux postes de rassemblement en premier lieu.</li>
<li>Incendie ou voie d'eau : procédures correspondantes. Si possible, proposer l'<b>assistance à l'autre navire</b>.</li></ol>
<h3>Ensuite</h3>
<p>Échanger avec l'autre capitaine : nom, nationalité, port d'attache, compagnie et siège, ports de départ et de destination, nom du capitaine. Activer la <b>cellule de crise</b> de l'armement. À l'arrivée : <b>dépôt et affirmation du rapport de mer</b>, requête en nomination d'expert.</p>
<div class="retenir"><p>Après un abordage, chaque capitaine doit tout faire pour <b>sauver l'autre navire</b>, son équipage et ses passagers, sauf danger pour son propre navire. Sans abordage, l'assistance n'est due qu'aux <b>personnes</b> en danger de se perdre.</p></div>`
    },
    {
      id: 'echouement', titre: 'Après un échouement', src: 'Cours DCSS p. 80-81',
      html: `<ol>
<li><b>Stopper</b> les machines, prévenir le capitaine, alarme générale, <b>point précis</b>.</li>
<li>Fermer portes étanches, coupe-feu, panneaux, hublots ; <b>feux et marques</b> d'échoué, signaux sonores si brume, éclairage des ponts.</li>
<li>Message d'<b>urgence</b> (SMDSM) ; de <b>détresse</b> si le navire est en danger.</li>
<li><b>Avaries</b> : sonder mailles, cofferdams, soutes, ballasts, puisards ; ronde des fonds.</li>
<li><b>Sonder autour</b> du navire, lire les tirants d'eau (calculer la tranche d'émersion), connaître la <b>nature du fond</b> (carte, plomb suiffé).</li>
<li>Suivre la <b>météo</b> et la <b>marée</b> (heures de PM et BM, coefficients). Cellule de crise de l'armement.</li>
<li>Penser à la <b>stabilité</b> : équilibrer en ballastant.</li></ol>
<h3>Se déséchouer</h3>
<p>Seulement si tout est favorable (hélices claires, fond de sable ou vase, faible tranche d'émersion, beau temps, <b>pleine mer</b>) : battre en arrière demie, puis toute, <b>une minute au plus</b>.</p>
<p>Sinon, préparer la suite : marées à venir, <b>allègement</b> (attention à la stabilité), <b>remorquage</b> (préparer les remorques avant et arrière). La <b>souille</b> se creuse avec le temps.</p>
<p>Par mauvais temps sur fond meuble : <b>ballaster</b> pour plaquer le navire au fond, sinon il « ballotte » et la coque se fatigue.</p>
<div class="piege"><p>Ne pas battre en arrière à fond tout de suite : on évalue d'abord la brèche et la marée.</p></div>`
    },
    {
      id: 'avaries', titre: 'Avaries et voie d\'eau : évaluer et maîtriser', src: 'Programme P2-1 (complément)',
      html: `<h3>Évaluation initiale</h3>
<ul><li>Donner l'<b>alarme</b>, rassembler l'équipe d'intervention, prévenir le capitaine.</li><li><b>Localiser</b> : sondages, ronde des compartiments, alarmes de niveau, bruits, gîte ou assiette anormale.</li><li><b>Évaluer</b> : taille de la brèche, vitesse de montée de l'eau, compartiments touchés, risque pour la stabilité.</li></ul>
<h3>Maîtriser</h3>
<ul><li><b>Isoler</b> : fermer portes étanches et vannes, couper l'électricité dans la zone noyée.</li><li><b>Colmater</b> : bouchons, paillet, coussins, étais, caisson de ciment ; réduire la vitesse ou présenter le bord avarié sous le vent.</li><li><b>Assécher</b> : pompes de cale, pompes mobiles.</li><li><b>Surveiller la stabilité</b> : carène liquide, gîte ; corriger en ballastant.</li><li>Rendre compte au <b>CROSS</b> ; préparer l'abandon si la situation se dégrade.</li></ul>`
    },
    {
      id: 'passagers', titre: 'Protéger les passagers en situation d\'urgence', src: 'Programme P2-1 (complément, formation navires à passagers)',
      html: `<ul>
<li><b>Informer</b> tôt, calmement, par des annonces courtes et claires ; le personnel donne l'exemple.</li>
<li>Les guider vers les <b>postes de rassemblement</b> par les itinéraires balisés ; personnel aux points clés (escaliers, coursives).</li>
<li>Distribuer et faire capeler les <b>brassières</b>, vêtements chauds ; vérifier.</li>
<li><b>Compter</b> les personnes (liste des passagers) et rechercher les manquants (cabines, sanitaires).</li>
<li>Aider les personnes à <b>mobilité réduite</b>, les enfants, les personnes paniquées ; empêcher les mouvements de foule.</li>
<li>Pas d'ascenseurs ; garder les portes coupe-feu et étanches fermées.</li>
<li>Embarquer dans les engins de sauvetage seulement <b>sur ordre du capitaine</b>.</li></ul>
<h3>Le rôle d'abandon (exemple du cours)</h3>
<p>Signal d'<b>alarme générale</b> (7 sons brefs et 1 long) + diffusion générale : chacun rejoint son embarcation. La combinaison de survie n'est capelée que sur ordre du capitaine. Le capitaine s'occupe de <b>toutes les communications de détresse</b>. L'abandon est <b>décidé par le capitaine</b> (ou son représentant) et confirmé de vive voix.</p>
<p>Chacun a un rôle : documents du navire et de la machine, VHF, <b>RLS</b> (balise), <b>transpondeur radar</b>, mise à l'eau, appel, barre, moteur de l'embarcation, <b>bouchons de nable</b>, largage des crocs, nourriture et couvertures, débranchement des batteries.</p>`
    },
    {
      id: 'iamsar', titre: 'Recherche et sauvetage : le manuel IAMSAR', src: 'Programme P2-1 (cours IAMSAR)',
      html: `<p>Manuel international de recherche et de sauvetage aéronautiques et maritimes (OMI et OACI), en 3 volumes : <b>I</b> organisation, <b>II</b> coordination des missions, <b>III</b> moyens mobiles. Le <b>volume III</b> doit être à bord.</p>
<h3>Qui fait quoi</h3>
<div class="tw"><table><tr><th>Sigle</th><th>Rôle</th></tr>
<tr><td><b>MRCC</b> (en France : <b>CROSS</b>)</td><td>Centre de coordination du sauvetage ; reçoit l'alerte, organise.</td></tr>
<tr><td><b>SMC</b></td><td>Coordonnateur de mission SAR (au MRCC).</td></tr>
<tr><td><b>OSC</b></td><td>Coordonnateur sur zone (souvent le premier navire arrivé, désigné par le MRCC).</td></tr>
<tr><td><b>ACO</b></td><td>Coordonnateur des aéronefs.</td></tr></table></div>
<h3>Recevoir une alerte de détresse</h3>
<ol><li>Accuser réception (après la station côtière en VHF ASN), noter position et nature de la détresse.</li><li>Prévenir le <b>MRCC/CROSS</b>, relayer si besoin.</li><li>Se dérouter à toute vitesse sans danger, veille radio permanente (16), radar et vigies.</li><li>Préparer le bord : moyens de récupération (échelles, filets, ligne de jet), soins, embarcation.</li></ol>
<h3>Les méthodes de recherche</h3>
<div class="tw"><table><tr><th>Méthode</th><th>Quand</th></tr>
<tr><td><b>Carré croissant</b> (expanding square)</td><td>Position assez bien connue, petite zone ; un seul navire.</td></tr>
<tr><td><b>Secteurs</b> (sector search)</td><td>Position précise (homme à la mer, point marqué).</td></tr>
<tr><td><b>Parallèles</b> (parallel sweep)</td><td>Grande zone, position incertaine ; plusieurs navires.</td></tr>
<tr><td><b>Route suivie</b> (track line)</td><td>Disparu sur une route connue.</td></tr></table></div>
<p>Phases d'urgence : <b>incertitude</b>, <b>alerte</b>, <b>détresse</b>. On ne cesse les recherches qu'avec l'accord du MRCC.</p>`
    }
  ],
  cartes: [
    ['MARPOL : date et protocole ?', '2 novembre 1973, protocole de 1978 (MARPOL 73/78).', 'marpol'],
    ['Les 6 annexes de MARPOL ?', 'I hydrocarbures, II liquides nocifs en vrac, III substances en colis, IV eaux usées, V ordures, VI air.', 'marpol'],
    ['À qui envoyer un rapport de pollution ?', 'À l\'État côtier le plus proche, par le moyen le plus rapide.', 'marpol'],
    ['Contenu d\'un rapport de pollution ?', 'Identité des navires ; heure, nature, lieu ; quantité et type ; mesures d\'assistance.', 'marpol'],
    ['Limites de la Méditerranée (zone spéciale) ?', '41° N côté mer Noire, 5°36\' W à Gibraltar.', 'marpol'],
    ['Conditions du rejet des eaux de cale (annexe I) ?', 'En route, filtré par un séparateur approuvé, 15 ppm au plus.', 'hydrocarbures'],
    ['Registre des hydrocarbures partie I : qui ?', 'Pétroliers ≥ 150 UMS, autres navires ≥ 400 UMS.', 'hydrocarbures'],
    ['Durée de conservation du registre des hydrocarbures ?', '3 ans.', 'hydrocarbures'],
    ['Exceptions au rejet interdit ?', 'Sécurité du navire ou sauvetage de vies ; avarie avec précautions prises ; lutte approuvée.', 'hydrocarbures'],
    ['SOPEP ?', 'Plan d\'urgence de bord contre la pollution : signaler, contacts, mesures immédiates, coordination.', 'hydrocarbures'],
    ['Eaux usées broyées et désinfectées ?', 'Rejet à plus de 3 M.', 'eauxusees'],
    ['Eaux usées non traitées ?', 'À plus de 12 M, débit modéré, en route à 4 nd au moins.', 'eauxusees'],
    ['Annexe IV : navires concernés ?', '400 UMS et plus, ou plus de 15 personnes (voyages internationaux).', 'eauxusees'],
    ['Ordures toujours interdites ?', 'Plastiques (sacs, cordages, filets, cendres) et huile de friture.', 'ordures'],
    ['Déchets alimentaires hors zone spéciale ?', 'Broyés : plus de 3 M. Non broyés : plus de 12 M.', 'ordures'],
    ['Déchets alimentaires en zone spéciale ?', 'Broyés seulement, à plus de 12 M.', 'ordures'],
    ['Plan de gestion des ordures : qui ?', '100 UMS et plus, ou 15 personnes et plus.', 'ordures'],
    ['Registre des ordures : conservation ?', '2 ans ; chaque page signée par le capitaine.', 'ordures'],
    ['Affiches MARPOL ordures : à partir de ?', '12 m de longueur hors tout.', 'ordures'],
    ['Moteurs concernés par les NOx (annexe VI) ?', 'Diesels de plus de 130 kW.', 'air'],
    ['Interdiction des installations à HCFC ?', 'Navires construits depuis le 1er janvier 2020.', 'air'],
    ['Qui dirige la lutte antipollution en mer ? À terre ?', 'Préfet maritime (POLMAR-Mer) ; préfet de département (POLMAR-Terre).', 'lutte'],
    ['Le CEDRE ?', 'Centre de documentation, de recherche et d\'expérimentations sur les pollutions accidentelles des eaux (Brest) : conseille et forme.', 'lutte'],
    ['Distance minimale des côtes pour les navires d\'hydrocarbures ?', '7 M (sauf chenaux d\'accès).', 'lutte'],
    ['Code ISM : certificats ?', 'DOC pour la compagnie, SMC pour le navire.', 'conventions'],
    ['Code ISPS : niveaux ?', '1 normal, 2 renforcé, 3 exceptionnel.', 'conventions'],
    ['STCW ?', 'Convention sur la formation, les brevets et la veille.', 'conventions'],
    ['Zones SMDSM ?', 'A1 VHF, A2 MF, A3 satellites géostationnaires, A4 polaires.', 'conventions'],
    ['Abordage, navire en danger : quel message ?', 'Détresse, en précisant l\'assistance demandée.', 'abordage'],
    ['Abordage sans danger pour le navire ?', 'Message d\'urgence (ASN 70, phonie 16).', 'abordage'],
    ['Renseignements à échanger après abordage ?', 'Nom, nationalité, port d\'attache, compagnie, ports de départ et destination, nom du capitaine.', 'abordage'],
    ['Assistance après abordage ?', 'Obligatoire envers l\'autre navire, son équipage et ses passagers, sauf danger pour le sien.', 'abordage'],
    ['Tentative de déséchouement : conditions ?', 'Hélices claires, fond meuble, faible tranche d\'émersion, beau temps, pleine mer ; arrière demie puis toute, 1 min max.', 'echouement'],
    ['Échoué par mauvais temps sur fond meuble ?', 'Ballaster pour plaquer le navire et éviter qu\'il ballotte.', 'echouement'],
    ['La souille ?', 'Le creux que fait le navire dans le fond ; elle s\'approfondit avec le temps.', 'echouement'],
    ['Voie d\'eau : 3 actions ?', 'Isoler (portes, vannes), colmater, assécher, en surveillant la stabilité.', 'avaries'],
    ['Signal d\'alarme générale ?', '7 sons brefs et 1 son long.', 'passagers'],
    ['Qui décide l\'abandon du navire ?', 'Le capitaine (ou son représentant), confirmé de vive voix.', 'passagers'],
    ['Volume IAMSAR à bord ?', 'Le volume III (moyens mobiles).', 'iamsar'],
    ['OSC ?', 'Coordonnateur sur zone, désigné par le MRCC.', 'iamsar'],
    ['Recherche en carré croissant : quand ?', 'Position assez bien connue, petite zone, un navire.', 'iamsar'],
    ['Phases d\'urgence ?', 'Incertitude, alerte, détresse.', 'iamsar']
  ],
  qcm: [
    { q: 'L\'annexe V de MARPOL traite…', r: ['Des ordures', 'Des eaux usées', 'Des hydrocarbures', 'De l\'air'], e: 'IV eaux usées, VI air.', f: 'marpol' },
    { q: 'Une infraction à MARPOL est sanctionnée par…', r: ['L\'État du pavillon, où qu\'elle ait lieu', 'L\'OMI', 'La société de classification', 'L\'État du prochain port uniquement'], e: 'Quel que soit l\'endroit.', f: 'marpol' },
    { q: 'Hors zone spéciale, la teneur maximale en hydrocarbures d\'un rejet d\'eaux de cale est…', r: ['15 ppm', '100 ppm', '1 ppm', '50 ppm'], e: 'Navire en route, séparateur approuvé.', f: 'hydrocarbures' },
    { q: 'Le registre des hydrocarbures se conserve…', r: ['3 ans', '2 ans', '1 an', '5 ans'], e: 'Le registre des ordures : 2 ans.', f: 'hydrocarbures' },
    { q: 'Le soutage de combustible doit être noté…', r: ['Au registre des hydrocarbures partie I', 'Au registre des ordures', 'Au journal machine seulement', 'Nulle part'], e: 'Comme le rejet des eaux de cale et des boues.', f: 'hydrocarbures' },
    { q: 'Eaux usées non traitées : distance minimale de rejet ?', r: ['12 M', '3 M', '4 M', '25 M'], e: 'En route à 4 nœuds au moins.', f: 'eauxusees' },
    { q: 'Des déchets alimentaires broyés peuvent être rejetés hors zone spéciale à plus de…', r: ['3 M', '12 M', '25 M', '1 M'], e: 'Tamis de 25 mm.', f: 'ordures' },
    { q: 'En Méditerranée, des déchets alimentaires non broyés…', r: ['Sont interdits', 'Sont permis à 12 M', 'Sont permis à 3 M', 'Sont permis au port'], e: 'Zone spéciale : broyés seulement, à plus de 12 M.', f: 'ordures' },
    { q: 'Un cordage synthétique usé peut être jeté…', r: ['Jamais', 'À plus de 12 M', 'À plus de 25 M', 'En zone spéciale seulement'], e: 'Tous les plastiques sont interdits.', f: 'ordures' },
    { q: 'Le registre des ordures est conservé…', r: ['2 ans', '3 ans', '6 mois', '10 ans'], e: 'Chaque page signée par le capitaine.', f: 'ordures' },
    { q: 'Les affiches sur les rejets d\'ordures sont obligatoires à partir de…', r: ['12 m de longueur', '24 m de longueur', '400 UMS', '15 personnes'], e: 'Langue de travail + anglais, espagnol ou français.', f: 'ordures' },
    { q: 'L\'annexe VI (NOx) concerne les moteurs diesel de plus de…', r: ['130 kW', '250 kW', '750 kW', '50 kW'], e: 'Sauf moteurs de secours et d\'embarcations.', f: 'air' },
    { q: 'En mer, la lutte contre une marée noire est dirigée par…', r: ['Le préfet maritime', 'Le préfet de département', 'Le maire', 'Le CEDRE'], e: 'Plan POLMAR-Mer.', f: 'lutte' },
    { q: 'Le plan POLMAR-Terre est préparé par…', r: ['Le préfet du département', 'Le préfet maritime', 'L\'armateur', 'Le CROSS'], e: 'Avec les élus et les usagers.', f: 'lutte' },
    { q: 'Le certificat ISM délivré au navire s\'appelle…', r: ['SMC', 'DOC', 'ISSC', 'IOPP'], e: 'Le DOC est pour la compagnie.', f: 'conventions' },
    { q: 'Le niveau de sûreté ISPS 3 correspond à…', r: ['Une menace exceptionnelle', 'La situation normale', 'Une menace renforcée', 'La fin d\'alerte'], e: '1 normal, 2 renforcé, 3 exceptionnel.', f: 'conventions' },
    { q: 'La convention STCW porte sur…', r: ['La formation, les brevets et la veille', 'Les pollutions', 'Le franc-bord', 'Le travail des gens de mer'], e: 'MLC pour le travail.', f: 'conventions' },
    { q: 'Après un abordage, ton navire a une déchirure à la flottaison. Tu envoies…', r: ['Un message de détresse', 'Un message de sécurité', 'Un message d\'urgence', 'Rien, tu rentres au port'], e: 'Navire en danger : détresse, avec l\'aide demandée.', f: 'abordage' },
    { q: 'Après un abordage, chaque capitaine doit…', r: ['Sauver l\'autre navire et ses personnes, sauf danger pour le sien', 'Quitter les lieux au plus vite', 'Attendre l\'ordre de l\'armateur', 'Seulement noter les faits'], e: 'Sans abordage, l\'assistance n\'est due qu\'aux personnes.', f: 'abordage' },
    { q: 'Échoué, tu tentes de te déséchouer. Quand ?', r: ['À la pleine mer, si toutes les conditions sont bonnes', 'Immédiatement, toute machine arrière', 'À la basse mer', 'Jamais sans remorqueur'], e: 'Arrière demie puis toute, 1 minute maximum.', f: 'echouement' },
    { q: 'Pour connaître la nature du fond après un échouement, on utilise…', r: ['Le plomb suiffé et la carte', 'Le radar', 'Le loch', 'L\'anémomètre'], e: 'Le suif ramène un échantillon du fond.', f: 'echouement' },
    { q: 'Le signal d\'alarme générale est…', r: ['7 sons brefs et 1 son long', '5 sons brefs', '1 son long continu', '3 sons longs'], e: 'Suivi d\'une diffusion générale.', f: 'passagers' },
    { q: 'La combinaison de survie est capelée…', r: ['Sur ordre du capitaine', 'Dès l\'alarme', 'Au poste de rassemblement, par chacun', 'Jamais'], e: 'Consigne du rôle d\'abandon.', f: 'passagers' },
    { q: 'Quel volume du manuel IAMSAR doit être à bord ?', r: ['Le volume III', 'Le volume I', 'Le volume II', 'Les trois'], e: 'Moyens mobiles.', f: 'iamsar' },
    { q: 'Pour un homme à la mer dont la position est précise, la méthode de recherche est…', r: ['La recherche par secteurs', 'Les parallèles', 'La route suivie', 'Le carré croissant à plusieurs navires'], e: 'Petite zone, position précise.', f: 'iamsar' }
  ]
});
