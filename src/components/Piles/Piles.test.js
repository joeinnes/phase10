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
    const el = render(<Piles {...gameState} />);
    const drawPile = el.getAllByTestId("pile")[0];
    expect(drawPile).toHaveTextContent(gameState.draw[0].number || gameState.draw[0].special);
});