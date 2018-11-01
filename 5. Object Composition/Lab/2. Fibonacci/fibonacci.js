function getFibonator() {
    let firstNumber = 0;
    let secondNumber = 1;

    return () => {
        let sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;

        return firstNumber;
    };
}

let fibonacci = getFibonator();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13