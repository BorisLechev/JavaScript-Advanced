const assert = require("chai").assert;
const createCalculator = require("./addSubtract").createCalculator;

describe("create calculator", () => {
    let calculator;

    beforeEach(() => {
        calculator = createCalculator();
    });

    it('should return object with all properties', function () {
        const properties = ["get", "add", "subtract"];

        assert.isObject(calculator);

        assert.containsAllKeys(calculator, properties);

        Object.keys(calculator).forEach((key) => {
            assert.isFunction(calculator[key]);
        })
    });

    describe("get", () => {
        it('should return default value', function () {
            const result = calculator.get();

            assert.equal(result, 0);
        });
    });

    describe("complicated cases", () => {
        it('should return and double add', function () {
            calculator.add(2);
            calculator.add(3);

            const result = calculator.get();

            assert.equal(result, 5);
        });

        it('should return and double subtract', function () {
            calculator.subtract(2);
            calculator.subtract(3);

            const result = calculator.get();

            assert.equal(result, -5);
        });

        it('should create add subtract', function () {
            calculator.add(5.3);
            calculator.subtract(1.1);

            const result = calculator.get();

            assert.closeTo(result, 4.2, 0.1);
        });

        it('should create add subtract add subtract', function () {
            calculator.add(10);
            calculator.subtract(7);
            calculator.add(-2);
            calculator.subtract(-1);

            const result = calculator.get();

            assert.equal(result, 2);
        });

        it('should create add string', function () {
            calculator.add("hello");

            const result = calculator.get();

            assert.isNaN(result, isNaN);
        });

        it('should create subtract string', function () {
            calculator.subtract("hello");

            const result = calculator.get();

            assert.isNaN(result, isNaN);
        });

        it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", function () {
            calculator.add(10);
            calculator.subtract('7');
            calculator.add('-2');
            calculator.subtract(-1);

            const result = calculator.get();

            assert.equal(result, 2);
        });
    });
});