import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import logo from '../images/logo1.png'


export default class Footer extends Component {


    state = {}
    

    componentDidMount() {
        try {
        const jwt = localStorage.getItem("token")
        const user = jwtDecode(jwt)
        this.setState( { user })
        } catch(err) {}
    }

    logout() {
        localStorage.removeItem('token')
        window.location = '/'
    }


    render() {
    return (
        <div>
            <div className="footer-cont">
                <div className="footer-logo">
                <h2 className="logo"><Link to="/"><img src={logo} className="logo-inner" alt="hoohaa" /></Link></h2>
                </div>
                <div className="footer-res1">
                    <div className="footer-title1">
                        <h3>Services</h3>
                    </div>
                    <div className="footer-links1">
                        <li><Link to="/video">Video Content</Link></li>
                        <li><Link to="/web">Web Design</Link></li>
                        <li><Link to="/print">Printing</Link></li>
                    </div>
                </div>

                <div className="footer-res1">
                    <div className="footer-title1">
                        <h3>Information</h3>
                    </div>
                    <div className="footer-links1">
                    <li><Link to="/contact">Contact Information</Link></li>
                        <li><Link to="/Faq">FAQ</Link></li>
                    </div>
                </div>

                

                <div className="footer-res2">

                    <div className="footer-title2">
                        <h3>Contract</h3>
                    </div>

                    <div className="footer-links2">
                        <li><Link to="termsandconditions">Terms & Conditions</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                            {!this.state.user &&
                            <li><Link to="/login">Staff Portal</Link></li>}
                            {this.state.user &&
                            <React.Fragment><Link to="/dashboard"><li>DASHBOARD</li></Link>
                            <li onClick={this.logout}>LOGOUT</li></React.Fragment>
                            }
                    </div>
                </div>
                </div>
                </div>

)} }