import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here as we build them */}
        <Route path="/about" element={<div style={{ padding: '100px', textAlign: 'center' }}>About Page Coming Soon</div>} />
        <Route path="/services" element={<div style={{ padding: '100px', textAlign: 'center' }}>Services Page Coming Soon</div>} />
        <Route path="/contact" element={<div style={{ padding: '100px', textAlign: 'center' }}>Contact Page Coming Soon</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
