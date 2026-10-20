import z from 'zod'

export const loginSchema = z.object({
    email: z.email("must be an email").min(1, "Email is required"),
    password: z.string().min(8, "Password must be 8 lenght"),
})

export type loginType = z.infer<typeof loginSchema>