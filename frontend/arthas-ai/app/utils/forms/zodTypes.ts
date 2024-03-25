import z from "zod";

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export const registerSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export const forgotPasswordSchema = z.object({
	email: z.string().email(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
