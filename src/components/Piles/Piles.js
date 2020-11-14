import Card from '../Card/Card';
import './Piles.css';

export default function Piles({draw = [], discard = [], addToHand}) {
    let nextDrawCard = draw[0] ? draw[0] : null;
    let lastDiscardCard = discard[0] ? discard[0] : null;
    return (
        <div className="Piles">
            <div className="Draw-Pile" data-testid="pile" onClick={() => addToHand('draw')}><Card {...nextDrawCard} faceDown={true} /><h1>Draw</h1></div>
            <div className="Discard-Pile" data-testid="pile" onClick={() => addToHand('discard')}><Card {...lastDiscardCard} /><h1>Discard</h1></div>
        </div>
    )
}