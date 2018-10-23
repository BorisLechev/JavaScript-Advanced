function search() {
    let substring = $("#searchText").val();
    let matchedElements = $(`#towns li:contains("${substring}")`);

    $("#towns li").css("font-weight", "");
    matchedElements.css("font-weight", "bold");

    $("#result").text(matchedElements.length + " matches found.");
}