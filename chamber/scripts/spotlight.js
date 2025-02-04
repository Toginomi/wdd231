const spotlightDiv = document.querySelector('#spotlight');

const path = './data/members.json';

async function getMembers() {
    const response = await fetch(path);
    const data = await response.json();
    const spotlightMembers = data.members.filter(member => member.level > 1);
    displayMembers(spotlightMembers)
}

getMembers();

const displayMembers = (myArray) => {
    myArray.sort(() => 0.5 - Math.random()).slice(0, 3).forEach((member, index) => {
        let name = document.createElement('h3');
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

        const memberSection = document.createElement('section');;
        memberSection.appendChild(name);
        memberSection.appendChild(image)
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

        spotlightDiv.appendChild(memberSection)
    });
};