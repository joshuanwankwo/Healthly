import React from 'react';
import './BookDoc.css';
import NavBar from '../NavBar/NavBar';

function BookDoc(props) {
    return (
        <div id="bookDoc-con">
            <NavBar />
            <div id="bookDoc">
                <div id="bookDoc-pic-con"></div>
                <form id="bookDoc-form">
                    <div id="bookDoc-location-input">
                       <input placeholder="New Heaven Hospital, Enugu" type="text"/>
                       <img src="./dropdown.svg"/>
                    </div>
                    <div id="bookDoc-date-input">
                       <input  />
                       <img src="./calender.svg"/>
                       <input />
                       <img src="./dropdown.svg"/>
                    </div>

                    <div id="bookDoc-visit-input">
                       <input placeholder="Have you Visited this Hospital before?" type="text"/>
                       <button id="bookDoc-input-button-1">Yes</button>
                       <button id="bookDoc-input-button-2">No</button>
                    </div>
                    <div id="bookDoc-location-input">
                       <input placeholder="Enter Your Name" type="text"/>
                    </div>

                    <div id="bookDoc-location-input">
                       <input  placeholder="Select your Age"/>
                       <input placeholder="Enter Your Name" type="text"/>
                    </div>

                    <div id="bookDoc-location-input">
                       <input placeholder="Enter Your Email Address" type="text"/>
                    </div>

                    <div id="bookDoc-date-input">
                       <input  placeholder="Select your Age"/>
                       <input placeholder="Gender"/>
                       <img src="./dropdown.svg"/>
                    </div>

                    <div id="bookDoc-submit">
                        <button>Submit</button>
                      
                    </div>
                    
                </form>
            </div>

        </div>

    )
}
export default BookDoc;