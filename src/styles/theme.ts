import { createTheme, responsiveFontSizes, ThemeOptions, PaletteMode } from '@mui/material/styles';

// Define theme settings for both light and dark modes
const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode
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
          text: {
            primary: '#24292e',
            secondary: '#586069',
          },
        }
      : {
          // Dark mode
          primary: {
            main: '#58a6ff',
            light: '#79b8ff',
            dark: '#0366d6',
            contrastText: '#f0f6fc',
          },
          secondary: {
            main: '#bc8cff',
            light: '#d2a8ff',
            dark: '#8957e5',
            contrastText: '#f0f6fc',
          },
          background: {
            default: '#0d1117',
            paper: '#161b22',
          },
          text: {
            primary: '#c9d1d9',
            secondary: '#8b949e',
          },
        }),
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
          boxShadow: mode === 'light' 
            ? '0 2px 8px rgba(0,0,0,0.1)' 
            : '0 2px 8px rgba(0,0,0,0.5)',
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
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.3s ease',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
      },
    },
  },
});

// Create a theme instance.
const getTheme = (mode: PaletteMode) => {
  let theme = createTheme(getDesignTokens(mode));
  theme = responsiveFontSizes(theme);
  return theme;
};

export default getTheme;