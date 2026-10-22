# Capitaine 200 — site de révision

Site personnel de révision du brevet de capitaine 200 et du mécanicien 250 kW : fiches, cartes mémo à répétition espacée, QCM, exercices de calcul aux chiffres toujours nouveaux, quiz visuels (feux, marques, balisage, structure, Plimsoll…), atelier de rapport de mer et examens blancs.

Tout est en HTML, CSS et JavaScript simples : aucun outil à installer, aucune compilation.

## Mettre le site en ligne avec GitHub Pages

1. Crée un compte sur <https://github.com> si tu n'en as pas.
2. Clique sur **New repository** (bouton vert « New »).
   - Nom : par exemple `c200`.
   - Coche **Public** (GitHub Pages gratuit ne marche qu'avec un dépôt public).
   - Clique **Create repository**.
3. Sur la page du dépôt vide, clique **uploading an existing file**.
4. Ouvre le dossier `site-c200` sur ton ordinateur, sélectionne **tout son contenu** (index.html, sw.js, manifest.webmanifest et les dossiers css, js, data, icons) et glisse-le dans la page. Clique **Commit changes**.
5. Va dans **Settings → Pages**. Dans « Build and deployment », choisis **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
6. Attends une ou deux minutes : l'adresse s'affiche en haut de la page Pages, du type `https://ton-pseudo.github.io/c200/`.

Sur ton téléphone, ouvre cette adresse puis « Ajouter à l'écran d'accueil » : le site s'ouvre comme une appli et fonctionne **hors ligne** après la première visite.

## Mettre à jour le site

Remplace les fichiers modifiés dans le dépôt (bouton **Add file → Upload files**, même méthode). Le site se met à jour tout seul en une minute ou deux ; sur le téléphone, ferme et rouvre l'appli.

## Ta progression

Elle est enregistrée **dans le navigateur** de chaque appareil (cartes, QCM, notes, brouillons de rapport). Pour la passer d'un appareil à l'autre : onglet **Progrès → Exporter**, puis **Importer** sur l'autre appareil.

## À ne pas mettre en ligne

Le dépôt est public : n'y mets **pas** les PDF des cours. Le site contient des fiches réécrites, pas les supports.

## Organisation des fichiers

| Dossier | Contenu |
| --- | --- |
| `index.html` | La page unique du site |
| `css/style.css` | Couleurs (thème carte marine, mode nuit) et mise en page |
| `js/core.js` | Enregistrement des matières, outils de calcul |
| `js/app.js` | L'application (navigation, cartes, QCM, examens, atelier) |
| `js/gen/*.js` | Générateurs d'exercices et dessins (navigation, marée, radar, météo, anglais, stabilité, MARPOL, machine, feux) |
| `data/*.js` | Une matière par fichier : fiches, cartes, QCM |
| `sw.js` | Fonctionnement hors ligne |

Pour corriger une fiche ou ajouter une question, ouvre le fichier de la matière dans `data/` : chaque carte est `['question', 'réponse', 'fiche']`, chaque QCM `{ q, r: [bonne réponse, mauvaises…], e: explication, f: fiche }` (la première réponse est la bonne, l'ordre est mélangé à l'affichage).
