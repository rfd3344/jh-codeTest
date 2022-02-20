import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
// interface PaletteColor {``
//   lightBlue: string;
//   main: string;
//   dark?: string;
//   contrastText?: string;
// }

const colours = {
  lightBlue: '#edfbff',
  blue: '#006fe8',
  lightGrey: '#f3f4f6',
  success: '#4caf50',
  error: '#e9453a',
};

export const theme = createTheme({
  typography: {
    fontSize: 14,
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
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
    grey: {
      light: colours.lightGrey,
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
