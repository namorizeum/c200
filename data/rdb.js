/* Règles de barre (RIPAM / COLREG 72) — module P1-1 */
(function () {
  const D = C200.dessin;
  const fig = (svg, cap) => `<figure>${svg}<figcaption>${cap}</figcaption></figure>`;
  C200.module({
    id: 'rdb', bloc: 'P1-1', ordre: 1, court: 'RDB', titre: 'Règles de barre',
    intro: 'Le RIPAM : qui s\'écarte de qui, les feux, les marques et les signaux sonores. Épreuve orale avec le balisage : <b>moins de 10/20 est éliminatoire</b>.',
    calculs: [],
    visuels: ['feux', 'marques', 'sons'],
    fiches: [
      {
        id: 'ripam', titre: 'Le RIPAM et les définitions', src: 'Cours RDB p. 3 à 7 (règles 1 à 3)',
        html: `<p>Le <b>RIPAM</b> (Règlement International pour Prévenir les Abordages en Mer), en anglais <b>COLREG 72</b>, date de 1972 et s'applique depuis le <b>15 juillet 1977</b>. Il compte <b>38 règles</b> en <b>5 parties</b> :</p>
<div class="tw"><table><tr><th>Partie</th><th>Contenu</th><th>Règles</th></tr>
<tr><td>A</td><td>Généralités</td><td>1 à 3</td></tr>
<tr><td>B</td><td>Barre et route (toutes visibilités, en vue, visibilité réduite)</td><td>4 à 19</td></tr>
<tr><td>C</td><td>Feux et marques</td><td>20 à 31</td></tr>
<tr><td>D</td><td>Signaux sonores et lumineux</td><td>32 à 37</td></tr>
<tr><td>E</td><td>Exemptions</td><td>38</td></tr></table></div>
<p>Il s'applique <b>en haute mer et dans toutes les eaux reliées</b> accessibles aux navires de mer. Un port ou un fleuve peut avoir des règles locales en plus, mais elles doivent rester proches du RIPAM (règle 1).</p>
<p><b>Règle 2 (responsabilité)</b> : appliquer les règles ne protège pas d'une faute. Il faut aussi agir en bon marin, et on peut s'écarter d'une règle pour éviter un danger immédiat.</p>
<h3>Les définitions à connaître (règle 3)</h3>
<ul>
<li><span class="def">Navire</span> : tout engin qui flotte et sert à transporter sur l'eau (y compris hydravions et navions).</li>
<li><span class="def">Navire à propulsion mécanique</span> : mû par une machine.</li>
<li><span class="def">Navire à voile</span> : marche à la voile, <b>moteur arrêté</b>. Voile + moteur = navire à moteur.</li>
<li><span class="def">Navire en train de pêcher</span> : engin de pêche qui <b>réduit sa manœuvre</b> (filets, chalut, lignes…). Les <b>lignes traînantes</b> (traîne) ne comptent pas.</li>
<li><span class="def">Non maître de sa manœuvre (NUC)</span> : ne peut pas manœuvrer à cause de <b>circonstances exceptionnelles</b> (panne de barre, de moteur…).</li>
<li><span class="def">Capacité de manœuvre restreinte (RAM)</span> : limité <b>par la nature de son travail</b> (pose de câble, dragage, hydrographie, ravitaillement en route, hélicoptère, déminage, remorquage difficile).</li>
<li><span class="def">Handicapé par son tirant d'eau</span> : navire à moteur qui peut difficilement changer de route à cause de son tirant d'eau et de la profondeur disponible.</li>
<li><span class="def">Faisant route</span> : ni au mouillage, ni amarré, ni échoué. (Un navire stoppé mais pas mouillé « fait route » sans erre.)</li>
<li><span class="def">En vue</span> : quand l'un peut voir l'autre <b>visuellement</b> (le radar ne compte pas).</li>
<li><span class="def">Visibilité réduite</span> : brume, bruine, neige, forte pluie, tempête de sable…</li>
<li><span class="def">Longueur et largeur</span> : longueur hors tout et plus grande largeur.</li>
</ul>
<div class="piege"><p>« Faisant route » ne veut pas dire « avec de l'erre ». L'<b>erre</b> = la vitesse du navire sur l'eau. Un navire stoppé en mer fait route sans erre.</p></div>`
      },
      {
        id: 'veille', titre: 'Veille, vitesse de sécurité, risque d\'abordage', src: 'Cours RDB p. 8 à 10 (règles 5 à 7)',
        html: `<h3>Règle 5 : la veille</h3>
<p>Veille <b>visuelle et auditive</b> en permanence, avec <b>tous les moyens disponibles</b> (radar, VHF, AIS…), pour bien comprendre la situation et le risque d'abordage.</p>
<h3>Règle 6 : vitesse de sécurité</h3>
<p>Une vitesse qui permet d'<b>éviter l'abordage</b> et de <b>s'arrêter</b> sur une distance adaptée. On tient compte de :</p>
<ul><li>la visibilité, la densité du trafic (dont les pêcheurs) ;</li>
<li>la manœuvrabilité du navire (distance d'arrêt, giration) ;</li>
<li>de nuit, les lumières de la côte en arrière-plan ;</li>
<li>le vent, la mer, le courant, les dangers proches ;</li>
<li>le tirant d'eau par rapport à la profondeur ;</li>
<li>avec un radar : ses limites, l'échelle choisie, les échos de mer et de pluie, les petits bateaux mal détectés.</li></ul>
<h3>Règle 7 : risque d'abordage</h3>
<div class="retenir"><p>Si le <b>relèvement au compas</b> d'un navire qui s'approche <b>ne change pas</b> de manière nette, il y a <b>risque d'abordage</b>.</p>
<p>En cas de <b>doute</b>, on considère que le risque <b>existe</b>.</p></div>
<p>Attention : le risque peut exister même si le relèvement bouge, quand on approche un <b>très grand navire</b>, un <b>train de remorque</b> ou un navire <b>très proche</b>.</p>
<p>Si on a un radar qui marche, on doit s'en servir : longue portée pour voir venir tôt, et <b>pointage</b> (plotting / ARPA). On ne tire pas de conclusions de renseignements insuffisants.</p>`
      },
      {
        id: 'manoeuvre', titre: 'Comment manœuvrer pour éviter', src: 'Cours RDB p. 11, 21 (règles 8, 16, 17)',
        html: `<h3>Règle 8 : la manœuvre d'évitement</h3>
<p>Elle doit être faite <b>franchement</b>, <b>largement à temps</b> et selon les bons usages maritimes.</p>
<ul><li>Changement de cap ou de vitesse <b>assez grand pour être vu</b> tout de suite (à l'œil ou au radar). Pas une série de petits changements.</li>
<li>S'il y a de la place, <b>changer de cap seul</b> est souvent le plus efficace, si ça ne crée pas une autre situation rapprochée.</li>
<li>Passer à une <b>distance suffisante</b> et contrôler jusqu'à ce que l'autre soit <b>paré et clair</b>.</li>
<li>Si besoin : <b>réduire la vitesse</b>, stopper ou battre en arrière.</li></ul>
<h3>Règle 16 : le navire qui doit s'écarter (non privilégié)</h3>
<p>Il manœuvre <b>de bonne heure et franchement</b>, pour s'écarter <b>largement</b>.</p>
<h3>Règle 17 : le navire privilégié</h3>
<ol><li>Il <b>garde son cap et sa vitesse</b>.</li>
<li>Il <b>peut</b> manœuvrer seul dès qu'il voit que l'autre ne fait pas ce qu'il doit.</li>
<li>Il <b>doit</b> manœuvrer quand l'abordage ne peut plus être évité par l'autre seul.</li></ol>
<div class="piege"><p>Entre navires à moteur dont les routes se croisent, le privilégié qui manœuvre ne doit pas, si possible, <b>venir sur bâbord</b> vers un navire qui est sur son bâbord.</p></div>`
      },
      {
        id: 'chenal', titre: 'Chenaux étroits et rails (DST)', src: 'Cours RDB p. 12 à 17 (règles 9 et 10)',
        html: `<h3>Règle 9 : chenal étroit</h3>
<ul><li>On navigue <b>le plus près possible du bord droit</b> (tribord) du chenal.</li>
<li>Les navires <b>de moins de 20 m</b>, les <b>voiliers</b> et les <b>pêcheurs</b> ne doivent pas <b>gêner</b> ceux qui ne peuvent naviguer que dans le chenal.</li>
<li>On ne <b>traverse</b> pas un chenal si ça gêne ceux qui y sont obligés. Eux peuvent faire le signal de doute (5 sons brefs).</li>
<li>Pour <b>dépasser</b> quand l'autre doit s'écarter : 2 longs + 1 bref (par tribord) ou 2 longs + 2 brefs (par bâbord). L'autre répond « d'accord » : long-bref-long-bref.</li>
<li>À l'approche d'un <b>coude</b> masqué : <b>un son prolongé</b>.</li>
<li>On évite de <b>mouiller</b> dans un chenal étroit.</li></ul>
<h3>Règle 10 : dispositif de séparation du trafic (DST, « rail »)</h3>
<ul><li>Suivre la <b>voie</b> dans le <b>sens général du trafic</b>, s'écarter de la zone de séparation.</li>
<li>Entrer ou sortir <b>par les extrémités</b> ; si on le fait par le côté, sous un <b>angle le plus faible possible</b>.</li>
<li>Pour <b>couper</b> un rail : cap le plus proche possible de la <b>perpendiculaire</b> au trafic (c'est le <b>cap</b> qui compte, pas la route fond).</li>
<li>La <b>zone de navigation côtière</b> est pour les navires de <b>moins de 20 m</b>, les voiliers et les pêcheurs, ou pour aller à un port/une station de pilotage proche.</li>
<li>Pas de mouillage dans un DST ni près de ses extrémités.</li>
<li>Pêcheurs, navires de moins de 20 m et voiliers ne doivent pas <b>gêner</b> les navires à moteur qui suivent la voie.</li></ul>
<div class="retenir"><p>Chenal et rail : les <b>petits (&lt; 20 m), les voiliers et les pêcheurs</b> ne doivent pas gêner les gros qui y sont obligés.</p></div>`
      },
      {
        id: 'envue', titre: 'Navires en vue : voile, rattrapage, face à face, croisement', src: 'Cours RDB p. 18 à 20 (règles 11 à 15)',
        html: `<h3>Règle 12 : deux voiliers</h3>
<ul><li>Vent de <b>bords différents</b> : celui qui reçoit le vent <b>de bâbord</b> s'écarte.</li>
<li>Vent du <b>même bord</b> : celui qui est <b>au vent</b> s'écarte de celui sous le vent.</li>
<li>Un voilier qui reçoit le vent de <b>bâbord</b> et voit un voilier au vent sans savoir de quel bord il le reçoit : il s'écarte.</li></ul>
<p>Le côté du vent = le côté <b>opposé à la bôme</b> de la grand-voile.</p>
<h3>Règle 13 : le navire qui en rattrape un autre</h3>
<div class="retenir"><p>Celui qui <b>rattrape s'écarte toujours</b>, quel que soit son type (même un voilier qui rattrape un cargo).</p>
<p>On rattrape quand on arrive à <b>plus de 22,5° sur l'arrière du travers</b> de l'autre : de nuit, on ne voit que son <b>feu de poupe</b>.</p></div>
<p>En cas de doute, on se considère comme rattrapant. Et ça reste vrai jusqu'à être paré et clair, même si le relèvement change.</p>
<h3>Règle 14 : routes opposées (face à face)</h3>
<p>Deux navires à moteur qui arrivent de face : <b>chacun vient sur tribord</b> et ils se croisent <b>bâbord sur bâbord</b>. De nuit, on voit les <b>deux feux de côté</b> et les feux de tête de mât alignés. En cas de doute, on considère que c'est un face à face.</p>
<h3>Règle 15 : routes qui se croisent</h3>
<div class="retenir"><p>Entre navires à moteur, celui qui voit l'autre <b>sur son tribord</b> s'écarte, et évite de passer <b>devant</b> lui.</p>
<p>Moyen simple : je vois son <b>feu rouge</b> (son bâbord) = je dois m'écarter. Je vois son <b>vert</b> = je suis privilégié.</p></div>`
      },
      {
        id: 'hierarchie', titre: 'Qui s\'écarte de qui (règle 18)', src: 'Cours RDB p. 22-23 (règle 18)',
        html: `<p>Sauf dans un chenal (règle 9), un rail (règle 10) et le rattrapage (règle 13), on suit cet ordre. Chacun s'écarte de ceux qui sont <b>au-dessus</b> de lui :</p>
<div class="tw"><table><tr><th>Rang</th><th>Navire</th></tr>
<tr><td>1</td><td>Non maître de sa manœuvre (NUC) et capacité de manœuvre restreinte (RAM)</td></tr>
<tr><td>2</td><td>Handicapé par son tirant d'eau (les autres évitent de le <b>gêner</b>)</td></tr>
<tr><td>3</td><td>Navire en train de pêcher</td></tr>
<tr><td>4</td><td>Navire à voile</td></tr>
<tr><td>5</td><td>Navire à propulsion mécanique</td></tr>
<tr><td>—</td><td>Hydravion amerri : se tient à l'écart de tous</td></tr></table></div>
<ul><li>Le <b>moteur</b> s'écarte de : NUC, RAM, pêcheur, voilier.</li>
<li>Le <b>voilier</b> s'écarte de : NUC, RAM, pêcheur.</li>
<li>Le <b>pêcheur</b> s'écarte, si possible, de : NUC, RAM.</li>
<li>Tous (sauf NUC et RAM) évitent de <b>gêner</b> un navire handicapé par son tirant d'eau qui montre ses signaux.</li>
<li>Un <b>navion</b> à la surface est traité comme un navire à moteur.</li></ul>
<div class="piege"><p>Le voilier qui <b>rattrape</b> un navire à moteur doit s'écarter (règle 13 avant règle 18). Et dans un chenal, le voilier ne doit pas gêner le cargo qui ne peut naviguer que là.</p></div>`
      },
      {
        id: 'brume', titre: 'Visibilité réduite (règle 19)', src: 'Cours RDB p. 24-25 (règle 19)',
        html: `<p>Cette règle vaut pour les navires <b>qui ne se voient pas</b>, dans ou près d'une zone de visibilité réduite.</p>
<ul><li><b>Vitesse de sécurité</b> adaptée ; navires à moteur : <b>machines prêtes à manœuvrer</b> tout de suite.</li>
<li>Un écho détecté <b>seulement au radar</b> : on vérifie s'il y a situation rapprochée ou risque, et on agit <b>largement à temps</b>.</li></ul>
<div class="retenir"><p>Si on change de cap, on évite :</p>
<ul><li>de venir <b>sur bâbord</b> pour un navire <b>sur l'avant du travers</b> (sauf si on le rattrape) ;</li>
<li>de venir <b>vers</b> un navire qui est <b>par le travers ou sur l'arrière du travers</b>.</li></ul></div>
<p>Si on entend un <b>signal de brume sur l'avant du travers</b>, ou si on ne peut pas éviter une situation rapprochée avec un navire sur l'avant du travers : on <b>réduit au minimum pour gouverner</b>, on casse l'erre si besoin, et on avance avec une extrême prudence.</p>
<div class="piege"><p>Par brume, il n'y a <b>ni privilégié ni non privilégié</b> : les règles 12 à 18 (en vue) ne s'appliquent pas. Chacun manœuvre.</p></div>`
      },
      {
        id: 'feux', titre: 'Les feux : secteurs et portées', src: 'Cours RDB p. 26 à 28 (règles 20 à 22)',
        html: `<p>Les feux se montrent <b>du coucher au lever du soleil</b>, et aussi de jour par visibilité réduite. Les <b>marques</b> se montrent <b>de jour</b>.</p>
<div class="tw"><table><tr><th>Feu</th><th>Couleur</th><th>Secteur</th></tr>
<tr><td>Tête de mât</td><td>Blanc</td><td><b>225°</b> : de l'avant jusqu'à 22,5° sur l'arrière du travers de chaque bord</td></tr>
<tr><td>Feux de côté</td><td>Vert à tribord, rouge à bâbord</td><td><b>112,5°</b> chacun, de l'avant à 22,5° sur l'arrière du travers</td></tr>
<tr><td>Poupe</td><td>Blanc</td><td><b>135°</b> vers l'arrière (67,5° de chaque bord)</td></tr>
<tr><td>Remorquage</td><td>Jaune</td><td>135° vers l'arrière, comme la poupe</td></tr>
<tr><td>Tout horizon</td><td>Selon le cas</td><td>360°</td></tr>
<tr><td>À éclats</td><td>—</td><td>120 éclats par minute ou plus</td></tr></table></div>
<p>225 + 135 = 360 : la tête de mât et la poupe se complètent. Les deux feux de côté (2 × 112,5 = 225) couvrent le même secteur que la tête de mât.</p>
<h3>Portées minimales (règle 22), en milles</h3>
<div class="tw"><table><tr><th>Longueur</th><th>Tête de mât</th><th>Côté</th><th>Poupe, remorquage, tout horizon</th></tr>
<tr><td>50 m et plus</td><td>6</td><td>3</td><td>3</td></tr>
<tr><td>20 à 50 m</td><td>5</td><td>2</td><td>2</td></tr>
<tr><td>12 à 20 m</td><td>3</td><td>2</td><td>2</td></tr>
<tr><td>moins de 12 m</td><td>2</td><td>1</td><td>2</td></tr></table></div>
<div class="retenir"><p>« 6-3-3 » pour les grands navires (≥ 50 m). Seul le feu de côté des moins de 12 m descend à 1 mille.</p></div>`
      },
      {
        id: 'feuxroute', titre: 'Feux des navires qui font route', src: 'Cours RDB p. 29-30, 37-38 (règles 23 et 25)',
        html: `<h3>Navire à moteur (règle 23)</h3>
<ul><li>Un feu de <b>tête de mât</b> à l'avant ; un <b>second plus haut, à l'arrière</b>, obligatoire à partir de <b>50 m</b> ;</li>
<li>feux de <b>côté</b> ; feu de <b>poupe</b>.</li></ul>
<div class="lights">
${fig(D.nuit('pm', 'tri'), 'Moins de 50 m vu par tribord')}
${fig(D.nuit('pm50', 'av'), '50 m et plus vu de face : mâts alignés, vert à gauche, rouge à droite')}
</div>
<ul><li><b>Aéroglisseur</b> : en plus, un feu <b>jaune à éclats</b> tout horizon.</li>
<li><b>Navion</b> qui décolle ou se pose : feu rouge à éclats de forte intensité.</li>
<li>Moins de <b>12 m</b> : peut remplacer tête de mât + poupe par <b>un feu blanc tout horizon</b> + feux de côté.</li>
<li>Moins de <b>7 m et 7 nœuds max</b> : un feu blanc tout horizon suffit (feux de côté si possible).</li></ul>
<h3>Voilier (règle 25)</h3>
<ul><li>Feux de <b>côté</b> + feu de <b>poupe</b>. <b>Pas de feu de tête de mât</b>.</li>
<li>Moins de <b>20 m</b> : tout peut être réuni dans <b>un fanal tricolore</b> en tête de mât.</li>
<li>Option : <b>rouge au-dessus de vert</b> tout horizon en tête de mât (jamais avec le tricolore).</li>
<li>Moins de 7 m, ou navire à l'aviron : au minimum une lampe blanche prête à montrer.</li>
<li>Voilier qui avance <b>aussi au moteur</b> : de jour, <b>cône pointe en bas</b> à l'avant. (Et de nuit, il a les feux d'un navire à moteur.)</li></ul>
<div class="lights">${fig(D.nuit('voile', 'av'), 'Voilier vu de face')}${fig(D.nuit('voile2', 'bab'), 'Voilier avec rouge sur vert, vu par bâbord')}</div>
<div class="retenir"><p>Vu de <b>face</b> : le <b>vert est à ta gauche</b> et le rouge à ta droite (son tribord est à sa droite à lui).</p></div>`
      },
      {
        id: 'feuxspe', titre: 'Pêche, NUC, RAM, tirant d\'eau, pilote', src: 'Cours RDB p. 39 à 50 (règles 26 à 29)',
        html: `<p>Ces navires montrent des feux <b>superposés visibles sur tout l'horizon</b>. Quand ils ont de l'<b>erre</b>, ils ajoutent feux de côté et feu de poupe.</p>
<div class="tw"><table><tr><th>Navire</th><th>De nuit</th><th>De jour</th></tr>
<tr><td>Chalutier en pêche</td><td><b>Vert sur blanc</b> (+ tête de mât plus haut à l'arrière si ≥ 50 m)</td><td>Deux cônes pointe à pointe</td></tr>
<tr><td>Pêche autre que chalut</td><td><b>Rouge sur blanc</b> (+ blanc tout horizon côté engin s'il dépasse 150 m)</td><td>Deux cônes pointe à pointe (+ cône pointe en haut côté engin si &gt; 150 m)</td></tr>
<tr><td>Non maître de sa manœuvre</td><td><b>Rouge sur rouge</b>. Jamais de tête de mât.</td><td>Deux boules</td></tr>
<tr><td>Capacité de manœuvre restreinte</td><td><b>Rouge-blanc-rouge</b> (+ tête de mât si erre)</td><td>Boule, bicône, boule</td></tr>
<tr><td>Handicapé par son tirant d'eau</td><td><b>Trois rouges</b> + feux d'un navire à moteur</td><td>Un cylindre</td></tr>
<tr><td>Bateau-pilote en service</td><td><b>Blanc sur rouge</b></td><td>Pas de marque RIPAM (pavillon H du code des signaux)</td></tr></table></div>
<div class="retenir"><p>Petites phrases pour retenir :</p><ul>
<li>« <b>Vert sur blanc</b>, chalutier en pêche. »</li>
<li>« <b>Rouge sur blanc</b>, pêcheur au filet. »</li>
<li>« <b>Blanc sur rouge</b>, pilote à bord. »</li>
<li>« <b>Rouge sur rouge</b>, je suis en panne. »</li>
<li>« <b>Rouge, blanc, rouge</b>, je travaille. »</li></ul></div>
<div class="lights">
${fig(D.nuit('chal', 'av'), 'Chalutier avec erre, vu de face')}
${fig(D.nuit('peche0', 'tri'), 'Pêcheur (filet) sans erre')}
${fig(D.nuit('nuc', 'bab'), 'NUC avec erre, vu par bâbord')}
${fig(D.nuit('ram', 'tri'), 'RAM avec erre, vu par tribord')}
${fig(D.nuit('te', 'av'), 'Handicapé par son tirant d\'eau, de face')}
${fig(D.nuit('pilote', 'tri'), 'Pilote en service, par tribord')}
</div>
<h3>Cas particuliers</h3>
<ul><li><b>Drague</b> (RAM) avec obstruction : <b>2 rouges</b> (ou 2 boules) du côté <b>gênant</b>, <b>2 verts</b> (ou 2 bicônes) du côté où on <b>peut passer</b>.</li>
<li><b>Plongée</b> (petit navire) : rouge-blanc-rouge de nuit, <b>pavillon A rigide d'au moins 1 m</b> de jour.</li>
<li><b>Déminage</b> : <b>3 feux verts</b> ou <b>3 boules</b> (tête de mât + bouts de vergue) : ne pas approcher à moins de <b>1 000 m</b>.</li>
<li>Les navires de <b>moins de 12 m</b> n'ont pas à montrer les feux NUC/RAM (sauf plongée).</li>
<li>Un pêcheur qui ne pêche pas, ou qui pêche à la <b>traîne</b>, montre les feux normaux d'un navire de sa taille.</li></ul>
<p>Pêcheurs groupés (annexe II, chalutiers ≥ 20 m) : 2 blancs = je file mes filets ; blanc sur rouge = je vire ; 2 rouges = filet croché. Grande seine : 2 jaunes qui clignotent en alternance.</p>`
      },
      {
        id: 'remorque', titre: 'Remorquage et poussage (règle 24)', src: 'Cours RDB p. 31 à 37 (règle 24)',
        html: `<h3>Le remorqueur (remorque derrière)</h3>
<ul><li><b>2 feux de tête de mât superposés</b> (à la place du feu avant) ; <b>3</b> si la remorque dépasse <b>200 m</b> (de l'arrière du remorqueur au bout du train) ;</li>
<li>feux de côté, feu de poupe ;</li>
<li><b>feu jaune de remorquage</b> au-dessus du feu de poupe ;</li>
<li>de jour, si la remorque dépasse 200 m : <b>une marque biconique</b> (sur le remorqueur et sur la remorque).</li></ul>
<div class="lights">${fig(D.nuit('rem', 'tri'), 'Remorque ≤ 200 m, par tribord')}${fig(D.nuit('rem200', 'av'), 'Remorque > 200 m, de face')}${fig(D.nuit('rem', 'ar'), 'Remorqueur vu de l\'arrière : poupe + jaune')}</div>
<h3>Pousser en avant ou remorquer à couple</h3>
<p><b>2 feux de tête de mât</b> superposés, feux de côté, feu de poupe, mais <b>pas de feu jaune</b>. Un pousseur et sa barge <b>reliés rigidement</b> (unité composite) = un simple navire à moteur.</p>
<h3>Le navire remorqué</h3>
<p>Feux de <b>côté</b> + feu de <b>poupe</b> (bicône si &gt; 200 m). Un objet à moitié immergé : feux blancs tout horizon aux extrémités.</p>
<p>Remorquage qui empêche de changer de route : en plus, <b>rouge-blanc-rouge</b> (RAM).</p>`
      },
      {
        id: 'mouillage', titre: 'Mouillage et échouage (règle 30)', src: 'Cours RDB p. 51-52 (règle 30)',
        html: `<ul><li><b>Au mouillage</b> : feu blanc tout horizon à l'<b>avant</b>, un second <b>plus bas à l'arrière</b>. De jour : <b>une boule</b> à l'avant.</li>
<li>Moins de <b>50 m</b> : un seul feu blanc tout horizon suffit.</li>
<li><b>100 m et plus</b> : obligation d'<b>éclairer les ponts</b> (feux de travail).</li>
<li><b>Échoué</b> : feux de mouillage + <b>2 rouges superposés</b>. De jour : <b>3 boules</b>.</li>
<li>Moins de 7 m au mouillage : pas obligé (sauf dans un chenal, un mouillage ou une route fréquentée). Moins de 12 m échoué : pas obligé des 2 rouges / 3 boules.</li></ul>
<div class="lights">${fig(D.nuit('mouil50', 'tri'), 'Mouillé ≥ 50 m (l\'avant plus haut)')}${fig(D.nuit('echoue', 'bab'), 'Échoué')}</div>
<div class="piege"><p>Un pilote au mouillage garde son <b>blanc sur rouge</b> et ajoute les feux de mouillage. Un pêcheur au mouillage, lui, ne montre que ses feux de pêche.</p></div>`
      },
      {
        id: 'marques', titre: 'Les marques de jour', src: 'Cours RDB p. 26-52 et annexe I (p. 63)',
        html: `<p>Les marques sont <b>noires</b>. Boule : 0,6 m de diamètre minimum. Cône : base 0,6 m, hauteur = diamètre. Cylindre : hauteur = 2 × diamètre. Espacement vertical : 1,5 m minimum.</p>
<div class="tw"><table><tr><th>Marque</th><th>Signification</th></tr>
<tr><td>1 boule (avant)</td><td>Au mouillage</td></tr>
<tr><td>2 boules</td><td>Non maître de sa manœuvre</td></tr>
<tr><td>3 boules superposées</td><td>Échoué</td></tr>
<tr><td>3 boules en triangle</td><td>Déminage (rester à 1 000 m)</td></tr>
<tr><td>Boule, bicône, boule</td><td>Capacité de manœuvre restreinte</td></tr>
<tr><td>Cylindre</td><td>Handicapé par son tirant d'eau</td></tr>
<tr><td>2 cônes pointe à pointe</td><td>En train de pêcher</td></tr>
<tr><td>Cône pointe en haut (sur le côté)</td><td>Engin de pêche déployé à plus de 150 m de ce côté</td></tr>
<tr><td>Cône pointe en bas (avant)</td><td>Voilier qui marche aussi au moteur</td></tr>
<tr><td>Bicône</td><td>Remorque de plus de 200 m</td></tr>
<tr><td>Pavillon A rigide (1 m)</td><td>Plongée</td></tr></table></div>
<div class="lights">${fig(D.jour('m-ram'), 'Capacité restreinte')}${fig(D.jour('m-peche'), 'Pêche')}${fig(D.jour('m-voilmot'), 'Voilier au moteur')}${fig(D.jour('m-echoue'), 'Échoué')}</div>`
      },
      {
        id: 'sons', titre: 'Signaux sonores et lumineux', src: 'Cours RDB p. 54 à 60 (règles 32 à 35)',
        html: `<p>Son <b>bref</b> ≈ 1 seconde. Son <b>prolongé</b> = 4 à 6 secondes.</p>
<p>Matériel (règle 33) : <b>sifflet</b> à partir de 12 m ; <b>+ cloche</b> à partir de 20 m ; <b>+ gong</b> à partir de 100 m. Moins de 12 m : un moyen sonore efficace.</p>
<h3>En vue : signaux de manœuvre (règle 34)</h3>
<div class="tw"><table><tr><th>Signal</th><th>Sens</th></tr>
<tr><td>• (1 bref)</td><td>Je viens sur <b>tribord</b></td></tr>
<tr><td>• • (2 brefs)</td><td>Je viens sur <b>bâbord</b></td></tr>
<tr><td>• • • (3 brefs)</td><td>Je <b>bats en arrière</b></td></tr>
<tr><td>• • • • • (5 brefs ou plus)</td><td><b>Doute</b> : je ne comprends pas vos intentions</td></tr>
<tr><td>— — • </td><td>Je compte vous rattraper par tribord (chenal)</td></tr>
<tr><td>— — • •</td><td>Je compte vous rattraper par bâbord (chenal)</td></tr>
<tr><td>— • — •</td><td>D'accord pour être rattrapé</td></tr>
<tr><td>— (1 prolongé)</td><td>J'approche d'un coude (l'autre répond —)</td></tr></table></div>
<p>Les signaux lumineux (éclats d'1 s, feu blanc visible à 5 milles) peuvent doubler les signaux 1, 2 et 3 brefs. Ils sont espacés d'au moins 10 s.</p>
<h3>Par visibilité réduite (règle 35)</h3>
<div class="tw"><table><tr><th>Signal</th><th>Qui ?</th><th>Fréquence</th></tr>
<tr><td>—</td><td>Moteur <b>avec erre</b></td><td>≤ 2 min</td></tr>
<tr><td>— —</td><td>Moteur <b>stoppé sans erre</b></td><td>≤ 2 min</td></tr>
<tr><td>— • •</td><td>NUC, RAM, tirant d'eau, <b>voilier</b>, <b>pêcheur</b>, <b>remorqueur/pousseur</b></td><td>≤ 2 min</td></tr>
<tr><td>— • • •</td><td>Navire <b>remorqué</b> avec équipage</td><td>≤ 2 min</td></tr>
<tr><td>Cloche 5 s</td><td><b>Au mouillage</b> (+ gong à l'arrière si ≥ 100 m)</td><td>≤ 1 min</td></tr>
<tr><td>3 coups + cloche + 3 coups</td><td><b>Échoué</b></td><td>≤ 1 min</td></tr>
<tr><td>• — •</td><td>Mouillé qui signale sa présence (en option)</td><td>—</td></tr>
<tr><td>• • • •</td><td>Pilote en service (identification)</td><td>—</td></tr></table></div>
<div class="piege"><p>Un pêcheur au mouillage et un RAM qui travaille au mouillage font <b>— • •</b>, pas la cloche.</p></div>`
      },
      {
        id: 'detresse', titre: 'Signaux de détresse et d\'attention', src: 'Cours RDB p. 62, 66-67 (règles 36-37, annexe IV)',
        html: `<p>Règle 36 : pour attirer l'attention, on peut utiliser un signal lumineux ou sonore impossible à confondre, ou braquer le projecteur vers le danger (sans gêner). Éviter les feux tournants ou à éclats très puissants.</p>
<h3>Signaux de détresse (annexe IV)</h3>
<ul><li>Coup de canon ou explosion toutes les minutes environ ;</li>
<li><b>son continu</b> de l'appareil de brume ;</li>
<li><b>fusées à étoiles rouges</b>, une à une ;</li>
<li><b>SOS</b> en morse (• • • — — — • • •) ;</li>
<li><b>MAYDAY</b> à la radio ;</li>
<li>pavillons <b>N C</b> ;</li>
<li>pavillon carré avec une <b>boule</b> (dessus ou dessous) ;</li>
<li>flammes à bord (baril qui brûle…) ;</li>
<li><b>fusée parachute</b> ou <b>feu à main rouge</b> ;</li>
<li><b>fumée orange</b> ;</li>
<li><b>bras tendus levés et baissés</b> lentement, plusieurs fois ;</li>
<li>alerte <b>ASN</b> (DSC) sur le <b>canal 70</b> VHF ou 2187,5 kHz… ;</li>
<li>alerte par satellite (Inmarsat), <b>balise de détresse</b> (RLS / EPIRB), <b>répondeur radar</b> (SART).</li></ul>
<p>Pour l'avion : toile orange avec carré et rond noirs, colorant dans l'eau.</p>
<div class="retenir"><p>Ces signaux sont <b>interdits</b> sauf vraie détresse. Les feux NUC/RAM ne sont <b>pas</b> des signaux de détresse.</p></div>`
      },
      {
        id: 'pavillons', titre: 'Pavillons A, B, N, C, O', src: 'Cours RDB p. 83',
        html: `<div class="tw"><table><tr><th>Pavillon</th><th>Aspect</th><th>Sens</th></tr>
<tr><td><b>A</b> (Alpha)</td><td>Blanc et bleu, en queue d'aronde</td><td>J'ai un <b>plongeur</b> : restez à distance, avancez lentement</td></tr>
<tr><td><b>B</b> (Bravo)</td><td>Rouge, en queue d'aronde</td><td>Je charge, décharge ou transporte des <b>matières dangereuses</b></td></tr>
<tr><td><b>N</b> (November)</td><td>Damier bleu et blanc</td><td><b>Non</b></td></tr>
<tr><td><b>C</b> (Charlie)</td><td>Bandes bleu-blanc-rouge-blanc-bleu</td><td><b>Oui</b></td></tr>
<tr><td><b>O</b> (Oscar)</td><td>Diagonale rouge et jaune</td><td><b>Homme à la mer</b></td></tr></table></div>
<div class="retenir"><p><b>N + C</b> ensemble = <b>détresse</b> (« Non… C'est la détresse »).</p></div>
${fig(D.pavillonA(), 'Pavillon A (plongée)')}`
      }
    ],
    cartes: [
      ['Combien de règles et de parties dans le RIPAM ?', '38 règles en 5 parties (A généralités, B barre et route, C feux et marques, D signaux sonores, E exemptions).', 'ripam'],
      ['Depuis quand le RIPAM (COLREG 72) s\'applique-t-il ?', 'Depuis le 15 juillet 1977.', 'ripam'],
      ['Définition de « faisant route » ?', 'Ni au mouillage, ni amarré à terre, ni échoué.', 'ripam'],
      ['Un voilier qui utilise aussi son moteur est…', 'Un navire à propulsion mécanique (et montre de jour un cône pointe en bas).', 'ripam'],
      ['Un navire qui pêche à la traîne est-il « en train de pêcher » ?', 'Non : les lignes traînantes ne réduisent pas sa manœuvre.', 'ripam'],
      ['Différence NUC / RAM ?', 'NUC : circonstances exceptionnelles (panne). RAM : à cause de la nature de son travail.', 'ripam'],
      ['Quand deux navires sont-ils « en vue » ?', 'Quand l\'un peut voir l\'autre visuellement (pas au radar).', 'ripam'],
      ['Signe principal d\'un risque d\'abordage ?', 'Le relèvement au compas du navire qui approche ne change pas de façon nette.', 'veille'],
      ['S\'il y a un doute sur le risque d\'abordage ?', 'On considère que le risque existe.', 'veille'],
      ['Quelle manœuvre d\'évitement (règle 8) ?', 'Franche, largement à temps, assez grande pour être vue. Pas de petits changements successifs.', 'manoeuvre'],
      ['Que fait le navire privilégié ?', 'Il garde cap et vitesse. Il peut manœuvrer si l\'autre ne fait rien, et doit le faire si l\'abordage ne peut plus être évité par l\'autre seul.', 'manoeuvre'],
      ['Dans un chenal étroit, de quel côté navigue-t-on ?', 'Le plus près possible du bord droit (tribord) du chenal.', 'chenal'],
      ['Comment couper un rail (DST) ?', 'Avec un cap le plus perpendiculaire possible au sens du trafic.', 'chenal'],
      ['Comment entrer dans une voie de DST par le côté ?', 'Sous un angle le plus faible possible par rapport au sens du trafic.', 'chenal'],
      ['Qui peut utiliser la zone de navigation côtière d\'un DST ?', 'Les navires de moins de 20 m, les voiliers, les pêcheurs (et ceux qui vont à un port proche).', 'chenal'],
      ['Deux voiliers, vent de bords différents : qui s\'écarte ?', 'Celui qui reçoit le vent de bâbord (bâbord amures).', 'envue'],
      ['Deux voiliers, vent du même bord : qui s\'écarte ?', 'Celui qui est au vent.', 'envue'],
      ['Quand est-on « rattrapant » ?', 'Quand on arrive à plus de 22,5° sur l\'arrière du travers de l\'autre : on ne voit que son feu de poupe.', 'envue'],
      ['Qui s\'écarte en cas de rattrapage ?', 'Toujours le rattrapant, quel que soit son type.', 'envue'],
      ['Deux navires à moteur face à face ?', 'Chacun vient sur tribord, croisement bâbord sur bâbord.', 'envue'],
      ['Deux navires à moteur, routes croisées : qui s\'écarte ?', 'Celui qui voit l\'autre sur son tribord (il voit son feu rouge). Il évite de passer devant.', 'envue'],
      ['Ordre de priorité de la règle 18 ?', 'NUC et RAM > tirant d\'eau > pêche > voile > moteur.', 'hierarchie'],
      ['Un navire à moteur doit s\'écarter de… ?', 'NUC, RAM, pêcheur, voilier.', 'hierarchie'],
      ['Un voilier doit s\'écarter de… ?', 'NUC, RAM, pêcheur.', 'hierarchie'],
      ['Par brume, signal entendu sur l\'avant du travers ?', 'Réduire au minimum pour gouverner, casser l\'erre si besoin, extrême prudence.', 'brume'],
      ['Par brume, écho radar sur l\'avant du travers : quel changement de cap éviter ?', 'Venir sur bâbord (sauf si on le rattrape).', 'brume'],
      ['Par brume, écho par le travers ou sur l\'arrière : quoi éviter ?', 'Venir vers lui.', 'brume'],
      ['Secteur du feu de tête de mât ?', '225°, de l\'avant à 22,5° sur l\'arrière du travers de chaque bord.', 'feux'],
      ['Secteur d\'un feu de côté ?', '112,5°, de l\'avant à 22,5° sur l\'arrière du travers de son bord.', 'feux'],
      ['Secteur du feu de poupe ?', '135° vers l\'arrière (67,5° de chaque bord).', 'feux'],
      ['Couleur et secteur du feu de remorquage ?', 'Jaune, 135° vers l\'arrière, au-dessus du feu de poupe.', 'feux'],
      ['Portées d\'un navire de 50 m ou plus ?', 'Tête de mât 6 milles, côté 3, poupe 3, tout horizon 3.', 'feux'],
      ['Portée du feu de côté d\'un navire de moins de 12 m ?', '1 mille.', 'feux'],
      ['À partir de quelle longueur le 2e feu de tête de mât est-il obligatoire ?', '50 m.', 'feuxroute'],
      ['Feux d\'un voilier faisant route ?', 'Feux de côté + feu de poupe (pas de tête de mât). Tricolore en tête de mât possible sous 20 m.', 'feuxroute'],
      ['Feux optionnels en tête de mât d\'un voilier ?', 'Rouge au-dessus de vert, tout horizon.', 'feuxroute'],
      ['Feu particulier d\'un aéroglisseur ?', 'Un feu jaune à éclats visible sur tout l\'horizon.', 'feuxroute'],
      ['Feux d\'un bateau à moteur de moins de 7 m et 7 nœuds max ?', 'Un feu blanc tout horizon (feux de côté si possible).', 'feuxroute'],
      ['Vert sur blanc ?', 'Chalutier en pêche.', 'feuxspe'],
      ['Rouge sur blanc ?', 'Navire en pêche autre que chalutier (filets, palangres…).', 'feuxspe'],
      ['Blanc sur rouge ?', 'Bateau-pilote en service.', 'feuxspe'],
      ['Rouge sur rouge ?', 'Navire non maître de sa manœuvre.', 'feuxspe'],
      ['Rouge-blanc-rouge ?', 'Navire à capacité de manœuvre restreinte.', 'feuxspe'],
      ['Trois rouges superposés ?', 'Navire handicapé par son tirant d\'eau.', 'feuxspe'],
      ['Drague avec obstruction : signification des 2 verts ?', 'Le côté où un autre navire peut passer (2 rouges = côté gênant).', 'feuxspe'],
      ['Trois feux verts ou trois boules ?', 'Déminage : ne pas approcher à moins de 1 000 m.', 'feuxspe'],
      ['Remorqueur dont la remorque dépasse 200 m, de nuit ?', '3 feux de tête de mât superposés, feux de côté, poupe, feu jaune de remorquage.', 'remorque'],
      ['Remorqueur, remorque ≤ 200 m ?', '2 feux de tête de mât superposés, feux de côté, poupe, feu jaune.', 'remorque'],
      ['Navire qui pousse en avant : feu jaune ?', 'Non : 2 têtes de mât, feux de côté et poupe, sans feu jaune.', 'remorque'],
      ['Marque de jour d\'une remorque de plus de 200 m ?', 'Un bicône (sur le remorqueur et sur la remorque).', 'remorque'],
      ['Feux d\'un navire au mouillage de 50 m ou plus ?', 'Blanc tout horizon à l\'avant, un second plus bas à l\'arrière.', 'mouillage'],
      ['Feux d\'un navire échoué ?', 'Feux de mouillage + 2 rouges superposés. De jour : 3 boules.', 'mouillage'],
      ['Navire au mouillage de 100 m ou plus : en plus ?', 'Il doit éclairer ses ponts.', 'mouillage'],
      ['Marque de jour : cylindre ?', 'Handicapé par son tirant d\'eau.', 'marques'],
      ['Marque de jour : boule-bicône-boule ?', 'Capacité de manœuvre restreinte.', 'marques'],
      ['Marque de jour : cône pointe en bas à l\'avant ?', 'Voilier qui avance aussi au moteur.', 'marques'],
      ['Diamètre minimal d\'une boule ?', '0,6 m. Espacement vertical des marques : 1,5 m minimum.', 'marques'],
      ['Durée d\'un son bref et d\'un son prolongé ?', 'Bref ≈ 1 s. Prolongé : 4 à 6 s.', 'sons'],
      ['Matériel sonore obligatoire selon la longueur ?', 'Sifflet ≥ 12 m ; cloche en plus ≥ 20 m ; gong en plus ≥ 100 m.', 'sons'],
      ['5 sons brefs ou plus ?', 'Doute sur les intentions de l\'autre navire.', 'sons'],
      ['Brume : un long + deux brefs toutes les 2 min ?', 'NUC, RAM, tirant d\'eau, voilier, pêcheur ou remorqueur/pousseur.', 'sons'],
      ['Brume : deux longs toutes les 2 min ?', 'Navire à moteur stoppé, sans erre.', 'sons'],
      ['Brume : cloche 5 s chaque minute ?', 'Navire au mouillage (+ gong à l\'arrière si ≥ 100 m).', 'sons'],
      ['Brume : un long + trois brefs ?', 'Navire remorqué avec équipage, juste après le signal du remorqueur.', 'sons'],
      ['Quel canal VHF pour l\'alerte ASN (DSC) de détresse ?', 'Le canal 70.', 'detresse'],
      ['Couleur de la fumée de détresse ?', 'Orange.', 'detresse'],
      ['Pavillon A ?', 'Plongeur en immersion : restez à distance et avancez lentement.', 'pavillons'],
      ['Pavillon B ?', 'Je charge, décharge ou transporte des matières dangereuses.', 'pavillons'],
      ['Pavillon O ?', 'Homme à la mer.', 'pavillons'],
      ['Pavillons N et C ensemble ?', 'Détresse.', 'pavillons']
    ],
    qcm: [
      { q: 'En combien de parties le RIPAM est-il divisé ?', r: ['5', '4', '6', '38'], e: '5 parties (A à E) et 38 règles.', f: 'ripam' },
      { q: 'Un navire stoppé en pleine mer, ni mouillé ni échoué, est…', r: ['Faisant route sans erre', 'Au mouillage', 'Non maître de sa manœuvre', 'Hors du champ du RIPAM'], e: '« Faisant route » = ni mouillé, ni amarré, ni échoué. Sans vitesse sur l\'eau, il n\'a pas d\'erre.', f: 'ripam' },
      { q: 'Un voilier qui avance voiles hautes ET moteur en marche est considéré comme…', r: ['Un navire à propulsion mécanique', 'Un navire à voile', 'Un navire à capacité restreinte', 'Un navire non maître de sa manœuvre'], e: 'Règle 3 c : un voilier n\'est « à voile » que si sa machine n\'est pas utilisée.', f: 'ripam' },
      { q: 'Un navire qui pêche avec des lignes traînantes est…', r: ['Un navire ordinaire (pas « en train de pêcher »)', 'Un navire en train de pêcher', 'Un navire à capacité restreinte', 'Prioritaire sur les voiliers'], e: 'La traîne ne réduit pas la manœuvre : pas de statut de pêcheur.', f: 'ripam' },
      { q: 'Un câblier en train de poser un câble sous-marin est…', r: ['À capacité de manœuvre restreinte', 'Non maître de sa manœuvre', 'Handicapé par son tirant d\'eau', 'En train de pêcher'], e: 'C\'est la nature de son travail qui le limite : RAM.', f: 'ripam' },
      { q: 'Un navire dont la barre est en avarie est…', r: ['Non maître de sa manœuvre', 'À capacité de manœuvre restreinte', 'Faisant route normalement', 'Handicapé par son tirant d\'eau'], e: 'Circonstance exceptionnelle (panne) = NUC.', f: 'ripam' },
      { q: 'Deux navires sont « en vue » quand…', r: ['L\'un peut voir l\'autre visuellement', 'Ils se voient au radar', 'Ils sont à moins de 2 milles', 'Ils se parlent en VHF'], e: 'Règle 3 k : seule la vue directe compte.', f: 'ripam' },
      { q: 'Le relèvement d\'un navire qui approche reste constant. Cela indique…', r: ['Un risque d\'abordage', 'Qu\'il va passer sur l\'arrière', 'Qu\'il est stoppé', 'Qu\'il n\'y a aucun risque'], e: 'Règle 7 d : relèvement constant = risque d\'abordage.', f: 'veille' },
      { q: 'Le relèvement d\'un très grand navire proche change un peu. Le risque…', r: ['Peut quand même exister', 'N\'existe plus', 'Existe seulement de nuit', 'Dépend uniquement de sa vitesse'], e: 'Avec un très grand navire, une remorque ou à courte distance, le risque peut exister même si le relèvement bouge.', f: 'veille' },
      { q: 'Lequel n\'est PAS un facteur de la vitesse de sécurité pour tous les navires ?', r: ['Le prix du carburant', 'La visibilité', 'La densité du trafic', 'Le tirant d\'eau par rapport à la profondeur'], e: 'Règle 6 : visibilité, trafic, manœuvrabilité, arrière-plan lumineux, mer et vent, tirant d\'eau.', f: 'veille' },
      { q: 'Une manœuvre d\'évitement doit être…', r: ['Franche, faite largement à temps et bien visible', 'Une série de petits changements de cap', 'Faite au dernier moment', 'Annoncée par VHF avant tout'], e: 'Règle 8 : franche, largement à temps, assez grande pour être perçue.', f: 'manoeuvre' },
      { q: 'Le navire privilégié doit d\'abord…', r: ['Garder son cap et sa vitesse', 'Ralentir', 'Venir sur tribord', 'Stopper sa machine'], e: 'Règle 17 a i.', f: 'manoeuvre' },
      { q: 'Le privilégié voit que l\'autre ne manœuvre pas et l\'abordage devient inévitable par l\'autre seul. Il…', r: ['Doit manœuvrer au mieux pour éviter l\'abordage', 'Garde cap et vitesse jusqu\'au bout', 'Ne fait rien car il est prioritaire', 'Doit uniquement siffler'], e: 'Règle 17 b : il doit faire la meilleure manœuvre pour aider à éviter l\'abordage.', f: 'manoeuvre' },
      { q: 'Navires à moteur, routes croisées : le privilégié qui manœuvre doit éviter de…', r: ['Venir sur bâbord pour un navire sur son bâbord', 'Venir sur tribord', 'Réduire sa vitesse', 'Battre en arrière'], e: 'Règle 17 c.', f: 'manoeuvre' },
      { q: 'Dans un chenal étroit, on navigue…', r: ['Près du bord tribord (droit) du chenal', 'Au milieu du chenal', 'Près du bord bâbord', 'Où on veut'], e: 'Règle 9 a.', f: 'chenal' },
      { q: 'Dans un chenal, qui ne doit pas gêner un cargo qui ne peut naviguer que là ?', r: ['Les navires de moins de 20 m et les voiliers', 'Seulement les pêcheurs au mouillage', 'Personne, le cargo doit s\'écarter', 'Seulement les navires remorqués'], e: 'Règle 9 b (et c pour les pêcheurs).', f: 'chenal' },
      { q: 'Pour couper un dispositif de séparation du trafic, on prend…', r: ['Un cap le plus perpendiculaire possible au trafic', 'Une route oblique à 45°', 'Le chemin le plus court en route fond', 'La zone de séparation'], e: 'Règle 10 c : c\'est le cap qui doit être perpendiculaire.', f: 'chenal' },
      { q: 'Un cargo de 150 m peut-il utiliser la zone de navigation côtière pour éviter le rail ?', r: ['Non, sauf pour gagner un port ou éviter un danger', 'Oui, toujours', 'Oui, la nuit seulement', 'Oui s\'il va vite'], e: 'Règle 10 d : réservée aux < 20 m, voiliers et pêcheurs, sauf exceptions.', f: 'chenal' },
      { q: 'Deux voiliers : A reçoit le vent de bâbord, B de tribord. Qui s\'écarte ?', r: ['A (vent de bâbord)', 'B (vent de tribord)', 'Le plus petit', 'Celui qui est sous le vent'], e: 'Règle 12 a i.', f: 'envue' },
      { q: 'Deux voiliers tribord amures, l\'un au vent de l\'autre. Qui s\'écarte ?', r: ['Celui qui est au vent', 'Celui qui est sous le vent', 'Le plus rapide', 'Aucun'], e: 'Règle 12 a ii.', f: 'envue' },
      { q: 'Un voilier rattrape un chalutier à moteur qui ne pêche pas. Qui s\'écarte ?', r: ['Le voilier', 'Le chalutier', 'Les deux', 'Celui qui est sous le vent'], e: 'Règle 13 : le rattrapant s\'écarte toujours.', f: 'envue' },
      { q: 'On est « rattrapant » quand on arrive sur l\'autre…', r: ['À plus de 22,5° sur l\'arrière de son travers', 'Par son travers', 'À moins de 22,5° de son avant', 'Plus vite que lui'], e: 'De nuit, on ne voit que son feu de poupe.', f: 'envue' },
      { q: 'Deux navires à moteur arrivent l\'un sur l\'autre de face. Ils…', r: ['Viennent chacun sur tribord', 'Viennent chacun sur bâbord', 'Le plus petit s\'écarte', 'Stoppent tous les deux'], e: 'Règle 14 : passage bâbord sur bâbord.', f: 'envue' },
      { q: 'De nuit, tu vois le feu rouge d\'un navire à moteur qui croise ta route. Tu es…', r: ['Non privilégié : tu dois t\'écarter', 'Privilégié', 'Rattrapé', 'En situation de face à face'], e: 'Son rouge = son bâbord : il est sur ton tribord. Règle 15.', f: 'envue' },
      { q: 'De nuit, tu vois le feu vert d\'un navire à moteur qui croise ta route, relèvement constant. Tu…', r: ['Gardes cap et vitesse en surveillant', 'Viens sur bâbord tout de suite', 'Stoppes immédiatement', 'Viens sur tribord pour passer devant'], e: 'Il est sur ton bâbord : c\'est à lui de s\'écarter. Tu restes vigilant (règle 17).', f: 'envue' },
      { q: 'Un navire à moteur et un voilier en vue, routes croisées (pas de rattrapage). Qui s\'écarte ?', r: ['Le navire à moteur', 'Le voilier', 'Celui qui a l\'autre sur tribord', 'Le plus petit'], e: 'Règle 18 a.', f: 'hierarchie' },
      { q: 'Un voilier et un chalutier en pêche. Qui s\'écarte ?', r: ['Le voilier', 'Le chalutier', 'Celui qui est sous le vent', 'Le plus rapide'], e: 'Règle 18 b : le voilier s\'écarte du pêcheur.', f: 'hierarchie' },
      { q: 'Un pêcheur en action et un navire RAM. Qui s\'écarte ?', r: ['Le pêcheur, si possible', 'Le RAM', 'Aucun des deux', 'Celui qui voit l\'autre sur tribord'], e: 'Règle 18 c.', f: 'hierarchie' },
      { q: 'Quel est le navire le plus « prioritaire » de la règle 18 ?', r: ['Non maître de sa manœuvre', 'Navire à voile', 'Navire en train de pêcher', 'Navire handicapé par son tirant d\'eau'], e: 'NUC et RAM sont en haut.', f: 'hierarchie' },
      { q: 'Un hydravion amerri…', r: ['Se tient à l\'écart de tous les navires', 'Est prioritaire sur tous', 'Est traité comme un voilier', 'Est un navire RAM'], e: 'Règle 18 e.', f: 'hierarchie' },
      { q: 'Par brume, sans te voir, quelle règle ne s\'applique PAS ?', r: ['La règle 15 (routes croisées)', 'La règle 19', 'La règle 6 (vitesse de sécurité)', 'La règle 35 (signaux de brume)'], e: 'Les règles 11 à 18 ne valent qu\'entre navires en vue.', f: 'brume' },
      { q: 'Par brume, écho radar à 30° sur ton tribord avant, qui se rapproche. Tu évites de…', r: ['Venir sur bâbord', 'Venir sur tribord', 'Réduire ta vitesse', 'Faire tes signaux de brume'], e: 'Règle 19 d i : pas de changement sur bâbord pour un navire sur l\'avant du travers (sauf rattrapage).', f: 'brume' },
      { q: 'Par brume, tu entends un signal de brume sur ton avant. Tu dois…', r: ['Réduire au minimum pour gouverner', 'Accélérer pour dégager', 'Venir sur bâbord', 'Ne rien changer'], e: 'Règle 19 e.', f: 'brume' },
      { q: 'Par brume, un navire à moteur doit tenir ses machines…', r: ['Prêtes à manœuvrer immédiatement', 'Arrêtées', 'À pleine puissance', 'Au ralenti obligatoire'], e: 'Règle 19 b.', f: 'brume' },
      { q: 'Secteur du feu de tête de mât ?', r: ['225°', '112,5°', '135°', '360°'], e: 'De l\'avant à 22,5° sur l\'arrière du travers de chaque bord.', f: 'feux' },
      { q: 'Secteur de chaque feu de côté ?', r: ['112,5°', '225°', '135°', '90°'], e: 'Règle 21 b.', f: 'feux' },
      { q: 'Secteur du feu de poupe ?', r: ['135°', '225°', '112,5°', '180°'], e: '67,5° de chaque bord à partir de l\'arrière.', f: 'feux' },
      { q: 'Un « feu à éclats » au sens du RIPAM a un rythme de…', r: ['120 éclats ou plus par minute', '60 éclats par minute', '30 éclats par minute', '1 éclat toutes les 5 s'], e: 'Règle 21 f.', f: 'feux' },
      { q: 'Portée minimale du feu de tête de mât d\'un navire de 60 m ?', r: ['6 milles', '5 milles', '3 milles', '2 milles'], e: '≥ 50 m : tête de mât 6, côté 3, poupe 3.', f: 'feux' },
      { q: 'Portée minimale du feu de tête de mât d\'un navire de 15 m ?', r: ['3 milles', '5 milles', '2 milles', '6 milles'], e: 'De 12 à 20 m : 3 milles (5 milles de 20 à 50 m).', f: 'feux' },
      { q: 'Portée minimale des feux de côté d\'un navire de 30 m ?', r: ['2 milles', '1 mille', '3 milles', '5 milles'], e: 'Entre 12 et 50 m : 2 milles.', f: 'feux' },
      { q: 'Les feux réglementaires se montrent…', r: ['Du coucher au lever du soleil, et de jour par visibilité réduite', 'Seulement de nuit', 'Seulement par brume', 'Toute la journée'], e: 'Règle 20.', f: 'feux' },
      { q: 'Un navire à moteur de 40 m fait route. Quels feux est-il obligé de montrer ?', r: ['1 tête de mât, feux de côté, poupe', '2 têtes de mât, feux de côté, poupe', 'Feux de côté et poupe seulement', '1 feu blanc tout horizon'], e: 'Le 2e feu de tête de mât n\'est obligatoire qu\'à partir de 50 m (mais permis avant).', f: 'feuxroute' },
      { q: 'Un voilier de 15 m sous voiles peut réunir ses feux…', r: ['Dans un fanal tricolore en tête de mât', 'Dans un feu blanc tout horizon', 'En deux feux rouges superposés', 'Il ne peut jamais les réunir'], e: 'Règle 25 b : moins de 20 m.', f: 'feuxroute' },
      { q: 'Feux rouge au-dessus de vert en tête de mât, de nuit : c\'est…', r: ['Un voilier faisant route (option)', 'Un chalutier', 'Un pilote', 'Un navire échoué'], e: 'Règle 25 c (jamais avec le tricolore).', f: 'feuxroute' },
      { q: 'Feu jaune à éclats tout horizon en plus des feux normaux ?', r: ['Aéroglisseur sans tirant d\'eau', 'Remorqueur', 'Navire de pêche', 'Navire à l\'aviron'], e: 'Règle 23 b.', f: 'feuxroute' },
      { q: 'Vert sur blanc, feux de côté et poupe : c\'est…', r: ['Un chalutier en pêche avec erre', 'Un pilote', 'Un pêcheur au filet sans erre', 'Un remorqueur'], e: '« Vert sur blanc, chalutier en pêche ».', f: 'feuxspe' },
      { q: 'Rouge sur blanc seuls : c\'est…', r: ['Un pêcheur (pas chalutier) sans erre', 'Un pilote', 'Un chalutier avec erre', 'Un NUC'], e: '« Rouge sur blanc, pêcheur au filet ».', f: 'feuxspe' },
      { q: 'Blanc sur rouge + feux de côté : c\'est…', r: ['Un bateau-pilote en service, faisant route', 'Un pêcheur au filet', 'Un navire échoué', 'Un NUC avec erre'], e: '« Blanc sur rouge, pilote à bord ».', f: 'feuxspe' },
      { q: 'Deux rouges superposés + feux de côté + poupe, pas de tête de mât : c\'est…', r: ['Un NUC avec erre', 'Un navire échoué', 'Un RAM', 'Un chalutier'], e: 'Règle 27 a.', f: 'feuxspe' },
      { q: 'Rouge-blanc-rouge seuls : c\'est…', r: ['Un navire à capacité de manœuvre restreinte sans erre', 'Un NUC', 'Un pilote', 'Un navire handicapé par son tirant d\'eau'], e: 'Règle 27 b.', f: 'feuxspe' },
      { q: 'Trois rouges superposés + feux de navire à moteur : c\'est…', r: ['Un navire handicapé par son tirant d\'eau', 'Un NUC', 'Un dragueur', 'Un navire échoué'], e: 'Règle 28.', f: 'feuxspe' },
      { q: 'Une drague montre 2 verts superposés sur un bord. Cela signifie…', r: ['Côté où l\'on peut passer', 'Côté de l\'obstruction', 'Qu\'elle est au mouillage', 'Qu\'elle pêche'], e: 'Règle 27 d : 2 rouges = obstruction ; 2 verts = passage.', f: 'feuxspe' },
      { q: 'Un navire de déminage montre trois feux verts. Distance à respecter ?', r: ['1 000 m', '500 m', '200 m', '1 mille'], e: 'Règle 27 f.', f: 'feuxspe' },
      { q: 'Feux d\'un remorqueur de 30 m, remorque de 250 m ?', r: ['3 têtes de mât superposées, côté, poupe, jaune de remorquage', '2 têtes de mât, côté, poupe, jaune', '1 tête de mât, côté, poupe', '3 rouges superposés'], e: 'Plus de 200 m : 3 feux superposés.', f: 'remorque' },
      { q: 'Où se trouve le feu jaune de remorquage ?', r: ['À la verticale au-dessus du feu de poupe', 'En tête de mât', 'À l\'avant', 'Sur la remorque'], e: 'Règle 24 a iv.', f: 'remorque' },
      { q: 'Un navire qui pousse en avant (pas d\'unité composite) montre…', r: ['2 têtes de mât, côté, poupe, sans feu jaune', '2 têtes de mât, côté, poupe et feu jaune', '3 têtes de mât', 'Seulement les feux de côté'], e: 'Règle 24 c.', f: 'remorque' },
      { q: 'Un pousseur relié rigidement à sa barge (unité composite) montre…', r: ['Les feux d\'un navire à moteur ordinaire', 'Les feux d\'un remorqueur', 'Les feux d\'un RAM', 'Aucun feu particulier sur la barge'], e: 'Règle 24 b.', f: 'remorque' },
      { q: 'Navire de 40 m au mouillage, de nuit ?', r: ['Un feu blanc tout horizon suffit', 'Deux feux blancs obligatoires', 'Deux rouges superposés', 'Feux de côté et poupe'], e: 'Règle 30 b : moins de 50 m.', f: 'mouillage' },
      { q: 'Au mouillage (≥ 50 m), le feu arrière est…', r: ['Plus bas que le feu avant', 'Plus haut que le feu avant', 'Rouge', 'Jaune'], e: 'Règle 30 a ii.', f: 'mouillage' },
      { q: 'Un navire échoué montre de jour…', r: ['3 boules superposées', '2 boules', '1 boule', 'Un cylindre'], e: 'Règle 30 d ii.', f: 'mouillage' },
      { q: 'À partir de quelle longueur un navire mouillé doit-il éclairer ses ponts ?', r: ['100 m', '50 m', '20 m', '200 m'], e: 'Règle 30 c.', f: 'mouillage' },
      { q: 'Marque de jour d\'un navire non maître de sa manœuvre ?', r: ['Deux boules', 'Trois boules', 'Un cylindre', 'Boule-bicône-boule'], e: 'Règle 27 a ii.', f: 'marques' },
      { q: 'Deux cônes réunis par la pointe ?', r: ['Navire en train de pêcher', 'Remorque de plus de 200 m', 'Voilier au moteur', 'Navire échoué'], e: 'Règle 26.', f: 'marques' },
      { q: 'Hauteur d\'une marque cylindrique ?', r: ['Le double de son diamètre', 'Égale à son diamètre', '0,6 m', '1,5 m'], e: 'Annexe I-6.', f: 'marques' },
      { q: 'Distance verticale minimale entre deux marques ?', r: ['1,5 m', '0,6 m', '1 m', '2 m'], e: 'Annexe I-6 b.', f: 'marques' },
      { q: 'Durée d\'un son prolongé ?', r: ['4 à 6 secondes', 'Environ 1 seconde', '2 secondes', '10 secondes'], e: 'Règle 32 c.', f: 'sons' },
      { q: 'À partir de quelle longueur une cloche est-elle obligatoire ?', r: ['20 m', '12 m', '50 m', '100 m'], e: 'Sifflet 12 m, cloche 20 m, gong 100 m.', f: 'sons' },
      { q: 'En vue, deux sons brefs signifient…', r: ['Je viens sur bâbord', 'Je viens sur tribord', 'Je bats en arrière', 'Je compte vous rattraper'], e: 'Règle 34 a.', f: 'sons' },
      { q: 'En vue, trois sons brefs signifient…', r: ['Je bats en arrière', 'Je viens sur bâbord', 'Doute', 'Je suis au mouillage'], e: 'Règle 34 a.', f: 'sons' },
      { q: 'Dans un chenal, « deux longs + un bref » signifie…', r: ['Je compte vous rattraper par tribord', 'Je compte vous rattraper par bâbord', 'D\'accord', 'Approche d\'un coude'], e: 'Règle 34 c i.', f: 'sons' },
      { q: 'Le navire rattrapé est d\'accord. Il émet…', r: ['Long-bref-long-bref', 'Cinq brefs', 'Un long', 'Deux longs'], e: 'Règle 34 c ii.', f: 'sons' },
      { q: 'Par brume, un voilier émet toutes les 2 minutes…', r: ['Un long + deux brefs', 'Un long', 'Deux longs', 'La cloche'], e: 'Règle 35 c.', f: 'sons' },
      { q: 'Par brume, un navire à moteur avec de l\'erre émet…', r: ['Un son prolongé toutes les 2 min au plus', 'Deux sons prolongés', 'Un long + deux brefs', 'La cloche chaque minute'], e: 'Règle 35 a.', f: 'sons' },
      { q: 'Par brume, un pêcheur au mouillage émet…', r: ['Un long + deux brefs', 'La cloche 5 s par minute', 'Rien', 'Deux longs'], e: 'Règle 35 d.', f: 'sons' },
      { q: 'Un pilote en service peut ajouter par brume un signal d\'identification de…', r: ['Quatre sons brefs', 'Trois sons brefs', 'Un long + un bref', 'Cinq sons brefs'], e: 'Règle 35 k.', f: 'sons' },
      { q: 'Lequel n\'est PAS un signal de détresse ?', r: ['Deux feux rouges superposés', 'Une fumée orange', 'Des fusées à étoiles rouges', 'Le son continu de l\'appareil de brume'], e: 'Deux rouges = NUC, pas détresse (règle 27 h).', f: 'detresse' },
      { q: 'L\'alerte de détresse ASN en VHF se fait sur…', r: ['Le canal 70', 'Le canal 16', 'Le canal 6', 'Le canal 12'], e: 'Annexe IV l : ASN sur la voie 70. (Le 16 sert à la phonie.)', f: 'detresse' },
      { q: 'Quel couple de pavillons signifie la détresse ?', r: ['N et C', 'A et B', 'O et N', 'C et O'], e: 'Annexe IV f.', f: 'pavillons' },
      { q: 'Pavillon O (Oscar) ?', r: ['Homme à la mer', 'Plongeur', 'Oui', 'Matières dangereuses'], e: 'Rouge et jaune en diagonale.', f: 'pavillons' },
      { q: 'Pavillon B (Bravo) ?', r: ['Matières dangereuses', 'Non', 'Plongeur', 'Homme à la mer'], e: 'Pavillon rouge.', f: 'pavillons' },
      { q: 'Pavillon C (Charlie) seul ?', r: ['Oui (réponse affirmative)', 'Non', 'Détresse', 'Homme à la mer'], e: 'C = oui, N = non.', f: 'pavillons' }
    ]
  });
})();
