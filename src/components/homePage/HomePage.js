import React from 'react';
import HomePageMain from './HomePageMain/HomePageMain';
import NavBar from './NavBar/NavBar';
import HomeCards from "././homeCards/HomeCards"
import About from './About/About'
import Services from './Services/Services'
import Footer from './Footer/Footer';
import Solution from './Solutions/Solution'
import Team from './Team/Team';

    function HomePage(){
    return (
     
      <div className="home-con">
        <HomePageMain />
         <About /> 
         <Services /> 
         <Solution />
         <Team />
         <Footer />
         <NavBar />
         <HomeCards/>
         <About />
         <Services />
         <Footer />
      </div>
    )
    }

    export default HomePage;
