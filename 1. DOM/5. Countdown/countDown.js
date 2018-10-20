window.onload = function () {
    countdown(600);
};

function countdown(seconds) {
    let time = seconds;
    let box = document.getElementById("time");
    setInterval(() => {
        time--;
        box.value = Math.trunc(time / 60) + ":" + ("0" + (time % 60)).slice(-2);
    }, 1000);
}