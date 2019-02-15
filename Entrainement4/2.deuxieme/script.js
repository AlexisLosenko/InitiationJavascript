function init(){

    let txt = document.querySelector('#texte');
    let item = document.querySelectorAll('a');

    item[0].addEventListener("click",show);
    item[1].addEventListener("click",hide);

    function show(){

        item[0] = txt.style.display = "block";
    }

    function hide(){
        item[1] = txt.style.display = "none";
    }
}

window.onload = init;
