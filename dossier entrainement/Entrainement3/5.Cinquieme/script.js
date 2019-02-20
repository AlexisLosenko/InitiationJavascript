function init() {

    let item = document.querySelectorAll('img');
    console.log(item);

    let x = 0;

    for(let i = 0 ; i < item.length; i++){

        item[i].addEventListener("mouseover", change);
        item[i].addEventListener("mouseout", change);

        function change(){

            if(x == 0){
                item[i].setAttribute("src",`img/image${i + 1}_2.jpg`);
                x = 1;
            }
            else{
                item[i].setAttribute("src",`img/image${i + 1}.jpg`);
                x = 0;
            }

        }

    }
}

window.onload = init;
