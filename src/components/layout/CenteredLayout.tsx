import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface CenteredLayoutProps extends BoxProps {
  children: React.ReactNode;
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({
  children,
  ...boxProps
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        ...boxProps.sx,
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default CenteredLayout;
