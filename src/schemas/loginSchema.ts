import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string({ invalid_type_error: '' }).nonempty().email(),
  password: z.string({ invalid_type_error: '' }).min(8).max(20),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
