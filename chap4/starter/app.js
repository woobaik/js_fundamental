/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var rollDiceBtn, diceBtn, activePlayer, current, total;

activePlayer = 0
current = 0
rollDiceBtn = document.querySelector('.btn-roll')
DiceBtn = document.querySelector('.dice')
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
// #initialize



rollDiceBtn.addEventListener('click', function() {
  // genenrate number
  var randomNumber = Math.random() * 6;
  var dice = Math.floor(randomNumber) + 1;


  DiceBtn.src = 'dice-' + dice + '.png'

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
    // <div class="player-0-panel active">
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
