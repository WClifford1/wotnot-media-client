import React from 'react'
import tak from '../images/grid6.png'
import tak2 from '../images/grid14.png'
import tak3 from '../images/grid16.png'
import tak4 from '../images/grid18.png'
import tak5 from '../images/grid20.png'
import tak6 from '../images/grid22.png'
import tak7 from '../images/grid24.png'
import tak8 from '../images/grid26.png'

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
                <div className="grid-item"><img src={tak5} alt="hoohaa" /></div>
                <div className="grid-item"><img src={tak6} alt="hoohaa" /></div>
                <div className="grid-item"><img src={tak7} alt="hoohaa" /></div>
                <div className="grid-item"><img src={tak8} alt="hoohaa" /></div>
            </div>
        </React.Fragment>
    )
}
