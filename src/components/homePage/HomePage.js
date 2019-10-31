import React from 'react';
import HomePageMain from './HomePageMain/HomePageMain';
import About from './About/About'
import Services from './Services/Services'
import Footer from './Footer/Footer';
import Solution from './Solutions/Solution'
import Team from './Team/Team';

    function HomePage(prop){
    return (
     
      <div className="home-con">
          <HomePageMain />
         <About /> 
          <Services /> 
         <Solution />
         <Team />
          <Footer />
      </div>
    )
    }

    export default HomePage;
