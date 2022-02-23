'use strict';

// // selecting an element
// // queryselected a method->parameter selector
// // CLASS = .
// // ID = #
// console.log(document.querySelector('.message').textContent); // DOM manipulation returns the text inside the <p>

// ---------- DOM MANIPULATION, WEB APIS, NOT PART OF JAVASCRIPT
// DOCUMENT OBJECT MODEL, CHANGE TEXT, HTML ATTRIBUTES, CSS STYLE
// PARENT, CHILD etc, document object OLDEST PARENT
// document--><HTML>--><HEAD>--<BODY> etc...

// -------- SELECTING AND MANIPULATING ELEMENTS

// . = CLASS SELECTOR
// # = ID SELECTOR

// console.log(document.querySelector('.message').textContent); // DOM manipulation returns the text inside the <p>

// document.querySelector('.message').textContent = 'Correct Number!🎈';
// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number!🎈')
// );

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// ------------- HANDLING CLICK EVENTS + GAME LOGIC
// Make something happen, EVENTLISTENER,
// EVENT IS SOPMETHING THAT HAPPENS ON THE PAGE.
// EVENTLISTENER === WAIT UNTIL SOMETHING HAPPENS AND REACT TO IT

// DRY Function for message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const getRandomNr = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

// defining sercret number OUTSIDE handler function, 1-20
let secretNumber = getRandomNr();
let score = 20; // Starting score, let because we gonna decrease it
let highscore = 0;

// Select Id/class on the element to listen to
// 2 params // type of event + function value (eventhandler, make a new funchandler or pass it in)
document.querySelector('.check').addEventListener('click', function () {
  // log class guess value
  const guess = Number(document.querySelector('.guess').value); // Convert
  console.log(`Guessed Nr: ${guess} , ${typeof guess}`);

  if (!guess) {
    // if not guess, no input!
    displayMessage('No Number! 😒');
    // PLAYER WINS === BACKGROUND GREEN AND number double width
  } else if (guess === secretNumber) {
    // Showing secret number on screen
    document.querySelector('.number').textContent = secretNumber;

    displayMessage('You guessed Correct! 🎈');
    // only body, no class so just body, MUST BE STRING WHEN MAN CSS STYLE
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Width
    document.querySelector('.number').style.width = '30rem';

    // Highscore assigning
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Ternary Operator for if and else cond "?" will return a value aswell
      displayMessage(guess > secretNumber ? 'Too high! 🤣' : 'Too low! 🤣');
      score--; // decrease by 1
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 🤷‍♂️');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// RESET GAME                                         // annonymous func
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  // reAssign sercretnr to make a new number
  secretNumber = getRandomNr();

  // Restore fields
  displayMessage('Start guessing!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  // empty string
  document.querySelector('.guess').value = '';
  // Black screen + size of ?
  document.querySelector('body').style.backgroundColor = '#222';
  // Width
  document.querySelector('.number').style.width = '15rem';
});
