import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4">
            <h5>About Us</h5>
            <p>Your eCommerce Site is your one-stop shop for all your shopping needs.</p>
          </div>
          <div className="col-lg-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/home">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Contact Us</h5>
            <p>Email: contact@yourwebsite.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="bg-primary text-center py-2">
        &copy; {new Date().getFullYear()} Your eCommerce Site
      </div>
    </footer>
  );
};

export default Footer;
