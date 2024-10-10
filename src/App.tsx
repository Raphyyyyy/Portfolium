import React from 'react';
import "./App.css";
// import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Importar HashRouter e Routes
import Home from './pages/Home';
import Projeto from './pages/Projeto';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import AddProjeto from './pages/AddProjeto';

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/projeto/:id" element={ <Projeto /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="*" element={ <NotFound /> } />
      <Route path='/add-projeto' element={<AddProjeto/>}/>
    </Routes>
  );
}

export default App;
