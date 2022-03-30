/*
Name: Rock, Paper, Scissors Game

Purpose: This script adds functionality to HTML elements to
allow users to play RPS against the computer.

Algorithm: A random number between 1-3 (inclusive) is generated
and matched to either rock, paper, or scissors (respectively).
This is subsequently checked against the player input, activated by
a button press on the images, and a result is provided on the page
along with an update score tally.

Inputs: user input via image click

Outputs: most recent game result (e.g. "The computer chose rock, 
you win!"") and score tally

Author: Peyton Bechard
Date Created: 22 Mar 2022
Last Updated: 30 March 2022
*/

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetGame)

const resultOutput = document.querySelector("#result");

const userScoreBoard = document.querySelector("#user-score");
let userScore = 0;

const computerScoreBoard = document.querySelector("#computer-score");
let computerScore = 0;


// Works as the base for game operation
function runGame() {
    
    let computerChoice = generateComputerChoice();
    let gameResult = getResult(userChoice, computerChoice);
    resultOutput.textContent = "Computer chose " + computerChoice + "... " + gameResult + "!";
    
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

function resetGame() {
    userScore = 0;
    userScoreBoard.textContent = 0;
    computerScore = 0;
    computerScoreBoard.textContent = 0;
}

