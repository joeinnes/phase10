import './Card.css';
import { Textfit } from 'react-textfit';


export default function Card ({ colour, number, special }) {

    return (
            <div className={`Card ${special || colour}`} data-testid="card">
                <div className="Content">
                <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Top-Left">{special ? special[0].toUpperCase() : number}</Textfit>
                <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Centre"><span className="Text-Span">{special || number}</span></Textfit>
                <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Bottom-Right">{special ? special[0].toUpperCase() : number}</Textfit>
                </div>
            </div>
    )
}