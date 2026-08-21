import z from 'zod'

export const subjectSchema = z.object({
    subjectName: z.string("this field is required").min(1)
})

export type subjectType = z.infer<typeof subjectSchema>