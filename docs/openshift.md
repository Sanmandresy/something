# Déploiement d'un site HTML5 sur Openshift

# Prérequis

## 1-Créer un compte red hat
    
    - Allez sur le site Openshift https://cloud.redhat.com
    - Clicker sur "create an account" et suivre le protocole (voulez vous un compte personnel ou pour l'entreprise,votre nom, ...) 
    - Vérifiez votre mail
    
  
## 2- Se connecter à son compte Red hat
 ![open1](https://user-images.githubusercontent.com/72041096/157201004-31addcd3-4adf-439f-a01a-19723ef30ee7.JPG)




## 3- Création de l'application
    Sur le site de Openshift https://console-openshift-console.apps.sandbox-m2.ll9k.p1.openshiftapps.com/add
        - Selectionner le mode développer en haut à gauche 
        - Cliquer sur Add sur le coin gauche
        - Après selectionner Import from git
    ![open2](https://user-images.githubusercontent.com/72041096/157202556-21059c88-98dd-4ea9-8894-55609a74590a.JPG)
    Si ceci est votre première connection, alors la connexion est sans doute évouer à l'échec : 
   ![open2](https://raw.githubusercontent.com/Sarobidy-23/Web/master/erreur%20devsandbox.)
   
    Pour resoudre cela :
        - Aller sur le site : https://developers.redhat.com/developer-sandbox/get-started
        - Entrer votre numero de telephone
        - Tapez code qui a été envoyé sur votre téléphone via le numero que vous avez composé
        - Rééssayer de se connecter sur le site : https://console-openshift-console.apps.sandbox-m2.ll9k.p1.openshiftapps.com/add
        - Cliquer sur Add sur le coin gauche
        - Après selectionner Import from git
   ![open3](https://raw.githubusercontent.com/Sarobidy-23/Web/master/debuter%20devsandbox.png)
   ![open4](https://raw.githubusercontent.com/Sarobidy-23/Web/master/verifier%20sandbox.png)
   ![open2](https://raw.githubusercontent.com/Sarobidy-23/Web/master/erreur%20devsandbox.)

        - Copier le git repository url
        - Nommez votre application
        - Cliquer create 
   ![open3 0](https://user-images.githubusercontent.com/72041096/157203977-d7238061-f0a0-4d76-bf84-ac3497eed955.JPG)
   ![open3](https://user-images.githubusercontent.com/72041096/157204003-a0052211-95d2-499f-b25e-88a99175cb03.JPG)
   ![open4](https://user-images.githubusercontent.com/72041096/157204017-6fdf5c69-3480-4cbb-bf92-87e46d14c9b8.JPG)
   ![open5](https://user-images.githubusercontent.com/72041096/157204050-154e24b5-27c6-4202-8cc8-7a0d9550fe49.JPG)
   ![open6](https://user-images.githubusercontent.com/72041096/157204066-f42c27d7-4f03-4aa2-b013-9f278f19aac9.JPG)



        

## 4- Déploiement 
    -Se rendre dans Topology
    -Séléctionner le projet
    -Aller dans Route et cliquer le lien pour voir notre application
  ![open7](https://user-images.githubusercontent.com/72041096/157205445-1e4a817d-e8fa-4993-801b-29b0bdcc34f1.JPG)
  ![open8](https://user-images.githubusercontent.com/72041096/157205452-fd996fbe-a2d3-4f9e-924c-b172d9e05d8e.JPG)






# Pour le déploiement en utilisant Openshift action :
    - Creer un workflow sur github voir ce tuto (https://developers.redhat.com/blog/2020/02/13/openshift-actions-deploy-to-red-hat-openshift-directly-from-your-github-repository?source=sso#)



# Félicitations , vous savez comment deployer sur Openshift de red hat!
