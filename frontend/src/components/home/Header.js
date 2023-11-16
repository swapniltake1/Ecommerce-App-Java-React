import React, { useContext, useState  } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Navbar, Nav, InputGroup, Input, Button, InputGroupText } from 'reactstrap';

import { FaShoppingBag, FaSearch } from 'react-icons/fa';
import UserContext from '../user/UserContext';
import './header.css';

const Header = () => {
  const { userName, setUserName } = useContext(UserContext);
  const navigate = useNavigate();
  const { userId } = useParams();
  const [orders, setOrders] = useState([]);

  const handleLogout = () => {
    setUserName('');
    navigate('/');
  };

  const handleSearch = async () => {
    try {
      const searchTerm = document.getElementById('searchInput').value;
      const response = await fetch(`http://localhost:8081/shoppinghub/searchproducts?searchTerm=${searchTerm}`);
      
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setOrders(data);
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
        <span className="brand-name">ShoppingHub</span>
      </div>
      <InputGroup className="search-bar">
  <Input
    type="text"
    placeholder="Search products"
    className="text-center"
    id="searchInput"
    style={{ fontSize: '14px' }}
  />
  <InputGroupText>
    <Button className="btn-searchbar" onClick={handleSearch}>
      <FaSearch />
    </Button>
  </InputGroupText>
</InputGroup>
      <Nav className="ml-auto">
        {userName ? (
          <>
            <Nav>
              <Link to="/profile" className="nav-link">
                Welcome, {userName}
              </Link>
            </Nav>
            <Nav>
              <Link to={`/cart/${userId}`} className="nav-link">
                Show Cart
              </Link>
            </Nav>
            <Nav>
              <Button color="link" onClick={handleLogout}>
                Log Out
              </Button>
            </Nav>
          </>
        ) : (
          <>
            <Nav>
              <Link to="/login" className="nav-link">
                Log in
              </Link>
            </Nav>
            <Nav>
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </Nav>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
