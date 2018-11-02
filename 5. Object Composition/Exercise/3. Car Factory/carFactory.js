function solve(input) {
    let database = {
        smallEngine: {power: 90, volume: 1800},
        normalEngine: {power: 120, volume: 2400},
        monsterEngine: {power: 200, volume: 3500},
        hatchback: {type: "hatchback", color: input.color},
        coupe: {type: "coupe", color: input.color}
    };

    let output = {
        model: input.model,
        engine: {},
        carriage: {},
        wheels: []
    };

    if (input.power <= 90) {
        output.engine = database.smallEngine;
    } else if (input.power <= 120) {
        output.engine = database.normalEngine;
    } else {
        output.engine = database.monsterEngine;
    }

    output.carriage = database[input.carriage];

    if (input.wheelsize % 2 === 0) {
        let oddWheelSize = input.wheelsize - 1;

        output.wheels = [oddWheelSize, oddWheelSize, oddWheelSize, oddWheelSize];
    } else {
        output.wheels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];
    }

    return output;
}

console.log(solve({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));