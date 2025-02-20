const modal = document.querySelector('#dialogBox');
const closeModal = document.querySelector('#closeButton');
closeModal.addEventListener('click', () => modal.close());

const title = document.querySelector('#modalTitle');
const details = document.querySelector('#modalDetails');

const ml1Btn = document.querySelector('#btnMath');

ml1Btn.addEventListener('click', () => {
    title.innerHTML = "Quantitative Ability";
    details.innerHTML = `
        <p>Our comprehensive Quantitative Ability Review Program covers all key concepts and skills necessary for success in the Pisay NCE. Benefits include:</p>
        <ul>
            <li>In-depth review of algebra, geometry, trigonometry, and other essential math topics.</li>
            <li>Proven test-taking strategies and techniques specifically for the NCE Math section.</li>
            <li>Practice exams and quizzes to assess progress and identify areas for improvement.</li>
            <li>Personalized feedback from experienced math instructors.</li>
            <li>Access to online resources and study materials.</li>
        </ul> `;
    modal.showModal();

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});

const ml2Btn = document.querySelector('#btnScience');
ml2Btn.addEventListener('click', () => {
    title.innerHTML = "Scientific Ability"
    details.innerHTML = `
        <p>Our Scientific Ability Review Program prepares students for the NCE Science section, covering key concepts and skills in:</p>
        <ul>
            <li>Biology (e.g., cell biology, genetics, ecology)</li>
            <li>Chemistry (e.g., atomic structure, chemical reactions, stoichiometry)</li>
            <li>Physics (e.g., mechanics, electricity, magnetism)</li>
            <li>Earth Science (e.g., geology, meteorology, astronomy)</li>
        </ul>
        <p>Benefits include expert instruction, practice tests, and personalized feedback. </p>
    `;
    modal.showModal();

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});

const ml3Btn = document.querySelector('#btnEnglish');
ml3Btn.addEventListener('click', () => {
    title.innerHTML = "Verbal Aptitude"
    details.innerHTML = `
        <p>Our Verbal Aptitude Review Program helps students develop strong reading comprehension, vocabulary, and language skills essential for the NCE. We cover:</p>
        <ul>
            <li>Reading comprehension strategies (identifying main ideas, inferencing, analyzing text structure)</li>
            <li>Vocabulary building techniques and common NCE vocabulary words</li>
            <li>Grammar and mechanics review</li>
            <li>Effective communication and writing skills</li>
        </ul>
        <p>Benefits include improved reading speed, enhanced vocabulary, and increased confidence in verbal reasoning. </p>
    `;
    modal.showModal();

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});

const ml4Btn = document.querySelector('#btnAbstract');
ml4Btn.addEventListener('click', () => {
    title.innerHTML = "Abstract Reasoning"
    details.innerHTML = `
        <p>Our Abstract Reasoning Review Program focuses on developing critical thinking and problem-solving skills necessary for abstract reasoning questions on the NCE.  We cover:</p>
        <ul>
            <li>Pattern recognition and analysis</li>
            <li>Logical deduction and inference</li>
            <li>Spatial reasoning and visualization</li>
            <li>Problem-solving strategies for abstract concepts</li>
        </ul>
        <p>Benefits include sharpened analytical skills, improved logical thinking, and increased ability to solve complex problems. </p>
    `;
    modal.showModal();

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});

document.querySelector('#date').value = new Date().toDateString();
