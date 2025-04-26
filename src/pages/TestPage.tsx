import React from 'react';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useGithubStore } from '../store/useGithubStore';

const TestPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { searchUsername, reset } = useGithubStore();

  // Funções de teste
  const testInternationalization = () => {
    const languages = ['en', 'pt', 'es'];
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex]);
  };

  const testZustand = () => {
    searchUsername('octocat');
  };

  const testReset = () => {
    reset();
  };

  return (
    <Container maxWidth="xl" sx={{ m: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Testing Page
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Internationalization Test
          </Typography>
          <Typography paragraph>
            Current language: {i18n.language}
          </Typography>
          <Typography paragraph>
            Translated text: {t('app.title')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={testInternationalization}
          >
            Change Language
          </Button>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Zustand State Management Test
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={testZustand}
            sx={{ mr: 2 }}
          >
            Load Octocat
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={testReset}
          >
            Reset State
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default TestPage;
