const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


console.log(mostRecentScore)
finalScore.innerText = mostRecentScore;  //to get out score in the local storage

// our button should be clickable anytime we type the username 
// we have the save button disabled by defaault. 
// keyup means when we type something into the input box, it will check if there is something in the input box, it should be enabled
// when we click on username..keyup is one of the event
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
})