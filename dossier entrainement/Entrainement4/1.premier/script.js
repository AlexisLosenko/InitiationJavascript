function init(){

    let item = document.getElementById("image1");
    let x = 0;

    item.addEventListener("mouseover",change);
    item.addEventListener("mouseout",change);

    function change(){
        if(x == 0){
            item.style.border="solid 3px red";
            x = 1;
        }
        else{
            item.style.border="none";
            x = 0;
        }
    }
}

window.onload = init;
