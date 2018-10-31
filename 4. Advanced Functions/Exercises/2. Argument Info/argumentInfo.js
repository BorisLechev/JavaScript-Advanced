function argumentsInfo() {
    let map = new Map();

    for (let argument of arguments) {
        if (!map.has(typeof argument)) {
            map.set(typeof argument, 0);
        }

        let oldValue = map.get(typeof argument);
        map.set(typeof argument, oldValue + 1);

        console.log(`${typeof argument}: ${argument}`);
    }

    [...map]
        .sort((a, b) => b[1] - a[1])
        .forEach(el => console.log(`${el[0]} = ${el[1]}`));
}

argumentsInfo('cat', 42, function () {
    console.log('Hello world!');
});