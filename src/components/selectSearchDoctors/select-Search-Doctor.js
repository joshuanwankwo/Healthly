import React, { Component } from 'react';
import './select-Search-Doctor.css';

class selectSearchedDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="searchedDoctorsContainer">
                <div id="navWrapper">
                    <div className="fdoc-logo">
                        <img src="./Healthie-Logo2.svg" id="fdoc-logo" />
                    </div>
                    <div className="fdoc-navigation">
                        <a href="#" >Home</a>
                        <a href="#" >About Us</a>
                        <a href="#" >Service</a>
                        <a href="#" >Blog</a>
                        <i class="fas fa-user-circle"></i>
                    </div>
                </div>
                <div id="relatedSearch">
                    <div id="searchBox">
                    <input type="search" placeholder="ifedili"/>
                    <i class="fas fa-search"></i>
                    </div>

                    <section id="result-container">
                        <h1>Related Search</h1>
                    </section>
                </div>

            </div>

        );
    }
}




export default selectSearchedDoctor;