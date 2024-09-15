# Test technique Finalcad

Ceci est une application web contenant trois pages principales : une page de connexion, une vue de liste et une page de détail d'un élément. Le projet a été développé en utilisant React.js et Vite.

## Installation et utilisation

1. Clonez ce dépôt à l'aide de la commande `git clone`
2. Naviguez vers le dossier du projet avec `cd nom_du_projet`
3. Installez toutes les dépendances nécessaires en utilisant `npm install`
4. Lancez l'application en utilisant `npm run dev`
5. Ouvrez votre navigateur et accédez à `http://localhost:5173/`

## Pages

- Connexion
  - reproduction de la maquette fournie, avec une authentification via l'API fournie
  - affichage d'un toast d'erreur si le couple login/mdp échoue
  - utilisation du local storage pour la persistance du login
- Vue de liste
  - reproduction de la maquette fournie, avec une liste d'éléments récupérés à partir de l'API fournie
  - nombre dynamique d'items affichés en fonction de la hauteur de l'écran
  - ajout de la pagination
  - ajout du logout
- Détail d'un élément
  - design libre, affiche les détails d'un projet spécifique
  - la date d'échéance est affichée en rouge si le status du projet n'est pas terminé

## Router

- Connexion : '/login'
- Vue de liste : '/'
- Détail d'un élément : '/projects/:id'

## APIs utilisées

- API d'authentification : `http://demo.wizzcad.com:8081/logins`
- API de liste : `http://demo.wizzcad.com:8081/{{token}}`
- API de phases : `http://demo.wizzcad.com:8081/phases`
- API de membres : `http://demo.wizzcad.com:8081/members`

## Librairies principale utilisées

- react
- react-router-dom
- axios
- react-toastify

Aucune bibilothèque UI n'a été volontairement utilisée afin de ne pas surcharger inutilement le projet

## A faire : nouvelles fonctionnalités

- internationalisation avec un package comme i18n ou lingui
- mode dark

## Axes d'amélioration

- utiliser Sass ou Less
- utiliser des variables css

## Contribution

N'hésitez pas à contribuer à ce projet en soumettant des problèmes ou des demandes de tirage.
