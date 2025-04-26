import axios, { AxiosError } from 'axios';
import { GithubUserSchema, GithubReposSchema } from '../schemas/github';
import type { GithubUser, GithubRepo } from '../types';
import { z } from 'zod';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export interface GithubData {
  user: GithubUser;
  repos: GithubRepo[];
}

export const fetchUserData = async (username: string): Promise<GithubData> => {
  try {
    const userData = await api.get(`/users/${username}`);
    const reposData = await api.get(`/users/${username}/repos?sort=updated&per_page=5`);

    // Validando os dados com Zod
    const validatedUser = GithubUserSchema.parse(userData.data);
    const validatedRepos = GithubReposSchema.parse(reposData.data);

    return {
      user: validatedUser,
      repos: validatedRepos,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.format());
      throw new Error('Dados de resposta inválidos da API do GitHub');
    }

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 404) {
        throw new Error('Usuário não encontrado');
      }
      if (axiosError.response?.status === 403) {
        throw new Error('Limite de taxa da API excedido');
      }
    }

    throw error;
  }
};

export default api;