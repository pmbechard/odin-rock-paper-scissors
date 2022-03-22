const inputField = document.querySelector("#user-input");
inputField.addEventListener("keyup", validateInput)

const playButton = document.querySelector("#play-button");
playButton.disabled = true;
playButton.className = "disabled";
playButton.addEventListener("click", runGame)
document.addEventListener("keyup", (event) => {
    if (event.key == "Enter" && playButton.disabled === false) {
        runGame();
    }
})

const clearFieldsButton = document.querySelector("#restart-button");
clearFieldsButton.addEventListener("click", clearFields)

const resetAllButton = document.querySelector("#reset-all-button");
resetAllButton.addEventListener("click", resetGame)

const resultOutput = document.querySelector("#result");

const userScoreBoard = document.querySelector("#user-score");
let userScore = 0;

const computerScoreBoard = document.querySelector("#computer-score");
let computerScore = 0;

let regex = /^(rock)|(paper)|(scissors)$/i;


function validateInput() {
    if (regex.test(inputField.value)) {
        inputField.className = "valid";
        playButton.disabled = false;
        playButton.className = "";
    } else {
        inputField.className = "invalid";        
        playButton.disabled = true;
        playButton.className = "disabled";
    }
}

function runGame() {
    let userChoice = inputField.value.toLowerCase();
    let computerChoice = chooseRPS();
    let gameResult = getResult(userChoice, computerChoice);
    resultOutput.textContent = "Computer chose " + computerChoice + "... " + gameResult + "!";
    playButton.disabled = true;
    playButton.className = "disabled";

}

function chooseRPS() {
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
    playButton.disabled = true;
    playButton.className = "disabled";
}

function resetGame() {
    clearFields();
    userScore = 0;
    userScoreBoard.textContent = 0;
    computerScore = 0;
    computerScoreBoard.textContent = 0;
}
