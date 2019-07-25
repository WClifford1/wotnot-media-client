import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png'

export default function Navbar1() {
    return (
        <div className="nav-cont">
            <div className="nav">
                {/* <div className="back-img">
                <img src={test} alt=""/>
                </div> */}
                
                <h2 className="logo"><Link to="/"><img src={logo} className="logo-inner" alt="hoohaa" /></Link></h2>
                <ul className="nav-items">
                    <li><a className="hov" href="#\"><Link to="/projects">
                    Projects
                    </Link></a></li>
                    <li><a className="hov" href="#"><Link to="/services">Services</Link></a></li>
                    <li><a className="hov" href="#"><Link to="/faq">FAQ</Link></a></li>
                    <li><a className="hov" href="#"><Link to="/contact">Contact</Link></a></li>
                </ul>
            </div>
        </div>
    )
}
