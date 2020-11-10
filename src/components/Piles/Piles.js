import Card from '../Card/Card';
import './Piles.css';

export default function Piles(gameState) {
    return (
        <div className="Piles">
            <div className="Draw-Pile" data-testid="pile"><Card /></div>
            <div className="Discard-Pile" data-testid="pile"><Card colour="red" number="2" /></div>
        </div>
    )
}