import React from 'react';
import { Alert, Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ErrorMessageProps } from '../../types';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  const { t } = useTranslation();
  const { isMobile } = useMediaQuery();
  const theme = useTheme();

  if (!error) return null;

  let message = t('error.generic');

  if (error instanceof Error) {
    if (error.message.includes('not found')) {
      message = t('error.notFound');
    } else if (error.message.includes('rate limit')) {
      message = t('error.rateLimit');
    } else {
      message = error.message;
    }
  } else if (typeof error === 'string') {
    message = error;
  }

  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: 'auto',
        mt: 2,
        px: isMobile ? 1 : 0,
      }}
    >
      <Alert
        severity="error"
        sx={{
          borderRadius: theme.shape.borderRadius,
          fontSize: isMobile ? '0.8rem' : '0.875rem',
        }}
      >
        <Typography
          variant={isMobile ? "body2" : "body1"}
          sx={{ fontWeight: isMobile ? 400 : 500 }}
        >
          {message}
        </Typography>
      </Alert>
    </Box>
  );
};

export default ErrorMessage;
