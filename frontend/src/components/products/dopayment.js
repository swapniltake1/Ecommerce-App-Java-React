import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dopayment = () => {
  const location = useLocation();
  const orderDetails = location.state ? location.state.orderDetails : null;
  const userAddress = location.state ? location.state.userAddress : null;
  const methodname = location.state ? location.state.methodname : null;
  console.log(orderDetails, userAddress);
  const navigate = useNavigate();

  const handleSuccess = async () => {
    const apiUrl = 'YOUR_BACKEND_API_URL_HERE'; // Replace with your Spring Boot API endpoint

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderDetails,
          userAddress,
          methodname,
        }),
      });

      if (response.ok) {
        console.log('Data sent successfully to the server!');
        navigate('/success'); // Redirect to a success page
      } else {
        console.error('Failed to send data to the server');
        navigate('/home'); // Redirect to the home page or another appropriate page for failure
      }
    } catch (error) {
      console.error('Error occurred while sending data:', error);
      navigate('/home'); // Redirect to the home page or another appropriate page for failure
    }
  };

  return (
    <>
    <h1>Payment Status</h1>
    <div>
      <h2>Order Details:</h2>
      <pre>{JSON.stringify(orderDetails, null, 2)}</pre>
    </div>
    <div>
      <h2>User Address:</h2>
      <pre>{JSON.stringify(userAddress, null, 2)}</pre>
    </div>
    <div>
      <h2>Payment Method Name:</h2>
      <pre>{methodname}</pre>
    </div>
    <div>
      <h1>Payment Status</h1>
      <button onClick={handleSuccess}>Success</button>
      <button onClick={() => navigate('/home')}>Fail</button>
    </div>
    </>
  );
};

export default Dopayment;
