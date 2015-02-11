# ihm_alzheimer
Prototype de l'application réalisé lors d'un projet de cours à polytech

La branche master est accèssible à l'adresse suivante https://github.com/Moonatique/ihm_alzheimer.git

pré-requis : 
- avoir le gestionnaire de version GIT installé
- avoir le composant Node.js installé

Installation : 
- git clone https://github.com/Moonatique/ihm_alzheimer.git
- cd ihm_alzheimer
- git pull
- npm install
- cp -r bower_components/ app/bower_components/
- npm start
- ouvrir un navigateur localhost:8000/app/


Une partie importante du code est static et n'a été implémenté uniquement pour réaliser le prototype ciblé.
Le framework utilisé est Angular.js. Vous pourrez trouver les autres composants Javascript nécessaires dans le fichier  package.json
La construction de l'application est quand à elle configurer dans bower.json
Enfin le projet se trouve dans le répertoire app et est organisé en package représentant 
  * soit une fonctionnalité(/content/album, /content/menu) 
  * soit du code commun aux fonctionnalités (css, img, js, app.js)


