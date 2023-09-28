function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1){
        return "rock"
    } else if(randomNumber === 2){
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(){
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerChoice = getComputerChoice();

    if(playerChoice === computerChoice){
        console.log(`${playerChoice} VS ${computerChoice}`);
        console.log("This is a tie.")
        return "Draw";
    
    } else if(playerChoice === "rock" && computerChoice === "scissors" ||
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissors" && computerChoice === "paper"){
                console.log(`${playerChoice} VS ${computerChoice}`);
                console.log(`${playerChoice} BEATS ${computerChoice}`);
                return "Win";
    
    } else if(playerChoice === "rock" && computerChoice === "paper" ||
            playerChoice === "paper" && computerChoice === "scissors" ||
            playerChoice === "scissors" && computerChoice === "rock"){
                console.log(`${playerChoice} VS ${computerChoice}`);
                console.log(`${computerChoice} BEATS ${playerChoice}`);
                return "Defeat";
    
    } else {
        console.log("Please, only select one of the three options.");
    }
}