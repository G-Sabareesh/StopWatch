let [seconds, minutes, hours, milliseconds] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function timerWatch() {
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

    displayTime.innerHTML =
        hours.toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0") +
        ":" +
        milliseconds.toString().padStart(2, "0");

}

function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
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
}

document.addEventListener("DOMContentLoaded", () => {
    const startWatch = document.getElementById("startBtn");
    startWatch.addEventListener("click", () => {
        startWatch.disabled = true;
        console.log("hi");
        watchStart();
    });

    const stopWatch = document.querySelector(".stop");
    stopWatch.addEventListener("click", () => {
        watchStop();
        startWatch.disabled = false;
        startWatch.style.cursor = "pointer";
    });

    const resetWatch = document.querySelector(".reset");
    resetWatch.addEventListener("click", () => {
        watchReset();
        startWatch.disabled = false;
        startWatch.style.cursor = "pointer";
    });
});
