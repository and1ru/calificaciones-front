import { useGet } from "../useGet"

interface User {
    user_id: number;
    user_name: string;
}

interface Result {
    message:string;
    success:boolean;
    result: User[]
}

export const useGetTeacher = () => {
    const { data, error, loading } = useGet<Result>("teachers")
    return {data,error,loading}
}