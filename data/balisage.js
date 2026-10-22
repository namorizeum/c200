/* Balisage IALA et signalisation visuelle — module P1-1 (avec les règles de barre) */
(function () {
  const D = C200.dessin;
  const fig = (svg, cap) => `<figure>${svg}<figcaption>${cap}</figcaption></figure>`;
  C200.module({
    id: 'balisage', bloc: 'P1-1', ordre: 2, court: 'BAL', titre: 'Balisage et signalisation',
    intro: 'Bouées et marques IALA, rythmes des feux, balisage des plages, signaux de marée, de port et de météo. Partie du cours de règles de barre.',
    visuels: ['bouees', 'rythmes'],
    fiches: [
      {
        id: 'iala', titre: 'Le système IALA', src: 'Cours RDB p. 69-70',
        html: `<p>Le balisage est mondial. Il est défini par l'<b>AISM</b> (en anglais <b>IALA</b>). Il dit au marin ce qui est obligatoire, interdit ou conseillé, comme les panneaux sur la route.</p>
<div class="retenir"><p>Deux zones dans le monde :</p><ul>
<li><b>Zone A</b> : presque tout le monde (Europe, Afrique, Asie sauf exceptions, Australie).</li>
<li><b>Zone B</b> : <b>les Amériques</b>, les Caraïbes, le <b>Japon</b>, les <b>Philippines</b>, les <b>deux Corées</b>.</li></ul>
<p>Seules les <b>marques latérales</b> changent entre A et B (couleurs inversées).</p></div>
<p>Six familles de marques : <b>latérales</b>, <b>cardinales</b>, <b>danger isolé</b>, <b>eaux saines</b>, <b>spéciales</b>, <b>épave</b>.</p>
<p>On les reconnaît :</p>
<ul><li><b>de jour</b> : forme du corps, couleur, <b>voyant</b> (la forme posée au sommet) ;</li>
<li><b>de nuit</b> : couleur et <b>rythme</b> du feu (si elles en ont un).</li></ul>
<p>Les marques peuvent être <b>flottantes</b> (bouées) ou <b>fixes</b> (tourelles, espars). Formes de bouées : cylindrique (« plate »), conique, sphérique, à fuseau (espar), charpente (pilier).</p>`
      },
      {
        id: 'laterales', titre: 'Marques latérales et chenal préféré', src: 'Cours RDB p. 71 à 73',
        html: `<p>Elles bordent un chenal. Le sens de lecture est toujours <b>du large vers le port</b> (en entrant).</p>
<div class="tw"><table><tr><th>Zone A</th><th>Bâbord</th><th>Tribord</th></tr>
<tr><td>Couleur</td><td><b>Rouge</b></td><td><b>Verte</b></td></tr>
<tr><td>Forme</td><td>Cylindrique (plate)</td><td>Conique</td></tr>
<tr><td>Voyant</td><td>Cylindre rouge</td><td>Cône vert pointe en haut</td></tr>
<tr><td>Feu</td><td>Rouge</td><td>Vert</td></tr></table></div>
<div class="lights">${fig(D.bouee('babord'), 'Bâbord (zone A)')}${fig(D.bouee('tribord'), 'Tribord (zone A)')}</div>
<div class="retenir"><p>En <b>entrant</b> au port en zone A : <b>rouge à bâbord</b> (à gauche), <b>vert à tribord</b> (à droite). En sortant, c'est l'inverse.</p>
<p>En <b>zone B</b> : mêmes formes, couleurs inversées (rouge à tribord en entrant).</p></div>
<h3>Chenal préféré (le chenal se divise en deux)</h3>
<ul><li><b>Rouge avec une bande verte</b>, forme bâbord : le chenal <b>principal est à tribord</b>. On la laisse de préférence à bâbord en entrant. Feu rouge <b>Fl(2+1)</b>.</li>
<li><b>Verte avec une bande rouge</b>, forme tribord : le chenal <b>principal est à bâbord</b>. On la laisse de préférence à tribord en entrant. Feu vert <b>Fl(2+1)</b>.</li></ul>
<div class="lights">${fig(D.bouee('cpTri'), 'Chenal préféré à tribord')}${fig(D.bouee('cpBab'), 'Chenal préféré à bâbord')}</div>
<p>Règle simple : la <b>couleur dominante</b> dit de quel côté laisser la marque, comme une latérale normale.</p>`
      },
      {
        id: 'cardinales', titre: 'Marques cardinales', src: 'Cours RDB p. 74',
        html: `<p>Elles indiquent <b>de quel côté passer</b> par rapport à un danger. Couleurs <b>jaune et noir</b>, voyant de <b>deux cônes noirs</b>. Feu <b>blanc</b> scintillant.</p>
<div class="retenir"><p>Une cardinale <b>Nord</b> se laisse <b>au sud</b> de soi : on passe <b>au nord</b> de la marque. Le danger est de l'autre côté (au sud).</p></div>
<div class="tw"><table><tr><th>Marque</th><th>Voyant</th><th>Couleurs (haut → bas)</th><th>Feu</th></tr>
<tr><td><b>Nord</b></td><td>▲▲ pointes en haut</td><td>Noir / jaune</td><td>Q ou VQ continu</td></tr>
<tr><td><b>Est</b></td><td>▲▼ opposés par la base</td><td>Noir / jaune / noir</td><td>Q(3) 10 s · VQ(3) 5 s</td></tr>
<tr><td><b>Sud</b></td><td>▼▼ pointes en bas</td><td>Jaune / noir</td><td>Q(6) + LFl 15 s · VQ(6) + LFl 10 s</td></tr>
<tr><td><b>Ouest</b></td><td>▼▲ pointe à pointe</td><td>Jaune / noir / jaune</td><td>Q(9) 15 s · VQ(9) 10 s</td></tr></table></div>
<div class="lights">${fig(D.bouee('nord'), 'Nord')}${fig(D.bouee('est'), 'Est')}${fig(D.bouee('sud'), 'Sud')}${fig(D.bouee('ouest'), 'Ouest')}</div>
<div class="retenir"><p>Trois astuces :</p><ul>
<li>Les pointes des cônes montrent où est le <b>noir</b> : N pointes en haut = noir en haut ; S en bas = noir en bas ; E vers l'extérieur = noir en haut et en bas ; W vers l'intérieur = noir au milieu.</li>
<li>Les feux suivent une <b>horloge</b> : Est = 3 h → 3 éclats ; Sud = 6 h → 6 éclats (+ un long pour ne pas confondre) ; Ouest = 9 h → 9 éclats ; Nord = 12 h → continu.</li>
<li>Est en forme d'<b>œuf</b>, Ouest en forme de verre à pied (« <b>W</b>ine glass »).</li></ul></div>`
      },
      {
        id: 'autres', titre: 'Danger isolé, eaux saines, spéciale, épave', src: 'Cours RDB p. 75 à 77',
        html: `<div class="tw"><table><tr><th>Marque</th><th>De jour</th><th>Feu</th><th>Sens</th></tr>
<tr><td><b>Danger isolé</b></td><td>Noire avec bande(s) rouge(s), <b>2 boules noires</b></td><td>Blanc <b>Fl(2)</b></td><td>Petit danger juste dessous : on passe autour</td></tr>
<tr><td><b>Eaux saines</b></td><td>Bandes <b>verticales rouges et blanches</b>, <b>1 boule rouge</b></td><td>Blanc <b>Iso</b>, <b>Oc</b>, <b>LFl 10 s</b> ou <b>Mo(A)</b></td><td>Aucun danger autour : milieu de chenal, atterrissage</td></tr>
<tr><td><b>Spéciale</b></td><td><b>Jaune</b>, voyant <b>X jaune</b></td><td><b>Jaune</b></td><td>Zone particulière : militaire, câbles, travaux, rejets, pêche…</td></tr>
<tr><td><b>Épave</b> (urgence, 2006)</td><td>Bandes <b>verticales bleues et jaunes</b>, <b>croix jaune</b> droite</td><td><b>Bleu / jaune</b> alternés (1 s chacun, cycle 3 s)</td><td>Épave récente, pas encore sur les cartes</td></tr></table></div>
<div class="lights">${fig(D.bouee('danger'), 'Danger isolé')}${fig(D.bouee('saines'), 'Eaux saines')}${fig(D.bouee('speciale'), 'Spéciale')}${fig(D.bouee('epave'), 'Épave')}</div>
<h3>Dangers nouveaux</h3>
<p>Danger découvert récemment, pas encore sur les cartes (banc de sable, épave). On le signale avec les marques habituelles (latérale, cardinale, épave). S'il est grave, on peut <b>doubler</b> la marque.</p>
<div class="piege"><p>Ne confonds pas une <b>marque spéciale</b> (jaune, en mer) avec les <b>bouées jaunes des plages</b>, qui ne dépendent pas de l'IALA.</p></div>`
      },
      {
        id: 'rythmes', titre: 'Les rythmes des feux', src: 'Cours RDB p. 68',
        html: `<p>Les phares et feux sont listés dans le livre <b>Feux et signaux de brume</b> du SHOM (en anglais : Admiralty List of Lights). On les reconnaît par leur <b>couleur</b>, leur <b>rythme</b> et parfois leur <b>secteur</b>.</p>
<div class="tw"><table><tr><th>Abréviation</th><th>Nom</th><th>Ce qu'on voit</th></tr>
<tr><td>F</td><td>Fixe</td><td>Lumière continue</td></tr>
<tr><td>Fl</td><td>Éclats</td><td>Lumière <b>plus courte</b> que l'obscurité</td></tr>
<tr><td>LFl</td><td>Éclat long</td><td>Éclat d'au moins 2 s</td></tr>
<tr><td>Oc</td><td>Occultations</td><td>Lumière <b>plus longue</b> que l'obscurité</td></tr>
<tr><td>Iso</td><td>Isophase</td><td>Lumière et obscurité <b>égales</b></td></tr>
<tr><td>Q</td><td>Scintillant</td><td>50 à 79 éclats par minute</td></tr>
<tr><td>VQ</td><td>Scintillant rapide</td><td>80 à 159 par minute</td></tr>
<tr><td>UQ</td><td>Scintillant ultra-rapide</td><td>160 et plus par minute</td></tr>
<tr><td>Mo(A)</td><td>Morse</td><td>La lettre A en morse (• —)</td></tr>
<tr><td>Fl(2)</td><td>Éclats groupés</td><td>2 éclats, puis pause</td></tr>
<tr><td>Fl(2+1)</td><td>Groupes composés</td><td>2 éclats, pause, 1 éclat</td></tr></table></div>
<p>La <b>période</b> est le temps entre le début de deux cycles identiques (ex. « 10 s »).</p>
<div class="exemple"><p>Sur la carte : <b>Fl(3) WR 12s 25m 15M</b> = 3 éclats groupés, blanc et rouge selon le secteur, période 12 s, hauteur 25 m au-dessus des pleines mers, portée 15 milles.</p></div>`
      },
      {
        id: 'plages', titre: 'Balisage des plages', src: 'Cours RDB p. 78',
        html: `<p>Il ne dépend pas de l'IALA : c'est un balisage local, avec des <b>bouées jaunes</b> et des panneaux.</p>
<ul><li><b>Bande des 300 m</b> : pas une zone normale de navigation. Vitesse <b>5 nœuds maximum</b>.</li>
<li><b>Zone de baignade</b> : interdite à tout engin (moteur, voile, rame).</li>
<li><b>Chenal traversier</b> : pour accéder à la plage. <b>Interdit à la baignade</b>. 5 nœuds max.</li>
<li><b>Zone interdite aux engins à moteur</b> (jet-skis compris).</li></ul>
<div class="retenir"><p>Près des plages : <b>300 m</b> et <b>5 nœuds</b>. Pour aller à la plage, on passe par le <b>chenal traversier</b>.</p></div>`
      },
      {
        id: 'maree', titre: 'Signaux de marée', src: 'Cours RDB p. 79-80',
        html: `<p>De moins en moins utilisés (remplacés par des écrans), mais au programme.</p>
<div class="tw"><table><tr><th>Jour</th><th>Nuit</th><th>Sens</th></tr>
<tr><td>Flamme bleue</td><td>2 verts côte à côte</td><td>Étale de <b>basse mer</b></td></tr>
<tr><td>Triangle pointe en haut ▲</td><td><b>Vert au-dessus de blanc</b></td><td>Marée <b>montante</b></td></tr>
<tr><td>Triangle pointe en bas ▼</td><td><b>Blanc au-dessus de vert</b></td><td>Marée <b>descendante</b></td></tr>
<tr><td>Pavillon blanc à croix de Saint-André noire</td><td>2 blancs côte à côte</td><td>Étale de <b>pleine mer</b></td></tr></table></div>
<h3>Hauteur d'eau affichée</h3>
<p>La hauteur au-dessus du zéro des cartes, à 10 cm près. On additionne les marques, lues en colonnes (de droite à gauche, vu du large) :</p>
<ul><li><b>Boule</b> (feu blanc) = <b>5 m</b> ;</li><li><b>Cylindre</b> (feu rouge) = <b>1 m</b> (0,1 m dans la 1re colonne) ;</li><li><b>Cône pointe en bas</b> (feu vert) = <b>0,2 m</b>.</li></ul>`
      },
      {
        id: 'port', titre: 'Signaux d\'entrée et de sortie des ports', src: 'Cours RDB p. 81',
        html: `<p>Trois feux superposés, de jour comme de nuit, gérés par la capitainerie.</p>
<div class="tw"><table><tr><th>Feux (haut → bas)</th><th>Sens</th></tr>
<tr><td>Vert / vert / vert</td><td>Sens unique : <b>passage autorisé</b></td></tr>
<tr><td>Vert / vert / blanc</td><td><b>Double sens</b> : passer avec prudence</td></tr>
<tr><td>Rouge / rouge / rouge</td><td><b>Passage interdit</b></td></tr>
<tr><td>Vert / blanc / vert</td><td>Entrée réglementée : demander les instructions à la <b>capitainerie</b></td></tr>
<tr><td>3 rouges <b>à éclats</b></td><td><b>Danger grave, port fermé</b></td></tr></table></div>
<p>Un <b>feu jaune</b> à côté des 3 rouges ou du vert-blanc-vert : passage autorisé pour les navires qui circulent <b>en dehors du chenal</b> (petits bateaux).</p>`
      },
      {
        id: 'meteo', titre: 'Signaux météo des sémaphores', src: 'Cours RDB p. 82',
        html: `<p>Visibles sur les sémaphores (La Garoupe, Ferrat, Dramont…) et les vigies des ports.</p>
<div class="tw"><table><tr><th>Jour</th><th>Nuit (haut → bas)</th><th>Sens</th></tr>
<tr><td>Boule</td><td>Blanc / vert</td><td><b>Vent fort</b> (force 6-7), direction quelconque</td></tr>
<tr><td>Cône pointe en haut</td><td>Rouge / rouge</td><td>Coup de vent (≥ 8) secteur <b>NW</b></td></tr>
<tr><td>Cône pointe en bas</td><td>Blanc / blanc</td><td>Coup de vent secteur <b>SW</b></td></tr>
<tr><td>2 cônes pointes en haut</td><td>Rouge / blanc</td><td>Coup de vent secteur <b>NE</b></td></tr>
<tr><td>2 cônes pointes en bas</td><td>Blanc / rouge</td><td>Coup de vent secteur <b>SE</b></td></tr>
<tr><td>1 pavillon</td><td>—</td><td>Le vent tourne dans le <b>sens des aiguilles d'une montre</b></td></tr>
<tr><td>2 pavillons</td><td>—</td><td>Le vent tourne dans le <b>sens inverse</b></td></tr>
<tr><td>Croix</td><td>Rouge / vert / rouge</td><td><b>Ouragan</b> (force 12)</td></tr></table></div>
<div class="retenir"><p>Pointe en <b>haut</b> = vent du <b>Nord</b> ; en <b>bas</b> = du <b>Sud</b>. <b>Un</b> cône = côté <b>Ouest</b> ; <b>deux</b> cônes = côté <b>Est</b>.</p></div>`
      }
    ],
    cartes: [
      ['Que veut dire IALA (AISM) ?', 'Association internationale de signalisation maritime : elle définit le balisage mondial.', 'iala'],
      ['Quels pays sont en zone B ?', 'Les Amériques, les Caraïbes, le Japon, les Philippines et les deux Corées.', 'iala'],
      ['Qu\'est-ce qui change entre zone A et zone B ?', 'Seulement les couleurs des marques latérales (inversées).', 'iala'],
      ['Comment reconnaître une marque de jour ? de nuit ?', 'Jour : forme, couleur, voyant. Nuit : couleur et rythme du feu.', 'iala'],
      ['Sens de lecture des marques latérales ?', 'Du large vers le port (en entrant).', 'laterales'],
      ['Marque bâbord en zone A ?', 'Rouge, cylindrique, voyant cylindre rouge, feu rouge.', 'laterales'],
      ['Marque tribord en zone A ?', 'Verte, conique, voyant cône pointe en haut, feu vert.', 'laterales'],
      ['Bouée rouge avec une bande verte (zone A) ?', 'Chenal préféré à tribord : la laisser à bâbord en entrant. Feu Fl(2+1) rouge.', 'laterales'],
      ['Rythme d\'une marque de chenal préféré ?', 'Fl(2+1) (2 éclats + 1 éclat).', 'laterales'],
      ['Cardinale Nord : voyant et feu ?', 'Deux cônes pointes en haut ; noir en haut, jaune en bas. Feu Q ou VQ continu.', 'cardinales'],
      ['Cardinale Est : voyant et feu ?', 'Cônes opposés par la base ; noir-jaune-noir. Q(3) 10 s.', 'cardinales'],
      ['Cardinale Sud : voyant et feu ?', 'Deux cônes pointes en bas ; jaune en haut, noir en bas. Q(6) + LFl 15 s.', 'cardinales'],
      ['Cardinale Ouest : voyant et feu ?', 'Cônes pointe à pointe ; jaune-noir-jaune. Q(9) 15 s.', 'cardinales'],
      ['Je vois une cardinale Sud. Où passer ?', 'Au sud de la marque. Le danger est au nord.', 'cardinales'],
      ['Pourquoi un éclat long après Q(6) sur la cardinale Sud ?', 'Pour ne pas confondre avec Q(3) ou Q(9).', 'cardinales'],
      ['Danger isolé : aspect et feu ?', 'Noire avec bande rouge, 2 boules noires. Feu blanc Fl(2).', 'autres'],
      ['Eaux saines : aspect et feu ?', 'Bandes verticales rouges et blanches, boule rouge. Feu blanc Iso, Oc, LFl 10 s ou Mo(A).', 'autres'],
      ['Marque spéciale : aspect et feu ?', 'Jaune, voyant en X jaune. Feu jaune.', 'autres'],
      ['Marque d\'épave : aspect et feu ?', 'Bandes verticales bleues et jaunes, croix jaune. Feu bleu et jaune alternés.', 'autres'],
      ['Danger nouveau grave : que fait-on ?', 'On peut doubler la marque (latérale, cardinale ou épave).', 'autres'],
      ['Feu à éclats (Fl) ?', 'La lumière dure moins longtemps que l\'obscurité.', 'rythmes'],
      ['Feu à occultations (Oc) ?', 'La lumière dure plus longtemps que l\'obscurité.', 'rythmes'],
      ['Feu isophase (Iso) ?', 'Lumière et obscurité de même durée.', 'rythmes'],
      ['Scintillant (Q) : combien d\'éclats par minute ?', '50 à 79 (VQ : 80 à 159 ; UQ : 160 et plus).', 'rythmes'],
      ['Qu\'est-ce que la période d\'un feu ?', 'Le temps entre le début de deux cycles identiques.', 'rythmes'],
      ['Dans quel ouvrage trouver les phares ?', 'Feux et signaux de brume du SHOM (Admiralty List of Lights en anglais).', 'rythmes'],
      ['Vitesse dans la bande des 300 m ?', '5 nœuds maximum.', 'plages'],
      ['À quoi sert le chenal traversier ?', 'À accéder à la plage. Interdit à la baignade, 5 nœuds max.', 'plages'],
      ['Signal de marée montante, de nuit ?', 'Vert au-dessus de blanc (de jour : triangle pointe en haut).', 'maree'],
      ['Signal d\'étale de pleine mer, de jour ?', 'Pavillon blanc avec une croix de Saint-André noire (de nuit : 2 blancs côte à côte).', 'maree'],
      ['Valeur d\'une boule dans les signaux de hauteur d\'eau ?', '5 m (cylindre 1 m, cône pointe en bas 0,2 m).', 'maree'],
      ['Port : 3 feux rouges fixes ?', 'Passage interdit.', 'port'],
      ['Port : 3 rouges à éclats ?', 'Danger grave, port fermé.', 'port'],
      ['Port : vert-blanc-vert ?', 'Entrée réglementée : demander les instructions à la capitainerie.', 'port'],
      ['Sémaphore : une boule le jour ?', 'Vent fort, force 6 à 7.', 'meteo'],
      ['Sémaphore : une croix ?', 'Ouragan (force 12). De nuit : rouge-vert-rouge.', 'meteo'],
      ['Sémaphore : 2 cônes pointes en bas ?', 'Coup de vent débutant dans le secteur SE.', 'meteo']
    ],
    qcm: [
      { q: 'Dans quelle zone IALA se trouvent les États-Unis ?', r: ['Zone B', 'Zone A', 'Zone C', 'Ils n\'ont pas de balisage IALA'], e: 'Zone B : Amériques, Caraïbes, Japon, Philippines, Corées.', f: 'iala' },
      { q: 'Qu\'est-ce qui diffère entre les zones A et B ?', r: ['Les couleurs des marques latérales', 'Les marques cardinales', 'Les marques de danger isolé', 'Les rythmes des eaux saines'], e: 'Seules les latérales changent.', f: 'iala' },
      { q: 'Le « voyant » d\'une bouée, c\'est…', r: ['La forme posée au sommet', 'Son feu', 'Son numéro', 'Son réflecteur radar'], e: 'Exemple : deux cônes sur une cardinale.', f: 'iala' },
      { q: 'En zone A, en entrant au port, une bouée rouge cylindrique se laisse…', r: ['À bâbord', 'À tribord', 'Indifféremment', 'Au nord'], e: 'Rouge = bâbord en zone A, sens du large vers le port.', f: 'laterales' },
      { q: 'En zone A, en SORTANT du port, la bouée verte se laisse…', r: ['À bâbord', 'À tribord', 'Au sud', 'Indifféremment'], e: 'En sortant, tout s\'inverse : vert à bâbord.', f: 'laterales' },
      { q: 'En zone B, en entrant au port, la bouée rouge se laisse…', r: ['À tribord', 'À bâbord', 'Indifféremment', 'Elle n\'existe pas'], e: 'Couleurs inversées en zone B (« red right returning »).', f: 'laterales' },
      { q: 'Forme d\'une marque tribord ?', r: ['Conique', 'Cylindrique', 'Sphérique', 'En X'], e: 'Voyant cône pointe en haut.', f: 'laterales' },
      { q: 'Bouée rouge avec une large bande verte, zone A ?', r: ['Chenal préféré à tribord', 'Chenal préféré à bâbord', 'Danger isolé', 'Eaux saines'], e: 'Forme et couleur dominante de bâbord : on la laisse à bâbord, le chenal principal est à tribord.', f: 'laterales' },
      { q: 'Rythme du feu d\'une marque de chenal préféré ?', r: ['Fl(2+1)', 'Fl(2)', 'Q(3)', 'Iso'], e: 'Groupes composés 2 + 1.', f: 'laterales' },
      { q: 'Tu vois une cardinale Ouest. Tu passes…', r: ['À l\'ouest de la marque', 'À l\'est de la marque', 'Au nord', 'N\'importe où'], e: 'On passe du côté indiqué par son nom. Le danger est à l\'est.', f: 'cardinales' },
      { q: 'Voyant à deux cônes pointes en bas ?', r: ['Cardinale Sud', 'Cardinale Nord', 'Cardinale Est', 'Cardinale Ouest'], e: 'Pointes en bas = Sud, noir en bas.', f: 'cardinales' },
      { q: 'Voyant à deux cônes opposés par la base (forme d\'œuf) ?', r: ['Cardinale Est', 'Cardinale Ouest', 'Cardinale Sud', 'Danger isolé'], e: 'Est : noir-jaune-noir.', f: 'cardinales' },
      { q: 'Couleurs d\'une cardinale Ouest (haut → bas) ?', r: ['Jaune-noir-jaune', 'Noir-jaune-noir', 'Noir-jaune', 'Jaune-noir'], e: 'Pointes vers l\'intérieur = noir au milieu.', f: 'cardinales' },
      { q: 'Feu Q(6) + LFl 15 s blanc ?', r: ['Cardinale Sud', 'Cardinale Est', 'Cardinale Ouest', 'Danger isolé'], e: '6 comme 6 h sur une horloge.', f: 'cardinales' },
      { q: 'Feu Q(3) 10 s blanc ?', r: ['Cardinale Est', 'Cardinale Ouest', 'Cardinale Sud', 'Chenal préféré'], e: '3 h = Est.', f: 'cardinales' },
      { q: 'Feu blanc scintillant continu ?', r: ['Cardinale Nord', 'Cardinale Sud', 'Eaux saines', 'Danger isolé'], e: '12 h = continu.', f: 'cardinales' },
      { q: 'Feu Q(9) 15 s blanc ?', r: ['Cardinale Ouest', 'Cardinale Est', 'Cardinale Nord', 'Marque spéciale'], e: '9 h = Ouest.', f: 'cardinales' },
      { q: 'Une cardinale Nord signale un danger situé…', r: ['Au sud de la marque', 'Au nord de la marque', 'Sous la marque', 'À l\'est de la marque'], e: 'On passe au nord, le danger est au sud.', f: 'cardinales' },
      { q: 'Marque noire à bande rouge avec deux boules noires ?', r: ['Danger isolé', 'Eaux saines', 'Cardinale Est', 'Marque d\'épave'], e: 'Danger limité, sous la marque. Feu Fl(2).', f: 'autres' },
      { q: 'Feu blanc Fl(2) ?', r: ['Danger isolé', 'Eaux saines', 'Cardinale Est', 'Marque spéciale'], e: '2 éclats = 2 boules.', f: 'autres' },
      { q: 'Bandes verticales rouges et blanches, boule rouge ?', r: ['Eaux saines', 'Danger isolé', 'Chenal préféré', 'Marque spéciale'], e: 'Zone sans danger, souvent axe de chenal ou atterrissage.', f: 'autres' },
      { q: 'Feu possible d\'une marque d\'eaux saines ?', r: ['Iso, Oc, LFl 10 s ou Mo(A)', 'Fl(2)', 'Q(9) 15 s', 'Fl(2+1) R'], e: 'Toujours blanc.', f: 'autres' },
      { q: 'Marque jaune avec voyant en X ?', r: ['Marque spéciale', 'Marque d\'épave', 'Balisage de plage', 'Cardinale'], e: 'Zone particulière (militaire, câbles…). Feu jaune.', f: 'autres' },
      { q: 'Marque à bandes verticales bleues et jaunes, croix jaune ?', r: ['Épave (danger nouveau)', 'Marque spéciale', 'Eaux saines', 'Marque de plage'], e: 'Marque d\'épave de 2006, feu bleu/jaune alterné.', f: 'autres' },
      { q: 'Un danger nouveau grave peut être signalé par…', r: ['Une marque doublée', 'Une bouée noire seule', 'Un feu violet', 'Un pavillon O'], e: 'Les marques habituelles, doublées si le danger est grave.', f: 'autres' },
      { q: 'Feu dont la lumière dure plus longtemps que l\'obscurité ?', r: ['À occultations (Oc)', 'À éclats (Fl)', 'Isophase (Iso)', 'Scintillant (Q)'], e: 'Oc : on voit surtout la lumière, coupée par de courtes éclipses.', f: 'rythmes' },
      { q: 'Feu isophase ?', r: ['Lumière et obscurité égales', 'Lumière plus longue', 'Lumière plus courte', '50 éclats par minute'], e: 'Iso = même durée.', f: 'rythmes' },
      { q: 'Un scintillant rapide (VQ) a…', r: ['80 à 159 éclats par minute', '50 à 79 par minute', '160 et plus', '120 exactement'], e: 'Q : 50-79 ; VQ : 80-159 ; UQ : 160+.', f: 'rythmes' },
      { q: 'Sur la carte, « 15M » dans la description d\'un feu, c\'est…', r: ['Sa portée en milles', 'Sa hauteur en mètres', 'Sa période', 'Son numéro'], e: 'M = milles ; m = mètres de hauteur.', f: 'rythmes' },
      { q: 'Vitesse maximale dans la bande des 300 m ?', r: ['5 nœuds', '3 nœuds', '8 nœuds', '10 nœuds'], e: 'Cours p. 78.', f: 'plages' },
      { q: 'Le chenal traversier est…', r: ['Interdit à la baignade', 'Réservé à la baignade', 'Interdit aux bateaux', 'Limité à 10 nœuds'], e: 'Il sert à accéder à la plage, vitesse 5 nœuds.', f: 'plages' },
      { q: 'Signal de marée de nuit : blanc au-dessus de vert ?', r: ['Marée descendante', 'Marée montante', 'Étale de pleine mer', 'Étale de basse mer'], e: 'Montante : vert sur blanc. Descendante : blanc sur vert.', f: 'maree' },
      { q: 'Une flamme bleue au mât de signaux de marée ?', r: ['Étale de basse mer', 'Étale de pleine mer', 'Marée montante', 'Port fermé'], e: 'De nuit : 2 verts côte à côte.', f: 'maree' },
      { q: 'Signaux de hauteur d\'eau : une boule vaut…', r: ['5 m', '1 m', '0,2 m', '10 m'], e: 'Cylindre 1 m, cône pointe en bas 0,2 m.', f: 'maree' },
      { q: 'À l\'entrée du port : vert, vert, blanc ?', r: ['Double sens, passer avec prudence', 'Sens unique, passage autorisé', 'Passage interdit', 'Port fermé'], e: 'Cours p. 81.', f: 'port' },
      { q: 'À l\'entrée du port : 3 rouges fixes + un feu jaune à côté ?', r: ['Interdit, sauf pour les navires qui restent hors du chenal', 'Danger grave, port fermé', 'Passage libre', 'Entrée réglementée'], e: 'Le jaune autorise les petits navires hors chenal.', f: 'port' },
      { q: 'À l\'entrée du port : 3 rouges à éclats ?', r: ['Danger grave, port fermé', 'Passage interdit simple', 'Double sens', 'Demander la capitainerie'], e: 'Cours p. 81.', f: 'port' },
      { q: 'Sémaphore, de jour : un cône pointe en haut ?', r: ['Coup de vent secteur NW', 'Coup de vent secteur SW', 'Vent fort de direction quelconque', 'Ouragan'], e: 'Pointe en haut = Nord ; un cône = Ouest.', f: 'meteo' },
      { q: 'Sémaphore, de nuit : rouge au-dessus de blanc ?', r: ['Coup de vent secteur NE', 'Coup de vent secteur SE', 'Vent fort', 'Ouragan'], e: 'NE : 2 cônes pointes en haut le jour.', f: 'meteo' },
      { q: 'Sémaphore : deux pavillons superposés ?', r: ['Le vent va tourner en sens inverse des aiguilles d\'une montre', 'Le vent va tourner dans le sens des aiguilles d\'une montre', 'Port fermé', 'Ouragan'], e: '1 pavillon = sens des aiguilles ; 2 pavillons = sens inverse.', f: 'meteo' }
    ]
  });
})();
