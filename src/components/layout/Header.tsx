import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  Container,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import LanguageSelector from '../ui/LanguageSelector';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile } = useMediaQuery();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Test Page', path: '/test' },
  ];

  const drawer = (
    <Box sx={{ width: 250, p: 2, border: "1px solid white" }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">{t('app.title')}</Typography>
        <IconButton onClick={() => toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={() => toggleDrawer(false)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ p: 2 }}>
        <LanguageSelector fullWidth />
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={2}
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <GitHubIcon sx={{ mr: 2 }} />
            <Typography
              variant={isMobile ? "subtitle1" : "h6"}
              component="div"
              noWrap
            >
              {t('app.title')}
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  component={RouterLink}
                  to={item.path}
                >
                  {item.text}
                </Button>
              ))}
              <LanguageSelector />
            </Box>
          )}

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
