let playerSelection = prompt('Rock, Paper, Scissors')
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();

let playerScore=0;
let computerScore=0;
let tieScore=0;
console.log(getRound(playerSelection, computerSelection));

function getComputerChoice() {
    let cChoice = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * cChoice.length);
    return(cChoice[random]);}

function getRound(playerSelection, computerSelection) {
   if (playerSelection === getComputerChoice) {
      tieScore++; 
      return `It's a tie! you both picked ${playerSelection}`;
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return "Player wins! Rock beats Scissors" + playerScore;
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return "Player wins! Paper beats Rock" + playerScore;
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
      return "Player wins! Scissors beats Paper" + playerScore;
   } else {
      computerScore++; 
      return `You lose! ${playerSelection} beats ${computerSelection}` + computerScore;
 }
}

function getGame() {
   for (let i = 0; i <5; i++){
      getRound();
      if (playerScore>computerScore){
         return "You Win this game.\n -------";
       }
         if (playerScore==computerScore){
           return "This game is a tie.\n -------";
         }
        else{
         return "You Lose this game.\n -------";
       }
   }
}