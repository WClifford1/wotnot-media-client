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
            <div className="nav-cont">
                <div className="hero-image">
                    <div className="hero-text">
                        <h1>Lucrative, Innovative, Design Solutions</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores sit voluptates optio odit nihil iusto est sint qui! Exercitationem delectus nihil alias praesentium iste maiores officiis quisquam repellat. Voluptates.</p>
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
    )
}
