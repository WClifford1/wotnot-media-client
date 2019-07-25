import React from 'react'
import blob from '../images/blob-shape.svg'
import { Link } from 'react-router-dom'
import HowWeHelp from './HowWeHelp'
import Service2 from './Service2';
import WhyUs from './WhyUs'
import comp from '../images/comp.svg'
import Showcase from './Showcase';


export default function Home() {
    return (
        <React.Fragment>
            <div className="nav-cont">
                <div className="hero-image">
                    <div className="hero-text">
                        <h1>Lucrative, Innovative, Design Solutions</h1>
                        <p>I am a graphic design company specialising in print and web design. We've created newsletters, direct mail letters, newspapers, flyers, brochures, calendars, banners and much more.
Having delved in marketing and communications for over 10 years, we know how to take your ideas from concept to completion.</p>
                        <div className="hbtn-cont">
                            <Link to="/enquiries"><button type="button" class="hero-btn">Enquire Today!</button></Link>
                        </div>
                    </div>
                    <div className="image-home">
                        <div className="blob">
                            <img src={blob} alt="hoohaa" />
                        </div>
                        <div className="comp-img" >
                            <img src={comp} alt="hoohaa" />
                        </div>
                    </div>
                </div>
                <Service2 />
                <HowWeHelp />
                <WhyUs />
                <Showcase />
            </div>
        </React.Fragment>
    )
}
