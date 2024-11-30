
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// import { theme } from 'src/theme/theme';
import { theme } from './theme/theme';
import { store } from 'src/core/store';


interface IProps {
  children: React.ReactNode;
}

export default function Providers({
  children
}: IProps) {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

}
