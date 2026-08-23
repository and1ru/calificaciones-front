import type { subjectType } from "../../schemas/subject"
import { apiClient } from "../apliClient"
import { useAction } from "../useAction"

interface Response{
    message:string;
    success:boolean
}
export const useCreateSubject = () => {
    const { action, data, error, loading } = useAction<Response>()
    const createSubject = (body:subjectType) => {
        action(() => apiClient.post("subject", body))
    }

    return { createSubject, data, error, loading }
}