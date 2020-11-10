import DeckDefinition from '../settings/deck-definition.json';
import DeckBuilder from './DeckBuilder';
import DeckShuffler from './DeckShuffler';

test('can shuffle a deck', () => {
    const deck = DeckBuilder(DeckDefinition);
    DeckShuffler(deck);
    expect(deck[0].special).not.toBe({ "special": "aussetzen"})
  });