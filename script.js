let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Was bedeutet das HTML Tag a",
    answer_1: "Text fett",
    answer_2: "Container",
    answer_3: "Ein Link",
    answer_4: "Kursiv",
    right_answer: 3,
  },
  {
    question: "Wie bindet man eine Website in eine Website ein?",
    answer_1: "Antwort 1",
    answer_2: "Antwort 2",
    answer_3: "Antwort 3",
    answer_4: "Antwort 4",
    right_answer: 2,
  },
];

let currentQuestion = 0;

function init() {
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  console.log("selected answer is ", selection);
  let selectedQuestionNumber = selection.slice(-1);
  console.log("selectedQuestionNumber is ", selectedQuestionNumber);
  console.log("Current question is ", question["right_answer"]);

  let IdOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("answerRight");
  } else {
    document.getElementById(selection).parentNode.classList.add("answerWrong");
    document.getElementById(IdOfRightAnswer).parentNode.classList.add("answerRight");
  }

  document.getElementById("arrowright").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
  resetAnswerButtons();
  document.getElementById("arrowright").disabled = true;
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("answerWrong");
  document.getElementById("answer_1").parentNode.classList.remove("answerRight");
  document.getElementById("answer_2").parentNode.classList.remove("answerWrong");
  document.getElementById("answer_2").parentNode.classList.remove("answerRight");
  document.getElementById("answer_3").parentNode.classList.remove("answerWrong");
  document.getElementById("answer_3").parentNode.classList.remove("answerRight");
  document.getElementById("answer_4").parentNode.classList.remove("answerWrong");
  document.getElementById("answer_4").parentNode.classList.remove("answerRight");
}
