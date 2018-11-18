class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelf = [];
        this.shelfCapacity = shelfCapacity;
    }

    get room() {
        return this._room;
    }

    set room(roomParam) {
        if (roomParam !== "livingRoom" && roomParam !== "bedRoom" && roomParam !== "closet") {
            throw new Error(`Cannot have book shelf in ${roomParam}`);
        }

        this._room = roomParam;
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelf.length === this.shelfCapacity) {
            this.shelf.shift();
        }
            this.shelf.push({bookName, bookAuthor, genre});

            this.shelf.sort((a, b) => a.bookAuthor > b.bookAuthor);

            return this;

    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(b => b.bookName !== bookName);
    }

    showBooks(genre) {
        return `Results for search "${genre}":\n` +
            `${this.shelf.filter(b => b.genre === genre).map(b => `\uD83D\uDCD6 ${b.bookAuthor} – "${b.bookName}"`).join("\n")}`;
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    toString() {
        if (this.shelf.length === 0) {
            return `It's an empty shelf`;
        }

        return `"${this.shelfGenre}" shelf in ${this.room} contains:\n` +
            `${this.shelf.map(b => `\uD83D\uDCD6 "${b.bookName}" – ${b.bookAuthor}`).join("\n")}`;
    }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());