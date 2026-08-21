import z from 'zod'

export const groupSchema = z.object({
    GroupName: z.string(),
})

export type groupType = z.infer<typeof groupSchema>