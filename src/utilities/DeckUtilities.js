export function Build(deckDefinition) {
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

export function Shuffle(deck) {
    return deck.sort(() => {
        return Math.random() > 0.5
    })
}

export function Deal(deck, players) {
    let hands = [];
    for (let i = 0; i < players; i++) {
      hands[i] = deck.splice(0, 10);
    }
    const draw = deck;
    const discard = [];
    return {
        hands,
        draw,
        discard
    }
}