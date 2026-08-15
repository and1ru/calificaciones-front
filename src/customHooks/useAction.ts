import { useState } from "react"
import type { AxiosResponse } from "axios";

interface UseAction<TResponse>{
    data: TResponse | null;
    loading: boolean;
    error: unknown;
    action: () => Promise<void>
}

export const useAction = <TResponse>(fn: () => Promise<AxiosResponse<TResponse>>):UseAction<TResponse> => {
    const [data, setData] = useState<TResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown>(null)

    const action = async () => {
        setError(null)
        setLoading(true)
        try {
            const request = await fn()
            setData(request.data)
        } catch (error) {
            setError(error)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return {data,loading,error, action

    }
}