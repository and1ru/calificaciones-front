import { useGet } from "../useGet"

interface Group{
    group_name:string;
}

interface Subject{
    subject_name:string;
}

interface Response{
    message:string;
    success:boolean
    result:{ group_subject_id:number, group:Group, suject:Subject}[]
}
export const useGetGroupsTeacher = () => {
    const { data, error, loading } = useGet<Response>("group-teacher")
    return { data, error, loading }
}