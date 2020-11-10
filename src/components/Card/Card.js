import './Card.css';
import { Textfit } from 'react-textfit';


export default function Card ({ colour, number, special, faceDown = false }) {
    return (
            <div className={`Card ${faceDown ? "Face-Down" : special || colour}`} data-testid="card">
                <div className="Content">
                <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Top-Left">{faceDown ? "" : special ? special[0].toUpperCase() : number}</Textfit>
                <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Centre"><span className="Text-Span">{faceDown ? "Phase 10" : special || number}</span></Textfit>
                <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Bottom-Right">{faceDown ? "" : special ? special[0].toUpperCase() : number}</Textfit>
                </div>
            </div>
    )
}