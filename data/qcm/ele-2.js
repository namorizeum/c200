/* QCM supplémentaires — Électricité (2/2) : calculs et situations */
C200.plus('electricite', 'bases', [
  ["Deux ampoules de 20 W en parallèle sous 12 V : courant total ?", "Environ 3,3 A", ["1,7 A", "40 A", "0,3 A"]],
  ["Trois appareils de 2 A, 3 A et 5 A en parallèle : courant total ?", "10 A", ["5 A", "30 A", "2 A"]],
  ["Résistance d'une ampoule de 12 V – 24 W ?", "6 Ω", ["0,5 Ω", "288 Ω", "2 Ω"]],
  ["Énergie d'un appareil de 100 W pendant 3 h :", "300 Wh", ["33 Wh", "103 Wh", "3 000 Wh"]]
]);
C200.plus('electricite', 'mesures', [
  ["Batterie au repos, voltmètre à 12,7 V. État ?", "Chargée", ["Aux trois quarts environ", "À moitié environ", "Vide"]],
  ["Batterie au repos, voltmètre à 12,4 V. État ?", "Aux trois quarts environ", ["Chargée", "À moitié environ", "Vide"]],
  ["Batterie au repos, voltmètre à 12,2 V. État ?", "À moitié environ", ["Chargée", "Aux trois quarts environ", "Vide"]],
  ["Batterie au repos, voltmètre à 11,9 V. État ?", "Vide", ["Chargée", "Aux trois quarts environ", "À moitié environ"]],
  ["Moteur en marche, tension aux bornes 14,2 V. Conclusion ?", "L'alternateur charge normalement", ["L'alternateur ne charge pas (ou mal)", "Surcharge : régulateur à vérifier", "Batterie neuve parfaite"]],
  ["Moteur en marche, tension aux bornes 13,9 V. Conclusion ?", "L'alternateur charge normalement", ["L'alternateur ne charge pas (ou mal)", "Surcharge : régulateur à vérifier", "Batterie neuve parfaite"]],
  ["Moteur en marche, tension aux bornes 12,5 V. Conclusion ?", "L'alternateur ne charge pas (ou mal)", ["L'alternateur charge normalement", "Surcharge : régulateur à vérifier", "Batterie neuve parfaite"]],
  ["Moteur en marche, tension aux bornes 15,8 V. Conclusion ?", "Surcharge : régulateur à vérifier", ["L'alternateur charge normalement", "L'alternateur ne charge pas (ou mal)", "Batterie neuve parfaite"]],
  ["Avant de mesurer une tension inconnue, on règle le multimètre…", "Sur un calibre élevé", ["Sur le plus petit calibre", "En ohmmètre", "En ampèremètre"]],
  ["Où planter les pointes du multimètre en mesure de tension ?", "Fil rouge sur V, fil noir sur COM", ["Fil rouge sur 10 A", "Les deux sur COM", "Peu importe"]],
  ["Pour mesurer une intensité au multimètre, le fil rouge va…", "Sur la borne A (ou 10 A)", ["Sur la borne V", "Sur COM", "Nulle part"]],
  ["Oublier le fil rouge sur la borne 10 A puis mesurer une tension de batterie :", "Court-circuit : fusible du multimètre grillé (ou pire)", ["Mesure parfaite", "Rien", "Plus précis"]],
  ["Mesure de tension aux bornes d'un fusible en place, circuit en marche : 12 V :", "Fusible grillé (circuit ouvert)", ["Fusible bon", "Batterie vide", "Court-circuit franc"]],
  ["Mesure de tension aux bornes d'un fusible en place, circuit en marche : 0 V :", "Fusible bon", ["Fusible grillé", "Batterie neuve", "Alternateur cassé"]]
]);
C200.plus('electricite', 'bilan', [
  ["Parc de 300 Ah, besoin de 90 Ah/jour, décharge maxi 80 % : autonomie sans recharge ?", "Environ 2,7 jours", ["10 jours", "1 jour", "30 jours"]],
  ["Parc de 200 Ah, consommation 40 Ah/jour : décharge à 80 % atteinte en…", "4 jours", ["1 jour", "40 jours", "8 jours"]],
  ["Alternateur de 60 A à pleine charge : temps pour remettre 120 Ah (en théorie) ?", "2 heures (en pratique plus long)", ["20 minutes", "12 heures", "60 heures"]]
]);
C200.plus('electricite', 'demarrage', [
  ["Le volant moteur porte…", "La couronne dentée du démarreur", ["L'alternateur", "Les diodes", "Le régulateur"]],
  ["La tension de charge de l'alternateur est réglée par…", "Le régulateur", ["La batterie", "Le démarreur", "La courroie seule"]],
  ["Un régulateur défectueux peut donner…", "Une sous-charge ou une surcharge", ["Rien", "Une meilleure batterie", "Plus de gazole"]],
  ["Un alternateur produit plus de courant…", "Quand le régime augmente (jusqu'à son maximum)", ["Au ralenti seulement", "Moteur arrêté", "Jamais"]],
  ["Au ralenti, la charge de l'alternateur est…", "Plus faible", ["Maximale", "Nulle toujours", "Dangereuse"]],
  ["Pourquoi ne pas débrancher la batterie moteur en marche ?", "Surtension : les diodes et l'électronique peuvent griller", ["Le moteur s'arrête aussitôt", "Pour le bruit", "Ce n'est pas un problème"]],
  ["Le câble positif du démarreur est protégé…", "Souvent sans fusible (trop fort courant), d'où des câbles bien isolés et fixés", ["Par un fusible de 1 A", "Par rien et dénudé", "Par du ruban"]],
  ["Bougies de préchauffage grillées :", "Démarrage difficile à froid (injection indirecte)", ["Moteur plus puissant", "Aucun effet", "Fumée bleue en marche"]],
  ["Tester une bougie de préchauffage :", "À l'ohmmètre (faible résistance = bonne), hors tension", ["Avec le doigt sous tension", "Au voltmètre sur la batterie", "Au baromètre"]],
  ["Le solénoïde du démarreur reçoit la commande…", "De la clé de contact (via le bouton de démarrage)", ["De l'alternateur", "Du régulateur", "De la pompe à eau"]],
  ["Un répartiteur électronique (sans chute de tension) remplace souvent…", "Le répartiteur à diodes", ["Le démarreur", "La batterie", "L'alternateur"]],
  ["Sur un moteur, la masse est…", "Le retour du courant vers le − de la batterie", ["Le + de la batterie", "Un fusible", "Un capteur"]],
  ["Une mauvaise masse moteur donne…", "Démarreur faible, voyants qui faiblissent, charge mauvaise", ["Plus de puissance", "Rien", "Moins de consommation"]]
]);
C200.plus('electricite', 'protection', [
  ["Un disjoncteur, contrairement à un fusible…", "Se réarme", ["Se jette après usage", "N'existe pas en 12 V", "Augmente le courant"]],
  ["Le fusible général d'un parc de service se place…", "Au plus près de la batterie, sur le +", ["Au bout du circuit", "Sur la coque", "Après le tableau seulement"]],
  ["Pourquoi un fusible près de la batterie ?", "Pour protéger tout le câble en cas de court-circuit", ["Pour la décoration", "Pour charger", "Ce n'est pas utile"]],
  ["Un différentiel déclenche quand…", "Le courant aller et retour diffèrent (fuite à la terre)", ["La tension est parfaite", "La batterie est pleine", "Il fait froid"]],
  ["Bouton test du différentiel :", "À essayer régulièrement", ["Jamais", "À bloquer", "À coller"]],
  ["Un câble rongé par la corrosion verte :", "À remplacer (résistance accrue, échauffement)", ["Normal", "Plus conducteur", "À peindre"]],
  ["Un câble de 2 × 10 m pour un guindeau de 80 A doit avoir…", "Une grosse section (calcul de chute de tension)", ["La plus petite section possible", "Une section de fil de téléphone", "Aucune importance"]]
]);
C200.plus('electricite', 'alternatif', [
  ["Pourquoi un transformateur d'isolement sur la prise de quai ?", "Séparer électriquement le bord du quai (sécurité et corrosion)", ["Augmenter la tension", "Charger plus vite", "Faire du bruit"]],
  ["Une prise de quai sans terre :", "Dangereuse : ne pas l'utiliser sans protection", ["Sans risque", "Préférable", "Obligatoire"]],
  ["Tension mesurée entre phase et neutre en Europe :", "230 V", ["400 V", "12 V", "0 V"]],
  ["Tension mesurée entre deux phases en triphasé :", "400 V", ["230 V", "12 V", "110 V"]],
  ["Les prises 230 V à bord doivent être…", "Étanches ou protégées des projections, avec terre", ["Ouvertes dans la cale", "Sans terre", "En 12 V"]],
  ["Un onduleur « pur sinus » est préférable pour…", "L'électronique sensible", ["Les ampoules 12 V", "Le démarreur", "La batterie"]],
  ["Un chargeur de batterie « 3 étapes » charge en…", "Charge rapide, absorption, puis floating (entretien)", ["Une seule étape à fond", "Décharge, charge, décharge", "Sans régulation"]],
  ["La tension de floating (entretien) d'une batterie au plomb 12 V :", "Environ 13,5 V", ["16 V", "10 V", "12 V tout juste"]],
  ["Groupe électrogène qui alimente un gros moteur au démarrage :", "Le courant de démarrage est 5 à 7 fois le courant normal : prévoir la puissance", ["Aucun effet", "Le groupe s'arrête toujours", "La tension double"]],
  ["Le neutre et la terre à bord : peut-on les relier n'importe où ?", "Non, selon les règles de l'installation (point unique défini)", ["Oui partout", "Oui c'est conseillé", "Il n'y a pas de terre"]],
  ["Brancher un appareil 110 V sur du 230 V :", "Il grille", ["Il marche mieux", "Il marche pareil", "Il ralentit"]],
  ["En triphasé, une phase manquante sur un moteur :", "Il ronfle, chauffe et peut griller", ["Il tourne plus vite", "Rien", "Il tourne à l'envers"]],
  ["Le sens de rotation d'une pompe triphasée se vérifie…", "À la mise en service, par une courte impulsion", ["Jamais", "En regardant la batterie", "En la démontant"]],
  ["Couplage d'un groupe sur un réseau déjà alimenté :", "Seulement avec synchronisation (tension, fréquence, phase)", ["Directement", "Jamais possible", "Sans contrôle"]],
  ["Pourquoi couper les gros consommateurs avant de basculer de source ?", "Pour éviter les à-coups et protéger les appareils", ["Pour faire du bruit", "Pour la couleur", "Ce n'est pas utile"]],
  ["Le 230 V à bord est surtout utilisé pour…", "Le confort (cuisine, chauffage, prises) et certains auxiliaires", ["Le démarrage du moteur", "Les feux de navigation obligatoirement", "La charge du démarreur"]]
]);
C200.plus('electricite', 'depannage', [
  ["Moteur qui ne démarre pas, clé tournée, aucun voyant :", "Coupe-batterie, fusible général ou batterie à plat", ["Filtre à gazole", "Thermostat", "Hélice"]],
  ["Voyants qui s'éteignent dès qu'on actionne le démarreur :", "Batterie très faible ou connexion mauvaise", ["Batterie pleine", "Démarreur neuf", "Alternateur parfait"]],
  ["Démarreur qui reste engrené après le démarrage (bruit aigu) :", "Couper : solénoïde ou contact collé", ["Normal", "Accélérer", "Ignorer"]],
  ["Odeur d'œuf pourri près des batteries en charge :", "Surcharge (gaz) : couper la charge et ventiler", ["Normal", "Signe de bonne charge", "À ignorer"]],
  ["Une seule batterie d'un parc en parallèle est morte :", "Elle vide les autres : l'isoler et la remplacer", ["Aucun effet", "Elle aide les autres", "Normal"]],
  ["Feux de navigation qui ne s'allument plus :", "Fusible, ampoule, connexion de la lanterne (souvent corrodée)", ["Gazole", "Huile", "Hélice"]],
  ["Pompe de cale électrique qui ne tourne plus :", "Fusible, flotteur, connexions, moteur grippé", ["Gazole", "Hélice", "Thermostat"]],
  ["VHF qui s'éteint en émission :", "Chute de tension (batterie faible, câble trop fin, connexion)", ["Antenne trop haute", "Trop de gazole", "Huile froide"]],
  ["Radar qui redémarre seul :", "Tension instable : vérifier batterie et connexions", ["Normal", "Antenne propre", "Gazole"]],
  ["Corrosion sur un bornier :", "Nettoyer, resserrer, protéger (graisse ou vernis de protection)", ["Arroser", "Ignorer", "Peindre"]],
  ["Isolement faible détecté :", "Chercher le conducteur qui touche la masse (circuit par circuit)", ["Ignorer", "Mettre plus de fusibles", "Mouiller"]],
  ["Alternateur qui siffle et chauffe :", "Roulements usés ou surcharge : à contrôler", ["Normal", "Bonne charge", "Ignorer"]],
  ["Pour trouver une panne, on change d'abord…", "Rien : on mesure avant de changer une pièce", ["Toutes les pièces", "La batterie systématiquement", "Le moteur"]],
  ["Un câble de masse desserré sur le bloc moteur :", "Démarrage impossible ou faible", ["Plus de puissance", "Aucun effet", "Charge meilleure"]],
  ["Tableau électrique humide :", "Risque de courts-circuits et corrosion : sécher et protéger", ["Normal", "Mieux", "Ignorer"]],
  ["Après une intervention électrique, on…", "Vérifie les serrages, remet les protections, essaie le circuit", ["Part sans essayer", "Laisse les fils à nu", "Ne prévient personne"]]
]);
