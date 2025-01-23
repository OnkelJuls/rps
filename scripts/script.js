

function getComputerChoice(){
    let choice =  Math.floor(Math.random() * 3)
    if (choice == 0){
        return "Rock";
    } else if (choice == 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Choose one: 0 = Rock, 1 = Paper, 2 = Scissors");
    if (choice == 0){
        return "Rock";
    } else if (choice == 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "Rock" && computerChoice == "Scissors"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        score('human');
    } else if (humanChoice == "Paper" && computerChoice == "Rock"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        score('human');
    } else if (humanChoice == "Scissors" && computerChoice == "Paper"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        score('human');
    } else if (humanChoice == computerChoice){
        console.log(`It's a tie! Both chose ${humanChoice}`)
    } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        score('computer');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function score(win){
    if (win == 'human'){
        humanScore++;
        console.log(humanScore);
    } else if (win == 'computer'){
        computerScore++;
        console.log(computerScore);
    }
}

function playGame(){
    playRound(humanSelection, computerSelection);    
}

playGame();