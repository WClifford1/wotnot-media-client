import React, { Component } from 'react'
import axios from 'axios'

import map from '../images/map.jpg'
import contact from '../images/contact.png'



export default class Contact extends Component {

constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
        enquiry : {
            name: '',
            email: '',
            phoneNumber: '',
            enquiry: '',
        },
        errors : ''
    }
}


// Validate info added to the forms
// Required fields must be betwee character limits
validate = () => {
    const errors = {}
    if (this.state.enquiry.name.trim().length < 1 || this.state.enquiry.name.trim().length > 20){
    errors.name = "*Your name must be between 1 and 20 characters" }
    if (this.state.enquiry.email.trim().length < 1 || this.state.enquiry.email.trim().length > 50){
        errors.email = "*Your email address must be between 1 and 50 characters"
    }
    if (this.state.enquiry.enquiry.trim().length < 1 || this.state.enquiry.enquiry.trim().length > 500){
        errors.enquiry = "*Your message must be between 1 and 500 characters"
    }
    return Object.keys(errors).length === 0 ? null : errors 
}


// On change event sets the enquiry state to the current value of the input box
onChange = e => {
    let enquiry = {...this.state.enquiry}
    enquiry[e.target.name] = e.target.value
    this.setState({
        enquiry
    })
}


// Users can only enter numbers or the '+' sign to the phone number input box
onChangePhoneNumber(e) {
    if (!isNaN(e.target.value) || e.target.value === '+'){
        let enquiry = {...this.state.enquiry}
        enquiry[e.target.name] = e.target.value
        this.setState({
            enquiry
        })
    }
}


onSubmit(e) {
    e.preventDefault()
    // Check for errors and return before POSTING if there are any
    const errors = this.validate()
    console.log(errors)
    this.setState( { errors })
    if (errors) return
    // newEnquiry variable created from what is currently in the input boxes.
    const newEnquiry = {
        name: this.state.enquiry.name,
        email: this.state.enquiry.email,
        phoneNumber: this.state.enquiry.phoneNumber,
        enquiry: this.state.enquiry.enquiry
    }
    // axios POST newEnquiry object to database
    // https://wotnotmedia.herokuapp.com/api/enquiries
    axios.post('http://localhost:4000/api/enquiries', newEnquiry)
        .then(res => console.log(res.data)
        )
    // Reset state
    this.setState({
        enquiry : {
            name: '',
            email: '',
            phoneNumber: '',
            enquiry: ''
        }
    })
    // Take user back to the homepage
    this.props.history.push('/')
}


    render() {
        return (
            <div className="contact-cont">
                {/* <div className="contact-header">
                    <h1>Contact Us</h1>
                    <h2>We'd love to hear from you!</h2>
                </div> */}

                <div className="contact-page">
                <div className="contact-form">
                <div className="contact-title">
                    <h1>Drop us a line</h1>
                </div>


                    <form onSubmit={this.onSubmit}>
            

                        <div className="contact-input">

                            <input
                                name="name"
                                type="text"
                                className="contact-control"
                                value={this.state.enquiry.name}
                                onChange={this.onChange} 
                                placeholder="Insert name here" 
                            />
                            {/* Conditional error rendering if input fails validaiton */}
                            {this.state.errors.name && <p style={{ color: "red" }}>{this.state.errors.name}</p>}

                        </div>


                        <div className="contact-input">

                            <input 
                                name="email"
                                type="email" 
                                className="contact-control"
                                value={this.state.enquiry.email}
                                onChange={this.onChange} 
                                placeholder="Insert email here" 
                            />
                            {/* Conditional error rendering if input fails validaiton */}
                            {this.state.errors.email && <p style={{ color: "red" }}>{this.state.errors.email}</p>} 
                        </div>

 

                        <div className="contact-input">
                            <input 
                                name="phoneNumber"
                                type="text" 
                                className="contact-control"
                                value={this.state.enquiry.phoneNumber}
                                onChange={this.onChangePhoneNumber} 
                                placeholder="Insert phone number here" 
                            />
                        </div>


                        <div className="contact-input">
                            <input 
                                name="enquiry"
                                type="text" 
                                className="contact-control"
                                value={this.state.enquiry.enquiry}
                                onChange={this.onChange} 
                                placeholder="Insert message here" 
                            />
                            {/* Conditional error rendering if input fails validaiton */}
                            {this.state.errors.enquiry && <p style={{ color: "red" }}>{this.state.errors.enquiry}</p>}
                        </div>

                        <div className="contact-btn">
                            <input type="submit"
                                value="Send Message"
                                className="contact-sub" />
                        </div>
                    </form>
                </div>

                <div className="contact-pic">
                    <img src={contact} alt="" />
                </div>

            </div>
            </div>
        )
    }
}