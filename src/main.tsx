import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importar BrowserRouter
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter basename="/Portfolium">
    <App />
  </BrowserRouter>,


);
