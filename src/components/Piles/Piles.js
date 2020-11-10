import Card from '../Card/Card';
import './Piles.css';

export default function Piles({draw, discard, flipCard}) {
    let nextDrawCard = draw ? draw[0] : null;
    let lastDiscardCard = discard ? discard[0] : null;
    return (
        <div className="Piles">
            <div className="Draw-Pile" data-testid="pile" onClick={flipCard}><Card {...nextDrawCard} faceDown={true} /></div>
            <div className="Discard-Pile" data-testid="pile"><Card {...lastDiscardCard} /></div>
        </div>
    )
}