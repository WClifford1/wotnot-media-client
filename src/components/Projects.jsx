import React from 'react'
import tak from '../images/grid6.png'
import tak2 from '../images/grid14.png'
import tak3 from '../images/grid16.png'
import tak4 from '../images/grid18.png'
import tak5 from '../images/grid20.png'
import tak6 from '../images/grid22.png'
import tak7 from '../images/grid24.png'
import tak8 from '../images/grid26.png'


export default function Projects() {
    return (
        <React.Fragment>
            <div className="proj-title">
                <h1>Projects Page</h1>
            </div>
            <div className="cont-cont">
            <div className="main-cont">
                <div className="portfolio">
                    <div class="portfolio-item medium">one</div>
                    <div class="portfolio-item large two">two</div>
                    <div class="portfolio-item medium">three</div>
                    <div class="portfolio-item small">four</div>
                    <div class="portfolio-item tall">five</div>
                    <div class="portfolio-item wide">six</div>
                    {/* <div class="portfolio-item wide">six</div>
                    <div class="portfolio-item medium">one</div> */}
                </div>
            </div>
            </div>

            {/* <div className="portfolio-item square"><img src={tak2} alt="hoohaa" /></div>
                    <div className="portfolio-item large"><img src={tak3} alt="hoohaa" /></div>
                    <div className="portfolio-item square"><img src={tak4} alt="hoohaa" /></div>
                    <div className="portfolio-item small"><img src={tak} alt="hoohaa" /></div>
                    <div className="portfolio-item tall"><img src={tak5} alt="hoohaa" /></div>
                    <div className="portfolio-item wide"><img src={tak6} alt="hoohaa" /></div> */}
            {/* <div className="proj-item"><img src={tak7} alt="hoohaa" /></div> */}
            {/* <div className="proj-item"><img src={tak8} alt="hoohaa" /></div> */}
                
            
        </React.Fragment >
    )
}
