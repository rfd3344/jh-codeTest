import { createTheme } from '@mui/material/styles';
import './font/font.css';

const colours = {
  lightPurple: '#a491d3',
  lightBlue: '#007bff',
  darkBlue: '#143642',
  lightGrey: '#000d10',
  success: '#4caf50',
  error: '#e9453a',
  black: '#000',
};

export const theme = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: '"Space Grotesk"',
    h3: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '20px',
    },
    h5: {
      fontSize: '18px',
      fontWeight: 800,
    },
    h6: {
      fontSize: '16px',
    },
    subtitle1: {
      fontSize: '16px',
    },
    subtitle2: {
      fontSize: '14px',
    },
    button: {
      fontSize: '1rem',
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: colours.lightPurple,
    },
    secondary: {
      main: colours.lightBlue,
    },
    grey: {
      light: colours.lightGrey,
    },
    blue: {
      light: colours.lightBlue,
      dark: colours.darkBlue,
    },
    black: {
      main: colours.black,
    },
    success: {
      main: colours.success,
    },
    error: {
      main: colours.error,
    },
  },
  props: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          fontSize: 20,
          fontWeight: 400,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '& a': {
            color: colours.lightPurple,
          },
        },
      },
    },
  },
});
