/* QCM — CGO (3/3) : situations pratiques et compléments */
C200.plus('cgo', 'cadre', [
  ["Un navire de charge de 2 000 UMS entre la France et le Brésil (A1, A2, A3) doit avoir…", "VHF ASN, MF ASN, Inmarsat C (ou HF ASN), NAVTEX, EGC, RLS, SART, VHF portatives", ["Seulement une VHF", "Seulement un téléphone satellite", "Rien de plus qu'en A1"]],
  ["Un navire qui reste en zone A1 doit au minimum avoir…", "VHF ASN (canal 70) et phonie, NAVTEX, RLS, SART, VHF portatives", ["MF/HF et Inmarsat obligatoirement", "Rien", "Seulement un NAVTEX"]],
  ["Le SMDSM concerne obligatoirement…", "Les navires SOLAS (passagers en international, charge de 300 UMS et plus)", ["Seulement les voiliers", "Seulement les sous-marins", "Aucun navire"]],
  ["Avant l'appareillage, on vérifie la station radio :", "Tests prévus (ASN, batteries, imprimantes), documents à jour", ["Rien", "Seulement la peinture des antennes", "Le niveau d'huile"]],
  ["Test quotidien de la station SMDSM :", "Test interne de l'ASN sans émission, contrôle des batteries", ["Envoyer une vraie alerte", "Démonter l'antenne", "Aucun"]],
  ["Test hebdomadaire courant :", "Appel ASN de test vers une station côtière qui l'accepte", ["Déclencher la RLS", "Lancer une fusée", "Aucun"]],
  ["Test mensuel courant :", "Autotest RLS et SART, contrôle des batteries des VHF portatives", ["Vraie alerte de détresse", "Changer l'antenne", "Aucun"]],
  ["Le SMDSM a remplacé…", "L'ancien système fondé sur la télégraphie morse (500 kHz) et la veille humaine", ["Le RIPAM", "Le NAVTEX", "Le radar"]]
]);
C200.plus('cgo', 'identif', [
  ["Un MMSI commençant par 00 désigne…", "Une station côtière", ["Un navire", "Un SART", "Un aéronef"]],
  ["Un MMSI commençant par un seul 0 désigne…", "Un groupe de navires", ["Une station côtière", "Un navire seul", "Une balise"]],
  ["Un MMSI commençant par 111 désigne…", "Un aéronef SAR", ["Un navire", "Une station côtière", "Un SART"]],
  ["Un MMSI commençant par 99 désigne…", "Une aide à la navigation AIS", ["Un navire", "Une RLS", "Un aéronef SAR"]],
  ["MMSI 228456780 :", "Un navire français", ["Une station côtière", "Un SART AIS", "Une balise MOB"]],
  ["MMSI 972001234 :", "Une balise homme à la mer AIS", ["Un SART AIS", "Une RLS AIS", "Un navire"]],
  ["MMSI 974001234 :", "Une RLS AIS", ["Un SART AIS", "Une balise MOB", "Un aéronef"]],
  ["Pour appeler un groupe de navires d'une même compagnie en ASN, on utilise…", "Un MMSI de groupe", ["Le MMSI d'un seul navire", "Le canal 16", "L'AIS"]],
  ["Le MMSI est attribué en France par…", "L'ANFR, avec la licence", ["Le CROSS", "La mairie", "Le chantier"]],
  ["Un navire vendu à l'étranger change de pavillon :", "Il change de MMSI (nouveau MID)", ["Il garde toujours le même MMSI", "Il n'a plus de MMSI", "Il prend le MMSI de l'acheteur"]],
  ["Station de navire et station terrienne de navire :", "La première est la radio classique, la seconde l'équipement satellite", ["C'est la même chose", "La seconde est à terre", "La première est un satellite"]],
  ["Où trouver le MMSI d'un navire à appeler ?", "Liste V de l'UIT, AIS, ou en le demandant", ["Liste IV", "Le RIPAM", "Le livre des feux"]],
  ["Où trouver les canaux de travail d'un CROSS ?", "Liste IV, Admiralty List of Radio Signals, ouvrages SHOM", ["Liste V", "L'annuaire des marées", "Le RIPAM"]],
  ["L'indicatif d'appel sert…", "En phonie et sur les documents, à côté du nom et du MMSI", ["À rien", "Seulement en morse", "Seulement à l'AIS"]],
  ["Dans un message de détresse, on donne…", "Le nom, l'indicatif et le MMSI du navire", ["Seulement le nom du capitaine", "Le port d'attache seulement", "Rien d'identifiant"]],
  ["Admiralty List of Radio Signals, volume 3 :", "Renseignements de sécurité maritime et météo", ["Phares", "Marées", "Feux de navires"]],
  ["Admiralty List of Radio Signals, volume 6 :", "Pilotage, VTS et opérations portuaires", ["SMDSM", "Météo", "Aides radio à la navigation"]]
]);
C200.plus('cgo', 'ondes', [
  ["Fréquence plus haute ⇒ longueur d'onde…", "Plus courte", ["Plus longue", "Identique", "Nulle"]],
  ["Pourquoi l'antenne VHF est plus courte que l'antenne MF ?", "La longueur d'onde VHF est beaucoup plus courte", ["La VHF est moins puissante", "Pour la décoration", "Par hasard"]],
  ["L'ionosphère est…", "Une couche ionisée de la haute atmosphère qui réfléchit la HF", ["Une couche d'eau", "Le fond de la mer", "Un satellite"]],
  ["L'ionosphère change…", "Entre le jour et la nuit (et avec le soleil)", ["Jamais", "Avec la marée", "Avec le vent local"]],
  ["Brouillage la nuit en MF :", "Plus fort car les ondes d'espace arrivent de loin", ["Plus faible", "Inexistant", "Seulement en VHF"]],
  ["Un câble coaxial abîmé ou mouillé :", "Fait perdre de la puissance et de la portée", ["Améliore l'émission", "N'a aucun effet", "Augmente la portée"]],
  ["Le chargeur de batteries radio doit être…", "Automatique, avec surveillance de la tension", ["Débranché en permanence", "Manuel sans contrôle", "Interdit"]]
]);
C200.plus('cgo', 'vhf', [
  ["Avant d'appeler sur le 16, on…", "Écoute que le canal est libre", ["Appuie longtemps", "Change de puissance au hasard", "Envoie une alerte ASN"]],
  ["Appel en phonie d'un navire :", "Nom du navire appelé ×3 (au plus), THIS IS, son nom ×3, OVER", ["HELLO HELLO", "MAYDAY", "Son nom une fois sans plus"]],
  ["Après l'appel sur le 16, la conversation de routine se fait…", "Sur un canal de travail", ["Sur le 16", "Sur le 70", "Sur le NAVTEX"]],
  ["Canal 72 ou 77 :", "Navire à navire (routine)", ["Détresse", "ASN", "Port uniquement"]],
  ["Appel ASN individuel de routine : sur la VHF on choisit…", "Le MMSI appelé et le canal de travail proposé", ["La nature de la détresse", "La zone géographique", "Rien"]],
  ["Un appel ASN individuel reçu sonne :", "On accuse réception (ASN) puis on passe sur le canal proposé", ["On l'ignore", "On répond sur le 70 en phonie", "On envoie une détresse"]],
  ["VHF ASN : alerte de détresse « non désignée » :", "Envoyée quand on n'a pas choisi la nature", ["Une alerte de routine", "Un test", "Une annonce de sécurité"]],
  ["Le cache du bouton DISTRESS sert à…", "Éviter les déclenchements par erreur", ["Décorer", "Protéger l'écran", "Rien"]],
  ["VHF ASN : après l'acquittement de l'alerte par le CROSS :", "L'appareil cesse de répéter l'alerte et passe sur le 16", ["Il continue toutes les minutes", "Il s'éteint", "Il passe sur le 70 en phonie"]],
  ["Portée typique d'une VHF entre deux navires :", "Une vingtaine de milles", ["2 milles", "200 milles", "2 000 milles"]],
  ["Les stations côtières VHF ont une portée plus grande car…", "Leurs antennes sont très hautes", ["Elles émettent en HF", "Elles utilisent des satellites", "Elles ont 1 000 W"]],
  ["En 1 W, la portée VHF…", "Diminue", ["Augmente", "Ne change pas", "Devient mondiale"]],
  ["La VHF portative du radeau doit…", "Être étanche et flotter ou être attachée", ["Rester dans la timonerie", "Être en bois", "Ne pas avoir de batterie"]],
  ["Les VHF portatives SMDSM se testent…", "Sur un canal autre que le 16, sans gêner", ["Sur le 16 en appelant MAYDAY", "Jamais", "Sur le 70"]],
  ["Batterie de détresse scellée d'une VHF portative :", "On ne l'utilise pas pour l'usage courant, on vérifie sa date", ["On l'utilise tous les jours", "On la recharge chaque soir", "On la jette chaque mois"]]
]);
C200.plus('cgo', 'mfhf', [
  ["En MF, pour appeler une station côtière en routine, on utilise…", "Un appel ASN individuel ou la fréquence d'appel indiquée dans les documents", ["2 187,5 kHz en phonie", "Le canal 70", "Le NAVTEX"]],
  ["Peut-on parler en phonie sur 2 187,5 kHz ?", "Non : c'est une fréquence ASN", ["Oui", "Oui, la nuit", "Oui, en BLU"]],
  ["Peut-on faire une conversation de routine sur 2 182 kHz ?", "Non : appel puis dégagement sur une fréquence de travail", ["Oui, sans limite", "Oui, en FM", "Oui, en ASN"]],
  ["BLU USB ou LSB pour la marine ?", "USB (bande latérale supérieure)", ["LSB", "Peu importe", "FM"]],
  ["Signal reçu très faible en HF le jour sur 4 MHz pour une station lointaine :", "Monter en fréquence (8, 12 MHz)", ["Descendre à 2 MHz", "Passer en VHF", "Arrêter"]],
  ["Le radiotélex ARQ convient pour…", "Échanger un message avec une station précise", ["Diffuser à tous", "Alerter en détresse", "Recevoir l'AIS"]],
  ["Le radiotélex FEC convient pour…", "Diffuser à toutes les stations", ["Une liaison privée acquittée", "Recevoir la télévision", "Le radar"]],
  ["En MF, une alerte ASN se fait sur…", "2 187,5 kHz", ["2 182 kHz", "2 174,5 kHz", "518 kHz"]],
  ["Un navire en zone A2 qui n'a qu'une VHF :", "N'est pas équipé pour cette zone", ["Est bien équipé", "Peut tout faire au canal 16", "N'a besoin de rien"]]
]);
C200.plus('cgo', 'satellites', [
  ["Alerte de détresse Inmarsat C : comment ?", "Appuyer sur le bouton détresse (maintenir quelques secondes)", ["Taper MAYDAY au clavier puis attendre une semaine", "Appeler en phonie", "Couper l'antenne"]],
  ["Que choisit-on dans le menu de détresse Inmarsat C (si on a le temps) ?", "La nature de la détresse et la station terrienne", ["La musique", "La langue du menu", "Rien"]],
  ["Inmarsat C a besoin pour la position…", "D'un GPS relié (ou d'une saisie manuelle)", ["De rien", "Du NAVTEX", "Du radar"]],
  ["Un message de détresse Inmarsat C arrive…", "Avec la plus haute priorité au MRCC", ["Dans la file normale", "Le lendemain", "Chez le fournisseur seulement"]],
  ["Pour une demande d'avis médical par Inmarsat C :", "Code spécial 32", ["Code 42", "Code 41", "Code 43"]],
  ["Pour signaler un conteneur dérivant par Inmarsat C :", "Code spécial 42 (dangers pour la navigation)", ["Code 32", "Code 38", "Code 41"]],
  ["Un navire en A3 sans Inmarsat doit avoir…", "La HF ASN (MF/HF)", ["Seulement une VHF", "Seulement un NAVTEX", "Rien"]],
  ["Les satellites géostationnaires paraissent…", "Fixes dans le ciel", ["Défiler très vite", "Disparaître la nuit", "Tourner autour du navire"]],
  ["Une antenne satellite masquée par un mât :", "Peut perdre le signal : bien choisir son emplacement", ["Marche mieux", "N'a aucun effet", "Est obligatoire"]],
  ["Le service FleetBroadband sert surtout…", "Au téléphone et à l'internet du bord", ["Au NAVTEX", "À l'AIS", "Au radar"]],
  ["Un rapport de position par Inmarsat C peut être demandé à distance :", "Oui (polling)", ["Non, jamais", "Seulement en phonie", "Seulement en VHF"]],
  ["Iridium en orbite basse : avantage ?", "Couvre aussi les pôles", ["Ne couvre que l'équateur", "Est géostationnaire", "Ne fait pas de phonie"]],
  ["EGC SafetyNET : les messages sont adressés…", "À une zone géographique", ["À un MMSI précis seulement", "Au hasard", "À l'armateur"]],
  ["Le récepteur EGC est souvent…", "Intégré au terminal Inmarsat C", ["Un poste FM", "Une VHF portative", "Un radar"]],
  ["Un message SafetyNET de détresse (relais) :", "Déclenche une alarme sonore sur le récepteur", ["Est silencieux", "Est imprimé le lendemain", "Est effacé"]],
  ["Les stations terriennes côtières sont reliées…", "Aux réseaux terrestres et aux MRCC", ["Uniquement aux navires", "À rien", "Aux phares"]]
]);
C200.plus('cgo', 'balises', [
  ["En cas d'abandon, on emporte…", "La RLS (si elle n'est pas automatique), le SART et les VHF portatives", ["Le radar", "Le NAVTEX", "Le compas"]],
  ["Le SART s'active…", "En mode veille, puis répond quand un radar l'interroge", ["En permanence à pleine puissance", "Seulement de jour", "Sur 406 MHz"]]
]);
C200.plus('cgo', 'rsm', [
  ["Le récepteur NAVTEX affiche une alarme pour…", "Les messages de type D (et selon réglage A, B)", ["Les prévisions E", "Les messages Z", "Les messages F"]],
  ["Un NAVTEX sur 518 kHz en Méditerranée française diffuse…", "En anglais", ["En français", "En italien", "En espagnol"]],
  ["Le NAVTEX 490 kHz est utile pour…", "Lire les messages en langue nationale", ["Recevoir l'ASN", "Parler au CROSS", "Recevoir l'AIS"]],
  ["Un message NAVTEX mal reçu (trop d'erreurs) :", "Sera réimprimé à la prochaine diffusion", ["Est perdu pour toujours", "Bloque l'appareil", "Déclenche une détresse"]],
  ["SafetyNET et NAVTEX diffusent-ils les mêmes types d'informations ?", "Oui (RSM), mais SafetyNET au large par satellite", ["Non, SafetyNET diffuse de la musique", "Non, le NAVTEX diffuse la télévision", "Ils ne diffusent rien"]]
]);
C200.plus('cgo', 'procedures', [
  ["Le message de détresse en phonie se termine par…", "OVER", ["OUT", "MAYDAY", "SEELONCE"]],
  ["Un navire en détresse a envoyé son alerte ASN mais personne ne répond en phonie :", "Il répète son message et utilise d'autres moyens", ["Il abandonne la radio", "Il éteint la VHF", "Il attend 1 heure"]],
  ["Après un MAYDAY, le navire en détresse garde la veille…", "Sur la fréquence de détresse utilisée", ["Sur la radio FM", "Sur le canal 72", "Nulle part"]],
  ["Un MAYDAY RELAY peut être envoyé…", "Par un navire ou une station côtière, pour un autre navire", ["Seulement par le navire en détresse", "Jamais", "Seulement par satellite"]],
  ["Alerte ASN de relais de détresse :", "Une fonction spéciale ASN (distress relay) utilisée sur instruction ou en cas de besoin", ["Une alerte de routine", "Un test", "Une annonce de sécurité"]],
  ["Que noter quand on reçoit une alerte de détresse ?", "Heure, MMSI, position, nature, fréquence", ["Seulement l'heure", "Rien", "La météo de la veille"]],
  ["Annonce de sécurité pour une bouée éteinte :", "Annonce ASN safety, puis SÉCURITÉ ×3 en phonie", ["Alerte distress", "PAN-PAN ×3", "Rien"]],
  ["Peut-on transmettre un message d'urgence sans annonce ASN ?", "Oui, en phonie directement sur le 16 si c'est plus rapide", ["Non jamais", "Seulement en télex", "Seulement par NAVTEX"]]
]);
C200.plus('cgo', 'sar', [
  ["Un navire qui veut participer à AMVER s'inscrit…", "Auprès des garde-côtes américains (gratuit)", ["Auprès de l'OMI contre paiement", "Auprès du CROSS uniquement", "Ce n'est pas possible"]],
  ["Le LRIT transmet la position par…", "Satellite, automatiquement", ["VHF, à la main", "NAVTEX", "Courrier"]],
  ["Qui reçoit les positions LRIT ?", "L'État du pavillon (et d'autres États autorisés)", ["Tous les navires proches", "Le public sur internet", "Personne"]],
  ["Un navire de 400 UMS en voyage international doit-il avoir l'AIS classe A ?", "Oui (300 UMS et plus)", ["Non", "Seulement en Méditerranée", "Seulement la nuit"]],
  ["Sur zone, l'avion de recherche peut parler au navire sur…", "121,5 ou 123,1 MHz (VHF aéro), ou le canal 16", ["518 kHz", "406 MHz", "Le canal 70"]],
  ["Le SSAS s'arrête…", "Seulement quand on le désactive", ["Au bout de 10 secondes", "Quand le navire stoppe", "Jamais"]]
]);
C200.plus('cgo', 'anglais', [
  ["Pavillon O hissé :", "Homme à la mer", ["Oui", "Pilote à bord", "Je chasse sur mon ancre"]]
]);
