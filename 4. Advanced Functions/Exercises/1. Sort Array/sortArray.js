function sortArray(array, argument) {
    const ascendingOrder = (a, b) => {
        return a - b;
    };

    const descendingOrder = (a, b) => {
        return b - a;
    };

    const sortingArray = {
        "asc": ascendingOrder,
        "desc": descendingOrder
    };

    return array.sort(sortingArray[argument]);
}

sortArray([14, 7, 17, 6, 8], 'asc');