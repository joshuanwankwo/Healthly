import React from 'react';
import './Landing-Page.css'
import Button from '../../components/Button/Button'
import NavBar from '../NavBar/NavBar';

function LandingPage() {
    
    return <div className="LandingPage-parent ">

                <NavBar />

        <h1 className="h1-tag">
            We are comitted to your health
        </h1>

        <p className="p-tag">
            Since the first day of operation Healthie, our team has been
            focused on building a high-quality healthcare services
        </p>


        {/* <div>
                <Button bg={'#4290C9'} buttonName={`Get Started`} width={`290px`} height={`59px`} position={`absolute`} top={`-105%`} left={`3%`} /> 
        </div> */}

        {/* <button className="button">
            Get Started <img className="arrow" src="./vector.png" width="10px" height="15px"  />
        </button> */}

        <img className="doctors-img" src="./img.png" width='550px' height='650px' />

    </div>

;}



  export default LandingPage;