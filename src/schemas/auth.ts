import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(6, 'Username must be at least 6 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters')
});

export const registerSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  username: z.string().min(6, 'Username must be at least 6 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;