import React from 'react'
import heroimg from '../images/blob-shape.svg'
import { Link } from 'react-router-dom'
import HowWeHelp from './HowWeHelp'
import Service2 from './Service2';
import WhyUs from './WhyUs'


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
                <img src={heroimg} className="blob" alt="hoohaa" />
            </div>

            <Service2 />
            <HowWeHelp />
            <WhyUs />

        </div>
    )
}
