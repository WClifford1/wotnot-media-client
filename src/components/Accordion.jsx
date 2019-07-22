import React, { useState, useRef } from 'react'
import Chevron from './Chevron';


export default function Accordion(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
    }

    return (
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.title}</p>
                <Chevron width={10} fill={"#777"} />
            </button>
            <div className="accordion__content">
                <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }} />
            </div>
        </div>
    )
}
