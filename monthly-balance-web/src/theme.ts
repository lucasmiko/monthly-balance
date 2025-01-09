import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#22959f',
    },
    secondary: {
      main: '#6f6f6f',
    },
  },
  typography: {
    fontFamily: 'Noto Sans, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
});

export default theme;