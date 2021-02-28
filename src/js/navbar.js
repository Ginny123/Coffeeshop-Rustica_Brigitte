function toggleNavbar() {
    const toggleButton = (document.querySelector(".btn-toggle-open") || document.querySelector(".btn-toggle-close"));
    const navbarLinks = document.querySelector(".mobnavbar");

    toggleButton.addEventListener("click", () => {
        navbarLinks.classList.toggle(".mobnavbar-open");
        
    });
    console.log("Variante: toggle");
}

// function toggleNavbar() {
//     const toggleButton = (document.querySelector(".btn-toggle-open") || document.querySelector(".btn-toggle-close"));
//     const navbarLinks = document.querySelector(".mobnavbar");

//     toggleButton.addEventListener("click", () => {
        
//         if(navbarLinks.classList.contains("mobnavbar-open")) {
//             navbarLinks.classList.remove("mobnavbar-open");
//         } else {
//             navbarLinks.classList.add("mobnavbar-open")
//         }
//     });
//     console.log("Variante: if-else");
// }

export default toggleNavbar