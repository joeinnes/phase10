import './Deck.css';
import Card from '../Card/Card';

export default function Deck ({cards}) {
    const cardsToRender = cards.map((card, index) => <Card {...card} key={index} />);
    return (
        <div className="Deck">
            {cardsToRender}
        </div>
    )
}