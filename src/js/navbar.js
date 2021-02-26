import { doc } from "prettier"

function toggleNavbar() {
    const toggleButton = document.querySelector(".btn-toggle");
    const navbarLinks = document.querySelector(".mobnavbar");

    toggleButton.addEventListener("click", () => {
        navbarLinks.classList.toggle(".mobnavbar-open");
    });
}

export default toggleNavbar;