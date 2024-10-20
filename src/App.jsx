import React from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLogin from '@/pages/Login';
import PageCollection from '@/pages/Collection';
import PageCart from '@/pages/Cart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/collection" element={<PageCollection />} />
        <Route path="/cart" element={<PageCart />} />
      </Routes>
    </Router>
  );
}

export default App;
