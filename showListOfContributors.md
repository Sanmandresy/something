Premièrement, vous devez avoir un fichier package.json dans le projet. Pour cela, exécuter la commande :
```sh
npm init -y

```

Ensuite, vous devez avoir un fichier README.md avec le titre "## Contributors" dedans. C'est dans ce fichier que l'on affichera la liste de tous les contributeurs du projet.  

Puis, exécuter la commande suivante pour installer tous les fichiers nécessaires pour afficher la liste dans le README.md :

```sh
npm install remark-cli remark-gfm remark-git-contributors --save-dev

```
Et enfin, exécuter la commande suivante pour pouvoir afficher la liste de tous les contributeurs dans le README.md 
```sh
npx remark --output --use remark-gfm --use remark-git-contributors README.md
```


