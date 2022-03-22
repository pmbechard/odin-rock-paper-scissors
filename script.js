const inputField = document.querySelector("#user-input");
inputField.addEventListener('keyup', validateInput)

const playButton = document.querySelector("#play-button");
playButton.disabled = true;
playButton.className = "disabled";
playButton.addEventListener('click', runGame)

const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener('click', resetGame)

const resultOutput = document.querySelector("#result");

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
        return "You lose";
    } else {
        return "You win"
    }
}

function resetGame() {
    resultOutput.textContent = "Press play when you're ready...";
    inputField.value = "";
    playButton.disabled = true;
    playButton.className = "disabled";
}