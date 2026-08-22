import type { branchType } from "../../schemas/branch"
import { apiClient } from "../apliClient"
import { useAction } from "../useAction"

interface Response{
    message:string,
    success:boolean
}

export const useCreateBranch = () => {
    const { action, data, error, loading } = useAction<Response>()
    const createBranch = (body:branchType) => {
        action(() => apiClient.post("branch", body))
    }

    return { createBranch, data, error, loading }
}