import { render, getAllByText, getByTestId } from '@testing-library/react';
import Card from './Card';

test('shows a number', () => {
  const number = Math.ceil(Math.random() * 10);
  const el = render(<Card number={number} />);
  const numberElements = el.getAllByText(`${number}`);
  expect(numberElements.length).toEqual(3)
});

test('has a colour', () => {
    const colours = ["red", "blue", "green", "yellow"];
    const chosenColour = colours[Math.floor(Math.random() * colours.length)];
    const el = render(<Card colour={chosenColour} />);
    const element = el.getByTestId("card");
    expect(element).toHaveClass(chosenColour);
  });

  test('shows special cards', () => {
    const specialCards = ["aussetzen"];
    const chosenSpecial = specialCards[Math.floor(Math.random() * specialCards.length)];
    const el = render(<Card special={chosenSpecial} />);
    const element = el.getByTestId("card");
    expect(element).toHaveClass(chosenSpecial);
    expect(element).toHaveTextContent(chosenSpecial);
  });