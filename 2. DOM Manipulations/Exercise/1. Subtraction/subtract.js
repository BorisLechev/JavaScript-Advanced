window.onload = function () {
    subtract();
};

function subtract() {
    let firstNumber = +document.getElementById("firstNumber").value;
    let secondNumber = +document.getElementById("secondNumber").value;
    let subtraction = firstNumber - secondNumber;

    document.getElementById("result").textContent = subtraction;
}