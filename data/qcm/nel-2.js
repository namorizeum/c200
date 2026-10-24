/* QCM supplémentaires — Navigation électronique (2/2) : calculs (générés et vérifiés par programme) */
C200.plus('navelec', 'sondeur', [
  ["Un sondeur reçoit l'écho en 0,10 s (V = 1 500 m/s). Hauteur sous le transducteur ?", "75 m", ["150 m", "7,5 m", "300 m"], "h = V × T / 2 = 1 500 × 0,10 / 2 = 75 m."],
  ["Fond à 150 m sous le transducteur (V = 1 500 m/s). Temps aller-retour de l'écho ?", "0,200 s", ["0,100 s", "2 s", "20 s"], "T = 2 × h / V = 0,200 s."],
  ["Le sondeur affiche 12,6 m sous la quille. Tirant d'eau 4,5 m. Profondeur ?", "17,1 m", ["8,1 m", "12,6 m", "4,5 m"], "Profondeur = hauteur sous quille + tirant d'eau."],
  ["Écho en 0,06 s. Le sondeur est réglé sur 1 500 m/s mais l'eau donne 1 420 m/s. Hauteur réelle ?", "42,6 m", ["45 m", "85,2 m", "47,4 m"], "Hauteur réelle = 1 420 × 0,06 / 2 = 42,6 m (le sondeur affiche 45 m)."],
  ["Un sondeur reçoit l'écho en 0,03 s (V = 1 500 m/s). Hauteur sous le transducteur ?", "22,5 m", ["45 m", "2,2 m", "90 m"], "h = V × T / 2 = 1 500 × 0,03 / 2 = 22,5 m."],
  ["Fond à 75 m sous le transducteur (V = 1 500 m/s). Temps aller-retour de l'écho ?", "0,100 s", ["0,050 s", "1 s", "10 s"], "T = 2 × h / V = 0,100 s."],
  ["Le sondeur affiche 18,3 m sous la quille. Tirant d'eau 2,4 m. Profondeur ?", "20,7 m", ["15,9 m", "18,3 m", "2,4 m"], "Profondeur = hauteur sous quille + tirant d'eau."],
  ["Écho en 0,02 s. Le sondeur est réglé sur 1 500 m/s mais l'eau donne 1 555 m/s. Hauteur réelle ?", "15,6 m", ["15 m", "31,1 m", "14,4 m"], "Hauteur réelle = 1 555 × 0,02 / 2 = 15,6 m (le sondeur affiche 15 m)."],
  ["Un sondeur reçoit l'écho en 0,05 s (V = 1 500 m/s). Hauteur sous le transducteur ?", "37,5 m", ["75 m", "3,8 m", "150 m"], "h = V × T / 2 = 1 500 × 0,05 / 2 = 37,5 m."],
  ["Fond à 15 m sous le transducteur (V = 1 500 m/s). Temps aller-retour de l'écho ?", "0,020 s", ["0,010 s", "0,200 s", "2 s"], "T = 2 × h / V = 0,020 s."],
  ["Le sondeur affiche 3,2 m sous la quille. Tirant d'eau 1,8 m. Profondeur ?", "5 m", ["1,4 m", "3,2 m", "1,8 m"], "Profondeur = hauteur sous quille + tirant d'eau."],
  ["Écho en 0,06 s. Le sondeur est réglé sur 1 500 m/s mais l'eau donne 1 555 m/s. Hauteur réelle ?", "46,6 m", ["45 m", "93,3 m", "43,4 m"], "Hauteur réelle = 1 555 × 0,06 / 2 = 46,6 m (le sondeur affiche 45 m)."],
  ["Un sondeur reçoit l'écho en 0,40 s (V = 1 500 m/s). Hauteur sous le transducteur ?", "300 m", ["600 m", "30 m", "1200 m"], "h = V × T / 2 = 1 500 × 0,40 / 2 = 300 m."],
  ["Fond à 7,5 m sous le transducteur (V = 1 500 m/s). Temps aller-retour de l'écho ?", "0,010 s", ["0,005 s", "0,100 s", "1 s"], "T = 2 × h / V = 0,010 s."],
  ["Le sondeur affiche 18,3 m sous la quille. Tirant d'eau 1,8 m. Profondeur ?", "20,1 m", ["16,5 m", "18,3 m", "1,8 m"], "Profondeur = hauteur sous quille + tirant d'eau."],
  ["Écho en 0,02 s. Le sondeur est réglé sur 1 500 m/s mais l'eau donne 1 420 m/s. Hauteur réelle ?", "14,2 m", ["15 m", "28,4 m", "15,8 m"], "Hauteur réelle = 1 420 × 0,02 / 2 = 14,2 m (le sondeur affiche 15 m)."]
]);

C200.plus('navelec', 'gps', [
  ["Signal satellite reçu en 0,067 s (c = 300 000 km/s). Pseudodistance ?", "20 100 km", ["10 050 km", "201 000 km", "40 200 km"], "R = c × Δt = 300 000 × 0,067 = 20100 km."],
  ["Signal satellite reçu en 0,075 s (c = 300 000 km/s). Pseudodistance ?", "22 500 km", ["11 250 km", "225 000 km", "45 000 km"], "R = c × Δt = 300 000 × 0,075 = 22500 km."],
  ["Signal satellite reçu en 0,065 s (c = 300 000 km/s). Pseudodistance ?", "19 500 km", ["9 750 km", "195 000 km", "39 000 km"], "R = c × Δt = 300 000 × 0,065 = 19500 km."],
  ["Signal satellite reçu en 0,072 s (c = 300 000 km/s). Pseudodistance ?", "21 600 km", ["10 800 km", "216 000 km", "43 200 km"], "R = c × Δt = 300 000 × 0,072 = 21600 km."],
  ["Signal satellite reçu en 0,070 s (c = 300 000 km/s). Pseudodistance ?", "21 000 km", ["10 500 km", "210 000 km", "42 000 km"], "R = c × Δt = 300 000 × 0,070 = 21000 km."]
]);

C200.plus('navelec', 'gpsfonctions', [
  ["DTW 36 M, SOG 8 nd. TTG (temps restant) ?", "4 h 30", ["13 min", "5 h", "288 min"], "TTG = DTW / SOG = 4 h 30."],
  ["Il est 08 h 00. DTW 30 M, SOG 8 nd. ETA au waypoint ?", "11 h 45", ["14 h 15", "12 h 45", "04 h 15"], "TTG = 3 h 45 → ETA 11 h 45."],
  ["Le GPS affiche XTE 0,3 M L. Que comprends-tu ?", "Tu es à 0,3 M à gauche de la route : reviens à droite", ["Tu es à 0,3 M à droite de la route : reviens à gauche", "Tu es à 0,3 M du waypoint", "Ta vitesse est de 0,3 nd trop faible"], "XTE = écart traversier ; R = à droite (Right), L = à gauche (Left) de la route."],
  ["DTW 30 M, SOG 6 nd. TTG (temps restant) ?", "5 h", ["12 min", "5 h 30", "180 min"], "TTG = DTW / SOG = 5 h."],
  ["Il est 10 h 30. DTW 24 M, SOG 10 nd. ETA au waypoint ?", "12 h 54", ["14 h 30", "13 h 54", "08 h 06"], "TTG = 2 h 24 → ETA 12 h 54."],
  ["Le GPS affiche XTE 0,1 M L. Que comprends-tu ?", "Tu es à 0,1 M à gauche de la route : reviens à droite", ["Tu es à 0,1 M à droite de la route : reviens à gauche", "Tu es à 0,1 M du waypoint", "Ta vitesse est de 0,1 nd trop faible"], "XTE = écart traversier ; R = à droite (Right), L = à gauche (Left) de la route."],
  ["DTW 9 M, SOG 6 nd. TTG (temps restant) ?", "1 h 30", ["40 min", "2 h", "54 min"], "TTG = DTW / SOG = 1 h 30."],
  ["Il est 14 h 15. DTW 30 M, SOG 8 nd. ETA au waypoint ?", "18 h 00", ["20 h 30", "19 h 00", "10 h 30"], "TTG = 3 h 45 → ETA 18 h 00."],
  ["Le GPS affiche XTE 0,1 M R. Que comprends-tu ?", "Tu es à 0,1 M à droite de la route : reviens à gauche", ["Tu es à 0,1 M à gauche de la route : reviens à droite", "Tu es à 0,1 M du waypoint", "Ta vitesse est de 0,1 nd trop faible"], "XTE = écart traversier ; R = à droite (Right), L = à gauche (Left) de la route."],
  ["DTW 6 M, SOG 12 nd. TTG (temps restant) ?", "30 min", ["2 h", "1 h", "72 min"], "TTG = DTW / SOG = 30 min."]
]);

