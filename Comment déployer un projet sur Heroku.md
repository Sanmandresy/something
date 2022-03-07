# Déploiement d'un projet sur Heroku

## Connexion ou création d'un nouveau compte sur Heroku

Dans un premier temps, il vous faudra vous connecter à votre compte Heroku si déjà vous en avez, sinon il vous faudra en créer un nouveau.
Cliquez [ici](https://id.heroku.com/login).

## Création d'un nouvel app

En haut à droite de la page, il y a un bouton "New". Cliquez sur puis "Create new app".

- Entrer le nom du nouvel app sur "App name".
- Sélectionner la région (Europe ou USA).
- Appyuer sur Create app.

 Le bouton "Add to pipeline" est facultatif. Une "pipeline" est une collection de plusieurs app.

## Méthode de déploiement

Il y a plusieur moyen de déploiement du projet :

- en liant notra app à notre projet sur "Github"
- en liant notre app à notre projet sur "Heroku Git"
- en liant notre app à notre projet sur "Container Registry"

### Déploiement via Github

Déjà il vous faudra être connecté à [Github](https://github.com) sur votre appareil.
Ensuite, chercher le repository contenant le projet à déployer, et le sélectionner en cliquant sur "Connect".
Pour le déploiement automatique, choisir la branche à déployer, ensuite cliquer sur le bouton "Enable Automatic Deploys".
Pour le déploiement manuel, choisir la branche à déployer, puis cliquer sur le bouton "Deploy Branch".
Puis  plus bas, il y aura un bouton "View" pour voir le projet en production.
