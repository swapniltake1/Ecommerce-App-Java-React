import {React, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import AddToCartBtn from './AddToCartBtn';
import Header from '../home/Header';
import Footer from '../home/Footer';
import BuyButton from './BuyButton';
import './SearchedOrder.css';

const OrderCard = ({ order }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div onClick={toggleModal}>
      <Card className="mb-3">
        <CardImg top width="100%" src={`data:image/jpeg;base64,${order.productPhoto}`} alt={`Order ${order.photo}`} />
        <CardBody>
          <CardTitle tag="h5">{order.productName}</CardTitle>
          <CardText>{order.productDescription}</CardText>
          <CardText>Discount: {order.productDiscount}</CardText>
          <CardText>Price: {order.productPrice}</CardText>
        </CardBody>
      </Card>
      <Modal isOpen={showModal} toggle={toggleModal} className='open-card'>
        <ModalHeader toggle={toggleModal} >{order.productName}</ModalHeader>
        <ModalBody>
          <CardImg className='card-img' src={`data:image/jpeg;base64,${order.productPhoto}`} alt={`Order ${order.photo}`} />
          <CardText>Discount: {order.productDiscount}%</CardText>
          <CardText>Price: {order.productPrice}</CardText>
          <CardText>{order.productDescription}</CardText>
        </ModalBody>
        <ModalFooter className='btn'>
        <AddToCartBtn product={order} />
        <BuyButton orderId={order.productId} />
          <Button style={{backgroundColor:'red'}} onClick={toggleModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const OrdersPage = ({ orders: propOrders }) => {
 // const [showModal, setShowModal] = useState(false);
 // const toggleModal = () => setShowModal(!showModal);
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
              <Col key={index} className="orders-col">
                <OrderCard order={order} />
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
