import './Card.css';
import { Textfit } from 'react-textfit';


export default function Card ({ colour, number, special }) {

    return (
            <div className={`Card ${colour}`} data-testid="card">
                <div className="Content">
                <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Top-Left">{number}</Textfit>
                <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Centre">{number}</Textfit>
                <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Bottom-Right">{number}</Textfit>
                </div>
            </div>
    )
}