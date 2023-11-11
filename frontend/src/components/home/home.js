import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
import DynamicText from '../Dynamic/DynamicText';
import FeaturedProductsSection from '../Dynamic/FeaturedCard';
import DiscountSection from '../Dynamic/DiscountCard';
import BuyNowSection from '../Dynamic/BuyNowSection';
import OffersSection from '../Dynamic/OffersSection';
import ImageCarousel from '../Dynamic/ImageCarouse';

const Home = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <>
      <div>
        <Header />
        <DynamicText />

        <Container className="my-5">
         { /* moving images */}
          <ImageCarousel />
          { /* Offer Section code */}
          <OffersSection />
          { /* Discount Section code */}
          <DiscountSection />

          <Row className="text-center">

          { /* featured Section code */}
              <FeaturedProductsSection />
            
            <Col >
            { /* buy now Section code */}
              <BuyNowSection
                showAllProducts={showAllProducts}
                setShowAllProducts={setShowAllProducts}
              />

            </Col>

          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Home;
