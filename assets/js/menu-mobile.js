document.addEventListener("DOMContentLoaded", (event) => {
    /* Seleccciona los dos elementos principales */
    let mobile_btn = document.querySelector(".navbar_mobile-btn")
    let mobile_menu = document.querySelector(".menu_mobile")

    /* funcion mostrar/ocultar menu */
    const showHiddenMenu = () => {
        let show = document.querySelector(".menu_mobile-show");

        if (show) {
            mobile_menu.classList.remove("menu_mobile-show");
        } else {
            mobile_menu.classList.add("menu_mobile-show");
        }
    };

    /* Click al boton de menu mostrar el menu de navegacion responsive*/
    mobile_btn.addEventListener("click", showHiddenMenu)

    /* Al redimencionarla pantalla ocultar menu si es necesario */
    window.addEventListener("resize", () => {
        let window_width = parseInt(document.body.clientWidth);

        if (window_width >= 1000) {
            mobile_menu.classList.remove("menu_mobile-show");
        }
    });

    /* Poder cerra el menu con boton X */
    let btn_close = document.querySelector(".menu_mobile-close");
    
    btn_close.addEventListener("click", showHiddenMenu);

    /* Desplegar submenus */
    let menu_item = document.querySelectorAll(".menu_mobile-item");

    menu_item.forEach(item => {

       item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild;
            
            if(submenu.className === "submenu_mobile"){
                if(submenu.style.display === "block"){
                    submenu.style.display = "none";
                }else{
                    submenu.style.display = "block";
                }
            }
       }) 
    });
    
})