import { useGet } from "../useGet"

interface Auth{
    role:string;
    name:string
}
interface Response {
    success:boolean;
    message:string;
    auth:Auth
}

export const useAuth = () => {
    const { data, error, loading } = useGet<Response>("auth")
    return {data, error, loading}
}