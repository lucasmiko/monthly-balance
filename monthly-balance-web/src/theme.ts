import { createMuiTheme, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#22959f',
      light: '#e0f7fa',
    },
    secondary: {
      main: '#6f6f6f',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#3c3c3c',
      secondary: '#6f6f6f',
    },
  },
  typography: {
    fontFamily: 'Noto Sans, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '3.2rem',
      lineHeight: 1.1,
    },
    button: {
      textTransform: 'none',
    },
  },
  spacing: 8,
});

export default theme;
