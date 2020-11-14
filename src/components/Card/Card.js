import './Card.css';
import { Textfit } from 'react-textfit';
import { useState, useRef, useEffect } from 'react';

export default function Card ({ colour, number, special, faceDown = false, discardFn = null, index }) {
    const ref = useRef(null);
    const [height, setHeight] = useState(0);
    useEffect (() => {
        setHeight(ref.current.clientHeight)
    }, [ref]);
    let centre;
    if (special || faceDown) {
        centre = <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Centre"><span className="Text-Span">{faceDown ? "Phase 10" : special || number}</span></Textfit>
    } else {
        centre = <span className="Centre" style={{ fontSize: height/2 + "px"}}>{number}</span>
    }
    return (
            <div className={`Card ${faceDown ? "Face-Down" : special || colour}`} data-testid="card" ref={ref} onClick={() => discardFn ? discardFn(index) : "" }>
                <div className="Content">
                    <span className="Top-Left" style={{ fontSize: height/5 + "px"}}>{faceDown ? "" : special ? special[0].toUpperCase() : number}</span>
                    {centre}
                    <span className="Bottom-Right" style={{ fontSize: height/5 + "px"}}>{faceDown ? "" : special ? special[0].toUpperCase() : number}</span>
                </div>
            </div>
    )
}

/* <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Top-Left">{faceDown ? "" : special ? special[0].toUpperCase() : number}</Textfit>
                <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Centre"><span className="Text-Span">{faceDown ? "Phase 10" : special || number}</span></Textfit>
                <Textfit mode="single" forceSingleModeWidth={false} max={1000} className="Bottom-Right">{faceDown ? "" : special ? special[0].toUpperCase() : number}</Textfit> */