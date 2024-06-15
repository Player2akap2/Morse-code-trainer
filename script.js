// script.js
let currentLetter = '';
let isReversed = false;

const lettersToMorse = {
  'A': '.-',    'B': '-...',  'C': '-.-.', 
  // Add all letters A-Z
};

const morseToLetters = Object.fromEntries(
  Object.entries(lettersToMorse).map(([letter, morse]) => [morse, letter])
);

function getNextLetter() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
}

function displayQuestion() {
  currentLetter = getNextLetter();
  document.getElementById('question').textContent = isReversed ? lettersToMorse[currentLetter] : currentLetter;
}

function submitAnswer(answer) {
  const correctAnswer = isReversed ? morseToLetters[currentLetter] : lettersToMorse[currentLetter];
  if (answer === correctAnswer) {
    displayQuestion(); // Correct answer, get next letter
  } else {
    document.getElementById('answer').textContent = `Correct answer: ${correctAnswer}`;
    setTimeout(displayQuestion, 5000); // Show correct answer for 5 seconds then get next letter
  }
}

document.getElementById('reverseBtn').addEventListener('click', () => {
  isReversed = !isReversed;
  displayQuestion();
});

displayQuestion(); // Start the game