import { create } from 'zustand';
import { fetchUserData } from '../services/github';
import type { GithubUser, GithubRepo } from '../types';

interface GithubState {
  user: GithubUser | null;
  repos: GithubRepo[];
  isLoading: boolean;
  error: any;
  searchUsername: (username: string) => Promise<void>;
  reset: () => void;
}

export const useGithubStore = create<GithubState>((set) => ({
  user: null,
  repos: [],
  isLoading: false,
  error: null,

  searchUsername: async (username: string) => {
    set({ isLoading: true, error: null });

    try {
      const data = await fetchUserData(username);
      set({ user: data.user, repos: data.repos, isLoading: false });
    } catch (err) {
      set({ error: err, isLoading: false, user: null, repos: [] });
    }
  },

  reset: () => {
    set({ user: null, repos: [], error: null, isLoading: false });
  },
}));