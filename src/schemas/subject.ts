import z from 'zod'

export const subjectSchema = z.object({
    subjectName: z.string().min(1, "Subject Name is required")
})

export type subjectType = z.infer<typeof subjectSchema>