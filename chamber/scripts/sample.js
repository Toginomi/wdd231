const cards = document.querySelector('#members');
const url = 'https://toginomi.github.io/wdd231/chamber/data/members.json';

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.members);
        //displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}
getMembers();