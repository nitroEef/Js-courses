

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreE1 = document.getElementById("computerScpore");
const computerChoice = document.getElementById("computerChoice");
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

// reset all selected icons 
function resetSelected(){
    allGameIcon.forEach((icon) => {
        icon.classList.remove('selected')
    })
}

function select(playerChoice){
    resetSelected();


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