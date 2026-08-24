import { apiClient } from "../apliClient"
import { useAction } from "../useAction"

interface Response {
    success:boolean
    message: string;
}

export const useCreateAssignment = () => {
    const { action, data, error, loading } = useAction<Response>()
    const createAssignment = (body:any) => {
        action(() => apiClient.post("assignment", body))
    }

    return { createAssignment, data, error, loading}
}