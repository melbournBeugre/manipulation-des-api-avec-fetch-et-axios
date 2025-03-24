# Axios et Fetch API Example

## Description

- Ce projet utilise `axios` et `fetch` pour interagir avec l'API `JSONPlaceholder`

## Routes disponibles

- **GET ALL** : Récupérer tous les utilisateurs
- **GET ONE** : Récupérer un utilisateur par ID
- **POST** : Ajouter un utilisateur
- **PUT** : Mettre à jour un utilisateur
- **DELETE** : Supprimer un utilisateur

## Instructions

- **Prérequis** :
  - Avoir `Node.js` installé
  - Installer `axios` : `npm install axios`
- **Exécution** :
  - `node axios-api.js`
  - `node fetch-api.js`

## Endpoints

- **GET ALL**
  - `fetch` : `fetch(url).then(res => res.json())`
  - `axios` : `axios.get(url).then(res => console.log(res.data))`
- **GET ONE**
  - `fetch` : `fetch(url + id).then(res => res.json())`
  - `axios` : `axios.get(url + id).then(res => console.info(res.data))`
- **POST**
  - `axios` : `axios.post(url, { name, username, email })`
- **PUT**
  - `fetch` : `fetch(url + id, { method: 'PUT', body, headers })`
  - `axios` : `axios.put(url + id, { name, username, email })`
- **DELETE**
  - `fetch` : `fetch(url + id, { method: 'DELETE' })`
  - `axios` : `axios.delete(url + id).then(res => console.info("Deleted"))`
