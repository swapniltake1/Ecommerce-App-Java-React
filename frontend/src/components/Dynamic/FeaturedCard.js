import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeaturedCard = ({ title, description, category }) => (
  <Col>
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{category}</Card.Text>

        <Link to={`/category?category=${category}`}>
          <Button variant="primary">Shop Now</Button>
        </Link>
      </Card.Body>
    </Card>
  </Col>
);

const FeaturedProductsSection = () => (
  <Row className="mb-4">
    <Col>
      <h2>Featured Products</h2>
        <Row className="mb-4">
        <FeaturedCard title="Electronics" description="Smartphones, laptops, smartwatches, and other electronic gadgets." category="electronics" />
        <FeaturedCard title="Fashion" description="Men's and women's clothing, shoes, accessories, and jewelry." category="fashion" />
        <FeaturedCard title="Home and Living" description="Furniture, home decor, bedding, kitchenware, and appliances." category="home and living" />
        <FeaturedCard title="Health and Beauty" description="Skincare products, cosmetics, haircare items, vitamins, and other" category="health and beauty" />
  </Row>
      </Col>
  </Row>
);

export default FeaturedProductsSection;
