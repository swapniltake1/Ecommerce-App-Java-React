import { React, useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import './SeeAllProducts.css';
import BuyButton from '../Dynamic/BuyButton'; 
import AddToCartBtn from '../Dynamic/AddToCartBtn';

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <img
        src={`data:image/jpeg;base64,${product.productPhoto}`}
        alt={product.productName}
        className="card-img-top"
        onClick={handleShow}
      />
      <div className="card-body">
        <h5 className="card-title" onClick={handleShow}>
          {product.productName}
        </h5>
        <p className="card-text">{product.productDescription}</p>
        <p className="card-text">{product.productDiscount}% Off</p>
        <p className="card-text">Price: {product.productPrice}</p>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title >{product.productName}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='text-center'>
            <img
              src={`data:image/jpeg;base64,${product.productPhoto}`}
              alt={product.productName}
              style={{ maxWidth: '100%', height: 'auto' }}
            />

            <p>Description: {product.productDescription}</p>
            <p>{product.productDiscount}% Off</p>
            <p>Price: {product.productPrice}</p>
          </Modal.Body>
          <Modal.Footer style={{marginRight:'100px'}}>
          <AddToCartBtn product={product} />
          <BuyButton orderId={product.productId} />
            <Button variant="secondary" onClick={handleClose} style={{padding:'10px', backgroundColor:'red'}}>
              Close
            </Button>
          </Modal.Footer>
          
        </Modal>
      </div>
    </div>
  );
};

const SeeAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8081/shoppinghub/getallproduct');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products: ', error);
        
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="container">
        <h2>Trending Products in this days ..</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.productId} className="col-lg-3 col-md-6 col-sm-10">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeeAllProducts;
