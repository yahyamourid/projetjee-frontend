// main.jsx
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import AdminHome from './components/admin/AdminHome';
import EtudiantHome from './components/etudiant/EtudiantHome';
import ProfHome from './components/prof/ProfHome';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Preline from "./components/Preline";


const userToken = localStorage.getItem("token")

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Preline />
      <Routes>
        {userToken ? (
          <>
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/prof" element={<ProfHome />} />
            <Route path="/etudiant" element={<EtudiantHome />} />
            
          </>
        ) : (
          <>
            <Route path='/admin' element={<Navigate replace to="/login" />} />
            <Route path='/prof' element={<Navigate replace to="/login" />} />
            <Route path='/etudiant' element={<Navigate replace to="/login" />} />
          </>
        )}

        {!userToken && <Route path="/login" element={<Login />} />}
        {!userToken && <Route path="/register" element={<Register />} />}

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
