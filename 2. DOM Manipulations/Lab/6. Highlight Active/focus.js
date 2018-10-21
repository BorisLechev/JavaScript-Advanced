function focus() {
    let inputs = document.getElementsByTagName("input");

    for (let input of inputs) {
        input.addEventListener("focus", (event) => {
            event.target.parentNode.className = "focused";
        });

        input.addEventListener("blur", (event) => {
            event.target.parentNode.className = "";
        });
    }
}