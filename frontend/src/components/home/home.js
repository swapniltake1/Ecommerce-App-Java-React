import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Card, Button, Container, Row, Col, Carousel } from 'react-bootstrap';
import SeeAllProducts from '../products/SeeAllProducts';
import '../home/home.css';

const Home = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  return (
    <div>
      <Header />
      <Container className="my-5">

        <Row className="mb-4">
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="https://picsum.photos/800/200?random=1"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="https://picsum.photos/800/200?random=2"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="https://picsum.photos/800/200?random=3"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="https://picsum.photos/800/200?random=4"
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h2>Discounts and Offers</h2>
            <p>Discover a world of unbeatable offers and discounts at our site, where we bring you the best deals from around the globe. 
              With a vast array of products and services, we guarantee you'll find the most irresistible offers worldwide. 
              Don't miss out on this opportunity to explore and indulge in the ultimate shopping experience. 
              Try it once, and you'll be coming back for more!</p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>80% Off</Card.Title>
                <Card.Text>
                  Get up to 80% off on selected items. Limited time offer!
                </Card.Text>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>70% Off</Card.Title>
                <Card.Text>
                  Get up to 70% off on selected items. Limited time offer!
                </Card.Text>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>60% Off</Card.Title>
                <Card.Text>
                  Get up to 60% off on selected items. Limited time offer!
                </Card.Text>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>50% Off</Card.Title>
                <Card.Text>
                  Get up to 50% off on selected items. Limited time offer!
                </Card.Text>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h2>Featured Products</h2>
            <Row className="mb-4">
              <Col>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>80% Off</Card.Title>
                    <Card.Text>
                      Get up to 80% off on selected items. Limited time offer!
                    </Card.Text>
                    <Button variant="primary">Shop Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>70% Off</Card.Title>
                    <Card.Text>
                      Get up to 70% off on selected items. Limited time offer!
                    </Card.Text>
                    <Button variant="primary">Shop Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>60% Off</Card.Title>
                    <Card.Text>
                      Get up to 60% off on selected items. Limited time offer!
                    </Card.Text>
                    <Button variant="primary">Shop Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>50% Off</Card.Title>
                    <Card.Text>
                      Get up to 50% off on selected items. Limited time offer!
                    </Card.Text>
                    <Button variant="primary">Shop Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            {showAllProducts ? (
              <SeeAllProducts />
            ) : (
              <div>
                <h2>Buy Now</h2>
                <p className="text-center">
                  Shop with confidence and get your favorite products delivered to your doorstep.
                </p>
                <Button variant="primary" onClick={() => setShowAllProducts(true)}>
                  See All Products
                </Button>
              </div>
            )}
          </Col>
        </Row>
        
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
