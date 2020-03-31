//Import the isYes function
import {isYes} from "./is-yes.js";

//Set a value for the quizbutton
const quizButton = document.getElementById('quiz-button');
console.log('quizButton found');

//Set destination for results
const resultsDisplay = document.getElementById('quiz-results');

//The event listener
quizButton.addEventListener('click', () => {
    console.log('I was clicked!');
});

// response can be "Yes", "y", "yes", "Y"
