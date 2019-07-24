import React, { Component } from 'react'
import axios from 'axios'
import ShowEnquiry from './ShowEnquiry';

export default class Dashboard extends Component {

    state = {
        enquiries: []
    }

    componentDidMount() {
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token')
        axios.get('http://localhost:4000/api/enquiries')
        .then(res => {
            this.setState({ enquiries: res.data})
        })
    }

    handleDelete = async enquiryId => {
        if (window.confirm('Are you sure you wish to delete this item?')) {
        await axios.delete('http://localhost:4000/api/enquiries/' + enquiryId)
        this.setState({ enquiries: this.state.enquiries.filter(x => x._id !== enquiryId) })
    }}

    handleRead = async (enquiryId, read) => {
        const id = { isRead: read }
        await axios.put('http://localhost:4000/api/enquiries/' + enquiryId, id)
        window.location.reload()
    }

    render() {
        return (
            <div>
                {this.state.enquiries.map(enquiry => 
                    <ShowEnquiry
                        key={enquiry._id}
                        isRead={enquiry.isRead}
                        id={enquiry._id}
                        name={enquiry.name}
                        email={enquiry.email}
                        phoneNumber={enquiry.phoneNumber}
                        enquiry={enquiry.enquiry}
                        handleDelete={this.handleDelete}
                        handleRead={this.handleRead}
                    />)}
            </div>
        )
    }
}
