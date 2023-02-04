//make a function for the computer selection as a random option
function getComputerChoice(choice) {

    return choice[Math.floor(Math.random()*choice.length)];
}

const choice = ["rock","paper","scissors"];

let computerSelection;
let playerSelection;


const btnChoice = document.querySelectorAll('.btn');

btnChoice.forEach( button => button.addEventListener('click',playRound));

//console.log(computerSelection);

//console.log(typeof computerSelection);

//make the user to input their choice

//let playerSelection = prompt("Choose between rock,paper,scissors");

//make the string lowercase

//playerSelection = playerSelection.toLowerCase();

//console.log(playerSelection);

//console.log(typeof playerSelection);

//make the function to compare computer selection vs player selection

function playRound (computerSelection,playerSelection) {

    computerSelection = getComputerChoice(choice);
    playerSelection = button.textContent.toLowerCase();

    if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win! paper beats rock"
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! rock beats scissors"
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose! paper beats rock"
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You win! scissors beats paper"
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You win! rock beats scissors"
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lose! scissors beats paper"
    }
    else if (computerSelection === playerSelection) {
        return "No one wins, it's a draw"
    }
    else {
        return "Error"
    }
}

//console.log(playRound(computerSelection,playerSelection));

let player = 0;
let computer = 0;
let draw = 0;


/*function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice(choice);
        console.log(computerSelection);
        let playerSelection = prompt("Choose between rock, paper, scissors");
        playerSelection = playerSelection.toLowerCase();
        console.log(playerSelection);
        console.log(playRound(computerSelection,playerSelection));
        

        if (playRound(computerSelection,playerSelection).startsWith("You win!")) {
            player +=1
        }
        else if (playRound(computerSelection,playerSelection).startsWith("You lose!")) {
            computer +=1
        }
        else {
            draw +=1
        }
        
        
        console.log(`Player : ${player}`);
        console.log(`Computer : ${computer}`);
        console.log(`Draw : ${draw}`);
}

    if (player > computer) {
        console.log(`Player Wins: ${player}-${computer}`)
    }
    else if (player < computer) {
        console.log(`Computer Wins: ${computer}-${player}`)
    }
    else {
        console.log(`Draw: ${player}-${computer}`)
    }
}

game()*/