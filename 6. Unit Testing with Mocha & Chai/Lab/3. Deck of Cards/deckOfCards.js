function printDeckOfCards(cards) {
    function makeCard(cardFace, cardSuit) {
        const cardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

        const cardSuits = {
            "S": "\u2660",
            "H": "\u2665",
            "D": "\u2666",
            "C": "\u2663"
        };

        if (!cardFaces.includes(cardFace)) {
            throw new Error('Invalid card face: ' + cardFace);
        }

        if (!cardSuits.hasOwnProperty(cardSuit)) {
            throw new Error("Invalid card suit: " + cardSuits[cardSuit]);
        }

        return {
            cardFace,
            cardSuit,
            toString: function () {
                return cardFace + cardSuits[cardSuit];
            }
        }
    }

    let output = [];

    cards.forEach((card) => {
        let face = card.substring(0, card.length - 1);
        let suit = card[card.length - 1]; // card.substring(card.length-1,card.length)

        try {
            output.push(makeCard(face, suit));
        } catch (e) {
            console.log(`Invalid card: ${card}`);
        }
    });

    console.log(output.join(" "));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);