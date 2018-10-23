function initializeTable() {
    $("#createLink").on("click", addCountry);

    initCountry("Bulgaria", "Sofia");
    initCountry("Germany", "Berlin");
    initCountry("Russia", "Moscow");
    hideLinks();

    function hideLinks() {
        $("tr").find("a").show();
        $("tr:last-child").find("a:contains(Down)").hide();
        $("tr:nth-child(3)").find("a:contains(Up)").hide();
    }

    function addCountry() {
        let country = $("#newCountryText").val();
        let capital = $("#newCapitalText").val();

        if (country === "" || capital === "") {
            return;
        }

        initCountry(country, capital);
    }

    function initCountry(country, capital) {
        $("<tr>")
            .append($(`<td>${country}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($("<td>")
                .append($(`<a href="#">[Up]</a>`).on("click", moveUp))
                .append($(`<a href="#">[Down]</a>`).on("click", moveDown))
                .append($(`<a href="#">[Delete]</a>`).on("click", deleteCountry)))
            .appendTo($("#countriesTable"));
    }

    function moveUp() {
        let current = $(this).parent().parent();
        current.insertBefore(current.prev());
        hideLinks();
    }

    function moveDown() {
        let current = $(this).parent().parent();
        current.insertAfter(current.next());
        hideLinks();
    }

    function deleteCountry() {
        $(this).parent().parent().remove();
        hideLinks();
    }
}