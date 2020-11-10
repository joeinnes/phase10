import DeckDefinition from '../settings/deck-definition.json';
import { Build, Deal, Shuffle } from './DeckUtilities';

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

  test('can deal a deck', () => {
      const deck = Build(DeckDefinition);
      const deckLength = deck.length;
      const players = Math.ceil(Math.random() * 8);
      Shuffle(deck);
      const { hands, discard, draw } = Deal(deck, players);
      expect(hands.length).toEqual(players);
      for (let hand of hands) {
        expect(hand.length).toEqual(10);
      }
      expect((10*hands.length) + discard.length + draw.length).toEqual(deckLength)
  });