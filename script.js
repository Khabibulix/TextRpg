    //DOM GETTERS
var konsole= document.querySelector(".console");
var informations = document.querySelector(".informationsJeu");
var submitBtn = document.getElementById("submitButton");
var position = document.getElementById("lieuActuel");

    //Classes
    class Lieu{
        constructor(nom, nord, sud, ouest, est, description){
            this.nom = nom;
            this.nord = nord;
            this.sud = sud;
            this.ouest = ouest;
            this.est = est;
            this.description = description;
           
        }
    }
    
    //Lieux
    var chambreSale = new Lieu("Chambre Sale", false, "Cage d'Escalier", false, false);
    chambreSale.description = "Vous vous trouvez dans une chambre dégueulasse , au sol jonché de paquets de chips vides et de canettes de bière bon marché. C'est ici que vous habitez, et comme chaque jour depuis bien longtemps vous vous rendez au travail, en traînant les pieds. Une seule ouverture dans la pièce, au sud, une porte en bois décrépie et une poignée se vautrant à moitié. Que voulez-vous faire?"
    var escalier = new Lieu("Cage d'Escalier", "Chambre Sale", false, false, false);
    escalier.description = "Vous voici dans la cage d'escalier de votre immeuble, vous êtes au dernier étage, au 3ème. Allez-vous tenter d'éviter votre commère de voisine en partant de suite ou allez-vous tester les limites de votre patience?"
    position.innerText = chambreSale.nom;

    
    //MAIN
submitBtn.addEventListener("click", function(prompt){
    var prompt = konsole.value;
    if (prompt == "effacer"){clear();};
    if (prompt == "chier"){chier();};
    if (prompt == "dormir"){dormir();};
    if (prompt == "sud" && position.textContent == "Chambre Sale"){
        position.innerText = chambreSale.sud;
        informations.value = escalier.description;
    }
});



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
    konsole.value = "";
};

function badInput(){
    clear();
   informations.value = "Vous ne pouvea aller par ici!";
}
