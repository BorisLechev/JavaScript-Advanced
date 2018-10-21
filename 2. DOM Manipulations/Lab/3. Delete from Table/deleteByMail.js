function deleteByEmail() {
    let mail = document.getElementsByName("email")[0].value;
    let secondColumn = document.querySelectorAll("tr td:nth-child(2)");

    for (let td of secondColumn) {
        if (td.textContent === mail) {
            let row = td.parentNode.remove();

            document.getElementById("result").textContent = "Deleted.";
            return;
        }
    }

    document.getElementById("result").textContent = "Not found.";
}