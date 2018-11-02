function solve() {
    let list = [];

    function ascendingSort() {
        return list.sort((a, b) => a - b);
    }

    function add(element) {
        this.size++;
        return ascendingSort(list.push(element));
    }

    function remove(index) {
        if (list[index] !== undefined) {
            this.size--;
            return ascendingSort(list.splice(index, 1));
        }
    }

    function get(index) {
        if (list[index] !== undefined) {
            return list[index];
        }
    }

    function show() {
        return console.log(list);
    }

    return {
        add,
        remove,
        get,
        show,
        size: 0
    };
}

let sortedList = solve();
sortedList.add(5);
sortedList.add(12);
sortedList.add(69);
sortedList.remove(1);
console.log(sortedList.get(0));
console.log(sortedList.size);