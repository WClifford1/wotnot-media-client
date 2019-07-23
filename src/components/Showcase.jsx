import React from 'react'
import tak from '../images/grid6.png'
import tak2 from '../images/grid14.png'
import tak3 from '../images/grid16.png'
import tak4 from '../images/grid18.png'

export default function Showcase() {
    return (
        <React.Fragment>
            <div className="showcase-title">
                <h1>PROJECTS</h1>
            </div>
            <div className="grid-container">
                <div className="grid-item"><img src={tak2} alt="hoohaa" /></div>
                <div className="grid-item"><img src={tak3} alt="hoohaa" /></div>
                <div className="grid-item"><img src={tak4} alt="hoohaa" /></div>
                <div className="grid-item"><img src={tak} alt="hoohaa" /></div>
                <div className="grid-item"><img src={tak} alt="hoohaa" /></div>
                <div className="grid-item"><img src={tak2} alt="hoohaa" /></div>
                <div className="grid-item"><img src={tak} alt="hoohaa" /></div>
                <div className="grid-item"><img src={tak2} alt="hoohaa" /></div>
            </div>
        </React.Fragment>
    )
}
