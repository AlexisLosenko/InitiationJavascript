document.getElementById("choix").onclick = function() {faireChoix()};

function faireChoix(){
    x = Number(prompt("Faites un choix de 1 à 3 !"));
    switch(x){
        case 1 :
            window.alert("1. EGOCENTRIQUE");
            break;
        case 2 :
            window.alert("2. Bravo...");
            break;
        case 3 :
            window.alert("3. Bêêêêêê");
            break;
        default:
            window.alert("Sérieusement?");
            break;
    }
}