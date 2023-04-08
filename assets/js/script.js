var clickStart = document.querySelector("#start");

var startTime = 60;

// countdown function when called will decrement time from startTime
function countdown() {
    console.log("Countdown has begun: " + startTime);
    
    startTime--;
    console.log(startTime);
}

// When user clicks on the "Start" button,
// then the countdown function is called.
clickStart.addEventListener("click", countdown);