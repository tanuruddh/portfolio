import React from 'react';
import './style.css';
import RouteNav from './components/Routes.js';
import Footer from './components/Footer.js';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.js';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteNav />
      <Footer />
    </BrowserRouter>
  )
}

export default App
