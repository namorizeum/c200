/* Circuits et auxiliaires — module M1-1 (mécanicien 250 kW) */
C200.module({
  id: 'circuits', bloc: '250', ordre: 17, court: 'CIRC', titre: 'Circuits et auxiliaires',
  intro: 'Pompes, assèchement, eau de mer et vannes de coque, gazole et soutage, incendie, appareil à gouverner, auxiliaires et sécurité en machine. Module M1-1 du 250 kW.',
  calculs: ['circ-assechement'],
  fiches: [
    {
      id: 'pompes', titre: 'Les pompes', src: 'Programme 250 kW (complément) ; Guide Pallas p. 30, 42, 49',
      html: `<div class="tw"><table><tr><th>Type</th><th>Principe</th><th>À retenir</th></tr>
<tr><td><b>Centrifuge</b></td><td>Une roue à aubes projette l'eau vers l'extérieur</td><td><b>Pas auto-amorçante</b> : il faut la mettre en charge ou l'amorcer. Débit régulier, peut tourner vanne fermée un court moment.</td></tr>
<tr><td><b>Volumétrique</b> (engrenages, palettes, piston, membrane, rouet)</td><td>Un volume est enfermé puis chassé à chaque tour</td><td><b>Auto-amorçante</b>. Ne <b>jamais fermer le refoulement</b> : la pression monte, il faut une soupape de sûreté.</td></tr></table></div>
<ul><li>Pompe à <b>rouet</b> (turbine caoutchouc) : eau de mer du moteur, cale. Ne doit pas tourner à sec.</li><li>Pompe à <b>membrane</b> : pompe de cale manuelle, pompe d'alimentation en gazole.</li><li>Pompe à <b>engrenages</b> : huile, gazole.</li></ul>
<h3>Aspiration</h3>
<p>Une pompe « aspire » grâce à la pression atmosphérique : en théorie au plus <b>10 m</b> de hauteur d'eau, en pratique bien moins (6 à 7 m). Prise d'air sur l'aspiration = pompe désamorcée. <b>Cavitation</b> : bulles de vapeur dans la pompe (aspiration trop dure), bruit et usure.</p>`
    },
    {
      id: 'cale', titre: 'L\'assèchement des cales', src: 'Programme 250 kW (complément) ; Cours MARPOL',
      html: `<p>Chaque compartiment étanche doit pouvoir être asséché : <b>pompes de cale</b> électriques (souvent automatiques, à flotteur) et <b>manuelle</b> de secours, <b>crépines</b> au point bas (puisard), clapets anti-retour, <b>alarmes de niveau</b> à la passerelle.</p>
<ul><li>Garder la cale <b>propre</b> : chiffons et déchets bouchent les crépines au pire moment.</li><li>Tester les pompes et les alarmes régulièrement.</li><li>Un réarmement fréquent de la pompe automatique signale une <b>entrée d'eau</b> : chercher (presse-étoupe, durite, vanne de coque).</li></ul>
<div class="piege"><p>Eaux de cale <b>huileuses</b> : interdit de les pomper à la mer (MARPOL annexe I). Les garder à bord (caisse) pour le port, ou les passer au <b>séparateur</b> (15 ppm, navire en route).</p></div>
<h3>Voie d'eau</h3>
<p>Comparer le débit d'entrée et celui des pompes. Si l'eau gagne : <b>colmater d'abord</b> (fermer la vanne en cause, bouchon conique en bois, paillet), puis pomper.</p>`
    },
    {
      id: 'eaudemer', titre: 'Vannes de coque et eau de mer', src: 'Cours C500 Entretien p. 15-16 ; Guide Pallas p. 45-48',
      html: `<p>Toute ouverture sous la flottaison est un risque de voie d'eau : prises de refroidissement, pompes, toilettes, lavabos, sondeur…</p>
<ul><li><b>Vannes de coque</b> (à boisseau ou quart de tour) : les <b>manœuvrer régulièrement</b> pour qu'elles ne grippent pas ; savoir où elles sont, même dans le noir.</li><li><b>Durites</b> armées, <b>doubles colliers inox</b> sur chaque raccord sous la flottaison.</li><li><b>Bouchon conique</b> en bois attaché près de chaque vanne.</li><li><b>Filtre à eau de mer</b> avant la pompe : à vérifier souvent (algues, sacs plastiques).</li><li><b>Anodes</b> sur les circuits et l'échangeur (corrosion électrolytique).</li></ul>
<p>Visite des vannes : à flot (manœuvre, joints, fuites) ou au carénage, démontage, rectification des sièges, joints, boulonnerie.</p>`
    },
    {
      id: 'gazole', titre: 'Le gazole du bord et le soutage', src: 'Programme 250 kW (complément) ; Guide Pallas p. 28-29 ; Cours MARPOL',
      html: `<h3>Stockage</h3>
<p>Caisses (soutes) cloisonnées contre les ballottements, avec <b>mise à l'air libre</b>, <b>jauge</b> ou sonde, purge au point bas pour l'eau, et <b>vanne à fermeture rapide</b> commandable de l'extérieur du local (en cas d'incendie). Le tuyau de remplissage arrive par un <b>nable</b> de pont.</p>
<p>Ennemis du gazole : l'<b>eau</b> (condensation : garder les caisses pleines), les impuretés, les <b>bactéries</b> qui se développent à l'interface eau-gazole (boues qui colmatent les filtres).</p>
<h3>Soutage : précautions</h3>
<ul><li>Moteurs et feux éteints, <b>interdiction de fumer</b>, extincteur prêt.</li><li><b>Dalots bouchés</b>, bac et <b>absorbants</b> (kit SOPEP) prêts.</li><li>Connaître la quantité à prendre et l'espace libre ; sonder ; ne pas remplir à ras bord (dilatation).</li><li>Une personne en veille au nable, liaison avec le fournisseur ; débit réduit en fin de plein.</li><li>Noter le soutage au <b>registre des hydrocarbures</b> (si le navire y est soumis).</li><li>En cas de déversement : stopper, contenir, absorber, prévenir.</li></ul>`
    },
    {
      id: 'incendie', titre: 'Le feu en machine', src: 'Programme 250 kW (complément) ; Cours DCSS (SOLAS)',
      html: `<p>Le <b>triangle du feu</b> : combustible + comburant (oxygène) + chaleur. Supprimer un côté éteint le feu.</p>
<div class="tw"><table><tr><th>Classe</th><th>Feu de…</th><th>Agent</th></tr>
<tr><td>A</td><td>Solides (bois, tissus)</td><td>Eau, mousse, poudre</td></tr>
<tr><td>B</td><td>Liquides (gazole, huile)</td><td>Mousse, poudre, CO2 — <b>pas de jet d'eau</b></td></tr>
<tr><td>C</td><td>Gaz</td><td>Poudre ; d'abord couper le gaz</td></tr>
<tr><td>D</td><td>Métaux</td><td>Poudre spéciale</td></tr>
<tr><td>F</td><td>Huiles de cuisson</td><td>Extincteur spécial, couverture</td></tr>
<tr><td>Électrique</td><td>Tableaux, moteurs</td><td>CO2, poudre ; couper le courant</td></tr></table></div>
<h3>Causes en machine</h3>
<p>Fuite de <b>gazole ou d'huile sur une pièce chaude</b> (échappement, turbo), chiffons gras, court-circuit, travaux par points chauds.</p>
<h3>Conduite à tenir</h3>
<ol><li>Alarme, stopper le moteur, <b>couper le gazole</b> (vanne à fermeture rapide) et la <b>ventilation</b>, fermer le local.</li><li>Attaquer à l'extincteur si le feu est naissant ; sinon <b>évacuer</b> et utiliser l'extinction fixe (<b>CO2</b>) après avoir <b>compté les personnes</b> (le CO2 tue).</li><li>Refroidir les cloisons, surveiller la <b>reprise</b>, ne pas rouvrir trop tôt.</li></ol>
<p>Le circuit incendie : pompe incendie, collecteur, bouches, manches et lances ; pompe de secours indépendante sur les navires concernés.</p>`
    },
    {
      id: 'gouverner', titre: 'L\'appareil à gouverner', src: 'Programme 250 kW (complément) ; Cours Manœuvre',
      html: `<p>Sur les petits navires : <b>barre hydraulique</b>. La roue entraîne une <b>pompe</b> à main qui envoie l'huile vers un <b>vérin</b> qui fait tourner la mèche du safran (par la barre franche intérieure). Ou un groupe <b>électro-hydraulique</b> commandé par le pilote automatique.</p>
<ul><li>Vérifier avant l'appareillage : <b>essai de barre</b> d'un bord à l'autre, comparaison avec l'<b>axiomètre</b> (indicateur d'angle de barre).</li><li>Niveau d'huile, absence de fuites, <b>purge de l'air</b> (barre molle, jeu).</li><li>Secours : <b>barre franche de secours</b> sur la tête de mèche, commande locale dans le local barre.</li></ul>`
    },
    {
      id: 'auxiliaires', titre: 'Les autres auxiliaires', src: 'Programme 250 kW (complément) ; Guide Pallas p. 63 à 72',
      html: `<ul>
<li><b>Groupe électrogène</b> : moteur diesel + alternateur, produit le 230 V (ou 400 V) à 50 Hz. Même entretien qu'un moteur propulsif.</li>
<li><b>Alternateur</b> et <b>démarreur</b> du moteur : voir la matière Électricité.</li>
<li><b>Compresseur d'air</b> : air de démarrage des gros moteurs, sifflet, outillage. Purger l'eau des bouteilles ; soupape de sûreté.</li>
<li><b>Hydraulique</b> (treuils, grues, vire-casier) : pompe, distributeurs, vérins ; attention aux flexibles sous pression.</li>
<li><b>Froid</b> (cale à poisson, chambre froide) : compresseur → condenseur → détendeur → évaporateur. Le fluide frigorigène ne doit pas être relâché (MARPOL annexe VI).</li>
<li><b>Eaux usées</b> : caisse ou station de traitement, rejet selon MARPOL annexe IV.</li></ul>`
    },
    {
      id: 'securite', titre: 'La sécurité en machine', src: 'Programme 250 kW (complément)',
      html: `<ul>
<li><b>Consignation</b> avant toute intervention : moteur arrêté, batterie coupée, clé retirée, panneau « ne pas démarrer », circuits sous pression purgés.</li>
<li><b>Pièces tournantes</b> (courroies, arbres, accouplements) : carters en place, pas de vêtements flottants.</li>
<li><b>Brûlures</b> : échappement, turbo, eau du circuit fermé sous pression (ne pas ouvrir le vase chaud).</li>
<li><b>Bruit</b> : protections auditives. <b>Produits</b> : gants, lunettes (acide de batterie, gazole, huile).</li>
<li><b>Ventilation</b> du local ; vapeurs d'hydrogène près des batteries en charge.</li>
<li><b>Propreté</b> : cale sans huile, pas de chiffons gras, fuites réparées.</li>
<li><b>Travaux par points chauds</b> (soudure, meulage) : autorisation, extincteur, surveillance après les travaux.</li>
<li>Ne jamais rester seul en machine sans prévenir la passerelle.</li></ul>`
    }
  ],
  cartes: [
    ['Pompe centrifuge : auto-amorçante ?', 'Non : il faut l\'amorcer ou la mettre en charge.', 'pompes'],
    ['Pompe volumétrique : quel piège ?', 'Ne jamais fermer le refoulement : il faut une soupape de sûreté.', 'pompes'],
    ['Hauteur d\'aspiration maximale théorique ?', 'Environ 10 m d\'eau (pratique : 6-7 m).', 'pompes'],
    ['Cavitation ?', 'Bulles de vapeur dans la pompe (aspiration trop difficile) : bruit, usure.', 'pompes'],
    ['Pompe à membrane : exemples ?', 'Pompe de cale manuelle, pompe d\'alimentation en gazole.', 'pompes'],
    ['Pourquoi garder la cale propre ?', 'Les déchets bouchent les crépines des pompes de cale.', 'cale'],
    ['Eaux de cale huileuses ?', 'Interdit de pomper à la mer : caisse à terre ou séparateur 15 ppm en route.', 'cale'],
    ['Voie d\'eau : colmater ou pomper d\'abord ?', 'Colmater d\'abord si l\'eau gagne, puis pomper.', 'cale'],
    ['Pourquoi manœuvrer les vannes de coque ?', 'Pour qu\'elles ne grippent pas et fonctionnent le jour J.', 'eaudemer'],
    ['Raccord de durite sous la flottaison ?', 'Double collier inox.', 'eaudemer'],
    ['À attacher près de chaque vanne de coque ?', 'Un bouchon conique en bois.', 'eaudemer'],
    ['Vanne à fermeture rapide : rôle ?', 'Couper le gazole depuis l\'extérieur du local en cas d\'incendie.', 'gazole'],
    ['Ennemis du gazole stocké ?', 'L\'eau (condensation), les impuretés, les bactéries.', 'gazole'],
    ['Soutage : 3 précautions anti-pollution ?', 'Dalots bouchés, absorbants prêts, veille au nable.', 'gazole'],
    ['Triangle du feu ?', 'Combustible, comburant (oxygène), chaleur.', 'incendie'],
    ['Feu de gazole : quel agent ?', 'Mousse, poudre, CO2. Pas de jet d\'eau.', 'incendie'],
    ['Classe A, B, C ?', 'A solides, B liquides, C gaz.', 'incendie'],
    ['Avant de lancer le CO2 en machine ?', 'Évacuer et compter les personnes, fermer le local, couper ventilation et gazole.', 'incendie'],
    ['Cause n° 1 d\'incendie en machine ?', 'Fuite de gazole ou d\'huile sur une pièce chaude.', 'incendie'],
    ['Barre hydraulique : éléments ?', 'Pompe à main (roue), tuyaux, vérin sur la mèche.', 'gouverner'],
    ['Barre molle avec du jeu ?', 'Air dans le circuit hydraulique : purger ; vérifier le niveau.', 'gouverner'],
    ['Axiomètre ?', 'Indicateur d\'angle de barre.', 'gouverner'],
    ['Cycle frigorifique ?', 'Compresseur, condenseur, détendeur, évaporateur.', 'auxiliaires'],
    ['Groupe électrogène ?', 'Moteur diesel + alternateur : 230/400 V, 50 Hz.', 'auxiliaires'],
    ['Consignation ?', 'Moteur arrêté, batterie coupée, clé retirée, panneau, pressions purgées avant d\'intervenir.', 'securite'],
    ['Vase d\'expansion chaud : danger ?', 'Eau sous pression brûlante : ne pas ouvrir à chaud.', 'securite']
  ],
  qcm: [
    { q: 'Quelle pompe n\'est pas auto-amorçante ?', r: ['La pompe centrifuge', 'La pompe à membrane', 'La pompe à rouet', 'La pompe à engrenages'], e: 'Il faut la remplir d\'eau ou la mettre en charge.', f: 'pompes' },
    { q: 'Sur une pompe volumétrique, fermer la vanne de refoulement…', r: ['Fait monter la pression dangereusement', 'Ne change rien', 'Arrête la pompe', 'Fait caviter'], e: 'D\'où la soupape de sûreté.', f: 'pompes' },
    { q: 'Une pompe peut aspirer de l\'eau, en théorie, jusqu\'à…', r: ['10 m de hauteur', '30 m', '100 m', '1 m'], e: 'Limite de la pression atmosphérique.', f: 'pompes' },
    { q: 'La pompe de cale automatique se déclenche souvent. Tu…', r: ['Cherches l\'entrée d\'eau', 'La débranches', 'Augmentes son débit', 'Attends le carénage'], e: 'Presse-étoupe, durite, vanne…', f: 'cale' },
    { q: 'Des eaux de cale huileuses peuvent être…', r: ['Gardées à bord pour le port ou passées au séparateur', 'Pompées à la mer à plus de 12 M', 'Pompées au port', 'Mélangées aux eaux usées'], e: 'MARPOL annexe I.', f: 'cale' },
    { q: 'Sous la flottaison, chaque durite est tenue par…', r: ['Deux colliers inox', 'Un collier acier', 'Du ruban adhésif', 'Rien, elle est emmanchée'], e: 'Sécurité contre la voie d\'eau.', f: 'eaudemer' },
    { q: 'La vanne à fermeture rapide de gazole sert à…', r: ['Couper le gazole de l\'extérieur en cas de feu', 'Purger l\'eau', 'Régler le débit du moteur', 'Remplir la soute'], e: 'On ne doit pas entrer dans le local en feu.', f: 'gazole' },
    { q: 'Pendant un soutage, les dalots doivent être…', r: ['Bouchés', 'Ouverts', 'Graissés', 'Démontés'], e: 'Pour qu\'un débordement reste à bord.', f: 'gazole' },
    { q: 'Pourquoi garder les soutes pleines au port ?', r: ['Limiter la condensation (eau)', 'Pour la stabilité seulement', 'Pour éviter le vol', 'Pour le refroidissement'], e: 'L\'eau abîme pompe et injecteurs.', f: 'gazole' },
    { q: 'Sur un feu de gazole, on n\'utilise pas…', r: ['Un jet d\'eau', 'La mousse', 'La poudre', 'Le CO2'], e: 'L\'eau étale le feu de liquide.', f: 'incendie' },
    { q: 'Un feu de tableau électrique s\'attaque…', r: ['Courant coupé, au CO2 ou à la poudre', 'À l\'eau', 'À la mousse', 'Avec un seau de sable mouillé'], e: 'Couper d\'abord.', f: 'incendie' },
    { q: 'Avant de déclencher le CO2 fixe en machine, il faut…', r: ['Évacuer et compter tout le monde', 'Ouvrir la ventilation', 'Démarrer le moteur', 'Ouvrir les portes'], e: 'Le CO2 est mortel.', f: 'incendie' },
    { q: 'Une barre hydraulique devient molle avec du jeu. Cause probable ?', r: ['De l\'air dans le circuit', 'Trop d\'huile', 'Un safran trop grand', 'Le pilote automatique'], e: 'Purger et faire l\'appoint.', f: 'gouverner' },
    { q: 'Dans un groupe frigorifique, le fluide se vaporise dans…', r: ['L\'évaporateur', 'Le condenseur', 'Le compresseur', 'Le détendeur'], e: 'Il y prend la chaleur de la chambre froide.', f: 'auxiliaires' },
    { q: 'Avant d\'intervenir sur un moteur, on…', r: ['Consigne : arrêt, batterie coupée, panneau', 'Le laisse au ralenti', 'Coupe seulement le gazole', 'Prévient l\'armateur'], e: 'Personne ne doit pouvoir le démarrer.', f: 'securite' }
  ]
});
