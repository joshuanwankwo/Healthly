import React from 'react';
import './App.css';
import LandingPage from '../components/Landing-page/Landing-Page';
import LoginPage from '../components/LoginPage/loginpage';
import SignUp from '../components/SignupPage/signup';
import Navbar from '../components/navbar/navbar';
import DoctorsProfile from '../components/DoctorsProfile/DoctorsProfile'
import HomePage from '../components/homePage/HomePage'
import Symptoms from '../components/Symptoms/Symptoms'
import BookDoc from '../components/bookDoc/BookDoc'
import FindADoctor from '../components/find-a-doc/find-a-doctor';
import PatientProfile from '../components/PatientProfile/PatientProfile';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import NavBar from '../components/homePage/NavBar/NavBar';

  
class App extends React.Component{
    render(){
        return ( 
        <div>
            {/* <BrowserRouter>

                <Switch>
                    <Route path="/" component={LandingPage} exact/>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/homepage" component={HomePage}/>
                </Switch>

            </BrowserRouter> */}

            {/* <FindADoctor/> */}

            <PatientProfile/>



        </div>
    )}
}

export default App;

