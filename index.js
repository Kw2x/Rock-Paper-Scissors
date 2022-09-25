//#create a variable that holds the value of the computer choice (paer, rock, scissors) - getComputerChoice

// Computer Choice
let cChoice = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice () {
    let random = Math.floor(Math.random() * cChoice.length);
    return (cChoice[random]);
}
//# write a function that plays a single round - playRound function should take two parameters -the playerSelection and the computerSelection

// getRound
function getRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
      return `It's a tie! you both picked ${playerSelection}`;
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! Rock beats Scissors";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats Rock";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You win! Scissors beats Paper";
   } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
   }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(getRound(playerSelection.toLowerCase(), computerSelection));
//# then return a string that delcares the winner of the round like - "You Lose! Paper beats Rock"
else {
   return `You lose! ${computerSelection} beats ${playerSelection}`;
}
//# make your functions playerSelection parameter case insenstive so the user can input and variation of - (rock, Rock RoCk)
console.log(getRound(playerSelection.toLowerCase(), computerSelection));
//# IMPORTANT we want to return the of the function call not console.log()
console.log(getRound(playerSelection.toLowerCase(), computerSelection));
//# write a new function called game(). it calls the playRound function inside of game()
function game() {
      getRound()
}
//# create a loop to play 5 rounds 
function game() {
   for (let i = 0; i < 5; i++) {
      getRound()
   }
}