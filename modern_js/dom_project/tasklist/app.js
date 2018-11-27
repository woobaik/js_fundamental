// changable values
let min = 2,
    max = 99,
    answer = 42,
    guessCount = 3;

// UI SELECTOR

const guessBox = document.querySelector('#guess-input'),
      guessSubmit = document.querySelector('#guess-btn'),
      messageBox = document.querySelector('.message'),
      minContainer = document.querySelector('.min-num'),
      maxContainer = document.querySelector('.max-num');


minContainer.textContent = min;
maxContainer.textContent = max;


guessSubmit.addEventListener('click', () => {
  let guess = parseInt(guessBox.value);

  //validate input

  if(isNaN(guess) || guess < min || guess > max) {
    errorMsg(messageBox)
  }

  if (guess === answer) {
    success(guessBox);
  }


  guessCount -= 1
  if (guess < answer) {
      
  }

  else {

  }
});


function errorMsg(location) {
  location.style.color = 'red'
  location.textContent = `Please Enter Number between ${min} and ${max}`
}

function success(location) {
  location.style.border = '2px solid #6fce7c';
  location.disabled = true;
  messageBox.innerText = `Yes! the correct answer was ${answer}`;
  messageBox.style.color = "#6fce7c"
}

function guessCounterMsg() {
  if (guessCount === 1) {
    messageBox.innerText = `You have only 1 guess remain.`
  }

  else if (guessCount === 0) {
    messageBox.innerText = `You lose.`
    guessBox.disabled = true;
    guessBox.style.border = '2px solid red';
    guessSubmit.display = 'none';
  }

  else {
    messageBox.innerText = `You have ${guessCount} guesses remain.`
  }



}
