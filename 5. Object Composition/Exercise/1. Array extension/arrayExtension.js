(() => {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (number) {
        return this.slice(number, this.length);
    };

    Array.prototype.take = function (number) {
        return this.slice(0, number);
    };

    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };

    Array.prototype.average = function () {
        return this.reduce((a, b) => a + b) / this.length;
    };
})();

let test = [1, 2, 3, 4, 5, 6, 7];
console.log(test.take(3));
console.log(test.skip(3));
console.log(test.sum());
console.log(test.last(3));