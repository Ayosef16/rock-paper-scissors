//make a function for the computer selection as a random option
function getComputerChoice() {
    const choice = ["rock","paper","scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}

// create variables for player, computer selection and scores.
let computerSelection;
let playerSelection;
let player = 0;
let computer = 0;



//create selector
const btnChoice = document.querySelectorAll('.btn');
const result = document.querySelector('.result');
const score = document.querySelector('.score');
const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');
const winner = document.querySelector('.winner');
const refreshBtn = document.querySelector('.refreshbtn');


//add an event for each time u click a button
btnChoice.forEach( button => button.addEventListener('click', () => {
    if (player < 5 && computer < 5) {
        playerSelection = button.value.toLowerCase();
        computerSelection = getComputerChoice();
        result.textContent = playRound(computerSelection,playerSelection);
        score.textContent = `Score: Player ${player}-${computer} Computer`;
        playerChoice.textContent = `Player: ${playerSelection}`;
        computerChoice.textContent = `Computer: ${computerSelection}`;
        if (player === 5) {
            winner.textContent = 'Player Wins!';
            refreshBtn.style.visibility = "visible";
        }
        else if (computer === 5) {
            winner.textContent = 'Computer Wins!';
            refreshBtn.style.visibility = "visible";
        }
    }
    else {
        return;
    };
}));

//make the function to compare computer selection vs player selection

function playRound (computerSelection,playerSelection) {   
    

    if (computerSelection === "rock" && playerSelection === "paper") {
        player+=1;
        return "You win! paper beats rock";
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        computer+=1;
        return "You lose! rock beats scissors";
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        computer+=1;
        return "You lose! paper beats rock";
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        player+=1;
        return "You win! scissors beats paper";
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        player+=1;
        return "You win! rock beats scissors";
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        computer+=1;
        return "You lose! scissors beats paper";
    }
    else if (computerSelection === playerSelection) {
        return "No one wins, it's a draw"
    }
    else {
        return "Error"
    }
}

refreshBtn.addEventListener('click', refreshPage);

function refreshPage() {
    window.location.reload();
};