import { useGet } from "../useGet"

interface Group{
    id: number;
    name: string;
    branch_id: number;
}

interface Branch{
    name: string;
    id:number
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