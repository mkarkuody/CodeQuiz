const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
let timer = document.getElementById("timer")

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is the hottest planet in the Solar System?',
        choice1: 'Mercury',
        choice2: 'Venus',
        choice3: 'Uranus',
        choice4: 'Mars',
        answer: 2,
    },
    {
        question:
            "What is the largest planet in the Solar System?",
        choice1: "Jupiter",
        choice2: "Sun",
        choice3: "Uranus",
        choice4: "Neptun",
        answer: 1,
    },
    {
        question: "What is the third planet from the Sun?",
        choice1: "Venus",
        choice2: "Mars",
        choice3: "Earth",
        choice4: "Uranus",
        answer: 3,
    },
    {
        question: "How does the Moon stay in orbit?",
        choice1: "By the Earth's gravity",
        choice2: "By the Sun's gravity",
        choice3: "By the Mikly way's gravity",
        choice4: "All above!",
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4
var timeLeft = 80;

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    startTimer()
    getNewQuestion()
}
function startTimer() {
    var time= setInterval(function() {
timeLeft--
timer.innerHTML= timeLeft

if (timeLeft <= 0) {
   clearInterval (time)
   return window.location.assign('./end.html')
}
    }, 1000 )
    
} 

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame() 
