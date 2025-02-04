document.addEventListener("DOMContentLoaded", function () {
    const currentYearElement = document.getElementById("currentyear");
    currentYearElement.textContent = new Date().getFullYear();

    const lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent += document.lastModified;

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
