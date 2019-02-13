let a;
let b;

function  rayon () {

     a = prompt("qu'elle est le rayon?");
     b = Math.PI*(a*a);

     return  b;
}

function resultat (b) {

     alert('la surface du cercle est de ' +b+ ' cm2')
}