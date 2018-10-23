function search() {
    const searchTerm = $("#searchText").val().toLowerCase();

    const output = $("#towns li")
        .css("font-weight", "")
        .filter(function (index, elem) {
            return elem.textContent.toLowerCase().indexOf(searchTerm) > -1;
        })
        .css("font-weight", "bold");

    $("#result").text(output.length + " matches found.");
}