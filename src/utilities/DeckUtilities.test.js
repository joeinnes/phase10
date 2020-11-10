import DeckDefinition from '../settings/deck-definition.json';
import { Build, Shuffle } from './DeckUtilities';

test('can build a full deck', () => {
    const deckDefinition = {
        "specials": [
            { 
                "name": "aussetzen", 
                "quantity": 5
            }
        ],
        "basics": {
            "colours": [
                "red",
                "green",
                "blue",
                "yellow"
            ],
            "numbers": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13"
            ],
            "quantity": 5
        }
    };
    const deck = Build(deckDefinition);

    expect(deck.length).toEqual(265);
  });

  test('can shuffle a deck', () => {
    const deck = Build(DeckDefinition);
    Shuffle(deck);
    expect(deck[0].special).not.toBe({ "special": "aussetzen"})
  });