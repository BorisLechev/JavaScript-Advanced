function solve(commands) {
    let listProcessor = (() => {
        let collection = [];

        function add(item) {
            collection.push(item);
        }

        function remove(item) {
            collection = collection.filter(x => x !== item);
        }

        function print() {
            console.log(collection.join());
        }

        return {
            add,
            remove,
            print
        };
    })();

    commands.forEach((command) => {
        const splittedCommand = command.split(" ");

        listProcessor[splittedCommand[0]](splittedCommand[1]);
    });
}

solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print']);