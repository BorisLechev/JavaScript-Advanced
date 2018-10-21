function addItem() {
    let listOfItems = document.getElementById("items");
    let toAddText = document.getElementById("newItemText").value;
    let toAddLi = document.createElement("li");

    toAddLi.textContent = toAddText;
    listOfItems.appendChild(toAddLi);
    document.getElementById("newItemText").value = "";
}