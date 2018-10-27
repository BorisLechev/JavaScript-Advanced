const input = ['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'];

const operations = {
    current: "",
    append: function (str) {
        this.current += str;

        return this;
    },
    removeStart: function (count) {
        this.current = this.current.slice(count);

        return this;
    },
    removeEnd: function (count) {
        this.current = this.current.slice(0, this.current.length - count);

        return this;
    },
    print: function () {
        console.log(this.current);

        return this;
    },
    execute: function (input) {
        input.forEach((el) => {
            const parts = el.split(" ");

            this[parts[0]].call(this, parts[1]);
        })
    }
};

operations.execute(input);