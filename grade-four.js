const questions = [
    {
        question: "_________________ is the network of a computer.",
        answers: [
            { text: "HTML", correct: false},
            { text: "CSS", correct: false},
            { text: "Internet", correct: true},
            { text: "Browser", correct: false},
        ]
    },
    {
        question: "The largest portion of the Internet is __________________.",
        answers: [
            { text: "Internet", correct: false},
            { text: "Website", correct: false},
            { text: "Web", correct: true},
            { text: "Search engine", correct: false},
        ]
    },
    {
        question: "The full meaning of HTML is __________________.",
        answers: [
            { text: "Cascading Style Sheets", correct: false},
            { text: "Hypertex Making Language", correct: false},
            { text: "Hydrogen Markup Language", correct: false},
            { text: "Hypertext Markup Language", correct: true},
        ]
    },
    {
        question: "The full meaning of CSS is ___________________.",
        answers: [
            { text: "Cascading Style Sheets", correct: true},
            { text: "Cascading Sum Sheets", correct: false},
            { text: "Cascading Stylish Sheets", correct: false},
            { text: "All of the above", correct: false},
        ]
    },
    {
        question: "How many percent % does web took in the Internet",
        answers: [
            { text: "100%", correct: false},
            { text: "50%", correct: true},
            { text: "80%", correct: false},
            { text: "90%", correct: false},
        ]
    },
    {
        question: "__________ and ___________ are parts of CSS Properties.",
        answers: [
            { text: "Width and Height", correct: true},
            { text: "Order and Un-order list", correct: false},
            { text: "Button and Heading", correct: false},
            { text: "Variables", correct: false},
        ]
    },
    {
        question: "__________ is part of the HTML Tag",
        answers: [
            { text: "Border", correct: false},
            { text: "Paragraph tag", correct: true},
            { text: "Background", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question: "I am a tag, with my supper power you can add images to your webpage. What am I?",
        answers: [
            { text: "List tag", correct: false},
            { text: "img tag", correct: true},
            { text: "button tag", correct: false},
            { text: "paragraph tag", correct: false},
        ]
    },
    
    {
        question: "The files stored on our computer are saved in ____________",
        answers: [
            { text: "Harddisk", correct: true},
            { text: "Database", correct: false},
            { text: "Internet", correct: false},
            { text: "Website", correct: false},
        ]
    },
    
    {
        question: "The files stored on the Internet are saved in ____________.",
        answers: [
            { text: "Harddisk", correct: false},
            { text: "Database", correct: true},
            { text: "Internet", correct: false},
            { text: "Website", correct: false},
        ]
    },
    {
        question: "What is the full meaning of URL",
        answers: [
            { text: "Uniform Right Language", correct: false},
            { text: "United Resource Locating", correct: false},
            { text: "Uniform Resource Locator", correct: true},
            { text: "All of the above", correct: false},
        ]
    },
    {
        question: "All are part of the webpage structure except____________.",
        answers: [
            { text: "!DOCTYPE htnl", correct: false},
            { text: "button", correct: true},
            { text: "head", correct: false},
            { text: "body", correct: false},
        ]
    },
    {
        question: "___________ and ____________ are types of list in HTML.",
        answers: [
            { text: "Border and Border radius", correct: false},
            { text: "Width and height", correct: false},
            { text: "Backgroud and background color", correct: false},
            { text: "Order and Un-order list", correct: true},
        ]
    },
    
    {
        question: "I am a tag, with my supper power you can add text to your webpage",
        answers: [
            { text: "H1 tag", correct: true},
            { text: "button tag", correct: false},
            { text: "list tag", correct: false},
            { text: "All of the above", correct: false},
        ]
    },
    
    {
        question: "The language use to write on web is called _____________",
        answers: [
            { text: "HTML", correct: true},
            { text: "CSS", correct: false},
            { text: "Javascript", correct: false},
            { text: "Browser", correct: false},
        ]
    },
    {
        question: "The language use to design and add color is called ____________",
        answers: [
            { text: "HTML", correct: false},
            { text: "CSS", correct: true},
            { text: "Javascript", correct: false},
            { text: "Browser", correct: false},
        ]
    },
    {
        question: "Where did we write computer language?",
        answers: [
            { text: "Text Book", correct: false},
            { text: "Exercise Book", correct: false},
            { text: "Text Editor", correct: true},
            { text: "Microsoft Word", correct: false},
        ]
    },
    {
        question: "I am a computer language which is written in tags. Who am I?",
        answers: [
            { text: "Javascript", correct: false},
            { text: "CSS", correct: false},
            { text: "React JS", correct: false},
            { text: "HTML", correct: true},
        ]
    },
    {
        question: "I am a type of tag. I dont have a closed state. Who am I?",
        answers: [
            { text: "button", correct: false},
            { text: "img", correct: true},
            { text: "h1", correct: false},
            { text: "P", correct: false},
        ]
    },
    {
        question: "What is the name of the text editor we use to write our HTML and CSS Language?",
        answers: [
            { text: "Note pad", correct: false},
            { text: "Microsoft word", correct: false},
            { text: "Visual Studio Code", correct: true},
            { text: "Google Chrome", correct: false},
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
 
	