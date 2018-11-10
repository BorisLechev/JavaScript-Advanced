class SortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    ascendingSort() {
        this.list.sort((a, b) => a - b);
    }

    add(element) {
        this.size++;
        return this.ascendingSort(this.list.push(element));
    }

    remove(index) {
        if (this.list[index] !== undefined) {
            this.size--;
            return this.ascendingSort(this.list.splice(index, 1));
        }
    }

    get(index) {
        if (this.list[index] !== undefined) {
            return this.list[index];
        }
    }

    show() {
        return console.log(this.list);
    }
}


// return {add, remove, get, show, size: 0};