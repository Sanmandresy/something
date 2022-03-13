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

Votre README.md sera mis à jour avec de nouveaux contenus tels que : 
| Name                                | GitHub                                                                  |
| :---------------------------------- | :---------------------------------------------------------------------- |
| **\[Dev] Bako Harry \| HarrylepaP** |                                                                         |
| **P3RM1\_D3N1ED**                   | [**@Tsirimaholy**](https://github.com/Tsirimaholy)                      |
| **Onitsiky**                        |                                                                         |
| **Sarobidy-23**                     | [**@Sarobidy-23**](https://github.com/Sarobidy-23)                      |
| **Mihary Joel**                     | [**@miharyjoe**](https://github.com/miharyjoe)                          |
| **Rojotiana Nomena**                |                                                                         |
| **Tsirimaholy**                     |                                                                         |
| **NyAndoMayah**                     | [**@NyAndoMayah**](https://github.com/NyAndoMayah)                      |
| **github-actions\[bot]**            | [**@github-actions\[bot\]**](https://github.com/github-actions\[bot])   |
| **vohizy**                          | [**@Vohizy**](https://github.com/Vohizy)                                |
| **allcontributors\[bot]**           | [**@allcontributors\[bot\]**](https://github.com/allcontributors\[bot]) |
| **Loïca**                           | [**@NiceGuyMe**](https://github.com/NiceGuyMe)                          |
| **RATSIMBAZAFY Anjaraniaina**       |                                                                         |
| **Sanda Mandresy**                  | [**@Sanmandresy**](https://github.com/Sanmandresy)                      |
| **AmourRAMANANTSIRESY**             | [**@kirioka98A**](https://github.com/kirioka98A)                        |
| **Dinasoa**                         |                                                                         |
| **hiDden rafra**                    | [**@HidDen-MaChinA**](https://github.com/HidDen-MaChinA)                |
| **Iloniavo RANDRIAMANGA**           |                                                                         |
| **Jerry**                           |                                                                         |
| **Judicael RANDRIAMANJATO**         |                                                                         |
| **Mahefa Ny Anjara**                | [**@Mahefaa**](https://github.com/Mahefaa)                              |
| **Miaritiana SOAMIANDRA**           |                                                                         |
| **njaina**                          | [**@njaina**](https://github.com/njaina)                                |
| **Ny Hasina VAGNO**                 |                                                                         |


