import React from 'react';
import Form from 'react-bootstrap/Form';
import './loginpage.css';

function LoginPage() {
    
    return <div className="LoginPage-parent">

        <Form className="form-body">

        
        <p className="login-P">We provide the best health care service</p>
        

            <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="login-Email-form-control" type="email"  /> 
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="login-password-form-control" type="password" />
            </Form.Group>


            <button className="Login-Button btn1">Login</button>

            <button className="Login-Button btn2">Sign Up</button>

        </Form>

    </div>
              

;}

export default LoginPage;