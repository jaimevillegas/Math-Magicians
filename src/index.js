import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './components/Calculator';
import Api from './components/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
    <Api />
  </React.StrictMode>,
);
