import './App.css';
import WebFont from 'webfontloader';
import Hand from './components/Hand/Hand';
import Piles from './components/Piles/Piles';
import { Build, Deal, Shuffle } from './utilities/DeckUtilities';
import DeckDefinition from './settings/deck-definition.json';
import {useState} from 'react';

function App() {
  const deck = Shuffle(Build(DeckDefinition));
  const playerCount = 1;
  const [ gameState, setGameState ] = useState(Deal(deck, playerCount));
  const myHand = gameState.hands[0];
  return (
    <div className="App">
      <Piles />
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
