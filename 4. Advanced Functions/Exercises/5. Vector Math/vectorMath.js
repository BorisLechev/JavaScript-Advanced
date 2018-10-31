let solution = (function () {
    function add(firstVector, secondVector) {
        let [x1, y1] = firstVector;
        let [x2, y2] = secondVector;

        return [x1 + x2, y1 + y2];
    }

    function multiply(firstVector, scalar) {
        let [x1, y1] = firstVector;

        return [x1 * scalar, y1 * scalar];
    }

    function length(vector) {
        let [x1, y1] = vector;

        return Math.sqrt(x1 ** 2 + y1 ** 2);
    }

    function dot(firstVector, secondVector) {
        let [x1, y1] = firstVector;
        let [x2, y2] = secondVector;

        return x1 * x2 + y1 * y2;
    }

    function cross(firstVector, secondVector) {
        let [x1, y1] = firstVector;
        let [x2, y2] = secondVector;

        return x1 * y2 - y1 * x2;
    }

    return {add, multiply, length, dot, cross};
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));