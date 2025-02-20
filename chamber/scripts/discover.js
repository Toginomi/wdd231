const cards = document.querySelector("#items-of-interest");
const path = "./data/items.json";

async function getMembers() {
    try {
        const response = await fetch(path);
        const data = await response.json();
        //console.log(data.members);
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}
getMembers();

const displayMembers = (members) => {
    members.forEach((member) => {

        let title = document.createElement('h2');
        let image = document.createElement('figure');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let button = document.createElement('button');

        title.textContent = member.name;
        image.innerHTML = `
            <img src="${member.image}" alt='Image for ${member.name}' width='300px' height='auto' loading='lazy'>
            <figcaption>Image for ${member.name}</figcaption>`
        address.textContent = member.address;
        description.textContent = member.description;
        button.textContent = "Learn More";

        const memberSection = document.createElement('section');
        memberSection.appendChild(title);
        memberSection.appendChild(address);
        memberSection.appendChild(image);
        memberSection.appendChild(description);
        memberSection.appendChild(button);

        cards.appendChild(memberSection)
    });
}

const visitorMessage = document.getElementById('visitor-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = Date.now();

if (!lastVisit) {
    visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysDifference = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysDifference < 1) {
        visitorMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitorMessage.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
    }
}

localStorage.setItem('lastVisit', currentVisit);
