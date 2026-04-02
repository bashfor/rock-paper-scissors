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
    //make it case insensitive
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1, humanChoice.length).toLowerCase();

    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        switch (true) {
            case (humanChoice === "Paper" && computerChoice === "Rock"):
                humanScore++;
                break;
            case (humanChoice === "Rock" && computerChoice === "Paper"):
                computerScore++;
                break;

            case (humanChoice === "Scissors" && computerChoice === "Paper"):
                humanScore++;
                break;
            case (humanChoice === "Paper" && computerChoice === "Scissors"):
                computerScore++;
                break;

            case (humanChoice === "Rock" && computerChoice === "Scissors"):
                humanScore++;
                break;
            case (humanChoice === "Scissors" && computerChoice === "Rock"):
                computerScore++;
                break;
        }

        if (computerScore > humanScore) {
            console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        } else if (humanScore > computerScore) {
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        } else {
            console.log("Draw!");
        }
        humanScore = 0;
        computerScore = 0;
    }

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

}

playGame();
