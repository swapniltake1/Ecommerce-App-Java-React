import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'; // Import necessary components from reactstrap
import { useLocation } from 'react-router-dom';
import BuyNowButton from '../Dynamic/BuyButton';

const DiscountProducts = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const discountValue = queryParams.get('discount');

    if (discountValue) {
      fetchDiscountedProducts(discountValue);
    }
  }, [location.search]);

  const fetchDiscountedProducts = async (discountValue) => {
    try {
      const response = await fetch(`http://localhost:8081/shoppinghub/discount/${discountValue}`);
      if (response.ok) {
        const jsonResponse = await response.json();
        setProducts(jsonResponse); // Set the fetched products in the state
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Get the discountValue from the URL query parameter
  const queryParams = new URLSearchParams(location.search);
  const discountValue = queryParams.get('discount');

  return (
    <Container className='text-center'>
      <h1 className="mt-4 mb-4">{discountValue ? `${discountValue}%` : 'Discounted'} Discounted Products</h1>
      <Row xs="1" sm="2" md="3" lg="4">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <Col key={index}>
              <Card className="mb-3">
                {/* Assuming product.productPhoto is a base64 encoded image */}
                <CardImg top width="100%" src={`data:image/jpeg;base64,${product.productPhoto}`} alt={`Product ${product.productName}`} />
                <CardBody>
                  <CardTitle tag="h5">{product.productName}</CardTitle>
                  <CardText>Discount: {product.productDiscount}%</CardText>
                  <CardText>Price: {product.productPrice}</CardText>
                  <BuyNowButton orderId={product.productId} />
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <Card className="mb-3 text-center">
              <CardBody>
                <CardText>No discounted products available</CardText>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default DiscountProducts;
