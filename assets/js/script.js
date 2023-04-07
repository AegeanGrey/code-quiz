var clickStart = document.querySelector("#start");

var startTime = 60;

function countdown() {
    console.log("Countdown has begun: " + startTime);
    
    startTime--;
    console.log(startTime);
}

clickStart.addEventListener("click", countdown);