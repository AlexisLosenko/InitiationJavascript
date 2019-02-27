const mainCharactere = {
  name: "Terra",
  level: 90,
  life: 250,
  weapon: { name: "VengaBur", damage: 35 },
  attack: () => {
    return (
      mainCharactere.name +
      " attaque avec " +
      mainCharactere.weapon.name +
      " dont les dégats sont de " +
      mainCharactere.level * mainCharactere.weapon.damage
    );
  }
};

console.log(mainCharactere.attack());
