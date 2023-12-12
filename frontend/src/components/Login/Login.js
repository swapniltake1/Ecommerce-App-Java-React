import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Login.css';
import Header from '../home/Header';
import Footer from '../home/Footer';
import axios from 'axios';
import UserContext from '../user/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [failMessage, setFailMessage] = useState('');

  const { setUserId, setUserName, setUserEmail, setUserPhone, setUserPassword } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/shoppinghub/validateuser', null, {
        params: {
          email: email,
          password: password,
        },
      });

      if (response.status === 200) {
        setUserId(response.data.id);
        setUserName(response.data.name);
        setUserEmail(response.data.email);
        setUserPhone(response.data.phone);
        setUserPassword(response.data.password);
        console.log(response.data.name);
        console.log(response);
        setSuccessMessage('User logged in successfully');
        setTimeout(() => {
          navigate('/home'); // Use navigate to go to the home route
        }, 1000); // Redirect after 1 second
      }
    } catch (error) {
      setFailMessage('Something went wrong');
      console.error('Error submitting form data: ', error);
    }
  };

  return (
    <>
      <Header />
      <Container className="login-container">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Form className="login-form" onSubmit={handleLogin}>
              <h2 className="mb-4">Login to Your Account</h2>
              {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
              {failMessage && <p style={{ color: 'red' }}>{failMessage}</p>}
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
              <div className="lgn-btn">
                <Button type="submit" color="primary" className="btn">
                  Login
                </Button>
              </div>
              <div className='mt-2'>
                <Link to='#'> Forgot Password</Link>
                <br />
                <Link to='/signup' >Create new account</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
