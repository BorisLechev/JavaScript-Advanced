document.getElementById("addItem").addEventListener("click", addItem);

const deleteButtons = document.getElementsByClassName("deleteButton");

for (let deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", deleteItem);
}

function addItem() {
    let toAddText = document.getElementById("items");
    let creatLi = document.createElement("li");
    let inputField = document.getElementById("newText").value;

    creatLi.innerHTML = inputField + " <a href='#' class='deleteButton'>[Delete]</a>";

    creatLi.childNodes[1].addEventListener("click", (evt) => {
        document.getElementById("items").removeChild(evt.target.parentNode);
    });

    toAddText.appendChild(creatLi);

    document.getElementById("newText").value = "";
}