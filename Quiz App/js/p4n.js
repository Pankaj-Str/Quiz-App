const quizContainer = document.getElementById('question-container');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

const myQuestions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "Berlin",
            c: "Madrid"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: {
            a: "Harper Lee",
            b: "J.K. Rowling",
            c: "Stephen King"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for water?",
        answers: {
            a: "H2O",
            b: "CO2",
            c: "NaCl"
        },
        correctAnswer: "a"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: {
            a: "Mars",
            b: "Venus",
            c: "Jupiter"
        },
        correctAnswer: "a"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: {
            a: "Leonardo da Vinci",
            b: "Pablo Picasso",
            c: "Vincent van Gogh"
        },
        correctAnswer: "a"
    }
];

function buildQuiz() {
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const questionCard = document.createElement('div');
        questionCard.classList.add('p4n-card');
        const questionText = `<div class="p4n-question">${currentQuestion.question}</div>`;
        const options = [];
        for (letter in currentQuestion.answers) {
            options.push(
                `<div class="p4n-option">
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    <label>${letter}: ${currentQuestion.answers[letter]}</label>
                </div>`
            );
        }
        questionCard.innerHTML = questionText + options.join('');
        quizContainer.appendChild(questionCard);
    });
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.p4n-card');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainer.style.backgroundColor = 'lightgreen';
        } else {
            answerContainer.style.backgroundColor = 'pink';
        }
    });
    resultContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} correct`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
