const assert = require("chai").assert;
const rgbToHexColor = require("./rgbToHex").rgbToHexColor;

describe("rgbToHexColor tests", () => {
    it('should return undefined for red out of range [0, 255]', function () {
        const result = rgbToHexColor(-1, 54, 123);

        assert.equal(result, undefined);
    });

    it('should return undefined for green out of range [0, 255]', function () {
        const result = rgbToHexColor(1, 256, 123);

        assert.equal(result, undefined);
    });

    it('should return undefined for blue out of range [0, 255]', function () {
        const result = rgbToHexColor(10, 54, 256);

        assert.equal(result, undefined);
    });

    it('should return undefined for not integer red', function () {
        const result = rgbToHexColor(1.23, 54, 123);

        assert.equal(result, undefined);
    });

    it('should return undefined for not integer green', function () {
        const result = rgbToHexColor(254, 54.2, 123);

        assert.equal(result, undefined);
    });

    it('should return undefined for not integer blue', function () {
        const result = rgbToHexColor(252, 54, 123.01);

        assert.equal(result, undefined);
    });

    it("should return #000000 for (0, 0, 0)", function () {
        const result = rgbToHexColor(0, 0, 0);

        assert.equal(result, "#000000");
    });

    it("should return #FFFFFF for (255, 255, 255)", function () {
        const result = rgbToHexColor(255, 255, 255);

        assert.equal(result, "#FFFFFF");
    });

    it('should return undefined for empty input', function () {
        const result = rgbToHexColor();

        assert.equal(result, undefined);
    });

    it('should return undefined if the first element is array', function () {
        const result = rgbToHexColor([254], 54, 123);

        assert.equal(result, undefined);
    });

    it('should return undefined if the second element is array', function () {
        const result = rgbToHexColor(254, [54], 123);

        assert.equal(result, undefined);
    });

    it('should return undefined if the third element is array', function () {
        const result = rgbToHexColor(254, 54, [123]);

        assert.equal(result, undefined);
    });

    it('should return undefined if the the first element is string', function () {
        const result = rgbToHexColor("stamat", [54], 123);

        assert.equal(result, undefined);
    });

    it('should return undefined if the the second element is string', function () {
        const result = rgbToHexColor(255, "pesho", 0);

        assert.equal(result, undefined);
    });

    it('should return undefined if the the third element is string', function () {
        const result = rgbToHexColor(255, 0, "mimi");

        assert.equal(result, undefined);
    });
});