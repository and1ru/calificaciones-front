import z from 'zod'

export const studentSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string()
})

export type studentType = z.infer<typeof studentSchema>