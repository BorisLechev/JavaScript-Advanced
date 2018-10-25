function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $("<textarea>");
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $("<button>Add</button>");
    let list = $("<ul>");

    //textarea formation
    textArea.val(0);
    textArea.addClass("counter");
    textArea.attr("disabled", "true");

    //buttons formation
    incrementBtn.addClass("btn");
    incrementBtn.attr("id", "incrementBtn");

    addBtn.addClass("btn");
    addBtn.attr("id", "addBtn");

    //list formation
    list.addClass("results");

    //events
    $(incrementBtn).on("click", increment);
    $(addBtn).on("click", add);

    //add element to the DOM
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);

    function increment() {
        let oldValue = textArea.val();
        textArea.val(Number(oldValue) + 1);
    }

    function add() {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    }
}

window.onload = function () {
    increment("#wrapper");
};