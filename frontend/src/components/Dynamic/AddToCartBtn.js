import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import UserContext from '../user/UserContext';

const AddToCartBtn = ({ product }) => {
    const { userId } = useContext(UserContext);
    const navigate = useNavigate(); 

    const handleAddToCart = () => {
        const data = {
            userId: userId,
            productId: product.productId,
            productName: product.productName,
            productPrice: product.productPrice,
            productDiscount: product.productDiscount,
            productDescription: product.productDescription,
            productCategory: product.productCategory
        };

        axios.post('http://localhost:8081/shoppinghub/user/cart/add', data)
            .then(response => {
                console.log('Product added to cart:', response.data);
                navigate('/user/profile/cart/'+userId);
            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
            });
    };

    return (
        <div>
            <button
                onClick={handleAddToCart}
                style={{
                    backgroundColor: 'yellow',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                Add to cart
            </button>
        </div>
    );
};

export default AddToCartBtn;
