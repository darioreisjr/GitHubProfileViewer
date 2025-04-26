import { useMediaQuery as useMuiMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const useMediaQuery = () => {
  const theme = useTheme();

  return {
    isMobile: useMuiMediaQuery(theme.breakpoints.down('sm')),
    isTablet: useMuiMediaQuery(theme.breakpoints.between('sm', 'md')),
    isDesktop: useMuiMediaQuery(theme.breakpoints.up('md')),
    isLargeDesktop: useMuiMediaQuery(theme.breakpoints.up('lg')),
  };
};
