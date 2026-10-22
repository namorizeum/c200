/* Moteur diesel — module M1-1 (mécanicien 250 kW) */
C200.module({
  id: 'moteur', bloc: '250', ordre: 16, court: 'MOT', titre: 'Moteur diesel',
  intro: 'Principe, organes, définitions et calculs, injection, air, graissage, refroidissement, transmission et hélice, conduite, pannes et entretien. Module M1-1 (machines marines) du 250 kW.',
  calculs: ['mot-puissance', 'mot-cylindree', 'mot-couple', 'mot-conso', 'mot-helice', 'mot-carene', 'mot-fumee'],
  fiches: [
    {
      id: 'principe', titre: 'Le principe du diesel', src: 'Guide d\'entretien des moteurs diesel (Pallas) p. 9 à 12',
      html: `<p>Le moteur diesel n'aspire <b>que de l'air</b>. Comprimé très fort (jusqu'à environ <b>40 bars</b>), l'air monte vers <b>600 °C</b>. On injecte alors le gazole sous haute pression : il <b>s'enflamme tout seul</b> (auto-inflammation). Pas de bougie d'allumage.</p>
<h3>Le cycle à 4 temps (Beau de Rochas, 1862)</h3>
<div class="tw"><table><tr><th>Temps</th><th>Piston</th><th>Soupapes</th><th>Ce qui se passe</th></tr>
<tr><td>1. <b>Admission</b></td><td>Descend</td><td>Admission ouverte</td><td>Le cylindre se remplit d'air.</td></tr>
<tr><td>2. <b>Compression</b></td><td>Monte</td><td>Fermées</td><td>L'air est comprimé et chauffe. Injection juste avant le PMH.</td></tr>
<tr><td>3. <b>Combustion-détente</b></td><td>Descend</td><td>Fermées</td><td>Le gazole brûle, la pression chasse le piston : <b>seul temps moteur</b>.</td></tr>
<tr><td>4. <b>Échappement</b></td><td>Monte</td><td>Échappement ouverte</td><td>Les gaz brûlés sont chassés.</td></tr></table></div>
<div class="formule">4 temps = 2 tours de vilebrequin · 2 temps = 1 tour</div>
<p>Le moteur <b>2 temps</b> fait tout le cycle en un tour (plus puissant à cylindrée égale) ; il équipe surtout les gros moteurs.</p>
<h3>Pourquoi le diesel en marine</h3>
<p>Meilleur <b>rendement</b> des moteurs thermiques, <b>robustesse</b> (pièces surdimensionnées), longévité, pas de circuit d'allumage, gazole moins dangereux que l'essence. En contrepartie : plus lourd, bruit de cognement.</p>`
    },
    {
      id: 'organes', titre: 'Les organes du moteur', src: 'Guide Pallas p. 15 à 20',
      html: `<h3>Organes fixes</h3>
<ul><li><b>Bloc-cylindres</b> : pièce maîtresse, en fonte, avec des cylindres usinés ou des <b>chemises</b> ; refroidi par circulation d'eau.</li><li><b>Culasse</b> : ferme le haut du cylindre, forme la chambre de combustion ; porte soupapes, injecteur, conduits d'admission et d'échappement.</li><li><b>Joint de culasse</b> : étanchéité culasse-bloc.</li><li><b>Carters</b> : couvercles ; le carter inférieur contient l'huile.</li></ul>
<h3>Organes mobiles (l'attelage mobile)</h3>
<ul><li><b>Piston</b> (alliage léger) avec ses <b>segments</b> : segment de feu (en haut, souvent chromé), segments d'étanchéité, segment <b>racleur</b> d'huile.</li><li><b>Bielle</b> (acier, section en H) : relie le piston au vilebrequin. Le chapeau est appairé à sa bielle (respecter les repères).</li><li><b>Coussinets</b> : demi-coquilles antifriction ; abîmés le plus souvent par un <b>manque d'huile</b>.</li><li><b>Vilebrequin</b> et <b>volant moteur</b> : transforment le va-et-vient en rotation ; le volant régularise la rotation.</li></ul>
<h3>La distribution</h3>
<p>L'<b>arbre à cames</b>, entraîné par le vilebrequin, tourne <b>2 fois moins vite</b> que lui. Il ouvre les <b>soupapes</b> par poussoirs, tiges et <b>culbuteurs</b> ; des ressorts les referment. Arbre à cames en tête : entraîné par une <b>courroie crantée</b> (à changer à l'échéance : sa rupture abîme le moteur).</p>
<p>Le <b>jeu aux culbuteurs</b> se règle moteur <b>froid</b>, à la valeur du constructeur.</p>`
    },
    {
      id: 'definitions', titre: 'Définitions et calculs', src: 'Guide Pallas p. 21-22, 62',
      html: `<ul><li><b>Alésage</b> (D) : diamètre du cylindre. <b>Course</b> (C) : distance PMB-PMH (un demi-tour de vilebrequin).</li><li><b>PMH / PMB</b> : point mort haut / bas.</li><li><b>Cylindrée unitaire</b> : volume balayé par le piston. <b>Totale</b> : × nombre de cylindres.</li><li><b>Rapport volumétrique</b> : volume total (piston au PMB) / volume restant (piston au PMH).</li><li><b>Couple</b> (N·m) : force × bras de manivelle. Couple maxi à bas régime = moteur « souple ».</li><li><b>Consommation spécifique</b> : grammes de gazole par kWh (ou par ch et par heure : 160 à 210 g/ch/h).</li></ul>
<div class="formule">V = π × D² / 4 × C</div>
<div class="formule">ε = (V + v) / v</div>
<div class="formule">P (kW) = C × 2π N / 60 / 1 000</div>
<div class="formule">1 ch = 0,736 kW · 1 kW = 1,36 ch</div>
<div class="exemple"><p>Volvo MD22 : 4 cylindres, alésage 84 mm, course 89 mm → 2,0 L ; taux de compression 18:1 ; 43,6 kW (59 ch) au vilebrequin, 41,9 kW à l'hélice.</p></div>
<p>La puissance <b>à l'hélice</b> est plus faible que la puissance au vilebrequin (inverseur, pompes, alternateur). Moteur « service léger » (plaisance, moins de 200 h/an) ou « service lourd » (pro).</p>
<h3>Vitesse limite de carène</h3>
<div class="formule">V (nd) ≈ 2,43 × √Lflottaison (m)</div>
<p>12 m à la flottaison → 8,4 nœuds. On prend un moteur ~20 % plus puissant que nécessaire pour l'atteindre.</p>`
    },
    {
      id: 'injection', titre: 'Le circuit de gazole et l\'injection', src: 'Guide Pallas p. 23 à 38, 92',
      html: `<h3>Injection directe ou indirecte</h3>
<div class="tw"><table><tr><th></th><th>Directe</th><th>Indirecte (préchambre)</th></tr>
<tr><td>Injecteur</td><td>Dans la chambre, <b>à trous</b></td><td>Dans une préchambre, <b>à téton</b></td></tr>
<tr><td>Fonctionnement</td><td>Plus brutal, cogne</td><td>Plus souple, silencieux</td></tr>
<tr><td>Consommation</td><td><b>Faible</b></td><td>Un peu plus forte</td></tr>
<tr><td>Démarrage à froid</td><td>Sans aide</td><td><b>Bougies de préchauffage</b></td></tr></table></div>
<h3>Le trajet du gazole</h3>
<ol><li><b>Réservoir</b> (cloisonné, avec mise à l'air libre et vanne).</li><li><b>Préfiltre décanteur</b> : arrête les impuretés et sépare l'<b>eau</b> (à purger).</li><li><b>Pompe d'alimentation</b> (à membrane, entraînée par l'arbre à cames, avec levier manuel).</li><li><b>Filtre fin</b> (2 à 3 microns) : protège la pompe d'injection. À changer environ toutes les 200 h ou chaque année.</li><li><b>Pompe d'injection</b> : en ligne (un élément par cylindre) ou rotative ; dose et met en haute pression.</li><li><b>Injecteurs</b> : pulvérisent le gazole ; le surplus repart au réservoir par le <b>retour de fuite</b>.</li></ol>
<p>La pompe gère aussi l'<b>avance à l'injection</b> (3 à 5° au calage, jusqu'à 25-30° à plein régime), le <b>régulateur</b> de vitesse et l'<b>arrêt</b> (on coupe le gazole).</p>
<h3>Purger le circuit</h3>
<p>Obligatoire après un changement de filtre, une <b>panne sèche</b>, un long arrêt. On purge dans le sens du gazole : vis de purge du préfiltre et du filtre (en actionnant le levier de la pompe d'alimentation), puis la pompe d'injection, puis si besoin les raccords d'injecteurs en lançant le moteur.</p>
<div class="piege"><p>La moindre impureté détruit pompe d'injection et injecteurs (très chers). Et de l'<b>air</b> dans le circuit : le moteur cale ou ne démarre pas.</p></div>`
    },
    {
      id: 'air', titre: 'L\'air : aspiration, turbo, échappement', src: 'Guide Pallas p. 26-27',
      html: `<p><b>Aspiration naturelle</b> : le piston aspire lui-même son air. Simple, courant sur les petits moteurs.</p>
<p><b>Suralimentation</b> : on comprime l'air avant de l'envoyer au cylindre, pour en mettre plus et brûler plus de gazole : plus de puissance pour la même cylindrée.</p>
<ul><li><b>Turbocompresseur</b> : une turbine entraînée par les <b>gaz d'échappement</b> fait tourner un compresseur d'air. Jusqu'à 200 000 tr/min, graissé par l'huile moteur : laisser tourner <b>au ralenti</b> avant d'arrêter un moteur qui a forcé.</li><li><b>Compresseur mécanique</b> (entraîné par courroie) : efficace à bas régime.</li><li><b>Refroidisseur d'air</b> (après le turbo) : l'air froid est plus dense.</li></ul>
<p><b>Filtre à air</b> : colmaté, il étouffe le moteur (fumée noire, perte de puissance).</p>
<p><b>Échappement humide</b> : l'eau de mer de refroidissement est injectée dans le coude d'échappement (refroidit et fait silencieux). Une <b>valve anti-siphon</b> empêche l'eau de remonter dans le moteur quand il est sous la flottaison.</p>`
    },
    {
      id: 'graissage', titre: 'Le graissage et les huiles', src: 'Guide Pallas p. 39 à 44',
      html: `<p>L'huile <b>réduit les frottements</b>, <b>refroidit</b>, <b>nettoie</b> et aide à l'<b>étanchéité</b> des segments. Sans huile : grippage, bielle coulée.</p>
<h3>Le circuit sous pression</h3>
<p>Carter → <b>crépine</b> → <b>pompe à huile</b> (à engrenages ou à rotor) → <b>clapet de décharge</b> (limite la pression) → <b>filtre</b> (15 à 20 µm, avec <b>by-pass</b> si colmaté) → <b>rampe</b> vers paliers, bielles, arbre à cames, culbuteurs, turbo → retour au carter.</p>
<p>Un <b>mano-contact</b> surveille la pression (voyant + alarme sonore). Pression courante : <b>3,5 à 5 bars</b> en marche.</p>
<div class="piege"><p>Alarme de pression d'huile : <b>stopper le moteur</b> tout de suite, puis chercher (niveau, fuite, filtre, capteur).</p></div>
<h3>Les huiles</h3>
<ul><li><b>SAE</b> : la viscosité. 15W40 = se comporte comme une 15 à froid (W = winter) et une 40 à chaud.</li><li><b>API</b> : la qualité ; lettre <b>C</b> pour les diesels (S pour l'essence).</li><li><b>ACEA</b> : norme européenne ; <b>B</b> ou E pour les diesels.</li><li>Minérale, semi-synthétique ou synthétique.</li></ul>
<p><b>Vidange</b> : moteur <b>chaud</b>, avec le filtre, environ toutes les <b>200 h ou chaque année</b> (même si le moteur a peu tourné : l'huile s'oxyde). Niveau à la jauge avant chaque départ.</p>`
    },
    {
      id: 'refroidissement', titre: 'Le refroidissement', src: 'Guide Pallas p. 45 à 50, 107',
      html: `<div class="tw"><table><tr><th></th><th>Direct (eau de mer)</th><th>Indirect (eau douce + échangeur)</th></tr>
<tr><td>Principe</td><td>L'eau de mer circule dans le moteur</td><td>Eau douce en <b>circuit fermé</b>, refroidie par l'eau de mer dans un <b>échangeur</b></td></tr>
<tr><td>Température</td><td>Basse (40 à 55 °C max, sinon dépôts de sel)</td><td>Idéale, <b>85 à 90 °C</b>, réglée par le <b>thermostat</b></td></tr>
<tr><td>Avantages</td><td>Simple, pas cher</td><td>Meilleur rendement, moins d'usure, pas de sel, pas de gel</td></tr>
<tr><td>Inconvénients</td><td>Sel, tartre, corrosion, mauvais rendement</td><td>Plus complexe, plus cher</td></tr></table></div>
<h3>Le circuit d'eau de mer</h3>
<p><b>Vanne de coque</b> → <b>filtre à eau de mer</b> → <b>pompe à rouet</b> (turbine en caoutchouc) → échangeur → injection dans l'<b>échappement</b>.</p>
<h3>Le circuit d'eau douce</h3>
<p>Pompe de circulation (courroie), <b>thermostat</b> (fermé à froid : l'eau ne passe pas par l'échangeur), <b>vase d'expansion</b> avec bouchon, liquide de refroidissement (antigel), anodes dans l'échangeur.</p>
<div class="retenir"><p>Après chaque démarrage : vérifier que l'eau <b>sort à l'échappement</b>. La turbine ne doit <b>jamais tourner à sec</b> : vanne fermée = turbine détruite en quelques secondes.</p></div>
<p>Moteur qui chauffe : vanne fermée, filtre bouché (algues, sac plastique), turbine abîmée, courroie, thermostat bloqué, échangeur entartré, joint de culasse.</p>`
    },
    {
      id: 'transmission', titre: 'Inverseur, ligne d\'arbre, hélice', src: 'Guide Pallas p. 51 à 59',
      html: `<p>Le groupe propulseur : <b>moteur</b> → <b>inverseur-réducteur</b> → <b>ligne d'arbre</b> → <b>hélice</b>.</p>
<h3>L'inverseur-réducteur</h3>
<p>Il donne le <b>point mort</b>, la <b>marche avant</b> et la <b>marche arrière</b>, et réduit le régime : une hélice a un meilleur rendement si elle est grande et tourne lentement. Réduction <b>2,7:1</b> = l'arbre tourne 2,7 fois moins vite que le moteur. Embrayage par crabots, cônes ou disques (hydrauliques). Il a sa propre huile.</p>
<div class="piege"><p>Inverser toujours <b>au ralenti</b>, en marquant un temps au point mort.</p></div>
<h3>La ligne d'arbre</h3>
<p>Accouplement, joint d'arbre, <b>tube d'étambot</b> et paliers, arbre, hélice. Montage <b>rigide</b> (pêche : alignement parfait obligatoire), semi-rigide ou <b>souple</b> (moteur sur silentblocs). <b>Presse-étoupe</b> à tresses (réglé pour un léger goutte-à-goutte, il est refroidi par l'eau), ou joint tournant / à lèvres. Bague <b>hydrolube</b> (palier arrière lubrifié à l'eau).</p>
<h3>L'hélice</h3>
<p>Marquage <b>diamètre × pas</b> (13 × 7 en pouces). <b>Pas</b> : distance théorique parcourue en un tour. Il y a toujours un <b>recul</b> (sans recul, pas de poussée). Hélice trop « longue » (pas trop grand) : le moteur n'atteint pas son régime maxi ; trop courte : il s'emballe.</p>
<p><b>S-drive</b> (embase) : pas de ligne d'arbre, mais ~20 % de pertes (contre ~10 %) et surveillance des anodes.</p>`
    },
    {
      id: 'conduite', titre: 'Conduire et surveiller le moteur', src: 'Guide Pallas p. 160, 203 ; programme 250 kW',
      html: `<h3>Avant de démarrer</h3>
<ul><li>Niveaux : <b>huile</b> moteur et inverseur, <b>eau</b> (vase d'expansion), <b>gazole</b>.</li><li><b>Vanne d'eau de mer ouverte</b>, filtre propre.</li><li>Courroies, fuites, <b>cale</b> sèche et propre, ventilation du compartiment.</li><li>Coupe-batterie fermé, inverseur au <b>point mort</b>.</li></ul>
<h3>Démarrer</h3>
<p>Préchauffer si le moteur a des bougies ; lancer par impulsions courtes ; ne pas insister trop longtemps (démarreur et batterie). Puis : <b>eau à l'échappement</b>, voyant de <b>pression d'huile</b> éteint, voyant de <b>charge</b> éteint. Laisser chauffer avant de forcer.</p>
<h3>En marche</h3>
<p>Surveiller températures, pressions, régime, bruits, vibrations, <b>fumées</b>, fuites ; ronde régulière du compartiment.</p>
<div class="tw"><table><tr><th>Fumée</th><th>Cause probable</th></tr>
<tr><td><b>Noire</b></td><td>Trop de gazole / pas assez d'air : filtre à air, surcharge (carène sale, bout dans l'hélice), injecteurs, calage</td></tr>
<tr><td><b>Blanche</b></td><td>Eau dans les cylindres (joint de culasse, eau dans le gazole), moteur froid, compression faible</td></tr>
<tr><td><b>Bleue</b></td><td>Huile qui brûle : segments, guides de soupapes, trop d'huile, turbo</td></tr></table></div>
<p>Normal : un peu de noir à l'accélération brutale, un peu de blanc au démarrage à froid.</p>
<h3>Arrêter</h3>
<p>Quelques minutes au <b>ralenti</b> (le turbo et le moteur refroidissent), puis couper. Noter les heures moteur.</p>`
    },
    {
      id: 'pannes', titre: 'Les pannes courantes', src: 'Guide Pallas p. 202 à 207',
      html: `<div class="tw"><table><tr><th>Symptôme</th><th>Causes à vérifier</th></tr>
<tr><td><b>Ne démarre pas, ne fume pas</b></td><td>Réservoir vide, <b>air dans le circuit</b>, filtre colmaté, arrêt resté enclenché, compression faible</td></tr>
<tr><td><b>Ne démarre pas, fume blanc</b></td><td>Préchauffage défectueux, calage de pompe, joint de culasse</td></tr>
<tr><td><b>Le démarreur n'entraîne pas</b></td><td>Batterie faible, cosses sales ou desserrées, démarreur ou solénoïde</td></tr>
<tr><td><b>Démarre puis s'arrête</b></td><td>Air dans le gazole, filtre colmaté, mise à l'air du réservoir bouchée</td></tr>
<tr><td><b>Chauffe</b></td><td>Vanne d'eau fermée, filtre eau de mer bouché, turbine, courroie, thermostat, échangeur, chambres d'eau entartrées</td></tr>
<tr><td><b>Pression d'huile basse</b></td><td>Manque d'huile, filtre ou crépine colmatés, pompe usée, capteur, coussinets usés</td></tr>
<tr><td><b>Manque de puissance</b></td><td>Filtres, air, carène sale, hélice abîmée, bout dans l'hélice, presse-étoupe trop serré, surcharge</td></tr>
<tr><td><b>Vibre une fois embrayé</b></td><td>Silentbloc desserré, hélice faussée, arbre désaligné, bague hydrolube usée</td></tr>
<tr><td><b>Voyant de charge allumé</b></td><td>Courroie d'alternateur cassée, régulateur, alternateur, connexions</td></tr>
<tr><td><b>Consomme de l'eau</b></td><td>Joint de culasse</td></tr></table></div>
<div class="retenir"><p>Les pannes de diesel viennent le plus souvent du <b>gazole</b> (eau, impuretés, air) et du <b>refroidissement</b>. Un moteur prévient presque toujours : bruit, vibration, fuite, fumée.</p></div>`
    },
    {
      id: 'entretien', titre: 'L\'entretien programmé', src: 'Guide Pallas p. 75 à 77, 208-209',
      html: `<p>Suivre le <b>calendrier du constructeur</b> et noter chaque opération au carnet. Repères courants :</p>
<div class="tw"><table><tr><th>Quand</th><th>Opérations</th></tr>
<tr><td><b>Avant chaque sortie</b></td><td>Niveaux huile, eau, gazole ; filtre eau de mer ; fuites ; cale ; courroies</td></tr>
<tr><td><b>~200 h ou 1 an</b></td><td><b>Vidange</b> + filtre à huile ; <b>filtres à gazole</b> (et purge) ; filtre à air ; huile d'inverseur ; <b>anodes</b> ; turbine de pompe à eau de mer ; tension des courroies ; batterie</td></tr>
<tr><td><b>~500 h</b></td><td>Thermostat ; jeu aux culbuteurs ; injecteurs</td></tr>
<tr><td><b>Périodiquement</b></td><td>Échangeur (détartrage), presse-étoupe, alignement de la ligne d'arbre, ligne d'échappement (colliers, durites), commandes, fixations du moteur</td></tr></table></div>
<h3>Hivernage</h3>
<p>Vidange, filtres, plein de gazole (contre la condensation), antigel dans le circuit d'eau de mer, turbine déposée, batteries chargées et débranchées, prises d'air bouchées.</p>
<p>Toujours des <b>pièces d'origine</b> ; moteur arrêté et batterie coupée avant d'intervenir.</p>`
    }
  ],
  cartes: [
    ['Comment s\'enflamme le gazole dans un diesel ?', 'Tout seul (auto-inflammation) dans l\'air très comprimé et chaud (~40 bars, ~600 °C).', 'principe'],
    ['Les 4 temps ?', 'Admission, compression, combustion-détente, échappement.', 'principe'],
    ['Un cycle 4 temps = combien de tours de vilebrequin ?', '2 tours (1 tour pour un 2 temps).', 'principe'],
    ['Seul temps moteur ?', 'La combustion-détente.', 'principe'],
    ['Rôle du segment racleur ?', 'Racler l\'huile sur la paroi du cylindre.', 'organes'],
    ['Pourquoi des coussinets abîmés ?', 'Le plus souvent par manque d\'huile ou de pression d\'huile.', 'organes'],
    ['Vitesse de l\'arbre à cames ?', 'Moitié de celle du vilebrequin.', 'organes'],
    ['Jeu aux culbuteurs : à chaud ou à froid ?', 'À froid.', 'organes'],
    ['Rôle du volant moteur ?', 'Régulariser la rotation du vilebrequin.', 'organes'],
    ['Formule de la cylindrée unitaire ?', 'π × D² / 4 × course.', 'definitions'],
    ['Rapport volumétrique ?', '(Volume balayé + volume de la chambre) / volume de la chambre.', 'definitions'],
    ['1 ch = ? kW', '0,736 kW (1 kW = 1,36 ch).', 'definitions'],
    ['Puissance, couple et régime ?', 'P (kW) = C (N·m) × 2π N / 60 / 1 000 ≈ C × N / 9 550.', 'definitions'],
    ['Vitesse limite de carène ?', '≈ 2,43 × √(longueur de flottaison en m) nœuds.', 'definitions'],
    ['Consommation spécifique ?', 'Grammes de gazole par kWh (ou par ch et par heure).', 'definitions'],
    ['Injecteur à trous ou à téton : lequel pour l\'injection directe ?', 'À trous (téton = indirecte).', 'injection'],
    ['Quel moteur a besoin de bougies de préchauffage ?', 'Le moteur à injection indirecte.', 'injection'],
    ['Rôle du préfiltre décanteur ?', 'Arrêter les impuretés et séparer l\'eau du gazole.', 'injection'],
    ['Quand purger le circuit de gazole ?', 'Après un changement de filtre, une panne sèche, un long arrêt.', 'injection'],
    ['Comment arrête-t-on un diesel ?', 'En coupant l\'arrivée de gazole.', 'injection'],
    ['Avec quoi tourne le turbo ?', 'Les gaz d\'échappement.', 'air'],
    ['Pourquoi laisser un moteur turbo au ralenti avant l\'arrêt ?', 'Pour refroidir et graisser le turbo qui tourne très vite.', 'air'],
    ['Rôle de la valve anti-siphon ?', 'Empêcher l\'eau de remonter dans le moteur par l\'échappement.', 'air'],
    ['4 rôles de l\'huile ?', 'Réduire les frottements, refroidir, nettoyer, étanchéité.', 'graissage'],
    ['Rôle du clapet de décharge ?', 'Limiter la pression d\'huile.', 'graissage'],
    ['Huile 15W40 ?', 'Viscosité 15 à froid (W = winter), 40 à chaud.', 'graissage'],
    ['Lettre API pour un diesel ?', 'C.', 'graissage'],
    ['Vidange : à chaud ou à froid ?', 'À chaud, avec le filtre.', 'graissage'],
    ['Alarme de pression d\'huile : réflexe ?', 'Stopper le moteur immédiatement.', 'graissage'],
    ['Température d\'un refroidissement indirect ?', '85 à 90 °C, réglée par le thermostat.', 'refroidissement'],
    ['Pourquoi pas plus de 40-55 °C en refroidissement direct ?', 'Sinon dépôts de sel et tartre.', 'refroidissement'],
    ['La turbine de pompe à eau de mer craint…', 'De tourner à sec (vanne fermée).', 'refroidissement'],
    ['Premier contrôle après le démarrage ?', 'L\'eau sort bien à l\'échappement.', 'refroidissement'],
    ['Rôle de l\'inverseur-réducteur ?', 'Point mort, marche avant, marche arrière, réduction du régime.', 'transmission'],
    ['Réduction 2,7:1 ?', 'L\'arbre tourne 2,7 fois moins vite que le moteur.', 'transmission'],
    ['Pas d\'une hélice ?', 'Distance théorique parcourue en un tour.', 'transmission'],
    ['Presse-étoupe à tresses bien réglé ?', 'Un léger goutte-à-goutte.', 'transmission'],
    ['Fumée noire ?', 'Trop de gazole ou pas assez d\'air (filtre à air, surcharge, injecteurs).', 'conduite'],
    ['Fumée blanche ?', 'Eau dans les cylindres (joint de culasse) ou moteur froid.', 'conduite'],
    ['Fumée bleue ?', 'Huile brûlée (segments, guides de soupapes).', 'conduite'],
    ['Moteur qui chauffe : 3 premières vérifications ?', 'Vanne d\'eau ouverte, filtre eau de mer propre, turbine/courroie.', 'pannes'],
    ['Ne démarre pas après un changement de filtre ?', 'Air dans le circuit : purger.', 'pannes'],
    ['Voyant de charge reste allumé ?', 'Courroie d\'alternateur, régulateur, alternateur, connexions.', 'pannes'],
    ['Intervalle courant de vidange ?', 'Environ 200 h ou 1 an.', 'entretien'],
    ['Pourquoi faire le plein de gazole pour l\'hivernage ?', 'Éviter la condensation (eau) dans le réservoir.', 'entretien']
  ],
  qcm: [
    { q: 'Dans un diesel, l\'inflammation du gazole est due…', r: ['À la chaleur de l\'air comprimé', 'À une bougie d\'allumage', 'À une étincelle de l\'injecteur', 'Au turbo'], e: 'Auto-inflammation.', f: 'principe' },
    { q: 'Le temps moteur est…', r: ['La combustion-détente', 'L\'admission', 'La compression', 'L\'échappement'], e: 'Le seul où le piston reçoit de l\'énergie.', f: 'principe' },
    { q: 'Un moteur 4 temps fait un cycle complet en…', r: ['2 tours de vilebrequin', '1 tour', '4 tours', '1/2 tour'], e: 'Le 2 temps en 1 tour.', f: 'principe' },
    { q: 'L\'arbre à cames tourne…', r: ['2 fois moins vite que le vilebrequin', 'À la même vitesse', '2 fois plus vite', '4 fois moins vite'], e: 'Rapport 1/2 en 4 temps.', f: 'organes' },
    { q: 'Le jeu aux culbuteurs se règle…', r: ['Moteur froid', 'Moteur chaud au ralenti', 'Moteur à plein régime', 'Jamais'], e: 'Valeur du constructeur.', f: 'organes' },
    { q: 'Alésage 100 mm, course 100 mm : cylindrée unitaire ?', r: ['785 cm³', '1 000 cm³', '3 142 cm³', '314 cm³'], e: 'π × 10² / 4 × 10 = 785 cm³.', f: 'definitions' },
    { q: '250 kW, c\'est environ…', r: ['340 ch', '184 ch', '250 ch', '500 ch'], e: '250 / 0,736.', f: 'definitions' },
    { q: 'Un moteur « souple » a son couple maximum…', r: ['À bas régime', 'Au régime maximum', 'Au ralenti seulement', 'Nul'], e: 'Il reprend bien sans monter haut dans les tours.', f: 'definitions' },
    { q: 'Le moteur à injection indirecte…', r: ['A besoin de bougies de préchauffage', 'Consomme moins que l\'injection directe', 'Utilise des injecteurs à trous', 'Cogne davantage'], e: 'Préchambre : plus souple mais démarrage à froid aidé.', f: 'injection' },
    { q: 'Le filtre le plus fin du circuit de gazole est placé…', r: ['Avant la pompe d\'injection', 'Avant le réservoir', 'Après les injecteurs', 'Sur le retour de fuite'], e: 'Il protège la pompe d\'injection.', f: 'injection' },
    { q: 'Après une panne sèche, il faut…', r: ['Faire le plein et purger le circuit', 'Seulement faire le plein', 'Changer les injecteurs', 'Vidanger l\'huile'], e: 'De l\'air est entré dans le circuit.', f: 'injection' },
    { q: 'Le turbocompresseur est entraîné par…', r: ['Les gaz d\'échappement', 'Une courroie', 'Le démarreur', 'L\'arbre à cames'], e: 'Le compresseur mécanique, lui, est à courroie.', f: 'air' },
    { q: 'L\'alarme de pression d\'huile se déclenche. Tu…', r: ['Stoppes le moteur immédiatement', 'Continues jusqu\'au port', 'Accélères pour augmenter la pression', 'Rajoutes de l\'eau'], e: 'Sinon grippage, bielle coulée.', f: 'graissage' },
    { q: 'Dans « 15W40 », le W signifie…', r: ['Winter (hiver, à froid)', 'Watt', 'Water', 'Weight'], e: 'Viscosité à froid.', f: 'graissage' },
    { q: 'La vidange se fait…', r: ['Moteur chaud', 'Moteur froid', 'Moteur en marche', 'Peu importe'], e: 'L\'huile chaude coule mieux et emporte les impuretés.', f: 'graissage' },
    { q: 'En refroidissement indirect, l\'eau de mer…', r: ['Refroidit l\'eau douce dans l\'échangeur', 'Circule dans le bloc moteur', 'N\'est pas utilisée', 'Refroidit l\'huile seulement'], e: 'L\'eau douce reste en circuit fermé.', f: 'refroidissement' },
    { q: 'Juste après avoir démarré, tu dois vérifier…', r: ['Que l\'eau sort à l\'échappement', 'Le niveau d\'huile de l\'inverseur', 'L\'alignement de l\'arbre', 'Les anodes'], e: 'Sinon la turbine tourne à sec.', f: 'refroidissement' },
    { q: 'Le moteur chauffe. Première chose à vérifier ?', r: ['La vanne et le filtre d\'eau de mer', 'Le filtre à gazole', 'La batterie', 'Le pas de l\'hélice'], e: 'Puis turbine, courroie, thermostat.', f: 'pannes' },
    { q: 'On passe de marche avant en marche arrière…', r: ['Au ralenti, en marquant le point mort', 'À plein régime', 'Moteur arrêté', 'Sans ralentir'], e: 'Pour ne pas casser l\'inverseur.', f: 'transmission' },
    { q: 'Une hélice marquée 15 × 10 : le 10 est…', r: ['Le pas', 'Le diamètre', 'Le nombre de pales', 'Le régime'], e: 'Diamètre × pas, en pouces.', f: 'transmission' },
    { q: 'Le moteur fume bleu. Cause probable ?', r: ['Il brûle de l\'huile', 'Il manque d\'air', 'Il a de l\'eau dans les cylindres', 'Le gazole est trop froid'], e: 'Segments ou guides de soupapes usés.', f: 'conduite' },
    { q: 'Le moteur fume noir et manque de puissance. Cause probable ?', r: ['Filtre à air colmaté ou surcharge', 'Joint de culasse', 'Trop d\'huile', 'Thermostat ouvert'], e: 'Trop de gazole pour l\'air disponible.', f: 'conduite' },
    { q: 'Le moteur consomme de l\'eau de refroidissement et fume blanc. On soupçonne…', r: ['Le joint de culasse', 'Le filtre à air', 'Les segments', 'L\'inverseur'], e: 'L\'eau passe dans les cylindres.', f: 'pannes' },
    { q: 'Le démarreur ne fait que cliqueter. Cause probable ?', r: ['Batterie faible ou cosses desserrées', 'Filtre à gazole colmaté', 'Air dans le circuit', 'Thermostat'], e: 'Le démarreur demande beaucoup de courant.', f: 'pannes' },
    { q: 'Pour l\'hivernage, on remplit le réservoir de gazole pour…', r: ['Éviter la condensation', 'Être prêt à partir', 'Lester le bateau', 'Graisser la pompe'], e: 'L\'eau dans le gazole est l\'ennemie du diesel.', f: 'entretien' }
  ]
});
