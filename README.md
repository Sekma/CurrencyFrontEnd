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
        <a href="https://github.com/Sekma/CurrencyBackEnd" target="_blank">Code Backend (Administration)</a>
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

1. Authentification <br> 
    o Route : POST /login <br> 
     &nbsp;&nbsp;&nbsp;   ▪ Fonctionnalité : Authentifier un utilisateur. <br> 
    o Route : POST /register <br> 
      &nbsp;&nbsp;&nbsp;  ▪ Fonctionnalité : Enregistrer un nouvel utilisateur. <br> 
    o Route : GET /user (authentifié) <br> 
    &nbsp;&nbsp;&nbsp;    ▪ Fonctionnalité : Récupérer les informations de l'utilisateur connecté. <br> 
    o Route : GET /logout <br> 
      &nbsp;&nbsp;&nbsp;  ▪ Fonctionnalité : Déconnecter l'utilisateur. <br> <br> 
   
2. Gestion des devises <br> 
    o Route : POST /create_currency <br> 
       &nbsp;&nbsp;&nbsp; ▪ Fonctionnalité : Créer une nouvelle devise. <br> 
    o Route : PUT /edit_currency/{id} <br> 
      &nbsp;&nbsp;&nbsp;  ▪ Fonctionnalité : Modifier une devise existante. <br> 
    o Route : DELETE /delete_currency/{id} <br> 
      &nbsp;&nbsp;&nbsp;  ▪ Fonctionnalité : Supprimer une devise existante. <br> <br> 
   
3. Gestion des paires de conversion <br> 
    o Route : POST /create_pair <br> 
     &nbsp;&nbsp;&nbsp;   ▪ Fonctionnalité : Créer une nouvelle paire de conversion. <br> 
    o Route : PUT /edit_pair/{id} <br> 
     &nbsp;&nbsp;&nbsp;   ▪ Fonctionnalité : Modifier une paire de conversion existante. <br> 
    o Route : DELETE /delete_pair/{id} <br> 
     &nbsp;&nbsp;&nbsp;   ▪ Fonctionnalité : Supprimer une paire de conversion existante. <br> 

### API Utilisateur 

4. Service fonctionnel <br> 
    o Route : GET /currencies <br> 
    &nbsp;&nbsp;&nbsp;    ▪ Fonctionnalité : Savoir si le service est fonctionnel et récupérer la liste des devises. <br> <br> 
    
6. Conversion de devises <br> 
    o Route : GET /pairs <br> 
     &nbsp;&nbsp;&nbsp;   ▪ Fonctionnalité : Récupérer la liste des paires de conversion supportées. <br> 
    o Route : GET /convert/{id}/{value} <br> 
     &nbsp;&nbsp;&nbsp;   ▪ Fonctionnalité : Convertir une quantité de devise suivant une paire existante.  <br> 

## Wireframe de la Partie Front de l’Administration:

### Login

<div display:inline-block>
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/welcome.jpeg" width="45%" alt="">
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/login.jpeg" width="45%" align=right alt="">
</div><br><br>

### Accueil Admin

<div display:inline-block>
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/admin.jpeg" width="90%" alt="">
</div><br><br>

### Gestion des devises

<div display:inline-block>
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/createCurrency.jpeg" width="45%" alt="">
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/editCurrency.jpeg" width="45%" align=right alt="">
</div><br><br>

### Gestion des pairs

<div display:inline-block>
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/createPair.jpeg" width="45%" alt="">
    <img src="https://github.com/Sekma/CurrencyFrontEnd/blob/main/img-interface/editPair.jpeg" width="45%" align=right alt="">
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
