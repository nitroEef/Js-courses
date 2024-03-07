

// Get Element with DOM --> create an array of question.
const question = document.getElementById("question");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const game = document.getElementById("game");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
    {
        "question": "Inside which HTML element do we put the JavaScript?",
        "choice1": "<script>",
        "choice2": "<javascript>",
        "choice3": "<js>",
        "choice4": "<scripting>",
        "answer": 1
      },
      {
        "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
        "choice1": "<script href='xxx.js'>",
        "choice2": "<script name='xxx.js'>",
        "choice3": "<script src='xxx.js'>",
        "choice4": "<script file='xxx.js'>",
        "answer": 3
      },
      {
        "question": " How do you write 'Hello World' in an alert box?",
        "choice1": "msgBox('Hello World');",
        "choice2": "alertBox('Hello World');",
        "choice3": "msg('Hello World');",
        "choice4": "alert('Hello World');",
        "answer": 4
      }
]

const CORRECT_BONUS = 10;
const MAX_QUESTION = 3;

//START QUIZ

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    console.log(availableQuestion);
    getNewQuestion()
}

const getNewQuestion = () => {
    //wea re trying to stop the question at 3..if there is no morre 
    // question or question counter is rgreater or equal to max question which is 3 

    questionCounter++; //increasing the question by one
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTION} `;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTION) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question
    // console.log(currentQuestion);


    choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    })
availableQuestion.splice(questionIndex,1);
acceptingAnswer=true;
}

// always use preventdefault anytime u add addEventListener, 
// cos if it is clicked anytime u add addevent it wil reload the page
// so preventdefault wont all the page to be reloaded when clicked

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        e.preventDefault();

        if(!acceptingAnswer) return; //if not accepting answwer return nothing

        // whatever we are clciking in one of the option,
        //  will be our selectedchoice at that time lineeightysix

        const selectedChoice = e.target; 
        const selectedAnswer = selectedChoice.dataset["number"];
        const classToApply = selectedAnswer == currentQuestion.answer ?  "correct" : "inCorrect";

        if(classToApply == "correct") {
            incrementScore(CORRECT_BONUS);
        }

        //this is to the css background of correct or incorrecte to the p tag 
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(()=> {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion()
        },1000)
    })
})

//this will increase our score, if we get it corredtly, 
// it will add to the number 
const incrementScore = (num) => {
    score+=num;
    scoreText.innerText = score
}
startGame();