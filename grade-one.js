const questions = [
    {
        question: "What is Scratch?",
        answers: [
            { text: "A type of food", correct: false},
            { text: "A place to play games", correct: false},
            { text: "A program to make games and stories", correct: true},
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
        question: "Which of these is a sprite in Scratch?",
        answers: [
            { text: "Dog", correct: false},
            { text: "Cat", correct: false},
            { text: "Ballon", correct: false},
            { text: "All of the above", correct: true},
        ]
    },
    {
        question: "What do you use to make the sprites do things in Scratch?",
        answers: [
            { text: "Word", correct: false},
            { text: "Blocks", correct: true},
            { text: "Numbers", correct: false},
            { text: "Pictures", correct: false},
        ]
    },
    {
        question: "Where do you see your sprites perform actions in Scratch?",
        answers: [
            { text: "In a book", correct: false},
            { text: "On the stage", correct: true},
            { text: "In a park", correct: false},
            { text: "In the picture", correct: false},
        ]
    },
    {
        question: "What color is the Scratch Cat?",
        answers: [
            { text: "Blue", correct: false},
            { text: "Red", correct: false},
            { text: "Orange", correct: true},
            { text: "Green", correct: false},
        ]
    },
    {
        question: "What block category do you use to make a sprite move?",
        answers: [
            { text: "Looks", correct: false},
            { text: "Sounds", correct: false},
            { text: "Motion", correct: true},
            { text: "Variables", correct: false},
        ]
    },
    {
        question: "Which block would you use to start your script?",
        answers: [
            { text: "When green flag clicked", correct: true},
            { text: "When space key pressed", correct: false},
            { text: "Forever", correct: false},
            { text: "Wait", correct: false},
        ]
    },
    
    {
        question: "How do you make a sprite speak in Scratch?",
        answers: [
            { text: "By drawing", correct: false},
            { text: "By writing", correct: false},
            { text: "By using a 'say' block", correct: true},
            { text: "By clicking", correct: false},
        ]
    },
    
    {
        question: "How can you change the look of a sprite?",
        answers: [
            { text: "Use a paintbrush", correct: false},
            { text: "Use the Looks blocks", correct: true},
            { text: "Use a pencil", correct: false},
            { text: "Use the Motion blocks", correct: false},
        ]
    },
    {
        question: "What does the 'forever' block do?",
        answers: [
            { text: "Runs the script once", correct: false},
            { text: "Runs the script forever", correct: true},
            { text: "Stops the script", correct: false},
            { text: "Saves the script", correct: false},
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
        question: "What does the turn block do?",
        answers: [
            { text: "Makes the sprite speak", correct: false},
            { text: "Makes the sprite move", correct: false},
            { text: "Makes the sprite jump", correct: false},
            { text: "Makes the sprite turn", correct: true},
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
        question: "Where can you find 'GO TO RANDOM POSITION' block in Scratch?",
        answers: [
            { text: "In Variables", correct: false},
            { text: "In Forever", correct: false},
            { text: "In Motion", correct: true},
            { text: "In Operators", correct: false},
        ]
    },
    {
        question: "What is the main color of the MOTION blocks?",
        answers: [
            { text: "Pink", correct: false},
            { text: "Orange", correct: false},
            { text: "Black", correct: false},
            { text: "Blue", correct: true},
        ]
    },
    {
        question: "Which block allows you to repeat actions a certain number of times?",
        answers: [
            { text: "Forever", correct: false},
            { text: "Move 10 steps", correct: false},
            { text: "Repeat", correct: true},
            { text: "Wait", correct: false},
        ]
    },
    {
        question: "How do you stop all scripts in Scratch?",
        answers: [
            { text: "Press the space bar", correct: false},
            { text: "Click the stop sign", correct: true},
            { text: "Press the enter key", correct: false},
            { text: "Click the green flag", correct: false},
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
 
	