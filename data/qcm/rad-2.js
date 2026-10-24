/* QCM supplémentaires — Radar (2/2) : calculs et cinématique (générés et vérifiés par programme) */
C200.plus('radar', 'principe', [
  ["Un écho revient 30 µs après l'émission. Distance de la cible ?", "4 500 m", ["9 000 m", "2 250 m", "45 000 m"], "d = c × t / 2 = 300 m/µs × 30 / 2 = 4 500 m."],
  ["Cible à 3 milles. Temps aller-retour de l'impulsion (environ) ?", "37 µs", ["18,5 µs", "74,1 µs", "37040 µs"], "t = 2 × d / c = 2 × 5 556 / 300 ≈ 37 µs (environ 12,35 µs par mille)."],
  ["Durée d'impulsion 0,05 µs. Distance minimale de détection (théorique) ?", "7,5 m", ["15 m", "0,8 m", "75 m"], "Distance minimale ≈ 150 × durée d'impulsion (µs)."],
  ["Un écho revient 80 µs après l'émission. Distance de la cible ?", "12 000 m", ["24 000 m", "6 000 m", "120 000 m"], "d = c × t / 2 = 300 m/µs × 80 / 2 = 12 000 m."],
  ["Cible à 2 milles. Temps aller-retour de l'impulsion (environ) ?", "24,7 µs", ["12,3 µs", "49,4 µs", "24693,3 µs"], "t = 2 × d / c = 2 × 3 704 / 300 ≈ 24,7 µs (environ 12,35 µs par mille)."],
  ["Durée d'impulsion 0,10 µs. Distance minimale de détection (théorique) ?", "15 m", ["30 m", "1,5 m", "150 m"], "Distance minimale ≈ 150 × durée d'impulsion (µs)."],
  ["Un écho revient 8 µs après l'émission. Distance de la cible ?", "1 200 m", ["2 400 m", "600 m", "12 000 m"], "d = c × t / 2 = 300 m/µs × 8 / 2 = 1 200 m."],
  ["Cible à 6 milles. Temps aller-retour de l'impulsion (environ) ?", "74,1 µs", ["37 µs", "148,2 µs", "74080 µs"], "t = 2 × d / c = 2 × 11 112 / 300 ≈ 74,1 µs (environ 12,35 µs par mille)."],
  ["Durée d'impulsion 0,25 µs. Distance minimale de détection (théorique) ?", "37,5 m", ["75 m", "3,8 m", "375 m"], "Distance minimale ≈ 150 × durée d'impulsion (µs)."],
  ["Un écho revient 60 µs après l'émission. Distance de la cible ?", "9 000 m", ["18 000 m", "4 500 m", "90 000 m"], "d = c × t / 2 = 300 m/µs × 60 / 2 = 9 000 m."],
  ["Cible à 12 milles. Temps aller-retour de l'impulsion (environ) ?", "148,2 µs", ["74,1 µs", "296,3 µs", "148160 µs"], "t = 2 × d / c = 2 × 22 224 / 300 ≈ 148,2 µs (environ 12,35 µs par mille)."],
  ["Durée d'impulsion 0,08 µs. Distance minimale de détection (théorique) ?", "12 m", ["24 m", "1,2 m", "120 m"], "Distance minimale ≈ 150 × durée d'impulsion (µs)."]
]);

C200.plus('radar', 'portee', [
  ["Antenne radar à 16 m, cible haute de 4 m. Portée radar théorique ?", "13,2 M", ["12,6 M", "9,8 M", "6 M"], "P ≈ 2,2 × (√16 + √4) = 2,2 × 6 = 13,2 M."],
  ["La distance d'une cible est multipliée par 4. L'écho reçu est divisé par…", "256", ["16", "4", "64"], "L'écho varie comme 1/d⁴ : 4⁴ = 256."],
  ["On double la puissance d'émission. La portée augmente d'environ…", "20 %", ["100 %", "50 %", "Rien"], "La portée varie comme la racine 4e de la puissance : 2^(1/4) ≈ 1,19."],
  ["Antenne radar à 36 m, cible haute de 16 m. Portée radar théorique ?", "22 M", ["21 M", "15,9 M", "10 M"], "P ≈ 2,2 × (√36 + √16) = 2,2 × 10 = 22 M."],
  ["La distance d'une cible est multipliée par 2. L'écho reçu est divisé par…", "16", ["4", "2", "8"], "L'écho varie comme 1/d⁴ : 2⁴ = 16."],
  ["Pour doubler la portée radar, il faudrait multiplier la puissance par…", "16", ["2", "4", "8"], "Portée ∝ puissance^(1/4) : 2⁴ = 16."],
  ["Antenne radar à 16 m, cible haute de 36 m. Portée radar théorique ?", "22 M", ["21 M", "15,9 M", "10 M"], "P ≈ 2,2 × (√16 + √36) = 2,2 × 10 = 22 M."],
  ["La distance d'une cible est multipliée par 3. L'écho reçu est divisé par…", "81", ["9", "3", "27"], "L'écho varie comme 1/d⁴ : 3⁴ = 81."]
]);

C200.plus('radar', 'cinematique', [
  ["Pointage : l'écho a parcouru 2 M (mouvement relatif) en 12 min. Vitesse relative ?", "10 nd", ["24 nd", "5 nd", "20 nd"], "En 12 min, on multiplie par 5."],
  ["Il est 10 h 00. Le CPA est encore à 3 M le long du mouvement relatif, vitesse relative 10 nd. TCPA ?", "10 h 18", ["10 h 03", "10 h 36", "10 h 30"], "Temps = 3 / 10 h = 18 min."],
  ["10h00 : écho au 275° à 8 M. 10h06 : au 275° à 6,5 M. Que conclure ?", "Risque d'abordage (CPA 0), vitesse relative 15 nd", ["Aucun risque, vitesse relative 15 nd", "Risque d'abordage, vitesse relative 1,5 nd", "L'écho s'éloigne"], "Relèvement constant et distance qui diminue = risque d'abordage ; TCPA ≈ 10 h 32."],
  ["Ton navire : route 090°, 10 nd. Mouvement relatif d'un écho : 000° à 20 nd. Route et vitesse vraies de l'écho ?", "027° à 22,4 nd", ["333° à 22,4 nd", "000° à 20 nd", "090° à 22,4 nd"], "Vrai (écho) = Relatif + Ton vecteur (addition de vecteurs)."],
  ["Écho au 180° à 10 M, mouvement relatif vers le 330°. CPA ?", "5 M", ["8,7 M", "10 M", "6,5 M"], "L'écart entre la ligne vers toi et le mouvement relatif est de 30° : CPA = 10 × sin 30° = 5 M."],
  ["Ton navire : route 270°, 12 nd. Un écho a un mouvement relatif 090° à 12 nd. L'écho est…", "Immobile (bouée, navire stoppé ou au mouillage)", ["Rapide, en route opposée", "Sur ta route à la même vitesse", "En rattrapage"], "Relatif = vrai − ton vecteur : un objet fixe glisse à l'inverse de ta route, à ta vitesse."],
  ["Pointage : l'écho a parcouru 0,5 M (mouvement relatif) en 12 min. Vitesse relative ?", "2,5 nd", ["6 nd", "1,2 nd", "5 nd"], "En 12 min, on multiplie par 5."],
  ["Il est 14 h 12. Le CPA est encore à 2 M le long du mouvement relatif, vitesse relative 24 nd. TCPA ?", "14 h 17", ["14 h 24", "14 h 22", "15 h 00"], "Temps = 2 / 24 h = 5 min."],
  ["10h00 : écho au 220° à 6 M. 10h06 : au 220° à 4,5 M. Que conclure ?", "Risque d'abordage (CPA 0), vitesse relative 15 nd", ["Aucun risque, vitesse relative 15 nd", "Risque d'abordage, vitesse relative 1,5 nd", "L'écho s'éloigne"], "Relèvement constant et distance qui diminue = risque d'abordage ; TCPA ≈ 10 h 24."],
  ["Ton navire : route 090°, 10 nd. Mouvement relatif d'un écho : 135° à 8 nd. Route et vitesse vraies de l'écho ?", "110° à 16,6 nd", ["218° à 7,1 nd", "135° à 8 nd", "090° à 16,6 nd"], "Vrai (écho) = Relatif + Ton vecteur (addition de vecteurs)."],
  ["Écho au 140° à 8 M, mouvement relatif vers le 260°. CPA ?", "6,9 M", ["4 M", "8 M", "8,4 M"], "L'écart entre la ligne vers toi et le mouvement relatif est de 60° : CPA = 8 × sin 60° = 6,9 M."],
  ["Ton navire : route 000°, 12 nd. Un écho a un mouvement relatif 180° à 12 nd. L'écho est…", "Immobile (bouée, navire stoppé ou au mouillage)", ["Rapide, en route opposée", "Sur ta route à la même vitesse", "En rattrapage"], "Relatif = vrai − ton vecteur : un objet fixe glisse à l'inverse de ta route, à ta vitesse."],
  ["Pointage : l'écho a parcouru 1,2 M (mouvement relatif) en 6 min. Vitesse relative ?", "12 nd", ["7,2 nd", "6 nd", "24 nd"], "En 6 min, on multiplie par 10."],
  ["Il est 14 h 12. Le CPA est encore à 6 M le long du mouvement relatif, vitesse relative 24 nd. TCPA ?", "14 h 27", ["14 h 16", "14 h 42", "16 h 36"], "Temps = 6 / 24 h = 15 min."],
  ["10h00 : écho au 290° à 8 M. 10h06 : au 290° à 7 M. Que conclure ?", "Risque d'abordage (CPA 0), vitesse relative 10 nd", ["Aucun risque, vitesse relative 10 nd", "Risque d'abordage, vitesse relative 1 nd", "L'écho s'éloigne"], "Relèvement constant et distance qui diminue = risque d'abordage ; TCPA ≈ 10 h 48."],
  ["Ton navire : route 180°, 12 nd. Mouvement relatif d'un écho : 270° à 16 nd. Route et vitesse vraies de l'écho ?", "233° à 20 nd", ["307° à 20 nd", "270° à 16 nd", "180° à 20 nd"], "Vrai (écho) = Relatif + Ton vecteur (addition de vecteurs)."],
  ["Écho au 320° à 10 M, mouvement relatif vers le 080°. CPA ?", "8,7 M", ["5 M", "10 M", "10,2 M"], "L'écart entre la ligne vers toi et le mouvement relatif est de 60° : CPA = 10 × sin 60° = 8,7 M."],
  ["Ton navire : route 000°, 14 nd. Un écho garde la même position à l'écran (relatif nul). L'écho…", "Fait la même route que toi à 14 nd", ["Est immobile", "Vient en sens inverse", "Est un faux écho certain"], "Mouvement relatif nul : même route, même vitesse."],
  ["Pointage : l'écho a parcouru 1,5 M (mouvement relatif) en 12 min. Vitesse relative ?", "7,5 nd", ["18 nd", "3,8 nd", "15 nd"], "En 12 min, on multiplie par 5."],
  ["Il est 14 h 12. Le CPA est encore à 3 M le long du mouvement relatif, vitesse relative 12 nd. TCPA ?", "14 h 27", ["14 h 16", "14 h 42", "14 h 48"], "Temps = 3 / 12 h = 15 min."],
  ["10h00 : écho au 200° à 10 M. 10h06 : au 200° à 9 M. Que conclure ?", "Risque d'abordage (CPA 0), vitesse relative 10 nd", ["Aucun risque, vitesse relative 10 nd", "Risque d'abordage, vitesse relative 1 nd", "L'écho s'éloigne"], "Relèvement constant et distance qui diminue = risque d'abordage ; TCPA ≈ 11 h 00."],
  ["Ton navire : route 270°, 15 nd. Mouvement relatif d'un écho : 315° à 20 nd. Route et vitesse vraies de l'écho ?", "296° à 32,4 nd", ["003° à 14,2 nd", "315° à 20 nd", "270° à 32,4 nd"], "Vrai (écho) = Relatif + Ton vecteur (addition de vecteurs)."],
  ["Écho au 040° à 6 M, mouvement relatif vers le 160°. CPA ?", "5,2 M", ["3 M", "6 M", "6,7 M"], "L'écart entre la ligne vers toi et le mouvement relatif est de 60° : CPA = 6 × sin 60° = 5,2 M."],
  ["Ton navire : route 090°, 10 nd. Un écho garde la même position à l'écran (relatif nul). L'écho…", "Fait la même route que toi à 10 nd", ["Est immobile", "Vient en sens inverse", "Est un faux écho certain"], "Mouvement relatif nul : même route, même vitesse."]
]);

C200.plus('radar', 'navigation', [
  ["Au radar, un cap remarquable est au 165° à 1,5 M. Où es-tu par rapport à lui ?", "Dans son 345° à 1,5 M", ["Dans son 165° à 1,5 M", "Dans son 255° à 1,5 M", "Dans son 345° à 3 M"], "On trace le relèvement inverse (Zv ± 180°) depuis l'amer, et la distance."],
  ["Au radar, un cap remarquable est au 345° à 1,5 M. Où es-tu par rapport à lui ?", "Dans son 165° à 1,5 M", ["Dans son 345° à 1,5 M", "Dans son 075° à 1,5 M", "Dans son 165° à 3 M"], "On trace le relèvement inverse (Zv ± 180°) depuis l'amer, et la distance."],
  ["Au radar, un cap remarquable est au 225° à 3 M. Où es-tu par rapport à lui ?", "Dans son 045° à 3 M", ["Dans son 225° à 3 M", "Dans son 315° à 3 M", "Dans son 045° à 6 M"], "On trace le relèvement inverse (Zv ± 180°) depuis l'amer, et la distance."],
  ["Au radar, un cap remarquable est au 090° à 2,5 M. Où es-tu par rapport à lui ?", "Dans son 270° à 2,5 M", ["Dans son 090° à 2,5 M", "Dans son 180° à 2,5 M", "Dans son 270° à 5 M"], "On trace le relèvement inverse (Zv ± 180°) depuis l'amer, et la distance."],
  ["Au radar, un cap remarquable est au 320° à 1,5 M. Où es-tu par rapport à lui ?", "Dans son 140° à 1,5 M", ["Dans son 320° à 1,5 M", "Dans son 050° à 1,5 M", "Dans son 140° à 3 M"], "On trace le relèvement inverse (Zv ± 180°) depuis l'amer, et la distance."],
  ["Au radar, un cap remarquable est au 315° à 5 M. Où es-tu par rapport à lui ?", "Dans son 135° à 5 M", ["Dans son 315° à 5 M", "Dans son 045° à 5 M", "Dans son 135° à 10 M"], "On trace le relèvement inverse (Zv ± 180°) depuis l'amer, et la distance."]
]);

