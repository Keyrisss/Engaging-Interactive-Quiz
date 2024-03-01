const quizData = [
    {
      question: "Who was the Ancient Greek God of the Sun?",
      options: ["Apollo", "Zeus", "Ares", "Poseidon"],
      answer: "Apollo"
    },
    {
      question: "Which bird was the symbol of Athena?",
      options: ["Finches", "Swan", "Parrot", "Owl"],
      answer: "Owl"
    },
    {
      question: "In Greek mythology Medusa hair was made of what?",
      options: ["Ash", "Feather", " Gold", "Snakes"],
      answer: "Snakes"
    },
    {
      question: "Who was the ancient Greek God was both God of the Underworld and God of the Dead?",
      options: ["Atlas", "Hades", "Dionysus", "Poseidon"],
      answer: "Hades"
    },
    {
      question: "In Greek mythology what is the name of the twin sister of Apollo?",
      options: ["Aprodhite", "Hera", "Artemis", "Athena"],
      answer: "Artemis"
    },
    {
      question: "In Greek mythology who is the goddess of the rainbow?",
      options: [" Iris", "Persephone", "Selene", "Athena"],
      answer: " Iris"
    },
    {
      question: "In Greek mythology, who was the queen of the underworld and wife of Hades?",
      options: ["Selene", "Aphrodite", "Hera", "Persephone"],
      answer: "Persephone"
    },
    {
      question: "Who is the Greek goddess of love, beauty, pleasure and procreation?",
      options: [" Artemis", "Aphrodite", "Hera", "Athena"],
      answer: "Aphrodite"
    },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();