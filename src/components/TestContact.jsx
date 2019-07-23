import React from 'react'

export default function TestContact() {
    return (
        <div className="wrapper">
            <div className="navt">
                <div className="left">
                    <ul>
                        <li><a href="#"></a>Business</li>
                        <li><a href="#"></a>Jobs</li>
                        <li><a href="#"></a>Counselling</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li><a href="#"></a>Log In</li>
                        <li><a href="#"></a>Sign In</li>
                    </ul>
                </div>
            </div>

            <div className="header">
                <h1>Contact Us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsam deserunt expedita fugiat neque, beatae assumenda sunt, omnis suscipit iste architecto voluptate sequi velit placeat possimus alias vitae quibusdam recusandae!</p>
            </div>

            <div className="form">
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="E-Mail" />
                    <input type="text" id="msg" placeholder="Message" />
                </form>
                <button>Let's Go</button>
            </div>
        </div>
    )
}
