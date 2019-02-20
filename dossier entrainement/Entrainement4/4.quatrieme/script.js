function init(){

    let pw = document.querySelectorAll('input');
    let button = document.querySelector('button');

    button.addEventListener("click",check);

    function check(){
        if(pw[0].value !== pw[1].value){

            pw[0].style.border = "1px solid red";
            pw[1].style.border = "1px solid red";
        }

        else{
            pw[0].style.border = "1px solid green";
            pw[1].style.border = "1px solid green";
        }

    }

   }
window.onload = init;
