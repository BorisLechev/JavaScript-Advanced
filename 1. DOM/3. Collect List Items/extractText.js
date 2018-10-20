function extractText() {
    let listItems = [];
    let listedNodes = document.querySelectorAll("ul#items li");
    let textarea = document.getElementById("result");

    for (let node of listedNodes) {
        textarea.value += node.textContent + "\n";
    }
}