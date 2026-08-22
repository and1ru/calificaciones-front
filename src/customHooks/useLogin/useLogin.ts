import type { loginType } from "../../schemas/login"
import { apiClient } from "../apliClient"
import { useAction } from "../useAction"

interface Response {
    success:boolean;
    message:string;
}

export const useLogin = () => {
    const { action, data, error, loading } = useAction<Response>()
    const login = (body:loginType) => {
        action(() => apiClient.post("login", body))
    }

    return {login, data, error, loading}
}