import React, { Component } from 'react'
import axios from 'axios'
import ShowEnquiry from './ShowEnquiry';
// The dashboard is what the admin can view after loggin in.
// It displays all enquiries which have been posted through the enquiry form in seperate grid boxes.
// The admin has the ability to mark enquiries as read, and delete enquiries.


export default class Dashboard extends Component {

    state = {
        enquiries: []
    }

    // Check that the user has a current valid jwt
    // Get all enquires from the database
    // Set the enquries as the state
    componentDidMount() {
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token')
        axios.get('https://wotnotmedia.herokuapp.com/api/enquiries')
        .then(res => {
            this.setState({ enquiries: res.data})
        })
    }


    // To delete enquiry send through the enquiry id as a param
    // Send an axios delete request
    // Reset the state without the deleted item
    handleDelete = async enquiryId => {
        if (window.confirm('Are you sure you wish to delete this item?')) {
        await axios.delete('https://wotnotmedia.herokuapp.com/api/enquiries/' + enquiryId)
        this.setState({ enquiries: this.state.enquiries.filter(x => x._id !== enquiryId) })
    }}

    // To mark as read send through the enquiry id as a param
    // Axios PUT request to update the 'isRead' property of the enquiry
    // Refresh the state.
    // When isRead is true the grid-box background color will change to green.
    handleRead = async (enquiryId, read) => {
        const id = { isRead: read }
        await axios.put('https://wotnotmedia.herokuapp.com/api/enquiries/' + enquiryId, id)
        this.setState({ enquiries : [] })
        axios.get('https://wotnotmedia.herokuapp.com/api/enquiries')
        .then(res => {
            this.setState({ enquiries: res.data})
        })
    }
        
        


    render() {
        return (
            <div>
                {/* Map through the enquiries and render a ShowEnquiry component for each one */}
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
