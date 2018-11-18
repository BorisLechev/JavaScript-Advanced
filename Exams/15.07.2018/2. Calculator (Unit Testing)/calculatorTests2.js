const assert = require("chai").assert;
const expect = require("chai").expect;
const Calculator = require("./calculator");

describe("Calculator tests", () => {
    let calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    describe("Constructor tests", () => {
        it('should return empty array', function () {
            assert.equal(calculator.expenses, [].toString());
        });
    });

    describe("Function divideNums() tests", () => {
        it('should return correct result', function () {
            calculator.add(10);
            calculator.add("haho");
            calculator.add(10);

            assert.equal(calculator.divideNums(), 1);
        });

        it('should throw an Error', function () {
            calculator.add("strinka Pepi");
            calculator.add("chichovoto danku");

            expect(() => calculator.divideNums()).to.throw(Error);
        });

        it('should return that we cannot divide by zero', function () {
            calculator.add(6);
            calculator.add(0);

            assert.equal(calculator.divideNums(), 'Cannot divide by zero');
        });
    });

    describe("Function toString() tests", () => {
        it('should return sequence splitted by -> ', function () {
            calculator.add(6);
            calculator.add("strinka Pepi");

            assert.equal(calculator.toString(), "6 -> strinka Pepi");
        });

        it('should return empty array', function () {
            assert.equal(calculator, "empty array");
        });
    });

    describe("Function orderBy() tests", () => {
        it('should return sequence sorted ascending', function () {
            calculator.add(5);
            calculator.add(3.34);
            calculator.add(-1);

            assert.equal(calculator.orderBy(), "-1, 3.34, 5");
        });
    });
});