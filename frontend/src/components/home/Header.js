import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputGroup, Input, Button, Navbar } from 'reactstrap';
import { FaShoppingBag, FaSearch } from 'react-icons/fa';
import UserContext from '../user/UserContext';
import './header.css';

const Header = () => {
  const { userName, setUserName } = useContext(UserContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    setUserName('');
    navigate('/');
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8081/shoppinghub/searchproducts?searchTerm=${searchTerm}`);
      
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/SearchedOrders", { state: { orders: data } });
      } else {
        console.error('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  return (
    <Navbar className="header">
      <div className="brand">
        <FaShoppingBag className="shopping-bag-icon" />
        <Link to='/home' className='brand-name'>ShoppingHub</Link>
      </div>
      <div className="search-bar">
        <InputGroup>
          <Input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button color="primary" className="btn-searchbar" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </InputGroup>
      </div>
      <div className="user-options">
        {userName ? (
          <>
            <span className="welcome-message">Welcome, {userName}</span>
            <Button color="link" onClick={handleLogout}>Log Out</Button>
          </>
        ) : (
          <>
            <Link to="/signup" className="nav-link">Sign Up</Link>
            <Link to="/login" className="nav-link">Log in</Link>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default Header;
