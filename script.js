let seconds = 1500;

const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const progressRing = document.getElementById("progress-ring");
const circumference = 2* Math.PI * 250;
const timerDisplay = document.getElementById("timer");

let timerInterval = null;

function  updateDisplay() {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    timerDisplay.textContent =
    `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;

    const progress = seconds / 1500;

    progressRing.style.strokeDashoffset =
        circumference * (1-progress);

}



function startTimer() {
if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval =  null;
    startButton.textContent = "Start";
    return;
}
if (seconds <= 0) {
    return;
}


startButton.textContent = "Pause";

timerInterval = setInterval(function() {
        seconds--;
        updateDisplay();

        if(seconds <=0) {
            clearInterval(timerInterval);
            timerInterval = null;
            startButton.textContent = "start";
        }
    }, 1000);
}


startButton.addEventListener("click", startTimer);

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    seconds = 1500;
    updateDisplay();

    startButton.textContent = "start";
}

resetButton.addEventListener("click", resetTimer);

updateDisplay();
