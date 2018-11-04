function subsum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    startIndex = startIndex < 0 ? 0 : startIndex;
    endIndex = endIndex >= array.length ? array.length - 1 : endIndex;

    let sum = 0;

    for (let i = startIndex; i <= endIndex; i++) {
        sum += Number(array[i]);
    }

    return sum;
}

console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));