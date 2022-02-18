import { theme } from '../src/common/theme';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import React from 'react';
import { store } from '../src/app/store';
import { Provider } from 'react-redux';

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     // hideNoControlsWarning: true,  // hidden control args  warning
//     // expanded: true,  // show 'Description' and 'Default' coloum for arguments
//     // matchers: {
//     //   color: /(background|color)$/i,
//     //   date: /Date$/,
//     // },
//   },
// };

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
