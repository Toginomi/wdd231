const urlParams = new URLSearchParams(window.location.search);
const showInfo = document.querySelector('#results');

function getParamValue(paramName) {
    return urlParams.get(paramName) || "Not provided";
}

const programs = urlParams.getAll('programs');
const programsText = programs.length > 0
    ? "Programs: " + programs.join(", ")
    : "No programs selected.";

showInfo.innerHTML = `
    <p>Application from ${getParamValue('first')} ${getParamValue('last')}</p>
    <p>Email: ${getParamValue('email')}</p>
    <p>Phone: ${getParamValue('phone')}</p>
    <p>${programsText}</p>
    <p>Date: ${getParamValue('date')}</p>
`;