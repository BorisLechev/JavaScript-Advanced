let createBook;

// from line 4 to line 42
createBook = (function bookGenerator() {
    let id = 1;

    return function (selector, titleName, authorName, isbn) {
        let container = $(selector);
        let newBook = $("<div>");
        let bookTitle = $(`<p>${titleName}</p>`);
        let bookAuthor = $(`<p>${authorName}</p>`);
        let bookIsbn = $(`<p>${isbn}</p>`);
        let selectBtn = $("<button>Select</button>");
        let deselectBtn = $("<button>Deselect</button>");

        newBook.attr("id",`book${id}`);
        newBook.css("border", "");

        bookTitle.addClass("title");
        bookAuthor.addClass("author");
        bookIsbn.addClass("isbn");

        selectBtn.on("click", select);
        deselectBtn.on("click", deselect);

        bookTitle.appendTo(newBook);
        bookAuthor.appendTo(newBook);
        bookIsbn.appendTo(newBook);
        selectBtn.appendTo(newBook);
        deselectBtn.appendTo(newBook);
        container.append(newBook);
        id++;

        function select() {
            newBook.css("border", "2px solid blue");
        }

        function deselect() {
            newBook.css("border","");
        }
    }
}());

window.onload = function () {
    createBook("#wrapper", "Alice in Wonderland", "Lewis Carroll", 1111);
};