let playerScore = 0;
let computerScore = 0;
getGame();

function getRound(playerSelection, computerSelection) {
switch(playerSelection){
        case "Rock":
            switch(computerSelection){
                case "Rock":
                    console.log("Tie")
                    break;
                case "Paper":
                    console.log("Computer wins round");
                    computerScore++;
                    break;
                case "Scissors":
                    console.log("Player wins round");
                    playerScore++;
                    break;
                }
            break;
        case "Paper":
            switch(computerSelection){
                case "Rock":
                    console.log("Player wins round")
                    playerScore++
                    break;
                case "Paper":
                    console.log("Tie");
                    break;
                case "Scissors":
                    console.log("Computer wins round");
                    computerScore++;
                    break;
            }    
        break;
        case "Scissors":
            switch(computerSelection){
                case "Rock":
                    console.log("Computer wins round")
                    computerScore++;
                    break;
                case "Paper":
                    console.log("Player wins round");
                    playerScore++;
                    break;
                case "Scissors":
                    console.log("Tie");
                    break;
            }
        break;
    }
    console.log("Computer score " + computerScore);
    console.log("Player score " + playerScore);
}

function getComputerChoice() {  
   let randomNumber = Math.floor(Math.random());
   switch(randomNumber){
       case 1:
           return "Rock";
       case 2:
           return "Paper";
       case 3:
           return "Scissors";
       }
}


function getGame() {  

    const btnr= document.querySelector('.btnr')
    btnr.addEventListener('click', getRound); {
        console.log(playerSelection)
    };
    
    const btnp= documenet.querySelector('.btnp')
    btnp.addEventListener('click', getRound); { 
        console.log(playerSelection) 
    };
    
    const btns= documenet.querySelector('.btns')
    btns.addEventListener('click', getRound); { 
          console.log(playerSelection); 
    };

   console.log("Game over")
   if(playerScore > computerScore) {
       console.log("Player Wins")
   } else if (playerScore == computerScore) {
       console.log("Tie")
   } else {
       console.log("Computer Wins");
   }
}
    
