'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;


document.querySelector('.check').addEventListener('click', function() {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // if no input & user hits enter
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    // Player wins
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

  } else if (guess > secretNumber) {
    // user guess is too high
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess to high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // user guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess to low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'start guessing...';
});