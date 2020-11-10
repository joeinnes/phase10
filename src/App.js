import './App.css';
import Hand from './components/Hand/Hand';
import DeckBuilder from './utilities/DeckBuilder';
import DeckDefinition from './settings/deck-definition.json'

console.log(DeckBuilder(DeckDefinition));

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
