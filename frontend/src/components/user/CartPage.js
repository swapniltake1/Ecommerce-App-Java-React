import React, { useState, useEffect } from 'react';

const CartPage = ({ userId }) => {
  const [userCart, setUserCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const response = await fetch(`http://localhost:8080/shoppinghub/${userId}/cart`);
        const data = await response.json();
        setUserCart(data);
      } catch (error) {
        console.error('Error fetching user cart:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCart();
  }, [userId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : userCart ? (
        <div>
          <h2>User Cart</h2>
          {userCart.products && userCart.products.length > 0 ? (
            <ul>
              {userCart.products.map((product) => (
                <li key={product.productId}>
                  {product.productName} - {product.productPrice}
                </li>
              ))}
            </ul>
          ) : (
            <p>No products in the cart for user {userId}</p>
          )}
        </div>
      ) : (
        <p>No cart data available for user {userId}</p>
      )}
    </div>
  );
};

export default CartPage;
