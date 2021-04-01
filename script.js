//DOM GETTERS
var konsole= document.querySelector(".console");
var informations = document.querySelector(".informationsJeu");
var submitBtn = document.getElementById("submitButton")

//MAIN
submitBtn.addEventListener("click", function(prompt){
    var prompt = konsole.value;
    if (prompt == "effacer"){clear();};
    if (prompt == "chier"){chier();};
    if (prompt == "dormir"){dormir();}
});

//Classes
class Lieu{
    constructor(nom, nord, sud, ouest, est){
        this.nom = nom;
        this.nord = nord;
        this.sud = sud;
        this.ouest = ouest;
        this.est = est;
    }
}

var chambreSale = new Lieu("Chambre Sale", false, "Cage d'Escalier", false, false);

//Function

//Commandes
function chier(){
    clear();
    informations.value = "Vous vous accroupissez à terre et poussez bruyamment. Votre anus se dilate, vous posez une crotte énorme qui vous satisfait beaucoup. Vous ricanez bêtement.";
    
};

function dormir(){
    clear();
    informations.value = "Vous sentez vos paupières s'alourdir et vous vous assoupissez à même le sol. Vous sombrez rapidement dans un sommeil de plomb, la fatigue, le travail et les jeux vidéo vous rendent tout mollasson.";
};

function clear(){
    informations.value = "";
};

function badInput(){
    clear();
    informations.value = "Veuillez saisir une commande valide ou j'éteins votre pc!"
};