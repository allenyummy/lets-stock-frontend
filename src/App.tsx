import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {['/', '/login'].map(path => <Route path={path} element={<Login />} />)}
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
