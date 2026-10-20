import z from 'zod'

export const branchSchema = z.object({
    branchName: z.string().min(1, "Branch Name is required"),
    branchAddress: z.string().min(1, "Branch Address is required"),
})

export type branchType = z.infer<typeof branchSchema>