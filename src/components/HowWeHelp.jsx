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
                <p>We can help in bringing your messages and brand to life in the online world. We have Advanced knowledge with building customised Wordpress based websites and landing pages to make your organisation look just as good online as in it does in your print publications. And best of all, with a wordpress based website, and a little bit of training, you and your team can maintain a professional looking and functional website yourselves, without the need to know complex web languages, a massive time and money saver.</p>
                <div className="helpbtn-cont">
                    <Link to="/enquiries"><button type="button" className="help-btn">Enquire Now</button></Link>
                </div>
            </div>
        </div>
    )
}
