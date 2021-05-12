import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Theme from '@/themes/Theme';


export default ReactDOM.render(
  <BrowserRouter>
    <Theme />
  </BrowserRouter>,
  document.getElementById('root'),
);
