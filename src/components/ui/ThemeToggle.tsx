import React, { useState } from 'react';
import { IconButton, Tooltip, useTheme as useMuiTheme, Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

interface ThemeToggleProps {
  size?: 'small' | 'medium' | 'large';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ size = 'medium' }) => {
  const { mode, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const muiTheme = useMuiTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    toggleTheme();
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <Tooltip 
      title={mode === 'light' ? t('theme.switchToDark') : t('theme.switchToLight')} 
      arrow
    >
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        {/* Ripple effect */}
        {isAnimating && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '50%',
              animation: 'ripple 0.6s ease-out',
              backgroundColor: mode === 'light' 
                ? 'rgba(0, 0, 0, 0.1)' 
                : 'rgba(255, 255, 255, 0.1)',
              zIndex: 0,
              '@keyframes ripple': {
                '0%': {
                  transform: 'scale(1)',
                  opacity: 1,
                },
                '100%': {
                  transform: 'scale(2.5)',
                  opacity: 0,
                },
              },
            }}
          />
        )}
        
        <IconButton
          onClick={handleClick}
          size={size}
          color="inherit"
          aria-label={mode === 'light' ? t('theme.switchToDark') : t('theme.switchToLight')}
          sx={{
            transition: 'all 0.3s ease',
            border: '2px solid transparent',
            borderRadius: '50%',
            position: 'relative',
            zIndex: 1,
            '&:hover': {
              color: mode === 'light' ? muiTheme.palette.primary.main : '#ffd54f',
            },
            '&:active': {
              border: mode === 'light' 
                ? '2px solid rgba(0, 0, 0, 0.3)' 
                : '2px solid rgba(255, 255, 255, 0.3)',
              transform: 'scale(0.9)',
            },
          }}
        >
          {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>
    </Tooltip>
  );
}

export default ThemeToggle;