import z from 'zod'

export const schoolSchema = z.object({
    schoolName: z.string(),
    adminName: z.string(),
    email: z.email(),
    password: z.string(),
    confirmPassword: z.string()
})

export type schoolType = z.infer<typeof schoolSchema>