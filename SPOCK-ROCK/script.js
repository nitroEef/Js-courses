const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
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

const allGameIcons = document.querySelectorAll(".far")


const choices = {
    rock: {name: "rock", defeats: ['scissors', 'lizard']},
    paper: {name: "paper", defeats: ['rocks', 'spock']},
    scissors: {name: "scissors", defeats: ['paper', 'lizard']},
    lizard: {name: "lizard", defeats: ['paper', 'spock']},
    spock: {name: "spock", defeats: ['scissors', 'rock']},
}



// //this will select all the choices in the console while selected
// // function select(playerChoice){
// //     console.log(playerChoice)
// // }

let computerChoice = '';
let playerScoreNumber = '';
let computerScoreNumber = '';

// reset all selected icons 
function resetSelected(){
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected')
    })
}

//game reset
function resetAll(){
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScoreEl.textContent = playerScoreNumber
    computerScoreEl.textContent = computerScoreNumber
    playerChoiceEl.textContent = ''
    computerChoiceEl.textContent = ''
    resultText.textContent = ''
    resetSelected()

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
    // console.log(computerChoice)
}

// updtiing the scores 
function updateScores(playerChoice){
    console.log(playerChoice, computerChoice)
    if(playerChoice === computerChoice){
        resultText.textContent = "it is a tie"
    }
    else{
        const choice = choices[playerChoice]
        console.log(choice.defeats.indexOf(computerChoice))

    if(choice.defeats.indexOf(computerChoice) > -1){
        resultText.textContent = 'you won';
        playerScoreNumber++
        playerScoreEl.textContent = playerScoreNumber
    }else{
        resultText.textContent = 'you lost'
        computerScoreNumber++
        computerScoreEl.textContent = computerScoreNumber
    }
    }
}

//call functions to process turn
//the function that maks sure when clicked, 
// reset selected and computer randsom complete teir task 

function checkResult(playerChoice){
    resetSelected();
    computerRandomChoice();
    displayComputerChoice();
    updateScores(playerChoice)
}

function select(playerChoice){
    checkResult(playerChoice);


    switch(playerChoice){
        case 'rock':
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



function displayComputerChoice(){


    switch(computerChoice){
        case 'rock':
            computerRock.classList.add('selected');
           computerChoiceEl.textContent ='---Rock'
            break;
        case 'paper':
          computerPaper.classList.add('selected');
            computerChoiceEl.textContent ='---Paper'
            break;
        case 'scissors':
            computerScissors.classList.add('selected');
            computerChoiceEl.textContent ='---Scissors'
            break;
        case 'lizard':
            computerLizard.classList.add('selected');
            computerChoiceEl.textContent ='---Lizard'
            break;
        case 'spock':
            computerSpock.classList.add('selected');
            computerChoiceEl.textContent ='---Spock'
            break;
        
    }
}

//reset game to initial state
resetAll()