function aggregate(array) {
    console.log(`Sum = ${array.reduce((acc, cur) => acc + cur)}`);
    console.log(`Min = ${Math.min(...array)}`);
    console.log(`Max = ${Math.max(...array)}`);
    console.log(`Product = ${array.reduce((acc, cur) => acc * cur)}`);
    console.log(`Join = ${array.join("")}`);
}

aggregate([5, -3, 20, 7, 0.5]);