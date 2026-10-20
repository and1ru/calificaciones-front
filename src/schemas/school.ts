import z from 'zod'

export const schoolSchema = z.object({
    schoolName: z.string().min(1,"school name is required"),
    schoolCity: z.string().min(1, "School City is required"),
    schoolAddress: z.string().min(1, "School Adress is required"),
    adminName: z.string().min(1,"Admin Name is required"),
    email: z.email("must be an email"),
    password: z.string().min(8,"Password must be at least 8 length"),
    confirmPassword: z.string().min(8,"Confrim Password must be at least 8 length")
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "no match password"
} )

export type schoolType = z.infer<typeof schoolSchema>