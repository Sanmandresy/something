## _Comment installer et configurer Apache sur Arch Linux_

## Étape 1 - Installer Apache sur Arch Linux

Installez les packages de Apache2 à l'aide de la commande suivante. 

```sh
# pacman -S apache
```

## Étape 2 - Gérer le service Apache

Voici les commandes pour arrêter et redémarrer Apache.

```sh
# systemctl stop httpd
```
```sh
# systemctl restart httpd
```

Pour voir la version de Apache.

```sh
$ apachectl -v
```

Accédez maintenant à votre serveur Apache en utilisant l'adresse IP du serveur .
