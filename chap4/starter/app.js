/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let currentScore, totalScore, currentPlayer

currentScore = [ 0, 0 ];
totalScore = [0,0];
currentPlayer = 0
var diceDom = document.querySelector('.dice')


/***************************************************
  ========when click a NEW GAME button==========

  L reset currentScore to 0.
  L reset totalScore to 0.
  L hide the dice image.
  L
***************************************************/





//reset total score
document.getElementById('score-0').textContent = 0
document.getElementById('score-1').textContent = 0
document.getElementById('current-0').textContent = 0
document.getElementById('current-0').textContent = 0






diceDom.style.display = 'none';


// Rolling a dice with class "btn-roll" button.

document.querySelector('.btn-roll').addEventListener('click', function() {

  //1. random number
  var dice = Math.floor(Math.random() * 6) + 1

  //2. update number if current score is not 1
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice +'.png'




})
