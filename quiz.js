let score = 0;
let currentQuestionIndex = 0;

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
    }
];

function displayQuestion(){

    if(currentQuestionIndex >= questions.length){
        document.getElementById('quiz-container').hidden = true;
        document.getElementById('result').hidden = false;
        document.getElementById('score').textContent = score;
        return;
    }


    let question = questions[currentQuestionIndex];

    document.getElementById('question').textContent = question.question;
    
    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement('button');
        answerButton.classList.add("btn", "btn-dark", "me-2");
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerButton);
    });
}

displayQuestion();

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