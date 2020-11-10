import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App() {
  let card = {
    colour: "red",
    number: "3"
  };

  return (
    <div className="App">
        <div style={{width: "20%"}}>
          <Card colour="red" number="3" />
        </div>
        <div style={{width: "20%"}}>
          <Card special="aussetzen" />
        </div>
    </div>
  );
}

export default App;
