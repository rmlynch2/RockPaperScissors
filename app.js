console.log("Best out of 3");
let count = 0;
let score = 0;
let playerSelection = " ";
let computerSelection = computerPlay();
function computerPlay() {
    let outof3 = Math.floor(Math.random()*3)+1;
    if (playerSelection === " ") {
        console.log('The computer is ready when you are!');
    } else if (outof3 === 1) {
        console.log('Computer Throws Rock');
        return outof3;
    } else if (outof3 === 2) {
        console.log('Computer Throws Paper');
        return outof3;
    } else {
        console.log('Computer Throws Scissors');
        return outof3;
    } 
}

function playRound(playerSelection, computerSelection) {
    let player = 0;

    if (playerSelection === "Rock" || playerSelection === "rock") {
        player = 1;
    } else if (playerSelection === "Paper" || playerSelection === "paper") {
        player = 2;
    } else if (playerSelection === "Scissors" || playerSelection === "scissors") {
        player = 3;
    } else {
        player = "Unrecognized Move"
    }

    if (player === computerSelection + 1 || player === computerSelection - 2) {
        return 'You Win This Round'
    } else if (player === computerSelection -1 || player === computerSelection + 2) {
        return 'The Computer Wins This Round'
    } else {
        return 'Nobody wins this round'
    }

    if (player === "Unrecognized Move") {
        console.log("You have thrown an Unrecognized Move")
    }

}
function game(){
  
    playerSelection = prompt('Bust a Move: ' );
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    
    playerSelection = prompt('Bust a Move: ' );
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    
    playerSelection = prompt('Bust a Move: ' );
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

game();

