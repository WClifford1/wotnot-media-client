import React from 'react'
import map from '../images/map.jpg'
import { Link } from 'react-router-dom'

export default function ServicePage() {
    return (
        <div className="servp-cont">
            <div className="servp-title">
                <h1>Services</h1>
            </div>
            <div className="serv-offered">

                <div className="serv-1">
                    <div className="serv1-img">
                        <img src={map} alt="" />
                    </div>
                    <div className="serv1-text">
                        <Link to="/print">
                            <h4>Print</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corporis.</p>
                        </Link>
                    </div>
                </div>

                <div className="serv-2">
                    <div className="serv2-img">
                        <img src={map} alt="" />
                    </div>
                    <div className="serv2-text">
                        <Link to="/video">
                        <h4>Video</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corporis.</p>
                        </Link>
                    </div>
                </div>

                <div className="serv-3">
                    <div className="serv3-img">
                        <img src={map} alt="" />
                    </div>
                    <div className="serv3-text">
                        <Link to="/web">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corporis.</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
