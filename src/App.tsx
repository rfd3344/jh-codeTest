import React from 'react';
import { Provider } from 'react-redux';
// import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';

import { theme } from './core/theme';
import { store } from '@/core/store';

function App() {
  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      {/* <GlobalSnackbar />

        <Routes /> */}
      {/* </ThemeProvider> */}
    </Provider>
  );
}

export default App;
