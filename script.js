//Randomly chosses between the game
function getComputerChoice () {
    let options = ['rock', 'paper', 'scissors'];
    let randomOption = Math.floor(Math.random() * options.length);
    let compMove = options[randomOption]
    return compMove
}


