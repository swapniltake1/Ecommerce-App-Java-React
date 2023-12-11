import React, {useContext, useState, useEffect } from 'react';
import Footer from '../home/Footer';
import Header from '../home/Header';
import './CartPage.css'; 
import UserContext from '../user/UserContext';
const CartPage = () => {
  const [orders, setOrders] = useState([]); 
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userEmail } = useContext(UserContext);
  const { userId } = useContext(UserContext);

  useEffect(() => {


    const fetchUserCart = async () => {

      try {
        console.log(userEmail)

        const apiUrl2 = 'http://localhost:8081/shoppinghub/user/cart/fetch/'+userId;

        const savedProducts = await fetch(apiUrl2);

        const  products = await savedProducts.json();

        console.log(products);

        setSavedItems(products)

        const apiUrl = 'http://localhost:8081/shoppinghub/user/getprofiledetails/'+userEmail;

        const response = await fetch(apiUrl);

        const data = await response.json();

        console.log(data);

        setOrders(data);


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
          <div className="my-orders">
            <h2>Saved Products</h2>
            <div className="order-cards">
          {savedItems.map((product, index) => (
          <div key={index} className="order-card">
          <p>{(product.productName)}</p>
          <p> Price: {(product.productPrice)}</p>
          <p>Payment Method: {product.productDiscount}</p>
          <p> Category: {product.productCategory}</p>
          </div>
        ))}
      </div>
          </div>
        </div>
 
            <div className="cart-section">
           <div className="my-orders">
           <h2>My Orders</h2>
          <div className="order-cards">
        {orders.map((order, index) => (
          <div key={index} className="order-card">
          <p>{(order.orderDetails.productName)}</p>
          <p> Price: {(order.orderDetails.productPrice)}</p>
          <p>Payment Method: {order.methodName}</p>
          <p>Order Date: {new Date(order.date).toLocaleDateString('en-US')} {new Date(order.date).toLocaleTimeString('en-US')}</p>
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