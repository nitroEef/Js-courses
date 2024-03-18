const highScores = JSON.parse(localStorage.getItem("highScores")) || []; //if there is no score yet it should retain an empty array for us...
const highScoresList = document.getElementById('highScoresList')
const list = document.createElement ("li");
// to create new element in javascript

highScoresList.innerHTML = highScores.map((score) => {
    return `<li class="high-score">${score.name} - ${score.score} </li>`
}).join("")
