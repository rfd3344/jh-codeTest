import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'src/core/theme';

export const MockTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
