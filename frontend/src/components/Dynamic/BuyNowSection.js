import React from 'react';
import { Col, Button } from 'react-bootstrap';
import SeeAllProducts from '../products/SeeAllProducts';

const BuyNowSection = ({ showAllProducts, setShowAllProducts }) => (
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
);

export default BuyNowSection;
