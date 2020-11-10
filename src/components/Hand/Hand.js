import './Hand.css';
import Card from '../Card/Card';

export default function Hand ({cards}) {
    const cardsToRender = cards.map((card, index) => <Card {...card} key={index} />);
    return (
        <div className="Hand">
            {cardsToRender}
        </div>
    )
}