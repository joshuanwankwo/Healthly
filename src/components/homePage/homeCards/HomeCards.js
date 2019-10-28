import React from 'react';
import './HomeCards.css';

function HomeCards (props){
    return (
        <div className="home-cards-con">

            <div className="home-card">
                <p>Meet a Doctor</p>
                <img src="./doctor1.svg"/>
            </div>

            <div className="home-card">
                <p>Nearby Pharmacy</p>
                <img src="./pharmacy.svg"/>
            </div >

            <div className="home-card"> 
                <p>First Aid</p>
                <img src="./FirstAid.svg"/>
            </div>

            <div className="home-card">
                <p>Nearby Hospitals</p>
                <img src="./doctor1.svg"/>
            </div>

        </div>
    )
}
export default HomeCards