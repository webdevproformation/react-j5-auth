## résumé

starter = site internet
plusieurs pages
front
admin

dans le front => Login
formulaire saisit les informations => state

lorsque l'on clique sur le bouton "Connexion "
Appel une API

appeler une API => axios
const reponse = await axios.post ("url" , {login : "", mdp ""})

si les login et mot de passe ne sont pas conformes => 400

si les login et mot de passe sont OK
=> 200
retour {
data : "message",
token : "JsonWebToken"
}

---

=>
algorithme qui va transformer sur le serveur :

const user = {
id:12345,
name: "Alain"
role : "admin"
}

const cleprivee = "dzoiuegaozo"

convert_jwt(user, cleprivee) =>

---

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.

crypte et decrypter //

stocker dans le navigateur (client) => dans
le localStorage

localStorage.setItem("nom_dans_le_storage","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.")

---

logout

dans NavBar et dans admin/NavBar

clique sur le lien =>

// localStorage.removeItem("token")
// redirection vers la page de login => window.location = "/login"

Attention cette fonction a été réalisée dans deux composants

---

Guard = Protection des Routes

est ce que dans le navigateur il y a un token valide
si oui => affiche la page demdandée
si c'est non => redirige vers la page de login

Dans App.jsx => url et le composant
