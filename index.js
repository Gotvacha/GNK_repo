import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import "./index.css";

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MainPage from './pages/MainPage';
import NewTravelPage from './pages/NewTravelPage';
import PastTravelsPage from './pages/PastTravelsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="mainPage" element={<MainPage />} />
      <Route path="newTravel" element={<NewTravelPage />} />
      <Route path="pastTravels" element={<PastTravelsPage />} />
    </Routes>
  </BrowserRouter>,
  root
);

reportWebVitals();