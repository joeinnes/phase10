import './Hand.css';
import Card from '../Card/Card';
import { Fragment } from 'react';

export default function Hand ({cards, discardFn}) {
    const cardsToRender = cards.map((card, index) => <Card {...card} key={"card" + index} discardFn={discardFn} index={index} />);
    return (
        <Fragment>
            <h1>My Hand</h1>
            <div className="Hand">
                {cardsToRender}
            </div>
        </Fragment>
    )
}