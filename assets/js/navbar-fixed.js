document.addEventListener("DOMContentLoaded", () => {
    let navbar = document.querySelector(".menu_navbar");

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;

        if(scroll > 120){
            navbar.classList.add("menu_navbar-fixed");
        }else{
            navbar.classList.remove("menu_navbar-fixed");
        }
    });
});