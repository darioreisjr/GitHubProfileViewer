import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Chip,
  Link,
  Divider,
  Avatar,
  useTheme,
  Paper,
  Button,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import LaunchIcon from '@mui/icons-material/Launch';
import { useTranslation } from 'react-i18next';
import { UserProfileProps } from '../../types';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const UserProfile: React.FC<UserProfileProps> = ({ userData }) => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useMediaQuery();
  const theme = useTheme();

  if (!userData) return null;

  // Determinar layout baseado no tamanho da tela
  const isSmallScreen = isMobile || isTablet;

  return (
    <Card
      sx={{
        width: '100%', // Ocupa toda a largura disponível
        maxWidth: 800, // Limita a largura máxima
        mx: 'auto',
        mt: 3,
        overflow: 'hidden',
        boxShadow: 3,
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <Grid container direction={isSmallScreen ? 'column' : 'row'}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', // Centraliza verticalmente
              p: isSmallScreen ? 2 : 0,
              backgroundColor: theme.palette.grey[50],
              height: isSmallScreen ? 'auto' : '100%',
            }}
          >
            {isSmallScreen ? (
              <Avatar
                src={userData.avatar_url}
                alt={userData.name || userData.login}
                sx={{
                  width: 120,
                  height: 120,
                  border: `3px solid ${theme.palette.background.paper}`,
                  boxShadow: 2,
                }}
              />
            ) : (
              <CardMedia
                component="img"
                image={userData.avatar_url}
                alt={userData.name || userData.login}
                sx={{
                  height: '100%',
                  objectFit: 'cover',
                  minHeight: 300,
                }}
              />
            )}
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <CardContent sx={{ p: isSmallScreen ? 2 : 3 }}>
            <Box sx={{ textAlign: 'center' }}> {/* Sempre centralizado */}
              <Typography
                gutterBottom
                variant={isSmallScreen ? "h5" : "h4"}
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                {userData.name || userData.login}
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                sx={{ mb: 2 }}
              >
                @{userData.login}
              </Typography>
            </Box>

            {userData.bio && (
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{
                  mb: 2,
                  textAlign: 'center', // Sempre centralizado
                  fontSize: isSmallScreen ? '0.875rem' : '1rem',
                }}
              >
                {userData.bio}
              </Typography>
            )}

            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              mb: 2,
              justifyContent: 'center', // Sempre centralizado
            }}>
              {userData.location && (
                <Chip
                  icon={<LocationOnIcon />}
                  label={userData.location}
                  variant="outlined"
                  size={isSmallScreen ? "small" : "medium"}
                  sx={{ mb: 1 }}
                />
              )}

              {userData.company && (
                <Chip
                  icon={<BusinessIcon />}
                  label={userData.company}
                  variant="outlined"
                  size={isSmallScreen ? "small" : "medium"}
                  sx={{ mb: 1 }}
                />
              )}

              {userData.email && (
                <Chip
                  icon={<EmailIcon />}
                  label={userData.email}
                  variant="outlined"
                  size={isSmallScreen ? "small" : "medium"}
                  sx={{ mb: 1 }}
                />
              )}

              {userData.blog && (
                <Chip
                  icon={<LinkIcon />}
                  label="Blog"
                  component="a"
                  href={userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  clickable
                  variant="outlined"
                  size={isSmallScreen ? "small" : "medium"}
                  sx={{ mb: 1 }}
                />
              )}
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{
              display: 'flex',
              justifyContent: 'center', // Sempre centralizado
              flexWrap: 'wrap',
              gap: 2,
              mb: 2,
            }}>
              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  textAlign: 'center',
                  minWidth: 80,
                  bgcolor: theme.palette.grey[50],
                  borderRadius: 2,
                  mb: isSmallScreen ? 1 : 0,
                  width: isSmallScreen ? '30%' : 'auto',
                }}
              >
                <Typography variant="h6">{userData.followers}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('profile.followers')}
                </Typography>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  textAlign: 'center',
                  minWidth: 80,
                  bgcolor: theme.palette.grey[50],
                  borderRadius: 2,
                  mb: isSmallScreen ? 1 : 0,
                  width: isSmallScreen ? '30%' : 'auto',
                }}
              >
                <Typography variant="h6">{userData.following}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('profile.following')}
                </Typography>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  textAlign: 'center',
                  minWidth: 80,
                  bgcolor: theme.palette.grey[50],
                  borderRadius: 2,
                  mb: isSmallScreen ? 1 : 0,
                  width: isSmallScreen ? '30%' : 'auto',
                }}
              >
                <Typography variant="h6">{userData.public_repos}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('profile.repos')}
                </Typography>
              </Paper>
            </Box>

            {userData.html_url && (
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size={isSmallScreen ? "small" : "medium"}
                  endIcon={<LaunchIcon />}
                  component={Link}
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: 4,
                    px: isSmallScreen ? 2 : 3,
                  }}
                >
                  {t('profile.viewOnGithub')}
                </Button>
              </Box>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UserProfile;
