import React , { useEffect } from 'react';
import './Fail.css'; 
import { useNavigate } from 'react-router-dom';
import Header from '../home/Header';
import Footer from '../home/Footer';

const Fail = () => {
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
    <div className="fail-page">
      <div className="fail-content">
        <h1>Payment Failed! Order Not Placed...</h1>
        <h2>Wait for 5 minutes to update the status of payment and try again later.</h2>
        <p> we will redirect u on homepage in 5sec</p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Fail;
