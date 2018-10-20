function calc() {
    let firstNumber = +document.getElementById("num1").value;
    let secondNumber = +document.getElementById("num2").value;
    let sum = firstNumber + secondNumber;

    document.getElementById("sum").value = sum;
}