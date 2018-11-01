function solve(input) {
    let cars = [];

    let processor = (() => {
        function create(name, parent) {
            if (parent) {
                cars[name] = Object.create(cars[parent]);
            } else {
                cars[name] = {};
            }
        }

        function set(name, value, property) {
            cars[name][property] = value;
        }

        function print(name) {
            let output = [];

            for (let model in cars[name]) {
                output.push(`${model}:${cars[name][model]}`);
            }

            console.log(output.join(', '));
        }

        return {
            create,
            set,
            print
        };
    })();

    input.forEach((line) => {
        [command, name, property, parent] = line.split(' ');
        processor[command](name, parent, property)
    });
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);