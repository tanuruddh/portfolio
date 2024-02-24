import React from 'react';
import './style.css';
import RouteNav from './components/Routes.js';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.js';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteNav />
    </BrowserRouter>
  )
}

export default App
