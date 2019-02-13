document.getElementById("test").onclick = function() {testWhile()};
function testWhile(){
    do{
        mot = prompt("Entrez un mot ou une phrase contenant la lettre 'p'");
        test= mot.search("p");
    }while(test < 0);
    window.alert(mot);
}
