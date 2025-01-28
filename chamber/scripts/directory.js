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

const cards = document.querySelector('#members');
const path = "./data/members.json";

async function getMembers() {
    try {
        const response = await fetch(path);
        const data = await response.json();
        //console.log(data.members);
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}
getMembers();

const displayMembers = (members) => {
    members.forEach((member) => {

        let name = document.createElement('h2');
        let image = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');

        name.textContent = member.name;
        name.innerHTML = `<a href="${member.website}">${member.name}</a>`
        address.textContent = member.address;
        phone.textContent = member.phone;

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `image for ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '180');

        const memberSection = document.createElement('section');
        memberSection.appendChild(image);
        memberSection.appendChild(name);
        memberSection.appendChild(address);
        memberSection.appendChild(phone)

        if (member.level === 3) {
            memberSection.style.border = "5px solid gold";
            memberSection.style.backgroundColor = "#fff9e6";
        } else if (member.level === 2) {
            memberSection.style.border = "5px solid silver";
            memberSection.style.backgroundColor = "#f0f0f0";
        } else {
            memberSection.style.border = "5px solid #dca570";
            memberSection.style.backgroundColor = "#f7f7f7";

        }

        cards.appendChild(memberSection)
    });
}


const setGridLayout = document.querySelector('#gridButton')
const setListLayout = document.querySelector('#listButton')
setGridLayout.addEventListener('click', () => {
    setGridLayout.className = "active"
    setListLayout.className = ""
    cards.className = 'grid'
})
setListLayout.addEventListener('click', () => {
    setListLayout.className = "active"
    setGridLayout.className = ""
    cards.className = 'list'
})