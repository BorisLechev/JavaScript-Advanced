const assert = require("chai").assert;
const expect = require("chai").expect;
const Calculator = require("./calculator");

describe("Calculator tests", () => {
    let calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    describe("Constructor test", () => {
        it('should return true if expenses is initialized to an empty array', function () {
            assert.isArray(calculator.expenses, []);
        });
    });

    describe("Function add() tests", () => {
        it('should return message empty array', function () {
            assert.equal(calculator, "empty array");
        });
    });

    describe("Function divideNums() tests", () => {
        it('should return number close to 0.01', function () {
            calculator.add(6.667);
            calculator.add(-3);

            assert.closeTo(-2.2223333333333333, -2.22, 0.01);
        });

        it('should return number', function () {
            calculator.add(4);
            calculator.add(2);

            assert.equal(calculator.divideNums(), 2);
        });

        it('should throw an Error message', function () {
            calculator.add("Peshoslav");
            calculator.add("Ignat");

            expect(() => calculator.divideNums()).to.throw(Error);
        });

        it('should return a message cannot divide by zero', function () {
            calculator.add(6);
            calculator.add(0);

            assert.equal(calculator.divideNums(), "Cannot divide by zero");
        });
    });

    describe("Function toString()", () => {
        it('should return sequence divided by -> ', function () {
            calculator.add("5");
            calculator.add("Ivo");
            calculator.add(-5.765);

            assert.equal(calculator.toString(), "5 -> Ivo -> -5.765");
        });
    });

    describe("Function orderBy() tests", () => {
        it('should return sequence of numbers sorted ascending', function () {
            calculator.add(5.21);
            calculator.add(5.2);
            calculator.add(-1);

            assert.equal(calculator.orderBy(), "-1, 5.2, 5.21");
        });
    });
});