

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreE1 = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerSpock = document.getElementById("playerSpock");
const playerScissors= document.getElementById("playerScissors");
const playerLizard= document.getElementById("playerLizard");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerSpock = document.getElementById("computerSpock");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");

const allGameIcon = document.querySelectorAll(".far")


const choice = {
    rock: {name: "rock", defeats: ["scissors", "lizard"]},
    rock: {name: "paper", defeats: ["rocks", "spock"]},
    rock: {name: "scissors", defeats: ["paper", "lizard"]},
    rock: {name: "lizard", defeats: ["paper", "spock"]},
    rock: {name: "rock", defeats: ["scissors", "rock"]},
}

// //this will select all the choices in the console while selected
// // function select(playerChoice){
// //     console.log(playerChoice)
// // }

let computerChoice = "";

// reset all selected icons 
function resetSelected(){
    allGameIcon.forEach((icon) => {
        icon.classList.remove('selected')
    })
}
//random computer choice
function computerRandomChoice(){
    const computerChoiceNumber = Math.random();
    if(computerChoiceNumber < 0.2){
        computerChoice = 'rock'
    }else if(computerChoiceNumber <= 0.4){
        computerChoice = 'paper'
    }
    else if(computerChoiceNumber <= 0.6){
        computerChoice = 'scissors'
    }
    else if(computerChoiceNumber <= 0.8){
    computerChoice = 'lizard'
    }
    else {
        computerChoice = 'spock'
    }
    console.log(computerChoice)
}






//call functions to process turn
//the function that maks sure when clicked, 
// reset selected and computer randsom complete teir task 
function checkResult(){
    resetSelected();
    computerRandomChoice()
}

function select(playerChoice){
    checkResult();


    switch(playerChoice){
        case 'roch':
            playerRock.classList.add('selected');
            playerChoiceEl.textContent ='---Rock'
            break;
        case 'paper':
            playerPaper.classList.add('selected');
            playerChoiceEl.textContent ='---Paper'
            break;
        case 'scissors':
            playerScissors.classList.add('selected');
            playerChoiceEl.textContent ='---Scissors'
            break;
        case 'lizard':
            playerLizard.classList.add('selected');
            playerChoiceEl.textContent ='---Lizard'
            break;
        case 'spock':
            playerSpock.classList.add('selected');
            playerChoiceEl.textContent ='---Spock'
            break;
        
    }
}



function displayComputerChoice(playerChoice){
    checkResult();


    switch(playerChoice){
        case 'roch':
            playerRock.classList.add('selected');
            playerChoiceEl.textContent ='---Rock'
            break;
        case 'paper':
            playerPaper.classList.add('selected');
            playerChoiceEl.textContent ='---Paper'
            break;
        case 'scissors':
            playerScissors.classList.add('selected');
            playerChoiceEl.textContent ='---Scissors'
            break;
        case 'lizard':
            playerLizard.classList.add('selected');
            playerChoiceEl.textContent ='---Lizard'
            break;
        case 'spock':
            playerSpock.classList.add('selected');
            playerChoiceEl.textContent ='---Spock'
            break;
        
    }
}