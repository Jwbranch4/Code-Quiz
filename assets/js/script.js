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

function startQuiz() {
  // for loop to go through questions
  for (var i = 0; i < questions.length; i++) {
    var question = document.querySelector("#question");
    question.textContent = questions[i].question;

    var answerChoiceA = document.querySelector("#A");
    answerChoiceA.textContent = questions[i].choiceA;
    answerChoiceA.addEventListener("click", function () {
      //compare choice with correct answer
      //move loop to next question
    });

    var answerChoiceB = document.querySelector("#B");
    answerChoiceB.textContent = questions[i].choiceB;
    answerChoiceB.addEventListener("click", function () {});

    var answerChoiceC = document.querySelector("#C");
    answerChoiceC.textContent = questions[i].choiceC;
    answerChoiceC.addEventListener("click", function () {});

    var answerChoiceD = document.querySelector("#D");
    answerChoiceD.textContent = questions[i].choiceD;
    answerChoiceD.addEventListener("click", function () {});
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
