import type { schoolType } from "../../schemas/school"
import { apiClient } from "../apliClient"
import { useAction } from "../useAction"

interface Response {
    message:string;
    success:boolean
}

export const useCreateSchool = () => {
    const { action, data, error, loading } = useAction<Response>()
    const createSchool = (body:schoolType) => {
        action(() => apiClient.post("school",body))
    }

    return { createSchool, data, error, loading }
}