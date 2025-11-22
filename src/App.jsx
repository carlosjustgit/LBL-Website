import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<div style={{ padding: '100px', textAlign: 'center' }}>About Page Coming Soon</div>} />
        <Route path="/contact" element={<div style={{ padding: '100px', textAlign: 'center' }}>Contact Page Coming Soon</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
