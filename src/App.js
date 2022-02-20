import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'src/core/theme';
import { store } from 'src/core/store';
import { Router } from 'src/core/Router';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
