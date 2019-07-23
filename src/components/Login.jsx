import React, { Component } from 'react'
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
            }
        }
    }

    // function sets the target of the input boxes to the state
    onChange = e => {
        const account = {...this.state.account}
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
        axios.post('http://localhost:4000/api/auth', newUser)
            .then(res => 
            localStorage.setItem('token', res.data))
            .then(res => 
                window.location.replace('/dashboard'))
        this.setState({
            account: {
            name: '',
            password: ''
            }
        })
    }


    render() {
        return (
            <div>
                <h1>Login</h1>    
                <form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input name="name" onChange={this.onChange} autoFocus value={this.state.account.name} type="text" />
                
                    <label>Password</label>
                    <input value={this.state.account.password} onChange={this.onChange} name="password" type="password" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}