/*eslint-disable*/
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

export default toggleNavbar;


// window.onscroll = function () { 
//     const myNav = document.querySelector(".navbar");
//     console.log("Let's roll!")
//     if (document.body.scrollTop >= 200 ) {
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     } 
//     else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }
// .nav-colored { background-color:#000; }
// .nav-transparent { background-color:transparent;}
// }

function scrollbar() {
    let yOffset = window.pageYOffset;
    let isNavbarColored = true;
    const myNavbar = document.querySelector(".navbar");
    const s1 = document.querySelector(".s1").offsetTop;

    window.addEventListener("scroll", () => {      
        
        
        if(yOffset > s1 && !isNavbarColored)
        {
          document.querySelector('nav').style.background = "red";
        }

        if(yOffset > s2 && yOffset < s3 )
        {
          document.getElementById('nav').style.background = "green";
        }

        if(yOffset > s3 && yOffset < s4 )
        {
          document.getElementById('nav').style.background = "blue";
        }

        if(yOffset > s4 && yOffset < s5 )
        {
          document.getElementById('nav').style.background = "violet";
        }

        if(yOffset > s5)
        {
          document.getElementById('nav').style.background = "brown";
        }
    });
}
window.onload = init();