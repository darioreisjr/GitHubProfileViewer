import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import { fetchUserData } from '../github';

// Mock do axios
vi.mock('axios', () => ({
  default: {
    create: vi.fn(() => ({
      get: vi.fn()
    }))
  },
  isAxiosError: vi.fn()
}));

describe('GitHub Service', () => {
  const axiosMock = axios.create();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches user data successfully', async () => {
    // Mock de respostas
    const mockUserData = {
      data: {
        login: 'testuser',
        id: 1234,
        name: 'Test User',
        avatar_url: 'https://example.com/avatar.jpg',
        html_url: 'https://github.com/testuser',
        bio: 'Bio',
        company: 'Company',
        location: 'Location',
        email: null,
        public_repos: 10,
        public_gists: 5,
        followers: 20,
        following: 15,
        created_at: '2020-01-01T00:00:00Z',
        updated_at: '2020-01-01T00:00:00Z'
      }
    };

    const mockReposData = {
      data: [
        {
          id: 1,
          name: 'repo1',
          full_name: 'testuser/repo1',
          html_url: 'https://github.com/testuser/repo1',
          description: 'Description',
          fork: false,
          created_at: '2020-01-01T00:00:00Z',
          updated_at: '2020-01-01T00:00:00Z',
          pushed_at: '2020-01-01T00:00:00Z',
          language: 'JavaScript',
          stargazers_count: 10,
          watchers_count: 10,
          forks_count: 5,
          open_issues_count: 2
        }
      ]
    };

    // Configurar mocks
    axiosMock.get.mockResolvedValueOnce(mockUserData);
    axiosMock.get.mockResolvedValueOnce(mockReposData);

    // Executar a função
    const result = await fetchUserData('testuser');

    // Verificar resultados
    expect(result).toHaveProperty('user');
    expect(result).toHaveProperty('repos');
    expect(result.user.login).toBe('testuser');
    expect(result.repos).toHaveLength(1);
    expect(result.repos[0].name).toBe('repo1');
  });
});