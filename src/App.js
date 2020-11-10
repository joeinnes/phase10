import './App.css';
import Deck from './components/Deck/Deck';

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
      <Deck cards={cards} />
    </div>
  );
}

export default App;
