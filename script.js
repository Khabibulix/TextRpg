var position = document.getElementById("lieuActuel");
var konsole = document.querySelector(".console");
var informations = document.querySelector(".informationsJeu");
var submitBtn = document.getElementById("submitButton");


class Lieu {
    constructor(nom, direction, description) {
        this.nom = nom;
        this.direction = direction;
        this.description = description;
    }
    goingTo(origine, direction, description) {
        origine = this.nom;
        direction = this.direction;
        informations.textContent = description;
        position.innerText = direction;        
    }

}


var chambreSale = new Lieu(
    "Chambre Sale",
    "Cage d'Escalier",
    "Vous vous trouvez dans une chambre dégueulasse , au sol jonché de paquets de chips vides et de canettes de bière bon marché. C'est ici que vous habitez, et comme chaque jour depuis bien longtemps vous vous rendez au travail, en traînant les pieds. Une seule ouverture dans la pièce, au sud, une porte en bois décrépie et une poignée se vautrant à moitié. Que voulez-vous faire?"
    );
var escalier = new Lieu(
    "Cage d'Escalier",
    "Chambre Sale",
    "Vous voici dans la cage d'escalier de votre immeuble, vous êtes au dernier étage, au 3ème. Allez-vous tenter d'éviter votre commère de voisine en partant de suite ou allez-vous tester les limites de votre patience?"
    );
position.innerText = chambreSale.nom;


//MAIN
submitBtn.addEventListener("click", function (prompt) {
    var prompt = konsole.value;
    if (prompt == "effacer"){ clear();};
    if (prompt == "chier"){ chier(); };
    if (prompt == "dormir") { dormir(); };
    if (prompt == "sud" && position.textContent == "Chambre Sale") {
        chambreSale.goingTo(chambreSale, escalier,escalier.description);
    }
    if (prompt == "nord" && position.textContent == "Cage d'Escalier") {
        escalier.goingTo(escalier, chambreSale, chambreSale.description);
    }
    

});



//Function

function chier() {
    clear();
    informations.value = "Vous vous accroupissez à terre et poussez bruyamment. Votre anus se dilate, vous posez une crotte énorme qui vous satisfait beaucoup. Vous ricanez bêtement.";

};

function dormir() {
    clear();
    informations.value = "Vous sentez vos paupières s'alourdir et vous vous assoupissez à même le sol. Vous sombrez rapidement dans un sommeil de plomb, la fatigue, le travail et les jeux vidéo vous rendent tout mollasson.";
};

function clear() {
    informations.value = "";
    konsole.value = "";
};

function badInput() {
    clear();
    informations.value = "Vous ne pouvea aller par ici!";
}

