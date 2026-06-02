import z from 'zod'

export const loginSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
    role: z.enum(["student", "teacher"])
})

export type loginType = z.infer<typeof loginSchema>