let solve = (() => {
    let object = {};

    object["carbohydrate"] = 0;
    object["protein"] = 0;
    object["fat"] = 0;
    object["flavour"] = 0;

    function restock(microelement, quantity) {
        object[microelement] += quantity;
        return "Success";
    }

    function prepare(recipe, quantity) {
        switch (recipe) {
            case"apple":
                if (object["carbohydrate"] >= 1 * quantity) {
                    if (object["flavour"] >= 2 * quantity) {
                        object["carbohydrate"] -= 1 * quantity;
                        object["flavour"] -= 2 * quantity;
                        return "Success";
                    } else {
                        return `Error: not enough flavour in stock`;
                    }
                } else {
                    return `Error: not enough carbohydrate in stock`;
                }
            case"coke":
                if (object["carbohydrate"] >= 10 * quantity) {
                    if (object["flavour"] >= 20 * quantity) {
                        object["carbohydrate"] -= 10 * quantity;
                        object["flavour"] -= 20 * quantity;
                        return "Success";
                    } else {
                        return "Error: not enough flavour in stock";
                    }
                } else {
                    return "Error: not enough carbohydrate in stock";
                }
            case "burger":
                if (object["carbohydrate"] >= 5 * quantity) {
                    if (object["flavour"] >= 3 * quantity) {
                        if (object["fat"] >= 7 * quantity) {
                            object["carbohydrate"] -= 5 * quantity;
                            object["fat"] -= 7 * quantity;
                            object["flavour"] -= 3 * quantity;
                            return "Success";
                        } else {
                            return "Error: not enough fat in stock";
                        }
                    } else {
                        return "Error: not enough flavour in stock";
                    }
                } else {
                    return "Error: not enough carbohydrate in stock";
                }
            case"omelet":
                if (object["protein"] >= 5 * quantity) {
                    if (object["flavour"] >= 1 * quantity) {
                        if (object["fat"] >= 1 * quantity) {
                            object["protein"] -= 5 * quantity;
                            object["fat"] -= 1 * quantity;
                            object["flavour"] -= 1 * quantity;
                            return "Success";
                        } else {
                            return "Error: not enough fat in stock";
                        }
                    } else {
                        return "Error: not enough flavour in stock";
                    }
                } else {
                    return "Error: not enough protein in stock";
                }
            case"cheverme":
                if (object["protein"] >= 10 * quantity) {
                    if (object["carbohydrate"] >= 10 * quantity) {
                        if (object["fat"] >= 10 * quantity) {
                            if (object["flavour"] >= 10 * quantity) {
                                object["carbohydrate"] -= 10 * quantity;
                                object["fat"] -= 10 * quantity;
                                object["flavour"] -= 10 * quantity;
                                object["protein"] -= 10 * quantity;
                                return "Success";
                            } else {
                                return "Error: not enough flavour in stock";
                            }
                        } else {
                            return "Error: not enough fat in stock";
                        }
                    } else {
                        return "Error: not enough carbohydrate in stock";
                    }
                } else {
                    return "Error: not enough protein in stock";
                }
        }
    }

    function report() {
        return `protein=${object["protein"]} carbohydrate=${object["carbohydrate"]} fat=${object["fat"]} flavour=${object["flavour"]}`
    }

    return (input) => {
        let [command, item, quantity] = input.split(/ +/g);

        switch (command) {
            case"restock":
                return restock(item, +quantity);
            case"prepare":
                return prepare(item, +quantity);
            case"report":
                return report();
        }
    };
})();

console.log(solve("prepare cheverme 1"));
console.log(solve("restock protein 10"));
console.log(solve("prepare cheverme 1"));
console.log(solve("restock carbohydrate 10"));
console.log(solve("prepare cheverme 1"));
console.log(solve("restock fat 10"));
console.log(solve("prepare cheverme 1"));
console.log(solve("restock flavour 10"));
console.log(solve("prepare cheverme 1"));
console.log(solve("report"));