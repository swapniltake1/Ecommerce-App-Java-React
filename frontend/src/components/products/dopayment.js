import {React, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import  UserContext from '../user/UserContext';


const Dopayment = () => {
  const location = useLocation();
  const orderDetails = location.state ? location.state.orderDetails : null;
  const userAddress = location.state ? location.state.userAddress : null;
  const methodName = location.state ? location.state.methodName : null;

  const { userId, userName, userEmail, userPhone, userPassword } = useContext(UserContext);

  const purchasedUserId = userId;
  const purchasedUserName = userName;
  const purchasedUserEmail = userEmail;
  const purchasedUserPhone = userPhone;
  // const savedUserPassword = userPassword;

  console.log(orderDetails, userAddress, methodName, purchasedUserId, purchasedUserName, purchasedUserPhone, purchasedUserEmail);

  

  

  const navigate = useNavigate();

  const handleSuccess = async () => {
    const apiUrl = 'http://localhost:8081/shoppinghub/order/create'; // http://localhost:8081/shoppinghub/order/create

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
          purchasedUserEmail

        }),
      });

      if (response.ok) {
        console.log('Data sent successfully to the server!');
        navigate('/success'); 
      } else {
        console.error('Failed to send data to the server');
        navigate('/home'); 
      }
    } catch (error) {
      console.error('Error occurred while sending data:', error);
      navigate('/home'); 
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
      <pre>{methodName}</pre>
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
