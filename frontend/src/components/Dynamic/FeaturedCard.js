import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const FeaturedCard = ({ title, description }) => (
  <Col>
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Shop Now</Button>
      </Card.Body>
    </Card>
  </Col>
);

const FeaturedProductsSection = () => (
  <Row className="mb-4">
    <Col>
      <h2>Featured Products</h2>
      <Row className="mb-4">
        <FeaturedCard title="Electronics" description="Smartphones, laptops, smartwatches, and other electronic gadgets." />
        <FeaturedCard title="Fashion" description="Men's and women's clothing, shoes, accessories, and jewelry." />
        <FeaturedCard title="Home and Living" description="Furniture, home decor, bedding, kitchenware, and appliances." />
        <FeaturedCard title="Health and Beauty" description="Skincare products, cosmetics, haircare items, vitamins, and fitness equipment." />
      </Row>
    </Col>
  </Row>
);

export default FeaturedProductsSection;
