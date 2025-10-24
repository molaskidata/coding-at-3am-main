let score = 0;
let currentQuestionIndex = 0;
let timeLeft = 300; // 5 minutes in seconds
let timerInterval;
let quizStarted = false;

let questions = [
    {
        question: "Wie viele Bundesländer hat Deutschland?",
        answers: ["14", "15", "16", "17"],
        correctAnswer: 2
    },
    {
        question: "Welcher Planet ist der Sonne am nächsten?",
        answers: ["Venus", "Merkur", "Mars", "Erde"],
        correctAnswer: 1
    },
    {
        question: "In welchem Jahr fiel die Berliner Mauer?",
        answers: ["1987", "1988", "1989", "1990"],
        correctAnswer: 2
    },
    {
        question: "Wie heißt der längste Fluss der Welt?",
        answers: ["Amazonas", "Nil", "Mississippi", "Jangtse"],
        correctAnswer: 1
    },
    {
        question: "Wer schrieb das Werk 'Faust'?",
        answers: ["Friedrich Schiller", "Heinrich Heine", "Johann Wolfgang von Goethe", "Thomas Mann"],
        correctAnswer: 2
    },
    {
        question: "Welches chemische Element hat das Symbol 'Au'?",
        answers: ["Aluminium", "Argon", "Gold", "Silber"],
        correctAnswer: 2
    },
    {
        question: "In welcher Stadt steht das berühmte Kolosseum?",
        answers: ["Athen", "Rom", "Barcelona", "Istanbul"],
        correctAnswer: 1
    },
    {
        question: "Wie viele Kontinente gibt es auf der Erde?",
        answers: ["5", "6", "7", "8"],
        correctAnswer: 2
    },
    {
        question: "Welcher Ozean ist der größte?",
        answers: ["Atlantischer Ozean", "Indischer Ozean", "Arktischer Ozean", "Pazifischer Ozean"],
        correctAnswer: 3
    },
    {
        question: "Wer komponierte die '9. Symphonie'?",
        answers: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Franz Schubert"],
        correctAnswer: 1
    },
    {
        question: "Welches ist das kleinste Land der Welt?",
        answers: ["Monaco", "Liechtenstein", "Vatikanstadt", "San Marino"],
        correctAnswer: 2
    },
    {
        question: "In welchem Jahr wurde die Titanic versenkt?",
        answers: ["1910", "1911", "1912", "1913"],
        correctAnswer: 2
    },
    {
        question: "Wie heißt die Hauptstadt von Australien?",
        answers: ["Sydney", "Melbourne", "Perth", "Canberra"],
        correctAnswer: 3
    },
    {
        question: "Welches Organ produziert Insulin?",
        answers: ["Leber", "Bauchspeicheldrüse", "Niere", "Herz"],
        correctAnswer: 1
    },
    {
        question: "Wer malte die 'Mona Lisa'?",
        answers: ["Michelangelo", "Raffael", "Leonardo da Vinci", "Donatello"],
        correctAnswer: 2
    },
    {
        question: "Welches ist das härteste natürliche Material?",
        answers: ["Graphit", "Diamant", "Quarz", "Stahl"],
        correctAnswer: 1
    },
    {
        question: "In welchem Land wurde die Pizza erfunden?",
        answers: ["Griechenland", "Frankreich", "Italien", "Spanien"],
        correctAnswer: 2
    },
    {
        question: "Wie heißt der höchste Berg der Welt?",
        answers: ["K2", "Mount Everest", "Kilimandscharo", "Mont Blanc"],
        correctAnswer: 1
    },
    {
        question: "Welche Sprache wird in Brasilien gesprochen?",
        answers: ["Spanisch", "Portugiesisch", "Französisch", "Italienisch"],
        correctAnswer: 1
    },
    {
        question: "Wer erfand das Telefon?",
        answers: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
        correctAnswer: 2
    },
    {
        question: "Welches Tier ist das Symbol von WWF?",
        answers: ["Tiger", "Elefant", "Panda", "Eisbär"],
        correctAnswer: 2
    },
    {
        question: "In welchem Jahr landete Neil Armstrong auf dem Mond?",
        answers: ["1967", "1968", "1969", "1970"],
        correctAnswer: 2
    },
    {
        question: "Welche Währung wird in Japan verwendet?",
        answers: ["Yuan", "Won", "Yen", "Dong"],
        correctAnswer: 2
    },
    {
        question: "Wie viele Herzen hat ein Oktopus?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: 2
    },
    {
        question: "Welcher Autor schrieb 'Der Herr der Ringe'?",
        answers: ["C.S. Lewis", "J.R.R. Tolkien", "George R.R. Martin", "Terry Pratchett"],
        correctAnswer: 1
    },
    {
        question: "Was ist die Hauptzutat von Guacamole?",
        answers: ["Tomate", "Avocado", "Zwiebel", "Paprika"],
        correctAnswer: 1
    },
    {
        question: "In welcher Stadt steht die Freiheitsstatue?",
        answers: ["Boston", "Philadelphia", "Washington D.C.", "New York"],
        correctAnswer: 3
    },
    {
        question: "Welches Gas macht etwa 78% der Erdatmosphäre aus?",
        answers: ["Sauerstoff", "Stickstoff", "Kohlendioxid", "Argon"],
        correctAnswer: 1
    },
    {
        question: "Wer schrieb das Buch '1984'?",
        answers: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "Kurt Vonnegut"],
        correctAnswer: 2
    },
    {
        question: "Welcher Kontinent hat die meisten Länder?",
        answers: ["Asien", "Europa", "Afrika", "Südamerika"],
        correctAnswer: 2
    },
    {
        question: "Welches Vitamin wird durch Sonnenlicht in der Haut produziert?",
        answers: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        correctAnswer: 2
    },
    {
        question: "Wie heißt die Hauptstadt von Kanada?",
        answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        correctAnswer: 3
    },
    {
        question: "Welcher Künstler schnitt sich das Ohr ab?",
        answers: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
        correctAnswer: 1
    },
    {
        question: "In welchem Ozean liegt die Bermuda-Dreieck?",
        answers: ["Pazifischer Ozean", "Indischer Ozean", "Atlantischer Ozean", "Arktischer Ozean"],
        correctAnswer: 2
    },
    {
        question: "Welches Tier schläft am längsten pro Tag?",
        answers: ["Faultier", "Koala", "Katze", "Bär"],
        correctAnswer: 1
    },
    {
        question: "Wie viele Zähne hat ein erwachsener Mensch normalerweise?",
        answers: ["28", "30", "32", "34"],
        correctAnswer: 2
    },
    {
        question: "Welcher Planet hat die meisten Monde?",
        answers: ["Jupiter", "Saturn", "Uranus", "Neptun"],
        correctAnswer: 1
    },
    {
        question: "In welchem Jahr begann der Erste Weltkrieg?",
        answers: ["1912", "1913", "1914", "1915"],
        correctAnswer: 2
    },
    {
        question: "Was bedeutet 'www' in einer Internetadresse?",
        answers: ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"],
        correctAnswer: 0
    },
    {
        question: "Welche Farbe entsteht beim Mischen von Rot und Gelb?",
        answers: ["Grün", "Orange", "Lila", "Braun"],
        correctAnswer: 1
    }
];

function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('total-questions').textContent = questions.length;
    
    quizStarted = true;
    startTimer();
    displayQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            endQuiz("Time's up!");
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timerDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer').textContent = timerDisplay;
    
    // Change color when time is running out
    const timerElement = document.getElementById('timer');
    if (timeLeft <= 30) {
        timerElement.className = 'badge bg-danger fs-6';
    } else if (timeLeft <= 60) {
        timerElement.className = 'badge bg-warning fs-6';
    }
}

function displayQuestion(){
    if(currentQuestionIndex >= questions.length){
        endQuiz("Quiz completed!");
        return;
    }

    let question = questions[currentQuestionIndex];
    
    document.getElementById('question').textContent = question.question;
    document.getElementById('question-counter').textContent = currentQuestionIndex + 1;
    
    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement('button');
        answerButton.classList.add("btn", "btn-outline-light", "me-2", "mb-2", "w-100");
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerButton);
    });
}

function endQuiz(message) {
    clearInterval(timerInterval);
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    
    document.getElementById('score').textContent = score;
    document.getElementById('max-score').textContent = questions.length;
    
    const timeUsed = 300 - timeLeft;
    const minutes = Math.floor(timeUsed / 60);
    const seconds = timeUsed % 60;
    document.getElementById('time-info').textContent = 
        `${message} Time used: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function checkAnswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if(userAnswer == correctAnswer){
        score += 1;
    }

    nextQuestion();
}

function nextQuestion(){
    currentQuestionIndex += 1;
    displayQuestion();
}

function restartQuiz() {
    // Reset all variables
    score = 0;
    currentQuestionIndex = 0;
    timeLeft = 300;
    quizStarted = false;
    
    // Clear any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Show start screen again
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}