function timer(selector) {
    let time = 0;
    let interval;
    let isStarted = false;

    $("#start-timer").on("click", function () {
        if (!isStarted) {
            interval = setInterval(incrementTime, 1000);
            isStarted = true;
        }
    });

    $("#stop-timer").on("click", function () {
        clearInterval(interval);
        isStarted = false;
    });

    function incrementTime() {
        time++;
        $("#hours").text(("0" + Math.trunc(time / 3600)).slice(-2));
        $("#minutes").text(("0" + Math.trunc((time / 60) % 60)).slice(-2));
        $("#seconds").text(("0" + Math.trunc(time % 60)).slice(-2));
    }
}

window.onload = function () {
    timer();
};