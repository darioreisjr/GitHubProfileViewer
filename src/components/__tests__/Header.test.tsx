import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  it('renders correctly', () => {
    render(<Header />);

    // Verifica se o título está presente
    expect(screen.getByText('GitHub Profile Viewer')).toBeInTheDocument();

    // Verifica se o ícone está presente (pelo papel)
    const icon = document.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });
});