import React from 'react'
import print from '../images/print.svg'
import video from '../images/video1.svg'
import internet from '../images/int.svg'
import { Link } from 'react-router-dom'

export default function Service2() {
    return (
        <React.Fragment>
        <h1 className="serves-title">Services</h1>

        <div className="serves-cont">
            <div className="servess">
                {/* <i className="fas fa-camera fa-5x" aria-hidden="true"></i> */}
                <img src={print} className="blob" alt="hoohaa" />                    
                <div className="servess-text">
                    <h3><a href="#"><Link to="/print">Print</Link></a></h3>
                </div>
            </div>
            <div className="servess">
                {/* <i className="fas fa-video fa-5x" aria-hidden="true"></i> */}
                <img src={video} className="blob" alt="hoohaa" />                    
                <div className="servess-text">
                    <h3><a href="#"><Link to="/video">Video Content</Link></a></h3>
                </div>
            </div>
            <div className="servess">
                {/* <i className="fab fa-internet-explorer fa-5x" aria-hidden="true"></i> */}
                <img src={internet} className="blob" alt="hoohaa" />                    
                <div className="servess-text">
                    <h3><a href="sad"><Link to="/web">Web Design</Link></a></h3>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
