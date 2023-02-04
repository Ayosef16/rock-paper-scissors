//make a function for the computer selection as a random option
function getComputerChoice() {
    const choice = ["rock","paper","scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}

// create variables for player and computer selection
let computerSelection;
let playerSelection;



//create selector
const btnChoice = document.querySelectorAll('.btn');
const result = document.querySelector('.result');

//add an event for each time u click a button
btnChoice.forEach( button => button.addEventListener('click', () => {
    playerSelection = button.value.toLowerCase();
    console.log({playerSelection});
    computerSelection = getComputerChoice();
    console.log({computerSelection});
    result.textContent = playRound(computerSelection,playerSelection);
}));

//make the function to compare computer selection vs player selection

function playRound (computerSelection,playerSelection) {   
    
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