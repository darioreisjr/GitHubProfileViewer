// Interfaces para os dados da API do GitHub
export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  language: string | null;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
}

// Interfaces para os componentes
export interface SearchBarProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

export interface UserProfileProps {
  userData: GithubUser | null;
}

export interface RepoListProps {
  repos: GithubRepo[];
}

export interface ErrorMessageProps {
  error: any;
}

// Interfaces responsivas
export interface ResponsiveProps {
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
}

// Tipo de tema
export interface CustomTheme {
  breakpoints: {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
  // Outras propriedades do tema...
}