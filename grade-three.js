const questions = [
    {
        question: "How many Variables were created in Ping Pong Game?",
        answers: [
            { text: "6", correct: false},
            { text: "8", correct: false},
            { text: "4", correct: true},
            { text: "9", correct: false},
        ]
    },
    {
        question: "___________ and ____________ are variables that were used in Ping Pong game.",
        answers: [
            { text: "Apple and Bowl", correct: false},
            { text: "Move and Jump", correct: false},
            { text: "Score and Lives", correct: true},
            { text: "Friends", correct: false},
        ]
    },
    {
        question: "How many Sprite wer used in Ping pong game",
        answers: [
            { text: "4", correct: false},
            { text: "5", correct: false},
            { text: "10", correct: false},
            { text: "3", correct: true},
        ]
    },
    {
        question: "What is the name of the backdrop used in Ping Pong Game",
        answers: [
            { text: "Blue Sky", correct: false},
            { text: "Neon Tunnel", correct: true},
            { text: "Stars", correct: false},
            { text: "Bedroom One", correct: false},
        ]
    },
    {
        question: "Point in direction 45 degree, move ballspeed steps and if on edge, bounce is code for _____________ in Ping Pong game",
        answers: [
            { text: "Line", correct: false},
            { text: "Ball", correct: true},
            { text: "Paddle", correct: false},
            { text: "Variables", correct: false},
        ]
    },
    {
        question: "Play sound pluk untill done is part of the code for __________ sprite in Ping pong game",
        answers: [
            { text: "Line", correct: true},
            { text: "Ball", correct: false},
            { text: "Paddle", correct: false},
            { text: "Variables", correct: false},
        ]
    },
    {
        question: "What colour is the Sensing Block",
        answers: [
            { text: "Brown", correct: false},
            { text: "Sky blue", correct: true},
            { text: "Red", correct: false},
            { text: "Army green", correct: false},
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
        question: "What block code can we use to check a condition in Scratch?",
        answers: [
            { text: "Forever", correct: true},
            { text: "If then", correct: false},
            { text: "Repeat", correct: false},
            { text: "Wait 1 second", correct: false},
        ]
    },
    
    {
        question: "Which block would you use to make your sprite repeat an action forever?",
        answers: [
            { text: "If then", correct: true},
            { text: "Forever", correct: false},
            { text: "Repeat", correct: false},
            { text: "If then else", correct: false},
        ]
    },
    {
        question: "How can you create a variable in Scratch?",
        answers: [
            { text: "By clicking on event and drag if green flag click", correct: false},
            { text: "By clicking on Variable and click on make a variable", correct: true},
            { text: "By clicking on Motion", correct: false},
            { text: "All of the above", correct: false},
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
 
	