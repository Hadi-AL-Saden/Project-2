'use strict';
let btn=document.getElementById("submit");
let loginemail=document.getElementById("email");
let emailError=document.getElementById("email-error")
let password=document.getElementById("Password-error")
let loginpass=document.getElementById("password");

  function render(parsData){
  parsData.map(function(i){
      console.log(i.quizoptions);

      if(i.quizoptions=='HTML'){
      btn.href="../HTML-Quiz/Home-HTML-Quiz/index.html";  
      }
      else if (i.quizoptions=='HOME'){
        btn.href="../index.html"; 
      }
      else if (i.quizoptions=='CSS'){
        btn.href="../CSS-Quiz/Home-CSS-Quiz/index.html"; 
      }
      else if (i.quizoptions=='JS'){
        btn.href="../JS-Quiz/Home-JS-Quiz/index.html"; 
      }
  })
  //samar
  
  if (loginemail.value == parsData[0].email){
    emailError.innerHTML="your email is correct";
  
  if(loginpass.value == parsData[0].password){
     
      password.innerHTML="your pass is correct"; 
       document.getElementById("submit").innerHTML="Login";
  }
      else{
       password.innerHTML=" your pass is wrong";
      }
     
  }

  }

function GetDataFromLocalStorage(){
    let storageData=localStorage.getItem('formData');
    let parsData=JSON.parse(storageData);
    render(parsData)
};
       