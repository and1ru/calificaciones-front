import { useEffect, useState } from "react"
import { apiClient } from "./apliClient"

export const useGet = <TResponse>(url:string) => {
    const [data, setData] = useState<TResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown>(null)

    const get = async () => {
        setError(null)
        setLoading(true)
        try {
            const request = await apiClient.get(url)
            console.log(request.data)
            setData(request.data)
        } catch (error) {
            setError(error)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=> {
        get()
    },[])

    return {data,loading,error}
}