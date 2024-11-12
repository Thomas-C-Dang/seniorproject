var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
const errors = [];
var loseAudio = document.getElementById('loseAudio');
var winAudio = document.getElementById('winAudio');
var incorrect = 0;
var incorrectBuzzer = document.getElementById('incorrectBuzzer');
var correctBuzzer = document.getElementById('correctBuzzer');

function answerCorrect1() {
    correctBuzzer.play();
    document.getElementById('WRONG').innerHTML = ""
    card2.style.display = "block"; 
    card1.style.display = "none"; 
}

function answerCorrect2() {
    correctBuzzer.play();
    document.getElementById('WRONG').innerHTML = ""
    card3.style.display = "block"; 
    card2.style.display = "none"; 
}

function answerCorrect3() {
    correctBuzzer.play();
    document.getElementById('WRONG').innerHTML = ""
    card4.style.display = "block"; 
    card3.style.display = "none"; 
}

function answerCorrect4() {
    correctBuzzer.play();
    document.getElementById('WRONG').innerHTML = ""
    card4.style.display = "none"; 
    if (errors.length == 0){
        card5.style.display = "block"; 
        winAudio.play();
        console.log("Player wins");
    }
    else{
        card6.style.display = "block";
        loseAudio.play();
        console.log("Player loses");
    }
}

function reset() {
    card1.style.display = "block"; 
    card5.style.display = "none"; 
    card6.style.display = "none"; 
    errors.length = 0;
    console.log(errors);
}

function answerIncorrect() {
    incorrectBuzzer.play();
    document.getElementById('WRONG').innerHTML = "WRONG!"
    errors.push(1);
    console.log (errors);
}