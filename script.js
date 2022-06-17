'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  newSecretNumber();
});
function newSecretNumber() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('new secret number', secretNumber);
}
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    // When Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    console.log('highscore', highscore);
    console.log('score', score);
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
