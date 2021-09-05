// need to create questions and answers
// used questions from example given

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choiceA: "1. String",
    choiceB: "2. booleans",
    choiceC: "3. alerts",
    choiceD: "4. numbers",
    correctAnswer: "C",
  },
  {
    question: "The condition in an if/else statement is enclosed within _____",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parentheses",
    choiceD: "square brackets",
    correctAnswer: "C",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correctAnswer: "D",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parentheses",
    correctAnswer: "C",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is.",
    choiceA: "JavaScript",
    choiceB: "terminal/bash",
    choiceC: "for loops",
    choiceD: "console.log",
    correctAnswer: "D",
  },
];

var question = document.querySelector("#question");
question.textContent = questions[0].question;

var answerChoiceA = document.querySelector("#A");
answerChoiceA.textContent = questions[0].choiceA;

var answerChoiceB = document.querySelector("#B");
answerChoiceB.textContent = questions[0].choiceB;

var answerChoiceC = document.querySelector("#C");
answerChoiceC.textContent = questions[0].choiceC;

var answerChoiceD = document.querySelector("#D");
answerChoiceD.textContent = questions[0].choiceD;
