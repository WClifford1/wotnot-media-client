import React from 'react'
import internet from '../images/internet1.svg'

export default function WebDesign() {
    return (
        <div className="web-cont">
            <div className="web-icon">
                <img src={internet} alt="" />
            </div>
            <div className="web-sec">
                <div className="web-title">
                    <h1>Cutting Edge Innovative Web Solutions</h1>
                </div>
                <div className="web-text">
                    <p>Providing world class, customizable web design services pertaining to the color, theme and feel you desire. At WNM we strive for excellence in our craft, and guarantee 100% satisfaction. If you are dissatisfied with the quality of our presentation and service, we offer generous revisions and recalls to affirm your contentment with our delivery. </p>
                </div>
            </div>
        </div>
    )
}
