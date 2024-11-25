const questions = [
    {
        question: "What can you create with Scratch?",
        answers: [
            { text: "Music", correct: false},
            { text: "Game and stories", correct: true},
            { text: "Photo", correct: false},
            { text: "A TV show", correct: false},
        ]
    },
    {
        question: "What do you call the characters in Scratch?",
        answers: [
            { text: "People", correct: false},
            { text: "Animals", correct: false},
            { text: "Sprite", correct: true},
            { text: "Friends", correct: false},
        ]
    },
    {
        question: "Where do sprites move and perform actions in Scratch?",
        answers: [
            { text: "Screen", correct: false},
            { text: "Page", correct: false},
            { text: "Canvas", correct: false},
            { text: "Stage", correct: true},
        ]
    },
    {
        question: "What kind of programming does Scratch use?",
        answers: [
            { text: "Text-based", correct: false},
            { text: "Block-based", correct: true},
            { text: "Command-line", correct: false},
            { text: "Point-and-click", correct: false},
        ]
    },
    {
        question: "Which block category makes a sprite move?",
        answers: [
            { text: "Sounds", correct: false},
            { text: "Motion", correct: true},
            { text: "Looks", correct: false},
            { text: "Variables", correct: false},
        ]
    },
    {
        question: "what is the name of the Backdrop used in Fruit catcher game?",
        answers: [
            { text: "Colorful city", correct: false},
            { text: "Forest", correct: false},
            { text: "Blue sky", correct: true},
            { text: "Party", correct: false},
        ]
    },
    {
        question: "What are the names of the sprites used in Ocean star game?",
        answers: [
            { text: "Apple and Bowl", correct: false},
            { text: "Shark and Fish", correct: true},
            { text: "Cat and Dog", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question: "What is a variable?",
        answers: [
            { text: "A container that store value that can change", correct: true},
            { text: "A container that store water", correct: false},
            { text: "A container that store fruits", correct: false},
            { text: "A container that store files", correct: false},
        ]
    },
    
    {
        question: "How many shapes were used in drawing a Truck?",
        answers: [
            { text: "3 circle and 4 square", correct: true},
            { text: "4 triangle and 3 circle", correct: false},
            { text: "3 circle and 3 square", correct: false},
            { text: "4 rectangle and 5 square", correct: false},
        ]
    },
    
    {
        question: "Which block would you use to make your sprite repeat an action forever?",
        answers: [
            { text: "If then", correct: false},
            { text: "Forever", correct: true},
            { text: "Repeat", correct: false},
            { text: "If then else", correct: false},
        ]
    },
    {
        question: "What are the names of the sprites used in FRUIT CATCHER GAME?",
        answers: [
            { text: "Abby and Character 1", correct: false},
            { text: "Apple and Bowl", correct: true},
            { text: "Octopus and Cat", correct: false},
            { text: "Ball and Bowl", correct: false},
        ]
    },
    {
        question: "What button do you click to start your Scratch project?",
        answers: [
            { text: "Red button", correct: false},
            { text: "Blue button", correct: false},
            { text: "Yellow button", correct: false},
            { text: "Green flag", correct: true},
        ]
    },
    {
        question: "How do you change the appearance of a sprite?",
        answers: [
            { text: "Use the Motion blocks", correct: false},
            { text: "Use the Looks blocks", correct: true},
            { text: "Use the Sound blocks", correct: false},
            { text: "Use the Events blocks", correct: false},
        ]
    },
    
    {
        question: "Which block category would you use to play a sound?",
        answers: [
            { text: "Motion", correct: false},
            { text: "sounds", correct: true},
            { text: "Events", correct: false},
            { text: "Control", correct: false},
        ]
    },
    
    {
        question: "How can you make your sprite wait before doing something?",
        answers: [
            { text: "Use a WAIT block", correct: true},
            { text: "Use a MOVE block", correct: false},
            { text: "Use a SAY block", correct: false},
            { text: "Use a REPEAT block", correct: false},
        ]
    },
    {
        question: "How can you save your project in Scratch?",
        answers: [
            { text: "By clicking on the green flag", correct: false},
            { text: "By creating a variable", correct: false},
            { text: "By clicking on File", correct: true},
            { text: "By closing your Laptop", correct: false},
        ]
    },
    {
        question: "Which block would you use to start a script when a specific key is pressed?",
        answers: [
            { text: "When green flag clicked", correct: false},
            { text: "When backdrop switches", correct: false},
            { text: "When key pressed", correct: true},
            { text: "When this sprite clicked", correct: false},
        ]
    },
    {
        question: "What is the main color of the LOOKS blocks?",
        answers: [
            { text: "Pink", correct: false},
            { text: "Orange", correct: false},
            { text: "Black", correct: false},
            { text: "Purple", correct: true},
        ]
    },
    {
        question: "What is the name of compound conditional statement blocks",
        answers: [
            { text: "Forever", correct: false},
            { text: "If the else", correct: true},
            { text: "Repeat", correct: false},
            { text: "If then", correct: false},
        ]
    },
    {
        question: "Where can you find a block code WHEN I RECIEVE GAME START",
        answers: [
            { text: "Control", correct: false},
            { text: "Operators", correct: false},
            { text: "Events", correct: true},
            { text: "Looks", correct: false},
        ]
    },
    
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timeCounter = document.getElementById("timer");
const timeLine = document.getElementById("timer_line");

let currentQuestionIndex = 0;
let score = 0;
let counter;
let timeValue = 30;
let widthValue = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    shuffleQuestion();
    showQuestion();
    startTimer(30);
    startTimerLine(0);
}

function shuffleQuestion(){
    for (let i = questions.length - 1; i >= 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[[j]]] = [questions[j], questions[i]];
    }
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    clearInterval(counter);
    clearInterval(counterLine);
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
          button.disabled = true;
        
        });
        nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your scored = ${score / 20 * 100}%`;
    nextButton.innerHTML = "Retake Quiz";
    nextButton.style.display = "none";
    timeCounter.display = "none";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        
        
    }else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
        
    }else{
        startQuiz();
    }
    
});

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCounter.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCounter.textContent;
            timeCounter.textContent = "0" + addZero;
        } 
        if(time < 0){
            clearInterval(counter);
            timeCounter.textContent = "00";

            Array.from(answerButtons.children).forEach(button =>{
                if(button.dataset.correct === "true"){
                    button.classList.add("correct")
                }
                  button.disabled = true;
                
                });
                nextButton.style.display = "block";
        }
            
       
    }
        }
        
    
    



function startTimerLine(time){
    counterLine = setInterval(timer, 58);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}


startQuiz();
 
	