const data = [
  {
    id: 1,
    question: "What is the approximate diameter of the Earth?",
    answer: [
      { answer: "6,000 kilometers", isCorrect: false },
      { answer: "8,000 kilometers", isCorrect: true },
      { answer: "10,000 kilometers", isCorrect: false },
      { answer: "12,000 kilometers", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Which layer of the Earth's atmosphere contains the ozone layer?",
    answer: [
      { answer: "Troposphere", isCorrect: false },
      { answer: "Stratosphere", isCorrect: true },
      { answer: "Mesosphere", isCorrect: false },
      { answer: "Thermosphere", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "What percentage of the Earth's surface is covered by water?",
    answer: [
      { answer: "Approximately 50%", isCorrect: false },
      { answer: " Approximately 60%", isCorrect: false },
      { answer: " Approximately 70%", isCorrect: true },
      { answer: " Approximately 80%", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "What is the primary gas in the Earth's atmosphere?",
    answer: [
      { answer: "Oxygen", isCorrect: false },
      { answer: "Nitrogen", isCorrect: true },
      { answer: "Carbon Dioxide", isCorrect: false },
      { answer: "Argon", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "What is the approximate age of the Earth?",
    answer: [
      { answer: "2 billion years", isCorrect: false },
      { answer: " 4.5 billion years", isCorrect: true },
      { answer: " 7 billion years", isCorrect: false },
      { answer: " 10 billion years", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "What is the name of the outermost layer of the Earth?",
    answer: [
      { answer: "Crust", isCorrect: true },
      { answer: "Mantle", isCorrect: false },
      { answer: "Core", isCorrect: false },
      { answer: "Inner core", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "What is the Earth's average distance from the Sun?",
    answer: [
      { answer: "93 million kilometers", isCorrect: true },
      { answer: "100 million kilometers", isCorrect: false },
      { answer: "150 million kilometers", isCorrect: false },
      { answer: "200 million kilometers", isCorrect: false },
    ],
  },
  {
    id: 8,
    question: "Which phenomenon causes the Earth's magnetic field?",
    answer: [
      { answer: " Convection currents in the mantle", isCorrect: false },
      {
        answer: " Solar wind interacting with the atmosphere",
        isCorrect: false,
      },
      { answer: " Rotation of the Earth's solid inner core", isCorrect: true },
      { answer: "Radioactive decay in the Earth's crust", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "What is the highest mountain on Earth?",
    answer: [
      { answer: "Mount Everest", isCorrect: true },
      { answer: "K2", isCorrect: false },
      { answer: "Kangchenjunga", isCorrect: false },
      { answer: "Lhotse", isCorrect: false },
    ],
  },
  {
    id: 10,
    question: "Which continent is located at the South Pole?",
    answer: [
      { answer: "Africa", isCorrect: false },
      { answer: "Asia", isCorrect: false },
      { answer: "Antarctica", isCorrect: true },
      { answer: "Europe", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const questions = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".Next");
const play = document.querySelector(".play");

let qindex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectAnswerCount;

const playAgain = () => {
  qindex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  selectAnswerCount = 0;
  showquestion(qindex);
};
const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectAnswerCount = e.target.value;
    });
  });
};
selectAnswer();

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `correct Answer: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `wrong Answer: ${wrongCount}`;

  resultScreen.querySelector(".scores").textContent = `Total Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

function showquestion(myquestion) {
  if (qindex === data.length) {
    return showResult();
  }
  selectAnswerCount = null;
  questions.textContent = data[myquestion].question;
  answersContainer.innerHTML = data[myquestion].answer
    .map(
      (item, index) =>
        `<div class="answer">
      <input name="answer" type="radio" id=${index} value=${item.isCorrect} />
      <label for=${index}>${item.answer}</label>
    </div>`
    )
    .join("");
  selectAnswer();
}
showquestion(qindex);

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectAnswerCount !== null) {
      selectAnswerCount === "true" ? correctCount++ : wrongCount++;
      qindex++;
      showquestion(qindex);
    } else {
      alert("select anyone");
    }
  });
};
submitAnswer();

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});
