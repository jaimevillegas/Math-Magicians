// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './components/Calculator';
import Quote from './components/quote';
import Website from './components/Website';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Website />}>
        <Route index element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculator" element={<Calculator />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
