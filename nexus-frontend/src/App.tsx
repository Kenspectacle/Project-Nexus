import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import CalculatorApp  from "./components/Calculator/CalculatorApp.tsx";
import Homepage from './components/Homepage/Homepage.tsx';
import LoginPage from './components/LoginPage/LoginPage.tsx';
import RegisterPage from './components/RegisterPage/RegisterPage.tsx';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/calcApp" element={<CalculatorApp />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}



export default App;
