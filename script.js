function computerPlay() {
   let oneToThree = Math.floor(Math.random() * 3);
   if (oneToThree===0){
       return "rock";
     } else if (oneToThree===1) {
         return "paper";
     } else {
         return "scissors";
     }
}

//const playerSelection = "scissors";
const computerSelection = computerPlay();

console.log(computerSelection);

let playerSelection = document.querySelector("#player-selection");

console.log(playerSelection);
function playRounds(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Draw!";
    } else if (playerSelection === "rock" && computerSelection ==="paper") {
        return "Computer wins! Paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection ==="scissors") {
        return "Player wins! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection ==="scissors") {
        return "Computer wins! Scissors beats paper!";
    } else if (playerSelection === "paper" && computerSelection ==="rock") {
        return "Player wins! Paper beats rock!";
    }else if (playerSelection === "scissors" && computerSelection ==="paper") {
        return "Player wins! Scissors beats paper!";
    }else if (playerSelection === "scissors" && computerSelection ==="rock") {
        return "Computer wins! Rock beats scissors!";
    } else {
        return "not sure!";
    }
};
console.log(playRounds(playerSelection, computerSelection));