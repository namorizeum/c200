/* QCM supplémentaires — Météo (3/3) : calculs et conversions (générés et vérifiés par programme) */
C200.plus('meteo', 'vent', [
  ["Vent de 61 nœuds : force Beaufort ?", "11 (violente tempête)", ["9 (fort coup de vent)", "10 (tempête)", "12 (ouragan)"], "Force 11 = 56-63 nd."],
  ["Force 5 (bonne brise) : vitesse du vent ?", "17-21 nd", ["11-16 nd", "22-27 nd", "7-10 nd"], "Échelle de Beaufort."],
  ["Nom de la force 4 ?", "Jolie brise", ["Petite brise", "Très légère brise", "Grand frais"], "Force 4 = 11-16 nd."],
  ["Flèche de vent : 1 triangle, 2 barbes. Vitesse ?", "70 nd", ["75 nd", "35 nd", "65 nd"], "Barbule = 5 nd, barbe = 10 nd, triangle = 50 nd."],
  ["Hémisphère Nord, vent du NW. Où est la dépression ?", "Vers le NE (à droite face au vent)", ["Vers le SW", "Vers le NW", "Vers le SE"], "Buys-Ballot : face au vent, la dépression est à droite."],
  ["Vent de 20 m/s : environ combien de nœuds ?", "40 nd", ["20 nd", "10 nd", "80 nd"], "1 m/s ≈ 2 nœuds."],
  ["Vent de 56 nœuds : force Beaufort ?", "11 (violente tempête)", ["10 (tempête)", "12 (ouragan)", "9 (fort coup de vent)"], "Force 11 = 56-63 nd."],
  ["Force 4 (jolie brise) : vitesse du vent ?", "11-16 nd", ["7-10 nd", "17-21 nd", "4-6 nd"], "Échelle de Beaufort."],
  ["Nom de la force 2 ?", "Légère brise", ["Tempête", "Jolie brise", "Bonne brise"], "Force 2 = 4-6 nd."],
  ["Flèche de vent : 4 barbes. Vitesse ?", "40 nd", ["45 nd", "20 nd", "35 nd"], "Barbule = 5 nd, barbe = 10 nd, triangle = 50 nd."],
  ["Hémisphère Nord, vent du NE. Où est la dépression ?", "Vers le SE (à droite face au vent)", ["Vers le NW", "Vers le NE", "Vers le SW"], "Buys-Ballot : face au vent, la dépression est à droite."],
  ["Vent de 25 m/s : environ combien de nœuds ?", "50 nd", ["25 nd", "12 nd", "100 nd"], "1 m/s ≈ 2 nœuds."],
  ["Vent de 36 nœuds : force Beaufort ?", "8 (coup de vent)", ["6 (vent frais)", "9 (fort coup de vent)", "10 (tempête)"], "Force 8 = 34-40 nd."],
  ["Force 6 (vent frais) : vitesse du vent ?", "22-27 nd", ["17-21 nd", "28-33 nd", "11-16 nd"], "Échelle de Beaufort."],
  ["Nom de la force 3 ?", "Petite brise", ["Coup de vent", "Bonne brise", "Grand frais"], "Force 3 = 7-10 nd."],
  ["Flèche de vent : 5 barbes. Vitesse ?", "50 nd", ["55 nd", "25 nd", "45 nd"], "Barbule = 5 nd, barbe = 10 nd, triangle = 50 nd."],
  ["Hémisphère Nord, vent du SE. Où est la dépression ?", "Vers le SW (à droite face au vent)", ["Vers le NE", "Vers le SE", "Vers le NW"], "Buys-Ballot : face au vent, la dépression est à droite."],
  ["Vent de 12 m/s : environ combien de nœuds ?", "24 nd", ["12 nd", "6 nd", "48 nd"], "1 m/s ≈ 2 nœuds."],
  ["Vent de 10 nœuds : force Beaufort ?", "3 (petite brise)", ["2 (légère brise)", "4 (jolie brise)", "1 (très légère brise)"], "Force 3 = 7-10 nd."],
  ["Force 10 (tempête) : vitesse du vent ?", "48-55 nd", ["41-47 nd", "56-63 nd", "34-40 nd"], "Échelle de Beaufort."],
  ["Nom de la force 11 ?", "Violente tempête", ["Tempête", "Bonne brise", "Coup de vent"], "Force 11 = 56-63 nd."],
  ["Flèche de vent : 3 barbes et 1 barbule. Vitesse ?", "35 nd", ["40 nd", "17 nd", "30 nd"], "Barbule = 5 nd, barbe = 10 nd, triangle = 50 nd."],
  ["Hémisphère Nord, vent du SW. Où est la dépression ?", "Vers le NW (à droite face au vent)", ["Vers le SE", "Vers le SW", "Vers le NE"], "Buys-Ballot : face au vent, la dépression est à droite."],
  ["Vent de 8 m/s : environ combien de nœuds ?", "16 nd", ["8 nd", "4 nd", "32 nd"], "1 m/s ≈ 2 nœuds."],
  ["Vent de 53 nœuds : force Beaufort ?", "10 (tempête)", ["12 (ouragan)", "8 (coup de vent)", "11 (violente tempête)"], "Force 10 = 48-55 nd."],
  ["Force 7 (grand frais) : vitesse du vent ?", "28-33 nd", ["22-27 nd", "34-40 nd", "17-21 nd"], "Échelle de Beaufort."]
]);
C200.plus('meteo', 'pression', [
  ["Le baromètre perd 12 hPa en 3 heures. On prévoit…", "Violente tempête, ouragan", ["Aggravation possible", "Coup de vent", "Fort coup de vent à tempête"], "Tendance sur 3 h : −2/−3 aggravation possible ; −4/−5 coup de vent ; −6 à −9 fort coup de vent à tempête ; −10 à −15 violente tempête."],
  ["Baromètre à 24 m au-dessus de la mer : il lit 1004 hPa. Pression au niveau de la mer ?", "1007 hPa", ["1001 hPa", "1004 hPa", "1028 hPa"], "La pression diminue d'environ 1 hPa tous les 8 m : on ajoute."],
  ["En 24 h, la pression baisse de 18 hPa. Cela annonce…", "Une aggravation durable", ["Une amélioration durable", "Aucun changement", "Une marée exceptionnelle"], "Sur 24 h : ±15 hPa = changement durable."],
  ["Le baromètre perd 5 hPa en 3 heures. On prévoit…", "Coup de vent", ["Aggravation possible", "Fort coup de vent à tempête", "Violente tempête, ouragan"], "Tendance sur 3 h : −2/−3 aggravation possible ; −4/−5 coup de vent ; −6 à −9 fort coup de vent à tempête ; −10 à −15 violente tempête."],
  ["Baromètre à 16 m au-dessus de la mer : il lit 1012 hPa. Pression au niveau de la mer ?", "1014 hPa", ["1010 hPa", "1012 hPa", "1028 hPa"], "La pression diminue d'environ 1 hPa tous les 8 m : on ajoute."],
  ["En 24 h, la pression monte de 18 hPa. Cela annonce…", "Une amélioration durable", ["Une aggravation durable", "Aucun changement", "Une marée exceptionnelle"], "Sur 24 h : ±15 hPa = changement durable."],
  ["Le baromètre perd 3 hPa en 3 heures. On prévoit…", "Aggravation possible", ["Coup de vent", "Fort coup de vent à tempête", "Violente tempête, ouragan"], "Tendance sur 3 h : −2/−3 aggravation possible ; −4/−5 coup de vent ; −6 à −9 fort coup de vent à tempête ; −10 à −15 violente tempête."],
  ["Baromètre à 24 m au-dessus de la mer : il lit 1010 hPa. Pression au niveau de la mer ?", "1013 hPa", ["1007 hPa", "1010 hPa", "1034 hPa"], "La pression diminue d'environ 1 hPa tous les 8 m : on ajoute."],
  ["En 24 h, la pression baisse de 15 hPa. Cela annonce…", "Une aggravation durable", ["Une amélioration durable", "Aucun changement", "Une marée exceptionnelle"], "Sur 24 h : ±15 hPa = changement durable."],
  ["Le baromètre perd 2 hPa en 3 heures. On prévoit…", "Aggravation possible", ["Coup de vent", "Fort coup de vent à tempête", "Violente tempête, ouragan"], "Tendance sur 3 h : −2/−3 aggravation possible ; −4/−5 coup de vent ; −6 à −9 fort coup de vent à tempête ; −10 à −15 violente tempête."]
]);
C200.plus('meteo', 'humidite', [
  ["25 °C en degrés Fahrenheit ?", "77 °F", ["57 °F", "-3,9 °F", "50 °F"], "°F = °C × 9/5 + 32."],
  ["35 °C en degrés Fahrenheit ?", "95 °F", ["67 °F", "1,7 °F", "70 °F"], "°F = °C × 9/5 + 32."],
  ["30 °C en degrés Fahrenheit ?", "86 °F", ["62 °F", "-1,1 °F", "60 °F"], "°F = °C × 9/5 + 32."],
  ["20 °C en degrés Fahrenheit ?", "68 °F", ["52 °F", "-6,7 °F", "40 °F"], "°F = °C × 9/5 + 32."],
  ["10 °C en degrés Fahrenheit ?", "50 °F", ["42 °F", "-12,2 °F", "20 °F"], "°F = °C × 9/5 + 32."],
  ["40 °C en degrés Fahrenheit ?", "104 °F", ["72 °F", "4,4 °F", "80 °F"], "°F = °C × 9/5 + 32."]
]);
C200.plus('meteo', 'mer', [
  ["Hauteur significative annoncée 1,5 m. Vagues maximales probables ?", "Environ 3 m", ["Environ 1,5 m", "Environ 0,8 m", "Environ 6 m"], "Les vagues maximales peuvent atteindre 2 × H1/3."],
  ["Houle de longueur 100 m. Elle commence à « sentir » le fond vers…", "50 m de profondeur", ["100 m", "200 m", "10 m"], "Quand la profondeur est inférieure à la moitié de la longueur d'onde."],
  ["Vague de 4 m de haut et 40 m de long. Cambrure ?", "1/10", ["10", "1/160", "160"], "Cambrure = H / L."],
  ["Hauteur significative annoncée 5 m. Vagues maximales probables ?", "Environ 10 m", ["Environ 5 m", "Environ 2,5 m", "Environ 20 m"], "Les vagues maximales peuvent atteindre 2 × H1/3."],
  ["Houle de longueur 150 m. Elle commence à « sentir » le fond vers…", "75 m de profondeur", ["150 m", "300 m", "15 m"], "Quand la profondeur est inférieure à la moitié de la longueur d'onde."],
  ["Vague de 3 m de haut et 60 m de long. Cambrure ?", "1/20", ["20", "1/180", "180"], "Cambrure = H / L."],
  ["Hauteur significative annoncée 2 m. Vagues maximales probables ?", "Environ 4 m", ["Environ 2 m", "Environ 1 m", "Environ 8 m"], "Les vagues maximales peuvent atteindre 2 × H1/3."],
  ["Houle de longueur 200 m. Elle commence à « sentir » le fond vers…", "100 m de profondeur", ["200 m", "400 m", "20 m"], "Quand la profondeur est inférieure à la moitié de la longueur d'onde."],
  ["Vague de 3 m de haut et 40 m de long. Cambrure ?", "0,075", ["13,3", "1/120", "120"], "Cambrure = H / L."]
]);
