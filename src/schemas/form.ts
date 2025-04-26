import { z } from 'zod';

export const searchFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Username is required' })
    .max(39, { message: 'GitHub username cannot exceed 39 characters' })
    .regex(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, {
      message: 'Invalid GitHub username format'
    })
});

export type SearchFormInputs = z.infer<typeof searchFormSchema>;
