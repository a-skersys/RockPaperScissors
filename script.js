const buttons = document.querySelectorAll("button");
const pPlayer = document.querySelector(".player");
const pComputer = document.querySelector(".computer");
const computerPoints = document.querySelector(".computer-points");
const playerPoints = document.querySelector(".player-points");
const round = document.querySelector(".round");
const pResult = document.querySelector(".result");
const winner = document.querySelector(".winner");

let pointsPlayer = 0;
let pointsComputer = 0;
let roundNumber = 0;

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        if (roundNumber < 5) {
            roundNumber++;
            round.textContent = `Round: ${roundNumber}/5`;
            pPlayer.textContent = "";
            pComputer.textContent = "";
            pResult.textContent = "";
            let playerChoice = button.id;
            let computerChoice = getComputerChoice();
            pPlayer.textContent = `You chose: ${playerChoice}`;
            setTimeout(function(){
                pComputer.textContent = `The Computer chose: ${computerChoice}`;
            }, 1000); 
            setTimeout(function(){
                pResult.textContent = playRound(playerChoice, computerChoice);
                playerPoints.textContent = `Player: ${pointsPlayer}`;
                computerPoints.textContent = `Computer: ${pointsComputer}`;
                if (roundNumber == 5) {
                    if (pointsPlayer > pointsComputer) {
                        winner.textContent = `YOU WON THE GAME!`;
                    } else if (pointsPlayer < pointsComputer) {
                        winner.textContent = `YOU LOST THE GAME!`;
                    } else {
                        winner.textContent = `NOBODY IS WINNER.`
                    }
                }            
            }, 2000);

        }

        
    })
})

    




function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "papper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerChoice, computerChoice) {
    
    if (playerChoice == computerChoice) {
        return("Draw")
    } else if ((playerChoice == "rock") && (computerChoice == "scissors")) {
        pointsPlayer++;
        return("Rock brokes the scissors. You won!");
    } else if ((playerChoice == "scissors") && (computerChoice == "papper")) {
        pointsPlayer++;
        return("Scissors cuts the papper. You won!");
    } else if ((playerChoice == "papper") && (computerChoice == "rock")) {
        pointsPlayer++;
        return("Papper covers the rock. You won!");
    } else if ((playerChoice == "scissors") && (computerChoice == "rock")) {
        pointsComputer++;
        return("Rock brokes the scissors. You lost...");
    } else if ((playerChoice == "papper") && (computerChoice == "scissors")) {
        pointsComputer++;
        return("Scissors cuts the papper. You lost...");
    } else if ((playerChoice == "rock") && (computerChoice == "papper")) {
        pointsComputer++;
        return("Papper covers the rock. You lost...");
    } else {
        return("Netinkama ivestis")
    }
            
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt("Pasirinkite: rock, papper ar scissors");
        let playerChoice = playerInput.toLowerCase();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(`Jus pasirinkote: ${playerChoice}
Kompiuteris pasirinko: ${computerChoice}
${result}`);
    
     }
}