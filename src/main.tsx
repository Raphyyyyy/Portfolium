import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importar BrowserRouter
import App from './App.tsx'
import './index.css'

const basename = import.meta.env.BASE_URL;
console.log(basename);

ReactDOM.createRoot(document.getElementById('root')!).render(

    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>

);