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
        console.log(`\n%cIt's a tie! both chose ${humanChoice}`, "color:lightblue")
    } else if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")){
        console.log(`\n%cYou won! ${humanChoice} beats ${computerChoice}!`, "color:green");
        humanScore++;
    } else{
        console.log(`\n%cYou lost! ${computerChoice} beats ${humanChoice}!`, "color:red")
        computerScore++;
    }
  }  

function playGame(){
    console.log("%c---starting the game---", "color:orange");
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`%cHuman Score: ${humanScore}`, "color:#FF1493");
        console.log(`%cComputer Score ${computerScore}`, "color:#66CDAA");
    }
    if(humanScore > computerScore){
        console.log("\n \n%cHuman won the game!", "color:green")
    }else if( humanScore < computerScore){
        console.log("\n \n%cComputer won the game!", "color:red")
    }else {
        console.log("\n \n%cIts a TIE!", "color:lightblue")
    }
}

  playGame();
  

