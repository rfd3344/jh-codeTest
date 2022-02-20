import { theme } from '../src/common/theme';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/app/store';

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
