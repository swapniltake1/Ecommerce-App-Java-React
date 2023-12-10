import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'; // Import necessary components from reactstrap
import { useLocation, useNavigate } from 'react-router-dom';
import googlePayImage from '../images/googlePayImage.png'; // Import images for payment options
import phonePayImage from '../images/phonepay.png';
import paytmImage from '../images/paytm.png';
import codImage from '../images/cod.png';
import creditCardImage from '../images/creditcard.jpg';
import applepay from '../images/apple.jpg';
import paypal from '../images/paypal.png';
import emi from '../images/emi.jpg';
import Header from '../home/Header';
import Footer from '../home/Footer';

const PaymentOptions = () => {
  const location = useLocation();
  const orderDetails = location.state ? location.state.orderDetails : null;
  const userAddress = location.state ? location.state.userAddress : null;
  console.log(orderDetails, userAddress);
  const navigate = useNavigate();
  const paymentOptions = [
    { name: 'Google Pay', image: googlePayImage },
    { name: 'PhonePe', image: phonePayImage },
    { name: 'Paytm', image: paytmImage },
    { name: 'Cash on Delivery', image: codImage },
    { name: 'Credit Card', image: creditCardImage },
    { name: 'Apple Pay', image: applepay },
    { name: 'PayPal', image: paypal },
    { name: 'Easy EMI', image: emi },
  ];

  const handleCardClick = (method) => {
    console.log('Clicked Method:', method);
    let methodName = method.name;
    if (methodName === 'Cash on Delivery') {
      
      navigate('/payment/success');
    } else {
      
      navigate('/payment/proceed-payment/dopayment', { state: { orderDetails, userAddress, methodName } });
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h1 className="mt-4 mb-4">Select Your Payment Option</h1>
        <Row xs="1" sm="2" md="3" lg="4">
          {paymentOptions.map((method, index) => (
            <Col key={index}>
              <Card className="mb-3" onClick={() => handleCardClick(method)}>
                <CardImg top width="100%" src={method.image} alt={method.name} />
                <CardBody>
                  <CardTitle tag="h5">{method.name}</CardTitle>
                  <CardText>Click to pay</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PaymentOptions;