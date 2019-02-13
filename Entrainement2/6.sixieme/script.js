let tab = new Array(-2,1,4);
let x;

function soustraction(x){

    a = x-2;
    a = Number(a);
    
    if (a >= 0){
        return alert("le resultat est "+a);
    }else{
        return alert("Nombre négatif!");
    }
 
}

function affiche(){
    soustraction(Number(tab[tab.length-3]));
    soustraction(Number(tab[tab.length-1]));
}