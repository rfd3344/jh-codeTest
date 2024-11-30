import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../sections/home/Home';
import NotFound from '../sections/notFound/NotFound';

export default function Router() {



  return (
    <Routes>

      <Route path='/'  Component={Home} />


      <Route path="*" Component={NotFound} />
    </Routes>
  );

}