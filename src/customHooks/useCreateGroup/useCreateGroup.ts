import type { groupType } from "../../schemas/group"
import { apiClient } from "../apliClient"
import { useAction } from "../useAction"

interface Response{
    message:string,
    success:boolean
}

export const useCreateGroup = () => {
    const { action, data, error, loading } = useAction<Response>()
    const createGroup = (body: groupType) => {
        action(() => apiClient.post("group", body))
    }

    return { data, error, loading, createGroup }
}