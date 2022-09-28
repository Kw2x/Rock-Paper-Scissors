
function getComputerChoice() {
    let cChoice = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * cChoice.length);
    return(cChoice[random]);}
    
let playerSelection = prompt('Rock, Paper, Scissors')
playerSelection = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();

console.log(getRound(playerSelection, computerSelection));

function getRound(playerSelection, computerSelection) {
let playerScore= 0;
let computerScore= 0;
let tieScore= 0;
   if (playerSelection === computerSelection) {
     
      return `It's a tie! you both picked ${playerSelection}`;
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
     
      return "Player wins! Rock beats Scissors"
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      
      return "Player wins! Paper beats Rock" 
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
     
      return "Player wins! Scissors beats Paper" 
   } else {
     
    return `You lose! ${computerSelection} beats ${playerSelection}`
 }
}

function getGame(){
let playerScore= 0;
let computerScore= 0;
let tieScore= 0;
getRound(playerSelection, computerSelection)
for (let i = 0; i < 5; i++){
if() {

}
 else if(playerSelection > computerSelection){
  
 }
 else{
  
 }

}} 