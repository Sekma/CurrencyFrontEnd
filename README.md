<div style="text-align: center;">
    <h1>Currency Converter</h1>
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/src/assets/logo.png" width="20%" alt=""><br><br>
</div>

## Présentation

Currency Converter est une application spécialisée dans la conversion monétaire, 
visant à fournir un service public permettant aux développeurs d'accéder à des 
données de conversion. Les implications techniques incluent le besoin d'une API REST 
robuste pour gérer les conversions entre devises et d'une interface d'administration 
intuitive pour la gestion des données. 

## Choix Technologiques 

<ul>
    <li>Backend (API) : Laravel est choisi pour sa structure MVC, sa simplicité 
d'utilisation, et ses fonctionnalités intégrées telles que l'ORM Eloquent et le 
système de routage, ce qui facilite le développement rapide et la maintenance. 
     <br>
        <a href="https://github.com/Sekma/CurrencyBackEnd" target="_blank">Code Frontend (Administration)</a>
    </li>
    <li>Base de données : MySQL est sélectionné pour sa fiabilité et sa capacité à 
gérer des données structurées, ce qui est essentiel pour la gestion des devises 
et des taux de conversion. </li>
    <li>Frontend (Administration) : Vue.js est privilégié pour sa flexibilité et sa facilité 
d'intégration avec des APIs REST. Son approche réactive améliore l'expérience 
utilisateur dans l'interface d'administration.
    </li>
</ul>

## Liste Fonctionnelle

### Administration

1. Authentification 
    o Route : POST /login 
        ▪ Fonctionnalité : Authentifier un utilisateur. 
    o Route : POST /register 
        ▪ Fonctionnalité : Enregistrer un nouvel utilisateur. 
    o Route : GET /user (authentifié) 
        ▪ Fonctionnalité : Récupérer les informations de l'utilisateur connecté. 
    o Route : GET /logout 
        ▪ Fonctionnalité : Déconnecter l'utilisateur.
   
2. Gestion des devises 
    o Route : POST /create_currency 
        ▪ Fonctionnalité : Créer une nouvelle devise. 
    o Route : PUT /edit_currency/{id} 
        ▪ Fonctionnalité : Modifier une devise existante. 
    o Route : DELETE /delete_currency/{id} 
        ▪ Fonctionnalité : Supprimer une devise existante.
   
3. Gestion des paires de conversion 
    o Route : POST /create_pair 
        ▪ Fonctionnalité : Créer une nouvelle paire de conversion. 
    o Route : PUT /edit_pair/{id} 
        ▪ Fonctionnalité : Modifier une paire de conversion existante. 
    o Route : DELETE /delete_pair/{id} 
        ▪ Fonctionnalité : Supprimer une paire de conversion existante. 

### API Utilisateur 

4. Service fonctionnel 
    o Route : GET /currencies 
        ▪ Fonctionnalité : Savoir si le service est fonctionnel et récupérer la liste des devises.
    
6. Conversion de devises 
    o Route : GET /pairs 
        ▪ Fonctionnalité : Récupérer la liste des paires de conversion supportées.
    o Route : GET /convert/{id}/{value} 
        ▪ Fonctionnalité : Convertir une quantité de devise suivant une paire existante.  

## Wireframe de la Partie Front de l’Administration:

### Login

<div display:inline-block>
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/welcome.jpeg" style="border: 2px solid black; margin: 5px;" width="45%" alt="">
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/login.jpeg" style="border: 1px solid black;" width="45%" align=right alt="">
</div><br><br>

### Accueil Admin

<div display:inline-block>
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/admin.jpeg" style="border: 1px solid black;" width="90%" alt="">
</div><br><br>

### Gestion des devises

<div display:inline-block>
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/createCurrency.jpeg" style="border: 1px solid black;" width="45%" alt="">
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/editCurrency.jpeg" style="border: 1px solid black;" width="45%" align=right alt="">
</div><br><br>

### Gestion des pairs

<div display:inline-block>
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/createPair.jpeg" style="border: 1px solid black;" width="45%" alt="">
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/editPair.jpeg" style="border: 1px solid black;" width="45%" align=right alt="">
</div><br><br>

# Fabriqué avec

<div style="text-align: center;">
  <img alt="VSCode" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg">
  <img alt="Vue.js" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg">
  <img alt="JavaScript" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg">
  <img alt="Bootstrap" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg">
</div>
<br>
<hr>
    
</div>

# Auteur
- Sekma Mohamed Hedi <a href="https://github.com/Sekma">@Sekma<a/>
