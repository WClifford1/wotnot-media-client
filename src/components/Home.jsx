import React from 'react'
import blob from '../images/blob-shape.svg'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import HowWeHelp from './HowWeHelp'
import Service2 from './Service2';
import WhyUs from './WhyUs'
import comp from '../images/comp.svg'
import Showcase from './Showcase';


export default function Home() {
    return (
        <Router>
            <div className="nav-cont">
                {/* <div className="nav">
                <h2 className="logo">WotNot Media</h2>
                <ul className="nav-items">

                    <li><Link to="/" className="hov">Projects</Link></li>
                    <li><Link to="/service2" className="hov">Services</Link></li>
                    <li><a className="hov" href="about.asp">FAQ</a></li>
                    <li><a className="hov" href="contact.asp">Contact</a></li>
                </ul>
            </div> */}

                {/* <div className="hero-image">
                <div className="hero-text">
                    <h1>Lucrative, Innovative, Design Solutions</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores sit voluptates optio odit nihil iusto est sint qui! Exercitationem delectus nihil alias praesentium iste maiores officiis quisquam repellat. Voluptates.</p>
                    <div className="hbtn-cont">
                        
                        <button Link to="/enquiryform" type="button" class="hero-btn">Enquire Today!</button> 
                    </div>
                </div>
                <img src={heroimg} className="blob" alt="hoohaa" />
            </div> */}

                <div className="hero-image">
                    <div className="hero-text">
                        <h1>Lucrative, Innovative, Design Solutions</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores sit voluptates optio odit nihil iusto est sint qui! Exercitationem delectus nihil alias praesentium iste maiores officiis quisquam repellat. Voluptates.</p>
                        <div className="hbtn-cont">
                            <button type="button" class="hero-btn">Enquire Today!</button>
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
        </Router>
    )
}
