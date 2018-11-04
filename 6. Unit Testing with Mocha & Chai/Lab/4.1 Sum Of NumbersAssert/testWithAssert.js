const assert = require("chai").assert;
const sum = require("./sumOfNumbers").sum;

describe("sum", () => {
    it('should return 3 for [1, 2]', function () {
        const input = [1, 2];

        const result = sum(input);

        assert.equal(result, 3);
    });

    it('should return negative for negative input', function () {
        const input = [1, -2];

        const result = sum(input);

        assert.equal(result, -1);
    });

    it('should return 0 for empty array', function () {
        const input = [];

        const result = sum(input);

        assert.equal(result, 0);
    });

    it('should throw if not array', function () {
        const input = null;

        assert.throws(function () {
            sum(input);
        });
    });

    it('should return NaN if array contains string', function () {
        const input = [1, "pesho"];

        const result = sum(input);

        assert.isNaN(result);
    });

    it('should return 1 if [1]', function () {
        const input = [1];

        const result = sum(input);

        assert.equal(result, 1);
    });
});