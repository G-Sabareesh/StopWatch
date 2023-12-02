let [seconds, minutes, hours, milliseconds] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;
let displayTimevalue = `00:00:00`;

const startWatch = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const startImg = document.querySelector('.start');

function timerWatch() {

    document.getElementById("startBtn").disabled = true;

    milliseconds++;

    if (milliseconds == 10) {
        milliseconds = 0;
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;

            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    displayTimevalue =
        hours.toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0") +
        ":" +
        milliseconds.toString().padStart(2, "0");

    displayTime.innerHTML = displayTimevalue;

}

function watchStart() {
    timer = setInterval(timerWatch, 100);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours, milliseconds] = [0, 0, 0, 0];
    displayTime.innerHTML =
        hours.toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0") +
        ":" +
        milliseconds.toString().padStart(2, "0");
    timer = null;
}

function stop_Watch() {

    if (!stopBtn.disabled) {
        watchStop();
        stopBtn.disabled = true;
        startWatch.disabled = false;
        if ((stopBtn.disabled) && (startImg.src.includes('images/start.png'))) {
            startImg.src = 'images/pause.png';
            startImg.alt = '';
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    startWatch.addEventListener("click", () => {
        startWatch.disabled = true;
        stopBtn.disabled = false;
        watchStart();
    });

    const stopWatch = document.querySelector("#stopBtn");
    stopWatch.addEventListener("click", () => {
        if (timer != null) {
            stop_Watch()
        }
    });

    const resetWatch = document.querySelector("#resetBtn");
    resetWatch.addEventListener("click", () => {
        if (confirm('Do you want to reset the watch?')) {
            stopBtn.disabled = false;
            startWatch.disabled = false;
            startImg.src = 'images/start.png';
            startImg.alt = '';
            watchReset();
        }
    });
});
