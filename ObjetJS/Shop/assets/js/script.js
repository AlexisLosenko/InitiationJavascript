let sellingStuff = [
  sword = {
    title: "poney en mousse",
    physic: 30,
    magic: 20,
    minLevel: 10,
    available: false
  },
  axe = {
    title: "Siracuz",
    physic: 50,
    magic: 5,
    minLevel: 20,
    available: true
  },
  woodenStick = {
    title: "Venga",
    physic: 1,
    magic: 1,
    minLevel: 1,
    available: true
  }
];
const showSellingStuff = () => {
  for (let i = 0; i < sellingStuff.length; i++) {
    for (let key in sellingStuff[i]) {
      console.log(sellingStuff[i][key]);
    }
  }
}
showSellingStuff();

console.log("-- -- --");

const showSellingStuffAvailable = () => {
  for (let i = 0; i < sellingStuff.length; i++) {
    for (let key in sellingStuff[i]) {
      if (sellingStuff[i].available === true) {
        console.log(sellingStuff[i][key]);
      }
    }
  }
}
showSellingStuffAvailable();

console.log("-- -- --");

const showSellingStuffLevelTen = () => {
  for (let i = 0; i < sellingStuff.length; i++) {
    for (let key in sellingStuff[i]) {
      if (sellingStuff[i].minLevel >= 10) {
        console.log(sellingStuff[i][key]);
      }
    }
  }
}
showSellingStuffLevelTen();
