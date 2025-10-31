import { z } from 'zod';

export const cardSchema = z.object({
  title: z.preprocess((v) => (typeof v === 'string' ? v.trim() : v), z.string().min(1, { message: 'Title is required' }).max(100, { message: 'Title is too long' })),
  description: z.preprocess((v) => (typeof v === 'string' ? v.trim() : v), z.string().min(1, { message: 'Description is required' }).max(500, { message: 'Description is too long' })),
});

export const listSchema = z.object({
  title: z.preprocess((v) => (typeof v === 'string' ? v.trim() : v), z.string().min(1, { message: 'Title is required' }).max(50, { message: 'Title is too long' })),
});
