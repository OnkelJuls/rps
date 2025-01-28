let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let compuerChoice = Math.floor(Math.random() * 3);
    if (compuerChoice == 0){
        return "Rock";
    } else if( compuerChoice == 1){
        return "Paper";
    } else if(compuerChoice  == 2){
        return "Scissors"
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your Choice: Rock | Paper | Scissors").toLowerCase();
    if (humanChoice == "rock"){
        return "Rock";
    } else if (humanChoice == "paper"){
        return "Paper";
    } else if (humanChoice == "scissors"){
        return "Scissors";
    } else {
        console.log("Invalid! please enter 'rock', 'paper' or 'scissors'!");
    }
    console.log(humanChoice);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        console.log(`It's a tie! both chose ${humanChoice}`)
    } else if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")){
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else{
        console.log(`You lost! ${computerChoice} beats ${humanChoice}!`)
        computerScore++;
    }
  }  

function playGame(){
    console.log("---starting the game---");
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore){
        console.log("Human won the game!")
    }else if( humanScore < computerScore){
        console.log("Computer won the game!")
    }else {
        console.log("Its a TIE!")
    }
}

  playGame();
  

