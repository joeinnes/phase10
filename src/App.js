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
  const playerNumber = 0;
  const [ gameState, setGameState ] = useState(Deal(deck, playerCount));

  const addToHand = useCallback((pile) => {
    if (gameState.hands[playerNumber].length >= 11) {
      alert(`You can't pick up again. Choose a card to throw away.`);
      return;
    }
    let newGameState = { ...gameState };
    newGameState.hands[playerNumber].unshift(newGameState[pile].shift());
    setGameState(newGameState);
    window.dispatchEvent(new Event('resize'));
  }, [gameState]);

  const discardFn = useCallback((cardIndex) => {
    if (gameState.hands[playerNumber].length <= 10) {
      alert(`You can't throw away any more.`);
      return;
    }
    let newGameState = { ...gameState };
    newGameState.discard = [...newGameState.hands[playerNumber].splice(cardIndex, 1), ...newGameState.discard];
    console.log(newGameState.discard)
    setGameState(newGameState);
    window.dispatchEvent(new Event('resize'));
  }, [gameState]);

  const myHand = gameState.hands[0];

  return (
    <div className="App">
      <Piles {...gameState} addToHand={addToHand}/>
      <Hand cards={myHand} discardFn={discardFn} />
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


