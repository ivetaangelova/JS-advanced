function printDeckOfCards(cards) {
    let cardsDeck = [];
    for (let card of cards) {
        let face = card[0];
        let suit = card[1];
        if (card.length === 3) {
            face = card.substring(0, 2);
            suit = card[2];
        }
        try {
            let validatedCard = createCard(face, suit);
            cardsDeck.push(validatedCard);
        } catch (error) {
            console.log(`Invalid card: ${card}`)
            return;
        }
    }
    console.log(cardsDeck.join(' '));
    function createCard(face, suit) {
        let validSuits = {
            S: "\u2660",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663"
        }
        let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        if (!validSuits[suit]) {
            throw new Error("Invalid suit");
        }
        if (!validFaces.includes(face)) {
            throw new Error("Invalid face");
        }
        return {
            face: face,
            suit: validSuits[suit],
            toString: function () {
                return this.face + this.suit
            }
        }
    }
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])
