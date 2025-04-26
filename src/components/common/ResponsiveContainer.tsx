import React from 'react';
import { Container, Box, BoxProps } from '@mui/material';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface ResponsiveContainerProps extends BoxProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  maxWidth = 'lg',
  ...boxProps
}) => {
  const { isMobile } = useMediaQuery();

  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        padding: isMobile ? 1 : 2,
        transition: 'padding 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centraliza horizontalmente
        minHeight: '100%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1000px', // Limita a largura máxima para centralização
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centraliza o conteúdo internamente
          ...boxProps.sx,
        }}
        {...boxProps}
      >
        {children}
      </Box>
    </Container>
  );
};

export default ResponsiveContainer;
