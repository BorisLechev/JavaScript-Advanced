function solve() {
    let output = {
        extend: function (obj) {
            for (let property in obj) {
                if (typeof obj[property] === "function") {
                    Object.getPrototypeOf(this)[property] = obj[property];
                } else {
                    this[property] = obj[property];
                }
            }
        }
    };

    return output;
}

let object = solve();
object.extend({
    extensionMethod: function () {
        return "hi";
    },
    extensionProperty: "someString"
});

console.log(object);