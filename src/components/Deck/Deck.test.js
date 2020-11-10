import { render, getAllByText, getByTestId } from '@testing-library/react';
import Deck from './Deck';

test('contains multiple cards', () => {
    const cards = [{
      number: 3,
      colour: "blue"
    },{
        number: 13,
        colour: "green"
      },{
        number: 2,
        colour: "red"
      },{
        number: 7,
        colour: "yellow"
      },{
        special: "aussetzen"
      }];
    const el = render(<Deck cards={cards} />);
    const numberElements = el.getAllByTestId('card');
    expect(numberElements.length).toEqual(cards.length);
  });