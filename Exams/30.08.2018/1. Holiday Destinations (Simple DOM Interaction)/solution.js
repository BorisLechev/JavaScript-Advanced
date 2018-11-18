function addDestination() {
    let city = $("#input").find("input").eq(0);
    let country = $("#input").find("input").eq(1);
    let cityVal = city.val();
    let countryVal = country.val();
    let season = $("#seasons");
    let seasonVal = season.val().charAt(0).toUpperCase() + season.val().slice(1).toLowerCase();

    if (cityVal !== "" && countryVal !== "") {
        $("#destinationsList")
            .append($("<tr>")
                .append($("<td>")
                    .text(`${cityVal}, ${countryVal}`))
                .append($("<td>")
                    .text(seasonVal)));

        let autumn = $("#autumn").val();
        let summer = $("#summer").val();
        let spring = $("#spring").val();
        let winter = $("#winter").val();

        if (seasonVal === "Autumn") {
            $("#autumn").val(++autumn);
        } else if (seasonVal === "Summer") {
            $("#summer").val(++summer);
        } else if (seasonVal === "Spring") {
            $("#spring").val(++spring);
        } else if (seasonVal === "Winter") {
            $("#winter").val(++winter);
        }

        cityVal = city.val("");
        countryVal = country.val("");
        seasonVal = season.val("");
    }
}