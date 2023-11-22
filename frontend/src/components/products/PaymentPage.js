import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './PaymentPage.css'; 
import '../home/Header';
import '../home/Footer';
import Header from '../home/Header';
import Footer from '../home/Footer';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderDetails = location.state ? location.state.orderDetails : null;

  const [userAddress, setUserAddress] = useState({
    street: '',
    city: '',
    state: '',
    country: 'India',
    pincode: '',
  });


  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setUserAddress({
      ...userAddress,
      [name]: value,
    });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('proceed-payment', { state: { orderDetails, userAddress } });
    console.log("Submit")

    
  };

  return (
    <>
    <Header/>
    <Container className='text-center'>
      <div className='heading'>
      <h1>Confirm your Order</h1>
      </div>
      {orderDetails ? (
        <div className='column-layout mt-5'>
          <div className='column'>
           
            <img src={`data:image/jpeg;base64,${orderDetails.productPhoto}`} alt={`Order ${orderDetails.photo}`} />
            </div>
          <div className='column'>
            
            <p>Product: {orderDetails.productName}</p>
            <p>Price: {orderDetails.productPrice}</p>
            <p>Discount: {orderDetails.productDiscount}</p>
            <p>Description: {orderDetails.productDescription}</p>
            <p>Category: {orderDetails.productCategory}</p>
          </div>
          <div className='column'>
            {/* Form for user address and payment method */}
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for='street'>Street Address:</Label>
                <Input type='text' id='street' name='street' value={userAddress.street} onChange={handleAddressChange} />
              </FormGroup>
              <FormGroup>
                <Label for='city'>City:</Label>
                <Input type='text' id='city' name='city' value={userAddress.city} onChange={handleAddressChange} />
              </FormGroup>
              <FormGroup>
                <Label for='state'>State:</Label>
                <Input type='text' id='state' name='state' value={userAddress.state} onChange={handleAddressChange} />
              </FormGroup>
              <FormGroup>
                <Label for='pincode'>Pincode:</Label>
                <Input type='text' id='pincode' name='pincode' value={userAddress.pincode} onChange={handleAddressChange} />
              </FormGroup>
              <Button
                color='primary'
                type='submit'
              > Proceed To Payment </Button>
              
            </Form>
          </div>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
    </Container>
    <Footer/>
    </>
  );
};

export default PaymentPage;
