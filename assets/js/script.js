
var body = document.body;
var questionEl = document.getElementById('questions');
var finalScoreEl = document.getElementById('final-score');
var quizCompleteEl = document.getElementById('quizComplete');
var formEl = document.getElementById('initial-form');
var btnEl = document.getElementsByClassName('btn');
var infoEl = document.querySelector("#intro");
var startQuizEl = document.querySelector('#start-quiz');
var timerEl = document.getElementById('timer')
var timeOnTimer = 75;
var stopTime = 0;
var penelty = 10;

var firstAnswerOne = document.createElement("button");
var firstAnswerTwo = document.createElement("button");
var firstAnswerThree = document.createElement("button");
var firstAnswerFour = document.createElement("button");

var secondAnswerOne = document.createElement("button");
var secondAnswerTwo = document.createElement("button");
var secondAnswerThree = document.createElement("button");
var secondAnswerFour = document.createElement("button");

var thirdAnswerOne = document.createElement("button");
var thirdAnswerTwo = document.createElement("button");
var thirdAnswerThree = document.createElement("button");
var thirdAnswerFour = document.createElement("button");

var fourthAnswerOne = document.createElement("button");
var fourthAnswerTwo = document.createElement("button");
var fourthAnswerThree = document.createElement("button");
var fourthAnswerFour = document.createElement("button");

var fifthAnswerOne = document.createElement("button");
var fifthAnswerTwo = document.createElement("button");
var fifthAnswerThree = document.createElement("button");
var fifthAnswerFour = document.createElement("button");

//Start Quiz Button
startQuizEl.addEventListener("click", function(){
    infoEl.style.display = 'none';
    timer();
    firstQuestion();
});

//Timer
var timeInterval = setInterval(function(){});
var timer = function(){
    timeInterval = setInterval(function(){
        if (timeOnTimer > 0){
            timerEl.textContent = 'Time: ' + timeOnTimer;
            timeOnTimer --;
        }
        else if (timeOnTmer <= 0){
            endquiz();
            solutionEl.remove();

            firstAnswerOne.remove();
            firstAnswerTwo.remove();
            firstAnswerThree.remove();
            firstAnswerFour.remove();

            secondAnswerOne.remove();
            secondAnswerTwo.remove();
            secondAnswerThree.remove();
            secondAnswerFour.remove();
        
            thirdAnswerOne.remove();
            thirdAnswerTwo.remove();
            thirdAnswerThree.remove();
            thirdAnswerFour.remove();        

            fourthAnswerOne.remove();
            fourthAnswerTwo.remove();
            fourthAnswerThree.remove();
            fourthAnswerFour.remove();

            fifthAnswerOne.remove();
            fifthAnswerTwo.remove();
            fifthAnswerThree.remove();
            fifthAnswerFour.remove();

        timerEl.textContent = 'Time: 0';   

        }
    }, 1000);
}

var timerStop = function() {
    clearInterval(timeInterval);
    timerEl.textContent = "Time: " + timeOnTimer;   
};

var penelityDeduction = function(){
    clearInterval(timeInterval);
    timeOnTimer = timeOnTimer - penelty;
    timer();
} 

// Question 1 Commonly used data tyoes Do NOT include:

var firstQuestion = function() {
    questionEl.textContent = "Commonly used data types DO NOT include";

    firstAnswerOne.innerHTML = "1. strings";
    firstAnswerOne.className = "btn";
    document.body.appendChild(firstAnswerOne);
    firstAnswerOne.addEventListener("click", function(){
        rightAnswer = false;
        penelityDeduction();
        secondQuestion();
        firstAnswerOne.remove();
        firstAnswerTwo.remove();
        firstAnswerThree.remove();
        firstAnswerFour.remove();
        return rightAnswer;
    });

    firstAnswerTwo.innerHTML = "2. booleans";
    firstAnswerTwo.className = "btn";
    document.body.appendChild(firstAnswerTwo);
    firstAnswerTwo.addEventListener("click", function(){
        rightAnswer = false;
        penelityDeduction();
        secondQuestion();
        firstAnswerOne.remove();
        firstAnswerTwo.remove();
        firstAnswerThree.remove();
        firstAnswerFour.remove();
        return rightAnswer;
    });

    firstAnswerThree.innerHTML = "3. alerts";
    firstAnswerThree.className = "btn";
    document.body.appendChild(firstAnswerThree);
    firstAnswerThree.addEventListener("click", function(){
        rightAnswer = true;
        secondQuestion();
        firstAnswerOne.remove();
        firstAnswerTwo.remove();
        firstAnswerThree.remove();
        firstAnswerFour.remove();
        return rightAnswer;
    });

    firstAnswerFour.innerHTML = "4. numbers";
    firstAnswerFour.className = "btn";
    document.body.appendChild(firstAnswerFour);
    firstAnswerFour.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        secondQuestion();
        firstAnswerOne.remove();
        firstAnswerTwo.remove();
        firstAnswerThree.remove();
        firstAnswerFour.remove();
        return rightAnswer;
    });

}

//Quesstion 2 The condition in an if/else statment is enclosed with ________ . 

var secondQuestion = function() {
    questionEl.textContent = "Commonly used data types DO NOT include";
    secondAnswerOne.innerHTML = "1. quotes ";
    secondAnswerOne.className = "btn";
    document.body.appendChild(secondAnswerOne);
    secondAnswerOne.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        thirdQuestion();
        secondAnswerOne.remove();
        secondAnswerTwo.remove();
        secondAnswerThree.remove();
        secondAnswerFour.remove();
        return rightAnswer;
    });

    secondAnswerTwo.innerHTML = "2. curly brackets ";
    secondAnswerTwo.className = "btn";
    document.body.appendChild(secondAnswerTwo);
    secondAnswerTwo.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        thirdQuestion();
        secondAnswerOne.remove();
        secondAnswerTwo.remove();
        secondAnswerThree.remove();
        secondAnswerFour.remove();
        return rightAnswer;
    });

    secondAnswerThree.innerHTML = "3. parenthesis ";
    secondAnswerThree.className = "btn";
    document.body.appendChild(secondAnswerThree);
    secondAnswerThree.addEventListener("click", function() {
        rightAnswer = true;
        thirdQuestion();
        secondAnswerOne.remove();
        secondAnswerTwo.remove();
        secondAnswerThree.remove();
        secondAnswerFour.remove();
        return rightAnswer;
    });

    secondAnswerFour.innerHTML = "4. square brackets";
    secondAnswerFour.className = "btn";
    document.body.appendChild(secondAnswerFour);
    secondAnswerFour.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        thirdQuestion();
        secondAnswerOne.remove();
        secondAnswerTwo.remove();
        secondAnswerThree.remove();
        secondAnswerFour.remove();
        return rightAnswer;
    });

}
// Question 3 Arrays in JavaScript can be used to store _______ .

var thirdQuestion = function() {
    questionEl.textContent = "Arrays in JavaScript can be used to store _______ .";

    thirdAnswerOne.innerHTML = "1. numbers and strings";
    thirdAnswerOne.className = "btn";
    document.body.appendChild(thirdAnswerOne);
    thirdAnswerOne.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        fourthQuestion();
        thirdAnswerOne.remove();
        thirdAnswerTwo.remove();
        thirdAnswerThree.remove();
        thirdAnswerFour.remove();
        return rightAnswer;
    });

    thirdAnswerTwo.innerHTML = "2. other arrays";
    thirdAnswerTwo.className = "btn";
    document.body.appendChild(thirdAnswerTwo);
    thirdAnswerTwo.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        fourthQuestion();
        thirdAnswerOne.remove();
        thirdAnswerTwo.remove();
        thirdAnswerThree.remove();
        thirdAnswerFour.remove();
        return rightAnswer;
    });

    thirdAnswerThree.innerHTML = "3. booleans";
    thirdAnswerThree.className = "btn";
    document.body.appendChild(thirdAnswerThree);
    thirdAnswerThree.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        fourthQuestion();
        thirdAnswerOne.remove();
        thirdAnswerTwo.remove();
        thirdAnswerThree.remove();
        thirdAnswerFour.remove();
        return rightAnswer;
    });

    thirdAnswerFour.innerHTML = "4. all of the above";
    thirdAnswerFour.className = "btn";
    document.body.appendChild(thirdAnswerFour);
    thirdAnswerFour.addEventListener("click", function() {
        rightAnswer = true;
        fourthQuestion();
        thirdAnswerOne.remove();
        thirdAnswerTwo.remove();
        thirdAnswerThree.remove();
        thirdAnswerFour.remove();
        return rightAnswer;
    });

}

//Question 4 String values must be enclosed within ______ when being assigned to variables. 

var fourthQuestion = function() {
    questionEl.textContent = "String values must be enclosed within ______ when being assigned to variables.";

    fourthAnswerOne.innerHTML = "1. commas";
    fourthAnswerOne.className = "btn";
    document.body.appendChild(fourthAnswerOne);
    fourthAnswerOne.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        fifthQuestion();
        fourthAnswerOne.remove();
        fourthAnswerTwo.remove();
        fourthAnswerThree.remove();
        fourthAnswerFour.remove();
        return rightAnswer;
    });

    fourthAnswerTwo.innerHTML = "2. curly brackets";
    fourthAnswerTwo.className = "btn";
    document.body.appendChild(fourthAnswerTwo);
    fourthAnswerTwo.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        fifthQuestion();
        fourthAnswerOne.remove();
        fourthAnswerTwo.remove();
        fourthAnswerThree.remove();
        fourthAnswerFour.remove();
        return rightAnswer;
    });

    fourthAnswerThree.innerHTML = "3. quotes ";
    fourthAnswerThree.className = "btn";
    document.body.appendChild(fourthAnswerThree);
    fourthAnswerThree.addEventListener("click", function() {
        rightAnswer = true;
        fifthQuestion();
        fourthAnswerOne.remove();
        fourthAnswerTwo.remove();
        fourthAnswerThree.remove();
        fourthAnswerFour.remove();
        return rightAnswer;
    });

    fourthAnswerFour.innerHTML = "4. parenthesis";
    fourthAnswerFour.className = "btn";
    document.body.appendChild(fourthAnswerFour);
    fourthAnswerFour.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        fifthQuestion();
        fourthAnswerOne.remove();
        fourthAnswerTwo.remove();
        fourthAnswerThree.remove();
        fourthAnswerFour.remove();
        return rightAnswer;
    });

}

//Question 5 A very useful tool used during development and debugging for printing content to the debugger is: 


var fifthQuestion = function() {
    questionEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:  ";

    fifthAnswerOne.innerHTML = "1. JavaScript";
    fifthAnswerOne.className = "btn";
    document.body.appendChild(fifthAnswerOne);
    fifthAnswerOne.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        quizOver();
        fifthAnswerOne.remove();
        fifthAnswerTwo.remove();
        fifthAnswerThree.remove();
        fifthAnswerFour.remove();
        solutionEl.remove();
        return rightAnswer;
    });

    fifthAnswerTwo.innerHTML = "2. terminal/bash";
    fifthAnswerTwo.className = "btn";
    document.body.appendChild(fifthAnswerTwo);
    fifthAnswerTwo.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        quizOver();
        fifthAnswerOne.remove();
        fifthAnswerTwo.remove();
        fifthAnswerThree.remove();
        fifthAnswerFour.remove();
        solutionEl.remove();
        return rightAnswer;
    });

    fifthAnswerThree.innerHTML = "3. for loops";
    fifthAnswerThree.className = "btn";
    document.body.appendChild(fifthAnswerThree);
    fifthAnswerThree.addEventListener("click", function() {
        rightAnswer = false;
        penelityDeduction();
        quizOver();
        fifthAnswerOne.remove();
        fifthAnswerTwo.remove();
        fifthAnswerThree.remove();
        fifthAnswerFour.remove();
        solutionEl.remove();
        return rightAnswer;
    });

    fifthAnswerFour.innerHTML = "4. console.log";
    fifthAnswerFour.className = "btn";
    document.body.appendChild(fifthAnswerFour);
    fifthAnswerFour.addEventListener("click", function() {
        rightAnswer = true;
        quizOver();
        fifthAnswerOne.remove();
        fifthAnswerTwo.remove();
        fifthAnswerThree.remove();
        fifthAnswerFour.remove();
        solutionEl.remove();
        return rightAnswer;
    });

}

var finalScoreMessage = document.createElement("p");
//Quiz ends
var users= {};

var quizOver = function(){
    fifthAnswerOne.remove();
    fifthAnswerTwo.remove();
    fifthAnswerThree.remove();
    fifthAnswerFour.remove();
    timerStop();
    questionEl.textContent = 'All done!';
    finalScoreEl.textContent = 'Your final score is ' + timeOnTimer;
    formEl.style.display = 'flex';
    validateForm();
};

var inputInitials= document.getElementById("initials");
var validateForm = function() {

    if (inputInitials == null) {
      alert("Initials must be filled out");
      return false;
    }
  };