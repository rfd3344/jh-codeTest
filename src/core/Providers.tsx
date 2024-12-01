
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';


interface IProps {
  children: React.ReactNode;
}

export default function Providers({
  children
}: IProps) {


  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        {children}
      </ReduxProvider>
    </BrowserRouter>
  );

}
