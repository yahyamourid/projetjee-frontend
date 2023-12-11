import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminHome from './components/admin/AdminHome';
import EtudiantHome from './components/etudiant/EtudiantHome';
import ProfHome from './components/prof/ProfHome';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Preline from "./components/Preline";
import NotFound404 from './components/auth/NotFound404'

const userlogin = JSON.parse(localStorage.getItem("userlogin"))
let role
if (userlogin !== null){
  role = userlogin.user.role
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Preline />
      <Routes>
        {userlogin ? (
          <>
            {role === 'admin' && <Route path='/admin' element={<AdminHome />} />}
            {role === 'prof' && <Route path='/prof' element={<ProfHome />} />}
            {role === 'etudiant' && <Route path='/etudiant' element={<EtudiantHome />} />}
            {!(role === 'admin') && <Route path='/admin' element={<Navigate replace to={`/${role}`} />} />}
            {!(role === 'prof') && <Route path='/prof' element={<Navigate replace to={`/${role}`} />} />}
            {!(role === 'etudiant') && <Route path='/etudiant' element={<Navigate replace to={`/${role}`} />} />}
            <Route path='/login' element={<Navigate replace to={`/${role}`} />} />
            <Route path='/register' element={<Navigate replace to={`/${role}`} />} />
            
          </>
        ) : (
          <>
            <Route path='/admin' element={<Navigate replace to="/login" />} />
            <Route path='/prof' element={<Navigate replace to="/login" />} />
            <Route path='/etudiant' element={<Navigate replace to="/login" />} />
          </>
        )}

        {!userlogin && <Route path="/login" element={<Login />} />}
        {!userlogin && <Route path="/register" element={<Register />} />}

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
