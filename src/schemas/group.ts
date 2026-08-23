import z from 'zod'

export const groupSchema = z.object({
    groupName: z.string().min(1),
    branchId: z.string()
})

export type groupType = z.infer<typeof groupSchema>