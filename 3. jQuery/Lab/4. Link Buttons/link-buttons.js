function attachEvents() {
    $("a.button").on("click", (ev) => {
        $(".selected").removeClass("selected");
        $(ev.target).addClass("selected");
    });
}