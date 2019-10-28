import React from 'react';
import './navbar.css'

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        // change code below this line
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

                    <div className="Navbtn-group">
                        <button className="nav-btn nav-btn1">Login</button>
                        <button className="nav-btn 2 nav-btn2">Sign Up</button>
                    </div>

            </div>
        )
    }
}


export default Navbar;