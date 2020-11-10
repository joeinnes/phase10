import { render, getAllByText, getByTestId } from '@testing-library/react';
import Deck from './Deck';

test('contains a card', () => {
  const cards = [{
    number: 3,
    colour: blue
  }]
  const el = render(<Deck cards={cards} />);
  const numberElements = el.getAllByTestId('card');
  expect(numberElements.length).toEqual(cards.length);
});