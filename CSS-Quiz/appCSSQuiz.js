'use strict';
let Questions= document.getElementById("questions");
let answerOne= document.getElementById("answer1");
let answerTwo= document.getElementById("answer2");
let answerThree= document.getElementById("answer3");
let answerFour=document.getElementById("answer4");
let questionnum=document.getElementById("quisnum");
let AnswersDiv=document.getElementById('AnswersDiv');
let XQuestion=0;
let QuizContainer=document.getElementById("QuizContainer");
let firstop=document.getElementById('firstop');
let secop=document.getElementById('secop');
let thirdop=document.getElementById('thirdop');
let fourop=document.getElementById('fourop');
let nxtBtn=document.getElementById('nxtBtn');
let Next=document.getElementById("btn-next")
let correctAnswerCount=0;
let userQuizAnswers=[];
let x=[];
let activebtn=0;


let cssQuiz = [{
    questions: "Which HTML tag is used to define an internal style sheet?",
    choices: ["style", "css", "script", "link"],
    correctAnswer:"style&g",
    questionnumber:"1 of 10"
}, {
    questions: "Which HTML attribute is used to define inline styles??",
    choices: ["class", "font", "style", "styles"],
    correctAnswer:"style",
    questionnumber:"2 of 10"
}, {
    questions: "Which property is used to change the background color?",
    choices: ["bgcolor", "color", "backgruond-color", "colorback"],
    correctAnswer:"backgruond-color",
    questionnumber:"3 of 10"
}, {
    questions: "Which CSS property is used to change the text color of an element?:",
    choices: ["fgcolor", "text-color", "color", "font-color"],
    correctAnswer:"color",
    questionnumber:"4 of 10"
}, {
    questions: "Which CSS property controls the text size?",
    choices: ["font-style", "text-size", "text-style", "font-size"],
    correctAnswer:"font-size",
    questionnumber:"5 of 10"
}, {
    questions: "Which property is used to change the font of an element?",
    choices: ["font-style", "font-family", "font-weight","font-color"],
    correctAnswer:"font-family",
    questionnumber:"6 Of 10"
}, {
    questions: "Which property is used to change the left margin of an element?",
    choices: ["margin-left", "padding-left", "indent", "flot-left"],
    correctAnswer:"margin-left",
    questionnumber:"7 of 10"
}, {
    questions: "How do you select an element with id 'demo'?",
    choices: ["#demo", "*demo", ".demo","demo"],
    correctAnswer:"#demo",
    questionnumber:"8 of 10"
}, {
    questions: "How do you select elements with class name 'test'?",
    choices: ["#test", "test", "*test", ".test"],
    correctAnswer:".test",
    questionnumber:"9 of 10"
}, {
    questions: "How do you select all p elements inside a div element?",
    choices: ["div p", "div+p", "div.p", "p"],
    orrectAnswer:"div p",
    questionnumber:"10 of 10"
}];

intitalization();

function intitalization(){
quizBeginning();
}

function quizBeginning(){
    Questions.innerHTML=cssQuiz[0].questions;
    questionnum.innerHTML=cssQuiz[0].questionnumber;
    answerOne.innerHTML=cssQuiz[0].choices[0];
    answerTwo.innerHTML=cssQuiz[0].choices[1];
    answerThree.innerHTML=cssQuiz[0].choices[2];
    answerFour.innerHTML=cssQuiz[0].choices[3];
    Next.disabled=true;

    }
  
function checkAnswer(userAnswers){
    if(userAnswers == cssQuiz[XQuestion].correctAnswer){ 
        correctAnswerCount=correctAnswerCount+1;
        console.log('the counter is:', correctAnswerCount);
    }
    return correctAnswerCount;
    
}

function showNextQuestion(){
    if(XQuestion==cssQuiz.length-1){
        nxtBtn.style.display='block'; 
        nxtBtn.href="./reuslt css/indexResult.html";
    }
    else{
        enableButton();
    }
    LocalStorageFrom();
}

firstop.addEventListener('click',function(e){
    userQuizAnswers.push(1);
    Next.disabled=false;
})
secop.addEventListener('click',function(e){
    userQuizAnswers.push(2);
    Next.disabled=false;
 })
thirdop.addEventListener('click',function(e){
    userQuizAnswers.push(3);
    Next.disabled=false;
 })
 fourop.addEventListener('click',function(e){
    userQuizAnswers.push(4);
    Next.disabled=false;
 })

 function enableButton(){
    XQuestion++;
    Questions.innerHTML=cssQuiz[XQuestion].questions;
    answerOne.innerHTML=cssQuiz[XQuestion].choices[0];
    answerTwo.innerHTML=cssQuiz[XQuestion].choices[1];
    answerThree.innerHTML=cssQuiz[XQuestion].choices[2];
    answerFour.innerHTML=cssQuiz[XQuestion].choices[3];
    questionnum.innerHTML=cssQuiz[XQuestion].questionnumber;
    Next.disabled=true;
    firstop.checked = false;
    secop.checked = false;
    thirdop.checked = false;
 }
function LocalStorageFrom(){
    console.log(correctAnswerCount);
    let array=JSON.stringify(correctAnswerCount);
    localStorage.setItem('userAnswersCSS',array);
    let array2=JSON.stringify(userQuizAnswers);
    localStorage.setItem('userQuizAnswersCSS',array2)

}

function startTimer(duration, view_date) {
    let countdown = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(countdown / 60, 10);
        seconds = parseInt(countdown % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        view_date.textContent = minutes + ":" + seconds;

        if (--countdown < 0) {
            location.href='../../result.html';
        }
    }, 1000);
}

window.onload = function () {
   let minutesOfFive = 60 * 3,
        view_date = document.querySelector('#time');
    startTimer(minutesOfFive, view_date);
};