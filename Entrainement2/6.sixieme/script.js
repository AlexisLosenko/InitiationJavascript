document.getElementById("afficher").onclick = function() {afficher()};
var tab = [-2,1,4];

function soustrait(x){
    if (x >= 2) {
        return alert(x - 2);
    }
    else {
        return alert("Nombre négatif !");
    }
}
function afficher(){
    alert(soustrait(tab[0]));
    alert(soustrait(tab[2]));
}