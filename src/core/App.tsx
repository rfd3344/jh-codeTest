import React from 'react';

import Providers from './Providers';
import Router from './Router';


import './tailwind/tailwind.css';

export default function App() {


  return (
    <Providers>
      <Router />
    </Providers>
  );
}
