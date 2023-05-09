import { z } from 'zod';

export const contactFormValidator = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(50),
  message: z.string().min(1),
});
