import React, { useContext, useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserContext from '../user/UserContext';
import QRCode from 'react-qr-code';
import Header from '../home/Header';
import Footer from '../home/Footer';

const Dopayment = () => {
  const location = useLocation();
  const orderDetails = location.state ? location.state.orderDetails : null;
  const userAddress = location.state ? location.state.userAddress : null;
  const methodName = location.state ? location.state.methodName : null;

  const { userId, userName, userEmail, userPhone } = useContext(UserContext);

  const purchasedUserId = userId;
  const purchasedUserName = userName;
  const purchasedUserEmail = userEmail;
  const purchasedUserPhone = userPhone;

  const [qrCodeVisible, setQRCodeVisible] = useState(false);
  const qrCodeRef = useRef(null);
  const navigate = useNavigate();

  const handleQRCodeClick = () => {
    handleSuccess();
  };

  const handleClickOutside = (event) => {
    if (qrCodeRef.current && !qrCodeRef.current.contains(event.target)) {
      handleFail();
    }
  };

  const handleSuccess = async () => {
  

    const apiUrl = 'http://localhost:8081/shoppinghub/order/create'; 

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderDetails,
          userAddress,
          methodName,
          purchasedUserId,
          purchasedUserName,
          purchasedUserPhone,
          purchasedUserEmail,
        }),
      });

      if (response.ok) {
        console.log('Data sent successfully to the server!');
        navigate('/payment/success');
      } else {
        console.error('Failed to send data to the server');
        navigate('/payment/fail');
      }
    } catch (error) {
      console.error('Error occurred while sending data:', error);
      navigate('/error');
    }
  };

  const handleFail = () => {
    console.log('Clicked outside the QR code area');
    navigate('/fail');
  };

  useEffect(() => {
    setQRCodeVisible(true);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
    <Header />
      <div style={{textAlign:'center', marginTop:'8rem', marginBottom:'8rem'}}>
        <h1>Scan to Pay </h1>
        {qrCodeVisible && (
          <div ref={qrCodeRef} style={{textAlign:'center'}}>
            <QRCode value="YourQRCodeValueHere" onClick={handleQRCodeClick} />
            <p className='mt-5'> Ones payment done your order placed succesffully and we will start packing your order </p>
          </div>
        
        )}
      </div>
      <Footer />
    </>
  );
};

export default Dopayment;
