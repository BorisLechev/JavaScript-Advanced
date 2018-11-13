const assert = require("chai").assert;
const mathEnforcer = require("./mathEnforcer").mathEnforcer;

describe("mathEnforcer tests", () => {
    describe("addFive tests", () => {
        it('should return undefined if the input is empty string', function () {
            const input = "";

            const result = mathEnforcer.addFive(input);

            assert.equal(result, undefined);
        });

        it('should return undefined if the input is an array', function () {
            const input = [5];

            const result = mathEnforcer.addFive(input);

            assert.equal(result, undefined);
        });

        it('should return number + 5 if the input is a number', function () {
            const input = 5;

            const result = mathEnforcer.addFive(input);

            assert.equal(result, 10);
        });

        it('should return number closeTo 0.01', function () {
            const input = 6.426;

            const result = mathEnforcer.addFive(input);

            assert.closeTo(result, 11.43, 0.01);
        });

        it('should return negative number closeTo 0.01', function () {
            const input = -6.426;

            const result = mathEnforcer.addFive(input);

            assert.closeTo(result, -1.43, 0.01);
        });
    });

    describe("subtractTen tests", () => {
        it('should return undefined if the input is empty string', function () {
            const input = "";

            const result = mathEnforcer.subtractTen(input);

            assert.equal(result, undefined);
        });

        it('should return undefined if the input is an array', function () {
            const input = [5];

            const result = mathEnforcer.subtractTen(input);

            assert.equal(result, undefined);
        });

        it('should return number - 10 if the input is a number', function () {
            const input = 5;

            const result = mathEnforcer.subtractTen(input);

            assert.equal(result, -5);
        });

        it('should return number closeTo 0.01', function () {
            const input = 6.426;

            const result = mathEnforcer.subtractTen(input);

            assert.closeTo(result, -3.57, 0.01);
        });

        it('should return negative number closeTo 0.01', function () {
            const input = -6.426;

            const result = mathEnforcer.subtractTen(input);

            assert.closeTo(result, -16.43, 0.01);
        });
    });

    describe("sum two numbers tests", () => {
        it('should return undefined if the first element is empty string', function () {
            const result = mathEnforcer.sum("", 5);

            assert.equal(result, undefined);
        });

        it('should return undefined if the second element is empty string', function () {
            const result = mathEnforcer.sum(5, "");

            assert.equal(result, undefined);
        });

        it('should return undefined if the elements are string strings', function () {
            const result = mathEnforcer.sum("parkash", "Lorem");

            assert.equal(result, undefined);
        });

        it('should return undefined if the first element is an array', function () {
            const result = mathEnforcer.sum([5], 7);

            assert.equal(result, undefined);
        });

        it('should return undefined if the second element is an array', function () {
            const result = mathEnforcer.sum(5, [7]);

            assert.equal(result, undefined);
        });

        it('should return sum of the two numbers if the input are two numbers', function () {
            const result = mathEnforcer.sum(5.154, 7.729);

            assert.closeTo(result, 12.88, 0.01);
        });

        it('should return negative output if the input are two negative numbers', function () {
            const result = mathEnforcer.sum(-5.154, -7.729);

            assert.closeTo(result, -12.88, 0.01);
        });
    });
});