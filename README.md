# sql-lid-TP7_EBIOS

## Présentation

Ce tp permet de continuer à découvrir les bases de SQL.
SQL est le langage d'interrogation de bases de données.
Le but est d'extraire des données stockées dans des tables de la base de données exemple, ici les bases de données Restos et EBIOS.

Dans un premier temps, des exemples d'extraction sont fournis, avec l'instruction SQL associée que vous devrez tester.
La saisie de l'instruction et l'observation du résultat obtenu permettront de comprendre le rôle de l'instruction puis sa syntaxe.

Dans un second temps, vous avez des demandes d'extraction à réaliser en autonomie.
Pas de panique : il suffit de s'inspirer des exemples précédents.

Dans ce quatrième TP, sont abordées les requêtes utilisant plusieurs tables. 

La clause `FROM`  est complétée de manière à pouvoir relier plusieurs tables à utiliser : 
```
SELECT description, nom
FROM scenarii
   INNER JOIN typeMenace
   ON scenarii.menace =   
   typeMenace.code;
```


## Utilisation

Une fois le code space ouvert dans VS code, le terminal affiche diverses configurations réalisées.

Ensuite, il suffit de taper sur Entree comme indiqué dans le message du terminal.
Enfin, pour lancer l'application, saisir l'instruction `npm run dev ` puis Entree
L'application devrait s'ouvrir dans un navigateur web, à une url semblable à celle-ci : http://localhost:5173/

Vous êtes prêt alors à découvrir, tester puis créer des instructions SQL d'interrogation.

## Enregistrement du travail dans Classroom pour le professeur

Afin de stocker durablement votre travail, il faudra valider les changements dans votre répertoire sur GitHub.

- Dans votre dépôt dans VSCode,
- Ouvrir le fichier `DossierEtudiant\reponses.sql`
- Copier-coller les instructions proposées pour chaque requête à réaliser.
- Enregistrer le fichier
- Aller dans l'onglet `Git`,
- Ajouter les changements dans la version à enregistrer
- Saisir un message : réponses jusqu'à la question ...
- Cliquer sur `Commit`
- cliquer sur `push / synchroniser` les changements.

Ceci permettra aussi à votre professeur de visualiser votre progression.

Bon TP.
