

const PaymentOptions = ({ orderDetails, userAddress, methodname }) => {
  const navigate = useNavigate();


const handleSuccess = async (method) => {
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
        navigate('/home');
      } else {
        console.error('Failed to send data to the server');
      }
    } catch (error) {
      console.error('Error occurred while sending data:', error);
    }
  };

  const handleFail=() =>{
    navigate('/home');
  }



  // return(     button for success and fail. if button success then save data to backend. fail = redirect homme) button 
