import { z } from 'zod';

// Schema de validação para o usuário do GitHub
export const GithubUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  avatar_url: z.string().url(),
  html_url: z.string().url(),
  name: z.string().nullable(),
  company: z.string().nullable(),
  blog: z.string().nullable(),
  location: z.string().nullable(),
  email: z.string().email().nullable(),
  bio: z.string().nullable(),
  public_repos: z.number(),
  public_gists: z.number(),
  followers: z.number(),
  following: z.number(),
  created_at: z.string(),
  updated_at: z.string()
});

// Schema de validação para o repositório do GitHub
export const GithubRepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  html_url: z.string().url(),
  description: z.string().nullable(),
  fork: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
  pushed_at: z.string(),
  language: z.string().nullable(),
  stargazers_count: z.number(),
  watchers_count: z.number(),
  forks_count: z.number(),
  open_issues_count: z.number()
});

// Arrays de schemas
export const GithubReposSchema = z.array(GithubRepoSchema);

// Tipo inferido do schema
export type GithubUserSchemaType = z.infer<typeof GithubUserSchema>;
export type GithubRepoSchemaType = z.infer<typeof GithubRepoSchema>;