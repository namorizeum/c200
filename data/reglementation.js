/* Environnement réglementaire — module NP-1 */
C200.module({
  id: 'reglementation', bloc: 'NP-1', ordre: 14, court: 'RÉG', titre: 'Environnement réglementaire',
  intro: 'Affaires maritimes et CROSS, identification du navire, catégories de navigation, visites et titres de sécurité, le capitaine, régimes disciplinaire et pénal, SOLAS et MARPOL. Écrit du module NP-1 (1/5 de l\'épreuve de 2 h).',
  fiches: [
    {
      id: 'admin', titre: 'L\'administration chargée de la mer', src: 'Cours Réglementation NP-1 p. 2 à 6',
      html: `<h3>Ce que font les Affaires maritimes</h3>
<ul><li><b>Les marins</b> : entrée et sortie de la profession, <b>rôle d'équipage</b>, discipline, protection sociale (<b>ENIM</b>), formation et délivrance des brevets.</li><li><b>Les navires et la police de la navigation</b> : immatriculation, construction et équipement, conditions de vie à bord, <b>visites</b> périodiques ou inopinées, infractions.</li><li><b>Les transports maritimes</b> : aider la flotte française (Registre international français, RIF, guichet unique à Marseille), réserver certains trafics (passagers vers la Corse).</li><li><b>Les pêches et cultures marines</b> : police des pêches, aides, politique européenne.</li></ul>
<h3>L'organisation</h3>
<div class="tw"><table><tr><th>Niveau</th><th>Service</th><th>Exemples de rôle</th></tr>
<tr><td>National (Paris)</td><td>Direction des affaires maritimes (aujourd'hui <b>DGAMPA</b>)</td><td>Écrit les règlements ; tutelle de l'ENIM.</td></tr>
<tr><td>Façade</td><td>4 <b>DIRM</b> : Le Havre, Nantes, Bordeaux, <b>Marseille</b> (Méditerranée)</td><td>Tutelle des <b>CSN</b> (centres de sécurité des navires), des <b>CROSS</b>, des Phares et Balises, des écoles ; préside la <b>CRS</b> ; recours contre une sanction disciplinaire ou une décision d'effectif ; suspension des brevets.</td></tr>
<tr><td>Département</td><td><b>DML</b> (délégation à la mer et au littoral, dans la DDTM)</td><td>Immatriculation, <b>décision d'effectif</b>, rôle d'équipage, discipline, conciliation armateur-marin, examens (CIN, <b>C200</b>), permis plaisance, plans de balisage.</td></tr></table></div>
<p>Depuis 2010, les DIRM et les DML remplacent les anciennes DRAM et DDAM (qui restent outre-mer). Contrôle en mer : patrouilleurs et vedettes (DIRM), unités légères ULAM (DML).</p>
<div class="retenir"><p>Le navire est <b>immatriculé par la DML</b> et suivi techniquement par le <b>centre de sécurité des navires</b>.</p></div>`
    },
    {
      id: 'cross', titre: 'Les CROSS', src: 'Cours Réglementation NP-1 p. 7-8',
      html: `<p><b>Centres régionaux opérationnels de surveillance et de sauvetage</b> : service des Affaires maritimes, armé par des marins de la Marine nationale et des Affaires maritimes. Sous l'autorité <b>opérationnelle du préfet maritime</b>, 24 h sur 24.</p>
<h3>Les 7 missions</h3>
<ol><li>Recherche et sauvetage (<b>SECMAR</b>).</li><li>Surveillance de la navigation (<b>SURNAV</b>).</li><li>Surveillance des pêches (<b>SURPÊCHE</b>).</li><li>Surveillance des pollutions (<b>SURPOL</b>).</li><li>Diffusion des renseignements de sécurité : <b>AVURNAV</b>, météo, BMS.</li><li>Alertes et renseignement de <b>sûreté</b>.</li><li>Permanence opérationnelle des Affaires maritimes.</li></ol>
<h3>Où ?</h3>
<p>Métropole : <b>Gris-Nez</b> (Manche, mer du Nord ; point d'entrée des demandes SAR vers la France), <b>Jobourg</b> (Manche), <b>Corsen</b> (Iroise), <b>Étel</b> (Atlantique), <b>La Garde</b> (CROSS MED, Méditerranée) avec un sous-CROSS en <b>Corse</b> (Aspretto, Ajaccio). Outre-mer : Fort-de-France, La Réunion, Nouméa, Papeete.</p>
<p>Le CROSS n'a <b>pas de moyens propres</b> : il coordonne ceux de la Marine, des Douanes, des Affaires maritimes, de la Gendarmerie maritime, de la <b>SNSM</b>, de la Sécurité civile et de tous les navires présents.</p>
<p>Le joindre : <b>VHF 16</b> (ou ASN canal 70), Inmarsat ; par téléphone le <b>196</b> (le cours cite l'ancien 1616).</p>`
    },
    {
      id: 'navire', titre: 'Identifier le navire : francisation et jauge', src: 'Cours Réglementation NP-1 p. 9 à 11',
      html: `<p><b>Navire</b> : tout engin qui navigue en mer et dans les eaux maritimes rattachées (estuaires, fleuves en aval du premier obstacle à la navigation des bâtiments de mer).</p>
<p>Il est individualisé par son <b>nom</b>, son <b>port d'attache</b>, sa <b>nationalité</b> (pavillon) et son <b>tonnage</b> (jauge).</p>
<h3>L'acte de francisation (Douanes)</h3>
<p>Il prouve la <b>nationalité française</b> et donne le droit de porter le pavillon. Obligatoire pour les navires de <b>7 m</b> et plus, ou de <b>22 CV</b> administratifs et plus, ou en navigation internationale.</p>
<p>Conditions : propriétaires européens pour au moins la moitié du navire, résidence (6 mois en France pour une personne physique), navire européen ou dédouané. Jusqu'à 24 quirats (parts).</p>
<p>Il indique : propriétaire, nom (approuvé par l'administration), nationalité, date de construction, conformité, dimensions, jauges, <b>port d'attache</b> (le « domicile » du navire), numéro en douane, antécédents (propriétaires, hypothèques, saisies).</p>
<p>Couleur : <b>bleu</b> pour commerce, pêche et NUC ; orange pour la plaisance privée.</p>
<h3>Les jauges</h3>
<p>Calculées par les Douanes (convention de 1969) ; certificat international de jauge obligatoire à partir de <b>24 m</b>. Depuis 1994, nombres sans unité.</p>
<div class="tw"><table><tr><th></th><th>Ce que c'est</th><th>Sert à</th></tr>
<tr><td><b>Jauge brute</b></td><td>Volume de tous les espaces fermés</td><td>Sécurité (SOLAS), pollution (MARPOL), <b>prérogatives des brevets</b> (C200…), cotisations ENIM</td></tr>
<tr><td><b>Jauge nette</b></td><td>Brute − machine et locaux d'équipage : la capacité commerciale</td><td>Droits de pilotage, lamanage, remorquage, quai, taxes</td></tr></table></div>`
    },
    {
      id: 'marques', titre: 'Immatriculation et marques extérieures', src: 'Cours Réglementation NP-1 p. 11-12',
      html: `<p>D'abord <b>francisé</b> par les Douanes, puis <b>immatriculé</b> par les Affaires maritimes (sauf navires de la Marine et de la Gendarmerie). L'immatriculation permet de délivrer les titres de navigation et de sécurité. Numéro à <b>6 chiffres</b> pour un navire professionnel. Le quartier de rattachement gère le navire et l'équipage (double du rôle d'équipage).</p>
<h3>Marques extérieures</h3>
<div class="tw"><table><tr><th>Navire</th><th>Marques</th></tr>
<tr><td><b>Commerce</b></td><td>Nom de chaque côté de l'avant ; nom et port d'attache à l'arrière. Numéro <b>OMI</b> (7 chiffres) à partir de <b>100 UMS</b> (visible du ciel pour un navire à passagers).</td></tr>
<tr><td><b>Pêche</b></td><td>Immatriculation précédée des lettres du quartier, à l'avant des deux bords ; nom et port d'attache à l'arrière ; 3 dernières lettres de l'indicatif d'appel sur le roof (si moins de 500 tx).</td></tr>
<tr><td><b>Plaisance</b></td><td>Moteur dès 2,50 m : initiales du quartier et numéro des deux côtés. Voilier de plus de 7 m : nom et quartier à la poupe.</td></tr></table></div>
<p>La nationalité se montre par le <b>pavillon national à la poupe</b>.</p>`
    },
    {
      id: 'categories', titre: 'Types de navires et catégories de navigation', src: 'Cours Réglementation NP-1 p. 12-13 ; règlement de 1987, division 110',
      html: `<h3>Les types de navires</h3>
<ul><li><b>Navire à passagers</b> : transporte <b>plus de 12 passagers</b>.</li><li><b>Navire de pêche</b> : capture et traitement du poisson à des fins commerciales.</li><li><b>Navire de plaisance</b> : usage personnel ou formation associative.</li><li><b>NUC</b> (navire à utilisation commerciale) : plaisance exploitée commercialement. À voile, jusqu'à 30 personnes en eaux françaises ; au moteur, <b>12 passagers</b> au plus. Règles : <b>division 241</b> (moins de 24 m), <b>division 242</b> (24 m et plus, moins de 3 000 UMS).</li><li><b>Navire de charge</b> : tous les autres (remorqueurs, câbliers, pétroliers…).</li></ul>
<p>Tout navire sous pavillon français a un <b>rôle d'équipage</b> (cotisations ENIM).</p>
<h3>Les catégories de navigation (navires professionnels)</h3>
<div class="tw"><table><tr><th>Catégorie</th><th>Limite</th></tr>
<tr><td><b>1re</b></td><td>Pas de limite</td></tr>
<tr><td><b>2e</b></td><td>À moins de <b>200 M</b> d'un port ou abri (et 600 M au plus entre le dernier port du pays et la destination)</td></tr>
<tr><td><b>3e</b></td><td>À moins de <b>20 M</b> de la terre la plus proche</td></tr>
<tr><td><b>4e</b></td><td>Limitée à <b>5 M</b> (nouvelle définition : 5 M de la terre la plus proche)</td></tr>
<tr><td><b>5e</b></td><td>Toujours en <b>eaux abritées</b> (rades, lacs, bassins, étangs)</td></tr></table></div>
<p>La catégorie est inscrite sur le <b>permis de navigation</b>. Elle fixe le <b>matériel de sécurité</b> (radeaux, balises, radio…), la <b>décision d'effectif</b> (nombre et brevets des marins) et la stabilité exigée : plus on va loin, plus on emporte.</p>
<p class="small muted">Le support de cours ne détaille pas les catégories : ce tableau vient du règlement de 1987 (article 110.10).</p>`
    },
    {
      id: 'visites', titre: 'Les visites de sécurité', src: 'Cours Réglementation NP-1 p. 13 à 15',
      html: `<p>Les titres de sécurité et de prévention de la pollution ne sont délivrés ou renouvelés qu'après une <b>visite</b> par les Affaires maritimes (centre de sécurité des navires).</p>
<div class="tw"><table><tr><th>Visite</th><th>Quand</th><th>Points clés</th></tr>
<tr><td><b>Mise en service</b></td><td>Navire neuf</td><td>Commission présidée par le chef du CSN ; attestation de la société de classification, essais à la mer. Titres délivrés pour <b>1 an</b>.</td></tr>
<tr><td><b>Annuelle</b></td><td>Tous les ans</td><td>Renouvelle les titres. Le bord la prépare.</td></tr>
<tr><td><b>Coque</b></td><td><b>12 mois</b> (passagers), <b>30 mois</b> (charge)</td><td>Une sur deux peut se faire à flot par plongeurs : bassin au moins tous les <b>2 ans</b> (passagers), <b>5 ans</b> (charge).</td></tr>
<tr><td><b>Audits ISM / ISPS</b></td><td>Réguliers</td><td>Gestion de la sécurité et de la sûreté.</td></tr>
<tr><td><b>Spéciale</b></td><td>Avarie grave, grosse modification, retrait de la cote</td><td>Faite par la commission de visite annuelle.</td></tr>
<tr><td><b>Inopinée</b></td><td>À tout moment (visite de partance)</td><td>L'inspecteur peut <b>interdire ou retarder le départ</b>.</td></tr>
<tr><td><b>Sur réclamation de l'équipage</b></td><td>Demande écrite motivée</td><td>Signée par le <b>délégué de bord</b> ou <b>3 membres</b> d'équipage (ou demandée par le capitaine).</td></tr>
<tr><td><b>À l'étranger (MOU de Paris)</b></td><td>Inopinée</td><td>Contrôle par l'État du port ; résultats dans <b>Equasis</b>.</td></tr></table></div>
<p>Chaque visite donne un <b>procès-verbal</b> (prescriptions, délais). S'opposer à une visite est une <b>infraction grave</b>.</p>`
    },
    {
      id: 'titres', titre: 'Titres de sécurité et CRS', src: 'Cours Réglementation NP-1 p. 16-17',
      html: `<div class="tw"><table><tr><th>Titre</th><th>Validité</th><th>Texte</th></tr>
<tr><td><b>Permis de navigation</b></td><td>1 an</td><td>Règlement 1987</td></tr>
<tr><td><b>Décision d'effectif</b> / effectif minimal de sécurité</td><td>1 an</td><td>Règlement 1987 / SOLAS</td></tr>
<tr><td>Certificat international de <b>franc-bord</b></td><td>5 ans</td><td>Lignes de charge 1966</td></tr>
<tr><td>Certificat de sécurité <b>navire à passagers</b> (international)</td><td>1 an</td><td>SOLAS</td></tr>
<tr><td>Navire de charge de plus de 500 : sécurité <b>construction</b>, <b>matériel d'armement</b>, <b>radio</b></td><td>5 ans / 2 ans / 1 an (cours)</td><td>SOLAS</td></tr>
<tr><td>Certificat de gestion de la sécurité <b>ISM</b> (navire) / attestation de conformité (compagnie)</td><td>5 ans (audit à 2,5 ans)</td><td>SOLAS / ISM</td></tr>
<tr><td>Certificat international de <b>sûreté</b></td><td>5 ans (audit à 2,5 ans)</td><td>SOLAS / ISPS</td></tr>
<tr><td>Prévention de la pollution par <b>hydrocarbures</b>, <b>eaux usées</b>, <b>air</b></td><td>5 ans</td><td>MARPOL</td></tr></table></div>
<p class="small muted">Depuis le système harmonisé (protocole SOLAS de 1988), les trois certificats du navire de charge valent en pratique 5 ans avec visites annuelles. À l'examen, garde les chiffres de ton formateur.</p>
<h3>La commission régionale de sécurité (CRS)</h3>
<p>Commission d'étude présidée par le <b>directeur interrégional de la mer</b>. Elle examine les <b>plans et documents</b> des navires professionnels (commerce, pêche, plaisance pro) de sa compétence et dit s'ils sont conformes ; elle est consultée sur la sauvegarde de la vie humaine, l'habitabilité, la pollution, et sur les <b>recours</b> contre les décisions des centres de sécurité. Membres de droit et membres nommés pour 3 ans.</p>`
    },
    {
      id: 'capitaine', titre: 'Le capitaine : statut, attributions, obligations', src: 'Cours Réglementation NP-1 p. 18-19',
      html: `<h3>Plusieurs casquettes</h3>
<ul><li><b>Représentant de l'armateur</b> (agit en son nom) et <b>chef de l'expédition nautique</b>.</li><li><b>Mandataire</b> des propriétaires des marchandises.</li><li><b>Chef de la société du bord</b> : il fait respecter l'ordre légal national.</li></ul>
<p>L'armateur peut le congédier ; les litiges capitaine-armateur vont au <b>tribunal de commerce</b>.</p>
<div class="retenir"><p>Code des transports L5531-1 : le capitaine a autorité sur <b>toutes les personnes à bord</b>, quelle que soit leur nationalité, pour l'ordre, la sûreté, la sécurité du navire, des personnes et de la cargaison.</p></div>
<h3>Attributions</h3>
<p><b>Techniques</b>, <b>commerciales</b>, <b>publiques et juridiques</b> (officier d'état civil — il <b>ne célèbre pas</b> de mariage —, officier ministériel, officier de police judiciaire), <b>disciplinaires</b>, missions de service public.</p>
<h3>Obligations</h3>
<ul><li><b>Former l'équipage</b> : respecter la décision d'effectif, vérifier brevets et aptitude médicale (STCW).</li><li><b>Mettre le navire en état</b> de faire le voyage.</li><li>Avoir ses <b>expéditions</b> (papiers de bord) : titres de navigation et de sécurité, livre de bord, manifestes, charte-partie.</li><li>Conduire l'expédition <b>en droiture</b>, tenir l'armateur au courant, tenir le <b>journal de bord</b> (base du rapport de mer).</li><li>Être <b>à la passerelle</b> à l'entrée et à la sortie des ports.</li><li>À l'arrivée : formalités (Affaires maritimes, Douanes), <b>rapport de mer dans les 24 h</b>, affirmé si événement grave, requête en nomination d'experts.</li></ul>
<h3>Quatre responsabilités</h3>
<p>Pénale <b>spécifique</b> (code des transports) · <b>disciplinaire</b> · pénale de <b>droit commun</b> · <b>civile</b>.</p>
<p>Après un <b>événement de mer</b> : rapport de mer et rapport d'avarie. Après un <b>accident</b> du travail : le formulaire de déclaration vu en cours.</p>`
    },
    {
      id: 'penal', titre: 'Les tribunaux maritimes et les délits', src: 'Cours Réglementation NP-1 p. 20 à 26',
      html: `<p>L'ordonnance du 2 novembre 2012 (réforme pénale maritime) crée les <b>tribunaux maritimes</b>, qui remplacent les anciens tribunaux maritimes commerciaux (TMC) depuis 2015. Ils jugent les <b>délits maritimes</b>, surtout liés à la sécurité.</p>
<p><b>Échevinage</b> : 3 magistrats professionnels + <b>2 assesseurs maritimes</b> choisis pour leur expérience de la mer.</p>
<p>Six tribunaux : Le Havre, Brest, Bordeaux, <b>Marseille</b> (Méditerranée), Cayenne, Saint-Denis.</p>
<h3>Exemples de délits (code des transports)</h3>
<ul><li>Ne pas respecter le <b>RIPAM</b> (feux, signaux, route, veille, vitesse de sécurité), les règles des préfets maritimes ou les ordres des CROSS.</li><li>Par négligence, causer un abordage, un échouement, une avarie grave, des blessures.</li><li>Ne pas signaler au <b>préfet maritime</b> un accident de mer dans les eaux territoriales.</li><li>Envoyer un <b>signal de détresse</b> sans danger.</li><li>Ne pas obéir à un <b>navire de guerre</b> français.</li><li>Ne pas porter <b>assistance</b> à une personne en danger de se perdre (même ennemie) ; après abordage, ne pas sauver l'autre navire, s'éloigner trop tôt.</li><li>Après abordage, ne pas donner le nom du navire, ses ports d'immatriculation, de départ et de destination.</li><li>Abandonner le navire <b>sans l'avis des officiers</b>, sans organiser le sauvetage ni sauver les papiers de bord, ou ne pas le quitter <b>le dernier</b>.</li><li>Capitaine absent de la passerelle à l'entrée ou la sortie d'un port.</li><li>Naviguer sans <b>fiche d'effectif minimal</b>, avec un marin sans brevet ou sans certificat médical valide.</li><li>Altérer les documents de bord ; faire obstacle à un contrôle.</li></ul>
<p>Les <b>crimes</b> et les cas graves (blessure grave, décès) vont devant les juridictions de <b>droit commun</b>.</p>`
    },
    {
      id: 'discipline', titre: 'Le régime disciplinaire', src: 'Cours Réglementation NP-1 p. 26 à 31',
      html: `<p>On distingue les <b>fautes contre la discipline</b> (manquements au métier) et les <b>infractions pénales</b> (contraventions, délits, crimes). Le régime s'applique au capitaine, à l'équipage, aux passagers d'un navire français, <b>où qu'il soit</b>.</p>
<h3>Les documents</h3>
<p><b>Livre de discipline</b> (à bord, sauf navigation côtière, pêche côtière et petite pêche) : fautes, enquêtes, punitions ; visé par l'administrateur. <b>Livre de punitions</b> (aux Affaires maritimes). <b>Fichier du marin</b> (au quartier).</p>
<div class="tw"><table><tr><th></th><th>Faute légère</th><th>Faute grave</th></tr>
<tr><td>Exemples</td><td>Désobéissance simple sans résistance à une sommation ; ivresse accidentelle sans désordre hors service ; absence de moins de 4 h ; querelle sans coups</td><td>Récidive de faute légère ; faute mettant en danger le navire ; refus d'obéir ; ivresse avec désordre ; insulte ; <b>s'endormir</b> à la barre, en vigie, de quart ; fumer ou faire du feu interdit ; absence irrégulière ; petit vol ; dégradation</td></tr>
<tr><td>Qui sanctionne</td><td><b>Le capitaine</b>, après avoir entendu l'intéressé et les témoins dans les <b>24 h</b></td><td><b>L'autorité maritime</b> (administrateur des Affaires maritimes ; à l'étranger, commandant d'un bâtiment de l'État ou consul) après l'enquête du capitaine (PV signé des témoins)</td></tr>
<tr><td>Sanctions</td><td><b>Blâme</b>, <b>consigne à bord</b> de 4 jours au plus. Pas d'appel.</td><td>Consigne à bord de <b>8 jours</b> au plus</td></tr></table></div>
<p>Sursis : <b>jamais</b> pour les officiers et les passagers.</p>
<h3>Quelques peines pénales</h3>
<p><b>Mutinerie</b> : jusqu'à 10 ans (exécution), 20 ans (officiers, maîtres, passagers). Violences contre le capitaine : 5 à 20 ans. Capitaine ivre à bord : jusqu'à 6 mois et 3 750 €. Détourner un objet nécessaire à la sécurité : 2 ans et 15 000 €.</p>
<p>Un <b>breveté</b> peut perdre, temporairement ou définitivement, les droits attachés à son brevet (faute contre l'honneur, faute grave professionnelle, condamnation).</p>`
    },
    {
      id: 'securite', titre: 'SOLAS, MARPOL et les divisions', src: 'Cours Réglementation NP-1 p. 32-33',
      html: `<h3>SOLAS (sauvegarde de la vie humaine en mer)</h3>
<p>Elle couvre les <b>engins de sauvetage</b>, les <b>radiocommunications</b>, la <b>sécurité de la navigation</b>, la <b>construction</b> (stabilité, compartimentage, machines, électricité).</p>
<p>Prescriptions principales : cloisons étanches et résistantes au feu, engins de sauvetage en nombre suffisant, prévention et lutte contre l'incendie, installation radio obligatoire, normes de stabilité strictes.</p>
<p>Contre l'incendie : tranches verticales séparées par des cloisons résistantes, locaux d'habitation isolés, peu de matériaux combustibles, détection et extinction sur place, protection des issues, matériel de lutte rapide à utiliser.</p>
<h3>MARPOL</h3>
<p>But : supprimer la pollution par les navires. Deux grandes mesures : des <b>zones</b> où les rejets sont interdits ou très encadrés (Méditerranée, mer Noire, Baltique, mer Rouge, Golfes, eaux d'Europe du Nord-Ouest : Manche, mer du Nord, mer d'Irlande) et des <b>installations de réception</b> dans les ports.</p>
<p>Certificat <b>IOPP</b> (hydrocarbures) : navires-citernes de 150 et plus, autres navires de 400 et plus.</p>
<h3>Le règlement français</h3>
<p>Le règlement annexé à l'arrêté du 23 novembre 1987 est découpé en <b>divisions</b>, par type de navire : par exemple <b>241</b> (NUC de moins de 24 m) et <b>242</b> (NUC de 24 m et plus).</p>`
    }
  ],
  cartes: [
    ['Que gère la DML ?', 'Immatriculation, décision d\'effectif, rôle d\'équipage, discipline, examens (CIN, C200)…', 'admin'],
    ['Les 4 DIRM ?', 'Le Havre, Nantes, Bordeaux, Marseille.', 'admin'],
    ['ENIM ?', 'Établissement national des invalides de la marine : la sécurité sociale des marins.', 'admin'],
    ['Qui suit techniquement le navire ?', 'Le centre de sécurité des navires (CSN).', 'admin'],
    ['Les 7 missions des CROSS ?', 'SECMAR, SURNAV, SURPÊCHE, SURPOL, diffusion des infos de sécurité, sûreté, permanence des Affaires maritimes.', 'cross'],
    ['CROSS de Méditerranée ?', 'La Garde (CROSS MED), sous-CROSS en Corse (Aspretto).', 'cross'],
    ['Autorité opérationnelle des CROSS ?', 'Le préfet maritime.', 'cross'],
    ['Le CROSS a-t-il des moyens propres ?', 'Non : il coordonne Marine, Douanes, Gendarmerie, SNSM, Sécurité civile, navires présents.', 'cross'],
    ['Éléments d\'individualisation du navire ?', 'Nom, port d\'attache, nationalité (pavillon), jauge.', 'navire'],
    ['Qui délivre l\'acte de francisation ?', 'Les Douanes.', 'navire'],
    ['Francisation obligatoire à partir de ?', '7 m, ou 22 CV administratifs, ou navigation internationale.', 'navire'],
    ['Couleur de l\'acte de francisation pro ?', 'Bleu (commerce, pêche, NUC).', 'navire'],
    ['Jauge brute : à quoi sert-elle ?', 'Sécurité, MARPOL, prérogatives des brevets, cotisations ENIM.', 'navire'],
    ['Jauge nette : à quoi sert-elle ?', 'Taxes : pilotage, lamanage, remorquage, quai.', 'navire'],
    ['Ordre francisation / immatriculation ?', 'D\'abord francisé (Douanes), puis immatriculé (Affaires maritimes).', 'marques'],
    ['Numéro OMI : à partir de quelle jauge ?', '100 UMS (7 chiffres).', 'marques'],
    ['Marques d\'un navire de commerce ?', 'Nom des deux côtés à l\'avant ; nom et port d\'attache à l\'arrière.', 'marques'],
    ['Navire à passagers ?', 'Plus de 12 passagers.', 'categories'],
    ['NUC au moteur : passagers max ?', '12 passagers.', 'categories'],
    ['Divisions des NUC ?', '241 : moins de 24 m ; 242 : 24 m et plus (moins de 3 000 UMS).', 'categories'],
    ['2e catégorie de navigation ?', 'À moins de 200 M d\'un port ou abri.', 'categories'],
    ['3e catégorie de navigation ?', 'À moins de 20 M de la terre.', 'categories'],
    ['5e catégorie de navigation ?', 'Eaux abritées.', 'categories'],
    ['Visite de coque : fréquence ?', '12 mois (passagers), 30 mois (charge) ; une sur deux à flot.', 'visites'],
    ['Visite spéciale : quand ?', 'Avarie grave, grosse modification, retrait de la cote.', 'visites'],
    ['Visite sur réclamation : qui signe ?', 'Le délégué de bord ou 3 membres de l\'équipage.', 'visites'],
    ['Base où sont publiés les contrôles MOU ?', 'Equasis.', 'visites'],
    ['Validité du permis de navigation ?', '1 an.', 'titres'],
    ['Validité du certificat ISM et ISPS ?', '5 ans, audit intermédiaire à 2,5 ans.', 'titres'],
    ['Qui préside la CRS ?', 'Le directeur interrégional de la mer.', 'titres'],
    ['Rôle de la CRS ?', 'Examiner les plans et documents des navires pro, avis sur les recours.', 'titres'],
    ['Les 3 casquettes du capitaine ?', 'Représentant de l\'armateur, mandataire des chargeurs, chef de la société du bord.', 'capitaine'],
    ['Le capitaine peut-il marier ?', 'Non (officier d\'état civil pour naissances et décès seulement).', 'capitaine'],
    ['Délai du rapport de mer ?', '24 h après l\'arrivée.', 'capitaine'],
    ['Les 4 responsabilités du capitaine ?', 'Pénale spécifique, disciplinaire, pénale de droit commun, civile.', 'capitaine'],
    ['Litige capitaine-armateur : quel tribunal ?', 'Le tribunal de commerce.', 'capitaine'],
    ['Tribunaux maritimes : composition ?', '3 magistrats + 2 assesseurs maritimes (échevinage).', 'penal'],
    ['Tribunal maritime de la Méditerranée ?', 'Marseille.', 'penal'],
    ['Après abordage, que doit-on donner à l\'autre capitaine ?', 'Nom du navire, port d\'immatriculation, ports de départ et de destination.', 'penal'],
    ['Abandon du navire : obligations du capitaine ?', 'Avis des officiers, organiser le sauvetage, sauver les papiers, quitter le bord le dernier.', 'penal'],
    ['Sanctions d\'une faute légère ?', 'Blâme, consigne à bord de 4 jours max (par le capitaine).', 'discipline'],
    ['Sanction d\'une faute grave ?', 'Consigne de 8 jours max, par l\'autorité maritime.', 'discipline'],
    ['S\'endormir de quart : quelle faute ?', 'Faute grave.', 'discipline'],
    ['Sursis pour un officier ?', 'Jamais.', 'discipline'],
    ['Livre de discipline : contenu ?', 'Fautes, résultats des enquêtes, punitions.', 'discipline'],
    ['Prescriptions principales de SOLAS ?', 'Cloisons étanches et anti-feu, engins de sauvetage, incendie, radio, stabilité.', 'securite'],
    ['Certificat IOPP : qui ?', 'Navires-citernes ≥ 150, autres ≥ 400.', 'securite']
  ],
  qcm: [
    { q: 'Qui délivre la décision d\'effectif ?', r: ['La DML', 'La DIRM', 'Les Douanes', 'Le CROSS'], e: 'Recours possible auprès de la DIRM.', f: 'admin' },
    { q: 'Un marin conteste une sanction disciplinaire. Il fait un recours auprès…', r: ['De la DIRM', 'De la DML', 'Du CROSS', 'Du tribunal de commerce'], e: 'Attribution propre des DIRM.', f: 'admin' },
    { q: 'La surveillance des pollutions par un CROSS s\'appelle…', r: ['SURPOL', 'SECMAR', 'SURNAV', 'AVURNAV'], e: 'SECMAR = sauvetage.', f: 'cross' },
    { q: 'Sur le plan opérationnel, les CROSS dépendent…', r: ['Du préfet maritime', 'Du maire', 'De l\'armateur', 'De la SNSM'], e: 'Tutelle organique des DIRM, autorité opérationnelle du préfet maritime.', f: 'cross' },
    { q: 'L\'acte de francisation est délivré par…', r: ['Les Douanes', 'Les Affaires maritimes', 'La préfecture', 'La société de classification'], e: 'Il prouve la nationalité française.', f: 'navire' },
    { q: 'La jauge nette sert à calculer…', r: ['Les taxes portuaires et de pilotage', 'Les prérogatives des brevets', 'Le franc-bord', 'La stabilité'], e: 'La jauge brute sert aux brevets et à la sécurité.', f: 'navire' },
    { q: 'Les prérogatives du brevet de capitaine 200 dépendent…', r: ['De la jauge brute', 'De la jauge nette', 'Du port en lourd', 'De la puissance'], e: '200 UMS de jauge brute.', f: 'navire' },
    { q: 'Un navire est immatriculé…', r: ['Après sa francisation', 'Avant sa francisation', 'Sans francisation', 'Par la société de classification'], e: 'Douanes d\'abord, Affaires maritimes ensuite.', f: 'marques' },
    { q: 'À partir de quelle jauge le numéro OMI est-il exigé ?', r: ['100 UMS', '500 UMS', '24 m', 'Toujours'], e: '7 chiffres précédés de IMO.', f: 'marques' },
    { q: 'Un navire qui transporte 15 passagers est…', r: ['Un navire à passagers', 'Un navire de charge', 'Un NUC forcément', 'Un navire de plaisance'], e: 'Plus de 12 passagers.', f: 'categories' },
    { q: 'La 3e catégorie de navigation limite à…', r: ['20 M de la terre', '200 M d\'un abri', '5 M', 'Eaux abritées'], e: '2e : 200 M ; 4e : 5 M ; 5e : eaux abritées.', f: 'categories' },
    { q: 'Où est inscrite la catégorie de navigation ?', r: ['Sur le permis de navigation', 'Sur l\'acte de francisation', 'Sur le rôle d\'équipage', 'Sur la coque'], e: 'Avec les éventuelles restrictions.', f: 'categories' },
    { q: 'Un navire à passagers doit aller au bassin au moins tous les…', r: ['2 ans', '5 ans', '1 an', '30 mois'], e: 'Visite de coque tous les 12 mois, une sur deux à flot.', f: 'visites' },
    { q: 'L\'inspecteur trouve les pompes incendie en panne avant le départ. Il peut…', r: ['Interdire ou retarder le départ', 'Seulement noter', 'Retirer le brevet du capitaine', 'Rien faire'], e: 'Visite inopinée (de partance).', f: 'visites' },
    { q: 'Une visite sur réclamation de l\'équipage doit être demandée par…', r: ['Le délégué de bord ou 3 membres d\'équipage', 'Un seul marin à l\'oral', 'L\'armateur', 'Le CROSS'], e: 'Demande écrite et motivée.', f: 'visites' },
    { q: 'Le certificat international de franc-bord est valable…', r: ['5 ans', '1 an', '2 ans', '10 ans'], e: 'Convention de 1966.', f: 'titres' },
    { q: 'La CRS examine…', r: ['Les plans et documents des navires professionnels', 'Les candidats au brevet', 'Les accidents du travail', 'Les rapports de mer'], e: 'Présidée par le DIRM.', f: 'titres' },
    { q: 'Le capitaine peut-il célébrer un mariage à bord ?', r: ['Non', 'Oui, toujours', 'Oui, en haute mer', 'Oui, avec 2 témoins'], e: 'Il est officier d\'état civil mais pas pour les mariages.', f: 'capitaine' },
    { q: 'Le rapport de mer doit être fait…', r: ['Dans les 24 h de l\'arrivée', 'Dans le mois', 'Avant d\'appareiller', 'Dans les 8 jours'], e: 'Et affirmé si l\'événement est grave.', f: 'capitaine' },
    { q: 'Le capitaine doit être à la passerelle…', r: ['À l\'entrée et à la sortie des ports', 'Seulement la nuit', 'Seulement par brume', 'Jamais obligatoirement'], e: 'Ne pas le faire est un délit.', f: 'capitaine' },
    { q: 'Les tribunaux maritimes comprennent…', r: ['3 magistrats et 2 assesseurs maritimes', '1 juge unique', '5 marins', 'Le préfet maritime'], e: 'C\'est l\'échevinage.', f: 'penal' },
    { q: 'Envoyer un MAYDAY sans être en danger est…', r: ['Un délit', 'Autorisé pour tester', 'Une faute légère', 'Sans conséquence'], e: 'Code des transports L5242-6-1.', f: 'penal' },
    { q: 'Un matelot s\'endort à la barre. C\'est…', r: ['Une faute grave', 'Une faute légère', 'Un crime', 'Rien'], e: 'Négligence dans un service de quart.', f: 'discipline' },
    { q: 'Pour une faute légère, la consigne à bord ne peut dépasser…', r: ['4 jours', '8 jours', '24 heures', '1 mois'], e: '8 jours pour une faute grave.', f: 'discipline' },
    { q: 'Qui sanctionne une faute grave en France ?', r: ['L\'administrateur des Affaires maritimes', 'Le capitaine seul', 'Le tribunal de commerce', 'L\'armateur'], e: 'Après l\'enquête du capitaine.', f: 'discipline' },
    { q: 'La convention SOLAS ne traite pas…', r: ['Des rejets d\'ordures', 'Des engins de sauvetage', 'De la radio', 'De la stabilité'], e: 'C\'est MARPOL annexe V.', f: 'securite' }
  ]
});
