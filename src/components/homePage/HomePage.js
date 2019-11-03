import React from 'react';
import NavBar from './NavBar/NavBar';
import HomeCards from "././homeCards/HomeCards"
import About from './About/About'
import Services from './Services/Services'
import Footer from './Footer/Footer';

    function HomePage(){
    return (
     
      <div className="home-con">
         <NavBar />
         <HomeCards/>
         <About />
         <Services />
         <Footer />
      </div>
    )
    }

    export default HomePage;
