let solve = (function () {
    let cardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    function Suits() {
        Suits.SPADES = "\u2660";
        Suits.HEARTS = "\u2665";
        Suits.DIAMONDS = "\u2666";
        Suits.CLUBS = "\u2663";
    }

    class Card {
        constructor(face, suit) {
            this.suit = suit;
            this.face = face;
            Object.freeze(this);
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (!cardFaces.includes(value)) {
                throw new Error("Invalid card face!");
            }

            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(val) {
            if (!Object.values(Suits).includes(val)) {
                throw new Error("Invalid card suit:" + val);
            }

            this._suit = val;
        }

        toString() {
            return this._face + this._suit;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
}());

let Card = solve.Card;
let suit = solve.Suits;
let firstCard = new Card("2", suit.SPADES);
console.log(firstCard.toString());