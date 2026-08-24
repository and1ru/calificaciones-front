import { useGet } from "../useGet"

interface Group{
    group_id: number;
    group_name: string;
    branch_id: number;
}

interface Branch{
    branch_name: string;
    branch_id:number
    groups: Group[]
}

interface Response {
    message: string;
    success: boolean;
    result: Branch[]
}
export const useGetGroups = () => {
    const { data, error, loading } = useGet<Response>("groups")
    return { data, error, loading }
}