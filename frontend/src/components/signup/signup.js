import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import './signup.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Header from '../home/Header';
import Footer from '../home/Footer';

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
  
    axios.post('http://localhost:8081/shoppinghub/createuser', data)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          setSuccessMessage('Account created successfully');
          setTimeout(() => {
            navigate('/login');  
          }, 3000);             
        }
      })
      .catch(error => {
        setFailMessage('Something went wrong');
        console.error('Error submitting form data: ', error);
      });
  };

  return (
    <>
    <Header />
    <div className="signup-bg">
    <Container className="signup-container">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <Card className="signup-form">
            <CardBody>
              <h2>Register an Account</h2>
              {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
              {failMessage && <p style={{ color: 'red' }}>{failMessage}</p>}
              <Form onSubmit={handleRegistration}>
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
              <div className='text-center'>
                    <Button color="primary" className="btn-lg" type="submit">Register</Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
    </>
  );
};

export default Registration;
