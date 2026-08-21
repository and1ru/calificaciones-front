import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { useState } from "react"

interface UseAction<TResponse>{
    data: TResponse | null;
    loading: boolean;
    error: AxiosError | null;
    action: (fn: () => Promise<AxiosResponse<TResponse>>) => Promise<void>
}

export const useAction = <TResponse>():UseAction<TResponse> => {
    const [data, setData] = useState<TResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<AxiosError | null>(null)

    const action = async (fn: () => Promise<AxiosResponse<TResponse>>):Promise<void> => {
        setError(null)
        setLoading(true)
        try {
            const request = await fn()
            setData(request.data)
        } catch (error) {
            console.error(error)
            if(axios.isAxiosError(error)){
                setError(error)
            }
        } finally {
            setLoading(false)
        }
    }

    return {data,loading,error, action}
}