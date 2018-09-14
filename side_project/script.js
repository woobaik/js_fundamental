const OPTION = ["scissors", "rock", "paper"]


function computerPlay() {
  return OPTION[Math.floor(Math.random() * 3)];
}

function round(selection) {
  const result = document.querySelector(".result");
  let resultText;
  let playerMove = selection;
  let computerMove = computerPlay()
  if (OPTION.indexOf(selection) === -1) {
    resultText = "You Enter The Invalid Move"
    round();
  } else if (selection === computerMove) {
    resultText =`Draw, You: ${playerMove}, Computer:${computerMove}.`
  } else if (findIndex(selection) - 1 === findIndex(computerMove)) {
      resultText = `You Won! You: ${playerMove}, Computer:${computerMove}.`
  } else {
      resultText = findIndex(selection), findIndex(computerMove)
      resultText = `You Lost! You: ${playerMove}, Computer:${computerMove}.`
    }
    result.textContent = resultText
}

function findIndex(ele) {
  return OPTION.indexOf(ele)
}


const playRound = document.querySelector(".play-round");

const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
//
rock.addEventListener('click', () => round('rock')) ;
scissors.addEventListener('click', () => round('scissors'));
paper.addEventListener('click', ()=> round('paper'));
