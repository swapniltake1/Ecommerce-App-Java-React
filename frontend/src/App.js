import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Login from './components/Login/Login';
import UserProfile from './components/user/UserProfile'; // Correct the import statement
import UserContext from './components/user/UserContext';
import AddProduct from './components/products/AddProduct';
import SeeAllProducts from './components/products/SeeAllProducts'; // Correct the component name

const App = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <Router>
      <UserContext.Provider
        value={{
          userName,
          setUserName,
          userEmail,
          setUserEmail,
          userPhone,
          setUserPhone,
          userPassword,
          setUserPassword
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/shoppinghub/admin/addproduct" element={<AddProduct />} />
          <Route path="/seeallproduct" element={<SeeAllProducts />} /> {/* Correct the component name */}
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
