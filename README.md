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

Renvoie le contenu du dossier `site-c200` dans le dépôt (bouton **Add file → Upload files**, même méthode, en glissant tout le contenu du dossier, y compris le dossier `data` et son sous-dossier `qcm`). Le site se met à jour tout seul en une minute ou deux ; sur le téléphone, ferme et rouvre l'appli. La version affichée en bas de l'onglet **Progrès** permet de vérifier que c'est la bonne.

## Ta progression

Elle est enregistrée **dans le navigateur** de chaque appareil (cartes, QCM, notes, brouillons de rapport). Pour la passer d'un appareil à l'autre sans pseudo : onglet **Progrès → Exporter**, puis **Importer** sur l'autre appareil.

## Pseudos et équipage (progression partagée)

Chacun crée son **pseudo** avec un mot de passe (bouton **Pseudo** en haut à droite). La progression de chaque pseudo est gardée, et l'onglet **Équipage** montre la progression de tout le monde. Sur un nouvel appareil, on se connecte avec son pseudo et son mot de passe et on retrouve sa progression.

Pour que les pseudos soient partagés entre les téléphones, il faut une petite base de données gratuite (Firebase, de Google). À faire une seule fois :

1. Va sur <https://console.firebase.google.com> avec un compte Google, clique **Créer un projet** (nom au choix, par exemple `c200`), désactive Google Analytics.
2. Dans le menu de gauche : **Créer (Build) → Realtime Database → Créer une base de données**. Emplacement : **Belgique (europe-west1)**. Choisis le mode verrouillé, ce n'est pas grave.
3. Onglet **Règles** : remplace tout par le texte ci-dessous puis clique **Publier**.

   ```json
   { "rules": { "c200": { ".read": true, ".write": true } } }
   ```

4. Onglet **Données** : copie l'adresse affichée en haut, du type `https://c200-xxxxx-default-rtdb.europe-west1.firebasedatabase.app`.
5. Sur GitHub, ouvre le fichier `js/config.js`, clique le crayon (Edit), colle l'adresse entre les guillemets :

   ```js
   window.C200.config.db = 'https://c200-xxxxx-default-rtdb.europe-west1.firebasedatabase.app';
   ```

   puis **Commit changes**.

Firebase enverra des e-mails disant que les règles sont « publiques » : c'est normal, c'est voulu pour rester simple. La sécurité est légère (fait pour la famille et quelques amis) : choisis un mot de passe que tu n'utilises nulle part ailleurs. Le plan gratuit (Spark) suffit très largement.

Tant que `js/config.js` est vide, les pseudos marchent quand même, mais seulement sur l'appareil où ils ont été créés.

## À ne pas mettre en ligne

Le dépôt est public : n'y mets **pas** les PDF des cours. Le site contient des fiches réécrites, pas les supports.

## Organisation des fichiers

| Dossier | Contenu |
| --- | --- |
| `index.html` | La page unique du site |
| `css/style.css` | Couleurs (thème carte marine, mode nuit) et mise en page |
| `js/core.js` | Enregistrement des matières, outils de calcul |
| `js/config.js` | Adresse de la base Firebase (pseudos partagés) |
| `js/profils.js` | Pseudos, mots de passe, synchronisation |
| `js/app.js` | L'application (navigation, cartes, QCM, examens, atelier, équipage) |
| `js/gen/*.js` | Générateurs d'exercices et dessins (navigation, marée, radar, météo, anglais, stabilité, MARPOL, machine, feux) |
| `data/*.js` | Une matière par fichier : fiches, cartes, QCM |
| `data/qcm/*.js` | QCM supplémentaires (au moins 50 par fiche) |
| `sw.js` | Fonctionnement hors ligne |

Pour corriger une fiche ou ajouter une question, ouvre le fichier de la matière dans `data/` : chaque carte est `['question', 'réponse', 'fiche']`, chaque QCM `{ q, r: [bonne réponse, mauvaises…], e: explication, f: fiche }` (la première réponse est la bonne, l'ordre est mélangé à l'affichage). Dans `data/qcm/`, chaque question est `["question", "bonne réponse", ["fausse 1", "fausse 2", "fausse 3"], "explication"]`, regroupées par fiche avec `C200.plus('matière', 'fiche', [...])`.
