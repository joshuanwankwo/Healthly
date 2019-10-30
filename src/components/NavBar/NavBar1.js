import React from 'react';
import "./NavBar.css"

class NavBar1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <nav id="nav1-con">
              <img src="./logo.svg"/>
                <ul id="nav1-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li> <i class="fas fa-user-circle"></i></li>

                </ul>
            </nav>

        )
    }
}

export default NavBar1;