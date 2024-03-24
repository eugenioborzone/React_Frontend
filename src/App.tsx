import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Register from './components/Register';

import Home from './pages/Home';
import Pricing from './pages/Pricing';

function App() {
  document.documentElement.classList.remove('dark');

  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" Component={Home} /> {/* 👈 Renders at /#/app/ */}
          <Route path="/pricing" Component={Pricing} /> {/* 👈 Renders at /#/app/ */}
        </Routes>
      </HashRouter>
      <Footer />
      <Login />
      <Register />
      <ForgotPassword />
    </div>
  );
}

export default App;
