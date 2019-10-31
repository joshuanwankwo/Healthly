import React from 'react';
import "./NavBar.css"

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div id="navWrapper">
                    <div className="fdoc-logo">
                        <img src="./Healthie-Logo2.svg" id="fdoc-logo" />
                    </div>
                    <div className="fdoc-navigation">
                        <i class="fas fa-user-circle"></i>
                        <i class="fas fa-bell"></i>
                        <a href="#" >Appointment</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default NavBar;