import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
  it('renders correctly', () => {
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} isLoading={false} />);

    // Verifica se o input está presente
    expect(screen.getByPlaceholderText('Digite um nome de usuário do GitHub')).toBeInTheDocument();

    // Verifica se o botão de busca está presente
    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeInTheDocument();
  });

  it('calls onSearch when form is submitted', async () => {
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} isLoading={false} />);

    // Preenche o campo de busca
    const input = screen.getByPlaceholderText('Digite um nome de usuário do GitHub');
    await userEvent.type(input, 'testuser');

    // Submete o formulário
    const form = screen.getByRole('form');
    fireEvent.submit(form);

    // Verifica se a função onSearch foi chamada com o valor correto
    expect(handleSearch).toHaveBeenCalledWith('testuser');
  });

  it('disables input and button when loading', () => {
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} isLoading={true} />);

    // Verifica se o input está desabilitado
    const input = screen.getByPlaceholderText('Digite um nome de usuário do GitHub');
    expect(input).toBeDisabled();

    // Verifica se o botão está desabilitado
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    // Verifica se o spinner está visível
    const spinner = document.querySelector('circle');
    expect(spinner).toBeInTheDocument();
  });
});