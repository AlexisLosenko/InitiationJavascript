const play = () => {
    let count = 0;
    let numberToFind = Math.floor((Math.random() * 80) + 20);
    let userNumber;

    while (userNumber !== numberToFind) {
        userNumber = Number(prompt("Entrez un nombre entre 20 et 80"));

        while (userNumber > 80 || Number.isInteger(userNumber) === false || userNumber < 20) {
            userNumber = Number(prompt("Entrer une valeur correct(entre 20 et 80)"));
            console.log(userNumber);
        }
        if (userNumber < numberToFind) {
            alert("C'est plus !");
            count++;
        } else if (userNumber > numberToFind) {
            alert(" C'est moins!")
            count++;
        }
    }


    if (userNumber === numberToFind) {
        alert(`En ${count} coups , tu as réussis à trouver le prix de ${numberToFind}€`);
    }
}
