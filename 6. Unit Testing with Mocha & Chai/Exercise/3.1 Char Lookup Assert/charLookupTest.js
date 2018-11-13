const assert = require("chai").assert;
const lookupChar = require("./exercise").lookupChar;

describe("lookup tests", () => {
    describe("test the type of input", () => {
        it('should return undefined if the input is a number', function () {
            const result = lookupChar(5, 76);

            assert.equal(result, undefined);
        });

        it('should return undefined if the input is an array', function () {
            const result = lookupChar(["mimi", "Lorem"], 76);

            assert.equal(result, undefined);
        });

        it('should return undefined if the index is decimal', function () {
            const result = lookupChar("pepi", 1.2);

            assert.equal(result, undefined);
        });

        it('should return undefined if the index is string', function () {
            const result = lookupChar("pepi", "pesho");

            assert.equal(result, undefined);
        });

        it('should return undefined if the index is an array', function () {
            const result = lookupChar("Ipsum", [3, 4]);

            assert.equal(result, undefined);
        });

        it('should return symbol if the elements are correct', function () {
            const result = lookupChar("Lorem", 1);

            assert.equal(result, "o");
        });
    });

    describe("test the index", () => {
        it('should return Incorrect index if the index is equal to the length of the string', function () {
            const result = lookupChar("TV", 2);

            assert.equal(result, "Incorrect index");
        });

        it('should return Incorrect index if the index is bigger than the length of the string', function () {
            const result = lookupChar("TV", 3);

            assert.equal(result, "Incorrect index");
        });

        it('should return Incorrect index if the index is lower than 0', function () {
            const result = lookupChar("TV", -1);

            assert.equal(result, "Incorrect index");
        });

        it('should return letter', function () {
            const result = lookupChar("hello", 2);

            assert.equal(result, "l");
        });
    });
});