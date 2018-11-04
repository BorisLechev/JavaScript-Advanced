const sum = require("./sumOfNumbers").sum;
const expect = require("chai").expect;


describe("Sum function tests", function () {
    it('Should return 6 for [1,2,3]', function () {
        // Arrange
        let array = [1, 2, 3];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(6);
    });

    it('Should return 0 for []', function () {
        expect(sum([])).to.be.equal(0);
    });

    it('Should return NAN', function () {
        expect(sum(["NAN", 2, 3])).to.be.NaN;
    });

    it('Should return NAN', function () {
        expect(sum("Invalid data")).to.be.NaN;
    });

    it('Should work with negative numbers and return 2 for [-2,-1,5]', function () {
        expect(sum([-2, -1, 5])).to.be.equal(2);
    });
});