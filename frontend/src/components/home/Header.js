import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputGroup, Input, Button, Navbar } from 'reactstrap';
import { FaShoppingBag, FaSearch, FaUser } from 'react-icons/fa';
import UserContext from '../user/UserContext';
import './header.css';
import { Modal } from 'react-bootstrap';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const {userId, setUserId} = useContext(UserContext);
  const {userName, setUserName} =useContext(UserContext);
  const {userEmail, setUserEmail} = useContext(UserContext);
  const {userPhone, setUserPhone} = useContext(UserContext);
  const {userPassword, setUserPassword} = useContext(UserContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {

    setUserId('');
    setUserName('');
    setUserEmail('');
    setUserPhone('');
    setUserPassword('');
    console.log(userId+userName+userEmail+userPhone+userPassword);
    navigate('/');
  };

  const handleShowCart = () => {
    if (userId) {
      navigate(`/user/profile/cart/${userId}`);
    } else {
      console.error("userId is undefined");
    } 
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
        <FaShoppingBag className="shopping-bag-icon" size={20} />
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
          <FaUser className="user-icon" size={20} onClick={handleShowModal} />
          <Link to='/user/profile' className='welcome-message' >{userName}</Link>

          <Navbar expand="md" className="justify-content-end">
            <Modal show={showModal} style={{maxWidth:'1600px'}} onHide={handleCloseModal}>
              <Modal.Header closeButton>
              <Modal.Title className='model-header'>
                  <div className="user-p">
                 </div>
                   <div className="user-name">
                  {userName}
                </div>
               </Modal.Title>
              </Modal.Header>
              <Modal.Body >
              <p> UserId: {userId}</p>
              <p>Email: {userEmail}</p>
              <p>Phone: {userPhone}</p>

            <div className='text-center '>
            <Button className='btn' style={{padding:'8px', backgroundColor:'greenyellow', marginRight:'5px' }} onClick={handleShowCart}>
              Show Cart
            </Button>
            <Button className='btn' style={{padding:'8px', backgroundColor:'royalblue'}}  onClick={handleLogout}>Log Out</Button>
          </div>


              </Modal.Body>
            </Modal>
          </Navbar>
            
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Log in</Link>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default Header;
