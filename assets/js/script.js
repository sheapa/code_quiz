//My Variables

//Timer
var timeTracker = document.querySelector("#timer");
//Score
var scoreTracker = document.querySelector(".score");
//start Button aKa "Begin Quiz"
var startBtn = document.querySelector("#start");
//Current question selector
var currentQ = document.querySelector("#question");
//Answer options for current question.
var anwerChoice = document.querySelector("#answer")
//Result of user answer selection.
var answerResult = document.querySelector("#result");

//Sections of page.
var instruction = document.querySelector("#instruction");
var prompt = document.querySelector("#prompt");
var scoreCard = document.querySelector("#scoreCard");
var pastScores = document.querySelector("#pastScores");

//Score tracker variables.
var questionCounter = 0;
var correct = 0;
var incorrect = 0;
var score = 70;

//Time tracker variables.
var interval;
var time = 25;

//Array of objects for questions. Used questions from demo. because lazy.
var questionArray = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        question: "String vlaues must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly braces", "quotes", "parentheses"],
        answer: "quotes"
      },
      {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
      }
]

//Start Button
startBtn.addEventListener("click", (e) => {

    timeTracker.textContent = time;

    startTimer();

});

//Timer Function
function startTimer() {
    questionCounter = 0;
    renderQuestion(questionCounter);
    interval = setInterval(function() {
        if (time === 0) {
            renderScore();
            return;
        }

        time--;
        timeTracker.textContent = time;
    }, 1000);
}

//Show Score Function
function renderScore() {
    clearInterval(interval); 
    prompt.classList.add("hidden");
    scoreCard.classList.remove("hidden");
    scoreTracker.textContent = `Correct: ${correct}     Incorrect: ${incorrect}`;

}

//Show Questions & Choices
function renderQuestion(index) {
    if (questionCounter === questionArray.length) {
        renderScore();
        return;

    } else {
        prompt.textContent = questionArray[index].question;

        for (var i = 0; i < questionArray[index].choices.length; i++) {
            var li = document.createElement("li");
            li.id = i;
            li.textContent = questionArray[index].choices[i];
            anwerChoice.append(li);
        }
    }
}