window.onload = function () {
    stopwatch();
};

function stopwatch() {
    let startButton = document.getElementById("startBtn");
    let stopButton = document.getElementById("stopBtn");
    let result = document.getElementById("time");
    let interval;
    let time;

    startButton.addEventListener("click", () => {
        time = -1;
        incrementTime();
        interval = setInterval(incrementTime, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
    });

    stopButton.addEventListener("click", () => {
        clearInterval(interval);
        startButton.disabled = false;
        stopButton.disabled = true;
    });

    function incrementTime() {
        time++;
        result.textContent = ('0' + Math.trunc(time / 60)).slice(-2) + ':' + ('0' + time % 60).slice(-2);
    }
}