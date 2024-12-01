import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'src/sections/home/Home';
import Demo from 'src/sections/demo/Demo';
import NotFound from 'src/sections/notFound/NotFound';

export default function Router() {

  return (
    <Routes>
      <Route path='/' Component={Home} />

      <Route path='demo' Component={Demo} />


      <Route path="*" Component={NotFound} />
    </Routes>
  );

}