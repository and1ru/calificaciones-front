import { apiClient } from "../apliClient"
import { useAction } from "../useAction"

export const useLogOut = () => {
    const { action, data, error, loading } = useAction()
    const logOut = () => {
        action(() => apiClient.post("logOut"))
    }
    return { logOut, data, error, loading}
}