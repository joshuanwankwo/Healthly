import React from 'react';
import './find-a-doctor-nav.css';



class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div style={this.props.style.navWrapper} >
            <div style={this.props.style.logo}>
                <img src="./Healthie-Logo.svg" id="fdoc-logo"/>
            </div>
            <div style={this.props.style.navigation}>
                <a href="#" style={this.props.style.link}>Home</a>
                <a href="#" style={this.props.style.link}>About Us</a>
                <a href="#" style={this.props.style.link}>Service</a>
                <a href="#" style={this.props.style.link}>Blog</a>
                <i class="fas fa-user-circle"></i>
            </div>
        </div>);
    }
}

export default NavBar;




import React, { Component } from 'react';
import './select-Search-Doctor.css';
import NavBar from '../find-a-doctor-Nav/navBar';

class selectSearchedDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="search">
            <NavBar style={style}/>
        </div> );
    }
}
 

let style ={
    navWrapper: {
        padding: "1em",
        height: "80px",
        display: "flex",
        flexWrap: "wrap"
    },

    navigation: {
        display: "flex",
        flex: "1",
        alignSelf: "center",
        justifyContent: "flex-end",
        top: "27px",
        marginRight: "2%",
        alignItems: "center",
        color: "#4290c9"
    },


    logo:{
        flex: "1",
        alignSelf: "center"
    },


    link:{
        color: "#4290c9",
        fontSize: "15px",
        paddingLeft: "20px",
        paddingright: "20px",
        fontWeight: "normal",
        lineHeight: "22px",
        fontFamily: "'Noto Sans'",




    },

    'link:hover':{
        textDecoration: "none",
        backgroundColor: "#4290c9",
        color:  "white",
        borderRadius: "3px",
    },
}

export default selectSearchedDoctor;