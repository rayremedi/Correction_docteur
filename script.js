
var titleArray = {
    Epaule: 'Epaule',
    Main: 'Main'
}

var paraArray = {
    Epaule: 'Ceci est une Epaule',
    Main: 'ceci est une Main'
}
//Fonction qui change le backgroundColor en vert
function bodyappearRed(id) {
    var monElt = document.getElementById(id);
    monElt.style.backgroundColor = 'green';

    var titleParts = document.getElementById('txt-title');
    console.log(titleArray[id])
    titleParts.innerHTML = titleArray[id];
    titleParts.style.display = "block";
}

function onClick(id) {
    var txtParts = document.getElementById('txt-para');
    txtParts.innerHTML = paraArray[id];
    console.log(paraArray[id]);
    txtParts.style.display = "block";
}

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



