const spotlightDiv = document.querySelector('#spotlight');

const path = './data/mentors.json';

async function getMembers() {
    const response = await fetch(path);
    const data = await response.json();
    const spotlightMembers = data.members;
    displayMembers(spotlightMembers)
}

getMembers();

const displayMembers = (myArray) => {
    myArray.sort(() => 0.5 - Math.random()).slice(0, 4).forEach((member, index) => {

        let image = document.createElement('figure');
        image.innerHTML = `
            <img src="${member.image}" alt='Image for ${member.name}' width='75px' height='auto' loading='lazy'>
            <figcaption>${member.name}</figcaption>`

        let name = document.createElement('figcaption');
        name.textContent = member.name;

        const memberSection = document.createElement('section');

        memberSection.appendChild(image);
        spotlightDiv.appendChild(memberSection)
    });
};