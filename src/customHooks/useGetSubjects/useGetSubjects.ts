import { useGet } from "../useGet"

interface Subject{
    subject_id: number;
    subject_name: string;
}

interface Result{
    messsage: string;
    success: boolean
    result:Subject[]
}

export const useGetSubjects = () => {
    const { data, error, loading } = useGet<Result>("subjects")
    return { data, error, loading }
}