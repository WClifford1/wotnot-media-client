import React, { Component } from 'react'
import axios from 'axios'


export default class EnquiryForm extends Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
        this.onChangeEnquiry = this.onChangeEnquiry.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            enquiry: '',
            errors : ''
        }
    }


    validate = () => {
        const errors = {}
        if (this.state.name.trim().length < 1 || this.state.name.trim().length > 20){
        errors.name = "Name must be between 1 and 20 characters"
        if (this.state.email.trim().length < 1 || this.state.name.trim().length > 50){
            errors.email = "Email must be between 1 and 50 characters"
        }
        return Object.keys(errors).length === 0 ? null : errors }
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
        if (!isNaN(e.target.value)){
            this.setState({
                phoneNumber: e.target.value
            })
        }
    }


    onChangeEnquiry(e) {
        this.setState({
            enquiry: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault()
        // Check for errors and do not post if there are any
        const errors = this.validate()
        console.log(errors)
        this.setState( { errors })
        if (errors) return

        // Create newEnquiry variable from what is in the state.
        const newEnquiry = {
            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            enquiry: this.state.enquiry
        }

        // Post the newEnquiry object to the database
        // https://wotnotmedia.herokuapp.com/api/enquiries
        axios.post('http://localhost:4000/api/enquiries', newEnquiry)
            .then(res => console.log(res.data)
            )

        // Reset the state
        this.setState({
            name: '',
            email: '',
            phoneNumber: '',
            enquiry: ''
        })

        // Take the user back to the homepage
        this.props.history.push('/')
    }


    render() {
        return (
            <div className="enq-cont">

                <div className="enq-title">
                    <h3>Enquiry Form</h3>
                </div>

                <div className="enq-form">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-text">
                            <label><strong>Name <span style={{ color: "red" }}>*</span> : </strong></label>
                        </div>

                        <div className="form-input">
                            <input type="text" className="form-control" placeholder="Insert your name here"
                            value={this.state.name}
                            onChange={this.onChangeName} />
                            {this.state.errors.name && <h1>{this.state.errors.name}</h1>}
                        </div>

                        <div className="form-text">
                            <label><strong>Email <span style={{ color: "red" }}>*</span> : </strong></label>
                        </div>

                        <div className="form-input">
                            <input type="email" className="form-control" placeholder="Insert your email here"
                            value={this.state.email}
                            onChange={this.onChangeEmail} />
                        </div>
                        {this.state.errors.email && <h1>{this.state.errors.email}</h1>}

                        <div className="form-text">
                            <label><strong>Phone : </strong></label>
                        </div>

                        <div className="form-input">
                            <input type="text" className="form-control" placeholder="Insert your phone number here"
                            value={this.state.phoneNumber}
                            onChange={this.onChangePhoneNumber} />
                        </div>

                        <div className="form-text">
                            <label><strong>Enquiry <span style={{ color: "red" }}>*</span> : </strong></label>
                        </div>
                        
                        <div className="form-input">
                            <textarea type="text" className="form-control" placeholder="Insert your query here"
                            value={this.state.enquiry}
                            onChange={this.onChangeEnquiry} />
                        </div>

                        <div className="form-btn">
                            <input type="submit"
                            value="Submit"
                            className="enq-btn" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

