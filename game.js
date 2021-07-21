// const question = document.querySelector('#question');
// const choices = Array.from(document.querySelectorAll('#choice-text'));
// const progressText = document.querySelector('#question');
// const question = document.querySelector('#question');

/*
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
questionCounter = 0
let availableQuestions = []

let questions =[
    {
        question: 'The condition of an if/else statement is enclosed with ____',
        choice1: 'quotes',
        choice2: 'curly brackets',
        choice3: 'parenthesis',
        choice4: 'square brackets'
        answer: 3,
    },
    {
        question: 'Arrays in Javascript can be used to store ____',
        choice1: 'numbers and strings',
        choice2: 'boolean',
        choice3: 'other arrays',
        choice4: 'all of the above'
        answer: 4,
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',
        choice1: 'commas',
        choice2: 'curly brackets',
        choice3: 'quotes',
        choice4: 'parenthesis'
        answer: 2,
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choice1: 'Javascript',
        choice2: 'terminal/bash',
        choice3: 'for loops',
        choice4: 'console.log'
        answer: 4,
    },
    {
        question: '',
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: ''
        answer: ,
    }

] 

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame() => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }


}
*/



var timerEl = document.querySelector('#time-container')
// var mainEl = document.getElementById('')
var timeLeft = 90; 
var timeInterval = setInterval(function() {
    timeLeft--;
    console.log(timeLeft);
    timerEl.textContent= timeLeft
    },1000);
    // function timeStopInterval() 
    // clearInterval(timeInterval)    
    
    const userchoice = document.addEventListener("click", e => 
    {
            const target = e.target;
        
            if (target.matches("#right-choice")) {
                clearTimeout(timeInterval);
                target.style.backgroundColor = "green";
                console.log(userchoice-3);
                window.alert("Correct!!!")
                
            } else if (target.matches("#wrong-choice")) { 
                document.getElementById("wrong-choice").textContent;
                document.getElementById("wrongchoiceprompt").innerHTML = "Wrong Answer!!!";
                timeLeft = timeLeft - 10;
                window.alert("Incorrect!!!");
            }

        });
