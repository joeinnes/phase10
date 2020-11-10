import { render } from '@testing-library/react';
import DeckDefinition from '../settings/deck-definition.json';
import { Build, Deal, Shuffle } from './DeckUtilities';
import Piles from './Piles';

test('can display two piles', () => {
    const el = render(<Piles />);
    const piles = el.getAllByTestId("pile");
    expect(piles.length).toBe(2);
});