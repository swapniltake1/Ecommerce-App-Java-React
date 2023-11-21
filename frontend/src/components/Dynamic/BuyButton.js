import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BuyButton = ({ orderId }) => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({});

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/shoppinghub/getProduct/${orderId}`);
      console.log(response.data);
      setOrderDetails(response.data);
    } catch (error) {
      console.error('Error fetching order details: ', error);
    }
  };

  const handleBuyClick = () => {
    console.log("Sending data to payment page ::"+orderDetails);
    // navigate('/payment', { orderDetails });
    navigate('/payment', { state: { orderDetails: orderDetails } });

  };

  useEffect(() => {
    fetchOrderDetails();
  }, [orderId]);

  return (
    <div>
      {/* Applying inline styles to the button */}
      <button
        onClick={handleBuyClick}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default BuyButton;
