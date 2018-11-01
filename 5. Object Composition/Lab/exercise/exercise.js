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
        let sum = +firstNumber + +secondNumber;

        result.val(sum);
    }
    
    function subtract() {
        let subtract=+firstNumber- +secondNumber;

        result.val(subtract);
    }

    return{
        init,
        add,
        subtract
    };
}