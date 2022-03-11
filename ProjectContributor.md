#Lister les contributeurs d'un projet


##D'abord il faut se mettre dans la branche en utilisant la commande
```sh
git checkout ${BRANCH}
```
##Afficher tous les utilisateurs et e-mails, ainsi que le nombre de validations
```sh
git shortlog --summary --numbered --email
```
##Afficher tous les utilisateurs de tous les branches 
```sh
git shortlog -sne --all
```

##Si vous voulez être plus précis dans la liste (trouver une liste de committer unique et d'auteur), vous pouvez utiliser git log:
```sh
git log --pretty="%an %ae%n%cn %ce" | sort | uniq
```
%an indique le nom de l'auteur
%ae indique l'email de l'auteur
%n indique la nouvelle ligne
%cn indique le nom du committer
%ce indique e-mail du committer
