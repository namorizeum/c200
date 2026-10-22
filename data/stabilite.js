/* Stabilité — module P2-1 */
C200.module({
  id: 'stabilite', bloc: 'P2-1', ordre: 12, court: 'STAB', titre: 'Stabilité',
  intro: 'Archimède, déplacement et tirant d\'eau, G, B et m, bras de levier GZ, centre de gravité par les moments, effets des poids, carène liquide, courbe des GZ et assiette. Écrit du module P2-1.',
  calculs: ['stab-te', 'stab-deplacement', 'stab-kg', 'stab-gz', 'stab-kn', 'stab-effet', 'stab-carene', 'stab-assiette'],
  visuels: ['equilibre'],
  fiches: [
    {
      id: 'archimede', titre: 'Flotter : Archimède, déplacement, tirant d\'eau', src: 'Cours DCSS p. 50 à 53, 71',
      html: `<p><b>Archimède</b> : tout corps plongé dans un liquide reçoit une poussée verticale, vers le haut, égale au <b>poids du volume de liquide déplacé</b>. Un navire flotte quand son poids est égal à cette poussée.</p>
<p><b>Masse</b> (kg, ne change jamais) et <b>poids</b> (force en newtons) : P = m × 9,81. À bord, on parle de poids en tonnes.</p>
<h3>Densité</h3>
<p>Eau douce <b>d = 1</b> (1 m³ = 1 t) · eau de mer <b>d = 1,025</b> (1 m³ = 1,025 t) · eau saumâtre entre les deux.</p>
<div class="formule">P = V × d &nbsp;·&nbsp; TE = V / S</div>
<p>P : déplacement (t) · V : volume de carène (m³) · S : surface de flottaison (L × l pour une barge) · TE : tirant d'eau.</p>
<div class="exemple"><p>Chaland de 240 t, 30 × 4 m, en eau de mer : V = 240 / 1,025 = 234,1 m³ ; S = 120 m² ; TE = 234,1 / 120 = <b>1,95 m</b>. En eau douce : V = 240 m³, TE = <b>2 m</b>.</p></div>
<div class="retenir"><p>En passant de l'eau de mer à l'eau douce, le poids ne change pas mais l'eau porte moins : le navire <b>s'enfonce</b>.</p></div>
<h3>Les trois déplacements</h3>
<div class="formule">Lège + port en lourd = déplacement en charge</div>
<p><b>Lège</b> : navire terminé, prêt mais vide. <b>Port en lourd</b> : tout ce qu'il peut embarquer jusqu'à son tirant d'eau maximal (cargaison, combustible, eau douce, vivres, équipage, engins de pêche). <b>Navire sur lest</b> : sans marchandises mais avec combustible et ballasts. Chargé au maximum, il est « à ses marques ».</p>`
    },
    {
      id: 'definitions', titre: 'Les définitions (questions de cours)', src: 'Cours DCSS p. 71 à 76',
      html: `<p>Le cours les signale comme <b>questions très fréquentes</b>.</p>
<ul>
<li><b>Déplacement</b> : le poids du navire (= poids du volume d'eau déplacé).</li>
<li><b>Tirant d'eau</b> : distance verticale entre le dessous de la quille et la flottaison (TE avant, arrière, milieu).</li>
<li><b>Carène</b> (œuvres vives) : partie immergée. <b>Centre de carène</b> (B) : centre de gravité du volume immergé, où s'applique la poussée.</li>
<li><b>Perpendiculaires</b> AV et AR : verticales aux extrémités de la flottaison en charge. <b>Perpendiculaire milieu</b> : à égale distance.</li>
<li><b>Différence</b> : TE arrière − TE avant. <b>Assiette</b> : cette différence rapportée à la longueur.</li>
<li><b>Flottaisons isocarènes</b> : flottaisons d'inclinaisons différentes qui limitent le même volume de carène (roulis, tangage, transfert de poids : le poids ne change pas).</li>
<li><b>Métacentre</b> : centre de rotation du centre de carène quand le navire s'incline.</li>
<li><b>Effet de carène liquide</b> : le liquide d'une citerne se déplace du côté de la gîte, comme un poids suspendu.</li>
<li><b>Gîte</b> : inclinaison due à une force <b>extérieure</b> (vent, vague). <b>Gîte permanente</b> : due à une cause <b>intérieure</b> (poids mal réparti) ; elle réduit la stabilité.</li>
<li><b>Franc-bord</b> : distance verticale entre la flottaison et le pont (de franc-bord).</li>
</ul>
<div class="piege"><p>Gîte = cause extérieure. Gîte permanente = cause intérieure. Pour corriger une gîte permanente en ajoutant du poids, on le place <b>le plus bas possible</b>.</p></div>`
    },
    {
      id: 'equilibre', titre: 'G, B, m : l\'équilibre du navire', src: 'Cours DCSS p. 53 à 55',
      html: `<p>Deux forces s'opposent :</p>
<ul><li>le <b>poids P</b>, vers le bas, appliqué au <b>centre de gravité G</b> ;</li><li>la <b>poussée F</b>, vers le haut, appliquée au <b>centre de carène B</b>.</li></ul>
<p>Le navire est en équilibre quand ces deux forces sont sur la <b>même verticale</b>. Si cette verticale est l'axe du navire, il flotte droit ; sinon il est gîté.</p>
<h3>Les notions de force</h3>
<p>Une force a une direction, un sens, une origine et une grandeur. Un <b>couple</b> : deux forces égales, parallèles et de sens opposés. Son <b>moment</b> = force × distance entre elles (le <b>bras de levier</b>).</p>
<div class="formule">Moment = F × d</div>
<h3>Le métacentre</h3>
<p>Quand le navire s'incline (petits angles), B se déplace sur un arc de cercle dont le centre est le <b>métacentre m</b>. <b>r</b> = rayon métacentrique (Bm), <b>a</b> = distance GB.</p>
<div class="formule">mG = r − a</div>
<p>La position de G et le poids du navire lège sont fixés à la construction ; G bouge ensuite avec le chargement.</p>`
    },
    {
      id: 'gz', titre: 'Stabilité transversale et bras de levier GZ', src: 'Cours DCSS p. 56 à 62',
      html: `${C200.dessin.carene({ I: 20, gm: 'pos' })}
<p>La <b>stabilité transversale</b> : l'aptitude du navire à revenir droit quand une force extérieure l'a incliné.</p>
<p>Le navire s'incline : G ne bouge pas, mais la carène change de forme (à volume constant) et B part du côté qui s'enfonce. Poids et poussée ne sont plus alignés : ils forment un <b>couple de redressement</b>. La distance <b>GZ</b> entre les deux verticales est le <b>bras de levier</b>.</p>
<div class="formule">GZ = (r − a) × sin I</div>
<div class="formule">Moment de redressement = P × GZ</div>
<div class="formule">MSIT = P × (r − a)</div>
<p>Valable pour les <b>petites inclinaisons</b> (moins de 15°). Le <b>MSIT</b> (module de stabilité initiale transversale) ne dépend pas de l'angle : il sert à comparer.</p>
<h3>Les trois cas</h3>
<div class="tw"><table><tr><th>Position</th><th>GM</th><th>Conséquence</th></tr>
<tr><td>G <b>sous</b> m</td><td>Positif</td><td><b>Stable</b> : couple de redressement. Plus GM est grand, plus il se redresse vite (navire « dur »).</td></tr>
<tr><td>G <b>sur</b> m</td><td>Nul</td><td><b>Indifférent</b> : pas de couple, il reste incliné.</td></tr>
<tr><td>G <b>au-dessus</b> de m</td><td>Négatif</td><td><b>Instable</b> : couple de chavirement, il s'incline fortement, peut chavirer. À éviter absolument.</td></tr></table></div>
<p>GZ augmente avec l'inclinaison jusqu'à un maximum (en général entre <b>40° et 60°</b>), puis diminue jusqu'à s'annuler : danger de chavirement.</p>
<div class="retenir"><p>G bas = stable. G haut = GZ petit, le navire se redresse lentement. G au-dessus de m = chavirement.</p></div>`
    },
    {
      id: 'kg', titre: 'Calculer KG et LCG par les moments', src: 'Cours DCSS p. 57-58',
      html: `<p>G change à chaque chargement. On calcule sa position avec la <b>méthode des moments</b>.</p>
<p><b>Conventions</b> : X (longitudinal) mesuré de la <b>perpendiculaire arrière</b> vers l'avant ; Z (vertical) de la <b>quille</b> (ligne d'eau zéro) vers le haut ; Y à bâbord ou à tribord de l'axe. Hauteur de G : <b>KG</b>. Position longitudinale : <b>LCG</b>.</p>
<div class="formule">KG = Σ(P × Z) / ΣP &nbsp;·&nbsp; LCG = Σ(P × X) / ΣP</div>
<p>Méthode : on part du navire lège (poids, X, Z donnés par le chantier), on ajoute chaque poids avec sa position, on calcule les moments P × X et P × Z, on additionne, on divise par le nouveau déplacement. Un poids <b>débarqué</b> compte en <b>négatif</b>.</p>
<div class="exemple"><div class="tw"><table><tr><th></th><th>P (t)</th><th>X</th><th>Z</th><th>P × X</th><th>P × Z</th></tr>
<tr><td>Lège</td><td>18 000</td><td>47,5</td><td>8,1</td><td>855 000</td><td>145 800</td></tr>
<tr><td>Gasoil</td><td>62</td><td>28,3</td><td>3,4</td><td>1 754,6</td><td>210,8</td></tr>
<tr><td>Eau</td><td>33</td><td>62</td><td>2,1</td><td>2 046</td><td>69,3</td></tr>
<tr><td>Cargaison</td><td>5 400</td><td>52</td><td>9,2</td><td>280 800</td><td>49 680</td></tr>
<tr><th>Total</th><th>23 495</th><td></td><td></td><th>1 139 600,6</th><th>195 760,1</th></tr></table></div>
<p>LCG = 1 139 600,6 / 23 495 = <b>48,5 m</b> · KG = 195 760,1 / 23 495 = <b>8,33 m</b></p></div>`
    },
    {
      id: 'poids', titre: 'Ajouter, enlever, déplacer un poids', src: 'Cours DCSS p. 58 à 60, 73',
      html: `<div class="tw"><table><tr><th>Opération</th><th>G se déplace…</th><th>Exemples</th></tr>
<tr><td><b>Ajout</b></td><td><b>vers</b> le poids ajouté</td><td>Gasoil dans les doubles fonds : G descend. Cargaison en pontée : G monte. Charge à bâbord : gîte bâbord.</td></tr>
<tr><td><b>Retrait</b></td><td><b>à l'opposé</b> du poids enlevé</td><td>Consommation des doubles fonds : G monte. Déchargement de la pontée : G descend. Déchargement à tribord : gîte bâbord.</td></tr>
<tr><td><b>Transfert</b></td><td>dans le <b>même sens</b> que le poids</td><td>Ballast de bâbord vers tribord : G va à tribord, gîte tribord.</td></tr></table></div>
<p>Tant que G reste dans l'axe (au-dessus de K), le navire est droit ; dès qu'il en sort, il gîte.</p>
<h3>Le givrage</h3>
<p>Par grand froid, les embruns gèlent sur les superstructures, les mâts, les apparaux : un poids <b>ajouté en hauteur</b>, souvent plus d'un bord que de l'autre. G monte, le navire s'alourdit (moins de franc-bord) et peut gîter. On casse la glace sans attendre, <b>en commençant par le haut</b>, et on réduit les surfaces exposées aux embruns (vitesse, cap).</p>
<div class="retenir"><p>Ajout : G va vers le poids. Retrait : G s'en éloigne. Transfert : G suit le poids.</p></div>`
    },
    {
      id: 'dangers', titre: 'Poids suspendu et carène liquide', src: 'Cours DCSS p. 62 à 65',
      html: `<p>Deux situations font <b>monter G d'un coup</b> et peuvent rendre GM négatif.</p>
<h3>Le poids suspendu</h3>
<p>Dès qu'un colis décolle (grue, mât de charge), son poids agit au <b>point de suspension</b>, en tête de flèche. Un colis de 5 t pris au fond de la cale « monte » instantanément en haut de la grue : G du navire monte. Si GM était faible, il peut devenir négatif.</p>
<h3>La carène liquide (surface libre)</h3>
<p>Une citerne <b>partiellement remplie</b> : le liquide se déplace du côté de la gîte et accentue l'inclinaison. On le traite comme une <b>montée virtuelle de G</b>, qui peut aller jusqu'au GM négatif.</p>
<div class="formule">n compartiments → effet divisé par n²</div>
<p>Des cloisons longitudinales (plaques antiroulis) réduisent l'effet : 3 compartiments = effet divisé par <b>9</b>. Le mieux : citernes <b>pleines ou vides</b>, et une seule citerne entamée à la fois.</p>
<div class="piege"><p>Au port, grue + transferts de ballast ou de gasoil + soutage : les deux effets s'additionnent. Le mécanicien doit consulter l'officier chargé de la stabilité avant de transférer des liquides.</p></div>
<p>Toutes les valeurs du navire sont dans son <b>livret (dossier) de stabilité</b>.</p>`
    },
    {
      id: 'courbe', titre: 'La courbe des GZ et la stabilité dynamique', src: 'Cours DCSS p. 65 à 69',
      html: `<p>Au-delà de <b>5 à 8°</b>, la forme de la carène change les choses : on ne peut plus utiliser (r − a) sin I. On lit <b>KN</b> sur les <b>courbes pantocarènes</b> (bras de levier si G était sur la quille K).</p>
<div class="formule">GZ = KN − KG × sin θ</div>
<p>On calcule GZ tous les 10° et on trace la <b>courbe des GZ</b>, valable pour un cas de chargement.</p>
<h3>Ce qu'on lit sur la courbe</h3>
<ol><li><b>GM</b> : la tangente à l'origine passe par la valeur de GM portée à <b>1 radian (57,3°)</b>.</li><li><b>Angle limite de stabilité statique</b> : l'angle du GZ maximum.</li><li><b>Angle de chavirement statique</b> : là où GZ redevient nul (bout de la courbe).</li><li><b>Réserve de stabilité statique</b> : l'aire sous la courbe (m·rad).</li><li><b>Réserve de stabilité dynamique</b> : l'aire entre la courbe des GZ et la courbe des bras de levier inclinants Bi = moment inclinant / (D × cos θ).</li><li><b>Angle limite de stabilité dynamique</b> : premier croisement des deux courbes, c'est la gîte que prendra le navire.</li></ol>
<p>Cas inclinants étudiés par la réglementation : passagers massés sur un bord, vent de travers, croche d'une seule fune (pêche), giration, ripage de grains, vent fort + mer forte.</p>
<div class="retenir"><p><b>GM</b> = indicateur de la stabilité <b>initiale</b>. <b>GZ</b> (la courbe) = indicateur de la <b>réserve</b> de stabilité, retenu par l'OMI.</p></div>
<h3>Documents du capitaine</h3>
<p>Plan de formes, courbes pantocarènes (KN), courbes de Bonjean, courbes de stabilité, manuel ou logiciel de chargement, compte rendu de l'<b>expérience de stabilité</b>, données des carènes liquides, échelle de déplacement, tableau des éléments hydrostatiques (TE, déplacement, positions de B, F, m).</p>`
    },
    {
      id: 'assiette', titre: 'Assiette et expérience de stabilité', src: 'Cours DCSS p. 65, 69-70',
      html: `<p>En stabilité longitudinale, l'<b>assiette</b> joue le rôle de la gîte. On l'exprime par la différence des tirants d'eau, pas en degrés.</p>
<div class="formule">Différence = TE AR − TE AV</div>
<p>TE arrière plus grand (cas habituel) : assiette <b>positive</b>. Plus enfoncé à l'avant : assiette <b>négative</b>, navire « sur le nez ».</p>
<div class="exemple"><p>TE AV 5 m, TE AR 5,75 m : assiette positive de <b>75 cm</b>.</p></div>
<p>Charger, décharger ou déplacer un poids change l'assiette. On utilise le <b>MCTC</b> : moment pour changer l'assiette de 1 cm (MCTI : de 1 pouce). Valeurs dans le livret de stabilité.</p>
<h3>L'expérience de pesée et de stabilité</h3>
<p>But : connaître le <b>déplacement</b>, le <b>KG</b> et le <b>LCG</b> du navire lège. Faite en fin de construction, après une grosse modification ou en cas de doute.</p>
<ol><li><b>Pesée</b> : lecture soignée des tirants d'eau avant, arrière, milieu et de la densité de l'eau → déplacement.</li><li><b>Expérience de stabilité</b> : on déplace un poids sur le côté pour créer une gîte d'environ <b>2°</b>, mesurée au <b>pendule</b> (longueur et déviation) → GM. Plusieurs mesures, deux de chaque bord.</li></ol>`
    },
    {
      id: 'dynamique', titre: 'Navires rapides : flaps, structure, anti-roulis', src: 'Programme P2-1 (complément, hors support de cours)',
      html: `<p>Le programme demande ces notions pour les petits navires rapides ; le support de cours ne les détaille pas. Voici l'essentiel à savoir.</p>
<h3>Les flaps</h3>
<p>Plaques réglables au bas du tableau arrière. <b>Baissés</b>, ils soulèvent l'arrière et font <b>baisser l'étrave</b>. Ils aident à déjauger, à régler l'assiette, et en baissant celui du bord gîté on corrige une gîte.</p>
<ul><li><b>Mer de face, clapot</b> : un peu de flaps pour que l'avant fende la vague au lieu de taper.</li><li><b>Mer de l'arrière</b> : flaps <b>relevés</b>, sinon l'étrave plante dans la vague (enfournement) et le navire peut partir en travers.</li><li>Mal réglés (étrave trop haute), la coque <b>décolle et retombe</b> : chocs répétés, <b>fissures d'étrave</b>, fatigue de la structure.</li></ul>
<h3>Préserver la structure</h3>
<ul><li>Adapter la vitesse au <b>clapot</b> : ne pas laisser la coque taper (tossage).</li><li><b>En courbe</b> : réduire la puissance avant de virer, puis la doser ; pleine puissance dans un virage serré fait déraper la coque et charge la structure (et les passagers peuvent tomber).</li><li>Mer de trois-quarts : la coque est prise en <b>torsion</b> (une vague à l'avant d'un bord, une à l'arrière de l'autre). Réduire la vitesse, changer de cap.</li><li>Après un coup de mer : inspecter l'étrave, les fonds, les fixations.</li></ul>
<h3>Les appendices anti-roulis</h3>
<p><b>Quilles de roulis</b> (ailerons fixes le long du bouchain), <b>stabilisateurs à ailerons</b> commandés, <b>citernes anti-roulis</b>, stabilisateurs <b>gyroscopiques</b>. Ils amortissent le roulis mais <b>ne remplacent pas un bon GM</b>.</p>`
    }
  ],
  cartes: [
    ['Principe d\'Archimède ?', 'Tout corps plongé dans un liquide reçoit une poussée verticale vers le haut égale au poids du liquide déplacé.', 'archimede'],
    ['Densité de l\'eau de mer ?', '1,025 (1 m³ pèse 1,025 t).', 'archimede'],
    ['Formules déplacement et tirant d\'eau ?', 'P = V × d ; TE = V / S.', 'archimede'],
    ['Eau de mer → eau douce : le navire…', 's\'enfonce (même poids, eau moins porteuse).', 'archimede'],
    ['Lège + port en lourd = ?', 'Déplacement en charge.', 'archimede'],
    ['Que comprend le port en lourd ?', 'Cargaison, combustible, eau douce, vivres, équipage, engins de pêche.', 'archimede'],
    ['Navire sur lest ?', 'Vide de marchandises, mais avec combustible et ballasts.', 'archimede'],
    ['Gîte et gîte permanente ?', 'Gîte : force extérieure. Gîte permanente : cause intérieure (poids mal répartis).', 'definitions'],
    ['Flottaisons isocarènes ?', 'Flottaisons d\'inclinaisons différentes limitant le même volume de carène.', 'definitions'],
    ['Différence (des tirants d\'eau) ?', 'TE arrière − TE avant.', 'definitions'],
    ['Centre de carène B ?', 'Centre du volume immergé, où s\'applique la poussée.', 'equilibre'],
    ['Condition d\'équilibre ?', 'Poids (en G) et poussée (en B) sur la même verticale.', 'equilibre'],
    ['Moment d\'un couple ?', 'Force × bras de levier (distance entre les deux forces).', 'equilibre'],
    ['mG = ?', 'r − a (r rayon métacentrique, a = GB).', 'equilibre'],
    ['Formule de GZ (petits angles) ?', 'GZ = (r − a) sin I, valable sous 15°.', 'gz'],
    ['MSIT ?', 'Module de stabilité initiale transversale = P (r − a).', 'gz'],
    ['Moment de redressement ?', 'P × GZ.', 'gz'],
    ['GM négatif ?', 'G au-dessus de m : couple de chavirement. À éviter absolument.', 'gz'],
    ['GM nul ?', 'G confondu avec m : pas de couple, le navire reste incliné.', 'gz'],
    ['Angle habituel du GZ maximum ?', 'Entre 40° et 60°.', 'gz'],
    ['Origine des X et des Z pour G ?', 'X depuis la perpendiculaire arrière ; Z depuis la quille.', 'kg'],
    ['Formule de KG ?', 'KG = Σ(P × Z) / ΣP.', 'kg'],
    ['Poids débarqué dans le tableau des moments ?', 'On le compte en négatif.', 'kg'],
    ['Ajout d\'un poids : G… ?', 'se déplace vers le poids ajouté.', 'poids'],
    ['Consommation du gasoil des doubles fonds ?', 'G monte : la stabilité diminue.', 'poids'],
    ['Transfert de ballast vers tribord ?', 'G va vers tribord : gîte tribord.', 'poids'],
    ['Givrage : effet et parade ?', 'Poids ajouté en hauteur, G monte. Casser la glace en commençant par le haut.', 'poids'],
    ['Poids suspendu : où agit-il ?', 'Au point de suspension (tête de flèche) dès qu\'il décolle.', 'dangers'],
    ['Carène liquide ?', 'Citerne partiellement remplie : le liquide suit la gîte, G virtuel monte.', 'dangers'],
    ['Cloisonner une citerne en n ?', 'Effet de carène liquide divisé par n² (3 → divisé par 9).', 'dangers'],
    ['GZ aux grands angles ?', 'GZ = KN − KG sin θ (KN lu sur les pantocarènes).', 'courbe'],
    ['GM sur la courbe des GZ ?', 'Porté à 1 radian (57,3°) sur la tangente à l\'origine.', 'courbe'],
    ['Angle de chavirement statique ?', 'Angle où GZ redevient nul (bout de la courbe).', 'courbe'],
    ['Réserve de stabilité statique ?', 'L\'aire sous la courbe des GZ (m·rad).', 'courbe'],
    ['GM ou GZ : lequel mesure la réserve de stabilité ?', 'GZ (la courbe). GM = stabilité initiale.', 'courbe'],
    ['Assiette positive ?', 'TE arrière plus grand que TE avant (cas habituel).', 'assiette'],
    ['MCTC ?', 'Moment pour changer l\'assiette de 1 cm.', 'assiette'],
    ['But de l\'expérience de stabilité ?', 'Connaître le déplacement, le KG et le LCG du navire lège.', 'assiette'],
    ['Gîte créée lors de l\'expérience de stabilité ?', 'Environ 2°, mesurée au pendule.', 'assiette'],
    ['Flaps baissés : effet ?', 'L\'arrière monte, l\'étrave baisse.', 'dynamique'],
    ['Flaps par mer de l\'arrière ?', 'Relevés, sinon l\'étrave plante dans la vague.', 'dynamique'],
    ['Les appendices anti-roulis ?', 'Quilles de roulis, stabilisateurs à ailerons, citernes anti-roulis, gyrostabilisateurs.', 'dynamique']
  ],
  qcm: [
    { q: 'Un navire de 410 t flotte en eau de mer. Son volume de carène vaut…', r: ['400 m³', '410 m³', '420,25 m³', '1,025 m³'], e: 'V = P / d = 410 / 1,025 = 400 m³.', f: 'archimede' },
    { q: 'Le même navire passe en eau douce. Il…', r: ['S\'enfonce', 'Remonte', 'Ne bouge pas', 'Gîte'], e: 'Il doit déplacer un plus grand volume d\'eau.', f: 'archimede' },
    { q: 'Le port en lourd, c\'est…', r: ['Ce que le navire peut embarquer jusqu\'à ses marques', 'Le poids du navire vide', 'Le volume des cales', 'La jauge nette'], e: 'Déplacement en charge − lège.', f: 'archimede' },
    { q: 'Une gîte due à un mauvais arrimage s\'appelle…', r: ['Une gîte permanente', 'Une gîte', 'Une assiette', 'Un roulis'], e: 'Cause intérieure.', f: 'definitions' },
    { q: 'La poussée d\'Archimède s\'applique…', r: ['Au centre de carène B', 'Au centre de gravité G', 'Au métacentre m', 'À la quille K'], e: 'Centre du volume immergé.', f: 'equilibre' },
    { q: 'Le navire est en équilibre quand…', r: ['G et B sont sur la même verticale', 'G est au-dessus de m', 'B est au-dessus de G', 'GZ est maximum'], e: 'Poids et poussée alignés.', f: 'equilibre' },
    { q: 'r = 2,40 m ; a = 1,60 m ; I = 10°. GZ vaut environ…', r: ['0,14 m', '0,80 m', '0,42 m', '0,28 m'], e: '(2,40 − 1,60) × sin 10° = 0,8 × 0,174 = 0,14 m.', f: 'gz' },
    { q: 'Le MSIT est égal à…', r: ['P × (r − a)', 'P × GZ', '(r − a) sin I', 'KN − KG sin θ'], e: 'Il ne dépend pas de l\'angle.', f: 'gz' },
    { q: 'Le centre de gravité est au-dessus du métacentre. Le navire…', r: ['Est instable : couple de chavirement', 'Est très stable', 'Reste incliné sans bouger', 'Se redresse lentement'], e: 'GM négatif.', f: 'gz' },
    { q: 'Navire lège 200 t, KG 3 m. On embarque 50 t à Z = 1 m. Nouveau KG ?', r: ['2,60 m', '2,00 m', '3,40 m', '2,50 m'], e: '(200 × 3 + 50 × 1) / 250 = 650 / 250 = 2,6 m.', f: 'kg' },
    { q: 'Les X du centre de gravité sont comptés à partir de…', r: ['La perpendiculaire arrière', 'La perpendiculaire avant', 'Le maître-couple', 'L\'étrave'], e: 'De l\'arrière vers l\'avant.', f: 'kg' },
    { q: 'On consomme le gasoil des doubles fonds. La stabilité…', r: ['Diminue : G monte', 'Augmente : G descend', 'Ne change pas', 'Augmente : B monte'], e: 'On enlève un poids situé en bas.', f: 'poids' },
    { q: 'On transfère du ballast de tribord vers bâbord. Le navire gîte…', r: ['Sur bâbord', 'Sur tribord', 'Sur l\'avant', 'Pas du tout'], e: 'G suit le poids transféré.', f: 'poids' },
    { q: 'Le givrage est dangereux surtout parce qu\'il…', r: ['Fait monter G en ajoutant du poids en hauteur', 'Alourdit l\'hélice', 'Fait baisser B', 'Augmente le franc-bord'], e: 'On casse la glace en commençant par le haut.', f: 'poids' },
    { q: 'Une grue soulève 5 t au fond de la cale. Le poids agit…', r: ['En tête de flèche', 'Au fond de la cale', 'Au pied de la grue', 'Au centre de carène'], e: 'Effet du poids suspendu.', f: 'dangers' },
    { q: 'Une citerne est divisée en 2 compartiments égaux. L\'effet de carène liquide est…', r: ['Divisé par 4', 'Divisé par 2', 'Inchangé', 'Doublé'], e: 'Divisé par n².', f: 'dangers' },
    { q: 'Pour limiter l\'effet de carène liquide, on garde les citernes…', r: ['Pleines ou vides', 'À moitié pleines', 'Toutes au quart', 'Ouvertes'], e: 'C\'est la surface libre qui pose problème.', f: 'dangers' },
    { q: 'Aux grands angles, on calcule GZ avec…', r: ['KN − KG sin θ', '(r − a) sin I', 'P × (r − a)', 'V / S'], e: 'KN sur les courbes pantocarènes.', f: 'courbe' },
    { q: 'L\'angle de chavirement statique correspond à…', r: ['GZ redevenu nul', 'GZ maximum', 'GM nul', 'La tangente à l\'origine'], e: 'Le bout de la courbe des GZ.', f: 'courbe' },
    { q: 'Sur la courbe des GZ, on porte GM à…', r: ['57,3° (1 radian)', '30°', '90°', '10°'], e: 'Sur la tangente à l\'origine.', f: 'courbe' },
    { q: 'TE AV 2,10 m, TE AR 2,45 m. L\'assiette est…', r: ['Positive de 35 cm', 'Négative de 35 cm', 'Positive de 2,28 m', 'Nulle'], e: 'AR − AV = +0,35 m.', f: 'assiette' },
    { q: 'L\'expérience de stabilité sert à déterminer…', r: ['Le déplacement, KG et LCG du navire lège', 'Le franc-bord', 'La jauge', 'La vitesse maximale'], e: 'Pesée puis gîte d\'environ 2°.', f: 'assiette' },
    { q: 'Mer de l\'arrière sur une vedette rapide : les flaps…', r: ['Relevés', 'Baissés au maximum', 'Un seul baissé', 'Peu importe'], e: 'Sinon l\'étrave plante dans la vague.', f: 'dynamique' },
    { q: 'Des quilles de roulis servent à…', r: ['Amortir le roulis', 'Augmenter le GM', 'Réduire le tirant d\'eau', 'Protéger l\'hélice'], e: 'Elles n\'améliorent pas la stabilité initiale.', f: 'dynamique' }
  ]
});
