// Étape 2 : Variables et message de bienvenue
let listeTaches = [];
console.log("Bienvenue dans votre To Do List !");

// Sélection des éléments DOM
const input = document.getElementById("tache-input");
const ajouterBtn = document.getElementById("ajouter-btn");
const liste = document.getElementById("liste-taches");
const compteur = document.getElementById("compteur");
const supprimerToutBtn = document.getElementById("supprimer-tout-btn");
const rechercheInput = document.getElementById("recherche-input");

// Étape 6 : Fonctions
function afficherListe() {
    liste.innerHTML = "";
    let tachesFiltrees = listeTaches.filter(t => t.texte.toLowerCase().includes(rechercheInput.value.toLowerCase()));
    tachesFiltrees.forEach((tache, index) => {
        const li = document.createElement("li");
        li.textContent = tache.texte;
        if (tache.terminee) li.classList.add("completed");

        const terminerBtn = document.createElement("button");
        terminerBtn.textContent = "Terminer";
        terminerBtn.addEventListener("click", () => terminerTache(index));

        const supprimerBtn = document.createElement("button");
        supprimerBtn.textContent = "Supprimer";
        supprimerBtn.addEventListener("click", () => supprimerTache(index));

        li.appendChild(terminerBtn);
        li.appendChild(supprimerBtn);
        liste.appendChild(li);
    });

    mettreAJourCompteur();
    sauvegarder();
}

function ajouterTache() {
    const texte = input.value.trim();
    if (texte === "") return;
    listeTaches.push({ texte: texte, terminee: false });
    input.value = "";
    afficherListe();
}

function supprimerTache(index) {
    listeTaches.splice(index, 1);
    afficherListe();
}

function terminerTache(index) {
    listeTaches[index].terminee = !listeTaches[index].terminee;
    afficherListe();
}

function mettreAJourCompteur() {
    const total = listeTaches.length;
    const terminees = listeTaches.filter(t => t.terminee).length;
    compteur.textContent = `Total: ${total} | Terminées: ${terminees} | En cours: ${total - terminees}`;
}

function sauvegarder() {
    localStorage.setItem("listeTaches", JSON.stringify(listeTaches));
}

function charger() {
    const data = localStorage.getItem("listeTaches");
    if (data) {
        listeTaches = JSON.parse(data);
        afficherListe();
    }
}

// Étape 4 : Événements
ajouterBtn.addEventListener("click", ajouterTache);
input.addEventListener("keypress", (e) => { if (e.key === "Enter") ajouterTache(); });
supprimerToutBtn.addEventListener("click", () => {
    listeTaches = [];
    afficherListe();
});
rechercheInput.addEventListener("input", afficherListe);

// Étape 9 : Charger les données au démarrage
charger();
