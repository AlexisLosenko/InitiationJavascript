/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
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
  // split() divise la string et la stock dans un array. le paramètre "" premet de séparer chaque caractère (espace compris).
  let e = texte.split("");
  return e[4];
};
var afficher9Car = function(texte) {
  // ÇA MARCHE MAIS C'EST LONG
  //   let e = texte.split("", 9);
  //   let a = "";
  //   for (let i = 0; i < e.length; i++) {
  //     a += e[i];
  //   }
  //   console.log(a);
  //   return a;
  // --------------------------------------------------------

  // ÇA MARCHE EN 2 LIGNES 8)
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
  //   trim()SUPPRIME LES ESPACES SUPPERFLUX
  let e = texte.trim();
  return e;
  // -----------------------------------------------
};

var IsString = function(texte) {
  let e = typeof texte === "string";
  return e;
};

var AfficherExtensionString = function(texte) {
  // particularly files with no extension (.htaccess etc included).
  // It's very performant, and handles corner cases in an arguably better way by returning "" instead of the full string when there's no dot or no string before the dot.
  //  It's a very well crafted solution, albeit tough to read. Stick it in your helpers lib and just use it.

  return texte.substring(texte.lastIndexOf(".") + 1, texte.length) || texte;
};

var NombreEspaceString = function(texte) {
  // ici split() séléctionne tous les mots sans les espaces. donc si on supprime le dernier mot (après lequel il n'y aura pas d'espace) grâce à length -1 on obtient le nombre d'espace
  let e = texte.split(" ").length - 1;
  return e;
};

var InverseString = function(texte) {
  let e = texte.split("");
  e.reverse();
  e = e.join("");
  return e;
};

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
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
