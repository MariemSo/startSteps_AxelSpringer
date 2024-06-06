function toggleMenu(){
    let menu = document.querySelector(".responsive-nav")
    var menuButton = document.querySelector('.menu-toggle')

    if (menu.style.display==="flex"){
        menu.style.display="none";
        menuButton.innerHTML='<img src="/Week4/Day18/pizzaWeb/img/menu.png" class="menu-icon"></img>'
    }
    else{
        menu.style.display="flex";
        menuButton.innerHTML='<img src="/Week4/Day18/pizzaWeb/img/cross.png" class="menu-icon"></img>'
    }
}
