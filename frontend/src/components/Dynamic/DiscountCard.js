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

const DiscountCard = ({ title, discount }) => (
  <Col xs={12} sm={6} md={4} lg={3}> {/* Adjust the column size for different screen sizes */}
    <Card className="text-center" style={cardStyle}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {`Get up to ${discount}% off on selected items. Limited time offer!`}
        </Card.Text>
        <Link to={`/discount?discount=${discount}`}>
          <Button variant="primary" style={buttonStyle}>Shop Now</Button>
        </Link>
      </Card.Body>
    </Card>
  </Col>
);

const DiscountSection = () => (
  <Row className="mb-4">
    <Col>
      <Row className="mb-4">
        <DiscountCard title="80% Off" discount={80} />
        <DiscountCard title="70% Off" discount={70} />
        <DiscountCard title="60% Off" discount={60} />
        <DiscountCard title="50% Off" discount={50} />
      </Row>
    </Col>
  </Row>
);

export default DiscountSection;
