var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");
var cheatButton = document.getElementById("cheatButton");

var incorrect = 0;
var numErrors = 0;
var correctNum = 0;
var numberWins = 0;
var numberLosses = 0;

var loseAudio = document.getElementById('loseAudio');
var winAudio = document.getElementById('winAudio');
var incorrectBuzzer = document.getElementById('incorrectBuzzer');
var correctBuzzer = document.getElementById('correctBuzzer');
var cheatAudio = document.getElementById('cheatAudio');

const dictionary = {
    question1: {
        question: "What does e^0 equal to?",
        correct: "1",
        wrongChoices: ["1000", "100"]
    },
    question2: {
        question: "Who was the president that got into the Watergate Scandal?",
        correct: "Richard Nixon",
        wrongChoices: ["Joe Biden", "Dwight Eisenhower"]
    },
    question3: {
        question: "Why was the Glorious Revolution called Glorious?",
        correct: "No bloodshed",
        wrongChoices: ["The king turned glorius", "Lots of bloodshed"]
    },
    question4: {
        question: "WWhen you combine two hydrogen atoms and one oxygen atom, what do you get?",
        correct: "Water",
        wrongChoices: ["Dioxide Hydrogen", "Explosion"]
    },
  }

  function checkAnswer(questionNum, selectedAnswer) {
    const questionData = dictionary[questionNum];
    if (questionData.correct === selectedAnswer) {
        correctBuzzer.play();
        document.getElementById('wrong').innerHTML = ""
        correctNum += 1;
        transition();
    } 
    else {
      answerIncorrect();
      numberOfwrong();
    }
  }

function transition () {
    if (correctNum == 1){
        card1.style.display = "none";
        card2.style.display = "block";
    }
    if (correctNum == 2){
        card2.style.display = "none";
        card3.style.display = "block";
    }
    if (correctNum == 3){
        card3.style.display = "none";
        card4.style.display = "block";
    }
    if (correctNum == 4){
        card4.style.display = "none";
        card7.style.display = "block";
    }
}

function answerIncorrect() {
    incorrectBuzzer.play();
    document.getElementById('wrong').innerHTML = "WRONG!"
    numErrors += 1;
    console.log("errors: " + numErrors);
}

function answerResults() {
    document.getElementById('wrong').innerHTML = ""
    card4.style.display = "none"; 
    card7.style.display = "block";
    cheatButton.style.display = "none";
}

function numberOfwrong(){
    if (numErrors == 1){
        document.getElementById('numIncorrect').innerHTML = "You made 1 error.";
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
    correctNum = 0;
    numErrors = 0;
    console.log("errors: " + numErrors);
    document.getElementById('numIncorrect').innerHTML = "You made 0 errors!";
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