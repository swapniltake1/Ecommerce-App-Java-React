// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home'; // Import your component files
import Signup from './components/signup/signup';
import Login from './components/Login/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />  
        <Route path="/Login" element={<Login />}/>

      </Routes>
    </Router>
  );
};

export default App;
