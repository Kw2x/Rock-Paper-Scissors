let playerSelection = prompt('Rock, Paper, Scissors')
playerSelection = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();


console.log(getRound(playerSelection, computerSelection));

function getComputerChoice() {
    let cChoice = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * cChoice.length);
    return(cChoice[random]);
   }

function getRound(playerSelection, computerSelection) {
   let playerScore= 0;
   let computerScore= 0;
   let tieScore= 0;

   if (playerSelection === computerSelection) {
      tieScore++; 
      return `It's a tie! you both picked ${playerSelection}`;
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return "Player wins! Rock beats Scissors"
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return "Player wins! Paper beats Rock" 
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
      return "Player wins! Scissors beats Paper" 
   } else {
      computerScore++; 
      return `You lose! ${computerSelection} beats ${playerSelection}`
 }
}

function getGame() {
   for (let i = 0; i < 5; i++) {
      getRound();
      let score = 0
      score = score + 1;
   return (`The score is now ${score + 1}`) 
   }}