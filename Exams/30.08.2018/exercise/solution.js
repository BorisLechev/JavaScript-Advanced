class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.creditCard = {
            cardNumber: 1111,
            expirationDate: "",
            securityNumber: 111
        };

        this.wishList = [];
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(array) {
        if (arrayOsStrings.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }

        let pattern = /\b[A-Z][a-z]+\b/g;

        array.forEach((el) => {
            if (!el.match(pattern)) {
                throw new Error("Invalid full name");
            }
        });

        let fullName = [];

        fullName.firstName = array[0];
        fullName.middleName = array[1];
        fullName.lastName = array[2];

        this._fullName = fullName;
    }

    generateIDNumber() {
        let vowelList = ["a", "e", "o", "i", "u"];

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
}