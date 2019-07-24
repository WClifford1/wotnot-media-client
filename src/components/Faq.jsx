import React, { Component } from 'react'
import Accordion from './Accordion';

export default class Faq extends Component {
    

    render(){
    return (
        <div>
            <Accordion title="What is your name?" 
            content="lorem orem orem orem orem orem orem orem orem" 
            />
            <Accordion title="What is your name?" 
            content="lorem orem orem orem orem orem orem orem orem lorem orem orem orem orem orem orem orem orem" 
            />
            <Accordion title="What is your name?" 
            content="
            <p>lorem orem orem orem orem orem orem orem orem</p>
            </br>
            <p>lorem orem orem orem orem orem orem orem orem</p>
            </br>
            <p>lorem orem orem orem orem orem orem orem orem</p>
            " 
            />
        </div>
    )
}
}