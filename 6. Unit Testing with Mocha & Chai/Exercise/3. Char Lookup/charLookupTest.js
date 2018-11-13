let lookupChar = require("./charLookup").lookupChar;
let expect = require("chai").expect;

describe("Should return the character at the specified index in the string.", function () {
    it('should return undefined if the first parameter is not a string', function () {
        expect(lookupChar(13, 6)).to.be.equal(undefined,
            "The function did not return the correct result!");
    });

    it('should return undefined if the second parameter is not an integer', function () {
        expect(lookupChar("pesho", "kiro")).to.be.equal(undefined,
            "The function did not return the correct result!");
    });

    it('should return undefined if the second parameter is not an integer', function () {
        expect(lookupChar("pesho", 7.65)).to.be.equal(undefined,
            "The function did not return the correct result!");
    });

    it('should return Incorrect index if the index is bigger than string length', function () {
        expect(lookupChar("pesho", 26)).to.be.equal("Incorrect index",
            "The function did not return the correct value!");
    });

    it('should return Incorrect index if the index is negative number', function () {
        expect(lookupChar("mimi", -69)).to.be.equal("Incorrect index",
            "The function did not return the correct value!");
    });

    it('should return Incorrect index if the index is equal to string length', function () {
        expect(lookupChar("mimi", 3)).to.be.equal("Incorrect index",
            "The function did not return the correct value!");
    });

    it('should return correct value', function () {
        expect(lookupChar("mimi", 0)).to.be.equal("m");
    });

    it('should return correct value', function () {
        expect(lookupChar("stamat", 4)).to.be.equal("a");
    });
});