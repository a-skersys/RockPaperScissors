function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "sulinys";
            break;
        case 1:
            return "popierius";
            break;
        case 2:
            return "zirkles";
            break;
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return("Lygiosios")
    } else if ((playerChoice == "sulinys") && (computerChoice == "zirkles")) {
        return("Zirkles ikrenta i sulini. Jus laimejote!")
    } else if ((playerChoice == "zirkles") && (computerChoice == "popierius")) {
        return("Zirkles perkerpa popieriu. Jus laimejote!")
    } else if ((playerChoice == "popierius") && (computerChoice == "sulinys")) {
        return("Popierius uzdengia sulini. Jus laimejote!")
    } else if ((playerChoice == "zirkles") && (computerChoice == "sulinys")) {
        return("Zirkles ikrenta i sulini. Jus pralaimejote...")
    } else if ((playerChoice == "popierius") && (computerChoice == "zirkles")) {
        return("Zirkles perkerpa popieriu. Jus pralaimejote...")
    } else if ((playerChoice == "sulinys") && (computerChoice == "popierius")) {
        return("Popierius uzdengia sulini. Jus pralaimejote...")
    } else {
        return("Netinkama ivestis")
    }
            
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt("Pasirinkite: sulinys, popierius ar zirkles");
        let playerChoice = playerInput.toLowerCase();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(`Jus pasirinkote: ${playerChoice}
Kompiuteris pasirinko: ${computerChoice}
${result}`);
        
    }
}
