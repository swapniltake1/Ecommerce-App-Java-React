import React from 'react';
import { Row, Col } from 'react-bootstrap';

const headingStyle = {
  fontSize: '1.8rem', // Adjust heading font size for responsiveness
  textAlign: 'center', // Center align the heading
};

const textStyle = {
  fontSize: '1.2rem', // Adjust text font size for responsiveness
  textAlign: 'justify', // Justify the text for better readability
};

const OffersSection = () => (
  <Row className="mb-4">
    <Col>
      <h2 style={headingStyle}>Discounts and Offers</h2>
      <p style={textStyle}>
        Discover a world of unbeatable offers and discounts at our site, where we bring you the best deals from around the globe.
        With a vast array of products and services, we guarantee you'll find the most irresistible offers worldwide.
        Don't miss out on this opportunity to explore and indulge in the ultimate shopping experience.
        Try it once, and you'll be coming back for more!
      </p>
    </Col>
  </Row>
);

export default OffersSection;
