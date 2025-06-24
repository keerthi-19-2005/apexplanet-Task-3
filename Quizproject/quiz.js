const questions = [
  {
    question: "What is the capital of India?",
    answers: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    correct: "Delhi"
  },
  {
    question: "Which language runs in the browser?",
    answers: ["Python", "Java", "C", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "Which company developed Windows?",
    answers: ["Apple", "Microsoft", "Google", "Amazon"],
    correct: "Microsoft"
  }
];

let currentIndex = 0;
const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const current = questions[currentIndex];
  questionEl.textContent = current.question;
  answerBtns.forEach((btn, i) => {
    btn.textContent = current.answers[i];
    btn.style.backgroundColor = "#90e0ef";
    btn.disabled = false;
    btn.onclick = () => {
      if (btn.textContent === current.correct) {
        btn.style.backgroundColor = "#2ecc71"; // green
      } else {
        btn.style.backgroundColor = "#e74c3c"; // red
      }
      answerBtns.forEach(b => b.disabled = true);
    };
  });
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    document.getElementById("answers").innerHTML = "";
    nextBtn.style.display = "none";
  }
};

loadQuestion();