import React, {useContext, useState, useEffect } from 'react';
import Footer from '../home/Footer';
import Header from '../home/Header';
import './CartPage.css'; 
import UserContext from '../user/UserContext';
const CartPage = () => {
  const [orders, setOrders] = useState([]); 
  const [userCart, setUserCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userEmail } = useContext(UserContext);

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        console.log(userEmail)
        const apiUrl = 'http://localhost:8081/shoppinghub/user/getprofiledetails/'+userEmail;
        console.log(apiUrl);
        const response = await fetch(apiUrl);

        const data = await response.json();
        console.log(data);
        setOrders(data)
        setUserCart(data);
      } catch (error) {
        console.error('Error fetching user cart:', error);
       
      } finally {
        setLoading(false);
      }
    };

    fetchUserCart();
  }, []);

  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-section">
          <div className="saved-products">
            <h2>Saved Products</h2>
          </div>
        </div>

        
        <div className="cart-section">
  <div className="my-orders">
    <h2>My Orders</h2>
      <div className="order-cards">
        {orders.map((order, index) => (
          <div key={index} className="order-card">
          <p>{order.orderId}</p>
          <p>{(order.orderDetails.productName)}</p>
          <p> Price: {(order.orderDetails.productPrice)}</p>
          <p>Payment Method: {order.methodName}</p>
          </div>
        ))}
      </div>
  </div>
</div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;