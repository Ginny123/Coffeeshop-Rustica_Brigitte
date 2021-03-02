function toggleNavbar() {
    const menuButton = document.querySelector(".btn-toggle-open");
    const closeButton = document.querySelector(".btn-toggle-close");
    const navbarLinks = document.querySelector(".mobnavbar");

let isMenuOpen = false;

    menuButton.addEventListener("click", () => {
        console.log("hallo Click");
        if(!isMenuOpen) {           
            navbarLinks.classList.add("mobnavbar-open");
            isMenuOpen = true;
        }
        
    });
    closeButton.addEventListener("click", () => {
        if(isMenuOpen) {           
            navbarLinks.classList.remove("mobnavbar-open");
            isMenuOpen = false;
        }
    });
    console.log("Variante: if-else");
}

export default toggleNavbar


window.onscroll = function () { 
    const myNav = document.querySelector(".navbar");
    console.log("Let's roll!")
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
}