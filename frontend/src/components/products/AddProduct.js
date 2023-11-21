import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import './AddProduct.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    productDiscount: '',
    productCategory: '',
    productDescription: '',
    productPhoto: null,
  });

  const [productAdded, setProductAdded] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, productPhoto: e.target.files[0] });
  };
  const handleGoHome = () => {
   navigate("/");
   
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('productName', formData.productName);
    formDataToSend.append('productPrice', formData.productPrice);
    formDataToSend.append('productDiscount', formData.productDiscount);
    formDataToSend.append('productCategory', formData.productCategory);
    formDataToSend.append('productDescription', formData.productDescription);
    formDataToSend.append('productPhoto', formData.productPhoto);
  
    try {
      const response = await axios.post('http://localhost:8081/shoppinghub/addproduct', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data) {
        console.log('Product added:', response.data);
        setAddedProduct(response.data);
        setProductAdded(true);

        setTimeout(() => {
          setProductAdded(false);
        }, 10000);
      } else {
        console.log('Product add response:', response);
        setProductAdded(false);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      setProductAdded(false);
    }
  };
  
  return (
    <div className="product-form-container">
      <Form className="product-form" onSubmit={handleSubmit}>
      {productAdded && addedProduct && (
          <Alert color="success">
            Product added successfully!
            <br />
            {`Product ID: ${addedProduct.id}, Name: ${addedProduct.productName}, Price: ${addedProduct.productPrice}`}
          </Alert>
        )}
        <h2 className='text-center'> Add Your Product </h2>
        <FormGroup>
          <Label for="productName">Product Name</Label>
          <Input type="text" name="productName" id="productName" placeholder="Product Name" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="productPrice">Product Price</Label>
          <Input type="text" name="productPrice" id="productPrice" placeholder="Product Price" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="productDiscount">Product Discount</Label>
          <Input type="text" name="productDiscount" id="productDiscount" placeholder="Product Discount" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="productDiscount">Product Category (Electronics, Fashion, Home and Living, Health and Beauty)</Label>
          <Input type="text" name="productCategory" id="productCategory" placeholder="productCategory" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="productDescription">Product Description</Label>
          <Input
            type="text"
            name="productDescription"
            id="productDescription"
            placeholder="Product Description"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="productPhoto">Product Photo</Label>
          <Input type="file" name="productPhoto" id="productPhoto" onChange={handleFileChange} />
        </FormGroup>
        <div className='text-center'>
        <Button color="primary" type="submit">
          Submit
        </Button>
        {productAdded && (
        <Button color="primary" onClick={handleGoHome}>
          Go Home
        </Button>
      )}
        </div>
      </Form>
      
    </div>
  );
};

export default ProductForm;
