import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './UserProfile.css';
import Header from '../home/Header';
import Footer from '../home/Footer';

const UserProfile = () => {
  const {userId, setUserId} = useContext(UserContext);
  const {userName, setUserName} =useContext(UserContext);
  const {userEmail, setUserEmail} = useContext(UserContext);
  const {userPhone, setUserPhone} = useContext(UserContext);
  const {userPassword, setUserPassword} = useContext(UserContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleGoHome = () => {
    navigate('/home');
  };

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
      navigate(`cart/${userId}`);
    } else {
      console.error("userId is undefined");
    } 
  };

  return (
    <>
    <Header />
    <div className="user-profile-container">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="user-photo text-center"></div>
          <p> UserId: {userId}</p>
          <p>Name: {userName}</p>
          <p>Email: {userEmail}</p>
          <p>Phone: {userPhone}</p>
          <button onClick={handleShow}>Show Password</button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>{userPassword}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="mt-3 text-center">
            <Button className='btn' variant="primary" onClick={handleShowCart}>
              Show Cart
            </Button>
            <Button className='btn' variant="primary" onClick={handleGoHome}>
              Go Home
            </Button>
            <Button className='logout-btn'  onClick={handleLogout}>Log Out</Button>
          </div>
          
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default UserProfile;
