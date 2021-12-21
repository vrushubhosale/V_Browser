
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function record(){
    document.getElementById("link").innerHTML = "";
    recognition.start(document.getElementById("loading").innerHTML = "Listening...");
}
recognition.onresult =function run (event){
    console.log(event);

var Content = event.results[0] [0].transcript;
document.getElementById("loading").innerHTML = "";
document.getElementById("link").innerHTML = Content;
console.log(Content);}

function Homeredirect(){
    window.location.href = "home.html";
}

function facebook(){
    document.getElementById("link").innerHTML = "Facebook";
}

function twitter(){
    document.getElementById("link").innerHTML = "Twitter";
}

function reddit(){
    document.getElementById("link").innerHTML = "Reddit";
}

function youtube(){
    document.getElementById("link").innerHTML = "Youtube";
}