function solve(input) {
    let result = {};

    let commandProcessor = (function () {
        function create(array) {
            let name = array[0];

            if (array.length > 2) {
                let inheritName = array[2];
                result[name] = Object.create(result[inheritName]); // inherits from result[inheritName]
            } else {
                result[name] = {};
            }
        }

        function set(array) {
            let objectName = array[0];
            let key = array[1];
            let value = array[2];

            result[objectName][key] = value;
        }

        function print(array) {
            let output = [];
            let objectName = array[0];

            for (let key in result[objectName]) {
                output.push(`${key}:${result[objectName][key]}`);
            }

            console.log(output.join(", "));
        }

        return {create, set, print};
    })();

    for (let inputElement of input) {
        let splittedInput=inputElement.split(" ");
        let command=splittedInput.shift();

        commandProcessor[command](splittedInput);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);