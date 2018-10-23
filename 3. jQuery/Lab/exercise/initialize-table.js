function attachEvents() {
    $("#items li").on("click", (ev) => {
        if ($(ev.target).attr("data-selected")) {
            $(ev.target).removeAttr("data-selected");
            $(ev.target).css("background", "");
        } else {
            $(ev.target).attr("data-selected", true);
            $(ev.target).css("background", "#DDD");
        }
    });

    $("#showTownsButton").on("click", () => {
        const values = $("#items li[data-selected=true]")
            .toArray()
            .map(li => $(li).text())
            .join(", ");

        $("#selectedTowns").text(`Selected towns: ${values}`);
    });
}