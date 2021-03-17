var menu = document.getElementById("menu");

var x = menu.offsetTop;

function test(){

    if(scrollY >= x){
        menu.classList.add("yapıskan");
    }else{
        menu.classList.remove("yapıskan");
    }
}