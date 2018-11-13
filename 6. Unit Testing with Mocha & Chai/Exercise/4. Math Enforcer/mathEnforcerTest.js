let mathEnforcer = require("./mathEnforcer").mathEnforcer;
let expect = require("chai").expect;

describe("addFive", function () {
    it('should return undefined if the parameter is not a number', function () {
        expect(mathEnforcer.addFive("parkash")).to.be.equal(undefined);
    });

    it('should return 17.56 if the number is equal to 12.562', function () {
        expect(mathEnforcer.addFive(12.562)).to.be.closeTo(17.56, 0.01);
    });

    it('should return -12.56 if the number is equal to -17.562', function () {
        expect(mathEnforcer.addFive(-17.562)).to.be.closeTo(-12.56, 0.01);
    });

    it('should return 10 if the number is equal to 5', function () {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
    });
});

describe("subtractTen", function () {
    it('should return undefined if the parameter is not a number', function () {
        expect(mathEnforcer.subtractTen("parkash")).to.be.equal(undefined);
    });

    it('should return 17.56 if the number is equal to 27.562', function () {
        expect(mathEnforcer.subtractTen(27.562)).to.be.closeTo(17.56, 0.01);
    });

    it('should return -12.56 if the number is equal to -2.562', function () {
        expect(mathEnforcer.subtractTen(-2.562)).to.be.closeTo(-12.56, 0.01);
    });

    it('should return 12 if the number is equal to 22', function () {
        expect(mathEnforcer.subtractTen(22)).to.be.equal(12);
    });
});

describe("sum two numbers", function () {
    it('should return undefined if the first parameter is not a number', function () {
        expect(mathEnforcer.sum("parkash", 56)).to.be.equal(undefined);
    });

    it('should return undefined if the second parameter is not a number', function () {
        expect(mathEnforcer.sum(12, "parkash")).to.be.equal(undefined);
    });

    it('should return undefined if both are not numbers', function () {
        expect(mathEnforcer.sum("gosho", "parkash")).to.be.equal(undefined);
    });

    it('should return 17.56 if the numbers are equal to 8.281 & 9.281', function () {
        expect(mathEnforcer.sum(8.281, 9.281)).to.be.closeTo(17.56, 0.01);
    });

    it('should return 0.56 if the number is equal to -2.562 & 2', function () {
        expect(mathEnforcer.sum(-2.562, 2)).to.be.closeTo(0.56, 0.01);
    });

    it('should return 12 if the number is equal to 22', function () {
        expect(mathEnforcer.sum(12, 22)).to.be.equal(34);
    });
});