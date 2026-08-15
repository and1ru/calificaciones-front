import z from 'zod'

export const groupSchema = z.object({
    name: z.string(),
    teacher: z.string(),
    students: z.array()
})

export type groupType = z.infer<typeof groupSchema>