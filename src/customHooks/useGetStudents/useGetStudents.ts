import { useGet } from "../useGet"

interface User {
    user_id: number;
    user_name: string;
    user_email:string
}

interface Result {
    message:string;
    success:boolean;
    result: User[]
}

export const useGetStudents = () => {
    const { data, error, loading } = useGet<Result>("students")
    return {data,error,loading}
}