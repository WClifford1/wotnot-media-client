import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'


export default class Login extends Component {


    constructor(props) {

        super(props)

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            account: {
                name: '',
                password: ''
            },
        login: false
        }
    }

    // function sets the target of the input boxes to the state
    onChange = e => {
        const account = { ...this.state.account }
        account[e.currentTarget.name] = e.currentTarget.value
        this.setState({ account })
    }


    onSubmit(e) {
        e.preventDefault()

        // newUser variable represents the state
        const newUser = {
            name: this.state.account.name,
            password: this.state.account.password
        }

        // Send the newUser to the enquiry post route
        // Name and password are authorized on the backend
        // If successful a token will be generated and saved into localstorage
        axios.post('https://wotnotmedia.herokuapp.com/api/auth', newUser)
            .then(res =>
                localStorage.setItem('token', res.data))
            .then(res =>
            this.setState({
                account: {
                    name: '',
                    password: ''
                }
            })
        )
    }


    render() {
       
        return (
            <React.Fragment>
  

            <div className="staff-cont">
                <div className="staff-title">
                    <h1>Login</h1>
                </div>

                <div className="staff-form">
                    <form onSubmit={this.onSubmit}>
                        <div className="staff-text">
                            <label>Name</label>
                        </div>
                        <div className="staff-input">
                            <input name="name" onChange={this.onChange} autoFocus value={this.state.account.name} type="text" placeholder="Insert name here" />
                        </div>
                        <div className="staff-text">
                            <label>Password</label>
                        </div>
                        <div className="staff-input">
                            <input value={this.state.account.password} onChange={this.onChange} name="password" type="password" placeholder="Insert password here" />
                        </div>
                        <div className="staff-btn">
                            <input type="submit" value="Submit" className="staff-sub" />
                        </div>
                    </form>
                </div>
            </div>
            </React.Fragment>
        )
    }
}