import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
});

export const findUserByEmailSchema = z.object({
  params: z.object({
    email: z.string().email(),
  }),
});
