import { createTheme } from '@mui/material/styles';
import './font/font.css';

const colours = {
  lightPurple: '#a491d3',
  lightBlue: '#007bff',
  darkBlue: '#143642',
  lightGrey: '#000d10',
  success: '#4caf50',
  error: '#e9453a',
};

export const theme = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: '"Space Grotesk"',
    h3: {
      fontSize: '1.33em',
    },
    h4: {
      fontSize: '1.22em',
    },
    h5: {
      fontSize: '1.11em',
    },
    h6: {
      fontSize: '1.1em',
    },
    subtitle1: {
      fontSize: '0.89em',
    },
    subtitle2: {
      fontSize: '0.78em',
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: colours.lightPurple,
    },
    grey: {
      light: colours.lightGrey,
    },
    blue: {
      light: colours.lightBlue,
      dark: colours.darkBlue,
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
