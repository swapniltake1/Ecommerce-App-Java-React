// PaymentPage.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './PaymentPage.css'; // Import your custom CSS file for styling

const PaymentPage = ({ location }) => {
  const orderDetails = location.state ? location.state.orderDetails : null;

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
    // Add more fields as needed
  });

  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing logic here
    // Redirect or show success message based on payment result
  };

  return (
    <Container>
      <div className="payment-container">
        <h1>Order Summary</h1>
        <hr />
        <div className="order-details">
          <h2>Order Details</h2>
          {orderDetails ? (
            <div>
              <p>Product Name: {orderDetails.productName}</p>
              {/* Display other order details */}
              <p>Total Amount: ${orderDetails.totalPrice}</p>
            </div>
          ) : (
            <p>No order details available.</p>
          )}
        </div>

        <div className="user-information">
          <h2>User Information</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={userData.name}
                onChange={handleUserDataChange}
              />
            </Form.Group>
            {/* Add other user data fields */}
            <Button variant="primary" type="submit">
              Proceed to Payment
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default PaymentPage;
