function init(){

    let button = document.querySelector('button').addEventListener("click",raz);

    function raz()
    {
        let items = document.querySelectorAll('input');

        for (let i = 0; i < items.length; ++i) {
            items[j].value = '';
        }
    }
}

window.onload = init;
