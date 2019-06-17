
//Tableau pour les titres.
var titleArray = {
    Epaule: 'Epaule',
    Main: 'Main'
}
//Tableau pour les paragraphes.
var paraArray = {
    Epaule: 'Ceci est une Epaule',
    Main: 'ceci est une Main'
}
//Fonction 1 qui change la couleur du background en vert, et fait apparaitre le titre des parties du corps, lorsque la souris est sur les divs.
function bodyappearRed(id) {
    var monElt = document.getElementById(id);
    monElt.style.backgroundColor = 'green';

    var titleParts = document.getElementById('txt-title');
    console.log(titleArray[id])
    titleParts.innerHTML = titleArray[id];
    titleParts.style.display = "block";
}
//Fonction 3  qui fait apparaitre le paragraphe si on clique sur les div.
function onClick(id) {
    var txtParts = document.getElementById('txt-para');
    txtParts.innerHTML = paraArray[id];
    console.log(paraArray[id]);
    txtParts.style.display = "block";
}
//Fonction 2 qui  fait disparaitre la couleur du background (vert) ainsi que le titre et le paragraphe sur les divs.
function BodydisappearRed(id) {
    var monElt = document.getElementById(id);
    monElt.style.backgroundColor = '';
    var titleParts = document.getElementById("txt-title");
    var txtParts = document.getElementById("txt-para");
    titleParts.innerHTML = titleArray[""];
    titleParts.style.display = "none";
    txtParts.innerHTML = paraArray[""];
    txtParts.style.display = "none";
}



