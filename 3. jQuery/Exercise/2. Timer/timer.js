function timer() {
    let interval = null;
    let time = 0;

    $("#start-timer").on("click", () => {
        if (interval === null) {
            interval = setInterval(() => {
                time++;
                $("#hours").text(("0" + Math.trunc(time / 3600)).slice(-2));
                $("#minutes").text(("0" + Math.trunc((time / 60) % 60)).slice(-2));
                $("#seconds").text(("0" + time % 60).slice(-2));
            }, 1000);
        }
    });

    $("#stop-timer").on("click", () => {
        clearInterval(interval);
        interval = null;
    });
}

window.onload = function () {
    timer();
};