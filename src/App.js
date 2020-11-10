import './App.css';
import Hand from './components/Hand/Hand';
import { Build, Shuffle } from './utilities/DeckUtilities'
import DeckDefinition from './settings/deck-definition.json'

console.log(Shuffle(Build(DeckDefinition)));

function App() {
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

  return (
    <div className="App">
      <Hand cards={cards} />
    </div>
  );
}

export default App;
