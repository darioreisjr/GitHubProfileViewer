import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Typography,
  Box,
} from '@mui/material';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface LanguageSelectorProps {
  fullWidth?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ fullWidth = false }) => {
  const { i18n } = useTranslation();
  const { isMobile } = useMediaQuery();

  const changeLanguage = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  // Mapeia códigos de idioma para nomes legíveis
  const languageNames: Record<string, string> = {
    en: 'English',
    pt: 'Português',
    es: 'Español',
  };

  return (
    <FormControl
      variant="outlined"
      size={isMobile ? "small" : "medium"}
      sx={{
        minWidth: isMobile ? 100 : 120,
        width: fullWidth ? '100%' : 'auto',
      }}
    >
      <InputLabel
        id="language-select-label"
        sx={{ fontSize: isMobile ? '0.75rem' : '0.875rem' }}
      >
        {isMobile ? 'Lang' : 'Language'}
      </InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={i18n.language}
        onChange={changeLanguage}
        label={isMobile ? 'Lang' : 'Language'}
        sx={{ fontSize: isMobile ? '0.75rem' : '0.875rem' }}
      >
        {Object.entries(languageNames).map(([code, name]) => (
          <MenuItem key={code} value={code}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2">
                {name}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
