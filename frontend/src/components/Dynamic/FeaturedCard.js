import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const cardStyle = {
  margin: '0 auto', // Center the cards
  marginBottom: '20px', // Add some space between cards
  maxWidth: '300px', // Set the maximum width for cards
};

const buttonStyle = {
  width: '100%', // Make the button width 100%
};

const FeaturedCard = ({ title, description, category }) => (
  <Col xs={12} sm={6} md={4} lg={3}> {/* Adjust the column size for different screen sizes */}
    <Card className="text-center" style={cardStyle}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{category}</Card.Text>

        <Link to={`/category?category=${category}`}>
          <Button variant="primary" style={buttonStyle}>Shop Now</Button>
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
