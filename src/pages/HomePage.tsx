import React from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useGithubStore } from '../store/useGithubStore';
import SearchBar from '../components/search/SearchBar';
import UserProfile from '../components/profile/UserProfile';
import RepoList from '../components/profile/RepoList';
import ErrorMessage from '../components/ui/ErrorMessage';
import LoadingIndicator from '../components/common/LoadingIndicator';
import ResponsiveContainer from '../components/common/ResponsiveContainer';
import { useMediaQuery } from '../hooks/useMediaQuery';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { user, repos, isLoading, error, searchUsername } = useGithubStore();
  const { isMobile } = useMediaQuery();
  const theme = useTheme();

  const handleSearch = (username: string) => {
    searchUsername(username);
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)', // Altura total menos o header
        bgcolor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centralização horizontal
        width: '100%',
      }}
    >
      <ResponsiveContainer>
        <Box
          sx={{
            py: isMobile ? 2 : 4,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Centralização do conteúdo
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: isMobile ? 2 : 3,
              mb: 4,
              textAlign: 'center',
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.paper,
              boxShadow: 1,
              width: '100%', // Ocupa toda a largura disponível
              maxWidth: '800px', // Limita a largura máxima
            }}
          >
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}
            >
              {t('app.title')}
            </Typography>

            <Typography
              variant={isMobile ? "body2" : "body1"}
              color="text.secondary"
              paragraph
              sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}
            >
              {t('app.description')}
            </Typography>

            <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          </Paper>

          <ErrorMessage error={error} />

          {isLoading && (
            <Box sx={{ mt: 4, width: '100%', display: 'flex', justifyContent: 'center' }}>
              <LoadingIndicator message={t('search.searching')} />
            </Box>
          )}

          {!isLoading && user && (
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <UserProfile userData={user} />
              <RepoList repos={repos} />
            </Box>
          )}

          {!isLoading && !user && !error && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                py: 6,
                px: 2,
                maxWidth: '600px',
                width: '100%',
              }}
            >
              <Typography
                variant={isMobile ? "h6" : "h5"}
                component="div"
                color="text.secondary"
                sx={{ textAlign: 'center', mb: 1 }}
              >
                {t('search.initialMessage')}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: 'center' }}
              >
                {t('search.initialHelp')}
              </Typography>
            </Box>
          )}
        </Box>
      </ResponsiveContainer>
    </Box>
  );
};

export default HomePage;
