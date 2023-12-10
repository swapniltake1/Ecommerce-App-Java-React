import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          
          <div className="col2 about-content">
            <h5>About Us</h5>
            <p>We're ShoppingHub, here to change how you shop. Our website offers carefully chosen products that are great value and quality. We aim to make shopping easy and enjoyable, always keeping you in mind. Explore our site for the latest, coolest, and trustworthy items.</p>
          </div>
        </div>
        <div className="col1">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/seeallproduct">See All Products</a></li>
              <li><a href="/developer/contact">Contact to Developers</a></li>
              <li><a href="/shoppinghub/admin/addproduct">Add your products </a></li>
            </ul>
          </div>
      </div>

      <div className="text-center footer-copyright">
        &copy; {new Date().getFullYear()} ShoppingHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
