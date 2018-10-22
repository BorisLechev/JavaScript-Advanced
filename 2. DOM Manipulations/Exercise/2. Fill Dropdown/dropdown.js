function addItem() {
    let addText = document.getElementById("newItemText");
    let addValue = document.getElementById("newItemValue");
    let dropdown = document.getElementById("menu");
    let option = document.createElement("option");

    option.textContent = addText.value;
    option.value = addValue.value;

    dropdown.appendChild(option);
    addText.value = "";
    addValue.value = "";
}