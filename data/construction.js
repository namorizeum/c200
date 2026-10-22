/* Description et construction — module P2-1 */
C200.module({
  id: 'construction', bloc: 'P2-1', ordre: 11, court: 'CONST', titre: 'Description et construction',
  intro: 'Matériaux, efforts sur la coque, éléments de structure, cloisons étanches, entretien, sociétés de classification, franc-bord et jauge. Écrit du module P2-1 (1 h 30, avec stabilité et sécurité).',
  calculs: [],
  visuels: ['structure', 'plimsoll'],
  fiches: [
    {
      id: 'materiaux', titre: 'Les matériaux de coque', src: 'Cours DCSS p. 4 à 11 ; C500 Description p. 18',
      html: `<div class="tw"><table><tr><th>Matériau</th><th>Points forts</th><th>Points faibles</th></tr>
<tr><td><b>Bois massif</b></td><td>Matériau historique</td><td>Le moins résistant ; pourrit ; brûle</td></tr>
<tr><td><b>Bois moulé / lamellé-collé</b></td><td>Aussi solide que le composite, peu d'entretien (une peinture tous les 5 ans), pas d'osmose</td><td>Coût de fabrication</td></tr>
<tr><td><b>Acier</b></td><td>Le plus répandu (en tonnage), le plus solide et durable, énorme résistance aux chocs, bon marché, résiste au feu</td><td>Lourd, <b>rouille</b> : entretien important</td></tr>
<tr><td><b>Aluminium</b></td><td>Léger, résiste à la corrosion (soudure sous argon)</td><td>Cher, très sensible à l'<b>électrolyse</b>, perd sa résistance à la chaleur</td></tr>
<tr><td><b>Cupronickel</b></td><td>Ne rouille pas, antisalissure naturel (carène non peinte)</td><td>Rare, cher</td></tr>
<tr><td><b>Ferro-ciment</b></td><td>Coque solide sans moule</td><td>Mauvaise réputation (constructions amateurs)</td></tr>
<tr><td><b>Composite</b> (résine + fibre de verre, kevlar, carbone)</td><td>Léger, facile à entretenir, moulé en série</td><td>Osmose (polyester) ; au feu il fond et dégage des <b>fumées toxiques</b></td></tr></table></div>
<h3>Résines</h3>
<p><b>Polyester</b> : moins chère, durcit d'un coup, moins solide, tendance à la délamination. <b>Époxy</b> : plus chère, étanchéité totale, durcit progressivement, mais <b>craint les UV</b>.</p>
<p>Moulage : <b>au contact</b> (rouleau ou pinceau, puis débullage), par <b>projection simultanée</b>, par <b>injection basse pression</b> (petites pièces, belles des deux côtés).</p>
<p><b>Gelcoat</b> : la couche de finition colorée projetée en premier dans le moule. Ce n'est pas une peinture. Épaisseur idéale <b>0,7 à 0,9 mm</b> (trop fin : pas étanche ; trop épais : cassant).</p>`
    },
    {
      id: 'contraintes', titre: 'Les efforts sur la coque', src: 'Cours DCSS p. 11 à 13',
      html: `<p>La coque est une <b>poutre</b> qui doit résister quand elle est portée par une seule vague (au milieu) ou par deux (aux extrémités).</p>
<h3>Efforts statiques (mauvaise répartition des poids)</h3>
<div class="tw"><table><tr><th>Nom</th><th>Situation</th><th>Déformation</th></tr>
<tr><td><b>Arc</b> (hogging)</td><td>Extrémités chargées, poussée concentrée au milieu</td><td>Le milieu <b>se soulève</b>, les extrémités s'affaissent. Le pont est étiré, le fond comprimé.</td></tr>
<tr><td><b>Contre-arc</b> (sagging)</td><td>Milieu chargé, poussée aux extrémités</td><td>Le milieu <b>s'affaisse</b>. Le pont est comprimé, le fond étiré.</td></tr></table></div>
<p>Une vague sous le milieu aggrave l'arc ; deux crêtes aux extrémités et un creux au milieu aggravent le contre-arc.</p>
<h3>Efforts dynamiques (mauvaise mer)</h3>
<p><b>Talonnement</b> (slamming) : par forte mer, l'avant sort de l'eau puis retombe violemment. Choc sur le fond avant : on réduit la vitesse ou on change de cap.</p>
<p><b>Effet de soufflet</b> (panting) : les vagues font varier la pression à l'avant et à l'arrière, les tôles du bordé sont poussées alternativement vers l'intérieur et l'extérieur. On renforce l'ossature aux extrémités.</p>
<div class="retenir"><p><b>Arc</b> = le navire fait le dos rond. <b>Contre-arc</b> = il plie en creux au milieu.</p></div>`
    },
    {
      id: 'structure', titre: 'Les éléments de structure', src: 'Cours DCSS p. 14 à 20',
      html: `${C200.dessin.section('')}
<div class="tw"><table><tr><th>Élément</th><th>Sens</th><th>Rôle</th></tr>
<tr><td><b>Quille</b></td><td>Longitudinal, dans l'axe</td><td>Base de la structure, résistance longitudinale. Quille plate ou quille caisson.</td></tr>
<tr><td><b>Carlingue</b></td><td>Longitudinal (fond)</td><td>Centrale (sur la quille, toujours continue) ou latérales. Continues ou intercostales (coupées par les varangues).</td></tr>
<tr><td><b>Varangue</b></td><td>Transversal (fond)</td><td>Pleine, étanche ou cadre (squelette).</td></tr>
<tr><td><b>Membrure</b></td><td>Vertical (côtés)</td><td>Ossature de la muraille.</td></tr>
<tr><td><b>Barrot</b></td><td>Transversal (pont)</td><td>Relie le haut des membrures, porte le pont.</td></tr>
<tr><td><b>Hiloire</b></td><td>Longitudinal (pont)</td><td>Avec les barrots, ossature du pont ; entoure les écoutilles.</td></tr>
<tr><td><b>Lisse</b></td><td>Longitudinal</td><td>Petit profilé longitudinal (construction longitudinale).</td></tr>
<tr><td><b>Porque</b></td><td>Vertical</td><td>Membrure renforcée (surdimensionnée).</td></tr>
<tr><td><b>Gousset</b></td><td>—</td><td>Pièce qui relie deux profilés (gousset de pont : barrot-membrure-bordé).</td></tr>
<tr><td><b>Épontille</b></td><td>Vertical</td><td>Pilier entre le pont et le fond (ou deux ponts), autour des écoutilles ; gêne la manutention.</td></tr></table></div>
<h3>Le bordé et le double fond</h3>
<p><b>Bordé</b> : l'enveloppe étanche (bordé de fond, de muraille, de pont). <b>Bordé de bouchain</b> : relie la muraille au fond. <b>Plafond de double fond</b> : tôles étanches posées sur l'ossature du fond.</p>
<p><b>Double fond</b> : espace étanche entre le bordé de fond et le plafond, haut de <b>0,75 à 1,5 m</b>, divisé en compartiments (ballasts, combustible, eau). Il protège en cas d'échouement.</p>
<div class="retenir"><p>Fond : <b>quille</b> et <b>carlingues</b> dans la longueur, <b>varangues</b> en travers. Côtés : <b>membrures</b>. Pont : <b>barrots</b> en travers, <b>hiloires</b> dans la longueur.</p></div>`
    },
    {
      id: 'types', titre: 'Les types de construction', src: 'Cours DCSS p. 21 ; C500 Description p. 18',
      html: `<div class="tw"><table><tr><th>Construction</th><th>Principe</th><th>Pour qui</th></tr>
<tr><td><b>Transversale</b></td><td>Varangues, membrures et barrots forment des <b>anneaux</b> rapprochés. La résistance longitudinale vient de la quille, des carlingues, des hiloires et des bordés.</td><td>Navires de moins de <b>120 m</b>. Bonne tenue au roulis et en cale sèche ; moins bonne sur de grandes longueurs.</td></tr>
<tr><td><b>Longitudinale</b></td><td>Beaucoup de lisses longitudinales ; anneaux (varangues, barrots, <b>porques</b>) plus espacés.</td><td>Obligatoire pour les grands navires, <b>pétroliers</b> et <b>minéraliers</b>.</td></tr>
<tr><td><b>Mixte</b></td><td>Longitudinale pour le fond et le pont, transversale pour les côtés (le plus souvent).</td><td>Cargos.</td></tr></table></div>
<h3>Vocabulaire du pont</h3>
<p><b>Tonture</b> : courbure <b>longitudinale</b> du pont. <b>Bouge</b> : courbure <b>transversale</b> (pour l'écoulement de l'eau).</p>
<p><b>Sabords de décharge</b> : ouvertures dans le pavois pour évacuer l'eau embarquée sur le pont. <b>Surbau</b> : rebord surélevé autour d'une écoutille ou au seuil d'une porte, contre l'entrée de l'eau.</p>`
    },
    {
      id: 'cloisons', titre: 'Cloisons et portes étanches', src: 'Cours DCSS p. 22 à 24, 30-31',
      html: `<p>Une <b>cloison étanche</b> est transversale, posée sur le plafond du double fond et monte jusqu'au pont supérieur continu.</p>
<h3>À quoi servent-elles ?</h3>
<ul><li>Diviser le navire en compartiments et <b>limiter l'envahissement</b> en cas de brèche.</li><li>Renforcer la résistance transversale, éviter la déformation du bordé.</li><li>Supporter les hiloires et les lisses de pont ; relier le double fond au pont.</li><li><b>Ralentir un incendie</b>.</li></ul>
<h3>Les cloisons obligatoires (SOLAS)</h3>
<p>À l'avant, la <b>cloison d'abordage</b>, entre <b>0,05 L et 0,075 L</b> de la perpendiculaire avant (L = longueur entre perpendiculaires). À l'arrière, une cloison qui ferme le <b>coqueron arrière</b> autour du tube d'étambot. Et une cloison de chaque côté de la <b>salle des machines</b>.</p>
<p>Tout ce qui traverse une cloison (tuyaux, câbles, gaines) passe par des traversées étanches.</p>
<h3>Portes étanches (SOLAS II-1, règle 15)</h3>
<div class="formule">Alarme : 5 à 10 s avant la fermeture · Fermeture : 20 à 40 s</div>
<p>Commandée à distance, la porte coulissante sonne une alarme distincte <b>au moins 5 s mais pas plus de 10 s</b> avant de bouger, jusqu'à fermeture complète. Le temps de fermeture est de <b>20 s minimum et 40 s maximum</b>, navire droit.</p>
<h3>Cofferdams et ballasts</h3>
<p><b>Cofferdam</b> (maille sèche) : espace vide entre deux cloisons étanches, qui sépare par exemple la machine des cales, ou deux citernes. Limite les risques d'explosion et de pollution.</p>
<p><b>Ballasts</b> : citernes remplies d'eau de mer quand le navire est léger, pour garder un tirant d'eau, une immersion de l'hélice et une stabilité suffisants.</p>`
    },
    {
      id: 'appendices', titre: 'Appendices de coque et de pont', src: 'Cours DCSS p. 27 à 29 ; C500 Description p. 11',
      html: `<h3>Sous la flottaison</h3>
<p><b>Ligne d'arbre</b> : relie le moteur (par l'accouplement) à l'hélice. Elle sort de la coque par le <b>tube d'étambot</b>, rendu étanche par le <b>presse-étoupe</b> (tresses serrées qu'on règle pour un léger goutte-à-goutte, ou joint à lèvres).</p>
<p><b>Safran</b> : la partie immergée du gouvernail. Sa mèche traverse la coque par le <b>tube de jaumière</b>.</p>
<p><b>Vannes de coque</b> : prises d'eau de mer et rejets. À contrôler régulièrement, manœuvrer pour qu'elles ne grippent pas.</p>
<h3>Sur le pont</h3>
<p><b>Écoutilles</b> et <b>panneaux</b> de cale, entourés de <b>surbaux</b>. <b>Sabords de décharge</b> pour évacuer l'eau. <b>Hublots</b> (ouvertures rondes vitrées et étanches) et <b>contre-hublots</b> (plaques qui les ferment par mauvais temps). <b>Manches à air</b> pour l'aération.</p>
<div class="piege"><p>Le <b>tube d'étambot</b> = la ligne d'arbre. Le <b>tube de jaumière</b> = la mèche du gouvernail.</p></div>`
    },
    {
      id: 'entretien', titre: 'L\'entretien de la coque', src: 'Cours DCSS p. 32 à 43',
      html: `<h3>Coque en acier : la rouille</h3>
<p>La rouille s'installe sous la <b>calamine</b> (couche dure laissée par le laminoir). On l'enlève par décapage chimique (tôles prépeintes) ou par <b>sablage</b>.</p>
<ul><li>Préparer : gratter, brosser, poncer la rouille qui s'effrite, sans affaiblir la tôle. Lunettes, gants, masque.</li><li>Neutraliser : <b>acide phosphorique</b> au pinceau (masque, à l'air libre), rincer, sécher.</li><li>Protéger : apprêt, puis <b>3 ou 4 couches d'antirouille</b> de couleurs différentes, puis finition. Rester dans la <b>même gamme</b> de produits.</li></ul>
<div class="piege"><p>La peinture doit être <b>à la même température que la tôle</b>, sinon il se forme de la condensation (point de rosée) dessous et elle se décolle.</p></div>
<p>À la construction : soudures continues des deux côtés, <b>anguillers</b> pour l'écoulement de l'eau, ventilation des espaces fermés. Un <b>pont en teck</b> collé sur l'acier piège l'humidité et fait rouiller la tôle sans qu'on le voie.</p>
<h3>Coque en bois ou composite : le carénage annuel</h3>
<p>Nettoyeur haute pression à <b>30-40 cm</b> de la coque, spatule pour les coquillages, ponçage <b>à l'eau</b> (jamais à sec : la poussière d'antifouling est toxique). Réparer les rayures, vernis ou époxy sur les bois. Éviter l'acide chlorhydrique pour l'hélice.</p>
<h3>Inox : A2 ou A4 ?</h3>
<p><b>A2</b> (AISI 304) : le plus courant, mais <b>ne convient pas à l'eau de mer</b>. <b>A4</b> (AISI 316) : contient du <b>molybdène</b>, résiste au chlore et à l'eau de mer : c'est l'inox marin.</p>`
    },
    {
      id: 'anodes', titre: 'Anodes et corrosion électrolytique', src: 'Cours C500 Entretien p. 9 à 13',
      html: `<p>Deux métaux différents plongés dans l'eau de mer forment une <b>pile</b> : le métal le plus « doux » (l'<b>anode</b>) se ronge au profit du plus « noble » (la cathode). C'est la corrosion électrolytique (ou galvanique).</p>
<p>On visse donc des <b>anodes sacrificielles</b> en zinc, qui s'usent à la place de l'hélice, de l'arbre, du safran, de la coque.</p>
<div class="tw"><table><tr><th>Eau</th><th>Anode</th></tr><tr><td>Eau de mer</td><td><b>Zinc</b></td></tr><tr><td>Eau saumâtre</td><td><b>Aluminium</b></td></tr><tr><td>Eau douce</td><td><b>Magnésium</b></td></tr></table></div>
<ul><li>On les change à chaque carénage (au moins une fois par an), ou dès qu'elles ont perdu <b>75 % de leur masse</b>. Modèle identique ou plus gros.</li><li><b>Jamais de peinture</b> sur l'anode ni sous son contact : il faut un bon contact électrique.</li><li>Une anode restée comme neuve n'est <b>pas</b> bon signe : la corrosion se fait ailleurs (mauvais contact).</li><li>Ne pas mettre en contact deux métaux différents sans isolant (hélice bronze sur arbre inox).</li></ul>
<p>Au port, la prise de quai peut créer des courants de fuite : on installe un <b>isolateur galvanique</b> (diodes) ou, mieux, un <b>transformateur d'isolement</b>.</p>`
    },
    {
      id: 'classification', titre: 'Les sociétés de classification', src: 'Cours DCSS p. 44 à 46',
      html: `<p>Organismes <b>privés</b> qui fixent des normes techniques et contrôlent le navire du projet à la démolition.</p>
<h3>Deux missions</h3>
<p><b>Classification</b> : approuver les plans, le chantier, les matériaux, suivre la construction, contrôler la stabilité, les essais, la machine, la coque, les apparaux de levage. Puis maintenir la <b>classe</b> : visites périodiques, visites après avarie ou réparation, visites à sec.</p>
<p><b>Certification</b> : par <b>délégation de l'État du pavillon</b>, vérifier la conformité aux conventions et délivrer des certificats (SOLAS, MARPOL, lignes de charge, ISM, ISPS).</p>
<h3>En France</h3>
<p>Cinq sociétés sont agréées : <b>Bureau Veritas</b> (qui fait <b>80 à 90 %</b> des contrôles délégués), Lloyd's Register, DNV, Germanischer Lloyd, American Bureau of Shipping. Les centres de sécurité des navires leur délèguent certaines visites.</p>`
    },
    {
      id: 'francbord', titre: 'Franc-bord et marque de Plimsoll', src: 'Cours DCSS p. 46 à 48, 73 à 75',
      html: `${C200.dessin.plimsoll('tout')}
<p><b>Pont de franc-bord</b> : le pont complet le plus élevé, muni de fermetures étanches. Sa jonction avec la coque est le <b>livet</b>, marqué par la <b>ligne de pont</b>.</p>
<p><b>Franc-bord</b> : distance verticale entre la ligne de pont et la flottaison maximale autorisée. Il garantit une réserve de flottabilité et de stabilité.</p>
<div class="tw"><table><tr><th>Trait</th><th>Signification</th></tr>
<tr><td><b>TF</b></td><td>Eau douce tropicale (le plus haut)</td></tr><tr><td><b>F</b></td><td>Eau douce</td></tr><tr><td><b>T</b></td><td>Eau de mer, zone tropicale</td></tr><tr><td><b>S</b></td><td>Eau de mer, été (au niveau du disque)</td></tr><tr><td><b>W</b></td><td>Eau de mer, hiver</td></tr><tr><td><b>WNA</b></td><td>Hiver en Atlantique Nord (le plus bas)</td></tr></table></div>
<p>Le disque (de Samuel Plimsoll, 1876) est coupé au niveau de la ligne <b>S</b>. Les lettres autour sont celles de la société qui a fixé le franc-bord. Navire transportant du bois : les lettres sont précédées de <b>L</b> (lumber). Marques peintes, et <b>soudées</b> sur une coque métallique.</p>
<p><b>Certificat international de franc-bord</b> : validité <b>5 ans maximum</b>, délivré en France par une société de classification.</p>
<h3>Rôle du capitaine</h3>
<p>Rendre le pont de franc-bord étanche à l'appareillage, avoir les certificats à bord, veiller au bon état des marques et respecter la ligne de la zone et de la saison où il navigue.</p>
<div class="retenir"><p>Plus l'eau est <b>douce</b> et <b>chaude</b> (mer calme), plus on peut s'enfoncer : TF en haut, WNA en bas.</p></div>`
    },
    {
      id: 'jauge', titre: 'Jauge et dimensions du navire', src: 'Cours DCSS p. 70 à 76 ; C500 Description p. 8 à 11',
      html: `<h3>La jauge : un volume, pas un poids</h3>
<p>Ancienne unité : le <b>tonneau</b> = <b>2,83 m³</b>. Aujourd'hui : l'<b>UMS</b> (Universal Measurement System), pour les navires de plus de 24 m en voyage international. Certificat de jauge 1969, calculé en France par les sociétés de classification. Le chiffre s'écrit sans unité.</p>
<p><b>Jauge brute</b> : volume total des espaces fermés. <b>Jauge nette</b> : volume utilisable commercialement (cales) ; sert aux taxes portuaires et de pilotage. Sans précision, « tonnage » = jauge brute.</p>
<div class="tw"><table><tr><th>UMS</th><th>≈ tonneaux</th></tr><tr><td>200</td><td>100</td></tr><tr><td>500</td><td>200</td></tr><tr><td>3 000</td><td>1 600</td></tr></table></div>
<p>Le brevet de <b>capitaine 200</b> permet de commander des navires de <b>200 UMS</b> au plus. Jauges spéciales pour les canaux de Suez et de Panama (taxes de passage).</p>
<h3>Dimensions</h3>
<p><b>Longueur hors tout</b> : de la pointe de l'étrave à celle de l'étambot. <b>Longueur entre perpendiculaires</b> (Lpp) : entre la perpendiculaire avant et la perpendiculaire arrière. <b>Largeur hors membres</b> : largeur maximale (au maître-couple). <b>Creux</b> : de la quille au pont complet le plus élevé.</p>
<p><b>Œuvres vives</b> (carène) : partie immergée. <b>Œuvres mortes</b> : partie émergée. <b>Exposant de charge</b> : la tranche de coque entre la flottaison lège et la flottaison en charge.</p>
<p><b>Ligne de surimmersion</b> : ligne imaginaire <b>76 mm sous le livet</b> du pont de cloisonnement ; limite à ne pas dépasser après envahissement.</p>`
    }
  ],
  cartes: [
    ['Matériau le plus répandu en tonnage ?', 'L\'acier : le plus solide et durable, résiste aux chocs, mais rouille.', 'materiaux'],
    ['Polyester ou époxy : lequel craint les UV ?', 'L\'époxy (plus cher, plus étanche, durcit progressivement).', 'materiaux'],
    ['Épaisseur idéale du gelcoat ?', '0,7 à 0,9 mm.', 'materiaux'],
    ['Défaut d\'un composite au feu ?', 'Il fond et dégage des fumées toxiques.', 'materiaux'],
    ['Arc (hogging) ?', 'Extrémités chargées : le milieu se soulève, le navire fait le dos rond.', 'contraintes'],
    ['Contre-arc (sagging) ?', 'Milieu chargé : le milieu s\'affaisse.', 'contraintes'],
    ['Talonnement ?', 'Par forte mer, l\'avant sort de l\'eau et retombe violemment sur la vague.', 'contraintes'],
    ['Effet de soufflet ?', 'Les tôles du bordé avant et arrière sont poussées alternativement vers l\'intérieur et l\'extérieur par les vagues.', 'contraintes'],
    ['Carlingue ?', 'Profilé longitudinal du fond (centrale sur la quille, ou latérales).', 'structure'],
    ['Varangue ?', 'Profilé transversal du fond : pleine, étanche ou cadre.', 'structure'],
    ['Membrure ?', 'Profilé vertical, ossature des côtés.', 'structure'],
    ['Barrot ?', 'Profilé transversal qui porte le pont et relie le haut des membrures.', 'structure'],
    ['Hiloire ?', 'Profilé longitudinal du pont, autour des écoutilles.', 'structure'],
    ['Porque ?', 'Membrure renforcée (surdimensionnée).', 'structure'],
    ['Épontille ?', 'Pilier vertical entre le pont et le fond.', 'structure'],
    ['Hauteur d\'un double fond ?', 'Entre 0,75 et 1,5 m.', 'structure'],
    ['Construction transversale : pour quels navires ?', 'Moins de 120 m. Anneaux varangue-membrure-barrot rapprochés.', 'types'],
    ['Construction longitudinale : obligatoire pour ?', 'Grands navires, pétroliers, minéraliers.', 'types'],
    ['Tonture et bouge ?', 'Tonture : courbure longitudinale du pont. Bouge : courbure transversale.', 'types'],
    ['Position de la cloison d\'abordage ?', 'Entre 0,05 L et 0,075 L de la perpendiculaire avant.', 'cloisons'],
    ['Porte étanche : alarme et temps de fermeture ?', 'Alarme 5 à 10 s avant ; fermeture en 20 à 40 s (SOLAS II-1 règle 15).', 'cloisons'],
    ['Cofferdam ?', 'Maille sèche : espace vide entre deux cloisons étanches.', 'cloisons'],
    ['Six rôles des cloisons étanches ?', 'Limiter l\'envahissement, résistance transversale, éviter la déformation du bordé, supporter hiloires et lisses, relier double fond et pont, freiner le feu.', 'cloisons'],
    ['Tube de jaumière ?', 'Le passage de la mèche du gouvernail à travers la coque.', 'appendices'],
    ['Presse-étoupe ?', 'Rend étanche la sortie de l\'arbre d\'hélice (tube d\'étambot).', 'appendices'],
    ['Contre-hublot ?', 'Plaque qui ferme le hublot par mauvais temps.', 'appendices'],
    ['Neutraliser la rouille ?', 'Acide phosphorique au pinceau, rincer, sécher, puis apprêt et 3-4 couches d\'antirouille.', 'entretien'],
    ['Pourquoi peindre à la même température que la tôle ?', 'Sinon condensation (point de rosée) sous la peinture qui se décollera.', 'entretien'],
    ['Inox pour l\'eau de mer ?', 'A4 (AISI 316), grâce au molybdène. Pas l\'A2.', 'entretien'],
    ['Anode en eau de mer / saumâtre / douce ?', 'Zinc / aluminium / magnésium.', 'anodes'],
    ['Quand changer une anode ?', 'À chaque carénage (au moins 1 fois par an) ou dès 75 % d\'usure.', 'anodes'],
    ['Peut-on peindre une anode ?', 'Non, jamais : il faut un bon contact électrique.', 'anodes'],
    ['Classification et certification ?', 'Classification : normes techniques et suivi du navire. Certification : délivrer les certificats des conventions par délégation de l\'État.', 'classification'],
    ['Part du Bureau Veritas en France ?', '80 à 90 % des contrôles délégués.', 'classification'],
    ['Ordre des marques de franc-bord ?', 'Du haut : TF, F et T, S (disque), W, WNA.', 'francbord'],
    ['Validité du certificat de franc-bord ?', '5 ans maximum.', 'francbord'],
    ['Lettre L devant les marques ?', 'Navire transportant du bois (lumber).', 'francbord'],
    ['Un tonneau de jauge ?', '2,83 m³.', 'jauge'],
    ['200 UMS ≈ ?', '100 tonneaux (500 UMS ≈ 200 tx ; 3 000 UMS ≈ 1 600 tx).', 'jauge'],
    ['Jauge nette ?', 'Volume utilisable commercialement ; sert aux taxes portuaires et de pilotage.', 'jauge'],
    ['Ligne de surimmersion ?', 'Ligne imaginaire 76 mm sous le livet du pont de cloisonnement.', 'jauge'],
    ['Exposant de charge ?', 'Tranche de coque entre la flottaison lège et la flottaison en charge.', 'jauge']
  ],
  qcm: [
    { q: 'Quel matériau a la plus grande résistance aux chocs ?', r: ['L\'acier', 'L\'aluminium', 'Le composite polyester', 'Le bois massif'], e: 'Lourd mais très solide et durable.', f: 'materiaux' },
    { q: 'Quelle résine craint les UV ?', r: ['L\'époxy', 'Le polyester', 'Les deux', 'Aucune'], e: 'L\'époxy est plus étanche mais doit être protégé du soleil.', f: 'materiaux' },
    { q: 'Le navire est chargé aux deux extrémités, peu au milieu. Il subit…', r: ['De l\'arc : le milieu se soulève', 'Du contre-arc : le milieu s\'affaisse', 'Du talonnement', 'De l\'effet de soufflet'], e: 'Arc = dos rond.', f: 'contraintes' },
    { q: 'Les tôles avant vibrent vers l\'intérieur et l\'extérieur sous les chocs des vagues. C\'est…', r: ['L\'effet de soufflet', 'Le talonnement', 'L\'arc', 'L\'effet de pas'], e: 'Panting en anglais.', f: 'contraintes' },
    { q: 'Le profilé transversal du fond, perpendiculaire à la quille, s\'appelle…', r: ['La varangue', 'La carlingue', 'L\'hiloire', 'La lisse'], e: 'Carlingue = longitudinal ; varangue = transversal.', f: 'structure' },
    { q: 'Le profilé transversal qui porte le pont s\'appelle…', r: ['Le barrot', 'La membrure', 'La porque', 'La carlingue'], e: 'Il relie le haut des membrures.', f: 'structure' },
    { q: 'Une porque est…', r: ['Une membrure renforcée', 'Un pilier vertical', 'Une cloison légère', 'Une pièce de liaison'], e: 'Elle remplace les membrures à certains endroits.', f: 'structure' },
    { q: 'Quel élément gêne la manutention dans les cales ?', r: ['Les épontilles', 'Les carlingues', 'Les goussets', 'Le plafond de double fond'], e: 'Piliers verticaux autour des écoutilles.', f: 'structure' },
    { q: 'La construction longitudinale est obligatoire pour…', r: ['Les pétroliers et minéraliers', 'Les navires de moins de 24 m', 'Les vedettes à passagers', 'Les voiliers'], e: 'Et pour les grands navires en général.', f: 'types' },
    { q: 'La courbure transversale du pont s\'appelle…', r: ['Le bouge', 'La tonture', 'L\'assiette', 'Le livet'], e: 'La tonture est longitudinale.', f: 'types' },
    { q: 'La cloison d\'abordage est placée…', r: ['Entre 0,05 L et 0,075 L de l\'avant', 'Au milieu du navire', 'Devant la salle des machines', 'À 10 % de L de l\'arrière'], e: 'L = longueur entre perpendiculaires.', f: 'cloisons' },
    { q: 'Une porte étanche commandée à distance doit se fermer en…', r: ['20 à 40 secondes', '5 à 10 secondes', 'Moins de 5 secondes', '60 à 90 secondes'], e: 'L\'alarme sonne 5 à 10 s avant le mouvement.', f: 'cloisons' },
    { q: 'Un cofferdam est…', r: ['Un espace vide entre deux cloisons étanches', 'Une citerne de ballast', 'Un double fond', 'Une porte étanche'], e: 'Maille sèche : sépare par exemple machine et cales.', f: 'cloisons' },
    { q: 'La mèche du gouvernail traverse la coque par…', r: ['Le tube de jaumière', 'Le tube d\'étambot', 'Le presse-étoupe d\'arbre', 'Un sabord'], e: 'Le tube d\'étambot, c\'est pour l\'arbre d\'hélice.', f: 'appendices' },
    { q: 'Les sabords de décharge servent à…', r: ['Évacuer l\'eau embarquée sur le pont', 'Décharger la cargaison', 'Aérer les cales', 'Fermer les hublots'], e: 'Ouvertures dans le pavois.', f: 'appendices' },
    { q: 'Pour neutraliser la rouille, le cours recommande…', r: ['L\'acide phosphorique', 'L\'acide chlorhydrique', 'L\'eau de Javel', 'Le white-spirit'], e: 'Au pinceau, masque, à l\'air libre, puis rinçage.', f: 'entretien' },
    { q: 'Quel inox choisir pour une pièce immergée en mer ?', r: ['A4 (316)', 'A2 (304)', 'Peu importe', 'Acier galvanisé'], e: 'Le molybdène de l\'A4 résiste au chlore.', f: 'entretien' },
    { q: 'Pourquoi ne pas poncer l\'antifouling à sec ?', r: ['La poussière est toxique', 'Ça raye le gelcoat', 'Ça use le papier', 'Ça fait rouiller'], e: 'On ponce à l\'eau.', f: 'entretien' },
    { q: 'En eau douce, on utilise des anodes en…', r: ['Magnésium', 'Zinc', 'Aluminium', 'Cuivre'], e: 'Zinc en mer, aluminium en eau saumâtre.', f: 'anodes' },
    { q: 'Au carénage, l\'anode est comme neuve. Que conclure ?', r: ['Elle ne protège rien : mauvais contact, la corrosion se fait ailleurs', 'Tout va bien', 'Il faut la peindre', 'L\'eau est trop salée'], e: 'Une anode doit s\'user.', f: 'anodes' },
    { q: 'Le Bureau Veritas réalise en France environ…', r: ['80 à 90 % des contrôles délégués', '10 % des contrôles', 'Tous les contrôles de pêche', 'Aucun contrôle de l\'État'], e: 'C\'est l\'une des 5 sociétés agréées.', f: 'classification' },
    { q: 'Quelle marque de franc-bord est la plus haute ?', r: ['TF', 'S', 'WNA', 'F'], e: 'Eau douce tropicale : on peut s\'enfoncer le plus.', f: 'francbord' },
    { q: 'Le trait du disque de Plimsoll est au niveau de la ligne…', r: ['S (été)', 'W (hiver)', 'T (tropicale)', 'F (eau douce)'], e: 'Ligne d\'été en eau de mer.', f: 'francbord' },
    { q: 'Validité maximale du certificat international de franc-bord ?', r: ['5 ans', '1 an', '2 ans et demi', '10 ans'], e: 'Sauf renouvellement ou prorogation après visite.', f: 'francbord' },
    { q: 'Un tonneau de jauge vaut…', r: ['2,83 m³', '1 tonne', '1 m³', '1,025 t'], e: 'La jauge est un volume.', f: 'jauge' },
    { q: 'Le brevet de capitaine 200 limite le commandement à…', r: ['200 UMS', '200 tonnes de port en lourd', '200 kW', '200 passagers'], e: '200 UMS ≈ 100 tonneaux.', f: 'jauge' }
  ]
});
