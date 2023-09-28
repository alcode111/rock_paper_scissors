const userChoiceDisplay = document.querySelector('#player-choice');
const computerChoiceDisplay = document.querySelector('#computer-choice');
const resultDisplay = document.querySelector('#result');

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const roundDisplay = document.querySelector('#round')

const winnerDisplay = document.querySelector('#winner');

const rps = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.textContent = userChoice;
}));

function getComputerChoice(){
    let randomNumber = rps[Math.floor(Math.random() * rps.length)];
    return randomNumber;
}
   
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function playRound(){
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerChoice = getComputerChoice();

    if(playerChoice === computerChoice){
        console.log(`${playerChoice} VS ${computerChoice}`);
        console.log("This is a tie.");
        roundNumber++;
        console.log(`*** TIE GAME ***`);
        console.log(`${playerScore} - ${computerScore}`);
        console.log(`--- Round n°${roundNumber} ---`);
        return "Draw";
    
    } else if(playerChoice === "rock" && computerChoice === "scissors" ||
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissors" && computerChoice === "paper"){
                console.log(`${playerChoice} VS ${computerChoice}`);
                console.log(`${playerChoice} BEATS ${computerChoice}`);
                playerScore++;
                roundNumber++;                
                console.log(`*** YOU WIN! ***`)
                console.log(`${playerScore} - ${computerScore}`);
                console.log(`--- Round n°${roundNumber} ---`);
                return "Win";
    
    } else if(playerChoice === "rock" && computerChoice === "paper" ||
            playerChoice === "paper" && computerChoice === "scissors" ||
            playerChoice === "scissors" && computerChoice === "rock"){
                console.log(`${playerChoice} VS ${computerChoice}`);
                console.log(`${computerChoice} BEATS ${playerChoice}`);
                computerScore++;
                roundNumber++;
                console.log(`*** YOU LOSE... ***`)                
                console.log(`${playerScore} - ${computerScore}`);
                console.log(`--- Round n°${roundNumber} ---`);
                return "Defeat";
    
    } else {
        console.log("Please, only select one of the three options.");
    }
}

while(playerScore !== 5 && computerScore !== 5){
    playRound()
} if(playerScore > computerScore){
    console.log("##### CONGRATULATIONS!!! You beat the computer! #####");
} else {
    console.log("##### DEFEAT! The computer beat you. Maybe next time? #####")
}