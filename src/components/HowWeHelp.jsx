import React from 'react';
import help from '../images/blob-shape-3.svg'
import light from '../images/light1.svg'
import { Link } from 'react-router-dom'

export default function HowWeHelp() {
    return (
        <div className="help-cont">

            <div className="pic-cont">
                <div className="help-blob">
                    <img src={help} alt="Monochromatic blob" />
                </div>
                <div className="light-img">
                    <img src={light} alt="Monochromatic blob" />
                </div>
            </div>

            <div className="help-text">
                <h1>HOW CAN WE HELP?</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem tenetur perspiciatis doloribus. Porro animi officiis, rem similique modi nisi. Obcaecati, voluptatibus qui sapiente doloribus aperiam saepe consectetur necessitatibus natus sint neque. Dicta dolor ipsam eum a dolores quidem unde non sapiente omnis quis eaque eveniet nostrum velit, suscipit perferendis illum quae facere fuga pariatur ut dolore ullam. Porro.</p>
                <div className="helpbtn-cont">
                    <Link to="/enquiries"><button type="button" className="help-btn">Enquire Now</button></Link>
                </div>
            </div>
        </div>
    )
}
