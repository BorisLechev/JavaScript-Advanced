(() => {
    String.prototype.ensureStart = function (string) {
        if (!this.startsWith(string)) {
            return string + this;
        }

        return this.valueOf();
    };

    String.prototype.ensureEnd = function (string) {
        if (!this.endsWith(string)) {
            return this + string;
        }

        return this.valueOf();
    };

    String.prototype.isEmpty = function () {
        return this.length === 0; // true vs false
    };

    String.prototype.truncate = function (number) {
        if (this.length > number) {
            if (number < 4) {
                return ".".repeat(number);
            }

            if (this.valueOf().includes(" ")) {
                let splittedString = this.slice(0, number).split(" ").filter(x => x !== "");

                splittedString.pop();          //???

                if (splittedString.length > 1) {
                    splittedString = splittedString.join(" ");
                }

                return splittedString + "...";
            } else {
                let string = this.slice(0, this.length - 3);

                return string + "...";
            }
        }

        return this.valueOf();
    };

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }

        return string;
    };
})();

let str = 'my string';
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox', 'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}', 'dog'));