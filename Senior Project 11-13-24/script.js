var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");
var cheatButton = document.getElementById("cheatButton");

const errors = [];
var numberWins = 0;
var numberLosses = 0;

var loseAudio = document.getElementById('loseAudio');
var winAudio = document.getElementById('winAudio');

var incorrect = 0;
var numErrors = 0;

var incorrectBuzzer = document.getElementById('incorrectBuzzer');
var correctBuzzer = document.getElementById('correctBuzzer');

var cheatAudio = document.getElementById('cheatAudio');


function answerIncorrect() {
    incorrectBuzzer.play();
    document.getElementById('wrong').innerHTML = "WRONG!"
    errors.push(1);
    console.log("errors: " + errors);
}

function answerCorrect1() {
    correctBuzzer.play();
    document.getElementById('wrong').innerHTML = ""
    card2.style.display = "block"; 
    card1.style.display = "none"; 
}

function answerCorrect2() {
    correctBuzzer.play();
    document.getElementById('wrong').innerHTML = ""
    card3.style.display = "block"; 
    card2.style.display = "none"; 
}

function answerCorrect3() {
    correctBuzzer.play();
    document.getElementById('wrong').innerHTML = ""
    card4.style.display = "block"; 
    card3.style.display = "none"; 
}

function answerResults() {
    correctBuzzer.play();
    document.getElementById('wrong').innerHTML = ""
    card4.style.display = "none"; 
    card7.style.display = "block";
    cheatButton.style.display = "none";
    numberOfwrong();
}

function numberOfwrong(){
    for (i=0; i<errors.length; i++){
        numErrors += 1;
    }
    if (numErrors == 1){
        document.getElementById('numIncorrect').innerHTML = "You made 1 error";
    }
    else{
    document.getElementById('numIncorrect').innerHTML = "You made " + numErrors + " errors.";
    }
}

function winOrlose(){
    card7.style.display = "none";
    if (numErrors == 0){
        card5.style.display = "block"; 
        winAudio.play();
        console.log("Player wins");
        numberWins += 1;
        document.getElementById('numWins').innerHTML = "Wins: " + numberWins;
    }
    else{
        card6.style.display = "block";
        loseAudio.play();
        console.log("Player loses");
        numberLosses += 1;
        document.getElementById('numLosses').innerHTML = "Losses: " + numberLosses;
    }
}

function reset() {
    card1.style.display = "block"; 
    card5.style.display = "none"; 
    card6.style.display = "none"; 
    card8.style.display = "none"; 
    cheatButton.style.display = "block";
    errors.length = 0;
    numErrors = 0;
    console.log("errors: " + errors);
    document.getElementById('numIncorrect').innerHTML = ""
}

function cheatDetected(){
    card1.style.display = "none"; 
    card2.style.display = "none"; 
    card3.style.display = "none"; 
    card4.style.display = "none"; 
    card8.style.display = "block";
    cheatButton.style.display = "none";
    document.getElementById('wrong').innerHTML = ""
    cheatAudio.play();
    console.log("Player cheated")
    numberLosses += 1;
    document.getElementById('numLosses').innerHTML = "Losses: " + numberLosses;
}