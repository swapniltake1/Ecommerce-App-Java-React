import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

const ImageCarousel = () => { 


  return (
  <Row className="mb-4 adv-img">
    <Col>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image" 
            src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image" 
            src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://m.media-amazon.com/images/I/71cvRGs+pPL._SX3000_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </Col>
  </Row>
  )
  };

export default ImageCarousel;
