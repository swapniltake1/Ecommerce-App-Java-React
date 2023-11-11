import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './UserProfile.css';

const UserProfile = () => {
  const {userId, userName, userEmail, userPhone, userPassword } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleGoHome = () => {
    navigate('/home');
  };

  const handleShowCart = () => {
    if (userId) {
      navigate(`/cart/${userId}`);
    } else {
      console.error("userId is undefined");
    } 
  };

  return (
    <div className="user-profile-container">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="user-photo"></div>
          <h1>User Profile</h1>
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

          <div className="mt-3">
            <Button variant="primary" onClick={handleShowCart}>
              Show Cart
            </Button>
            <Button variant="primary" onClick={handleGoHome}>
              Go Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
