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
import CartPage from './components/user/CartPage';
import OrdersPage from './components/Dynamic/SearchedOrders';
import DiscountProducts from './components/Dynamic/discountProduct';
import PaymentPage from './components/products/PaymentPage';
import ProductCategory from './components/Dynamic/ProductCategory';
import PaymentOptions from './components/products/PaymentOptions';
import Dopayment from './components/products/dopayment';
import Success from './components/orders/Success';
import Fail from './components/orders/Fail';
import Error from './components/orders/Error';
import Contact from './components/Developer/Contact';



const App = () => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPassword, setUserPassword] = useState('');


  return (
    <Router>
      <UserContext.Provider
        value={{
          userId,
          setUserId,
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
          <>
            <Route path="/" element={<Home />} />
            <Route path="/error" element={<Error />} />
            <Route path="/developer/contact" element={<Contact />} />

            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="user/profile" element={<UserProfile />} />
            <Route path="/shoppinghub/admin/addproduct" element={<AddProduct />} />
            <Route path="/seeallproduct" element={<SeeAllProducts />} />
            <Route path="/cart/:userId" element={<CartPage />} />
            <Route path="/SearchedOrders" element={<OrdersPage />} />
            <Route path="/discount" element={<DiscountProducts />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/category" element={<ProductCategory />} />
            <Route path="/payment/proceed-payment" element={<PaymentOptions />} />
            <Route path="/payment/proceed-payment/dopayment" element={<Dopayment />} />
            <Route path='/payment/success' element={<Success />} />
            <Route path='/payment/fail' element={<Fail />} />
          </>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};


export default App;
