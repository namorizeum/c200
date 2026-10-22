/* Rapport de mer — module NP-1 (4/5 de l'épreuve écrite de 2 h) */
(function () {
  const INTRO = (o) => `<p>Je soussigné [Prénom NOM], titulaire du brevet de capitaine 200, capitaine ${o.navire}, ${o.armement}, ${o.armateur}, déclare avoir appareillé ${o.depart}, à destination ${o.dest}, muni de mes expéditions, le navire en bon état de navigabilité, ${o.bord}, et déclare ce qui suit :</p>`;
  const FIN = (reserve, lieu, date) => `<p>${reserve} En foi de quoi, je déclare le présent rapport sincère et véritable et me réserve le droit de l'amplifier si nécessaire.</p><p>Fait à ${lieu}, le ${date}.<br>Le capitaine, [signature]</p>`;
  const R_ABO = 'Étant donné les importantes contraintes et avaries causées au navire lors de l\'abordage, je fais toutes réserves en ce qui concerne les avaries qui pourraient être constatées par la suite, tant au navire qu\'à ses équipements.';
  const R_INC = 'Étant donné l\'incendie survenu en machine et les fortes fatigues supportées par le navire, je fais toutes réserves en ce qui concerne les avaries qui pourraient être constatées par la suite, tant au navire qu\'à ses machines et équipements.';
  const R_CHOC = 'Étant donné la violence du choc et les fortes fatigues supportées par le navire, je fais toutes réserves en ce qui concerne les avaries qui pourraient être constatées par la suite, tant au navire qu\'à ses équipements.';
  const FORMA = (port) => `<p class="small muted">À l'arrivée (à citer si le sujet le demande) : prévenir l'armateur, déposer le rapport dans les 24 h au greffe du tribunal de commerce de ${port} et l'affirmer, copie à la DML ; constat de blessure pour le marin blessé ; expert de l'assureur pour les avaries.</p>`;

  C200.module({
    id: 'rapport', bloc: 'NP-1', ordre: 15, court: 'RM', titre: 'Rapport de mer',
    intro: 'Rôle et procédure du rapport de mer, plan en 3 parties, mesures à écrire selon l\'événement, réserves, formalités au retour. Avec un atelier d\'écriture sur 7 vrais sujets. 4/5 de l\'écrit NP-1 (2 h).',
    fiches: [
      {
        id: 'definition', titre: 'À quoi sert le rapport de mer', src: 'Cours Rapport de mer p. 4',
        html: `<p>Document <b>officiel</b>, compte rendu signé par le capitaine (ou le patron). Il expose précisément les <b>événements</b> du voyage, les <b>circonstances</b> et les <b>décisions</b> prises.</p>
<h3>Il justifie la conduite du capitaine envers…</h3>
<ul><li>l'<b>armateur</b> (l'employeur) ;</li><li>les <b>assurances</b> (avaries, accidents) ;</li><li>les <b>tiers</b> (remorquage, abordage) ;</li><li>les <b>Affaires maritimes</b> (infractions).</li></ul>
<p>C'est le document principal sur lequel s'appuient <b>juges et experts</b> pour trancher les litiges.</p>
<div class="retenir"><p>Il <b>engage pénalement</b> son auteur : il doit être <b>sincère</b>. Il se rédige à partir du <b>journal de bord</b>, et doit concorder avec lui, avec la carte et avec les témoins.</p></div>`
      },
      {
        id: 'procedure', titre: 'Rédiger, déposer, affirmer', src: 'Cours Rapport de mer p. 4 et 10 ; Réglementation p. 19',
        html: `<ol>
<li><b>Rédigé dans les 24 h</b> qui suivent l'arrivée au port, sur un <b>cahier spécial paraphé et numéroté</b>.</li>
<li><b>Déposé</b> au <b>greffe du tribunal de commerce</b> (à l'étranger : au <b>consulat</b>).</li>
<li>En cas d'événement grave, <b>affirmé</b> (confirmé sous serment) devant le président du tribunal de commerce ou le consul, en présence de <b>deux témoins majeurs</b>.</li>
<li>Copie aux intéressés (armateur, assureurs) et à l'<b>administrateur des Affaires maritimes</b> dans un port français.</li>
<li>Si besoin, <b>requête en nomination d'experts</b> au tribunal de commerce pour constater les avaries.</li></ol>
<div class="piege"><p>Le cours de rapport de mer parle aussi d'un dépôt « sous 48 h ». Le délai à retenir pour le capitaine est celui du code : <b>24 h</b> après l'arrivée.</p></div>`
      },
      {
        id: 'plan', titre: 'Le plan en trois parties', src: 'Cours Rapport de mer p. 4 à 6 ; Plan de rédaction',
        html: `<h3>1. L'introduction (partie fixe)</h3>
<p>Elle présente le capitaine et le navire : nom et <b>brevet</b> du capitaine ; <b>nom, type, jauge, armement</b> (genre ou catégorie de navigation), <b>immatriculation</b> du navire ; <b>armateur</b> et siège social ; <b>appareillage</b> (port, date, heure) et destination ; nombre de <b>personnes à bord</b> ; <b>bon état de navigabilité</b> ; précautions d'usage (machines, chargement bien arrimé).</p>
<div class="exemple"><p>« Je soussigné [Prénom NOM], titulaire du brevet de capitaine 200, capitaine du navire à passagers LOU MISTRALOU II, armé au commerce, immatriculé à Nice sous le n° …, appartenant à la compagnie … dont le siège social est à Nice, déclare avoir appareillé de Nice le … à 10h30 à destination de Théoule-sur-Mer, muni de mes expéditions, le navire en bon état de navigabilité, 54 passagers et 2 membres d'équipage à bord, et déclare ce qui suit : »</p></div>
<h3>2. Le récit (partie variable)</h3>
<p>Dans l'ordre : départ, <b>météo</b> (vent, mer, visibilité), <b>routes</b> et vitesse, puis l'événement. Répondre à <b>Où ? Quand ? Comment ?</b></p>
<ul><li><b>Avant</b> (pourquoi, malgré les précautions) : conditions, veille assurée, règles appliquées.</li><li><b>Pendant</b> (comment) : enchaînement des faits, <b>heure et position</b> exactes, réactions.</li><li><b>Après</b> : avaries constatées, <b>décisions</b> et <b>pourquoi</b>, heures de chaque décision, secours, arrivée au port.</li></ul>
<h3>3. La conclusion (partie fixe)</h3>
<p>Des <b>réserves</b> pour couvrir le capitaine et l'armateur, puis la formule finale :</p>
<div class="exemple"><p>« Étant donné ce qui précède, je fais toutes réserves quant aux avaries qui pourraient être constatées par la suite, et je déclare le présent rapport sincère et véritable, me réservant le droit de l'amplifier si nécessaire. Fait à …, le … Le capitaine. »</p></div>`
      },
      {
        id: 'redaction', titre: 'Conseils pour l\'épreuve', src: 'Cours Rapport de mer p. 6-7',
        html: `<p>La <b>forme compte autant que le fond</b> : le correcteur a une quarantaine de copies, une copie propre fait la différence.</p>
<h3>La forme</h3>
<ul><li>Un <b>paragraphe</b> par partie, deux ou trois dans le récit.</li><li><b>Orthographe</b> : n'utilise que les mots que tu maîtrises (ceux des rapports étudiés).</li><li>Écriture <b>lisible</b> ; ponctuation et majuscules correctes.</li><li><b>Phrases courtes</b> : sujet, verbe, complément. Au <b>présent narratif</b> ou au passé simple.</li></ul>
<h3>La méthode</h3>
<ol><li>Lire le sujet <b>deux fois</b> (vite, puis très lentement).</li><li>Réfléchir <b>5 minutes</b> à ce qu'attend l'examinateur, faire le <b>plan</b>.</li><li>Écrire le <b>brouillon</b>, relire le sujet pour ne rien oublier.</li><li>Recopier au propre, tranquillement ; relire deux fois.</li></ol>
<div class="retenir"><p>Obligatoire : tes <b>conditions de navigation</b> et les <b>mesures prises</b> dans le respect des règles internationales (RIPAM, SOLAS…). Entraîne-toi sur une dizaine de sujets : c'est le rôle de l'atelier.</p></div>`
      },
      {
        id: 'mesures', titre: 'Les mesures à écrire selon l\'événement', src: 'Cours Rapport de mer p. 7 à 9',
        html: `<div class="tw"><table><tr><th>Événement</th><th>Mesures à faire figurer</th></tr>
<tr><td><b>Avis de mauvais temps</b></td><td>Fermer portes, hublots, claires-voies ; dégager les sabords de décharge ; vérifier le saisissage ; s'abriter au port le plus proche si ça fraîchit.</td></tr>
<tr><td><b>Brume</b></td><td>Réduire la vitesse, machine parée ; doubler la veille ; radar et sondeur en route ; signaux sonores ; stopper si un signal est entendu sur l'avant du travers.</td></tr>
<tr><td><b>Chenal</b></td><td>Vitesse modérée, tenir sa droite, respecter le balisage ; ne pas hésiter à ralentir, stopper, battre en arrière, mouiller. Indiquer courant et vent.</td></tr>
<tr><td><b>Avant un abordage</b></td><td>Relever le navire (relèvement constant = risque) ; manœuvrer franchement et à temps ; s'il ne manœuvre pas : <b>5 sons brefs</b> ; au dernier moment : tour sur tribord ou arrière toute, en le signalant.</td></tr>
<tr><td><b>Après un abordage</b></td><td>Voie d'eau ? colmater, pomper ; noter l'heure et la position ; <b>échanger</b> noms, ports d'attache, de départ et de destination ; proposer l'<b>assistance</b> et ne le quitter que d'un commun accord ; sauver les naufragés ; armateur et CROSS (<b>PAN PAN</b>).</td></tr>
<tr><td><b>Incendie</b></td><td>Fermer portes et hublots ; attaquer le feu avec tous les moyens ; <b>foyer sous le vent</b> ; armateur et CROSS (PAN PAN) ; si le feu n'est pas maîtrisé, assistance et évacuation.</td></tr>
<tr><td><b>Échouage</b></td><td>Stopper, battre en arrière, stopper si le navire ne se dégage pas ; pompes de cale en route ; sonder cales et ballasts ; alléger si la stabilité le permet ; armateur et CROSS (PAN PAN) ; remorqueur si besoin.</td></tr>
<tr><td><b>Remorquage</b></td><td>Le demander avec l'<b>accord de l'armateur</b> ; ne pas accepter de conditions : l'armateur et le remorqueur fixent le prix.</td></tr>
<tr><td><b>Abandon</b></td><td>Avis des principaux de l'équipage ; brassières ou combinaisons ; embarcations à l'eau ; blessés et passagers d'abord ; quitter le bord <b>le dernier</b> avec les documents ; <b>MAYDAY</b>.</td></tr>
<tr><td><b>Homme à la mer</b></td><td>Bouton MOB ; bouées à la mer ; embarcation à l'eau ; revenir sur le point ; PAN PAN.</td></tr>
<tr><td><b>Accident à bord</b></td><td>Premiers soins ; avis médical par radio (CCMM via le CROSS) ; PAN PAN ; port le plus proche si nécessaire.</td></tr></table></div>
<div class="piege"><p>Échouement : le cours de rapport de mer écrit « battre en arrière tout de suite » ; le cours DCSS conseille d'évaluer d'abord (voie d'eau, marée). Dans ta copie, montre que tu as sondé avant d'insister.</p></div>`
      },
      {
        id: 'reserves', titre: 'Les réserves types', src: 'Cours Rapport de mer p. 9-10',
        html: `<p>La réserve protège le capitaine et l'armateur pour les avaries découvertes plus tard. Elle se place dans la conclusion, adaptée à l'événement :</p>
<ul><li><b>Remorquage</b> : « Étant donné le mauvais temps subi et les fortes fatigues supportées par le navire pendant le remorquage, je fais toutes réserves en ce qui concerne les avaries qui pourraient être constatées par la suite tant au navire qu'à sa cargaison. »</li>
<li><b>Échouage</b> : « Étant donné les fortes fatigues supportées par le navire au moment de l'échouage, je fais toutes réserves… »</li>
<li><b>Tempête</b> : « Étant donné le mauvais temps subi et les fortes fatigues supportées par le navire pendant la tempête, je fais toutes réserves… »</li>
<li><b>Abordage</b> : « Étant donné les importantes contraintes et avaries causées au navire lors de l'abordage, je fais toutes réserves… »</li></ul>
<p>Formule de fin, toujours : « … je déclare le présent rapport <b>sincère et véritable</b>, me réservant le droit de l'<b>amplifier</b> si nécessaire. »</p>`
      },
      {
        id: 'formalites', titre: 'Les formalités au retour au port', src: 'Cours Rapport de mer p. 10-11 ; Réglementation p. 19',
        html: `<h3>Toujours</h3>
<ul><li>Recontacter l'<b>armateur</b> (déjà prévenu en mer).</li><li>Déposer le rapport au greffe du <b>tribunal de commerce</b>, l'<b>affirmer</b> devant le président (ou le consul à l'étranger) avec deux témoins majeurs.</li><li>Copie à l'<b>administrateur des Affaires maritimes</b> (DML).</li></ul>
<h3>Selon les cas</h3>
<div class="tw"><table><tr><th>Cas</th><th>Formalités</th></tr>
<tr><td><b>Avaries au navire</b></td><td>Si l'armateur est empêché : prévenir la société de classification et les <b>assureurs</b>, qui envoient un <b>expert</b>.</td></tr>
<tr><td><b>Marin malade ou blessé</b></td><td><b>Constat détaillé</b> de maladie ou blessure (feuille rose) en 2 exemplaires : un aux Affaires maritimes, un agrafé au <b>rôle d'équipage</b>. Débarquement administratif (feuille de débarquement).</td></tr>
<tr><td><b>Décès à bord</b></td><td>Constat détaillé de décès ; <b>acte de décès</b> si le navire est à plus de 24 h d'un port ; <b>inventaire du sac</b> en 2 exemplaires devant 2 témoins ; débarquement administratif.</td></tr>
<tr><td><b>Disparu</b></td><td><b>Procès-verbal de disparition</b> ; inventaire du sac ; débarquement administratif.</td></tr>
<tr><td><b>Naufrage</b></td><td>Déclarer la perte du navire aux Douanes, avec une copie du rapport de mer.</td></tr></table></div>
<p>Accident de mer dans les eaux territoriales : il doit aussi être <b>signalé au préfet maritime</b> (le CROSS en est informé dès l'alerte).</p>`
      },
      {
        id: 'enquete', titre: 'Événements de mer et enquêtes', src: 'Programme NP-1 ; Réglementation p. 20 à 25',
        html: `<p>Un <b>événement de mer</b> : abordage, échouement, heurt d'un quai ou d'un objet, incendie, explosion, voie d'eau, avarie grave (machine, barre), perte de cargaison, homme à la mer, blessure ou décès, pollution.</p>
<h3>Trois enquêtes possibles, indépendantes</h3>
<div class="tw"><table><tr><th>Enquête</th><th>Par qui</th><th>But</th></tr>
<tr><td><b>Technique</b></td><td><b>BEAmer</b> (bureau d'enquêtes sur les événements de mer)</td><td>Comprendre les causes pour <b>éviter</b> que ça recommence. Ne cherche pas de coupable.</td></tr>
<tr><td><b>Nautique / administrative</b></td><td>Affaires maritimes (DML, DIRM)</td><td>Établir les faits, les manquements aux règles ; peut mener à des sanctions sur le brevet.</td></tr>
<tr><td><b>Judiciaire</b></td><td>Procureur, <b>tribunal maritime</b> (ou juridiction de droit commun si blessés graves ou décès)</td><td>Rechercher les responsabilités pénales.</td></tr></table></div>
<p>Dans toutes, le <b>rapport de mer</b> et le <b>journal de bord</b> sont les premières pièces lues.</p>`
      }
    ],
    cartes: [
      ['À qui le rapport de mer justifie-t-il la conduite du capitaine ?', 'Armateur, assureurs, tiers, Affaires maritimes.', 'definition'],
      ['Le rapport de mer engage-t-il son auteur ?', 'Oui, pénalement : il doit être sincère.', 'definition'],
      ['Sur quoi s\'appuie le rapport de mer ?', 'Le journal de bord.', 'definition'],
      ['Délai de rédaction du rapport de mer ?', '24 h après l\'arrivée au port.', 'procedure'],
      ['Où dépose-t-on le rapport de mer ?', 'Au greffe du tribunal de commerce (à l\'étranger, au consulat).', 'procedure'],
      ['Affirmer un rapport : comment ?', 'Devant le président du tribunal de commerce ou le consul, avec 2 témoins majeurs.', 'procedure'],
      ['Sur quel support rédige-t-on ?', 'Un cahier spécial paraphé et numéroté.', 'procedure'],
      ['Les 3 parties du rapport ?', 'Introduction (fixe), récit (variable), conclusion (fixe).', 'plan'],
      ['Premiers mots du rapport ?', '« Je soussigné… »', 'plan'],
      ['Éléments de l\'introduction ?', 'Capitaine et brevet, navire (nom, type, jauge, armement, immatriculation), armateur, appareillage, destination, personnes à bord, bon état de navigabilité.', 'plan'],
      ['Les 3 questions du récit ?', 'Où ? Quand ? Comment ?', 'plan'],
      ['Que noter à chaque décision ?', 'L\'heure (et la position).', 'plan'],
      ['Formule de fin ?', 'Rapport sincère et véritable, droit de l\'amplifier si nécessaire.', 'plan'],
      ['Temps de verbe conseillé ?', 'Présent narratif ou passé simple, phrases courtes.', 'redaction'],
      ['Méthode le jour de l\'épreuve ?', 'Lire 2 fois, 5 min de réflexion, plan, brouillon, relire le sujet, recopier, relire 2 fois.', 'redaction'],
      ['Brume : mesures à écrire ?', 'Vitesse réduite, machine parée, veille doublée, radar et sondeur, signaux sonores.', 'mesures'],
      ['Avant abordage : signal si l\'autre ne manœuvre pas ?', 'Au moins 5 sons brefs.', 'mesures'],
      ['Après abordage : quand quitter l\'autre navire ?', 'D\'un commun accord, après avoir proposé l\'assistance.', 'mesures'],
      ['Incendie : position du foyer ?', 'Sous le vent.', 'mesures'],
      ['Remorquage : qui fixe le prix ?', 'L\'armateur et le propriétaire du remorqueur (le capitaine n\'accepte pas de conditions).', 'mesures'],
      ['Abandon : quel message ?', 'MAYDAY. Le capitaine quitte le bord le dernier avec les documents.', 'mesures'],
      ['Accident à bord : avis médical ?', 'Par radio : CCMM via le CROSS.', 'mesures'],
      ['Réserve après abordage ?', '« Étant donné les importantes contraintes et avaries causées au navire lors de l\'abordage, je fais toutes réserves… »', 'reserves'],
      ['Pourquoi faire des réserves ?', 'Couvrir capitaine et armateur pour les avaries découvertes plus tard.', 'reserves'],
      ['Marin blessé : document ?', 'Constat détaillé (feuille rose) en 2 exemplaires, un agrafé au rôle d\'équipage.', 'formalites'],
      ['Décès : acte de décès quand ?', 'Si le navire est à plus de 24 h d\'un port.', 'formalites'],
      ['Inventaire du sac : comment ?', 'En 2 exemplaires, devant 2 témoins.', 'formalites'],
      ['Marin disparu : document ?', 'Procès-verbal de disparition.', 'formalites'],
      ['BEAmer ?', 'Bureau d\'enquêtes sur les événements de mer : enquête technique, sans recherche de coupable.', 'enquete']
    ],
    qcm: [
      { q: 'Le rapport de mer est rédigé…', r: ['Dans les 24 h de l\'arrivée au port', 'Dans les 8 jours', 'Avant d\'appareiller', 'Dans le mois'], e: 'Sur un cahier spécial paraphé et numéroté.', f: 'procedure' },
      { q: 'En France, le rapport de mer est déposé…', r: ['Au greffe du tribunal de commerce', 'Au CROSS', 'À la capitainerie', 'À la gendarmerie maritime'], e: 'À l\'étranger : au consulat.', f: 'procedure' },
      { q: 'Pour affirmer un rapport de mer, il faut…', r: ['Deux témoins majeurs', 'L\'armateur', 'Un avocat', 'Un expert'], e: 'Devant le président du tribunal de commerce ou le consul.', f: 'procedure' },
      { q: 'Le rapport de mer engage son auteur…', r: ['Pénalement', 'Seulement moralement', 'Pas du tout', 'Seulement si l\'armateur le signe'], e: 'Il doit être sincère.', f: 'definition' },
      { q: 'Quelle partie du rapport varie selon l\'événement ?', r: ['Le récit (développement)', 'L\'introduction', 'La conclusion', 'Aucune'], e: 'Introduction et conclusion sont fixes.', f: 'plan' },
      { q: 'Dans le récit, il faut impérativement indiquer…', r: ['L\'heure et la position du navire au moment de l\'événement', 'Le prix du billet', 'L\'avis de l\'équipage sur l\'armateur', 'La météo du lendemain'], e: 'Puis les heures des constats et des décisions.', f: 'plan' },
      { q: 'La conclusion contient…', r: ['Les réserves et la formule « sincère et véritable »', 'La liste des passagers', 'Le nom de l\'expert', 'Le montant des dégâts'], e: 'Avec lieu, date et signature.', f: 'plan' },
      { q: 'Le cours conseille d\'écrire…', r: ['Au présent narratif ou au passé simple, en phrases courtes', 'Au futur', 'En style télégraphique', 'Au conditionnel'], e: 'Sujet, verbe, complément.', f: 'redaction' },
      { q: 'L\'autre navire ne manœuvre pas alors qu\'il doit s\'écarter. Tu émets…', r: ['Au moins 5 sons brefs', '1 son prolongé', '2 sons brefs', '3 sons brefs'], e: 'Signal de doute (règle 34 d).', f: 'mesures' },
      { q: 'Après un abordage, on quitte l\'autre navire…', r: ['D\'un commun accord, après avoir proposé l\'assistance', 'Immédiatement', 'Quand le CROSS le demande seulement', 'Après 1 heure'], e: 'Obligation d\'assistance.', f: 'mesures' },
      { q: 'Incendie à bord : on place le foyer…', r: ['Sous le vent', 'Au vent', 'Face à la houle', 'Peu importe'], e: 'Pour que fumées et flammes partent hors du navire.', f: 'mesures' },
      { q: 'Tu as besoin d\'un remorquage. Tu le demandes…', r: ['Avec l\'accord de l\'armateur, sans accepter de conditions', 'En négociant toi-même le prix', 'Sans prévenir l\'armateur', 'Seulement en cas d\'abandon'], e: 'L\'armateur et le remorqueur fixent le montant.', f: 'mesures' },
      { q: 'Avant de décider l\'abandon du navire, le capitaine…', r: ['Prend l\'avis des principaux de l\'équipage', 'Demande l\'accord de l\'armateur', 'Attend l\'ordre du CROSS', 'Fait voter les passagers'], e: 'Puis il quitte le bord le dernier.', f: 'mesures' },
      { q: 'Un marin est blessé. Le constat détaillé (feuille rose) est fait en…', r: ['2 exemplaires', '1 exemplaire', '3 exemplaires', 'Aucun, le rapport suffit'], e: 'Un aux Affaires maritimes, un agrafé au rôle.', f: 'formalites' },
      { q: 'Un marin décède à 3 jours du port. Le capitaine…', r: ['Établit un acte de décès', 'Attend l\'arrivée pour tout faire', 'Prévient seulement l\'armateur', 'Ne fait rien'], e: 'Acte de décès si plus de 24 h d\'un port.', f: 'formalites' },
      { q: 'Le BEAmer mène une enquête…', r: ['Technique, pour éviter que ça recommence', 'Judiciaire, pour punir', 'Commerciale, pour l\'assureur', 'Disciplinaire'], e: 'Elle ne recherche pas de coupable.', f: 'enquete' }
    ],
    atelier: {
      duree: 90,
      sujets: [
        {
          id: 's2010', titre: 'Incendie en machine devant Nice', session: 'Session d\'avril 2010', types: ['pax', 'bles', 'inc'],
          texte: 'Tu commandes un navire à passagers armé au commerce, deux moteurs, 70 personnes au plus. Tu n\'es pas l\'armateur. Le 15 mai 2010, tu appareilles du port de la Santé (Villefranche-sur-Mer) à 10h00 avec 48 passagers et 2 membres d\'équipage, pour Port-Vauban à Antibes. Sorti de la rade, route au 220°. Mer belle, vent de sud-ouest force 3, bonne visibilité. À 0,2 M au sud du port de Nice, un incendie se déclare en machine. Tu le maîtrises, mais un moteur est hors d\'usage. Un marin est intoxiqué et légèrement blessé, deux passagers sont incommodés par les fumées, un autre est en état de choc. Tu te déroutes sur Nice. Rédige le rapport de mer en indiquant les mesures prises avant et après l\'incendie.',
          corrige: INTRO({ navire: 'du navire à passagers « … », de jauge brute …, deux moteurs, autorisé à 70 personnes', armement: 'armé au commerce, immatriculé à Nice sous le n° …', armateur: 'appartenant à la compagnie … dont le siège social est à …', depart: 'du port de la Santé à Villefranche-sur-Mer le 15 mai 2010 à 10h00', dest: 'de Port-Vauban à Antibes', bord: '48 passagers et 2 membres d\'équipage à bord, les consignes de sécurité ayant été données aux passagers' }) +
            `<p>À 10h10, sorti de la rade, je fais route au 220° à 12 nœuds. Mer belle, vent de sud-ouest force 3, bonne visibilité. J'assure la veille à la passerelle, VHF en veille sur le canal 16.</p>
<p>À 10h35, à 0,2 M au sud de l'entrée du port de Nice, l'alarme incendie de la machine se déclenche et une fumée sort de la ventilation du compartiment moteur bâbord. Je réduis l'allure, je stoppe le moteur bâbord et je reste face au vent de sud-ouest pour que le foyer, à l'arrière, soit sous le vent. Je donne l'alarme. Mon matelot ferme la vanne à fermeture rapide du gasoil, arrête la ventilation et ferme les accès du compartiment. Mon second matelot fait capeler les brassières, rassemble les passagers sur le pont avant, au vent, les informe calmement et les compte : 48 présents.</p>
<p>À 10h37, j'envoie un message PAN PAN au CROSS MED sur le canal 16 : position, nature du sinistre, 50 personnes à bord. Je demande que des secours m'attendent à Nice. À 10h40, après m'être assuré que personne ne se trouve dans le compartiment, mon matelot déclenche l'extinction fixe au CO2. À 10h50 le feu est éteint ; il refroidit les cloisons et une surveillance contre toute reprise est mise en place. Le moteur bâbord est hors d'usage.</p>
<p>Mon matelot [NOM], intoxiqué et légèrement brûlé à la main, reçoit les premiers soins à l'air libre. Deux passagers incommodés par les fumées sont installés au vent ; un passager en état de choc est pris en charge et rassuré. Par l'intermédiaire du CROSS, j'obtiens un avis médical du CCMM. À 10h55 je préviens l'armateur et je me déroute sur Nice au moteur tribord, à vitesse réduite. À 11h15 j'accoste au quai … du port de Nice, où les pompiers et le SAMU prennent en charge le marin et les trois passagers. Les autres passagers débarquent dans le calme ; je relève l'identité des passagers incommodés et des témoins.</p>` +
            FIN(R_INC, 'Nice', '15 mai 2010') + FORMA('Nice')
        },
        {
          id: 's2011a', titre: 'Abordé sur bâbord devant Sainte-Marguerite', session: 'Session du 10 mai 2011', types: ['pax', 'bles', 'abo', 'inc'],
          texte: 'Tu commandes un navire à passagers armé en navigation côtière. Tu n\'es pas l\'armateur. Le 15 août 2011, tu appareilles de Cannes (quai Laubeuf) à 10h00 pour Sainte-Marguerite avec 60 passagers et 2 membres d\'équipage. Mer belle, vent de sud-ouest force 2, bonne visibilité. À 2 M des appontements de Sainte-Marguerite, un navire à passagers d\'une autre compagnie, qui rentre à Cannes, t\'aborde sur bâbord. Un de tes marins est grièvement blessé et un début d\'incendie se déclare dans le compartiment moteur. La vedette SNSM de Cannes, envoyée par le CROSS, évacue les blessés vers Cannes. Ton matelot circonscrit l\'incendie et tu rentres à Cannes. Rédige le rapport de mer avec les mesures prises avant et après l\'abordage.',
          corrige: INTRO({ navire: 'du navire à passagers « … », de jauge brute …', armement: 'armé au commerce en navigation côtière, immatriculé à Cannes sous le n° …', armateur: 'appartenant à la compagnie … dont le siège social est à Cannes', depart: 'du port de Cannes, quai Laubeuf, le 15 août 2011 à 10h00', dest: 'de l\'île Sainte-Marguerite', bord: '60 passagers et 2 membres d\'équipage à bord' }) +
            `<p>Sorti du port à 10h05, je fais route au 150° à 10 nœuds. Mer belle, vent de sud-ouest force 2, bonne visibilité. J'assure la veille à la passerelle, VHF en veille sur le canal 16, radar en marche.</p>
<p>À 10h09, je relève droit devant, à 1,5 M, un navire à passagers de la compagnie … qui rentre à Cannes sur une route opposée à la mienne : nous sommes en situation de face à face (règle 14). À 10h10, je viens franchement sur tribord en émettant 1 son bref. L'autre navire ne manœuvre pas : j'émets 5 sons brefs et je l'appelle sur le canal 16, sans réponse. À 10h12, l'abordage devenant inévitable, je stoppe et je bats en arrière toute en émettant 3 sons brefs. À 10h13, à 2 M des appontements de Sainte-Marguerite, son étrave heurte mon bordé bâbord au milieu.</p>
<p>Je donne l'alarme. Mon matelot [NOM] est projeté contre une cloison : il est grièvement blessé à la tête et au bras. Une fumée sort du compartiment moteur : je stoppe les moteurs, mon second matelot ferme le gasoil et la ventilation et attaque le feu aux extincteurs. Je fais capeler les brassières aux passagers, les rassemble à l'avant, au vent de la fumée, et les compte. Je fais sonder : pas de voie d'eau.</p>
<p>À 10h15, j'envoie un message PAN PAN au CROSS MED sur le canal 16 : position, abordage, blessé grave, début d'incendie, 62 personnes à bord. J'échange avec l'autre navire, le « … » de la compagnie …, nos noms, ports d'attache, de départ et de destination ; je lui propose mon assistance, il n'en a pas besoin. À 10h20 le feu est circonscrit ; une surveillance est maintenue. Le blessé reçoit les premiers soins ; le CROSS me met en relation avec le CCMM. À 10h35, la vedette SNSM de Cannes accoste et évacue le blessé vers Cannes. Je préviens l'armateur. Après accord du CROSS, je rentre à Cannes au moteur tribord, à vitesse réduite, et j'accoste à 11h05. Les passagers débarquent dans le calme ; je relève l'identité des témoins.</p>` +
            FIN(R_ABO, 'Cannes', '15 août 2011') + FORMA('Cannes')
        },
        {
          id: 's2011b', titre: 'Support de plongée abordé devant l\'aéroport de Nice', session: 'Session du 18 janvier 2011', types: ['bles', 'abo', 'vde'],
          texte: 'Tu commandes un navire support de plongée armé en navigation côtière. Tu n\'es pas l\'armateur. Le 14 juillet 2010, tu appareilles de Nice à 10h00 et fais route à l\'ouest vers le cap d\'Antibes avec 20 plongeurs et 1 membre d\'équipage. Mer belle, vent de sud-ouest force 2, bonne visibilité. Par le travers de l\'aéroport de Nice, à 1 M, un navire à passagers qui vient de Cannes pour Nice t\'aborde sur tribord. Deux plongeurs sont grièvement blessés et une voie d\'eau se déclare. La vedette SNSM de Cagnes, envoyée par le CROSS, évacue les blessés vers le Cros-de-Cagnes. Ton matelot maîtrise la voie d\'eau et tu rentres à Saint-Laurent-du-Var. Rédige le rapport de mer avec les mesures prises avant et après l\'abordage.',
          corrige: INTRO({ navire: 'du navire support de plongée « … », de jauge brute …', armement: 'armé au commerce en navigation côtière, immatriculé à Nice sous le n° …', armateur: 'appartenant à la société … dont le siège social est à Nice', depart: 'du port de Nice le 14 juillet 2010 à 10h00', dest: 'du cap d\'Antibes', bord: '20 plongeurs et 1 membre d\'équipage à bord, les consignes de sécurité ayant été données' }) +
            `<p>Sorti du port à 10h05, je fais route au 250° à 10 nœuds. Mer belle, vent de sud-ouest force 2, bonne visibilité. J'assure la veille à la passerelle, VHF sur le canal 16.</p>
<p>À 10h18, je relève droit devant, à 1,5 M, un navire à passagers qui fait une route opposée à la mienne : nous sommes en situation de face à face (règle 14). À 10h19, je viens franchement sur tribord en émettant 1 son bref. L'autre navire ne manœuvre pas puis vient sur bâbord. J'émets 5 sons brefs ; à 10h21, l'abordage devenant inévitable, je stoppe et je bats en arrière toute en émettant 3 sons brefs. À 10h22, par le travers de l'aéroport de Nice à 1 M, il heurte mon tribord avant.</p>
<p>Je donne l'alarme et fais capeler les brassières. Deux plongeurs, [NOM] et [NOM], sont grièvement blessés (jambe et thorax) : nous leur donnons les premiers soins. Mon matelot constate une voie d'eau dans le compartiment avant tribord : il ferme la porte du compartiment, met la pompe de cale en route et colmate la brèche avec un paillet. Je réduis la vitesse pour soulager l'avant.</p>
<p>À 10h24, j'envoie un message PAN PAN au CROSS MED sur le canal 16 : position, abordage, deux blessés graves, voie d'eau en cours de maîtrise, 22 personnes à bord. J'échange avec le navire abordeur, le « … », nos noms, ports d'attache, de départ et de destination ; je lui propose mon assistance, il n'en a pas besoin. À 10h35 la voie d'eau est maîtrisée ; je fais sonder régulièrement. Le CROSS me met en relation avec le CCMM. À 10h40, la vedette SNSM de Cagnes évacue les deux blessés vers le Cros-de-Cagnes. Je préviens l'armateur. Je rentre à Saint-Laurent-du-Var à vitesse réduite et j'accoste à 11h10. Je relève l'identité des témoins.</p>` +
            FIN(R_ABO, 'Saint-Laurent-du-Var', '14 juillet 2010') + FORMA('Nice')
        },
        {
          id: 's2012', titre: 'Pêcheur abordé par un plaisancier devant Beaulieu', session: 'Session du 17 janvier 2012', types: ['abo', 'vde', 'bles'],
          texte: 'Tu es patron et armateur d\'un navire de pêche armé en petite pêche. Le 12 mai 2011, tu appareilles de Villefranche (la Santé) à 05h30 vers Beaulieu-sur-Mer avec 1 matelot. Mer belle, vent de sud-ouest force 3, bonne visibilité. À 2 M du port de Beaulieu, un navire de plaisance qui fait route vers Nice t\'aborde sur bâbord. Ton matelot est légèrement choqué et une voie d\'eau apparaît dans le compartiment moteur. Le plaisancier est peu touché mais son capitaine signale des passagers blessés. La vedette SNSM de Nice, envoyée par le CROSS, vient vous assister. Ton matelot maîtrise la voie d\'eau et tu rentres à Villefranche. Rédige le rapport de mer avec les mesures prises avant et après l\'abordage.',
          corrige: INTRO({ navire: 'du navire de pêche « … », de jauge brute …', armement: 'armé en petite pêche, immatriculé à Nice sous le n° …', armateur: 'dont je suis le propriétaire et l\'armateur', depart: 'du port de la Santé à Villefranche-sur-Mer le 12 mai 2011 à 05h30', dest: 'de Beaulieu-sur-Mer', bord: '1 matelot à bord, feux de route allumés' }) +
            `<p>À 05h35, je fais route au 080° à 7 nœuds, en transit vers ma zone de pêche. Mer belle, vent de sud-ouest force 3, bonne visibilité. J'assure la veille à la passerelle, VHF sur le canal 16.</p>
<p>À 05h50, je relève droit devant, à 1 M, un navire de plaisance à moteur qui fait route vers Nice sur une route opposée : situation de face à face (règle 14). Je viens franchement sur tribord en émettant 1 son bref. Il ne manœuvre pas : j'émets 5 sons brefs et je l'appelle sur le canal 16. À 05h53, l'abordage devenant inévitable, je stoppe et bats en arrière toute (3 sons brefs). À 05h54, à 2 M du port de Beaulieu, il heurte mon bâbord arrière.</p>
<p>Mon matelot, légèrement choqué, est mis à l'abri. Une voie d'eau apparaît dans le compartiment moteur : il met la pompe de cale en route et colmate la brèche. Le capitaine du plaisancier, le « … », immatriculé à …, m'indique que plusieurs passagers sont blessés. Nous échangeons nos noms, ports d'attache, de départ et de destination. Je reste près de lui pour l'assister.</p>
<p>À 05h56, j'envoie un message PAN PAN au CROSS MED sur le canal 16 : position, abordage, voie d'eau à mon bord, blessés à bord du plaisancier. À 06h15, la vedette SNSM de Nice arrive, prend en charge les blessés du plaisancier et m'escorte. À 06h20 la voie d'eau est maîtrisée. Avec l'accord du CROSS, je rentre à Villefranche à vitesse réduite et j'accoste à 06h45.</p>` +
            FIN(R_ABO, 'Villefranche-sur-Mer', '12 mai 2011') + FORMA('Nice')
        },
        {
          id: 's2013', titre: 'NUC en avarie moteur au milieu du trafic de Monaco', session: 'Session du 15 janvier 2013 (1 h 30)', types: ['mot', 'abo', 'vde', 'bles'],
          texte: 'Tu commandes un NUC de 24,75 m avec 4 hommes d\'équipage. Le 30 septembre, à 10h00, tu appareilles de Nice et longes la côte vers l\'Italie. Beaucoup de trafic à cause du Yacht Show de Monaco. Le propriétaire te demande de serrer la côte au plus près pour admirer le littoral : que fais-tu ? Près de deux navires (l\'un vient en sens inverse, l\'autre te double), tu as une avarie moteur : comment réagis-tu ? Quelques minutes plus tard, un navire étranger te percute. Un marin tombe et se blesse à la cheville. Ton navire prend l\'eau à l\'arrière ; le navire étranger est lui aussi en situation critique. Rédige de façon complète le rapport de mer : mesures techniques, de sécurité, administratives et juridiques. Tu es libre sur l\'issue.',
          corrige: INTRO({ navire: 'du navire de plaisance à utilisation commerciale « … », de 24,75 m, de jauge brute …', armement: 'immatriculé à Nice sous le n° …', armateur: 'appartenant à la société … dont le siège social est à …', depart: 'du port de Nice le 30 septembre à 10h00', dest: 'de l\'Italie, en longeant la côte', bord: '4 membres d\'équipage et le propriétaire à bord' }) +
            `<p>Sorti du port à 10h05, je fais route à l'est à 10 nœuds. Mer belle, vent faible, bonne visibilité. Le trafic est très dense à cause du Yacht Show de Monaco ; je renforce la veille : un matelot en vigie, radar et VHF canal 16. Le propriétaire me demande de serrer la côte. Je lui explique que je garde une distance de sécurité (hauts-fonds, baigneurs, zones réglementées) et que la conduite du navire reste ma responsabilité ; je reste à 1 M de la côte.</p>
<p>À 10h40, à 1 M dans le sud du cap Ferrat, alors qu'un navire vient en sens inverse et qu'un autre me rattrape sur bâbord, le moteur s'arrête (alarme de pression d'huile). Je montre les deux boules noires de navire non maître de sa manœuvre, j'émets un message SÉCURITÉ sur le canal 16 pour prévenir les navires proches et j'appelle directement le navire qui me rattrape. Le matelot mécanicien recherche la panne. Je fais parer le mouillage au cas où le navire dériverait vers la côte.</p>
<p>À 10h46, le navire « … », de pavillon …, ne s'écarte pas malgré mes 5 sons brefs et me percute à l'arrière tribord. Mon matelot [NOM] tombe et se blesse à la cheville : premiers soins, immobilisation. Une voie d'eau apparaît dans le local barre : porte étanche fermée, pompes en route, colmatage. Le navire étranger signale une brèche importante et une forte gîte.</p>
<p>À 10h48, j'envoie un message MAYDAY RELAY pour le navire étranger en danger et je signale ma propre situation au CROSS MED (abordage, voie d'eau, blessé léger, 5 personnes à bord). Je fais capeler les brassières et préparer le radeau. Nous échangeons nos noms, ports d'attache, de départ et de destination ; je reste sur place pour l'assister dans la limite de mes moyens. À 11h05, la voie d'eau est maîtrisée. À 11h20, les moyens envoyés par le CROSS prennent en charge le navire étranger et son équipage. Avec l'accord de l'armateur, j'accepte le remorquage proposé par le CROSS ; j'accoste à Villefranche-sur-Mer à 12h40, où les pompiers prennent en charge le blessé.</p>` +
            FIN(R_ABO, 'Villefranche-sur-Mer', '30 septembre') + FORMA('Nice')
        },
        {
          id: 'sMist', titre: 'Incendie machine au large de Saint-Honorat', session: 'Sujet DML Alpes-Maritimes', types: ['pax', 'inc', 'bles'],
          texte: 'Tu commandes le navire à passagers « LOU MISTRALOU II », de la compagnie des Taxis de Mer Azuréens, avec 54 passagers, entre Nice et Théoule-sur-Mer. Départ du quai de la gare maritime de Nice à 10h30. Tu assures la veille et la conduite quand, dans le 130 de l\'île Saint-Honorat à 3 M, une fumée sort du compartiment machine et le navire ralentit fortement. Tu stoppes : un début d\'incendie se déclare. Tu alertes les secours et prends les mesures pour lutter contre le sinistre et protéger tes passagers. Rédige le rapport de mer : faits, réactions, actions et conséquences pour les passagers.',
          corrige: INTRO({ navire: 'du navire à passagers « LOU MISTRALOU II », de jauge brute …', armement: 'armé au commerce, immatriculé à Nice sous le n° …', armateur: 'appartenant à la compagnie des Taxis de Mer Azuréens dont le siège social est à Nice', depart: 'du quai de la gare maritime du port de Nice à 10h30', dest: 'de Théoule-sur-Mer', bord: '54 passagers et 2 membres d\'équipage à bord, les consignes de sécurité ayant été données' }) +
            `<p>Je fais route à l'ouest-sud-ouest à 14 nœuds. Mer belle, vent d'est force 2, bonne visibilité. J'assure la veille et la conduite du navire, VHF sur le canal 16.</p>
<p>À 11h35, dans le 130 de l'île Saint-Honorat à 3 M, une fumée sort du compartiment machine et le navire ralentit fortement. Je stoppe, je donne l'alarme et je viens bout au vent pour que la fumée s'éloigne des passagers. Mon matelot constate un début d'incendie : il ferme le gasoil et la ventilation, ferme les accès et, personne n'étant dans le compartiment, déclenche l'extinction fixe au CO2.</p>
<p>À 11h37, j'envoie un message PAN PAN au CROSS MED sur le canal 16 : position, incendie en machine, 56 personnes à bord, navire stoppé. Mon second matelot fait capeler les brassières, rassemble les passagers sur le pont avant au vent, les compte (54 présents) et leur explique la situation. Les radeaux sont parés à être mis à l'eau. À 11h50, le feu est éteint ; les cloisons sont refroidies et une surveillance contre toute reprise est mise en place. Les moteurs sont hors d'usage.</p>
<p>Trois passagers incommodés par les fumées sont installés à l'air libre ; une passagère en crise d'angoisse est rassurée. Le CROSS me met en relation avec le CCMM. Je préviens l'armateur. Le navire dérivant lentement vers l'ouest, loin de tout danger, j'accepte avec l'accord de l'armateur le remorquage par la vedette SNSM de Cannes, passée à 12h20. J'arrive à Cannes à 13h15, où le SAMU examine les trois passagers. Les passagers débarquent dans le calme ; je relève leurs identités et celles des témoins. L'armateur organise leur retour.</p>` +
            FIN(R_INC, 'Cannes', '…') + FORMA('Cannes')
        },
        {
          id: 's2014', titre: 'Conteneur à la dérive au large du cap d\'Antibes', session: 'Session du 30 avril 2014', types: ['pax', 'vde', 'bles', 'cont'],
          texte: 'Tu commandes le navire à passagers « LOU PESCADOU II », 24 m, de la compagnie des Taxis de Mer Azuréens. 72 passagers ont embarqué à Calvi pour Port Canto à Cannes ; tu quittes le quai à 07h45. Tu assures la veille et la conduite quand, dans le 120 du cap d\'Antibes à 8 M, un choc brutal sur l\'avant bâbord casse la vitesse du navire. Un marin constate que vous avez heurté un conteneur à la dérive. Il y a une voie d\'eau et plusieurs passagers sont blessés par des chutes. Tu alertes les secours et prends les mesures pour la sécurité des passagers et l\'intégrité du navire. Rédige le rapport de mer.',
          corrige: INTRO({ navire: 'du navire à passagers « LOU PESCADOU II », de 24 m, de jauge brute …', armement: 'armé au commerce, immatriculé à Nice sous le n° …', armateur: 'appartenant à la compagnie des Taxis de Mer Azuréens dont le siège social est à Nice', depart: 'du port de commerce de Calvi à 07h45', dest: 'de Port Canto à Cannes', bord: '72 passagers et 3 membres d\'équipage à bord, les consignes de sécurité ayant été données' }) +
            `<p>Je fais route au 300° à 25 nœuds. Mer peu agitée, vent d'ouest force 3, bonne visibilité. J'assure la veille et la conduite du navire, radar en marche, VHF sur le canal 16.</p>
<p>À 10h10, dans le 120 du cap d'Antibes à 8 M, un choc brutal sur l'avant bâbord casse la vitesse du navire. Je stoppe et donne l'alarme. Mon matelot constate que nous avons heurté un conteneur à la dérive, presque entièrement immergé, que ni la veille ni le radar n'avaient permis de voir. Il découvre une voie d'eau dans le compartiment avant bâbord : il ferme la porte étanche, met les pompes de cale en route et colmate la brèche avec un paillet. Le navire prend une légère gîte sur bâbord.</p>
<p>Plusieurs passagers sont tombés sous le choc. Je fais capeler les brassières, rassembler les passagers au milieu du navire, les compter (72 présents) et les informer. Quatre passagers sont blessés (une fracture du poignet, des contusions) : premiers soins par l'équipage.</p>
<p>À 10h13, j'envoie un message PAN PAN au CROSS MED sur le canal 16 : position, voie d'eau, blessés, 75 personnes à bord ; je signale aussi la position du conteneur, danger pour la navigation, pour la diffusion d'un avis aux navigateurs. Le CROSS me met en relation avec le CCMM. À 10h30, la voie d'eau est contenue et je fais sonder toutes les 10 minutes. Je préviens l'armateur. Je reprends la route vers Cannes à 8 nœuds, escorté par la vedette SNSM d'Antibes envoyée par le CROSS. J'accoste à Port Canto à 11h35, où les pompiers et le SAMU prennent en charge les blessés. Les passagers débarquent dans le calme ; je relève leurs identités et celles des témoins.</p>` +
            FIN(R_CHOC, 'Cannes', '30 avril 2014') + FORMA('Cannes')
        }
      ],
      criteres: [
        { g: 'Introduction', t: '« Je soussigné » : ton nom, ton brevet (capitaine 200), ta fonction', m: ['soussign'] },
        { g: 'Introduction', t: 'Le navire : nom, type, jauge, armement ou catégorie, immatriculation', m: ['immatricul', 'jauge'] },
        { g: 'Introduction', t: 'L\'armateur (ou le propriétaire) et son siège social', m: ['armateur', 'appartenant', 'siège'] },
        { g: 'Introduction', t: 'Appareillage : port, date, heure, destination', m: ['appareill'] },
        { g: 'Introduction', t: 'Personnes à bord : équipage et passagers', m: ['équipage', 'passagers', 'plongeurs'] },
        { g: 'Introduction', t: 'Navire en bon état de navigabilité, muni de ses expéditions', m: ['navigabilit', 'expédition'] },
        { g: 'Récit', t: 'Météo : vent (direction et force), mer, visibilité', m: ['vent', 'force', 'visibilit'] },
        { g: 'Récit', t: 'Route suivie et vitesse', m: ['route', 'nœud', 'noeud'] },
        { g: 'Récit', t: 'Heure et position précises de l\'événement', m: ['position', ' dans le ', 'à \\d+[,.]?\\d* ?m'] },
        { g: 'Récit', t: 'Veille assurée (passerelle, VHF 16, radar)', m: ['veille'] },
        { g: 'Récit', t: 'Premières mesures : stopper ou manœuvrer, alarme', m: ['stopp', 'alarme'] },
        { g: 'Récit', t: 'Alerte au CROSS par VHF 16 avec le bon message (PAN PAN, MAYDAY, SÉCURITÉ)', m: ['cross', 'pan ?pan', 'mayday', 'canal 16'] },
        { g: 'Récit', t: 'L\'armateur est prévenu', m: ['armateur'] },
        { g: 'Récit', t: 'Arrivée : heure, port, secours à quai, débarquement', m: ['accost', 'arriv'] },
        { g: 'Récit', t: 'Une heure notée à chaque décision', m: ['\\d{1,2} ?h ?\\d{2}'] },
        { g: 'Selon l\'événement', k: 'pax', t: 'Passagers : brassières, rassemblement au vent, comptage, information', m: ['brassi', 'rassembl', 'compt'] },
        { g: 'Selon l\'événement', k: 'bles', t: 'Blessés : premiers soins, avis médical (CCMM via le CROSS), évacuation', m: ['soins', 'ccmm', 'médical', 'évacu'] },
        { g: 'Selon l\'événement', k: 'inc', t: 'Incendie : couper le gasoil et la ventilation, fermer les accès, foyer sous le vent', m: ['gasoil', 'ventilation', 'sous le vent', 'au vent'] },
        { g: 'Selon l\'événement', k: 'inc', t: 'Incendie : attaque (extincteurs, CO2), refroidissement, surveillance d\'une reprise', m: ['extinct', 'co2', 'reprise', 'refroid'] },
        { g: 'Selon l\'événement', k: 'abo', t: 'Avant l\'abordage : relèvement constant, règle de barre appliquée, 5 sons brefs, manœuvre', m: ['relève', 'règle', 'sons brefs'] },
        { g: 'Selon l\'événement', k: 'abo', t: 'Après l\'abordage : échange des noms et ports, assistance proposée à l\'autre navire', m: ['échang', 'assist'] },
        { g: 'Selon l\'événement', k: 'vde', t: 'Voie d\'eau : porte étanche, pompes, colmatage, sondages', m: ['pomp', 'colmat', 'sond', 'étanche'] },
        { g: 'Selon l\'événement', k: 'mot', t: 'Avarie moteur : marques de non-maître de sa manœuvre, avis aux navires proches, mouillage ou remorquage', m: ['non maître', 'boules', 'mouill', 'remorqu'] },
        { g: 'Selon l\'événement', k: 'cont', t: 'Danger pour la navigation signalé (conteneur) pour un avis aux navigateurs', m: ['danger pour la navigation', 'avurnav', 'avis aux navigateurs', 'sécurité'] },
        { g: 'Conclusion', t: 'Réserves sur les avaries qui pourraient être constatées par la suite', m: ['réserve'] },
        { g: 'Conclusion', t: 'Rapport « sincère et véritable », droit de l\'amplifier', m: ['sincère', 'amplifier'] },
        { g: 'Conclusion', t: 'Lieu, date, signature', m: ['fait à', 'le capitaine'] },
        { g: 'Forme', t: 'Trois parties en paragraphes, phrases courtes, temps cohérent', m: [] }
      ]
    }
  });
})();
