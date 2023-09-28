const userChoiceDisplay = document.querySelector('#player-choice');
const computerChoiceDisplay = document.querySelector('#computer-choice');
const resultDisplay = document.querySelector('#result');

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const roundDisplay = document.querySelector('#round')

const winnerDisplay = document.querySelector('#winner');

const rps = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll('button');

let computerChoice = "";

let userScore = 0;
let computerScore = 0;
let round = 0;

buttons.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.textContent = userChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    resultDisplay.textContent = playRound();
    roundDisplay.textContent = round;
    playerScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}));

function getComputerChoice(){
    let randomNumber = rps[Math.floor(Math.random() * rps.length)];
    return randomNumber;
}

function playRound(){
    while(userScore !== 5 && computerScore !== 5){
        if(userChoice === computerChoice){
            round++
            return "Draw";

        } else if (userChoice === 'rock' && computerChoice === 'scissors' ||
                userChoice === 'paper' && computerChoice === 'rock' ||
                userChoice === 'scissors' && computerChoice === 'paper'){
                    round++;
                    userScore++;
                    return "Win";
                
        } else {
            round++;
            computerScore++;
            return "Defeat";
        }
    }
}

while(playerScore !== 5 && computerScore !== 5){
    playRound()
} if(playerScore > computerScore){
    console.log("##### CONGRATULATIONS!!! You beat the computer! #####");
} else {
    console.log("##### DEFEAT! The computer beat you. Maybe next time? #####")
}