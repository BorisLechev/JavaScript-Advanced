function create(sentences) {
    let content = document.getElementById("content");

    for (let sentence of sentences) {
        let newDiv = document.createElement("div");
        let newParagraph = document.createElement("p");

        newParagraph.textContent = sentence;
        newParagraph.style.display = "none";

        newDiv.addEventListener("click", () => {
            newParagraph.style.display = "block";
        });

        newDiv.appendChild(newParagraph);
        content.appendChild(newDiv);
    }
}