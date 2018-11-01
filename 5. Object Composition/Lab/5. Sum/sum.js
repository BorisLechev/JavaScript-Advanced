function solve() {
    let firstNumber;
    let secondNumber;
    let result;

    function init(firstSelector, secondSelector, resultSelector) {
        firstNumber = $(firstSelector);
        secondNumber = $(secondSelector);
        result = $(resultSelector);
    }

    function add() {
        let sum = Number(firstNumber.val()) + Number(secondNumber.val());
        result.val(sum);
    }

    function subtract() {
        let subtract = Number(firstNumber.val()) - Number(secondNumber.val());
        result.val(subtract);
    }

    return {init, add, subtract};
}

let object = solve();

function sum() {
    object.init($("#num1"), $("#num2"), $("#result"));
    object.add();
}

function subtract() {
    object.init($("#num1"), $("#num2"), $("#result"));
    object.subtract();
}