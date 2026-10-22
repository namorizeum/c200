/* Anglais maritime (SMCP) — module P1-1 */
C200.module({
  id: 'anglais', bloc: 'P1-1', ordre: 10, court: 'ANG', titre: 'Anglais maritime',
  intro: 'Phrases normalisées de l\'OMI (SMCP) : règles générales, détresse, urgence, sécurité et soins aux passagers. Épreuve orale.',
  calculs: ['en-alphabet', 'en-nombres', 'en-marqueurs'],
  fiches: [
    {
      id: 'smcp', titre: 'Les SMCP : les règles', src: 'Cours Anglais p. 11 à 16',
      html: `<p>Les <b>SMCP</b> (Standard Marine Communication Phrases) sont adoptées par l'<b>OMI</b> en <b>2001</b> (elles remplacent le SMNV de 1977). L'anglais est la langue commune de la mer depuis 1973.</p>
<ul><li>Phrases <b>simples</b>, <b>sans ambiguïté</b>, souvent sans article ni verbe « to be » : « Sea smooth ».</li>
<li><b>Pas de synonymes</b> : abandon (pas « leave »), require (pas « need »).</li>
<li><b>Pas de formes contractées</b> : « I have » et pas « I've ».</li>
<li>Réponses <b>complètes</b> : « Yes, I require assistance. » / « No, I cannot proceed without assistance. »</li>
<li>Une phrase = une information.</li></ul>
<p>Pour demander de les utiliser : « <b>Please use IMO Standard Marine Communication Phrases.</b> » Réponse : « I will use Standard Marine Communication Phrases. »</p>
<h3>Réponses types</h3>
<div class="tw"><table><tr><th>Situation</th><th>Phrase</th></tr>
<tr><td>Info pas tout de suite disponible</td><td><b>Stand by</b> (one minute)</td></tr>
<tr><td>Info impossible à obtenir</td><td><b>No information</b></td></tr>
<tr><td>Message mal reçu</td><td><b>Say again</b> (please)</td></tr>
<tr><td>Erreur dans son message</td><td>… <b>mistake</b>. <b>Correction</b>, …</td></tr>
<tr><td>Insister</td><td>… <b>I repeat</b> …</td></tr>
<tr><td>Qualité de réception</td><td>How do you read me? — I read you <b>bad/one</b>, <b>poor/two</b>, <b>fair/three</b>, <b>good/four</b>, <b>excellent/five</b></td></tr>
<tr><td>Garder l'écoute</td><td>Stand by on VHF channel 13 — <b>Standing by</b> on channel 13</td></tr>
<tr><td>Changer de canal</td><td>Advice, change to channel 15 — <b>Changing</b> to channel 15</td></tr></table></div>`
    },
    {
      id: 'alphabet', titre: 'Alphabet, nombres, positions', src: 'Cours Anglais p. 12 à 15',
      html: `<div class="tw"><table><tr><th></th><th></th><th></th><th></th></tr>
<tr><td>A Alfa</td><td>H Hotel</td><td>O Oscar</td><td>V Victor</td></tr>
<tr><td>B Bravo</td><td>I India</td><td>P Papa</td><td>W Whiskey</td></tr>
<tr><td>C Charlie</td><td>J Juliett</td><td>Q Quebec</td><td>X X-ray</td></tr>
<tr><td>D Delta</td><td>K Kilo</td><td>R Romeo</td><td>Y Yankee</td></tr>
<tr><td>E Echo</td><td>L Lima</td><td>S Sierra</td><td>Z Zulu</td></tr>
<tr><td>F Foxtrot</td><td>M Mike</td><td>T Tango</td><td></td></tr>
<tr><td>G Golf</td><td>N November</td><td>U Uniform</td><td></td></tr></table></div>
<h3>Les nombres</h3>
<ul><li><b>Chiffre par chiffre</b> : 150 = « one-five-zero ». Virgule = « <b>decimal</b> » (2,7 = two decimal seven).</li>
<li>Prononciations : 0 ZEERO, 3 <b>TREE</b>, 4 <b>FOWER</b>, 5 <b>FIFE</b>, 8 AIT, 9 <b>NINER</b>.</li>
<li>Exception : les <b>angles de barre</b> : « fifteen », « twenty ».</li></ul>
<h3>Positions, relèvements, routes</h3>
<ul><li>Position : degrés et minutes, North/South, East/West.</li>
<li>Par rapport à un amer : « Your position bearing <b>137 degrees from</b> Big Head lighthouse, distance 2.4 nautical miles » (relèvement <b>depuis l'amer</b>).</li>
<li>Relèvements et routes : de 000 à 360 <b>vrais</b>. Gisement : « buoy 030 degrees on your <b>port bow</b> ».</li>
<li>Distances en <b>nautical miles</b>, vitesse en <b>knots</b> (speed = surface, ground speed = fond), heures en <b>UTC</b> ou local time.</li></ul>
<h3>Can, may, must</h3>
<p><b>Can</b> = capacité (I can only proceed at slow speed). <b>May</b> = permission (mieux : « Question, do I have permission to enter the fairway? »). <b>Must</b> = obligation (You must take two tugs).</p>`
    },
    {
      id: 'marqueurs', titre: 'Les 8 marqueurs de message', src: 'Cours Anglais p. 15-16',
      html: `<div class="tw"><table><tr><th>Marqueur</th><th>Sens</th><th>Exemple</th></tr>
<tr><td><b>INSTRUCTION</b></td><td>Une autorité impose (port, VTS, marine)</td><td>Instruction, do not cross the fairway.</td></tr>
<tr><td><b>ADVICE</b></td><td>Conseil (à prendre en compte)</td><td>Advice, stand by on VHF channel six-nine.</td></tr>
<tr><td><b>WARNING</b></td><td>Avertissement d'un danger</td><td>Warning, iceberg in position…</td></tr>
<tr><td><b>INFORMATION</b></td><td>Fait observé</td><td>Information, MV X will overtake to the west of you.</td></tr>
<tr><td><b>QUESTION</b></td><td>Question</td><td>Question, your present maximum draught?</td></tr>
<tr><td><b>ANSWER</b></td><td>Réponse (sans nouvelle question)</td><td>Answer, my present maximum draught is zero-seven metres.</td></tr>
<tr><td><b>REQUEST</b></td><td>Demande d'aide (pas pour la navigation)</td><td>Request, I require two tugs.</td></tr>
<tr><td><b>INTENTION</b></td><td>Ce que je vais faire</td><td>Intention, I will reduce my speed.</td></tr></table></div>`
    },
    {
      id: 'procedures', titre: 'Mayday, Pan-Pan, Sécurité', src: 'Cours Anglais p. 13, 20, 33',
      html: `<div class="tw"><table><tr><th>Mot</th><th>Priorité</th><th>Pour</th></tr>
<tr><td><b>MAYDAY</b> (× 3)</td><td>Détresse</td><td>Danger grave et imminent, besoin d'assistance immédiate</td></tr>
<tr><td><b>PAN-PAN</b> (× 3)</td><td>Urgence</td><td>Sécurité d'un navire ou d'une personne menacée, sans détresse (panne, blessé)</td></tr>
<tr><td><b>SÉCURITÉ</b> (× 3)</td><td>Sécurité</td><td>Avertissement : météo, danger pour la navigation</td></tr></table></div>
<h3>Le message de détresse (canal 16, pleine puissance)</h3>
<ol><li>MAYDAY MAYDAY MAYDAY</li><li>THIS IS + nom du navire (× 3, épelé), indicatif, <b>MMSI</b></li><li><b>MAYDAY</b> + nom du navire</li><li><b>POSITION</b></li><li><b>NATURE</b> de la détresse (fire, flooding, sinking…)</li><li><b>ASSISTANCE</b> demandée</li><li>Autres infos (nombre de personnes, intentions)</li><li><b>OVER</b></li></ol>
<p>Parler lentement et clairement. Un trafic de détresse commence toujours par la <b>position</b>. Pour imposer le silence : « <b>Seelonce Mayday</b> ». Accusé de réception : « Received MAYDAY ».</p>
<div class="retenir"><p>L'alerte <b>ASN</b> (DSC) se fait sur le <b>canal 70</b>, puis la phonie sur le <b>canal 16</b>.</p></div>`
    },
    {
      id: 'detresse', titre: 'Phrases de détresse (A1/1)', src: 'Cours Anglais p. 20 à 22',
      html: `<div class="tw"><table><tr><th>Situation</th><th>Phrases clés</th></tr>
<tr><td><b>Fire, explosion</b></td><td>I am on fire (after explosion). Fire is in engine-room / in hold / on deck. Is the fire under control? I require fire-fighting assistance / <b>breathing apparatus</b> – smoke is toxic.</td></tr>
<tr><td><b>Flooding</b> (voie d'eau)</td><td>I am flooding below waterline. I cannot control flooding. I require pumps / divers. I have dangerous list to port.</td></tr>
<tr><td><b>Collision</b></td><td>I have collided with MV … / unknown object. I have damage above/below waterline. I can only proceed at slow speed.</td></tr>
<tr><td><b>Grounding</b> (échouement)</td><td>I am aground. Aground forward / amidships / aft / full length. I expect to refloat when tide rises. I will jettison cargo to refloat.</td></tr>
<tr><td><b>List</b> (gîte)</td><td>I have dangerous list to starboard. I am in danger of capsizing.</td></tr>
<tr><td><b>Sinking</b></td><td>I am sinking after collision.</td></tr>
<tr><td><b>Disabled and adrift</b></td><td>I am not under command / adrift / drifting into danger. I require tug assistance.</td></tr>
<tr><td><b>Piracy</b></td><td>I am under attack by pirates. I require military assistance.</td></tr>
<tr><td><b>Abandoning vessel</b></td><td>I must abandon vessel after explosion.</td></tr>
<tr><td><b>Person overboard</b></td><td>I have lost person overboard in position… All vessels keep sharp look-out. Result of search negative.</td></tr></table></div>
<h3>Recherche et sauvetage (SAR) et assistance médicale</h3>
<ul><li>What is your MMSI / position / course and speed? Report number of persons on board. Report injured persons.</li>
<li>Is your EPIRB / SART transmitting? I will launch two liferafts. I will act as <b>On-Scene Co-ordinator</b>.</li>
<li>I require <b>medical assistance</b> / radio medical advice / helicopter with doctor. Do you have doctor on board?</li></ul>`
    },
    {
      id: 'urgence', titre: 'Urgence et sécurité (A1/2, A1/3)', src: 'Cours Anglais p. 25 à 28',
      html: `<h3>Urgence (PAN-PAN)</h3>
<ul><li>I am <b>not under command</b>. I have problems with engine / <b>steering gear</b> / propeller.</li>
<li>I am manoeuvring with difficulty. <b>Keep clear of me.</b> Navigate with caution.</li>
<li>I have lost dangerous goods of IMO class … I am spilling crude oil. I require oil clearance assistance.</li></ul>
<h3>Sécurité : météo</h3>
<ul><li>Wind direction north-west, force Beaufort seven. Wind expected to increase / decrease.</li>
<li>The barometer is <b>steady / dropping / rising</b>. Visibility is restricted by fog / mist / rain.</li>
<li>Sea: smooth / moderate / rough / high — swell: slight / moderate / heavy.</li>
<li>Wind <b>backing</b> (tourne en sens inverse des aiguilles) / <b>veering</b> (dans le sens des aiguilles).</li></ul>
<h3>Sécurité : navigation</h3>
<ul><li>Buoy … <b>unlit / off station / missing / damaged</b>.</li>
<li>Uncharted rock <b>reported</b> (non confirmé) / <b>located</b> (confirmé) in position…</li>
<li>Container adrift in vicinity… Small fishing boats in area, navigate with caution. Fishing gear has fouled my propeller.</li>
<li>The tide is rising / falling. My draught is … – can I enter? Wait until high water.</li></ul>
<h3>Pollution</h3>
<p>Located oil spill in position … I have accidental spillage of oil. I require floating booms / oil dispersants. Can you identify the polluter?</p>`
    },
    {
      id: 'helico', titre: 'Remorqueurs et hélicoptère', src: 'Cours Anglais p. 28-29',
      html: `<h3>Remorqueurs</h3>
<p>Must I take tugs? — Yes, you must take two tugs (according to Port Regulations). The tugs will meet you in position … Must I use the towing lines of my vessel?</p>
<h3>Hélicoptère (H = hélico, V = navire)</h3>
<ul><li>V: I require a helicopter to pick up persons / with doctor.</li>
<li>H: Are you ready for the helicopter? — V: Ready for the helicopter in five minutes.</li>
<li>H: Make identification signals. — V: I am making identification signals by smoke / searchlight / flags.</li>
<li>H: What is the relative wind direction? <b>Keep the wind on port bow.</b> Indicate the landing / pick-up area.</li>
<li>H: I will use hoist / rescue basket / rescue litter. <b>Do not fix the hoist cable.</b> Operation finished.</li></ul>`
    },
    {
      id: 'passagers', titre: 'Soins aux passagers (B4)', src: 'Cours Anglais p. 29-30',
      html: `<div class="retenir"><p><b>General emergency alarm</b> = <b>7 sons brefs + 1 long</b> : tous les passagers vont à leur <b>assembly station</b> (point de rassemblement), avec gilet et couverture.</p><p><b>Abandon ship alarm</b> = 1 long + 1 bref répétés : même conduite.</p></div>
<ul><li>Take your lifejacket and a blanket. Your lifejacket is <b>under your bed</b>.</li>
<li>Put on warm clothing, long-sleeved shirts, strong shoes and head covering. No high-heeled shoes.</li>
<li>Do not forget documents, spectacles and medicine. <b>Do not return to your cabin.</b></li>
<li>Follow the escape routes. <b>Do not use lifts.</b> Obey the instructions of the crew.</li>
<li><b>Roll call</b> : « This is a roll call » — answer loudly « Here ».</li>
<li>Lifejacket : pull it over your head, tighten the strings, tie in front.</li>
<li>In the lifeboat : enter only when ordered, clear the entrance, do not push, sit down, keep your lifejacket on, hold on to ropes when lowering. Water and food given only by the officer.</li></ul>`
    },
    {
      id: 'vocabulaire', titre: 'Vocabulaire du bord et de la météo', src: 'Cours Anglais p. 7, 31-32, 42',
      html: `<div class="tw"><table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td>Master</td><td>Capitaine</td></tr><tr><td>Chief officer / Chief mate</td><td>Second capitaine</td></tr><tr><td>Chief engineer</td><td>Chef mécanicien</td></tr><tr><td>Boatswain (bosun)</td><td>Maître d'équipage</td></tr><tr><td>Bow / stern</td><td>Avant / arrière</td></tr><tr><td>Port / starboard</td><td>Bâbord / tribord</td></tr><tr><td>Draught</td><td>Tirant d'eau</td></tr><tr><td>Trimmed by the head / by the stern</td><td>Sur le nez / sur le cul</td></tr><tr><td>Fairway</td><td>Chenal</td></tr><tr><td>Berth</td><td>Poste à quai</td></tr><tr><td>Anchorage</td><td>Mouillage</td></tr><tr><td>Lifejacket / lifebuoy / liferaft</td><td>Gilet / bouée / radeau de sauvetage</td></tr><tr><td>Breathing apparatus</td><td>Appareil respiratoire</td></tr><tr><td>Bilge pump</td><td>Pompe de cale</td></tr><tr><td>Fire door</td><td>Porte coupe-feu</td></tr><tr><td>Collision mat</td><td>Paillet d'abordage</td></tr><tr><td>High water / low water / slack water</td><td>Pleine mer / basse mer / étale</td></tr><tr><td>Flood / ebb</td><td>Flot / jusant</td></tr><tr><td>Range of tide</td><td>Marnage</td></tr><tr><td>Uncharted</td><td>Non porté sur la carte</td></tr></table></div>
<h3>Beaufort en anglais</h3>
<p>F6 <b>strong breeze</b> · F7 <b>near gale</b> · F8 <b>gale</b> · F9 <b>severe gale</b> · F10 <b>storm</b> · F11 <b>violent storm</b> · F12 <b>hurricane</b> (typhoon dans le Pacifique NW, cyclone ailleurs).</p>
<p>Mer : calm – smooth (belle) – slight (peu agitée) – moderate (agitée) – rough (forte) – very rough – high (grosse) – very high.</p>`
    }
  ],
  cartes: [
    ['Que signifie SMCP ?', 'Standard Marine Communication Phrases (OMI, 2001).', 'smcp'],
    ['Info pas tout de suite disponible : que dire ?', 'Stand by.', 'smcp'],
    ['Message mal entendu : que dire ?', 'Say again (please).', 'smcp'],
    ['Erreur dans son message : comment corriger ?', '« … mistake. Correction, … »', 'smcp'],
    ['« How do you read me? » Réponse 3/5 ?', 'I read you fair / three.', 'smcp'],
    ['Accepter de garder l\'écoute sur le 13 ?', 'Standing by on VHF channel one-three.', 'smcp'],
    ['Lettre M en alphabet international ?', 'Mike.', 'alphabet'],
    ['Lettre Q ?', 'Quebec.', 'alphabet'],
    ['Lettre Y ?', 'Yankee.', 'alphabet'],
    ['Comment prononcer 9 à la radio ?', 'NINER.', 'alphabet'],
    ['Comment dire 12,6 m ?', 'One-two decimal six metres.', 'alphabet'],
    ['Comment dire un relèvement de 045° ?', 'Zero-four-five degrees.', 'alphabet'],
    ['« Port bow » ?', 'Bâbord avant.', 'alphabet'],
    ['Marqueur pour un ordre d\'une autorité ?', 'INSTRUCTION.', 'marqueurs'],
    ['Marqueur pour annoncer un danger ?', 'WARNING.', 'marqueurs'],
    ['Marqueur pour annoncer ce qu\'on va faire ?', 'INTENTION.', 'marqueurs'],
    ['Marqueur pour demander une aide ?', 'REQUEST.', 'marqueurs'],
    ['MAYDAY, PAN-PAN, SÉCURITÉ ?', 'Détresse, urgence, sécurité.', 'procedures'],
    ['Ordre du message MAYDAY ?', 'Mayday ×3, This is (nom, indicatif, MMSI), position, nature, assistance, infos, over.', 'procedures'],
    ['Comment imposer le silence radio en détresse ?', 'Seelonce Mayday.', 'procedures'],
    ['« I am flooding below waterline » ?', 'J\'ai une voie d\'eau sous la flottaison.', 'detresse'],
    ['« I am aground » ?', 'Je suis échoué.', 'detresse'],
    ['« I have dangerous list to port » ?', 'J\'ai une gîte dangereuse sur bâbord.', 'detresse'],
    ['« Not under command » ?', 'Non maître de sa manœuvre.', 'detresse'],
    ['« Breathing apparatus » ?', 'Appareil respiratoire.', 'detresse'],
    ['« Person overboard » ?', 'Homme à la mer.', 'detresse'],
    ['« Keep clear of me » ?', 'Écartez-vous de moi.', 'urgence'],
    ['« Steering gear » ?', 'Appareil à gouverner.', 'urgence'],
    ['Différence « reported » / « located » ?', 'Reported : non confirmé. Located : confirmé.', 'urgence'],
    ['« Wind veering » ?', 'Le vent tourne dans le sens des aiguilles d\'une montre (backing : sens inverse).', 'urgence'],
    ['« Buoy off station » ?', 'Bouée déplacée (pas à sa position).', 'urgence'],
    ['« Do not fix the hoist cable » ?', 'Ne fixez pas le câble du treuil (de l\'hélicoptère).', 'helico'],
    ['General emergency alarm ?', '7 sons brefs + 1 long : aller au point de rassemblement avec gilet et couverture.', 'passagers'],
    ['« Assembly station » ?', 'Point de rassemblement.', 'passagers'],
    ['« Roll call » ?', 'Appel nominal (on répond « Here »).', 'passagers'],
    ['« Do not use lifts » ?', 'N\'utilisez pas les ascenseurs.', 'passagers'],
    ['Force 7 en anglais ?', 'Near gale.', 'vocabulaire'],
    ['Force 8 en anglais ?', 'Gale.', 'vocabulaire'],
    ['« Draught » ?', 'Tirant d\'eau.', 'vocabulaire'],
    ['« Fairway » ?', 'Chenal.', 'vocabulaire'],
    ['« Boatswain / bosun » ?', 'Maître d\'équipage.', 'vocabulaire'],
    ['« Slack water » ?', 'Étale.', 'vocabulaire'],
    ['« Uncharted » ?', 'Non porté sur la carte.', 'vocabulaire']
  ],
  qcm: [
    { q: 'En SMCP, on évite…', r: ['Les formes contractées (I\'ve)', 'Les phrases courtes', 'L\'alphabet international', 'Les nombres'], e: 'On dit « I have ».', f: 'smcp' },
    { q: '« Do you require assistance? » La bonne réponse est…', r: ['Yes, I require assistance.', 'Yes.', 'Yep, sure.', 'I need help.'], e: 'Réponse complète obligatoire.', f: 'smcp' },
    { q: 'Tu n\'as pas compris le message. Tu dis…', r: ['Say again', 'Repeat after me', 'What?', 'Stand by'], e: '', f: 'smcp' },
    { q: 'Tu t\'es trompé de vitesse. Tu dis…', r: ['« … mistake. Correction, my speed is 12 knots »', '« Sorry, 12 knots »', '« Error, error »', '« Forget it »'], e: 'Mistake, puis Correction.', f: 'smcp' },
    { q: 'Ton correspondant te reçoit « good ». Sur 5, c\'est…', r: ['4', '3', '5', '2'], e: 'Bad 1, poor 2, fair 3, good 4, excellent 5.', f: 'smcp' },
    { q: 'La lettre W se dit…', r: ['Whiskey', 'William', 'Water', 'Wind'], e: '', f: 'alphabet' },
    { q: 'La lettre J se dit…', r: ['Juliett', 'Jack', 'Japan', 'Jupiter'], e: '', f: 'alphabet' },
    { q: 'Comment annoncer le cap 150° ?', r: ['One-five-zero degrees', 'One hundred and fifty degrees', 'Fifteen-zero degrees', 'One-fifty degrees'], e: 'Chiffre par chiffre.', f: 'alphabet' },
    { q: 'Quelle exception à la règle « chiffre par chiffre » ?', r: ['Les angles de barre (fifteen, twenty)', 'Les caps', 'Les canaux VHF', 'Les positions'], e: 'Cours p. 14.', f: 'alphabet' },
    { q: '« Your position bearing 137 degrees from Big Head lighthouse » : le relèvement est pris…', r: ['Depuis le phare vers toi', 'Depuis toi vers le phare', 'Magnétique', 'En gisement'], e: 'Relèvement vrai depuis l\'amer.', f: 'alphabet' },
    { q: 'Pour demander une permission en SMCP, le mieux est…', r: ['« Question, do I have permission to… »', '« May I… »', '« Can I… »', '« Please let me… »'], e: 'Cours p. 15.', f: 'alphabet' },
    { q: '« I will reduce my speed » doit être précédé de…', r: ['INTENTION', 'INSTRUCTION', 'WARNING', 'REQUEST'], e: 'On annonce ce qu\'on va faire.', f: 'marqueurs' },
    { q: 'Le VTS dit « … do not cross the fairway ». Quel marqueur ?', r: ['INSTRUCTION', 'ADVICE', 'INFORMATION', 'QUESTION'], e: 'Une autorité impose.', f: 'marqueurs' },
    { q: '« Dangerous wreck in position… » se précède de…', r: ['WARNING', 'ADVICE', 'ANSWER', 'INTENTION'], e: 'Danger.', f: 'marqueurs' },
    { q: 'Le marqueur REQUEST ne doit pas servir…', r: ['Pour la navigation', 'Pour demander des remorqueurs', 'Pour demander de l\'aide', 'Pour un médecin'], e: 'Cours p. 16.', f: 'marqueurs' },
    { q: 'Panne de moteur sans danger immédiat pour la vie. Tu lances…', r: ['PAN-PAN', 'MAYDAY', 'SÉCURITÉ', 'Seelonce'], e: 'Urgence, pas détresse.', f: 'procedures' },
    { q: 'Un avis de coup de vent est un message…', r: ['SÉCURITÉ', 'MAYDAY', 'PAN-PAN', 'ROUTINE'], e: '', f: 'procedures' },
    { q: 'Par quoi commence le contenu d\'un message de détresse (après l\'identité) ?', r: ['La position', 'Le nombre de passagers', 'La météo', 'Le port de destination'], e: 'Position, nature, assistance.', f: 'procedures' },
    { q: '« Seelonce Mayday » veut dire…', r: ['Silence : trafic de détresse en cours', 'Fin de la détresse', 'Répétez le mayday', 'Mayday annulé'], e: 'Imposé aux stations qui gênent.', f: 'procedures' },
    { q: '« I am flooding below waterline » signifie…', r: ['J\'ai une voie d\'eau sous la flottaison', 'J\'ai un incendie', 'Je suis échoué', 'Je dérive'], e: '', f: 'detresse' },
    { q: '« Aground amidships » ?', r: ['Échoué au milieu', 'Échoué à l\'avant', 'Échoué à l\'arrière', 'Échoué sur toute la longueur'], e: 'Forward / amidships / aft / full length.', f: 'detresse' },
    { q: '« I have dangerous list to starboard » ?', r: ['J\'ai une gîte dangereuse sur tribord', 'J\'ai une liste de dangers', 'Je coule par tribord', 'J\'ai un homme à la mer à tribord'], e: 'List = gîte.', f: 'detresse' },
    { q: 'En cas d\'incendie avec fumée toxique, tu demandes…', r: ['Breathing apparatus', 'Life jackets', 'Tugs', 'Divers'], e: 'Appareils respiratoires.', f: 'detresse' },
    { q: '« Keep clear of me » veut dire…', r: ['Écartez-vous de moi', 'Gardez-moi en vue', 'Restez près de moi', 'Gardez l\'écoute'], e: '', f: 'urgence' },
    { q: 'Un rocher non porté sur la carte, position confirmée par un levé :', r: ['Uncharted rock located', 'Uncharted rock reported', 'Charted rock reported', 'Rock missing'], e: 'Reported = non confirmé.', f: 'urgence' },
    { q: '« The barometer is dropping rapidly » ?', r: ['Le baromètre baisse vite', 'Le baromètre est stable', 'Le baromètre monte vite', 'Le baromètre est cassé'], e: '', f: 'urgence' },
    { q: 'L\'hélicoptère dit « keep the wind on port bow ». Tu mets le vent…', r: ['Sur l\'avant bâbord', 'Sur l\'arrière tribord', 'Par le travers', 'Droit derrière'], e: 'Bow = avant ; quarter = arrière.', f: 'helico' },
    { q: 'L\'alarme générale d\'urgence à bord est…', r: ['7 sons brefs + 1 long', '1 long + 1 bref répétés', '5 sons brefs', '3 longs'], e: 'Tous au point de rassemblement.', f: 'passagers' },
    { q: 'Les passagers ne doivent pas…', r: ['Retourner en cabine chercher leurs affaires', 'Prendre leur gilet', 'Mettre des vêtements chauds', 'Suivre l\'équipage'], e: 'Do not return to your cabin.', f: 'passagers' },
    { q: '« Gale » correspond à la force…', r: ['8', '7', '9', '10'], e: 'Near gale 7, gale 8, severe gale 9.', f: 'vocabulaire' },
    { q: '« Trimmed by the head » ?', r: ['Sur le nez (enfoncé de l\'avant)', 'Sur le cul', 'Gîté', 'Échoué'], e: '', f: 'vocabulaire' },
    { q: '« Ebb » ?', r: ['Le jusant (marée descendante)', 'Le flot', 'L\'étale', 'Le marnage'], e: 'Flood = flot.', f: 'vocabulaire' }
  ]
});
