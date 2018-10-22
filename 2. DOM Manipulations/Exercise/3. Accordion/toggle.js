function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let text = document.getElementById("extra");

    if (button.textContent === "More") {
        button.textContent = "Less";
        document.getElementById("extra").style.display = "block";
    } else if (button.textContent === "Less") {
        button.textContent = "More";
        document.getElementById("extra").style.display = "none";
    }
}