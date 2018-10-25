function domSearch(selector, isCaseSensitive) {
    $(selector)
        .append($("<div>")
            .addClass("add-controls")
            .append($("<label>")
                .text("Enter text: ")
                .append($("<input>")))
            .append($("<a>")
                .addClass("button")
                .text("Add")
                .on("click", () => {
                    let inputText = $(".add-controls label input").val();

                    $(".items-list")
                        .append($("<li>")
                            .addClass("list-item")
                            .append($("<a>")
                                .addClass("button")
                                .text("X")
                                .on("click", (ev) => {   // remove button
                                    $(ev.target).parent().remove();
                                }))
                            .append($("<strong>").text(inputText)));
                    $(".add-controls label input").val("");
                })));

    $(selector)
        .append($("<div>")
            .addClass("search-controls")
            .append($("<label>")
                .text("Search:")
                .append($("<input>")
                    .on("input", (ev) => {
                        let inputText = $(ev.target).val();
                        let allElements = $("ul li");

                        allElements.css("display", "block");

                        if (isCaseSensitive) {
                            [...allElements].forEach(li => {
                                if (!$(li).text().includes(inputText)) {
                                    $(li).css("display", "none");
                                } else {
                                    $(li).css("display", "block");
                                }
                            });
                        } else {
                            [...allElements].forEach(li => {
                                if (!$(li).text().toLowerCase().includes(inputText.toLowerCase())) {
                                    $(li).css("display", "none");
                                } else {
                                    $(li).css("display", "block");
                                }
                            });
                        }
                    }))));

    $(selector)
        .append($("<div>")
            .addClass("result-controls")
            .append($("<ul>")
                .addClass("items-list")));
}