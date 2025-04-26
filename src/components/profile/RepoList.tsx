import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Paper,
  Chip,
  Box,
  Link,
  Divider,
  useTheme,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import StarIcon from '@mui/icons-material/Star';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';
import { RepoListProps } from '../../types';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useMediaQuery();
  const theme = useTheme();

  const isSmallScreen = isMobile || isTablet;

  if (!repos || repos.length === 0) return null;

  return (
    <Paper
      sx={{
        width: '100%', // Ocupa toda a largura disponível
        maxWidth: 800, // Limita a largura máxima
        mx: 'auto',
        mt: 4,
        p: isSmallScreen ? 1.5 : 3,
        borderRadius: theme.shape.borderRadius,
        boxShadow: 2,
      }}
    >
      <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        gutterBottom
        sx={{
          mb: 3,
          fontWeight: 'bold',
          textAlign: 'center', // Sempre centralizado
        }}
      >
        {t('repos.title')}
      </Typography>

      {isSmallScreen ? (
        // Versão para Mobile/Tablet: Cards em Grid
        <Grid container spacing={2}>
          {repos.map((repo) => (
            <Grid item xs={12} key={repo.id}>
              <Card sx={{ mb: 1, boxShadow: 1 }}>
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'center' }}>
                    <BookIcon color="primary" sx={{ mr: 1, fontSize: '1.2rem' }} />
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                      }}
                    >
                      <Link
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textDecoration: 'none' }}
                      >
                        {repo.name}
                      </Link>
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, fontSize: '0.85rem', textAlign: 'center' }}
                  >
                    {repo.description || t('repos.noDescription')}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      justifyContent: 'center', // Centraliza chips
                    }}
                  >
                    {repo.language && (
                      <Chip
                        icon={<CodeIcon sx={{ fontSize: '0.8rem' }} />}
                        label={repo.language}
                        size="small"
                        sx={{ fontSize: '0.7rem', mr: 1 }}
                      />
                    )}

                    <Chip
                      icon={<StarIcon sx={{ fontSize: '0.8rem' }} />}
                      label={repo.stargazers_count.toString()}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: '0.7rem' }}
                    />
                    <Chip
                      icon={<CallSplitIcon sx={{ fontSize: '0.8rem' }} />}
                      label={repo.forks_count.toString()}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: '0.7rem' }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        // Versão para Desktop: Lista
        <List disablePadding>
          {repos.map((repo, index) => (
            <React.Fragment key={repo.id}>
              <ListItem
                sx={{
                  border: `1px solid ${theme.palette.divider}`,
                  mb: 2,
                  borderRadius: 1,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                    transform: 'translateY(-2px)',
                    boxShadow: 2,
                  },
                }}
              >
                <ListItemIcon>
                  <GitHubIcon color="action" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Link
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          fontWeight: 'bold',
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        {repo.name}
                      </Link>
                    </Box>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" component="span" display="block" sx={{ my: 1, textAlign: 'center' }}>
                        {repo.description || t('repos.noDescription')}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mt: 1, justifyContent: 'center' }}>
                        {repo.language && (
                          <Chip
                            label={repo.language}
                            size="small"
                            sx={{ fontSize: '0.7rem' }}
                          />
                        )}
                        <Chip
                          icon={<StarIcon sx={{ fontSize: '0.9rem' }} />}
                          label={repo.stargazers_count.toString()}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.7rem' }}
                        />
                        <Chip
                          icon={<CallSplitIcon sx={{ fontSize: '0.9rem' }} />}
                          label={repo.forks_count.toString()}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.7rem' }}
                        />
                      </Box>
                    </>
                  }
                />
              </ListItem>
              {index < repos.length - 1 && isSmallScreen && <Divider sx={{ mb: 2 }} />}
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default RepoList;
