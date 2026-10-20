import z from 'zod'

export const userSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Must be an email"),
    password: z.string().min(8, "Password must be at least 8 length"),
    role: z.enum(["student", "teacher"])
})

export type userType = z.infer<typeof userSchema>