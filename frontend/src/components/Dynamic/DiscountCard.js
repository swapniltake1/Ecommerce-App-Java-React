import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DiscountCard = ({ title, discount }) => (
  <Col>
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {`Get up to ${discount}% off on selected items. Limited time offer!`}
        </Card.Text>
        <Link to={`/discount?discount=${discount}`}>
          <Button variant="primary">Shop Now</Button>
        </Link>
      </Card.Body>
    </Card>
  </Col>
);

const DiscountSection = () => (
  <Row className="mb-4">
    <DiscountCard title="80% Off" discount={80} />
    <DiscountCard title="70% Off" discount={70} />
    <DiscountCard title="60% Off" discount={60} />
    <DiscountCard title="50% Off" discount={50} />
    {/* Add more DiscountCard components with different discount values as needed */}
  </Row>
);

export default DiscountSection;
