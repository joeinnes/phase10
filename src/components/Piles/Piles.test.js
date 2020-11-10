import { render } from '@testing-library/react';
import DeckDefinition from '../../settings/deck-definition.json';
import { Build, Deal, Shuffle } from '../../utilities/DeckUtilities';
import Piles from './Piles';

test('can display two piles', () => {
    const el = render(<Piles />);
    const piles = el.getAllByTestId("pile");
    expect(piles.length).toBe(2);
});

test('can display piles based on game state', () => {
    const gameState = Deal(Shuffle(Build(DeckDefinition)));
    gameState.discard.push(gameState.draw.shift());
    const el = render(<Piles {...gameState} />);
    const drawPile = el.getAllByTestId("pile")[0];
    const discardPile = el.getAllByTestId("pile")[1];
    expect(drawPile).toHaveTextContent("Phase 10");
    expect(discardPile).toHaveTextContent(gameState.discard[0].number || gameState.discard[0].special)
});