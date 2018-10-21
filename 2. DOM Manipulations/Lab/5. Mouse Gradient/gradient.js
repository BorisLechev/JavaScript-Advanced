function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    let result = document.getElementById("result");

    gradient.addEventListener("mousemove", (event) => {
        let x = event.offsetX; // event.clientX
        let percent = (x / event.target.clientWidth) * 100; // (x / gradient.clientWidth) * 100
        result.textContent = `${Math.floor(percent)}%`;
    });

    gradient.addEventListener("mouseout", () => {
        result.textContent = "";
    });
}