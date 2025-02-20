const cards = document.querySelector("#members");
const path = "./data/mentors.json";

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

        let name = document.createElement('h2');
        name.textContent = member.name;


        let image = document.createElement('img');
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `image for ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', 'auto');

        let subject = document.createElement('p');
        subject.textContent = `Subject: ${member.subject}`;

        let experience = document.createElement('p');
        experience.textContent = `Experience: ${member.experience}. Rating: (${member.rating} out of 5 stars)`;

        let bio = document.createElement('p');
        bio.textContent = member.bio;

        let email = document.createElement('p');
        email.textContent = `Email: ${member.email}`;


        let section = document.createElement('section');
        section.appendChild(name);
        section.appendChild(image);
        section.appendChild(email);
        section.appendChild(subject);
        section.appendChild(experience);
        section.appendChild(bio);

        cards.appendChild(section);
    });
};

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

