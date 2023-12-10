import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'; // Import necessary components from reactstrap
import { useLocation } from 'react-router-dom';
import Header from '../home/Header';
import Footer from '../home/Footer';
import BuyNowButton from '../Dynamic/BuyButton'

const ProductCategory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const productcategory = queryParams.get('category');

    if (productcategory) {
      fetchProductsByCategory(productcategory);
    }
  }, [location.search]);

  const fetchProductsByCategory = async (productCategory) => {
    try {
      const response = await fetch(`http://localhost:8081/shoppinghub/category/${productCategory}`);
      if (response.ok) {
        const jsonResponse = await response.json();
        setProducts(jsonResponse);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state, e.g., display an error message to the user
    } finally {
      setLoading(false);
    }
  };

  const queryParams = new URLSearchParams(location.search);
  const categoryValue = queryParams.get('category');

  return (
    <>
    <Header />  
    <Container className='mt-5 text-center'>
      
    
      <h1 className="mt-5 mb-4 text-center" style={{textAlign:'center', width:'100%'}}>{categoryValue ? `${categoryValue} Category` : 'All Products'}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row xs="1" sm="2" md="3" lg="4">
          {products.length > 0 ? (
            products.map((product, index) => (
              <Col key={index}>
              <Card className="mb-3" style={{margin:'50px'}}>
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
            <p>No products found for this category.</p>
          )}
        </Row>
      )}
    </Container>
    <Footer />
    </>
  );
};

export default ProductCategory;

