const NavBurger = document.querySelector(".burger");
const NavLista = document.querySelector(".navega_lista");

NavBurger.addEventListener("click", () => {
    NavLista.classList.toggle("navegar_lista_visible");

    if (NavLista.classList.contains("navegar_lista_visible")){
        NavBurger.setAttribute("arial-label", "cerrar menu");
    }else{
        NavBurger.setAttribute("arial-label", "abrir menu");
    }
const MenuLink = document.querySelectorAll(".navega_lista a[href^=\"#\"]");
MenuLink.forEach(MenuLink =>{
    MenuLink.addEventListener("click", function(){
        NavLista.classList.remove("navegar_lista_visible");
    })
})
});