const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);



function paintGreetings(username){

    //greeting.innerText = `Hello ${username}`;
    greeting.innerText = title + username
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const date = new Date();
let timeNow = date.getHours();

if(timeNow >= 5 && timeNow < 12){
    title = "Good Morning, "
}else if(timeNow >= 12 && timeNow < 19){
    title = "Good Afternoon, "
}else if(timeNow >= 19 && timeNow < 22){
    title = "Good Evening, "
}else if(timeNow >= 22 || timeNow < 5){
    title = "Good Night, "
}


const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greetings
    paintGreetings(savedUsername);
}