export default function DeckBuilder(deckDefinition) {
    let deck = [];
    deckDefinition.specials.forEach(special => {
        for (let i = 0; i < special.quantity; i++) {
            deck.push({special: special.name})
        }
    });

    deckDefinition.basics.colours.forEach(colour => {
        deckDefinition.basics.numbers.forEach(number => {
            for (let i = 0; i < deckDefinition.basics.quantity; i++) {
                deck.push({
                    colour,
                    number
                })
            }
        })
    });

    return deck;
}