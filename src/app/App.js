import React from 'react';
import './App.css';
import FindADoctor from '../components/find-a-doc/find-a-doctor';
import SelectSearchedDoctor from '../components/selectSearchDoctors/select-Search-Doctor';

class App extends React.Component{
    render(){
        return (
            <div>
                <SelectSearchedDoctor />
            </div>
        )
    }
}



  
  
export default App;
