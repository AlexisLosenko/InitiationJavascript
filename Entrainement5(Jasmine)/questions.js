
var tailleString = function(texte) {
  return texte.length;
};
var remplaceECar = function(texte) {
  let a = texte.indexOf("e");
  let text = texte.substr(" ", a) + " " + texte.substr(a + 1, texte.length);
  return text;
};
var concatString = function(texte1, texte2) {
  let concated = texte1 + texte2;
  return concated;
};
var afficherCar5 = function(texte) {
  let e = texte.split("");
  return e[4];
};
var afficher9Car = function(texte) {

  let e = texte.substring(0, 9);
  return e;
};

var majusculeString = function(texte) {
  let e = texte.toUpperCase();
  return e;
};

var minusculeString = function(texte) {
  let e = texte.toLowerCase();
  return e;
};

var SupprEspaceString = function(texte) {

  let e = texte.trim();
  return e;
  // -----------------------------------------------
};

var IsString = function(texte) {
  let e = typeof texte === "string";
  return e;
};

var AfficherExtensionString = function(texte) {

  return texte.substring(texte.lastIndexOf(".") + 1, texte.length) || texte;
};

var NombreEspaceString = function(texte) {
  let e = texte.split(" ").length - 1;
  return e;
};

var InverseString = function(texte) {
  let e = texte.split("");
  e.reverse();
  e = e.join("");
  return e;
};


var calculPuissance = function(x, y) {
  let result = 0;
  for (let i = 1; i < y; i++) {
    result += x * x;
  }
  return result;
};

var valeurAbsolue = function(nombre) {
  return Math.abs(nombre);
};

var valeurAbsolueArray = function(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.abs(array[i]);
  }
  return array;
};

var sufaceCercle = function(rayon) {
  let surface = Math.PI * (rayon * rayon);
  return Math.round(surface);
};

var hypothenuse = function(ab, ac) {
  let hypothenuse = ab * ab + ac * ac;
  return Math.sqrt(hypothenuse);
};

var calculIMC = function(poids, taille) {
  let imc = poids / (taille * taille);
  console.log(imc.toFixed(2));
  return Number(imc.toFixed(2));
};
