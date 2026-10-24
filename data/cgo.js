/* Radio SMDSM — certificat général d'opérateur (CGO).
   Fiches rédigées à partir du programme officiel (arrêté CRO/CGO, annexe III, cours type OMI 1.25),
   de SOLAS chapitre IV et du règlement des radiocommunications. Pas encore de support de cours. */
C200.module({
  id: 'cgo', bloc: 'CGO', ordre: 19, court: 'CGO', titre: 'CGO — radio SMDSM',
  intro: 'Le SMDSM, les zones A1 à A4, l\'ASN, la VHF, la MF/HF, Inmarsat, les balises, le NAVTEX, les procédures de détresse et la SAR. Fiches faites d\'après le programme officiel du CGO, en attendant tes supports.',
  fiches: [
    {
      id: 'cadre', titre: 'Le SMDSM et ses règles', src: 'Programme CGO, partie 1 ; SOLAS chapitre IV',
      html: `<p>Le <b>SMDSM</b> (en anglais GMDSS) est le <b>système mondial de détresse et de sécurité en mer</b>. Il est complètement en vigueur depuis le <b>1er février 1999</b> (SOLAS, chapitre IV). Son idée : où que soit le navire, une alerte arrive vite à terre, au centre de sauvetage (MRCC, en France le CROSS), qui organise les secours.</p>
<h3>Les textes</h3>
<ul><li><b>SOLAS chapitre IV</b> : ce que chaque navire doit avoir à bord selon sa zone.</li>
<li><b>Règlement des radiocommunications</b> (RR) de l'UIT : fréquences et procédures.</li>
<li>La <b>réglementation française</b> (arrêté du 15 juillet 1999 sur les certificats d'opérateur).</li></ul>
<h3>Les zones océaniques</h3>
<div class="tw"><table><tr><th>Zone</th><th>Couverte par</th><th>Ordre de grandeur</th></tr>
<tr><td><b>A1</b></td><td>Une station côtière <b>VHF ASN</b></td><td>20 à 30 milles</td></tr>
<tr><td><b>A2</b></td><td>Une station côtière <b>MF ASN</b> (hors A1)</td><td>100 à 150 milles</td></tr>
<tr><td><b>A3</b></td><td>Les satellites <b>géostationnaires</b> Inmarsat (hors A1 et A2)</td><td>Entre 70° N et 70° S environ</td></tr>
<tr><td><b>A4</b></td><td>Le reste : les zones <b>polaires</b></td><td>Au-delà de 70°</td></tr></table></div>
<h3>Les 9 fonctions d'une station de navire</h3>
<ol><li>Alerte navire → terre</li><li>Alerte terre → navire</li><li>Alerte navire → navire</li><li>Communications de coordination SAR</li><li>Communications sur zone</li><li>Signaux de localisation (SART, balises)</li><li>Émission et réception des renseignements de sécurité maritime (RSM)</li><li>Radiocommunications générales</li><li>Communications passerelle à passerelle</li></ol>
<h3>Veille, énergie, disponibilité</h3>
<ul><li><b>Veille permanente</b> : VHF ASN canal <b>70</b>, MF ASN <b>2 187,5 kHz</b> (A2 et plus), HF ASN (A3/A4 en HF), <b>NAVTEX</b>, récepteur EGC (Inmarsat). Veille phonie du canal 16 quand c'est possible.</li>
<li><b>Source de réserve</b> (batteries) pour les communications de détresse : <b>1 h</b> si le navire a une source d'énergie de secours, <b>6 h</b> sinon.</li>
<li><b>Disponibilité du matériel</b> : doublement des équipements, entretien à terre, ou capacité d'entretien en mer. En A1/A2 : une méthode ; en A3/A4 : au moins deux.</li>
<li>Une <b>personne désignée</b> à bord est chargée des communications en cas de détresse.</li>
<li>Tout se note au <b>journal radio</b> (registre SMDSM) : tests, détresses entendues, incidents.</li></ul>
<h3>Le certificat</h3>
<p><b>CRO</b> (certificat restreint) : zone A1 seulement (VHF). <b>CGO</b> : toutes les zones. Il faut <b>18 ans</b> et l'aptitude médicale. Valable <b>5 ans</b>, revalidable. Formation de <b>70 h</b>.</p>
<div class="tw"><table><tr><th>Épreuve</th><th>Coef.</th><th>Durée</th><th>Éliminatoire</th></tr>
<tr><td>Écrit : SMM, satellites, équipements, procédures, correspondance publique</td><td>2</td><td>2 h</td><td>moins de 8</td></tr>
<tr><td>Anglais (phrases OMI, règlement UIT), pratique</td><td>2</td><td>30 min</td><td>moins de 12</td></tr>
<tr><td>Utilisation d'une station SMDSM, pratique</td><td>4</td><td>—</td><td>moins de 12</td></tr></table></div>`
    },
    {
      id: 'identif', titre: 'Identifier les stations, les documents', src: 'Programme CGO, parties 2 et 3',
      html: `<h3>Le MMSI</h3>
<p>Le <b>MMSI</b> (identité du service mobile maritime) compte <b>9 chiffres</b>. Les 3 chiffres du <b>MID</b> indiquent le pays : <b>226, 227, 228</b> pour la France.</p>
<div class="tw"><table><tr><th>Station</th><th>Forme</th></tr>
<tr><td>Navire</td><td><b>MID</b> + 6 chiffres (227xxxxxx)</td></tr>
<tr><td>Station côtière</td><td><b>00</b> + MID + 4 chiffres</td></tr>
<tr><td>Groupe de navires</td><td><b>0</b> + MID + 5 chiffres</td></tr>
<tr><td>Aéronef SAR</td><td><b>111</b> + MID + 3 chiffres</td></tr>
<tr><td>SART AIS</td><td><b>970</b> + 6 chiffres</td></tr>
<tr><td>Balise homme à la mer AIS</td><td><b>972</b> + 6 chiffres</td></tr>
<tr><td>RLS AIS</td><td><b>974</b> + 6 chiffres</td></tr>
<tr><td>Aide à la navigation AIS</td><td><b>99</b> + MID + 4 chiffres</td></tr></table></div>
<p>Le navire a aussi un <b>indicatif d'appel</b> (lettres et chiffres, préfixe du pays : <b>F</b> pour la France) et, s'il a Inmarsat C, une <b>identité Inmarsat</b> de 9 chiffres (commence par 4).</p>
<h3>Les types de stations</h3>
<p>Station de navire, station côtière, centre de sauvetage (MRCC), service de trafic maritime (STM/VTS), aide à la navigation (AIS), station d'aéronef. Par satellite : <b>station terrienne de navire</b> (à bord) et <b>station terrienne côtière</b> (à terre).</p>
<h3>Les documents</h3>
<ul><li><b>Liste IV</b> de l'UIT : nomenclature des <b>stations côtières</b> et des services spéciaux.</li>
<li><b>Liste V</b> de l'UIT : nomenclature des <b>stations de navire</b> et des identités (MMSI).</li>
<li><b>Manuel</b> de l'UIT à l'usage des services mobile maritime et mobile maritime par satellite.</li>
<li><b>Admiralty List of Radio Signals</b> (britannique) ; le volume 5 traite du SMDSM.</li>
<li>Les ouvrages de radiocommunications du <b>SHOM</b> (n° 91, 92, 93 et 96).</li></ul>
<p>À bord : la <b>licence de la station</b> (délivrée en France par l'ANFR), les certificats des opérateurs et le journal radio.</p>`
    },
    {
      id: 'ondes', titre: 'Ondes, propagation, antennes, batteries', src: 'Programme CGO, partie 4',
      html: `<p>Une onde radio va à <b>300 000 km/s</b>. Longueur d'onde : <b>λ (m) = 300 / f (MHz)</b>.</p>
<div class="tw"><table><tr><th>Bande</th><th>Fréquences</th><th>À bord</th></tr>
<tr><td><b>MF</b> (hectométriques)</td><td>300 kHz – 3 MHz</td><td>2 182 kHz, 2 187,5 kHz, NAVTEX 518 kHz</td></tr>
<tr><td><b>HF</b> (décamétriques)</td><td>3 – 30 MHz</td><td>Grandes distances (4, 6, 8, 12, 16 MHz)</td></tr>
<tr><td><b>VHF</b> (métriques)</td><td>30 – 300 MHz</td><td>VHF marine ~156 MHz, AIS 162 MHz</td></tr>
<tr><td><b>UHF</b></td><td>300 MHz – 3 GHz</td><td>RLS 406 MHz, Inmarsat (~1,5 GHz)</td></tr>
<tr><td><b>SHF</b></td><td>3 – 30 GHz</td><td>Radar X et SART (9 GHz)</td></tr></table></div>
<h3>La propagation</h3>
<ul><li><b>VHF</b> : en ligne droite, jusqu'à l'horizon radio. Portée ≈ <b>2,2 × (√h1 + √h2)</b> milles (hauteurs des antennes en mètres). Plus l'antenne est haute, plus on porte loin.</li>
<li><b>MF</b> : <b>onde de sol</b> le jour (100 à 150 milles) ; la nuit, l'onde d'espace porte plus loin mais brouille plus.</li>
<li><b>HF</b> : <b>onde d'espace</b> réfléchie par l'<b>ionosphère</b> : portée mondiale. Plus c'est loin et plus il fait jour, plus on monte en fréquence ; la nuit, on descend. Entre l'onde de sol et le premier rebond : <b>zone de silence</b>.</li></ul>
<h3>Les modulations</h3>
<p>VHF phonie : <b>modulation de fréquence</b> (FM). MF/HF phonie : <b>bande latérale unique</b> (BLU, J3E). L'<b>ASN</b> (appel sélectif numérique) envoie un message numérique court : qui appelle, qui est appelé, catégorie (détresse, urgence, sécurité, routine), nature, position, heure, mode de la suite. Le <b>radiotélex</b> (IDBE) imprime du texte : en <b>ARQ</b> (point à point, avec accusé) ou en <b>FEC</b> (diffusion à tous, sans accusé).</p>
<h3>Antennes et batteries</h3>
<ul><li>VHF : antenne fouet verticale, le plus haut possible, loin des masses métalliques.</li>
<li>MF/HF : fouet ou antenne filaire + <b>coupleur d'antenne</b> (il accorde l'antenne sur la fréquence). Isolateurs propres : le sel fait fuir le courant.</li>
<li>Câbles coaxiaux et connecteurs étanches ; un mauvais <b>ROS</b> (taux d'ondes stationnaires) signale une antenne ou un câble défectueux.</li>
<li>Batteries (plomb ou nickel-cadmium) : tension, niveau, densité, charge automatique ; local <b>ventilé</b> (hydrogène).</li></ul>
<div class="retenir"><p>Panne : commencer par l'<b>alimentation</b> (fusible, tension), puis l'<b>antenne</b> et les câbles, puis les <b>réglages</b> (canal, puissance, silencieux).</p></div>`
    },
    {
      id: 'vhf', titre: 'La VHF et l\'ASN', src: 'Programme CGO, partie 5',
      html: `<div class="tw"><table><tr><th>Canal</th><th>Fréquence</th><th>Usage</th></tr>
<tr><td><b>16</b></td><td>156,8 MHz</td><td>Détresse, urgence, sécurité et appel en phonie</td></tr>
<tr><td><b>70</b></td><td>156,525 MHz</td><td><b>ASN seulement</b> : jamais de phonie</td></tr>
<tr><td><b>13</b></td><td>156,65 MHz</td><td>Sécurité de la navigation, passerelle à passerelle</td></tr>
<tr><td><b>06</b></td><td>156,3 MHz</td><td>Navire à navire, coordination SAR sur zone</td></tr>
<tr><td>AIS 1 / AIS 2</td><td>161,975 / 162,025 MHz</td><td>AIS</td></tr></table></div>
<ul><li>Puissance : <b>25 W</b> ou <b>1 W</b> (réduite près des côtes, au port, pour parler à un navire proche).</li>
<li><b>Simplex</b> : on parle chacun son tour sur une même fréquence. <b>Duplex</b> : deux fréquences, on peut parler en même temps (stations côtières).</li>
<li><b>Silencieux</b> (squelch) : coupe le souffle sans signal. <b>Double veille</b> : écoute le 16 et un autre canal.</li></ul>
<h3>Appel ASN de détresse</h3>
<ol><li>Soulever le cache du bouton rouge <b>DISTRESS</b>, choisir si possible la <b>nature</b> (incendie, voie d'eau, abordage, échouement, gîte, naufrage, dérive, abandon, piraterie, homme à la mer).</li>
<li><b>Appuyer environ 5 secondes</b>. L'alerte part avec le MMSI, la <b>position</b> et l'heure (VHF reliée au GPS ; sinon les saisir).</li>
<li>L'appareil <b>répète l'alerte</b> toutes les 4 minutes environ tant qu'elle n'est pas acquittée.</li>
<li>Après l'acquittement (ou quelques instants), envoyer le <b>message de détresse en phonie sur le canal 16</b>.</li></ol>
<h3>Les autres appels ASN</h3>
<p>Appel <b>individuel</b> (vers un MMSI, en proposant un canal de travail), appel de <b>groupe</b>, appel <b>à tous les navires</b> (urgence, sécurité), appel à une <b>zone</b>. Catégories : <b>détresse, urgence, sécurité, routine</b>.</p>
<h3>La VHF portative SMDSM</h3>
<p>Canal 16 + au moins un autre ; batterie <b>scellée</b> réservée à la détresse ; <b>8 h</b> d'autonomie ; étanche. Certaines ont la VHF aéronautique : <b>121,5 MHz</b> (détresse aéro) et <b>123,1 MHz</b> (SAR sur zone avec les avions).</p>
<div class="piege"><p>Le <b>canal 70</b> ne sert qu'à l'ASN. Un test ASN ne se fait jamais en envoyant une vraie alerte de détresse.</p></div>`
    },
    {
      id: 'mfhf', titre: 'La MF/HF et le radiotélex', src: 'Programme CGO, partie 5',
      html: `<div class="tw"><table><tr><th>Bande</th><th>ASN détresse</th><th>Phonie détresse</th><th>Télex détresse</th></tr>
<tr><td><b>MF</b></td><td><b>2 187,5</b> kHz</td><td><b>2 182</b> kHz</td><td>2 174,5 kHz</td></tr>
<tr><td>HF 4 MHz</td><td>4 207,5</td><td>4 125</td><td>4 177,5</td></tr>
<tr><td>HF 6 MHz</td><td>6 312</td><td>6 215</td><td>6 268</td></tr>
<tr><td><b>HF 8 MHz</b></td><td><b>8 414,5</b></td><td>8 291</td><td>8 376,5</td></tr>
<tr><td>HF 12 MHz</td><td>12 577</td><td>12 290</td><td>12 520</td></tr>
<tr><td>HF 16 MHz</td><td>16 804,5</td><td>16 420</td><td>16 695</td></tr></table></div>
<ul><li>Veille ASN : <b>2 187,5 kHz</b> et, en HF, <b>8 414,5 kHz</b> plus au moins une autre fréquence HF (le récepteur les balaie).</li>
<li>Phonie MF/HF en <b>BLU</b> ; puissance de quelques centaines de watts. On laisse le <b>coupleur</b> accorder l'antenne avant d'émettre.</li>
<li>Choix de la bande HF : selon la distance et l'heure. Le <b>8 MHz</b> est un bon choix de départ ; on monte le jour et pour la distance, on descend la nuit.</li>
<li>Une alerte HF peut partir sur <b>une</b> fréquence ou sur <b>plusieurs</b> à la suite.</li></ul>
<h3>Le radiotélex (IDBE)</h3>
<p>Impression directe à bande étroite : on échange du texte. <b>ARQ</b> : liaison entre deux stations, chaque bloc est acquitté. <b>FEC</b> : diffusion vers tous, sans accusé ; c'est le mode des messages de détresse en télex.</p>
<div class="retenir"><p>Les chiffres de détresse vont ensemble : <b>2 187,5</b> (ASN) → <b>2 182</b> (phonie) → <b>2 174,5</b> (télex). En HF, le plus utilisé : <b>8 414,5</b> → <b>8 291</b>.</p></div>`
    },
    {
      id: 'satellites', titre: 'Inmarsat et Iridium', src: 'Programme CGO, partie 5',
      html: `<p><b>Inmarsat</b> utilise des satellites <b>géostationnaires</b> (à 36 000 km au-dessus de l'équateur). Ils couvrent la Terre entre environ <b>70° N et 70° S</b> : c'est la <b>zone A3</b>. Historiquement, 4 régions océaniques : Atlantique Est, Atlantique Ouest, océan Indien, Pacifique.</p>
<ul><li><b>Station terrienne de navire</b> (SES) à bord → satellite → <b>station terrienne côtière</b> (CES/LES) → réseaux à terre et MRCC. Une station de coordination gère le réseau.</li>
<li><b>Inmarsat C</b> : messages texte (télex, e-mail, données), <b>pas de phonie</b>. Envoie l'<b>alerte de détresse</b> (bouton) avec la position, reçoit l'<b>EGC SafetyNET</b> (RSM), envoie des rapports de position. Antenne omnidirectionnelle, petite. <b>Mini-C</b> : version compacte.</li>
<li>Anciens systèmes du programme : <b>B</b> et <b>M</b> (phonie), <b>Fleet 77</b> (phonie et données avec priorité détresse), <b>D/D+</b> (messages courts) ; B, M et Fleet 77 sont aujourd'hui arrêtés. <b>Fleet Safety</b> (sur FleetBroadband) est le service actuel avec phonie.</li>
<li>Codes spéciaux à 2 chiffres (Inmarsat C) : <b>32</b> avis médical, <b>38</b> assistance médicale, <b>39</b> assistance maritime, <b>41</b> rapports météo, <b>42</b> dangers pour la navigation, <b>43</b> rapports de position.</li></ul>
<h3>EGC</h3>
<p>L'<b>appel de groupe amélioré</b> (EGC) permet d'envoyer un message à une zone. <b>SafetyNET</b> : les RSM (avis, météo, SAR). FleetNET : commercial. Le récepteur EGC est obligatoire en A3 hors couverture NAVTEX.</p>
<h3>Iridium</h3>
<p>Satellites en <b>orbite basse</b> (~780 km), couverture <b>mondiale, pôles compris</b>. Reconnu par l'OMI comme fournisseur SMDSM depuis <b>2020</b>.</p>
<div class="piege"><p>Inmarsat ne couvre pas les pôles : au-delà de 70° environ, on est en <b>A4</b> (MF/HF ou Iridium).</p></div>`
    },
    {
      id: 'balises', titre: 'Cospas-Sarsat, RLS, SART', src: 'Programme CGO, partie 5',
      html: `<h3>Cospas-Sarsat</h3>
<p>Système international de satellites qui repère les <b>balises de détresse</b> sur <b>406 MHz</b>. Trois familles de satellites : <b>LEOSAR</b> (orbite basse polaire), <b>GEOSAR</b> (géostationnaires), <b>MEOSAR</b> (orbite moyenne, sur les constellations GPS, Galileo, Glonass : détection presque immédiate). Stations au sol (LUT) → centre de contrôle de mission (en France, à <b>Toulouse</b>) → MRCC.</p>
<h3>La RLS (balise de détresse, EPIRB)</h3>
<ul><li>Émet sur <b>406 MHz</b> un message avec son <b>identifiant unique</b> et, si elle a un GPS, sa <b>position</b> (précise à ~100 m). Sans GPS, la position est calculée par les satellites (quelques km).</li>
<li>Émet aussi sur <b>121,5 MHz</b> pour le <b>radioralliement</b> (les secours la retrouvent en s'en approchant).</li>
<li><b>Catégorie I</b> : se libère et se déclenche toute seule grâce au <b>largueur hydrostatique</b> (entre 1,5 et 4 m de profondeur). <b>Catégorie II</b> : déclenchement manuel.</li>
<li>Autonomie : au moins <b>48 h</b>. Elle doit être <b>enregistrée</b> (codée avec l'identité du navire).</li>
<li>Entretien : <b>autotest mensuel</b>, date de la batterie, date du largueur (changé en général tous les <b>2 ans</b>).</li>
<li>Déclenchement par erreur : <b>l'éteindre et prévenir aussitôt le MRCC</b>.</li></ul>
<h3>Le SART radar</h3>
<ul><li>Répond aux impulsions d'un radar <b>bande X (9 GHz, 3 cm)</b>, pas bande S.</li>
<li>À l'écran : une <b>ligne de 12 points</b> dans la direction du SART ; en s'approchant (vers 1 mille), des <b>arcs</b> ; tout près, des <b>cercles</b>. Le SART est au niveau du <b>premier point</b>.</li>
<li>Portée : environ <b>5 milles</b> pour un navire (SART à 1 m au-dessus de l'eau), une trentaine pour un avion.</li>
<li>Autonomie : <b>96 h</b> en veille + <b>8 h</b> en émission.</li></ul>
<h3>Le SART AIS</h3>
<p>Émet sa position GPS sur l'<b>AIS</b> ; apparaît sur l'AIS et la carte électronique avec un MMSI en <b>970</b> et le texte « SART ACTIVE » (ou « SART TEST »).</p>
<div class="retenir"><p>Emport SOLAS : <b>2 SART</b> et <b>3 VHF portatives</b> pour les navires à passagers et les navires de charge de 500 UMS et plus ; <b>1 SART</b> et <b>2 VHF</b> de 300 à 500 UMS.</p></div>`
    },
    {
      id: 'rsm', titre: 'Les renseignements de sécurité (NAVTEX, SafetyNET)', src: 'Programme CGO, partie 5',
      html: `<p>Les <b>RSM</b> (renseignements de sécurité maritime) : avertissements de navigation, avis et prévisions météo, informations SAR, messages urgents.</p>
<ul><li>Le monde est découpé en <b>21 NAVAREA</b> (navigation) et <b>21 METAREA</b> (météo). La France coordonne la <b>NAVAREA II</b> et la <b>METAREA II</b> (Atlantique Nord-Est). En Méditerranée (zone III) : NAVAREA par l'<b>Espagne</b>, METAREA par la <b>Grèce</b>.</li>
<li>Diffusion : <b>NAVTEX</b> (côtier), <b>SafetyNET</b> (EGC Inmarsat, au large), radiotélex HF (zones polaires), VHF des stations côtières (CROSS).</li></ul>
<h3>Le NAVTEX</h3>
<ul><li><b>518 kHz</b> : service international, en <b>anglais</b>. <b>490 kHz</b> : service national (en français chez nous). 4 209,5 kHz : NAVTEX HF (zones tropicales).</li>
<li>Portée : environ <b>250 à 400 milles</b>. Chaque station émet à son tour <b>10 minutes toutes les 4 heures</b>.</li>
<li>Identification d'un message : <b>B1</b> lettre de la <b>station</b> (A à X), <b>B2</b> lettre du <b>type</b>, <b>B3B4</b> numéro (01 à 99). Le numéro <b>00</b> est toujours imprimé.</li>
<li>Un message commence par <b>ZCZC</b> suivi de B1B2B3B4, et finit par <b>NNNN</b>.</li></ul>
<div class="tw"><table><tr><th>Type</th><th>Contenu</th></tr>
<tr><td><b>A</b></td><td>Avertissements de navigation</td></tr><tr><td><b>B</b></td><td>Avis météo (BMS)</td></tr><tr><td>C</td><td>Glaces</td></tr><tr><td><b>D</b></td><td>Recherche et sauvetage, piraterie</td></tr><tr><td>E</td><td>Prévisions météo</td></tr><tr><td>F</td><td>Pilotage</td></tr><tr><td>G</td><td>AIS</td></tr><tr><td>J</td><td>Navigation par satellite</td></tr><tr><td><b>L</b></td><td>Avertissements de navigation (suite)</td></tr><tr><td>Z</td><td>Pas de message</td></tr></table></div>
<div class="retenir"><p>Les types <b>A, B, D et L</b> ne peuvent pas être refusés par le récepteur.</p></div>`
    },
    {
      id: 'procedures', titre: 'Procédures : détresse, urgence, sécurité', src: 'Programme CGO ; règlement des radiocommunications',
      html: `<p>Ordre de priorité : <b>détresse</b> (MAYDAY), <b>urgence</b> (PAN-PAN), <b>sécurité</b> (SÉCURITÉ), puis routine. Heures en <b>UTC</b>. Les communications de détresse, d'urgence, de sécurité et les avis médicaux sont <b>gratuits</b>.</p>
<h3>Envoyer une détresse</h3>
<ol><li><b>Alerte ASN</b> (VHF, MF/HF) ou alerte <b>Inmarsat C</b>.</li>
<li><b>Message en phonie</b> sur la fréquence associée (canal 16 ou 2 182 kHz) : MAYDAY ×3, THIS IS + nom ×3, indicatif, MMSI, POSITION, nature, assistance demandée, autres infos, OVER.</li></ol>
<h3>Recevoir une alerte ASN de détresse</h3>
<ul><li><b>Ne pas l'acquitter par ASN</b> : c'est le rôle de la station côtière (sauf demande du MRCC).</li>
<li>Écouter la <b>phonie associée</b> (16 ou 2 182 kHz) et noter les informations.</li>
<li>Si le navire est proche et qu'aucune station côtière ne répond : <b>acquitter en phonie</b> (MAYDAY, MMSI ou nom ×3, THIS IS, son nom ×3, <b>RECEIVED MAYDAY</b>) et prévenir le MRCC.</li>
<li>Alerte <b>HF</b> : on n'acquitte pas ; on écoute et on <b>relaie au MRCC</b> si aucune station côtière ne l'a acquittée au bout de quelques minutes.</li></ul>
<h3>Relayer</h3>
<p><b>MAYDAY RELAY</b> ×3, puis ALL STATIONS (ou le CROSS), THIS IS + son nom ×3, puis les informations du navire en détresse. On relaie si le navire en détresse ne peut pas le faire, si le capitaine juge qu'il faut plus d'aide, ou si une alerte n'a pas été acquittée.</p>
<h3>Le silence</h3>
<p><b>SEELONCE MAYDAY</b> : imposé par le navire en détresse ou la station qui dirige. <b>SEELONCE DISTRESS</b> : par une autre station proche. <b>PRUDONCE</b> : un trafic restreint peut reprendre. <b>SEELONCE FEENEE</b> : fin du trafic de détresse.</p>
<h3>Annuler une fausse alerte</h3>
<p>Arrêter l'émission (réinitialiser l'appareil), puis en phonie sur la fréquence associée : <b>ALL STATIONS ×3, THIS IS</b> nom ×3, indicatif, MMSI, position, <b>CANCEL MY DISTRESS ALERT OF</b> date et heure UTC, signé du capitaine. Prévenir le MRCC. Une fausse alerte n'est pas sanctionnée si elle est annulée tout de suite.</p>
<h3>Urgence et sécurité</h3>
<p><b>Urgence</b> : annonce ASN « tous navires » catégorie <i>urgency</i>, puis PAN-PAN ×3, ALL STATIONS ×3, THIS IS… sur le 16 (avis médical : PAN-PAN MEDICO). <b>Sécurité</b> : annonce ASN catégorie <i>safety</i>, puis SÉCURITÉ ×3 et le message sur le 16 ou sur le canal de travail annoncé.</p>`
    },
    {
      id: 'sar', titre: 'SAR, comptes rendus, AIS, SSAS', src: 'Programme CGO, parties 6 à 8',
      html: `<h3>Recherche et sauvetage</h3>
<ul><li>Le <b>MRCC</b> (CROSS) reçoit l'alerte et organise ; le <b>SMC</b> dirige la mission ; l'<b>OSC</b> coordonne sur zone ; l'<b>ACO</b> coordonne les avions. Le volume III du manuel <b>IAMSAR</b> est à bord.</li>
<li>Fréquences sur zone : canal <b>16</b> et canal <b>06</b>, <b>2 182 kHz</b>, <b>3 023 et 5 680 kHz</b> (SAR avec les aéronefs), <b>123,1 MHz</b> et 121,5 MHz (aéronautique).</li></ul>
<h3>Les systèmes de comptes rendus</h3>
<ul><li><b>AMVER</b> (garde-côtes américains) : volontaire, mondial. Le navire envoie un <b>plan de route</b>, son <b>départ</b>, sa <b>position</b> (au moins toutes les <b>48 h</b>), ses <b>déviations</b> et son <b>arrivée</b>. Le MRCC sait ainsi quels navires sont proches d'une détresse.</li>
<li><b>JASREP</b> (Japon) et <b>MASTREP</b> (Australie) : systèmes nationaux du même genre.</li>
<li><b>LRIT</b> (SOLAS V/19-1) : identification et suivi à grande distance. Navires à passagers, navires de charge de 300 UMS et plus en voyage international : position envoyée <b>automatiquement 4 fois par jour</b> (toutes les 6 h) à l'État du pavillon.</li></ul>
<h3>L'AIS</h3>
<p>Classe A obligatoire (SOLAS) pour les navires de 300 UMS et plus en voyage international, 500 UMS et plus en national, et tous les navires à passagers. Fréquences <b>161,975 et 162,025 MHz</b>. Données <b>statiques</b> (MMSI, nom, indicatif, numéro OMI, dimensions), <b>dynamiques</b> (position, route, vitesse, cap, statut), de <b>voyage</b> (tirant d'eau, destination, heure d'arrivée). En route, un message toutes les 2 à 10 secondes. On ne le coupe que si la sûreté du navire l'exige (piraterie).</p>
<h3>Le SSAS</h3>
<p>Le <b>système d'alerte de sûreté du navire</b> envoie une alerte <b>discrète</b> vers la terre (compagnie, autorité) : pas d'alarme à bord, rien vers les autres navires. Au moins <b>deux boutons</b>, dont un à la passerelle. Il transmet l'identité et la position jusqu'à ce qu'on l'arrête. Pour le tester, on prévient d'abord le destinataire.</p>`
    },
    {
      id: 'anglais', titre: 'Anglais radio, code des signaux, correspondance publique', src: 'Programme CGO, parties 9 et 10',
      html: `<p>L'épreuve d'anglais (30 min, 12/20 minimum) porte sur les <b>phrases normalisées de l'OMI</b> (SMCP, voir aussi la matière Anglais) et les procédures de l'UIT.</p>
<ul><li>Mots de procédure : <b>OVER</b> (à vous), <b>OUT</b> (terminé), <b>SAY AGAIN</b>, <b>I SPELL</b>, <b>CORRECTION</b>, <b>STAND BY</b>, <b>RECEIVED</b>.</li>
<li>Chiffres un par un ; heures en <b>UTC</b> ; positions en latitude/longitude ou relèvement et distance d'un amer.</li></ul>
<h3>Le code international des signaux (une lettre)</h3>
<div class="tw"><table><tr><th>Lettre</th><th>Sens</th><th>Lettre</th><th>Sens</th></tr>
<tr><td>A</td><td>Plongeur en immersion, éloignez-vous</td><td>O</td><td>Homme à la mer</td></tr>
<tr><td>B</td><td>Marchandises dangereuses</td><td>P</td><td>Au port : appareillage imminent</td></tr>
<tr><td>C</td><td>Oui</td><td>N</td><td>Non</td></tr>
<tr><td>D</td><td>Manœuvre difficile, écartez-vous</td><td>S</td><td>Je bats en arrière</td></tr>
<tr><td>F</td><td>Je suis désemparé, communiquez avec moi</td><td>U</td><td>Vous courez à un danger</td></tr>
<tr><td>G</td><td>Je demande un pilote</td><td>V</td><td>Je demande assistance</td></tr>
<tr><td>H</td><td>J'ai un pilote à bord</td><td>W</td><td>Je demande une assistance médicale</td></tr>
<tr><td>K</td><td>Je désire communiquer avec vous</td><td>Y</td><td>Je chasse sur mon ancre</td></tr>
<tr><td>L</td><td>Stoppez immédiatement</td><td>Z</td><td>Je demande un remorqueur</td></tr></table></div>
<p><b>NC</b> : je suis en détresse et demande une assistance immédiate.</p>
<h3>La correspondance publique</h3>
<p>Ce sont les communications <b>payantes</b> entre le navire et la terre (téléphone, télex, e-mail) par une station côtière ou par satellite. Elles sont facturées par une <b>autorité de comptabilité</b> (identifiée par un code AAIC). La détresse, l'urgence, la sécurité et les avis médicaux restent <b>gratuits</b>.</p>`
    }
  ],
  cartes: [
    ["Que veut dire SMDSM ?", "Système mondial de détresse et de sécurité en mer (GMDSS), en vigueur complète depuis le 1er février 1999.", "cadre"],
    ["Zone A1 ?", "Couverte par une station côtière VHF ASN (20 à 30 milles).", "cadre"],
    ["Zone A2 ?", "Couverte par une station côtière MF ASN, hors A1 (100 à 150 milles).", "cadre"],
    ["Zone A3 ?", "Couverte par les satellites géostationnaires Inmarsat (70° N à 70° S), hors A1 et A2.", "cadre"],
    ["Zone A4 ?", "Le reste : zones polaires.", "cadre"],
    ["Source de réserve : autonomie ?", "1 h si le navire a une source de secours, 6 h sinon.", "cadre"],
    ["Différence CRO / CGO ?", "CRO : zone A1 (VHF) seulement. CGO : toutes les zones.", "cadre"],
    ["MMSI : combien de chiffres ? MID de la France ?", "9 chiffres. MID 226, 227 ou 228.", "identif"],
    ["MMSI d'une station côtière ?", "00 + MID + 4 chiffres.", "identif"],
    ["MMSI d'un SART AIS ?", "970 + 6 chiffres.", "identif"],
    ["Liste IV et liste V de l'UIT ?", "IV : stations côtières. V : stations de navire et identités.", "identif"],
    ["Longueur d'onde ?", "λ (m) = 300 / f (MHz).", "ondes"],
    ["Portée VHF ?", "En ligne droite : ≈ 2,2 × (√h1 + √h2) milles.", "ondes"],
    ["Propagation HF ?", "Onde d'espace réfléchie par l'ionosphère : portée mondiale. Fréquence plus haute le jour et pour la distance.", "ondes"],
    ["ARQ et FEC en radiotélex ?", "ARQ : entre deux stations, avec accusé. FEC : diffusion à tous, sans accusé.", "ondes"],
    ["Canal 70 ?", "156,525 MHz, ASN seulement (jamais de phonie).", "vhf"],
    ["Canal 16 ?", "156,8 MHz : détresse, urgence, sécurité, appel en phonie.", "vhf"],
    ["Canal 13 et canal 06 ?", "13 : sécurité de la navigation, passerelle à passerelle. 06 : navire à navire, SAR sur zone.", "vhf"],
    ["Alerte ASN non acquittée ?", "L'appareil la répète toutes les 4 minutes environ.", "vhf"],
    ["VHF aéronautique d'une portative SMDSM ?", "121,5 MHz (détresse) et 123,1 MHz (SAR sur zone).", "vhf"],
    ["Fréquences MF de détresse ?", "ASN 2 187,5 kHz · phonie 2 182 kHz · télex 2 174,5 kHz.", "mfhf"],
    ["Fréquence HF ASN la plus veillée ?", "8 414,5 kHz (phonie associée 8 291 kHz).", "mfhf"],
    ["Inmarsat C fait-il de la phonie ?", "Non : messages texte, alerte de détresse, EGC SafetyNET.", "satellites"],
    ["Codes spéciaux Inmarsat C 32 et 38 ?", "32 : avis médical. 38 : assistance médicale.", "satellites"],
    ["Iridium dans le SMDSM ?", "Satellites en orbite basse, couverture mondiale pôles compris, reconnu depuis 2020.", "satellites"],
    ["Fréquences d'une RLS ?", "406 MHz (alerte vers Cospas-Sarsat) et 121,5 MHz (radioralliement).", "balises"],
    ["RLS catégorie I ?", "Libérée et déclenchée automatiquement par le largueur hydrostatique (1,5 à 4 m).", "balises"],
    ["SART radar à l'écran ?", "Ligne de 12 points, puis arcs vers 1 mille, puis cercles tout près. Radar bande X.", "balises"],
    ["Autonomie d'un SART ?", "96 h en veille + 8 h en émission.", "balises"],
    ["Fréquences NAVTEX ?", "518 kHz international (anglais), 490 kHz national, 4 209,5 kHz HF.", "rsm"],
    ["NAVTEX : B1, B2, B3B4 ?", "B1 : station. B2 : type de message. B3B4 : numéro (00 toujours imprimé).", "rsm"],
    ["Types NAVTEX qu'on ne peut pas refuser ?", "A, B, D et L.", "rsm"],
    ["NAVAREA de la France ?", "NAVAREA II et METAREA II (Atlantique Nord-Est).", "rsm"],
    ["Recevoir une alerte ASN de détresse ?", "Ne pas acquitter par ASN ; écouter la phonie associée ; acquitter en phonie si proche et pas de station côtière ; prévenir le MRCC.", "procedures"],
    ["SEELONCE MAYDAY, PRUDONCE, SEELONCE FEENEE ?", "Silence imposé · trafic restreint autorisé · fin du trafic de détresse.", "procedures"],
    ["Annuler une fausse alerte ASN ?", "Arrêter l'émission, puis ALL STATIONS ×3… CANCEL MY DISTRESS ALERT OF (date, heure UTC) en phonie, et prévenir le MRCC.", "procedures"],
    ["AMVER ?", "Système volontaire mondial des garde-côtes américains : plan de route, positions au moins toutes les 48 h, arrivée.", "sar"],
    ["LRIT ?", "Suivi à grande distance : position envoyée automatiquement toutes les 6 h à l'État du pavillon.", "sar"],
    ["SSAS ?", "Alerte de sûreté discrète vers la terre, sans alarme à bord. Au moins deux boutons, dont un à la passerelle.", "sar"],
    ["Fréquences SAR avec les avions ?", "3 023 et 5 680 kHz, 123,1 MHz.", "sar"],
    ["Lettre V et lettre W du code des signaux ?", "V : je demande assistance. W : je demande une assistance médicale.", "anglais"],
    ["Correspondance publique ?", "Communications payantes navire-terre, facturées par une autorité de comptabilité (code AAIC).", "anglais"]
  ],
  qcm: []
});
