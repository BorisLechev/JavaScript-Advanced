let isOddOrEven = require("./evenOrOdd").isOddOrEven;
let expect = require("chai").expect;

describe("isEvenOrOdd Tests", function () {
    it('should return undefined for 54', function () {
        expect(isOddOrEven(54)).to.be.equal(undefined);
    });

    it('should return even for laptop', function () {
        expect(isOddOrEven("laptop")).to.be.equal("even");
    });

    it('should return odd for apple', function () {
        expect(isOddOrEven("apple")).to.be.equal("odd");
    });
});