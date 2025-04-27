import React from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import getTheme from './styles/theme';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import GitHubBackground from './components/common/GitHubBackground';

// Component that consumes the theme context
const ThemedApp: React.FC = () => {
  const { mode } = useTheme();
  
  // Generate the theme based on current mode
  const theme = getTheme(mode);
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GitHubBackground />
      <Box
        sx={{
          display: 'flex',
          width: '100vw',
          flexDirection: 'column',
          minHeight: '100vh',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Header />
        <Box
          sx={{
            maxWidth: 'xl',
            flex: 1,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
};

// Main App component that provides the theme context
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default App;