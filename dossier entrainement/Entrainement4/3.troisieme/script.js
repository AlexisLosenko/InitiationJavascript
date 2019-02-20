function init(){

    let color = document.getElementsByClassName('color');
    let txt = document.getElementById('texte');

    color[0].addEventListener("click",green);
    color[1].addEventListener("click",red);
    color[2].addEventListener("click",blue);

    function green(){
        txt.style.color = "green";
    }

    function red(){
        txt.style.color = "red";
    }

    function blue(){
        txt.style.color = "blue";
    }

}

window.onload = init;
