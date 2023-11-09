import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './AddProduct.css'; // Import your CSS file
import axios from 'axios';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    productDiscount: '',
    productDescription: '',
    productPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, productPhoto: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('productName', formData.productName);
    formDataToSend.append('productPrice', formData.productPrice);
    formDataToSend.append('productDiscount', formData.productDiscount);
    formDataToSend.append('productDescription', formData.productDescription);
    formDataToSend.append('productPhoto', formData.productPhoto);

    try {
        const response = await axios.post('http://localhost:8080/shoppinghub/addproduct', formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response.data);
    } catch (error) {
        if (error.response) {
            console.error('Response error: ', error.response.data);
            console.error('Response status: ', error.response.status);
        } else if (error.request) {
            console.error('Request error: ', error.request);
        } else {
            console.error('Error message: ', error.message);
        }
    }
};

  
  return (
    <div className="product-form-container">
      <Form className="product-form" onSubmit={handleSubmit}>
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
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
