'use strict';

let loginemail=document.getElementById("email");
let loginpass=document.getElementById("password");

function GetDataFromLocalStorage(){
    let storageData=localStorage.getItem('formData');
    let parsData=JSON.parse(storageData);


    if (loginemail.value == parsData[0].email){
        alert("your email is correct");
    
    if(loginpass.value == parsData[0].password){
       
        alert("your pass is correct"); 
         document.getElementById("submit").innerHTML="submit";
        window.location="./HTML/index.html";
    }
        else{
            alert(" your pass is wrong");
        }
       
    }};
       