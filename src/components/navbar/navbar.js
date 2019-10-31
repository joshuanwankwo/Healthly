import React from 'react';
import './navbar.css'
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        
    this.state = {
      Navlinks: [{link: "Home", id:1}, {link: "About", id:2}, {link: "Services", id:3}, {link: "Blog", id:4}]
    };

}
    


    render(){

        const Navitems = this.state.Navlinks.map((item)=>(
            <div key={item.id}>{item.link}</div>
      ));

        return (
            <div className="landing-Navbody" >

                   <div className="Logo"> <img src="./Healthie-Logo.png" /> </div> 

                        <div className="spacer"></div>

                    <div className="navitems"> {Navitems} </div>

                        <div className="spacer"></div>

                {/* <Router> */}
                    <div className="Navbtn-group">
                        <button className="nav-btn nav-btn1"><Link to="/login">Login</Link></button>

                        <button className="nav-btn 2 nav-btn2"> <Link to="/signup">Sign Up</Link> </button>
                    </div>
                {/* </Router> */}


                        {/* <Switch>

                            <Route path="/signup" component={SignUp} />

                            

                        </Switch> */}
            </div>
        )
    }
}


export default Navbar;