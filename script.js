/*
1. Validate user input as it's being typed in
2. When play button is pressed
    a. Generate computer choice
    b. Compare with user choice to get result
    c. Print result to screen
3. When Restart button is pressed
    a. Clear input
    b. Clear result
*/

const inputField = document.querySelector('#user-input');
let regex = /^(rock)|(paper)|(scissors)$/i;
inputField.addEventListener('keyup', validateInput)

function validateInput() {
    if (regex.test(inputField.value)) {
        inputField.className = "valid";
    } else {
        inputField.className = "invalid";
    }
}


function chooseRPS() {
    let computerChoice = (Math.floor(Math.random() * 4));
    if (computerChoice === 1) {
        console.log("Rock");
    } else if (computerChoice === 2) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
    return computerChoice;
}

function getResult() {

}