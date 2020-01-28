//My Variables

//Timer
var timerTracker = document.querySelector("#timer");
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