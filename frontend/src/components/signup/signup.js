import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './signup.css'; // Import the CSS file for your custom styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // navigation of page 

const Registration = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [failMessage, setFailMessage] = useState('');

  const navigate = useNavigate(); 
  

  const handleRegistration = (e) => {
    e.preventDefault();
  
    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };
  
    axios.post('http://localhost:8080/techhub/createuser', data)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          setSuccessMessage('User created successfully');
          setTimeout(() => {
            navigate('/login');  // Use navigate to go to the login route
          }, 2000);             // Redirect after 2 seconds 
        }
      })
      .catch(error => {
        setFailMessage('Something went wrong');
        console.error('Error submitting form data: ', error);
      });
  };

  return (
    <div className="login-bg">
      <Container className="login-container">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Form className="login-form" onSubmit={handleRegistration}>
              <h2 className="mb-4">Register an Account</h2>
              {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
              {failMessage && <p style={{ color: 'red' }}>{failMessage}</p>}
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormGroup>
              <Button color="primary" className="btn-lg btn-block" type="submit">Register</Button> {/* Add type="submit" */}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
