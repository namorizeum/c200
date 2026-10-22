/* Générateurs : anglais SMCP (alphabet, nombres, marqueurs) */
(function () {
  'use strict';
  const C = window.C200, U = C.u;
  const ALPHA = { A: 'Alfa', B: 'Bravo', C: 'Charlie', D: 'Delta', E: 'Echo', F: 'Foxtrot', G: 'Golf', H: 'Hotel', I: 'India', J: 'Juliett', K: 'Kilo', L: 'Lima', M: 'Mike', N: 'November', O: 'Oscar', P: 'Papa', Q: 'Quebec', R: 'Romeo', S: 'Sierra', T: 'Tango', U: 'Uniform', V: 'Victor', W: 'Whiskey', X: 'X-ray', Y: 'Yankee', Z: 'Zulu' };
  const DIG = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const NOMS = ['GINA', 'ESTEREL', 'LERINS', 'CANNES', 'NICE', 'MARIE', 'ANTIBES', 'MENTON', 'TOULON', 'FREJUS', 'CORSICA', 'AJACCIO', 'MONACO', 'HYERES'];
  C.gen('en-alphabet', {
    titre: 'Épeler avec l\'alphabet international', desc: 'Alfa, Bravo, Charlie… pour le nom du navire.',
    make() {
      const mot = U.pick(NOMS);
      const L = U.pick(mot.split(''));
      const autres = U.shuffle(Object.values(ALPHA).filter((x) => x !== ALPHA[L])).slice(0, 3);
      return {
        q: `Tu épelles le nom du navire <b>${mot}</b> à la VHF. Comment dis-tu la lettre <b>${L}</b> ?`,
        champs: [{ type: 'choix', label: 'Code', a: ALPHA[L], options: U.shuffle([ALPHA[L], ...autres]) }],
        sol: `<p>${mot} = ${mot.split('').map((c) => '<b>' + ALPHA[c] + '</b>').join(' – ')}</p>`
      };
    }
  });
  const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const words = (n) => {
    if (n < 20) return ONES[n];
    if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : '');
    return ONES[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' and ' + words(n % 100) : '');
  };
  const dd = (str) => str.split('').map((d) => DIG[+d]).join('-');
  C.gen('en-nombres', {
    titre: 'Dire les nombres à la radio', desc: 'Chiffre par chiffre : 150 = one-five-zero.',
    make() {
      const mode = U.pick(['cap', 'dec', 'ch']);
      let txt, good, wrong;
      if (mode === 'cap') {
        const n = U.rnd(1, 359), s3 = String(n).padStart(3, '0');
        txt = 'un cap de ' + s3 + '°'; good = dd(s3) + ' degrees';
        wrong = [words(n) + ' degrees', dd(String(n)) + (n < 100 ? ' degrees' : ' degree'), 'course ' + words(n)];
        if (n >= 100) wrong[1] = dd(s3.slice(1)) + ' degrees';
      } else if (mode === 'dec') {
        const n = U.rndf(10.1, 15.9, 0.1), [a, b] = n.toFixed(1).split('.');
        txt = 'un tirant d\'eau de ' + U.fr(n, 1) + ' m'; good = dd(a) + ' decimal ' + DIG[+b] + ' metres';
        wrong = [words(+a) + ' comma ' + DIG[+b] + ' metres', dd(a) + ' ' + DIG[+b] + ' metres', words(+a) + '-' + DIG[+b] + ' metres'];
      } else {
        const n = U.pick([12, 13, 16, 67, 69, 70, 72]);
        txt = 'le canal ' + n; good = 'channel ' + dd(String(n));
        wrong = ['channel ' + words(n), 'canal ' + words(n), 'number ' + words(n)];
      }
      return {
        q: `En SMCP, comment annonces-tu ${txt} ?`,
        champs: [{ type: 'choix', label: 'Phrase', a: good, options: U.shuffle([good, ...wrong]) }],
        sol: `<p>On dit les nombres <b>chiffre par chiffre</b> ; la virgule se dit <b>decimal</b> (ou point). Un cap ou un relèvement a toujours 3 chiffres. Exception : les angles de barre (« fifteen », « twenty »).</p><p>Prononciation : 3 = TREE, 4 = FOWER, 5 = FIFE, 9 = NINER.</p>`
      };
    }
  });
  C.gen('en-marqueurs', {
    titre: 'Les marqueurs de message', desc: 'Instruction, Advice, Warning, Information, Question, Answer, Request, Intention.',
    make() {
      const M = [
        ['Instruction', 'Do not cross the fairway.', 'Une autorité (port, VTS, navire de guerre) impose une règle.'],
        ['Advice', 'Stand by on VHF channel six-nine.', 'Un conseil, à prendre en compte.'],
        ['Warning', 'Dangerous wreck in position…', 'Annonce un danger.'],
        ['Information', 'MV Gina will overtake to the west of you.', 'Simple fait observé.'],
        ['Question', 'Your present maximum draught?', 'On attend une réponse.'],
        ['Answer', 'My present maximum draught is zero-seven metres.', 'Réponse à une question, sans nouvelle question.'],
        ['Request', 'I require two tugs.', 'On demande une aide (pas pour la navigation).'],
        ['Intention', 'I will reduce my speed.', 'On annonce ce qu\'on va faire.']
      ];
      const [m, ex, e] = U.pick(M);
      return {
        q: `Quel marqueur faut-il placer devant : « <b>${ex}</b> » ?`,
        champs: [{ type: 'choix', label: 'Marqueur', a: m, options: M.map((x) => x[0]) }],
        sol: `<p><b>${m}</b> : ${e}</p>`
      };
    }
  });
})();
