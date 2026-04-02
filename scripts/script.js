function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber == 0) {
        return "Rock";
    } else if (randomNumber == 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice:");

    return humanChoice;
}

console.log(getHumanChoice());