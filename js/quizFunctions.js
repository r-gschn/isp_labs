let quizQuestions = [
  {
      question: "Какой язык программирования был создан первым?",
      options: ["Java", "Fortran", "Python"],
      correct: 1,
      image: "img/1.jpg"
  },
  {
      question: "Кто основал компанию Microsoft?",
      options: ["Стив Джобс", "Билл Гейтс и Пол Аллен", "Ларри Пейдж и Сергей Брин"],
      correct: 1,
      image: "img/2.png"
  },
  {
      question: "Какой протокол используется для передачи данных в интернете?",
      options: ["HTTP", "FTP", "SMTP"],
      correct: 0,
      image: "img/3.png"
  },
  {
      question: "Какой компьютер считается первым персональным компьютером?",
      options: ["IBM PC", "Apple I", "Altair 8800"],
      correct: 2,
      image: "img/4.jpg"
  },
  {
      question: "Как называется операционная система, разработанная компанией Google?",
      options: ["iOS", "Windows", "Android"],
      correct: 2,
      image: "img/5.png"
  },
  {
      question: "Какую роль выполняет DNS в интернете?",
      options: ["Хранит пароли пользователей", "Преобразует доменные имена в IP-адреса", "Защищает сайты от хакеров"],
      correct: 1,
      image: "img/6.jpg"
  },
  {
      question: "Кто является создателем языка программирования Python?",
      options: ["Джеймс Гослинг", "Гвидо ван Россум", "Брэндан Айк"],
      correct: 1,
      image: "img/7.png"
  },
  {
      question: "В каком году появился язык JavaScript?",
      options: ["1990", "1995", "2000"],
      correct: 1,
      image: "img/8.jpg"
  },
  {
      question: "Как называется устройство, которое выполняет роль посредника между локальной сетью и интернетом?",
      options: ["Роутер", "Сервер", "Свитч"],
      correct: 0,
      image: "img/9.jpg"
  },
  {
      question: "Какая компания первой выпустила компьютерную мышь?",
      options: ["Xerox", "Apple", "IBM"],
      correct: 0,
      image: "img/10.jpg"
  },
];

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
  
function displayQuestion() {
  let currentQuestion = quizQuestions[currentQuestionIndex];
  document.getElementById('questions').innerText = currentQuestion.question;

  let img = document.getElementById('images');
  img.src = currentQuestion.image;

  let answers = document.getElementById('answers');
  answers.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    let answerButton = document.createElement('button');
    answerButton.innerText = option;
    answerButton.onclick = () => selectAnswer(answerButton, index);
    answers.appendChild(answerButton);
  });

  document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(button, selectedIndex) {
  let buttons = document.querySelectorAll('#answers button');
  buttons.forEach(btn => btn.classList.remove('selected'));

  button.classList.add('selected');

  let currentQuestion = quizQuestions[currentQuestionIndex];
  if (selectedIndex == currentQuestion.correct) {
    score += 10;
    correctAnswers++;
  }

  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';

  document.getElementById('result-text').innerText = "Поздравляем с завершением викторины!";
  document.getElementById('score').innerText = score;
  document.getElementById('correct-answers').innerText = correctAnswers;
}

displayQuestion();
