function addItem() {
    let listOfItems = document.getElementById("items");
    let toAddText = document.getElementById("newText").value;
    let toAddLi = document.createElement("li");

    toAddLi.innerHTML = toAddText + " " + "<a href='#'>[Delete]</a>";

    listOfItems.appendChild(toAddLi);
    toAddLi.children[0].addEventListener("click", (evt) => {
        let deleteLi = evt.target.parentNode;
        deleteLi.remove();
    });

    document.getElementById("newText").value = "";
}