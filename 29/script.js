const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingHours = 0;
let leadingMinutes = 0;

let timeInterval = null;
let timerStatus = "stopped";

function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    }
    else {
        leadingMinutes = minutes;
    }
    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    }
    else {
        leadingHours = hours;
    }

    let displayTimer = document.querySelector("#timer").innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;


}

// window.setInterval(stopWatch, 100)

startStopBtn.addEventListener("click", function () {
    if (timerStatus === "stopped") {
        timeInterval = window.setInterval(stopWatch, 1000);
        timerStatus = "started";
    } else {
        window.clearInterval(timeInterval);
        timerStatus = "stopped";
    }
})

resetBtn.addEventListener("click", function(){
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
})