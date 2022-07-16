import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { Cv } from './pages';
import './App.scss';

export const App = () =>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Cv/>}/>
      <Route path='*' element={<Cv/>}/>
    </Routes>
  </BrowserRouter>;
