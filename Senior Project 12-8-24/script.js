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
    card1: {
        question: "What does e^0 equal to?",
        correct: "1",
        wrongChoices: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"]
    },
    card2: {
        question: "Who was the president that got into the Watergate Scandal?",
        correct: "Richard Nixon",
        wrongChoices: ["Joe Biden", "Dwight Eisenhower", "George Washington", "Abraham Lincoln", "Donald Trump", "Barack Obama"]
    },
    card3: {
        question: "Why was the Glorious Revolution called Glorious?",
        correct: "No bloodshed",
        wrongChoices: ["The king turned glorius", "Lots of bloodshed", "The king was overthrown", "The king was executed", "The king was exiled"]
    },
    card4: {
        question: "When you combine two hydrogen atoms and one oxygen atom, what do you get?",
        correct: "Water",
        wrongChoices: ["Dioxide Hydrogen", "Explosion", "Hydrogen", "Oxygen", "Hydrogen Dioxide", "Hydrogen Oxide", "Oxygen Hydrogen"]
    }
}

// Create answers for each question in the dictionary with up to amount of choices specified.
createAnswers(dictionary, 3);

function createAnswers(dictionary, maxChoices) {
    // Loop through each question in the dictionary.
    for (const key in dictionary) {
        // Get the question data.
        const questionData = dictionary[key];
        // Get the question.
        const question = questionData.question;
        // Get the correct answer.
        const correctAnswer = questionData.correct;
        // Get the wrong choices.
        const wrongChoices = shuffleAnswers(questionData.wrongChoices).slice(0, maxChoices - 1);

        // Create a card for the question.
        const card = document.createElement('div');
        // Set the id of the card to the key.
        card.id = key;
        // Set the style of the card to display none but the first card.
        if (card.id != "card1"){
            card.style.display = "none";
        }

        // Create a paragraph element for the question.
        const questionElement = document.createElement('p');
        // Set the text of the question element to the question.
        questionElement.innerText = question;
        // Append the question element to the card.
        card.appendChild(questionElement);

        // Create a button element for each answer.
        const answers = shuffleAnswers(wrongChoices.concat(correctAnswer));
        // Loop through each answer.
        answers.forEach(answer => {
            // Create a button element for the answer.
            const answerElement = document.createElement('button');
            // Set the text of the answer element to the answer.
            answerElement.innerText = answer;
            // Set the onclick event of the answer element to check the answer.
            answerElement.onclick = (event) => checkAnswer(event, key);
            // Append the answer element to the card.
            card.appendChild(answerElement);
        });

        // Append the card to the body.
        document.body.appendChild(card);
    }
}

function shuffleAnswers(array) {
    return array.sort(() => Math.random() - 0.5);
}

function checkAnswer(event, questionNum) {
    event.preventDefault();
    const selectedAnswer = event.target.innerText;
    const questionData = dictionary[questionNum];
    if (questionData.correct === selectedAnswer) {
        correctBuzzer.play();
        document.getElementById('wrong').innerHTML = ""
        correctNum += 1;
        transitionNext(questionNum);
    } 
    else {
        answerIncorrect();
        numberOfwrong();
    }
}

function transitionNext (questionNum) {
    const nextQuestionNum = parseInt(questionNum.slice(-1)) + 1;
    const nextCard = document.getElementById(`card${nextQuestionNum}`);
    if (nextCard) {
        document.getElementById(questionNum).style.display = "none";
        nextCard.style.display = "block";
    } else {
        answerResults();
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
