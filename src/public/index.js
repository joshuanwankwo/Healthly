import React from "react";
import ReactDOM from "react-dom";
import App from '../app/App';


function Component(props){
    return <App />
}

ReactDOM.render(<Component />,document.getElementById('root'))
