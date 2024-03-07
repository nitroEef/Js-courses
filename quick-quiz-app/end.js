const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


console.log(mostRecentScore)
finalScore.innerText = mostRecentScore;  //to get out score in the local storage