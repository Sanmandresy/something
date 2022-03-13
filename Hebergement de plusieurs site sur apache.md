#héberger plusieurs sites Web avec un serveur Apache sur Debian
Avant de commencer, le serveur apache doit être installé. Ouvrez un terminal et vous devez passer en mode superutilisateur.
Chaque site a besoin de son propre répertoire de système de fichiers. Vous placerez les fichiers du site Web, tels que HTML, CSS et JavaScript, dans ce répertoire
Créons par exemple deux dossiers, www.hei.mg et www.hei.com .
Tapez sur le terminal:
```
# mkdir -p /var/www/www.hei.mg
# mkdir -p /var/www/www.hei.com
```
Ensuite, modifiez la propriété des racines du document à votre propre utilisateur et définissez les autorisations appropriées. Cela permettra à Apache de lire les fichiers tout en vous donnant un accès en écriture afin que vous puissiez ajouter votre contenu.
```
# chown -R $USER:$USER /var/www/www.hei.mg
# chown -R $USER:$USER /var/www/www.hei.com
# chmod -R 755 /var/www
```
Copiez les fichiers de votre site Web dans les répertoires. Ici, Nous utiliserons deux simples index.html des dossiers:
Pour www.hei.mg:
```
# nano /var/www/www.hei.mg/index.html
```
et pour www.hei.com:
```
# nano /var/www/www.hei.com/index.html
```
Créez un nouveau fichier d’hôte virtuel pour chacun des sites. Peu importe le nom que vous donnez au fichier; par convention, il correspond généralement au nom d’hôte de votre site.
```
# nano /etc/apache2/sites-available/www.hei.mg.conf
```
```
<VirtualHost *:80>
    ServerName www.hei.mg
    DocumentRoot /var/www/www.hei.mg
</VirtualHost>
```
```
# nano /etc/apache2/sites-available/www.hei.com.conf
```
```
<VirtualHost *:80>
    ServerName www.hei.com
    DocumentRoot /var/www/www.hei.com
</VirtualHost>
```
Ajout d’un hôte virtuel à sites-available le fait disponible mais pas actif. Vous devez activer manuellement chaque site que vous souhaitez utiliser. Les configurations d’hôte virtuel à activer doivent être liées par un lien symbolique dans /etc/apache2/sites-enabled
Sur les systèmes Debian, vous pouvez utiliser le a2ensite commande pour simplifier cette étape.
Tapez sur le terminal:
```
# sudo a2ensite a.example.com
# sudo a2ensite b.example.com
```
Enfin, redémarrez Apache pour appliquer votre nouvelle configuration. Les modifications d’hôte virtuel nécessitent un redémarrage du serveur après les avoir ajoutées à sites-enabled.
```
# sudo apache2ctl restart
```
Vous devriez maintenant pouvoir voir Apache servir vos deux sites différents. Si vous n’avez pas de résolution DNS sur votre serveur, vous pouvez modifier /etc/hosts fichier pour tester votre configuration.
```
#  nano /etc/hosts
```
Ajoutez les lignes suivantes à /etc/hosts:
```
127.0.0.1	 www.hei.mg
127.0.0.1	 www.hei.com
```
Cela forcera les deux domaines à revenir à votre propre système. Vous pourrez maintenant les visiter dans votre navigateur pour voir les deux pages différentes 
