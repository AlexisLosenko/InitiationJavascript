class Charactere {
  constructor(name, level, life) {
    this.name = name;
    this.level = level;
    this.life = life;
    this.good = good;
  }
}

class Weapon extends Charactere {
  constructor(name, level, life, weaponName, weaponDamage) {
    super(name, level, life);
    this.weaponName = weaponName;
    this.weaponDamage = weaponDamage;
    this.attack = () => {
      return super.name +
        " attaque avec l'arme " +
        this.weaponName +
        " dont les dégats sont de " +
        super.level * this.weaponDamage
    }
  }
};
let myVar = new Weapon("max", 50, 100, "clavier", 10);

console.log(myVar.attack());
console.log(myVar.weapon.damage);
