import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PerfumeStore from './pages/HomePage';
import HomePage from './pages/HomePage';
import Productpage from './pages/Productpage';
import Cart from './pages/Cart';
import About from './pages/About';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="Products" element={<Productpage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="About" element={<About />} />
        <Route path="CheckOut" element={<CheckOut />} />
      </Routes>
    </Router>
  );
}

export default App;
