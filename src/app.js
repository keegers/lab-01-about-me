//Import the isYes function
import { isYes } from './is-yes.js';

const confetti = document.getElementById('celebrate-image');

//Set a value for the quizbutton
const quizButton = document.getElementById('quiz-button');

//Set selector for quiz section
const quizArea = document.getElementById('quiz-section');

//Set destination for results
const resultsDisplay = document.getElementById('quiz-results');

//The event listener
quizButton.addEventListener('click', () => {
    const name = prompt('What is your name?');
    let score = 0;

    resultsDisplay.style.display = 'none';

    if (quizArea.classList.contains('celebrate')) {
        quizArea.classList.toggle('celebrate');
    }
    
    //do they want to take the quiz (call isYes), else return;
    const confirm = prompt('Do you want to take the quiz? (Yes / No)');

    if (isYes(confirm)) {
        const answer1 = prompt('Is Cinema 4d used in motion graphics?');
        if (isYes(answer1) === true) {
            score++;
        }
        const answer2 = prompt('Can you export and import from Unreal to Cinema 4d? (Yes / No)');
        if (isYes(answer2) === true) {
            score++;
        }
        const answer3 = prompt('Was Inception one of the movies with VFX in Cinema 4d? (Yes / No)');
        if (isYes(answer3) === true) {
            score++;
        }
        alert('Thanks for your responses! Check how you did at the bottom of the page.');
        const result = Math.round((score / 3) * 100);
        if (result > 50) {
            confetti.style.display = 'flex';
            quizArea.classList.toggle('celebrate');
            resultsDisplay.textContent = `Congratulations ${name}! You got ${score}/3 correct with ${result}% accuracy! Wow!`;
        } else {
            resultsDisplay.textContent = `Thanks ${name}, you got ${score}/3 correct with ${result}% accuracy.`;
        }
        resultsDisplay.style.display = 'block';
        return;
    }
});


