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
    choiceA: "1. quotes",
    choiceB: "2. curly brackets",
    choiceC: "3. parentheses",
    choiceD: "4. square brackets",
    correctAnswer: "C",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    choiceA: "1. numbers and strings",
    choiceB: "2. other arrays",
    choiceC: "3. booleans",
    choiceD: "4. all of the above",
    correctAnswer: "D",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables",
    choiceA: "1. commas",
    choiceB: "2. curly brackets",
    choiceC: "3. quotes",
    choiceD: "4. parentheses",
    correctAnswer: "C",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is.",
    choiceA: "1. JavaScript",
    choiceB: "2. terminal/bash",
    choiceC: "3. for loops",
    choiceD: "4. console.log",
    correctAnswer: "D",
  },
];

var question = document.querySelector("#question");
var answerChoiceA = document.querySelector("#A");
var answerChoiceB = document.querySelector("#B");
var answerChoiceC = document.querySelector("#C");
var answerChoiceD = document.querySelector("#D");
var response = document.querySelector("#response");
var answer = "";

function startQuiz() {
  // for loop to go through questions
  for (var i = 0; i < questions.length; i++) {
    revealAnswers();

    question.textContent = questions[i].question;
    var correctAnswer = questions[i].correctAnswer;

    answerChoiceA.textContent = questions[i].choiceA;
    answerChoiceA.addEventListener("click", function () {
      answer = "A";
      //compare choice with correct answer
      if (answer === correctAnswer) {
        response.textContent = "Correct!";
      } else {
        response.textContent = "Not correct!";
      }
      //move loop to next question
    });

    answerChoiceB.textContent = questions[i].choiceB;
    answerChoiceB.addEventListener("click", function () {
      answer = "B";
      if (answer === correctAnswer) {
        response.textContent = "Correct!";
      } else {
        response.textContent = "Not correct!";
      }
    });

    answerChoiceC.textContent = questions[i].choiceC;
    answerChoiceC.addEventListener("click", function () {
      answer = "C";
      if (answer === correctAnswer) {
        response.textContent = "Correct!";
      } else {
        response.textContent = "Not correct!";
      }
    });

    answerChoiceD.textContent = questions[i].choiceD;
    answerChoiceD.addEventListener("click", function () {
      answer = "D";
      if (answer === correctAnswer) {
        response.textContent = "Correct!";
      } else {
        response.textContent = "Not correct!";
      }
    });
  }
}

var startButton = document.querySelector("#start");
var instructions = document.querySelector("#instructions");
startButton.addEventListener("click", function () {
  startQuiz();
  hideElement();
});

function hideElement() {
  startButton.hidden = true;
  instructions.hidden = true;
}

function revealElement() {
  startButton.hidden = false;
  instructions.hidden = false;
}

function hideAnswers() {
  answerChoiceA.hidden = true;
  answerChoiceB.hidden = true;
  answerChoiceC.hidden = true;
  answerChoiceD.hidden = true;
}

function revealAnswers() {
  answerChoiceA.hidden = false;
  answerChoiceB.hidden = false;
  answerChoiceC.hidden = false;
  answerChoiceD.hidden = false;
}

hideAnswers();
