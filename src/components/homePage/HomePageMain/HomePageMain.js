import React from 'react';
import "./HomePageMain.css";
import  HomeCards from './homeCards/HomeCards'

class HomePageMain extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render() {
        return (
            <div id="homeMain-con">
                
                <section id="home-intro">
                    <p>Every day we bring hope </p>
                    <p>and smile to Patient we serve</p>
                </section>
                 <HomeCards />
            </div>
        )
    }
}

export default HomePageMain;