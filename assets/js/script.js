var clickStart = document.querySelector("#start");
var countDown = document.querySelector("#countdown");
var hide = document.querySelector(".hide");

var index = document.body;
var nav = document.createElement("nav");
var h1 = document.createElement("h1");
var h2 = document.createElement("h2");
var ol = document.createElement("ol");
var liA = document.createElement("button");
var liB = document.createElement("button");
var liC = document.createElement("button");
var liD = document.createElement("button");

function firstQuestion() {
  h2.textContent = "What is an Array?";
  liA.textContent = "A special form of object that can store a variety of values within a single variable";
  liB.textContent = "A function type that when called will create list of existing value types";
  liC.textContent = "A section that stores CSS syntax that allows you to adjust styling for JavaScript";
  liD.textContent = "A variable that can only contain string values";

  index.append(nav);
  index.append(h2);
  index.append(ol);
  ol.appendChild(liA);
  ol.appendChild(liB);
  ol.appendChild(liC);
  ol.appendChild(liD);
};

var showNextQuestion = function() {
  firstQuestion();
};

/* 

Activity 7 - Line 8, createElement
Check for correct answer
(Update DOM/Display contents)

Activity 18 - 
Deducted time if they answer wrong


If answer is correct then move to next question and increases score

secondQuestion(

);

thirdQuestion(

);

*/

// countdown function when called will initiate the timer variable
function countdown() {

  // variables that represents the start and end points of the timer
  var startTime = 60;
  var endTime = 0;

  // timer variable is assigned the setInterval function 
  var timer = setInterval(function() {

    // startTime variable (60) is decremented continuously while relaying the countdown to the front-end
    startTime--;
    countDown.textContent = "Time: " + startTime;

    // if statement that check when startTime and endTime equal to 0
    if (startTime == endTime) {

      // Will replace the timer with a string and stopping the timer variable from counting down
      countDown.textContent = "Times Up!";
      clearInterval(timer);
    }
  // setInterval decrements by 1000 miliseconds (runs the loop every second)
  }, 1000);
}

function display() {
  hide.style.display = "none";
};

// When user clicks on the "Start" button it will call the countdown function
clickStart.addEventListener("click", display);
clickStart.addEventListener("click", countdown);
clickStart.addEventListener("click", showNextQuestion);