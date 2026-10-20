import z from 'zod'

export const groupSchema = z.object({
    groupName: z.string().min(1, "Group Name is required"),
    branchId: z.string().min(1, "Branch is required")
})

export type groupType = z.infer<typeof groupSchema>