import z from 'zod'

export const registerUserSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(8, "must be lenght 8"),
    connfirmPassword: z.string().min(8, "must be lenght 8"),
    role: z.enum(["student", "teacher", "admin"])
})

export type registerUserType = z.infer<typeof registerUserSchema>