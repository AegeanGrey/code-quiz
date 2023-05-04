var clickStart = document.querySelector("#start");
var countDown = document.querySelector("#countdown");

// countdown function when called will initiate the timer variable
function countdown() {

  // variables that represents the start and end points of the timer
  var startTime = 60;
  var endTime = 0;

  // timer variable is assigned the setInterval function 
  var timer = setInterval(function() {

    // startTime variable (60) is decremented continuously while relaying the countdown to the front-end
    startTime--;
    countDown.textContent = startTime;

    // if statement that check when startTime and endTime equal to 0
    if (startTime == endTime) {

      // Will replace the timer with a string and stopping the timer variable from counting down
      countDown.textContent = "Times Up!";
      clearInterval(timer);
    }
  // setInterval decrements by 1000 miliseconds (runs the loop every second)
  }, 1000);
}

// When user clicks on the "Start" button it will call the countdown function
clickStart.addEventListener("click", countdown);