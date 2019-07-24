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
            <Accordion title="What is your hourly rate?" 
            content="lorem orem orem orem orem orem orem orem orem" 
            />
            <Accordion title="What is your background?" 
            content="lorem orem orem orem orem orem orem orem orem lorem orem orem orem orem orem orem orem orem" 
            />
            <Accordion title="What services do offer?" 
            content="
            <p>lorem orem orem orem orem orem orem orem orem</p>
            </br>
            <p>lorem orem orem orem orem orem orem orem orem</p>
            </br>
            <p>lorem orem orem orem orem orem orem orem orem</p>
            " 
            />
            <Accordion title="How long have you been in the industry for?" 
            content="lorem orem orem orem orem orem orem orem orem lorem orem orem orem orem orem orem orem orem" 
            />
            <Accordion title="Why should I choose you?" 
            content="lorem orem orem orem orem orem orem orem orem lorem orem orem orem orem orem orem orem orem" 
            />
        </div>
        </div>
    )
}
}