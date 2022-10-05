//Takes the player move
let playerMove = prompt().toLowerCase()
const computerSelection = getComputerChoice()

//score announcement
const win = "YOU WIN!"
const lose = "YOU LOST!"
const tie = "ITS A TIE!"

//Randomly chosses between the game
function getComputerChoice () {
    let options = ['rock', 'paper', 'scissors'];
    let randomOption = options[Math.floor(Math.random() * options.length)];
    return randomOption
}


//plays a round of rock paper scissors
function playRound (playerMove, computerSelection) {
    switch (playerMove) {
        case 'rock':
            if (computerSelection === "rock") {
                return tie;
            }
            else if (computerSelection === "scissors") {
                return win;
            }
            else {
                return lose;
            }
            break
        case 'paper':
            if (computerSelection === 'paper') {
                return tie;
            }
            else if (computerSelection === 'rock') {
                return win;
            }
            else {
                return lose;
            }
            break
        case 'scissors':
            if (computerSelection === 'scissors') {
                return tie;
            }
            else if (computerSelection === 'paper') {
                return win;
            }
            else {
                return lose;
            }
            break
            default: console.log("invalid move")
        }
}
//function that plays 5 round
function round5 () {
    for (let i = 0; i < 5; i++) {
        let playerMove = prompt().toLowerCase()
        getComputerChoice()
        const computerSelection = getComputerChoice()
        playRound(playerMove, computerSelection)
        console.log(playRound(playerMove, computerSelection))
    }
}
