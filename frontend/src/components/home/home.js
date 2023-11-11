import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Card, Button, Container, Row, Col, Carousel } from 'react-bootstrap';
import SeeAllProducts from '../products/SeeAllProducts';
import './home.css';
import DynamicText from '../Dynamic/DynamicText';

const Home = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  return (
    <div>
      <Header />
      <DynamicText />
      <Container className="my-5">

        <Row className="mb-4 adv-img">
          <Col>
            <Carousel>
            <Carousel.Item>
                <img
                  className=" carousel-image"
                  src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=" carousel-image"
                  src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=" carousel-image"
                  src="https://m.media-amazon.com/images/I/71cvRGs+pPL._SX3000_.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=" carousel-image"
                  src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
                  alt="Third slide"
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
                    <Card.Title>Electronics</Card.Title>
                    <Card.Text>
                    Smartphones, laptops,smartwatches, and other electronic gadgets.
                    </Card.Text>
                    <Button variant="primary">Shop Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>Fashion</Card.Title>
                    <Card.Text>
                    Men's and women's clothing, shoes, accessories, and jewelry
                    </Card.Text>
                    <Button variant="primary">Shop Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>Home and Living</Card.Title>
                    <Card.Text>
                    Furniture, home decor, bedding, kitchenware, and appliances.
                    </Card.Text>
                    <Button variant="primary">Shop Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>Health and Beauty</Card.Title>
                    <Card.Text>
                    Skincare products, cosmetics, haircare items, vitamins, and fitness equipment
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
