var timer = 75;
var endTime = 0;
var wrongAnswerTime = 10;


//Start Quiz Button
startQuizEl.addEventListener("click", function(){
    firstQuestion();
} )

// Question 1 
/* Commonly used data tyoes Do NOT include:
1. strings
2. booleans 
3. alerts (answer)
4. numbers 
*/
var firstQuestion = function() {
    firstQuestionEl.textConent = "Commonly used data types DO NOT include";

    firstAnswerOne.innerHTML = "1. strings";
    firstAnswerOne.className = "btn";
    docuemnt.body.appendChild(firstAnswerOne);
    firstAnswerOne.addEventListener("click", fuction() {
        rightAnswer = false;
        secondQuestion();
        firstAnswerOne.remove();
        firstAnswertwo.remove();
        firstAnswerthree.remove();
        firstAnswerfour.remove();
        return rightAnswer;
    });

    firstAnswerTwo.innerHTML = "2. booleans";
    firstAnswerTwo.className = "btn";
    docuemnt.body.appendChild(firstAnswerTwo);
    firstAnswerTwo.addEventListener("click", fuction() {
        rightAnswer = false;
        secondQuestion();
        firstAnswerOne.remove();
        firstAnswerTwo.remove();
        firstAnswerThree.remove();
        firstAnswerFour.remove();
        return rightAnswer;
    });

    firstAnswerThree.innerHTML = "3. alerts";
    firstAnswerThree.className = "btn";
    docuemnt.body.appendChild(firstAnswerThree);
    firstAnswerThree.addEventListener("click", fuction() {
        rightAnswer = True;
        secondQuestion();
        firstAnswerOne.remove();
        firstAnswerTwo.remove();
        firstAnswerThree.remove();
        firstAnswerFour.remove();
        return rightAnswer;
    });

    firstAnswerFour.innerHTML = "4. numbers";
    firstAnswerFour.className = "btn";
    docuemnt.body.appendChild(firstAnswerThree);
    firstAnswerFour.addEventListener("click", fuction() {
        rightAnswer = false;
        secondQuestion();
        firstAnswerOne.remove();
        firstAnswerTwo.remove();
        firstAnswerThree.remove();
        firstAnswerFour.remove();
        return rightAnswer;
    });

}

//Quesstion 2
/* The condition in an if/else statment is enclosed with ________ . 
1. quotes 
2. curly brackets 
3. parenthesis (answer)
4. square brakets 
*/

// Question 3 
/* Arrays in JavaScript can be used to store _______ .
1. numbers and strings 
2. other arrays 
3. booleans 
4. all of the above (answer)
*/

//Question 4 
/* String values must be enclosed within ______ when being assigned to variables. 
1. commas 
2. curly brackets 
3. quotes (answer)
4. parenthesis
*/


//Question 4 
/* A very useful tool used during development and debugging for printing content to the debugger is: 
1. JavaScript
2. terminal/bash
3. for loops
4. console.log (answer)
*/