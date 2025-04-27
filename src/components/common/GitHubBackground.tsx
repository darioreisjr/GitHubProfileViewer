import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useTheme as useCustomTheme } from '../../contexts/ThemeContext';

const GitHubBackground: React.FC = () => {
  const muiTheme = useTheme();
  const { mode } = useCustomTheme();
  
  // GitHub easter egg objects
  const easterEggs = [
    { icon: '{}', tooltip: 'Code Block' },
    { icon: '<>', tooltip: 'HTML Tag' },
    { icon: '⭐', tooltip: 'Star' },
    { icon: '🍴', tooltip: 'Fork' },
    { icon: '⚙️', tooltip: 'Settings' },
    { icon: '🐙', tooltip: 'Octocat' },
    { icon: '📦', tooltip: 'Package' },
    { icon: '#️⃣', tooltip: 'Issue' },
    { icon: '🔄', tooltip: 'Pull Request' },
    { icon: '📝', tooltip: 'Commit' },
    { icon: '</>', tooltip: 'Code' },
    { icon: '🐛', tooltip: 'Bug' },
    { icon: '🚀', tooltip: 'Deploy' },
    { icon: '🌿', tooltip: 'Branch' },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* Background color overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 
            mode === 'light' 
              ? 'rgba(246, 248, 250, 0.8)' 
              : 'rgba(13, 17, 23, 0.8)',
          transition: 'background-color 0.3s ease',
        }}
      />

      {/* GitHub easter eggs */}
      {easterEggs.map((egg, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            color: mode === 'light' 
              ? 'rgba(43, 49, 55, 0.1)' 
              : 'rgba(200, 225, 255, 0.07)',
            fontSize: `${Math.random() * 2 + 1}rem`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: 0.7,
            userSelect: 'none',
            transition: 'color 0.3s ease',
            animation: `float ${Math.random() * 20 + 40}s linear infinite`,
            '@keyframes float': {
              '0%': {
                transform: `translate(0, 0) rotate(${Math.random() * 360}deg)`,
              },
              '50%': {
                transform: `translate(${Math.random() * 100 - 50}px, ${
                  Math.random() * 100 - 50
                }px) rotate(${Math.random() * 360}deg)`,
              },
              '100%': {
                transform: `translate(0, 0) rotate(${Math.random() * 360}deg)`,
              },
            },
          }}
          title={egg.tooltip}
        >
          {egg.icon}
        </Box>
      ))}

      {/* Grid pattern overlay - GitHub contribution graph inspired */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 
            mode === 'light'
              ? `radial-gradient(rgba(43, 49, 55, 0.05) 1px, transparent 1px)`
              : `radial-gradient(rgba(200, 225, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          opacity: 0.5,
        }}
      />
    </Box>
  );
};

export default GitHubBackground;