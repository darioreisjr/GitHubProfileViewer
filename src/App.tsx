import React from 'react';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          width: '100vw',
          flexDirection: 'column',
          minHeight: '100vh',
          alignItems: 'center', // Centraliza todo o conteúdo
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
    </ThemeProvider>
  );
};

export default App;
