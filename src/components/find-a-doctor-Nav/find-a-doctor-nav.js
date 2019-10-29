import React from 'react';
import './find-a-doctor-nav.css';

class FindADoctorNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div id="fdoc-navWrapper">
            <div className="fdoc-logo">
                <img src="./Healthie-Logo.svg" id="fdoc-logo"/>
            </div>
            <div className="fdoc-navigation">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Service</a>
                <a href="#">Blog</a>
                <i class="fas fa-user-circle"></i>
            </div>
        </div>);
    }
}

export default FindADoctorNav;