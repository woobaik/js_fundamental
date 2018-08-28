/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let dice, currentScore, totalScore, newBtn, playerNumber;

dice = Math.floor(Math.random() * 6) + 1;
currentScore = [ 0, 0 ];
totalScore = [0,0];
playerNumber = 0;


/***************************************************
  ========when click a NEW GAME button==========

  L reset currentScore to 0.
  L reset totalScore to 0.
  L hide the dice image.
  L
***************************************************/

var currentScoreman = document.querySelector('#current-'+ playerNumber).textContent = dice;

var score = document.querySelector('#score-'+ playerNumber).textContent =  totalScore[playerNumber];
