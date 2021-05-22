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





//let playerSelection = document.querySelector("#player-selection");

function checker(){
    if(document.getElementById("rock").checked){
        return "rock";
    } else if(document.getElementById("paper").checked){
        return "paper";
    } else if(document.getElementById("scissors").checked){
        return "scissors";
    }

}

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

function playRounds(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Draw!";
    } else if (playerSelection === "rock" && computerSelection ==="paper") {
        computerScore++;
        return "Computer wins! Paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection ==="scissors") {
        playerScore++;
        return "Player wins! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection ==="scissors") {
        computerScore++;
        return "Computer wins! Scissors beats paper!";
    } else if (playerSelection === "paper" && computerSelection ==="rock") {
        playerScore++;
        return "Player wins! Paper beats rock!";
    }else if (playerSelection === "scissors" && computerSelection ==="paper") {
        playerScore++;
        return "Player wins! Scissors beats paper!";
    }else if (playerSelection === "scissors" && computerSelection ==="rock") {
        computerScore++;
        return "Computer wins! Rock beats scissors!";
    } else {
        return "not sure!";
    }
};

function winner(){
    if(playerScore==5){
        computerScore = 0;
        playerScore = 0;
        return "Player wins! New game!";
    }
    else if (computerScore==5){
        computerScore = 0;
        playerScore = 0;
        return "Computer wins! New game!";
    } else {
        return "next turn";
    }
}



function playGame(){
    computerSelection = computerPlay();
    playerSelection = checker();
    console.log("Player: "+ playerSelection+"  Computer: " +computerSelection );
    
    document.getElementById("display").innerHTML = "Player: "+ playerSelection+".  Computer: " +computerSelection +".";
    document.getElementById("score").innerHTML = playRounds(playerSelection, computerSelection)+" "+ playerScore + "-" +computerScore;
    document.getElementById("result").innerHTML = winner();

    

}

