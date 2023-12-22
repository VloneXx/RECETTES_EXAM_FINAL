// Fonction de validation des champs

function validationForm() {

    // Récupération des valeurs des champs
    let recette = document.getElementById("recette").value;
    let ingredient = document.getElementById("ingredient").value;
    let quantite = document.getElementById("quantite").value;
    let instruction = document.getElementById("instruction").value;
    let errorElementrecette = document.getElementById("error-recette");
    let errorElementingredient = document.getElementById("error-ingredient");
    let errorElementquantite = document.getElementById("error-quantite");
    let errorElementinstruction = document.getElementById("error-instruction");

    // Validation des entrées fait par l'utilisateur
    if (recette === "") {
        errorElementrecette.innerHTML = "Veuillez entrer le nom de votre recette";
        return;
    }

    errorElementrecette.innerHTML = "";

    if (ingredient === "") {
        errorElementingredient.innerHTML = "Veuillez entrer aumoin un ingrédient";
        return;
    }

    errorElementingredient.innerHTML = "";

    if (quantite === "") {
        errorElementquantite.innerHTML = "Veuillez entrer aumoin une quantité";
        return;
    }

    errorElementquantite.innerHTML = "";

    if (instruction === "") {
        errorElementinstruction.innerHTML = "Veuillez entrer les instructions de votre recette";
        return;
    }

    errorElementinstruction.innerHTML = "";

    localStorage.setItem('recette', recette);
    localStorage.setItem('ingredient', ingredient);
    localStorage.setItem('quantite', quantite);
    localStorage.setItem('instruction', instruction);

    document.getElementById("form").submit();

}

// Fonction d'ajout de recette

document.addEventListener('DOMContentLoaded', function() {

    // Récupération des données du stockage local
    // et affichage des résultats
    let recette = localStorage.getItem('recette');
    let ingredient = localStorage.getItem('ingredient');
    let quantite = localStorage.getItem('quantite');
    let instruction = localStorage.getItem('instruction');
    let resultsElement = document.getElementById('results');

    resultsElement.innerHTML = `
        <h5>${recette}</h5>
        <p>Ingredients:</p>
        <li> ${ingredient}</li>
        <br>
        <p>Quantités</p>
        <li>${quantite}</li>
        <br>
        <p>Instructions: ${instruction}</p>
    `;

});

// Focntion pour supprimer les entrés
function supprimerForm() {
    var results = document.getElementById("results");
    results.innerHTML = "";
}

fetch('https://6585ac04022766bcb8c91fc4.mockapi.io/:endpoint', {
    method: 'GET',
    headers: {'content-type':'application/json'},
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then(tasks => {
    // Do something with the list of tasks
}).catch(error => {
    // handle error
})