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

console.log(getComputerChoice());