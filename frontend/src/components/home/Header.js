import React, { useContext } from 'react';
import UserContext from '../user/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { userName, setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserName('');
    navigate('/'); // Redirect to the homepage after logout
  };

  return (
    <header className="bg-dark text-light">
      <nav className="container navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
        <Link to="/home" className="navbar-brand">
          ShoppingHub
        </Link>
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control form-control-lg mx-auto"
            placeholder="Search product"
            
          />
        </div>
        <div>
          <ul className="navbar-nav">
            {userName ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Welcome, {userName}
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>
                    log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Log in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
