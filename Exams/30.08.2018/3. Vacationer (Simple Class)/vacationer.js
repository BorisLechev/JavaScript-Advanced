class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.creditCard = {
            cardNumber: 1111,
            expirationDate: "",
            securityNumber: 111
        };

        if (creditCard !== undefined) {
            this.addCreditCardInfo(creditCard);
        }

        this.wishList = [];
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(arrayOsStrings) {
        if (arrayOsStrings.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }

        let pattern = /\b[A-Z][a-z]+\b/g;

        arrayOsStrings.forEach((name) => {
            if (!name.match(pattern)) {
                throw new Error("Invalid full name");
            }
        });

        let fullName = [];

        fullName.firstName = arrayOsStrings[0];
        fullName.middleName = arrayOsStrings[1];
        fullName.lastName = arrayOsStrings[2];

        this._fullName = fullName;
    }

    generateIDNumber() {
        let vowel = ["a", "e", "o", "i", "u"];

        let id = (231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length).toString();

        if (vowel.includes(this.fullName.lastName.slice(-1))) {
            id += 8;
        } else {
            id += 7;
        }

        return id;
    }

    addCreditCardInfo(input) {
        if (input.length !== 3) {
            throw new Error("Missing credit card information");
        }

        if (typeof input[0] !== "number" || typeof input[2] !== "number") {
            throw new Error("Invalid credit card details");
        }

        this.creditCard.cardNumber = input[0];
        this.creditCard.expirationDate=input[1];
        this.creditCard.securityNumber=input[2];
    }

    addDestinationToWishList(destination) {
        if (!this.wishList.includes(destination)) {
            this.wishList.push(destination);

            return this.wishList.sort((a, b) => a.length - b.length);
        }

        throw new Error("Destination already exists in wishList");
    }

    getVacationerInfo() {
        return "Name: " + this.fullName.firstName + " " + this.fullName.middleName + " " + this.fullName.lastName + "\n" +
            "ID Number: " + this.idNumber + "\n" +
            "Wishlist:\n" + (this.wishList.length === 0 ? "empty" : this.wishList.join(", ")) + "\n" +
            "Credit Card:\n" +
            "Card Number: " + this.creditCard.cardNumber + "\n" +
            "Expiration Date: " + this.creditCard.expirationDate + "\n" +
            "Security Number: " + this.creditCard.securityNumber;
    }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());