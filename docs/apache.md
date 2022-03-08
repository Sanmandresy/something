# Déploiement d'un site HTML5 sur Apache
# Installation et configuration de l'hébergement de plusieurs sites sur Apache

Pour pouvoir configurer l'hébergement de plusieurs sites sur Apache, il faut d'abord installer Apache.

## Installation Apache
Ces étapes d'installations sont déstinées aux utilisateurs Debian/Ubuntu.
1/Ouvrer votre terminal et taper la commande suivante:

```sh
sudo apt update
```

2/Une fois la liste des paquets mise à jour , installer apache en entrant la commande suivante:

```sh
sudo apt install apache2
```
3/Pour vérifier que apache est bien installé, entrer votre addresse ip locale dans votre navigateur. Pour voir votre addresse ip , entrer :
```sh
ip addr
```

## Configuration Générale
On va d'abord créer des dossiers pour mettres nos différents sites. Ces dossiers seront stockés dans /var/www.
1/Créeons ces dossiers en entrant la commande:

```sh
sudo mkdir /var/www/hei_sys.mg
sudo mkdir /var/www/hei_web.mg
sudo mkdir /var/www/hei_prog.mg
```
2/Une fois ces dossiers créés, vous pouvez y mettre vos fichiers html, css et js pour votre site.
Mais il vous faut définir les autorisations appropriées . Apache pourra alors lire les fichiers tout en vous donnant un accès en écriture si vous voulez ajouter ou modifier du contenu.
Entrer les commandes suivantes:
```sh
sudo chown -R $USER:$USER /var/www/hei_sys.mg
sudo chown -R $USER:$USER /var/www/hei_web.mg
sudo chown -R $USER:$USER /var/www/hei_prog.mg
```
Puis entrer cette commande :

```sh
sudo chmod -R 755 /var/www
```
3/Nous allons maintenant configurer les hôtes virtuels 😄
Nous allons nous déplacer dans /etc/apache2/sites-available puis créér un fichier d'hôte virtuel pour chacun des sites. Pour changer de répertoire :
```sh
cd /etc/apache2/sites-available
```
Puis on crée les fichiers d'hôtes virtuels : 

```sh
nano hei_sys.mg.conf
nano hei_web.mg.conf
nano hei_prog.mg.conf
```
4/Dans chacun de ces fichiers, il nous faudra préciser le nom du serveur et le Document root comme ci-joint :
> ServerName hei_sys.mg
DocumentRoot /var/www/hei_sys.mg

5/Ces hôtes virtuels ne sont pas encore  actifs mais juste disponibles. Pour activer chaque site :
```sh
a2ensite hei_sys.mg
a2ensite hei_web.mg
a2ensite hei_prog.mg
```
6/Il nous suffit juste maintenant de redémarrer Apache 😉 :
```sh
sudo systemctl restart apache2 
```
 ## Configuration selon l'issue

1/Pour qu'un utilisateur n'ait accès qu'à un site web , on modifie le propriétaire du site :
```sh
sudo chown -r $USER:$USER/var/www/hei_sys.mg
```
2/Pour accéder au site qui se trouvera dans le répértoire HOME on revient à la toute première étape dans Configuration Générale.
On va créer le dossier dans /home : 
```sh
sudo mkdir /home/www/hei_sys.mg
```
Puis y mettre nos fichiers et ensuite régler les autorisations nécéssaires pour l'utilisateur et Apache.
```sh
sudo chown -r $USER:$USER/home/www/hei_sys.mg
sudo chmod 705 /home/www/hei_sys.mg
```
3/Pour que le site web soit accessible à l'adresse http://${USERNAME}.site.local , on doit définir l' addresse DNS. 
On doit configurer cela dans le fichier hosts dans /etc
```sh
cd /etc
sudo nano hosts
```
Puis on ajoute cette ligne dans le fichier :

> addresse_ip ${USERNAME}.hei_sys.mg

Il ne reste plus qu'tester sur votre navigateur 😉


**Was Here Sanda Mandresy**
