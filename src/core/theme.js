import { createTheme } from '@mui/material/styles';

// interface PaletteColor {``
//   lightBlue: string;
//   main: string;
//   dark?: string;
//   contrastText?: string;
// }

const colours = {
  lightBlue: '#edfbff',
  blue: '#006fe8',
  success: '#4caf50',
  error: '#e9453a',
};

export const theme = createTheme({
  typography: {
    fontSize: 20,
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 800,
    },
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 800,
    },
    h6: {
      fontWeight: 800,
    },
    subtitle1: {
      fontWeight: 700,
    },
    subtitle2: {
      fontWeight: 700,
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: colours.blue,
      light: colours.lightBlue,
    },
    success: {
      main: colours.success,
    },
    error: {
      main: colours.error,
    },
  },
  props: {},
  overrides: {},
});
