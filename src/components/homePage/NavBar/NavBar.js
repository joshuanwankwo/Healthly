import React from 'react';
import "./NavBar.css"

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render() {
        //console.log(this.props.style.li)
        // let navPops = this.props.style ? { style: this.props.style.symptomsNav} : {};
        // console.log({navPops})
        return (
            <div>
                
                <section id="home-nav"  >
                    <div id="home-nav-items" >
                        <img src="./logo.svg" id="logo" />
                        <ul >
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li> <i class="fas fa-user-circle"></i></li>

                        </ul>
                    </div>

                </section>

                <section id="home-intro">
                    <p>Every day we bring hope </p>
                    <p>and smile to Patient we serve</p>
                </section>

            </div>
        )
    }
}

export default NavBar;