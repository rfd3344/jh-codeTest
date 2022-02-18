import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import baseTheme from 'custom-mui/theme/BaseTheme';
import { store } from 'app/store';
import CssBaseline from '@mui/material/CssBaseline';

// import { Routes } from './features/page/Routes';
// import { GlobalSnackbar } from './features/common/globalSnackbar/GlobalSnackbar';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <GlobalSnackbar />

        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
