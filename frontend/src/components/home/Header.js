import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, InputGroup, Input, Button, InputGroupText } from 'reactstrap';
import { FaShoppingBag, FaSearch } from 'react-icons/fa';
import UserContext from '../user/UserContext';
import './header.css';

const Header = () => {
  const { userName, setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserName('');
    navigate('/'); // Redirect to the homepage after logout
  };

  return (
    <Navbar className="header">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaShoppingBag style={{ marginRight: '10px', color: 'white' }} />
        <span style={{ color: 'white', cursor: 'pointer' }}>ShoppingHub</span>
      </div>
      <InputGroup style={{ width: '400px' }}>
        <Input type="text" placeholder="Search product" className="search-bar text-center" style={{ fontSize: '14px' }} / >
        <InputGroupText addonType="append">
          <Button className='btn-searchbar'>
            <FaSearch style={{ color: 'black' }} />
          </Button>
        </InputGroupText>
      </InputGroup>
      <Nav className="ml-auto">
        {userName ? (
          <>
            <Nav>
              <Link to="/profile" className="nav-link" style={{ color: 'white' }}>
                Welcome, {userName}
              </Link>
            </Nav>
            <Nav>
              <Button color="link" onClick={handleLogout} style={{ color: 'white' }}>
                log Out
              </Button>
            </Nav>
          </>
        ) : (
          <>
            <Nav>
              <Link to="/login" className="nav-link" style={{ color: 'white' }}>
                Log in
              </Link>
            </Nav>
            <Nav>
              <Link to="/signup" className="nav-link" style={{ color: 'white' }}>
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
