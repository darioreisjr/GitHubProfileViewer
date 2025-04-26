import React from 'react';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface LoadingIndicatorProps {
  message?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ message }) => {
  const { t } = useTranslation();
  const { isMobile } = useMediaQuery();
  const theme = useTheme();

  const defaultMessage = t('common.loading');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
        gap: 2,
      }}
    >
      <CircularProgress
        size={isMobile ? 40 : 50}
        thickness={4}
        sx={{ color: theme.palette.primary.main }}
      />
      {(message || defaultMessage) && (
        <Typography
          variant={isMobile ? "body2" : "body1"}
          color="text.secondary"
        >
          {message || defaultMessage}
        </Typography>
      )}
    </Box>
  );
};

export default LoadingIndicator;
