import React from 'react';
import './App.css';


//import FindADoctorNav from '../components/findADoctorNav/navBar';
//import LandingPage from '../components/Landing-page/Landing-Page';
//import LoginPage from '../components/LoginPage/loginpage';
//import SignUp from '../components/SignupPage/signup';
// import Navbar from '../components/navbar/navbar';
// import DoctorsProfile from '../components/DoctorsProfile/DoctorsProfile';
import HomePage from '../components/homePage/HomePage';
//import Symptoms from '../components/Symptoms/Symptoms';
//import BookDoc from '../components/bookDoc/BookDoc';
// import FindADoctor from '../components/find-a-doc/find-a-doctor';
// import SelectSearchedDoctor from '../components/selectSearchDoctors/select-Search-Doctor';

  
class App extends React.Component{
    render(){
            return(
           <HomePage />
            )
    }
}

export default App;

