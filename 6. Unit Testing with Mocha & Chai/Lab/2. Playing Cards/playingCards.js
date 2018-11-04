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

    return cardFace + cardSuits[cardSuit];
}

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));