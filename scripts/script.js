let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice =  Math.floor(Math.random() * 3)
    if (choice == 0){
        return console.log("Rock");
    } else if (choice == 1){
        return console.log("Paper");
    } else {
        return console.log("Scissors");
    }
}



function getHumanChoice(){
    let choice = prompt("Choose one: 0 = Rock, 1 = Paper, 2 = Scissors");
    if (choice == 0){
        return console.log("Rock");
    } else if (choice == 1){
        return console.log("Paper");
    } else {
        return console.log("Scissors");
    }
}

getHumanChoice();
getComputerChoice();
