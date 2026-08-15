import z from 'zod'

export const teacherSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string()
})

export type teacherType = z.infer<typeof teacherSchema>