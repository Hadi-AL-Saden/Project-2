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
let correctAnswers=[3,4,1,2,1,3,4,1,1,2];



let JsQuiz = [{ 
    questions: "Inside which HTML element do we put the JavaScript?",
    choices: ["js","javascript", "script", "scripting"],
    correctAnswer:"script",
    questionnumber:"1 of 10"
}, {
    questions: "what is the data types of variable in JS?",
    choices: ["ALL OF ABOVE", " NUMBER", " STRING", "BOOLEN"],
    correctAnswer:"ALL OF ABOVE",
    questionnumber:"2 of 10"
}, {
    questions: "What is the correct HTML element for inserting a line break?",
    choices: ["if (i!=5)", "if i =! 5 then", "if (i5)", "if i5"],
    correctAnswer:"if (i!=5)",
    questionnumber:"3 of 10"
}, {
    questions: "How do you find the number with the highest value of x and y?",
    choices: ["ceil(x,y)", "Math.max(x,y)", "Math.ceil(x.y)", "top(x.y)"],
    correctAnswer:"Math.max(x,y)",
    questionnumber:"4 of 10"
}, {
    questions: "Which operator is used to assign a value to a variable?",
    choices: ["=", "*", "x", "-"],
    correctAnswer:"=",
    questionnumber:"5 of 10"
}, {
    questions: "What will the following code return: Boolean(10 > 9)",
    choices: ["false", "true", "NaN", "UNknow"],
    correctAnswer:"true",
    questionnumber:"6 Of 10"
}, {
    questions: " Which built-in method reverses the order of the elements of an array?",
    choices: ["changeOrder(order)", "None of the above.", "sort(order)", " reverse()"],
    correctAnswer:"reverse()",
    questionnumber:"7 of 10"
}, {
    questions: " Which of the following function of String object combines the text of two strings and returns a new string?",
    choices: ["concat()", "append()", "merge()", " add()"],
    correctAnswer:"concat()",
    questionnumber:"8 of 10"
}, {
    questions: "Javascript is an _______ language?",
    choices: ["Object-Oriented", "alt", "longdesc", "title"],
    correctAnswer:"Object-Oriented",
    questionnumber:"9 of 10"
}, {
    questions: "How do we write a comment in JavaScript?",
    choices: ["+c/", "/* */", "$", "#"],
    orrectAnswer:"/* */",
    questionnumber:"10 of 10"
}];

intitalization();

function intitalization(){
quizBeginning();
}

function quizBeginning(){
    Questions.innerHTML=JsQuiz[0].questions;
    questionnum.innerHTML=JsQuiz[0].questionnumber;
    answerOne.innerHTML=JsQuiz[0].choices[0];
    answerTwo.innerHTML=JsQuiz[0].choices[1];
    answerThree.innerHTML=JsQuiz[0].choices[2];
    answerFour.innerHTML=JsQuiz[0].choices[3];
    Next.disabled=true;
    
    }
  
function checkAnswer(userAnswers){
    if(userAnswers == JsQuiz[XQuestion].correctAnswer){ 
        correctAnswerCount=correctAnswerCount+1;
        console.log('the counter is:', correctAnswerCount);
    }
    return correctAnswerCount;
    
}

function showNextQuestion(){
    if(XQuestion==JsQuiz.length-1){
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
    Questions.innerHTML=JsQuiz[XQuestion].questions;
    answerOne.innerHTML=JsQuiz[XQuestion].choices[0];
    answerTwo.innerHTML=JsQuiz[XQuestion].choices[1];
    answerThree.innerHTML=JsQuiz[XQuestion].choices[2];
    answerFour.innerHTML=JsQuiz[XQuestion].choices[3];
    questionnum.innerHTML=JsQuiz[XQuestion].questionnumber;
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