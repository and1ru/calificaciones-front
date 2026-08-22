import type { userType } from "../../schemas/user";
import { apiClient } from "../apliClient";
import { useAction } from "../useAction"

interface Response {
    message: string;
    success: boolean
}

export const useCreateUser = () => {
    const { action, data, error, loading } = useAction<Response>()
    const createUser = (body:userType) => {
        action(() => apiClient.post("user",body))
    }

    return { createUser, data, error, loading}
}