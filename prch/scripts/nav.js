document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector("#hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        if (hamburgerMenu.textContent != "X") {
            hamburgerMenu.textContent = "X";
        }
        else {
            hamburgerMenu.textContent = "☰";
        }
    });
});
