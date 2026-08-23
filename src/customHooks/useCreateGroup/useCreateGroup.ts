import type { groupType } from "../../schemas/group"
import { apiClient } from "../apliClient"
import { useAction } from "../useAction"

export const useCreateGroup = () => {
    const { action, data, error, loading } = useAction()
    const createGroup = (body:groupType) => {
        action(() => apiClient.post("group", body))
    }

    return {data,error,loading,createGroup}
}