# Comment héberger plusieurs sites sur un seul serveur Apache
## Arch Linux
Hello ! 😄 Aujourd’hui nous allons apprendre comment mettre plusieurs sites sur un seul serveur
Apache avec Arch linux. Avant de commencer, il nous faut connaître les notions de base.

### Notions de bases
#### Virtualhost
Un __virtual__  __host__ (hôte virtuel) héberge plusieurs sites en même temps dans un seul serveur donc à partir d’ __une seule adresse IP__.  Autrement dit, si nous voulons héberger plusieurs sites dans un serveur, il nous faut créer un virtual host. Donc si vous voulez nous pouvons mettre comme titre « Créer un virtual host » 😉.
#### Mode root
Afin de réaliser toutes les actions qui vont suivre il faut savoir comment passer en mode root.
Avec _sudo_ _su_ cela devrait suffire. Mais si vous rencontrez des problèmes, veuillez consultez le lien ci-après https://www.youtube.com/watch?v=EEIdjlq_AIE 

#### Installation de Apache
Il faudrait aussi que vous ayez au moins installer apache.  Si vous ne l’avez pas encore fait, il suffit d’écrire :
```sh
 $  sudo pacman -S apache
``` 
 

### Contexte 
 Nous allons créer un virtual host qui va héberger des sites dans deux domaines différents, domaine1 et domaine2. Le nom des sites seront évidemment index.hmtl.

### Etape 1 : Création d’une directory
Bon voilà, vous êtes en mode root ? 😄 Nous allons commencer par créer un dossier avec les noms de domaines dans le répertoire _/srv/http/_
```sh
$ sudo mkdir /srv/http/domaine1.com
$ sudo mkdir /srv/http/domaine2.com
``` 


Ainsi chaque domaine correspondra à un dossier. Et quand nous aurons fini de créer le virtualhost, nous pourrons juste taper domaine1.com ou domaine2.com et le site web s’affichera.

### Etape 2 : Création de la page html
Nous allons donc créer le fichier html dans chacun des domaines.
```sh
$ sudo nano /srv/http/domaine1.com/index.html
$ sudo nano /srv/http/domaine2.com/index.html
``` 

Nous avons ensuite le choix entre rédiger le code html juste après ou nous pouvons juste copier le contenu d’un fichier html existant.
Donc, pour rédiger le code html dans index.html, voici la commande à écrire :

 ```sh
$ sudo nano /srv/http/domaine1.com/index.html
$ sudo nano /srv/http/domaine2.com/index.html
``` 

Après vous pourrez écrire tout le code que vous voulez dedans, n’oubliez pas juste d’enregistrer les modifications juste après. 
Pour le deuxième choix nous ferons juste :
```sh
$ sudo cp NotreFichierACopier.html /srv/http/domaine1.com/index.html
``` 

### Etape 3 : Configuration des virtual host
Bon, vous y êtes ? 😄 Nous allons passez à l’étape ultime maintenant. 😀
- Nous allons maintenant dans le répertoire etc. Nous nous dirigerons dans _/etc/apache2/sites-available/_ .Pour cela il nous faut taper les commandes ci-dessous :
```sh
$ cd etc
$ cd apache2
$ cd sites-available
``` 

Si nous voulons voir ce qu’il y a dedans avec _ls_ nous y verrons deux fichiers conf qui sont mises dans ce dossier par défaut (000-default.conf et default-ssl.conf).
- Ensuite il faut copier le contenu de _000-default.conf _ dans un nouveau fichier, par exemple domaine1.conf. Comme écrit quelques lignes plus tôt, nous écrirons :
```sh
$ sudo cp etc/apache2/sites-available/000-default.conf  etc/apache2/sites-available/domaine1.conf
``` 
Ensuite nous allons modifier une partie du contenu de _domaine1.conf_ :
```sh
$ sudo nano etc/apache2/sites-available/domaine1.conf
``` 

Il faut ensuite modifier son contenu suivant le modèle suivant :
```sh
 <VirtualHost *:80>
 ServerAdmin webmaster@domaine1.com
DocumentRoot "/srv/http/domaine1.com" 
ServerName domaine1.com
 ServerAlias www.domaine1.com
 	ErrorLog "/var/log/httpd/domaine1.com-error_log" 
CustomLog "/var/log/httpd/domaine1.com-access_log" common 
</VirtualHost> 
<Directory "/home/user/http/domaine1.dom">
        Require all granted
 </Directory>
``` 
- __ServerAdmin__ c’est pour le courriel de l'administrateur système.
- __DocumentRoot__ c’est le chemin absolu vers l’emplacement local du dossier domaine1.com par exemple
- __ServerName__ c’est le nom du serveur
- __ServerAlias__ c’est aussi un nom par laquel on peut appeler le serveur
- __ErrorLog__ c’est la directive relative au log d’erreur au hôte virtuel
- __CustomLog___  c’est la directive relative au log d’accès au hôte virtuel (Dans le domaine informatique, le terme log désigne un type de fichier, ou une entité équivalente, dont la mission principale consiste à stocker un historique des événements).
- __Require all granted__ signifie que toutes les adresse IP qui demanderont au serveur auront accès au site web. 
N’oublions pas d’enregistrer et de sortir de l’éditeur de texte Nano (ctrl+X). Et de faire de même avec domaine2.com.
Puis nous avons à tester si les modifications fonctionnent avec 
```sh
$ apachetcl configtest
``` 

###  Etape 4 : Redémarrer Apache
Après la configuration, nous n’avons plus qu’à redémarrer Apache.
D’abord il nous faut mettre les noms des domaines dans le fichier hosts de _etc/_ que nous précèderons de l’addresse de notre localhost (par défaut c’est 127.0.0.1)
```sh
 $ sudo nano /etc/hosts
 $ 127.0.0.1 domaine1.com 127.0.0.1 domaine2.com
``` 
Il est conseillé de mettre tout cela à la dernière ligne du fichier _hosts_ .
Ensuite nous allons taper la commande suivante afin de littéralement redémarrer Apache :
```sh
 $  sudo rc.d restart httpd
``` 

### Etape 5 : Admirer le résultat 😊
Il ne nous reste plus qu’à écrire le nom de notre domaine par exemple domaine1.com dans la barre de navigation et voilà !!! 😊




