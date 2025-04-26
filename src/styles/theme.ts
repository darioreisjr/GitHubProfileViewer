import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Criando tema base
let theme = createTheme({
  palette: {
    primary: {
      main: '#2b3137',
      light: '#565a5f',
      dark: '#000a12',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6e5494',
      light: '#9d82c4',
      dark: '#412967',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f6f8fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 6,
        },
      },
    },
  },
});

// Aplicar fontes responsivas automaticamente
theme = responsiveFontSizes(theme);

export default theme;
