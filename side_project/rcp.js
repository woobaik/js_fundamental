const OPTION = ["scissors", "rock", "paper"]

function computerPlay() {
  return OPTION[Math.floor(Math.random() * 3)];
}

function round() {
  let playerMove = prompt("Enter Your Move");
  let uniformedMove = playerMove.toLowerCase();
  let computerMove = computerPlay()
  if (OPTION.indexOf(uniformedMove) === -1) {
    console.log("You Enter The Invalid Move")
    round();
  } else if (uniformedMove === computerMove) {
    console.log(`Draw, You: ${playerMove}, Computer:${computerMove}.`)
  } else if (findIndex(uniformedMove) -1 === findIndex(computerMove)) {
      console.log(`You Won! You: ${playerMove}, Computer:${computerMove}.`)
  } else {
      console.log(findIndex(uniformedMove), findIndex(computerMove))
      console.log(`You Lost! You: ${playerMove}, Computer:${computerMove}.`)
    }
}

function findIndex(ele) {
  return OPTION.indexOf(ele)
}
round();
