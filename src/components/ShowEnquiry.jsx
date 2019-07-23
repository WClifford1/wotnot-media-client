import React, { Component } from 'react'


export default class ShowEnquiry extends Component {

    state = {
        read: this.props.isRead
    }

    render() {
        return (
                <div className="container" id={this.state.read ? "read" : ""}>
                    <p className="toprow"><span className="heading">Name</span>: {this.props.name}</p>
                    <p className="toprow"><span className="heading">Email</span>: {this.props.email}</p>
                    <p className="toprow"><span className="heading">Phone</span>: {this.props.phoneNumber ? this.props.phoneNumber : "n/a"}</p>
                    <p className="toprow"><span className="heading">Date</span>: {this.props.date}</p>
                    <p onClick={() => this.props.handleRead(this.props.id, !this.state.read)} className="toprow">Mark read</p>
                    <p onClick={() => this.props.handleDelete(this.props.id)} className="toprow">DELETE</p>                        
                    <p id="enquiry"><span className="heading">Enquiry</span>: {this.props.enquiry}</p>
            </div>
        )
    }
}
