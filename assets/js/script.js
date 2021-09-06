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

// list of global variables needed
var question = document.querySelector("#question");
var answerChoiceA = document.querySelector("#A");
var answerChoiceB = document.querySelector("#B");
var answerChoiceC = document.querySelector("#C");
var answerChoiceD = document.querySelector("#D");
var response = document.querySelector("#response");
var answer = "";
var currentQuestionSet = 0;
var timerEl = document.querySelector("#timer");
var highScores = document.querySelector("#highScore");

//start button function should start quiz and timer for score
var startButton = document.querySelector("#start");
var instructions = document.querySelector("#instructions");

startButton.addEventListener("click", function () {
  startQuiz();
  timer();
  hideElement();
});

// function to show question and answers

function showQuestions() {
  question.textContent = questions[currentQuestionSet].question;
  answerChoiceA.textContent = questions[currentQuestionSet].choiceA;
  answerChoiceB.textContent = questions[currentQuestionSet].choiceB;
  answerChoiceC.textContent = questions[currentQuestionSet].choiceC;
  answerChoiceD.textContent = questions[currentQuestionSet].choiceD;
}

function hideElement() {
  startButton.hidden = true;
  instructions.hidden = true;
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

// function to create timer for score
var timeInterval = 0;
var timeLeft = 90;
function timer() {
  var timeInterval = setInterval(function () {
    if (timeLeft >= 1 && currentQuestionSet < questions.length - 1) {
      timerEl.textContent = " Time: " + timeLeft;
      timeLeft--;
    } else {
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}

function checkAnswer(answer) {
  var correctAnswer = questions[currentQuestionSet].correctAnswer;
  if (answer === correctAnswer) {
    response.textContent = "Correct!";
  } else {
    response.textContent = "Not correct!";
    timeLeft = timeLeft - 10;
  }

  if (currentQuestionSet < questions.length - 1) {
    currentQuestionSet++;
    showQuestions();
  } else {
    clearInterval(timeInterval);
    endGame();
  }
}

function startQuiz() {
  revealAnswers();
  showQuestions();
}

function endGame() {
  //show score

  hideAnswers();
  clearInterval(timeInterval);
  response.hidden = true;
  question.textContent = " Your score is " + timeLeft;
  //timerEl.hidden = true;
  localStorage.setItem("highScore", timeLeft);
}

answerChoiceA.addEventListener("click", function () {
  answer = "A";
  checkAnswer(answer);
});

answerChoiceB.addEventListener("click", function () {
  answer = "B";
  checkAnswer(answer);
});

answerChoiceC.addEventListener("click", function () {
  answer = "C";
  checkAnswer(answer);
});

answerChoiceD.addEventListener("click", function () {
  answer = "D";
  checkAnswer(answer);
});

// function to check answer to correct answer

hideAnswers();
