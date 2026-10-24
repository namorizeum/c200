/* Module Yacht — Capitaine 200 yacht.
   Fiches rédigées à partir du programme officiel (arrêté du 20 août 2015, annexes II et III) et des usages du yachting.
   Pas encore de support de cours. */
C200.module({
  id: 'yacht', bloc: 'YACHT', ordre: 20, court: 'YACHT', titre: 'Module Yacht',
  intro: 'Manœuvre des yachts, électronique de passerelle, machine et auxiliaires, arrêt technique, anglais, monde du yachting, zones de croisière, croisière avec invités, équipage, réglementation et charter. Fiches faites d\'après le programme officiel, en attendant tes supports.',
  fiches: [
    {
      id: 'manoeuvre', titre: 'Manœuvrer un yacht', src: 'Programme module Yacht, base (8 h)',
      html: `<h3>Le mouillage, de jour et de nuit</h3>
<ul><li>Choisir l'endroit : <b>abri</b>, nature du fond (sable ou vase : bonne tenue ; jamais sur les herbiers de posidonie), place pour l'<b>évitage</b> (le cercle que décrit le yacht autour de son ancre).</li>
<li>Filer <b>3 à 5 fois la profondeur</b> de chaîne (plus par mauvais temps), puis battre en arrière doucement pour crocher.</li>
<li>De jour : <b>boule noire</b> à l'avant. De nuit : <b>feu blanc</b> visible tout autour à l'avant (et un second plus bas à l'arrière si 50 m et plus).</li>
<li><b>Alarme de mouillage</b> (GPS), relèvements, veille au mouillage la nuit.</li></ul>
<h3>Amarrer à couple</h3>
<p>Le long d'un autre yacht : <b>défenses</b> en place, pointes avant et arrière, <b>gardes</b>, en accord avec l'autre bord. On passe sur son pont avec discrétion.</p>
<h3>Le cul à quai (amarrage à la méditerranéenne)</h3>
<ul><li><b>Avec l'ancre</b> : mouiller devant la place, assez loin pour avoir une bonne longueur de chaîne, reculer en filant la chaîne, passer les deux amarres arrière (souvent croisées), puis raidir la chaîne.</li>
<li><b>Avec pendille</b> : la pendille est une aussière reliée à un corps-mort au fond. On la prend au quai avec la gaffe, on la garde <b>loin des hélices</b>, on la porte à l'avant et on la raidit. Pas d'ancre : pas de risque de croiser les chaînes des voisins.</li>
<li>Le vent de travers est le principal ennemi : se présenter en tenant compte de la dérive, utiliser les propulseurs.</li></ul>
<h3>L'équipage et la communication</h3>
<p><b>Briefing</b> avant chaque manœuvre : qui fait quoi (avant, arrière, défenses, passerelle). Radios portatives avec oreillettes, gestes connus de tous, annonce des distances (10 m, 5 m, 2 m).</p>
<h3>Propulsion et coques</h3>
<ul><li><b>Deux lignes d'arbre</b> : on tourne sur place avec un moteur en avant et l'autre en arrière. <b>Pods</b> (IPS, Zeus) et <b>joystick</b> : déplacements latéraux et tenue de position. <b>Hydrojets</b> : manœuvre par la tuyère et le déflecteur.</li>
<li><b>Propulseurs</b> d'étrave et de poupe : efficaces à faible vitesse, à utiliser par impulsions (les électriques chauffent).</li>
<li>Coque à <b>déplacement</b> : vitesse limitée (≈ 2,43 × √longueur de flottaison). Coque <b>planante</b> : elle déjauge et va beaucoup plus vite.</li>
<li>Plusieurs postes de commande (passerelle, fly, ailerons) : on <b>transfère la commande</b> avant la manœuvre et on vérifie qu'elle est prise.</li></ul>`
    },
    {
      id: 'passerelle', titre: 'Électronique de passerelle et communications', src: 'Programme module Yacht, base (6 h)',
      html: `<h3>Faire parler les appareils entre eux</h3>
<div class="tw"><table><tr><th></th><th>NMEA 0183</th><th>NMEA 2000</th></tr>
<tr><td>Principe</td><td>Liaison série : <b>un émetteur</b> vers un ou plusieurs récepteurs</td><td>Réseau (bus CAN) : <b>tous parlent</b> sur le même câble</td></tr>
<tr><td>Vitesse</td><td>4 800 bauds (38 400 pour l'AIS)</td><td>250 kbit/s</td></tr>
<tr><td>Câblage</td><td>Fils A/B (+/−) : attention à la polarité</td><td><b>Dorsale</b> + câbles de dérivation en T, <b>deux terminaisons</b> de 120 Ω aux extrémités, bus alimenté en 12 V</td></tr></table></div>
<p>Une phrase NMEA 0183 commence par <b>$</b>, l'émetteur (GP = GPS, HE = gyro, HC = compas magnétique) et le type : <b>$GPRMC</b> (position, route, vitesse), <b>$HEHDT</b> (cap vrai), DBT (profondeur). Le <b>multiplexeur</b> réunit plusieurs sorties 0183 en une seule (et souvent fait le lien avec le NMEA 2000 ou le Wi-Fi).</p>
<p>Panne d'interface : alimentation, câble, polarité, vitesse en bauds, terminaison manquante, appareil mal configuré. On regarde les données qui passent (écran de diagnostic, ordinateur).</p>
<h3>Les compas</h3>
<div class="tw"><table><tr><th>Compas</th><th>Principe</th><th>À retenir</th></tr>
<tr><td><b>Gyroscopique</b></td><td>Gyroscope qui cherche le nord</td><td>Donne le <b>nord vrai</b>, insensible au magnétisme ; il lui faut <b>plusieurs heures</b> pour se stabiliser au démarrage ; répétiteurs</td></tr>
<tr><td><b>Satellite</b></td><td>2 antennes GNSS ou plus</td><td>Cap <b>vrai</b> immédiat et précis, plus vitesse de giration, roulis, tangage ; besoin de voir les satellites</td></tr>
<tr><td><b>Fluxgate</b></td><td>Capteur électronique du champ magnétique</td><td>Cap <b>magnétique</b>, sujet à la <b>déviation</b> : il faut le <b>calibrer</b> ; courant sur les pilotes automatiques</td></tr></table></div>
<p>Le <b>radar</b> a besoin du cap pour l'ARPA/MARPA, le nord en haut et la superposition sur la carte ; le <b>pilote automatique</b> reçoit le cap et la route du GPS. Un mauvais cap décale tout.</p>
<h3>Communications et internet</h3>
<ul><li><b>VSAT</b> : antenne dans un dôme stabilisé, gros débit (bandes Ku/Ka).</li>
<li><b>Starlink</b> : satellites en orbite basse, antenne plate, gros débit.</li>
<li><b>FleetBroadband</b> (Inmarsat), <b>Iridium</b> : couverture large, débit plus faible.</li>
<li><b>4G/5G</b> près des côtes.</li>
<li>Réseau du bord : routeur, Wi-Fi <b>invités séparé</b> du réseau du navire, mots de passe, mises à jour : la passerelle doit rester protégée.</li></ul>`
    },
    {
      id: 'machine', titre: 'Propulsion, auxiliaires et confort', src: 'Programme module Yacht, base (10 h)',
      html: `<h3>Les modes de propulsion</h3>
<div class="tw"><table><tr><th>Système</th><th>Principe</th><th>Points forts / faibles</th></tr>
<tr><td><b>Ligne d'arbre directe</b></td><td>Moteur → inverseur → arbre → hélice</td><td>Simple, robuste, bon rendement à vitesse modérée</td></tr>
<tr><td><b>V-drive</b></td><td>Moteur à l'arrière tourné vers l'avant, renvoi en V</td><td>Gain de place pour les aménagements</td></tr>
<tr><td><b>Hélices de surface</b></td><td>Hélice à moitié hors de l'eau</td><td>Excellent à <b>très grande vitesse</b> (40 nd et plus) ; médiocre à basse vitesse et en manœuvre</td></tr>
<tr><td><b>Hydrojet</b></td><td>Une pompe aspire l'eau sous la coque et la rejette en jet</td><td>Pas d'hélice exposée, faible tirant d'eau, rapide ; direction par la <b>tuyère</b>, marche arrière par le <b>déflecteur</b></td></tr>
<tr><td><b>Pods</b> (IPS, Zeus)</td><td>Embases orientables sous la coque</td><td>Joystick, tenue de position, bon rendement</td></tr></table></div>
<h3>Bruit, fumées, odeurs</h3>
<p>Le confort des invités passe avant tout. <b>Bruit</b> : silentblocs, insonorisation, accouplements souples, silencieux. <b>Fumées</b> : moteurs bien réglés, pas de surcharge, échappements humides avec séparateur eau/gaz. <b>Odeurs</b> : ventilation et filtres à charbon des réservoirs d'eaux noires, cales propres, pas de fuite de gasoil.</p>
<h3>Climatisation</h3>
<p><b>Split</b> (détente directe) : chaque unité a son compresseur ; le condenseur est refroidi à l'eau de mer. <b>Chiller</b> : un groupe central produit de l'<b>eau glacée</b>, envoyée dans des <b>ventilo-convecteurs</b> dans chaque local. Dans les deux cas : pompe et crépine d'eau de mer à surveiller.</p>
<h3>Dessalinisateur (osmose inverse)</h3>
<p>Une pompe haute pression (vers <b>55 à 60 bars</b>) pousse l'eau de mer à travers une <b>membrane</b>. Préfiltres (20 puis 5 µm), contrôle de <b>salinité</b> (l'eau trop salée est rejetée), <b>rinçage à l'eau douce</b> après usage, produit de conservation si long arrêt. <b>Jamais dans un port sale</b> : les hydrocarbures détruisent la membrane.</p>
<h3>Eaux usées</h3>
<p><b>Eaux noires</b> (WC) et <b>eaux grises</b> (douches, éviers, cuisine). Réservoirs ou station de traitement ; vidange au port (pompage). Rejets selon MARPOL annexe IV et les règles locales (interdits dans beaucoup de mouillages).</p>
<h3>Gérer l'électricité</h3>
<ul><li>Souvent <b>deux groupes électrogènes</b> : secours, et un groupe adapté à la charge (un diesel <b>sous-chargé</b> s'encrasse).</li>
<li>Courant de quai : tension et fréquence varient d'un pays à l'autre (50 ou 60 Hz) : <b>convertisseur de quai</b>, transformateur d'isolement.</li>
<li><b>Délestage</b> : couper les consommateurs non prioritaires ; ne pas démarrer en même temps plusieurs gros appareils (climatisation, dessalinisateur, propulseurs).</li></ul>`
    },
    {
      id: 'arret', titre: 'Arrêt technique et cale sèche', src: 'Programme module Yacht, base (4 h)',
      html: `<h3>Sortir le yacht de l'eau</h3>
<ul><li><b>Slipway</b> : rampe avec un chariot (ber) tiré par un treuil.</li>
<li><b>Travel lift</b> : portique roulant qui lève le yacht avec des <b>sangles</b>.</li>
<li><b>Cale sèche</b> (forme de radoub) : bassin qu'on vide une fois le yacht posé sur ses tins.</li>
<li><b>Élévateur à plateforme</b> (type synchrolift) et grue pour les petites unités.</li></ul>
<h3>Lever et caler</h3>
<ul><li>Sangles aux <b>repères</b> marqués sur la coque, loin des sondes, stabilisateurs, arbres et propulseurs. Vérifier la capacité de levage.</li>
<li>Calage : <b>tins</b> sous la quille et <b>accores</b> ou berceaux sur les côtés, aux endroits renforcés (cloisons, varangues), d'après le <b>plan de calage</b>.</li>
<li>Avant la sortie : citernes ajustées, matériel saisi, quai débranché, vannes fermées, personne à bord pendant le levage.</li></ul>
<h3>Pendant le chantier</h3>
<ul><li>Raccordements : électricité (tension, fréquence), eau, évacuations, ventilation, <b>moyens incendie</b>.</li>
<li>Sécurité : <b>permis de feu</b> et de travail, consignation, protections individuelles, coordination avec le chantier et les sous-traitants, rondes.</li></ul>
<h3>Ce qu'on inspecte à sec</h3>
<p>Carène (peinture, osmose, corrosion), <b>anodes</b>, hélices et arbres (jeu des paliers), safrans (jeu de la mèche), <b>vannes de coque</b> et passe-coques, stabilisateurs, propulseurs, sondes.</p>
<h3>La visite de classe</h3>
<p>Préparer le dossier et la liste des points, ouvrir les accès, les citernes si demandé, faire faire les mesures d'épaisseur si prévues.</p>
<div class="retenir"><p>Remise à l'eau : vannes refermées, presse-étoupes et passe-coques <b>contrôlés tout de suite à flot, avant de retirer les sangles</b> ; puis essais moteurs.</p></div>`
    },
    {
      id: 'anglais', titre: 'L\'anglais du yacht', src: 'Programme module Yacht, base (4 h)',
      html: `<p>Dans le yachting, l'équipage est international : tout se dit en anglais.</p>
<div class="tw"><table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td>Motor yacht / sailing yacht</td><td>Yacht à moteur / voilier</td></tr>
<tr><td>Tender</td><td>Annexe</td></tr><tr><td>Toys</td><td>Jouets nautiques (jet-ski, paddle…)</td></tr>
<tr><td>Gangway / passerelle</td><td>Passerelle d'accès au quai</td></tr><tr><td>Swim platform</td><td>Plateforme de bain</td></tr>
<tr><td>Flybridge</td><td>Fly (poste de pilotage en hauteur)</td></tr><tr><td>Sundeck</td><td>Pont soleil</td></tr>
<tr><td>Lazarette</td><td>Soute arrière</td></tr><tr><td>Crew mess</td><td>Carré de l'équipage</td></tr>
<tr><td>Galley</td><td>Cuisine</td></tr><tr><td>Owner's suite / VIP cabin</td><td>Suite du propriétaire / cabine VIP</td></tr>
<tr><td>Wheelhouse / bridge</td><td>Timonerie / passerelle de navigation</td></tr><tr><td>Fender</td><td>Défense</td></tr>
<tr><td>Lazy line</td><td>Pendille</td></tr><tr><td>Stern-to mooring</td><td>Amarrage cul à quai</td></tr>
<tr><td>Windlass</td><td>Guindeau</td></tr><tr><td>Bow thruster</td><td>Propulseur d'étrave</td></tr>
<tr><td>Davit</td><td>Bossoir</td></tr><tr><td>Stabilizers</td><td>Stabilisateurs</td></tr></table></div>
<h3>L'équipage</h3>
<p>Captain, chief officer (second), bosun (bosco), deckhand (matelot), chief engineer, ETO (officier électrotechnicien), chief stew (chef d'intérieur), stewardess, chef. Les clients : <b>guests</b> ; le propriétaire : <b>owner</b>.</p>
<h3>Ordres de manœuvre</h3>
<p>« Stand by fenders » (parés les défenses), « Let go aft lines » (larguez derrière), « Pay out the chain » (filez la chaîne), « Heave up the anchor » (virez l'ancre), « Slow ahead / slow astern », « Hold position ».</p>`
    },
    {
      id: 'monde', titre: 'Le monde du yachting', src: 'Programme module Yacht, spécifique (8 h)',
      html: `<h3>Les types de yachts</h3>
<p><b>Motor yacht</b> (MY), <b>sailing yacht</b> (SY), catamaran, <b>open</b> (sportif, sans fly), <b>flybridge</b>, trawler (lent, économe), <b>explorer</b> (grande autonomie, coque solide), goélette ou gulet. On parle de <b>superyacht</b> à partir de <b>24 m</b>.</p>
<p>Vocabulaire des ponts : lower deck (cabines, équipage), main deck (salon, suite), upper deck, <b>sundeck</b>, <b>beach club</b> (salon au ras de l'eau à l'arrière), garage à annexe.</p>
<h3>Matériaux</h3>
<p><b>Composite</b> (séries, jusqu'à une quarantaine de mètres), <b>aluminium</b> (léger, rapide), <b>acier</b> pour la coque et aluminium pour les superstructures (grands yachts).</p>
<h3>L'entretien courant</h3>
<ul><li><b>Rinçage à l'eau douce</b> après chaque sortie : le sel attaque tout. Séchage à la peau de chamois ou à la raclette.</li>
<li><b>Teck</b> : brosse douce <b>en travers du fil</b>, savon doux, <b>jamais de nettoyeur haute pression</b> (il creuse le bois) ; refaire les joints quand ils se décollent.</li>
<li><b>Peintures</b> (polyuréthane) : produits doux, jamais d'abrasif.</li>
<li><b>Vernis</b> : plusieurs couches fines, égrenage entre les couches ; il protège du soleil (UV) et se refait régulièrement.</li>
<li><b>Inox</b> : polir, rincer, éviter le contact avec l'acier ordinaire. Housses contre le soleil.</li></ul>
<h3>Le réseau professionnel</h3>
<ul><li><b>Brokers</b> (courtiers) : vente et charter ; <b>sociétés de gestion</b> (management) ; <b>chantiers</b> (Italie, Pays-Bas, Allemagne, France…).</li>
<li>Associations : <b>MYBA</b> (contrats de charter standards), <b>PYA</b> (association des professionnels du yachting, à Antibes).</li>
<li>Salons : <b>Cannes Yachting Festival</b> et <b>Monaco Yacht Show</b> (septembre), Fort Lauderdale (automne). Presse : Boat International, SuperYacht Times.</li>
<li>Antibes et la Riviera : cœur du recrutement des équipages en Méditerranée.</li></ul>
<h3>Les pavillons</h3>
<p>Très courants : <b>îles Caïmans</b>, <b>îles Marshall</b>, <b>Malte</b>, Royaume-Uni et les registres du <b>Red Ensign Group</b>. Les yachts commerciaux de 24 m et plus suivent un code : <b>REG Yacht Code</b> (ex-Large Yacht Code), code maltais ; en France, la <b>division 242</b> (NUC de 24 m et plus).</p>`
    },
    {
      id: 'zones', titre: 'Les zones de croisière', src: 'Programme module Yacht, spécifique (8 h)',
      html: `<div class="tw"><table><tr><th>Zone</th><th>Vents et pièges</th></tr>
<tr><td><b>Côte d'Azur</b></td><td><b>Mistral</b> (NW), vent d'Est violent en hiver, brises l'été. Ports pleins l'été : réserver. Parc national de Port-Cros.</td></tr>
<tr><td><b>Corse</b></td><td><b>Bouches de Bonifacio</b> (le vent accélère), <b>libeccio</b> (SW, rafales sur le cap Corse), parcs marins, mouillages organisés.</td></tr>
<tr><td><b>Sardaigne</b></td><td><b>Maestrale</b> (le mistral local, NW), Costa Smeralda, archipel de La Maddalena (parc national).</td></tr>
<tr><td><b>Italie</b></td><td>Ligurie, Toscane, Amalfi et Capri, îles Éoliennes (volcans, peu d'abris). <b>Scirocco</b> (SE), libeccio.</td></tr>
<tr><td><b>Croatie</b></td><td><b>Bora</b> : NE, froid, rafales très violentes, souvent par ciel clair. <b>Jugo</b> : SE, chaud et humide, grosse mer, pluie.</td></tr>
<tr><td><b>Grèce</b></td><td>Mer Égée : <b>meltem</b> (N à NW) en <b>juillet-août</b>, force 6 à 7, surtout l'après-midi. Mer Ionienne : plus calme.</td></tr>
<tr><td><b>Espagne, Baléares</b></td><td><b>Tramontane</b> (N), <b>levante</b> (E, détroit de Gibraltar), poniente (W). Posidonie très protégée aux Baléares.</td></tr></table></div>
<h3>Préparer avec les fichiers GRIB</h3>
<p>Les <b>GRIB</b> donnent vent, pression, vagues aux points d'une grille (modèles GFS, ECMWF, AROME…). On compare plusieurs modèles et on se méfie : ils <b>sous-estiment les rafales</b> et les effets de cap. On complète par les bulletins officiels, les Instructions nautiques et les guides de croisière.</p>
<h3>Les Caraïbes</h3>
<ul><li><b>Alizés</b> de NE à E, 15 à 25 nœuds, plus forts en hiver.</li>
<li><b>Saison des cyclones : 1er juin – 30 novembre</b> (pic d'août à octobre). Les assurances imposent souvent de quitter la zone ou d'avoir un plan d'abri.</li>
<li>Courant vers l'<b>ouest</b> ; marées <b>faibles</b> (moins de 0,5 m).</li></ul>
<div class="piege"><p>En été, la saison se passe en Méditerranée ; l'hiver, beaucoup de yachts partent aux Caraïbes après la saison des cyclones (traversée en novembre-décembre avec les alizés).</p></div>`
    },
    {
      id: 'croisiere', titre: 'Organiser la croisière avec des invités', src: 'Programme module Yacht, spécifique (8 h)',
      html: `<h3>Avant le départ</h3>
<ul><li><b>Avitaillement</b> : vivres, boissons, selon la <b>fiche de préférences</b> des invités (goûts, régimes, allergies), carburant, eau, consommables, pièces de rechange, linge.</li>
<li><b>Itinéraire</b> sur plusieurs semaines : fenêtres météo, temps de navigation raisonnables, places de port réservées, mouillages de repli, zones protégées, formalités entre pays.</li></ul>
<h3>Chaque jour</h3>
<p>Briefing de l'équipage le matin, programme (repas, sorties, jouets), décisions partagées avec le propriétaire ou le chef de charte. La <b>sécurité reste la décision du capitaine</b>.</p>
<h3>Les activités et leurs règles</h3>
<ul><li><b>Bande des 300 m</b> : vitesse limitée à <b>5 nœuds</b> ; zones de baignade balisées.</li>
<li><b>Jet-ski</b> (VNM) : permis exigé, chenaux balisés, interdit dans les zones de baignade.</li>
<li><b>Plongée</b> : plongeurs qualifiés, pavillon <b>A</b> hissé, veille autour.</li>
<li><b>Mouillage</b> : interdit sur les <b>herbiers de posidonie</b> pour les navires de 24 m et plus en Méditerranée française ; parcs nationaux avec règles propres.</li>
<li>Pêche, drones : règles locales.</li></ul>
<h3>L'hôtellerie et l'équipe</h3>
<p>L'équipe intérieure (chief stew) gère le service, les cabines, le linge ; l'équipe pont gère les manœuvres, les jouets, l'annexe ; la machine et la cuisine ont leurs plannings. Le capitaine coordonne et règle les tensions.</p>
<h3>Les invités</h3>
<ul><li><b>Briefing sécurité</b> à l'arrivée : brassières, rassemblement, consignes.</li>
<li>Courtoisie, anticipation, discrétion ; une plainte se traite vite et calmement.</li>
<li>Présentation du yacht : propre, défenses rentrées en route, lignes lovées, équipage en tenue, <b>pavillons</b> : national à la poupe, <b>courtoisie à tribord</b> dans les eaux étrangères, guidon du propriétaire.</li></ul>
<h3>Sûreté et discrétion</h3>
<p>Aucune photo des invités sur les réseaux sociaux, accords de confidentialité, contrôle de la passerelle d'accès (relevée la nuit), rondes.</p>`
    },
    {
      id: 'equipage', titre: 'Gérer l\'équipage', src: 'Programme module Yacht, spécifique (gestion)',
      html: `<h3>Recruter</h3>
<p>Agences d'équipage (beaucoup à Antibes), CV, <b>références</b> vérifiées, brevets (STCW, CGO ou CRO…), <b>certificat médical</b> (aptitude ; le britannique <b>ENG1</b> est très demandé), entretien, période d'essai.</p>
<h3>Les heures de repos (STCW et MLC)</h3>
<div class="retenir"><p>Au moins <b>10 h de repos par 24 h</b> et <b>77 h par 7 jours</b>. Le repos se prend en <b>2 périodes au plus</b>, dont une d'<b>au moins 6 h</b> ; pas plus de <b>14 h</b> entre deux périodes de repos. Les heures sont <b>enregistrées</b>.</p></div>
<h3>Fatigue et tensions</h3>
<p>Vie en espace réduit, longues journées en charter : planning équilibré, jours de repos, règles de vie claires (alcool, sorties), écoute, régler les conflits tôt.</p>
<h3>Contrat et protection sociale</h3>
<ul><li><b>Contrat d'engagement maritime</b> (en anglais SEA) écrit et signé ; le marin en garde une copie. Il précise le salaire, la durée, les congés, le <b>rapatriement</b>.</li>
<li>Salaire payé <b>au moins chaque mois</b> ; <b>congés payés</b> d'au moins 2,5 jours par mois de service ; rapatriement à la charge de l'employeur.</li>
<li>Protection sociale : selon le pavillon et la résidence ; <b>ENIM</b> pour les marins des navires français ; assurance santé.</li></ul>
<h3>La MLC 2006</h3>
<p>Convention du travail maritime de l'<b>OIT</b>, en vigueur depuis le <b>20 août 2013</b> : âge minimum <b>16 ans</b>, certificat médical, contrat, salaire, heures de travail et de repos, congés, rapatriement, logement, nourriture, soins, procédure de <b>plainte</b>. Les navires de 500 UMS et plus en voyage international ont un <b>certificat de travail maritime</b>.</p>`
    },
    {
      id: 'admin', titre: 'Contrôles, fiscalité, douane', src: 'Programme module Yacht, spécifique (gestion)',
      html: `<h3>Les règles du yacht</h3>
<ul><li>Yacht <b>privé</b> : usage du propriétaire, il ne peut pas être loué. Yacht <b>commercial</b> : peut faire du charter s'il est certifié pour (code, équipage breveté, titres de sécurité).</li>
<li>Codes : <b>REG Yacht Code</b> (24 m et plus), <b>Passenger Yacht Code</b> (13 à 36 passagers) ; en France, <b>division 241</b> (NUC de moins de 24 m) et <b>242</b> (24 m et plus).</li>
<li><b>Contrôle par l'État du port</b> (MOU de Paris) : sécurité, certificats, MLC ; le yacht peut être retenu.</li></ul>
<h3>La fiscalité</h3>
<ul><li><b>TVA</b> : un yacht dans l'Union européenne doit avoir sa TVA payée, sauf régime particulier.</li>
<li><b>Admission temporaire</b> : un yacht hors UE dont le propriétaire ne réside pas dans l'UE peut y rester jusqu'à <b>18 mois</b> sans payer la TVA, pour un usage privé.</li>
<li>Le <b>charter</b> dans l'UE est soumis à la TVA du pays.</li>
<li>Le <b>carburant</b> peut être détaxé pour un usage commercial, sous conditions.</li></ul>
<h3>La douane et l'immigration</h3>
<ul><li>À l'entrée dans un pays : pavillon <b>Q</b> (jaune) hissé tant que les formalités ne sont pas faites, papiers du yacht, <b>liste d'équipage</b> et de passagers, passeports.</li>
<li><b>Schengen</b> : contrôle d'immigration à l'entrée et à la sortie de l'espace Schengen pour les personnes non européennes ; visas d'équipage.</li>
<li>Pays hors UE : permis de croisière, taxes, parfois agent local obligatoire ; se renseigner avant d'y aller.</li>
<li>Un <b>agent maritime</b> local facilite les formalités, les places de port, l'avitaillement.</li></ul>`
    },
    {
      id: 'charter', titre: 'Charter, comptes et relations', src: 'Programme module Yacht, spécifique (gestion)',
      html: `<h3>Le contrat de charter</h3>
<ul><li>Contrat type <b>MYBA</b>, le standard du secteur. Le prix de location couvre le yacht et son équipage ; les frais de croisière sont en plus (termes « Western Mediterranean »).</li>
<li>Paiement : en général <b>50 %</b> à la signature, le solde avant le début.</li>
<li><b>APA</b> (Advance Provisioning Allowance) : avance pour les frais (carburant, vivres, boissons, ports, communications), souvent <b>25 à 40 %</b> du prix (autour de 30 %). Le capitaine la gère, garde <b>toutes les factures</b> et rend les comptes à la fin : le reste est remboursé ou le client complète.</li>
<li>Préférences du client, état du yacht à l'embarquement et au débarquement.</li></ul>
<h3>Les comptes du bord</h3>
<p><b>Petite caisse</b> (petty cash) avec justificatifs, rapprochement régulier, rapport mensuel au propriétaire ou à la société de gestion, <b>budget annuel</b> (on compte souvent environ 10 % de la valeur du yacht par an pour le faire tourner), plusieurs devises.</p>
<h3>Les pourboires</h3>
<p>Usage : environ <b>5 à 20 %</b> du prix du charter (souvent 10 à 15 %), remis au capitaine, qui les partage avec l'équipage selon une règle connue de tous.</p>
<h3>Éthique et fournisseurs</h3>
<ul><li><b>Pas de commissions cachées</b> des fournisseurs : on travaille pour le propriétaire.</li>
<li>Devis, mise en concurrence, factures au nom du yacht, délais respectés.</li>
<li>Fournisseurs : shipchandlers, agents, chantiers, avitailleurs.</li></ul>`
    }
  ],
  cartes: [
    ["Longueur de chaîne au mouillage ?", "3 à 5 fois la profondeur (plus par mauvais temps).", "manoeuvre"],
    ["Marque et feu d'un yacht au mouillage ?", "Boule noire à l'avant le jour ; feu blanc visible tout autour la nuit.", "manoeuvre"],
    ["Pendille ?", "Aussière reliée à un corps-mort, prise au quai et portée à l'avant : pas besoin d'ancre.", "manoeuvre"],
    ["Tourner sur place avec deux lignes d'arbre ?", "Un moteur en avant, l'autre en arrière.", "manoeuvre"],
    ["NMEA 0183 et NMEA 2000 ?", "0183 : liaison série, un émetteur, 4 800 bauds. 2000 : réseau CAN, dorsale, 2 terminaisons de 120 Ω.", "passerelle"],
    ["Compas gyroscopique ?", "Nord vrai, insensible au magnétisme, plusieurs heures pour se stabiliser.", "passerelle"],
    ["Compas satellite ?", "2 antennes GNSS : cap vrai immédiat et précis.", "passerelle"],
    ["Compas fluxgate ?", "Capteur magnétique électronique : cap magnétique, à calibrer (déviation).", "passerelle"],
    ["Hélices de surface ?", "Hélice à moitié hors de l'eau : excellent à très grande vitesse, médiocre en manœuvre.", "machine"],
    ["Hydrojet : direction et marche arrière ?", "Direction par la tuyère, marche arrière par le déflecteur.", "machine"],
    ["Split ou chiller ?", "Split : un compresseur par unité. Chiller : groupe central d'eau glacée vers des ventilo-convecteurs.", "machine"],
    ["Dessalinisateur : 3 règles ?", "Préfiltres propres, rinçage à l'eau douce après usage, jamais dans un port sale.", "machine"],
    ["Eaux noires et eaux grises ?", "Noires : WC. Grises : douches, éviers, cuisine.", "machine"],
    ["Travel lift ?", "Portique roulant qui lève le yacht avec des sangles placées aux repères.", "arret"],
    ["Que vérifier tout de suite à la remise à l'eau ?", "Vannes, passe-coques et presse-étoupes, avant de retirer les sangles.", "arret"],
    ["Lazarette ? Tender ? Lazy line ?", "Soute arrière · annexe · pendille.", "anglais"],
    ["Bosun ? Chief stew ?", "Bosco (maître d'équipage) · chef de l'équipe intérieure.", "anglais"],
    ["Superyacht ?", "Yacht de 24 m et plus.", "monde"],
    ["Entretien du teck ?", "Brosse douce en travers du fil, savon doux, jamais de haute pression.", "monde"],
    ["MYBA et PYA ?", "MYBA : contrats de charter standards. PYA : association des professionnels du yachting.", "monde"],
    ["Pavillons de yachts courants ?", "Îles Caïmans, îles Marshall, Malte, Red Ensign Group.", "monde"],
    ["Bora et jugo (Croatie) ?", "Bora : NE, froid, rafales violentes. Jugo : SE, chaud, humide, grosse mer.", "zones"],
    ["Meltem ?", "Vent de N à NW en mer Égée, juillet-août, force 6 à 7.", "zones"],
    ["Saison des cyclones aux Caraïbes ?", "1er juin – 30 novembre (pic août-octobre).", "zones"],
    ["Bande des 300 m ?", "Vitesse limitée à 5 nœuds.", "croisiere"],
    ["Posidonie et grands yachts ?", "Mouillage interdit sur les herbiers pour les navires de 24 m et plus (Méditerranée française).", "croisiere"],
    ["Pavillon de courtoisie ?", "Pavillon du pays visité, hissé à tribord.", "croisiere"],
    ["Heures de repos minimum ?", "10 h par 24 h et 77 h par 7 jours ; 2 périodes au plus, dont une de 6 h.", "equipage"],
    ["MLC 2006 : en vigueur depuis ? Âge minimum ?", "20 août 2013 · 16 ans.", "equipage"],
    ["Admission temporaire dans l'UE ?", "Yacht hors UE, propriétaire non résident : jusqu'à 18 mois sans TVA, usage privé.", "admin"],
    ["Pavillon Q ?", "Jaune : hissé à l'arrivée dans un pays, tant que les formalités ne sont pas faites.", "admin"],
    ["APA ?", "Avance pour les frais du charter (souvent 25 à 40 % du prix), justifiée par les factures.", "charter"],
    ["Pourboires en charter ?", "En général 5 à 20 % du prix, partagés par le capitaine avec l'équipage.", "charter"]
  ],
  qcm: []
});
