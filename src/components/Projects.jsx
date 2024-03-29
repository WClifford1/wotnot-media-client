import React from 'react'
import one from '../images/proj6.png'
import two from '../images/proj27.png'
import three from '../images/proj10.png'
import four from '../images/proj23.png'
import five from '../images/proj20.png'
import six from '../images/proj25.png'
import seven from '../images/proj26.png'
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
                    <div class="portfolio-item medium"><img src={one} alt="Newspaper flyer"/></div>
                    <div class="portfolio-item large two"><img src={six} alt="Newspaper flyer"/></div>
                    <div class="portfolio-item medium"><img src={five} alt="Newspaper flyer"/></div>
                    <div class="portfolio-item small"><img src={four} alt="Newspaper flyer"/></div>
                    <div class="portfolio-item tall"><img src={seven} alt="Newspaper flyer"/></div>
                    <div class="portfolio-item wide"><img src={two} alt="Newspaper flyer"/></div>
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
