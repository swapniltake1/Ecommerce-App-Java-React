import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <nav className="container navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">Your Brand</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/signin">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">Sign Up</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/profile" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User
              </a>
              <div className="dropdown-menu" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="/profile">Profile</a>
                <a className="dropdown-item" href="/orders">Orders</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/signout">Sign Out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
