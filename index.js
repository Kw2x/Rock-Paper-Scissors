let playerSelection = prompt('Rock, Paper, Scissors');
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
      return "You win! Rock beats Scissors";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return "You win! Paper beats Rock";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
      return "You win! Scissors beats Paper";
   } else {
      computerScore++; 
      return `You lose! ${playerSelection} beats ${computerSelection}`;
 }
}
