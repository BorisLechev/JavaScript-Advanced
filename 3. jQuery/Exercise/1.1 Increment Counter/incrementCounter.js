function increment(selector) {
    let container = $(selector);

    container
        .append($("<textarea>").addClass("counter").val("0").attr("disabled", "disabled"))
        .append($("<button>").addClass("btn").attr("id", "incrementBtn").text("Increment").on("click", () => {
            $(".counter").val(+$(".counter").val() + 1);
        }))
        .append($("<button>").addClass("btn").attr("id", "addBtn").text("Add").on("click", () => {
            $(".results").append($("<li>").text($(".counter").val()));
        }))
        .append($("<ul>").addClass("results"));
}

window.onload = function () {
    increment("#wrapper");
};