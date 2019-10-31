import React, { Component } from 'react';
import './userProfileSetting.css';
import NavBar from '../NavBar/NavBar';
import Sidenav from '../sideNav/sideNav';

class UserSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar />
                <div id='container'>
                <Sidenav />
                <div id='userSettings'>
                    GOD
                </div>
                </div>
            </div>
         );
    }
}
 
export default UserSetting;