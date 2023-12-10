import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Success.css';
import Header from '../home/Header';
import Footer from '../home/Footer';

const Success = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 5000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <>
     <Header />
    <div className="success-page">
      <div className="success-content">
        <h1>Order Placed Successfully!</h1>
        <h2>We will deliver your package within 5 days maximum.</h2>
        <p> we will redirect u on homepage in 5sec</p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Success;
