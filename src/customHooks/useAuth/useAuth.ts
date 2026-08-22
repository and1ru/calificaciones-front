import { useGet } from "../useGet"

interface Response {
    success:boolean;
    message:string;
    role: string
}

export const useAuth = () => {
    const { data, error, loading } = useGet<Response>("auth")
    return {data, error, loading}
}