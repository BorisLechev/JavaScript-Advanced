const assert = require("chai").assert;
const isSymmetric = require("./checkForSymmetry").isSymmetric;

describe("isSymmetric tests", () => {
    it('should return true for array with one element', function () {
        const input = [1];

        const result = isSymmetric(input);

        assert.equal(result, true);
    });

    it('should return false for [1, 2]', function () {
        const input = [1, 2];

        const result = isSymmetric(input);

        assert.equal(result, false);
    });

    it('should return false for [-1, 2, 3]', function () {
        const input = [-1, 2, 3];

        const result = isSymmetric(input);

        assert.equal(result, false);
    });

    it('should return true for [-1, 2, -1]', function () {
        const input = [-1, 2, -1];

        const result = isSymmetric(input);

        assert.equal(result, true);
    });

    it('should return false if not array', function () {
        const input = 1;

        const result = isSymmetric(input);

        assert.equal(result, false);
    });

    it('should return true for [1, "string", {S:"T"}, 1, {S:"T"}, "string", 1]', function () {
        const input = [1, "string", {S: "T"}, 1, {S: "T"}, "string", 1];

        const result = isSymmetric(input);

        assert.equal(result, true);
    });

    it('should return false for [1, "string", {S:"T"}, 1, {S:"T"}, "kiro", 1]', function () {
        const input = [1, "string", {S: "T"}, 1, {S: "T"}, "kiro", 1];

        const result = isSymmetric(input);

        assert.equal(result, false);
    });
});