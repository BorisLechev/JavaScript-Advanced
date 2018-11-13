const assert = require("chai").assert;
const isOddOrEven = require("./evenOrOdd").isOddOrEven;

describe("is odd or even", () => {
    it('should return undefined if the input is a number', function () {
        const input = 65;

        const result = isOddOrEven(input);

        assert.equal(result, undefined);
    });

    it('should return undefined if the input is array', function () {
        const input = ["haha"];

        const result = isOddOrEven(input);

        assert.equal(result, undefined);
    });

    it('should return even if the input is empty string', function () {
        const input = "";

        const result = isOddOrEven(input);

        assert.equal(result, "even");
    });

    it('should return odd if the input has odd length', function () {
        const input = "ani";

        const result = isOddOrEven(input);

        assert.equal(result, "odd");
    });
});