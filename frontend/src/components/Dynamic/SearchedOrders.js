import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import Header from '../home/Header';
import Footer from '../home/Footer';

const OrdersPage = ({ orders: propOrders }) => {
  const location = useLocation();
  const fetchedOrders = location.state?.orders || [];

  const ordersToDisplay = fetchedOrders.length > 0 ? fetchedOrders : propOrders || [];

  return (
    <>
    <Header />
    <Container>
      <h1 className="mt-4 mb-4">Available Products of our Sellers</h1>
      <Row xs="1" sm="2" md="3" lg="4">
        {ordersToDisplay && ordersToDisplay.length > 0 ? (
          ordersToDisplay.map((order, index) => (
            <Col key={index}>
              <Card className="mb-3">
                <CardImg top width="100%" src={`data:image/jpeg;base64,${order.productPhoto}`} alt={`Order ${order.photo}`} />
                <CardBody>
                  <CardTitle tag="h5">{order.productName}</CardTitle>
                  <CardText>Discount: {order.productDiscount}</CardText>
                  <CardText>Price: {order.productPrice}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <Card className="mb-3">
              <CardBody>
                <CardText>No orders available</CardText>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
    <Footer />
    </>
  );
};

export default OrdersPage;
