import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dopayment = ({ orderDetails, userAddress, methodname }) => {
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
    <div>
      <h1>Payment Status</h1>
      <button onClick={handleSuccess}>Success</button>
      <button onClick={() => navigate('/home')}>Fail</button>
    </div>
  );
};

export default Dopayment;
