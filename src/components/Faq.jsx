import React, { Component } from 'react'
import Accordion from './Accordion';

export default class Faq extends Component {
    

    render(){
    return (
        <div className="faq-cont">

            <div className="faq-header">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="faq-inner">
            <Accordion title="What do your services cost?" 
            content="<p>The print and digital media world is a very subjective process. Every organisation’s goals and projects are unique. Because of this wotnot media works primarily on a project based pricing model. Once you tell us the project your organisation wants to promote and market to we will offer a competitive quote that matches your needs and budget.</p>" 
            />
            <Accordion title="What is your background?" 
            content="My background/experience is over 10 years working as a Graphic Designer in the Marketing and Communications. I specialise in working with Charities and Not-for-profits and so understand the need to be flexible between quality designs and individual organisations budgets." 
            />
            <Accordion title="What services do offer?" 
            content="
            <p>By hiring Wotnot Media for your next big project, you will be provided with your own professional graphics designer who will walk you step by step through the design process from start to finish.</p>
            <br />
            <p><strong>What’s included: </strong></p>
            <br />
            <ul>
            <li>Profesional consulation to identify your project’s key message and goals (target market, profit goals, brand awareness strategies etc).</li>
            <li>Regular proofs and constructive feedback to take your message and brand from the conceptual stage into the real world.</li>
            <li>Final product includes high resolution digital files for print and online distribution.</li>
            <li>Optionally if you don’t want to deal with printers we also offer a service where wotnot media will talk with local printers  and mail-houses for the best deals. wotnot media understands the printing direct mail process and are ready and able to handle this on your behalf.</li>
            </ul>
            " 
            />
            <Accordion title="How long have you been in the industry for?" 
            content="
            I’ve been working in the Industry as a Graphic Designer in print and video for over 10 years and with building wordpress based websites for closer to 8 years." 
            />
            <Accordion title="Why should I choose you?" 
            content="
            <p>I know how to take the ideas and direction of a client and bring them to life. I am able to give professional advice and suggestions from my abilities and experience as a long-time graphic desiger while maintaining the perspective that ultimatley what the client wants is my main goal.</p>
            <br>
            <p>Sometime people and organisations don’t neccessarily now what they want when it comes to good design, messaging and overall presentation. As your Graphic Designer I can help you work out, not just what you want, but what you need to achive your project goals and outcomes.</p>"
            />
        </div>
        </div>
    )
}
}