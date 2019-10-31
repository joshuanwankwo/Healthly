import React from 'react';
import './signup.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavBar from '../homePage/NavBar/NavBar'

function SignUp(props) {

    return <div className="LoginPage-parent">
        <Form className="signup-form">
        <p className="signup-p">
            Create Patient Account
        </p>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="signup-label">First Name</Form.Label>
            <Form.Control type="Text" className="signup-FormGroup" />
          </Form.Group>
      
          <Form.Group  as={Col} controlId="formGridPassword">
            <Form.Label className="signup-label">Last Name</Form.Label>
            <Form.Control type="Text" className="signup-FormGroup"  />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="signup-label">Email</Form.Label>
            <Form.Control type="email" className="signup-FormGroup" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="signup-label">Phone Number</Form.Label>
            <Form.Control type="Number" className="signup-FormGroup" />
          </Form.Group>
        </Form.Row>
        <Form.Row>      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="signup-label">Password</Form.Label>
            <Form.Control type="password" className="signup-FormGroup" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="signup-label">Comfirm Password</Form.Label>
            <Form.Control type="password" className="signup-FormGroup" />
          </Form.Group>
        </Form.Row>
      
        <Form.Group id="formGridCheckbox">
          <Form.Check className="signup-checkBox" type="checkbox" label="I agree to the terms & conditions" />
        </Form.Group>
      
        <Button className="signUp-btn" type="submit">
          Sign Up
        </Button>
      </Form>

    </div>
              

;}

export default SignUp;