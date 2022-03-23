/*
Name: Rock, Paper, Scissors Game

Purpose: This script adds functionality to HTML elements to
allow users to play RPS against the computer.

Algorithm: A random number between 1-3 (inclusive) is generated
and matched to either rock, paper, or scissors (respectively).
This is subsequently checked against the player input to get the
result.

Inputs: user input via HTML <input>

Outputs: most recent game result (e.g. "The computer chose rock, 
you win!"") and score keeping

Author: Peyton Bechard
Date Created: 22 Mar 2022
*/



const inputField = document.querySelector("#user-input");
inputField.addEventListener("keyup", validateInput)

const playButton = document.querySelector("#play-button");
disablePlayButton();
playButton.addEventListener("click", runGame)
// Adds functionality for 'return' key press in addition to play button press
document.addEventListener("keyup", (event) => {
    if (event.key == "Enter" && playButton.disabled === false) {
        runGame();
    }
})

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearFields)

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetGame)

const resultOutput = document.querySelector("#result");

const userScoreBoard = document.querySelector("#user-score");
let userScore = 0;

const computerScoreBoard = document.querySelector("#computer-score");
let computerScore = 0;

// Used for validating user input
let regex = /^((rock)|(paper)|(scissors))$/i;


function validateInput() {
    if (regex.test(inputField.value)) {
        inputField.className = "valid";
        enablePlayButton();
    } else {
        inputField.className = "invalid";        
        disablePlayButton();
    }
}

// Works as the base for game operation
function runGame() {
    let userChoice = inputField.value.toLowerCase();
    let computerChoice = generateComputerChoice();
    let gameResult = getResult(userChoice, computerChoice);
    resultOutput.textContent = "Computer chose " + computerChoice + "... " + gameResult + "!";
    disablePlayButton();
}

function generateComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 4));
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getResult(user, comp) {
    if (user === comp) {
        return "Draw";
    } else if ((user === "rock" && comp === "paper") || (user === "paper" && comp === "scissors") || (user === "scissors" && comp === "rock")) {
        computerScore++;
        computerScoreBoard.textContent = computerScore;
        return "You lose"; 
    } else {
        userScore++;
        userScoreBoard.textContent = userScore;
        return "You win"
    }
}

function clearFields() {
    resultOutput.textContent = "Press play when you're ready...";
    inputField.value = "";
    validateInput();
}

function resetGame() {
    clearFields();
    userScore = 0;
    userScoreBoard.textContent = 0;
    computerScore = 0;
    computerScoreBoard.textContent = 0;
}

function enablePlayButton() {
    playButton.disabled = false;
    playButton.className = "";
}

function disablePlayButton() {
    playButton.disabled = true;
    playButton.className = "disabled";
    inputField.className = "invalid";        
}
