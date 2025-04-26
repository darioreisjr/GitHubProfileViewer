import React from 'react';
import {
  Paper,
  InputBase,
  IconButton,
  Box,
  CircularProgress,
  FormHelperText,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { searchFormSchema, SearchFormInputs } from '../../schemas/form';
import { SearchBarProps } from '../../types';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const { t } = useTranslation();
  const { isMobile } = useMediaQuery();
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  const onSubmit = (data: SearchFormInputs) => {
    onSearch(data.username);
  };

  return (
    <Box
      sx={{
        p: isMobile ? 1 : 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centraliza horizontalmente
        width: '100%',
      }}
    >
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 500, // Limita a largura para centralização
          border: errors.username ? `1px solid ${theme.palette.error.main}` : 'none',
          boxShadow: 2,
          borderRadius: theme.shape.borderRadius,
          mx: 'auto', // Centraliza o elemento
        }}
        onSubmit={handleSubmit(onSubmit)}
        elevation={1}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            fontSize: isMobile ? '0.875rem' : '1rem',
            py: 1,
          }}
          placeholder={t('search.placeholder')}
          disabled={isLoading}
          {...register('username')}
          inputProps={{
            'aria-label': t('search.placeholder'),
          }}
        />
        <IconButton
          type="submit"
          disabled={isLoading}
          aria-label={t('search.button')}
          sx={{
            p: isMobile ? '8px' : '10px',
          }}
        >
          {isLoading ? <CircularProgress size={24} /> : <SearchIcon />}
        </IconButton>
      </Paper>
      {errors.username && (
        <FormHelperText
          error
          sx={{
            alignSelf: 'center', // Centraliza a mensagem de erro
            mt: 0.5,
            fontSize: isMobile ? '0.7rem' : '0.75rem',
            textAlign: 'center',
          }}
        >
          {errors.username.message}
        </FormHelperText>
      )}
    </Box>
  );
};

export default SearchBar;
