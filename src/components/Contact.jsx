import React, { Component } from 'react'
import axios from 'axios'
import map from '../images/map.jpg'
import contact from '../images/contact.svg'

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
        this.onChangeEnquiry = this.onChangeEnquiry.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        // this.onCancel = this.onCancel.bind(this)


        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            enquiry: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    onChangeEnquiry(e) {
        this.setState({
            enquiry: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()


        const newEnquiry = {
            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phone,
            enquiry: this.state.enquiry
        }
        axios.post('http://localhost:4000/api/enquiries', newEnquiry)
            .then(res => console.log(res.data))

        this.setState({
            name: '',
            email: '',
            phoneNumber: '',
            enquiry: ''
        })
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
                        <div className="contact-text">
                            <label><strong>Name :</strong></label>
                        </div>

                        <div className="contact-input">
                            <input type="text" className="contact-control"
                                value={this.state.name}
                                onChange={this.onChangeName} placeholder="Enter phone name here" />
                        </div>

                        <div className="contact-text">
                            <label><strong>Email :</strong></label>
                        </div>

                        <div className="contact-input">
                            <input type="text" className="contact-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail} placeholder="Enter phone email here" />
                        </div>

                        <div className="contact-text">
                            <label><strong>Phone :</strong></label>
                        </div>

                        <div className="contact-input">
                            <input type="text" className="contact-control"
                                value={this.state.phoneNumber}
                                onChange={this.onChangePhoneNumber} placeholder="Enter phone number here" />
                        </div>

                        <div className="contact-text">
                            <label><strong>Message :</strong></label>
                        </div>

                        <div className="contact-message">
                            <input type="text" className="contact-control"
                                value={this.state.enquiry}
                                onChange={this.onChangeEnquiry} placeholder="Enter enquiry here" />
                        </div>

                        <div className="contact-btn">
                            <input type="submit"
                                value="Send Message"
                                className="contact-sub" />
                        </div>
                    </form>
                </div>

                <div className="contact-pic">
                    <img src={contact} alt=""/>
                </div>

            </div>
            </div>
        )
    }
}