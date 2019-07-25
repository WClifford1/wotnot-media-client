import React from 'react'
import video from '../images/videorec.svg'

export default function Video() {
    return (
        <div className="video-cont">
            <div className="video-icon">
                <img src={video} alt="Recorder camera" />
            </div>

            <div className="video-sec">
                <div className="video-title">
                    <h1>High Definition Video Services</h1>
                </div>

                <div className="video-text">
                    <p>Providing professional class, customizable video services in desired format and quality to be delivered electronically. At WNM we strive for excellence in our craft, and guarantee 100% satisfaction. If you are dissatisfied with the quality of our presentation and service, we offer generous revisions and recalls to affirm your contentment with our delivery. </p>
                </div>
            </div>
        </div>
    )
}
