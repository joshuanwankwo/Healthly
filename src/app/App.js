import React from 'react';
import './App.css';


//import FindADoctorNav from '../components/findADoctorNav/navBar';
//import LandingPage from '../components/Landing-page/Landing-Page';
//import LoginPage from '../components/LoginPage/loginpage';
import SignUp from '../components/SignupPage/signup';
import DoctorsProfile from '../components/DoctorsProfile/DoctorsProfile';
import HomePage from '../components/homePage/HomePage';
import Symptoms from '../components/Symptoms/Symptoms';
import BookDoc from '../components/bookDoc/BookDoc';
import FindADoctor from '../components/find-a-doc/find-a-doctor';
import SelectSearchedDoctor from '../components/selectSearchDoctors/select-Search-Doctor';
import UserDashboard from '../components/userDashBoard/userDasBoard';
import UserSetting from '../components/userProfileSetting/userProfileSetting';
import NavBar from '../components/homePage/NavBar/NavBar';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import PatientProfile from '../components/PatientProfile/PatientProfile';



  
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 

                <div>
                     <BrowserRouter>
        
                        <Switch>
                            <Route path="/" component={LandingPage} exact/>
                            <Route path="/signup" component={SignUp} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/homepage" component={HomePage}/>
                        </Switch>
        
                    </BrowserRouter> 
        
                     <FindADoctor/> 
        
                    <PatientProfile/>
        
        
        
                </div>
            )
        }
        
    
    }
 
export default App;

