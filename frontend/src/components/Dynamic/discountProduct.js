import React, { useState, useEffect } from 'react';

const DiscountProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API to get discounted products
    fetchDiscountedProducts();
  }, []);

  const fetchDiscountedProducts = async () => {
    try {
      // Make a GET request to your Spring Boot backend to fetch discounted products
      const response = await fetch('http://localhost:8081/shoppinghub/discount/{discountvalue}');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProducts(data); // Set the fetched products in the state
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Discounted Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discount}%</p>
            {/* Add more product details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountProducts;
