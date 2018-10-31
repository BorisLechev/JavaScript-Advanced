let add = (function () {
    let sum = 0;

    return function addAgain(number) {
        sum += number;
        addAgain.toString = () => sum;
        return addAgain;
    }
})();

console.log(+(add(1)));