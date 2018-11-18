function addSticker() {
    let titleInput = $(".title").val();
    let textInput = $(".content").val();

    if (titleInput !== "" && textInput !== "") {
        $("#sticker-list")
            .append($("<li>")
                .addClass("note-content"));

        $(".note-content")
            .append($("<a>")
                .addClass("button")
                .text("x"));

        $(".button").on("click", () => {
            $(".note-content").remove();
        });

        $(".note-content")
            .append($("<h2>")
                .text(titleInput))
            .append($("<hr>"))
            .append($("<p>")
                .text(textInput));

        titleInput = $(".title").val("");
        textInput = $(".content").val("");
    }
}