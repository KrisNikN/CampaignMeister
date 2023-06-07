import { z } from 'zod';

export const joinWaitListSchema = z.object({
  email: z.string({ invalid_type_error: '' }).nonempty().email(),
  agreeToTOS: z
    .boolean()
    .refine((value) => value === true, 'Trvqbva da e true'),
  newsLetter: z.boolean(),
});

export type JoinWaitListFormValues = z.infer<typeof joinWaitListSchema>;
