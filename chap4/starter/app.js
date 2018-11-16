/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var rollDiceBtn, diceBtn, activePlayer, current, total;

rollDiceBtn = document.querySelector('.btn-roll');
diceBtn = document.querySelector('.dice');
holdBtn = document.querySelector('.btn-hold');

//====== # initialize ======
init()

//====== # Roll Dice btn function ======
rollDiceBtn.addEventListener('click', function() {
  // genenrate number
  var randomNumber = Math.random() * 6;
  var dice = Math.floor(randomNumber) + 1;

  diceBtn.src = 'dice-' + dice + '.png'
  // check if dice is 1, if so, change activePlayer, else, add number to current.
  if (dice !== 1) {
    current += dice;
    reflectCurrent()
  }
  else {
    current = 0;
    reflectCurrent()
    toggleActivePlayer()
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    toggleActivePlayer()
  }

  // display current sum number to currentbox
  function reflectCurrent() {
    document.getElementById('current-'+ activePlayer).textContent = current;
  }

  // toggle active player status
  function toggleActivePlayer() {
    document.querySelector('.player-'+ activePlayer + '-panel').classList.toggle("active")
  }
})

holdBtn.addEventListener('click', function() {


})


function init(){
  activePlayer = 0
  current = 0
  total = [0, 0]
  for (var i = 0; i < 2; i++) {
    document.getElementById('current-'+ i).textContent = 0;
    document.getElementById('score-'+ i).textContent = 0;
  }
}
