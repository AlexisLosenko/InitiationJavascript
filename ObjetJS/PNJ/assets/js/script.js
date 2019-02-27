let pnj = {
  name: "Eccho",
  age: 22,
  items_to_give: ["Arbalète", "ciseau", "pomme de terre"],
  giveItem: () =>
    pnj.items_to_give[Math.floor(Math.random() * pnj.items_to_give.length)]
};

// Boucle for spécifique aux objets qui affiche toutes les entrées de l'objet
for (let key in pnj) {
  console.log(pnj[key]);
}
console.log(pnj.giveItem());
