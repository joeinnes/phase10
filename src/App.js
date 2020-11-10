import './App.css';
import WebFont from 'webfontloader';
import Hand from './components/Hand/Hand';
import Piles from './components/Piles/Piles';
import { Build, Deal, Shuffle } from './utilities/DeckUtilities';
import DeckDefinition from './settings/deck-definition.json';
import {useState, useCallback } from 'react';

function App() {
  const deck = Shuffle(Build(DeckDefinition));
  const playerCount = 1;
  const [ gameState, setGameState ] = useState(Deal(deck, playerCount));
  const flipCard = useCallback(() => {
    console.log('Flipping card')
    let newGameState = { ...gameState };
    newGameState.discard.unshift(newGameState.draw.shift());
    setGameState(newGameState);
    console.log(gameState.discard)
    window.dispatchEvent(new Event('resize'));
  }, [gameState]);
  const myHand = gameState.hands[0];
  return (
    <div className="App">
      <Piles {...gameState} flipCard={flipCard}/>
      <Hand cards={myHand} />
    </div>
  );
}
  WebFont.load({
    google: {
      families: ['Hammersmith One']
    },
    active: () => window.dispatchEvent(new Event('resize'))
  });

export default App;


