import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Login.css'; // Create a CSS file for your custom styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
  };

  return (
    <div className="login-bg">
      <Container className="login-container">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Form className="login-form" onSubmit={handleLogin}>
              <h2 className="mb-4">Login to Your Account</h2>
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
              <Button color="primary" className="btn-lg btn-block">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
