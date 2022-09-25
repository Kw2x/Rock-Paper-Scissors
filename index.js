//#create a variable that holds the value of the computer choice (paer, rock, scissors) - getComputerChoice

// Computer Choice
let cChoice = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice () {
    let random = Math.floor(Math.random() * cChoice.length);
    return (cChoice[random]);
}

// Player Choice
let pChoice = ['Rock', 'Paper', 'Scissors'];
function getPlayerChoice(){
    let random = Math.floor(Math.random() * pChoice.length);
    return (pChoice[random]);
}
function playRound(playerSelection, computerSelection) {
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
 

//# write a function that plays a single round - playRound function should take two parameters -the playerSelection and the computerSelection


// this dosnt work beaause cChoice and pChoice  are inside an array. 

   
//# then return a string that delcares the winner of the round like - "You Lose! Paper beats Rock"
//# make your functions playerSelection parameter case senstive so the user can input and variation of - (rock, Rock RoCk)
//# IMPORTANT we want to return the of the function call not console.log()
//# write a new function called game(). it calls the playRound function inside of game()
//# create a loop to play 5 rounds 