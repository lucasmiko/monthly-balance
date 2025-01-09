import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './theme';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StrictMode>
  );
}